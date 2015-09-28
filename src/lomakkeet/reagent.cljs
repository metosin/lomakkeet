(ns lomakkeet.reagent
  (:refer-clojure :exclude [update])
  (:require [reagent.ratom :as ratom :refer-macros [reaction]]
            [schema-tools.core :as st]
            [lomakkeet.core :as core]
            [lomakkeet.util :refer [dissoc-in]]
            [lomakkeet.reagent.impl :as impl]
            [lomakkeet.reagent.datepicker :as date]
            [lomakkeet.reagent.filepicker :as file]
            [lomakkeet.reagent.autocomplete :as autocomplete]))

(defn create-form
  ([data] (create-form data nil))
  ([data opts]
   (assoc opts
          :data data
          :form-value  (reaction (:value  @data))
          :form-errors (reaction (:errors @data))
          :form-schema (reaction (:schema @data))
          :form-not-pristine (reaction (:not-pristine @data)))))

(defn field [{:keys [form ks] :as opts}]
  (if (and form ks)
    (let [{:keys [data form-value form-errors form-schema form-not-pristine]} form]
      (assoc (merge (:opts form) opts)
             :value  (reaction (get-in @form-value ks))
             :error  (reaction (get-in @form-errors ks))
             :pristine (reaction (not (get-in @form-not-pristine ks)))
             :schema (reaction (st/get-in @form-schema ks))
             :cb     (fn [value]
                       (swap! data core/change-value ks value (select-keys form [:validation-fn :coercion-matcher])))
             :blur   (fn []
                       (swap! data update-in [:not-pristine] assoc-in ks {}))))
    opts))

;; BUILD

(defn form-group-com [form]
  (or (:form-group form) impl/default-form-group))

(def form-group impl/default-form-group)

(def input impl/input*)

(defn password
  ([form opts]
   [(form-group-com form) form impl/input* (assoc (merge (:opts form) opts) :el impl/input-password)]))

(defn textarea
  ([form opts]
   [(form-group-com form) form impl/input* (assoc (merge (:opts form) opts) :el impl/input-textarea)]))

(defn static
  ([form opts]
   [(form-group-com form) form impl/input* (assoc (merge (:opts form) opts) :el impl/input-static)]))

(defn checkbox
  ([form opts]
   [(form-group-com form) form impl/checkbox* (merge (:opts form) opts)]))

(defn select
  ([form opts]
   [(form-group-com form) form impl/select* (merge (:opts form) opts)]))

(defn date
  ([form opts]
   [(form-group-com form) form date/date* (merge (:opts form) opts)]))

(defn file
  ([form opts]
   [(form-group-com form) form file/file* (merge (:opts form) opts)]))

(defn complete
  ([form opts]
   [(form-group-com form) form autocomplete/autocomplete* (merge (:opts form) opts)]))

(def validation-error->str core/validation-error->str)
(def default-explain-error core/default-explain-error)
(def ->fs core/->fs)
(def reset core/reset)
(def commit core/commit)
(def save core/save)
(def update core/update)
(def dirty? core/dirty?)
(def errors? core/errors?)
