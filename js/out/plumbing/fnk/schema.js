// Compiled by ClojureScript 0.0-2727 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$79,(function (p1__12611__12612__auto__){
var G__30944 = p1__12611__12612__auto__;
if(G__30944){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30944.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__30944.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__30944);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__30944);
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
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30945_SHARP_){
return (cljs.core.val(p1__30945_SHARP_) > (1));
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

var vec__30947 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30947,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30947,(1),null);
var p = vec__30947;
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
var ufv___30957 = schema.utils.use_fn_validation;
var output_schema30948_30958 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema30949_30959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker30950_30960 = schema.core.checker(input_schema30949_30959);
var output_checker30951_30961 = schema.core.checker(output_schema30948_30958);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___30957,output_schema30948_30958,input_schema30949_30959,input_checker30950_30960,output_checker30951_30961){
return (function unwrap_schema_form_key(G__30952){
var validate__12581__auto__ = ufv___30957.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___30962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30952], null);
var temp__4126__auto___30963 = (function (){var G__30955 = args__12582__auto___30962;
return (input_checker30950_30960.cljs$core$IFn$_invoke$arity$1 ? input_checker30950_30960.cljs$core$IFn$_invoke$arity$1(G__30955) : input_checker30950_30960.call(null,G__30955));
})();
if(cljs.core.truth_(temp__4126__auto___30963)){
var error__12583__auto___30964 = temp__4126__auto___30963;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___30964], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___30964,cljs.core.constant$keyword$66,args__12582__auto___30962,cljs.core.constant$keyword$67,input_schema30949_30959,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var k = G__30952;
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
var temp__4126__auto___30965 = (function (){var G__30956 = o__12584__auto__;
return (output_checker30951_30961.cljs$core$IFn$_invoke$arity$1 ? output_checker30951_30961.cljs$core$IFn$_invoke$arity$1(G__30956) : output_checker30951_30961.call(null,G__30956));
})();
if(cljs.core.truth_(temp__4126__auto___30965)){
var error__12583__auto___30966 = temp__4126__auto___30965;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___30966], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___30966,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema30948_30958,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___30957,output_schema30948_30958,input_schema30949_30959,input_checker30950_30960,output_checker30951_30961))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema30948_30958,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30949_30959], null)));
var ufv___30976 = schema.utils.use_fn_validation;
var output_schema30967_30977 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema30968_30978 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker30969_30979 = schema.core.checker(input_schema30968_30978);
var output_checker30970_30980 = schema.core.checker(output_schema30967_30977);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___30976,output_schema30967_30977,input_schema30968_30978,input_checker30969_30979,output_checker30970_30980){
return (function explicit_schema_key_map(G__30971){
var validate__12581__auto__ = ufv___30976.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___30981 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30971], null);
var temp__4126__auto___30982 = (function (){var G__30974 = args__12582__auto___30981;
return (input_checker30969_30979.cljs$core$IFn$_invoke$arity$1 ? input_checker30969_30979.cljs$core$IFn$_invoke$arity$1(G__30974) : input_checker30969_30979.call(null,G__30974));
})();
if(cljs.core.truth_(temp__4126__auto___30982)){
var error__12583__auto___30983 = temp__4126__auto___30982;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___30983], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___30983,cljs.core.constant$keyword$66,args__12582__auto___30981,cljs.core.constant$keyword$67,input_schema30968_30978,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var s = G__30971;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___30984 = (function (){var G__30975 = o__12584__auto__;
return (output_checker30970_30980.cljs$core$IFn$_invoke$arity$1 ? output_checker30970_30980.cljs$core$IFn$_invoke$arity$1(G__30975) : output_checker30970_30980.call(null,G__30975));
})();
if(cljs.core.truth_(temp__4126__auto___30984)){
var error__12583__auto___30985 = temp__4126__auto___30984;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___30985], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___30985,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema30967_30977,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___30976,output_schema30967_30977,input_schema30968_30978,input_checker30969_30979,output_checker30970_30980))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema30967_30977,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30968_30978], null)));
var ufv___30995 = schema.utils.use_fn_validation;
var output_schema30986_30996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema30987_30997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker30988_30998 = schema.core.checker(input_schema30987_30997);
var output_checker30989_30999 = schema.core.checker(output_schema30986_30996);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___30995,output_schema30986_30996,input_schema30987_30997,input_checker30988_30998,output_checker30989_30999){
return (function split_schema_keys(G__30990){
var validate__12581__auto__ = ufv___30995.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30990], null);
var temp__4126__auto___31001 = (function (){var G__30993 = args__12582__auto___31000;
return (input_checker30988_30998.cljs$core$IFn$_invoke$arity$1 ? input_checker30988_30998.cljs$core$IFn$_invoke$arity$1(G__30993) : input_checker30988_30998.call(null,G__30993));
})();
if(cljs.core.truth_(temp__4126__auto___31001)){
var error__12583__auto___31002 = temp__4126__auto___31001;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31002], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31002,cljs.core.constant$keyword$66,args__12582__auto___31000,cljs.core.constant$keyword$67,input_schema30987_30997,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var s = G__30990;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31003 = (function (){var G__30994 = o__12584__auto__;
return (output_checker30989_30999.cljs$core$IFn$_invoke$arity$1 ? output_checker30989_30999.cljs$core$IFn$_invoke$arity$1(G__30994) : output_checker30989_30999.call(null,G__30994));
})();
if(cljs.core.truth_(temp__4126__auto___31003)){
var error__12583__auto___31004 = temp__4126__auto___31003;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31004], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31004,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema30986_30996,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___30995,output_schema30986_30996,input_schema30987_30997,input_checker30988_30998,output_checker30989_30999))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema30986_30996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30987_30997], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__31013){
var vec__31014 = p__31013;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31014,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31014,(1),null);
var pk = (function (){var G__31015 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__31015) : key_project.call(null,G__31015));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__31016 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31016,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31016,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31017 = ok;
var G__31018 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__31017,G__31018) : key_combine.call(null,G__31017,G__31018));
})(),(function (){var G__31019 = ov;
var G__31020 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__31019,G__31020) : val_combine.call(null,G__31019,G__31020));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__31021__i = 0, G__31021__a = new Array(arguments.length -  3);
while (G__31021__i < G__31021__a.length) {G__31021__a[G__31021__i] = arguments[G__31021__i + 3]; ++G__31021__i;}
  maps = new cljs.core.IndexedSeq(G__31021__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__31022){
var key_project = cljs.core.first(arglist__31022);
arglist__31022 = cljs.core.next(arglist__31022);
var key_combine = cljs.core.first(arglist__31022);
arglist__31022 = cljs.core.next(arglist__31022);
var val_combine = cljs.core.first(arglist__31022);
var maps = cljs.core.rest(arglist__31022);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___31036 = schema.utils.use_fn_validation;
var output_schema31024_31037 = plumbing.fnk.schema.InputSchema;
var input_schema31025_31038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker31026_31039 = schema.core.checker(input_schema31025_31038);
var output_checker31027_31040 = schema.core.checker(output_schema31024_31037);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___31036,output_schema31024_31037,input_schema31025_31038,input_checker31026_31039,output_checker31027_31040){
return (function union_input_schemata(G__31028,G__31029){
var validate__12581__auto__ = ufv___31036.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31028,G__31029], null);
var temp__4126__auto___31042 = (function (){var G__31034 = args__12582__auto___31041;
return (input_checker31026_31039.cljs$core$IFn$_invoke$arity$1 ? input_checker31026_31039.cljs$core$IFn$_invoke$arity$1(G__31034) : input_checker31026_31039.call(null,G__31034));
})();
if(cljs.core.truth_(temp__4126__auto___31042)){
var error__12583__auto___31043 = temp__4126__auto___31042;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31043], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31043,cljs.core.constant$keyword$66,args__12582__auto___31041,cljs.core.constant$keyword$67,input_schema31025_31038,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var i1 = G__31028;
var i2 = G__31029;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__12581__auto__,ufv___31036,output_schema31024_31037,input_schema31025_31038,input_checker31026_31039,output_checker31027_31040){
return (function (p1__31023_SHARP_){
if(schema.core.specific_key_QMARK_(p1__31023_SHARP_)){
return schema.core.explicit_schema_key(p1__31023_SHARP_);
} else {
return cljs.core.constant$keyword$94;
}
});})(validate__12581__auto__,ufv___31036,output_schema31024_31037,input_schema31025_31038,input_checker31026_31039,output_checker31027_31040))
,((function (validate__12581__auto__,ufv___31036,output_schema31024_31037,input_schema31025_31038,input_checker31026_31039,output_checker31027_31040){
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
});})(validate__12581__auto__,ufv___31036,output_schema31024_31037,input_schema31025_31038,input_checker31026_31039,output_checker31027_31040))
,((function (validate__12581__auto__,ufv___31036,output_schema31024_31037,input_schema31025_31038,input_checker31026_31039,output_checker31027_31040){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__12581__auto__,ufv___31036,output_schema31024_31037,input_schema31025_31038,input_checker31026_31039,output_checker31027_31040))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31044 = (function (){var G__31035 = o__12584__auto__;
return (output_checker31027_31040.cljs$core$IFn$_invoke$arity$1 ? output_checker31027_31040.cljs$core$IFn$_invoke$arity$1(G__31035) : output_checker31027_31040.call(null,G__31035));
})();
if(cljs.core.truth_(temp__4126__auto___31044)){
var error__12583__auto___31045 = temp__4126__auto___31044;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31045], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31045,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31024_31037,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31036,output_schema31024_31037,input_schema31025_31038,input_checker31026_31039,output_checker31027_31040))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema31024_31037,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31025_31038], null)));
var ufv___31055 = schema.utils.use_fn_validation;
var output_schema31046_31056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema31047_31057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker31048_31058 = schema.core.checker(input_schema31047_31057);
var output_checker31049_31059 = schema.core.checker(output_schema31046_31056);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___31055,output_schema31046_31056,input_schema31047_31057,input_checker31048_31058,output_checker31049_31059){
return (function required_toplevel_keys(G__31050){
var validate__12581__auto__ = ufv___31055.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31050], null);
var temp__4126__auto___31061 = (function (){var G__31053 = args__12582__auto___31060;
return (input_checker31048_31058.cljs$core$IFn$_invoke$arity$1 ? input_checker31048_31058.cljs$core$IFn$_invoke$arity$1(G__31053) : input_checker31048_31058.call(null,G__31053));
})();
if(cljs.core.truth_(temp__4126__auto___31061)){
var error__12583__auto___31062 = temp__4126__auto___31061;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31062], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31062,cljs.core.constant$keyword$66,args__12582__auto___31060,cljs.core.constant$keyword$67,input_schema31047_31057,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var input_schema = G__31050;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12581__auto__,ufv___31055,output_schema31046_31056,input_schema31047_31057,input_checker31048_31058,output_checker31049_31059){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__12581__auto__,ufv___31055,output_schema31046_31056,input_schema31047_31057,input_checker31048_31058,output_checker31049_31059))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31063 = (function (){var G__31054 = o__12584__auto__;
return (output_checker31049_31059.cljs$core$IFn$_invoke$arity$1 ? output_checker31049_31059.cljs$core$IFn$_invoke$arity$1(G__31054) : output_checker31049_31059.call(null,G__31054));
})();
if(cljs.core.truth_(temp__4126__auto___31063)){
var error__12583__auto___31064 = temp__4126__auto___31063;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31064], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31064,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31046_31056,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31055,output_schema31046_31056,input_schema31047_31057,input_checker31048_31058,output_checker31049_31059))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema31046_31056,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31047_31057], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5007__auto__ = (function iter__31079(s__31080){
return (new cljs.core.LazySeq(null,(function (){
var s__31080__$1 = s__31080;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31080__$1);
if(temp__4126__auto__){
var s__31080__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31080__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31080__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31082 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31081 = (0);
while(true){
if((i__31081 < size__5006__auto__)){
var vec__31087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31081);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31087,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31087,(1),null);
cljs.core.chunk_append(b__31082,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__31089 = (i__31081 + (1));
i__31081 = G__31089;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31082),iter__31079(cljs.core.chunk_rest(s__31080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31082),null);
}
} else {
var vec__31088 = cljs.core.first(s__31080__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31088,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__31079(cljs.core.rest(s__31080__$2)));
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
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5007__auto__ = (function iter__31108(s__31109){
return (new cljs.core.LazySeq(null,(function (){
var s__31109__$1 = s__31109;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31109__$1);
if(temp__4126__auto__){
var s__31109__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31109__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31109__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31111 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31110 = (0);
while(true){
if((i__31110 < size__5006__auto__)){
var vec__31116 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31110);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31116,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31116,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__31111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__31118 = (i__31110 + (1));
i__31110 = G__31118;
continue;
} else {
var G__31119 = (i__31110 + (1));
i__31110 = G__31119;
continue;
}
} else {
var G__31120 = (i__31110 + (1));
i__31110 = G__31120;
continue;
}
} else {
var G__31121 = (i__31110 + (1));
i__31110 = G__31121;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31111),iter__31108(cljs.core.chunk_rest(s__31109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31111),null);
}
} else {
var vec__31117 = cljs.core.first(s__31109__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31117,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__31108(cljs.core.rest(s__31109__$2)));
} else {
var G__31122 = cljs.core.rest(s__31109__$2);
s__31109__$1 = G__31122;
continue;
}
} else {
var G__31123 = cljs.core.rest(s__31109__$2);
s__31109__$1 = G__31123;
continue;
}
} else {
var G__31124 = cljs.core.rest(s__31109__$2);
s__31109__$1 = G__31124;
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
var ufv___31151 = schema.utils.use_fn_validation;
var output_schema31125_31152 = schema.core.Any;
var input_schema31126_31153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker31127_31154 = schema.core.checker(input_schema31126_31153);
var output_checker31128_31155 = schema.core.checker(output_schema31125_31152);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___31151,output_schema31125_31152,input_schema31126_31153,input_checker31127_31154,output_checker31128_31155){
return (function compose_schemata(G__31129,G__31130){
var validate__12581__auto__ = true;
if(validate__12581__auto__){
var args__12582__auto___31156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31129,G__31130], null);
var temp__4126__auto___31157 = (function (){var G__31141 = args__12582__auto___31156;
return (input_checker31127_31154.cljs$core$IFn$_invoke$arity$1 ? input_checker31127_31154.cljs$core$IFn$_invoke$arity$1(G__31141) : input_checker31127_31154.call(null,G__31141));
})();
if(cljs.core.truth_(temp__4126__auto___31157)){
var error__12583__auto___31158 = temp__4126__auto___31157;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31158], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31158,cljs.core.constant$keyword$66,args__12582__auto___31156,cljs.core.constant$keyword$67,input_schema31126_31153,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__31144 = G__31129;
var vec__31146 = G__31144;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31146,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31146,(1),null);
var G__31145 = G__31130;
var vec__31147 = G__31145;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31147,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31147,(1),null);
var G__31144__$1 = G__31144;
var G__31145__$1 = G__31145;
while(true){
var vec__31148 = G__31144__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31148,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31148,(1),null);
var vec__31149 = G__31145__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31149,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31149,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__12581__auto__){
var temp__4126__auto___31159 = (function (){var G__31150 = o__12584__auto__;
return (output_checker31128_31155.cljs$core$IFn$_invoke$arity$1 ? output_checker31128_31155.cljs$core$IFn$_invoke$arity$1(G__31150) : output_checker31128_31155.call(null,G__31150));
})();
if(cljs.core.truth_(temp__4126__auto___31159)){
var error__12583__auto___31160 = temp__4126__auto___31159;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31160], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31160,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31125_31152,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31151,output_schema31125_31152,input_schema31126_31153,input_checker31127_31154,output_checker31128_31155))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema31125_31152,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31126_31153], null)));
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
var ufv___31263 = schema.utils.use_fn_validation;
var output_schema31161_31264 = schema.core.Any;
var input_schema31162_31265 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker31163_31266 = schema.core.checker(input_schema31162_31265);
var output_checker31164_31267 = schema.core.checker(output_schema31161_31264);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267){
return (function split_schema(G__31165,G__31166){
var validate__12581__auto__ = ufv___31263.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31165,G__31166], null);
var temp__4126__auto___31269 = (function (){var G__31215 = args__12582__auto___31268;
return (input_checker31163_31266.cljs$core$IFn$_invoke$arity$1 ? input_checker31163_31266.cljs$core$IFn$_invoke$arity$1(G__31215) : input_checker31163_31266.call(null,G__31215));
})();
if(cljs.core.truth_(temp__4126__auto___31269)){
var error__12583__auto___31270 = temp__4126__auto___31269;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31270], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31270,cljs.core.constant$keyword$66,args__12582__auto___31268,cljs.core.constant$keyword$67,input_schema31162_31265,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var s = G__31165;
var ks = G__31166;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__5007__auto__ = ((function (ks__$1,validate__12581__auto__,ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267){
return (function iter__31216(s__31217){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12581__auto__,ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267){
return (function (){
var s__31217__$1 = s__31217;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31217__$1);
if(temp__4126__auto__){
var s__31217__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31217__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31217__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31219 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31218 = (0);
while(true){
if((i__31218 < size__5006__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31218);
cljs.core.chunk_append(b__31219,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5007__auto__ = ((function (i__31218,in_QMARK_,c__5005__auto__,size__5006__auto__,b__31219,s__31217__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267){
return (function iter__31242(s__31243){
return (new cljs.core.LazySeq(null,((function (i__31218,in_QMARK_,c__5005__auto__,size__5006__auto__,b__31219,s__31217__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267){
return (function (){
var s__31243__$1 = s__31243;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__31243__$1);
if(temp__4126__auto____$1){
var s__31243__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31243__$2)){
var c__5005__auto____$1 = cljs.core.chunk_first(s__31243__$2);
var size__5006__auto____$1 = cljs.core.count(c__5005__auto____$1);
var b__31245 = cljs.core.chunk_buffer(size__5006__auto____$1);
if((function (){var i__31244 = (0);
while(true){
if((i__31244 < size__5006__auto____$1)){
var vec__31250 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto____$1,i__31244);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31250,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31250,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__31245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__31271 = (i__31244 + (1));
i__31244 = G__31271;
continue;
} else {
var G__31272 = (i__31244 + (1));
i__31244 = G__31272;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31245),iter__31242(cljs.core.chunk_rest(s__31243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31245),null);
}
} else {
var vec__31251 = cljs.core.first(s__31243__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31251,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31251,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__31242(cljs.core.rest(s__31243__$2)));
} else {
var G__31273 = cljs.core.rest(s__31243__$2);
s__31243__$1 = G__31273;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__31218,in_QMARK_,c__5005__auto__,size__5006__auto__,b__31219,s__31217__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267))
,null,null));
});})(i__31218,in_QMARK_,c__5005__auto__,size__5006__auto__,b__31219,s__31217__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267))
;
return iter__5007__auto__(s);
})()));

var G__31274 = (i__31218 + (1));
i__31218 = G__31274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31219),iter__31216(cljs.core.chunk_rest(s__31217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31219),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__31217__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5007__auto__ = ((function (in_QMARK_,s__31217__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267){
return (function iter__31252(s__31253){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__31217__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267){
return (function (){
var s__31253__$1 = s__31253;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__31253__$1);
if(temp__4126__auto____$1){
var s__31253__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31253__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31253__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31255 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31254 = (0);
while(true){
if((i__31254 < size__5006__auto__)){
var vec__31260 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31254);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31260,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__31255,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__31275 = (i__31254 + (1));
i__31254 = G__31275;
continue;
} else {
var G__31276 = (i__31254 + (1));
i__31254 = G__31276;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31255),iter__31252(cljs.core.chunk_rest(s__31253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31255),null);
}
} else {
var vec__31261 = cljs.core.first(s__31253__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31261,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__31252(cljs.core.rest(s__31253__$2)));
} else {
var G__31277 = cljs.core.rest(s__31253__$2);
s__31253__$1 = G__31277;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__31217__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267))
,null,null));
});})(in_QMARK_,s__31217__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267))
;
return iter__5007__auto__(s);
})()),iter__31216(cljs.core.rest(s__31217__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__12581__auto__,ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267))
,null,null));
});})(ks__$1,validate__12581__auto__,ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267))
;
return iter__5007__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31278 = (function (){var G__31262 = o__12584__auto__;
return (output_checker31164_31267.cljs$core$IFn$_invoke$arity$1 ? output_checker31164_31267.cljs$core$IFn$_invoke$arity$1(G__31262) : output_checker31164_31267.call(null,G__31262));
})();
if(cljs.core.truth_(temp__4126__auto___31278)){
var error__12583__auto___31279 = temp__4126__auto___31278;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31279], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31279,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31161_31264,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31263,output_schema31161_31264,input_schema31162_31265,input_checker31163_31266,output_checker31164_31267))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema31161_31264,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31162_31265], null)));
var ufv___31314 = schema.utils.use_fn_validation;
var output_schema31280_31315 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema31281_31316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker31282_31317 = schema.core.checker(input_schema31281_31316);
var output_checker31283_31318 = schema.core.checker(output_schema31280_31315);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___31314,output_schema31280_31315,input_schema31281_31316,input_checker31282_31317,output_checker31283_31318){
return (function sequence_schemata(G__31284,G__31285){
var validate__12581__auto__ = ufv___31314.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31284,G__31285], null);
var temp__4126__auto___31320 = (function (){var G__31300 = args__12582__auto___31319;
return (input_checker31282_31317.cljs$core$IFn$_invoke$arity$1 ? input_checker31282_31317.cljs$core$IFn$_invoke$arity$1(G__31300) : input_checker31282_31317.call(null,G__31300));
})();
if(cljs.core.truth_(temp__4126__auto___31320)){
var error__12583__auto___31321 = temp__4126__auto___31320;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31321], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31321,cljs.core.constant$keyword$66,args__12582__auto___31319,cljs.core.constant$keyword$67,input_schema31281_31316,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__31304 = G__31284;
var vec__31306 = G__31304;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31306,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31306,(1),null);
var G__31305 = G__31285;
var vec__31307 = G__31305;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31307,(0),null);
var vec__31308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31307,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31308,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31308,(1),null);
var G__31304__$1 = G__31304;
var G__31305__$1 = G__31305;
while(true){
var vec__31309 = G__31304__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31309,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31309,(1),null);
var vec__31310 = G__31305__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31310,(0),null);
var vec__31311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31310,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31311,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31311,(1),null);
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

var vec__31312 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31312,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31312,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31322 = (function (){var G__31313 = o__12584__auto__;
return (output_checker31283_31318.cljs$core$IFn$_invoke$arity$1 ? output_checker31283_31318.cljs$core$IFn$_invoke$arity$1(G__31313) : output_checker31283_31318.call(null,G__31313));
})();
if(cljs.core.truth_(temp__4126__auto___31322)){
var error__12583__auto___31323 = temp__4126__auto___31322;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31323], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31323,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31280_31315,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31314,output_schema31280_31315,input_schema31281_31316,input_checker31282_31317,output_checker31283_31318))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema31280_31315,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31281_31316], null)));
