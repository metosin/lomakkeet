// Compiled by ClojureScript 0.0-2913 {}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
* Internal helper for diff.
*/
clojure.data.atom_diff = (function atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
* Convert an associative-by-numeric-index collection into
* an equivalent vector, with nil for any missing keys
*/
clojure.data.vectorize = (function vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__25930){
var vec__25931 = p__25930;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25931,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
* Diff associative things a and b, comparing only the key k.
*/
clojure.data.diff_associative_key = (function diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__25935 = (function (){var G__25936 = va;
var G__25937 = vb;
return (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(G__25936,G__25937) : clojure.data.diff.call(null,G__25936,G__25937));
})();
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25935,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25935,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25935,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?new cljs.core.PersistentArrayMap.fromArray([k,a_STAR_], true, false):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?new cljs.core.PersistentArrayMap.fromArray([k,b_STAR_], true, false):null),((same)?new cljs.core.PersistentArrayMap.fromArray([k,ab], true, false):null)], null);
});
/**
* Diff associative things a and b, comparing only keys in ks (if supplied).
*/
clojure.data.diff_associative = (function() {
var diff_associative = null;
var diff_associative__2 = (function (a,b){
return diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});
var diff_associative__3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});
diff_associative = function(a,b,ks){
switch(arguments.length){
case 2:
return diff_associative__2.call(this,a,b);
case 3:
return diff_associative__3.call(this,a,b,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
diff_associative.cljs$core$IFn$_invoke$arity$2 = diff_associative__2;
diff_associative.cljs$core$IFn$_invoke$arity$3 = diff_associative__3;
return diff_associative;
})()
;
clojure.data.diff_sequential = (function diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4242__auto__ = cljs.core.count(a);
var y__4243__auto__ = cljs.core.count(b);
return ((x__4242__auto__ > y__4243__auto__) ? x__4242__auto__ : y__4243__auto__);
})()))));
});
clojure.data.diff_set = (function diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

clojure.data.EqualityPartition = (function (){var obj25942 = {};
return obj25942;
})();

clojure.data.equality_partition = (function equality_partition(x){
if((function (){var and__3913__auto__ = x;
if(and__3913__auto__){
return x.clojure$data$EqualityPartition$equality_partition$arity$1;
} else {
return and__3913__auto__;
}
})()){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4569__auto__ = (((x == null))?null:x);
return (function (){var or__3925__auto__ = (clojure.data.equality_partition[(function (){var G__25946 = x__4569__auto__;
return goog.typeOf(G__25946);
})()]);
if(or__3925__auto__){
return or__3925__auto__;
} else {
var or__3925__auto____$1 = (clojure.data.equality_partition["_"]);
if(or__3925__auto____$1){
return or__3925__auto____$1;
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
})().call(null,x);
}
});


clojure.data.Diff = (function (){var obj25948 = {};
return obj25948;
})();

clojure.data.diff_similar = (function diff_similar(a,b){
if((function (){var and__3913__auto__ = a;
if(and__3913__auto__){
return a.clojure$data$Diff$diff_similar$arity$2;
} else {
return and__3913__auto__;
}
})()){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4569__auto__ = (((a == null))?null:a);
return (function (){var or__3925__auto__ = (clojure.data.diff_similar[(function (){var G__25952 = x__4569__auto__;
return goog.typeOf(G__25952);
})()]);
if(or__3925__auto__){
return or__3925__auto__;
} else {
var or__3925__auto____$1 = (clojure.data.diff_similar["_"]);
if(or__3925__auto____$1){
return or__3925__auto____$1;
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
})().call(null,a,b);
}
});

(clojure.data.EqualityPartition["_"] = true);

(clojure.data.equality_partition["_"] = (function (x){
if((function (){var G__25953 = x;
if(G__25953){
var bit__4606__auto__ = (G__25953.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4606__auto__) || (G__25953.cljs$core$IMap$)){
return true;
} else {
if((!G__25953.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__25953);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__25953);
}
})()){
return cljs.core.constant$keyword$133;
} else {
if((function (){var G__25954 = x;
if(G__25954){
var bit__4606__auto__ = (G__25954.cljs$lang$protocol_mask$partition0$ & (4096));
if((bit__4606__auto__) || (G__25954.cljs$core$ISet$)){
return true;
} else {
if((!G__25954.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__25954);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__25954);
}
})()){
return cljs.core.constant$keyword$134;
} else {
if((function (){var G__25955 = x;
if(G__25955){
var bit__4606__auto__ = (G__25955.cljs$lang$protocol_mask$partition0$ & (16777216));
if((bit__4606__auto__) || (G__25955.cljs$core$ISequential$)){
return true;
} else {
if((!G__25955.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__25955);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__25955);
}
})()){
return cljs.core.constant$keyword$135;
} else {
return cljs.core.constant$keyword$136;

}
}
}
}));

(clojure.data.EqualityPartition["boolean"] = true);

(clojure.data.equality_partition["boolean"] = (function (x){
return cljs.core.constant$keyword$136;
}));

(clojure.data.EqualityPartition["function"] = true);

(clojure.data.equality_partition["function"] = (function (x){
return cljs.core.constant$keyword$136;
}));

(clojure.data.EqualityPartition["array"] = true);

(clojure.data.equality_partition["array"] = (function (x){
return cljs.core.constant$keyword$135;
}));

(clojure.data.EqualityPartition["number"] = true);

(clojure.data.equality_partition["number"] = (function (x){
return cljs.core.constant$keyword$136;
}));

(clojure.data.EqualityPartition["string"] = true);

(clojure.data.equality_partition["string"] = (function (x){
return cljs.core.constant$keyword$136;
}));

(clojure.data.EqualityPartition["null"] = true);

(clojure.data.equality_partition["null"] = (function (x){
return cljs.core.constant$keyword$136;
}));
(clojure.data.Diff["_"] = true);

(clojure.data.diff_similar["_"] = (function (a,b){
return (function (){var G__25956 = (((clojure.data.equality_partition(a) instanceof cljs.core.Keyword))?clojure.data.equality_partition(a).fqn:null);
switch (G__25956) {
case "map":
return clojure.data.diff_associative;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "set":
return clojure.data.diff_set;

break;
case "atom":
return clojure.data.atom_diff;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(clojure.data.equality_partition(a))].join('')));

}
})().call(null,a,b);
}));

(clojure.data.Diff["boolean"] = true);

(clojure.data.diff_similar["boolean"] = (function (a,b){
return clojure.data.atom_diff(a,b);
}));

(clojure.data.Diff["function"] = true);

(clojure.data.diff_similar["function"] = (function (a,b){
return clojure.data.atom_diff(a,b);
}));

(clojure.data.Diff["array"] = true);

(clojure.data.diff_similar["array"] = (function (a,b){
return clojure.data.diff_sequential(a,b);
}));

(clojure.data.Diff["number"] = true);

(clojure.data.diff_similar["number"] = (function (a,b){
return clojure.data.atom_diff(a,b);
}));

(clojure.data.Diff["string"] = true);

(clojure.data.diff_similar["string"] = (function (a,b){
return clojure.data.atom_diff(a,b);
}));

(clojure.data.Diff["null"] = true);

(clojure.data.diff_similar["null"] = (function (a,b){
return clojure.data.atom_diff(a,b);
}));
/**
* Recursively compares a and b, returning a tuple of
* [things-only-in-a things-only-in-b things-in-both].
* Comparison rules:
* 
* * For equal a and b, return [nil nil a].
* * Maps are subdiffed where keys match and values differ.
* * Sets are never subdiffed.
* * All sequential things are treated as associative collections
* by their indexes, with results returned as vectors.
* * Everything else (including strings!) is treated as
* an atom and compared for equality.
*/
clojure.data.diff = (function diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
