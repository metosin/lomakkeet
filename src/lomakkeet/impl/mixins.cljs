(ns lomakkeet.impl.mixins
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [close! <! put! tap untap chan]]
            [lomakkeet.util :as u]
            [goog.events :as events]))

;;
;; Mixin: Close the component if user clicks outside the element
;;

(defn create-closable
  "Returns a function which can be called to remove the event handlers."
  [open?]
  (let [click-handler (fn [e]
                        (reset! open? false))
        key-handler (fn [e]
                      (case (.-key e)
                        "Esc" (do (reset! open? false))
                        nil))]
    (events/listen js/window goog.events.EventType.CLICK click-handler)
    (events/listen js/window goog.events.EventType.KEYUP key-handler)
    (fn []
      (events/unlisten js/window goog.events.EventType.CLICK click-handler)
      (events/unlisten js/window goog.events.EventType.KEYUP key-handler))))
