// Compiled by ClojureScript 0.0-2913 {}
goog.provide('lomakkeet.datepicker');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('re_frame.core');
goog.require('reagent.ratom');
goog.require('reagent.core');
lomakkeet.datepicker.jsdate__GT_local_date = (function jsdate__GT_local_date(v){
if(cljs.core.truth_(v)){
var G__18101 = (new goog.date.Date());
G__18101.setYear(v.getFullYear());

G__18101.setMonth(v.getMonth());

G__18101.setDate(v.getDate());

return G__18101;
} else {
return null;
}
});
lomakkeet.datepicker.local_date__GT_jsdate = (function local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__18103 = (new Date());
G__18103.setYear(v.getFullYear());

G__18103.setMonth(v.getMonth());

G__18103.setDate(v.getDate());

G__18103.setHours((0));

G__18103.setMinutes((0));

G__18103.setSeconds((0));

return G__18103;
} else {
return null;
}
});
lomakkeet.datepicker.date__GT_str = (function date__GT_str(v){
if(cljs.core.truth_(v)){
var G__18108 = "%d.%d.%d";
var G__18109 = v.getDate();
var G__18110 = (v.getMonth() + (1));
var G__18111 = v.getFullYear();
return goog.string.format(G__18108,G__18109,G__18110,G__18111);
} else {
return null;
}
});
lomakkeet.datepicker.date_STAR_ = (function date_STAR_(form,p__18113){
var map__18122 = p__18113;
var map__18122__$1 = ((cljs.core.seq_QMARK_(map__18122))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18122):map__18122);
var datepicker_i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18122__$1,cljs.core.constant$keyword$137);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18122__$1,cljs.core.constant$keyword$138);
var el = (function (){var G__18123 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18123) : cljs.core.atom.call(null,G__18123));
})();
var value = reagent.ratom.make_reaction(((function (el,map__18122,map__18122__$1,datepicker_i18n,ks){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$139.cljs$core$IFn$_invoke$arity$1((function (){var G__18124 = form;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18124) : cljs.core.deref.call(null,G__18124));
})()),ks);
});})(el,map__18122,map__18122__$1,datepicker_i18n,ks))
);
return cljs.core.with_meta(((function (el,value,map__18122,map__18122__$1,datepicker_i18n,ks){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$140,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,"text",cljs.core.constant$keyword$21,(function (){var or__3925__auto__ = lomakkeet.datepicker.date__GT_str((function (){var G__18126 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18126) : cljs.core.deref.call(null,G__18126));
})());
if(cljs.core.truth_(or__3925__auto__)){
return or__3925__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$141,cljs.core.identity], null)], null);
});})(el,value,map__18122,map__18122__$1,datepicker_i18n,ks))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$142,((function (el,value,map__18122,map__18122__$1,datepicker_i18n,ks){
return (function (this$){
var G__18127_18130 = "foo";
console.log(G__18127_18130);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(el,(new Pikaday(cljs.core.clj__GT_js((function (){var G__18128 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$143,reagent.core.dom_node(this$),cljs.core.constant$keyword$144,"D.M.YYYY",cljs.core.constant$keyword$145,(1),cljs.core.constant$keyword$146,((function (el,value,map__18122,map__18122__$1,datepicker_i18n,ks){
return (function (p1__18112_SHARP_){
var G__18129 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$138,ks,cljs.core.constant$keyword$21,lomakkeet.datepicker.jsdate__GT_local_date(p1__18112_SHARP_)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18129) : re_frame.core.dispatch.call(null,G__18129));
});})(el,value,map__18122,map__18122__$1,datepicker_i18n,ks))
], null);
var G__18128__$1 = (cljs.core.truth_(datepicker_i18n)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18128,cljs.core.constant$keyword$148,datepicker_i18n):G__18128);
return G__18128__$1;
})()))));
});})(el,value,map__18122,map__18122__$1,datepicker_i18n,ks))
], null));
});
