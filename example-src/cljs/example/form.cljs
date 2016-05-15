(ns example.form
  (:require [reagent.core :as r]
            [schema.core :as s]
            [lomakkeet.reagent :as l]
            [devcards.core :as dc :include-macros true]))

(s/defschema SimpleForm
  {:name (s/constrained s/Str seq 'required)
   :email (s/constrained s/Str seq 'required)
   :postalcode (s/maybe
                 {:code s/Str
                  :name s/Str})
   :language (s/maybe (s/enum :fi :en))})

(defn simple-form' [state]
  (let [form (l/create-form state)]
    (fn [_]
      [:form
       {:on-submit (fn [e]
                     (.preventDefault e)
                     (if-not (l/errors? @state)
                       (js/alert "Form sent")))}
       [:div.container-fluid
        [:div.row
         [l/input form "Name" [:name]]
         [l/input form "Email" [:email]]]
        [:div.row
         [l/complete form "Postalcode" [:postalcode] {:item->value #(select-keys % [:code :name])
                                                      :item->text #(str (:code %) " - " (:name %))
                                                      :item->key :code
                                                      :value->text (fn [_ v] (if v (str (:code v) " - " (:name v))))
                                                      :search-fields [:code :name]
                                                      :items [{:code "33720" :name "Tampere"}
                                                              {:code "33100" :name "Tampere"}]}]
         [l/select form "Language" [:language]
          [{:value "fi" :text "Finnish"}
           {:value "en" :text "English"}]
          {:empty-option? true}]]
        [:div.row
         [:div.col-sm-12
          [:div.btn-toolbar
           [:button.btn.btn-default
            {:type "button"
             :on-click (fn [e]
                         (swap! state (comp l/validate l/reset)))}
            "Cancel"]
           [:button.btn.btn-success
            {:type "submit"}
            "Submit"]]]]]])))

(dc/defcard-rg simple-form
  (fn [state _]
    [simple-form' state])
  (r/atom (l/->fs {:name "Foo" :email "Bar" :postalcode nil} SimpleForm))
  {:inspect-data true})
