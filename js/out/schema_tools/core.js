// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('schema_tools.core');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema_tools.util');
schema_tools.core.AnyKeys = new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false);
schema_tools.core.any_keys = (function schema_tools$core$any_keys(){
return schema_tools.core.AnyKeys;
});
schema_tools.core.AnyKeywordKeys = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false);
schema_tools.core.any_keyword_keys = (function schema_tools$core$any_keyword_keys(){
var argseq__5378__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return schema_tools.core.any_keyword_keys.cljs$core$IFn$_invoke$arity$variadic(argseq__5378__auto__);
});

schema_tools.core.any_keyword_keys.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,schema_tools.core.AnyKeywordKeys,schemas);
});

schema_tools.core.any_keyword_keys.cljs$lang$maxFixedArity = (0);

schema_tools.core.any_keyword_keys.cljs$lang$applyTo = (function (seq19011){
return schema_tools.core.any_keyword_keys.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19011));
});
schema_tools.core.explicit_key = (function schema_tools$core$explicit_key(k){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
return schema.core.explicit_schema_key(k);
} else {
return k;
}
});
schema_tools.core.explicit_key_set = (function schema_tools$core$explicit_key_set(ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,schema_tools.core.explicit_key(k));
}),cljs.core.PersistentHashSet.EMPTY,ks);
});
schema_tools.core.key_in_schema = (function schema_tools$core$key_in_schema(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
if(cljs.core.contains_QMARK_(m,schema.core.required_key(k))){
return schema.core.required_key(k);
} else {
if(cljs.core.truth_((function (){var and__4326__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4326__auto__)){
return cljs.core.contains_QMARK_(m,schema.core.explicit_schema_key(k));
} else {
return and__4326__auto__;
}
})())){
return schema.core.explicit_schema_key(k);
} else {
return k;

}
}
}
}
});
schema_tools.core.get_in_schema = (function schema_tools$core$get_in_schema(){
var argseq__5378__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5378__auto__);
});

schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,p__19015){
var vec__19016 = p__19015;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19016,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,schema_tools.core.key_in_schema(m,k),default$);
});

schema_tools.core.get_in_schema.cljs$lang$maxFixedArity = (2);

schema_tools.core.get_in_schema.cljs$lang$applyTo = (function (seq19012){
var G__19013 = cljs.core.first(seq19012);
var seq19012__$1 = cljs.core.next(seq19012);
var G__19014 = cljs.core.first(seq19012__$1);
var seq19012__$2 = cljs.core.next(seq19012__$1);
return schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic(G__19013,G__19014,seq19012__$2);
});
schema_tools.core.maybe_anonymous = (function schema_tools$core$maybe_anonymous(original,current){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(original,current)){
return original;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(current,(function (meta){
var new_meta = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(meta,cljs.core.constant$keyword$name,cljs.core.array_seq([cljs.core.constant$keyword$ns], 0));
if(cljs.core.empty_QMARK_(new_meta)){
return null;
} else {
return new_meta;
}
}));
}
});
/**
 * Assoc[iate]s key & vals into Schema.
 */
schema_tools.core.assoc = (function schema_tools$core$assoc(){
var argseq__5378__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return schema_tools.core.assoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5378__auto__);
});

schema_tools.core.assoc.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,kvs){
return schema_tools.core.maybe_anonymous(schema__$1,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (schema__$2,p__19019){
var vec__19020 = p__19019;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19020,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19020,(1),null);
var rk = schema_tools.core.key_in_schema(schema__$2,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema__$2,rk),k,v);
}),schema__$1,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(2),null,kvs)));
});

schema_tools.core.assoc.cljs$lang$maxFixedArity = (1);

schema_tools.core.assoc.cljs$lang$applyTo = (function (seq19017){
var G__19018 = cljs.core.first(seq19017);
var seq19017__$1 = cljs.core.next(seq19017);
return schema_tools.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__19018,seq19017__$1);
});
/**
 * Dissoc[iate]s keys from Schema.
 */
schema_tools.core.dissoc = (function schema_tools$core$dissoc(){
var argseq__5378__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5378__auto__);
});

schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,ks){
return schema_tools.core.maybe_anonymous(schema__$1,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (schema__$2,k){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema__$2,schema_tools.core.key_in_schema(schema__$2,k));
}),schema__$1,ks));
});

schema_tools.core.dissoc.cljs$lang$maxFixedArity = (1);

schema_tools.core.dissoc.cljs$lang$applyTo = (function (seq19021){
var G__19022 = cljs.core.first(seq19021);
var seq19021__$1 = cljs.core.next(seq19021);
return schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19022,seq19021__$1);
});
/**
 * Like clojure.core/select-keys but handles boths optional-keys and required-keys.
 */
