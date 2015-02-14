// Compiled by ClojureScript 0.0-2850 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$75,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$77,(function (p1__12200__12201__auto__){
var G__35123 = p1__12200__12201__auto__;
if(G__35123){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__35123.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__35123.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__35123);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__35123);
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
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35124_SHARP_){
return (cljs.core.val(p1__35124_SHARP_) > (1));
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

var vec__35126 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35126,(1),null);
var p = vec__35126;
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
var ufv___35136 = schema.utils.use_fn_validation;
var output_schema35127_35137 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema35128_35138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker35129_35139 = schema.core.checker(input_schema35128_35138);
var output_checker35130_35140 = schema.core.checker(output_schema35127_35137);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___35136,output_schema35127_35137,input_schema35128_35138,input_checker35129_35139,output_checker35130_35140){
return (function unwrap_schema_form_key(G__35131){
var validate__12170__auto__ = ufv___35136.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35141 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35131], null);
var temp__4126__auto___35142 = (function (){var G__35134 = args__12171__auto___35141;
return (input_checker35129_35139.cljs$core$IFn$_invoke$arity$1 ? input_checker35129_35139.cljs$core$IFn$_invoke$arity$1(G__35134) : input_checker35129_35139.call(null,G__35134));
})();
if(cljs.core.truth_(temp__4126__auto___35142)){
var error__12172__auto___35143 = temp__4126__auto___35142;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35143], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35143,cljs.core.constant$keyword$64,args__12171__auto___35141,cljs.core.constant$keyword$65,input_schema35128_35138,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var k = G__35131;
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
var temp__4126__auto___35144 = (function (){var G__35135 = o__12173__auto__;
return (output_checker35130_35140.cljs$core$IFn$_invoke$arity$1 ? output_checker35130_35140.cljs$core$IFn$_invoke$arity$1(G__35135) : output_checker35130_35140.call(null,G__35135));
})();
if(cljs.core.truth_(temp__4126__auto___35144)){
var error__12172__auto___35145 = temp__4126__auto___35144;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35145], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35145,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35127_35137,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35136,output_schema35127_35137,input_schema35128_35138,input_checker35129_35139,output_checker35130_35140))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema35127_35137,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35128_35138], null)));
var ufv___35155 = schema.utils.use_fn_validation;
var output_schema35146_35156 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema35147_35157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker35148_35158 = schema.core.checker(input_schema35147_35157);
var output_checker35149_35159 = schema.core.checker(output_schema35146_35156);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___35155,output_schema35146_35156,input_schema35147_35157,input_checker35148_35158,output_checker35149_35159){
return (function explicit_schema_key_map(G__35150){
var validate__12170__auto__ = ufv___35155.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35160 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35150], null);
var temp__4126__auto___35161 = (function (){var G__35153 = args__12171__auto___35160;
return (input_checker35148_35158.cljs$core$IFn$_invoke$arity$1 ? input_checker35148_35158.cljs$core$IFn$_invoke$arity$1(G__35153) : input_checker35148_35158.call(null,G__35153));
})();
if(cljs.core.truth_(temp__4126__auto___35161)){
var error__12172__auto___35162 = temp__4126__auto___35161;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35162], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35162,cljs.core.constant$keyword$64,args__12171__auto___35160,cljs.core.constant$keyword$65,input_schema35147_35157,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var s = G__35150;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35163 = (function (){var G__35154 = o__12173__auto__;
return (output_checker35149_35159.cljs$core$IFn$_invoke$arity$1 ? output_checker35149_35159.cljs$core$IFn$_invoke$arity$1(G__35154) : output_checker35149_35159.call(null,G__35154));
})();
if(cljs.core.truth_(temp__4126__auto___35163)){
var error__12172__auto___35164 = temp__4126__auto___35163;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35164], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35164,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35146_35156,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35155,output_schema35146_35156,input_schema35147_35157,input_checker35148_35158,output_checker35149_35159))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema35146_35156,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35147_35157], null)));
var ufv___35174 = schema.utils.use_fn_validation;
var output_schema35165_35175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema35166_35176 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker35167_35177 = schema.core.checker(input_schema35166_35176);
var output_checker35168_35178 = schema.core.checker(output_schema35165_35175);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___35174,output_schema35165_35175,input_schema35166_35176,input_checker35167_35177,output_checker35168_35178){
return (function split_schema_keys(G__35169){
var validate__12170__auto__ = ufv___35174.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35169], null);
var temp__4126__auto___35180 = (function (){var G__35172 = args__12171__auto___35179;
return (input_checker35167_35177.cljs$core$IFn$_invoke$arity$1 ? input_checker35167_35177.cljs$core$IFn$_invoke$arity$1(G__35172) : input_checker35167_35177.call(null,G__35172));
})();
if(cljs.core.truth_(temp__4126__auto___35180)){
var error__12172__auto___35181 = temp__4126__auto___35180;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35181], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35181,cljs.core.constant$keyword$64,args__12171__auto___35179,cljs.core.constant$keyword$65,input_schema35166_35176,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var s = G__35169;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35182 = (function (){var G__35173 = o__12173__auto__;
return (output_checker35168_35178.cljs$core$IFn$_invoke$arity$1 ? output_checker35168_35178.cljs$core$IFn$_invoke$arity$1(G__35173) : output_checker35168_35178.call(null,G__35173));
})();
if(cljs.core.truth_(temp__4126__auto___35182)){
var error__12172__auto___35183 = temp__4126__auto___35182;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35183], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35183,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35165_35175,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35174,output_schema35165_35175,input_schema35166_35176,input_checker35167_35177,output_checker35168_35178))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema35165_35175,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35166_35176], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__35192){
var vec__35193 = p__35192;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35193,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35193,(1),null);
var pk = (function (){var G__35194 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__35194) : key_project.call(null,G__35194));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__35195 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35195,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35195,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35196 = ok;
var G__35197 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__35196,G__35197) : key_combine.call(null,G__35196,G__35197));
})(),(function (){var G__35198 = ov;
var G__35199 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__35198,G__35199) : val_combine.call(null,G__35198,G__35199));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__35200__i = 0, G__35200__a = new Array(arguments.length -  3);
while (G__35200__i < G__35200__a.length) {G__35200__a[G__35200__i] = arguments[G__35200__i + 3]; ++G__35200__i;}
  maps = new cljs.core.IndexedSeq(G__35200__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__35201){
var key_project = cljs.core.first(arglist__35201);
arglist__35201 = cljs.core.next(arglist__35201);
var key_combine = cljs.core.first(arglist__35201);
arglist__35201 = cljs.core.next(arglist__35201);
var val_combine = cljs.core.first(arglist__35201);
var maps = cljs.core.rest(arglist__35201);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___35215 = schema.utils.use_fn_validation;
var output_schema35203_35216 = plumbing.fnk.schema.InputSchema;
var input_schema35204_35217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker35205_35218 = schema.core.checker(input_schema35204_35217);
var output_checker35206_35219 = schema.core.checker(output_schema35203_35216);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___35215,output_schema35203_35216,input_schema35204_35217,input_checker35205_35218,output_checker35206_35219){
return (function union_input_schemata(G__35207,G__35208){
var validate__12170__auto__ = ufv___35215.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35207,G__35208], null);
var temp__4126__auto___35221 = (function (){var G__35213 = args__12171__auto___35220;
return (input_checker35205_35218.cljs$core$IFn$_invoke$arity$1 ? input_checker35205_35218.cljs$core$IFn$_invoke$arity$1(G__35213) : input_checker35205_35218.call(null,G__35213));
})();
if(cljs.core.truth_(temp__4126__auto___35221)){
var error__12172__auto___35222 = temp__4126__auto___35221;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35222], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35222,cljs.core.constant$keyword$64,args__12171__auto___35220,cljs.core.constant$keyword$65,input_schema35204_35217,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var i1 = G__35207;
var i2 = G__35208;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__12170__auto__,ufv___35215,output_schema35203_35216,input_schema35204_35217,input_checker35205_35218,output_checker35206_35219){
return (function (p1__35202_SHARP_){
if(schema.core.specific_key_QMARK_(p1__35202_SHARP_)){
return schema.core.explicit_schema_key(p1__35202_SHARP_);
} else {
return cljs.core.constant$keyword$92;
}
});})(validate__12170__auto__,ufv___35215,output_schema35203_35216,input_schema35204_35217,input_checker35205_35218,output_checker35206_35219))
,((function (validate__12170__auto__,ufv___35215,output_schema35203_35216,input_schema35204_35217,input_checker35205_35218,output_checker35206_35219){
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
});})(validate__12170__auto__,ufv___35215,output_schema35203_35216,input_schema35204_35217,input_checker35205_35218,output_checker35206_35219))
,((function (validate__12170__auto__,ufv___35215,output_schema35203_35216,input_schema35204_35217,input_checker35205_35218,output_checker35206_35219){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__12170__auto__,ufv___35215,output_schema35203_35216,input_schema35204_35217,input_checker35205_35218,output_checker35206_35219))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35223 = (function (){var G__35214 = o__12173__auto__;
return (output_checker35206_35219.cljs$core$IFn$_invoke$arity$1 ? output_checker35206_35219.cljs$core$IFn$_invoke$arity$1(G__35214) : output_checker35206_35219.call(null,G__35214));
})();
if(cljs.core.truth_(temp__4126__auto___35223)){
var error__12172__auto___35224 = temp__4126__auto___35223;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35224], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35224,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35203_35216,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35215,output_schema35203_35216,input_schema35204_35217,input_checker35205_35218,output_checker35206_35219))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema35203_35216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35204_35217], null)));
var ufv___35234 = schema.utils.use_fn_validation;
var output_schema35225_35235 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema35226_35236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker35227_35237 = schema.core.checker(input_schema35226_35236);
var output_checker35228_35238 = schema.core.checker(output_schema35225_35235);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___35234,output_schema35225_35235,input_schema35226_35236,input_checker35227_35237,output_checker35228_35238){
return (function required_toplevel_keys(G__35229){
var validate__12170__auto__ = ufv___35234.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35229], null);
var temp__4126__auto___35240 = (function (){var G__35232 = args__12171__auto___35239;
return (input_checker35227_35237.cljs$core$IFn$_invoke$arity$1 ? input_checker35227_35237.cljs$core$IFn$_invoke$arity$1(G__35232) : input_checker35227_35237.call(null,G__35232));
})();
if(cljs.core.truth_(temp__4126__auto___35240)){
var error__12172__auto___35241 = temp__4126__auto___35240;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35241], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35241,cljs.core.constant$keyword$64,args__12171__auto___35239,cljs.core.constant$keyword$65,input_schema35226_35236,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var input_schema = G__35229;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12170__auto__,ufv___35234,output_schema35225_35235,input_schema35226_35236,input_checker35227_35237,output_checker35228_35238){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__12170__auto__,ufv___35234,output_schema35225_35235,input_schema35226_35236,input_checker35227_35237,output_checker35228_35238))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35242 = (function (){var G__35233 = o__12173__auto__;
return (output_checker35228_35238.cljs$core$IFn$_invoke$arity$1 ? output_checker35228_35238.cljs$core$IFn$_invoke$arity$1(G__35233) : output_checker35228_35238.call(null,G__35233));
})();
if(cljs.core.truth_(temp__4126__auto___35242)){
var error__12172__auto___35243 = temp__4126__auto___35242;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35243], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35243,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35225_35235,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35234,output_schema35225_35235,input_schema35226_35236,input_checker35227_35237,output_checker35228_35238))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema35225_35235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35226_35236], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = (function iter__35258(s__35259){
return (new cljs.core.LazySeq(null,(function (){
var s__35259__$1 = s__35259;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35259__$1);
if(temp__4126__auto__){
var s__35259__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35259__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__35259__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__35261 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__35260 = (0);
while(true){
if((i__35260 < size__4570__auto__)){
var vec__35266 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__35260);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35266,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35266,(1),null);
cljs.core.chunk_append(b__35261,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__35268 = (i__35260 + (1));
i__35260 = G__35268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35261),iter__35258(cljs.core.chunk_rest(s__35259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35261),null);
}
} else {
var vec__35267 = cljs.core.first(s__35259__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35267,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35267,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__35258(cljs.core.rest(s__35259__$2)));
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
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = (function iter__35287(s__35288){
return (new cljs.core.LazySeq(null,(function (){
var s__35288__$1 = s__35288;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35288__$1);
if(temp__4126__auto__){
var s__35288__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35288__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__35288__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__35290 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__35289 = (0);
while(true){
if((i__35289 < size__4570__auto__)){
var vec__35295 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__35289);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35295,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35295,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__35290,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__35297 = (i__35289 + (1));
i__35289 = G__35297;
continue;
} else {
var G__35298 = (i__35289 + (1));
i__35289 = G__35298;
continue;
}
} else {
var G__35299 = (i__35289 + (1));
i__35289 = G__35299;
continue;
}
} else {
var G__35300 = (i__35289 + (1));
i__35289 = G__35300;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35290),iter__35287(cljs.core.chunk_rest(s__35288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35290),null);
}
} else {
var vec__35296 = cljs.core.first(s__35288__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35296,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35296,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__35287(cljs.core.rest(s__35288__$2)));
} else {
var G__35301 = cljs.core.rest(s__35288__$2);
s__35288__$1 = G__35301;
continue;
}
} else {
var G__35302 = cljs.core.rest(s__35288__$2);
s__35288__$1 = G__35302;
continue;
}
} else {
var G__35303 = cljs.core.rest(s__35288__$2);
s__35288__$1 = G__35303;
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
var ufv___35330 = schema.utils.use_fn_validation;
var output_schema35304_35331 = schema.core.Any;
var input_schema35305_35332 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker35306_35333 = schema.core.checker(input_schema35305_35332);
var output_checker35307_35334 = schema.core.checker(output_schema35304_35331);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___35330,output_schema35304_35331,input_schema35305_35332,input_checker35306_35333,output_checker35307_35334){
return (function compose_schemata(G__35308,G__35309){
var validate__12170__auto__ = true;
if(validate__12170__auto__){
var args__12171__auto___35335 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35308,G__35309], null);
var temp__4126__auto___35336 = (function (){var G__35320 = args__12171__auto___35335;
return (input_checker35306_35333.cljs$core$IFn$_invoke$arity$1 ? input_checker35306_35333.cljs$core$IFn$_invoke$arity$1(G__35320) : input_checker35306_35333.call(null,G__35320));
})();
if(cljs.core.truth_(temp__4126__auto___35336)){
var error__12172__auto___35337 = temp__4126__auto___35336;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35337], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35337,cljs.core.constant$keyword$64,args__12171__auto___35335,cljs.core.constant$keyword$65,input_schema35305_35332,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__35323 = G__35308;
var vec__35325 = G__35323;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35325,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35325,(1),null);
var G__35324 = G__35309;
var vec__35326 = G__35324;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326,(1),null);
var G__35323__$1 = G__35323;
var G__35324__$1 = G__35324;
while(true){
var vec__35327 = G__35323__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35327,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35327,(1),null);
var vec__35328 = G__35324__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35328,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35328,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__12170__auto__){
var temp__4126__auto___35338 = (function (){var G__35329 = o__12173__auto__;
return (output_checker35307_35334.cljs$core$IFn$_invoke$arity$1 ? output_checker35307_35334.cljs$core$IFn$_invoke$arity$1(G__35329) : output_checker35307_35334.call(null,G__35329));
})();
if(cljs.core.truth_(temp__4126__auto___35338)){
var error__12172__auto___35339 = temp__4126__auto___35338;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35339], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35339,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35304_35331,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35330,output_schema35304_35331,input_schema35305_35332,input_checker35306_35333,output_checker35307_35334))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema35304_35331,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35305_35332], null)));
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
var ufv___35442 = schema.utils.use_fn_validation;
var output_schema35340_35443 = schema.core.Any;
var input_schema35341_35444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker35342_35445 = schema.core.checker(input_schema35341_35444);
var output_checker35343_35446 = schema.core.checker(output_schema35340_35443);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446){
return (function split_schema(G__35344,G__35345){
var validate__12170__auto__ = ufv___35442.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35344,G__35345], null);
var temp__4126__auto___35448 = (function (){var G__35394 = args__12171__auto___35447;
return (input_checker35342_35445.cljs$core$IFn$_invoke$arity$1 ? input_checker35342_35445.cljs$core$IFn$_invoke$arity$1(G__35394) : input_checker35342_35445.call(null,G__35394));
})();
if(cljs.core.truth_(temp__4126__auto___35448)){
var error__12172__auto___35449 = temp__4126__auto___35448;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35449], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35449,cljs.core.constant$keyword$64,args__12171__auto___35447,cljs.core.constant$keyword$65,input_schema35341_35444,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var s = G__35344;
var ks = G__35345;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__4571__auto__ = ((function (ks__$1,validate__12170__auto__,ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446){
return (function iter__35395(s__35396){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12170__auto__,ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446){
return (function (){
var s__35396__$1 = s__35396;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35396__$1);
if(temp__4126__auto__){
var s__35396__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35396__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__35396__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__35398 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__35397 = (0);
while(true){
if((i__35397 < size__4570__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__35397);
cljs.core.chunk_append(b__35398,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = ((function (i__35397,in_QMARK_,c__4569__auto__,size__4570__auto__,b__35398,s__35396__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446){
return (function iter__35421(s__35422){
return (new cljs.core.LazySeq(null,((function (i__35397,in_QMARK_,c__4569__auto__,size__4570__auto__,b__35398,s__35396__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446){
return (function (){
var s__35422__$1 = s__35422;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__35422__$1);
if(temp__4126__auto____$1){
var s__35422__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35422__$2)){
var c__4569__auto____$1 = cljs.core.chunk_first(s__35422__$2);
var size__4570__auto____$1 = cljs.core.count(c__4569__auto____$1);
var b__35424 = cljs.core.chunk_buffer(size__4570__auto____$1);
if((function (){var i__35423 = (0);
while(true){
if((i__35423 < size__4570__auto____$1)){
var vec__35429 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto____$1,i__35423);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35429,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35429,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__35424,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35450 = (i__35423 + (1));
i__35423 = G__35450;
continue;
} else {
var G__35451 = (i__35423 + (1));
i__35423 = G__35451;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35424),iter__35421(cljs.core.chunk_rest(s__35422__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35424),null);
}
} else {
var vec__35430 = cljs.core.first(s__35422__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35430,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35430,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35421(cljs.core.rest(s__35422__$2)));
} else {
var G__35452 = cljs.core.rest(s__35422__$2);
s__35422__$1 = G__35452;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__35397,in_QMARK_,c__4569__auto__,size__4570__auto__,b__35398,s__35396__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446))
,null,null));
});})(i__35397,in_QMARK_,c__4569__auto__,size__4570__auto__,b__35398,s__35396__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446))
;
return iter__4571__auto__(s);
})()));

var G__35453 = (i__35397 + (1));
i__35397 = G__35453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35398),iter__35395(cljs.core.chunk_rest(s__35396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35398),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__35396__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = ((function (in_QMARK_,s__35396__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446){
return (function iter__35431(s__35432){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__35396__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446){
return (function (){
var s__35432__$1 = s__35432;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__35432__$1);
if(temp__4126__auto____$1){
var s__35432__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35432__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__35432__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__35434 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__35433 = (0);
while(true){
if((i__35433 < size__4570__auto__)){
var vec__35439 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__35433);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35439,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__35434,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35454 = (i__35433 + (1));
i__35433 = G__35454;
continue;
} else {
var G__35455 = (i__35433 + (1));
i__35433 = G__35455;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35434),iter__35431(cljs.core.chunk_rest(s__35432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35434),null);
}
} else {
var vec__35440 = cljs.core.first(s__35432__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35440,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35440,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35431(cljs.core.rest(s__35432__$2)));
} else {
var G__35456 = cljs.core.rest(s__35432__$2);
s__35432__$1 = G__35456;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__35396__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446))
,null,null));
});})(in_QMARK_,s__35396__$2,temp__4126__auto__,ks__$1,validate__12170__auto__,ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446))
;
return iter__4571__auto__(s);
})()),iter__35395(cljs.core.rest(s__35396__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__12170__auto__,ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446))
,null,null));
});})(ks__$1,validate__12170__auto__,ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446))
;
return iter__4571__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35457 = (function (){var G__35441 = o__12173__auto__;
return (output_checker35343_35446.cljs$core$IFn$_invoke$arity$1 ? output_checker35343_35446.cljs$core$IFn$_invoke$arity$1(G__35441) : output_checker35343_35446.call(null,G__35441));
})();
if(cljs.core.truth_(temp__4126__auto___35457)){
var error__12172__auto___35458 = temp__4126__auto___35457;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35458], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35458,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35340_35443,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35442,output_schema35340_35443,input_schema35341_35444,input_checker35342_35445,output_checker35343_35446))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema35340_35443,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35341_35444], null)));
var ufv___35493 = schema.utils.use_fn_validation;
var output_schema35459_35494 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema35460_35495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker35461_35496 = schema.core.checker(input_schema35460_35495);
var output_checker35462_35497 = schema.core.checker(output_schema35459_35494);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___35493,output_schema35459_35494,input_schema35460_35495,input_checker35461_35496,output_checker35462_35497){
return (function sequence_schemata(G__35463,G__35464){
var validate__12170__auto__ = ufv___35493.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___35498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35463,G__35464], null);
var temp__4126__auto___35499 = (function (){var G__35479 = args__12171__auto___35498;
return (input_checker35461_35496.cljs$core$IFn$_invoke$arity$1 ? input_checker35461_35496.cljs$core$IFn$_invoke$arity$1(G__35479) : input_checker35461_35496.call(null,G__35479));
})();
if(cljs.core.truth_(temp__4126__auto___35499)){
var error__12172__auto___35500 = temp__4126__auto___35499;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35500], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35500,cljs.core.constant$keyword$64,args__12171__auto___35498,cljs.core.constant$keyword$65,input_schema35460_35495,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__35483 = G__35463;
var vec__35485 = G__35483;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35485,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35485,(1),null);
var G__35484 = G__35464;
var vec__35486 = G__35484;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35486,(0),null);
var vec__35487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35486,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35487,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35487,(1),null);
var G__35483__$1 = G__35483;
var G__35484__$1 = G__35484;
while(true){
var vec__35488 = G__35483__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35488,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35488,(1),null);
var vec__35489 = G__35484__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35489,(0),null);
var vec__35490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35489,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490,(1),null);
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

var vec__35491 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35491,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35491,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___35501 = (function (){var G__35492 = o__12173__auto__;
return (output_checker35462_35497.cljs$core$IFn$_invoke$arity$1 ? output_checker35462_35497.cljs$core$IFn$_invoke$arity$1(G__35492) : output_checker35462_35497.call(null,G__35492));
})();
if(cljs.core.truth_(temp__4126__auto___35501)){
var error__12172__auto___35502 = temp__4126__auto___35501;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___35502], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___35502,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema35459_35494,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___35493,output_schema35459_35494,input_schema35460_35495,input_checker35461_35496,output_checker35462_35497))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema35459_35494,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35460_35495], null)));
