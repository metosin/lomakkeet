// Compiled by ClojureScript 1.7.170 {}
goog.provide('schema_tools.util');
goog.require('cljs.core');
/**
 * Returns vector of tuples containing path vector to the value and the value.
 */
schema_tools.util.path_vals = (function schema_tools$util$path_vals(var_args){
var args14040 = [];
var len__6046__auto___14051 = arguments.length;
var i__6047__auto___14052 = (0);
while(true){
if((i__6047__auto___14052 < len__6046__auto___14051)){
args14040.push((arguments[i__6047__auto___14052]));

var G__14053 = (i__6047__auto___14052 + (1));
i__6047__auto___14052 = G__14053;
continue;
} else {
}
break;
}

var G__14042 = args14040.length;
switch (G__14042) {
case 1:
return schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14040.length)].join('')));

}
});

schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$1 = (function (m){
return schema_tools.util.path_vals.call(null,m,cljs.core.identity);
});

schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$2 = (function (m,fk){
var pvals = (function schema_tools$util$pvals(l,p,m__$1){
return cljs.core.reduce.call(null,(function (l__$1,p__14049){
var vec__14050 = p__14049;
var k = cljs.core.nth.call(null,vec__14050,(0),null);
var v = cljs.core.nth.call(null,vec__14050,(1),null);
var k__$1 = fk.call(null,k);
if(cljs.core.map_QMARK_.call(null,v)){
return schema_tools$util$pvals.call(null,l__$1,cljs.core.conj.call(null,p,k__$1),v);
} else {
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,p,k__$1),v], null),l__$1);
}
}),l,m__$1);
});
return pvals.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,m);
});

schema_tools.util.path_vals.cljs$lang$maxFixedArity = 2;
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
schema_tools.util.dissoc_in = (function schema_tools$util$dissoc_in(m,p__14055){
var vec__14057 = p__14055;
var k = cljs.core.nth.call(null,vec__14057,(0),null);
var ks = cljs.core.nthnext.call(null,vec__14057,(1));
if(cljs.core.truth_(ks)){
var temp__4423__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var nextmap = temp__4423__auto__;
var newmap = schema_tools$util$dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
schema_tools.util.map_keys = (function schema_tools$util$map_keys(f,m){
return cljs.core.with_meta.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,k,v){
return cljs.core.assoc_BANG_.call(null,acc,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.empty.call(null,m)),m)),cljs.core.meta.call(null,m));
});

//# sourceMappingURL=util.js.map