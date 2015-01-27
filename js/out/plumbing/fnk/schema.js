// Compiled by ClojureScript 0.0-2727 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$34,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$36,(function (p1__10748__10749__auto__){
var G__23650 = p1__10748__10749__auto__;
if(G__23650){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__23650.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__23650.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__23650);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__23650);
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
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23651_SHARP_){
return (cljs.core.val(p1__23651_SHARP_) > (1));
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

var vec__23653 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23653,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23653,(1),null);
var p = vec__23653;
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
var ufv___23663 = schema.utils.use_fn_validation;
var output_schema23654_23664 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema23655_23665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker23656_23666 = schema.core.checker(input_schema23655_23665);
var output_checker23657_23667 = schema.core.checker(output_schema23654_23664);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___23663,output_schema23654_23664,input_schema23655_23665,input_checker23656_23666,output_checker23657_23667){
return (function unwrap_schema_form_key(G__23658){
var validate__10718__auto__ = ufv___23663.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___23668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23658], null);
var temp__4126__auto___23669 = (function (){var G__23661 = args__10719__auto___23668;
return (input_checker23656_23666.cljs$core$IFn$_invoke$arity$1 ? input_checker23656_23666.cljs$core$IFn$_invoke$arity$1(G__23661) : input_checker23656_23666.call(null,G__23661));
})();
if(cljs.core.truth_(temp__4126__auto___23669)){
var error__10720__auto___23670 = temp__4126__auto___23669;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23670], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23670,cljs.core.constant$keyword$23,args__10719__auto___23668,cljs.core.constant$keyword$24,input_schema23655_23665,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var k = G__23658;
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
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___23671 = (function (){var G__23662 = o__10721__auto__;
return (output_checker23657_23667.cljs$core$IFn$_invoke$arity$1 ? output_checker23657_23667.cljs$core$IFn$_invoke$arity$1(G__23662) : output_checker23657_23667.call(null,G__23662));
})();
if(cljs.core.truth_(temp__4126__auto___23671)){
var error__10720__auto___23672 = temp__4126__auto___23671;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23672], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23672,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema23654_23664,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___23663,output_schema23654_23664,input_schema23655_23665,input_checker23656_23666,output_checker23657_23667))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema23654_23664,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23655_23665], null)));
var ufv___23682 = schema.utils.use_fn_validation;
var output_schema23673_23683 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema23674_23684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker23675_23685 = schema.core.checker(input_schema23674_23684);
var output_checker23676_23686 = schema.core.checker(output_schema23673_23683);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___23682,output_schema23673_23683,input_schema23674_23684,input_checker23675_23685,output_checker23676_23686){
return (function explicit_schema_key_map(G__23677){
var validate__10718__auto__ = ufv___23682.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___23687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23677], null);
var temp__4126__auto___23688 = (function (){var G__23680 = args__10719__auto___23687;
return (input_checker23675_23685.cljs$core$IFn$_invoke$arity$1 ? input_checker23675_23685.cljs$core$IFn$_invoke$arity$1(G__23680) : input_checker23675_23685.call(null,G__23680));
})();
if(cljs.core.truth_(temp__4126__auto___23688)){
var error__10720__auto___23689 = temp__4126__auto___23688;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23689], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23689,cljs.core.constant$keyword$23,args__10719__auto___23687,cljs.core.constant$keyword$24,input_schema23674_23684,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var s = G__23677;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___23690 = (function (){var G__23681 = o__10721__auto__;
return (output_checker23676_23686.cljs$core$IFn$_invoke$arity$1 ? output_checker23676_23686.cljs$core$IFn$_invoke$arity$1(G__23681) : output_checker23676_23686.call(null,G__23681));
})();
if(cljs.core.truth_(temp__4126__auto___23690)){
var error__10720__auto___23691 = temp__4126__auto___23690;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23691], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23691,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema23673_23683,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___23682,output_schema23673_23683,input_schema23674_23684,input_checker23675_23685,output_checker23676_23686))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema23673_23683,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23674_23684], null)));
var ufv___23701 = schema.utils.use_fn_validation;
var output_schema23692_23702 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema23693_23703 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker23694_23704 = schema.core.checker(input_schema23693_23703);
var output_checker23695_23705 = schema.core.checker(output_schema23692_23702);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___23701,output_schema23692_23702,input_schema23693_23703,input_checker23694_23704,output_checker23695_23705){
return (function split_schema_keys(G__23696){
var validate__10718__auto__ = ufv___23701.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___23706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23696], null);
var temp__4126__auto___23707 = (function (){var G__23699 = args__10719__auto___23706;
return (input_checker23694_23704.cljs$core$IFn$_invoke$arity$1 ? input_checker23694_23704.cljs$core$IFn$_invoke$arity$1(G__23699) : input_checker23694_23704.call(null,G__23699));
})();
if(cljs.core.truth_(temp__4126__auto___23707)){
var error__10720__auto___23708 = temp__4126__auto___23707;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23708], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23708,cljs.core.constant$keyword$23,args__10719__auto___23706,cljs.core.constant$keyword$24,input_schema23693_23703,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var s = G__23696;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___23709 = (function (){var G__23700 = o__10721__auto__;
return (output_checker23695_23705.cljs$core$IFn$_invoke$arity$1 ? output_checker23695_23705.cljs$core$IFn$_invoke$arity$1(G__23700) : output_checker23695_23705.call(null,G__23700));
})();
if(cljs.core.truth_(temp__4126__auto___23709)){
var error__10720__auto___23710 = temp__4126__auto___23709;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23710], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23710,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema23692_23702,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___23701,output_schema23692_23702,input_schema23693_23703,input_checker23694_23704,output_checker23695_23705))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema23692_23702,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23693_23703], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__23719){
var vec__23720 = p__23719;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23720,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23720,(1),null);
var pk = (function (){var G__23721 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__23721) : key_project.call(null,G__23721));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__23722 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23722,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23722,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23723 = ok;
var G__23724 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__23723,G__23724) : key_combine.call(null,G__23723,G__23724));
})(),(function (){var G__23725 = ov;
var G__23726 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__23725,G__23726) : val_combine.call(null,G__23725,G__23726));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__23727__i = 0, G__23727__a = new Array(arguments.length -  3);
while (G__23727__i < G__23727__a.length) {G__23727__a[G__23727__i] = arguments[G__23727__i + 3]; ++G__23727__i;}
  maps = new cljs.core.IndexedSeq(G__23727__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__23728){
var key_project = cljs.core.first(arglist__23728);
arglist__23728 = cljs.core.next(arglist__23728);
var key_combine = cljs.core.first(arglist__23728);
arglist__23728 = cljs.core.next(arglist__23728);
var val_combine = cljs.core.first(arglist__23728);
var maps = cljs.core.rest(arglist__23728);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___23742 = schema.utils.use_fn_validation;
var output_schema23730_23743 = plumbing.fnk.schema.InputSchema;
var input_schema23731_23744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker23732_23745 = schema.core.checker(input_schema23731_23744);
var output_checker23733_23746 = schema.core.checker(output_schema23730_23743);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___23742,output_schema23730_23743,input_schema23731_23744,input_checker23732_23745,output_checker23733_23746){
return (function union_input_schemata(G__23734,G__23735){
var validate__10718__auto__ = ufv___23742.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___23747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23734,G__23735], null);
var temp__4126__auto___23748 = (function (){var G__23740 = args__10719__auto___23747;
return (input_checker23732_23745.cljs$core$IFn$_invoke$arity$1 ? input_checker23732_23745.cljs$core$IFn$_invoke$arity$1(G__23740) : input_checker23732_23745.call(null,G__23740));
})();
if(cljs.core.truth_(temp__4126__auto___23748)){
var error__10720__auto___23749 = temp__4126__auto___23748;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23749], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23749,cljs.core.constant$keyword$23,args__10719__auto___23747,cljs.core.constant$keyword$24,input_schema23731_23744,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var i1 = G__23734;
var i2 = G__23735;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__10718__auto__,ufv___23742,output_schema23730_23743,input_schema23731_23744,input_checker23732_23745,output_checker23733_23746){
return (function (p1__23729_SHARP_){
if(schema.core.specific_key_QMARK_(p1__23729_SHARP_)){
return schema.core.explicit_schema_key(p1__23729_SHARP_);
} else {
return cljs.core.constant$keyword$52;
}
});})(validate__10718__auto__,ufv___23742,output_schema23730_23743,input_schema23731_23744,input_checker23732_23745,output_checker23733_23746))
,((function (validate__10718__auto__,ufv___23742,output_schema23730_23743,input_schema23731_23744,input_checker23732_23745,output_checker23733_23746){
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
});})(validate__10718__auto__,ufv___23742,output_schema23730_23743,input_schema23731_23744,input_checker23732_23745,output_checker23733_23746))
,((function (validate__10718__auto__,ufv___23742,output_schema23730_23743,input_schema23731_23744,input_checker23732_23745,output_checker23733_23746){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__10718__auto__,ufv___23742,output_schema23730_23743,input_schema23731_23744,input_checker23732_23745,output_checker23733_23746))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___23750 = (function (){var G__23741 = o__10721__auto__;
return (output_checker23733_23746.cljs$core$IFn$_invoke$arity$1 ? output_checker23733_23746.cljs$core$IFn$_invoke$arity$1(G__23741) : output_checker23733_23746.call(null,G__23741));
})();
if(cljs.core.truth_(temp__4126__auto___23750)){
var error__10720__auto___23751 = temp__4126__auto___23750;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23751], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23751,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema23730_23743,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___23742,output_schema23730_23743,input_schema23731_23744,input_checker23732_23745,output_checker23733_23746))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema23730_23743,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23731_23744], null)));
var ufv___23761 = schema.utils.use_fn_validation;
var output_schema23752_23762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema23753_23763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker23754_23764 = schema.core.checker(input_schema23753_23763);
var output_checker23755_23765 = schema.core.checker(output_schema23752_23762);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___23761,output_schema23752_23762,input_schema23753_23763,input_checker23754_23764,output_checker23755_23765){
return (function required_toplevel_keys(G__23756){
var validate__10718__auto__ = ufv___23761.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___23766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23756], null);
var temp__4126__auto___23767 = (function (){var G__23759 = args__10719__auto___23766;
return (input_checker23754_23764.cljs$core$IFn$_invoke$arity$1 ? input_checker23754_23764.cljs$core$IFn$_invoke$arity$1(G__23759) : input_checker23754_23764.call(null,G__23759));
})();
if(cljs.core.truth_(temp__4126__auto___23767)){
var error__10720__auto___23768 = temp__4126__auto___23767;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23768], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23768,cljs.core.constant$keyword$23,args__10719__auto___23766,cljs.core.constant$keyword$24,input_schema23753_23763,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var input_schema = G__23756;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__10718__auto__,ufv___23761,output_schema23752_23762,input_schema23753_23763,input_checker23754_23764,output_checker23755_23765){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__10718__auto__,ufv___23761,output_schema23752_23762,input_schema23753_23763,input_checker23754_23764,output_checker23755_23765))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___23769 = (function (){var G__23760 = o__10721__auto__;
return (output_checker23755_23765.cljs$core$IFn$_invoke$arity$1 ? output_checker23755_23765.cljs$core$IFn$_invoke$arity$1(G__23760) : output_checker23755_23765.call(null,G__23760));
})();
if(cljs.core.truth_(temp__4126__auto___23769)){
var error__10720__auto___23770 = temp__4126__auto___23769;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23770], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23770,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema23752_23762,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___23761,output_schema23752_23762,input_schema23753_23763,input_checker23754_23764,output_checker23755_23765))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema23752_23762,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23753_23763], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4514__auto__ = (function iter__23785(s__23786){
return (new cljs.core.LazySeq(null,(function (){
var s__23786__$1 = s__23786;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23786__$1);
if(temp__4126__auto__){
var s__23786__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23786__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__23786__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__23788 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__23787 = (0);
while(true){
if((i__23787 < size__4513__auto__)){
var vec__23793 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__23787);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23793,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23793,(1),null);
cljs.core.chunk_append(b__23788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__23795 = (i__23787 + (1));
i__23787 = G__23795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23788),iter__23785(cljs.core.chunk_rest(s__23786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23788),null);
}
} else {
var vec__23794 = cljs.core.first(s__23786__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23794,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23794,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__23785(cljs.core.rest(s__23786__$2)));
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
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4514__auto__ = (function iter__23814(s__23815){
return (new cljs.core.LazySeq(null,(function (){
var s__23815__$1 = s__23815;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23815__$1);
if(temp__4126__auto__){
var s__23815__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23815__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__23815__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__23817 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__23816 = (0);
while(true){
if((i__23816 < size__4513__auto__)){
var vec__23822 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__23816);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23822,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__23817,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__23824 = (i__23816 + (1));
i__23816 = G__23824;
continue;
} else {
var G__23825 = (i__23816 + (1));
i__23816 = G__23825;
continue;
}
} else {
var G__23826 = (i__23816 + (1));
i__23816 = G__23826;
continue;
}
} else {
var G__23827 = (i__23816 + (1));
i__23816 = G__23827;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23817),iter__23814(cljs.core.chunk_rest(s__23815__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23817),null);
}
} else {
var vec__23823 = cljs.core.first(s__23815__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23823,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23823,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__23814(cljs.core.rest(s__23815__$2)));
} else {
var G__23828 = cljs.core.rest(s__23815__$2);
s__23815__$1 = G__23828;
continue;
}
} else {
var G__23829 = cljs.core.rest(s__23815__$2);
s__23815__$1 = G__23829;
continue;
}
} else {
var G__23830 = cljs.core.rest(s__23815__$2);
s__23815__$1 = G__23830;
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
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$22,cljs.core.constant$keyword$54,cljs.core.constant$keyword$53,fails], null));
} else {
return null;
}
});
var ufv___23857 = schema.utils.use_fn_validation;
var output_schema23831_23858 = schema.core.Any;
var input_schema23832_23859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker23833_23860 = schema.core.checker(input_schema23832_23859);
var output_checker23834_23861 = schema.core.checker(output_schema23831_23858);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___23857,output_schema23831_23858,input_schema23832_23859,input_checker23833_23860,output_checker23834_23861){
return (function compose_schemata(G__23835,G__23836){
var validate__10718__auto__ = true;
if(validate__10718__auto__){
var args__10719__auto___23862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23835,G__23836], null);
var temp__4126__auto___23863 = (function (){var G__23847 = args__10719__auto___23862;
return (input_checker23833_23860.cljs$core$IFn$_invoke$arity$1 ? input_checker23833_23860.cljs$core$IFn$_invoke$arity$1(G__23847) : input_checker23833_23860.call(null,G__23847));
})();
if(cljs.core.truth_(temp__4126__auto___23863)){
var error__10720__auto___23864 = temp__4126__auto___23863;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23864], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23864,cljs.core.constant$keyword$23,args__10719__auto___23862,cljs.core.constant$keyword$24,input_schema23832_23859,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var G__23850 = G__23835;
var vec__23852 = G__23850;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23852,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23852,(1),null);
var G__23851 = G__23836;
var vec__23853 = G__23851;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23853,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23853,(1),null);
var G__23850__$1 = G__23850;
var G__23851__$1 = G__23851;
while(true){
var vec__23854 = G__23850__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23854,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23854,(1),null);
var vec__23855 = G__23851__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23855,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23855,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__10718__auto__){
var temp__4126__auto___23865 = (function (){var G__23856 = o__10721__auto__;
return (output_checker23834_23861.cljs$core$IFn$_invoke$arity$1 ? output_checker23834_23861.cljs$core$IFn$_invoke$arity$1(G__23856) : output_checker23834_23861.call(null,G__23856));
})();
if(cljs.core.truth_(temp__4126__auto___23865)){
var error__10720__auto___23866 = temp__4126__auto___23865;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23866], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23866,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema23831_23858,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___23857,output_schema23831_23858,input_schema23832_23859,input_checker23833_23860,output_checker23834_23861))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema23831_23858,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23832_23859], null)));
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
var ufv___23969 = schema.utils.use_fn_validation;
var output_schema23867_23970 = schema.core.Any;
var input_schema23868_23971 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker23869_23972 = schema.core.checker(input_schema23868_23971);
var output_checker23870_23973 = schema.core.checker(output_schema23867_23970);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973){
return (function split_schema(G__23871,G__23872){
var validate__10718__auto__ = ufv___23969.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___23974 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23871,G__23872], null);
var temp__4126__auto___23975 = (function (){var G__23921 = args__10719__auto___23974;
return (input_checker23869_23972.cljs$core$IFn$_invoke$arity$1 ? input_checker23869_23972.cljs$core$IFn$_invoke$arity$1(G__23921) : input_checker23869_23972.call(null,G__23921));
})();
if(cljs.core.truth_(temp__4126__auto___23975)){
var error__10720__auto___23976 = temp__4126__auto___23975;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23976], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23976,cljs.core.constant$keyword$23,args__10719__auto___23974,cljs.core.constant$keyword$24,input_schema23868_23971,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var s = G__23871;
var ks = G__23872;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__4514__auto__ = ((function (ks__$1,validate__10718__auto__,ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973){
return (function iter__23922(s__23923){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10718__auto__,ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973){
return (function (){
var s__23923__$1 = s__23923;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23923__$1);
if(temp__4126__auto__){
var s__23923__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23923__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__23923__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__23925 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__23924 = (0);
while(true){
if((i__23924 < size__4513__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__23924);
cljs.core.chunk_append(b__23925,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4514__auto__ = ((function (i__23924,in_QMARK_,c__4512__auto__,size__4513__auto__,b__23925,s__23923__$2,temp__4126__auto__,ks__$1,validate__10718__auto__,ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973){
return (function iter__23948(s__23949){
return (new cljs.core.LazySeq(null,((function (i__23924,in_QMARK_,c__4512__auto__,size__4513__auto__,b__23925,s__23923__$2,temp__4126__auto__,ks__$1,validate__10718__auto__,ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973){
return (function (){
var s__23949__$1 = s__23949;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__23949__$1);
if(temp__4126__auto____$1){
var s__23949__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23949__$2)){
var c__4512__auto____$1 = cljs.core.chunk_first(s__23949__$2);
var size__4513__auto____$1 = cljs.core.count(c__4512__auto____$1);
var b__23951 = cljs.core.chunk_buffer(size__4513__auto____$1);
if((function (){var i__23950 = (0);
while(true){
if((i__23950 < size__4513__auto____$1)){
var vec__23956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto____$1,i__23950);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23956,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23956,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__23951,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23977 = (i__23950 + (1));
i__23950 = G__23977;
continue;
} else {
var G__23978 = (i__23950 + (1));
i__23950 = G__23978;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23951),iter__23948(cljs.core.chunk_rest(s__23949__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23951),null);
}
} else {
var vec__23957 = cljs.core.first(s__23949__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23957,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23957,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23948(cljs.core.rest(s__23949__$2)));
} else {
var G__23979 = cljs.core.rest(s__23949__$2);
s__23949__$1 = G__23979;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__23924,in_QMARK_,c__4512__auto__,size__4513__auto__,b__23925,s__23923__$2,temp__4126__auto__,ks__$1,validate__10718__auto__,ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973))
,null,null));
});})(i__23924,in_QMARK_,c__4512__auto__,size__4513__auto__,b__23925,s__23923__$2,temp__4126__auto__,ks__$1,validate__10718__auto__,ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973))
;
return iter__4514__auto__(s);
})()));

var G__23980 = (i__23924 + (1));
i__23924 = G__23980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23925),iter__23922(cljs.core.chunk_rest(s__23923__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23925),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__23923__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4514__auto__ = ((function (in_QMARK_,s__23923__$2,temp__4126__auto__,ks__$1,validate__10718__auto__,ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973){
return (function iter__23958(s__23959){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__23923__$2,temp__4126__auto__,ks__$1,validate__10718__auto__,ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973){
return (function (){
var s__23959__$1 = s__23959;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__23959__$1);
if(temp__4126__auto____$1){
var s__23959__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23959__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__23959__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__23961 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__23960 = (0);
while(true){
if((i__23960 < size__4513__auto__)){
var vec__23966 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__23960);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23966,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23966,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__23961,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23981 = (i__23960 + (1));
i__23960 = G__23981;
continue;
} else {
var G__23982 = (i__23960 + (1));
i__23960 = G__23982;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23961),iter__23958(cljs.core.chunk_rest(s__23959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23961),null);
}
} else {
var vec__23967 = cljs.core.first(s__23959__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23967,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23967,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23958(cljs.core.rest(s__23959__$2)));
} else {
var G__23983 = cljs.core.rest(s__23959__$2);
s__23959__$1 = G__23983;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__23923__$2,temp__4126__auto__,ks__$1,validate__10718__auto__,ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973))
,null,null));
});})(in_QMARK_,s__23923__$2,temp__4126__auto__,ks__$1,validate__10718__auto__,ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973))
;
return iter__4514__auto__(s);
})()),iter__23922(cljs.core.rest(s__23923__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__10718__auto__,ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973))
,null,null));
});})(ks__$1,validate__10718__auto__,ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973))
;
return iter__4514__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___23984 = (function (){var G__23968 = o__10721__auto__;
return (output_checker23870_23973.cljs$core$IFn$_invoke$arity$1 ? output_checker23870_23973.cljs$core$IFn$_invoke$arity$1(G__23968) : output_checker23870_23973.call(null,G__23968));
})();
if(cljs.core.truth_(temp__4126__auto___23984)){
var error__10720__auto___23985 = temp__4126__auto___23984;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23985], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23985,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema23867_23970,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___23969,output_schema23867_23970,input_schema23868_23971,input_checker23869_23972,output_checker23870_23973))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema23867_23970,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23868_23971], null)));
var ufv___24020 = schema.utils.use_fn_validation;
var output_schema23986_24021 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema23987_24022 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker23988_24023 = schema.core.checker(input_schema23987_24022);
var output_checker23989_24024 = schema.core.checker(output_schema23986_24021);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___24020,output_schema23986_24021,input_schema23987_24022,input_checker23988_24023,output_checker23989_24024){
return (function sequence_schemata(G__23990,G__23991){
var validate__10718__auto__ = ufv___24020.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___24025 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23990,G__23991], null);
var temp__4126__auto___24026 = (function (){var G__24006 = args__10719__auto___24025;
return (input_checker23988_24023.cljs$core$IFn$_invoke$arity$1 ? input_checker23988_24023.cljs$core$IFn$_invoke$arity$1(G__24006) : input_checker23988_24023.call(null,G__24006));
})();
if(cljs.core.truth_(temp__4126__auto___24026)){
var error__10720__auto___24027 = temp__4126__auto___24026;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___24027], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___24027,cljs.core.constant$keyword$23,args__10719__auto___24025,cljs.core.constant$keyword$24,input_schema23987_24022,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var G__24010 = G__23990;
var vec__24012 = G__24010;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24012,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24012,(1),null);
var G__24011 = G__23991;
var vec__24013 = G__24011;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24013,(0),null);
var vec__24014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24013,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24014,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24014,(1),null);
var G__24010__$1 = G__24010;
var G__24011__$1 = G__24011;
while(true){
var vec__24015 = G__24010__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015,(1),null);
var vec__24016 = G__24011__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24016,(0),null);
var vec__24017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24016,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(1),null);
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

var vec__24018 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24018,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24018,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___24028 = (function (){var G__24019 = o__10721__auto__;
return (output_checker23989_24024.cljs$core$IFn$_invoke$arity$1 ? output_checker23989_24024.cljs$core$IFn$_invoke$arity$1(G__24019) : output_checker23989_24024.call(null,G__24019));
})();
if(cljs.core.truth_(temp__4126__auto___24028)){
var error__10720__auto___24029 = temp__4126__auto___24028;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___24029], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___24029,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema23986_24021,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___24020,output_schema23986_24021,input_schema23987_24022,input_checker23988_24023,output_checker23989_24024))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema23986_24021,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23987_24022], null)));
