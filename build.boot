(set-env!
  :source-paths #{"example-src/cljs" "example-src/less" "example-src/html"}
  :resource-paths #{"src/cljs"}
  ;; Also brings in examples because komponentit dev build includes those...
  ; :checkouts '[[metosin/komponentit "0.2.0-SNAPSHOT"]]
  :dependencies '[[org.clojure/clojure    "1.8.0"      :scope "provided"]
                  [org.clojure/clojurescript "1.9.854" :scope "provided"]
                  [adzerk/boot-cljs       "2.1.1"  :scope "test"]
                  [adzerk/boot-cljs-repl  "0.3.3"      :scope "test"]
                  [com.cemerick/piggieback "0.2.2"     :scope "test"]
                  [weasel                  "0.7.0"     :scope "test"]
                  [org.clojure/tools.nrepl "0.2.13"    :scope "test"]
                  [adzerk/boot-reload     "0.5.1"     :scope "test"]
                  [deraen/boot-less       "0.6.2"      :scope "test"]
                  [org.slf4j/slf4j-nop    "1.7.25"     :scope "test"]
                  [metosin/boot-alt-http  "0.1.2"      :scope "test"]

                  [prismatic/schema "1.1.6"]
                  [metosin/schema-tools "0.9.0"]
                  [metosin/komponentit "0.3.0"]
                  ;; Reagent before devcards to use proper React version
                  [reagent "0.8.0-alpha1"]
                  ;; Devcards has "closer" dependency to cljsjs/react package which
                  ;; overwrites Reagent version
                  [cljsjs/react "15.6.1-1" :scope "test"]
                  [devcards "0.2.3" :scope "test"]

                  ; LESS
                  [org.webjars/bootstrap "3.3.7-1"]])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl repl-env]]
  '[adzerk.boot-reload    :refer [reload]]
  '[deraen.boot-less      :refer [less]]
  '[metosin.boot-alt-http :refer [serve]])

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
    (cljs :optimizations :none)
    (serve :prefixes #{""})
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
