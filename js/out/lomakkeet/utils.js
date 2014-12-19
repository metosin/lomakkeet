// Compiled by ClojureScript 0.0-2496
goog.provide('lomakkeet.utils');
goog.require('cljs.core');
/**
* Find index of vector where item has matching value on given key.
*/
lomakkeet.utils.find_index = (function find_index(coll,k,v){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__21578_SHARP_,p2__21577_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2__21577_SHARP_,k))){
return p1__21578_SHARP_;
} else {
return null;
}
}),coll));
});
/**
* Find first value from collection where item has matching value for given key.
*/
lomakkeet.utils.find_first = (function find_first(coll,k,v){
return cljs.core.some((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k))){
return x;
} else {
return null;
}
}),coll);
});
lomakkeet.utils.conjv = (function conjv(el,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,el));
});
lomakkeet.utils.consv = (function consv(el,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(el,coll));
});
