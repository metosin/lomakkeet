// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('lomakkeet.date');
goog.require('cljs.core');
goog.require('goog.string');
lomakkeet.date.jsdate__GT_local_date = (function lomakkeet$date$jsdate__GT_local_date(v){
if(cljs.core.truth_(v)){
var G__17196 = (new goog.date.Date());
G__17196.setYear(v.getFullYear());

G__17196.setMonth(v.getMonth());

G__17196.setDate(v.getDate());

return G__17196;
} else {
return null;
}
});
lomakkeet.date.local_date__GT_jsdate = (function lomakkeet$date$local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__17198 = (new Date());
G__17198.setYear(v.getFullYear());

G__17198.setMonth(v.getMonth());

G__17198.setDate(v.getDate());

G__17198.setHours((0));

G__17198.setMinutes((0));

G__17198.setSeconds((0));

return G__17198;
} else {
return null;
}
});
lomakkeet.date.date__GT_str = (function lomakkeet$date$date__GT_str(v){
if(cljs.core.truth_(v)){
var G__17203 = "%d.%d.%d";
var G__17204 = v.getDate();
var G__17205 = (v.getMonth() + (1));
var G__17206 = v.getFullYear();
return goog.string.format(G__17203,G__17204,G__17205,G__17206);
} else {
return null;
}
});
