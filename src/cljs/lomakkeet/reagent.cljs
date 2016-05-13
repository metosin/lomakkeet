(ns lomakkeet.reagent
  (:refer-clojure :exclude [update time])
  (:require [reagent.core :as r]
            [reagent.ratom :as ratom :refer-macros [reaction]]
            [lomakkeet.core :as l]
            [komponentit.input :as input]
            [komponentit.form-group :refer [form-group]]
            [komponentit.timepicker :refer [timepicker]]
            [komponentit.datepicker :as datepicker]
            [komponentit.filepicker :refer [filepicker]]
            [komponentit.currency-input :refer [currency-input]]
            [komponentit.autocomplete :refer [autocomplete]]))

(defn create-form
  ([data] (create-form data nil))
  ([data opts] (assoc opts :data data)))

;; Utilies

(defn cb [form ks value]
  (swap! (:data form) l/change-value ks value (select-keys form [:validation-fn :coercion-matcher])))

(defn blur [form ks]
  ; https://github.com/reagent-project/reagent/issues/135
  (swap! (:data form) cljs.core/update :not-pristine assoc-in ks {}))

(defn get-or-deref [x]
  (if (satisfies? IDeref x) @x x))

;; FORM GROUP ("bootstrap")

(defn default-form-group
  [form content {:keys [ks size label help-text explain-error]
                 :or {size 6
                      explain-error l/default-explain-error}
                 :as opts}]
  {:pre [(map? form) (satisfies? IDeref (:data form))]}
  (let [form-errors (reaction (:errors @(:data form)))
        error (reaction (get-in @form-errors ks))
        pristine (reaction (not (get-in (:not-pristine @(:data form)) ks)))]
    (fn [form content opts]
      [form-group
       (assoc opts
              :class (if size (str " col-md-" size " "))
              :label label
              :pristine @pristine
              :error (if @error (explain-error @error)))
       [content form opts]
       (if help-text
         [:span.help-block help-text])])))

(defn input*
  [form {:keys [ks el]
         :or {el input/text}
         :as opts}]
  (let [form-value (reaction (:value @(:data form)))
        value (reaction (get-in @form-value ks))]
    (fn []
      [el
       (assoc (merge (get-or-deref (:attrs form)) opts)
              :value @value
              :on-change #(cb form ks %)
              :on-blur #(blur form ks))])))

;; Custom inputs

(defn timepicker* [form {:keys [ks clearable?]}]
  (let [this       (r/current-component)
        form-value (reaction (:value @(:data form)))
        value      (reaction (get-in @form-value ks))]
    (fn [_]
      [timepicker {:value @value
                   :on-blur #(blur form ks)
                   :on-select (fn [date]
                                (cb form ks date))
                   :clearable? clearable?}])))

(defn date* [form {:keys [ks datepicker-i18n min-date max-date date-time? clearable? disabled]}]
  (let [this (r/current-component)
        form-value (reaction (:value @(:data form)))
        value (reaction (get-in @form-value ks))]
    (fn [_ {:keys [ks datepicker-i18n min-date max-date date-time? disabled]}]
      [datepicker/date
       {:value           @value
        :on-blur         #(blur form ks)
        :on-clear        (fn [e]
                           ;; Set date to nil
                           (cb form ks nil))
        :on-select       (fn [date]
                           (cb form ks date))
        :datepicker-i18n datepicker-i18n
        :min-date        min-date
        :max-date        max-date
        :date-time?      date-time?
        :disabled        (get-or-deref disabled)
        :clearable?      clearable?}])))

(defn autocomplete*
  [form {:keys [ks item->value item->key multiple? remove-cb disabled?]
         :or {item->key :key}
         :as opts}]
  (let [value (reaction (get-in (:value @(:data form)) ks))
        item->value (or item->value item->key)

        cb'
        (fn [v]
          (if-let [cb2 (:cb opts)]
            (cb2 v))
          ;; FIXME: hack
          (let [item->value (if (map? item->value)
                              item->value
                              {ks item->value})]
            (doseq [[ks item->value] item->value]
              (cb form ks (if multiple?
                            (conj @value (item->value v))
                            (item->value v)))))
          nil)

        ;; HACK: if remove-cb is set, default functionality for emptying the input on backspace is not used
        remove-cb
        (if (or  remove-cb multiple?)
          (fn [x _]
            (if remove-cb (remove-cb x))
            (if multiple?
              (cb form ks (into (empty @value) (remove #(= % x) @value))))))]
    (fn [form opts]
      [autocomplete (assoc opts
                           :value @value
                           :cb cb'
                           :remove-cb remove-cb
                           :on-blur #(blur form ks))])))

(defn file* [form {:keys [ks file-select-label clearable?]}]
  (let [this       (r/current-component)
        form-value (reaction (:value @(:data form)))
        value      (reaction (get-in @form-value ks))]
    (fn [_]
      [filepicker {:value @value
                   :on-blur #(blur form ks)
                   :on-select (fn [file]
                                (cb form ks file))
                   :clearable? clearable?
                   :file-select-label file-select-label}])))

(defn currency-input* [form {:keys [ks currency-symbol delimiter]}]
  (let [form-value (reaction (:value @(:data form)))
        value      (reaction (get-in @form-value ks))]
    (fn [form {:keys [ks currency-symbol delimiter]}]
      [currency-input
       {:value @value
        :on-blur #(blur form ks)
        :on-change (fn [value]
                     (cb form ks value))
        :currency-symbol currency-symbol
        :delimiter delimiter}])))

;; BUILD

(defn form-group-com [form]
  (or (:form-group form) default-form-group))

(defn input
  ([form label ks] (input form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form input* (assoc (merge (:opts form) opts) :label label :ks ks)]))

(defn password
  ([form label ks] (password form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form input* (assoc (merge (:opts form) opts) :el input/password :label label :ks ks)]))

(defn textarea
  ([form label ks] (textarea form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form input* (assoc (merge (:opts form) opts) :el input/text :label label :ks ks)]))

(defn static
  ([form label ks] (static form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form input* (assoc (merge (:opts form) opts) :el input/static :label label :ks ks)]))

(defn number
  ([form label ks] (static form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form input* (assoc (merge (:opts form) opts) :el input/number :label label :ks ks)]))

(defn checkbox
  ([form label ks] (checkbox form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form input* (assoc (merge (:opts form) opts) :el input/checkbox :label label :ks ks)]))

(defn select
  ([form label ks options] (select form label ks options nil))
  ([form label ks options opts]
   [(form-group-com form) form input* (assoc (merge (:opts form) opts) :el input/select :label label :ks ks :options options)]))

(defn date
  ([form label ks] (date form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form date* (assoc (merge (:opts form) opts) :label label :ks ks)]))

(defn time
  ([form label ks] (time form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form timepicker* (merge (:opts form) opts {:label label :ks ks})]))

(defn file
  ([form label ks] (file form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form file* (assoc (merge (:opts form) opts) :label label :ks ks)]))

(defn complete
  ([form label ks] (complete form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form autocomplete* (assoc (merge (:opts form) opts) :label label :ks ks)]))

(defn currency
  ([form label ks] (currency form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form currency-input* (assoc (merge (:opts form) opts) :label label :ks ks)]))

(def validation-error->str l/validation-error->str)
(def default-explain-error l/default-explain-error)
(def ->fs l/->fs)
(def value l/value)
(def reset l/reset)
(def commit l/commit)
(def save l/save)
(def validate l/validate)
(def update l/update)
(def dirty? l/dirty?)
(def errors? l/errors?)
