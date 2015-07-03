// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('lomakkeet.reagent');
goog.require('cljs.core');
goog.require('lomakkeet.reagent.autocomplete');
goog.require('lomakkeet.reagent.impl');
goog.require('reagent.ratom');
goog.require('lomakkeet.util');
goog.require('lomakkeet.reagent.datepicker');
goog.require('lomakkeet.reagent.filepicker');
goog.require('lomakkeet.core');
lomakkeet.reagent.create_form = (function lomakkeet$reagent$create_form(){
var argseq__5378__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return lomakkeet.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5378__auto__);
});

lomakkeet.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (data,opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,cljs.core.constant$keyword$data,data,opts);
});

lomakkeet.reagent.create_form.cljs$lang$maxFixedArity = (1);

lomakkeet.reagent.create_form.cljs$lang$applyTo = (function (seq18123){
var G__18124 = cljs.core.first(seq18123);
var seq18123__$1 = cljs.core.next(seq18123);
return lomakkeet.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic(G__18124,seq18123__$1);
});
lomakkeet.reagent.form_group_com = (function lomakkeet$reagent$form_group_com(form){
var or__4338__auto__ = cljs.core.constant$keyword$form_DASH_group.cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return lomakkeet.reagent.impl.default_form_group;
}
});
lomakkeet.reagent.input = (function lomakkeet$reagent$input(){
var argseq__5378__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return lomakkeet.reagent.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5378__auto__);
});

lomakkeet.reagent.input.cljs$core$IFn$_invoke$arity$variadic = (function (form,label,ks,p__18129){
var vec__18130 = p__18129;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18130,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com(form),form,lomakkeet.reagent.impl.input_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$opts.cljs$core$IFn$_invoke$arity$1(form),opts], 0)),cljs.core.constant$keyword$label,label,cljs.core.array_seq([cljs.core.constant$keyword$ks,ks], 0))], null);
});

lomakkeet.reagent.input.cljs$lang$maxFixedArity = (3);

lomakkeet.reagent.input.cljs$lang$applyTo = (function (seq18125){
var G__18126 = cljs.core.first(seq18125);
var seq18125__$1 = cljs.core.next(seq18125);
var G__18127 = cljs.core.first(seq18125__$1);
var seq18125__$2 = cljs.core.next(seq18125__$1);
var G__18128 = cljs.core.first(seq18125__$2);
var seq18125__$3 = cljs.core.next(seq18125__$2);
return lomakkeet.reagent.input.cljs$core$IFn$_invoke$arity$variadic(G__18126,G__18127,G__18128,seq18125__$3);
});
lomakkeet.reagent.textarea = (function lomakkeet$reagent$textarea(){
var argseq__5378__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return lomakkeet.reagent.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5378__auto__);
});

lomakkeet.reagent.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (form,label,ks,p__18135){
var vec__18136 = p__18135;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18136,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com(form),form,lomakkeet.reagent.impl.input_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$opts.cljs$core$IFn$_invoke$arity$1(form),opts], 0)),cljs.core.constant$keyword$el,lomakkeet.reagent.impl.input_textarea,cljs.core.array_seq([cljs.core.constant$keyword$label,label,cljs.core.constant$keyword$ks,ks], 0))], null);
});

lomakkeet.reagent.textarea.cljs$lang$maxFixedArity = (3);

lomakkeet.reagent.textarea.cljs$lang$applyTo = (function (seq18131){
var G__18132 = cljs.core.first(seq18131);
var seq18131__$1 = cljs.core.next(seq18131);
var G__18133 = cljs.core.first(seq18131__$1);
var seq18131__$2 = cljs.core.next(seq18131__$1);
var G__18134 = cljs.core.first(seq18131__$2);
var seq18131__$3 = cljs.core.next(seq18131__$2);
return lomakkeet.reagent.textarea.cljs$core$IFn$_invoke$arity$variadic(G__18132,G__18133,G__18134,seq18131__$3);
});
lomakkeet.reagent.static$ = (function lomakkeet$reagent$static(){
var argseq__5378__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return lomakkeet.reagent.static$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5378__auto__);
});

