// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.date');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('cljs_time.internal.core');
goog.require('goog.string.format');
goog.require('clojure.string');
cljs_time.format.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.format.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.format.abbreviate = (function abbreviate(n,s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),n);
});
/**
* **Note: not all formatters have been implemented yet.**
* 
* The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
* time zone names cannot be parsed and a few more symbols are supported. All
* ASCII letters are reserved as pattern letters, which are defined as follows:
* 
* Symbol  Meaning                      Presentation  Examples
* ------  -------                      ------------  -------
* G       era                          text          AD
* C       century of era (>=0)         number        20
* Y       year of era (>=0)            year          1996
* 
* x       weekyear                     year          1996
* w       week of weekyear             number        27
* e       day of week                  number        2
* E       day of week                  text          Tuesday; Tue
* 
* y       year                         year          1996
* D       day of year                  number        189
* M       month of year                month         July; Jul; 07
* d       day of month                 number        10
* 
* a       halfday of day               text          PM
* K       hour of halfday (0~11)       number        0
* h       clockhour of halfday (1~12)  number        12
* 
* H       hour of day (0~23)           number        0
* k       clockhour of day (1~24)      number        24
* m       minute of hour               number        30
* s       second of minute             number        55
* S       fraction of second           number        978
* a       meridiem                     text          am; pm
* A       meridiem                     text          AM; PM
* 
* z       time zone                    text          Pacific Standard Time; PST
* Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
* 
* '       escape for text              delimiter
* ''      single quote                 literal       '
* 
* The count of pattern letters determine the format.
* 
* **Text:** If the number of pattern letters is 4 or more, the full form is used;
* otherwise a short or abbreviated form is used if available.
* 
* **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
* amount.
* 
* **Year:** Numeric presentation for year and weekyear fields are handled
* specially. For example, if the count of 'y' is 2, the year will be displayed
* as the zero-based year of the century, which is two digits.
* 
* **Month:** 3 or over, use text, otherwise use number.
* 
* **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
* colon, 'ZZZ' or more outputs the zone id.
* 
* **Zone names:** Time zone names ('z') cannot be parsed.
* 
* Any characters in the pattern that are not in the ranges of ['a'..'z'] and
* ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
* '.', ' ', '#' and '?' will appear in the resulting time text even they are
* not embraced within single quotes.
*/
cljs_time.format.date_formatters = (function (){var d = (function (p1__36925_SHARP_){
return p1__36925_SHARP_.getDate();
});
var M = ((function (d){
return (function (p1__36926_SHARP_){
return (p1__36926_SHARP_.getMonth() + (1));
});})(d))
;
var y = ((function (d,M){
return (function (p1__36927_SHARP_){
return p1__36927_SHARP_.getYear();
});})(d,M))
;
var h = ((function (d,M,y){
return (function (p1__36928_SHARP_){
var hr = cljs.core.mod(p1__36928_SHARP_.getHours(),(12));
if((hr === (0))){
return (12);
} else {
return hr;
}
});})(d,M,y))
;
var a = ((function (d,M,y,h){
return (function (p1__36929_SHARP_){
if((p1__36929_SHARP_.getHours() < (12))){
return "am";
} else {
return "pm";
}
});})(d,M,y,h))
;
var A = ((function (d,M,y,h,a){
return (function (p1__36930_SHARP_){
if((p1__36930_SHARP_.getHours() < (12))){
return "AM";
} else {
return "PM";
}
});})(d,M,y,h,a))
;
var H = ((function (d,M,y,h,a,A){
return (function (p1__36931_SHARP_){
return p1__36931_SHARP_.getHours();
});})(d,M,y,h,a,A))
;
var m = ((function (d,M,y,h,a,A,H){
return (function (p1__36932_SHARP_){
return p1__36932_SHARP_.getMinutes();
});})(d,M,y,h,a,A,H))
;
var s = ((function (d,M,y,h,a,A,H,m){
return (function (p1__36933_SHARP_){
return p1__36933_SHARP_.getSeconds();
});})(d,M,y,h,a,A,H,m))
;
var S = ((function (d,M,y,h,a,A,H,m,s){
return (function (p1__36934_SHARP_){
return p1__36934_SHARP_.getMilliseconds();
});})(d,M,y,h,a,A,H,m,s))
;
var Z = ((function (d,M,y,h,a,A,H,m,s,S){
return (function (p1__36935_SHARP_){
return p1__36935_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,a,A,H,m,s,S))
;
var doy = ((function (d,M,y,h,a,A,H,m,s,S,Z){
return (function (p1__36936_SHARP_){
return p1__36936_SHARP_.getDayOfYear();
});})(d,M,y,h,a,A,H,m,s,S,Z))
;
var dow = ((function (d,M,y,h,a,A,H,m,s,S,Z,doy){
return (function (p1__36937_SHARP_){
return p1__36937_SHARP_.getDay();
});})(d,M,y,h,a,A,H,m,s,S,Z,doy))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","YYYY","e","ss","DDD","SSS","dow","YY","M","mm","S","MM","EEE","Z","H","DD","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","D","MMMM"],[d,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36949_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(H(p1__36949_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,s,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36953_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((function (){var G__36954 = (doy(p1__36953_SHARP_) / (7));
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__36954) : Math.ceil.call(null,G__36954));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36944_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__36955 = (M(p1__36944_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__36955) : cljs_time.format.months.call(null,G__36955));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,dow,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36951_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(s(p1__36951_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36952_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(S(p1__36952_SHARP_),(3));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36940_SHARP_){
var G__36956 = dow(p1__36940_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__36956) : cljs_time.format.days.call(null,G__36956));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36947_SHARP_){
return cljs.core.mod(y(p1__36947_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,M,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36950_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(m(p1__36950_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,S,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36943_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(M(p1__36943_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36941_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__36957 = dow(p1__36941_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__36957) : cljs_time.format.days.call(null,G__36957));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,H,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36938_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(d(p1__36938_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,a,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36948_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(h(p1__36948_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36939_SHARP_){
var d__$1 = d(p1__36939_SHARP_);
return [cljs.core.str(d__$1),cljs.core.str((function (){var G__36958 = d__$1;
switch (G__36958) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
default:
return "th";

}
})())].join('');
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,A,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36942_SHARP_){
var G__36959 = dow(p1__36942_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__36959) : cljs_time.format.days.call(null,G__36959));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,h,y,m,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36946_SHARP_){
return cljs.core.mod(y(p1__36946_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__36945_SHARP_){
var G__36960 = (M(p1__36945_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__36960) : cljs_time.format.months.call(null,G__36960));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
]);
})();
cljs_time.format.timezone_adjustment = (function timezone_adjustment(d,timezone_string){
var vec__36971 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36971,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36971,(1),null);
var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36971,(2),null);
var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36971,(3),null);
if(cljs.core.truth_((function (){var and__3803__auto__ = sign;
if(cljs.core.truth_(and__3803__auto__)){
var and__3803__auto____$1 = hh;
if(cljs.core.truth_(and__3803__auto____$1)){
return mm;
} else {
return and__3803__auto____$1;
}
} else {
return and__3803__auto__;
}
})())){
var sign_36979__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"+"))?cljs_time.core.minus:null));
var vec__36972_36980 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sign_36979__$1,vec__36971,_,sign,hh,mm){
return (function (p1__36962_SHARP_){
var G__36973 = p1__36962_SHARP_;
var G__36974 = (10);
return parseInt(G__36973,G__36974);
});})(sign_36979__$1,vec__36971,_,sign,hh,mm))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));
var hh_36981__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972_36980,(0),null);
var mm_36982__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972_36980,(1),null);
var adjusted_36983 = (function (){var G__36975 = (function (){var G__36977 = d;
var G__36978 = cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_36981__$1);
return (sign_36979__$1.cljs$core$IFn$_invoke$arity$2 ? sign_36979__$1.cljs$core$IFn$_invoke$arity$2(G__36977,G__36978) : sign_36979__$1.call(null,G__36977,G__36978));
})();
var G__36976 = cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_36982__$1);
return (sign_36979__$1.cljs$core$IFn$_invoke$arity$2 ? sign_36979__$1.cljs$core$IFn$_invoke$arity$2(G__36975,G__36976) : sign_36979__$1.call(null,G__36975,G__36976));
})();
d.setTime(adjusted_36983.getTime());
} else {
}