schema_tools.core.select_keys = (function schema_tools$core$select_keys(schema__$1,ks){
return schema_tools.core.maybe_anonymous(schema__$1,(function (){var ks_QMARK_ = schema_tools.core.explicit_key_set(ks);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(ks_QMARK_,schema_tools.core.explicit_key,cljs.core.key),schema__$1));
})());
});
/**
 * Returns the value in a nested associative Schema,
 * where ks is a sequence of keys. Returns nil if the key
 * is not present, or the not-found value if supplied.
 */
schema_tools.core.get_in = (function schema_tools$core$get_in(){
var G__19024 = arguments.length;
switch (G__19024) {
case 2:
return schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});

schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,not_found){
var sentinel = (new Object());
var m__$1 = m;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var k = cljs.core.first(ks__$1);
var m__$2 = schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic(m__$1,k,cljs.core.array_seq([sentinel], 0));
if((sentinel === m__$2)){
return not_found;
} else {
var G__19026 = sentinel;
var G__19027 = m__$2;
var G__19028 = cljs.core.next(ks__$1);
sentinel = G__19026;
m__$1 = G__19027;
ks__$1 = G__19028;
continue;
}
} else {
return m__$1;
}
break;
}
});

schema_tools.core.get_in.cljs$lang$maxFixedArity = 3;
/**
 * Associates a value in a nested associative Schema, where ks is a
 * sequence of keys and v is the new value and returns a new nested Schema.
 * If any levels do not exist, hash-maps will be created.
 */
schema_tools.core.assoc_in = (function schema_tools$core$assoc_in(schema__$1,p__19029,v){
var vec__19034 = p__19029;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19034,(0),null);
var ks = cljs.core.nthnext(vec__19034,(1));
return schema_tools.core.maybe_anonymous(schema__$1,(function (){var kis = schema_tools.core.key_in_schema(schema__$1,k);
if(cljs.core.truth_(ks)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,kis,schema_tools$core$assoc_in(schema_tools.core.get_in_schema(schema__$1,k),ks,v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,kis,v);
}
})());
});
/**
 * 'Updates' a value in a nested associative Schema, where ks is a
 * sequence of keys and f is a function that will take the old value
 * and any supplied args and return the new value, and returns a new
 * nested Schema. If any levels do not exist, hash-maps will be
 * created.
 */
schema_tools.core.update_in = (function schema_tools$core$update_in(){
var argseq__5378__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return schema_tools.core.update_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5378__auto__);
});

schema_tools.core.update_in.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,p__19039,f,args){
var vec__19040 = p__19039;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19040,(0),null);
var ks = cljs.core.nthnext(vec__19040,(1));
return schema_tools.core.maybe_anonymous(schema__$1,(function (){var kis = schema_tools.core.key_in_schema(schema__$1,k);
if(cljs.core.truth_(ks)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,kis,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(schema_tools.core.update_in,schema_tools.core.get_in_schema(schema__$1,k),ks,f,args));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,kis,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,schema_tools.core.get_in_schema(schema__$1,k),args));
}
})());
});

schema_tools.core.update_in.cljs$lang$maxFixedArity = (3);

schema_tools.core.update_in.cljs$lang$applyTo = (function (seq19035){
var G__19036 = cljs.core.first(seq19035);
var seq19035__$1 = cljs.core.next(seq19035);
var G__19037 = cljs.core.first(seq19035__$1);
var seq19035__$2 = cljs.core.next(seq19035__$1);
var G__19038 = cljs.core.first(seq19035__$2);
var seq19035__$3 = cljs.core.next(seq19035__$2);
return schema_tools.core.update_in.cljs$core$IFn$_invoke$arity$variadic(G__19036,G__19037,G__19038,seq19035__$3);
});
/**
 * Dissociates an entry from a nested associative Schema returning a new
 * nested structure. keys is a sequence of keys. Any empty maps that result
 * will not be present in the new Schema.
 */
schema_tools.core.dissoc_in = (function schema_tools$core$dissoc_in(schema__$1,p__19041){
var vec__19045 = p__19041;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19045,(0),null);
var ks = cljs.core.nthnext(vec__19045,(1));
var k__$1 = schema_tools.core.key_in_schema(schema__$1,k);
if(cljs.core.truth_(ks)){
var temp__4421__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema__$1,k__$1);
if(cljs.core.truth_(temp__4421__auto__)){
var nextmap = temp__4421__auto__;
var newmap = schema_tools$core$dissoc_in(nextmap,ks);
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,k__$1,newmap);
} else {
return schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.array_seq([k__$1], 0));
}
} else {
return schema__$1;
}
} else {
return schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.array_seq([k__$1], 0));
}
});
/**
 * Updates a value in a map with a function.
 */
schema_tools.core.update = (function schema_tools$core$update(){
var argseq__5378__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return schema_tools.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5378__auto__);
});

schema_tools.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,k,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(schema_tools.core.update_in,schema__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f,args);
});

schema_tools.core.update.cljs$lang$maxFixedArity = (3);

