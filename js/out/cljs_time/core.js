// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('goog.i18n.TimeZone');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.DateTime');
goog.require('goog.date.Date');
goog.require('clojure.string');
goog.require('cljs_time.internal.core');
cljs_time.core._STAR_sys_time_STAR_ = null;
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

cljs_time.core.DateTimeProtocol = (function (){var obj34134 = {};
return obj34134;
})();

cljs_time.core.year = (function year(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.year[(function (){var G__34138 = x__4402__auto__;
return goog.typeOf(G__34138);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.year["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.year",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.month = (function month(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.month[(function (){var G__34142 = x__4402__auto__;
return goog.typeOf(G__34142);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.month["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.month",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.day = (function day(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.day[(function (){var G__34146 = x__4402__auto__;
return goog.typeOf(G__34146);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.day["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.day_of_week = (function day_of_week(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.day_of_week[(function (){var G__34150 = x__4402__auto__;
return goog.typeOf(G__34150);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day-of-week",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.hour = (function hour(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.hour[(function (){var G__34154 = x__4402__auto__;
return goog.typeOf(G__34154);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.hour["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.hour",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.minute = (function minute(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.minute[(function (){var G__34158 = x__4402__auto__;
return goog.typeOf(G__34158);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.minute["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minute",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.sec = (function sec(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.sec[(function (){var G__34162 = x__4402__auto__;
return goog.typeOf(G__34162);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.sec["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.sec",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.second = (function second(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.second[(function (){var G__34166 = x__4402__auto__;
return goog.typeOf(G__34166);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.second["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.second",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.milli = (function milli(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.milli[(function (){var G__34170 = x__4402__auto__;
return goog.typeOf(G__34170);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.milli["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.milli",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.after_QMARK_ = (function after_QMARK_(this$,that){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.after_QMARK_[(function (){var G__34174 = x__4402__auto__;
return goog.typeOf(G__34174);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.after?",this$);
}
}
})().call(null,this$,that);
}
});

cljs_time.core.before_QMARK_ = (function before_QMARK_(this$,that){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.before_QMARK_[(function (){var G__34178 = x__4402__auto__;
return goog.typeOf(G__34178);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.before?",this$);
}
}
})().call(null,this$,that);
}
});

cljs_time.core.plus_ = (function plus_(this$,period){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.plus_[(function (){var G__34182 = x__4402__auto__;
return goog.typeOf(G__34182);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.plus_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.plus-",this$);
}
}
})().call(null,this$,period);
}
});

cljs_time.core.minus_ = (function minus_(this$,period){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.minus_[(function (){var G__34186 = x__4402__auto__;
return goog.typeOf(G__34186);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.minus_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minus-",this$);
}
}
})().call(null,this$,period);
}
});

cljs_time.core.first_day_of_the_month_ = (function first_day_of_the_month_(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.first_day_of_the_month_[(function (){var G__34190 = x__4402__auto__;
return goog.typeOf(G__34190);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.first-day-of-the-month-",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.last_day_of_the_month_ = (function last_day_of_the_month_(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.last_day_of_the_month_[(function (){var G__34194 = x__4402__auto__;
return goog.typeOf(G__34194);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.last-day-of-the-month-",this$);
}
}
})().call(null,this$);
}
});


cljs_time.core.InTimeUnitProtocol = (function (){var obj34196 = {};
return obj34196;
})();

cljs_time.core.in_millis = (function in_millis(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.in_millis[(function (){var G__34200 = x__4402__auto__;
return goog.typeOf(G__34200);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.in_millis["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-millis",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_seconds = (function in_seconds(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.in_seconds[(function (){var G__34204 = x__4402__auto__;
return goog.typeOf(G__34204);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-seconds",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_minutes = (function in_minutes(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.in_minutes[(function (){var G__34208 = x__4402__auto__;
return goog.typeOf(G__34208);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-minutes",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_hours = (function in_hours(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.in_hours[(function (){var G__34212 = x__4402__auto__;
return goog.typeOf(G__34212);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.in_hours["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-hours",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_days = (function in_days(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.in_days[(function (){var G__34216 = x__4402__auto__;
return goog.typeOf(G__34216);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.in_days["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-days",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_weeks = (function in_weeks(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.in_weeks[(function (){var G__34220 = x__4402__auto__;
return goog.typeOf(G__34220);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-weeks",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_months = (function in_months(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.in_months[(function (){var G__34224 = x__4402__auto__;
return goog.typeOf(G__34224);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.in_months["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-months",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_years = (function in_years(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (cljs_time.core.in_years[(function (){var G__34228 = x__4402__auto__;
return goog.typeOf(G__34228);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs_time.core.in_years["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
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
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k34230,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__34232 = (((k34230 instanceof cljs.core.Keyword))?k34230.fqn:null);
switch (G__34232) {
case "end":
return self__.end;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34230,else__4364__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#cljs-time.core.Interval{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$189,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$190,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
var h__4179__auto__ = self__.__hash;
if(!((h__4179__auto__ == null))){
return h__4179__auto__;
} else {
var h__4179__auto____$1 = cljs.core.hash_imap(this__4356__auto____$1);
self__.__hash = h__4179__auto____$1;

return h__4179__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3746__auto__ = other__4358__auto__;
if(cljs.core.truth_(and__3746__auto__)){
return ((this__4357__auto____$1.constructor === other__4358__auto__.constructor)) && (cljs.core.equiv_map(this__4357__auto____$1,other__4358__auto__));
} else {
return and__3746__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$189,null,cljs.core.constant$keyword$190,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__34229){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__34233 = cljs.core.keyword_identical_QMARK_;
var expr__34234 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__34236 = cljs.core.constant$keyword$189;
var G__34237 = expr__34234;
return (pred__34233.cljs$core$IFn$_invoke$arity$2 ? pred__34233.cljs$core$IFn$_invoke$arity$2(G__34236,G__34237) : pred__34233.call(null,G__34236,G__34237));
})())){
return (new cljs_time.core.Interval(G__34229,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34238 = cljs.core.constant$keyword$190;
var G__34239 = expr__34234;
return (pred__34233.cljs$core$IFn$_invoke$arity$2 ? pred__34233.cljs$core$IFn$_invoke$arity$2(G__34238,G__34239) : pred__34233.call(null,G__34238,G__34239));
})())){
return (new cljs_time.core.Interval(self__.start,G__34229,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__34229),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$189,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$190,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__34229){
var self__ = this;
var this__4360__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__34229,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function __GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function map__GT_Interval(G__34231){
return (new cljs_time.core.Interval(cljs.core.constant$keyword$189.cljs$core$IFn$_invoke$arity$1(G__34231),cljs.core.constant$keyword$190.cljs$core$IFn$_invoke$arity$1(G__34231),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34231,cljs.core.constant$keyword$189,cljs.core.array_seq([cljs.core.constant$keyword$190], 0)),null));
});

/**
* Returns an interval representing the span between the two given ReadableDateTimes.
* Note that intervals are closed on the left and open on the right.
*/
cljs_time.core.interval = (function interval(start,end){
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
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k34242,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__34244 = (((k34242 instanceof cljs.core.Keyword))?k34242.fqn:null);
switch (G__34244) {
case "millis":
return self__.millis;

break;
case "seconds":
return self__.seconds;

break;
case "minutes":
return self__.minutes;

break;
case "hours":
return self__.hours;

break;
case "days":
return self__.days;

break;
case "weeks":
return self__.weeks;

break;
case "months":
return self__.months;

break;
case "years":
return self__.years;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34242,else__4364__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#cljs-time.core.Period{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$185,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$184,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$188,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$183,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$182,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$181,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$180,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$179,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
var h__4179__auto__ = self__.__hash;
if(!((h__4179__auto__ == null))){
return h__4179__auto__;
} else {
var h__4179__auto____$1 = cljs.core.hash_imap(this__4356__auto____$1);
self__.__hash = h__4179__auto____$1;

return h__4179__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3746__auto__ = other__4358__auto__;
if(cljs.core.truth_(and__3746__auto__)){
return ((this__4357__auto____$1.constructor === other__4358__auto__.constructor)) && (cljs.core.equiv_map(this__4357__auto____$1,other__4358__auto__));
} else {
return and__3746__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$184,null,cljs.core.constant$keyword$183,null,cljs.core.constant$keyword$180,null,cljs.core.constant$keyword$182,null,cljs.core.constant$keyword$185,null,cljs.core.constant$keyword$181,null,cljs.core.constant$keyword$188,null,cljs.core.constant$keyword$179,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__34241){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__34245 = cljs.core.keyword_identical_QMARK_;
var expr__34246 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__34248 = cljs.core.constant$keyword$185;
var G__34249 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34248,G__34249) : pred__34245.call(null,G__34248,G__34249));
})())){
return (new cljs_time.core.Period(G__34241,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34250 = cljs.core.constant$keyword$184;
var G__34251 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34250,G__34251) : pred__34245.call(null,G__34250,G__34251));
})())){
return (new cljs_time.core.Period(self__.years,G__34241,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34252 = cljs.core.constant$keyword$188;
var G__34253 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34252,G__34253) : pred__34245.call(null,G__34252,G__34253));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,G__34241,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34254 = cljs.core.constant$keyword$183;
var G__34255 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34254,G__34255) : pred__34245.call(null,G__34254,G__34255));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__34241,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34256 = cljs.core.constant$keyword$182;
var G__34257 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34256,G__34257) : pred__34245.call(null,G__34256,G__34257));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__34241,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34258 = cljs.core.constant$keyword$181;
var G__34259 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34258,G__34259) : pred__34245.call(null,G__34258,G__34259));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__34241,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34260 = cljs.core.constant$keyword$180;
var G__34261 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34260,G__34261) : pred__34245.call(null,G__34260,G__34261));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__34241,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34262 = cljs.core.constant$keyword$179;
var G__34263 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34262,G__34263) : pred__34245.call(null,G__34262,G__34263));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__34241,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__34241),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$185,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$184,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$188,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$183,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$182,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$181,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$180,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$179,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__34241){
var self__ = this;
var this__4360__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__34241,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function __GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function map__GT_Period(G__34243){
return (new cljs_time.core.Period(cljs.core.constant$keyword$185.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.constant$keyword$184.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.constant$keyword$188.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.constant$keyword$182.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.constant$keyword$181.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.constant$keyword$179.cljs$core$IFn$_invoke$arity$1(G__34243),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34243,cljs.core.constant$keyword$185,cljs.core.array_seq([cljs.core.constant$keyword$184,cljs.core.constant$keyword$188,cljs.core.constant$keyword$183,cljs.core.constant$keyword$182,cljs.core.constant$keyword$181,cljs.core.constant$keyword$180,cljs.core.constant$keyword$179], 0)),null));
});

/**
* @param {...*} var_args
*/
cljs_time.core.period = (function() {
var period = null;
var period__2 = (function (period__$1,value){
return cljs_time.core.map__GT_Period(new cljs.core.PersistentArrayMap.fromArray([period__$1,value], true, false));
});
var period__3 = (function() { 
var G__34267__delegate = function (p1,v1,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,period.cljs$core$IFn$_invoke$arity$2(p1,v1),kvs);
};
var G__34267 = function (p1,v1,var_args){
var kvs = null;
if (arguments.length > 2) {
var G__34268__i = 0, G__34268__a = new Array(arguments.length -  2);
while (G__34268__i < G__34268__a.length) {G__34268__a[G__34268__i] = arguments[G__34268__i + 2]; ++G__34268__i;}
  kvs = new cljs.core.IndexedSeq(G__34268__a,0);
} 
return G__34267__delegate.call(this,p1,v1,kvs);};
G__34267.cljs$lang$maxFixedArity = 2;
G__34267.cljs$lang$applyTo = (function (arglist__34269){
var p1 = cljs.core.first(arglist__34269);
arglist__34269 = cljs.core.next(arglist__34269);
var v1 = cljs.core.first(arglist__34269);
var kvs = cljs.core.rest(arglist__34269);
return G__34267__delegate(p1,v1,kvs);
});
G__34267.cljs$core$IFn$_invoke$arity$variadic = G__34267__delegate;
return G__34267;
})()
;
period = function(p1,v1,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return period__2.call(this,p1,v1);
default:
var G__34270 = null;
if (arguments.length > 2) {
var G__34271__i = 0, G__34271__a = new Array(arguments.length -  2);
while (G__34271__i < G__34271__a.length) {G__34271__a[G__34271__i] = arguments[G__34271__i + 2]; ++G__34271__i;}
G__34270 = new cljs.core.IndexedSeq(G__34271__a,0);
}
return period__3.cljs$core$IFn$_invoke$arity$variadic(p1,v1, G__34270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
period.cljs$lang$maxFixedArity = 2;
period.cljs$lang$applyTo = period__3.cljs$lang$applyTo;
period.cljs$core$IFn$_invoke$arity$2 = period__2;
period.cljs$core$IFn$_invoke$arity$variadic = period__3.cljs$core$IFn$_invoke$arity$variadic;
return period;
})()
;
cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var G__34282_34301 = date__$1;
var G__34283_34302 = (function (){var G__34284 = (function (){var G__34286 = date__$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34286) : f.call(null,G__34286));
})();
var G__34285 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__34284,G__34285) : op.call(null,G__34284,G__34285));
})();
(set_fn.cljs$core$IFn$_invoke$arity$2 ? set_fn.cljs$core$IFn$_invoke$arity$2(G__34282_34301,G__34283_34302) : set_fn.call(null,G__34282_34301,G__34283_34302));
} else {
}

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$179,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__34272_SHARP_,p2__34273_SHARP_){
return p1__34272_SHARP_.setMilliseconds(p2__34273_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$180,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__34274_SHARP_,p2__34275_SHARP_){
return p1__34274_SHARP_.setSeconds(p2__34275_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$181,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__34276_SHARP_,p2__34277_SHARP_){
return p1__34276_SHARP_.setMinutes(p2__34277_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$182,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__34278_SHARP_,p2__34279_SHARP_){
return p1__34278_SHARP_.setHours(p2__34279_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$183,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__34280_SHARP_,p2__34281_SHARP_){
return p1__34280_SHARP_.setDate(p2__34281_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$188,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
date__$1.setDate((function (){var G__34287 = cljs_time.core.day(date__$1);
var G__34288 = ((7) * value);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__34287,G__34288) : op.call(null,G__34287,G__34288));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.constant$keyword$184,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var m_34303 = (function (){var G__34289 = cljs_time.core.month(date__$1);
var G__34290 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__34289,G__34290) : op.call(null,G__34289,G__34290));
})();
var y_34304 = cljs_time.core.year(date__$1);
var y_34305__$1 = (((m_34303 > (12)))?(y_34304 + (1)):(((m_34303 < (1)))?(y_34304 - (1)):y_34304
));
var m_34306__$1 = (((m_34303 > (12)))?cljs.core.mod(m_34303,(12)):(((m_34303 < (1)))?(m_34303 + (12)):m_34303
));
var ldom_34307 = cljs_time.core.day(cljs_time.core.last_day_of_the_month_((new goog.date.Date(y_34305__$1,(m_34306__$1 - (1)),(1)))));
if((ldom_34307 < cljs_time.core.day(date__$1))){
date__$1.setDate(ldom_34307);
} else {
}

date__$1.setMonth((m_34306__$1 - (1)));

date__$1.setYear(y_34305__$1);
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.constant$keyword$185,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
if(cljs.core.truth_((function (){var and__3746__auto__ = cljs_time.internal.core.leap_year_QMARK_(cljs_time.core.year(date__$1));
if(and__3746__auto__){
var and__3746__auto____$1 = (function (){var G__34295 = (2);
var G__34296 = cljs_time.core.month(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34295,G__34296) : cljs_time.core._EQ_.call(null,G__34295,G__34296));
})();
if(cljs.core.truth_(and__3746__auto____$1)){
var G__34297 = (29);
var G__34298 = cljs_time.core.day(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34297,G__34298) : cljs_time.core._EQ_.call(null,G__34297,G__34298));
} else {
return and__3746__auto____$1;
}
} else {
return and__3746__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear((function (){var G__34299 = cljs_time.core.year(date__$1);
var G__34300 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__34299,G__34300) : op.call(null,G__34299,G__34300));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function period_fn(p){
return (function (operator,date){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34309_SHARP_,p2__34308_SHARP_){
return (function (){var G__34311 = cljs.core.key(p2__34308_SHARP_);
return (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(G__34311) : cljs_time.core.periods.call(null,G__34311));
})().call(null,operator,p1__34309_SHARP_,cljs.core.val(p2__34308_SHARP_));
}),date,p);
});
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
if(cljs.core.truth_((function (){var G__34312 = d;
var G__34313 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34312,G__34313) : cljs_time.core._EQ_.call(null,G__34312,G__34313));
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
return cljs_time.core.minus_((new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$183,(1)));
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
if(cljs.core.truth_((function (){var G__34314 = d;
var G__34315 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34314,G__34315) : cljs_time.core._EQ_.call(null,G__34314,G__34315));
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
return cljs_time.core.minus_((new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$183,(1)));
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
if(cljs.core.truth_((function (){var G__34316 = d;
var G__34317 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34316,G__34317) : cljs_time.core._EQ_.call(null,G__34316,G__34317));
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
return cljs_time.core.minus_((new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$183,(1)));
});
cljs_time.core.utc = (function (){var G__34318 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$121,"UTC",cljs.core.constant$keyword$191,(0),cljs.core.constant$keyword$192,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null),cljs.core.constant$keyword$193,cljs.core.PersistentVector.EMPTY], null));
return goog.i18n.TimeZone.createTimeZone(G__34318);
})();
/**
* Returns a DateTime for the current instant in the UTC time zone.
*/
cljs_time.core.now = (function now(){
if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)){
return cljs_time.core._STAR_sys_time_STAR_;
} else {
return (new goog.date.UtcDateTime());
}
});
/**
* Returns a LocalTime for the current instant without date or time zone
* using ISOChronology in the current time zone.
*/
cljs_time.core.time_now = (function time_now(){
return (new goog.date.DateTime());
});
cljs_time.core.at_midnight = (function at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__34320 = datetime__$1;
G__34320.setHours((0));

G__34320.setMinutes((0));

G__34320.setSeconds((0));

G__34320.setMilliseconds((0));

return G__34320;
});
/**
* Returns a DateMidnight for today at midnight in the UTC time zone.
*/
cljs_time.core.today_at_midnight = (function today_at_midnight(){
return cljs_time.core.at_midnight(cljs_time.core.now());
});
/**
* Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
*/
cljs_time.core.epoch = (function epoch(){
var G__34322 = (new goog.date.UtcDateTime());
G__34322.setTime((0));

return G__34322;
});
/**
* Constructs and returns a new DateMidnight in UTC.
* 
* Specify the year, month of year, day of month. Note that month and day are
* 1-indexed. Any number of least-significant components can be ommited, in
* which case they will default to 1.
*/
cljs_time.core.date_midnight = (function() {
var date_midnight = null;
var date_midnight__1 = (function (year){
return date_midnight.cljs$core$IFn$_invoke$arity$3(year,(1),(1));
});
var date_midnight__2 = (function (year,month){
return date_midnight.cljs$core$IFn$_invoke$arity$3(year,month,(1));
});
var date_midnight__3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});
date_midnight = function(year,month,day){
switch(arguments.length){
case 1:
return date_midnight__1.call(this,year);
case 2:
return date_midnight__2.call(this,year,month);
case 3:
return date_midnight__3.call(this,year,month,day);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_midnight.cljs$core$IFn$_invoke$arity$1 = date_midnight__1;
date_midnight.cljs$core$IFn$_invoke$arity$2 = date_midnight__2;
date_midnight.cljs$core$IFn$_invoke$arity$3 = date_midnight__3;
return date_midnight;
})()
;
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
cljs_time.core.date_time = (function() {
var date_time = null;
var date_time__1 = (function (year){
return date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});
var date_time__2 = (function (year,month){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});
var date_time__3 = (function (year,month,day){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});
var date_time__4 = (function (year,month,day,hour){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});
var date_time__5 = (function (year,month,day,hour,minute){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});
var date_time__6 = (function (year,month,day,hour,minute,second){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});
var date_time__7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});
date_time = function(year,month,day,hour,minute,second,millis){
switch(arguments.length){
case 1:
return date_time__1.call(this,year);
case 2:
return date_time__2.call(this,year,month);
case 3:
return date_time__3.call(this,year,month,day);
case 4:
return date_time__4.call(this,year,month,day,hour);
case 5:
return date_time__5.call(this,year,month,day,hour,minute);
case 6:
return date_time__6.call(this,year,month,day,hour,minute,second);
case 7:
return date_time__7.call(this,year,month,day,hour,minute,second,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_time.cljs$core$IFn$_invoke$arity$1 = date_time__1;
date_time.cljs$core$IFn$_invoke$arity$2 = date_time__2;
date_time.cljs$core$IFn$_invoke$arity$3 = date_time__3;
date_time.cljs$core$IFn$_invoke$arity$4 = date_time__4;
date_time.cljs$core$IFn$_invoke$arity$5 = date_time__5;
date_time.cljs$core$IFn$_invoke$arity$6 = date_time__6;
date_time.cljs$core$IFn$_invoke$arity$7 = date_time__7;
return date_time;
})()
;
/**
* Constructs and returns a new LocalDateTime.
* Specify the year, month of year, day of month, hour of day, minute of hour,
* second of minute, and millisecond of second. Note that month and day are
* 1-indexed while hour, second, minute, and millis are 0-indexed.
* Any number of least-significant components can be ommited, in which case
* they will default to 1 or 0 as appropriate.
*/
cljs_time.core.local_date_time = (function() {
var local_date_time = null;
var local_date_time__1 = (function (year){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});
var local_date_time__2 = (function (year,month){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});
var local_date_time__3 = (function (year,month,day){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});
var local_date_time__4 = (function (year,month,day,hour){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});
var local_date_time__5 = (function (year,month,day,hour,minute){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});
var local_date_time__6 = (function (year,month,day,hour,minute,second){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});
var local_date_time__7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});
local_date_time = function(year,month,day,hour,minute,second,millis){
switch(arguments.length){
case 1:
return local_date_time__1.call(this,year);
case 2:
return local_date_time__2.call(this,year,month);
case 3:
return local_date_time__3.call(this,year,month,day);
case 4:
return local_date_time__4.call(this,year,month,day,hour);
case 5:
return local_date_time__5.call(this,year,month,day,hour,minute);
case 6:
return local_date_time__6.call(this,year,month,day,hour,minute,second);
case 7:
return local_date_time__7.call(this,year,month,day,hour,minute,second,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
local_date_time.cljs$core$IFn$_invoke$arity$1 = local_date_time__1;
local_date_time.cljs$core$IFn$_invoke$arity$2 = local_date_time__2;
local_date_time.cljs$core$IFn$_invoke$arity$3 = local_date_time__3;
local_date_time.cljs$core$IFn$_invoke$arity$4 = local_date_time__4;
local_date_time.cljs$core$IFn$_invoke$arity$5 = local_date_time__5;
local_date_time.cljs$core$IFn$_invoke$arity$6 = local_date_time__6;
local_date_time.cljs$core$IFn$_invoke$arity$7 = local_date_time__7;
return local_date_time;
})()
;
/**
* Constructs and returns a new LocalDate.
* Specify the year, month, and day. Does not deal with timezones.
*/
cljs_time.core.local_date = (function local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
* Constructs and returns a new LocalDate representing today's date.
* LocalDate objects do not deal with timezones at all.
*/
cljs_time.core.today = (function today(){
if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)){
var d = cljs_time.core._STAR_sys_time_STAR_;
return (new goog.date.Date(d.getYear(),d.getMonth(),d.getDate()));
} else {
return (new goog.date.Date());
}
});
/**
* Returns a DateTimeZone for the given offset, specified either in hours or
* hours and minutes.
*/
cljs_time.core.time_zone_for_offset = (function() {
var time_zone_for_offset = null;
var time_zone_for_offset__1 = (function (hours){
return time_zone_for_offset.cljs$core$IFn$_invoke$arity$2(hours,null);
});
var time_zone_for_offset__2 = (function (hours,minutes){
var sign = (((hours < (0)))?cljs.core.constant$keyword$194:cljs.core.constant$keyword$195);
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1,minutes], 0)):cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$121,tz_name,cljs.core.constant$keyword$196,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__3758__auto__ = minutes;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return (0);
}
})(),(0)], null),cljs.core.constant$keyword$197,"-",cljs.core.constant$keyword$192,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$198], null));
});
time_zone_for_offset = function(hours,minutes){
switch(arguments.length){
case 1:
return time_zone_for_offset__1.call(this,hours);
case 2:
return time_zone_for_offset__2.call(this,hours,minutes);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = time_zone_for_offset__1;
time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = time_zone_for_offset__2;
return time_zone_for_offset;
})()
;
/**
* Returns the default DateTimeZone for the current environment.
*/
cljs_time.core.default_time_zone = (function default_time_zone(){
var hours = (((-1) * (new goog.date.DateTime()).getTimezoneOffset()) / (60));
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((hours | (0)),cljs.core.mod(hours,(1)));
});
/**
* Assuming `dt` is in the UTC timezone, returns a DateTime
* corresponding to the same absolute instant in time as the given
* DateTime, but with calendar fields corresponding to in the default
* (local) timezone.
*/
cljs_time.core.to_default_time_zone = (function to_default_time_zone(dt){
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
cljs_time.core.from_default_time_zone = (function from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
* Given a number, returns a Period representing that many years.
* Without an argument, returns a PeriodType representing only years.
*/
cljs_time.core.years = (function() {
var years = null;
var years__0 = (function (){
return years.cljs$core$IFn$_invoke$arity$1(null);
});
var years__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$185,n);
});
years = function(n){
switch(arguments.length){
case 0:
return years__0.call(this);
case 1:
return years__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
years.cljs$core$IFn$_invoke$arity$0 = years__0;
years.cljs$core$IFn$_invoke$arity$1 = years__1;
return years;
})()
;
/**
* Given a number, returns a Period representing that many months.
* Without an argument, returns a PeriodType representing only months.
*/
cljs_time.core.months = (function() {
var months = null;
var months__0 = (function (){
return months.cljs$core$IFn$_invoke$arity$1(null);
});
var months__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$184,n);
});
months = function(n){
switch(arguments.length){
case 0:
return months__0.call(this);
case 1:
return months__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
months.cljs$core$IFn$_invoke$arity$0 = months__0;
months.cljs$core$IFn$_invoke$arity$1 = months__1;
return months;
})()
;
/**
* Given a number, returns a Period representing that many weeks.
* Without an argument, returns a PeriodType representing only weeks.
*/
cljs_time.core.weeks = (function() {
var weeks = null;
var weeks__0 = (function (){
return weeks.cljs$core$IFn$_invoke$arity$1(null);
});
var weeks__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$188,n);
});
weeks = function(n){
switch(arguments.length){
case 0:
return weeks__0.call(this);
case 1:
return weeks__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
weeks.cljs$core$IFn$_invoke$arity$0 = weeks__0;
weeks.cljs$core$IFn$_invoke$arity$1 = weeks__1;
return weeks;
})()
;
/**
* Given a number, returns a Period representing that many days.
* Without an argument, returns a PeriodType representing only days.
*/
cljs_time.core.days = (function() {
var days = null;
var days__0 = (function (){
return days.cljs$core$IFn$_invoke$arity$1(null);
});
var days__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$183,n);
});
days = function(n){
switch(arguments.length){
case 0:
return days__0.call(this);
case 1:
return days__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
days.cljs$core$IFn$_invoke$arity$0 = days__0;
days.cljs$core$IFn$_invoke$arity$1 = days__1;
return days;
})()
;
/**
* Given a number, returns a Period representing that many hours.
* Without an argument, returns a PeriodType representing only hours.
*/
cljs_time.core.hours = (function() {
var hours = null;
var hours__0 = (function (){
return hours.cljs$core$IFn$_invoke$arity$1(null);
});
var hours__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$182,n);
});
hours = function(n){
switch(arguments.length){
case 0:
return hours__0.call(this);
case 1:
return hours__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hours.cljs$core$IFn$_invoke$arity$0 = hours__0;
hours.cljs$core$IFn$_invoke$arity$1 = hours__1;
return hours;
})()
;
/**
* Given a number, returns a Period representing that many minutes.
* Without an argument, returns a PeriodType representing only minutes.
*/
cljs_time.core.minutes = (function() {
var minutes = null;
var minutes__0 = (function (){
return minutes.cljs$core$IFn$_invoke$arity$1(null);
});
var minutes__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$181,n);
});
minutes = function(n){
switch(arguments.length){
case 0:
return minutes__0.call(this);
case 1:
return minutes__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
minutes.cljs$core$IFn$_invoke$arity$0 = minutes__0;
minutes.cljs$core$IFn$_invoke$arity$1 = minutes__1;
return minutes;
})()
;
/**
* Given a number, returns a Period representing that many seconds.
* Without an argument, returns a PeriodType representing only seconds.
*/
cljs_time.core.seconds = (function() {
var seconds = null;
var seconds__0 = (function (){
return seconds.cljs$core$IFn$_invoke$arity$1(null);
});
var seconds__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$180,n);
});
seconds = function(n){
switch(arguments.length){
case 0:
return seconds__0.call(this);
case 1:
return seconds__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seconds.cljs$core$IFn$_invoke$arity$0 = seconds__0;
seconds.cljs$core$IFn$_invoke$arity$1 = seconds__1;
return seconds;
})()
;
/**
* Given a number, returns a Period representing that many milliseconds.
* Without an argument, returns a PeriodType representing only milliseconds.
*/
cljs_time.core.millis = (function() {
var millis = null;
var millis__0 = (function (){
return millis.cljs$core$IFn$_invoke$arity$1(null);
});
var millis__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$179,n);
});
millis = function(n){
switch(arguments.length){
case 0:
return millis__0.call(this);
case 1:
return millis__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
millis.cljs$core$IFn$_invoke$arity$0 = millis__0;
millis.cljs$core$IFn$_invoke$arity$1 = millis__1;
return millis;
})()
;
/**
* Returns a new date/time corresponding to the given date/time moved forwards by
* the given Period(s).
* @param {...*} var_args
*/
cljs_time.core.plus = (function() {
var plus = null;
var plus__2 = (function (dt,p){
return cljs_time.core.plus_(dt,p);
});
var plus__3 = (function() { 
var G__34423__delegate = function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus_,cljs_time.core.plus_(dt,p),ps);
};
var G__34423 = function (dt,p,var_args){
var ps = null;
if (arguments.length > 2) {
var G__34424__i = 0, G__34424__a = new Array(arguments.length -  2);
while (G__34424__i < G__34424__a.length) {G__34424__a[G__34424__i] = arguments[G__34424__i + 2]; ++G__34424__i;}
  ps = new cljs.core.IndexedSeq(G__34424__a,0);
} 
return G__34423__delegate.call(this,dt,p,ps);};
G__34423.cljs$lang$maxFixedArity = 2;
G__34423.cljs$lang$applyTo = (function (arglist__34425){
var dt = cljs.core.first(arglist__34425);
arglist__34425 = cljs.core.next(arglist__34425);
var p = cljs.core.first(arglist__34425);
var ps = cljs.core.rest(arglist__34425);
return G__34423__delegate(dt,p,ps);
});
G__34423.cljs$core$IFn$_invoke$arity$variadic = G__34423__delegate;
return G__34423;
})()
;
plus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return plus__2.call(this,dt,p);
default:
var G__34426 = null;
if (arguments.length > 2) {
var G__34427__i = 0, G__34427__a = new Array(arguments.length -  2);
while (G__34427__i < G__34427__a.length) {G__34427__a[G__34427__i] = arguments[G__34427__i + 2]; ++G__34427__i;}
G__34426 = new cljs.core.IndexedSeq(G__34427__a,0);
}
return plus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, G__34426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plus.cljs$lang$maxFixedArity = 2;
plus.cljs$lang$applyTo = plus__3.cljs$lang$applyTo;
plus.cljs$core$IFn$_invoke$arity$2 = plus__2;
plus.cljs$core$IFn$_invoke$arity$variadic = plus__3.cljs$core$IFn$_invoke$arity$variadic;
return plus;
})()
;
/**
* Returns a new date/time object corresponding to the given date/time moved backwards by
* the given Period(s).
* @param {...*} var_args
*/
cljs_time.core.minus = (function() {
var minus = null;
var minus__2 = (function (dt,p){
return cljs_time.core.minus_(dt,p);
});
var minus__3 = (function() { 
var G__34428__delegate = function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.minus_,cljs_time.core.minus_(dt,p),ps);
};
var G__34428 = function (dt,p,var_args){
var ps = null;
if (arguments.length > 2) {
var G__34429__i = 0, G__34429__a = new Array(arguments.length -  2);
while (G__34429__i < G__34429__a.length) {G__34429__a[G__34429__i] = arguments[G__34429__i + 2]; ++G__34429__i;}
  ps = new cljs.core.IndexedSeq(G__34429__a,0);
} 
return G__34428__delegate.call(this,dt,p,ps);};
G__34428.cljs$lang$maxFixedArity = 2;
G__34428.cljs$lang$applyTo = (function (arglist__34430){
var dt = cljs.core.first(arglist__34430);
arglist__34430 = cljs.core.next(arglist__34430);
var p = cljs.core.first(arglist__34430);
var ps = cljs.core.rest(arglist__34430);
return G__34428__delegate(dt,p,ps);
});
G__34428.cljs$core$IFn$_invoke$arity$variadic = G__34428__delegate;
return G__34428;
})()
;
minus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return minus__2.call(this,dt,p);
default:
var G__34431 = null;
if (arguments.length > 2) {
var G__34432__i = 0, G__34432__a = new Array(arguments.length -  2);
while (G__34432__i < G__34432__a.length) {G__34432__a[G__34432__i] = arguments[G__34432__i + 2]; ++G__34432__i;}
G__34431 = new cljs.core.IndexedSeq(G__34432__a,0);
}
return minus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, G__34431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
minus.cljs$lang$maxFixedArity = 2;
minus.cljs$lang$applyTo = minus__3.cljs$lang$applyTo;
minus.cljs$core$IFn$_invoke$arity$2 = minus__2;
minus.cljs$core$IFn$_invoke$arity$variadic = minus__3.cljs$core$IFn$_invoke$arity$variadic;
return minus;
})()
;
/**
* Returns a DateTime a supplied period before the present.
* 
* e.g. `(-> 5 years ago)`
*/
cljs_time.core.ago = (function ago(period){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
* Returns a DateTime for yesterday relative to now
*/
cljs_time.core.yesterday = (function yesterday(){
return cljs_time.core.ago(cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});
/**
* Returns a DateTime a supplied period after the present.
* e.g. `(-> 30 minutes from-now)`
*/
cljs_time.core.from_now = (function from_now(period){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
* Returns the earliest of the supplied DateTimes
*/
cljs_time.core.earliest = (function() {
var earliest = null;
var earliest__1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(earliest,dts);
});
var earliest__2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});
earliest = function(dt1,dt2){
switch(arguments.length){
case 1:
return earliest__1.call(this,dt1);
case 2:
return earliest__2.call(this,dt1,dt2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
earliest.cljs$core$IFn$_invoke$arity$1 = earliest__1;
earliest.cljs$core$IFn$_invoke$arity$2 = earliest__2;
return earliest;
})()
;
/**
* Returns the latest of the supplied DateTimes
*/
cljs_time.core.latest = (function() {
var latest = null;
var latest__1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(latest,dts);
});
var latest__2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});
latest = function(dt1,dt2){
switch(arguments.length){
case 1:
return latest__1.call(this,dt1);
case 2:
return latest__2.call(this,dt1,dt2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
latest.cljs$core$IFn$_invoke$arity$1 = latest__1;
latest.cljs$core$IFn$_invoke$arity$2 = latest__2;
return latest;
})()
;
/**
* Returns the start DateTime of an Interval.
*/
cljs_time.core.start = (function start(in$){
return cljs.core.constant$keyword$189.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
* Returns the end DateTime of an Interval.
*/
cljs_time.core.end = (function end(in$){
return cljs.core.constant$keyword$190.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
* Returns an Interval with an end ReadableDateTime the specified Period after the end
* of the given Interval
* @param {...*} var_args
*/
cljs_time.core.extend = (function() { 
var extend__delegate = function (in$,by){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,cljs.core.constant$keyword$190,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus,cljs_time.core.end(in$),by));
};
var extend = function (in$,var_args){
var by = null;
if (arguments.length > 1) {
var G__34433__i = 0, G__34433__a = new Array(arguments.length -  1);
while (G__34433__i < G__34433__a.length) {G__34433__a[G__34433__i] = arguments[G__34433__i + 1]; ++G__34433__i;}
  by = new cljs.core.IndexedSeq(G__34433__a,0);
} 
return extend__delegate.call(this,in$,by);};
extend.cljs$lang$maxFixedArity = 1;
extend.cljs$lang$applyTo = (function (arglist__34434){
var in$ = cljs.core.first(arglist__34434);
var by = cljs.core.rest(arglist__34434);
return extend__delegate(in$,by);
});
extend.cljs$core$IFn$_invoke$arity$variadic = extend__delegate;
return extend;
})()
;
cljs_time.core.month_range = (function month_range(p__34437){
var map__34439 = p__34437;
var map__34439__$1 = ((cljs.core.seq_QMARK_(map__34439))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34439):map__34439);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34439__$1,cljs.core.constant$keyword$190);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34439__$1,cljs.core.constant$keyword$189);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (map__34439,map__34439__$1,end,start){
return (function (p1__34435_SHARP_){
return cljs_time.core.before_QMARK_(p1__34435_SHARP_,end);
});})(map__34439,map__34439__$1,end,start))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__34439,map__34439__$1,end,start){
return (function (p1__34436_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((p1__34436_SHARP_ + (1))));
});})(map__34439,map__34439__$1,end,start))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljs_time.core.total_days_in_whole_months = (function total_days_in_whole_months(interval){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34440_SHARP_){
return p1__34440_SHARP_.getNumberOfDaysInMonth();
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
cljs_time.core.in_months_ = (function in_months_(p__34441){
var map__34443 = p__34441;
var map__34443__$1 = ((cljs.core.seq_QMARK_(map__34443))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34443):map__34443);
var interval = map__34443__$1;
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34443__$1,cljs.core.constant$keyword$190);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34443__$1,cljs.core.constant$keyword$189);
return cljs.core.count(cljs_time.core.total_days_in_whole_months(interval));
});
/**
* Returns the number of standard years in the given Interval.
*/
cljs_time.core.in_years_ = (function in_years_(p__34444){
var map__34460 = p__34444;
var map__34460__$1 = ((cljs.core.seq_QMARK_(map__34460))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34460):map__34460);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34460__$1,cljs.core.constant$keyword$190);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34460__$1,cljs.core.constant$keyword$189);
var sm = cljs_time.core.month(start);
var sd = cljs_time.core.day(start);
var em = cljs_time.core.month(end);
var ed = cljs_time.core.day(end);
var d1 = (cljs.core.truth_((function (){var and__3746__auto__ = (function (){var G__34463 = sm;
var G__34464 = (2);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34463,G__34464) : cljs_time.core._EQ_.call(null,G__34463,G__34464));
})();
if(cljs.core.truth_(and__3746__auto__)){
var and__3746__auto____$1 = (function (){var G__34467 = sd;
var G__34468 = (29);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34467,G__34468) : cljs_time.core._EQ_.call(null,G__34467,G__34468));
})();
if(cljs.core.truth_(and__3746__auto____$1)){
var and__3746__auto____$2 = (function (){var G__34471 = em;
var G__34472 = (2);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34471,G__34472) : cljs_time.core._EQ_.call(null,G__34471,G__34472));
})();
if(cljs.core.truth_(and__3746__auto____$2)){
var G__34473 = ed;
var G__34474 = (28);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34473,G__34474) : cljs_time.core._EQ_.call(null,G__34473,G__34474));
} else {
return and__3746__auto____$2;
}
} else {
return and__3746__auto____$1;
}
} else {
return and__3746__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year(end) - cljs_time.core.year(start)) - d1);
});
cljs_time.core.conversion_error = (function conversion_error(from,to){
var from__$1 = clojure.string.capitalize(cljs.core.name(from));
var to__$1 = cljs.core.name(to);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s cannot be converted to %s",cljs.core.array_seq([from__$1,to__$1], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$200], null));
});
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__34475){
var map__34476 = p__34475;
var map__34476__$1 = ((cljs.core.seq_QMARK_(map__34476))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34476):map__34476);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,cljs.core.constant$keyword$190);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,cljs.core.constant$keyword$189);
var map__34477 = this;
var map__34477__$1 = ((cljs.core.seq_QMARK_(map__34477))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34477):map__34477);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,cljs.core.constant$keyword$190);
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,cljs.core.constant$keyword$189);
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

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__34478){
var map__34479 = p__34478;
var map__34479__$1 = ((cljs.core.seq_QMARK_(map__34479))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34479):map__34479);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$185);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$184);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$188);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$183);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$182);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$181);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$180);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$179);
var map__34480 = this;
var map__34480__$1 = ((cljs.core.seq_QMARK_(map__34480))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34480):map__34480);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$185);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$184);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$188);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$183);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$182);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$181);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$180);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$179);
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$184,cljs.core.constant$keyword$179);
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$185,cljs.core.constant$keyword$179);
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

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__34481){
var map__34482 = p__34481;
var map__34482__$1 = ((cljs.core.seq_QMARK_(map__34482))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34482):map__34482);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$185);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$184);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$188);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$183);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$182);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$181);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$180);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$179);
var map__34483 = this;
var map__34483__$1 = ((cljs.core.seq_QMARK_(map__34483))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34483):map__34483);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$185);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$184);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$188);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$183);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$182);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$181);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$180);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$179);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$179,cljs.core.constant$keyword$184);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$180,cljs.core.constant$keyword$184);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$181,cljs.core.constant$keyword$184);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$182,cljs.core.constant$keyword$184);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$183,cljs.core.constant$keyword$184);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$188,cljs.core.constant$keyword$184);
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__3758__auto__ = years__$1;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
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

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__34484){
var map__34485 = p__34484;
var map__34485__$1 = ((cljs.core.seq_QMARK_(map__34485))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34485):map__34485);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,cljs.core.constant$keyword$185);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,cljs.core.constant$keyword$184);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,cljs.core.constant$keyword$188);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,cljs.core.constant$keyword$183);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,cljs.core.constant$keyword$182);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,cljs.core.constant$keyword$181);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,cljs.core.constant$keyword$180);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,cljs.core.constant$keyword$179);
var map__34486 = this;
var map__34486__$1 = ((cljs.core.seq_QMARK_(map__34486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34486):map__34486);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34486__$1,cljs.core.constant$keyword$185);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34486__$1,cljs.core.constant$keyword$184);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34486__$1,cljs.core.constant$keyword$188);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34486__$1,cljs.core.constant$keyword$183);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34486__$1,cljs.core.constant$keyword$182);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34486__$1,cljs.core.constant$keyword$181);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34486__$1,cljs.core.constant$keyword$180);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34486__$1,cljs.core.constant$keyword$179);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$179,cljs.core.constant$keyword$185);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$180,cljs.core.constant$keyword$185);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$181,cljs.core.constant$keyword$185);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$182,cljs.core.constant$keyword$185);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$183,cljs.core.constant$keyword$185);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$188,cljs.core.constant$keyword$185);
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
/**
* With 2 arguments: Returns true if the given Interval contains the given
* ReadableDateTime. Note that if the ReadableDateTime is exactly equal to the
* end of the interval, this function returns false.
* 
* With 3 arguments: Returns true if the start ReadablePartial is
* equal to or before and the end ReadablePartial is equal to or after the test
* ReadablePartial.
*/
cljs_time.core.within_QMARK_ = (function() {
var within_QMARK_ = null;
var within_QMARK___2 = (function (p__34487,date){
var map__34496 = p__34487;
var map__34496__$1 = ((cljs.core.seq_QMARK_(map__34496))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34496):map__34496);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34496__$1,cljs.core.constant$keyword$190);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34496__$1,cljs.core.constant$keyword$189);
return within_QMARK_.cljs$core$IFn$_invoke$arity$3(start,end,date);
});
var within_QMARK___3 = (function (start,end,date){
var or__3758__auto__ = (function (){var G__34499 = start;
var G__34500 = date;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34499,G__34500) : cljs_time.core._EQ_.call(null,G__34499,G__34500));
})();
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var and__3746__auto__ = cljs_time.core.before_QMARK_(start,date);
if(cljs.core.truth_(and__3746__auto__)){
return cljs_time.core.after_QMARK_(end,date);
} else {
return and__3746__auto__;
}
}
});
within_QMARK_ = function(start,end,date){
switch(arguments.length){
case 2:
return within_QMARK___2.call(this,start,end);
case 3:
return within_QMARK___3.call(this,start,end,date);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
within_QMARK_.cljs$core$IFn$_invoke$arity$2 = within_QMARK___2;
within_QMARK_.cljs$core$IFn$_invoke$arity$3 = within_QMARK___3;
return within_QMARK_;
})()
;
/**
* With 2 arguments: Returns true of the two given Intervals overlap.
* Note that intervals that satisfy abuts? do not satisfy overlaps?
* 
* With 4 arguments: Returns true if the range specified by start-a and end-a
* overlaps with the range specified by start-b and end-b.
*/
cljs_time.core.overlaps_QMARK_ = (function() {
var overlaps_QMARK_ = null;
var overlaps_QMARK___2 = (function (p__34501,p__34502){
var map__34531 = p__34501;
var map__34531__$1 = ((cljs.core.seq_QMARK_(map__34531))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34531):map__34531);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34531__$1,cljs.core.constant$keyword$189);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34531__$1,cljs.core.constant$keyword$190);
var map__34532 = p__34502;
var map__34532__$1 = ((cljs.core.seq_QMARK_(map__34532))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34532):map__34532);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34532__$1,cljs.core.constant$keyword$189);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34532__$1,cljs.core.constant$keyword$190);
var and__3746__auto__ = cljs.core.not((function (){var or__3758__auto__ = (function (){var G__34541 = start_a;
var G__34542 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34541,G__34542) : cljs_time.core._EQ_.call(null,G__34541,G__34542));
})();
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var G__34543 = end_a;
var G__34544 = start_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34543,G__34544) : cljs_time.core._EQ_.call(null,G__34543,G__34544));
}
})());
if(and__3746__auto__){
return overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4(start_a,end_a,start_b,end_b);
} else {
return and__3746__auto__;
}
});
var overlaps_QMARK___4 = (function (start_a,end_a,start_b,end_b){
var or__3758__auto__ = (function (){var and__3746__auto__ = cljs_time.core.before_QMARK_(start_b,end_a);
if(cljs.core.truth_(and__3746__auto__)){
return cljs_time.core.after_QMARK_(end_b,start_a);
} else {
return and__3746__auto__;
}
})();
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (function (){var and__3746__auto__ = cljs_time.core.after_QMARK_(end_b,start_a);
if(cljs.core.truth_(and__3746__auto__)){
return cljs_time.core.before_QMARK_(start_b,end_a);
} else {
return and__3746__auto__;
}
})();
if(cljs.core.truth_(or__3758__auto____$1)){
return or__3758__auto____$1;
} else {
var or__3758__auto____$2 = (function (){var G__34547 = start_a;
var G__34548 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34547,G__34548) : cljs_time.core._EQ_.call(null,G__34547,G__34548));
})();
if(cljs.core.truth_(or__3758__auto____$2)){
return or__3758__auto____$2;
} else {
var G__34549 = start_b;
var G__34550 = end_a;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34549,G__34550) : cljs_time.core._EQ_.call(null,G__34549,G__34550));
}
}
}
});
overlaps_QMARK_ = function(start_a,end_a,start_b,end_b){
switch(arguments.length){
case 2:
return overlaps_QMARK___2.call(this,start_a,end_a);
case 4:
return overlaps_QMARK___4.call(this,start_a,end_a,start_b,end_b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = overlaps_QMARK___2;
overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = overlaps_QMARK___4;
return overlaps_QMARK_;
})()
;
/**
* Returns true if Interval a abuts b, i.e. then end of a is exactly the
* beginning of b.
*/
cljs_time.core.abuts_QMARK_ = (function abuts_QMARK_(p__34551,p__34552){
var map__34561 = p__34551;
var map__34561__$1 = ((cljs.core.seq_QMARK_(map__34561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34561):map__34561);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34561__$1,cljs.core.constant$keyword$189);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34561__$1,cljs.core.constant$keyword$190);
var map__34562 = p__34552;
var map__34562__$1 = ((cljs.core.seq_QMARK_(map__34562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34562):map__34562);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34562__$1,cljs.core.constant$keyword$189);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34562__$1,cljs.core.constant$keyword$190);
var or__3758__auto__ = (function (){var G__34565 = start_a;
var G__34566 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34565,G__34566) : cljs_time.core._EQ_.call(null,G__34565,G__34566));
})();
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var G__34567 = end_a;
var G__34568 = start_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34567,G__34568) : cljs_time.core._EQ_.call(null,G__34567,G__34568));
}
});
cljs_time.core.date_QMARK_ = (function date_QMARK_(x){
var G__34570 = x;
if(G__34570){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__34570.cljs_time$core$DateTimeProtocol$;
}
})())){
return true;
} else {
if((!G__34570.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,G__34570);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,G__34570);
}
});
cljs_time.core.interval_QMARK_ = (function interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function period_type_QMARK_(type,x){
return (cljs_time.core.period_QMARK_(x)) && (cljs.core.contains_QMARK_(x,type));
});
/**
* Returns true if the given value is an instance of Years
*/
cljs_time.core.years_QMARK_ = (function years_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$185,val);
});
/**
* Returns true if the given value is an instance of Months
*/
cljs_time.core.months_QMARK_ = (function months_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$184,val);
});
/**
* Returns true if the given value is an instance of Weeks
*/
cljs_time.core.weeks_QMARK_ = (function weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$188,val);
});
/**
* Returns true if the given value is an instance of Days
*/
cljs_time.core.days_QMARK_ = (function days_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$183,val);
});
/**
* Returns true if the given value is an instance of Hours
*/
cljs_time.core.hours_QMARK_ = (function hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$182,val);
});
/**
* Returns true if the given value is an instance of Minutes
*/
cljs_time.core.minutes_QMARK_ = (function minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$181,val);
});
/**
* Returns true if the given value is an instance of Seconds
*/
cljs_time.core.seconds_QMARK_ = (function seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$180,val);
});
cljs_time.core.mins_ago = (function mins_ago(d){
return cljs_time.core.in_minutes(cljs_time.core.interval(d,cljs_time.core.now()));
});
cljs_time.core.last_day_of_the_month = (function() {
var last_day_of_the_month = null;
var last_day_of_the_month__1 = (function (dt){
return cljs_time.core.last_day_of_the_month_(dt);
});
var last_day_of_the_month__2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});
last_day_of_the_month = function(year,month){
switch(arguments.length){
case 1:
return last_day_of_the_month__1.call(this,year);
case 2:
return last_day_of_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = last_day_of_the_month__1;
last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = last_day_of_the_month__2;
return last_day_of_the_month;
})()
;
cljs_time.core.number_of_days_in_the_month = (function() {
var number_of_days_in_the_month = null;
var number_of_days_in_the_month__1 = (function (dt){
return number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(dt),cljs_time.core.month(dt));
});
var number_of_days_in_the_month__2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2(year,month).getDate();
});
number_of_days_in_the_month = function(year,month){
switch(arguments.length){
case 1:
return number_of_days_in_the_month__1.call(this,year);
case 2:
return number_of_days_in_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = number_of_days_in_the_month__1;
number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = number_of_days_in_the_month__2;
return number_of_days_in_the_month;
})()
;
cljs_time.core.first_day_of_the_month = (function() {
var first_day_of_the_month = null;
var first_day_of_the_month__1 = (function (dt){
return cljs_time.core.first_day_of_the_month_(dt);
});
var first_day_of_the_month__2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});
first_day_of_the_month = function(year,month){
switch(arguments.length){
case 1:
return first_day_of_the_month__1.call(this,year);
case 2:
return first_day_of_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = first_day_of_the_month__1;
first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = first_day_of_the_month__2;
return first_day_of_the_month;
})()
;
cljs_time.core.__GT_period = (function (){var method_table__4655__auto__ = (function (){var G__34573 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34573) : cljs.core.atom.call(null,G__34573));
})();
var prefer_table__4656__auto__ = (function (){var G__34574 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34574) : cljs.core.atom.call(null,G__34574));
})();
var method_cache__4657__auto__ = (function (){var G__34575 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34575) : cljs.core.atom.call(null,G__34575));
})();
var cached_hierarchy__4658__auto__ = (function (){var G__34576 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34576) : cljs.core.atom.call(null,G__34576));
})();
var hierarchy__4659__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$201,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-time.core","->period"),cljs.core.type,cljs.core.constant$keyword$7,hierarchy__4659__auto__,method_table__4655__auto__,prefer_table__4656__auto__,method_cache__4657__auto__,cached_hierarchy__4658__auto__));
})();
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,cljs_time.core.Interval,(function (p__34577){
var map__34578 = p__34577;
var map__34578__$1 = ((cljs.core.seq_QMARK_(map__34578))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34578):map__34578);
var interval = map__34578__$1;
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34578__$1,cljs.core.constant$keyword$190);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34578__$1,cljs.core.constant$keyword$189);
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
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$185,years,cljs.core.array_seq([cljs.core.constant$keyword$184,months,cljs.core.constant$keyword$183,days,cljs.core.constant$keyword$182,hours,cljs.core.constant$keyword$181,minutes,cljs.core.constant$keyword$180,seconds,cljs.core.constant$keyword$179,(cljs_time.core.in_millis(interval) - ((1000) * (seconds + seconds_to_remove)))], 0));
}));
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,cljs_time.core.Period,(function (period){
return period;
}));
cljs_time.core.today_at = (function() {
var today_at = null;
var today_at__2 = (function (hours,minutes){
return today_at.cljs$core$IFn$_invoke$arity$3(hours,minutes,(0));
});
var today_at__3 = (function (hours,minutes,seconds){
return today_at.cljs$core$IFn$_invoke$arity$4(hours,minutes,seconds,(0));
});
var today_at__4 = (function (hours,minutes,seconds,millis){
var midnight = (new goog.date.Date());
var G__34587 = (new goog.date.UtcDateTime((0)));
G__34587.setYear(midnight.getYear());

G__34587.setMonth(midnight.getMonth());

G__34587.setDate(midnight.getDate());

G__34587.setHours(hours);

G__34587.setMinutes(minutes);

G__34587.setSeconds(seconds);

G__34587.setMilliseconds(millis);

return G__34587;
});
today_at = function(hours,minutes,seconds,millis){
switch(arguments.length){
case 2:
return today_at__2.call(this,hours,minutes);
case 3:
return today_at__3.call(this,hours,minutes,seconds);
case 4:
return today_at__4.call(this,hours,minutes,seconds,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
today_at.cljs$core$IFn$_invoke$arity$2 = today_at__2;
today_at.cljs$core$IFn$_invoke$arity$3 = today_at__3;
today_at.cljs$core$IFn$_invoke$arity$4 = today_at__4;
return today_at;
})()
;
cljs_time.core.do_at_STAR_ = (function do_at_STAR_(base_date_time,body_fn){
var _STAR_sys_time_STAR_34589 = cljs_time.core._STAR_sys_time_STAR_;
try{cljs_time.core._STAR_sys_time_STAR_ = base_date_time;

return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {cljs_time.core._STAR_sys_time_STAR_ = _STAR_sys_time_STAR_34589;
}});