lomakkeet.reagent.static$.cljs$core$IFn$_invoke$arity$variadic = (function (form,label,ks,p__18141){
var vec__18142 = p__18141;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18142,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com(form),form,lomakkeet.reagent.impl.input_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$opts.cljs$core$IFn$_invoke$arity$1(form),opts], 0)),cljs.core.constant$keyword$el,lomakkeet.reagent.impl.input_static,cljs.core.array_seq([cljs.core.constant$keyword$label,label,cljs.core.constant$keyword$ks,ks], 0))], null);
});

lomakkeet.reagent.static$.cljs$lang$maxFixedArity = (3);

lomakkeet.reagent.static$.cljs$lang$applyTo = (function (seq18137){
var G__18138 = cljs.core.first(seq18137);
var seq18137__$1 = cljs.core.next(seq18137);
var G__18139 = cljs.core.first(seq18137__$1);
var seq18137__$2 = cljs.core.next(seq18137__$1);
var G__18140 = cljs.core.first(seq18137__$2);
var seq18137__$3 = cljs.core.next(seq18137__$2);
return lomakkeet.reagent.static$.cljs$core$IFn$_invoke$arity$variadic(G__18138,G__18139,G__18140,seq18137__$3);
});
lomakkeet.reagent.checkbox = (function lomakkeet$reagent$checkbox(){
var argseq__5378__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return lomakkeet.reagent.checkbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5378__auto__);
});

lomakkeet.reagent.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (form,label,ks,p__18147){
var vec__18148 = p__18147;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18148,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com(form),form,lomakkeet.reagent.impl.checkbox_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$opts.cljs$core$IFn$_invoke$arity$1(form),opts], 0)),cljs.core.constant$keyword$label,label,cljs.core.array_seq([cljs.core.constant$keyword$ks,ks], 0))], null);
});

lomakkeet.reagent.checkbox.cljs$lang$maxFixedArity = (3);

lomakkeet.reagent.checkbox.cljs$lang$applyTo = (function (seq18143){
var G__18144 = cljs.core.first(seq18143);
var seq18143__$1 = cljs.core.next(seq18143);
var G__18145 = cljs.core.first(seq18143__$1);
var seq18143__$2 = cljs.core.next(seq18143__$1);
var G__18146 = cljs.core.first(seq18143__$2);
var seq18143__$3 = cljs.core.next(seq18143__$2);
return lomakkeet.reagent.checkbox.cljs$core$IFn$_invoke$arity$variadic(G__18144,G__18145,G__18146,seq18143__$3);
});
lomakkeet.reagent.select = (function lomakkeet$reagent$select(){
var argseq__5378__auto__ = ((((4) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(4)),(0))):null);
return lomakkeet.reagent.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5378__auto__);
});

lomakkeet.reagent.select.cljs$core$IFn$_invoke$arity$variadic = (function (form,label,ks,options,p__18154){
var vec__18155 = p__18154;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18155,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com(form),form,lomakkeet.reagent.impl.select_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$opts.cljs$core$IFn$_invoke$arity$1(form),opts], 0)),cljs.core.constant$keyword$label,label,cljs.core.array_seq([cljs.core.constant$keyword$ks,ks,cljs.core.constant$keyword$options,options], 0))], null);
});

lomakkeet.reagent.select.cljs$lang$maxFixedArity = (4);

lomakkeet.reagent.select.cljs$lang$applyTo = (function (seq18149){
var G__18150 = cljs.core.first(seq18149);
var seq18149__$1 = cljs.core.next(seq18149);
var G__18151 = cljs.core.first(seq18149__$1);
var seq18149__$2 = cljs.core.next(seq18149__$1);
var G__18152 = cljs.core.first(seq18149__$2);
var seq18149__$3 = cljs.core.next(seq18149__$2);
var G__18153 = cljs.core.first(seq18149__$3);
var seq18149__$4 = cljs.core.next(seq18149__$3);
return lomakkeet.reagent.select.cljs$core$IFn$_invoke$arity$variadic(G__18150,G__18151,G__18152,G__18153,seq18149__$4);
});
lomakkeet.reagent.date = (function lomakkeet$reagent$date(){
var argseq__5378__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return lomakkeet.reagent.date.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5378__auto__);
});

