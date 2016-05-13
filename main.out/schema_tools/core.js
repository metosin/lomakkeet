// Compiled by ClojureScript 1.7.170 {}
goog.provide('schema_tools.core');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema_tools.coerce');
goog.require('schema_tools.util');
schema_tools.core.explicit_key = (function schema_tools$core$explicit_key(k){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return k;
}
});
schema_tools.core.explicit_key_set = (function schema_tools$core$explicit_key_set(ks){
return cljs.core.reduce.call(null,(function (s,k){
return cljs.core.conj.call(null,s,schema_tools.core.explicit_key.call(null,k));
}),cljs.core.PersistentHashSet.EMPTY,ks);
});
schema_tools.core.key_in_schema = (function schema_tools$core$key_in_schema(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.required_key.call(null,k))){
return schema.core.required_key.call(null,k);
} else {
if(cljs.core.truth_((function (){var and__4976__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__4976__auto__)){
return cljs.core.contains_QMARK_.call(null,m,schema.core.explicit_schema_key.call(null,k));
} else {
return and__4976__auto__;
}
})())){
return schema.core.explicit_schema_key.call(null,k);
} else {
return k;

}
}
}
}
});
schema_tools.core.get_in_schema = (function schema_tools$core$get_in_schema(var_args){
var args__6053__auto__ = [];
var len__6046__auto___14065 = arguments.length;
var i__6047__auto___14066 = (0);
while(true){
if((i__6047__auto___14066 < len__6046__auto___14065)){
args__6053__auto__.push((arguments[i__6047__auto___14066]));

var G__14067 = (i__6047__auto___14066 + (1));
i__6047__auto___14066 = G__14067;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((2) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((2)),(0))):null);
return schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6054__auto__);
});

schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,p__14063){
var vec__14064 = p__14063;
var default$ = cljs.core.nth.call(null,vec__14064,(0),null);
return cljs.core.get.call(null,m,schema_tools.core.key_in_schema.call(null,m,k),default$);
});

schema_tools.core.get_in_schema.cljs$lang$maxFixedArity = (2);

schema_tools.core.get_in_schema.cljs$lang$applyTo = (function (seq14060){
var G__14061 = cljs.core.first.call(null,seq14060);
var seq14060__$1 = cljs.core.next.call(null,seq14060);
var G__14062 = cljs.core.first.call(null,seq14060__$1);
var seq14060__$2 = cljs.core.next.call(null,seq14060__$1);
return schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic(G__14061,G__14062,seq14060__$2);
});
schema_tools.core.maybe_anonymous = (function schema_tools$core$maybe_anonymous(original,current){
if(cljs.core._EQ_.call(null,original,current)){
return original;
} else {
return cljs.core.vary_meta.call(null,current,(function (meta){
var new_meta = cljs.core.dissoc.call(null,meta,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ns","ns",441598760));
if(cljs.core.empty_QMARK_.call(null,new_meta)){
return null;
} else {
return new_meta;
}
}));
}
});
schema_tools.core.transform_keys = (function schema_tools$core$transform_keys(schema__$1,f,ks){
if((cljs.core.not.call(null,ks)) || (cljs.core.vector_QMARK_.call(null,ks))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("input should be nil or a vector of keys."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)))))].join('')));
}

return schema_tools.core.maybe_anonymous.call(null,schema__$1,(function (){var ks_QMARK_ = schema_tools.core.explicit_key_set.call(null,ks);
return schema_tools.util.map_keys.call(null,((function (ks_QMARK_){
return (function (k){
if(cljs.core.truth_((function (){var and__4976__auto__ = ks;
if(cljs.core.truth_(and__4976__auto__)){
return cljs.core.not.call(null,ks_QMARK_.call(null,schema_tools.core.explicit_key.call(null,k)));
} else {
return and__4976__auto__;
}
})())){
return k;
} else {
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return f.call(null,schema.core.explicit_schema_key.call(null,k));
} else {
return f.call(null,k);

}
}
});})(ks_QMARK_))
,schema__$1);
})());
});
schema_tools.core.AnyKeys = cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false);
schema_tools.core.any_keys = (function schema_tools$core$any_keys(){
return schema_tools.core.AnyKeys;
});
schema_tools.core.AnyKeywordKeys = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false);
schema_tools.core.any_keyword_keys = (function schema_tools$core$any_keyword_keys(var_args){
var args__6053__auto__ = [];
var len__6046__auto___14069 = arguments.length;
var i__6047__auto___14070 = (0);
while(true){
if((i__6047__auto___14070 < len__6046__auto___14069)){
args__6053__auto__.push((arguments[i__6047__auto___14070]));

var G__14071 = (i__6047__auto___14070 + (1));
i__6047__auto___14070 = G__14071;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return schema_tools.core.any_keyword_keys.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

schema_tools.core.any_keyword_keys.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return cljs.core.apply.call(null,cljs.core.merge,schema_tools.core.AnyKeywordKeys,schemas);
});

schema_tools.core.any_keyword_keys.cljs$lang$maxFixedArity = (0);

schema_tools.core.any_keyword_keys.cljs$lang$applyTo = (function (seq14068){
return schema_tools.core.any_keyword_keys.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14068));
});
/**
 * Assoc[iate]s key & vals into Schema.
 */
