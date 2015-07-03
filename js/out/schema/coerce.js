// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('schema.coerce');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('schema.core');
goog.require('schema.utils');
goog.require('clojure.string');
/**
 * A Schema for Schemas
 */
schema.coerce.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$proto_DASH_sym,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$proto_DASH_pred,(function (p1__10490__10491__auto__){
var G__22503 = p1__10490__10491__auto__;
if(G__22503){
var bit__5012__auto__ = null;
if(cljs.core.truth_((function (){var or__4338__auto__ = bit__5012__auto__;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return G__22503.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__22503.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__22503);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__22503);
}
})], null));
/**
 * A function from schema to coercion function, or nil if no special coercion is needed.
 * The returned function is applied to the corresponding data before validation (or walking/
 * coercion of its sub-schemas, if applicable)
 */
schema.coerce.CoercionMatcher = schema.core.make_fn_schema(schema.core.maybe(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___22522 = schema.utils.use_fn_validation;
var output_schema22504_22523 = schema.core.Any;
var input_schema22505_22524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.coerce.CoercionMatcher,new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null))], null);
var input_checker22506_22525 = schema.core.checker(input_schema22505_22524);
var output_checker22507_22526 = schema.core.checker(output_schema22504_22523);
/**
 * Inputs: [schema coercion-matcher :- CoercionMatcher]
 * 
 * Produce a function that simultaneously coerces and validates a datum.
 */
schema.coerce.coercer = ((function (ufv___22522,output_schema22504_22523,input_schema22505_22524,input_checker22506_22525,output_checker22507_22526){
return (function schema$coerce$coercer(G__22508,G__22509){
var validate__10106__auto__ = ufv___22522.get_cell();
if(cljs.core.truth_(validate__10106__auto__)){
var args__10107__auto___22527 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22508,G__22509], null);
var temp__4423__auto___22528 = (function (){var G__22516 = args__10107__auto___22527;
return (input_checker22506_22525.cljs$core$IFn$_invoke$arity$1 ? input_checker22506_22525.cljs$core$IFn$_invoke$arity$1(G__22516) : input_checker22506_22525.call(null,G__22516));
})();
if(cljs.core.truth_(temp__4423__auto___22528)){
var error__10108__auto___22529 = temp__4423__auto___22528;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10108__auto___22529], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema22505_22524,cljs.core.constant$keyword$value,args__10107__auto___22527,cljs.core.constant$keyword$error,error__10108__auto___22529], null));
} else {
}
} else {
}

