(ns om-dev-tools.ui
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [sablono.core :refer-macros [html]]
            [om-dev-tools.instrumentation :as instrumentation]
            [om-dev-tools.state-tree :as state-tree]
            [goog.string :as gs]))

(def default-views
  {:state-tree {:label "State"
                :component (fn [state opts]
                             [:div.om-dev-tools-state-tree
                              (om/build state-tree/state-view {:state-tree-state (:state-tree-state state)
                                                               :app-state (om/root-cursor (:app-state opts))})])}
   :instrumentation {:label "Om instrumentation"
                     :component (fn [state _] (om/build instrumentation/stats-view (:component-stats state)))}})

(defcomponent dev-tools
  [{:keys [open? current component-stats] :as state}
   owner
   {:keys [views app-state] :as opts}]
  (render [_]
    ; FIXME:
    ; NOTE: Will break other stuff which might set body class
    ; Doesn't use classList because IE9 doesn't support that
    (set! js/window.document.body.className (if open? "dev" ""))
    (html
      (if open?
        ; FIXME: Cljs/om-tools breaks if this is named views
        (let [all-views (merge default-views)]
          [:div.om-dev-tools
           [:ul.nav.nav-tabs
            (for [[k {:keys [label]}] all-views]
              [:li
               {:class (if (= (:current state) k) "active")}
               [:a {:on-click #(om/update! state :current k)} label]])
            [:li.pull-right
             [:button.close
              {:onClick #(om/transact! state :open? not)}
              [:span "×"]]]]
           ((:component (get all-views current)) state opts)])
        [:button.pull-right.om-dev-tools-btn
         {:onClick #(om/transact! state :open? not)}
         "dev"]))))
