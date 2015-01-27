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

cljs_time.core.DateTimeProtocol = (function (){var obj36059 = {};
return obj36059;
})();

cljs_time.core.year = (function year(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.year[(function (){var G__36063 = x__4895__auto__;
return goog.typeOf(G__36063);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.year["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.year",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.month = (function month(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.month[(function (){var G__36067 = x__4895__auto__;
return goog.typeOf(G__36067);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.month["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.month",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.day = (function day(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.day[(function (){var G__36071 = x__4895__auto__;
return goog.typeOf(G__36071);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.day["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.day_of_week = (function day_of_week(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.day_of_week[(function (){var G__36075 = x__4895__auto__;
return goog.typeOf(G__36075);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day-of-week",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.hour = (function hour(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.hour[(function (){var G__36079 = x__4895__auto__;
return goog.typeOf(G__36079);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.hour["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.hour",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.minute = (function minute(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.minute[(function (){var G__36083 = x__4895__auto__;
return goog.typeOf(G__36083);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.minute["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minute",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.sec = (function sec(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.sec[(function (){var G__36087 = x__4895__auto__;
return goog.typeOf(G__36087);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.sec["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.sec",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.second = (function second(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.second[(function (){var G__36091 = x__4895__auto__;
return goog.typeOf(G__36091);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.second["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.second",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.milli = (function milli(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.milli[(function (){var G__36095 = x__4895__auto__;
return goog.typeOf(G__36095);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.milli["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.milli",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.after_QMARK_ = (function after_QMARK_(this$,that){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.after_QMARK_[(function (){var G__36099 = x__4895__auto__;
return goog.typeOf(G__36099);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.after?",this$);
}
}
})().call(null,this$,that);
}
});

cljs_time.core.before_QMARK_ = (function before_QMARK_(this$,that){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.before_QMARK_[(function (){var G__36103 = x__4895__auto__;
return goog.typeOf(G__36103);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.before?",this$);
}
}
})().call(null,this$,that);
}
});

cljs_time.core.plus_ = (function plus_(this$,period){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.plus_[(function (){var G__36107 = x__4895__auto__;
return goog.typeOf(G__36107);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.plus_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.plus-",this$);
}
}
})().call(null,this$,period);
}
});

cljs_time.core.minus_ = (function minus_(this$,period){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.minus_[(function (){var G__36111 = x__4895__auto__;
return goog.typeOf(G__36111);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.minus_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minus-",this$);
}
}
})().call(null,this$,period);
}
});

cljs_time.core.first_day_of_the_month_ = (function first_day_of_the_month_(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.first_day_of_the_month_[(function (){var G__36115 = x__4895__auto__;
return goog.typeOf(G__36115);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.first-day-of-the-month-",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.last_day_of_the_month_ = (function last_day_of_the_month_(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.last_day_of_the_month_[(function (){var G__36119 = x__4895__auto__;
return goog.typeOf(G__36119);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.last-day-of-the-month-",this$);
}
}
})().call(null,this$);
}
});


cljs_time.core.InTimeUnitProtocol = (function (){var obj36121 = {};
return obj36121;
})();

cljs_time.core.in_millis = (function in_millis(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.in_millis[(function (){var G__36125 = x__4895__auto__;
return goog.typeOf(G__36125);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.in_millis["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-millis",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_seconds = (function in_seconds(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.in_seconds[(function (){var G__36129 = x__4895__auto__;
return goog.typeOf(G__36129);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-seconds",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_minutes = (function in_minutes(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.in_minutes[(function (){var G__36133 = x__4895__auto__;
return goog.typeOf(G__36133);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-minutes",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_hours = (function in_hours(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.in_hours[(function (){var G__36137 = x__4895__auto__;
return goog.typeOf(G__36137);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.in_hours["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-hours",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_days = (function in_days(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.in_days[(function (){var G__36141 = x__4895__auto__;
return goog.typeOf(G__36141);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.in_days["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-days",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_weeks = (function in_weeks(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.in_weeks[(function (){var G__36145 = x__4895__auto__;
return goog.typeOf(G__36145);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-weeks",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_months = (function in_months(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.in_months[(function (){var G__36149 = x__4895__auto__;
return goog.typeOf(G__36149);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.in_months["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-months",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_years = (function in_years(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (cljs_time.core.in_years[(function (){var G__36153 = x__4895__auto__;
return goog.typeOf(G__36153);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs_time.core.in_years["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
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
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4854__auto__,k__4855__auto__){
var self__ = this;
var this__4854__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4854__auto____$1,k__4855__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4856__auto__,k36155,else__4857__auto__){
var self__ = this;
var this__4856__auto____$1 = this;
var G__36157 = (((k36155 instanceof cljs.core.Keyword))?k36155.fqn:null);
switch (G__36157) {
case "end":
return self__.end;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36155,else__4857__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4868__auto__,writer__4869__auto__,opts__4870__auto__){
var self__ = this;
var this__4868__auto____$1 = this;
var pr_pair__4871__auto__ = ((function (this__4868__auto____$1){
return (function (keyval__4872__auto__){
return cljs.core.pr_sequential_writer(writer__4869__auto__,cljs.core.pr_writer,""," ","",opts__4870__auto__,keyval__4872__auto__);
});})(this__4868__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4869__auto__,pr_pair__4871__auto__,"#cljs-time.core.Interval{",", ","}",opts__4870__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$212,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$213,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4852__auto__){
var self__ = this;
var this__4852__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4848__auto__){
var self__ = this;
var this__4848__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4858__auto__){
var self__ = this;
var this__4858__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4849__auto__){
var self__ = this;
var this__4849__auto____$1 = this;
var h__4672__auto__ = self__.__hash;
if(!((h__4672__auto__ == null))){
return h__4672__auto__;
} else {
var h__4672__auto____$1 = cljs.core.hash_imap(this__4849__auto____$1);
self__.__hash = h__4672__auto____$1;

return h__4672__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4850__auto__,other__4851__auto__){
var self__ = this;
var this__4850__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4239__auto__ = other__4851__auto__;
if(cljs.core.truth_(and__4239__auto__)){
return ((this__4850__auto____$1.constructor === other__4851__auto__.constructor)) && (cljs.core.equiv_map(this__4850__auto____$1,other__4851__auto__));
} else {
return and__4239__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4863__auto__,k__4864__auto__){
var self__ = this;
var this__4863__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$212,null,cljs.core.constant$keyword$213,null], null), null),k__4864__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4863__auto____$1),self__.__meta),k__4864__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4864__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4861__auto__,k__4862__auto__,G__36154){
var self__ = this;
var this__4861__auto____$1 = this;
var pred__36158 = cljs.core.keyword_identical_QMARK_;
var expr__36159 = k__4862__auto__;
if(cljs.core.truth_((function (){var G__36161 = cljs.core.constant$keyword$212;
var G__36162 = expr__36159;
return (pred__36158.cljs$core$IFn$_invoke$arity$2 ? pred__36158.cljs$core$IFn$_invoke$arity$2(G__36161,G__36162) : pred__36158.call(null,G__36161,G__36162));
})())){
return (new cljs_time.core.Interval(G__36154,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36163 = cljs.core.constant$keyword$213;
var G__36164 = expr__36159;
return (pred__36158.cljs$core$IFn$_invoke$arity$2 ? pred__36158.cljs$core$IFn$_invoke$arity$2(G__36163,G__36164) : pred__36158.call(null,G__36163,G__36164));
})())){
return (new cljs_time.core.Interval(self__.start,G__36154,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4862__auto__,G__36154),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4866__auto__){
var self__ = this;
var this__4866__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$212,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$213,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4853__auto__,G__36154){
var self__ = this;
var this__4853__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__36154,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4859__auto__,entry__4860__auto__){
var self__ = this;
var this__4859__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4860__auto__)){
return cljs.core._assoc(this__4859__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4860__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4860__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4859__auto____$1,entry__4860__auto__);
}
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__4888__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__){
return cljs.core._write(writer__4889__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function __GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function map__GT_Interval(G__36156){
return (new cljs_time.core.Interval(cljs.core.constant$keyword$212.cljs$core$IFn$_invoke$arity$1(G__36156),cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(G__36156),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36156,cljs.core.constant$keyword$212,cljs.core.array_seq([cljs.core.constant$keyword$213], 0)),null));
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
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4854__auto__,k__4855__auto__){
var self__ = this;
var this__4854__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4854__auto____$1,k__4855__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4856__auto__,k36167,else__4857__auto__){
var self__ = this;
var this__4856__auto____$1 = this;
var G__36169 = (((k36167 instanceof cljs.core.Keyword))?k36167.fqn:null);
switch (G__36169) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36167,else__4857__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4868__auto__,writer__4869__auto__,opts__4870__auto__){
var self__ = this;
var this__4868__auto____$1 = this;
var pr_pair__4871__auto__ = ((function (this__4868__auto____$1){
return (function (keyval__4872__auto__){
return cljs.core.pr_sequential_writer(writer__4869__auto__,cljs.core.pr_writer,""," ","",opts__4870__auto__,keyval__4872__auto__);
});})(this__4868__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4869__auto__,pr_pair__4871__auto__,"#cljs-time.core.Period{",", ","}",opts__4870__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$208,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$207,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$211,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$206,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$205,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$204,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$203,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$202,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4852__auto__){
var self__ = this;
var this__4852__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4848__auto__){
var self__ = this;
var this__4848__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4858__auto__){
var self__ = this;
var this__4858__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4849__auto__){
var self__ = this;
var this__4849__auto____$1 = this;
var h__4672__auto__ = self__.__hash;
if(!((h__4672__auto__ == null))){
return h__4672__auto__;
} else {
var h__4672__auto____$1 = cljs.core.hash_imap(this__4849__auto____$1);
self__.__hash = h__4672__auto____$1;

return h__4672__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4850__auto__,other__4851__auto__){
var self__ = this;
var this__4850__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4239__auto__ = other__4851__auto__;
if(cljs.core.truth_(and__4239__auto__)){
return ((this__4850__auto____$1.constructor === other__4851__auto__.constructor)) && (cljs.core.equiv_map(this__4850__auto____$1,other__4851__auto__));
} else {
return and__4239__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4863__auto__,k__4864__auto__){
var self__ = this;
var this__4863__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$207,null,cljs.core.constant$keyword$206,null,cljs.core.constant$keyword$203,null,cljs.core.constant$keyword$205,null,cljs.core.constant$keyword$208,null,cljs.core.constant$keyword$204,null,cljs.core.constant$keyword$211,null,cljs.core.constant$keyword$202,null], null), null),k__4864__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4863__auto____$1),self__.__meta),k__4864__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4864__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4861__auto__,k__4862__auto__,G__36166){
var self__ = this;
var this__4861__auto____$1 = this;
var pred__36170 = cljs.core.keyword_identical_QMARK_;
var expr__36171 = k__4862__auto__;
if(cljs.core.truth_((function (){var G__36173 = cljs.core.constant$keyword$208;
var G__36174 = expr__36171;
return (pred__36170.cljs$core$IFn$_invoke$arity$2 ? pred__36170.cljs$core$IFn$_invoke$arity$2(G__36173,G__36174) : pred__36170.call(null,G__36173,G__36174));
})())){
return (new cljs_time.core.Period(G__36166,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36175 = cljs.core.constant$keyword$207;
var G__36176 = expr__36171;
return (pred__36170.cljs$core$IFn$_invoke$arity$2 ? pred__36170.cljs$core$IFn$_invoke$arity$2(G__36175,G__36176) : pred__36170.call(null,G__36175,G__36176));
})())){
return (new cljs_time.core.Period(self__.years,G__36166,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36177 = cljs.core.constant$keyword$211;
var G__36178 = expr__36171;
return (pred__36170.cljs$core$IFn$_invoke$arity$2 ? pred__36170.cljs$core$IFn$_invoke$arity$2(G__36177,G__36178) : pred__36170.call(null,G__36177,G__36178));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,G__36166,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36179 = cljs.core.constant$keyword$206;
var G__36180 = expr__36171;
return (pred__36170.cljs$core$IFn$_invoke$arity$2 ? pred__36170.cljs$core$IFn$_invoke$arity$2(G__36179,G__36180) : pred__36170.call(null,G__36179,G__36180));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__36166,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36181 = cljs.core.constant$keyword$205;
var G__36182 = expr__36171;
return (pred__36170.cljs$core$IFn$_invoke$arity$2 ? pred__36170.cljs$core$IFn$_invoke$arity$2(G__36181,G__36182) : pred__36170.call(null,G__36181,G__36182));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__36166,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36183 = cljs.core.constant$keyword$204;
var G__36184 = expr__36171;
return (pred__36170.cljs$core$IFn$_invoke$arity$2 ? pred__36170.cljs$core$IFn$_invoke$arity$2(G__36183,G__36184) : pred__36170.call(null,G__36183,G__36184));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__36166,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36185 = cljs.core.constant$keyword$203;
var G__36186 = expr__36171;
return (pred__36170.cljs$core$IFn$_invoke$arity$2 ? pred__36170.cljs$core$IFn$_invoke$arity$2(G__36185,G__36186) : pred__36170.call(null,G__36185,G__36186));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__36166,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36187 = cljs.core.constant$keyword$202;
var G__36188 = expr__36171;
return (pred__36170.cljs$core$IFn$_invoke$arity$2 ? pred__36170.cljs$core$IFn$_invoke$arity$2(G__36187,G__36188) : pred__36170.call(null,G__36187,G__36188));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__36166,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4862__auto__,G__36166),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4866__auto__){
var self__ = this;
var this__4866__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$208,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$207,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$211,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$206,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$205,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$204,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$203,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$202,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4853__auto__,G__36166){
var self__ = this;
var this__4853__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__36166,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4859__auto__,entry__4860__auto__){
var self__ = this;
var this__4859__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4860__auto__)){
return cljs.core._assoc(this__4859__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4860__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4860__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4859__auto____$1,entry__4860__auto__);
}
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__4888__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__){
return cljs.core._write(writer__4889__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function __GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function map__GT_Period(G__36168){
return (new cljs_time.core.Period(cljs.core.constant$keyword$208.cljs$core$IFn$_invoke$arity$1(G__36168),cljs.core.constant$keyword$207.cljs$core$IFn$_invoke$arity$1(G__36168),cljs.core.constant$keyword$211.cljs$core$IFn$_invoke$arity$1(G__36168),cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(G__36168),cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(G__36168),cljs.core.constant$keyword$204.cljs$core$IFn$_invoke$arity$1(G__36168),cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(G__36168),cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(G__36168),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36168,cljs.core.constant$keyword$208,cljs.core.array_seq([cljs.core.constant$keyword$207,cljs.core.constant$keyword$211,cljs.core.constant$keyword$206,cljs.core.constant$keyword$205,cljs.core.constant$keyword$204,cljs.core.constant$keyword$203,cljs.core.constant$keyword$202], 0)),null));
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
var G__36192__delegate = function (p1,v1,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,period.cljs$core$IFn$_invoke$arity$2(p1,v1),kvs);
};
var G__36192 = function (p1,v1,var_args){
var kvs = null;
if (arguments.length > 2) {
var G__36193__i = 0, G__36193__a = new Array(arguments.length -  2);
while (G__36193__i < G__36193__a.length) {G__36193__a[G__36193__i] = arguments[G__36193__i + 2]; ++G__36193__i;}
  kvs = new cljs.core.IndexedSeq(G__36193__a,0);
} 
return G__36192__delegate.call(this,p1,v1,kvs);};
G__36192.cljs$lang$maxFixedArity = 2;
G__36192.cljs$lang$applyTo = (function (arglist__36194){
var p1 = cljs.core.first(arglist__36194);
arglist__36194 = cljs.core.next(arglist__36194);
var v1 = cljs.core.first(arglist__36194);
var kvs = cljs.core.rest(arglist__36194);
return G__36192__delegate(p1,v1,kvs);
});
G__36192.cljs$core$IFn$_invoke$arity$variadic = G__36192__delegate;
return G__36192;
})()
;
period = function(p1,v1,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return period__2.call(this,p1,v1);
default:
var G__36195 = null;
if (arguments.length > 2) {
var G__36196__i = 0, G__36196__a = new Array(arguments.length -  2);
while (G__36196__i < G__36196__a.length) {G__36196__a[G__36196__i] = arguments[G__36196__i + 2]; ++G__36196__i;}
G__36195 = new cljs.core.IndexedSeq(G__36196__a,0);
}
return period__3.cljs$core$IFn$_invoke$arity$variadic(p1,v1, G__36195);
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
var G__36207_36226 = date__$1;
var G__36208_36227 = (function (){var G__36209 = (function (){var G__36211 = date__$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36211) : f.call(null,G__36211));
})();
var G__36210 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__36209,G__36210) : op.call(null,G__36209,G__36210));
})();
(set_fn.cljs$core$IFn$_invoke$arity$2 ? set_fn.cljs$core$IFn$_invoke$arity$2(G__36207_36226,G__36208_36227) : set_fn.call(null,G__36207_36226,G__36208_36227));
} else {
}

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$202,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__36197_SHARP_,p2__36198_SHARP_){
return p1__36197_SHARP_.setMilliseconds(p2__36198_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$203,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__36199_SHARP_,p2__36200_SHARP_){
return p1__36199_SHARP_.setSeconds(p2__36200_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$204,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__36201_SHARP_,p2__36202_SHARP_){
return p1__36201_SHARP_.setMinutes(p2__36202_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$205,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__36203_SHARP_,p2__36204_SHARP_){
return p1__36203_SHARP_.setHours(p2__36204_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$206,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__36205_SHARP_,p2__36206_SHARP_){
return p1__36205_SHARP_.setDate(p2__36206_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$211,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
date__$1.setDate((function (){var G__36212 = cljs_time.core.day(date__$1);
var G__36213 = ((7) * value);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__36212,G__36213) : op.call(null,G__36212,G__36213));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.constant$keyword$207,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var m_36228 = (function (){var G__36214 = cljs_time.core.month(date__$1);
var G__36215 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__36214,G__36215) : op.call(null,G__36214,G__36215));
})();
var y_36229 = cljs_time.core.year(date__$1);
var y_36230__$1 = (((m_36228 > (12)))?(y_36229 + (1)):(((m_36228 < (1)))?(y_36229 - (1)):y_36229
));
var m_36231__$1 = (((m_36228 > (12)))?cljs.core.mod(m_36228,(12)):(((m_36228 < (1)))?(m_36228 + (12)):m_36228
));
var ldom_36232 = cljs_time.core.day(cljs_time.core.last_day_of_the_month_((new goog.date.Date(y_36230__$1,(m_36231__$1 - (1)),(1)))));
if((ldom_36232 < cljs_time.core.day(date__$1))){
date__$1.setDate(ldom_36232);
} else {
}

date__$1.setMonth((m_36231__$1 - (1)));

date__$1.setYear(y_36230__$1);
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.constant$keyword$208,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
if(cljs.core.truth_((function (){var and__4239__auto__ = cljs_time.internal.core.leap_year_QMARK_(cljs_time.core.year(date__$1));
if(and__4239__auto__){
var and__4239__auto____$1 = (function (){var G__36220 = (2);
var G__36221 = cljs_time.core.month(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36220,G__36221) : cljs_time.core._EQ_.call(null,G__36220,G__36221));
})();
if(cljs.core.truth_(and__4239__auto____$1)){
var G__36222 = (29);
var G__36223 = cljs_time.core.day(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36222,G__36223) : cljs_time.core._EQ_.call(null,G__36222,G__36223));
} else {
return and__4239__auto____$1;
}
} else {
return and__4239__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear((function (){var G__36224 = cljs_time.core.year(date__$1);
var G__36225 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__36224,G__36225) : op.call(null,G__36224,G__36225));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function period_fn(p){
return (function (operator,date){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__36234_SHARP_,p2__36233_SHARP_){
return (function (){var G__36236 = cljs.core.key(p2__36233_SHARP_);
return (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(G__36236) : cljs_time.core.periods.call(null,G__36236));
})().call(null,operator,p1__36234_SHARP_,cljs.core.val(p2__36233_SHARP_));
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
if(cljs.core.truth_((function (){var G__36237 = d;
var G__36238 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36237,G__36238) : cljs_time.core._EQ_.call(null,G__36237,G__36238));
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
return cljs_time.core.minus_((new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$206,(1)));
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
if(cljs.core.truth_((function (){var G__36239 = d;
var G__36240 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36239,G__36240) : cljs_time.core._EQ_.call(null,G__36239,G__36240));
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
return cljs_time.core.minus_((new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$206,(1)));
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
if(cljs.core.truth_((function (){var G__36241 = d;
var G__36242 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36241,G__36242) : cljs_time.core._EQ_.call(null,G__36241,G__36242));
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
return cljs_time.core.minus_((new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$206,(1)));
});
cljs_time.core.utc = (function (){var G__36243 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$121,"UTC",cljs.core.constant$keyword$214,(0),cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null),cljs.core.constant$keyword$216,cljs.core.PersistentVector.EMPTY], null));
return goog.i18n.TimeZone.createTimeZone(G__36243);
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
var G__36245 = datetime__$1;
G__36245.setHours((0));

G__36245.setMinutes((0));

G__36245.setSeconds((0));

G__36245.setMilliseconds((0));

return G__36245;
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
var G__36247 = (new goog.date.UtcDateTime());
G__36247.setTime((0));

return G__36247;
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
var sign = (((hours < (0)))?cljs.core.constant$keyword$217:cljs.core.constant$keyword$218);
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1,minutes], 0)):cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$121,tz_name,cljs.core.constant$keyword$219,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__4251__auto__ = minutes;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return (0);
}
})(),(0)], null),cljs.core.constant$keyword$220,"-",cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$221], null));
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
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$208,n);
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
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$207,n);
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
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$211,n);
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
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$206,n);
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
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$205,n);
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
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$204,n);
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
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$203,n);
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
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$202,n);
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
var G__36348__delegate = function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus_,cljs_time.core.plus_(dt,p),ps);
};
var G__36348 = function (dt,p,var_args){
var ps = null;
if (arguments.length > 2) {
var G__36349__i = 0, G__36349__a = new Array(arguments.length -  2);
while (G__36349__i < G__36349__a.length) {G__36349__a[G__36349__i] = arguments[G__36349__i + 2]; ++G__36349__i;}
  ps = new cljs.core.IndexedSeq(G__36349__a,0);
} 
return G__36348__delegate.call(this,dt,p,ps);};
G__36348.cljs$lang$maxFixedArity = 2;
G__36348.cljs$lang$applyTo = (function (arglist__36350){
var dt = cljs.core.first(arglist__36350);
arglist__36350 = cljs.core.next(arglist__36350);
var p = cljs.core.first(arglist__36350);
var ps = cljs.core.rest(arglist__36350);
return G__36348__delegate(dt,p,ps);
});
G__36348.cljs$core$IFn$_invoke$arity$variadic = G__36348__delegate;
return G__36348;
})()
;
plus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return plus__2.call(this,dt,p);
default:
var G__36351 = null;
if (arguments.length > 2) {
var G__36352__i = 0, G__36352__a = new Array(arguments.length -  2);
while (G__36352__i < G__36352__a.length) {G__36352__a[G__36352__i] = arguments[G__36352__i + 2]; ++G__36352__i;}
G__36351 = new cljs.core.IndexedSeq(G__36352__a,0);
}
return plus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, G__36351);
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
var G__36353__delegate = function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.minus_,cljs_time.core.minus_(dt,p),ps);
};
var G__36353 = function (dt,p,var_args){
var ps = null;
if (arguments.length > 2) {
var G__36354__i = 0, G__36354__a = new Array(arguments.length -  2);
while (G__36354__i < G__36354__a.length) {G__36354__a[G__36354__i] = arguments[G__36354__i + 2]; ++G__36354__i;}
  ps = new cljs.core.IndexedSeq(G__36354__a,0);
} 
return G__36353__delegate.call(this,dt,p,ps);};
G__36353.cljs$lang$maxFixedArity = 2;
G__36353.cljs$lang$applyTo = (function (arglist__36355){
var dt = cljs.core.first(arglist__36355);
arglist__36355 = cljs.core.next(arglist__36355);
var p = cljs.core.first(arglist__36355);
var ps = cljs.core.rest(arglist__36355);
return G__36353__delegate(dt,p,ps);
});
G__36353.cljs$core$IFn$_invoke$arity$variadic = G__36353__delegate;
return G__36353;
})()
;
minus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return minus__2.call(this,dt,p);
default:
var G__36356 = null;
if (arguments.length > 2) {
var G__36357__i = 0, G__36357__a = new Array(arguments.length -  2);
while (G__36357__i < G__36357__a.length) {G__36357__a[G__36357__i] = arguments[G__36357__i + 2]; ++G__36357__i;}
G__36356 = new cljs.core.IndexedSeq(G__36357__a,0);
}
return minus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, G__36356);
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
return cljs.core.constant$keyword$212.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
* Returns the end DateTime of an Interval.
*/
cljs_time.core.end = (function end(in$){
return cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
* Returns an Interval with an end ReadableDateTime the specified Period after the end
* of the given Interval
* @param {...*} var_args
*/
cljs_time.core.extend = (function() { 
var extend__delegate = function (in$,by){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,cljs.core.constant$keyword$213,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus,cljs_time.core.end(in$),by));
};
var extend = function (in$,var_args){
var by = null;
if (arguments.length > 1) {
var G__36358__i = 0, G__36358__a = new Array(arguments.length -  1);
while (G__36358__i < G__36358__a.length) {G__36358__a[G__36358__i] = arguments[G__36358__i + 1]; ++G__36358__i;}
  by = new cljs.core.IndexedSeq(G__36358__a,0);
} 
return extend__delegate.call(this,in$,by);};
extend.cljs$lang$maxFixedArity = 1;
extend.cljs$lang$applyTo = (function (arglist__36359){
var in$ = cljs.core.first(arglist__36359);
var by = cljs.core.rest(arglist__36359);
return extend__delegate(in$,by);
});
extend.cljs$core$IFn$_invoke$arity$variadic = extend__delegate;
return extend;
})()
;
cljs_time.core.month_range = (function month_range(p__36362){
var map__36364 = p__36362;
var map__36364__$1 = ((cljs.core.seq_QMARK_(map__36364))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36364):map__36364);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36364__$1,cljs.core.constant$keyword$213);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36364__$1,cljs.core.constant$keyword$212);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (map__36364,map__36364__$1,end,start){
return (function (p1__36360_SHARP_){
return cljs_time.core.before_QMARK_(p1__36360_SHARP_,end);
});})(map__36364,map__36364__$1,end,start))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__36364,map__36364__$1,end,start){
return (function (p1__36361_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((p1__36361_SHARP_ + (1))));
});})(map__36364,map__36364__$1,end,start))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljs_time.core.total_days_in_whole_months = (function total_days_in_whole_months(interval){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36365_SHARP_){
return p1__36365_SHARP_.getNumberOfDaysInMonth();
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
cljs_time.core.in_months_ = (function in_months_(p__36366){
var map__36368 = p__36366;
var map__36368__$1 = ((cljs.core.seq_QMARK_(map__36368))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36368):map__36368);
var interval = map__36368__$1;
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,cljs.core.constant$keyword$213);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,cljs.core.constant$keyword$212);
return cljs.core.count(cljs_time.core.total_days_in_whole_months(interval));
});
/**
* Returns the number of standard years in the given Interval.
*/
cljs_time.core.in_years_ = (function in_years_(p__36369){
var map__36385 = p__36369;
var map__36385__$1 = ((cljs.core.seq_QMARK_(map__36385))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36385):map__36385);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36385__$1,cljs.core.constant$keyword$213);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36385__$1,cljs.core.constant$keyword$212);
var sm = cljs_time.core.month(start);
var sd = cljs_time.core.day(start);
var em = cljs_time.core.month(end);
var ed = cljs_time.core.day(end);
var d1 = (cljs.core.truth_((function (){var and__4239__auto__ = (function (){var G__36388 = sm;
var G__36389 = (2);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36388,G__36389) : cljs_time.core._EQ_.call(null,G__36388,G__36389));
})();
if(cljs.core.truth_(and__4239__auto__)){
var and__4239__auto____$1 = (function (){var G__36392 = sd;
var G__36393 = (29);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36392,G__36393) : cljs_time.core._EQ_.call(null,G__36392,G__36393));
})();
if(cljs.core.truth_(and__4239__auto____$1)){
var and__4239__auto____$2 = (function (){var G__36396 = em;
var G__36397 = (2);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36396,G__36397) : cljs_time.core._EQ_.call(null,G__36396,G__36397));
})();
if(cljs.core.truth_(and__4239__auto____$2)){
var G__36398 = ed;
var G__36399 = (28);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36398,G__36399) : cljs_time.core._EQ_.call(null,G__36398,G__36399));
} else {
return and__4239__auto____$2;
}
} else {
return and__4239__auto____$1;
}
} else {
return and__4239__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year(end) - cljs_time.core.year(start)) - d1);
});
cljs_time.core.conversion_error = (function conversion_error(from,to){
var from__$1 = clojure.string.capitalize(cljs.core.name(from));
var to__$1 = cljs.core.name(to);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s cannot be converted to %s",cljs.core.array_seq([from__$1,to__$1], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$223], null));
});
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__36400){
var map__36401 = p__36400;
var map__36401__$1 = ((cljs.core.seq_QMARK_(map__36401))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36401):map__36401);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36401__$1,cljs.core.constant$keyword$213);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36401__$1,cljs.core.constant$keyword$212);
var map__36402 = this;
var map__36402__$1 = ((cljs.core.seq_QMARK_(map__36402))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36402):map__36402);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36402__$1,cljs.core.constant$keyword$213);
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36402__$1,cljs.core.constant$keyword$212);
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

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__36403){
var map__36404 = p__36403;
var map__36404__$1 = ((cljs.core.seq_QMARK_(map__36404))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36404):map__36404);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36404__$1,cljs.core.constant$keyword$208);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36404__$1,cljs.core.constant$keyword$207);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36404__$1,cljs.core.constant$keyword$211);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36404__$1,cljs.core.constant$keyword$206);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36404__$1,cljs.core.constant$keyword$205);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36404__$1,cljs.core.constant$keyword$204);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36404__$1,cljs.core.constant$keyword$203);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36404__$1,cljs.core.constant$keyword$202);
var map__36405 = this;
var map__36405__$1 = ((cljs.core.seq_QMARK_(map__36405))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36405):map__36405);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405__$1,cljs.core.constant$keyword$208);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405__$1,cljs.core.constant$keyword$207);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405__$1,cljs.core.constant$keyword$211);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405__$1,cljs.core.constant$keyword$206);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405__$1,cljs.core.constant$keyword$205);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405__$1,cljs.core.constant$keyword$204);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405__$1,cljs.core.constant$keyword$203);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405__$1,cljs.core.constant$keyword$202);
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$207,cljs.core.constant$keyword$202);
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$208,cljs.core.constant$keyword$202);
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

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__36406){
var map__36407 = p__36406;
var map__36407__$1 = ((cljs.core.seq_QMARK_(map__36407))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36407):map__36407);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,cljs.core.constant$keyword$208);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,cljs.core.constant$keyword$207);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,cljs.core.constant$keyword$211);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,cljs.core.constant$keyword$206);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,cljs.core.constant$keyword$205);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,cljs.core.constant$keyword$204);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,cljs.core.constant$keyword$203);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,cljs.core.constant$keyword$202);
var map__36408 = this;
var map__36408__$1 = ((cljs.core.seq_QMARK_(map__36408))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36408):map__36408);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36408__$1,cljs.core.constant$keyword$208);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36408__$1,cljs.core.constant$keyword$207);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36408__$1,cljs.core.constant$keyword$211);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36408__$1,cljs.core.constant$keyword$206);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36408__$1,cljs.core.constant$keyword$205);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36408__$1,cljs.core.constant$keyword$204);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36408__$1,cljs.core.constant$keyword$203);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36408__$1,cljs.core.constant$keyword$202);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$202,cljs.core.constant$keyword$207);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$203,cljs.core.constant$keyword$207);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$204,cljs.core.constant$keyword$207);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$205,cljs.core.constant$keyword$207);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$206,cljs.core.constant$keyword$207);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$211,cljs.core.constant$keyword$207);
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__4251__auto__ = years__$1;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
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

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__36409){
var map__36410 = p__36409;
var map__36410__$1 = ((cljs.core.seq_QMARK_(map__36410))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36410):map__36410);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,cljs.core.constant$keyword$208);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,cljs.core.constant$keyword$207);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,cljs.core.constant$keyword$211);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,cljs.core.constant$keyword$206);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,cljs.core.constant$keyword$205);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,cljs.core.constant$keyword$204);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,cljs.core.constant$keyword$203);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,cljs.core.constant$keyword$202);
var map__36411 = this;
var map__36411__$1 = ((cljs.core.seq_QMARK_(map__36411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36411):map__36411);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,cljs.core.constant$keyword$208);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,cljs.core.constant$keyword$207);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,cljs.core.constant$keyword$211);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,cljs.core.constant$keyword$206);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,cljs.core.constant$keyword$205);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,cljs.core.constant$keyword$204);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,cljs.core.constant$keyword$203);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,cljs.core.constant$keyword$202);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$202,cljs.core.constant$keyword$208);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$203,cljs.core.constant$keyword$208);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$204,cljs.core.constant$keyword$208);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$205,cljs.core.constant$keyword$208);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$206,cljs.core.constant$keyword$208);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$211,cljs.core.constant$keyword$208);
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
var within_QMARK___2 = (function (p__36412,date){
var map__36421 = p__36412;
var map__36421__$1 = ((cljs.core.seq_QMARK_(map__36421))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36421):map__36421);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36421__$1,cljs.core.constant$keyword$213);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36421__$1,cljs.core.constant$keyword$212);
return within_QMARK_.cljs$core$IFn$_invoke$arity$3(start,end,date);
});
var within_QMARK___3 = (function (start,end,date){
var or__4251__auto__ = (function (){var G__36424 = start;
var G__36425 = date;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36424,G__36425) : cljs_time.core._EQ_.call(null,G__36424,G__36425));
})();
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
var and__4239__auto__ = cljs_time.core.before_QMARK_(start,date);
if(cljs.core.truth_(and__4239__auto__)){
return cljs_time.core.after_QMARK_(end,date);
} else {
return and__4239__auto__;
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
var overlaps_QMARK___2 = (function (p__36426,p__36427){
var map__36456 = p__36426;
var map__36456__$1 = ((cljs.core.seq_QMARK_(map__36456))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36456):map__36456);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36456__$1,cljs.core.constant$keyword$212);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36456__$1,cljs.core.constant$keyword$213);
var map__36457 = p__36427;
var map__36457__$1 = ((cljs.core.seq_QMARK_(map__36457))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36457):map__36457);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36457__$1,cljs.core.constant$keyword$212);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36457__$1,cljs.core.constant$keyword$213);
var and__4239__auto__ = cljs.core.not((function (){var or__4251__auto__ = (function (){var G__36466 = start_a;
var G__36467 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36466,G__36467) : cljs_time.core._EQ_.call(null,G__36466,G__36467));
})();
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
var G__36468 = end_a;
var G__36469 = start_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36468,G__36469) : cljs_time.core._EQ_.call(null,G__36468,G__36469));
}
})());
if(and__4239__auto__){
return overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4(start_a,end_a,start_b,end_b);
} else {
return and__4239__auto__;
}
});
var overlaps_QMARK___4 = (function (start_a,end_a,start_b,end_b){
var or__4251__auto__ = (function (){var and__4239__auto__ = cljs_time.core.before_QMARK_(start_b,end_a);
if(cljs.core.truth_(and__4239__auto__)){
return cljs_time.core.after_QMARK_(end_b,start_a);
} else {
return and__4239__auto__;
}
})();
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (function (){var and__4239__auto__ = cljs_time.core.after_QMARK_(end_b,start_a);
if(cljs.core.truth_(and__4239__auto__)){
return cljs_time.core.before_QMARK_(start_b,end_a);
} else {
return and__4239__auto__;
}
})();
if(cljs.core.truth_(or__4251__auto____$1)){
return or__4251__auto____$1;
} else {
var or__4251__auto____$2 = (function (){var G__36472 = start_a;
var G__36473 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36472,G__36473) : cljs_time.core._EQ_.call(null,G__36472,G__36473));
})();
if(cljs.core.truth_(or__4251__auto____$2)){
return or__4251__auto____$2;
} else {
var G__36474 = start_b;
var G__36475 = end_a;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36474,G__36475) : cljs_time.core._EQ_.call(null,G__36474,G__36475));
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
cljs_time.core.abuts_QMARK_ = (function abuts_QMARK_(p__36476,p__36477){
var map__36486 = p__36476;
var map__36486__$1 = ((cljs.core.seq_QMARK_(map__36486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36486):map__36486);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36486__$1,cljs.core.constant$keyword$212);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36486__$1,cljs.core.constant$keyword$213);
var map__36487 = p__36477;
var map__36487__$1 = ((cljs.core.seq_QMARK_(map__36487))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36487):map__36487);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36487__$1,cljs.core.constant$keyword$212);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36487__$1,cljs.core.constant$keyword$213);
var or__4251__auto__ = (function (){var G__36490 = start_a;
var G__36491 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36490,G__36491) : cljs_time.core._EQ_.call(null,G__36490,G__36491));
})();
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
var G__36492 = end_a;
var G__36493 = start_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__36492,G__36493) : cljs_time.core._EQ_.call(null,G__36492,G__36493));
}
});
cljs_time.core.date_QMARK_ = (function date_QMARK_(x){
var G__36495 = x;
if(G__36495){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__36495.cljs_time$core$DateTimeProtocol$;
}
})())){
return true;
} else {
if((!G__36495.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,G__36495);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,G__36495);
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
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$208,val);
});
/**
* Returns true if the given value is an instance of Months
*/
cljs_time.core.months_QMARK_ = (function months_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$207,val);
});
/**
* Returns true if the given value is an instance of Weeks
*/
cljs_time.core.weeks_QMARK_ = (function weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$211,val);
});
/**
* Returns true if the given value is an instance of Days
*/
cljs_time.core.days_QMARK_ = (function days_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$206,val);
});
/**
* Returns true if the given value is an instance of Hours
*/
cljs_time.core.hours_QMARK_ = (function hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$205,val);
});
/**
* Returns true if the given value is an instance of Minutes
*/
cljs_time.core.minutes_QMARK_ = (function minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$204,val);
});
/**
* Returns true if the given value is an instance of Seconds
*/
cljs_time.core.seconds_QMARK_ = (function seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$203,val);
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
cljs_time.core.__GT_period = (function (){var method_table__5148__auto__ = (function (){var G__36498 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36498) : cljs.core.atom.call(null,G__36498));
})();
var prefer_table__5149__auto__ = (function (){var G__36499 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36499) : cljs.core.atom.call(null,G__36499));
})();
var method_cache__5150__auto__ = (function (){var G__36500 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36500) : cljs.core.atom.call(null,G__36500));
})();
var cached_hierarchy__5151__auto__ = (function (){var G__36501 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36501) : cljs.core.atom.call(null,G__36501));
})();
var hierarchy__5152__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$224,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-time.core","->period"),cljs.core.type,cljs.core.constant$keyword$7,hierarchy__5152__auto__,method_table__5148__auto__,prefer_table__5149__auto__,method_cache__5150__auto__,cached_hierarchy__5151__auto__));
})();
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,cljs_time.core.Interval,(function (p__36502){
var map__36503 = p__36502;
var map__36503__$1 = ((cljs.core.seq_QMARK_(map__36503))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36503):map__36503);
var interval = map__36503__$1;
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36503__$1,cljs.core.constant$keyword$213);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36503__$1,cljs.core.constant$keyword$212);
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
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$208,years,cljs.core.array_seq([cljs.core.constant$keyword$207,months,cljs.core.constant$keyword$206,days,cljs.core.constant$keyword$205,hours,cljs.core.constant$keyword$204,minutes,cljs.core.constant$keyword$203,seconds,cljs.core.constant$keyword$202,(cljs_time.core.in_millis(interval) - ((1000) * (seconds + seconds_to_remove)))], 0));
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
var G__36512 = (new goog.date.UtcDateTime((0)));
G__36512.setYear(midnight.getYear());

G__36512.setMonth(midnight.getMonth());

G__36512.setDate(midnight.getDate());

G__36512.setHours(hours);

G__36512.setMinutes(minutes);

G__36512.setSeconds(seconds);

G__36512.setMilliseconds(millis);

return G__36512;
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
var _STAR_sys_time_STAR_36514 = cljs_time.core._STAR_sys_time_STAR_;
try{cljs_time.core._STAR_sys_time_STAR_ = base_date_time;

return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {cljs_time.core._STAR_sys_time_STAR_ = _STAR_sys_time_STAR_36514;
}});
