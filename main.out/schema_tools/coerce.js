// Compiled by ClojureScript 1.7.170 {}
goog.provide('schema_tools.coerce');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.spec.core');
goog.require('schema.utils');
goog.require('schema.coerce');
schema_tools.coerce.coerce_or_error_BANG_ = (function schema_tools$coerce$coerce_or_error_BANG_(value,schema__$1,coercer,type){
var coerced = coercer.call(null,value);
var temp__4423__auto__ = schema.utils.error_val.call(null,coerced);
if(cljs.core.truth_(temp__4423__auto__)){
var error = temp__4423__auto__;
throw cljs.core.ex_info.call(null,[cljs.core.str("Could not coerce value to schema: "),cljs.core.str(cljs.core.pr_str.call(null,error))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error], null));
} else {
return coerced;
}
});
schema_tools.coerce.filter_schema_keys = (function schema_tools$coerce$filter_schema_keys(m,schema_keys,extra_keys_checker){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,_){
if(cljs.core.truth_((function (){var or__4988__auto__ = cljs.core.contains_QMARK_.call(null,schema_keys,k);
if(or__4988__auto__){
return or__4988__auto__;
} else {
var and__4976__auto__ = extra_keys_checker;
if(cljs.core.truth_(and__4976__auto__)){
return cljs.core.not.call(null,schema.utils.error_QMARK_.call(null,extra_keys_checker.call(null,k)));
} else {
return and__4976__auto__;
}
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
});
/**
 * Creates a matcher which removes all illegal keys from non-record maps.
 */
schema_tools.coerce.map_filter_matcher = (function schema_tools$coerce$map_filter_matcher(schema__$1){
if((cljs.core.map_QMARK_.call(null,schema__$1)) && (!(cljs.core.record_QMARK_.call(null,schema__$1)))){
var extra_keys_schema = schema.core.find_extra_keys_schema.call(null,schema__$1);
var extra_keys_checker = (cljs.core.truth_(extra_keys_schema)?schema.spec.core.run_checker.call(null,((function (extra_keys_schema){
return (function (s,params){
return schema.spec.core.checker.call(null,schema.core.spec.call(null,s),params);
});})(extra_keys_schema))
,true,extra_keys_schema):null);
var explicit_keys = (function (){var G__14013 = cljs.core.dissoc.call(null,schema__$1,extra_keys_schema);
var G__14013__$1 = (((G__14013 == null))?null:cljs.core.keys.call(null,G__14013));
var G__14013__$2 = (((G__14013__$1 == null))?null:cljs.core.mapv.call(null,schema.core.explicit_schema_key,G__14013__$1));
var G__14013__$3 = (((G__14013__$2 == null))?null:cljs.core.set.call(null,G__14013__$2));
return G__14013__$3;
})();
if(cljs.core.truth_((function (){var or__4988__auto__ = extra_keys_checker;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.seq.call(null,explicit_keys);
}
})())){
return ((function (extra_keys_schema,extra_keys_checker,explicit_keys){
return (function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return schema_tools.coerce.filter_schema_keys.call(null,x,explicit_keys,extra_keys_checker);
} else {
return x;
}
});
;})(extra_keys_schema,extra_keys_checker,explicit_keys))
} else {
return null;
}
} else {
return null;
}
});
/**
 * Creates a matcher where the first matcher matching the
 *   given schema is used.
 */
schema_tools.coerce.or_matcher = (function schema_tools$coerce$or_matcher(var_args){
var args__6053__auto__ = [];
var len__6046__auto___14016 = arguments.length;
var i__6047__auto___14017 = (0);
while(true){
if((i__6047__auto___14017 < len__6046__auto___14016)){
args__6053__auto__.push((arguments[i__6047__auto___14017]));

var G__14018 = (i__6047__auto___14017 + (1));
i__6047__auto___14017 = G__14018;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return schema_tools.coerce.or_matcher.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

schema_tools.coerce.or_matcher.cljs$core$IFn$_invoke$arity$variadic = (function (matchers){
return (function (schema__$1){
return cljs.core.some.call(null,(function (p1__14014_SHARP_){
return p1__14014_SHARP_.call(null,schema__$1);
}),matchers);
});
});

schema_tools.coerce.or_matcher.cljs$lang$maxFixedArity = (0);

schema_tools.coerce.or_matcher.cljs$lang$applyTo = (function (seq14015){
return schema_tools.coerce.or_matcher.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14015));
});
/**
 * Creates a matcher where all matchers are combined with OR,
 *   but if the lead-matcher matches, it creates a sub-coercer and
 *   forwards the coerced value to tail-matchers.
 */
schema_tools.coerce.forwarding_matcher = (function schema_tools$coerce$forwarding_matcher(var_args){
var args__6053__auto__ = [];
var len__6046__auto___14021 = arguments.length;
var i__6047__auto___14022 = (0);
while(true){
if((i__6047__auto___14022 < len__6046__auto___14021)){
args__6053__auto__.push((arguments[i__6047__auto___14022]));

var G__14023 = (i__6047__auto___14022 + (1));
i__6047__auto___14022 = G__14023;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return schema_tools.coerce.forwarding_matcher.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

schema_tools.coerce.forwarding_matcher.cljs$core$IFn$_invoke$arity$variadic = (function (lead_matcher,tail_matchers){
var match_tail = cljs.core.apply.call(null,schema_tools.coerce.or_matcher,tail_matchers);
return schema_tools.coerce.or_matcher.call(null,((function (match_tail){
return (function (schema__$1){
var temp__4423__auto__ = lead_matcher.call(null,schema__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return ((function (f,temp__4423__auto__,match_tail){
return (function (x){
var x1 = f.call(null,x);
if(cljs.core.truth_((function (){var and__4976__auto__ = x1;
if(cljs.core.truth_(and__4976__auto__)){
return cljs.core.not_EQ_.call(null,x,x1);
} else {
return and__4976__auto__;
}
})())){
var coercer = schema.coerce.coercer.call(null,schema__$1,match_tail);
return coercer.call(null,x1);
} else {
return x1;
}
});
;})(f,temp__4423__auto__,match_tail))
} else {
return null;
}
});})(match_tail))
,match_tail);
});

schema_tools.coerce.forwarding_matcher.cljs$lang$maxFixedArity = (1);

schema_tools.coerce.forwarding_matcher.cljs$lang$applyTo = (function (seq14019){
var G__14020 = cljs.core.first.call(null,seq14019);
var seq14019__$1 = cljs.core.next.call(null,seq14019);
return schema_tools.coerce.forwarding_matcher.cljs$core$IFn$_invoke$arity$variadic(G__14020,seq14019__$1);
});
/**
 * Produce a function that simultaneously coerces and validates a value against a `schema.`
 *   If a value can't be coerced to match the schema, an `ex-info` is thrown - like `schema.core/validate`,
 *   but with overridable `:type`, defaulting to `:schema-tools.coerce/error.`
 */
schema_tools.coerce.coercer = (function schema_tools$coerce$coercer(var_args){
var args14024 = [];
var len__6046__auto___14027 = arguments.length;
var i__6047__auto___14028 = (0);
while(true){
if((i__6047__auto___14028 < len__6046__auto___14027)){
args14024.push((arguments[i__6047__auto___14028]));

var G__14029 = (i__6047__auto___14028 + (1));
i__6047__auto___14028 = G__14029;
continue;
} else {
}
break;
}

var G__14026 = args14024.length;
switch (G__14026) {
case 2:
return schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14024.length)].join('')));

}
});

schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$2 = (function (schema__$1,matcher){
return schema_tools.coerce.coercer.call(null,schema__$1,matcher,new cljs.core.Keyword("schema-tools.coerce","error","schema-tools.coerce/error",-196891250));
});

schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$3 = (function (schema__$1,matcher,type){
var coercer = schema.coerce.coercer.call(null,schema__$1,matcher);
return ((function (coercer){
return (function (value){
return schema_tools.coerce.coerce_or_error_BANG_.call(null,value,schema__$1,coercer,type);
});
;})(coercer))
});

schema_tools.coerce.coercer.cljs$lang$maxFixedArity = 3;
/**
 * Simultaneously coerces and validates a value to match the given `schema.` If a `value` can't
 *   be coerced to match the `schema`, an `ex-info` is thrown - like `schema.core/validate`,
 *   but with overridable `:type`, defaulting to `:schema-tools.coerce/error.`
 */
schema_tools.coerce.coerce = (function schema_tools$coerce$coerce(var_args){
var args14031 = [];
var len__6046__auto___14034 = arguments.length;
var i__6047__auto___14035 = (0);
while(true){
if((i__6047__auto___14035 < len__6046__auto___14034)){
args14031.push((arguments[i__6047__auto___14035]));

var G__14036 = (i__6047__auto___14035 + (1));
i__6047__auto___14035 = G__14036;
continue;
} else {
}
break;
}

var G__14033 = args14031.length;
switch (G__14033) {
case 3:
return schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14031.length)].join('')));

}
});

schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$3 = (function (value,schema__$1,matcher){
return schema_tools.coerce.coerce.call(null,value,schema__$1,matcher,new cljs.core.Keyword("schema-tools.coerce","error","schema-tools.coerce/error",-196891250));
});

schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$4 = (function (value,schema__$1,matcher,type){
return schema_tools.coerce.coercer.call(null,schema__$1,matcher,type).call(null,value);
});

schema_tools.coerce.coerce.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=coerce.js.map