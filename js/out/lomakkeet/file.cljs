(ns lomakkeet.file
  (:require [goog.string :as gs]
            [goog.dom :as dom]
            [reagent.core :as reagent]
            [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :refer [dispatch]]))

(defn humanize-filesize
  [bytes & [fmt]]
  (let [units ["bytes" "kB" "MB" "GB" "TB" "PB"]
        unit (js/Math.floor (/ (js/Math.log bytes) (js/Math.log 1000)))
        size (/ bytes (js/Math.pow 1000 unit))]
    (gs/format (or fmt "%0.1f %s") size (get units unit))))

(defn file* [form {:keys [ks file-select-label]
                   :or {file-select-label "Select file"}}]
  (let [this (reagent/current-component)
        value (reaction (get-in (:lomakkeet.core/value @form) ks))]
    (fn []
      [:div
       [:input
        {:style {:display "none"}
         :type "file"
         :on-change (fn [e]
                      (if-let [file (.item e.target.files 0)]
                        (dispatch [:update-value {:ks ks :value file}])))}]
       [:button.btn.btn-primary
        {:type "button"
         :on-click #(-> (reagent/dom-node this)
                        (.getElementsByTagName "input")
                        (.item 0)
                        (.click))}
        file-select-label]
       ; FIXME: emptyable-input?
       [:button.btn.btn-default
        {:type "button"
         :on-click #(dispatch [:update-value {:ks ks :value nil}])}
        "×"]
       (if @value
         [:span.selected-file
          " " (.-name @value) ", " (humanize-filesize (.-size @value))])])))
