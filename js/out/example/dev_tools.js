// Compiled by ClojureScript 0.0-2913 {}
goog.provide('example.dev_tools');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof example.dev_tools.open_QMARK_ !== 'undefined'){
} else {
example.dev_tools.open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
example.dev_tools.toggle = (function toggle(v,ks){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,ks))){
return cljs.core.assoc_in(v,ks,null);
} else {
return cljs.core.assoc_in(v,ks,cljs.core.PersistentArrayMap.EMPTY);
}
});
example.dev_tools.key__GT_string = (function key__GT_string(k){
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
example.dev_tools.tree = (function tree(tree_atom,tree_state,v,ks){
if(cljs.core.coll_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,(function (){var iter__4681__auto__ = (function iter__12467(s__12468){
return (new cljs.core.LazySeq(null,(function (){
var s__12468__$1 = s__12468;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__12468__$1);
if(temp__4126__auto__){
var s__12468__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12468__$2)){
var c__4679__auto__ = cljs.core.chunk_first(s__12468__$2);
var size__4680__auto__ = cljs.core.count(c__4679__auto__);
var b__12470 = cljs.core.chunk_buffer(size__4680__auto__);
if((function (){var i__12469 = (0);
while(true){
if((i__12469 < size__4680__auto__)){
var vec__12475 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4679__auto__,i__12469);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12475,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12475,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__12470,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$100,example.dev_tools.key__GT_string(k),cljs.core.constant$keyword$80,[cljs.core.str(((cljs.core.coll_QMARK_(v__$1))?"coll":"single")),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree_state,ks__$1))?"open":"closed"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$103,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$104,((function (i__12469,ks__$1,vec__12475,k,v__$1,c__4679__auto__,size__4680__auto__,b__12470,s__12468__$2,temp__4126__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tree_atom,example.dev_tools.toggle,ks__$1);
});})(i__12469,ks__$1,vec__12475,k,v__$1,c__4679__auto__,size__4680__auto__,b__12470,s__12468__$2,temp__4126__auto__))
], null),(((k instanceof cljs.core.Keyword))?example.dev_tools.key__GT_string(k):k)], null),": ",(cljs.core.truth_((function (){var or__3925__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3925__auto__){
return or__3925__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree_state,ks__$1);
}
})())?tree(tree_atom,tree_state,v__$1,ks__$1):null)], null));

var G__12477 = (i__12469 + (1));
i__12469 = G__12477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12470),iter__12467(cljs.core.chunk_rest(s__12468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12470),null);
}
} else {
var vec__12476 = cljs.core.first(s__12468__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12476,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12476,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$100,example.dev_tools.key__GT_string(k),cljs.core.constant$keyword$80,[cljs.core.str(((cljs.core.coll_QMARK_(v__$1))?"coll":"single")),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree_state,ks__$1))?"open":"closed"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$103,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$104,((function (ks__$1,vec__12476,k,v__$1,s__12468__$2,temp__4126__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tree_atom,example.dev_tools.toggle,ks__$1);
});})(ks__$1,vec__12476,k,v__$1,s__12468__$2,temp__4126__auto__))
], null),(((k instanceof cljs.core.Keyword))?example.dev_tools.key__GT_string(k):k)], null),": ",(cljs.core.truth_((function (){var or__3925__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3925__auto__){
return or__3925__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree_state,ks__$1);
}
})())?tree(tree_atom,tree_state,v__$1,ks__$1):null)], null),iter__12467(cljs.core.rest(s__12468__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4681__auto__(((cljs.core.map_QMARK_(v))?v:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v)));
})()], null);
} else {
if(typeof v === 'string'){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$105,"\"",v,"\""], null);
} else {
if((v == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$106,"nil"], null);
} else {
if((v instanceof goog.date.UtcDateTime)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$107,[cljs.core.str(v)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,"datetime"], null)], null);
} else {
if((v instanceof goog.date.Date)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$107,[cljs.core.str(v)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,"localdate"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$107,[cljs.core.str(v)].join('')], null);

}
}
}
}
}
});
