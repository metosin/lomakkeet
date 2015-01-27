// Compiled by ClojureScript 0.0-2727 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$79,(function (p1__12118__12119__auto__){
var G__30567 = p1__12118__12119__auto__;
if(G__30567){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__30567.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__30567.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__30567);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__30567);
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
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30568_SHARP_){
return (cljs.core.val(p1__30568_SHARP_) > (1));
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

var vec__30570 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30570,(1),null);
var p = vec__30570;
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
var ufv___30580 = schema.utils.use_fn_validation;
var output_schema30571_30581 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema30572_30582 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker30573_30583 = schema.core.checker(input_schema30572_30582);
var output_checker30574_30584 = schema.core.checker(output_schema30571_30581);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___30580,output_schema30571_30581,input_schema30572_30582,input_checker30573_30583,output_checker30574_30584){
return (function unwrap_schema_form_key(G__30575){
var validate__12088__auto__ = ufv___30580.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___30585 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30575], null);
var temp__4126__auto___30586 = (function (){var G__30578 = args__12089__auto___30585;
return (input_checker30573_30583.cljs$core$IFn$_invoke$arity$1 ? input_checker30573_30583.cljs$core$IFn$_invoke$arity$1(G__30578) : input_checker30573_30583.call(null,G__30578));
})();
if(cljs.core.truth_(temp__4126__auto___30586)){
var error__12090__auto___30587 = temp__4126__auto___30586;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30587], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30587,cljs.core.constant$keyword$66,args__12089__auto___30585,cljs.core.constant$keyword$67,input_schema30572_30582,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var k = G__30575;
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
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___30588 = (function (){var G__30579 = o__12091__auto__;
return (output_checker30574_30584.cljs$core$IFn$_invoke$arity$1 ? output_checker30574_30584.cljs$core$IFn$_invoke$arity$1(G__30579) : output_checker30574_30584.call(null,G__30579));
})();
if(cljs.core.truth_(temp__4126__auto___30588)){
var error__12090__auto___30589 = temp__4126__auto___30588;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30589], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30589,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema30571_30581,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___30580,output_schema30571_30581,input_schema30572_30582,input_checker30573_30583,output_checker30574_30584))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema30571_30581,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30572_30582], null)));
var ufv___30599 = schema.utils.use_fn_validation;
var output_schema30590_30600 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema30591_30601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker30592_30602 = schema.core.checker(input_schema30591_30601);
var output_checker30593_30603 = schema.core.checker(output_schema30590_30600);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___30599,output_schema30590_30600,input_schema30591_30601,input_checker30592_30602,output_checker30593_30603){
return (function explicit_schema_key_map(G__30594){
var validate__12088__auto__ = ufv___30599.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___30604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30594], null);
var temp__4126__auto___30605 = (function (){var G__30597 = args__12089__auto___30604;
return (input_checker30592_30602.cljs$core$IFn$_invoke$arity$1 ? input_checker30592_30602.cljs$core$IFn$_invoke$arity$1(G__30597) : input_checker30592_30602.call(null,G__30597));
})();
if(cljs.core.truth_(temp__4126__auto___30605)){
var error__12090__auto___30606 = temp__4126__auto___30605;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30606], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30606,cljs.core.constant$keyword$66,args__12089__auto___30604,cljs.core.constant$keyword$67,input_schema30591_30601,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var s = G__30594;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___30607 = (function (){var G__30598 = o__12091__auto__;
return (output_checker30593_30603.cljs$core$IFn$_invoke$arity$1 ? output_checker30593_30603.cljs$core$IFn$_invoke$arity$1(G__30598) : output_checker30593_30603.call(null,G__30598));
})();
if(cljs.core.truth_(temp__4126__auto___30607)){
var error__12090__auto___30608 = temp__4126__auto___30607;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30608], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30608,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema30590_30600,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___30599,output_schema30590_30600,input_schema30591_30601,input_checker30592_30602,output_checker30593_30603))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema30590_30600,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30591_30601], null)));
var ufv___30618 = schema.utils.use_fn_validation;
var output_schema30609_30619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema30610_30620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker30611_30621 = schema.core.checker(input_schema30610_30620);
var output_checker30612_30622 = schema.core.checker(output_schema30609_30619);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___30618,output_schema30609_30619,input_schema30610_30620,input_checker30611_30621,output_checker30612_30622){
return (function split_schema_keys(G__30613){
var validate__12088__auto__ = ufv___30618.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___30623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30613], null);
var temp__4126__auto___30624 = (function (){var G__30616 = args__12089__auto___30623;
return (input_checker30611_30621.cljs$core$IFn$_invoke$arity$1 ? input_checker30611_30621.cljs$core$IFn$_invoke$arity$1(G__30616) : input_checker30611_30621.call(null,G__30616));
})();
if(cljs.core.truth_(temp__4126__auto___30624)){
var error__12090__auto___30625 = temp__4126__auto___30624;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30625], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30625,cljs.core.constant$keyword$66,args__12089__auto___30623,cljs.core.constant$keyword$67,input_schema30610_30620,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var s = G__30613;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___30626 = (function (){var G__30617 = o__12091__auto__;
return (output_checker30612_30622.cljs$core$IFn$_invoke$arity$1 ? output_checker30612_30622.cljs$core$IFn$_invoke$arity$1(G__30617) : output_checker30612_30622.call(null,G__30617));
})();
if(cljs.core.truth_(temp__4126__auto___30626)){
var error__12090__auto___30627 = temp__4126__auto___30626;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30627], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30627,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema30609_30619,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___30618,output_schema30609_30619,input_schema30610_30620,input_checker30611_30621,output_checker30612_30622))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema30609_30619,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30610_30620], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__30636){
var vec__30637 = p__30636;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30637,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30637,(1),null);
var pk = (function (){var G__30638 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__30638) : key_project.call(null,G__30638));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__30639 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30639,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30639,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30640 = ok;
var G__30641 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__30640,G__30641) : key_combine.call(null,G__30640,G__30641));
})(),(function (){var G__30642 = ov;
var G__30643 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__30642,G__30643) : val_combine.call(null,G__30642,G__30643));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__30644__i = 0, G__30644__a = new Array(arguments.length -  3);
while (G__30644__i < G__30644__a.length) {G__30644__a[G__30644__i] = arguments[G__30644__i + 3]; ++G__30644__i;}
  maps = new cljs.core.IndexedSeq(G__30644__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__30645){
var key_project = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var key_combine = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var val_combine = cljs.core.first(arglist__30645);
var maps = cljs.core.rest(arglist__30645);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___30659 = schema.utils.use_fn_validation;
var output_schema30647_30660 = plumbing.fnk.schema.InputSchema;
var input_schema30648_30661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker30649_30662 = schema.core.checker(input_schema30648_30661);
var output_checker30650_30663 = schema.core.checker(output_schema30647_30660);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___30659,output_schema30647_30660,input_schema30648_30661,input_checker30649_30662,output_checker30650_30663){
return (function union_input_schemata(G__30651,G__30652){
var validate__12088__auto__ = ufv___30659.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___30664 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30651,G__30652], null);
var temp__4126__auto___30665 = (function (){var G__30657 = args__12089__auto___30664;
return (input_checker30649_30662.cljs$core$IFn$_invoke$arity$1 ? input_checker30649_30662.cljs$core$IFn$_invoke$arity$1(G__30657) : input_checker30649_30662.call(null,G__30657));
})();
if(cljs.core.truth_(temp__4126__auto___30665)){
var error__12090__auto___30666 = temp__4126__auto___30665;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30666], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30666,cljs.core.constant$keyword$66,args__12089__auto___30664,cljs.core.constant$keyword$67,input_schema30648_30661,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var i1 = G__30651;
var i2 = G__30652;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__12088__auto__,ufv___30659,output_schema30647_30660,input_schema30648_30661,input_checker30649_30662,output_checker30650_30663){
return (function (p1__30646_SHARP_){
if(schema.core.specific_key_QMARK_(p1__30646_SHARP_)){
return schema.core.explicit_schema_key(p1__30646_SHARP_);
} else {
return cljs.core.constant$keyword$94;
}
});})(validate__12088__auto__,ufv___30659,output_schema30647_30660,input_schema30648_30661,input_checker30649_30662,output_checker30650_30663))
,((function (validate__12088__auto__,ufv___30659,output_schema30647_30660,input_schema30648_30661,input_checker30649_30662,output_checker30650_30663){
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
});})(validate__12088__auto__,ufv___30659,output_schema30647_30660,input_schema30648_30661,input_checker30649_30662,output_checker30650_30663))
,((function (validate__12088__auto__,ufv___30659,output_schema30647_30660,input_schema30648_30661,input_checker30649_30662,output_checker30650_30663){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__12088__auto__,ufv___30659,output_schema30647_30660,input_schema30648_30661,input_checker30649_30662,output_checker30650_30663))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___30667 = (function (){var G__30658 = o__12091__auto__;
return (output_checker30650_30663.cljs$core$IFn$_invoke$arity$1 ? output_checker30650_30663.cljs$core$IFn$_invoke$arity$1(G__30658) : output_checker30650_30663.call(null,G__30658));
})();
if(cljs.core.truth_(temp__4126__auto___30667)){
var error__12090__auto___30668 = temp__4126__auto___30667;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30668], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30668,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema30647_30660,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___30659,output_schema30647_30660,input_schema30648_30661,input_checker30649_30662,output_checker30650_30663))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema30647_30660,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30648_30661], null)));
var ufv___30678 = schema.utils.use_fn_validation;
var output_schema30669_30679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema30670_30680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker30671_30681 = schema.core.checker(input_schema30670_30680);
var output_checker30672_30682 = schema.core.checker(output_schema30669_30679);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___30678,output_schema30669_30679,input_schema30670_30680,input_checker30671_30681,output_checker30672_30682){
return (function required_toplevel_keys(G__30673){
var validate__12088__auto__ = ufv___30678.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___30683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30673], null);
var temp__4126__auto___30684 = (function (){var G__30676 = args__12089__auto___30683;
return (input_checker30671_30681.cljs$core$IFn$_invoke$arity$1 ? input_checker30671_30681.cljs$core$IFn$_invoke$arity$1(G__30676) : input_checker30671_30681.call(null,G__30676));
})();
if(cljs.core.truth_(temp__4126__auto___30684)){
var error__12090__auto___30685 = temp__4126__auto___30684;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30685], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30685,cljs.core.constant$keyword$66,args__12089__auto___30683,cljs.core.constant$keyword$67,input_schema30670_30680,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var input_schema = G__30673;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12088__auto__,ufv___30678,output_schema30669_30679,input_schema30670_30680,input_checker30671_30681,output_checker30672_30682){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__12088__auto__,ufv___30678,output_schema30669_30679,input_schema30670_30680,input_checker30671_30681,output_checker30672_30682))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___30686 = (function (){var G__30677 = o__12091__auto__;
return (output_checker30672_30682.cljs$core$IFn$_invoke$arity$1 ? output_checker30672_30682.cljs$core$IFn$_invoke$arity$1(G__30677) : output_checker30672_30682.call(null,G__30677));
})();
if(cljs.core.truth_(temp__4126__auto___30686)){
var error__12090__auto___30687 = temp__4126__auto___30686;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30687], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30687,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema30669_30679,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___30678,output_schema30669_30679,input_schema30670_30680,input_checker30671_30681,output_checker30672_30682))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema30669_30679,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30670_30680], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4514__auto__ = (function iter__30702(s__30703){
return (new cljs.core.LazySeq(null,(function (){
var s__30703__$1 = s__30703;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__30703__$1);
if(temp__4126__auto__){
var s__30703__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30703__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__30703__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__30705 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__30704 = (0);
while(true){
if((i__30704 < size__4513__auto__)){
var vec__30710 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__30704);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30710,(1),null);
cljs.core.chunk_append(b__30705,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__30712 = (i__30704 + (1));
i__30704 = G__30712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30705),iter__30702(cljs.core.chunk_rest(s__30703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30705),null);
}
} else {
var vec__30711 = cljs.core.first(s__30703__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30711,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30711,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__30702(cljs.core.rest(s__30703__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__(expr);
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
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4514__auto__ = (function iter__30731(s__30732){
return (new cljs.core.LazySeq(null,(function (){
var s__30732__$1 = s__30732;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__30732__$1);
if(temp__4126__auto__){
var s__30732__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30732__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__30732__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__30734 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__30733 = (0);
while(true){
if((i__30733 < size__4513__auto__)){
var vec__30739 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__30733);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30739,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30739,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__30734,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__30741 = (i__30733 + (1));
i__30733 = G__30741;
continue;
} else {
var G__30742 = (i__30733 + (1));
i__30733 = G__30742;
continue;
}
} else {
var G__30743 = (i__30733 + (1));
i__30733 = G__30743;
continue;
}
} else {
var G__30744 = (i__30733 + (1));
i__30733 = G__30744;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30734),iter__30731(cljs.core.chunk_rest(s__30732__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30734),null);
}
} else {
var vec__30740 = cljs.core.first(s__30732__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30740,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__30731(cljs.core.rest(s__30732__$2)));
} else {
var G__30745 = cljs.core.rest(s__30732__$2);
s__30732__$1 = G__30745;
continue;
}
} else {
var G__30746 = cljs.core.rest(s__30732__$2);
s__30732__$1 = G__30746;
continue;
}
} else {
var G__30747 = cljs.core.rest(s__30732__$2);
s__30732__$1 = G__30747;
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
return iter__4514__auto__(input_schema);
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
var ufv___30774 = schema.utils.use_fn_validation;
var output_schema30748_30775 = schema.core.Any;
var input_schema30749_30776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker30750_30777 = schema.core.checker(input_schema30749_30776);
var output_checker30751_30778 = schema.core.checker(output_schema30748_30775);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___30774,output_schema30748_30775,input_schema30749_30776,input_checker30750_30777,output_checker30751_30778){
return (function compose_schemata(G__30752,G__30753){
var validate__12088__auto__ = true;
if(validate__12088__auto__){
var args__12089__auto___30779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30752,G__30753], null);
var temp__4126__auto___30780 = (function (){var G__30764 = args__12089__auto___30779;
return (input_checker30750_30777.cljs$core$IFn$_invoke$arity$1 ? input_checker30750_30777.cljs$core$IFn$_invoke$arity$1(G__30764) : input_checker30750_30777.call(null,G__30764));
})();
if(cljs.core.truth_(temp__4126__auto___30780)){
var error__12090__auto___30781 = temp__4126__auto___30780;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30781], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30781,cljs.core.constant$keyword$66,args__12089__auto___30779,cljs.core.constant$keyword$67,input_schema30749_30776,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var G__30767 = G__30752;
var vec__30769 = G__30767;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30769,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30769,(1),null);
var G__30768 = G__30753;
var vec__30770 = G__30768;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30770,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30770,(1),null);
var G__30767__$1 = G__30767;
var G__30768__$1 = G__30768;
while(true){
var vec__30771 = G__30767__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30771,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30771,(1),null);
var vec__30772 = G__30768__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30772,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30772,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__12088__auto__){
var temp__4126__auto___30782 = (function (){var G__30773 = o__12091__auto__;
return (output_checker30751_30778.cljs$core$IFn$_invoke$arity$1 ? output_checker30751_30778.cljs$core$IFn$_invoke$arity$1(G__30773) : output_checker30751_30778.call(null,G__30773));
})();
if(cljs.core.truth_(temp__4126__auto___30782)){
var error__12090__auto___30783 = temp__4126__auto___30782;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30783], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30783,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema30748_30775,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___30774,output_schema30748_30775,input_schema30749_30776,input_checker30750_30777,output_checker30751_30778))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema30748_30775,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30749_30776], null)));
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
var ufv___30886 = schema.utils.use_fn_validation;
var output_schema30784_30887 = schema.core.Any;
var input_schema30785_30888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker30786_30889 = schema.core.checker(input_schema30785_30888);
var output_checker30787_30890 = schema.core.checker(output_schema30784_30887);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890){
return (function split_schema(G__30788,G__30789){
var validate__12088__auto__ = ufv___30886.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___30891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30788,G__30789], null);
var temp__4126__auto___30892 = (function (){var G__30838 = args__12089__auto___30891;
return (input_checker30786_30889.cljs$core$IFn$_invoke$arity$1 ? input_checker30786_30889.cljs$core$IFn$_invoke$arity$1(G__30838) : input_checker30786_30889.call(null,G__30838));
})();
if(cljs.core.truth_(temp__4126__auto___30892)){
var error__12090__auto___30893 = temp__4126__auto___30892;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30893], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30893,cljs.core.constant$keyword$66,args__12089__auto___30891,cljs.core.constant$keyword$67,input_schema30785_30888,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var s = G__30788;
var ks = G__30789;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__4514__auto__ = ((function (ks__$1,validate__12088__auto__,ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890){
return (function iter__30839(s__30840){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12088__auto__,ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890){
return (function (){
var s__30840__$1 = s__30840;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__30840__$1);
if(temp__4126__auto__){
var s__30840__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30840__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__30840__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__30842 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__30841 = (0);
while(true){
if((i__30841 < size__4513__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__30841);
cljs.core.chunk_append(b__30842,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4514__auto__ = ((function (i__30841,in_QMARK_,c__4512__auto__,size__4513__auto__,b__30842,s__30840__$2,temp__4126__auto__,ks__$1,validate__12088__auto__,ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890){
return (function iter__30865(s__30866){
return (new cljs.core.LazySeq(null,((function (i__30841,in_QMARK_,c__4512__auto__,size__4513__auto__,b__30842,s__30840__$2,temp__4126__auto__,ks__$1,validate__12088__auto__,ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890){
return (function (){
var s__30866__$1 = s__30866;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__30866__$1);
if(temp__4126__auto____$1){
var s__30866__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30866__$2)){
var c__4512__auto____$1 = cljs.core.chunk_first(s__30866__$2);
var size__4513__auto____$1 = cljs.core.count(c__4512__auto____$1);
var b__30868 = cljs.core.chunk_buffer(size__4513__auto____$1);
if((function (){var i__30867 = (0);
while(true){
if((i__30867 < size__4513__auto____$1)){
var vec__30873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto____$1,i__30867);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30873,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30873,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__30868,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__30894 = (i__30867 + (1));
i__30867 = G__30894;
continue;
} else {
var G__30895 = (i__30867 + (1));
i__30867 = G__30895;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30868),iter__30865(cljs.core.chunk_rest(s__30866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30868),null);
}
} else {
var vec__30874 = cljs.core.first(s__30866__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30874,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30874,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__30865(cljs.core.rest(s__30866__$2)));
} else {
var G__30896 = cljs.core.rest(s__30866__$2);
s__30866__$1 = G__30896;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__30841,in_QMARK_,c__4512__auto__,size__4513__auto__,b__30842,s__30840__$2,temp__4126__auto__,ks__$1,validate__12088__auto__,ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890))
,null,null));
});})(i__30841,in_QMARK_,c__4512__auto__,size__4513__auto__,b__30842,s__30840__$2,temp__4126__auto__,ks__$1,validate__12088__auto__,ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890))
;
return iter__4514__auto__(s);
})()));

var G__30897 = (i__30841 + (1));
i__30841 = G__30897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30842),iter__30839(cljs.core.chunk_rest(s__30840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30842),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__30840__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4514__auto__ = ((function (in_QMARK_,s__30840__$2,temp__4126__auto__,ks__$1,validate__12088__auto__,ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890){
return (function iter__30875(s__30876){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__30840__$2,temp__4126__auto__,ks__$1,validate__12088__auto__,ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890){
return (function (){
var s__30876__$1 = s__30876;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__30876__$1);
if(temp__4126__auto____$1){
var s__30876__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30876__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__30876__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__30878 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__30877 = (0);
while(true){
if((i__30877 < size__4513__auto__)){
var vec__30883 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__30877);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30883,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30883,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__30878,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__30898 = (i__30877 + (1));
i__30877 = G__30898;
continue;
} else {
var G__30899 = (i__30877 + (1));
i__30877 = G__30899;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30878),iter__30875(cljs.core.chunk_rest(s__30876__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30878),null);
}
} else {
var vec__30884 = cljs.core.first(s__30876__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30884,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30884,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__30875(cljs.core.rest(s__30876__$2)));
} else {
var G__30900 = cljs.core.rest(s__30876__$2);
s__30876__$1 = G__30900;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__30840__$2,temp__4126__auto__,ks__$1,validate__12088__auto__,ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890))
,null,null));
});})(in_QMARK_,s__30840__$2,temp__4126__auto__,ks__$1,validate__12088__auto__,ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890))
;
return iter__4514__auto__(s);
})()),iter__30839(cljs.core.rest(s__30840__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__12088__auto__,ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890))
,null,null));
});})(ks__$1,validate__12088__auto__,ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890))
;
return iter__4514__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___30901 = (function (){var G__30885 = o__12091__auto__;
return (output_checker30787_30890.cljs$core$IFn$_invoke$arity$1 ? output_checker30787_30890.cljs$core$IFn$_invoke$arity$1(G__30885) : output_checker30787_30890.call(null,G__30885));
})();
if(cljs.core.truth_(temp__4126__auto___30901)){
var error__12090__auto___30902 = temp__4126__auto___30901;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30902], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30902,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema30784_30887,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___30886,output_schema30784_30887,input_schema30785_30888,input_checker30786_30889,output_checker30787_30890))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema30784_30887,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30785_30888], null)));
var ufv___30937 = schema.utils.use_fn_validation;
var output_schema30903_30938 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema30904_30939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker30905_30940 = schema.core.checker(input_schema30904_30939);
var output_checker30906_30941 = schema.core.checker(output_schema30903_30938);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___30937,output_schema30903_30938,input_schema30904_30939,input_checker30905_30940,output_checker30906_30941){
return (function sequence_schemata(G__30907,G__30908){
var validate__12088__auto__ = ufv___30937.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___30942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30907,G__30908], null);
var temp__4126__auto___30943 = (function (){var G__30923 = args__12089__auto___30942;
return (input_checker30905_30940.cljs$core$IFn$_invoke$arity$1 ? input_checker30905_30940.cljs$core$IFn$_invoke$arity$1(G__30923) : input_checker30905_30940.call(null,G__30923));
})();
if(cljs.core.truth_(temp__4126__auto___30943)){
var error__12090__auto___30944 = temp__4126__auto___30943;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30944], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30944,cljs.core.constant$keyword$66,args__12089__auto___30942,cljs.core.constant$keyword$67,input_schema30904_30939,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var G__30927 = G__30907;
var vec__30929 = G__30927;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30929,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30929,(1),null);
var G__30928 = G__30908;
var vec__30930 = G__30928;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30930,(0),null);
var vec__30931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30930,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30931,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30931,(1),null);
var G__30927__$1 = G__30927;
var G__30928__$1 = G__30928;
while(true){
var vec__30932 = G__30927__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30932,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30932,(1),null);
var vec__30933 = G__30928__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30933,(0),null);
var vec__30934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30933,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30934,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30934,(1),null);
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

var vec__30935 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30935,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30935,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___30945 = (function (){var G__30936 = o__12091__auto__;
return (output_checker30906_30941.cljs$core$IFn$_invoke$arity$1 ? output_checker30906_30941.cljs$core$IFn$_invoke$arity$1(G__30936) : output_checker30906_30941.call(null,G__30936));
})();
if(cljs.core.truth_(temp__4126__auto___30945)){
var error__12090__auto___30946 = temp__4126__auto___30945;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___30946], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___30946,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema30903_30938,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___30937,output_schema30903_30938,input_schema30904_30939,input_checker30905_30940,output_checker30906_30941))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema30903_30938,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30904_30939], null)));