schema_tools.core.assoc = (function schema_tools$core$assoc(var_args){
var args__6053__auto__ = [];
var len__6046__auto___14076 = arguments.length;
var i__6047__auto___14077 = (0);
while(true){
if((i__6047__auto___14077 < len__6046__auto___14076)){
args__6053__auto__.push((arguments[i__6047__auto___14077]));

var G__14078 = (i__6047__auto___14077 + (1));
i__6047__auto___14077 = G__14078;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return schema_tools.core.assoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

schema_tools.core.assoc.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,kvs){
return schema_tools.core.maybe_anonymous.call(null,schema__$1,cljs.core.reduce.call(null,(function (schema__$2,p__14074){
var vec__14075 = p__14074;
var k = cljs.core.nth.call(null,vec__14075,(0),null);
var v = cljs.core.nth.call(null,vec__14075,(1),null);
var rk = schema_tools.core.key_in_schema.call(null,schema__$2,k);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,schema__$2,rk),k,v);
}),schema__$1,cljs.core.partition.call(null,(2),(2),null,kvs)));
});

schema_tools.core.assoc.cljs$lang$maxFixedArity = (1);

schema_tools.core.assoc.cljs$lang$applyTo = (function (seq14072){
var G__14073 = cljs.core.first.call(null,seq14072);
var seq14072__$1 = cljs.core.next.call(null,seq14072);
return schema_tools.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__14073,seq14072__$1);
});
/**
 * Dissoc[iate]s keys from Schema.
 */
schema_tools.core.dissoc = (function schema_tools$core$dissoc(var_args){
var args__6053__auto__ = [];
var len__6046__auto___14081 = arguments.length;
var i__6047__auto___14082 = (0);
while(true){
if((i__6047__auto___14082 < len__6046__auto___14081)){
args__6053__auto__.push((arguments[i__6047__auto___14082]));

var G__14083 = (i__6047__auto___14082 + (1));
i__6047__auto___14082 = G__14083;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,ks){
return schema_tools.core.maybe_anonymous.call(null,schema__$1,cljs.core.reduce.call(null,(function (schema__$2,k){
return cljs.core.dissoc.call(null,schema__$2,schema_tools.core.key_in_schema.call(null,schema__$2,k));
}),schema__$1,ks));
});

schema_tools.core.dissoc.cljs$lang$maxFixedArity = (1);

schema_tools.core.dissoc.cljs$lang$applyTo = (function (seq14079){
var G__14080 = cljs.core.first.call(null,seq14079);
var seq14079__$1 = cljs.core.next.call(null,seq14079);
return schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14080,seq14079__$1);
});
/**
 * Like `clojure.core/select-keys` but handles boths optional-keys and required-keys.
 */
schema_tools.core.select_keys = (function schema_tools$core$select_keys(schema__$1,ks){
return schema_tools.core.maybe_anonymous.call(null,schema__$1,(function (){var ks_QMARK_ = schema_tools.core.explicit_key_set.call(null,ks);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks_QMARK_,schema_tools.core.explicit_key,cljs.core.key),schema__$1));
})());
});
/**
 * Returns the value in a nested associative Schema,
 *   where `ks` is a sequence of keys. Returns `nil` if the key
 *   is not present, or the `not-found` value if supplied.
 */
