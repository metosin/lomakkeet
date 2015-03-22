(ns lomakkeet.core
  (:require [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :refer [dispatch subscribe]]
            [schema.core :as s :include-macros true]
            [schema.coerce :as sc]
            [schema.utils :as su]
            [schema-tools.core :as st]
            [lomakkeet.impl :as impl]
            [lomakkeet.util :refer [dissoc-in]]
            [lomakkeet.file :as file]
            [lomakkeet.datepicker :as date]))

;; BUILD

(defn input [form label ks & [opts]]
  (impl/default-form-group form impl/input* (assoc opts :label label :ks ks)))

(defn textarea [form label ks & [opts]]
  (impl/default-form-group form impl/input* (assoc opts :el impl/input-textarea :label label :ks ks)))

(defn static [form label ks & [opts]]
  (impl/default-form-group form impl/input* (assoc opts :el impl/input-static :label label :ks ks)))

(defn checkbox
  [form label ks & [opts]]
  (impl/default-form-group form impl/checkbox* (assoc opts :label label :ks ks)))

(defn select
  [form label ks options & [opts]]
  (impl/default-form-group form impl/select* (assoc opts :label label :ks ks :options options)))

(defn date
  [form label ks & [opts]]
  (impl/default-form-group form date/date* (assoc opts :label label :ks ks)))

(defn file
  [form label ks & [opts]]
  (impl/default-form-group form file/file* (assoc opts :label label :ks ks)))

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
   ::metadata s/Any
   ::disabled s/Bool
   s/Keyword s/Any})

(defn ->fs
  ([value] (->fs value nil))
  ([value schema]
   {::value value
    ::initial-value value
    ::errors (if schema (s/check schema value))
    ::schema schema
    ::metadata nil
    ::disabled false}))

(defn reset [fs]
  (assoc fs ::value (::initial-value fs)))

(defn save-form
  [fs value]
  (let [schema (::schema fs)]
    (assoc fs
           ::value value
           ::initial-value value
           ::errors (if schema (s/check schema value)))))

(defn commit
  [fs]
  (assoc fs ::initial-value (::value fs)))

(defn update-form
  [fs f & args]
  (let [value (::value fs)
        new-value (apply f value args)]
    (save-form fs new-value)))

(defn update-value
  "Coerce just the changed value, validate the whole form.
   If a value of optional-key property is set to nil, the property
   is dissociated."
  [fs ks v]
  (let [schema (::schema fs)
        leaf-schema (st/get-in (::schema fs) ks)
        v (coerce sc/json-coercion-matcher leaf-schema v)
        fs (if v
             (assoc-in fs (concat [::value] ks) v)
             (let [parent-schema (st/get-in (::schema fs) (butlast ks))]
               (if (contains? parent-schema (s/optional-key (last ks)))
                 (dissoc-in fs (concat [::value] ks))
                 (assoc-in fs (concat [::value] ks) v))))]
    (assoc fs ::errors (if schema (s/check schema (::value fs))))))

(defn dirty? [fs]
  (not= (::value fs) (::initial-value fs)))

(defn errors? [fs]
  (seq (::errors fs)))
