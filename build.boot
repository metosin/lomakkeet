(set-env!
  :source-paths #{"example-src/cljs" "example-src/less" "example-src/html"}
  :resource-paths #{"src/cljs"}
  :checkouts '[[metosin/komponentit "0.2.0-SNAPSHOT"]]
  :dependencies '[[org.clojure/clojure    "1.8.0"      :scope "provided"]
                  [org.clojure/clojurescript "1.9.293"  :scope "provided"]
                  [boot/core              "2.6.0"      :scope "test"]
                  [adzerk/boot-cljs       "1.7.228-2"  :scope "test"]
                  [adzerk/boot-cljs-repl  "0.3.3"      :scope "test"]
                  [com.cemerick/piggieback "0.2.1"     :scope "test"]
                  [weasel                  "0.7.0"     :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12"    :scope "test"]
                  [adzerk/boot-reload     "0.4.13"      :scope "test"]
                  [deraen/boot-less       "0.6.0"      :scope "test"]
                  [pandeiro/boot-http     "0.7.3"      :scope "test"]

                  [prismatic/schema "1.1.3"]
                  [metosin/schema-tools "0.9.0"]
                  [metosin/komponentit "0.2.0-SNAPSHOT"]
                  ;; Reagent before devcards to use proper React version
                  [reagent "0.6.0"]
                  ;; Devcards has "closer" dependency to cljsjs/react package which
                  ;; overwrites Reagent version
                  [cljsjs/react "15.3.2-1" :scope "test"]
                  [devcards "0.2.2" :scope "test"]

                  ; LESS
                  [org.webjars/bootstrap "3.3.4"]])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl repl-env]]
  '[adzerk.boot-reload    :refer [reload]]
  '[deraen.boot-less      :refer [less]]
  '[pandeiro.boot-http    :refer [serve]])

(def +version+ "0.4.0-SNAPSHOT")

(task-options!
  pom {:project 'metosin/lomakkeet
       :version +version+
       :description "Proof of concept: Form library for Reagent"
       :license {"Eclipse Public License" "http://www.eclipse.org/legal/epl-v10.html"}
       :url "https://github.com/metosin/lomakkeet"
       :scm {:url "https://github.com/metosin/lomakkeet"}}
  cljs {:source-map true}
  less {:source-map true})

(deftask build []
  (comp
    (pom)
    (jar)
    (install)))

(deftask dev []
  (comp
    (watch)
    (less)
    (reload :on-jsload 'example.main/restart!)
    (cljs-repl)
    (cljs)
    (serve :port 3001 :resource-root "")
    (build)))

(deftask build-example []
  (comp
    (less)
    (cljs :optimizations :advanced)
    (sift :to-resource #{#"^index\.html"})
    (sift :include #{#"^(main.js|example.css|index.html)"})
    (target)))

(deftask deploy []
  (comp
    (build)
    (push :repo "clojars" :gpg-sign (not (.endsWith +version+ "-SNAPSHOT")))))
