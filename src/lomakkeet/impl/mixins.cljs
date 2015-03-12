(ns lomakkeet.impl.mixins
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent defcomponentk]]
            [cljs.core.async :refer [close! <! put! tap untap chan]]
            [sablono.core :refer-macros [html]]
            [lomakkeet.util :as u]
            [goog.events :as events]))

;;
;; Mixin: Close the component if user clicks outside the element
;;

(defn closable-will-mount [owner & [close-cb]]
  (let [click-handler (fn [e]
                        (om/set-state! owner :open? false)
                        (if close-cb (close-cb)))
        key-handler (fn [e]
                      (case (.-keyCode e)
                        27 (do ; Esc
                               (om/set-state! owner :open? false)
                               (if close-cb (close-cb)))
                        nil))]
    (om/set-state! owner :click-handler click-handler)
    (om/set-state! owner :key-handler key-handler)
    (events/listen js/window goog.events.EventType.CLICK click-handler)
    (events/listen js/window goog.events.EventType.KEYUP key-handler)))

(defn closable-will-unmount [owner]
  (events/listen js/window goog.events.EventType.CLICK (om/get-state owner :click-handler))
  (events/listen js/window goog.events.EventType.KEYUP (om/get-state owner :key-handler)))

;;
;; Mixin: call callback only there has been no changes for timeout ms
;;

(defn debounce-init []
  {:changes (chan)})

(defn debounce-will-mount [owner cb & [{:keys [timeout]
                                        :or {timeout 200}}]]
  (let [debounced (u/debounce (om/get-state owner :changes) timeout)]
    (go
      (loop []
        (let [v (<! debounced)]
          (when v
            (cb v)
            (recur)))))))

(defn debounce-will-unmount [owner]
  (close! (om/get-state owner :changes)))