schema_tools.core.get_in = (function schema_tools$core$get_in(var_args){
var args14084 = [];
var len__6046__auto___14087 = arguments.length;
var i__6047__auto___14088 = (0);
while(true){
if((i__6047__auto___14088 < len__6046__auto___14087)){
args14084.push((arguments[i__6047__auto___14088]));

var G__14089 = (i__6047__auto___14088 + (1));
i__6047__auto___14088 = G__14089;
continue;
} else {
}
break;
}

var G__14086 = args14084.length;
switch (G__14086) {
case 2:
return schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14084.length)].join('')));

}
});

schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return schema_tools.core.get_in.call(null,m,ks,null);
});

schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,not_found){
var sentinel = (new Object());
var m__$1 = m;
var ks__$1 = cljs.core.seq.call(null,ks);
while(true){
if(ks__$1){
var k = cljs.core.first.call(null,ks__$1);
var m__$2 = schema_tools.core.get_in_schema.call(null,m__$1,k,sentinel);
if((sentinel === m__$2)){
return not_found;
} else {
var G__14091 = sentinel;
var G__14092 = m__$2;
var G__14093 = cljs.core.next.call(null,ks__$1);
sentinel = G__14091;
m__$1 = G__14092;
ks__$1 = G__14093;
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
 * Associates a value in a nested associative Schema, where `ks` is a
 *   sequence of keys and `v` is the new value and returns a new nested Schema.
 *   If any levels do not exist, hash-maps will be created.
 */
schema_tools.core.assoc_in = (function schema_tools$core$assoc_in(schema__$1,p__14094,v){
var vec__14096 = p__14094;
var k = cljs.core.nth.call(null,vec__14096,(0),null);
var ks = cljs.core.nthnext.call(null,vec__14096,(1));
return schema_tools.core.maybe_anonymous.call(null,schema__$1,(function (){var kis = schema_tools.core.key_in_schema.call(null,schema__$1,k);
if(cljs.core.truth_(ks)){
return cljs.core.assoc.call(null,schema__$1,kis,schema_tools$core$assoc_in.call(null,schema_tools.core.get_in_schema.call(null,schema__$1,k),ks,v));
} else {
return cljs.core.assoc.call(null,schema__$1,kis,v);
}
})());
});
/**
 * 'Updates' a value in a nested associative Schema, where `ks` is a
 *   sequence of keys and `f` is a function that will take the old value
 *   and any supplied args and return the new value, and returns a new
 *   nested Schema. If any levels do not exist, hash-maps will be
 *   created.
 */
schema_tools.core.update_in = (function schema_tools$core$update_in(var_args){
var args__6053__auto__ = [];
var len__6046__auto___14103 = arguments.length;
var i__6047__auto___14104 = (0);
while(true){
if((i__6047__auto___14104 < len__6046__auto___14103)){
args__6053__auto__.push((arguments[i__6047__auto___14104]));

var G__14105 = (i__6047__auto___14104 + (1));
i__6047__auto___14104 = G__14105;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((3) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((3)),(0))):null);
return schema_tools.core.update_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6054__auto__);
});

schema_tools.core.update_in.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,p__14101,f,args){
var vec__14102 = p__14101;
var k = cljs.core.nth.call(null,vec__14102,(0),null);
var ks = cljs.core.nthnext.call(null,vec__14102,(1));
return schema_tools.core.maybe_anonymous.call(null,schema__$1,(function (){var kis = schema_tools.core.key_in_schema.call(null,schema__$1,k);
if(cljs.core.truth_(ks)){
return cljs.core.assoc.call(null,schema__$1,kis,cljs.core.apply.call(null,schema_tools.core.update_in,schema_tools.core.get_in_schema.call(null,schema__$1,k),ks,f,args));
} else {
return cljs.core.assoc.call(null,schema__$1,kis,cljs.core.apply.call(null,f,schema_tools.core.get_in_schema.call(null,schema__$1,k),args));
}
})());
});

schema_tools.core.update_in.cljs$lang$maxFixedArity = (3);

schema_tools.core.update_in.cljs$lang$applyTo = (function (seq14097){
var G__14098 = cljs.core.first.call(null,seq14097);
var seq14097__$1 = cljs.core.next.call(null,seq14097);
var G__14099 = cljs.core.first.call(null,seq14097__$1);
var seq14097__$2 = cljs.core.next.call(null,seq14097__$1);
var G__14100 = cljs.core.first.call(null,seq14097__$2);
var seq14097__$3 = cljs.core.next.call(null,seq14097__$2);
return schema_tools.core.update_in.cljs$core$IFn$_invoke$arity$variadic(G__14098,G__14099,G__14100,seq14097__$3);
});
/**
 * Dissociates an entry from a nested associative Schema returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new Schema.
 */
schema_tools.core.dissoc_in = (function schema_tools$core$dissoc_in(schema__$1,p__14106){
var vec__14108 = p__14106;
var k = cljs.core.nth.call(null,vec__14108,(0),null);
var ks = cljs.core.nthnext.call(null,vec__14108,(1));
var k__$1 = schema_tools.core.key_in_schema.call(null,schema__$1,k);
if(cljs.core.truth_(ks)){
var temp__4423__auto__ = cljs.core.get.call(null,schema__$1,k__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var nextmap = temp__4423__auto__;
var newmap = schema_tools$core$dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,schema__$1,k__$1,newmap);
} else {
return schema_tools.core.dissoc.call(null,schema__$1,k__$1);
}
} else {
return schema__$1;
}
} else {
return schema_tools.core.dissoc.call(null,schema__$1,k__$1);
}
});
/**
 * Updates a value in a map with a function.
 */
