// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.date');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.date.Date');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeParse');
lomakkeet.date.jsdate__GT_local_date = (function lomakkeet$date$jsdate__GT_local_date(v){
if(cljs.core.truth_(v)){
var G__6099 = (new goog.date.Date());
G__6099.setYear(v.getFullYear());

G__6099.setMonth(v.getMonth());

G__6099.setDate(v.getDate());

return G__6099;
} else {
return null;
}
});
lomakkeet.date.jsdate__GT_date_time = (function lomakkeet$date$jsdate__GT_date_time(v){
if(cljs.core.truth_(v)){
var G__6101 = (new goog.date.UtcDateTime());
G__6101.setYear(v.getFullYear());

G__6101.setMonth(v.getMonth());

G__6101.setDate(v.getDate());

G__6101.setHours((0));

G__6101.setMinutes((0));

G__6101.setSeconds((0));

return G__6101;
} else {
return null;
}
});
lomakkeet.date.local_date__GT_jsdate = (function lomakkeet$date$local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__6103 = (new Date());
G__6103.setYear(v.getFullYear());

G__6103.setMonth(v.getMonth());

G__6103.setDate(v.getDate());

G__6103.setHours((0));

G__6103.setMinutes((0));

G__6103.setSeconds((0));

return G__6103;
} else {
return null;
}
});
lomakkeet.date.date_time__GT_jsdate = (function lomakkeet$date$date_time__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__6105 = (new Date());
G__6105.setYear(v.getFullYear());

G__6105.setMonth(v.getMonth());

G__6105.setDate(v.getDate());

G__6105.setHours(v.getHours());

G__6105.setMinutes(v.getMinutes());

G__6105.setSeconds(v.getSeconds());

return G__6105;
} else {
return null;
}
});
lomakkeet.date.date__GT_str = (function lomakkeet$date$date__GT_str(v){
if(cljs.core.truth_(v)){
return goog.string.format("%d.%d.%d",v.getDate(),(v.getMonth() + (1)),v.getFullYear());
} else {
return null;
}
});
lomakkeet.date.date_format = (function lomakkeet$date$date_format(d,f){
if(cljs.core.truth_(d)){
return (new goog.i18n.DateTimeFormat(f)).format(d);
} else {
return null;
}
});
lomakkeet.date.date_read = (function lomakkeet$date$date_read(s,f){
var date = (new goog.date.Date((0),(0),(0)));
(new goog.i18n.DateTimeParse(f)).strictParse(s,date);

if(cljs.core.not_EQ_.call(null,(0),date.getYear())){
return date;
} else {
return null;
}
});

//# sourceMappingURL=date.js.map