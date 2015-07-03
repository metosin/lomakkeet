// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('lomakkeet.date');
goog.require('cljs.core');
goog.require('goog.string');
lomakkeet.date.jsdate__GT_local_date = (function lomakkeet$date$jsdate__GT_local_date(v){
if(cljs.core.truth_(v)){
var G__17202 = (new goog.date.Date());
G__17202.setYear(v.getFullYear());

G__17202.setMonth(v.getMonth());

G__17202.setDate(v.getDate());

return G__17202;
} else {
return null;
}
});
lomakkeet.date.local_date__GT_jsdate = (function lomakkeet$date$local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__17204 = (new Date());
G__17204.setYear(v.getFullYear());

G__17204.setMonth(v.getMonth());

G__17204.setDate(v.getDate());

G__17204.setHours((0));

G__17204.setMinutes((0));

G__17204.setSeconds((0));

return G__17204;
} else {
return null;
}
});
lomakkeet.date.date__GT_str = (function lomakkeet$date$date__GT_str(v){
if(cljs.core.truth_(v)){
var G__17209 = "%d.%d.%d";
var G__17210 = v.getDate();
var G__17211 = (v.getMonth() + (1));
var G__17212 = v.getFullYear();
return goog.string.format(G__17209,G__17210,G__17211,G__17212);
} else {
return null;
}
});
