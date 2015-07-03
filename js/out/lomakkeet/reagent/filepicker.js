// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
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

lomakkeet.reagent.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = (function (bytes,p__18092){
var vec__18093 = p__18092;
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18093,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (((bytes === (0)))?(0):(function (){var G__18094 = ((function (){var G__18095 = bytes;
return Math.log(G__18095);
})() / (function (){var G__18096 = (1000);
return Math.log(G__18096);
})());
return Math.floor(G__18094);
})());
var size = (bytes / (function (){var G__18097 = (1000);
var G__18098 = unit;
return Math.pow(G__18097,G__18098);
})());
var G__18099 = (function (){var or__4338__auto__ = fmt;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return "%0.1f %s";
}
})();
var G__18100 = size;
var G__18101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit);
return goog.string.format(G__18099,G__18100,G__18101);
});

lomakkeet.reagent.filepicker.humanize_filesize.cljs$lang$maxFixedArity = (1);

lomakkeet.reagent.filepicker.humanize_filesize.cljs$lang$applyTo = (function (seq18090){
var G__18091 = cljs.core.first(seq18090);
var seq18090__$1 = cljs.core.next(seq18090);
return lomakkeet.reagent.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$variadic(G__18091,seq18090__$1);
});
lomakkeet.reagent.filepicker.file_STAR_ = (function lomakkeet$reagent$filepicker$file_STAR_(form,p__18102){
var map__18109 = p__18102;
var map__18109__$1 = ((cljs.core.seq_QMARK_(map__18109))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18109):map__18109);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18109__$1,cljs.core.constant$keyword$ks);
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18109__$1,cljs.core.constant$keyword$file_DASH_select_DASH_label,"Select file");
var clearable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18109__$1,cljs.core.constant$keyword$clearable_QMARK_);
var this$ = reagent.core.current_component();
var form_value = reagent.ratom.make_reaction(((function (this$,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1((function (){var G__18110 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18110) : cljs.core.deref.call(null,G__18110));
})());
});})(this$,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_))
);
var value = reagent.ratom.make_reaction(((function (this$,form_value,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__18111 = form_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18111) : cljs.core.deref.call(null,G__18111));
})(),ks);
});})(this$,form_value,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_))
);
return ((function (this$,form_value,value,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$display,"none"], null),cljs.core.constant$keyword$type,"file",cljs.core.constant$keyword$on_DASH_change,((function (this$,form_value,value,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_){
return (function (e){
var temp__4421__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4421__auto__)){
var file = temp__4421__auto__;
return lomakkeet.reagent.impl.cb(form,ks,file);
} else {
return null;
}
});})(this$,form_value,value,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_))
,cljs.core.constant$keyword$on_DASH_blur,((function (this$,form_value,value,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return lomakkeet.reagent.impl.blur(form,ks);
});})(this$,form_value,value,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$on_DASH_click,((function (this$,form_value,value,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return reagent.core.dom_node(this$).getElementsByTagName("input").item((0)).click();
});})(this$,form_value,value,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_))
], null),file_select_label], null),(cljs.core.truth_(clearable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$on_DASH_click,((function (this$,form_value,value,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return lomakkeet.reagent.impl.cb(form,ks,null);
});})(this$,form_value,value,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_))
], null),"\u00D7"], null):null),(cljs.core.truth_((function (){var G__18112 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18112) : cljs.core.deref.call(null,G__18112));
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$selected_DASH_file," ",(function (){var G__18113 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18113) : cljs.core.deref.call(null,G__18113));
})().name,", ",lomakkeet.reagent.filepicker.humanize_filesize((function (){var G__18114 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18114) : cljs.core.deref.call(null,G__18114));
})().size)], null):null)], null);
});
;})(this$,form_value,value,map__18109,map__18109__$1,ks,file_select_label,clearable_QMARK_))
});