return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__36984_SHARP_){
var G__36997 = p1__36984_SHARP_;
var G__36998 = (10);
return parseInt(G__36997,G__36998);
});
var assoc_fn = ((function (parse_int){
return (function (kw){
return ((function (parse_int){
return (function (p1__36985_SHARP_,p2__36986_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36985_SHARP_,kw,parse_int(p2__36986_SHARP_));
});
;})(parse_int))
});})(parse_int))
;
var y = assoc_fn(cljs.core.constant$keyword$213);
var d = assoc_fn(cljs.core.constant$keyword$211);
var M = ((function (parse_int,assoc_fn,y,d){
return (function (p1__36987_SHARP_,p2__36988_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36987_SHARP_,cljs.core.constant$keyword$212,(parse_int(p2__36988_SHARP_) - (1)));
});})(parse_int,assoc_fn,y,d))
;
var h = ((function (parse_int,assoc_fn,y,d,M){
return (function (p1__36989_SHARP_,p2__36990_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36989_SHARP_,cljs.core.constant$keyword$210,cljs.core.mod(parse_int(p2__36990_SHARP_),(12)));
});})(parse_int,assoc_fn,y,d,M))
;
var a = ((function (parse_int,assoc_fn,y,d,M,h){
return (function (p__36999,x){
var map__37000 = p__36999;
var map__37000__$1 = ((cljs.core.seq_QMARK_(map__37000))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37000):map__37000);
var date = map__37000__$1;
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37000__$1,cljs.core.constant$keyword$210);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null).call(null,clojure.string.lower_case(x)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(date,cljs.core.constant$keyword$210,(function (){var hours__$1 = ((12) + hours);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours__$1,(24))){
return (0);
} else {
return hours__$1;
}
})());
} else {
return date;
}
});})(parse_int,assoc_fn,y,d,M,h))
;
var H = assoc_fn(cljs.core.constant$keyword$210);
var m = assoc_fn(cljs.core.constant$keyword$209);
var s = assoc_fn(cljs.core.constant$keyword$208);
var S = assoc_fn(cljs.core.constant$keyword$207);
var MMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (p1__36992_SHARP_,p2__36991_SHARP_){
var full = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (m__$1){
return cljs.core.re_seq(cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(p2__36991_SHARP_)].join('')),m__$1);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
,cljs_time.format.months));
return M(p1__36992_SHARP_,[cljs.core.str((cljs_time.internal.core.index_of(cljs_time.format.months,full) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
;
var MMMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM){
return (function (p1__36993_SHARP_,p2__36994_SHARP_){
return M(p1__36993_SHARP_,[cljs.core.str((cljs_time.internal.core.index_of(cljs_time.format.months,p2__36994_SHARP_) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM))
;
var skip = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM){
return (function() { 
var G__37001__delegate = function (x,args){
return x;
};
var G__37001 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__37002__i = 0, G__37002__a = new Array(arguments.length -  1);
while (G__37002__i < G__37002__a.length) {G__37002__a[G__37002__i] = arguments[G__37002__i + 1]; ++G__37002__i;}
  args = new cljs.core.IndexedSeq(G__37002__a,0);
} 
return G__37001__delegate.call(this,x,args);};
G__37001.cljs$lang$maxFixedArity = 1;
G__37001.cljs$lang$applyTo = (function (arglist__37003){
var x = cljs.core.first(arglist__37003);
var args = cljs.core.rest(arglist__37003);
return G__37001__delegate(x,args);
});
G__37001.cljs$core$IFn$_invoke$arity$variadic = G__37001__delegate;
return G__37001;
})()
;})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM))
;
var tz = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip){
return (function (p1__36995_SHARP_,p2__36996_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36995_SHARP_,cljs.core.constant$keyword$231,p2__36996_SHARP_);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","YYYY","ss","DDD","SSS","dow","YY","M","mm","S","MM","Y","EEE","Z","H","E","DD","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","D","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.months))),cljs.core.str(")")].join(''),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days)),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days)),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.months)),cljs.core.str(")")].join(''),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$213,(function (p1__37004_SHARP_,p2__37005_SHARP_){
return p1__37004_SHARP_.setYear(p2__37005_SHARP_);
}),cljs.core.constant$keyword$212,(function (p1__37006_SHARP_,p2__37007_SHARP_){
return p1__37006_SHARP_.setMonth(p2__37007_SHARP_);
}),cljs.core.constant$keyword$211,(function (p1__37008_SHARP_,p2__37009_SHARP_){
return p1__37008_SHARP_.setDate(p2__37009_SHARP_);
}),cljs.core.constant$keyword$210,(function (p1__37010_SHARP_,p2__37011_SHARP_){
return p1__37010_SHARP_.setHours(p2__37011_SHARP_);
}),cljs.core.constant$keyword$209,(function (p1__37012_SHARP_,p2__37013_SHARP_){
return p1__37012_SHARP_.setMinutes(p2__37013_SHARP_);
}),cljs.core.constant$keyword$208,(function (p1__37014_SHARP_,p2__37015_SHARP_){
return p1__37014_SHARP_.setSeconds(p2__37015_SHARP_);
}),cljs.core.constant$keyword$207,(function (p1__37016_SHARP_,p2__37017_SHARP_){
return p1__37016_SHARP_.setMilliseconds(p2__37017_SHARP_);
}),cljs.core.constant$keyword$231,cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function parser_sort_order_pred(parser){
return cljs_time.internal.core.index_of(new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YYYY","YY","Y","yyyy","yy","y","d","dd","D","DD","DDD","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern([cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.keys(cljs_time.format.date_formatters))))),cljs.core.str(")")].join(''));
cljs_time.format.date_parse_pattern = (function date_parse_pattern(formatter){
return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__37018_SHARP_){
return cljs.core.first((function (){var G__37020 = p1__37018_SHARP_;
return (cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(G__37020) : cljs_time.format.date_parsers.call(null,G__37020));
})());
})));
});
cljs_time.format.parser_fn = (function parser_fn(fmts){
return (function (s){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.nfirst(cljs.core.re_seq(cljs_time.format.date_parse_pattern(fmts),s)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.re_seq(cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function formatter_fn(fmts,formatters){
return (function() { 
var G__37026__delegate = function (date,p__37024){
var vec__37025 = p__37024;
var formatter_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37025,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(fmts,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,((function (vec__37025,formatter_overrides){
return (function (p1__37021_SHARP_){
return (function (){var or__3815__auto__ = formatter_overrides;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return formatters;
}
})().call(null,p1__37021_SHARP_).call(null,date);
});})(vec__37025,formatter_overrides))
], null);
};
var G__37026 = function (date,var_args){
var p__37024 = null;
if (arguments.length > 1) {
var G__37027__i = 0, G__37027__a = new Array(arguments.length -  1);
while (G__37027__i < G__37027__a.length) {G__37027__a[G__37027__i] = arguments[G__37027__i + 1]; ++G__37027__i;}
  p__37024 = new cljs.core.IndexedSeq(G__37027__a,0);
} 
return G__37026__delegate.call(this,date,p__37024);};
G__37026.cljs$lang$maxFixedArity = 1;
G__37026.cljs$lang$applyTo = (function (arglist__37028){
var date = cljs.core.first(arglist__37028);
var p__37024 = cljs.core.rest(arglist__37028);
return G__37026__delegate(date,p__37024);
});
G__37026.cljs$core$IFn$_invoke$arity$variadic = G__37026__delegate;
return G__37026;
})()
;
});
cljs_time.format.formatter = (function() {
var formatter = null;
var formatter__1 = (function (fmts){
return formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});
var formatter__2 = (function (fmts,dtz){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,fmts,cljs.core.constant$keyword$233,cljs_time.format.date_formatters], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$234], null));
});
formatter = function(fmts,dtz){
switch(arguments.length){
case 1:
return formatter__1.call(this,fmts);
case 2:
return formatter__2.call(this,fmts,dtz);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
formatter.cljs$core$IFn$_invoke$arity$1 = formatter__1;
formatter.cljs$core$IFn$_invoke$arity$2 = formatter__2;
return formatter;
})()
;
cljs_time.format.formatter_local = (function formatter_local(fmts){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,fmts,cljs.core.constant$keyword$233,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$234], null));
});
cljs_time.format.not_implemented = (function not_implemented(sym){
return (function (){
throw cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$78,cljs.core.constant$keyword$236,cljs.core.constant$keyword$235,cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.array_seq([cljs.core.name(sym)], 0))], null));
});
});
/**
* Return a copy of a formatter that uses the given default year.
*/
cljs_time.format.with_default_year = (function with_default_year(f,default_year){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.constant$keyword$237,default_year);
});
/**
* Map of ISO 8601 and a single RFC 822 formatters that can be used
* for parsing and, in most cases, printing.
* 
* Note: due to current implementation limitations, timezone information
* cannot be kept. Although the correct offset will be applied to UTC
* time if supplied.
*/
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$238,cljs.core.constant$keyword$239,cljs.core.constant$keyword$240,cljs.core.constant$keyword$241,cljs.core.constant$keyword$214,cljs.core.constant$keyword$242,cljs.core.constant$keyword$243,cljs.core.constant$keyword$244,cljs.core.constant$keyword$245,cljs.core.constant$keyword$246,cljs.core.constant$keyword$247,cljs.core.constant$keyword$248,cljs.core.constant$keyword$249,cljs.core.constant$keyword$250,cljs.core.constant$keyword$251,cljs.core.constant$keyword$252,cljs.core.constant$keyword$253,cljs.core.constant$keyword$254,cljs.core.constant$keyword$255,cljs.core.constant$keyword$256,cljs.core.constant$keyword$257,cljs.core.constant$keyword$258,cljs.core.constant$keyword$259,cljs.core.constant$keyword$260,cljs.core.constant$keyword$261,cljs.core.constant$keyword$262,cljs.core.constant$keyword$263,cljs.core.constant$keyword$264,cljs.core.constant$keyword$265,cljs.core.constant$keyword$266,cljs.core.constant$keyword$267,cljs.core.constant$keyword$268,cljs.core.constant$keyword$269,cljs.core.constant$keyword$270,cljs.core.constant$keyword$271,cljs.core.constant$keyword$272,cljs.core.constant$keyword$273,cljs.core.constant$keyword$274,cljs.core.constant$keyword$275,cljs.core.constant$keyword$276,cljs.core.constant$keyword$277,cljs.core.constant$keyword$278,cljs.core.constant$keyword$279,cljs.core.constant$keyword$280,cljs.core.constant$keyword$281,cljs.core.constant$keyword$282,cljs.core.constant$keyword$283,cljs.core.constant$keyword$284,cljs.core.constant$keyword$285,cljs.core.constant$keyword$286,cljs.core.constant$keyword$287,cljs.core.constant$keyword$288,cljs.core.constant$keyword$289],[cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateElementParser","dateElementParser",984800945,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateParser","dateParser",-1248418930,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localTimeParser","localTimeParser",-1738135328,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateOptionalTimeParser","dateOptionalTimeParser",1783230854,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"timeParser","timeParser",1585048034,null)),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateTimeParser","dateTimeParser",-1493718282,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateParser","localDateParser",477820077,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateOptionalTimeParser","localDateOptionalTimeParser",435955537,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"timeElementParser","timeElementParser",302132553,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.constant$keyword$238,null,cljs.core.constant$keyword$250,null,cljs.core.constant$keyword$253,null,cljs.core.constant$keyword$256,null,cljs.core.constant$keyword$271,null,cljs.core.constant$keyword$272,null,cljs.core.constant$keyword$278,null,cljs.core.constant$keyword$281,null,cljs.core.constant$keyword$284,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;
cljs_time.format.date_map = (function (){var method_table__4712__auto__ = (function (){var G__37031 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37031) : cljs.core.atom.call(null,G__37031));
})();
var prefer_table__4713__auto__ = (function (){var G__37032 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37032) : cljs.core.atom.call(null,G__37032));
})();
var method_cache__4714__auto__ = (function (){var G__37033 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37033) : cljs.core.atom.call(null,G__37033));
})();
var cached_hierarchy__4715__auto__ = (function (){var G__37034 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37034) : cljs.core.atom.call(null,G__37034));
})();
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$229,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-time.format","date-map"),cljs.core.type,cljs.core.constant$keyword$7,hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.Date,(function (d){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$213,(0),cljs.core.constant$keyword$212,(0),cljs.core.constant$keyword$211,(1)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.DateTime,(function (d){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$213,(0),cljs.core.constant$keyword$212,(0),cljs.core.constant$keyword$211,(1),cljs.core.constant$keyword$210,(0),cljs.core.constant$keyword$209,(0),cljs.core.constant$keyword$208,(0),cljs.core.constant$keyword$207,(0)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.UtcDateTime,(function (d){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$213,(0),cljs.core.constant$keyword$212,(0),cljs.core.constant$keyword$211,(1),cljs.core.constant$keyword$210,(0),cljs.core.constant$keyword$209,(0),cljs.core.constant$keyword$208,(0),cljs.core.constant$keyword$207,(0),cljs.core.constant$keyword$231,null], null);
}));
cljs_time.format.parse_STAR_ = (function parse_STAR_(constructor,p__37037,s){
var map__37050 = p__37037;
var map__37050__$1 = ((cljs.core.seq_QMARK_(map__37050))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37050):map__37050);
var fmt = map__37050__$1;
var default_year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37050__$1,cljs.core.constant$keyword$237);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37050__$1,cljs.core.constant$keyword$232);
if(cljs.core.seq(s)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"s","s",-948495851,null))], 0)))].join('')));
}

