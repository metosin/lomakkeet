(ns example.main
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :refer [dispatch dispatch-sync register-handler register-sub subscribe path]]
            [schema.core :as s]
            [potpuri.core :as util]
            [lomakkeet.core :as f]
            [example.forms :as forms]
            [example.autocomplete :as eac]
            [example.domain :as d]
            [example.util :refer [map-v]]))

(enable-console-print!)

(def initial-state
  {:example-page (f/->fs d/empty-thing d/Thingie)})

;; VIEWS

(register-sub :thingie-form
  (fn [db _]
    (reaction (:example-page @db))))

; FIXME: How to select determine which form sent the event?
; Or how to have specific handler for each form

(def form-ware [(path :example-page) map-v])

(register-handler :update-value
  form-ware
  (fn [db {:keys [ks value]}]
    ; Even if this is pretty much all that is needed, it probably
    ; useful that each form can add specific logic in their own handler.
    (f/update-value db ks value)))

(defn thing-view []
  ; FIXME: Any form change causes re-render
  ; Not sure if this is inevitable
  (let [form (subscribe [:thingie-form])]
    (fn []
      (let [{{:keys [start end]} :dates} @form]
        [:div.tasks
         [:h2
          "Basic fields"
          #_[:div.btn-toolbar.pull-right
             [forms/form-status form]
             [forms/cancel-btn form]
             [forms/save-btn form]]]

         [:form.column-content
          [:div.row
           [f/input form "Name"   [:name]]
           [f/input form "Email"  [:email]]]

          [:div.row
           [f/textarea  form "Textarea" [:desc]]
           [f/select    form "Select"   [:gender] d/genders]]

          [:div.row
           [:div.col-sm-6 [:h2 "Datepicker (using " [:a {:href "https://github.com/dbushell/Pikaday"} "Pikaday"] ")"]]
           [:div.col-sm-6 [:h2 "Filepicker"]]]

          [:div.row
           [f/date form "Start date" [:dates :start]
              {:size 3
               ; :state {:min-date (t/today) :max-date end}
               ; :help-text "Today or later. Before end date."
               }]
           #_[f/date form "End date" [:dates :end]
              {:size 3
               ; :empty-btn? true
               ; :state {:min-date start}
               ; :help-text "Optional. After start date."
               }]
           [f/file form "File" [:file] {:help-text "Under 1MB"}]]

          [:div.row
           [:div.col-sm-12 [:h2 "Autocomplete"]]
           #_[eac/country-select form "Country" [:country]]
           [:div.form-group.col-sm-6
            [:label "Autocomplete (tree):"]
            [:p.form-control-static "TODO"]]]]
         ]))))

(defn app-view []
  [:div
   [:h1 "Example form "
    [:a {:href "https://github.com/metosin/lomakkeet/blob/master/example/src/cljs/example/main.cljs"} "(Code)"]]
   [thing-view]])

(register-handler :init-db
  (fn [_ _]
    initial-state))

; Init only for the first load
; Symbol is not used
(defonce foobar (dispatch-sync [:init-db]))

(defn restart! []
  (reagent/render [app-view] (js/document.getElementById "app")))

(restart!)
