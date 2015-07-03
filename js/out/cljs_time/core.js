// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
goog.require('goog.i18n.TimeZone');
cljs_time.core._STAR_sys_time_STAR_ = null;
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 */
cljs_time.core.DateTimeProtocol = (function (){var obj18293 = {};
return obj18293;
})();

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.year[(function (){var G__18297 = x__4974__auto__;
return goog.typeOf(G__18297);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.year["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.year",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.month[(function (){var G__18301 = x__4974__auto__;
return goog.typeOf(G__18301);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.month["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.month",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.day[(function (){var G__18305 = x__4974__auto__;
return goog.typeOf(G__18305);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.day["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.day_of_week[(function (){var G__18309 = x__4974__auto__;
return goog.typeOf(G__18309);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day-of-week",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.hour[(function (){var G__18313 = x__4974__auto__;
return goog.typeOf(G__18313);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.hour["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.hour",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.minute[(function (){var G__18317 = x__4974__auto__;
return goog.typeOf(G__18317);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.minute["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minute",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.sec[(function (){var G__18321 = x__4974__auto__;
return goog.typeOf(G__18321);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.sec["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.sec",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.second[(function (){var G__18325 = x__4974__auto__;
return goog.typeOf(G__18325);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.second["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.second",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.milli[(function (){var G__18329 = x__4974__auto__;
return goog.typeOf(G__18329);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.milli["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.milli",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.after_QMARK_[(function (){var G__18333 = x__4974__auto__;
return goog.typeOf(G__18333);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.after?",this$);
}
}
})().call(null,this$,that);
}
});

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.before_QMARK_[(function (){var G__18337 = x__4974__auto__;
return goog.typeOf(G__18337);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.before?",this$);
}
}
})().call(null,this$,that);
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.plus_[(function (){var G__18341 = x__4974__auto__;
return goog.typeOf(G__18341);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.plus_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.plus-",this$);
}
}
})().call(null,this$,period);
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.minus_[(function (){var G__18345 = x__4974__auto__;
return goog.typeOf(G__18345);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.minus_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minus-",this$);
}
}
})().call(null,this$,period);
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.first_day_of_the_month_[(function (){var G__18349 = x__4974__auto__;
return goog.typeOf(G__18349);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.first-day-of-the-month-",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.last_day_of_the_month_[(function (){var G__18353 = x__4974__auto__;
return goog.typeOf(G__18353);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.last-day-of-the-month-",this$);
}
}
})().call(null,this$);
}
});


/**
 * Interface for in-<time unit> functions
 */
cljs_time.core.InTimeUnitProtocol = (function (){var obj18355 = {};
return obj18355;
})();

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.in_millis[(function (){var G__18359 = x__4974__auto__;
return goog.typeOf(G__18359);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.in_millis["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-millis",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.in_seconds[(function (){var G__18363 = x__4974__auto__;
return goog.typeOf(G__18363);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-seconds",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.in_minutes[(function (){var G__18367 = x__4974__auto__;
return goog.typeOf(G__18367);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-minutes",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.in_hours[(function (){var G__18371 = x__4974__auto__;
return goog.typeOf(G__18371);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.in_hours["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-hours",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.in_days[(function (){var G__18375 = x__4974__auto__;
return goog.typeOf(G__18375);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.in_days["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-days",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.in_weeks[(function (){var G__18379 = x__4974__auto__;
return goog.typeOf(G__18379);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-weeks",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.in_months[(function (){var G__18383 = x__4974__auto__;
return goog.typeOf(G__18383);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.in_months["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-months",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs_time.core.in_years[(function (){var G__18387 = x__4974__auto__;
return goog.typeOf(G__18387);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs_time.core.in_years["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-years",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} start
* @param {*} end
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k18389,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__18391 = (((k18389 instanceof cljs.core.Keyword))?k18389.fqn:null);
switch (G__18391) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18389,else__4936__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#cljs-time.core.Interval{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$end,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$start,null,cljs.core.constant$keyword$end,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__18388){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__18392 = cljs.core.keyword_identical_QMARK_;
var expr__18393 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__18395 = cljs.core.constant$keyword$start;
var G__18396 = expr__18393;
return (pred__18392.cljs$core$IFn$_invoke$arity$2 ? pred__18392.cljs$core$IFn$_invoke$arity$2(G__18395,G__18396) : pred__18392.call(null,G__18395,G__18396));
})())){
return (new cljs_time.core.Interval(G__18388,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18397 = cljs.core.constant$keyword$end;
var G__18398 = expr__18393;
return (pred__18392.cljs$core$IFn$_invoke$arity$2 ? pred__18392.cljs$core$IFn$_invoke$arity$2(G__18397,G__18398) : pred__18392.call(null,G__18397,G__18398));
})())){
return (new cljs_time.core.Interval(self__.start,G__18388,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__18388),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$end,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__18388){
var self__ = this;
var this__4932__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__18388,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__18390){
return (new cljs_time.core.Interval(cljs.core.constant$keyword$start.cljs$core$IFn$_invoke$arity$1(G__18390),cljs.core.constant$keyword$end.cljs$core$IFn$_invoke$arity$1(G__18390),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18390,cljs.core.constant$keyword$start,cljs.core.array_seq([cljs.core.constant$keyword$end], 0)),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 * Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),new cljs.core.Symbol(null,"end","end",1372345569,null)))], 0)))].join('')));
}

return cljs_time.core.__GT_Interval(start,end);
});

/**
* @constructor
* @param {*} years
* @param {*} months
* @param {*} weeks
* @param {*} days
* @param {*} hours
* @param {*} minutes
* @param {*} seconds
* @param {*} millis
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k18401,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__18403 = (((k18401 instanceof cljs.core.Keyword))?k18401.fqn:null);
switch (G__18403) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18401,else__4936__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#cljs-time.core.Period{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$years,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$months,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$weeks,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$days,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$hours,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$minutes,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$seconds,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$millis,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$months,null,cljs.core.constant$keyword$days,null,cljs.core.constant$keyword$seconds,null,cljs.core.constant$keyword$hours,null,cljs.core.constant$keyword$years,null,cljs.core.constant$keyword$minutes,null,cljs.core.constant$keyword$weeks,null,cljs.core.constant$keyword$millis,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__18400){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__18404 = cljs.core.keyword_identical_QMARK_;
var expr__18405 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__18407 = cljs.core.constant$keyword$years;
var G__18408 = expr__18405;
return (pred__18404.cljs$core$IFn$_invoke$arity$2 ? pred__18404.cljs$core$IFn$_invoke$arity$2(G__18407,G__18408) : pred__18404.call(null,G__18407,G__18408));
})())){
return (new cljs_time.core.Period(G__18400,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18409 = cljs.core.constant$keyword$months;
var G__18410 = expr__18405;
return (pred__18404.cljs$core$IFn$_invoke$arity$2 ? pred__18404.cljs$core$IFn$_invoke$arity$2(G__18409,G__18410) : pred__18404.call(null,G__18409,G__18410));
})())){
return (new cljs_time.core.Period(self__.years,G__18400,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18411 = cljs.core.constant$keyword$weeks;
var G__18412 = expr__18405;
return (pred__18404.cljs$core$IFn$_invoke$arity$2 ? pred__18404.cljs$core$IFn$_invoke$arity$2(G__18411,G__18412) : pred__18404.call(null,G__18411,G__18412));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,G__18400,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18413 = cljs.core.constant$keyword$days;
var G__18414 = expr__18405;
return (pred__18404.cljs$core$IFn$_invoke$arity$2 ? pred__18404.cljs$core$IFn$_invoke$arity$2(G__18413,G__18414) : pred__18404.call(null,G__18413,G__18414));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__18400,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18415 = cljs.core.constant$keyword$hours;
var G__18416 = expr__18405;
return (pred__18404.cljs$core$IFn$_invoke$arity$2 ? pred__18404.cljs$core$IFn$_invoke$arity$2(G__18415,G__18416) : pred__18404.call(null,G__18415,G__18416));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__18400,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18417 = cljs.core.constant$keyword$minutes;
var G__18418 = expr__18405;
return (pred__18404.cljs$core$IFn$_invoke$arity$2 ? pred__18404.cljs$core$IFn$_invoke$arity$2(G__18417,G__18418) : pred__18404.call(null,G__18417,G__18418));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__18400,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18419 = cljs.core.constant$keyword$seconds;
var G__18420 = expr__18405;
return (pred__18404.cljs$core$IFn$_invoke$arity$2 ? pred__18404.cljs$core$IFn$_invoke$arity$2(G__18419,G__18420) : pred__18404.call(null,G__18419,G__18420));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__18400,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18421 = cljs.core.constant$keyword$millis;
var G__18422 = expr__18405;
return (pred__18404.cljs$core$IFn$_invoke$arity$2 ? pred__18404.cljs$core$IFn$_invoke$arity$2(G__18421,G__18422) : pred__18404.call(null,G__18421,G__18422));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__18400,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__18400),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$years,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$months,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$weeks,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$days,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$hours,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$minutes,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$seconds,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$millis,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__18400){
var self__ = this;
var this__4932__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__18400,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",341951838,null),new cljs.core.Symbol(null,"months","months",1594959890,null),new cljs.core.Symbol(null,"weeks","weeks",-809839644,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"hours","hours",1698912382,null),new cljs.core.Symbol(null,"minutes","minutes",-1335269375,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"millis","millis",302243140,null)], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__18402){
return (new cljs_time.core.Period(cljs.core.constant$keyword$years.cljs$core$IFn$_invoke$arity$1(G__18402),cljs.core.constant$keyword$months.cljs$core$IFn$_invoke$arity$1(G__18402),cljs.core.constant$keyword$weeks.cljs$core$IFn$_invoke$arity$1(G__18402),cljs.core.constant$keyword$days.cljs$core$IFn$_invoke$arity$1(G__18402),cljs.core.constant$keyword$hours.cljs$core$IFn$_invoke$arity$1(G__18402),cljs.core.constant$keyword$minutes.cljs$core$IFn$_invoke$arity$1(G__18402),cljs.core.constant$keyword$seconds.cljs$core$IFn$_invoke$arity$1(G__18402),cljs.core.constant$keyword$millis.cljs$core$IFn$_invoke$arity$1(G__18402),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18402,cljs.core.constant$keyword$years,cljs.core.array_seq([cljs.core.constant$keyword$months,cljs.core.constant$keyword$weeks,cljs.core.constant$keyword$days,cljs.core.constant$keyword$hours,cljs.core.constant$keyword$minutes,cljs.core.constant$keyword$seconds,cljs.core.constant$keyword$millis], 0)),null));
});

cljs_time.core.period = (function cljs_time$core$period(){
var G__18428 = arguments.length;
switch (G__18428) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5389__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5389__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period(new cljs.core.PersistentArrayMap.fromArray([period,value], true, false));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq18424){
var G__18425 = cljs.core.first(seq18424);
var seq18424__$1 = cljs.core.next(seq18424);
var G__18426 = cljs.core.first(seq18424__$1);
var seq18424__$2 = cljs.core.next(seq18424__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__18425,G__18426,seq18424__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);
cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var G__18440_18457 = date__$1;
var G__18441_18458 = (function (){var G__18442 = (function (){var G__18444 = date__$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18444) : f.call(null,G__18444));
})();
var G__18443 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__18442,G__18443) : op.call(null,G__18442,G__18443));
})();
(set_fn.cljs$core$IFn$_invoke$arity$2 ? set_fn.cljs$core$IFn$_invoke$arity$2(G__18440_18457,G__18441_18458) : set_fn.call(null,G__18440_18457,G__18441_18458));
} else {
}

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$millis,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__18430_SHARP_,p2__18431_SHARP_){
return p1__18430_SHARP_.setMilliseconds(p2__18431_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$seconds,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__18432_SHARP_,p2__18433_SHARP_){
return p1__18432_SHARP_.setSeconds(p2__18433_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$minutes,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__18434_SHARP_,p2__18435_SHARP_){
return p1__18434_SHARP_.setMinutes(p2__18435_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$hours,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__18436_SHARP_,p2__18437_SHARP_){
return p1__18436_SHARP_.setHours(p2__18437_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$days,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__18438_SHARP_,p2__18439_SHARP_){
return p1__18438_SHARP_.setDate(p2__18439_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$weeks,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
date__$1.setDate((function (){var G__18445 = cljs_time.core.day(date__$1);
var G__18446 = ((7) * value);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__18445,G__18446) : op.call(null,G__18445,G__18446));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.constant$keyword$months,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var m_18459 = (function (){var G__18447 = cljs_time.core.month(date__$1);
var G__18448 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__18447,G__18448) : op.call(null,G__18447,G__18448));
})();
var y_18460 = cljs_time.core.year(date__$1);
var y_18461__$1 = (((m_18459 > (12)))?(y_18460 + (1)):(((m_18459 < (1)))?(y_18460 - (1)):y_18460
));
var m_18462__$1 = (((m_18459 > (12)))?cljs.core.mod(m_18459,(12)):(((m_18459 < (1)))?(m_18459 + (12)):m_18459
));
var ldom_18463 = cljs_time.core.day(cljs_time.core.last_day_of_the_month_((new goog.date.Date(y_18461__$1,(m_18462__$1 - (1)),(1)))));
if((ldom_18463 < cljs_time.core.day(date__$1))){
date__$1.setDate(ldom_18463);
} else {
}

date__$1.setMonth((m_18462__$1 - (1)));

date__$1.setYear(y_18461__$1);
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.constant$keyword$years,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
if(cljs.core.truth_((function (){var and__4326__auto__ = cljs_time.internal.core.leap_year_QMARK_(cljs_time.core.year(date__$1));
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (function (){var G__18451 = (2);
var G__18452 = cljs_time.core.month(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18451,G__18452) : cljs_time.core._EQ_.call(null,G__18451,G__18452));
})();
if(cljs.core.truth_(and__4326__auto____$1)){
var G__18453 = (29);
var G__18454 = cljs_time.core.day(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18453,G__18454) : cljs_time.core._EQ_.call(null,G__18453,G__18454));
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear((function (){var G__18455 = cljs_time.core.year(date__$1);
var G__18456 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__18455,G__18456) : op.call(null,G__18455,G__18456));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18465_SHARP_,p2__18464_SHARP_){
return (function (){var G__18467 = cljs.core.key(p2__18464_SHARP_);
return (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(G__18467) : cljs_time.core.periods.call(null,G__18467));
})().call(null,operator,p1__18465_SHARP_,cljs.core.val(p2__18464_SHARP_));
}),date,p);
});
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((function (){var G__18468 = d;
var G__18469 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18468,G__18469) : cljs_time.core._EQ_.call(null,G__18468,G__18469));
})())){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$days,(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((function (){var G__18470 = d;
var G__18471 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18470,G__18471) : cljs_time.core._EQ_.call(null,G__18470,G__18471));
})())){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$days,(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((function (){var G__18472 = d;
var G__18473 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18472,G__18473) : cljs_time.core._EQ_.call(null,G__18472,G__18473));
})())){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$days,(1)));
});
cljs_time.core.utc = (function (){var G__18474 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$id,"UTC",cljs.core.constant$keyword$std_offset,(0),cljs.core.constant$keyword$names,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null),cljs.core.constant$keyword$transitions,cljs.core.PersistentVector.EMPTY], null));
return goog.i18n.TimeZone.createTimeZone(G__18474);
})();
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)){
return cljs_time.core._STAR_sys_time_STAR_;
} else {
return (new goog.date.UtcDateTime());
}
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 * in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
return (new goog.date.DateTime());
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__18476 = datetime__$1;
G__18476.setHours((0));

G__18476.setMinutes((0));

G__18476.setSeconds((0));

G__18476.setMilliseconds((0));

return G__18476;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight(cljs_time.core.now());
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__18478 = (new goog.date.UtcDateTime());
G__18478.setTime((0));

return G__18478;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 * Specify the year, month of year, day of month. Note that month and day are
 * 1-indexed. Any number of least-significant components can be ommited, in
 * which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(){
var G__18480 = arguments.length;
switch (G__18480) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3(year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3(year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;
/**
 * Constructs and returns a new DateTime in UTC.
 * 
 * Specify the year, month of year, day of month, hour of day, minute if hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(){
var G__18483 = arguments.length;
switch (G__18483) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;
/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(){
var G__18486 = arguments.length;
switch (G__18486) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;
/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month, and day. Does not deal with timezones.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new local DateTime representing today's date.
 * local DateTime objects do not deal with timezones at all.
 */
cljs_time.core.today = (function cljs_time$core$today(){
if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)){
var d = cljs_time.core._STAR_sys_time_STAR_;
return (new goog.date.Date(d.getYear(),d.getMonth(),d.getDate()));
} else {
return (new goog.date.Date());
}
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 * hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(){
var G__18489 = arguments.length;
switch (G__18489) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2(hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?cljs.core.constant$keyword$_DASH_:cljs.core.constant$keyword$_PLUS_);
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1,minutes], 0)):cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$id,tz_name,cljs.core.constant$keyword$offset,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__4338__auto__ = minutes;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return (0);
}
})(),(0)], null),cljs.core.constant$keyword$rules,"-",cljs.core.constant$keyword$names,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$cljs_DASH_time$core_SLASH_time_DASH_zone], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;
/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var hours = (((-1) * (new goog.date.DateTime()).getTimezoneOffset()) / (60));
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((hours | (0)),cljs.core.mod(hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 * corresponding to the same absolute instant in time as the given
 * DateTime, but with calendar fields corresponding to in the default
 * (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 * corresponding to the same point in calendar time as the given
 * DateTime, but for a correspondingly different absolute instant in
 * time in the default (local) timezone.
 * 
 * Note: This implementation uses the ECMAScript 5.1 implementation which
 * trades some historical daylight savings transition accuracy for simplicity.
 * see http://es5.github.io/#x15.9.1.8
 * 
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Given a number, returns a Period representing that many years.
 * Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(){
var G__18492 = arguments.length;
switch (G__18492) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$years,n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many months.
 * Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(){
var G__18495 = arguments.length;
switch (G__18495) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$months,n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many weeks.
 * Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(){
var G__18498 = arguments.length;
switch (G__18498) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$weeks,n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many days.
 * Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(){
var G__18501 = arguments.length;
switch (G__18501) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$days,n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many hours.
 * Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(){
var G__18504 = arguments.length;
switch (G__18504) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$hours,n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many minutes.
 * Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(){
var G__18507 = arguments.length;
switch (G__18507) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$minutes,n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many seconds.
 * Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(){
var G__18510 = arguments.length;
switch (G__18510) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$seconds,n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many milliseconds.
 * Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(){
var G__18513 = arguments.length;
switch (G__18513) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$millis,n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;
/**
 * Returns a new date/time corresponding to the given date/time moved
 * forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(){
var G__18519 = arguments.length;
switch (G__18519) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5389__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5389__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_(dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus_,cljs_time.core.plus_(dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq18515){
var G__18516 = cljs.core.first(seq18515);
var seq18515__$1 = cljs.core.next(seq18515);
var G__18517 = cljs.core.first(seq18515__$1);
var seq18515__$2 = cljs.core.next(seq18515__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__18516,G__18517,seq18515__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);
/**
 * Returns a new date/time object corresponding to the given date/time
 * moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(){
var G__18525 = arguments.length;
switch (G__18525) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5389__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5389__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_(dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.minus_,cljs_time.core.minus_(dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq18521){
var G__18522 = cljs.core.first(seq18521);
var seq18521__$1 = cljs.core.next(seq18521);
var G__18523 = cljs.core.first(seq18521__$1);
var seq18521__$2 = cljs.core.next(seq18521__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__18522,G__18523,seq18521__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);
/**
 * Returns a DateTime a supplied period before the present.
 * 
 * e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago(cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 * e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(){
var G__18528 = arguments.length;
switch (G__18528) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;
/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(){
var G__18531 = arguments.length;
switch (G__18531) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;
/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return cljs.core.constant$keyword$start.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return cljs.core.constant$keyword$end.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 * of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(){
var argseq__5378__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5378__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,cljs.core.constant$keyword$end,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus,cljs_time.core.end(in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq18533){
var G__18534 = cljs.core.first(seq18533);
var seq18533__$1 = cljs.core.next(seq18533);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__18534,seq18533__$1);
});
cljs_time.core.month_range = (function cljs_time$core$month_range(p__18537){
var map__18539 = p__18537;
var map__18539__$1 = ((cljs.core.seq_QMARK_(map__18539))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18539):map__18539);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18539__$1,cljs.core.constant$keyword$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18539__$1,cljs.core.constant$keyword$end);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (map__18539,map__18539__$1,start,end){
return (function (p1__18535_SHARP_){
return cljs_time.core.before_QMARK_(p1__18535_SHARP_,end);
});})(map__18539,map__18539__$1,start,end))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__18539,map__18539__$1,start,end){
return (function (p1__18536_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((p1__18536_SHARP_ + (1))));
});})(map__18539,map__18539__$1,start,end))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18540_SHARP_){
return p1__18540_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range(interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 * For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 * returns 1 month.
 * 
 * Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 * But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 * And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__18541){
var map__18543 = p__18541;
var map__18543__$1 = ((cljs.core.seq_QMARK_(map__18543))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18543):map__18543);
var interval = map__18543__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18543__$1,cljs.core.constant$keyword$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18543__$1,cljs.core.constant$keyword$end);
return cljs.core.count(cljs_time.core.total_days_in_whole_months(interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__18544){
var map__18560 = p__18544;
var map__18560__$1 = ((cljs.core.seq_QMARK_(map__18560))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18560):map__18560);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,cljs.core.constant$keyword$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,cljs.core.constant$keyword$end);
var sm = cljs_time.core.month(start);
var sd = cljs_time.core.day(start);
var em = cljs_time.core.month(end);
var ed = cljs_time.core.day(end);
var d1 = (cljs.core.truth_((function (){var and__4326__auto__ = (function (){var G__18563 = sm;
var G__18564 = (2);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18563,G__18564) : cljs_time.core._EQ_.call(null,G__18563,G__18564));
})();
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (function (){var G__18567 = sd;
var G__18568 = (29);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18567,G__18568) : cljs_time.core._EQ_.call(null,G__18567,G__18568));
})();
if(cljs.core.truth_(and__4326__auto____$1)){
var and__4326__auto____$2 = (function (){var G__18571 = em;
var G__18572 = (2);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18571,G__18572) : cljs_time.core._EQ_.call(null,G__18571,G__18572));
})();
if(cljs.core.truth_(and__4326__auto____$2)){
var G__18573 = ed;
var G__18574 = (28);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18573,G__18574) : cljs_time.core._EQ_.call(null,G__18573,G__18574));
} else {
return and__4326__auto____$2;
}
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year(end) - cljs_time.core.year(start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize(cljs.core.name(from));
var to__$1 = cljs.core.name(to);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s cannot be converted to %s",cljs.core.array_seq([from__$1,to__$1], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$unsupported_DASH_operation], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__18575){
var map__18576 = p__18575;
var map__18576__$1 = ((cljs.core.seq_QMARK_(map__18576))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18576):map__18576);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18576__$1,cljs.core.constant$keyword$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18576__$1,cljs.core.constant$keyword$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18576__$1,cljs.core.constant$keyword$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18576__$1,cljs.core.constant$keyword$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18576__$1,cljs.core.constant$keyword$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18576__$1,cljs.core.constant$keyword$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18576__$1,cljs.core.constant$keyword$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18576__$1,cljs.core.constant$keyword$years);
var map__18577 = this;
var map__18577__$1 = ((cljs.core.seq_QMARK_(map__18577))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18577):map__18577);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18577__$1,cljs.core.constant$keyword$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18577__$1,cljs.core.constant$keyword$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18577__$1,cljs.core.constant$keyword$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18577__$1,cljs.core.constant$keyword$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18577__$1,cljs.core.constant$keyword$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18577__$1,cljs.core.constant$keyword$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18577__$1,cljs.core.constant$keyword$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18577__$1,cljs.core.constant$keyword$years);
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$months,cljs.core.constant$keyword$millis);
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$years,cljs.core.constant$keyword$millis);
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__18578){
var map__18579 = p__18578;
var map__18579__$1 = ((cljs.core.seq_QMARK_(map__18579))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18579):map__18579);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,cljs.core.constant$keyword$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,cljs.core.constant$keyword$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,cljs.core.constant$keyword$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,cljs.core.constant$keyword$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,cljs.core.constant$keyword$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,cljs.core.constant$keyword$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,cljs.core.constant$keyword$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,cljs.core.constant$keyword$years);
var map__18580 = this;
var map__18580__$1 = ((cljs.core.seq_QMARK_(map__18580))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18580):map__18580);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18580__$1,cljs.core.constant$keyword$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18580__$1,cljs.core.constant$keyword$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18580__$1,cljs.core.constant$keyword$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18580__$1,cljs.core.constant$keyword$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18580__$1,cljs.core.constant$keyword$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18580__$1,cljs.core.constant$keyword$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18580__$1,cljs.core.constant$keyword$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18580__$1,cljs.core.constant$keyword$years);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$millis,cljs.core.constant$keyword$months);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$seconds,cljs.core.constant$keyword$months);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$minutes,cljs.core.constant$keyword$months);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$hours,cljs.core.constant$keyword$months);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$days,cljs.core.constant$keyword$months);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$weeks,cljs.core.constant$keyword$months);
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__4338__auto__ = years__$1;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__18581){
var map__18582 = p__18581;
var map__18582__$1 = ((cljs.core.seq_QMARK_(map__18582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18582):map__18582);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,cljs.core.constant$keyword$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,cljs.core.constant$keyword$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,cljs.core.constant$keyword$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,cljs.core.constant$keyword$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,cljs.core.constant$keyword$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,cljs.core.constant$keyword$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,cljs.core.constant$keyword$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,cljs.core.constant$keyword$years);
var map__18583 = this;
var map__18583__$1 = ((cljs.core.seq_QMARK_(map__18583))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18583):map__18583);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18583__$1,cljs.core.constant$keyword$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18583__$1,cljs.core.constant$keyword$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18583__$1,cljs.core.constant$keyword$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18583__$1,cljs.core.constant$keyword$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18583__$1,cljs.core.constant$keyword$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18583__$1,cljs.core.constant$keyword$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18583__$1,cljs.core.constant$keyword$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18583__$1,cljs.core.constant$keyword$years);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$millis,cljs.core.constant$keyword$years);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$seconds,cljs.core.constant$keyword$years);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$minutes,cljs.core.constant$keyword$years);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$hours,cljs.core.constant$keyword$years);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$days,cljs.core.constant$keyword$years);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$weeks,cljs.core.constant$keyword$years);
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__18584){
var map__18585 = p__18584;
var map__18585__$1 = ((cljs.core.seq_QMARK_(map__18585))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18585):map__18585);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18585__$1,cljs.core.constant$keyword$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18585__$1,cljs.core.constant$keyword$end);
var map__18586 = this;
var map__18586__$1 = ((cljs.core.seq_QMARK_(map__18586))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18586):map__18586);
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18586__$1,cljs.core.constant$keyword$start);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18586__$1,cljs.core.constant$keyword$end);
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_(this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_(this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 * DateTime. Note that if the DateTime is exactly equal to the
 * end of the interval, this function returns false.
 * 
 * With 3 arguments: Returns true if the start DateTime is
 * equal to or before and the end DateTime is equal to or after the test
 * DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(){
var G__18588 = arguments.length;
switch (G__18588) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__18589,date){
var map__18590 = p__18589;
var map__18590__$1 = ((cljs.core.seq_QMARK_(map__18590))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18590):map__18590);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18590__$1,cljs.core.constant$keyword$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18590__$1,cljs.core.constant$keyword$end);
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3(start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__4338__auto__ = (function (){var G__18593 = start;
var G__18594 = date;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18593,G__18594) : cljs_time.core._EQ_.call(null,G__18593,G__18594));
})();
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var and__4326__auto__ = cljs_time.core.before_QMARK_(start,date);
if(cljs.core.truth_(and__4326__auto__)){
return cljs_time.core.after_QMARK_(end,date);
} else {
return and__4326__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;
/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 * Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 * With 4 arguments: Returns true if the range specified by start-a and end-a
 * overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(){
var G__18597 = arguments.length;
switch (G__18597) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__18598,p__18599){
var map__18600 = p__18598;
var map__18600__$1 = ((cljs.core.seq_QMARK_(map__18600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18600):map__18600);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18600__$1,cljs.core.constant$keyword$start);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18600__$1,cljs.core.constant$keyword$end);
var map__18601 = p__18599;
var map__18601__$1 = ((cljs.core.seq_QMARK_(map__18601))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18601):map__18601);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18601__$1,cljs.core.constant$keyword$start);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18601__$1,cljs.core.constant$keyword$end);
var and__4326__auto__ = cljs.core.not((function (){var or__4338__auto__ = (function (){var G__18610 = start_a;
var G__18611 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18610,G__18611) : cljs_time.core._EQ_.call(null,G__18610,G__18611));
})();
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var G__18612 = end_a;
var G__18613 = start_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18612,G__18613) : cljs_time.core._EQ_.call(null,G__18612,G__18613));
}
})());
if(and__4326__auto__){
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4(start_a,end_a,start_b,end_b);
} else {
return and__4326__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__4338__auto__ = (function (){var and__4326__auto__ = cljs_time.core.before_QMARK_(start_b,end_a);
if(cljs.core.truth_(and__4326__auto__)){
return cljs_time.core.after_QMARK_(end_b,start_a);
} else {
return and__4326__auto__;
}
})();
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (function (){var and__4326__auto__ = cljs_time.core.after_QMARK_(end_b,start_a);
if(cljs.core.truth_(and__4326__auto__)){
return cljs_time.core.before_QMARK_(start_b,end_a);
} else {
return and__4326__auto__;
}
})();
if(cljs.core.truth_(or__4338__auto____$1)){
return or__4338__auto____$1;
} else {
var or__4338__auto____$2 = (function (){var G__18616 = start_a;
var G__18617 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18616,G__18617) : cljs_time.core._EQ_.call(null,G__18616,G__18617));
})();
if(cljs.core.truth_(or__4338__auto____$2)){
return or__4338__auto____$2;
} else {
var G__18618 = start_b;
var G__18619 = end_a;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18618,G__18619) : cljs_time.core._EQ_.call(null,G__18618,G__18619));
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 * beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__18621,p__18622){
var map__18631 = p__18621;
var map__18631__$1 = ((cljs.core.seq_QMARK_(map__18631))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18631):map__18631);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18631__$1,cljs.core.constant$keyword$start);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18631__$1,cljs.core.constant$keyword$end);
var map__18632 = p__18622;
var map__18632__$1 = ((cljs.core.seq_QMARK_(map__18632))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18632):map__18632);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18632__$1,cljs.core.constant$keyword$start);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18632__$1,cljs.core.constant$keyword$end);
var or__4338__auto__ = (function (){var G__18635 = start_a;
var G__18636 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18635,G__18636) : cljs_time.core._EQ_.call(null,G__18635,G__18636));
})();
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var G__18637 = end_a;
var G__18638 = start_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__18637,G__18638) : cljs_time.core._EQ_.call(null,G__18637,G__18638));
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
var G__18640 = x;
if(G__18640){
var bit__5012__auto__ = null;
if(cljs.core.truth_((function (){var or__4338__auto__ = bit__5012__auto__;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return G__18640.cljs_time$core$DateTimeProtocol$;
}
})())){
return true;
} else {
if((!G__18640.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,G__18640);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,G__18640);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__4326__auto__ = cljs_time.core.period_QMARK_(x);
if(cljs.core.truth_(and__4326__auto__)){
return cljs.core.contains_QMARK_(x,type);
} else {
return and__4326__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$years,val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$months,val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$weeks,val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$days,val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$hours,val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$minutes,val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$seconds,val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes(cljs_time.core.interval(d,cljs_time.core.now()));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(){
var G__18642 = arguments.length;
switch (G__18642) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_(dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;
cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(){
var G__18645 = arguments.length;
switch (G__18645) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(dt),cljs_time.core.month(dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2(year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;
cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(){
var G__18648 = arguments.length;
switch (G__18648) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_(dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;
if(typeof cljs_time.core.__GT_period !== 'undefined'){
} else {
cljs_time.core.__GT_period = (function (){var method_table__5233__auto__ = (function (){var G__18650 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18650) : cljs.core.atom.call(null,G__18650));
})();
var prefer_table__5234__auto__ = (function (){var G__18651 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18651) : cljs.core.atom.call(null,G__18651));
})();
var method_cache__5235__auto__ = (function (){var G__18652 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18652) : cljs.core.atom.call(null,G__18652));
})();
var cached_hierarchy__5236__auto__ = (function (){var G__18653 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18653) : cljs.core.atom.call(null,G__18653));
})();
var hierarchy__5237__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-time.core","->period"),cljs.core.type,cljs.core.constant$keyword$default,hierarchy__5237__auto__,method_table__5233__auto__,prefer_table__5234__auto__,method_cache__5235__auto__,cached_hierarchy__5236__auto__));
})();
}
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,cljs_time.core.Interval,(function (p__18654){
var map__18655 = p__18654;
var map__18655__$1 = ((cljs.core.seq_QMARK_(map__18655))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18655):map__18655);
var interval = map__18655__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18655__$1,cljs.core.constant$keyword$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18655__$1,cljs.core.constant$keyword$end);
var years = cljs_time.core.in_years(interval);
var start_year = cljs_time.core.year(start);
var leap_years = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_year,(start_year + years)))));
var start_month = cljs_time.core.month(start);
var days_in_months = cljs_time.core.total_days_in_whole_months(interval);
var months = cljs.core.count(days_in_months);
var days_to_remove = ((((365) * years) + leap_years) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,days_in_months));
var days = (cljs_time.core.in_days(interval) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours(interval) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes(interval) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds(interval) - seconds_to_remove);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$years,years,cljs.core.array_seq([cljs.core.constant$keyword$months,months,cljs.core.constant$keyword$days,days,cljs.core.constant$keyword$hours,hours,cljs.core.constant$keyword$minutes,minutes,cljs.core.constant$keyword$seconds,seconds,cljs.core.constant$keyword$millis,(cljs_time.core.in_millis(interval) - ((1000) * (seconds + seconds_to_remove)))], 0));
}));
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,cljs_time.core.Period,(function (period){
return period;
}));
cljs_time.core.today_at = (function cljs_time$core$today_at(){
var G__18657 = arguments.length;
switch (G__18657) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var midnight = (new goog.date.Date());
var G__18658 = (new goog.date.UtcDateTime((0)));
G__18658.setYear(midnight.getYear());

G__18658.setMonth(midnight.getMonth());

G__18658.setDate(midnight.getDate());

G__18658.setHours(hours);

G__18658.setMinutes(minutes);

G__18658.setSeconds(seconds);

G__18658.setMilliseconds(millis);

return G__18658;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4(hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3(hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;
cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_sys_time_STAR_18661 = cljs_time.core._STAR_sys_time_STAR_;
cljs_time.core._STAR_sys_time_STAR_ = base_date_time;

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {cljs_time.core._STAR_sys_time_STAR_ = _STAR_sys_time_STAR_18661;
}});