var min_parts = cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs_time.format.part_splitter_regex));
var parse_fn = cljs_time.format.parser_fn(format_str);
var parse_seq = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parse_fn,min_parts,map__37050,map__37050__$1,fmt,default_year,format_str){
return (function (p__37051){
var vec__37052 = p__37051;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37052,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37052,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second((function (){var G__37053 = b;
return (cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(G__37053) : cljs_time.format.date_parsers.call(null,G__37053));
})())], null);
});})(parse_fn,min_parts,map__37050,map__37050__$1,fmt,default_year,format_str))
,(function (){var G__37054 = s;
return (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(G__37054) : parse_fn.call(null,G__37054));
})()));
if((cljs.core.count(parse_seq) >= min_parts)){
var d = (new constructor((0),(0),(0),(0),(0),(0),(0)));
var empty = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37055 = d;
return (cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1(G__37055) : cljs_time.format.date_map.call(null,G__37055));
})(),cljs.core.constant$keyword$213,(function (){var or__3815__auto__ = default_year;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return (0);
}
})());
var setters = cljs.core.select_keys(cljs_time.format.date_setters,cljs.core.keys(empty));
cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__37050,map__37050__$1,fmt,default_year,format_str){
return (function (p1__37035_SHARP_,p2__37036_SHARP_){
var G__37056 = d;
var G__37057 = p2__37036_SHARP_;
return (p1__37035_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__37035_SHARP_.cljs$core$IFn$_invoke$arity$2(G__37056,G__37057) : p1__37035_SHARP_.call(null,G__37056,G__37057));
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__37050,map__37050__$1,fmt,default_year,format_str))
,cljs.core.array_seq([setters,cljs_time.internal.core.valid_date_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__37050,map__37050__$1,fmt,default_year,format_str){
return (function (date,p__37058){
var vec__37059 = p__37058;
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37059,(0),null);
var do_parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37059,(1),null);
var G__37060 = date;
var G__37061 = part;
return (do_parse.cljs$core$IFn$_invoke$arity$2 ? do_parse.cljs$core$IFn$_invoke$arity$2(G__37060,G__37061) : do_parse.call(null,G__37060,G__37061));
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__37050,map__37050__$1,fmt,default_year,format_str))
,empty,parse_seq))], 0));

