(ns lomakkeet.datepicker
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :refer [dispatch]]
            [goog.string :as gs]
            cljsjs.pikaday.with-moment))

(defn jsdate->local-date [v]
  (if v
    (doto (goog.date.Date.)
      (.setYear (.getFullYear v))
      (.setMonth (.getMonth v))
      (.setDate (.getDate v)))))

(defn local-date->jsdate [v]
  (if v
    (doto (js/Date.)
      (.setYear (.getFullYear v))
      (.setMonth (.getMonth v))
      (.setDate (.getDate v))
      (.setHours 0)
      (.setMinutes 0)
      (.setSeconds 0))))

(defn date->str [v]
  (if v
    (gs/format "%d.%d.%d" (.getDate v) (inc (.getMonth v)) (.getFullYear v))))

(defn date* [form {:keys [ks datepicker-i18n]}]
  (let [el (atom nil)
        value (reaction (get-in (:lomakkeet.core/value @form) ks))]
    (reagent/create-class
      {:component-did-mount
       (fn [this]
         (reset! el (js/Pikaday. (-> {:field (reagent/dom-node this)
                                      ; NOTE: This requires MomentJS
                                      :format "D.M.YYYY"
                                      :firstDay 1
                                      :onSelect #(dispatch [:update-value {:ks ks :value (jsdate->local-date %)}])}
                                     (cond-> datepicker-i18n (assoc :i18n datepicker-i18n))
                                     clj->js))))
       :reagent-render
       (fn []
         [:input.form-control
          {:type "text"
           :value (or (date->str @value) "")
           ; To silence reagent warnings
           :on-change identity}])})))
