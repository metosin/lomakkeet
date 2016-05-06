(ns example.main
  (:require [reagent.core :as reagent]
            [reagent.ratom :refer-macros [reaction]]
            [devcards.core :as dc :include-macros true]
            example.form))

(defn restart! []
  (dc/start-devcard-ui!))

(restart!)
