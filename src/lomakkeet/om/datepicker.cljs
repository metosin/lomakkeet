(ns lomakkeet.om.datepicker
  (:require [om.core :as om :include-macros true]
            [sablono.core :refer-macros [html]]
            [goog.string :as gs]
            [lomakkeet.action :refer [action!]]
            [lomakkeet.date :refer [date->str jsdate->local-date]]
            cljsjs.pikaday.with-moment))

(defn- set-limit-date [k owner]
  (let [el (om/get-state owner :el)
        fn-name  (get {:min-date "setMinDate"
                       :max-date "setMaxDate"} k)
        v (om/get-state owner k)]
    (if v
      (.call (aget el fn-name) el v))))

(defn date*
  [{:keys [value]}
   owner
   {:keys [form ch ks datepicker-i18n]
    :as opts}]
  (reify
    om/IDisplayName
    (display-name [_] "date*")
    om/IInitState
    (init-state [_]
      {:val nil})
    om/IDidMount
    (did-mount [_]
      (let [input (om/get-node owner "input")
            el (js/Pikaday. (-> {:field input
                                 ; NOTE: This requires MomentJS
                                 :format "D.M.YYYY"
                                 :firstDay 1
                                 :onSelect (fn [v]
                                             (action! form {:type :change
                                                            :ks ks
                                                            :value (jsdate->local-date v)}))}
                                (cond-> datepicker-i18n (assoc :i18n datepicker-i18n))
                                clj->js))]
        (om/set-state! owner :el el)
        (set-limit-date :min-date owner)
        (set-limit-date :max-date owner)))
    om/IDidUpdate
    (did-update [_ prev _]
      (let [props (om/get-state owner)]
        (if (not= (:min-date props) (:min-date prev))
          (set-limit-date :min-date owner))
        (if (not= (:max-date props) (:max-date prev))
          (set-limit-date :max-date owner))))
    om/IRenderState
    (render-state [_ {:keys [val]}]
      (html
        [:input.form-control
         {:ref "input"
          :type "text"
          :value (or val (date->str value) "")
          :on-change #(om/set-state! owner :val (.. % -target -value))
          :on-key-press (fn [e]
                          (let [k (.-key e)]
                            (when (= "Enter" k)
                              ; FIXME: Really parse val
                              ; FIXME: unset :val
                              ; FIXME: .setDate, .gotoDate?
                              ; setDate + onSelect event? -> no put! here
                              (action! form {:type :change
                                             :ks ks
                                             :value (om/get-state owner :val)}))))
          :auto-complete false}]))))