schema_tools.core.update = (function schema_tools$core$update(var_args){
var args__6053__auto__ = [];
var len__6046__auto___14113 = arguments.length;
var i__6047__auto___14114 = (0);
while(true){
if((i__6047__auto___14114 < len__6046__auto___14113)){
args__6053__auto__.push((arguments[i__6047__auto___14114]));

var G__14115 = (i__6047__auto___14114 + (1));
i__6047__auto___14114 = G__14115;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((3) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((3)),(0))):null);
return schema_tools.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6054__auto__);
});

schema_tools.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,k,f,args){
return cljs.core.apply.call(null,schema_tools.core.update_in,schema__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f,args);
});

schema_tools.core.update.cljs$lang$maxFixedArity = (3);

schema_tools.core.update.cljs$lang$applyTo = (function (seq14109){
var G__14110 = cljs.core.first.call(null,seq14109);
var seq14109__$1 = cljs.core.next.call(null,seq14109);
var G__14111 = cljs.core.first.call(null,seq14109__$1);
var seq14109__$2 = cljs.core.next.call(null,seq14109__$1);
var G__14112 = cljs.core.first.call(null,seq14109__$2);
var seq14109__$3 = cljs.core.next.call(null,seq14109__$2);
return schema_tools.core.update.cljs$core$IFn$_invoke$arity$variadic(G__14110,G__14111,G__14112,seq14109__$3);
});
/**
 * Returns a Schema that consists of the rest of the Schemas conj-ed onto
 *   the first. If a schema key occurs in more than one map, the mapping from
 *   the latter (left-to-right) will be the mapping in the result. Works only
 *   with Map schemas.
 */
schema_tools.core.merge = (function schema_tools$core$merge(var_args){
var args__6053__auto__ = [];
var len__6046__auto___14120 = arguments.length;
var i__6047__auto___14121 = (0);
while(true){
if((i__6047__auto___14121 < len__6046__auto___14120)){
args__6053__auto__.push((arguments[i__6047__auto___14121]));

var G__14122 = (i__6047__auto___14121 + (1));
i__6047__auto___14121 = G__14122;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return schema_tools.core.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

schema_tools.core.merge.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
if(cljs.core.every_QMARK_.call(null,(function (p1__14116_SHARP_){
return (cljs.core.map_QMARK_.call(null,p1__14116_SHARP_)) || ((p1__14116_SHARP_ == null));
}),schemas)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14116#","p1__14116#",1353384854,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__14116#","p1__14116#",1353384854,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"p1__14116#","p1__14116#",1353384854,null)))),new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null))))].join('')));
}

return schema_tools.core.maybe_anonymous.call(null,cljs.core.first.call(null,schemas),(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,schemas))?cljs.core.reduce.call(null,(function (acc,m){
return cljs.core.reduce.call(null,(function (acc__$1,p__14118){
var vec__14119 = p__14118;
var k = cljs.core.nth.call(null,vec__14119,(0),null);
var v = cljs.core.nth.call(null,vec__14119,(1),null);
return cljs.core.assoc.call(null,schema_tools.core.dissoc.call(null,acc__$1,k),k,v);
}),acc,m);
}),schemas):null));
});

schema_tools.core.merge.cljs$lang$maxFixedArity = (0);

