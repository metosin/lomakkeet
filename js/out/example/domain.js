// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('example.domain');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('cljs_time.core');
example.domain.LocalDate = goog.date.Date;
example.domain.DateRange = (function example$domain$DateRange(start,end){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (x){
var and__4326__auto__ = (function (){var or__4338__auto__ = cljs.core.not(start);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = x.equals(start);
if(cljs.core.truth_(or__4338__auto____$1)){
return or__4338__auto____$1;
} else {
return cljs_time.core.after_QMARK_(x,start);
}
}
})();
if(cljs.core.truth_(and__4326__auto__)){
var or__4338__auto__ = cljs.core.not(end);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = x.equals(end);
if(cljs.core.truth_(or__4338__auto____$1)){
return or__4338__auto____$1;
} else {
return cljs_time.core.before_QMARK_(x,end);
}
}
} else {
return and__4326__auto__;
}
}),new cljs.core.Symbol(null,"invalid-date","invalid-date",-623929196,null));
});
example.domain.email_pattern = (new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$","i"));
/**
 * 
 */
example.domain.Thingie = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema.core.schema_with_name(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$name,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Symbol(null,"required","required",-846788763,null))], 0)),cljs.core.constant$keyword$email,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (p1__11817_SHARP_){
return cljs.core.re_find(example.domain.email_pattern,p1__11817_SHARP_);
}),new cljs.core.Symbol(null,"email","email",-1238619063,null))], 0)),cljs.core.constant$keyword$dates,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$start,example.domain.LocalDate,cljs.core.constant$keyword$end,schema.core.maybe(example.domain.LocalDate)], null),cljs.core.constant$keyword$desc,schema.core.Str,cljs.core.constant$keyword$file,schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([File,schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (f){
if(cljs.core.truth_(f)){
return (f.size < (1000000));
} else {
return null;
}
}),new cljs.core.Symbol(null,"large-file","large-file",1285636257,null))], 0))),cljs.core.constant$keyword$country,schema.core.Str,cljs.core.constant$keyword$reasons,cljs.core.PersistentHashSet.fromArray([schema.core.Keyword], true),cljs.core.constant$keyword$gender,schema.core.Keyword], null),new cljs.core.Symbol(null,"Thingie","Thingie",537507576,null)),cljs.core.assoc,cljs.core.constant$keyword$ns,new cljs.core.Symbol(null,"example.domain","example.domain",-330596696,null));
example.domain.ThingieDates = (function example$domain$ThingieDates(p__11819){
var map__11822 = p__11819;
var map__11822__$1 = ((cljs.core.seq_QMARK_(map__11822))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11822):map__11822);
var map__11823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11822__$1,cljs.core.constant$keyword$dates);
var map__11823__$1 = ((cljs.core.seq_QMARK_(map__11823))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11823):map__11823);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11823__$1,cljs.core.constant$keyword$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11823__$1,cljs.core.constant$keyword$end);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(example.domain.Thingie,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$dates,cljs.core.constant$keyword$start], null),((function (map__11822,map__11822__$1,map__11823,map__11823__$1,start,end){
return (function (p1__11818_SHARP_){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__11818_SHARP_,example.domain.DateRange(cljs_time.core.today(),end)], 0));
});})(map__11822,map__11822__$1,map__11823,map__11823__$1,start,end))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$dates,cljs.core.constant$keyword$end], null),schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([example.domain.LocalDate,example.domain.DateRange(start,null)], 0))));
});
example.domain.empty_thing = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$name,"",cljs.core.constant$keyword$email,"luke@rebel.gov",cljs.core.constant$keyword$dates,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$start,cljs_time.core.today(),cljs.core.constant$keyword$end,null], null),cljs.core.constant$keyword$desc,"",cljs.core.constant$keyword$file,null,cljs.core.constant$keyword$country,"FI",cljs.core.constant$keyword$reasons,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$b,null,cljs.core.constant$keyword$a,null], null), null),cljs.core.constant$keyword$gender,cljs.core.constant$keyword$other], null);
example.domain.genders = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$male,"Male",cljs.core.constant$keyword$female,"Female",cljs.core.constant$keyword$other,"Other"], null);
