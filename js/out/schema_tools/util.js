// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('schema_tools.util');
goog.require('cljs.core');
/**
 * Returns vector of tuples containing path vector to the value and the value.
 */
schema_tools.util.path_vals = (function schema_tools$util$path_vals(){
var G__19070 = arguments.length;
switch (G__19070) {
case 1:
return schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$1 = (function (m){
return schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$2(m,cljs.core.identity);
});

schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$2 = (function (m,fk){
var pvals = (function schema_tools$util$pvals(l,p,m__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (l__$1,p__19086){
var vec__19087 = p__19086;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19087,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19087,(1),null);
var k__$1 = (function (){var G__19088 = k;
return (fk.cljs$core$IFn$_invoke$arity$1 ? fk.cljs$core$IFn$_invoke$arity$1(G__19088) : fk.call(null,G__19088));
})();
if(cljs.core.map_QMARK_(v)){
return schema_tools$util$pvals(l__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p,k__$1),v);
} else {
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p,k__$1),v], null),l__$1);
}
}),l,m__$1);
});
return pvals(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,m);
});

schema_tools.util.path_vals.cljs$lang$maxFixedArity = 2;
/**
 * Dissociates an entry from a nested associative structure returning a new
 * nested structure. keys is a sequence of keys. Any empty maps that result
 * will not be present in the new structure.
 */
schema_tools.util.dissoc_in = (function schema_tools$util$dissoc_in(m,p__19090){
var vec__19094 = p__19090;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19094,(0),null);
var ks = cljs.core.nthnext(vec__19094,(1));
if(cljs.core.truth_(ks)){
var temp__4421__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__4421__auto__)){
var nextmap = temp__4421__auto__;
var newmap = schema_tools$util$dissoc_in(nextmap,ks);
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
schema_tools.util.map_keys = (function schema_tools$util$map_keys(f,m){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(function (){var G__19096 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19096) : f.call(null,G__19096));
})(),v);
}),cljs.core.transient$(cljs.core.empty(m)),m)),cljs.core.meta(m));
});
