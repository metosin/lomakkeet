// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('example.reagent.dev_tools');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof example.reagent.dev_tools.open_QMARK_ !== 'undefined'){
} else {
example.reagent.dev_tools.open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
example.reagent.dev_tools.toggle = (function example$reagent$dev_tools$toggle(v,ks){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,ks))){
return cljs.core.assoc_in(v,ks,null);
} else {
return cljs.core.assoc_in(v,ks,cljs.core.PersistentArrayMap.EMPTY);
}
});
example.reagent.dev_tools.key__GT_string = (function example$reagent$dev_tools$key__GT_string(k){
if((k instanceof cljs.core.Keyword)){
var s = cljs.core.namespace(k);
var n = cljs.core.name(k);
if(cljs.core.truth_(s)){
return [cljs.core.str(s),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
return k;

}
});
example.reagent.dev_tools.tree = (function example$reagent$dev_tools$tree(tree_atom,tree_state,v,ks){
if(cljs.core.coll_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,(function (){var iter__5092__auto__ = (function example$reagent$dev_tools$tree_$_iter__12249(s__12250){
return (new cljs.core.LazySeq(null,(function (){
var s__12250__$1 = s__12250;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__12250__$1);
if(temp__4423__auto__){
var s__12250__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12250__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__12250__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__12252 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__12251 = (0);
while(true){
if((i__12251 < size__5091__auto__)){
var vec__12257 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__12251);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12257,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12257,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__12252,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$key,example.reagent.dev_tools.key__GT_string(k),cljs.core.constant$keyword$class,[cljs.core.str(((cljs.core.coll_QMARK_(v__$1))?"coll":"single")),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree_state,ks__$1))?"open":"closed"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,((function (i__12251,ks__$1,vec__12257,k,v__$1,c__5090__auto__,size__5091__auto__,b__12252,s__12250__$2,temp__4423__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tree_atom,example.reagent.dev_tools.toggle,ks__$1);
});})(i__12251,ks__$1,vec__12257,k,v__$1,c__5090__auto__,size__5091__auto__,b__12252,s__12250__$2,temp__4423__auto__))
], null),(((k instanceof cljs.core.Keyword))?example.reagent.dev_tools.key__GT_string(k):k)], null),": ",(cljs.core.truth_((function (){var or__4338__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__4338__auto__){
return or__4338__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree_state,ks__$1);
}
})())?example$reagent$dev_tools$tree(tree_atom,tree_state,v__$1,ks__$1):null)], null));

var G__12259 = (i__12251 + (1));
i__12251 = G__12259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12252),example$reagent$dev_tools$tree_$_iter__12249(cljs.core.chunk_rest(s__12250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12252),null);
}
} else {
var vec__12258 = cljs.core.first(s__12250__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12258,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12258,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$key,example.reagent.dev_tools.key__GT_string(k),cljs.core.constant$keyword$class,[cljs.core.str(((cljs.core.coll_QMARK_(v__$1))?"coll":"single")),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree_state,ks__$1))?"open":"closed"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$strong,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,((function (ks__$1,vec__12258,k,v__$1,s__12250__$2,temp__4423__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tree_atom,example.reagent.dev_tools.toggle,ks__$1);
});})(ks__$1,vec__12258,k,v__$1,s__12250__$2,temp__4423__auto__))
], null),(((k instanceof cljs.core.Keyword))?example.reagent.dev_tools.key__GT_string(k):k)], null),": ",(cljs.core.truth_((function (){var or__4338__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__4338__auto__){
return or__4338__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree_state,ks__$1);
}
})())?example$reagent$dev_tools$tree(tree_atom,tree_state,v__$1,ks__$1):null)], null),example$reagent$dev_tools$tree_$_iter__12249(cljs.core.rest(s__12250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5092__auto__(((cljs.core.map_QMARK_(v))?v:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v)));
})()], null);
} else {
if(typeof v === 'string'){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$pre,"\"",v,"\""], null);
} else {
if((v == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i,"nil"], null);
} else {
if((v instanceof goog.date.UtcDateTime)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,[cljs.core.str(v)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$type,"datetime"], null)], null);
} else {
if((v instanceof goog.date.Date)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,[cljs.core.str(v)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$type,"localdate"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,[cljs.core.str(v)].join('')], null);

}
}
}
}
}
});
