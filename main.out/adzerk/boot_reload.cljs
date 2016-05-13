(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] example.main))
(client/connect "ws://localhost:40232" {:on-jsload (fn* [] (example.main/restart!))})