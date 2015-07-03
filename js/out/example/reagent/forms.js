// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('example.reagent.forms');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('lomakkeet.core');
example.reagent.forms.form_status = (function example$reagent$forms$form_status(form){
var errors_QMARK_ = reagent.ratom.make_reaction((function (){
return lomakkeet.core.errors_QMARK_((function (){var G__17161 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17161) : cljs.core.deref.call(null,G__17161));
})());
}));
var dirty_QMARK_ = reagent.ratom.make_reaction(((function (errors_QMARK_){
return (function (){
return lomakkeet.core.dirty_QMARK_((function (){var G__17162 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17162) : cljs.core.deref.call(null,G__17162));
})());
});})(errors_QMARK_))
);
return ((function (errors_QMARK_,dirty_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,(cljs.core.truth_((function (){var G__17163 = errors_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17163) : cljs.core.deref.call(null,G__17163));
})())?"Form has error(s)":(cljs.core.truth_((function (){var G__17164 = dirty_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17164) : cljs.core.deref.call(null,G__17164));
})())?"Form has unsaved edits":null))], null);
});
;})(errors_QMARK_,dirty_QMARK_))
});
example.reagent.forms.cancel_btn = (function example$reagent$forms$cancel_btn(form){
var dirty_QMARK_ = reagent.ratom.make_reaction((function (){
return lomakkeet.core.dirty_QMARK_((function (){var G__17167 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17167) : cljs.core.deref.call(null,G__17167));
})());
}));
return ((function (dirty_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$disabled,cljs.core.not((function (){var G__17168 = dirty_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17168) : cljs.core.deref.call(null,G__17168));
})()),cljs.core.constant$keyword$on_DASH_click,((function (dirty_QMARK_){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form),lomakkeet.core.reset);
});})(dirty_QMARK_))
], null),"Cancel"], null);
});
;})(dirty_QMARK_))
});
example.reagent.forms.save_btn = (function example$reagent$forms$save_btn(form){
var dirty_QMARK_ = reagent.ratom.make_reaction((function (){
return lomakkeet.core.dirty_QMARK_((function (){var G__17175 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17175) : cljs.core.deref.call(null,G__17175));
})());
}));
var errors_QMARK_ = reagent.ratom.make_reaction(((function (dirty_QMARK_){
return (function (){
return lomakkeet.core.errors_QMARK_((function (){var G__17176 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17176) : cljs.core.deref.call(null,G__17176));
})());
});})(dirty_QMARK_))
);
return ((function (dirty_QMARK_,errors_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$disabled,(function (){var or__4338__auto__ = cljs.core.not((function (){var G__17179 = dirty_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17179) : cljs.core.deref.call(null,G__17179));
})());
if(or__4338__auto__){
return or__4338__auto__;
} else {
var G__17180 = errors_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17180) : cljs.core.deref.call(null,G__17180));
}
})(),cljs.core.constant$keyword$on_DASH_click,((function (dirty_QMARK_,errors_QMARK_){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form),lomakkeet.core.commit);
});})(dirty_QMARK_,errors_QMARK_))
], null),"Save"], null);
});
;})(dirty_QMARK_,errors_QMARK_))
});
