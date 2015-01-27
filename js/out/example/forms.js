// Compiled by ClojureScript 0.0-2727 {}
goog.provide('example.forms');
goog.require('cljs.core');
goog.require('cljs.core.async');
example.forms.humanize_error = (function humanize_error(x){
if((x instanceof schema.utils.ValidationError)){
var vec__21743 = (function (){var G__21744 = x.expectation_delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21744) : cljs.core.deref.call(null,G__21744));
})();
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21743,(0),null);
if((b instanceof cljs.core.Symbol)){
return [cljs.core.str(b)].join('');
} else {
return "virhe";
}
} else {
return "virhe";
}
});
example.forms.form_status = (function form_status(p__21745){
var map__21747 = p__21745;
var map__21747__$1 = ((cljs.core.seq_QMARK_(map__21747))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21747):map__21747);
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21747__$1,cljs.core.constant$keyword$162);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21747__$1,cljs.core.constant$keyword$66);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21747__$1,cljs.core.constant$keyword$154);
if(cljs.core.truth_((function (){var and__4239__auto__ = !(cljs.core.empty_QMARK_);
if(and__4239__auto__){
return errors;
} else {
return and__4239__auto__;
}
})())){
return "Form has error(s)";
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,initial_value)){
return "Form has unsaved edits";
} else {
return null;
}
}
});
example.forms.cancel_btn = (function cancel_btn(form_state,ch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$192,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,"button",cljs.core.constant$keyword$139,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(form_state),cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(form_state)),cljs.core.constant$keyword$179,(function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$193], null));
})], null),"Cancel"], null);
});
example.forms.save_btn = (function save_btn(form_state,ch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$192,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,"button",cljs.core.constant$keyword$139,cljs.core.seq(cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(form_state)),cljs.core.constant$keyword$179,(function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$145,cljs.core.constant$keyword$145,cljs.core.constant$keyword$194], null));
})], null),"Save"], null);
});
