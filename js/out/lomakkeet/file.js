// Compiled by ClojureScript 0.0-2913 {}
goog.provide('lomakkeet.file');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.ratom');
goog.require('reagent.core');
goog.require('goog.dom');
goog.require('goog.string');
/**
* @param {...*} var_args
*/
lomakkeet.file.humanize_filesize = (function() { 
var humanize_filesize__delegate = function (bytes,p__18133){
var vec__18143 = p__18133;
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18143,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (function (){var G__18144 = ((function (){var G__18145 = bytes;
return Math.log(G__18145);
})() / (function (){var G__18146 = (1000);
return Math.log(G__18146);
})());
return Math.floor(G__18144);
})();
var size = (bytes / (function (){var G__18147 = (1000);
var G__18148 = unit;
return Math.pow(G__18147,G__18148);
})());
var G__18149 = (function (){var or__3925__auto__ = fmt;
if(cljs.core.truth_(or__3925__auto__)){
return or__3925__auto__;
} else {
return "%0.1f %s";
}
})();
var G__18150 = size;
var G__18151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit);
return goog.string.format(G__18149,G__18150,G__18151);
};
var humanize_filesize = function (bytes,var_args){
var p__18133 = null;
if (arguments.length > 1) {
var G__18152__i = 0, G__18152__a = new Array(arguments.length -  1);
while (G__18152__i < G__18152__a.length) {G__18152__a[G__18152__i] = arguments[G__18152__i + 1]; ++G__18152__i;}
  p__18133 = new cljs.core.IndexedSeq(G__18152__a,0);
} 
return humanize_filesize__delegate.call(this,bytes,p__18133);};
humanize_filesize.cljs$lang$maxFixedArity = 1;
humanize_filesize.cljs$lang$applyTo = (function (arglist__18153){
var bytes = cljs.core.first(arglist__18153);
var p__18133 = cljs.core.rest(arglist__18153);
return humanize_filesize__delegate(bytes,p__18133);
});
humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = humanize_filesize__delegate;
return humanize_filesize;
})()
;
lomakkeet.file.file_STAR_ = (function file_STAR_(form,p__18154){
var map__18162 = p__18154;
var map__18162__$1 = ((cljs.core.seq_QMARK_(map__18162))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18162):map__18162);
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18162__$1,cljs.core.constant$keyword$150,"Select file");
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18162__$1,cljs.core.constant$keyword$138);
var this$ = reagent.core.current_component();
var value = reagent.ratom.make_reaction(((function (this$,map__18162,map__18162__$1,file_select_label,ks){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$139.cljs$core$IFn$_invoke$arity$1((function (){var G__18163 = form;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18163) : cljs.core.deref.call(null,G__18163));
})()),ks);
});})(this$,map__18162,map__18162__$1,file_select_label,ks))
);
return ((function (this$,value,map__18162,map__18162__$1,file_select_label,ks){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$81,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$153,"none"], null),cljs.core.constant$keyword$23,"file",cljs.core.constant$keyword$141,((function (this$,value,map__18162,map__18162__$1,file_select_label,ks){
return (function (e){
var temp__4124__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4124__auto__)){
var file = temp__4124__auto__;
var G__18164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$138,ks,cljs.core.constant$keyword$21,file], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18164) : re_frame.core.dispatch.call(null,G__18164));
} else {
return null;
}
});})(this$,value,map__18162,map__18162__$1,file_select_label,ks))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$154,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,"button",cljs.core.constant$keyword$104,((function (this$,value,map__18162,map__18162__$1,file_select_label,ks){
return (function (){
return reagent.core.dom_node(this$).getElementsByTagName("input").item((0)).click();
});})(this$,value,map__18162,map__18162__$1,file_select_label,ks))
], null),file_select_label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,"button",cljs.core.constant$keyword$104,((function (this$,value,map__18162,map__18162__$1,file_select_label,ks){
return (function (){
var G__18165 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$138,ks,cljs.core.constant$keyword$21,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18165) : re_frame.core.dispatch.call(null,G__18165));
});})(this$,value,map__18162,map__18162__$1,file_select_label,ks))
], null),"\u00D7"], null),(cljs.core.truth_((function (){var G__18166 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18166) : cljs.core.deref.call(null,G__18166));
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156," ",(function (){var G__18167 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18167) : cljs.core.deref.call(null,G__18167));
})().name,", ",lomakkeet.file.humanize_filesize((function (){var G__18168 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18168) : cljs.core.deref.call(null,G__18168));
})().size)], null):null)], null);
});
;})(this$,value,map__18162,map__18162__$1,file_select_label,ks))
});
