// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
cljs_time.internal.core._EQ_ = (function() { 
var _EQ___delegate = function (args){
if(cljs.core.every_QMARK_((function (p1__36321_SHARP_){
return (p1__36321_SHARP_ instanceof goog.date.Date);
}),args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36322_SHARP_){
return p1__36322_SHARP_.getTime();
}),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,args);

}
};
var _EQ_ = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36323__i = 0, G__36323__a = new Array(arguments.length -  0);
while (G__36323__i < G__36323__a.length) {G__36323__a[G__36323__i] = arguments[G__36323__i + 0]; ++G__36323__i;}
  args = new cljs.core.IndexedSeq(G__36323__a,0);
} 
return _EQ___delegate.call(this,args);};
_EQ_.cljs$lang$maxFixedArity = 0;
_EQ_.cljs$lang$applyTo = (function (arglist__36324){
var args = cljs.core.seq(arglist__36324);
return _EQ___delegate(args);
});
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___delegate;
return _EQ_;
})()
;
cljs_time.internal.core.leap_year_QMARK_ = (function leap_year_QMARK_(y){
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
cljs_time.internal.core.year_corrected_dim = (function year_corrected_dim(year,month){
var G__36327 = (function (){var G__36328 = (cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(1)], 0)))?(11):(month - (1)));
return (cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1 ? cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1(G__36328) : cljs_time.internal.core.days_in_month.call(null,G__36328));
})();
var G__36327__$1 = (cljs.core.truth_((function (){var and__3803__auto__ = cljs_time.internal.core.leap_year_QMARK_(year);
if(and__3803__auto__){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(2)], 0));
} else {
return and__3803__auto__;
}
})())?(G__36327 + (1)):G__36327);
return G__36327__$1;
});
cljs_time.internal.core.valid_date_QMARK_ = (function valid_date_QMARK_(p__36329){
var map__36331 = p__36329;
var map__36331__$1 = ((cljs.core.seq_QMARK_(map__36331))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36331):map__36331);
var d = map__36331__$1;
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36331__$1,cljs.core.constant$keyword$201);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36331__$1,cljs.core.constant$keyword$202);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36331__$1,cljs.core.constant$keyword$203);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36331__$1,cljs.core.constant$keyword$204);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36331__$1,cljs.core.constant$keyword$205);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36331__$1,cljs.core.constant$keyword$206);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36331__$1,cljs.core.constant$keyword$207);
var months__$1 = (months + (1));
var _GT__LT_ = ((function (months__$1,map__36331,map__36331__$1,d,millis,seconds,minutes,hours,days,months,years){
return (function _GT__LT_(a,b,x){
return ((x >= a)) && ((x <= b));
});})(months__$1,map__36331,map__36331__$1,d,millis,seconds,minutes,hours,days,months,years))
;
if(cljs.core.truth_((function (){var and__3803__auto__ = years;
if(cljs.core.truth_(and__3803__auto__)){
return (_GT__LT_((1),(12),months__$1)) && (_GT__LT_((1),cljs_time.internal.core.year_corrected_dim(years,months__$1),days)) && (_GT__LT_((0),(23),hours)) && (_GT__LT_((0),(59),minutes)) && (_GT__LT_((0),(60),seconds)) && (_GT__LT_((0),(999),millis));
} else {
return and__3803__auto__;
}
})())){
return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Date is not valid",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$209,cljs.core.constant$keyword$208,d], null));
}
});
cljs_time.internal.core.index_of = (function index_of(coll,x){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__36333_SHARP_,p2__36332_SHARP_){
if(cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__36332_SHARP_,x], 0)))){
return p1__36333_SHARP_;
} else {
return null;
}
}),coll));
});
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs_time.internal.core.format = (function() { 
var format__delegate = function (fmt,args){
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return [cljs.core.str(x)].join('');
} else {
return x;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args__$1);
};
var format = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__36334__i = 0, G__36334__a = new Array(arguments.length -  1);
while (G__36334__i < G__36334__a.length) {G__36334__a[G__36334__i] = arguments[G__36334__i + 1]; ++G__36334__i;}
  args = new cljs.core.IndexedSeq(G__36334__a,0);
} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__36335){
var fmt = cljs.core.first(arglist__36335);
var args = cljs.core.rest(arglist__36335);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* Remove the need to pull in gstring/format code in advanced compilation
*/
cljs_time.internal.core.zero_pad = (function() {
var zero_pad = null;
var zero_pad__1 = (function (n){
if((((0) <= n)) && ((n <= (9)))){
return [cljs.core.str("0"),cljs.core.str(n)].join('');
} else {
return [cljs.core.str(n)].join('');
}
});
var zero_pad__2 = (function (n,zeros){
if(((1) > zeros)){
return [cljs.core.str(n)].join('');
} else {
return [cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((zeros - cljs.core.count([cljs.core.str(n)].join(''))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("0")))),cljs.core.str(n)].join('');
}
});
zero_pad = function(n,zeros){
switch(arguments.length){
case 1:
return zero_pad__1.call(this,n);
case 2:
return zero_pad__2.call(this,n,zeros);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
zero_pad.cljs$core$IFn$_invoke$arity$1 = zero_pad__1;
zero_pad.cljs$core$IFn$_invoke$arity$2 = zero_pad__2;
return zero_pad;
})()
;
cljs_time.internal.core.multiplied_by = (function multiplied_by(period,scalar){
var scale_fn = (function scale_fn(field){
if(cljs.core.truth_(field)){
return (field * scalar);
} else {
return null;
}
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(period,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$202], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$203], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$204], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$205], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$210], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207], null),scale_fn);
});
