// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('schema.coerce');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('schema.core');
goog.require('schema.utils');
goog.require('clojure.string');
/**
 * A Schema for Schemas
 */
schema.coerce.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$proto_DASH_sym,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$proto_DASH_pred,(function (p1__10496__10497__auto__){
var G__22509 = p1__10496__10497__auto__;
if(G__22509){
var bit__5012__auto__ = null;
if(cljs.core.truth_((function (){var or__4338__auto__ = bit__5012__auto__;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return G__22509.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__22509.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__22509);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__22509);
}
})], null));
/**
 * A function from schema to coercion function, or nil if no special coercion is needed.
 * The returned function is applied to the corresponding data before validation (or walking/
 * coercion of its sub-schemas, if applicable)
 */
schema.coerce.CoercionMatcher = schema.core.make_fn_schema(schema.core.maybe(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___22528 = schema.utils.use_fn_validation;
var output_schema22510_22529 = schema.core.Any;
var input_schema22511_22530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.coerce.CoercionMatcher,new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null))], null);
var input_checker22512_22531 = schema.core.checker(input_schema22511_22530);
var output_checker22513_22532 = schema.core.checker(output_schema22510_22529);
/**
 * Inputs: [schema coercion-matcher :- CoercionMatcher]
 * 
 * Produce a function that simultaneously coerces and validates a datum.
 */
schema.coerce.coercer = ((function (ufv___22528,output_schema22510_22529,input_schema22511_22530,input_checker22512_22531,output_checker22513_22532){
return (function schema$coerce$coercer(G__22514,G__22515){
var validate__10112__auto__ = ufv___22528.get_cell();
if(cljs.core.truth_(validate__10112__auto__)){
var args__10113__auto___22533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22514,G__22515], null);
var temp__4425__auto___22534 = (function (){var G__22522 = args__10113__auto___22533;
return (input_checker22512_22531.cljs$core$IFn$_invoke$arity$1 ? input_checker22512_22531.cljs$core$IFn$_invoke$arity$1(G__22522) : input_checker22512_22531.call(null,G__22522));
})();
if(cljs.core.truth_(temp__4425__auto___22534)){
var error__10114__auto___22535 = temp__4425__auto___22534;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10114__auto___22535], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema22511_22530,cljs.core.constant$keyword$value,args__10113__auto___22533,cljs.core.constant$keyword$error,error__10114__auto___22535], null));
} else {
}
} else {
}

var o__10115__auto__ = (function (){var schema__$1 = G__22514;
var coercion_matcher = G__22515;
while(true){
return schema.core.start_walker(schema.utils.memoize_id(((function (validate__10112__auto__,ufv___22528,output_schema22510_22529,input_schema22511_22530,input_checker22512_22531,output_checker22513_22532){
return (function (s){
var walker = schema.core.walker(s);
var temp__4423__auto__ = (function (){var G__22523 = s;
return (coercion_matcher.cljs$core$IFn$_invoke$arity$1 ? coercion_matcher.cljs$core$IFn$_invoke$arity$1(G__22523) : coercion_matcher.call(null,G__22523));
})();
if(cljs.core.truth_(temp__4423__auto__)){
var coercer__$1 = temp__4423__auto__;
return ((function (coercer__$1,temp__4423__auto__,walker,validate__10112__auto__,ufv___22528,output_schema22510_22529,input_schema22511_22530,input_checker22512_22531,output_checker22513_22532){
return (function (x){
try{var v = (function (){var G__22525 = x;
return (coercer__$1.cljs$core$IFn$_invoke$arity$1 ? coercer__$1.cljs$core$IFn$_invoke$arity$1(G__22525) : coercer__$1.call(null,G__22525));
})();
if(cljs.core.truth_(schema.utils.error_QMARK_(v))){
return v;
} else {
var G__22526 = v;
return (walker.cljs$core$IFn$_invoke$arity$1 ? walker.cljs$core$IFn$_invoke$arity$1(G__22526) : walker.call(null,G__22526));
}
}catch (e22524){if((e22524 instanceof Object)){
var t = e22524;
return schema.utils.error(schema.utils.make_ValidationError(s,x,(new cljs.core.Delay(((function (t,coercer__$1,temp__4423__auto__,walker,validate__10112__auto__,ufv___22528,output_schema22510_22529,input_schema22511_22530,input_checker22512_22531,output_checker22513_22532){
return (function (){
return t;
});})(t,coercer__$1,temp__4423__auto__,walker,validate__10112__auto__,ufv___22528,output_schema22510_22529,input_schema22511_22530,input_checker22512_22531,output_checker22513_22532))
,null)),null));
} else {
throw e22524;

}
}});
;})(coercer__$1,temp__4423__auto__,walker,validate__10112__auto__,ufv___22528,output_schema22510_22529,input_schema22511_22530,input_checker22512_22531,output_checker22513_22532))
} else {
return walker;
}
});})(validate__10112__auto__,ufv___22528,output_schema22510_22529,input_schema22511_22530,input_checker22512_22531,output_checker22513_22532))
),schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__10112__auto__)){
var temp__4425__auto___22536 = (function (){var G__22527 = o__10115__auto__;
return (output_checker22513_22532.cljs$core$IFn$_invoke$arity$1 ? output_checker22513_22532.cljs$core$IFn$_invoke$arity$1(G__22527) : output_checker22513_22532.call(null,G__22527));
})();
if(cljs.core.truth_(temp__4425__auto___22536)){
var error__10114__auto___22537 = temp__4425__auto___22536;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10114__auto___22537], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema22510_22529,cljs.core.constant$keyword$value,o__10115__auto__,cljs.core.constant$keyword$error,error__10114__auto___22537], null));
} else {
}
} else {
}

