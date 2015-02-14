(ns om-dev-tools.core
  (:require [om.core :as om]
            [om-dev-tools.ui :as ui]
            [om-dev-tools.instrumentation :as instrumentation]))

(defn empty-state
  "Returns an empty dev tools state."
  []
  {:component-stats {}
   :state-tree-state {}
   :current :state-tree
   :open? true})

(defn root
  "Calls om/root but also initiates om-dev-tools.

   Options map takes two additional options:
   :dev-target    - (required) a DOM element.
   :dev-state     - (required) a atom containing dev tools state."
  [f value {:keys [dev-target dev-state] :as options}]
  {:pre [dev-target dev-state]}
  (let [inst-methods (instrumentation/instrumentation-methods dev-state)]
    (om/root f value (-> options
                         (dissoc :dev-target :dev-state)
                         (assoc :instrument (fn [f cursor m]
                                              (om/build* f cursor (assoc m :descriptor inst-methods))))))
    (om/root ui/dev-tools dev-state {:target dev-target
                                     :opts {:app-state value}})))
