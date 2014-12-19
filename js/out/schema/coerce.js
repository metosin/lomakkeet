// Compiled by ClojureScript 0.0-2496
goog.provide('schema.coerce');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('cljs.reader');
/**
* A Schema for Schemas
*/
schema.coerce.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$34,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$36,(function (p1__6126__6127__auto__){
var G__33646 = p1__6126__6127__auto__;
if(G__33646){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__33646.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__33646.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__33646);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__33646);
}
})], null));
/**
* A function from schema to coercion function, or nil if no special coercion is needed.
* The returned function is applied to the corresponding data before validation (or walking/
* coercion of its sub-schemas, if applicable)
*/
schema.coerce.CoercionMatcher = schema.core.make_fn_schema(schema.core.maybe(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___33665 = schema.utils.use_fn_validation;
var output_schema33647_33666 = schema.core.Any;
var input_schema33648_33667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.coerce.CoercionMatcher,new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null))], null);
var input_checker33649_33668 = schema.core.checker(input_schema33648_33667);
var output_checker33650_33669 = schema.core.checker(output_schema33647_33666);
/**
* Inputs: [schema coercion-matcher :- CoercionMatcher]
* 
* Produce a function that simultaneously coerces and validates a datum.
*/
schema.coerce.coercer = ((function (ufv___33665,output_schema33647_33666,input_schema33648_33667,input_checker33649_33668,output_checker33650_33669){
return (function coercer(G__33651,G__33652){
var validate__6096__auto__ = ufv___33665.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___33670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33651,G__33652], null);
var temp__4126__auto___33671 = (function (){var G__33659 = args__6097__auto___33670;
return (input_checker33649_33668.cljs$core$IFn$_invoke$arity$1 ? input_checker33649_33668.cljs$core$IFn$_invoke$arity$1(G__33659) : input_checker33649_33668.call(null,G__33659));
})();
if(cljs.core.truth_(temp__4126__auto___33671)){
var error__6098__auto___33672 = temp__4126__auto___33671;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___33672], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___33672,cljs.core.constant$keyword$23,args__6097__auto___33670,cljs.core.constant$keyword$24,input_schema33648_33667,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var schema__$1 = G__33651;
var coercion_matcher = G__33652;
while(true){
return schema.core.start_walker(schema.utils.memoize_id(((function (validate__6096__auto__,ufv___33665,output_schema33647_33666,input_schema33648_33667,input_checker33649_33668,output_checker33650_33669){
return (function (s){
var walker = schema.core.walker(s);
var temp__4124__auto__ = (function (){var G__33660 = s;
return (coercion_matcher.cljs$core$IFn$_invoke$arity$1 ? coercion_matcher.cljs$core$IFn$_invoke$arity$1(G__33660) : coercion_matcher.call(null,G__33660));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var coercer__$1 = temp__4124__auto__;
return ((function (coercer__$1,temp__4124__auto__,walker,validate__6096__auto__,ufv___33665,output_schema33647_33666,input_schema33648_33667,input_checker33649_33668,output_checker33650_33669){
return (function (x){
try{var v = (function (){var G__33662 = x;
return (coercer__$1.cljs$core$IFn$_invoke$arity$1 ? coercer__$1.cljs$core$IFn$_invoke$arity$1(G__33662) : coercer__$1.call(null,G__33662));
})();
if(schema.utils.error_QMARK_(v)){
return v;
} else {
var G__33663 = v;
return (walker.cljs$core$IFn$_invoke$arity$1 ? walker.cljs$core$IFn$_invoke$arity$1(G__33663) : walker.call(null,G__33663));
}
}catch (e33661){if((e33661 instanceof Object)){
var t = e33661;
return schema.utils.error(schema.utils.__GT_ValidationError(s,x,(new cljs.core.Delay(((function (t,coercer__$1,temp__4124__auto__,walker,validate__6096__auto__,ufv___33665,output_schema33647_33666,input_schema33648_33667,input_checker33649_33668,output_checker33650_33669){
return (function (){
return t;
});})(t,coercer__$1,temp__4124__auto__,walker,validate__6096__auto__,ufv___33665,output_schema33647_33666,input_schema33648_33667,input_checker33649_33668,output_checker33650_33669))
,null)),null));
} else {
throw e33661;

}
}});
;})(coercer__$1,temp__4124__auto__,walker,validate__6096__auto__,ufv___33665,output_schema33647_33666,input_schema33648_33667,input_checker33649_33668,output_checker33650_33669))
} else {
return walker;
}
});})(validate__6096__auto__,ufv___33665,output_schema33647_33666,input_schema33648_33667,input_checker33649_33668,output_checker33650_33669))
),schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___33673 = (function (){var G__33664 = o__6099__auto__;
return (output_checker33650_33669.cljs$core$IFn$_invoke$arity$1 ? output_checker33650_33669.cljs$core$IFn$_invoke$arity$1(G__33664) : output_checker33650_33669.call(null,G__33664));
})();
if(cljs.core.truth_(temp__4126__auto___33673)){
var error__6098__auto___33674 = temp__4126__auto___33673;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___33674], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___33674,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema33647_33666,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___33665,output_schema33647_33666,input_schema33648_33667,input_checker33649_33668,output_checker33650_33669))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer),schema.core.make_fn_schema(output_schema33647_33666,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33648_33667], null)));
var ufv___33687 = schema.utils.use_fn_validation;
var output_schema33676_33688 = schema.coerce.CoercionMatcher;
var input_schema33677_33689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null))], null);
var input_checker33678_33690 = schema.core.checker(input_schema33677_33689);
var output_checker33679_33691 = schema.core.checker(output_schema33676_33688);
/**
* Inputs: [matchers :- [CoercionMatcher]]
* Returns: CoercionMatcher
* 
* A matcher that takes the first match from matchers.
*/
schema.coerce.first_matcher = ((function (ufv___33687,output_schema33676_33688,input_schema33677_33689,input_checker33678_33690,output_checker33679_33691){
return (function first_matcher(G__33680){
var validate__6096__auto__ = ufv___33687.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___33692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33680], null);
var temp__4126__auto___33693 = (function (){var G__33684 = args__6097__auto___33692;
return (input_checker33678_33690.cljs$core$IFn$_invoke$arity$1 ? input_checker33678_33690.cljs$core$IFn$_invoke$arity$1(G__33684) : input_checker33678_33690.call(null,G__33684));
})();
if(cljs.core.truth_(temp__4126__auto___33693)){
var error__6098__auto___33694 = temp__4126__auto___33693;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___33694], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___33694,cljs.core.constant$keyword$23,args__6097__auto___33692,cljs.core.constant$keyword$24,input_schema33677_33689,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var matchers = G__33680;
while(true){
return ((function (validate__6096__auto__,ufv___33687,output_schema33676_33688,input_schema33677_33689,input_checker33678_33690,output_checker33679_33691){
return (function (schema__$1){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__6096__auto__,ufv___33687,output_schema33676_33688,input_schema33677_33689,input_checker33678_33690,output_checker33679_33691){
return (function (p1__33675_SHARP_){
var G__33685 = schema__$1;
return (p1__33675_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33675_SHARP_.cljs$core$IFn$_invoke$arity$1(G__33685) : p1__33675_SHARP_.call(null,G__33685));
});})(validate__6096__auto__,ufv___33687,output_schema33676_33688,input_schema33677_33689,input_checker33678_33690,output_checker33679_33691))
,matchers));
});
;})(validate__6096__auto__,ufv___33687,output_schema33676_33688,input_schema33677_33689,input_checker33678_33690,output_checker33679_33691))
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___33695 = (function (){var G__33686 = o__6099__auto__;
return (output_checker33679_33691.cljs$core$IFn$_invoke$arity$1 ? output_checker33679_33691.cljs$core$IFn$_invoke$arity$1(G__33686) : output_checker33679_33691.call(null,G__33686));
})();
if(cljs.core.truth_(temp__4126__auto___33695)){
var error__6098__auto___33696 = temp__4126__auto___33695;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___33696], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___33696,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema33676_33688,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___33687,output_schema33676_33688,input_schema33677_33689,input_checker33678_33690,output_checker33679_33691))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.first_matcher),schema.core.make_fn_schema(output_schema33676_33688,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33677_33689], null)));
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
try{var G__33700 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33700) : f.call(null,G__33700));
}catch (e33699){if((e33699 instanceof Object)){
var e = e33699;
return x;
} else {
throw e33699;

}
}});
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean], true, false)], 0));
/**
* A matcher that coerces keywords and keyword enums from strings, and longs and doubles
* from numbers on the JVM (without losing precision)
*/
schema.coerce.json_coercion_matcher = (function json_coercion_matcher(schema__$1){
var or__3628__auto__ = (function (){var G__33704 = schema__$1;
return (schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__33704) : schema.coerce._PLUS_json_coercions_PLUS_.call(null,G__33704));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = schema.coerce.keyword_enum_matcher(schema__$1);
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
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
var or__3628__auto__ = (function (){var G__33708 = schema__$1;
return (schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__33708) : schema.coerce._PLUS_string_coercions_PLUS_.call(null,G__33708));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return schema.coerce.keyword_enum_matcher(schema__$1);
}
});
