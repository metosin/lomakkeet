// Compiled by ClojureScript 0.0-2850 {}
goog.provide('schema.coerce');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('cljs.reader');
/**
* A Schema for Schemas
*/
schema.coerce.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$75,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$77,(function (p1__12200__12201__auto__){
var G__37336 = p1__12200__12201__auto__;
if(G__37336){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__37336.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__37336.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__37336);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__37336);
}
})], null));
/**
* A function from schema to coercion function, or nil if no special coercion is needed.
* The returned function is applied to the corresponding data before validation (or walking/
* coercion of its sub-schemas, if applicable)
*/
schema.coerce.CoercionMatcher = schema.core.make_fn_schema(schema.core.maybe(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___37355 = schema.utils.use_fn_validation;
var output_schema37337_37356 = schema.core.Any;
var input_schema37338_37357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.coerce.CoercionMatcher,new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null))], null);
var input_checker37339_37358 = schema.core.checker(input_schema37338_37357);
var output_checker37340_37359 = schema.core.checker(output_schema37337_37356);
/**
* Inputs: [schema coercion-matcher :- CoercionMatcher]
* 
* Produce a function that simultaneously coerces and validates a datum.
*/
schema.coerce.coercer = ((function (ufv___37355,output_schema37337_37356,input_schema37338_37357,input_checker37339_37358,output_checker37340_37359){
return (function coercer(G__37341,G__37342){
var validate__12170__auto__ = ufv___37355.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___37360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37341,G__37342], null);
var temp__4126__auto___37361 = (function (){var G__37349 = args__12171__auto___37360;
return (input_checker37339_37358.cljs$core$IFn$_invoke$arity$1 ? input_checker37339_37358.cljs$core$IFn$_invoke$arity$1(G__37349) : input_checker37339_37358.call(null,G__37349));
})();
if(cljs.core.truth_(temp__4126__auto___37361)){
var error__12172__auto___37362 = temp__4126__auto___37361;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___37362], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___37362,cljs.core.constant$keyword$64,args__12171__auto___37360,cljs.core.constant$keyword$65,input_schema37338_37357,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var schema__$1 = G__37341;
var coercion_matcher = G__37342;
while(true){
return schema.core.start_walker(schema.utils.memoize_id(((function (validate__12170__auto__,ufv___37355,output_schema37337_37356,input_schema37338_37357,input_checker37339_37358,output_checker37340_37359){
return (function (s){
var walker = schema.core.walker(s);
var temp__4124__auto__ = (function (){var G__37350 = s;
return (coercion_matcher.cljs$core$IFn$_invoke$arity$1 ? coercion_matcher.cljs$core$IFn$_invoke$arity$1(G__37350) : coercion_matcher.call(null,G__37350));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var coercer__$1 = temp__4124__auto__;
return ((function (coercer__$1,temp__4124__auto__,walker,validate__12170__auto__,ufv___37355,output_schema37337_37356,input_schema37338_37357,input_checker37339_37358,output_checker37340_37359){
return (function (x){
try{var v = (function (){var G__37352 = x;
return (coercer__$1.cljs$core$IFn$_invoke$arity$1 ? coercer__$1.cljs$core$IFn$_invoke$arity$1(G__37352) : coercer__$1.call(null,G__37352));
})();
if(schema.utils.error_QMARK_(v)){
return v;
} else {
var G__37353 = v;
return (walker.cljs$core$IFn$_invoke$arity$1 ? walker.cljs$core$IFn$_invoke$arity$1(G__37353) : walker.call(null,G__37353));
}
}catch (e37351){if((e37351 instanceof Object)){
var t = e37351;
return schema.utils.error(schema.utils.__GT_ValidationError(s,x,(new cljs.core.Delay(((function (t,coercer__$1,temp__4124__auto__,walker,validate__12170__auto__,ufv___37355,output_schema37337_37356,input_schema37338_37357,input_checker37339_37358,output_checker37340_37359){
return (function (){
return t;
});})(t,coercer__$1,temp__4124__auto__,walker,validate__12170__auto__,ufv___37355,output_schema37337_37356,input_schema37338_37357,input_checker37339_37358,output_checker37340_37359))
,null)),null));
} else {
throw e37351;

}
}});
;})(coercer__$1,temp__4124__auto__,walker,validate__12170__auto__,ufv___37355,output_schema37337_37356,input_schema37338_37357,input_checker37339_37358,output_checker37340_37359))
} else {
return walker;
}
});})(validate__12170__auto__,ufv___37355,output_schema37337_37356,input_schema37338_37357,input_checker37339_37358,output_checker37340_37359))
),schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___37363 = (function (){var G__37354 = o__12173__auto__;
return (output_checker37340_37359.cljs$core$IFn$_invoke$arity$1 ? output_checker37340_37359.cljs$core$IFn$_invoke$arity$1(G__37354) : output_checker37340_37359.call(null,G__37354));
})();
if(cljs.core.truth_(temp__4126__auto___37363)){
var error__12172__auto___37364 = temp__4126__auto___37363;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___37364], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___37364,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema37337_37356,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___37355,output_schema37337_37356,input_schema37338_37357,input_checker37339_37358,output_checker37340_37359))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer),schema.core.make_fn_schema(output_schema37337_37356,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37338_37357], null)));
var ufv___37377 = schema.utils.use_fn_validation;
var output_schema37366_37378 = schema.coerce.CoercionMatcher;
var input_schema37367_37379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null))], null);
var input_checker37368_37380 = schema.core.checker(input_schema37367_37379);
var output_checker37369_37381 = schema.core.checker(output_schema37366_37378);
/**
* Inputs: [matchers :- [CoercionMatcher]]
* Returns: CoercionMatcher
* 
* A matcher that takes the first match from matchers.
*/
schema.coerce.first_matcher = ((function (ufv___37377,output_schema37366_37378,input_schema37367_37379,input_checker37368_37380,output_checker37369_37381){
return (function first_matcher(G__37370){
var validate__12170__auto__ = ufv___37377.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___37382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37370], null);
var temp__4126__auto___37383 = (function (){var G__37374 = args__12171__auto___37382;
return (input_checker37368_37380.cljs$core$IFn$_invoke$arity$1 ? input_checker37368_37380.cljs$core$IFn$_invoke$arity$1(G__37374) : input_checker37368_37380.call(null,G__37374));
})();
if(cljs.core.truth_(temp__4126__auto___37383)){
var error__12172__auto___37384 = temp__4126__auto___37383;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___37384], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___37384,cljs.core.constant$keyword$64,args__12171__auto___37382,cljs.core.constant$keyword$65,input_schema37367_37379,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var matchers = G__37370;
while(true){
return ((function (validate__12170__auto__,ufv___37377,output_schema37366_37378,input_schema37367_37379,input_checker37368_37380,output_checker37369_37381){
return (function (schema__$1){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12170__auto__,ufv___37377,output_schema37366_37378,input_schema37367_37379,input_checker37368_37380,output_checker37369_37381){
return (function (p1__37365_SHARP_){
var G__37375 = schema__$1;
return (p1__37365_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37365_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37375) : p1__37365_SHARP_.call(null,G__37375));
});})(validate__12170__auto__,ufv___37377,output_schema37366_37378,input_schema37367_37379,input_checker37368_37380,output_checker37369_37381))
,matchers));
});
;})(validate__12170__auto__,ufv___37377,output_schema37366_37378,input_schema37367_37379,input_checker37368_37380,output_checker37369_37381))
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___37385 = (function (){var G__37376 = o__12173__auto__;
return (output_checker37369_37381.cljs$core$IFn$_invoke$arity$1 ? output_checker37369_37381.cljs$core$IFn$_invoke$arity$1(G__37376) : output_checker37369_37381.call(null,G__37376));
})();
if(cljs.core.truth_(temp__4126__auto___37385)){
var error__12172__auto___37386 = temp__4126__auto___37385;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___37386], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___37386,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema37366_37378,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___37377,output_schema37366_37378,input_schema37367_37379,input_checker37368_37380,output_checker37369_37381))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.first_matcher),schema.core.make_fn_schema(output_schema37366_37378,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37367_37379], null)));
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
try{var G__37390 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37390) : f.call(null,G__37390));
}catch (e37389){if((e37389 instanceof Object)){
var e = e37389;
return x;
} else {
throw e37389;

}
}});
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean], true, false)], 0));
/**
* A matcher that coerces keywords and keyword enums from strings, and longs and doubles
* from numbers on the JVM (without losing precision)
*/
schema.coerce.json_coercion_matcher = (function json_coercion_matcher(schema__$1){
var or__3815__auto__ = (function (){var G__37394 = schema__$1;
return (schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__37394) : schema.coerce._PLUS_json_coercions_PLUS_.call(null,G__37394));
})();
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = schema.coerce.keyword_enum_matcher(schema__$1);
if(cljs.core.truth_(or__3815__auto____$1)){
return or__3815__auto____$1;
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
var or__3815__auto__ = (function (){var G__37398 = schema__$1;
return (schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__37398) : schema.coerce._PLUS_string_coercions_PLUS_.call(null,G__37398));
})();
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return schema.coerce.keyword_enum_matcher(schema__$1);
}
});