return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$290], null));
}
});
/**
* Returns a DateTime instance in the UTC time zone obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse = (function() {
var parse = null;
var parse__1 = (function (s){
return cljs.core.first((function (){var iter__4571__auto__ = (function iter__37080(s__37081){
return (new cljs.core.LazySeq(null,(function (){
var s__37081__$1 = s__37081;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__37081__$1);
if(temp__4126__auto__){
var s__37081__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37081__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__37081__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__37083 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__37082 = (0);
while(true){
if((i__37082 < size__4570__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__37082);
var d = (function (){try{return parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e37088){if((e37088 instanceof Error)){
var _ = e37088;
return null;
} else {
throw e37088;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__37083,d);

var G__37090 = (i__37082 + (1));
i__37082 = G__37090;
continue;
} else {
var G__37091 = (i__37082 + (1));
i__37082 = G__37091;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37083),iter__37080(cljs.core.chunk_rest(s__37081__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37083),null);
}
} else {
var f = cljs.core.first(s__37081__$2);
var d = (function (){try{return parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e37089){if((e37089 instanceof Error)){
var _ = e37089;
return null;
} else {
throw e37089;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,iter__37080(cljs.core.rest(s__37081__$2)));
} else {
var G__37092 = cljs.core.rest(s__37081__$2);
s__37081__$1 = G__37092;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
var parse__2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.UtcDateTime,fmt,s);
});
parse = function(fmt,s){
switch(arguments.length){
case 1:
return parse__1.call(this,fmt);
case 2:
return parse__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse.cljs$core$IFn$_invoke$arity$1 = parse__1;
parse.cljs$core$IFn$_invoke$arity$2 = parse__2;
return parse;
})()
;
/**
* Returns a LocalDateTime instance obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse_local = (function() {
var parse_local = null;
var parse_local__1 = (function (s){
return cljs.core.first((function (){var iter__4571__auto__ = (function iter__37111(s__37112){
return (new cljs.core.LazySeq(null,(function (){
var s__37112__$1 = s__37112;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__37112__$1);
if(temp__4126__auto__){
var s__37112__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37112__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__37112__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__37114 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__37113 = (0);
while(true){
if((i__37113 < size__4570__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__37113);
var d = (function (){try{return parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e37119){if((e37119 instanceof Error)){
var _ = e37119;
return null;
} else {
throw e37119;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__37114,d);

var G__37121 = (i__37113 + (1));
i__37113 = G__37121;
continue;
} else {
var G__37122 = (i__37113 + (1));
i__37113 = G__37122;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37114),iter__37111(cljs.core.chunk_rest(s__37112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37114),null);
}
} else {
var f = cljs.core.first(s__37112__$2);
var d = (function (){try{return parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e37120){if((e37120 instanceof Error)){
var _ = e37120;
return null;
} else {
throw e37120;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,iter__37111(cljs.core.rest(s__37112__$2)));
} else {
var G__37123 = cljs.core.rest(s__37112__$2);
s__37112__$1 = G__37123;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
var parse_local__2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.DateTime,fmt,s);
});
parse_local = function(fmt,s){
switch(arguments.length){
case 1:
return parse_local__1.call(this,fmt);
case 2:
return parse_local__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_local.cljs$core$IFn$_invoke$arity$1 = parse_local__1;
parse_local.cljs$core$IFn$_invoke$arity$2 = parse_local__2;
return parse_local;
})()
;
/**
* Returns a LocalDate instance obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse_local_date = (function() {
var parse_local_date = null;
var parse_local_date__1 = (function (s){
return cljs.core.first((function (){var iter__4571__auto__ = (function iter__37142(s__37143){
return (new cljs.core.LazySeq(null,(function (){
var s__37143__$1 = s__37143;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__37143__$1);
if(temp__4126__auto__){
var s__37143__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37143__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__37143__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__37145 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__37144 = (0);
while(true){
if((i__37144 < size__4570__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__37144);
var d = (function (){try{return parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e37150){if((e37150 instanceof Error)){
var _ = e37150;
return null;
} else {
throw e37150;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__37145,d);

var G__37152 = (i__37144 + (1));
i__37144 = G__37152;
continue;
} else {
var G__37153 = (i__37144 + (1));
i__37144 = G__37153;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37145),iter__37142(cljs.core.chunk_rest(s__37143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37145),null);
}
} else {
var f = cljs.core.first(s__37143__$2);
var d = (function (){try{return parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e37151){if((e37151 instanceof Error)){
var _ = e37151;
return null;
} else {
throw e37151;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,iter__37142(cljs.core.rest(s__37143__$2)));
} else {
var G__37154 = cljs.core.rest(s__37143__$2);
s__37143__$1 = G__37154;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
var parse_local_date__2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.Date,fmt,s);
});
parse_local_date = function(fmt,s){
switch(arguments.length){
case 1:
return parse_local_date__1.call(this,fmt);
case 2:
return parse_local_date__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_local_date.cljs$core$IFn$_invoke$arity$1 = parse_local_date__1;
parse_local_date.cljs$core$IFn$_invoke$arity$2 = parse_local_date__2;
return parse_local_date;
})()
;
/**
* Returns a string representing the given DateTime instance in UTC and in the
* form determined by the given formatter.
*/
cljs_time.format.unparse = (function unparse(p__37155,dt){
var map__37157 = p__37155;
var map__37157__$1 = ((cljs.core.seq_QMARK_(map__37157))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37157):map__37157);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,cljs.core.constant$keyword$233);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,cljs.core.constant$keyword$232);
if(!((dt == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0)))].join('')));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.DateTime","goog.date.DateTime",-2139257094,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,cljs_time.format.formatter_fn(format_str,formatters).call(null,dt));
});
/**
* Returns a string representing the given LocalDateTime instance in the
* form determined by the given formatter.
*/
cljs_time.format.unparse_local = (function unparse_local(p__37158,dt){
var map__37160 = p__37158;
var map__37160__$1 = ((cljs.core.seq_QMARK_(map__37160))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37160):map__37160);
var fmt = map__37160__$1;
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37160__$1,cljs.core.constant$keyword$233);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37160__$1,cljs.core.constant$keyword$232);
if(!((dt == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0)))].join('')));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.DateTime","goog.date.DateTime",-2139257094,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,cljs_time.format.formatter_fn(format_str,formatters).call(null,dt,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0))));
});
/**
* Returns a string representing the given LocalDate instance in the form
* determined by the given formatter.
*/
cljs_time.format.unparse_local_date = (function unparse_local_date(p__37161,dt){
var map__37163 = p__37161;
var map__37163__$1 = ((cljs.core.seq_QMARK_(map__37163))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37163):map__37163);
var fmt = map__37163__$1;
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37163__$1,cljs.core.constant$keyword$233);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37163__$1,cljs.core.constant$keyword$232);
if(!((dt == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0)))].join('')));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.Date","goog.date.Date",-1613361125,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,cljs_time.format.formatter_fn(format_str,formatters).call(null,dt,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0))));
});
/**
* Shows how a given DateTime, or by default the current time, would be
* formatted with each of the available printing formatters.
*/
cljs_time.format.show_formatters = (function() {
var show_formatters = null;
var show_formatters__0 = (function (){
return show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
});
var show_formatters__1 = (function (dt){
var seq__37171 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));
var chunk__37172 = null;
var count__37173 = (0);
var i__37174 = (0);
while(true){
if((i__37174 < count__37173)){
var p = chunk__37172.cljs$core$IIndexed$_nth$arity$2(null,i__37174);
var fmt_37177 = (function (){var G__37175 = p;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__37175) : cljs_time.format.formatters.call(null,G__37175));
})();
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_37177,dt)], 0))], 0));

