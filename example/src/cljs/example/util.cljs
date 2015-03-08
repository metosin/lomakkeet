(ns example.util)

; IDEA: Could be similarly implemented for fnks
(defn map-v
  "Middleware which presuments that the second element of the
   event is a map and calls the handler using the map."
  [handler]
  (fn [db v]
    {:pre [(or (nil? (second v)) (map? (second v)))]}
    (handler db (second v))))
