(ns lomakkeet.core
  (:require [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :refer [dispatch subscribe]]
            [schema.core :as s]
            [schema.coerce :as sc]
            [schema.utils :as su]
            [schema-tools.core :as st]
            [lomakkeet.util :refer [dissoc-in]]
            [lomakkeet.datepicker :as d]
            [lomakkeet.file :as f]))

;; EMPTYABLE INPUT

; (defn- empty-cb [{:keys [ch ks]}]
;   (fn [e]
;     (put! ch {:type :change
;               :value nil
;               :ks ks})))

; (defcomponent emptyable-input
;   [state
;    owner
;    {:keys [real-input] :as opts}]
;   (render-state [_ s]
;     (html
;       [:div.input-group
;        (om/build real-input state {:opts opts :state s})
;        [:span.input-group-btn
;         [:button.btn.btn-default
;          {:type "button"
;           :on-click (empty-cb opts)}
;          "×"]]])))

;; FORM GROUP ("bootstrap")

(defn default-form-group
  [form real-el
   {:keys [ks input label label-separator size help-text]
    :or {size 6 label-separator ":"}
    :as opts}]
  (let [error (reaction (get-in (::errors @form) ks))]
    (fn []
      [:div.form-group
       {:class (cond-> ""
                 @error (str " has-error")
                 size (str " col-md-" size))}
       [:label label label-separator]
       [real-el form opts]
       (if help-text
         [:span.help-block help-text])
       (if @error
         [:span.help-block (str @error)])])))

;; BASIC INPUTS

(defn input-input [value cb]
  [:input.form-control
   {:type "text"
    :value (or value "")
    :on-change cb}])

(defn input-textarea [value cb]
  [:textarea.form-control
   {:value (or value "")
    :on-change cb}])

(defn input-static [value cb]
  [:p.form-control-static
   value])

(defn input*
  [form {:keys [ks transform-value el]
         :or {transform-value identity
              el input-input}}]
  (let [value (reaction (get-in (::value @form) ks))]
    (fn []
      (el (transform-value @value) #(dispatch [:update-value {:ks ks :value (.. % -target -value)}])))))

(defn input
  [form label ks & [opts]]
  (default-form-group form input* (assoc opts :label label :ks ks)))

(defn textarea
  [form label ks & [opts]]
  (default-form-group form input* (assoc opts :el input-textarea :label label :ks ks)))

(defn static
  [form label ks & [opts]]
  (default-form-group form input* (assoc opts :el input-static :label label :ks ks)))

;; CHECKBOX

(defn checkbox*
  [form {:keys [ks]}]
  (let [value (reaction (get-in (::value @form) ks))]
    (fn []
      [:input
       {:type "checkbox"
        :checked (boolean @value)
        :on-change #(dispatch [:update-value {:ks ks :value (.. % -target -checked)}])}])))

(defn checkbox
  [form label ks & [opts]]
  (default-form-group form checkbox* (assoc opts :label label :ks ks)))

;; SELECT

(defn select*
  [form {:keys [ks options]}]
  (let [value (reaction (get-in (::value @form) ks))]
    (fn []
      [:select.form-control
       {:value @value
        :on-change #(dispatch [:update-value {:ks ks :value (.. % -target -value)}])}
       (cond
         (map? options)
         (for [[k v] options]
           [:option {:value k :key v} v]))])))

(defn select
  [form label ks options & [opts]]
  (default-form-group form select* (assoc opts :label label :ks ks :options options)))

;; Datepicker

(defn date
  [form label ks & [opts]]
  (default-form-group form d/date* (assoc opts :label label :ks ks)))

(defn file
  [form label ks & [opts]]
  (default-form-group form f/file* (assoc opts :label label :ks ks)))

;; FORM

(defn- coerce [coercion-matcher schema value]
  (if schema
    (let [coerced ((sc/coercer schema coercion-matcher) value)]
      (if (su/error? coerced)
        value
        coerced))
    value))

(s/defschema FormState
  {::value s/Any
   ::initial-value s/Any
   ::errors s/Any
   ::schema s/Any
   s/Keyword s/Any})

(defn ->fs
  ([value] (->fs value nil))
  ([value schema]
   {::value value
    ::initial-value value
    ::errors (if schema (s/check schema value))
    ::schema schema}))

(defn cancel-form [fs]
  (assoc fs ::value (::initial-value fs)))

(defn save-form
  [fs value]
  (let [schema (::schema fs)]
    (assoc fs
           ::value value
           ::initial-value value
           ::errors (if schema (s/check schema value)))))

(defn update-form
  [fs f & args]
  (let [value (::value fs)
        new-value (apply f value args)]
    (save-form fs new-value)))

(defn update-value
  [fs ks v]
  (let [schema (st/get-in (::schema fs) ks)
        v (coerce sc/json-coercion-matcher schema v)]
    (if v
      (update-form fs assoc-in ks v)
      (let [parent-schema (st/get-in (::schema fs) (butlast ks))]
        (if (contains? parent-schema (s/optional-key (last ks)))
          (update-form fs dissoc-in ks)
          (update-form fs assoc-in ks v))))))

(defn dirty? [fs]
  (not= (::value fs) (::initial-value fs)))

(defn errors? [fs]
  (seq (::errors fs)))