return o__10115__auto__;
});})(ufv___22528,output_schema22510_22529,input_schema22511_22530,input_checker22512_22531,output_checker22513_22532))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer),schema.core.make_fn_schema(output_schema22510_22529,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22511_22530], null)));
var ufv___22550 = schema.utils.use_fn_validation;
var output_schema22539_22551 = schema.coerce.CoercionMatcher;
var input_schema22540_22552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null))], null);
var input_checker22541_22553 = schema.core.checker(input_schema22540_22552);
var output_checker22542_22554 = schema.core.checker(output_schema22539_22551);
/**
 * Inputs: [matchers :- [CoercionMatcher]]
 * Returns: CoercionMatcher
 * 
 * A matcher that takes the first match from matchers.
 */
schema.coerce.first_matcher = ((function (ufv___22550,output_schema22539_22551,input_schema22540_22552,input_checker22541_22553,output_checker22542_22554){
return (function schema$coerce$first_matcher(G__22543){
var validate__10112__auto__ = ufv___22550.get_cell();
if(cljs.core.truth_(validate__10112__auto__)){
var args__10113__auto___22555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22543], null);
var temp__4425__auto___22556 = (function (){var G__22547 = args__10113__auto___22555;
return (input_checker22541_22553.cljs$core$IFn$_invoke$arity$1 ? input_checker22541_22553.cljs$core$IFn$_invoke$arity$1(G__22547) : input_checker22541_22553.call(null,G__22547));
})();
if(cljs.core.truth_(temp__4425__auto___22556)){
var error__10114__auto___22557 = temp__4425__auto___22556;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10114__auto___22557], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema22540_22552,cljs.core.constant$keyword$value,args__10113__auto___22555,cljs.core.constant$keyword$error,error__10114__auto___22557], null));
} else {
}
} else {
}

var o__10115__auto__ = (function (){var matchers = G__22543;
while(true){
return ((function (validate__10112__auto__,ufv___22550,output_schema22539_22551,input_schema22540_22552,input_checker22541_22553,output_checker22542_22554){
return (function (schema__$1){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__10112__auto__,ufv___22550,output_schema22539_22551,input_schema22540_22552,input_checker22541_22553,output_checker22542_22554){
return (function (p1__22538_SHARP_){
var G__22548 = schema__$1;
return (p1__22538_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22538_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22548) : p1__22538_SHARP_.call(null,G__22548));
});})(validate__10112__auto__,ufv___22550,output_schema22539_22551,input_schema22540_22552,input_checker22541_22553,output_checker22542_22554))
,matchers));
});
;})(validate__10112__auto__,ufv___22550,output_schema22539_22551,input_schema22540_22552,input_checker22541_22553,output_checker22542_22554))
break;
}
})();
if(cljs.core.truth_(validate__10112__auto__)){
var temp__4425__auto___22558 = (function (){var G__22549 = o__10115__auto__;
return (output_checker22542_22554.cljs$core$IFn$_invoke$arity$1 ? output_checker22542_22554.cljs$core$IFn$_invoke$arity$1(G__22549) : output_checker22542_22554.call(null,G__22549));
})();
if(cljs.core.truth_(temp__4425__auto___22558)){
var error__10114__auto___22559 = temp__4425__auto___22558;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10114__auto___22559], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema22539_22551,cljs.core.constant$keyword$value,o__10115__auto__,cljs.core.constant$keyword$error,error__10114__auto___22559], null));
} else {
}
} else {
}

return o__10115__auto__;
});})(ufv___22550,output_schema22539_22551,input_schema22540_22552,input_checker22541_22553,output_checker22542_22554))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.first_matcher),schema.core.make_fn_schema(output_schema22539_22551,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22540_22552], null)));
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
try{var G__22563 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22563) : f.call(null,G__22563));
}catch (e22562){if((e22562 instanceof Object)){
var e = e22562;
return x;
} else {
throw e22562;

}
}});
});
/**
 * Returns instance of UUID if input is a string.
 * Note: in CLJS, this does not guarantee a specific UUID string representation,
 * similar to #uuid reader
 */
schema.coerce.string__GT_uuid = (function schema$coerce$string__GT_uuid(p1__22564_SHARP_){
if(typeof p1__22564_SHARP_ === 'string'){
return (new cljs.core.UUID(p1__22564_SHARP_));
} else {
return p1__22564_SHARP_;
}
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean,schema.core.Uuid,schema.coerce.string__GT_uuid], true, false)], 0));
/**
 * A matcher that coerces keywords and keyword enums from strings, and longs and doubles
 * from numbers on the JVM (without losing precision)
 */
schema.coerce.json_coercion_matcher = (function schema$coerce$json_coercion_matcher(schema__$1){
var or__4338__auto__ = (function (){var G__22568 = schema__$1;
return (schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__22568) : schema.coerce._PLUS_json_coercions_PLUS_.call(null,G__22568));
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
var or__4338__auto__ = (function (){var G__22572 = schema__$1;
return (schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__22572) : schema.coerce._PLUS_string_coercions_PLUS_.call(null,G__22572));
})();
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return schema.coerce.keyword_enum_matcher(schema__$1);
}
});