schema_tools.core.merge.cljs$lang$applyTo = (function (seq14117){
return schema_tools.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14117));
});
/**
 * Strips all disallowed keys from nested Map schemas via coercion. Takes an optional
 *   coercion matcher for extra coercing the selected value(s) on a single sweep. If a value
 *   can't be coerced to match the schema `ExceptionInfo` is thrown (like `schema.core/validate`).
 */
schema_tools.core.select_schema = (function schema_tools$core$select_schema(var_args){
var args14123 = [];
var len__6046__auto___14127 = arguments.length;
var i__6047__auto___14128 = (0);
while(true){
if((i__6047__auto___14128 < len__6046__auto___14127)){
args14123.push((arguments[i__6047__auto___14128]));

var G__14129 = (i__6047__auto___14128 + (1));
i__6047__auto___14128 = G__14129;
continue;
} else {
}
break;
}

var G__14125 = args14123.length;
switch (G__14125) {
case 2:
return schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14123.length)].join('')));

}
});

schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$2 = (function (value,schema__$1){
return schema_tools.core.select_schema.call(null,value,schema__$1,cljs.core.constantly.call(null,null));
});

schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$3 = (function (value,schema__$1,matcher){
try{schema.core.explain.call(null,schema__$1);
}catch (e14126){if((e14126 instanceof Error)){
var __14131 = e14126;
throw cljs.core.ex_info.call(null,"Illegal argument order - breaking change in 0.5.0.",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"matcher","matcher",-452768995),matcher], null));
} else {
throw e14126;

}
}
return schema_tools.coerce.coerce.call(null,value,schema__$1,schema_tools.coerce.or_matcher.call(null,schema_tools.coerce.map_filter_matcher,matcher));
});

schema_tools.core.select_schema.cljs$lang$maxFixedArity = 3;
/**
 * Makes given map keys optional. Defaults to all keys.
 */
schema_tools.core.optional_keys = (function schema_tools$core$optional_keys(var_args){
var args14132 = [];
var len__6046__auto___14135 = arguments.length;
var i__6047__auto___14136 = (0);
while(true){
if((i__6047__auto___14136 < len__6046__auto___14135)){
args14132.push((arguments[i__6047__auto___14136]));

var G__14137 = (i__6047__auto___14136 + (1));
i__6047__auto___14136 = G__14137;
continue;
} else {
}
break;
}

var G__14134 = args14132.length;
switch (G__14134) {
case 1:
return schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14132.length)].join('')));

}
});

schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$1 = (function (m){
return schema_tools.core.optional_keys.call(null,m,null);
});

schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return schema_tools.core.transform_keys.call(null,m,schema.core.optional_key,ks);
});

schema_tools.core.optional_keys.cljs$lang$maxFixedArity = 2;
/**
 * Makes given map keys required. Defaults to all keys.
 */
schema_tools.core.required_keys = (function schema_tools$core$required_keys(var_args){
var args14140 = [];
var len__6046__auto___14143 = arguments.length;
var i__6047__auto___14144 = (0);
while(true){
if((i__6047__auto___14144 < len__6046__auto___14143)){
args14140.push((arguments[i__6047__auto___14144]));

var G__14145 = (i__6047__auto___14144 + (1));
i__6047__auto___14144 = G__14145;
continue;
} else {
}
break;
}

var G__14142 = args14140.length;
switch (G__14142) {
case 1:
return schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14140.length)].join('')));

}
});

schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$1 = (function (m){
return schema_tools.core.required_keys.call(null,m,null);
});

schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return schema_tools.core.transform_keys.call(null,m,(function (p1__14139_SHARP_){
if((p1__14139_SHARP_ instanceof cljs.core.Keyword)){
return p1__14139_SHARP_;
} else {
return schema.core.required_key.call(null,p1__14139_SHARP_);
}
}),ks);
});

schema_tools.core.required_keys.cljs$lang$maxFixedArity = 2;
/**
 * Records description in schema's metadata.
 */
schema_tools.core.schema_with_description = (function schema_tools$core$schema_with_description(schema__$1,description){
return cljs.core.vary_meta.call(null,schema__$1,schema_tools.core.assoc,new cljs.core.Keyword(null,"description","description",-1428560544),description);
});
/**
 * Returns the description of a schema attached via schema-with-description.
 */
schema_tools.core.schema_description = (function schema_tools$core$schema_description(schema__$1){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});

//# sourceMappingURL=core.js.map