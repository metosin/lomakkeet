// Compiled by ClojureScript 0.0-2727 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$79,(function (p1__12611__12612__auto__){
var G__30996 = p1__12611__12612__auto__;
if(G__30996){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30996.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__30996.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__30996);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__30996);
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
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30997_SHARP_){
return (cljs.core.val(p1__30997_SHARP_) > (1));
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

var vec__30999 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30999,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30999,(1),null);
var p = vec__30999;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$65,cljs.core.constant$keyword$93,cljs.core.constant$keyword$51,k,cljs.core.constant$keyword$92,m], null));
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
var ufv___31009 = schema.utils.use_fn_validation;
var output_schema31000_31010 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema31001_31011 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker31002_31012 = schema.core.checker(input_schema31001_31011);
var output_checker31003_31013 = schema.core.checker(output_schema31000_31010);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___31009,output_schema31000_31010,input_schema31001_31011,input_checker31002_31012,output_checker31003_31013){
return (function unwrap_schema_form_key(G__31004){
var validate__12581__auto__ = ufv___31009.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31004], null);
var temp__4126__auto___31015 = (function (){var G__31007 = args__12582__auto___31014;
return (input_checker31002_31012.cljs$core$IFn$_invoke$arity$1 ? input_checker31002_31012.cljs$core$IFn$_invoke$arity$1(G__31007) : input_checker31002_31012.call(null,G__31007));
})();
if(cljs.core.truth_(temp__4126__auto___31015)){
var error__12583__auto___31016 = temp__4126__auto___31015;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31016], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31016,cljs.core.constant$keyword$66,args__12582__auto___31014,cljs.core.constant$keyword$67,input_schema31001_31011,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var k = G__31004;
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
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31017 = (function (){var G__31008 = o__12584__auto__;
return (output_checker31003_31013.cljs$core$IFn$_invoke$arity$1 ? output_checker31003_31013.cljs$core$IFn$_invoke$arity$1(G__31008) : output_checker31003_31013.call(null,G__31008));
})();
if(cljs.core.truth_(temp__4126__auto___31017)){
var error__12583__auto___31018 = temp__4126__auto___31017;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31018], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31018,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31000_31010,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31009,output_schema31000_31010,input_schema31001_31011,input_checker31002_31012,output_checker31003_31013))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema31000_31010,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31001_31011], null)));
var ufv___31028 = schema.utils.use_fn_validation;
var output_schema31019_31029 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema31020_31030 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker31021_31031 = schema.core.checker(input_schema31020_31030);
var output_checker31022_31032 = schema.core.checker(output_schema31019_31029);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___31028,output_schema31019_31029,input_schema31020_31030,input_checker31021_31031,output_checker31022_31032){
return (function explicit_schema_key_map(G__31023){
var validate__12581__auto__ = ufv___31028.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31023], null);
var temp__4126__auto___31034 = (function (){var G__31026 = args__12582__auto___31033;
return (input_checker31021_31031.cljs$core$IFn$_invoke$arity$1 ? input_checker31021_31031.cljs$core$IFn$_invoke$arity$1(G__31026) : input_checker31021_31031.call(null,G__31026));
})();
if(cljs.core.truth_(temp__4126__auto___31034)){
var error__12583__auto___31035 = temp__4126__auto___31034;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31035], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31035,cljs.core.constant$keyword$66,args__12582__auto___31033,cljs.core.constant$keyword$67,input_schema31020_31030,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var s = G__31023;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31036 = (function (){var G__31027 = o__12584__auto__;
return (output_checker31022_31032.cljs$core$IFn$_invoke$arity$1 ? output_checker31022_31032.cljs$core$IFn$_invoke$arity$1(G__31027) : output_checker31022_31032.call(null,G__31027));
})();
if(cljs.core.truth_(temp__4126__auto___31036)){
var error__12583__auto___31037 = temp__4126__auto___31036;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31037], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31037,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31019_31029,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31028,output_schema31019_31029,input_schema31020_31030,input_checker31021_31031,output_checker31022_31032))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema31019_31029,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31020_31030], null)));
var ufv___31047 = schema.utils.use_fn_validation;
var output_schema31038_31048 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema31039_31049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker31040_31050 = schema.core.checker(input_schema31039_31049);
var output_checker31041_31051 = schema.core.checker(output_schema31038_31048);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___31047,output_schema31038_31048,input_schema31039_31049,input_checker31040_31050,output_checker31041_31051){
return (function split_schema_keys(G__31042){
var validate__12581__auto__ = ufv___31047.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31042], null);
var temp__4126__auto___31053 = (function (){var G__31045 = args__12582__auto___31052;
return (input_checker31040_31050.cljs$core$IFn$_invoke$arity$1 ? input_checker31040_31050.cljs$core$IFn$_invoke$arity$1(G__31045) : input_checker31040_31050.call(null,G__31045));
})();
if(cljs.core.truth_(temp__4126__auto___31053)){
var error__12583__auto___31054 = temp__4126__auto___31053;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31054], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31054,cljs.core.constant$keyword$66,args__12582__auto___31052,cljs.core.constant$keyword$67,input_schema31039_31049,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var s = G__31042;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31055 = (function (){var G__31046 = o__12584__auto__;
return (output_checker31041_31051.cljs$core$IFn$_invoke$arity$1 ? output_checker31041_31051.cljs$core$IFn$_invoke$arity$1(G__31046) : output_checker31041_31051.call(null,G__31046));
})();
if(cljs.core.truth_(temp__4126__auto___31055)){
var error__12583__auto___31056 = temp__4126__auto___31055;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31056], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31056,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31038_31048,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31047,output_schema31038_31048,input_schema31039_31049,input_checker31040_31050,output_checker31041_31051))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema31038_31048,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31039_31049], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__31065){
var vec__31066 = p__31065;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31066,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31066,(1),null);
var pk = (function (){var G__31067 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__31067) : key_project.call(null,G__31067));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__31068 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31068,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31068,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31069 = ok;
var G__31070 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__31069,G__31070) : key_combine.call(null,G__31069,G__31070));
})(),(function (){var G__31071 = ov;
var G__31072 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__31071,G__31072) : val_combine.call(null,G__31071,G__31072));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__31073__i = 0, G__31073__a = new Array(arguments.length -  3);
while (G__31073__i < G__31073__a.length) {G__31073__a[G__31073__i] = arguments[G__31073__i + 3]; ++G__31073__i;}
  maps = new cljs.core.IndexedSeq(G__31073__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__31074){
var key_project = cljs.core.first(arglist__31074);
arglist__31074 = cljs.core.next(arglist__31074);
var key_combine = cljs.core.first(arglist__31074);
arglist__31074 = cljs.core.next(arglist__31074);
var val_combine = cljs.core.first(arglist__31074);
var maps = cljs.core.rest(arglist__31074);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___31088 = schema.utils.use_fn_validation;
var output_schema31076_31089 = plumbing.fnk.schema.InputSchema;
var input_schema31077_31090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker31078_31091 = schema.core.checker(input_schema31077_31090);
var output_checker31079_31092 = schema.core.checker(output_schema31076_31089);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___31088,output_schema31076_31089,input_schema31077_31090,input_checker31078_31091,output_checker31079_31092){
return (function union_input_schemata(G__31080,G__31081){
var validate__12581__auto__ = ufv___31088.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31093 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31080,G__31081], null);
var temp__4126__auto___31094 = (function (){var G__31086 = args__12582__auto___31093;
return (input_checker31078_31091.cljs$core$IFn$_invoke$arity$1 ? input_checker31078_31091.cljs$core$IFn$_invoke$arity$1(G__31086) : input_checker31078_31091.call(null,G__31086));
})();
if(cljs.core.truth_(temp__4126__auto___31094)){
var error__12583__auto___31095 = temp__4126__auto___31094;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31095], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31095,cljs.core.constant$keyword$66,args__12582__auto___31093,cljs.core.constant$keyword$67,input_schema31077_31090,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var i1 = G__31080;
var i2 = G__31081;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__12581__auto__,ufv___31088,output_schema31076_31089,input_schema31077_31090,input_checker31078_31091,output_checker31079_31092){
return (function (p1__31075_SHARP_){
if(schema.core.specific_key_QMARK_(p1__31075_SHARP_)){
return schema.core.explicit_schema_key(p1__31075_SHARP_);
} else {
return cljs.core.constant$keyword$94;
}
});})(validate__12581__auto__,ufv___31088,output_schema31076_31089,input_schema31077_31090,input_checker31078_31091,output_checker31079_31092))
,((function (validate__12581__auto__,ufv___31088,output_schema31076_31089,input_schema31077_31090,input_checker31078_31091,output_checker31079_31092){
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
});})(validate__12581__auto__,ufv___31088,output_schema31076_31089,input_schema31077_31090,input_checker31078_31091,output_checker31079_31092))
,((function (validate__12581__auto__,ufv___31088,output_schema31076_31089,input_schema31077_31090,input_checker31078_31091,output_checker31079_31092){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__12581__auto__,ufv___31088,output_schema31076_31089,input_schema31077_31090,input_checker31078_31091,output_checker31079_31092))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31096 = (function (){var G__31087 = o__12584__auto__;
return (output_checker31079_31092.cljs$core$IFn$_invoke$arity$1 ? output_checker31079_31092.cljs$core$IFn$_invoke$arity$1(G__31087) : output_checker31079_31092.call(null,G__31087));
})();
if(cljs.core.truth_(temp__4126__auto___31096)){
var error__12583__auto___31097 = temp__4126__auto___31096;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31097], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31097,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31076_31089,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31088,output_schema31076_31089,input_schema31077_31090,input_checker31078_31091,output_checker31079_31092))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema31076_31089,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31077_31090], null)));
var ufv___31107 = schema.utils.use_fn_validation;
var output_schema31098_31108 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema31099_31109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker31100_31110 = schema.core.checker(input_schema31099_31109);
var output_checker31101_31111 = schema.core.checker(output_schema31098_31108);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___31107,output_schema31098_31108,input_schema31099_31109,input_checker31100_31110,output_checker31101_31111){
return (function required_toplevel_keys(G__31102){
var validate__12581__auto__ = ufv___31107.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31112 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31102], null);
var temp__4126__auto___31113 = (function (){var G__31105 = args__12582__auto___31112;
return (input_checker31100_31110.cljs$core$IFn$_invoke$arity$1 ? input_checker31100_31110.cljs$core$IFn$_invoke$arity$1(G__31105) : input_checker31100_31110.call(null,G__31105));
})();
if(cljs.core.truth_(temp__4126__auto___31113)){
var error__12583__auto___31114 = temp__4126__auto___31113;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31114], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31114,cljs.core.constant$keyword$66,args__12582__auto___31112,cljs.core.constant$keyword$67,input_schema31099_31109,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var input_schema = G__31102;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12581__auto__,ufv___31107,output_schema31098_31108,input_schema31099_31109,input_checker31100_31110,output_checker31101_31111){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__12581__auto__,ufv___31107,output_schema31098_31108,input_schema31099_31109,input_checker31100_31110,output_checker31101_31111))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31115 = (function (){var G__31106 = o__12584__auto__;
return (output_checker31101_31111.cljs$core$IFn$_invoke$arity$1 ? output_checker31101_31111.cljs$core$IFn$_invoke$arity$1(G__31106) : output_checker31101_31111.call(null,G__31106));
})();
if(cljs.core.truth_(temp__4126__auto___31115)){
var error__12583__auto___31116 = temp__4126__auto___31115;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31116], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31116,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31098_31108,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31107,output_schema31098_31108,input_schema31099_31109,input_checker31100_31110,output_checker31101_31111))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema31098_31108,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31099_31109], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5007__auto__ = (function iter__31131(s__31132){
return (new cljs.core.LazySeq(null,(function (){
var s__31132__$1 = s__31132;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31132__$1);
if(temp__4126__auto__){
var s__31132__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31132__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31132__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31134 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31133 = (0);
while(true){
if((i__31133 < size__5006__auto__)){
var vec__31139 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31133);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31139,(1),null);
cljs.core.chunk_append(b__31134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__31141 = (i__31133 + (1));
i__31133 = G__31141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31134),iter__31131(cljs.core.chunk_rest(s__31132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31134),null);
}
} else {
var vec__31140 = cljs.core.first(s__31132__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31140,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31140,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__31131(cljs.core.rest(s__31132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5007__auto__(expr);
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
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5007__auto__ = (function iter__31160(s__31161){
return (new cljs.core.LazySeq(null,(function (){
var s__31161__$1 = s__31161;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31161__$1);
if(temp__4126__auto__){
var s__31161__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31161__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31161__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31163 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31162 = (0);
while(true){
if((i__31162 < size__5006__auto__)){
var vec__31168 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31162);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31168,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31168,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__31163,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__31170 = (i__31162 + (1));
i__31162 = G__31170;
continue;
} else {
var G__31171 = (i__31162 + (1));
i__31162 = G__31171;
continue;
}
} else {
var G__31172 = (i__31162 + (1));
i__31162 = G__31172;
continue;
}
} else {
var G__31173 = (i__31162 + (1));
i__31162 = G__31173;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31163),iter__31160(cljs.core.chunk_rest(s__31161__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31163),null);
}
} else {
var vec__31169 = cljs.core.first(s__31161__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31169,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31169,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__31160(cljs.core.rest(s__31161__$2)));
} else {
var G__31174 = cljs.core.rest(s__31161__$2);
s__31161__$1 = G__31174;
continue;
}
} else {
var G__31175 = cljs.core.rest(s__31161__$2);
s__31161__$1 = G__31175;
continue;
}
} else {
var G__31176 = cljs.core.rest(s__31161__$2);
s__31161__$1 = G__31176;
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
return iter__5007__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$65,cljs.core.constant$keyword$96,cljs.core.constant$keyword$95,fails], null));
} else {
return null;
}
});
var ufv___31203 = schema.utils.use_fn_validation;
var output_schema31177_31204 = schema.core.Any;
var input_schema31178_31205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker31179_31206 = schema.core.checker(input_schema31178_31205);
var output_checker31180_31207 = schema.core.checker(output_schema31177_31204);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___31203,output_schema31177_31204,input_schema31178_31205,input_checker31179_31206,output_checker31180_31207){
return (function compose_schemata(G__31181,G__31182){
var validate__12581__auto__ = true;
if(validate__12581__auto__){
var args__12582__auto___31208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31181,G__31182], null);
var temp__4126__auto___31209 = (function (){var G__31193 = args__12582__auto___31208;
return (input_checker31179_31206.cljs$core$IFn$_invoke$arity$1 ? input_checker31179_31206.cljs$core$IFn$_invoke$arity$1(G__31193) : input_checker31179_31206.call(null,G__31193));
})();
if(cljs.core.truth_(temp__4126__auto___31209)){
var error__12583__auto___31210 = temp__4126__auto___31209;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31210], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31210,cljs.core.constant$keyword$66,args__12582__auto___31208,cljs.core.constant$keyword$67,input_schema31178_31205,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__31196 = G__31181;
var vec__31198 = G__31196;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31198,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31198,(1),null);
var G__31197 = G__31182;
var vec__31199 = G__31197;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31199,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31199,(1),null);
var G__31196__$1 = G__31196;
var G__31197__$1 = G__31197;
while(true){
var vec__31200 = G__31196__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31200,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31200,(1),null);
var vec__31201 = G__31197__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__12581__auto__){
var temp__4126__auto___31211 = (function (){var G__31202 = o__12584__auto__;
return (output_checker31180_31207.cljs$core$IFn$_invoke$arity$1 ? output_checker31180_31207.cljs$core$IFn$_invoke$arity$1(G__31202) : output_checker31180_31207.call(null,G__31202));
})();
if(cljs.core.truth_(temp__4126__auto___31211)){
var error__12583__auto___31212 = temp__4126__auto___31211;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31212], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31212,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31177_31204,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31203,output_schema31177_31204,input_schema31178_31205,input_checker31179_31206,output_checker31180_31207))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema31177_31204,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31178_31205], null)));
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
var ufv___31315 = schema.utils.use_fn_validation;
var output_schema31213_31316 = schema.core.Any;
var input_schema31214_31317 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker31215_31318 = schema.core.checker(input_schema31214_31317);
var output_checker31216_31319 = schema.core.checker(output_schema31213_31316);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319){
return (function split_schema(G__31217,G__31218){
var validate__12581__auto__ = ufv___31315.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31217,G__31218], null);
var temp__4126__auto___31321 = (function (){var G__31267 = args__12582__auto___31320;
return (input_checker31215_31318.cljs$core$IFn$_invoke$arity$1 ? input_checker31215_31318.cljs$core$IFn$_invoke$arity$1(G__31267) : input_checker31215_31318.call(null,G__31267));
})();
if(cljs.core.truth_(temp__4126__auto___31321)){
var error__12583__auto___31322 = temp__4126__auto___31321;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31322], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31322,cljs.core.constant$keyword$66,args__12582__auto___31320,cljs.core.constant$keyword$67,input_schema31214_31317,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var s = G__31217;
var ks = G__31218;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__5007__auto__ = ((function (ks__$1,validate__12581__auto__,ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319){
return (function iter__31268(s__31269){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12581__auto__,ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319){
return (function (){
var s__31269__$1 = s__31269;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31269__$1);
if(temp__4126__auto__){
var s__31269__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31269__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31269__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31271 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31270 = (0);
while(true){
if((i__31270 < size__5006__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31270);
cljs.core.chunk_append(b__31271,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5007__auto__ = ((function (i__31270,in_QMARK_,c__5005__auto__,size__5006__auto__,b__31271,s__31269__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319){
return (function iter__31294(s__31295){
return (new cljs.core.LazySeq(null,((function (i__31270,in_QMARK_,c__5005__auto__,size__5006__auto__,b__31271,s__31269__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319){
return (function (){
var s__31295__$1 = s__31295;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__31295__$1);
if(temp__4126__auto____$1){
var s__31295__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31295__$2)){
var c__5005__auto____$1 = cljs.core.chunk_first(s__31295__$2);
var size__5006__auto____$1 = cljs.core.count(c__5005__auto____$1);
var b__31297 = cljs.core.chunk_buffer(size__5006__auto____$1);
if((function (){var i__31296 = (0);
while(true){
if((i__31296 < size__5006__auto____$1)){
var vec__31302 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto____$1,i__31296);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31302,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31302,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__31297,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__31323 = (i__31296 + (1));
i__31296 = G__31323;
continue;
} else {
var G__31324 = (i__31296 + (1));
i__31296 = G__31324;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31297),iter__31294(cljs.core.chunk_rest(s__31295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31297),null);
}
} else {
var vec__31303 = cljs.core.first(s__31295__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31303,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__31294(cljs.core.rest(s__31295__$2)));
} else {
var G__31325 = cljs.core.rest(s__31295__$2);
s__31295__$1 = G__31325;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__31270,in_QMARK_,c__5005__auto__,size__5006__auto__,b__31271,s__31269__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319))
,null,null));
});})(i__31270,in_QMARK_,c__5005__auto__,size__5006__auto__,b__31271,s__31269__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319))
;
return iter__5007__auto__(s);
})()));

var G__31326 = (i__31270 + (1));
i__31270 = G__31326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31271),iter__31268(cljs.core.chunk_rest(s__31269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31271),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__31269__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5007__auto__ = ((function (in_QMARK_,s__31269__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319){
return (function iter__31304(s__31305){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__31269__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319){
return (function (){
var s__31305__$1 = s__31305;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__31305__$1);
if(temp__4126__auto____$1){
var s__31305__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31305__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31305__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31307 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31306 = (0);
while(true){
if((i__31306 < size__5006__auto__)){
var vec__31312 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31306);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31312,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31312,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__31307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__31327 = (i__31306 + (1));
i__31306 = G__31327;
continue;
} else {
var G__31328 = (i__31306 + (1));
i__31306 = G__31328;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31307),iter__31304(cljs.core.chunk_rest(s__31305__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31307),null);
}
} else {
var vec__31313 = cljs.core.first(s__31305__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31313,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31313,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__31304(cljs.core.rest(s__31305__$2)));
} else {
var G__31329 = cljs.core.rest(s__31305__$2);
s__31305__$1 = G__31329;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__31269__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319))
,null,null));
});})(in_QMARK_,s__31269__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319))
;
return iter__5007__auto__(s);
})()),iter__31268(cljs.core.rest(s__31269__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__12581__auto__,ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319))
,null,null));
});})(ks__$1,validate__12581__auto__,ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319))
;
return iter__5007__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31330 = (function (){var G__31314 = o__12584__auto__;
return (output_checker31216_31319.cljs$core$IFn$_invoke$arity$1 ? output_checker31216_31319.cljs$core$IFn$_invoke$arity$1(G__31314) : output_checker31216_31319.call(null,G__31314));
})();
if(cljs.core.truth_(temp__4126__auto___31330)){
var error__12583__auto___31331 = temp__4126__auto___31330;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31331], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31331,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31213_31316,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31315,output_schema31213_31316,input_schema31214_31317,input_checker31215_31318,output_checker31216_31319))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema31213_31316,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31214_31317], null)));
var ufv___31366 = schema.utils.use_fn_validation;
var output_schema31332_31367 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema31333_31368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker31334_31369 = schema.core.checker(input_schema31333_31368);
var output_checker31335_31370 = schema.core.checker(output_schema31332_31367);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___31366,output_schema31332_31367,input_schema31333_31368,input_checker31334_31369,output_checker31335_31370){
return (function sequence_schemata(G__31336,G__31337){
var validate__12581__auto__ = ufv___31366.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31336,G__31337], null);
var temp__4126__auto___31372 = (function (){var G__31352 = args__12582__auto___31371;
return (input_checker31334_31369.cljs$core$IFn$_invoke$arity$1 ? input_checker31334_31369.cljs$core$IFn$_invoke$arity$1(G__31352) : input_checker31334_31369.call(null,G__31352));
})();
if(cljs.core.truth_(temp__4126__auto___31372)){
var error__12583__auto___31373 = temp__4126__auto___31372;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31373], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31373,cljs.core.constant$keyword$66,args__12582__auto___31371,cljs.core.constant$keyword$67,input_schema31333_31368,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__31356 = G__31336;
var vec__31358 = G__31356;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31358,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31358,(1),null);
var G__31357 = G__31337;
var vec__31359 = G__31357;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31359,(0),null);
var vec__31360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31359,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31360,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31360,(1),null);
var G__31356__$1 = G__31356;
var G__31357__$1 = G__31357;
while(true){
var vec__31361 = G__31356__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31361,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31361,(1),null);
var vec__31362 = G__31357__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31362,(0),null);
var vec__31363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31362,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31363,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31363,(1),null);
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

var vec__31364 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31364,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31364,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31374 = (function (){var G__31365 = o__12584__auto__;
return (output_checker31335_31370.cljs$core$IFn$_invoke$arity$1 ? output_checker31335_31370.cljs$core$IFn$_invoke$arity$1(G__31365) : output_checker31335_31370.call(null,G__31365));
})();
if(cljs.core.truth_(temp__4126__auto___31374)){
var error__12583__auto___31375 = temp__4126__auto___31374;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31375], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31375,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31332_31367,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31366,output_schema31332_31367,input_schema31333_31368,input_checker31334_31369,output_checker31335_31370))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema31332_31367,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31333_31368], null)));
