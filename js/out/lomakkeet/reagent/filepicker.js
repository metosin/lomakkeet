// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('lomakkeet.reagent.filepicker');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('lomakkeet.reagent.impl');
lomakkeet.reagent.filepicker.humanize_filesize = (function lomakkeet$reagent$filepicker$humanize_filesize(){
var argseq__5378__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return lomakkeet.reagent.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5378__auto__);
});

lomakkeet.reagent.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = (function (bytes,p__18098){
var vec__18099 = p__18098;
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18099,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (((bytes === (0)))?(0):(function (){var G__18100 = ((function (){var G__18101 = bytes;
return Math.log(G__18101);
})() / (function (){var G__18102 = (1000);
return Math.log(G__18102);
})());
return Math.floor(G__18100);
})());
var size = (bytes / (function (){var G__18103 = (1000);
var G__18104 = unit;
return Math.pow(G__18103,G__18104);
})());
var G__18105 = (function (){var or__4338__auto__ = fmt;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return "%0.1f %s";
}
})();
var G__18106 = size;
var G__18107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit);
return goog.string.format(G__18105,G__18106,G__18107);
});

lomakkeet.reagent.filepicker.humanize_filesize.cljs$lang$maxFixedArity = (1);

lomakkeet.reagent.filepicker.humanize_filesize.cljs$lang$applyTo = (function (seq18096){
var G__18097 = cljs.core.first(seq18096);
var seq18096__$1 = cljs.core.next(seq18096);
return lomakkeet.reagent.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$variadic(G__18097,seq18096__$1);
});
lomakkeet.reagent.filepicker.file_STAR_ = (function lomakkeet$reagent$filepicker$file_STAR_(form,p__18108){
var map__18115 = p__18108;
var map__18115__$1 = ((cljs.core.seq_QMARK_(map__18115))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18115):map__18115);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18115__$1,cljs.core.constant$keyword$ks);
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18115__$1,cljs.core.constant$keyword$file_DASH_select_DASH_label,"Select file");
var clearable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18115__$1,cljs.core.constant$keyword$clearable_QMARK_);
var this$ = reagent.core.current_component();
var form_value = reagent.ratom.make_reaction(((function (this$,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1((function (){var G__18116 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18116) : cljs.core.deref.call(null,G__18116));
})());
});})(this$,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_))
);
var value = reagent.ratom.make_reaction(((function (this$,form_value,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__18117 = form_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18117) : cljs.core.deref.call(null,G__18117));
})(),ks);
});})(this$,form_value,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_))
);
return ((function (this$,form_value,value,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$display,"none"], null),cljs.core.constant$keyword$type,"file",cljs.core.constant$keyword$on_DASH_change,((function (this$,form_value,value,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_){
return (function (e){
var temp__4423__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4423__auto__)){
var file = temp__4423__auto__;
return lomakkeet.reagent.impl.cb(form,ks,file);
} else {
return null;
}
});})(this$,form_value,value,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_))
,cljs.core.constant$keyword$on_DASH_blur,((function (this$,form_value,value,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return lomakkeet.reagent.impl.blur(form,ks);
});})(this$,form_value,value,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$on_DASH_click,((function (this$,form_value,value,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return reagent.core.dom_node(this$).getElementsByTagName("input").item((0)).click();
});})(this$,form_value,value,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_))
], null),file_select_label], null),(cljs.core.truth_(clearable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$on_DASH_click,((function (this$,form_value,value,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return lomakkeet.reagent.impl.cb(form,ks,null);
});})(this$,form_value,value,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_))
], null),"\u00D7"], null):null),(cljs.core.truth_((function (){var G__18118 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18118) : cljs.core.deref.call(null,G__18118));
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$selected_DASH_file," ",(function (){var G__18119 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18119) : cljs.core.deref.call(null,G__18119));
})().name,", ",lomakkeet.reagent.filepicker.humanize_filesize((function (){var G__18120 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18120) : cljs.core.deref.call(null,G__18120));
})().size)], null):null)], null);
});
;})(this$,form_value,value,map__18115,map__18115__$1,ks,file_select_label,clearable_QMARK_))
});