lomakkeet.reagent.date.cljs$core$IFn$_invoke$arity$variadic = (function (form,label,ks,p__18160){
var vec__18161 = p__18160;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18161,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com(form),form,lomakkeet.reagent.datepicker.date_STAR_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$opts.cljs$core$IFn$_invoke$arity$1(form),opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$label,label,cljs.core.constant$keyword$ks,ks], null)], 0))], null);
});

lomakkeet.reagent.date.cljs$lang$maxFixedArity = (3);

lomakkeet.reagent.date.cljs$lang$applyTo = (function (seq18156){
var G__18157 = cljs.core.first(seq18156);
var seq18156__$1 = cljs.core.next(seq18156);
var G__18158 = cljs.core.first(seq18156__$1);
var seq18156__$2 = cljs.core.next(seq18156__$1);
var G__18159 = cljs.core.first(seq18156__$2);
var seq18156__$3 = cljs.core.next(seq18156__$2);
return lomakkeet.reagent.date.cljs$core$IFn$_invoke$arity$variadic(G__18157,G__18158,G__18159,seq18156__$3);
});
lomakkeet.reagent.file = (function lomakkeet$reagent$file(){
var argseq__5378__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return lomakkeet.reagent.file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5378__auto__);
});

lomakkeet.reagent.file.cljs$core$IFn$_invoke$arity$variadic = (function (form,label,ks,p__18166){
var vec__18167 = p__18166;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18167,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com(form),form,lomakkeet.reagent.filepicker.file_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$opts.cljs$core$IFn$_invoke$arity$1(form),opts], 0)),cljs.core.constant$keyword$label,label,cljs.core.array_seq([cljs.core.constant$keyword$ks,ks], 0))], null);
});

lomakkeet.reagent.file.cljs$lang$maxFixedArity = (3);

lomakkeet.reagent.file.cljs$lang$applyTo = (function (seq18162){
var G__18163 = cljs.core.first(seq18162);
var seq18162__$1 = cljs.core.next(seq18162);
var G__18164 = cljs.core.first(seq18162__$1);
var seq18162__$2 = cljs.core.next(seq18162__$1);
var G__18165 = cljs.core.first(seq18162__$2);
var seq18162__$3 = cljs.core.next(seq18162__$2);
return lomakkeet.reagent.file.cljs$core$IFn$_invoke$arity$variadic(G__18163,G__18164,G__18165,seq18162__$3);
});
lomakkeet.reagent.complete = (function lomakkeet$reagent$complete(){
var argseq__5378__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return lomakkeet.reagent.complete.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5378__auto__);
});

lomakkeet.reagent.complete.cljs$core$IFn$_invoke$arity$variadic = (function (form,label,ks,p__18172){
var vec__18173 = p__18172;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18173,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com(form),form,lomakkeet.reagent.autocomplete.autocomplete_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$opts.cljs$core$IFn$_invoke$arity$1(form),opts], 0)),cljs.core.constant$keyword$label,label,cljs.core.array_seq([cljs.core.constant$keyword$ks,ks], 0))], null);
});

lomakkeet.reagent.complete.cljs$lang$maxFixedArity = (3);

lomakkeet.reagent.complete.cljs$lang$applyTo = (function (seq18168){
var G__18169 = cljs.core.first(seq18168);
var seq18168__$1 = cljs.core.next(seq18168);
var G__18170 = cljs.core.first(seq18168__$1);
var seq18168__$2 = cljs.core.next(seq18168__$1);
var G__18171 = cljs.core.first(seq18168__$2);
var seq18168__$3 = cljs.core.next(seq18168__$2);
return lomakkeet.reagent.complete.cljs$core$IFn$_invoke$arity$variadic(G__18169,G__18170,G__18171,seq18168__$3);
});
lomakkeet.reagent.__GT_fs = lomakkeet.core.__GT_fs;
lomakkeet.reagent.reset = lomakkeet.core.reset;
lomakkeet.reagent.commit = lomakkeet.core.commit;
lomakkeet.reagent.save = lomakkeet.core.save;
lomakkeet.reagent.update = lomakkeet.core.update;
lomakkeet.reagent.dirty_QMARK_ = lomakkeet.core.dirty_QMARK_;
lomakkeet.reagent.errors_QMARK_ = lomakkeet.core.errors_QMARK_;