var G__37178 = seq__37171;
var G__37179 = chunk__37172;
var G__37180 = count__37173;
var G__37181 = (i__37174 + (1));
seq__37171 = G__37178;
chunk__37172 = G__37179;
count__37173 = G__37180;
i__37174 = G__37181;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__37171);
if(temp__4126__auto__){
var seq__37171__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37171__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__37171__$1);
var G__37182 = cljs.core.chunk_rest(seq__37171__$1);
var G__37183 = c__4602__auto__;
var G__37184 = cljs.core.count(c__4602__auto__);
var G__37185 = (0);
seq__37171 = G__37182;
chunk__37172 = G__37183;
count__37173 = G__37184;
i__37174 = G__37185;
continue;
} else {
var p = cljs.core.first(seq__37171__$1);
var fmt_37186 = (function (){var G__37176 = p;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__37176) : cljs_time.format.formatters.call(null,G__37176));
})();
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_37186,dt)], 0))], 0));

var G__37187 = cljs.core.next(seq__37171__$1);
var G__37188 = null;
var G__37189 = (0);
var G__37190 = (0);
seq__37171 = G__37187;
chunk__37172 = G__37188;
count__37173 = G__37189;
i__37174 = G__37190;
continue;
}
} else {
return null;
}
}
break;
}
});
show_formatters = function(dt){
switch(arguments.length){
case 0:
return show_formatters__0.call(this);
case 1:
return show_formatters__1.call(this,dt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
show_formatters.cljs$core$IFn$_invoke$arity$0 = show_formatters__0;
show_formatters.cljs$core$IFn$_invoke$arity$1 = show_formatters__1;
return show_formatters;
})()
;

cljs_time.format.Mappable = (function (){var obj37192 = {};
return obj37192;
})();

cljs_time.format.instant__GT_map = (function instant__GT_map(instant){
if((function (){var and__3803__auto__ = instant;
if(and__3803__auto__){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1;
} else {
return and__3803__auto__;
}
})()){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__4459__auto__ = (((instant == null))?null:instant);
return (function (){var or__3815__auto__ = (cljs_time.format.instant__GT_map[(function (){var G__37196 = x__4459__auto__;
return goog.typeOf(G__37196);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.format.instant__GT_map["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
})().call(null,instant);
}
});

cljs_time.format.to_map = (function to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$213,years,cljs.core.constant$keyword$212,months,cljs.core.constant$keyword$211,days,cljs.core.constant$keyword$210,hours,cljs.core.constant$keyword$209,minutes,cljs.core.constant$keyword$208,seconds,cljs.core.constant$keyword$207,millis], null);
});
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__37197 = (((cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)).fqn:null);
switch (G__37197) {
case "cljs-time.core/interval":
var G__37198 = m__$1;
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(G__37198) : cljs_time.core.__GT_period.call(null,G__37198));

break;
case "cljs-time.core/period":
return m__$1;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)))].join('')));

}
});

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = true;

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__37199 = m__$1;
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(G__37199) : cljs_time.core.__GT_period.call(null,G__37199));
});

cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = true;

cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__37200 = m__$1;
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(G__37200) : cljs_time.core.__GT_period.call(null,G__37200));
});

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = true;

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});
