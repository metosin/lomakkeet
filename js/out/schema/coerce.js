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
schema.coerce.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$79,(function (p1__12611__12612__auto__){
var G__36718 = p1__12611__12612__auto__;
if(G__36718){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__36718.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__36718.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__36718);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__36718);
}
})], null));
/**
* A function from schema to coercion function, or nil if no special coercion is needed.
* The returned function is applied to the corresponding data before validation (or walking/
* coercion of its sub-schemas, if applicable)
*/
schema.coerce.CoercionMatcher = schema.core.make_fn_schema(schema.core.maybe(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___36737 = schema.utils.use_fn_validation;
var output_schema36719_36738 = schema.core.Any;
var input_schema36720_36739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.coerce.CoercionMatcher,new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null))], null);
var input_checker36721_36740 = schema.core.checker(input_schema36720_36739);
var output_checker36722_36741 = schema.core.checker(output_schema36719_36738);
/**
* Inputs: [schema coercion-matcher :- CoercionMatcher]
* 
* Produce a function that simultaneously coerces and validates a datum.
*/
schema.coerce.coercer = ((function (ufv___36737,output_schema36719_36738,input_schema36720_36739,input_checker36721_36740,output_checker36722_36741){
return (function coercer(G__36723,G__36724){
var validate__12581__auto__ = ufv___36737.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___36742 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36723,G__36724], null);
var temp__4126__auto___36743 = (function (){var G__36731 = args__12582__auto___36742;
return (input_checker36721_36740.cljs$core$IFn$_invoke$arity$1 ? input_checker36721_36740.cljs$core$IFn$_invoke$arity$1(G__36731) : input_checker36721_36740.call(null,G__36731));
})();
if(cljs.core.truth_(temp__4126__auto___36743)){
var error__12583__auto___36744 = temp__4126__auto___36743;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___36744], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___36744,cljs.core.constant$keyword$66,args__12582__auto___36742,cljs.core.constant$keyword$67,input_schema36720_36739,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var schema__$1 = G__36723;
var coercion_matcher = G__36724;
while(true){
return schema.core.start_walker(schema.utils.memoize_id(((function (validate__12581__auto__,ufv___36737,output_schema36719_36738,input_schema36720_36739,input_checker36721_36740,output_checker36722_36741){
return (function (s){
var walker = schema.core.walker(s);
var temp__4124__auto__ = (function (){var G__36732 = s;
return (coercion_matcher.cljs$core$IFn$_invoke$arity$1 ? coercion_matcher.cljs$core$IFn$_invoke$arity$1(G__36732) : coercion_matcher.call(null,G__36732));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var coercer__$1 = temp__4124__auto__;
return ((function (coercer__$1,temp__4124__auto__,walker,validate__12581__auto__,ufv___36737,output_schema36719_36738,input_schema36720_36739,input_checker36721_36740,output_checker36722_36741){
return (function (x){
try{var v = (function (){var G__36734 = x;
return (coercer__$1.cljs$core$IFn$_invoke$arity$1 ? coercer__$1.cljs$core$IFn$_invoke$arity$1(G__36734) : coercer__$1.call(null,G__36734));
})();
if(schema.utils.error_QMARK_(v)){
return v;
} else {
var G__36735 = v;
return (walker.cljs$core$IFn$_invoke$arity$1 ? walker.cljs$core$IFn$_invoke$arity$1(G__36735) : walker.call(null,G__36735));
}
}catch (e36733){if((e36733 instanceof Object)){
var t = e36733;
return schema.utils.error(schema.utils.__GT_ValidationError(s,x,(new cljs.core.Delay(((function (t,coercer__$1,temp__4124__auto__,walker,validate__12581__auto__,ufv___36737,output_schema36719_36738,input_schema36720_36739,input_checker36721_36740,output_checker36722_36741){
return (function (){
return t;
});})(t,coercer__$1,temp__4124__auto__,walker,validate__12581__auto__,ufv___36737,output_schema36719_36738,input_schema36720_36739,input_checker36721_36740,output_checker36722_36741))
,null)),null));
} else {
throw e36733;

}
}});
;})(coercer__$1,temp__4124__auto__,walker,validate__12581__auto__,ufv___36737,output_schema36719_36738,input_schema36720_36739,input_checker36721_36740,output_checker36722_36741))
} else {
return walker;
}
});})(validate__12581__auto__,ufv___36737,output_schema36719_36738,input_schema36720_36739,input_checker36721_36740,output_checker36722_36741))
),schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___36745 = (function (){var G__36736 = o__12584__auto__;
return (output_checker36722_36741.cljs$core$IFn$_invoke$arity$1 ? output_checker36722_36741.cljs$core$IFn$_invoke$arity$1(G__36736) : output_checker36722_36741.call(null,G__36736));
})();
if(cljs.core.truth_(temp__4126__auto___36745)){
var error__12583__auto___36746 = temp__4126__auto___36745;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___36746], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___36746,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema36719_36738,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___36737,output_schema36719_36738,input_schema36720_36739,input_checker36721_36740,output_checker36722_36741))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer),schema.core.make_fn_schema(output_schema36719_36738,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36720_36739], null)));
var ufv___36759 = schema.utils.use_fn_validation;
var output_schema36748_36760 = schema.coerce.CoercionMatcher;
var input_schema36749_36761 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null))], null);
var input_checker36750_36762 = schema.core.checker(input_schema36749_36761);
var output_checker36751_36763 = schema.core.checker(output_schema36748_36760);
/**
* Inputs: [matchers :- [CoercionMatcher]]
* Returns: CoercionMatcher
* 
* A matcher that takes the first match from matchers.
*/
schema.coerce.first_matcher = ((function (ufv___36759,output_schema36748_36760,input_schema36749_36761,input_checker36750_36762,output_checker36751_36763){
return (function first_matcher(G__36752){
var validate__12581__auto__ = ufv___36759.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___36764 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36752], null);
var temp__4126__auto___36765 = (function (){var G__36756 = args__12582__auto___36764;
return (input_checker36750_36762.cljs$core$IFn$_invoke$arity$1 ? input_checker36750_36762.cljs$core$IFn$_invoke$arity$1(G__36756) : input_checker36750_36762.call(null,G__36756));
})();
if(cljs.core.truth_(temp__4126__auto___36765)){
var error__12583__auto___36766 = temp__4126__auto___36765;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___36766], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___36766,cljs.core.constant$keyword$66,args__12582__auto___36764,cljs.core.constant$keyword$67,input_schema36749_36761,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var matchers = G__36752;
while(true){
return ((function (validate__12581__auto__,ufv___36759,output_schema36748_36760,input_schema36749_36761,input_checker36750_36762,output_checker36751_36763){
return (function (schema__$1){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12581__auto__,ufv___36759,output_schema36748_36760,input_schema36749_36761,input_checker36750_36762,output_checker36751_36763){
return (function (p1__36747_SHARP_){
var G__36757 = schema__$1;
return (p1__36747_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36747_SHARP_.cljs$core$IFn$_invoke$arity$1(G__36757) : p1__36747_SHARP_.call(null,G__36757));
});})(validate__12581__auto__,ufv___36759,output_schema36748_36760,input_schema36749_36761,input_checker36750_36762,output_checker36751_36763))
,matchers));
});
;})(validate__12581__auto__,ufv___36759,output_schema36748_36760,input_schema36749_36761,input_checker36750_36762,output_checker36751_36763))
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___36767 = (function (){var G__36758 = o__12584__auto__;
return (output_checker36751_36763.cljs$core$IFn$_invoke$arity$1 ? output_checker36751_36763.cljs$core$IFn$_invoke$arity$1(G__36758) : output_checker36751_36763.call(null,G__36758));
})();
if(cljs.core.truth_(temp__4126__auto___36767)){
var error__12583__auto___36768 = temp__4126__auto___36767;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___36768], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___36768,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema36748_36760,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___36759,output_schema36748_36760,input_schema36749_36761,input_checker36750_36762,output_checker36751_36763))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.first_matcher),schema.core.make_fn_schema(output_schema36748_36760,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36749_36761], null)));
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
try{var G__36772 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36772) : f.call(null,G__36772));
}catch (e36771){if((e36771 instanceof Object)){
var e = e36771;
return x;
} else {
throw e36771;

}
}});
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean], true, false)], 0));
/**
* A matcher that coerces keywords and keyword enums from strings, and longs and doubles
* from numbers on the JVM (without losing precision)
*/
schema.coerce.json_coercion_matcher = (function json_coercion_matcher(schema__$1){
var or__4251__auto__ = (function (){var G__36776 = schema__$1;
return (schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__36776) : schema.coerce._PLUS_json_coercions_PLUS_.call(null,G__36776));
})();
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = schema.coerce.keyword_enum_matcher(schema__$1);
if(cljs.core.truth_(or__4251__auto____$1)){
return or__4251__auto____$1;
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
var or__4251__auto__ = (function (){var G__36780 = schema__$1;
return (schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__36780) : schema.coerce._PLUS_string_coercions_PLUS_.call(null,G__36780));
})();
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return schema.coerce.keyword_enum_matcher(schema__$1);
}
});
