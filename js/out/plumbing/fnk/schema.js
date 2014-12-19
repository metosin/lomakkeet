// Compiled by ClojureScript 0.0-2496
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$34,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$36,(function (p1__6126__6127__auto__){
var G__22145 = p1__6126__6127__auto__;
if(G__22145){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__22145.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__22145.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__22145);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__22145);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22146_SHARP_){
return (cljs.core.val(p1__22146_SHARP_) > (1));
}),cljs.core.frequencies(things)));
if(cljs.core.empty_QMARK_(repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}

var vec__22148 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22148,(1),null);
var p = vec__22148;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$22,cljs.core.constant$keyword$51,cljs.core.constant$keyword$49,k,cljs.core.constant$keyword$50,m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___22158 = schema.utils.use_fn_validation;
var output_schema22149_22159 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema22150_22160 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker22151_22161 = schema.core.checker(input_schema22150_22160);
var output_checker22152_22162 = schema.core.checker(output_schema22149_22159);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___22158,output_schema22149_22159,input_schema22150_22160,input_checker22151_22161,output_checker22152_22162){
return (function unwrap_schema_form_key(G__22153){
var validate__6096__auto__ = ufv___22158.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22153], null);
var temp__4126__auto___22164 = (function (){var G__22156 = args__6097__auto___22163;
return (input_checker22151_22161.cljs$core$IFn$_invoke$arity$1 ? input_checker22151_22161.cljs$core$IFn$_invoke$arity$1(G__22156) : input_checker22151_22161.call(null,G__22156));
})();
if(cljs.core.truth_(temp__4126__auto___22164)){
var error__6098__auto___22165 = temp__4126__auto___22164;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22165], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22165,cljs.core.constant$keyword$23,args__6097__auto___22163,cljs.core.constant$keyword$24,input_schema22150_22160,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var k = G__22153;
while(true){
if(schema.core.specific_key_QMARK_(k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else {
if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22166 = (function (){var G__22157 = o__6099__auto__;
return (output_checker22152_22162.cljs$core$IFn$_invoke$arity$1 ? output_checker22152_22162.cljs$core$IFn$_invoke$arity$1(G__22157) : output_checker22152_22162.call(null,G__22157));
})();
if(cljs.core.truth_(temp__4126__auto___22166)){
var error__6098__auto___22167 = temp__4126__auto___22166;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22167], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22167,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22149_22159,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22158,output_schema22149_22159,input_schema22150_22160,input_checker22151_22161,output_checker22152_22162))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema22149_22159,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22150_22160], null)));
var ufv___22177 = schema.utils.use_fn_validation;
var output_schema22168_22178 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema22169_22179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker22170_22180 = schema.core.checker(input_schema22169_22179);
var output_checker22171_22181 = schema.core.checker(output_schema22168_22178);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___22177,output_schema22168_22178,input_schema22169_22179,input_checker22170_22180,output_checker22171_22181){
return (function explicit_schema_key_map(G__22172){
var validate__6096__auto__ = ufv___22177.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22172], null);
var temp__4126__auto___22183 = (function (){var G__22175 = args__6097__auto___22182;
return (input_checker22170_22180.cljs$core$IFn$_invoke$arity$1 ? input_checker22170_22180.cljs$core$IFn$_invoke$arity$1(G__22175) : input_checker22170_22180.call(null,G__22175));
})();
if(cljs.core.truth_(temp__4126__auto___22183)){
var error__6098__auto___22184 = temp__4126__auto___22183;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22184], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22184,cljs.core.constant$keyword$23,args__6097__auto___22182,cljs.core.constant$keyword$24,input_schema22169_22179,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var s = G__22172;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22185 = (function (){var G__22176 = o__6099__auto__;
return (output_checker22171_22181.cljs$core$IFn$_invoke$arity$1 ? output_checker22171_22181.cljs$core$IFn$_invoke$arity$1(G__22176) : output_checker22171_22181.call(null,G__22176));
})();
if(cljs.core.truth_(temp__4126__auto___22185)){
var error__6098__auto___22186 = temp__4126__auto___22185;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22186], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22186,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22168_22178,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22177,output_schema22168_22178,input_schema22169_22179,input_checker22170_22180,output_checker22171_22181))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema22168_22178,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22169_22179], null)));
var ufv___22196 = schema.utils.use_fn_validation;
var output_schema22187_22197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema22188_22198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker22189_22199 = schema.core.checker(input_schema22188_22198);
var output_checker22190_22200 = schema.core.checker(output_schema22187_22197);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___22196,output_schema22187_22197,input_schema22188_22198,input_checker22189_22199,output_checker22190_22200){
return (function split_schema_keys(G__22191){
var validate__6096__auto__ = ufv___22196.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22201 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22191], null);
var temp__4126__auto___22202 = (function (){var G__22194 = args__6097__auto___22201;
return (input_checker22189_22199.cljs$core$IFn$_invoke$arity$1 ? input_checker22189_22199.cljs$core$IFn$_invoke$arity$1(G__22194) : input_checker22189_22199.call(null,G__22194));
})();
if(cljs.core.truth_(temp__4126__auto___22202)){
var error__6098__auto___22203 = temp__4126__auto___22202;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22203], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22203,cljs.core.constant$keyword$23,args__6097__auto___22201,cljs.core.constant$keyword$24,input_schema22188_22198,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var s = G__22191;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22204 = (function (){var G__22195 = o__6099__auto__;
return (output_checker22190_22200.cljs$core$IFn$_invoke$arity$1 ? output_checker22190_22200.cljs$core$IFn$_invoke$arity$1(G__22195) : output_checker22190_22200.call(null,G__22195));
})();
if(cljs.core.truth_(temp__4126__auto___22204)){
var error__6098__auto___22205 = temp__4126__auto___22204;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22205], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22205,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22187_22197,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22196,output_schema22187_22197,input_schema22188_22198,input_checker22189_22199,output_checker22190_22200))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema22187_22197,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22188_22198], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22214){
var vec__22215 = p__22214;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22215,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22215,(1),null);
var pk = (function (){var G__22216 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__22216) : key_project.call(null,G__22216));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__22217 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22217,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22217,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22218 = ok;
var G__22219 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__22218,G__22219) : key_combine.call(null,G__22218,G__22219));
})(),(function (){var G__22220 = ov;
var G__22221 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__22220,G__22221) : val_combine.call(null,G__22220,G__22221));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__22222){
var key_project = cljs.core.first(arglist__22222);
arglist__22222 = cljs.core.next(arglist__22222);
var key_combine = cljs.core.first(arglist__22222);
arglist__22222 = cljs.core.next(arglist__22222);
var val_combine = cljs.core.first(arglist__22222);
var maps = cljs.core.rest(arglist__22222);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___22236 = schema.utils.use_fn_validation;
var output_schema22224_22237 = plumbing.fnk.schema.InputSchema;
var input_schema22225_22238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker22226_22239 = schema.core.checker(input_schema22225_22238);
var output_checker22227_22240 = schema.core.checker(output_schema22224_22237);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___22236,output_schema22224_22237,input_schema22225_22238,input_checker22226_22239,output_checker22227_22240){
return (function union_input_schemata(G__22228,G__22229){
var validate__6096__auto__ = ufv___22236.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22241 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22228,G__22229], null);
var temp__4126__auto___22242 = (function (){var G__22234 = args__6097__auto___22241;
return (input_checker22226_22239.cljs$core$IFn$_invoke$arity$1 ? input_checker22226_22239.cljs$core$IFn$_invoke$arity$1(G__22234) : input_checker22226_22239.call(null,G__22234));
})();
if(cljs.core.truth_(temp__4126__auto___22242)){
var error__6098__auto___22243 = temp__4126__auto___22242;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22243], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22243,cljs.core.constant$keyword$23,args__6097__auto___22241,cljs.core.constant$keyword$24,input_schema22225_22238,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var i1 = G__22228;
var i2 = G__22229;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__6096__auto__,ufv___22236,output_schema22224_22237,input_schema22225_22238,input_checker22226_22239,output_checker22227_22240){
return (function (p1__22223_SHARP_){
if(schema.core.specific_key_QMARK_(p1__22223_SHARP_)){
return schema.core.explicit_schema_key(p1__22223_SHARP_);
} else {
return cljs.core.constant$keyword$52;
}
});})(validate__6096__auto__,ufv___22236,output_schema22224_22237,input_schema22225_22238,input_checker22226_22239,output_checker22227_22240))
,((function (validate__6096__auto__,ufv___22236,output_schema22224_22237,input_schema22225_22238,input_checker22226_22239,output_checker22227_22240){
return (function (k1,k2){
if(schema.core.required_key_QMARK_(k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_(k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_(k1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))], 0)))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__6096__auto__,ufv___22236,output_schema22224_22237,input_schema22225_22238,input_checker22226_22239,output_checker22227_22240))
,((function (validate__6096__auto__,ufv___22236,output_schema22224_22237,input_schema22225_22238,input_checker22226_22239,output_checker22227_22240){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__6096__auto__,ufv___22236,output_schema22224_22237,input_schema22225_22238,input_checker22226_22239,output_checker22227_22240))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22244 = (function (){var G__22235 = o__6099__auto__;
return (output_checker22227_22240.cljs$core$IFn$_invoke$arity$1 ? output_checker22227_22240.cljs$core$IFn$_invoke$arity$1(G__22235) : output_checker22227_22240.call(null,G__22235));
})();
if(cljs.core.truth_(temp__4126__auto___22244)){
var error__6098__auto___22245 = temp__4126__auto___22244;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22245], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22245,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22224_22237,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22236,output_schema22224_22237,input_schema22225_22238,input_checker22226_22239,output_checker22227_22240))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema22224_22237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22225_22238], null)));
var ufv___22255 = schema.utils.use_fn_validation;
var output_schema22246_22256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema22247_22257 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker22248_22258 = schema.core.checker(input_schema22247_22257);
var output_checker22249_22259 = schema.core.checker(output_schema22246_22256);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___22255,output_schema22246_22256,input_schema22247_22257,input_checker22248_22258,output_checker22249_22259){
return (function required_toplevel_keys(G__22250){
var validate__6096__auto__ = ufv___22255.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22250], null);
var temp__4126__auto___22261 = (function (){var G__22253 = args__6097__auto___22260;
return (input_checker22248_22258.cljs$core$IFn$_invoke$arity$1 ? input_checker22248_22258.cljs$core$IFn$_invoke$arity$1(G__22253) : input_checker22248_22258.call(null,G__22253));
})();
if(cljs.core.truth_(temp__4126__auto___22261)){
var error__6098__auto___22262 = temp__4126__auto___22261;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22262], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22262,cljs.core.constant$keyword$23,args__6097__auto___22260,cljs.core.constant$keyword$24,input_schema22247_22257,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var input_schema = G__22250;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__6096__auto__,ufv___22255,output_schema22246_22256,input_schema22247_22257,input_checker22248_22258,output_checker22249_22259){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__6096__auto__,ufv___22255,output_schema22246_22256,input_schema22247_22257,input_checker22248_22258,output_checker22249_22259))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22263 = (function (){var G__22254 = o__6099__auto__;
return (output_checker22249_22259.cljs$core$IFn$_invoke$arity$1 ? output_checker22249_22259.cljs$core$IFn$_invoke$arity$1(G__22254) : output_checker22249_22259.call(null,G__22254));
})();
if(cljs.core.truth_(temp__4126__auto___22263)){
var error__6098__auto___22264 = temp__4126__auto___22263;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22264], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22264,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22246_22256,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22255,output_schema22246_22256,input_schema22247_22257,input_checker22248_22258,output_checker22249_22259))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema22246_22256,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22247_22257], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = (function iter__22279(s__22280){
return (new cljs.core.LazySeq(null,(function (){
var s__22280__$1 = s__22280;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22280__$1);
if(temp__4126__auto__){
var s__22280__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22280__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__22280__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__22282 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__22281 = (0);
while(true){
if((i__22281 < size__4383__auto__)){
var vec__22287 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__22281);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22287,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22287,(1),null);
cljs.core.chunk_append(b__22282,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__22289 = (i__22281 + (1));
i__22281 = G__22289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22282),iter__22279(cljs.core.chunk_rest(s__22280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22282),null);
}
} else {
var vec__22288 = cljs.core.first(s__22280__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22288,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22288,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__22279(cljs.core.rest(s__22280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__(expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_(input_schema))){
return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_(output_schema))){
return schema.utils.error(schema.utils.__GT_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = (function iter__22308(s__22309){
return (new cljs.core.LazySeq(null,(function (){
var s__22309__$1 = s__22309;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22309__$1);
if(temp__4126__auto__){
var s__22309__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22309__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__22309__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__22311 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__22310 = (0);
while(true){
if((i__22310 < size__4383__auto__)){
var vec__22316 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__22310);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22316,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__22311,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__22318 = (i__22310 + (1));
i__22310 = G__22318;
continue;
} else {
var G__22319 = (i__22310 + (1));
i__22310 = G__22319;
continue;
}
} else {
var G__22320 = (i__22310 + (1));
i__22310 = G__22320;
continue;
}
} else {
var G__22321 = (i__22310 + (1));
i__22310 = G__22321;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22311),iter__22308(cljs.core.chunk_rest(s__22309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22311),null);
}
} else {
var vec__22317 = cljs.core.first(s__22309__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22317,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22317,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__22308(cljs.core.rest(s__22309__$2)));
} else {
var G__22322 = cljs.core.rest(s__22309__$2);
s__22309__$1 = G__22322;
continue;
}
} else {
var G__22323 = cljs.core.rest(s__22309__$2);
s__22309__$1 = G__22323;
continue;
}
} else {
var G__22324 = cljs.core.rest(s__22309__$2);
s__22309__$1 = G__22324;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$22,cljs.core.constant$keyword$54,cljs.core.constant$keyword$53,fails], null));
} else {
return null;
}
});
var ufv___22351 = schema.utils.use_fn_validation;
var output_schema22325_22352 = schema.core.Any;
var input_schema22326_22353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker22327_22354 = schema.core.checker(input_schema22326_22353);
var output_checker22328_22355 = schema.core.checker(output_schema22325_22352);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___22351,output_schema22325_22352,input_schema22326_22353,input_checker22327_22354,output_checker22328_22355){
return (function compose_schemata(G__22329,G__22330){
var validate__6096__auto__ = true;
if(validate__6096__auto__){
var args__6097__auto___22356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22329,G__22330], null);
var temp__4126__auto___22357 = (function (){var G__22341 = args__6097__auto___22356;
return (input_checker22327_22354.cljs$core$IFn$_invoke$arity$1 ? input_checker22327_22354.cljs$core$IFn$_invoke$arity$1(G__22341) : input_checker22327_22354.call(null,G__22341));
})();
if(cljs.core.truth_(temp__4126__auto___22357)){
var error__6098__auto___22358 = temp__4126__auto___22357;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22358], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22358,cljs.core.constant$keyword$23,args__6097__auto___22356,cljs.core.constant$keyword$24,input_schema22326_22353,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__22344 = G__22329;
var vec__22346 = G__22344;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22346,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22346,(1),null);
var G__22345 = G__22330;
var vec__22347 = G__22345;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22347,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22347,(1),null);
var G__22344__$1 = G__22344;
var G__22345__$1 = G__22345;
while(true){
var vec__22348 = G__22344__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22348,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22348,(1),null);
var vec__22349 = G__22345__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22349,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22349,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__6096__auto__){
var temp__4126__auto___22359 = (function (){var G__22350 = o__6099__auto__;
return (output_checker22328_22355.cljs$core$IFn$_invoke$arity$1 ? output_checker22328_22355.cljs$core$IFn$_invoke$arity$1(G__22350) : output_checker22328_22355.call(null,G__22350));
})();
if(cljs.core.truth_(temp__4126__auto___22359)){
var error__6098__auto___22360 = temp__4126__auto___22359;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22360], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22360,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22325_22352,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22351,output_schema22325_22352,input_schema22326_22353,input_checker22327_22354,output_checker22328_22355))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema22325_22352,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22326_22353], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___22463 = schema.utils.use_fn_validation;
var output_schema22361_22464 = schema.core.Any;
var input_schema22362_22465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker22363_22466 = schema.core.checker(input_schema22362_22465);
var output_checker22364_22467 = schema.core.checker(output_schema22361_22464);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467){
return (function split_schema(G__22365,G__22366){
var validate__6096__auto__ = ufv___22463.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22468 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22365,G__22366], null);
var temp__4126__auto___22469 = (function (){var G__22415 = args__6097__auto___22468;
return (input_checker22363_22466.cljs$core$IFn$_invoke$arity$1 ? input_checker22363_22466.cljs$core$IFn$_invoke$arity$1(G__22415) : input_checker22363_22466.call(null,G__22415));
})();
if(cljs.core.truth_(temp__4126__auto___22469)){
var error__6098__auto___22470 = temp__4126__auto___22469;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22470], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22470,cljs.core.constant$keyword$23,args__6097__auto___22468,cljs.core.constant$keyword$24,input_schema22362_22465,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var s = G__22365;
var ks = G__22366;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__4384__auto__ = ((function (ks__$1,validate__6096__auto__,ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467){
return (function iter__22416(s__22417){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6096__auto__,ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467){
return (function (){
var s__22417__$1 = s__22417;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22417__$1);
if(temp__4126__auto__){
var s__22417__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22417__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__22417__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__22419 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__22418 = (0);
while(true){
if((i__22418 < size__4383__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__22418);
cljs.core.chunk_append(b__22419,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = ((function (i__22418,in_QMARK_,c__4382__auto__,size__4383__auto__,b__22419,s__22417__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467){
return (function iter__22442(s__22443){
return (new cljs.core.LazySeq(null,((function (i__22418,in_QMARK_,c__4382__auto__,size__4383__auto__,b__22419,s__22417__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467){
return (function (){
var s__22443__$1 = s__22443;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__22443__$1);
if(temp__4126__auto____$1){
var s__22443__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22443__$2)){
var c__4382__auto____$1 = cljs.core.chunk_first(s__22443__$2);
var size__4383__auto____$1 = cljs.core.count(c__4382__auto____$1);
var b__22445 = cljs.core.chunk_buffer(size__4383__auto____$1);
if((function (){var i__22444 = (0);
while(true){
if((i__22444 < size__4383__auto____$1)){
var vec__22450 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto____$1,i__22444);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22450,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22450,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__22445,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__22471 = (i__22444 + (1));
i__22444 = G__22471;
continue;
} else {
var G__22472 = (i__22444 + (1));
i__22444 = G__22472;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22445),iter__22442(cljs.core.chunk_rest(s__22443__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22445),null);
}
} else {
var vec__22451 = cljs.core.first(s__22443__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22451,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22451,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22442(cljs.core.rest(s__22443__$2)));
} else {
var G__22473 = cljs.core.rest(s__22443__$2);
s__22443__$1 = G__22473;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__22418,in_QMARK_,c__4382__auto__,size__4383__auto__,b__22419,s__22417__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467))
,null,null));
});})(i__22418,in_QMARK_,c__4382__auto__,size__4383__auto__,b__22419,s__22417__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467))
;
return iter__4384__auto__(s);
})()));

var G__22474 = (i__22418 + (1));
i__22418 = G__22474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22419),iter__22416(cljs.core.chunk_rest(s__22417__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22419),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__22417__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = ((function (in_QMARK_,s__22417__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467){
return (function iter__22452(s__22453){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__22417__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467){
return (function (){
var s__22453__$1 = s__22453;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__22453__$1);
if(temp__4126__auto____$1){
var s__22453__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22453__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__22453__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__22455 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__22454 = (0);
while(true){
if((i__22454 < size__4383__auto__)){
var vec__22460 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__22454);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__22455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__22475 = (i__22454 + (1));
i__22454 = G__22475;
continue;
} else {
var G__22476 = (i__22454 + (1));
i__22454 = G__22476;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22455),iter__22452(cljs.core.chunk_rest(s__22453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22455),null);
}
} else {
var vec__22461 = cljs.core.first(s__22453__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22461,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22461,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22452(cljs.core.rest(s__22453__$2)));
} else {
var G__22477 = cljs.core.rest(s__22453__$2);
s__22453__$1 = G__22477;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__22417__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467))
,null,null));
});})(in_QMARK_,s__22417__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467))
;
return iter__4384__auto__(s);
})()),iter__22416(cljs.core.rest(s__22417__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__6096__auto__,ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467))
,null,null));
});})(ks__$1,validate__6096__auto__,ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467))
;
return iter__4384__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22478 = (function (){var G__22462 = o__6099__auto__;
return (output_checker22364_22467.cljs$core$IFn$_invoke$arity$1 ? output_checker22364_22467.cljs$core$IFn$_invoke$arity$1(G__22462) : output_checker22364_22467.call(null,G__22462));
})();
if(cljs.core.truth_(temp__4126__auto___22478)){
var error__6098__auto___22479 = temp__4126__auto___22478;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22479], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22479,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22361_22464,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22463,output_schema22361_22464,input_schema22362_22465,input_checker22363_22466,output_checker22364_22467))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema22361_22464,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22362_22465], null)));
var ufv___22514 = schema.utils.use_fn_validation;
var output_schema22480_22515 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema22481_22516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker22482_22517 = schema.core.checker(input_schema22481_22516);
var output_checker22483_22518 = schema.core.checker(output_schema22480_22515);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___22514,output_schema22480_22515,input_schema22481_22516,input_checker22482_22517,output_checker22483_22518){
return (function sequence_schemata(G__22484,G__22485){
var validate__6096__auto__ = ufv___22514.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22484,G__22485], null);
var temp__4126__auto___22520 = (function (){var G__22500 = args__6097__auto___22519;
return (input_checker22482_22517.cljs$core$IFn$_invoke$arity$1 ? input_checker22482_22517.cljs$core$IFn$_invoke$arity$1(G__22500) : input_checker22482_22517.call(null,G__22500));
})();
if(cljs.core.truth_(temp__4126__auto___22520)){
var error__6098__auto___22521 = temp__4126__auto___22520;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22521], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22521,cljs.core.constant$keyword$23,args__6097__auto___22519,cljs.core.constant$keyword$24,input_schema22481_22516,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__22504 = G__22484;
var vec__22506 = G__22504;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22506,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22506,(1),null);
var G__22505 = G__22485;
var vec__22507 = G__22505;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(0),null);
var vec__22508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22508,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22508,(1),null);
var G__22504__$1 = G__22504;
var G__22505__$1 = G__22505;
while(true){
var vec__22509 = G__22504__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22509,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22509,(1),null);
var vec__22510 = G__22505__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(0),null);
var vec__22511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22511,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22511,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}

var vec__22512 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22512,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22512,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22522 = (function (){var G__22513 = o__6099__auto__;
return (output_checker22483_22518.cljs$core$IFn$_invoke$arity$1 ? output_checker22483_22518.cljs$core$IFn$_invoke$arity$1(G__22513) : output_checker22483_22518.call(null,G__22513));
})();
if(cljs.core.truth_(temp__4126__auto___22522)){
var error__6098__auto___22523 = temp__4126__auto___22522;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22523], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22523,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22480_22515,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22514,output_schema22480_22515,input_schema22481_22516,input_checker22482_22517,output_checker22483_22518))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema22480_22515,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22481_22516], null)));