var o__10109__auto__ = (function (){var schema__$1 = G__22508;
var coercion_matcher = G__22509;
while(true){
return schema.core.start_walker(schema.utils.memoize_id(((function (validate__10106__auto__,ufv___22522,output_schema22504_22523,input_schema22505_22524,input_checker22506_22525,output_checker22507_22526){
return (function (s){
var walker = schema.core.walker(s);
var temp__4421__auto__ = (function (){var G__22517 = s;
return (coercion_matcher.cljs$core$IFn$_invoke$arity$1 ? coercion_matcher.cljs$core$IFn$_invoke$arity$1(G__22517) : coercion_matcher.call(null,G__22517));
})();
if(cljs.core.truth_(temp__4421__auto__)){
var coercer__$1 = temp__4421__auto__;
return ((function (coercer__$1,temp__4421__auto__,walker,validate__10106__auto__,ufv___22522,output_schema22504_22523,input_schema22505_22524,input_checker22506_22525,output_checker22507_22526){
return (function (x){
try{var v = (function (){var G__22519 = x;
return (coercer__$1.cljs$core$IFn$_invoke$arity$1 ? coercer__$1.cljs$core$IFn$_invoke$arity$1(G__22519) : coercer__$1.call(null,G__22519));
})();
if(cljs.core.truth_(schema.utils.error_QMARK_(v))){
return v;
} else {
var G__22520 = v;
return (walker.cljs$core$IFn$_invoke$arity$1 ? walker.cljs$core$IFn$_invoke$arity$1(G__22520) : walker.call(null,G__22520));
}
}catch (e22518){if((e22518 instanceof Object)){
var t = e22518;
return schema.utils.error(schema.utils.make_ValidationError(s,x,(new cljs.core.Delay(((function (t,coercer__$1,temp__4421__auto__,walker,validate__10106__auto__,ufv___22522,output_schema22504_22523,input_schema22505_22524,input_checker22506_22525,output_checker22507_22526){
return (function (){
return t;
});})(t,coercer__$1,temp__4421__auto__,walker,validate__10106__auto__,ufv___22522,output_schema22504_22523,input_schema22505_22524,input_checker22506_22525,output_checker22507_22526))
,null)),null));
} else {
throw e22518;

}
}});
;})(coercer__$1,temp__4421__auto__,walker,validate__10106__auto__,ufv___22522,output_schema22504_22523,input_schema22505_22524,input_checker22506_22525,output_checker22507_22526))
} else {
return walker;
}
});})(validate__10106__auto__,ufv___22522,output_schema22504_22523,input_schema22505_22524,input_checker22506_22525,output_checker22507_22526))
),schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__10106__auto__)){
var temp__4423__auto___22530 = (function (){var G__22521 = o__10109__auto__;
return (output_checker22507_22526.cljs$core$IFn$_invoke$arity$1 ? output_checker22507_22526.cljs$core$IFn$_invoke$arity$1(G__22521) : output_checker22507_22526.call(null,G__22521));
})();
if(cljs.core.truth_(temp__4423__auto___22530)){
var error__10108__auto___22531 = temp__4423__auto___22530;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10108__auto___22531], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema22504_22523,cljs.core.constant$keyword$value,o__10109__auto__,cljs.core.constant$keyword$error,error__10108__auto___22531], null));
} else {
}
} else {
}

return o__10109__auto__;
});})(ufv___22522,output_schema22504_22523,input_schema22505_22524,input_checker22506_22525,output_checker22507_22526))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer),schema.core.make_fn_schema(output_schema22504_22523,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22505_22524], null)));
var ufv___22544 = schema.utils.use_fn_validation;
var output_schema22533_22545 = schema.coerce.CoercionMatcher;
var input_schema22534_22546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null))], null);
var input_checker22535_22547 = schema.core.checker(input_schema22534_22546);
var output_checker22536_22548 = schema.core.checker(output_schema22533_22545);
/**
 * Inputs: [matchers :- [CoercionMatcher]]
 * Returns: CoercionMatcher
 * 
 * A matcher that takes the first match from matchers.
 */
schema.coerce.first_matcher = ((function (ufv___22544,output_schema22533_22545,input_schema22534_22546,input_checker22535_22547,output_checker22536_22548){
return (function schema$coerce$first_matcher(G__22537){
var validate__10106__auto__ = ufv___22544.get_cell();
if(cljs.core.truth_(validate__10106__auto__)){
var args__10107__auto___22549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22537], null);
var temp__4423__auto___22550 = (function (){var G__22541 = args__10107__auto___22549;
return (input_checker22535_22547.cljs$core$IFn$_invoke$arity$1 ? input_checker22535_22547.cljs$core$IFn$_invoke$arity$1(G__22541) : input_checker22535_22547.call(null,G__22541));
})();
if(cljs.core.truth_(temp__4423__auto___22550)){
var error__10108__auto___22551 = temp__4423__auto___22550;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10108__auto___22551], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema22534_22546,cljs.core.constant$keyword$value,args__10107__auto___22549,cljs.core.constant$keyword$error,error__10108__auto___22551], null));
} else {
}
} else {
}

