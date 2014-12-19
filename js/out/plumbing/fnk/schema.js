// Compiled by ClojureScript 0.0-2496
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$34,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$36,(function (p1__6126__6127__auto__){
var G__22157 = p1__6126__6127__auto__;
if(G__22157){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__22157.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__22157.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__22157);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__22157);
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
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22158_SHARP_){
return (cljs.core.val(p1__22158_SHARP_) > (1));
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

var vec__22160 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22160,(1),null);
var p = vec__22160;
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
var ufv___22170 = schema.utils.use_fn_validation;
var output_schema22161_22171 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema22162_22172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker22163_22173 = schema.core.checker(input_schema22162_22172);
var output_checker22164_22174 = schema.core.checker(output_schema22161_22171);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___22170,output_schema22161_22171,input_schema22162_22172,input_checker22163_22173,output_checker22164_22174){
return (function unwrap_schema_form_key(G__22165){
var validate__6096__auto__ = ufv___22170.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22165], null);
var temp__4126__auto___22176 = (function (){var G__22168 = args__6097__auto___22175;
return (input_checker22163_22173.cljs$core$IFn$_invoke$arity$1 ? input_checker22163_22173.cljs$core$IFn$_invoke$arity$1(G__22168) : input_checker22163_22173.call(null,G__22168));
})();
if(cljs.core.truth_(temp__4126__auto___22176)){
var error__6098__auto___22177 = temp__4126__auto___22176;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22177], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22177,cljs.core.constant$keyword$23,args__6097__auto___22175,cljs.core.constant$keyword$24,input_schema22162_22172,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var k = G__22165;
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
var temp__4126__auto___22178 = (function (){var G__22169 = o__6099__auto__;
return (output_checker22164_22174.cljs$core$IFn$_invoke$arity$1 ? output_checker22164_22174.cljs$core$IFn$_invoke$arity$1(G__22169) : output_checker22164_22174.call(null,G__22169));
})();
if(cljs.core.truth_(temp__4126__auto___22178)){
var error__6098__auto___22179 = temp__4126__auto___22178;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22179], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22179,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22161_22171,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22170,output_schema22161_22171,input_schema22162_22172,input_checker22163_22173,output_checker22164_22174))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema22161_22171,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22162_22172], null)));
var ufv___22189 = schema.utils.use_fn_validation;
var output_schema22180_22190 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema22181_22191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker22182_22192 = schema.core.checker(input_schema22181_22191);
var output_checker22183_22193 = schema.core.checker(output_schema22180_22190);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___22189,output_schema22180_22190,input_schema22181_22191,input_checker22182_22192,output_checker22183_22193){
return (function explicit_schema_key_map(G__22184){
var validate__6096__auto__ = ufv___22189.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22194 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22184], null);
var temp__4126__auto___22195 = (function (){var G__22187 = args__6097__auto___22194;
return (input_checker22182_22192.cljs$core$IFn$_invoke$arity$1 ? input_checker22182_22192.cljs$core$IFn$_invoke$arity$1(G__22187) : input_checker22182_22192.call(null,G__22187));
})();
if(cljs.core.truth_(temp__4126__auto___22195)){
var error__6098__auto___22196 = temp__4126__auto___22195;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22196], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22196,cljs.core.constant$keyword$23,args__6097__auto___22194,cljs.core.constant$keyword$24,input_schema22181_22191,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var s = G__22184;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22197 = (function (){var G__22188 = o__6099__auto__;
return (output_checker22183_22193.cljs$core$IFn$_invoke$arity$1 ? output_checker22183_22193.cljs$core$IFn$_invoke$arity$1(G__22188) : output_checker22183_22193.call(null,G__22188));
})();
if(cljs.core.truth_(temp__4126__auto___22197)){
var error__6098__auto___22198 = temp__4126__auto___22197;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22198], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22198,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22180_22190,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22189,output_schema22180_22190,input_schema22181_22191,input_checker22182_22192,output_checker22183_22193))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema22180_22190,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22181_22191], null)));
var ufv___22208 = schema.utils.use_fn_validation;
var output_schema22199_22209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema22200_22210 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker22201_22211 = schema.core.checker(input_schema22200_22210);
var output_checker22202_22212 = schema.core.checker(output_schema22199_22209);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___22208,output_schema22199_22209,input_schema22200_22210,input_checker22201_22211,output_checker22202_22212){
return (function split_schema_keys(G__22203){
var validate__6096__auto__ = ufv___22208.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22203], null);
var temp__4126__auto___22214 = (function (){var G__22206 = args__6097__auto___22213;
return (input_checker22201_22211.cljs$core$IFn$_invoke$arity$1 ? input_checker22201_22211.cljs$core$IFn$_invoke$arity$1(G__22206) : input_checker22201_22211.call(null,G__22206));
})();
if(cljs.core.truth_(temp__4126__auto___22214)){
var error__6098__auto___22215 = temp__4126__auto___22214;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22215], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22215,cljs.core.constant$keyword$23,args__6097__auto___22213,cljs.core.constant$keyword$24,input_schema22200_22210,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var s = G__22203;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22216 = (function (){var G__22207 = o__6099__auto__;
return (output_checker22202_22212.cljs$core$IFn$_invoke$arity$1 ? output_checker22202_22212.cljs$core$IFn$_invoke$arity$1(G__22207) : output_checker22202_22212.call(null,G__22207));
})();
if(cljs.core.truth_(temp__4126__auto___22216)){
var error__6098__auto___22217 = temp__4126__auto___22216;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22217], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22217,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22199_22209,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22208,output_schema22199_22209,input_schema22200_22210,input_checker22201_22211,output_checker22202_22212))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema22199_22209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22200_22210], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22226){
var vec__22227 = p__22226;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22227,(1),null);
var pk = (function (){var G__22228 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__22228) : key_project.call(null,G__22228));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__22229 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22229,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22229,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22230 = ok;
var G__22231 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__22230,G__22231) : key_combine.call(null,G__22230,G__22231));
})(),(function (){var G__22232 = ov;
var G__22233 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__22232,G__22233) : val_combine.call(null,G__22232,G__22233));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__22234){
var key_project = cljs.core.first(arglist__22234);
arglist__22234 = cljs.core.next(arglist__22234);
var key_combine = cljs.core.first(arglist__22234);
arglist__22234 = cljs.core.next(arglist__22234);
var val_combine = cljs.core.first(arglist__22234);
var maps = cljs.core.rest(arglist__22234);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___22248 = schema.utils.use_fn_validation;
var output_schema22236_22249 = plumbing.fnk.schema.InputSchema;
var input_schema22237_22250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker22238_22251 = schema.core.checker(input_schema22237_22250);
var output_checker22239_22252 = schema.core.checker(output_schema22236_22249);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___22248,output_schema22236_22249,input_schema22237_22250,input_checker22238_22251,output_checker22239_22252){
return (function union_input_schemata(G__22240,G__22241){
var validate__6096__auto__ = ufv___22248.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22253 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22240,G__22241], null);
var temp__4126__auto___22254 = (function (){var G__22246 = args__6097__auto___22253;
return (input_checker22238_22251.cljs$core$IFn$_invoke$arity$1 ? input_checker22238_22251.cljs$core$IFn$_invoke$arity$1(G__22246) : input_checker22238_22251.call(null,G__22246));
})();
if(cljs.core.truth_(temp__4126__auto___22254)){
var error__6098__auto___22255 = temp__4126__auto___22254;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22255], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22255,cljs.core.constant$keyword$23,args__6097__auto___22253,cljs.core.constant$keyword$24,input_schema22237_22250,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var i1 = G__22240;
var i2 = G__22241;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__6096__auto__,ufv___22248,output_schema22236_22249,input_schema22237_22250,input_checker22238_22251,output_checker22239_22252){
return (function (p1__22235_SHARP_){
if(schema.core.specific_key_QMARK_(p1__22235_SHARP_)){
return schema.core.explicit_schema_key(p1__22235_SHARP_);
} else {
return cljs.core.constant$keyword$52;
}
});})(validate__6096__auto__,ufv___22248,output_schema22236_22249,input_schema22237_22250,input_checker22238_22251,output_checker22239_22252))
,((function (validate__6096__auto__,ufv___22248,output_schema22236_22249,input_schema22237_22250,input_checker22238_22251,output_checker22239_22252){
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
});})(validate__6096__auto__,ufv___22248,output_schema22236_22249,input_schema22237_22250,input_checker22238_22251,output_checker22239_22252))
,((function (validate__6096__auto__,ufv___22248,output_schema22236_22249,input_schema22237_22250,input_checker22238_22251,output_checker22239_22252){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__6096__auto__,ufv___22248,output_schema22236_22249,input_schema22237_22250,input_checker22238_22251,output_checker22239_22252))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22256 = (function (){var G__22247 = o__6099__auto__;
return (output_checker22239_22252.cljs$core$IFn$_invoke$arity$1 ? output_checker22239_22252.cljs$core$IFn$_invoke$arity$1(G__22247) : output_checker22239_22252.call(null,G__22247));
})();
if(cljs.core.truth_(temp__4126__auto___22256)){
var error__6098__auto___22257 = temp__4126__auto___22256;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22257], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22257,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22236_22249,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22248,output_schema22236_22249,input_schema22237_22250,input_checker22238_22251,output_checker22239_22252))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema22236_22249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22237_22250], null)));
var ufv___22267 = schema.utils.use_fn_validation;
var output_schema22258_22268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema22259_22269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker22260_22270 = schema.core.checker(input_schema22259_22269);
var output_checker22261_22271 = schema.core.checker(output_schema22258_22268);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___22267,output_schema22258_22268,input_schema22259_22269,input_checker22260_22270,output_checker22261_22271){
return (function required_toplevel_keys(G__22262){
var validate__6096__auto__ = ufv___22267.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22262], null);
var temp__4126__auto___22273 = (function (){var G__22265 = args__6097__auto___22272;
return (input_checker22260_22270.cljs$core$IFn$_invoke$arity$1 ? input_checker22260_22270.cljs$core$IFn$_invoke$arity$1(G__22265) : input_checker22260_22270.call(null,G__22265));
})();
if(cljs.core.truth_(temp__4126__auto___22273)){
var error__6098__auto___22274 = temp__4126__auto___22273;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22274], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22274,cljs.core.constant$keyword$23,args__6097__auto___22272,cljs.core.constant$keyword$24,input_schema22259_22269,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var input_schema = G__22262;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__6096__auto__,ufv___22267,output_schema22258_22268,input_schema22259_22269,input_checker22260_22270,output_checker22261_22271){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__6096__auto__,ufv___22267,output_schema22258_22268,input_schema22259_22269,input_checker22260_22270,output_checker22261_22271))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22275 = (function (){var G__22266 = o__6099__auto__;
return (output_checker22261_22271.cljs$core$IFn$_invoke$arity$1 ? output_checker22261_22271.cljs$core$IFn$_invoke$arity$1(G__22266) : output_checker22261_22271.call(null,G__22266));
})();
if(cljs.core.truth_(temp__4126__auto___22275)){
var error__6098__auto___22276 = temp__4126__auto___22275;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22276], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22276,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22258_22268,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22267,output_schema22258_22268,input_schema22259_22269,input_checker22260_22270,output_checker22261_22271))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema22258_22268,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22259_22269], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = (function iter__22291(s__22292){
return (new cljs.core.LazySeq(null,(function (){
var s__22292__$1 = s__22292;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22292__$1);
if(temp__4126__auto__){
var s__22292__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22292__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__22292__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__22294 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__22293 = (0);
while(true){
if((i__22293 < size__4383__auto__)){
var vec__22299 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__22293);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299,(1),null);
cljs.core.chunk_append(b__22294,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__22301 = (i__22293 + (1));
i__22293 = G__22301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22294),iter__22291(cljs.core.chunk_rest(s__22292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22294),null);
}
} else {
var vec__22300 = cljs.core.first(s__22292__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22300,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__22291(cljs.core.rest(s__22292__$2)));
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
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = (function iter__22320(s__22321){
return (new cljs.core.LazySeq(null,(function (){
var s__22321__$1 = s__22321;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22321__$1);
if(temp__4126__auto__){
var s__22321__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22321__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__22321__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__22323 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__22322 = (0);
while(true){
if((i__22322 < size__4383__auto__)){
var vec__22328 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__22322);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22328,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22328,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__22323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__22330 = (i__22322 + (1));
i__22322 = G__22330;
continue;
} else {
var G__22331 = (i__22322 + (1));
i__22322 = G__22331;
continue;
}
} else {
var G__22332 = (i__22322 + (1));
i__22322 = G__22332;
continue;
}
} else {
var G__22333 = (i__22322 + (1));
i__22322 = G__22333;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22323),iter__22320(cljs.core.chunk_rest(s__22321__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22323),null);
}
} else {
var vec__22329 = cljs.core.first(s__22321__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22329,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22329,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__22320(cljs.core.rest(s__22321__$2)));
} else {
var G__22334 = cljs.core.rest(s__22321__$2);
s__22321__$1 = G__22334;
continue;
}
} else {
var G__22335 = cljs.core.rest(s__22321__$2);
s__22321__$1 = G__22335;
continue;
}
} else {
var G__22336 = cljs.core.rest(s__22321__$2);
s__22321__$1 = G__22336;
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
var ufv___22363 = schema.utils.use_fn_validation;
var output_schema22337_22364 = schema.core.Any;
var input_schema22338_22365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker22339_22366 = schema.core.checker(input_schema22338_22365);
var output_checker22340_22367 = schema.core.checker(output_schema22337_22364);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___22363,output_schema22337_22364,input_schema22338_22365,input_checker22339_22366,output_checker22340_22367){
return (function compose_schemata(G__22341,G__22342){
var validate__6096__auto__ = true;
if(validate__6096__auto__){
var args__6097__auto___22368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22341,G__22342], null);
var temp__4126__auto___22369 = (function (){var G__22353 = args__6097__auto___22368;
return (input_checker22339_22366.cljs$core$IFn$_invoke$arity$1 ? input_checker22339_22366.cljs$core$IFn$_invoke$arity$1(G__22353) : input_checker22339_22366.call(null,G__22353));
})();
if(cljs.core.truth_(temp__4126__auto___22369)){
var error__6098__auto___22370 = temp__4126__auto___22369;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22370], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22370,cljs.core.constant$keyword$23,args__6097__auto___22368,cljs.core.constant$keyword$24,input_schema22338_22365,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__22356 = G__22341;
var vec__22358 = G__22356;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22358,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22358,(1),null);
var G__22357 = G__22342;
var vec__22359 = G__22357;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22359,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22359,(1),null);
var G__22356__$1 = G__22356;
var G__22357__$1 = G__22357;
while(true){
var vec__22360 = G__22356__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22360,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22360,(1),null);
var vec__22361 = G__22357__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22361,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22361,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__6096__auto__){
var temp__4126__auto___22371 = (function (){var G__22362 = o__6099__auto__;
return (output_checker22340_22367.cljs$core$IFn$_invoke$arity$1 ? output_checker22340_22367.cljs$core$IFn$_invoke$arity$1(G__22362) : output_checker22340_22367.call(null,G__22362));
})();
if(cljs.core.truth_(temp__4126__auto___22371)){
var error__6098__auto___22372 = temp__4126__auto___22371;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22372], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22372,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22337_22364,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22363,output_schema22337_22364,input_schema22338_22365,input_checker22339_22366,output_checker22340_22367))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema22337_22364,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22338_22365], null)));
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
var ufv___22475 = schema.utils.use_fn_validation;
var output_schema22373_22476 = schema.core.Any;
var input_schema22374_22477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker22375_22478 = schema.core.checker(input_schema22374_22477);
var output_checker22376_22479 = schema.core.checker(output_schema22373_22476);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479){
return (function split_schema(G__22377,G__22378){
var validate__6096__auto__ = ufv___22475.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22377,G__22378], null);
var temp__4126__auto___22481 = (function (){var G__22427 = args__6097__auto___22480;
return (input_checker22375_22478.cljs$core$IFn$_invoke$arity$1 ? input_checker22375_22478.cljs$core$IFn$_invoke$arity$1(G__22427) : input_checker22375_22478.call(null,G__22427));
})();
if(cljs.core.truth_(temp__4126__auto___22481)){
var error__6098__auto___22482 = temp__4126__auto___22481;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22482], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22482,cljs.core.constant$keyword$23,args__6097__auto___22480,cljs.core.constant$keyword$24,input_schema22374_22477,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var s = G__22377;
var ks = G__22378;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__4384__auto__ = ((function (ks__$1,validate__6096__auto__,ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479){
return (function iter__22428(s__22429){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6096__auto__,ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479){
return (function (){
var s__22429__$1 = s__22429;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22429__$1);
if(temp__4126__auto__){
var s__22429__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22429__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__22429__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__22431 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__22430 = (0);
while(true){
if((i__22430 < size__4383__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__22430);
cljs.core.chunk_append(b__22431,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = ((function (i__22430,in_QMARK_,c__4382__auto__,size__4383__auto__,b__22431,s__22429__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479){
return (function iter__22454(s__22455){
return (new cljs.core.LazySeq(null,((function (i__22430,in_QMARK_,c__4382__auto__,size__4383__auto__,b__22431,s__22429__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479){
return (function (){
var s__22455__$1 = s__22455;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__22455__$1);
if(temp__4126__auto____$1){
var s__22455__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22455__$2)){
var c__4382__auto____$1 = cljs.core.chunk_first(s__22455__$2);
var size__4383__auto____$1 = cljs.core.count(c__4382__auto____$1);
var b__22457 = cljs.core.chunk_buffer(size__4383__auto____$1);
if((function (){var i__22456 = (0);
while(true){
if((i__22456 < size__4383__auto____$1)){
var vec__22462 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto____$1,i__22456);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22462,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22462,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__22457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__22483 = (i__22456 + (1));
i__22456 = G__22483;
continue;
} else {
var G__22484 = (i__22456 + (1));
i__22456 = G__22484;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22457),iter__22454(cljs.core.chunk_rest(s__22455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22457),null);
}
} else {
var vec__22463 = cljs.core.first(s__22455__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22463,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22454(cljs.core.rest(s__22455__$2)));
} else {
var G__22485 = cljs.core.rest(s__22455__$2);
s__22455__$1 = G__22485;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__22430,in_QMARK_,c__4382__auto__,size__4383__auto__,b__22431,s__22429__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479))
,null,null));
});})(i__22430,in_QMARK_,c__4382__auto__,size__4383__auto__,b__22431,s__22429__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479))
;
return iter__4384__auto__(s);
})()));

var G__22486 = (i__22430 + (1));
i__22430 = G__22486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22431),iter__22428(cljs.core.chunk_rest(s__22429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22431),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__22429__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = ((function (in_QMARK_,s__22429__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479){
return (function iter__22464(s__22465){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__22429__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479){
return (function (){
var s__22465__$1 = s__22465;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__22465__$1);
if(temp__4126__auto____$1){
var s__22465__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22465__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__22465__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__22467 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__22466 = (0);
while(true){
if((i__22466 < size__4383__auto__)){
var vec__22472 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__22466);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22472,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__22467,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__22487 = (i__22466 + (1));
i__22466 = G__22487;
continue;
} else {
var G__22488 = (i__22466 + (1));
i__22466 = G__22488;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22467),iter__22464(cljs.core.chunk_rest(s__22465__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22467),null);
}
} else {
var vec__22473 = cljs.core.first(s__22465__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22473,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22464(cljs.core.rest(s__22465__$2)));
} else {
var G__22489 = cljs.core.rest(s__22465__$2);
s__22465__$1 = G__22489;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__22429__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479))
,null,null));
});})(in_QMARK_,s__22429__$2,temp__4126__auto__,ks__$1,validate__6096__auto__,ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479))
;
return iter__4384__auto__(s);
})()),iter__22428(cljs.core.rest(s__22429__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__6096__auto__,ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479))
,null,null));
});})(ks__$1,validate__6096__auto__,ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479))
;
return iter__4384__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22490 = (function (){var G__22474 = o__6099__auto__;
return (output_checker22376_22479.cljs$core$IFn$_invoke$arity$1 ? output_checker22376_22479.cljs$core$IFn$_invoke$arity$1(G__22474) : output_checker22376_22479.call(null,G__22474));
})();
if(cljs.core.truth_(temp__4126__auto___22490)){
var error__6098__auto___22491 = temp__4126__auto___22490;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22491], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22491,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22373_22476,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22475,output_schema22373_22476,input_schema22374_22477,input_checker22375_22478,output_checker22376_22479))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema22373_22476,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22374_22477], null)));
var ufv___22526 = schema.utils.use_fn_validation;
var output_schema22492_22527 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema22493_22528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker22494_22529 = schema.core.checker(input_schema22493_22528);
var output_checker22495_22530 = schema.core.checker(output_schema22492_22527);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___22526,output_schema22492_22527,input_schema22493_22528,input_checker22494_22529,output_checker22495_22530){
return (function sequence_schemata(G__22496,G__22497){
var validate__6096__auto__ = ufv___22526.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22496,G__22497], null);
var temp__4126__auto___22532 = (function (){var G__22512 = args__6097__auto___22531;
return (input_checker22494_22529.cljs$core$IFn$_invoke$arity$1 ? input_checker22494_22529.cljs$core$IFn$_invoke$arity$1(G__22512) : input_checker22494_22529.call(null,G__22512));
})();
if(cljs.core.truth_(temp__4126__auto___22532)){
var error__6098__auto___22533 = temp__4126__auto___22532;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22533], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22533,cljs.core.constant$keyword$23,args__6097__auto___22531,cljs.core.constant$keyword$24,input_schema22493_22528,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__22516 = G__22496;
var vec__22518 = G__22516;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22518,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22518,(1),null);
var G__22517 = G__22497;
var vec__22519 = G__22517;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22519,(0),null);
var vec__22520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22519,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22520,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22520,(1),null);
var G__22516__$1 = G__22516;
var G__22517__$1 = G__22517;
while(true){
var vec__22521 = G__22516__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22521,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22521,(1),null);
var vec__22522 = G__22517__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22522,(0),null);
var vec__22523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22522,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(1),null);
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

var vec__22524 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22524,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22524,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22534 = (function (){var G__22525 = o__6099__auto__;
return (output_checker22495_22530.cljs$core$IFn$_invoke$arity$1 ? output_checker22495_22530.cljs$core$IFn$_invoke$arity$1(G__22525) : output_checker22495_22530.call(null,G__22525));
})();
if(cljs.core.truth_(temp__4126__auto___22534)){
var error__6098__auto___22535 = temp__4126__auto___22534;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22535], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22535,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22492_22527,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22526,output_schema22492_22527,input_schema22493_22528,input_checker22494_22529,output_checker22495_22530))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema22492_22527,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22493_22528], null)));
