// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
cljs_time.internal.core._EQ_ = (function cljs_time$internal$core$_EQ_(){
var argseq__5378__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__5378__auto__);
});

cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.every_QMARK_((function (p1__18664_SHARP_){
return (p1__18664_SHARP_ instanceof goog.date.Date);
}),args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18665_SHARP_){
return p1__18665_SHARP_.getTime();
}),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,args);

}
});

cljs_time.internal.core._EQ_.cljs$lang$maxFixedArity = (0);

cljs_time.internal.core._EQ_.cljs$lang$applyTo = (function (seq18666){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18666));
});
cljs_time.internal.core.leap_year_QMARK_ = (function cljs_time$internal$core$leap_year_QMARK_(y){
if((cljs.core.mod(y,(400)) === (0))){
return true;
} else {
if((cljs.core.mod(y,(100)) === (0))){
return false;
} else {
if((cljs.core.mod(y,(4)) === (0))){
return true;
} else {
return false;

}
}
}
});
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
cljs_time.internal.core.year_corrected_dim = (function cljs_time$internal$core$year_corrected_dim(year,month){
var G__18669 = (function (){var G__18670 = (cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(1)], 0)))?(11):(month - (1)));
return (cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1 ? cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1(G__18670) : cljs_time.internal.core.days_in_month.call(null,G__18670));
})();
var G__18669__$1 = (cljs.core.truth_((function (){var and__4326__auto__ = cljs_time.internal.core.leap_year_QMARK_(year);
if(cljs.core.truth_(and__4326__auto__)){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(2)], 0));
} else {
return and__4326__auto__;
}
})())?(G__18669 + (1)):G__18669);
return G__18669__$1;
});
cljs_time.internal.core.valid_date_QMARK_ = (function cljs_time$internal$core$valid_date_QMARK_(p__18671){
var map__18673 = p__18671;
var map__18673__$1 = ((cljs.core.seq_QMARK_(map__18673))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18673):map__18673);
var d = map__18673__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.constant$keyword$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.constant$keyword$months);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.constant$keyword$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.constant$keyword$hours);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.constant$keyword$minutes);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.constant$keyword$seconds);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.constant$keyword$millis);
var months__$1 = (months + (1));
var _GT__LT_ = ((function (months__$1,map__18673,map__18673__$1,d,years,months,days,hours,minutes,seconds,millis){
return (function cljs_time$internal$core$valid_date_QMARK__$__GT__LT_(a,b,x){
return ((x >= a)) && ((x <= b));
});})(months__$1,map__18673,map__18673__$1,d,years,months,days,hours,minutes,seconds,millis))
;
if(cljs.core.truth_((function (){var and__4326__auto__ = years;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = _GT__LT_((1),(12),months__$1);
if(cljs.core.truth_(and__4326__auto____$1)){
var and__4326__auto____$2 = _GT__LT_((1),cljs_time.internal.core.year_corrected_dim(years,months__$1),days);
if(cljs.core.truth_(and__4326__auto____$2)){
var and__4326__auto____$3 = _GT__LT_((0),(23),hours);
if(cljs.core.truth_(and__4326__auto____$3)){
var and__4326__auto____$4 = _GT__LT_((0),(59),minutes);
if(cljs.core.truth_(and__4326__auto____$4)){
var and__4326__auto____$5 = _GT__LT_((0),(60),seconds);
if(cljs.core.truth_(and__4326__auto____$5)){
return _GT__LT_((0),(999),millis);
} else {
return and__4326__auto____$5;
}
} else {
return and__4326__auto____$4;
}
} else {
return and__4326__auto____$3;
}
} else {
return and__4326__auto____$2;
}
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Date is not valid",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$invalid_DASH_date,cljs.core.constant$keyword$date,d], null));
}
});
cljs_time.internal.core.index_of = (function cljs_time$internal$core$index_of(coll,x){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__18675_SHARP_,p2__18674_SHARP_){
if(cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__18674_SHARP_,x], 0)))){
return p1__18675_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Formats a string using goog.string.format.
 */
cljs_time.internal.core.format = (function cljs_time$internal$core$format(){
var argseq__5378__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5378__auto__);
});

cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return [cljs.core.str(x)].join('');
} else {
return x;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args__$1);
});

cljs_time.internal.core.format.cljs$lang$maxFixedArity = (1);

cljs_time.internal.core.format.cljs$lang$applyTo = (function (seq18676){
var G__18677 = cljs.core.first(seq18676);
var seq18676__$1 = cljs.core.next(seq18676);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(G__18677,seq18676__$1);
});
/**
 * Remove the need to pull in gstring/format code in advanced compilation
 */
cljs_time.internal.core.zero_pad = (function cljs_time$internal$core$zero_pad(){
var G__18679 = arguments.length;
switch (G__18679) {
case 1:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((((0) <= n)) && ((n <= (9)))){
return [cljs.core.str("0"),cljs.core.str(n)].join('');
} else {
return [cljs.core.str(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2 = (function (n,zeros){
if(((1) > zeros)){
return [cljs.core.str(n)].join('');
} else {
return [cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((zeros - cljs.core.count([cljs.core.str(n)].join(''))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("0")))),cljs.core.str(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$lang$maxFixedArity = 2;
cljs_time.internal.core.multiplied_by = (function cljs_time$internal$core$multiplied_by(period,scalar){
var scale_fn = (function cljs_time$internal$core$multiplied_by_$_scale_fn(field){
if(cljs.core.truth_(field)){
return (field * scalar);
} else {
return null;
}
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(period,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$millis], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$seconds], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$minutes], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$hours], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$days], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$weeks], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$months], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$years], null),scale_fn);
});
