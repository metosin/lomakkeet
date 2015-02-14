// Compiled by ClojureScript 0.0-2850 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$75,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$77,(function (p1__12200__12201__auto__){
var G__35037 = p1__12200__12201__auto__;
if(G__35037){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__35037.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__35037.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__35037);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__35037);
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
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35038_SHARP_){
return (cljs.core.val(p1__35038_SHARP_) > (1));
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

var vec__35040 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35040,(1),null);
var p = vec__35040;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,cljs.core.constant$keyword$91,cljs.core.constant$keyword$49,k,cljs.core.constant$keyword$90,m], null));
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
var ufv___35050 = schema.utils.use_fn_validation;
var output_schema35041_35051 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema35042_35052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker35043_35053 = schema.core.checker(input_schema35042_35052);
var output_checker35044_35054 = schema.core.checker(output_schema35041_35051);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___35050,output_schema35041_35051,input_schema35042_35052,input_checker35043_35053,output_checker35044_35054){
return (function unwrap_schema_form_key(G__35045){
var validate__12170__auto__ = ufv___35050.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35055 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35045], null);
var temp__4126__auto___35056 = (function (){var G__35048 = args__12171__auto___35055;
return (input_checker35043_35053.cljs$core$IFn$_invoke$arity$1 ? input_checker35043_35053.cljs$core$IFn$_invoke$arity$1(G__35048) : input_checker35043_35053.call(null,G__35048));
})();
if(cljs.core.truth_(temp__4126__auto___35056)){
var error__12172__auto___35057 = temp__4126__auto___35056;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35057], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35057,cljs.core.constant$keyword$64,args__12171__auto___35055,cljs.core.constant$keyword$65,input_schema35042_35052,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var k = G__35045;
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
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35058 = (function (){var G__35049 = o__12173__auto__;
return (output_checker35044_35054.cljs$core$IFn$_invoke$arity$1 ? output_checker35044_35054.cljs$core$IFn$_invoke$arity$1(G__35049) : output_checker35044_35054.call(null,G__35049));
})();
if(cljs.core.truth_(temp__4126__auto___35058)){
var error__12172__auto___35059 = temp__4126__auto___35058;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35059], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35059,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35041_35051,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35050,output_schema35041_35051,input_schema35042_35052,input_checker35043_35053,output_checker35044_35054))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema35041_35051,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35042_35052], null)));
var ufv___35069 = schema.utils.use_fn_validation;
var output_schema35060_35070 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema35061_35071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker35062_35072 = schema.core.checker(input_schema35061_35071);
var output_checker35063_35073 = schema.core.checker(output_schema35060_35070);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___35069,output_schema35060_35070,input_schema35061_35071,input_checker35062_35072,output_checker35063_35073){
return (function explicit_schema_key_map(G__35064){
var validate__12170__auto__ = ufv___35069.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35064], null);
var temp__4126__auto___35075 = (function (){var G__35067 = args__12171__auto___35074;
return (input_checker35062_35072.cljs$core$IFn$_invoke$arity$1 ? input_checker35062_35072.cljs$core$IFn$_invoke$arity$1(G__35067) : input_checker35062_35072.call(null,G__35067));
})();
if(cljs.core.truth_(temp__4126__auto___35075)){
var error__12172__auto___35076 = temp__4126__auto___35075;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35076], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35076,cljs.core.constant$keyword$64,args__12171__auto___35074,cljs.core.constant$keyword$65,input_schema35061_35071,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var s = G__35064;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35077 = (function (){var G__35068 = o__12173__auto__;
return (output_checker35063_35073.cljs$core$IFn$_invoke$arity$1 ? output_checker35063_35073.cljs$core$IFn$_invoke$arity$1(G__35068) : output_checker35063_35073.call(null,G__35068));
})();
if(cljs.core.truth_(temp__4126__auto___35077)){
var error__12172__auto___35078 = temp__4126__auto___35077;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35078], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35078,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35060_35070,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35069,output_schema35060_35070,input_schema35061_35071,input_checker35062_35072,output_checker35063_35073))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema35060_35070,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35061_35071], null)));
var ufv___35088 = schema.utils.use_fn_validation;
var output_schema35079_35089 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema35080_35090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker35081_35091 = schema.core.checker(input_schema35080_35090);
var output_checker35082_35092 = schema.core.checker(output_schema35079_35089);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___35088,output_schema35079_35089,input_schema35080_35090,input_checker35081_35091,output_checker35082_35092){
return (function split_schema_keys(G__35083){
var validate__12170__auto__ = ufv___35088.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35093 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35083], null);
var temp__4126__auto___35094 = (function (){var G__35086 = args__12171__auto___35093;
return (input_checker35081_35091.cljs$core$IFn$_invoke$arity$1 ? input_checker35081_35091.cljs$core$IFn$_invoke$arity$1(G__35086) : input_checker35081_35091.call(null,G__35086));
})();
if(cljs.core.truth_(temp__4126__auto___35094)){
var error__12172__auto___35095 = temp__4126__auto___35094;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35095], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35095,cljs.core.constant$keyword$64,args__12171__auto___35093,cljs.core.constant$keyword$65,input_schema35080_35090,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var s = G__35083;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35096 = (function (){var G__35087 = o__12173__auto__;
return (output_checker35082_35092.cljs$core$IFn$_invoke$arity$1 ? output_checker35082_35092.cljs$core$IFn$_invoke$arity$1(G__35087) : output_checker35082_35092.call(null,G__35087));
})();
if(cljs.core.truth_(temp__4126__auto___35096)){
var error__12172__auto___35097 = temp__4126__auto___35096;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35097], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35097,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35079_35089,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35088,output_schema35079_35089,input_schema35080_35090,input_checker35081_35091,output_checker35082_35092))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema35079_35089,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35080_35090], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__35106){
var vec__35107 = p__35106;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35107,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35107,(1),null);
var pk = (function (){var G__35108 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__35108) : key_project.call(null,G__35108));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__35109 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35109,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35109,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35110 = ok;
var G__35111 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__35110,G__35111) : key_combine.call(null,G__35110,G__35111));
})(),(function (){var G__35112 = ov;
var G__35113 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__35112,G__35113) : val_combine.call(null,G__35112,G__35113));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__35114__i = 0, G__35114__a = new Array(arguments.length -  3);
while (G__35114__i < G__35114__a.length) {G__35114__a[G__35114__i] = arguments[G__35114__i + 3]; ++G__35114__i;}
  maps = new cljs.core.IndexedSeq(G__35114__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__35115){
var key_project = cljs.core.first(arglist__35115);
arglist__35115 = cljs.core.next(arglist__35115);
var key_combine = cljs.core.first(arglist__35115);
arglist__35115 = cljs.core.next(arglist__35115);
var val_combine = cljs.core.first(arglist__35115);
var maps = cljs.core.rest(arglist__35115);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___35129 = schema.utils.use_fn_validation;
var output_schema35117_35130 = plumbing.fnk.schema.InputSchema;
var input_schema35118_35131 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker35119_35132 = schema.core.checker(input_schema35118_35131);
var output_checker35120_35133 = schema.core.checker(output_schema35117_35130);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___35129,output_schema35117_35130,input_schema35118_35131,input_checker35119_35132,output_checker35120_35133){
return (function union_input_schemata(G__35121,G__35122){
var validate__12170__auto__ = ufv___35129.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35134 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35121,G__35122], null);
var temp__4126__auto___35135 = (function (){var G__35127 = args__12171__auto___35134;
return (input_checker35119_35132.cljs$core$IFn$_invoke$arity$1 ? input_checker35119_35132.cljs$core$IFn$_invoke$arity$1(G__35127) : input_checker35119_35132.call(null,G__35127));
})();
if(cljs.core.truth_(temp__4126__auto___35135)){
var error__12172__auto___35136 = temp__4126__auto___35135;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35136], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35136,cljs.core.constant$keyword$64,args__12171__auto___35134,cljs.core.constant$keyword$65,input_schema35118_35131,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var i1 = G__35121;
var i2 = G__35122;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__12170__auto__,ufv___35129,output_schema35117_35130,input_schema35118_35131,input_checker35119_35132,output_checker35120_35133){
return (function (p1__35116_SHARP_){
if(schema.core.specific_key_QMARK_(p1__35116_SHARP_)){
return schema.core.explicit_schema_key(p1__35116_SHARP_);
} else {
return cljs.core.constant$keyword$92;
}
});})(validate__12170__auto__,ufv___35129,output_schema35117_35130,input_schema35118_35131,input_checker35119_35132,output_checker35120_35133))
,((function (validate__12170__auto__,ufv___35129,output_schema35117_35130,input_schema35118_35131,input_checker35119_35132,output_checker35120_35133){
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
});})(validate__12170__auto__,ufv___35129,output_schema35117_35130,input_schema35118_35131,input_checker35119_35132,output_checker35120_35133))
,((function (validate__12170__auto__,ufv___35129,output_schema35117_35130,input_schema35118_35131,input_checker35119_35132,output_checker35120_35133){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__12170__auto__,ufv___35129,output_schema35117_35130,input_schema35118_35131,input_checker35119_35132,output_checker35120_35133))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35137 = (function (){var G__35128 = o__12173__auto__;
return (output_checker35120_35133.cljs$core$IFn$_invoke$arity$1 ? output_checker35120_35133.cljs$core$IFn$_invoke$arity$1(G__35128) : output_checker35120_35133.call(null,G__35128));
})();
if(cljs.core.truth_(temp__4126__auto___35137)){
var error__12172__auto___35138 = temp__4126__auto___35137;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35138], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35138,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35117_35130,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35129,output_schema35117_35130,input_schema35118_35131,input_checker35119_35132,output_checker35120_35133))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema35117_35130,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35118_35131], null)));
var ufv___35148 = schema.utils.use_fn_validation;
var output_schema35139_35149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema35140_35150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker35141_35151 = schema.core.checker(input_schema35140_35150);
var output_checker35142_35152 = schema.core.checker(output_schema35139_35149);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___35148,output_schema35139_35149,input_schema35140_35150,input_checker35141_35151,output_checker35142_35152){
return (function required_toplevel_keys(G__35143){
var validate__12170__auto__ = ufv___35148.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35143], null);
var temp__4126__auto___35154 = (function (){var G__35146 = args__12171__auto___35153;
return (input_checker35141_35151.cljs$core$IFn$_invoke$arity$1 ? input_checker35141_35151.cljs$core$IFn$_invoke$arity$1(G__35146) : input_checker35141_35151.call(null,G__35146));
})();
if(cljs.core.truth_(temp__4126__auto___35154)){
var error__12172__auto___35155 = temp__4126__auto___35154;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35155], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35155,cljs.core.constant$keyword$64,args__12171__auto___35153,cljs.core.constant$keyword$65,input_schema35140_35150,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var input_schema = G__35143;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12170__auto__,ufv___35148,output_schema35139_35149,input_schema35140_35150,input_checker35141_35151,output_checker35142_35152){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__12170__auto__,ufv___35148,output_schema35139_35149,input_schema35140_35150,input_checker35141_35151,output_checker35142_35152))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35156 = (function (){var G__35147 = o__12173__auto__;
return (output_checker35142_35152.cljs$core$IFn$_invoke$arity$1 ? output_checker35142_35152.cljs$core$IFn$_invoke$arity$1(G__35147) : output_checker35142_35152.call(null,G__35147));
})();
if(cljs.core.truth_(temp__4126__auto___35156)){
var error__12172__auto___35157 = temp__4126__auto___35156;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35157], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35157,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35139_35149,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35148,output_schema35139_35149,input_schema35140_35150,input_checker35141_35151,output_checker35142_35152))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema35139_35149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35140_35150], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = (function iter__35172(s__35173){
return (new cljs.core.LazySeq(null,(function (){
var s__35173__$1 = s__35173;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35173__$1);
if(temp__4126__auto__){
var s__35173__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35173__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__35173__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__35175 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__35174 = (0);
while(true){
if((i__35174 < size__4570__auto__)){
var vec__35180 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__35174);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35180,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35180,(1),null);
cljs.core.chunk_append(b__35175,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__35182 = (i__35174 + (1));
i__35174 = G__35182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35175),iter__35172(cljs.core.chunk_rest(s__35173__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35175),null);
}
} else {
var vec__35181 = cljs.core.first(s__35173__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35181,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35181,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__35172(cljs.core.rest(s__35173__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(expr);
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
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = (function iter__35201(s__35202){
return (new cljs.core.LazySeq(null,(function (){
var s__35202__$1 = s__35202;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35202__$1);
if(temp__4126__auto__){
var s__35202__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35202__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__35202__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__35204 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__35203 = (0);
while(true){
if((i__35203 < size__4570__auto__)){
var vec__35209 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__35203);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35209,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35209,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__35204,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__35211 = (i__35203 + (1));
i__35203 = G__35211;
continue;
} else {
var G__35212 = (i__35203 + (1));
i__35203 = G__35212;
continue;
}
} else {
var G__35213 = (i__35203 + (1));
i__35203 = G__35213;
continue;
}
} else {
var G__35214 = (i__35203 + (1));
i__35203 = G__35214;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35204),iter__35201(cljs.core.chunk_rest(s__35202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35204),null);
}
} else {
var vec__35210 = cljs.core.first(s__35202__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35210,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__35201(cljs.core.rest(s__35202__$2)));
} else {
var G__35215 = cljs.core.rest(s__35202__$2);
s__35202__$1 = G__35215;
continue;
}
} else {
var G__35216 = cljs.core.rest(s__35202__$2);
s__35202__$1 = G__35216;
continue;
}
} else {
var G__35217 = cljs.core.rest(s__35202__$2);
s__35202__$1 = G__35217;
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
return iter__4571__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$63,cljs.core.constant$keyword$94,cljs.core.constant$keyword$93,fails], null));
} else {
return null;
}
});
var ufv___35244 = schema.utils.use_fn_validation;
var output_schema35218_35245 = schema.core.Any;
var input_schema35219_35246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker35220_35247 = schema.core.checker(input_schema35219_35246);
var output_checker35221_35248 = schema.core.checker(output_schema35218_35245);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___35244,output_schema35218_35245,input_schema35219_35246,input_checker35220_35247,output_checker35221_35248){
return (function compose_schemata(G__35222,G__35223){
var validate__12170__auto__ = true;
if(validate__12170__auto__){
var args__12171__auto___35249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35222,G__35223], null);
var temp__4126__auto___35250 = (function (){var G__35234 = args__12171__auto___35249;
return (input_checker35220_35247.cljs$core$IFn$_invoke$arity$1 ? input_checker35220_35247.cljs$core$IFn$_invoke$arity$1(G__35234) : input_checker35220_35247.call(null,G__35234));
})();
if(cljs.core.truth_(temp__4126__auto___35250)){
var error__12172__auto___35251 = temp__4126__auto___35250;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35251], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35251,cljs.core.constant$keyword$64,args__12171__auto___35249,cljs.core.constant$keyword$65,input_schema35219_35246,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__35237 = G__35222;
var vec__35239 = G__35237;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35239,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35239,(1),null);
var G__35238 = G__35223;
var vec__35240 = G__35238;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35240,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35240,(1),null);
var G__35237__$1 = G__35237;
var G__35238__$1 = G__35238;
while(true){
var vec__35241 = G__35237__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35241,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35241,(1),null);
var vec__35242 = G__35238__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__12170__auto__){
var temp__4126__auto___35252 = (function (){var G__35243 = o__12173__auto__;
return (output_checker35221_35248.cljs$core$IFn$_invoke$arity$1 ? output_checker35221_35248.cljs$core$IFn$_invoke$arity$1(G__35243) : output_checker35221_35248.call(null,G__35243));
})();
if(cljs.core.truth_(temp__4126__auto___35252)){
var error__12172__auto___35253 = temp__4126__auto___35252;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35253], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35253,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35218_35245,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35244,output_schema35218_35245,input_schema35219_35246,input_checker35220_35247,output_checker35221_35248))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema35218_35245,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35219_35246], null)));
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
var ufv___35356 = schema.utils.use_fn_validation;
var output_schema35254_35357 = schema.core.Any;
var input_schema35255_35358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker35256_35359 = schema.core.checker(input_schema35255_35358);
var output_checker35257_35360 = schema.core.checker(output_schema35254_35357);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360){
return (function split_schema(G__35258,G__35259){
var validate__12170__auto__ = ufv___35356.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35258,G__35259], null);
var temp__4126__auto___35362 = (function (){var G__35308 = args__12171__auto___35361;
return (input_checker35256_35359.cljs$core$IFn$_invoke$arity$1 ? input_checker35256_35359.cljs$core$IFn$_invoke$arity$1(G__35308) : input_checker35256_35359.call(null,G__35308));
})();
if(cljs.core.truth_(temp__4126__auto___35362)){
var error__12172__auto___35363 = temp__4126__auto___35362;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35363], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35363,cljs.core.constant$keyword$64,args__12171__auto___35361,cljs.core.constant$keyword$65,input_schema35255_35358,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var s = G__35258;
var ks = G__35259;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__4571__auto__ = ((function (ks__$1,validate__12170__auto__,ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360){
return (function iter__35309(s__35310){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12170__auto__,ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360){
return (function (){
var s__35310__$1 = s__35310;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35310__$1);
if(temp__4126__auto__){
var s__35310__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35310__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__35310__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__35312 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__35311 = (0);
while(true){
if((i__35311 < size__4570__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__35311);
cljs.core.chunk_append(b__35312,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = ((function (i__35311,in_QMARK_,c__4569__auto__,size__4570__auto__,b__35312,s__35310__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360){
return (function iter__35335(s__35336){
return (new cljs.core.LazySeq(null,((function (i__35311,in_QMARK_,c__4569__auto__,size__4570__auto__,b__35312,s__35310__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360){
return (function (){
var s__35336__$1 = s__35336;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__35336__$1);
if(temp__4126__auto____$1){
var s__35336__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35336__$2)){
var c__4569__auto____$1 = cljs.core.chunk_first(s__35336__$2);
var size__4570__auto____$1 = cljs.core.count(c__4569__auto____$1);
var b__35338 = cljs.core.chunk_buffer(size__4570__auto____$1);
if((function (){var i__35337 = (0);
while(true){
if((i__35337 < size__4570__auto____$1)){
var vec__35343 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto____$1,i__35337);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35343,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__35338,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35364 = (i__35337 + (1));
i__35337 = G__35364;
continue;
} else {
var G__35365 = (i__35337 + (1));
i__35337 = G__35365;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35338),iter__35335(cljs.core.chunk_rest(s__35336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35338),null);
}
} else {
var vec__35344 = cljs.core.first(s__35336__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35344,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35344,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35335(cljs.core.rest(s__35336__$2)));
} else {
var G__35366 = cljs.core.rest(s__35336__$2);
s__35336__$1 = G__35366;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__35311,in_QMARK_,c__4569__auto__,size__4570__auto__,b__35312,s__35310__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360))
,null,null));
});})(i__35311,in_QMARK_,c__4569__auto__,size__4570__auto__,b__35312,s__35310__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360))
;
return iter__4571__auto__(s);
})()));

var G__35367 = (i__35311 + (1));
i__35311 = G__35367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35312),iter__35309(cljs.core.chunk_rest(s__35310__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35312),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__35310__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = ((function (in_QMARK_,s__35310__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360){
return (function iter__35345(s__35346){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__35310__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360){
return (function (){
var s__35346__$1 = s__35346;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__35346__$1);
if(temp__4126__auto____$1){
var s__35346__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35346__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__35346__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__35348 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__35347 = (0);
while(true){
if((i__35347 < size__4570__auto__)){
var vec__35353 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__35347);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35353,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__35348,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35368 = (i__35347 + (1));
i__35347 = G__35368;
continue;
} else {
var G__35369 = (i__35347 + (1));
i__35347 = G__35369;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35348),iter__35345(cljs.core.chunk_rest(s__35346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35348),null);
}
} else {
var vec__35354 = cljs.core.first(s__35346__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35354,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35354,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35345(cljs.core.rest(s__35346__$2)));
} else {
var G__35370 = cljs.core.rest(s__35346__$2);
s__35346__$1 = G__35370;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__35310__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360))
,null,null));
});})(in_QMARK_,s__35310__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360))
;
return iter__4571__auto__(s);
})()),iter__35309(cljs.core.rest(s__35310__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__12170__auto__,ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360))
,null,null));
});})(ks__$1,validate__12170__auto__,ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360))
;
return iter__4571__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35371 = (function (){var G__35355 = o__12173__auto__;
return (output_checker35257_35360.cljs$core$IFn$_invoke$arity$1 ? output_checker35257_35360.cljs$core$IFn$_invoke$arity$1(G__35355) : output_checker35257_35360.call(null,G__35355));
})();
if(cljs.core.truth_(temp__4126__auto___35371)){
var error__12172__auto___35372 = temp__4126__auto___35371;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35372], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35372,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35254_35357,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35356,output_schema35254_35357,input_schema35255_35358,input_checker35256_35359,output_checker35257_35360))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema35254_35357,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35255_35358], null)));
var ufv___35407 = schema.utils.use_fn_validation;
var output_schema35373_35408 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema35374_35409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker35375_35410 = schema.core.checker(input_schema35374_35409);
var output_checker35376_35411 = schema.core.checker(output_schema35373_35408);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___35407,output_schema35373_35408,input_schema35374_35409,input_checker35375_35410,output_checker35376_35411){
return (function sequence_schemata(G__35377,G__35378){
var validate__12170__auto__ = ufv___35407.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35412 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35377,G__35378], null);
var temp__4126__auto___35413 = (function (){var G__35393 = args__12171__auto___35412;
return (input_checker35375_35410.cljs$core$IFn$_invoke$arity$1 ? input_checker35375_35410.cljs$core$IFn$_invoke$arity$1(G__35393) : input_checker35375_35410.call(null,G__35393));
})();
if(cljs.core.truth_(temp__4126__auto___35413)){
var error__12172__auto___35414 = temp__4126__auto___35413;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35414], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35414,cljs.core.constant$keyword$64,args__12171__auto___35412,cljs.core.constant$keyword$65,input_schema35374_35409,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__35397 = G__35377;
var vec__35399 = G__35397;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35399,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35399,(1),null);
var G__35398 = G__35378;
var vec__35400 = G__35398;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35400,(0),null);
var vec__35401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35400,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(1),null);
var G__35397__$1 = G__35397;
var G__35398__$1 = G__35398;
while(true){
var vec__35402 = G__35397__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402,(1),null);
var vec__35403 = G__35398__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35403,(0),null);
var vec__35404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35403,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35404,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35404,(1),null);
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

var vec__35405 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35405,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35405,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35415 = (function (){var G__35406 = o__12173__auto__;
return (output_checker35376_35411.cljs$core$IFn$_invoke$arity$1 ? output_checker35376_35411.cljs$core$IFn$_invoke$arity$1(G__35406) : output_checker35376_35411.call(null,G__35406));
})();
if(cljs.core.truth_(temp__4126__auto___35415)){
var error__12172__auto___35416 = temp__4126__auto___35415;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35416], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35416,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35373_35408,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35407,output_schema35373_35408,input_schema35374_35409,input_checker35375_35410,output_checker35376_35411))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema35373_35408,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35374_35409], null)));
