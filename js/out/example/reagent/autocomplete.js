// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('example.reagent.autocomplete');
goog.require('cljs.core');
goog.require('lomakkeet.autocomplete');
goog.require('lomakkeet.reagent.autocomplete');
goog.require('lomakkeet.reagent.impl');
goog.require('lomakkeet.reagent');
goog.require('example.autocomplete');
example.reagent.autocomplete.country_code__GT_name = (function example$reagent$autocomplete$country_code__GT_name(items,code){
return cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,code),cljs.core.constant$keyword$code),items)));
});
example.reagent.autocomplete.term_match_QMARK_ = (function example$reagent$autocomplete$term_match_QMARK_(item,term){
var or__4338__auto__ = (function (){var G__17136 = item;
var G__17136__$1 = (((G__17136 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__17136,cljs.core.constant$keyword$code));
var G__17136__$2 = (((G__17136__$1 == null))?null:cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__17136__$1.toLowerCase().indexOf(term),(-1)));
return G__17136__$2;
})();
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (function (){var G__17138 = item;
var G__17138__$1 = (((G__17138 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__17138,cljs.core.constant$keyword$name));
var G__17138__$2 = (((G__17138__$1 == null))?null:cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__17138__$1.toLowerCase().indexOf(term),(-1)));
return G__17138__$2;
})();
if(cljs.core.truth_(or__4338__auto____$1)){
return or__4338__auto____$1;
} else {
return false;
}
}
});
example.reagent.autocomplete.query_match_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.query_match_QMARK_,example.reagent.autocomplete.term_match_QMARK_);
example.reagent.autocomplete.country_select = (function example$reagent$autocomplete$country_select(){
var argseq__5378__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return example.reagent.autocomplete.country_select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5378__auto__);
});

example.reagent.autocomplete.country_select.cljs$core$IFn$_invoke$arity$variadic = (function (form,label,ks,p__17143){
var vec__17144 = p__17143;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17144,(0),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.complete,form,label,ks,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$value_DASH__GT_text,example.reagent.autocomplete.country_code__GT_name,cljs.core.array_seq([cljs.core.constant$keyword$items,example.autocomplete.countries,cljs.core.constant$keyword$item_DASH__GT_key,cljs.core.constant$keyword$code,cljs.core.constant$keyword$item_DASH__GT_text,cljs.core.constant$keyword$name,cljs.core.constant$keyword$term_DASH_match_QMARK_,((function (vec__17144,opts){
return (function (item,term){
var or__4338__auto__ = (function (){var G__17146 = item;
var G__17146__$1 = (((G__17146 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__17146,cljs.core.constant$keyword$code));
var G__17146__$2 = (((G__17146__$1 == null))?null:cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__17146__$1.toLowerCase().indexOf(term),(-1)));
return G__17146__$2;
})();
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (function (){var G__17148 = item;
var G__17148__$1 = (((G__17148 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__17148,cljs.core.constant$keyword$name));
var G__17148__$2 = (((G__17148__$1 == null))?null:cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__17148__$1.toLowerCase().indexOf(term),(-1)));
return G__17148__$2;
})();
if(cljs.core.truth_(or__4338__auto____$1)){
return or__4338__auto____$1;
} else {
return false;
}
}
});})(vec__17144,opts))
], 0))], null);
});

example.reagent.autocomplete.country_select.cljs$lang$maxFixedArity = (3);

example.reagent.autocomplete.country_select.cljs$lang$applyTo = (function (seq17139){
var G__17140 = cljs.core.first(seq17139);
var seq17139__$1 = cljs.core.next(seq17139);
var G__17141 = cljs.core.first(seq17139__$1);
var seq17139__$2 = cljs.core.next(seq17139__$1);
var G__17142 = cljs.core.first(seq17139__$2);
var seq17139__$3 = cljs.core.next(seq17139__$2);
return example.reagent.autocomplete.country_select.cljs$core$IFn$_invoke$arity$variadic(G__17140,G__17141,G__17142,seq17139__$3);
});