var o__10109__auto__ = (function (){var matchers = G__22537;
while(true){
return ((function (validate__10106__auto__,ufv___22544,output_schema22533_22545,input_schema22534_22546,input_checker22535_22547,output_checker22536_22548){
return (function (schema__$1){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__10106__auto__,ufv___22544,output_schema22533_22545,input_schema22534_22546,input_checker22535_22547,output_checker22536_22548){
return (function (p1__22532_SHARP_){
var G__22542 = schema__$1;
return (p1__22532_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22532_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22542) : p1__22532_SHARP_.call(null,G__22542));
});})(validate__10106__auto__,ufv___22544,output_schema22533_22545,input_schema22534_22546,input_checker22535_22547,output_checker22536_22548))
,matchers));
});
;})(validate__10106__auto__,ufv___22544,output_schema22533_22545,input_schema22534_22546,input_checker22535_22547,output_checker22536_22548))
break;
}
})();
if(cljs.core.truth_(validate__10106__auto__)){
var temp__4423__auto___22552 = (function (){var G__22543 = o__10109__auto__;
return (output_checker22536_22548.cljs$core$IFn$_invoke$arity$1 ? output_checker22536_22548.cljs$core$IFn$_invoke$arity$1(G__22543) : output_checker22536_22548.call(null,G__22543));
})();
if(cljs.core.truth_(temp__4423__auto___22552)){
var error__10108__auto___22553 = temp__4423__auto___22552;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10108__auto___22553], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema22533_22545,cljs.core.constant$keyword$value,o__10109__auto__,cljs.core.constant$keyword$error,error__10108__auto___22553], null));
} else {
}
} else {
}

return o__10109__auto__;
});})(ufv___22544,output_schema22533_22545,input_schema22534_22546,input_checker22535_22547,output_checker22536_22548))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.first_matcher),schema.core.make_fn_schema(output_schema22533_22545,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22534_22546], null)));
schema.coerce.string__GT_keyword = (function schema$coerce$string__GT_keyword(s){
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
schema.coerce.string__GT_boolean = (function schema$coerce$string__GT_boolean(s){
if(typeof s === 'string'){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",clojure.string.lower_case(s));
} else {
return s;
}
});
schema.coerce.keyword_enum_matcher = (function schema$coerce$keyword_enum_matcher(schema__$1){
if(((schema__$1 instanceof schema.core.EnumSchema)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,schema__$1.vs))){
return schema.coerce.string__GT_keyword;
} else {
return null;
}
});
schema.coerce.set_matcher = (function schema$coerce$set_matcher(schema__$1){
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
schema.coerce.safe = (function schema$coerce$safe(f){
return (function (x){
try{var G__22557 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22557) : f.call(null,G__22557));
}catch (e22556){if((e22556 instanceof Object)){
var e = e22556;
return x;
} else {
throw e22556;

}
}});
});
/**
 * Returns instance of UUID if input is a string.
 * Note: in CLJS, this does not guarantee a specific UUID string representation,
 * similar to #uuid reader
 */
schema.coerce.string__GT_uuid = (function schema$coerce$string__GT_uuid(p1__22558_SHARP_){
if(typeof p1__22558_SHARP_ === 'string'){
return (new cljs.core.UUID(p1__22558_SHARP_));
} else {
return p1__22558_SHARP_;
}
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean,schema.core.Uuid,schema.coerce.string__GT_uuid], true, false)], 0));
/**
 * A matcher that coerces keywords and keyword enums from strings, and longs and doubles
 * from numbers on the JVM (without losing precision)
 */
schema.coerce.json_coercion_matcher = (function schema$coerce$json_coercion_matcher(schema__$1){
var or__4338__auto__ = (function (){var G__22562 = schema__$1;
return (schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__22562) : schema.coerce._PLUS_json_coercions_PLUS_.call(null,G__22562));
})();
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = schema.coerce.keyword_enum_matcher(schema__$1);
if(cljs.core.truth_(or__4338__auto____$1)){
return or__4338__auto____$1;
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
schema.coerce.string_coercion_matcher = (function schema$coerce$string_coercion_matcher(schema__$1){
var or__4338__auto__ = (function (){var G__22566 = schema__$1;
return (schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__22566) : schema.coerce._PLUS_string_coercions_PLUS_.call(null,G__22566));
})();
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return schema.coerce.keyword_enum_matcher(schema__$1);
}
});
