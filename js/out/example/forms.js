// Compiled by ClojureScript 0.0-2913 {}
goog.provide('example.forms');
goog.require('cljs.core');
goog.require('lomakkeet.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
example.forms.humanize_error = (function humanize_error(x){
if((x instanceof schema.utils.ValidationError)){
var vec__17883 = (function (){var G__17884 = x.expectation_delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17884) : cljs.core.deref.call(null,G__17884));
})();
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883,(0),null);
if((b instanceof cljs.core.Symbol)){
return [cljs.core.str(b)].join('');
} else {
return "virhe";
}
} else {
return "virhe";
}
});
example.forms.form_status = (function form_status(fs){
var errors_QMARK_ = reagent.ratom.make_reaction((function (){
return lomakkeet.core.errors_QMARK_((function (){var G__17889 = fs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17889) : cljs.core.deref.call(null,G__17889));
})());
}));
var dirty_QMARK_ = reagent.ratom.make_reaction(((function (errors_QMARK_){
return (function (){
return lomakkeet.core.dirty_QMARK_((function (){var G__17890 = fs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17890) : cljs.core.deref.call(null,G__17890));
})());
});})(errors_QMARK_))
);
return ((function (errors_QMARK_,dirty_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$107,(cljs.core.truth_((function (){var G__17891 = errors_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17891) : cljs.core.deref.call(null,G__17891));
})())?"Form has error(s)":(cljs.core.truth_((function (){var G__17892 = dirty_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17892) : cljs.core.deref.call(null,G__17892));
})())?"Form has unsaved edits":null))], null);
});
;})(errors_QMARK_,dirty_QMARK_))
});
example.forms.cancel_btn = (function cancel_btn(fs){
var dirty_QMARK_ = reagent.ratom.make_reaction((function (){
return lomakkeet.core.dirty_QMARK_((function (){var G__17896 = fs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17896) : cljs.core.deref.call(null,G__17896));
})());
}));
return ((function (dirty_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$154,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,"button",cljs.core.constant$keyword$182,cljs.core.not((function (){var G__17897 = dirty_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17897) : cljs.core.deref.call(null,G__17897));
})()),cljs.core.constant$keyword$104,((function (dirty_QMARK_){
return (function (){
var G__17898 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17898) : re_frame.core.dispatch.call(null,G__17898));
});})(dirty_QMARK_))
], null),"Cancel"], null);
});
;})(dirty_QMARK_))
});
example.forms.save_btn = (function save_btn(fs){
var errors_QMARK_ = reagent.ratom.make_reaction((function (){
return lomakkeet.core.errors_QMARK_((function (){var G__17902 = fs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17902) : cljs.core.deref.call(null,G__17902));
})());
}));
return ((function (errors_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$154,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,"button",cljs.core.constant$keyword$182,(function (){var G__17903 = errors_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17903) : cljs.core.deref.call(null,G__17903));
})(),cljs.core.constant$keyword$104,((function (errors_QMARK_){
return (function (){
var G__17904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$184], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17904) : re_frame.core.dispatch.call(null,G__17904));
});})(errors_QMARK_))
], null),"Save"], null);
});
;})(errors_QMARK_))
});
