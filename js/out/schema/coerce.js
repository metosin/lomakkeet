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
var G__36726 = p1__12611__12612__auto__;
if(G__36726){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__36726.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__36726.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__36726);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__36726);
}
})], null));
/**
* A function from schema to coercion function, or nil if no special coercion is needed.
* The returned function is applied to the corresponding data before validation (or walking/
* coercion of its sub-schemas, if applicable)
*/
schema.coerce.CoercionMatcher = schema.core.make_fn_schema(schema.core.maybe(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___36745 = schema.utils.use_fn_validation;
var output_schema36727_36746 = schema.core.Any;
var input_schema36728_36747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.coerce.CoercionMatcher,new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null))], null);
var input_checker36729_36748 = schema.core.checker(input_schema36728_36747);
var output_checker36730_36749 = schema.core.checker(output_schema36727_36746);
/**
* Inputs: [schema coercion-matcher :- CoercionMatcher]
* 
* Produce a function that simultaneously coerces and validates a datum.
*/
schema.coerce.coercer = ((function (ufv___36745,output_schema36727_36746,input_schema36728_36747,input_checker36729_36748,output_checker36730_36749){
return (function coercer(G__36731,G__36732){
var validate__12581__auto__ = ufv___36745.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___36750 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36731,G__36732], null);
var temp__4126__auto___36751 = (function (){var G__36739 = args__12582__auto___36750;
return (input_checker36729_36748.cljs$core$IFn$_invoke$arity$1 ? input_checker36729_36748.cljs$core$IFn$_invoke$arity$1(G__36739) : input_checker36729_36748.call(null,G__36739));
})();
if(cljs.core.truth_(temp__4126__auto___36751)){
var error__12583__auto___36752 = temp__4126__auto___36751;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___36752], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___36752,cljs.core.constant$keyword$66,args__12582__auto___36750,cljs.core.constant$keyword$67,input_schema36728_36747,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var schema__$1 = G__36731;
var coercion_matcher = G__36732;
while(true){
return schema.core.start_walker(schema.utils.memoize_id(((function (validate__12581__auto__,ufv___36745,output_schema36727_36746,input_schema36728_36747,input_checker36729_36748,output_checker36730_36749){
return (function (s){
var walker = schema.core.walker(s);
var temp__4124__auto__ = (function (){var G__36740 = s;
return (coercion_matcher.cljs$core$IFn$_invoke$arity$1 ? coercion_matcher.cljs$core$IFn$_invoke$arity$1(G__36740) : coercion_matcher.call(null,G__36740));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var coercer__$1 = temp__4124__auto__;
return ((function (coercer__$1,temp__4124__auto__,walker,validate__12581__auto__,ufv___36745,output_schema36727_36746,input_schema36728_36747,input_checker36729_36748,output_checker36730_36749){
return (function (x){
try{var v = (function (){var G__36742 = x;
return (coercer__$1.cljs$core$IFn$_invoke$arity$1 ? coercer__$1.cljs$core$IFn$_invoke$arity$1(G__36742) : coercer__$1.call(null,G__36742));
})();
if(schema.utils.error_QMARK_(v)){
return v;
} else {
var G__36743 = v;
return (walker.cljs$core$IFn$_invoke$arity$1 ? walker.cljs$core$IFn$_invoke$arity$1(G__36743) : walker.call(null,G__36743));
}
}catch (e36741){if((e36741 instanceof Object)){
var t = e36741;
return schema.utils.error(schema.utils.__GT_ValidationError(s,x,(new cljs.core.Delay(((function (t,coercer__$1,temp__4124__auto__,walker,validate__12581__auto__,ufv___36745,output_schema36727_36746,input_schema36728_36747,input_checker36729_36748,output_checker36730_36749){
return (function (){
return t;
});})(t,coercer__$1,temp__4124__auto__,walker,validate__12581__auto__,ufv___36745,output_schema36727_36746,input_schema36728_36747,input_checker36729_36748,output_checker36730_36749))
,null)),null));
} else {
throw e36741;

}
}});
;})(coercer__$1,temp__4124__auto__,walker,validate__12581__auto__,ufv___36745,output_schema36727_36746,input_schema36728_36747,input_checker36729_36748,output_checker36730_36749))
} else {
return walker;
}
});})(validate__12581__auto__,ufv___36745,output_schema36727_36746,input_schema36728_36747,input_checker36729_36748,output_checker36730_36749))
),schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___36753 = (function (){var G__36744 = o__12584__auto__;
return (output_checker36730_36749.cljs$core$IFn$_invoke$arity$1 ? output_checker36730_36749.cljs$core$IFn$_invoke$arity$1(G__36744) : output_checker36730_36749.call(null,G__36744));
})();
if(cljs.core.truth_(temp__4126__auto___36753)){
var error__12583__auto___36754 = temp__4126__auto___36753;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___36754], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___36754,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema36727_36746,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___36745,output_schema36727_36746,input_schema36728_36747,input_checker36729_36748,output_checker36730_36749))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer),schema.core.make_fn_schema(output_schema36727_36746,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36728_36747], null)));
var ufv___36767 = schema.utils.use_fn_validation;
var output_schema36756_36768 = schema.coerce.CoercionMatcher;
var input_schema36757_36769 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null))], null);
var input_checker36758_36770 = schema.core.checker(input_schema36757_36769);
var output_checker36759_36771 = schema.core.checker(output_schema36756_36768);
/**
* Inputs: [matchers :- [CoercionMatcher]]
* Returns: CoercionMatcher
* 
* A matcher that takes the first match from matchers.
*/
schema.coerce.first_matcher = ((function (ufv___36767,output_schema36756_36768,input_schema36757_36769,input_checker36758_36770,output_checker36759_36771){
return (function first_matcher(G__36760){
var validate__12581__auto__ = ufv___36767.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___36772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36760], null);
var temp__4126__auto___36773 = (function (){var G__36764 = args__12582__auto___36772;
return (input_checker36758_36770.cljs$core$IFn$_invoke$arity$1 ? input_checker36758_36770.cljs$core$IFn$_invoke$arity$1(G__36764) : input_checker36758_36770.call(null,G__36764));
})();
if(cljs.core.truth_(temp__4126__auto___36773)){
var error__12583__auto___36774 = temp__4126__auto___36773;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___36774], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___36774,cljs.core.constant$keyword$66,args__12582__auto___36772,cljs.core.constant$keyword$67,input_schema36757_36769,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var matchers = G__36760;
while(true){
return ((function (validate__12581__auto__,ufv___36767,output_schema36756_36768,input_schema36757_36769,input_checker36758_36770,output_checker36759_36771){
return (function (schema__$1){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12581__auto__,ufv___36767,output_schema36756_36768,input_schema36757_36769,input_checker36758_36770,output_checker36759_36771){
return (function (p1__36755_SHARP_){
var G__36765 = schema__$1;
return (p1__36755_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36755_SHARP_.cljs$core$IFn$_invoke$arity$1(G__36765) : p1__36755_SHARP_.call(null,G__36765));
});})(validate__12581__auto__,ufv___36767,output_schema36756_36768,input_schema36757_36769,input_checker36758_36770,output_checker36759_36771))
,matchers));
});
;})(validate__12581__auto__,ufv___36767,output_schema36756_36768,input_schema36757_36769,input_checker36758_36770,output_checker36759_36771))
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___36775 = (function (){var G__36766 = o__12584__auto__;
return (output_checker36759_36771.cljs$core$IFn$_invoke$arity$1 ? output_checker36759_36771.cljs$core$IFn$_invoke$arity$1(G__36766) : output_checker36759_36771.call(null,G__36766));
})();
if(cljs.core.truth_(temp__4126__auto___36775)){
var error__12583__auto___36776 = temp__4126__auto___36775;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___36776], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___36776,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema36756_36768,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___36767,output_schema36756_36768,input_schema36757_36769,input_checker36758_36770,output_checker36759_36771))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.first_matcher),schema.core.make_fn_schema(output_schema36756_36768,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36757_36769], null)));
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
try{var G__36780 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36780) : f.call(null,G__36780));
}catch (e36779){if((e36779 instanceof Object)){
var e = e36779;
return x;
} else {
throw e36779;

}
}});
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean], true, false)], 0));
/**
* A matcher that coerces keywords and keyword enums from strings, and longs and doubles
* from numbers on the JVM (without losing precision)
*/
schema.coerce.json_coercion_matcher = (function json_coercion_matcher(schema__$1){
var or__4251__auto__ = (function (){var G__36784 = schema__$1;
return (schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__36784) : schema.coerce._PLUS_json_coercions_PLUS_.call(null,G__36784));
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
var or__4251__auto__ = (function (){var G__36788 = schema__$1;
return (schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__36788) : schema.coerce._PLUS_string_coercions_PLUS_.call(null,G__36788));
})();
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return schema.coerce.keyword_enum_matcher(schema__$1);
}
});
