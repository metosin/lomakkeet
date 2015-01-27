// Compiled by ClojureScript 0.0-2727 {}
goog.provide('schema.coerce');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('cljs.reader');
/**
* A Schema for Schemas
*/
schema.coerce.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$34,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$36,(function (p1__10748__10749__auto__){
var G__36280 = p1__10748__10749__auto__;
if(G__36280){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__36280.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__36280.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__36280);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__36280);
}
})], null));
/**
* A function from schema to coercion function, or nil if no special coercion is needed.
* The returned function is applied to the corresponding data before validation (or walking/
* coercion of its sub-schemas, if applicable)
*/
schema.coerce.CoercionMatcher = schema.core.make_fn_schema(schema.core.maybe(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___36299 = schema.utils.use_fn_validation;
var output_schema36281_36300 = schema.core.Any;
var input_schema36282_36301 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.coerce.CoercionMatcher,new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null))], null);
var input_checker36283_36302 = schema.core.checker(input_schema36282_36301);
var output_checker36284_36303 = schema.core.checker(output_schema36281_36300);
/**
* Inputs: [schema coercion-matcher :- CoercionMatcher]
* 
* Produce a function that simultaneously coerces and validates a datum.
*/
schema.coerce.coercer = ((function (ufv___36299,output_schema36281_36300,input_schema36282_36301,input_checker36283_36302,output_checker36284_36303){
return (function coercer(G__36285,G__36286){
var validate__10718__auto__ = ufv___36299.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___36304 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36285,G__36286], null);
var temp__4126__auto___36305 = (function (){var G__36293 = args__10719__auto___36304;
return (input_checker36283_36302.cljs$core$IFn$_invoke$arity$1 ? input_checker36283_36302.cljs$core$IFn$_invoke$arity$1(G__36293) : input_checker36283_36302.call(null,G__36293));
})();
if(cljs.core.truth_(temp__4126__auto___36305)){
var error__10720__auto___36306 = temp__4126__auto___36305;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___36306], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___36306,cljs.core.constant$keyword$23,args__10719__auto___36304,cljs.core.constant$keyword$24,input_schema36282_36301,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var schema__$1 = G__36285;
var coercion_matcher = G__36286;
while(true){
return schema.core.start_walker(schema.utils.memoize_id(((function (validate__10718__auto__,ufv___36299,output_schema36281_36300,input_schema36282_36301,input_checker36283_36302,output_checker36284_36303){
return (function (s){
var walker = schema.core.walker(s);
var temp__4124__auto__ = (function (){var G__36294 = s;
return (coercion_matcher.cljs$core$IFn$_invoke$arity$1 ? coercion_matcher.cljs$core$IFn$_invoke$arity$1(G__36294) : coercion_matcher.call(null,G__36294));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var coercer__$1 = temp__4124__auto__;
return ((function (coercer__$1,temp__4124__auto__,walker,validate__10718__auto__,ufv___36299,output_schema36281_36300,input_schema36282_36301,input_checker36283_36302,output_checker36284_36303){
return (function (x){
try{var v = (function (){var G__36296 = x;
return (coercer__$1.cljs$core$IFn$_invoke$arity$1 ? coercer__$1.cljs$core$IFn$_invoke$arity$1(G__36296) : coercer__$1.call(null,G__36296));
})();
if(schema.utils.error_QMARK_(v)){
return v;
} else {
var G__36297 = v;
return (walker.cljs$core$IFn$_invoke$arity$1 ? walker.cljs$core$IFn$_invoke$arity$1(G__36297) : walker.call(null,G__36297));
}
}catch (e36295){if((e36295 instanceof Object)){
var t = e36295;
return schema.utils.error(schema.utils.__GT_ValidationError(s,x,(new cljs.core.Delay(((function (t,coercer__$1,temp__4124__auto__,walker,validate__10718__auto__,ufv___36299,output_schema36281_36300,input_schema36282_36301,input_checker36283_36302,output_checker36284_36303){
return (function (){
return t;
});})(t,coercer__$1,temp__4124__auto__,walker,validate__10718__auto__,ufv___36299,output_schema36281_36300,input_schema36282_36301,input_checker36283_36302,output_checker36284_36303))
,null)),null));
} else {
throw e36295;

}
}});
;})(coercer__$1,temp__4124__auto__,walker,validate__10718__auto__,ufv___36299,output_schema36281_36300,input_schema36282_36301,input_checker36283_36302,output_checker36284_36303))
} else {
return walker;
}
});})(validate__10718__auto__,ufv___36299,output_schema36281_36300,input_schema36282_36301,input_checker36283_36302,output_checker36284_36303))
),schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___36307 = (function (){var G__36298 = o__10721__auto__;
return (output_checker36284_36303.cljs$core$IFn$_invoke$arity$1 ? output_checker36284_36303.cljs$core$IFn$_invoke$arity$1(G__36298) : output_checker36284_36303.call(null,G__36298));
})();
if(cljs.core.truth_(temp__4126__auto___36307)){
var error__10720__auto___36308 = temp__4126__auto___36307;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___36308], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___36308,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema36281_36300,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___36299,output_schema36281_36300,input_schema36282_36301,input_checker36283_36302,output_checker36284_36303))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer),schema.core.make_fn_schema(output_schema36281_36300,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36282_36301], null)));
var ufv___36321 = schema.utils.use_fn_validation;
var output_schema36310_36322 = schema.coerce.CoercionMatcher;
var input_schema36311_36323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null))], null);
var input_checker36312_36324 = schema.core.checker(input_schema36311_36323);
var output_checker36313_36325 = schema.core.checker(output_schema36310_36322);
/**
* Inputs: [matchers :- [CoercionMatcher]]
* Returns: CoercionMatcher
* 
* A matcher that takes the first match from matchers.
*/
schema.coerce.first_matcher = ((function (ufv___36321,output_schema36310_36322,input_schema36311_36323,input_checker36312_36324,output_checker36313_36325){
return (function first_matcher(G__36314){
var validate__10718__auto__ = ufv___36321.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___36326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36314], null);
var temp__4126__auto___36327 = (function (){var G__36318 = args__10719__auto___36326;
return (input_checker36312_36324.cljs$core$IFn$_invoke$arity$1 ? input_checker36312_36324.cljs$core$IFn$_invoke$arity$1(G__36318) : input_checker36312_36324.call(null,G__36318));
})();
if(cljs.core.truth_(temp__4126__auto___36327)){
var error__10720__auto___36328 = temp__4126__auto___36327;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___36328], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___36328,cljs.core.constant$keyword$23,args__10719__auto___36326,cljs.core.constant$keyword$24,input_schema36311_36323,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var matchers = G__36314;
while(true){
return ((function (validate__10718__auto__,ufv___36321,output_schema36310_36322,input_schema36311_36323,input_checker36312_36324,output_checker36313_36325){
return (function (schema__$1){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__10718__auto__,ufv___36321,output_schema36310_36322,input_schema36311_36323,input_checker36312_36324,output_checker36313_36325){
return (function (p1__36309_SHARP_){
var G__36319 = schema__$1;
return (p1__36309_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36309_SHARP_.cljs$core$IFn$_invoke$arity$1(G__36319) : p1__36309_SHARP_.call(null,G__36319));
});})(validate__10718__auto__,ufv___36321,output_schema36310_36322,input_schema36311_36323,input_checker36312_36324,output_checker36313_36325))
,matchers));
});
;})(validate__10718__auto__,ufv___36321,output_schema36310_36322,input_schema36311_36323,input_checker36312_36324,output_checker36313_36325))
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___36329 = (function (){var G__36320 = o__10721__auto__;
return (output_checker36313_36325.cljs$core$IFn$_invoke$arity$1 ? output_checker36313_36325.cljs$core$IFn$_invoke$arity$1(G__36320) : output_checker36313_36325.call(null,G__36320));
})();
if(cljs.core.truth_(temp__4126__auto___36329)){
var error__10720__auto___36330 = temp__4126__auto___36329;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___36330], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___36330,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema36310_36322,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___36321,output_schema36310_36322,input_schema36311_36323,input_checker36312_36324,output_checker36313_36325))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.first_matcher),schema.core.make_fn_schema(output_schema36310_36322,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36311_36323], null)));
schema.coerce.string__GT_keyword = (function string__GT_keyword(s){
if(typeof s === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
} else {
return s;
}
});
/**
* returns true for strings that are equal, ignoring case, to the string 'true'
* (following java.lang.Boolean/parseBoolean semantics)
*/
schema.coerce.string__GT_boolean = (function string__GT_boolean(s){
if(typeof s === 'string'){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",clojure.string.lower_case(s));
} else {
return s;
}
});
schema.coerce.keyword_enum_matcher = (function keyword_enum_matcher(schema__$1){
if(((schema__$1 instanceof schema.core.EnumSchema)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,schema__$1.vs))){
return schema.coerce.string__GT_keyword;
} else {
return null;
}
});
schema.coerce.set_matcher = (function set_matcher(schema__$1){
if((schema__$1 instanceof cljs.core.PersistentHashSet)){
return (function (x){
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.set(x);
} else {
return x;
}
});
} else {
return null;
}
});
/**
* Take a single-arg function f, and return a single-arg function that acts as identity
* if f throws an exception, and like f otherwise.  Useful because coercers are not explicitly
* guarded for exceptions, and failing to coerce will generally produce a more useful error
* in this case.
*/
schema.coerce.safe = (function safe(f){
return (function (x){
try{var G__36334 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36334) : f.call(null,G__36334));
}catch (e36333){if((e36333 instanceof Object)){
var e = e36333;
return x;
} else {
throw e36333;

}
}});
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean], true, false)], 0));
/**
* A matcher that coerces keywords and keyword enums from strings, and longs and doubles
* from numbers on the JVM (without losing precision)
*/
schema.coerce.json_coercion_matcher = (function json_coercion_matcher(schema__$1){
var or__3758__auto__ = (function (){var G__36338 = schema__$1;
return (schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__36338) : schema.coerce._PLUS_json_coercions_PLUS_.call(null,G__36338));
})();
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = schema.coerce.keyword_enum_matcher(schema__$1);
if(cljs.core.truth_(or__3758__auto____$1)){
return or__3758__auto____$1;
} else {
return schema.coerce.set_matcher(schema__$1);
}
}
});
/**
* Reads one object from a string. Returns nil when string is nil or empty
*/
schema.coerce.edn_read_string = cljs.reader.read_string;
schema.coerce._PLUS_string_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.coerce._PLUS_json_coercions_PLUS_,new cljs.core.PersistentArrayMap.fromArray([schema.core.Num,schema.coerce.safe(schema.coerce.edn_read_string),schema.core.Int,schema.coerce.safe(schema.coerce.edn_read_string)], true, false)], 0));
/**
* A matcher that coerces keywords, keyword enums, s/Num and s/Int,
* and long and doubles (JVM only) from strings.
*/
schema.coerce.string_coercion_matcher = (function string_coercion_matcher(schema__$1){
var or__3758__auto__ = (function (){var G__36342 = schema__$1;
return (schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__36342) : schema.coerce._PLUS_string_coercions_PLUS_.call(null,G__36342));
})();
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return schema.coerce.keyword_enum_matcher(schema__$1);
}
});
