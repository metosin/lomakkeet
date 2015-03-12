(ns lomakkeet.autocomplete
  (:require-macros lomakkeet.autocomplete
                   [cljs.core.async.macros :refer [go]])
  (:require [clojure.string :as string]
            [cljs.core.async :refer [put! chan]]
            [reagent.core :as reagent :refer [atom]]
            [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :refer [dispatch]]
            goog.events
            [lomakkeet.core :as f]
            [lomakkeet.util :refer [debounce]]))

(defn normalize [s]
  ; FIXME:
  (some-> s string/lower-case #_remove-accents))

(defn highlight-string [s query]
  ; FIXME: If normalized strings length is different, this will break!
  (if query
    (loop [rst s
           r [:span]]
      ; Find first matching term
      (let [[i match]
            (reduce (fn [[i :as acc] term]
                      (let [x (.indexOf (normalize rst) term)]
                        (if (and (not= x -1) (or (= i -1) (< x i)))
                          [x (subs rst x (+ x (count term)))]
                          acc)))
                    [-1 nil]
                    query)
            pre (subs rst 0 i)]
        (if (not= i -1)
          (recur (subs rst (+ i (count match)))
                 (if (seq pre)
                   (conj r pre [:span.highlight match])
                   (conj r [:span.highlight match])))
          (if (seq rst)
            (conj r rst)
            r))))
    [:span s]))

(defn- query-match? [term-match? v query]
  (every? (partial term-match? v) query))

(defn matches [term-match? v query]
  (let [m (group-by (partial term-match? v) query)]
    [(get m true) (get m false)]))

(defn ->query [search]
  (some-> search
    (.toLowerCase)
    (.split #" ")
    (->> (remove empty?))))

(defn filter-results [term-match? items query]
  (if query
    (filter #(query-match? term-match? % query) items)
    items))

(defn renderer
  [coll query cb {:keys [item->key item->text]}]
  {:pre [(ifn? item->key) (ifn? item->text)]}
  [:div
   (doall
     (for [item @coll]
       [:div
        {:key (item->key item)
         :on-click #(cb (item->key item))
         :data-selectable true}
        (highlight-string (item->text item) @query)]))])

(defn blur [open? search e]
  (when (.-relatedTarget e)
    (reset! open? false)
    (reset! search nil))
  true)

(defn click [open? e]
  (reset! open? true)
  (.stopPropagation e)
  true)

(defn focus [open? input _]
  (if-not @open?
    (reset! input ""))
  (reset! open? true)
  true)

(defn change [search e]
  (reset! search (.. e -target -value))
  true)

; Uses selectize styles
(defn autocomplete*
  [form {:keys [ks value->text loading-el load-items term-match?]
         :or {value->text identity
              loading-el [:div "Loading..."]}
         :as opts}]
  (let [open? (atom false)
        search (atom nil)
        items (atom nil)
        value (reaction (get-in (:lomakkeet.core/value @form) ks))

        ; FIXME: Close?
        search-chan (chan)
        delayed-search (debounce search-chan 200)
        query (atom nil)

        results (reaction (filter-results term-match? @items @query))]
    (swap! items load-items)
    (go
      (loop []
        (let [x (<! delayed-search)]
          (when x
            (reset! query (->query x))
            (recur)))))
    (fn []
      [:div.selectize-control.single
       [:input.selectize-input
        {:on-focus  (partial focus open? search)
         :on-blur   (partial blur open? search)
         :on-click  (partial click open?)
         :on-change (fn [e]
                      (let [v (.. e -target -value)]
                        (reset! search v)
                        (put! search-chan v)))
         :value (cond
                  @search @search
                  (seq @value) (value->text @value)
                  :else "")
         :class (if @open? "input-active dropdown-active")
         :auto-complete false}]
       (when @open?
         [:div.selectize-dropdown.single
          [:div.selectize-dropdown-content
           [renderer results query
            (fn [id]
              (dispatch [:update-value {:ks ks :value id}])
              (reset! open? false))
            opts]]])])))
