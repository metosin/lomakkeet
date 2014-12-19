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
var G__33634 = p1__6126__6127__auto__;
if(G__33634){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__33634.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__33634.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__33634);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__33634);
}
})], null));
/**
* A function from schema to coercion function, or nil if no special coercion is needed.
* The returned function is applied to the corresponding data before validation (or walking/
* coercion of its sub-schemas, if applicable)
*/
schema.coerce.CoercionMatcher = schema.core.make_fn_schema(schema.core.maybe(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___33653 = schema.utils.use_fn_validation;
var output_schema33635_33654 = schema.core.Any;
var input_schema33636_33655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.coerce.CoercionMatcher,new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null))], null);
var input_checker33637_33656 = schema.core.checker(input_schema33636_33655);
var output_checker33638_33657 = schema.core.checker(output_schema33635_33654);
/**
* Inputs: [schema coercion-matcher :- CoercionMatcher]
* 
* Produce a function that simultaneously coerces and validates a datum.
*/
schema.coerce.coercer = ((function (ufv___33653,output_schema33635_33654,input_schema33636_33655,input_checker33637_33656,output_checker33638_33657){
return (function coercer(G__33639,G__33640){
var validate__6096__auto__ = ufv___33653.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___33658 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33639,G__33640], null);
var temp__4126__auto___33659 = (function (){var G__33647 = args__6097__auto___33658;
return (input_checker33637_33656.cljs$core$IFn$_invoke$arity$1 ? input_checker33637_33656.cljs$core$IFn$_invoke$arity$1(G__33647) : input_checker33637_33656.call(null,G__33647));
})();
if(cljs.core.truth_(temp__4126__auto___33659)){
var error__6098__auto___33660 = temp__4126__auto___33659;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___33660], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___33660,cljs.core.constant$keyword$23,args__6097__auto___33658,cljs.core.constant$keyword$24,input_schema33636_33655,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var schema__$1 = G__33639;
var coercion_matcher = G__33640;
while(true){
return schema.core.start_walker(schema.utils.memoize_id(((function (validate__6096__auto__,ufv___33653,output_schema33635_33654,input_schema33636_33655,input_checker33637_33656,output_checker33638_33657){
return (function (s){
var walker = schema.core.walker(s);
var temp__4124__auto__ = (function (){var G__33648 = s;
return (coercion_matcher.cljs$core$IFn$_invoke$arity$1 ? coercion_matcher.cljs$core$IFn$_invoke$arity$1(G__33648) : coercion_matcher.call(null,G__33648));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var coercer__$1 = temp__4124__auto__;
return ((function (coercer__$1,temp__4124__auto__,walker,validate__6096__auto__,ufv___33653,output_schema33635_33654,input_schema33636_33655,input_checker33637_33656,output_checker33638_33657){
return (function (x){
try{var v = (function (){var G__33650 = x;
return (coercer__$1.cljs$core$IFn$_invoke$arity$1 ? coercer__$1.cljs$core$IFn$_invoke$arity$1(G__33650) : coercer__$1.call(null,G__33650));
})();
if(schema.utils.error_QMARK_(v)){
return v;
} else {
var G__33651 = v;
return (walker.cljs$core$IFn$_invoke$arity$1 ? walker.cljs$core$IFn$_invoke$arity$1(G__33651) : walker.call(null,G__33651));
}
}catch (e33649){if((e33649 instanceof Object)){
var t = e33649;
return schema.utils.error(schema.utils.__GT_ValidationError(s,x,(new cljs.core.Delay(((function (t,coercer__$1,temp__4124__auto__,walker,validate__6096__auto__,ufv___33653,output_schema33635_33654,input_schema33636_33655,input_checker33637_33656,output_checker33638_33657){
return (function (){
return t;
});})(t,coercer__$1,temp__4124__auto__,walker,validate__6096__auto__,ufv___33653,output_schema33635_33654,input_schema33636_33655,input_checker33637_33656,output_checker33638_33657))
,null)),null));
} else {
throw e33649;

}
}});
;})(coercer__$1,temp__4124__auto__,walker,validate__6096__auto__,ufv___33653,output_schema33635_33654,input_schema33636_33655,input_checker33637_33656,output_checker33638_33657))
} else {
return walker;
}
});})(validate__6096__auto__,ufv___33653,output_schema33635_33654,input_schema33636_33655,input_checker33637_33656,output_checker33638_33657))
),schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___33661 = (function (){var G__33652 = o__6099__auto__;
return (output_checker33638_33657.cljs$core$IFn$_invoke$arity$1 ? output_checker33638_33657.cljs$core$IFn$_invoke$arity$1(G__33652) : output_checker33638_33657.call(null,G__33652));
})();
if(cljs.core.truth_(temp__4126__auto___33661)){
var error__6098__auto___33662 = temp__4126__auto___33661;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___33662], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___33662,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema33635_33654,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___33653,output_schema33635_33654,input_schema33636_33655,input_checker33637_33656,output_checker33638_33657))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer),schema.core.make_fn_schema(output_schema33635_33654,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33636_33655], null)));
var ufv___33675 = schema.utils.use_fn_validation;
var output_schema33664_33676 = schema.coerce.CoercionMatcher;
var input_schema33665_33677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null))], null);
var input_checker33666_33678 = schema.core.checker(input_schema33665_33677);
var output_checker33667_33679 = schema.core.checker(output_schema33664_33676);
/**
* Inputs: [matchers :- [CoercionMatcher]]
* Returns: CoercionMatcher
* 
* A matcher that takes the first match from matchers.
*/
schema.coerce.first_matcher = ((function (ufv___33675,output_schema33664_33676,input_schema33665_33677,input_checker33666_33678,output_checker33667_33679){
return (function first_matcher(G__33668){
var validate__6096__auto__ = ufv___33675.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___33680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33668], null);
var temp__4126__auto___33681 = (function (){var G__33672 = args__6097__auto___33680;
return (input_checker33666_33678.cljs$core$IFn$_invoke$arity$1 ? input_checker33666_33678.cljs$core$IFn$_invoke$arity$1(G__33672) : input_checker33666_33678.call(null,G__33672));
})();
if(cljs.core.truth_(temp__4126__auto___33681)){
var error__6098__auto___33682 = temp__4126__auto___33681;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___33682], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___33682,cljs.core.constant$keyword$23,args__6097__auto___33680,cljs.core.constant$keyword$24,input_schema33665_33677,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var matchers = G__33668;
while(true){
return ((function (validate__6096__auto__,ufv___33675,output_schema33664_33676,input_schema33665_33677,input_checker33666_33678,output_checker33667_33679){
return (function (schema__$1){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__6096__auto__,ufv___33675,output_schema33664_33676,input_schema33665_33677,input_checker33666_33678,output_checker33667_33679){
return (function (p1__33663_SHARP_){
var G__33673 = schema__$1;
return (p1__33663_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33663_SHARP_.cljs$core$IFn$_invoke$arity$1(G__33673) : p1__33663_SHARP_.call(null,G__33673));
});})(validate__6096__auto__,ufv___33675,output_schema33664_33676,input_schema33665_33677,input_checker33666_33678,output_checker33667_33679))
,matchers));
});
;})(validate__6096__auto__,ufv___33675,output_schema33664_33676,input_schema33665_33677,input_checker33666_33678,output_checker33667_33679))
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___33683 = (function (){var G__33674 = o__6099__auto__;
return (output_checker33667_33679.cljs$core$IFn$_invoke$arity$1 ? output_checker33667_33679.cljs$core$IFn$_invoke$arity$1(G__33674) : output_checker33667_33679.call(null,G__33674));
})();
if(cljs.core.truth_(temp__4126__auto___33683)){
var error__6098__auto___33684 = temp__4126__auto___33683;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___33684], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___33684,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema33664_33676,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___33675,output_schema33664_33676,input_schema33665_33677,input_checker33666_33678,output_checker33667_33679))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.first_matcher),schema.core.make_fn_schema(output_schema33664_33676,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33665_33677], null)));
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
try{var G__33688 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33688) : f.call(null,G__33688));
}catch (e33687){if((e33687 instanceof Object)){
var e = e33687;
return x;
} else {
throw e33687;

}
}});
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean], true, false)], 0));
/**
* A matcher that coerces keywords and keyword enums from strings, and longs and doubles
* from numbers on the JVM (without losing precision)
*/
schema.coerce.json_coercion_matcher = (function json_coercion_matcher(schema__$1){
var or__3628__auto__ = (function (){var G__33692 = schema__$1;
return (schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__33692) : schema.coerce._PLUS_json_coercions_PLUS_.call(null,G__33692));
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
var or__3628__auto__ = (function (){var G__33696 = schema__$1;
return (schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__33696) : schema.coerce._PLUS_string_coercions_PLUS_.call(null,G__33696));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return schema.coerce.keyword_enum_matcher(schema__$1);
}
});
