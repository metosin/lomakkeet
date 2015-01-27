// Compiled by ClojureScript 0.0-2727 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$79,(function (p1__12611__12612__auto__){
var G__31004 = p1__12611__12612__auto__;
if(G__31004){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__31004.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__31004.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__31004);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__31004);
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
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31005_SHARP_){
return (cljs.core.val(p1__31005_SHARP_) > (1));
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

var vec__31007 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31007,(1),null);
var p = vec__31007;
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
var ufv___31017 = schema.utils.use_fn_validation;
var output_schema31008_31018 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema31009_31019 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker31010_31020 = schema.core.checker(input_schema31009_31019);
var output_checker31011_31021 = schema.core.checker(output_schema31008_31018);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___31017,output_schema31008_31018,input_schema31009_31019,input_checker31010_31020,output_checker31011_31021){
return (function unwrap_schema_form_key(G__31012){
var validate__12581__auto__ = ufv___31017.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31012], null);
var temp__4126__auto___31023 = (function (){var G__31015 = args__12582__auto___31022;
return (input_checker31010_31020.cljs$core$IFn$_invoke$arity$1 ? input_checker31010_31020.cljs$core$IFn$_invoke$arity$1(G__31015) : input_checker31010_31020.call(null,G__31015));
})();
if(cljs.core.truth_(temp__4126__auto___31023)){
var error__12583__auto___31024 = temp__4126__auto___31023;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31024], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31024,cljs.core.constant$keyword$66,args__12582__auto___31022,cljs.core.constant$keyword$67,input_schema31009_31019,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var k = G__31012;
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
var temp__4126__auto___31025 = (function (){var G__31016 = o__12584__auto__;
return (output_checker31011_31021.cljs$core$IFn$_invoke$arity$1 ? output_checker31011_31021.cljs$core$IFn$_invoke$arity$1(G__31016) : output_checker31011_31021.call(null,G__31016));
})();
if(cljs.core.truth_(temp__4126__auto___31025)){
var error__12583__auto___31026 = temp__4126__auto___31025;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31026], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31026,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31008_31018,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31017,output_schema31008_31018,input_schema31009_31019,input_checker31010_31020,output_checker31011_31021))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema31008_31018,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31009_31019], null)));
var ufv___31036 = schema.utils.use_fn_validation;
var output_schema31027_31037 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema31028_31038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker31029_31039 = schema.core.checker(input_schema31028_31038);
var output_checker31030_31040 = schema.core.checker(output_schema31027_31037);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___31036,output_schema31027_31037,input_schema31028_31038,input_checker31029_31039,output_checker31030_31040){
return (function explicit_schema_key_map(G__31031){
var validate__12581__auto__ = ufv___31036.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31031], null);
var temp__4126__auto___31042 = (function (){var G__31034 = args__12582__auto___31041;
return (input_checker31029_31039.cljs$core$IFn$_invoke$arity$1 ? input_checker31029_31039.cljs$core$IFn$_invoke$arity$1(G__31034) : input_checker31029_31039.call(null,G__31034));
})();
if(cljs.core.truth_(temp__4126__auto___31042)){
var error__12583__auto___31043 = temp__4126__auto___31042;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31043], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31043,cljs.core.constant$keyword$66,args__12582__auto___31041,cljs.core.constant$keyword$67,input_schema31028_31038,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var s = G__31031;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31044 = (function (){var G__31035 = o__12584__auto__;
return (output_checker31030_31040.cljs$core$IFn$_invoke$arity$1 ? output_checker31030_31040.cljs$core$IFn$_invoke$arity$1(G__31035) : output_checker31030_31040.call(null,G__31035));
})();
if(cljs.core.truth_(temp__4126__auto___31044)){
var error__12583__auto___31045 = temp__4126__auto___31044;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31045], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31045,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31027_31037,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31036,output_schema31027_31037,input_schema31028_31038,input_checker31029_31039,output_checker31030_31040))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema31027_31037,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31028_31038], null)));
var ufv___31055 = schema.utils.use_fn_validation;
var output_schema31046_31056 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema31047_31057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker31048_31058 = schema.core.checker(input_schema31047_31057);
var output_checker31049_31059 = schema.core.checker(output_schema31046_31056);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___31055,output_schema31046_31056,input_schema31047_31057,input_checker31048_31058,output_checker31049_31059){
return (function split_schema_keys(G__31050){
var validate__12581__auto__ = ufv___31055.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31050], null);
var temp__4126__auto___31061 = (function (){var G__31053 = args__12582__auto___31060;
return (input_checker31048_31058.cljs$core$IFn$_invoke$arity$1 ? input_checker31048_31058.cljs$core$IFn$_invoke$arity$1(G__31053) : input_checker31048_31058.call(null,G__31053));
})();
if(cljs.core.truth_(temp__4126__auto___31061)){
var error__12583__auto___31062 = temp__4126__auto___31061;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31062], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31062,cljs.core.constant$keyword$66,args__12582__auto___31060,cljs.core.constant$keyword$67,input_schema31047_31057,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var s = G__31050;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31063 = (function (){var G__31054 = o__12584__auto__;
return (output_checker31049_31059.cljs$core$IFn$_invoke$arity$1 ? output_checker31049_31059.cljs$core$IFn$_invoke$arity$1(G__31054) : output_checker31049_31059.call(null,G__31054));
})();
if(cljs.core.truth_(temp__4126__auto___31063)){
var error__12583__auto___31064 = temp__4126__auto___31063;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31064], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31064,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31046_31056,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31055,output_schema31046_31056,input_schema31047_31057,input_checker31048_31058,output_checker31049_31059))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema31046_31056,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31047_31057], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__31073){
var vec__31074 = p__31073;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31074,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31074,(1),null);
var pk = (function (){var G__31075 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__31075) : key_project.call(null,G__31075));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__31076 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31076,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31076,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31077 = ok;
var G__31078 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__31077,G__31078) : key_combine.call(null,G__31077,G__31078));
})(),(function (){var G__31079 = ov;
var G__31080 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__31079,G__31080) : val_combine.call(null,G__31079,G__31080));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__31081__i = 0, G__31081__a = new Array(arguments.length -  3);
while (G__31081__i < G__31081__a.length) {G__31081__a[G__31081__i] = arguments[G__31081__i + 3]; ++G__31081__i;}
  maps = new cljs.core.IndexedSeq(G__31081__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__31082){
var key_project = cljs.core.first(arglist__31082);
arglist__31082 = cljs.core.next(arglist__31082);
var key_combine = cljs.core.first(arglist__31082);
arglist__31082 = cljs.core.next(arglist__31082);
var val_combine = cljs.core.first(arglist__31082);
var maps = cljs.core.rest(arglist__31082);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___31096 = schema.utils.use_fn_validation;
var output_schema31084_31097 = plumbing.fnk.schema.InputSchema;
var input_schema31085_31098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker31086_31099 = schema.core.checker(input_schema31085_31098);
var output_checker31087_31100 = schema.core.checker(output_schema31084_31097);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___31096,output_schema31084_31097,input_schema31085_31098,input_checker31086_31099,output_checker31087_31100){
return (function union_input_schemata(G__31088,G__31089){
var validate__12581__auto__ = ufv___31096.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31101 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31088,G__31089], null);
var temp__4126__auto___31102 = (function (){var G__31094 = args__12582__auto___31101;
return (input_checker31086_31099.cljs$core$IFn$_invoke$arity$1 ? input_checker31086_31099.cljs$core$IFn$_invoke$arity$1(G__31094) : input_checker31086_31099.call(null,G__31094));
})();
if(cljs.core.truth_(temp__4126__auto___31102)){
var error__12583__auto___31103 = temp__4126__auto___31102;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31103], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31103,cljs.core.constant$keyword$66,args__12582__auto___31101,cljs.core.constant$keyword$67,input_schema31085_31098,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var i1 = G__31088;
var i2 = G__31089;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__12581__auto__,ufv___31096,output_schema31084_31097,input_schema31085_31098,input_checker31086_31099,output_checker31087_31100){
return (function (p1__31083_SHARP_){
if(schema.core.specific_key_QMARK_(p1__31083_SHARP_)){
return schema.core.explicit_schema_key(p1__31083_SHARP_);
} else {
return cljs.core.constant$keyword$94;
}
});})(validate__12581__auto__,ufv___31096,output_schema31084_31097,input_schema31085_31098,input_checker31086_31099,output_checker31087_31100))
,((function (validate__12581__auto__,ufv___31096,output_schema31084_31097,input_schema31085_31098,input_checker31086_31099,output_checker31087_31100){
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
});})(validate__12581__auto__,ufv___31096,output_schema31084_31097,input_schema31085_31098,input_checker31086_31099,output_checker31087_31100))
,((function (validate__12581__auto__,ufv___31096,output_schema31084_31097,input_schema31085_31098,input_checker31086_31099,output_checker31087_31100){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__12581__auto__,ufv___31096,output_schema31084_31097,input_schema31085_31098,input_checker31086_31099,output_checker31087_31100))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31104 = (function (){var G__31095 = o__12584__auto__;
return (output_checker31087_31100.cljs$core$IFn$_invoke$arity$1 ? output_checker31087_31100.cljs$core$IFn$_invoke$arity$1(G__31095) : output_checker31087_31100.call(null,G__31095));
})();
if(cljs.core.truth_(temp__4126__auto___31104)){
var error__12583__auto___31105 = temp__4126__auto___31104;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31105], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31105,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31084_31097,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31096,output_schema31084_31097,input_schema31085_31098,input_checker31086_31099,output_checker31087_31100))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema31084_31097,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31085_31098], null)));
var ufv___31115 = schema.utils.use_fn_validation;
var output_schema31106_31116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema31107_31117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker31108_31118 = schema.core.checker(input_schema31107_31117);
var output_checker31109_31119 = schema.core.checker(output_schema31106_31116);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___31115,output_schema31106_31116,input_schema31107_31117,input_checker31108_31118,output_checker31109_31119){
return (function required_toplevel_keys(G__31110){
var validate__12581__auto__ = ufv___31115.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31110], null);
var temp__4126__auto___31121 = (function (){var G__31113 = args__12582__auto___31120;
return (input_checker31108_31118.cljs$core$IFn$_invoke$arity$1 ? input_checker31108_31118.cljs$core$IFn$_invoke$arity$1(G__31113) : input_checker31108_31118.call(null,G__31113));
})();
if(cljs.core.truth_(temp__4126__auto___31121)){
var error__12583__auto___31122 = temp__4126__auto___31121;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31122], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31122,cljs.core.constant$keyword$66,args__12582__auto___31120,cljs.core.constant$keyword$67,input_schema31107_31117,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var input_schema = G__31110;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12581__auto__,ufv___31115,output_schema31106_31116,input_schema31107_31117,input_checker31108_31118,output_checker31109_31119){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__12581__auto__,ufv___31115,output_schema31106_31116,input_schema31107_31117,input_checker31108_31118,output_checker31109_31119))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31123 = (function (){var G__31114 = o__12584__auto__;
return (output_checker31109_31119.cljs$core$IFn$_invoke$arity$1 ? output_checker31109_31119.cljs$core$IFn$_invoke$arity$1(G__31114) : output_checker31109_31119.call(null,G__31114));
})();
if(cljs.core.truth_(temp__4126__auto___31123)){
var error__12583__auto___31124 = temp__4126__auto___31123;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31124], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31124,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31106_31116,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31115,output_schema31106_31116,input_schema31107_31117,input_checker31108_31118,output_checker31109_31119))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema31106_31116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31107_31117], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5007__auto__ = (function iter__31139(s__31140){
return (new cljs.core.LazySeq(null,(function (){
var s__31140__$1 = s__31140;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31140__$1);
if(temp__4126__auto__){
var s__31140__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31140__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31140__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31142 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31141 = (0);
while(true){
if((i__31141 < size__5006__auto__)){
var vec__31147 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31141);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31147,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31147,(1),null);
cljs.core.chunk_append(b__31142,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__31149 = (i__31141 + (1));
i__31141 = G__31149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31142),iter__31139(cljs.core.chunk_rest(s__31140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31142),null);
}
} else {
var vec__31148 = cljs.core.first(s__31140__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31148,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__31139(cljs.core.rest(s__31140__$2)));
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
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5007__auto__ = (function iter__31168(s__31169){
return (new cljs.core.LazySeq(null,(function (){
var s__31169__$1 = s__31169;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31169__$1);
if(temp__4126__auto__){
var s__31169__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31169__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31169__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31171 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31170 = (0);
while(true){
if((i__31170 < size__5006__auto__)){
var vec__31176 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31170);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31176,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31176,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__31171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__31178 = (i__31170 + (1));
i__31170 = G__31178;
continue;
} else {
var G__31179 = (i__31170 + (1));
i__31170 = G__31179;
continue;
}
} else {
var G__31180 = (i__31170 + (1));
i__31170 = G__31180;
continue;
}
} else {
var G__31181 = (i__31170 + (1));
i__31170 = G__31181;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31171),iter__31168(cljs.core.chunk_rest(s__31169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31171),null);
}
} else {
var vec__31177 = cljs.core.first(s__31169__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31177,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31177,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__31168(cljs.core.rest(s__31169__$2)));
} else {
var G__31182 = cljs.core.rest(s__31169__$2);
s__31169__$1 = G__31182;
continue;
}
} else {
var G__31183 = cljs.core.rest(s__31169__$2);
s__31169__$1 = G__31183;
continue;
}
} else {
var G__31184 = cljs.core.rest(s__31169__$2);
s__31169__$1 = G__31184;
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
var ufv___31211 = schema.utils.use_fn_validation;
var output_schema31185_31212 = schema.core.Any;
var input_schema31186_31213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker31187_31214 = schema.core.checker(input_schema31186_31213);
var output_checker31188_31215 = schema.core.checker(output_schema31185_31212);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___31211,output_schema31185_31212,input_schema31186_31213,input_checker31187_31214,output_checker31188_31215){
return (function compose_schemata(G__31189,G__31190){
var validate__12581__auto__ = true;
if(validate__12581__auto__){
var args__12582__auto___31216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31189,G__31190], null);
var temp__4126__auto___31217 = (function (){var G__31201 = args__12582__auto___31216;
return (input_checker31187_31214.cljs$core$IFn$_invoke$arity$1 ? input_checker31187_31214.cljs$core$IFn$_invoke$arity$1(G__31201) : input_checker31187_31214.call(null,G__31201));
})();
if(cljs.core.truth_(temp__4126__auto___31217)){
var error__12583__auto___31218 = temp__4126__auto___31217;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31218], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31218,cljs.core.constant$keyword$66,args__12582__auto___31216,cljs.core.constant$keyword$67,input_schema31186_31213,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__31204 = G__31189;
var vec__31206 = G__31204;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31206,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31206,(1),null);
var G__31205 = G__31190;
var vec__31207 = G__31205;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31207,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31207,(1),null);
var G__31204__$1 = G__31204;
var G__31205__$1 = G__31205;
while(true){
var vec__31208 = G__31204__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31208,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31208,(1),null);
var vec__31209 = G__31205__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31209,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31209,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__12581__auto__){
var temp__4126__auto___31219 = (function (){var G__31210 = o__12584__auto__;
return (output_checker31188_31215.cljs$core$IFn$_invoke$arity$1 ? output_checker31188_31215.cljs$core$IFn$_invoke$arity$1(G__31210) : output_checker31188_31215.call(null,G__31210));
})();
if(cljs.core.truth_(temp__4126__auto___31219)){
var error__12583__auto___31220 = temp__4126__auto___31219;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31220], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31220,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31185_31212,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31211,output_schema31185_31212,input_schema31186_31213,input_checker31187_31214,output_checker31188_31215))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema31185_31212,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31186_31213], null)));
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
var ufv___31323 = schema.utils.use_fn_validation;
var output_schema31221_31324 = schema.core.Any;
var input_schema31222_31325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker31223_31326 = schema.core.checker(input_schema31222_31325);
var output_checker31224_31327 = schema.core.checker(output_schema31221_31324);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327){
return (function split_schema(G__31225,G__31226){
var validate__12581__auto__ = ufv___31323.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31328 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31225,G__31226], null);
var temp__4126__auto___31329 = (function (){var G__31275 = args__12582__auto___31328;
return (input_checker31223_31326.cljs$core$IFn$_invoke$arity$1 ? input_checker31223_31326.cljs$core$IFn$_invoke$arity$1(G__31275) : input_checker31223_31326.call(null,G__31275));
})();
if(cljs.core.truth_(temp__4126__auto___31329)){
var error__12583__auto___31330 = temp__4126__auto___31329;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31330], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31330,cljs.core.constant$keyword$66,args__12582__auto___31328,cljs.core.constant$keyword$67,input_schema31222_31325,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var s = G__31225;
var ks = G__31226;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__5007__auto__ = ((function (ks__$1,validate__12581__auto__,ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327){
return (function iter__31276(s__31277){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12581__auto__,ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327){
return (function (){
var s__31277__$1 = s__31277;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31277__$1);
if(temp__4126__auto__){
var s__31277__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31277__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31277__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31279 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31278 = (0);
while(true){
if((i__31278 < size__5006__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31278);
cljs.core.chunk_append(b__31279,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5007__auto__ = ((function (i__31278,in_QMARK_,c__5005__auto__,size__5006__auto__,b__31279,s__31277__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327){
return (function iter__31302(s__31303){
return (new cljs.core.LazySeq(null,((function (i__31278,in_QMARK_,c__5005__auto__,size__5006__auto__,b__31279,s__31277__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327){
return (function (){
var s__31303__$1 = s__31303;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__31303__$1);
if(temp__4126__auto____$1){
var s__31303__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31303__$2)){
var c__5005__auto____$1 = cljs.core.chunk_first(s__31303__$2);
var size__5006__auto____$1 = cljs.core.count(c__5005__auto____$1);
var b__31305 = cljs.core.chunk_buffer(size__5006__auto____$1);
if((function (){var i__31304 = (0);
while(true){
if((i__31304 < size__5006__auto____$1)){
var vec__31310 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto____$1,i__31304);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31310,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31310,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__31305,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__31331 = (i__31304 + (1));
i__31304 = G__31331;
continue;
} else {
var G__31332 = (i__31304 + (1));
i__31304 = G__31332;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31305),iter__31302(cljs.core.chunk_rest(s__31303__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31305),null);
}
} else {
var vec__31311 = cljs.core.first(s__31303__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31311,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31311,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__31302(cljs.core.rest(s__31303__$2)));
} else {
var G__31333 = cljs.core.rest(s__31303__$2);
s__31303__$1 = G__31333;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__31278,in_QMARK_,c__5005__auto__,size__5006__auto__,b__31279,s__31277__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327))
,null,null));
});})(i__31278,in_QMARK_,c__5005__auto__,size__5006__auto__,b__31279,s__31277__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327))
;
return iter__5007__auto__(s);
})()));

var G__31334 = (i__31278 + (1));
i__31278 = G__31334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31279),iter__31276(cljs.core.chunk_rest(s__31277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31279),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__31277__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5007__auto__ = ((function (in_QMARK_,s__31277__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327){
return (function iter__31312(s__31313){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__31277__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327){
return (function (){
var s__31313__$1 = s__31313;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__31313__$1);
if(temp__4126__auto____$1){
var s__31313__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31313__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31313__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31315 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31314 = (0);
while(true){
if((i__31314 < size__5006__auto__)){
var vec__31320 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31314);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31320,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31320,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__31315,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__31335 = (i__31314 + (1));
i__31314 = G__31335;
continue;
} else {
var G__31336 = (i__31314 + (1));
i__31314 = G__31336;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31315),iter__31312(cljs.core.chunk_rest(s__31313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31315),null);
}
} else {
var vec__31321 = cljs.core.first(s__31313__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31321,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31321,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__31312(cljs.core.rest(s__31313__$2)));
} else {
var G__31337 = cljs.core.rest(s__31313__$2);
s__31313__$1 = G__31337;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__31277__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327))
,null,null));
});})(in_QMARK_,s__31277__$2,temp__4126__auto__,ks__$1,validate__12581__auto__,ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327))
;
return iter__5007__auto__(s);
})()),iter__31276(cljs.core.rest(s__31277__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__12581__auto__,ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327))
,null,null));
});})(ks__$1,validate__12581__auto__,ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327))
;
return iter__5007__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31338 = (function (){var G__31322 = o__12584__auto__;
return (output_checker31224_31327.cljs$core$IFn$_invoke$arity$1 ? output_checker31224_31327.cljs$core$IFn$_invoke$arity$1(G__31322) : output_checker31224_31327.call(null,G__31322));
})();
if(cljs.core.truth_(temp__4126__auto___31338)){
var error__12583__auto___31339 = temp__4126__auto___31338;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31339], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31339,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31221_31324,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31323,output_schema31221_31324,input_schema31222_31325,input_checker31223_31326,output_checker31224_31327))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema31221_31324,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31222_31325], null)));
var ufv___31374 = schema.utils.use_fn_validation;
var output_schema31340_31375 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema31341_31376 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker31342_31377 = schema.core.checker(input_schema31341_31376);
var output_checker31343_31378 = schema.core.checker(output_schema31340_31375);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___31374,output_schema31340_31375,input_schema31341_31376,input_checker31342_31377,output_checker31343_31378){
return (function sequence_schemata(G__31344,G__31345){
var validate__12581__auto__ = ufv___31374.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___31379 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31344,G__31345], null);
var temp__4126__auto___31380 = (function (){var G__31360 = args__12582__auto___31379;
return (input_checker31342_31377.cljs$core$IFn$_invoke$arity$1 ? input_checker31342_31377.cljs$core$IFn$_invoke$arity$1(G__31360) : input_checker31342_31377.call(null,G__31360));
})();
if(cljs.core.truth_(temp__4126__auto___31380)){
var error__12583__auto___31381 = temp__4126__auto___31380;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31381], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31381,cljs.core.constant$keyword$66,args__12582__auto___31379,cljs.core.constant$keyword$67,input_schema31341_31376,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__31364 = G__31344;
var vec__31366 = G__31364;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31366,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31366,(1),null);
var G__31365 = G__31345;
var vec__31367 = G__31365;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31367,(0),null);
var vec__31368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31367,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31368,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31368,(1),null);
var G__31364__$1 = G__31364;
var G__31365__$1 = G__31365;
while(true){
var vec__31369 = G__31364__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31369,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31369,(1),null);
var vec__31370 = G__31365__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31370,(0),null);
var vec__31371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31370,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31371,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31371,(1),null);
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

var vec__31372 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31372,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31372,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___31382 = (function (){var G__31373 = o__12584__auto__;
return (output_checker31343_31378.cljs$core$IFn$_invoke$arity$1 ? output_checker31343_31378.cljs$core$IFn$_invoke$arity$1(G__31373) : output_checker31343_31378.call(null,G__31373));
})();
if(cljs.core.truth_(temp__4126__auto___31382)){
var error__12583__auto___31383 = temp__4126__auto___31382;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___31383], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___31383,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema31340_31375,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___31374,output_schema31340_31375,input_schema31341_31376,input_checker31342_31377,output_checker31343_31378))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema31340_31375,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31341_31376], null)));
