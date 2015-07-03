// Compiled by ClojureScript 0.0-2913 {}
goog.provide('example.util');
goog.require('cljs.core');
/**
* Middleware which presuments that the second element of the
* event is a map and calls the handler using the map.
*/
example.util.map_v = (function map_v(handler){
return (function (db,v){
if(((cljs.core.second(v) == null)) || (cljs.core.map_QMARK_(cljs.core.second(v)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"v","v",1661996586,null))),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))], 0)))].join('')));
}

var G__12482 = db;
var G__12483 = cljs.core.second(v);
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__12482,G__12483) : handler.call(null,G__12482,G__12483));
});
});