schema_tools.core.update.cljs$lang$applyTo = (function (seq19046){
var G__19047 = cljs.core.first(seq19046);
var seq19046__$1 = cljs.core.next(seq19046);
var G__19048 = cljs.core.first(seq19046__$1);
var seq19046__$2 = cljs.core.next(seq19046__$1);
var G__19049 = cljs.core.first(seq19046__$2);
var seq19046__$3 = cljs.core.next(seq19046__$2);
return schema_tools.core.update.cljs$core$IFn$_invoke$arity$variadic(G__19047,G__19048,G__19049,seq19046__$3);
});
/**
 * Returns a Schema that consists of the rest of the Schemas conj-ed onto
 * the first. If a schema key occurs in more than one map, the mapping from
 * the latter (left-to-right) will be the mapping in the result. Works only
 * with Map schemas.
 */
schema_tools.core.merge = (function schema_tools$core$merge(){
var argseq__5378__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return schema_tools.core.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5378__auto__);
});

schema_tools.core.merge.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
if(cljs.core.every_QMARK_((function (p1__19050_SHARP_){
return (cljs.core.map_QMARK_(p1__19050_SHARP_)) || ((p1__19050_SHARP_ == null));
}),schemas)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19050#","p1__19050#",1924961314,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__19050#","p1__19050#",1924961314,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"p1__19050#","p1__19050#",1924961314,null)))),new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null))], 0)))].join('')));
}

return schema_tools.core.maybe_anonymous(cljs.core.first(schemas),(cljs.core.truth_(cljs.core.some(cljs.core.identity,schemas))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (acc,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,p__19052){
var vec__19053 = p__19052;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19053,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19053,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(acc__$1,cljs.core.array_seq([k], 0)),k,v);
}),acc,m);
}),schemas):null));
});

schema_tools.core.merge.cljs$lang$maxFixedArity = (0);

schema_tools.core.merge.cljs$lang$applyTo = (function (seq19051){
return schema_tools.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19051));
});
/**
 * Removes all keys that are disallowed in the Schema.
 */
schema_tools.core.select_schema = (function schema_tools$core$select_schema(schema__$1,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(schema_tools.util.dissoc_in,value,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null),null], null), null)),cljs.core.second),schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$1(schema.core.check(schema__$1,value)))));
});
schema_tools.core.transform_keys = (function schema_tools$core$transform_keys(schema__$1,f,ks){
if((cljs.core.not(ks)) || (cljs.core.vector_QMARK_(ks))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("input should be nil or a vector of keys."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)))], 0)))].join('')));
}

return schema_tools.core.maybe_anonymous(schema__$1,(function (){var ks_QMARK_ = schema_tools.core.explicit_key_set(ks);
return schema_tools.util.map_keys(((function (ks_QMARK_){
return (function (k){
if(cljs.core.truth_((function (){var and__4326__auto__ = ks;
if(cljs.core.truth_(and__4326__auto__)){
return cljs.core.not((function (){var G__19057 = schema_tools.core.explicit_key(k);
return (ks_QMARK_.cljs$core$IFn$_invoke$arity$1 ? ks_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19057) : ks_QMARK_.call(null,G__19057));
})());
} else {
return and__4326__auto__;
}
})())){
return k;
} else {
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var G__19058 = schema.core.explicit_schema_key(k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19058) : f.call(null,G__19058));
} else {
var G__19059 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19059) : f.call(null,G__19059));

}
}
});})(ks_QMARK_))
,schema__$1);
})());
});
/**
 * Makes given map keys optional. Defaults to all keys.
 */
schema_tools.core.optional_keys = (function schema_tools$core$optional_keys(){
var G__19061 = arguments.length;
switch (G__19061) {
case 1:
return schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$1 = (function (m){
return schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$2(m,null);
});

schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return schema_tools.core.transform_keys(m,schema.core.optional_key,ks);
});

schema_tools.core.optional_keys.cljs$lang$maxFixedArity = 2;
/**
 * Makes given map keys required. Defaults to all keys.
 */
schema_tools.core.required_keys = (function schema_tools$core$required_keys(){
var G__19065 = arguments.length;
switch (G__19065) {
case 1:
return schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$1 = (function (m){
return schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$2(m,null);
});

schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return schema_tools.core.transform_keys(m,(function (p1__19063_SHARP_){
if((p1__19063_SHARP_ instanceof cljs.core.Keyword)){
return p1__19063_SHARP_;
} else {
return schema.core.required_key(p1__19063_SHARP_);
}
}),ks);
});

schema_tools.core.required_keys.cljs$lang$maxFixedArity = 2;
/**
 * Records description in schema's metadata.
 */
schema_tools.core.schema_with_description = (function schema_tools$core$schema_with_description(schema__$1,description){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,schema_tools.core.assoc,cljs.core.constant$keyword$description,description);
});
/**
 * Returns the description of a schema attached via schema-with-description.
 */
schema_tools.core.schema_description = (function schema_tools$core$schema_description(schema__$1){
return cljs.core.constant$keyword$description.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
