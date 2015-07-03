// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('lomakkeet.reagent.datepicker');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('lomakkeet.reagent.impl');
goog.require('lomakkeet.date');
goog.require('reagent.ratom');
goog.require('lomakkeet.core');
lomakkeet.reagent.datepicker.try_deref = (function lomakkeet$reagent$datepicker$try_deref(x){
if((function (){var G__18058 = x;
if(G__18058){
var bit__5012__auto__ = (G__18058.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5012__auto__) || (G__18058.cljs$core$IDeref$)){
return true;
} else {
if((!G__18058.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__18058);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__18058);
}
})()){
var G__18059 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18059) : cljs.core.deref.call(null,G__18059));
} else {
return x;
}
});
lomakkeet.reagent.datepicker.date_STAR_ = (function lomakkeet$reagent$datepicker$date_STAR_(form,p__18061){
var map__18076 = p__18061;
var map__18076__$1 = ((cljs.core.seq_QMARK_(map__18076))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18076):map__18076);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18076__$1,cljs.core.constant$keyword$ks);
var datepicker_i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18076__$1,cljs.core.constant$keyword$datepicker_DASH_i18n);
var min_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18076__$1,cljs.core.constant$keyword$min_DASH_date);
var max_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18076__$1,cljs.core.constant$keyword$max_DASH_date);
var el = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var form_value = reagent.ratom.make_reaction(((function (el,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date){
return (function (){
return cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1((function (){var G__18077 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18077) : cljs.core.deref.call(null,G__18077));
})());
});})(el,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date))
);
var value = reagent.ratom.make_reaction(((function (el,form_value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__18078 = form_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18078) : cljs.core.deref.call(null,G__18078));
})(),ks);
});})(el,form_value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date))
);
if(cljs.core.truth_(min_date)){
var co__16543__auto___18090 = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (el,form_value,value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date){
return (function (){
if(cljs.core.truth_((function (){var G__18079 = el;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18079) : cljs.core.deref.call(null,G__18079));
})())){
return (function (){var G__18080 = el;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18080) : cljs.core.deref.call(null,G__18080));
})().setMinDate(lomakkeet.reagent.datepicker.try_deref(min_date));
} else {
return null;
}
});})(el,form_value,value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date))
,cljs.core.array_seq([cljs.core.constant$keyword$auto_DASH_run,true], 0));
var G__18081_18091 = co__16543__auto___18090;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18081_18091) : cljs.core.deref.call(null,G__18081_18091));

} else {
}

if(cljs.core.truth_(max_date)){
var co__16543__auto___18092 = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (el,form_value,value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date){
return (function (){
if(cljs.core.truth_((function (){var G__18082 = el;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18082) : cljs.core.deref.call(null,G__18082));
})())){
return (function (){var G__18083 = el;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18083) : cljs.core.deref.call(null,G__18083));
})().setMaxDate(lomakkeet.reagent.datepicker.try_deref(max_date));
} else {
return null;
}
});})(el,form_value,value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date))
,cljs.core.array_seq([cljs.core.constant$keyword$auto_DASH_run,true], 0));
var G__18084_18093 = co__16543__auto___18092;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18084_18093) : cljs.core.deref.call(null,G__18084_18093));

} else {
}

return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$component_DASH_did_DASH_mount,((function (el,form_value,value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date){
return (function (this$){
var G__18085 = el;
var G__18086 = (new Pikaday(cljs.core.clj__GT_js((function (){var G__18087 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$field,reagent.core.dom_node(this$),cljs.core.constant$keyword$format,"D.M.YYYY",cljs.core.constant$keyword$firstDay,(1),cljs.core.constant$keyword$onSelect,((function (G__18085,el,form_value,value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date){
return (function (p1__18060_SHARP_){
return lomakkeet.reagent.impl.cb(form,ks,lomakkeet.date.jsdate__GT_local_date(p1__18060_SHARP_));
});})(G__18085,el,form_value,value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date))
], null);
var G__18087__$1 = (cljs.core.truth_(datepicker_i18n)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18087,cljs.core.constant$keyword$i18n,datepicker_i18n):G__18087);
return G__18087__$1;
})())));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18085,G__18086) : cljs.core.reset_BANG_.call(null,G__18085,G__18086));
});})(el,form_value,value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date))
,cljs.core.constant$keyword$reagent_DASH_render,((function (el,form_value,value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([lomakkeet.reagent.impl.get_or_deref(cljs.core.constant$keyword$attrs.cljs$core$IFn$_invoke$arity$1(form)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$value,(function (){var or__4338__auto__ = lomakkeet.date.date__GT_str((function (){var G__18089 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18089) : cljs.core.deref.call(null,G__18089));
})());
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$on_DASH_change,cljs.core.identity,cljs.core.constant$keyword$on_DASH_blur,((function (el,form_value,value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date){
return (function (){
return lomakkeet.reagent.impl.blur(form,ks);
});})(el,form_value,value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date))
], null)], 0))], null);
});})(el,form_value,value,map__18076,map__18076__$1,ks,datepicker_i18n,min_date,max_date))
], null));
});
