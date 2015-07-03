// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('lomakkeet.autocomplete');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('lomakkeet.util');
lomakkeet.autocomplete.normalize = (function lomakkeet$autocomplete$normalize(s){
var G__17470 = s;
var G__17470__$1 = (((G__17470 == null))?null:clojure.string.lower_case(G__17470));
return G__17470__$1;
});
lomakkeet.autocomplete.highlight_string = (function lomakkeet$autocomplete$highlight_string(s,query){
if(cljs.core.truth_(query)){
var rst = s;
var r = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span], null);
while(true){
var vec__17474 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (rst,r){
return (function (p__17475,term){
var vec__17476 = p__17475;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17476,(0),null);
var acc = vec__17476;
var x = lomakkeet.autocomplete.normalize(rst).indexOf(term);
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,(-1))) && ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))) || ((x < i)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(rst,x,(x + cljs.core.count(term)))], null);
} else {
return acc;
}
});})(rst,r))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),null], null),query);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17474,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17474,(1),null);
var pre = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(rst,(0),i);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
var G__17477 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rst,(i + cljs.core.count(match)));
var G__17478 = ((cljs.core.seq(pre))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(r,pre,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$highlight,match], null)], 0)):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$highlight,match], null)));
rst = G__17477;
r = G__17478;
continue;
} else {
if(cljs.core.seq(rst)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,rst);
} else {
return r;
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,s], null);
}
});
lomakkeet.autocomplete.query_match_QMARK_ = (function lomakkeet$autocomplete$query_match_QMARK_(term_match_fn,v,query){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(term_match_fn,v),query);
});
lomakkeet.autocomplete.matches = (function lomakkeet$autocomplete$matches(term_match_fn,v,query){
var m = cljs.core.group_by(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(term_match_fn,v),query);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,true),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,false)], null);
});
lomakkeet.autocomplete.default__GT_query = (function lomakkeet$autocomplete$default__GT_query(search){
var G__17480 = search;
var G__17480__$1 = (((G__17480 == null))?null:G__17480.toLowerCase());
var G__17480__$2 = (((G__17480__$1 == null))?null:G__17480__$1.split(/ /));
var G__17480__$3 = (((G__17480__$2 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,G__17480__$2));
var G__17480__$4 = (((G__17480__$3 == null))?null:cljs.core.vec(G__17480__$3));
return G__17480__$4;
});
lomakkeet.autocomplete.default_find_by_selection = (function lomakkeet$autocomplete$default_find_by_selection(data,x){
return cljs.core.some((function (v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$lomakkeet$autocomplete_SLASH_i.cljs$core$IFn$_invoke$arity$1(v),x)){
return v;
} else {
return null;
}
}),data);
});
lomakkeet.autocomplete.default_group_find_by_selection = (function lomakkeet$autocomplete$default_group_find_by_selection(data,x){
return cljs.core.some((function (p__17483){
var vec__17484 = p__17483;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17484,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17484,(1),null);
return cljs.core.some(((function (vec__17484,_,data__$1){
return (function (v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$lomakkeet$autocomplete_SLASH_i.cljs$core$IFn$_invoke$arity$1(v),x)){
return v;
} else {
return null;
}
});})(vec__17484,_,data__$1))
,data__$1);
}),data);
});
/**
 * Fields can be either collection containing multiple key for map,
 * or a single key.
 * If collection is given, returned function will go through keys using some.
 */
lomakkeet.autocomplete.create_matcher_STAR_ = (function lomakkeet$autocomplete$create_matcher_STAR_(fields){
if(cljs.core.sequential_QMARK_(fields)){
return (function (item,term){
return cljs.core.some((function (field){
var G__17487 = item;
var G__17487__$1 = (((G__17487 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__17487,field));
var G__17487__$2 = (((G__17487__$1 == null))?null:cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__17487__$1.toLowerCase().indexOf(term),(-1)));
return G__17487__$2;
}),fields);
});
} else {
return (function (item,term){
var G__17488 = item;
var G__17488__$1 = (((G__17488 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__17488,fields));
var G__17488__$2 = (((G__17488__$1 == null))?null:cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__17488__$1.toLowerCase().indexOf(term),(-1)));
return G__17488__$2;
});
}
});
