// Compiled by ClojureScript 1.7.170 {}
goog.provide('schema.coerce');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.spec.core');
goog.require('clojure.string');
goog.require('schema.utils');
goog.require('cljs.reader');
/**
 * A Schema for Schemas
 */
schema.coerce.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__12635__12636__auto__){
if(!((p1__12635__12636__auto__ == null))){
if((false) || (p1__12635__12636__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__12635__12636__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__12635__12636__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__12635__12636__auto__);
}
})], null));
/**
 * A function from schema to coercion function, or nil if no special coercion is needed.
 * The returned function is applied to the corresponding data before validation (or walking/
 * coercion of its sub-schemas, if applicable)
 */
schema.coerce.CoercionMatcher = schema.core.make_fn_schema.call(null,schema.core.maybe.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___13960 = schema.utils.use_fn_validation;
var output_schema13952_13961 = schema.core.Any;
var input_schema13953_13962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.coerce.CoercionMatcher,cljs.core.with_meta(new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)))], null);
var input_checker13954_13963 = schema.core.checker.call(null,input_schema13953_13962);
var output_checker13955_13964 = schema.core.checker.call(null,output_schema13952_13961);
var ret__13416__auto___13965 = /**
 * Inputs: [schema coercion-matcher :- CoercionMatcher]
 * 
 *   Produce a function that simultaneously coerces and validates a datum.  Returns
 * a coerced value, or a schema.utils.ErrorContainer describing the error.
 */
schema.coerce.coercer = ((function (ufv___13960,output_schema13952_13961,input_schema13953_13962,input_checker13954_13963,output_checker13955_13964){
return (function schema$coerce$coercer(G__13956,G__13957){
var validate__11890__auto__ = ufv___13960.get_cell();
if(cljs.core.truth_(validate__11890__auto__)){
var args__11891__auto___13966 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13956,G__13957], null);
var temp__4425__auto___13967 = input_checker13954_13963.call(null,args__11891__auto___13966);
if(cljs.core.truth_(temp__4425__auto___13967)){
var error__11892__auto___13968 = temp__4425__auto___13967;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null)),cljs.core.pr_str.call(null,error__11892__auto___13968)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13953_13962,new cljs.core.Keyword(null,"value","value",305978217),args__11891__auto___13966,new cljs.core.Keyword(null,"error","error",-978969032),error__11892__auto___13968], null));
} else {
}
} else {
}

var o__11893__auto__ = (function (){var schema__$1 = G__13956;
var coercion_matcher = G__13957;
while(true){
return schema.spec.core.run_checker.call(null,((function (validate__11890__auto__,ufv___13960,output_schema13952_13961,input_schema13953_13962,input_checker13954_13963,output_checker13955_13964){
return (function (s,params){
var c = schema.spec.core.checker.call(null,schema.core.spec.call(null,s),params);
var temp__4423__auto__ = coercion_matcher.call(null,s);
if(cljs.core.truth_(temp__4423__auto__)){
var coercer__$1 = temp__4423__auto__;
return ((function (coercer__$1,temp__4423__auto__,c,validate__11890__auto__,ufv___13960,output_schema13952_13961,input_schema13953_13962,input_checker13954_13963,output_checker13955_13964){
return (function (x){
try{var v = coercer__$1.call(null,x);
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,v))){
return v;
} else {
return c.call(null,v);
}
}catch (e13959){if((e13959 instanceof Object)){
var t = e13959;
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s,x,(new cljs.core.Delay(((function (t,coercer__$1,temp__4423__auto__,c,validate__11890__auto__,ufv___13960,output_schema13952_13961,input_schema13953_13962,input_checker13954_13963,output_checker13955_13964){
return (function (){
return t;
});})(t,coercer__$1,temp__4423__auto__,c,validate__11890__auto__,ufv___13960,output_schema13952_13961,input_schema13953_13962,input_checker13954_13963,output_checker13955_13964))
,null)),null));
} else {
throw e13959;

}
}});
;})(coercer__$1,temp__4423__auto__,c,validate__11890__auto__,ufv___13960,output_schema13952_13961,input_schema13953_13962,input_checker13954_13963,output_checker13955_13964))
} else {
return c;
}
});})(validate__11890__auto__,ufv___13960,output_schema13952_13961,input_schema13953_13962,input_checker13954_13963,output_checker13955_13964))
,true,schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__11890__auto__)){
var temp__4425__auto___13969 = output_checker13955_13964.call(null,o__11893__auto__);
if(cljs.core.truth_(temp__4425__auto___13969)){
var error__11892__auto___13970 = temp__4425__auto___13969;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null)),cljs.core.pr_str.call(null,error__11892__auto___13970)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13952_13961,new cljs.core.Keyword(null,"value","value",305978217),o__11893__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11892__auto___13970], null));
} else {
}
} else {
}

return o__11893__auto__;
});})(ufv___13960,output_schema13952_13961,input_schema13953_13962,input_checker13954_13963,output_checker13955_13964))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,schema.coerce.coercer),schema.core.make_fn_schema.call(null,output_schema13952_13961,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13953_13962], null)));

var ufv___13977 = schema.utils.use_fn_validation;
var output_schema13971_13978 = schema.core.Any;
var input_schema13972_13979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.coerce.CoercionMatcher,cljs.core.with_meta(new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)))], null);
var input_checker13973_13980 = schema.core.checker.call(null,input_schema13972_13979);
var output_checker13974_13981 = schema.core.checker.call(null,output_schema13971_13978);
var ret__13416__auto___13982 = /**
 * Inputs: [schema coercion-matcher :- CoercionMatcher]
 * 
 *   Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw).
 */
schema.coerce.coercer_BANG_ = ((function (ufv___13977,output_schema13971_13978,input_schema13972_13979,input_checker13973_13980,output_checker13974_13981){
return (function schema$coerce$coercer_BANG_(G__13975,G__13976){
var validate__11890__auto__ = ufv___13977.get_cell();
if(cljs.core.truth_(validate__11890__auto__)){
var args__11891__auto___13983 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13975,G__13976], null);
var temp__4425__auto___13984 = input_checker13973_13980.call(null,args__11891__auto___13983);
if(cljs.core.truth_(temp__4425__auto___13984)){
var error__11892__auto___13985 = temp__4425__auto___13984;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null)),cljs.core.pr_str.call(null,error__11892__auto___13985)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13972_13979,new cljs.core.Keyword(null,"value","value",305978217),args__11891__auto___13983,new cljs.core.Keyword(null,"error","error",-978969032),error__11892__auto___13985], null));
} else {
}
} else {
}

var o__11893__auto__ = (function (){var schema__$1 = G__13975;
var coercion_matcher = G__13976;
while(true){
var c = schema.coerce.coercer.call(null,schema__$1,coercion_matcher);
return ((function (c,validate__11890__auto__,ufv___13977,output_schema13971_13978,input_schema13972_13979,input_checker13973_13980,output_checker13974_13981){
return (function (value){
var coerced = c.call(null,value);
var temp__4425__auto___13986 = schema.utils.error_val.call(null,coerced);
if(cljs.core.truth_(temp__4425__auto___13986)){
var error_13987 = temp__4425__auto___13986;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value cannot be coerced to match schema: %s",cljs.core.pr_str.call(null,error_13987)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_13987], null));
} else {
}

return coerced;
});
;})(c,validate__11890__auto__,ufv___13977,output_schema13971_13978,input_schema13972_13979,input_checker13973_13980,output_checker13974_13981))
break;
}
})();
if(cljs.core.truth_(validate__11890__auto__)){
var temp__4425__auto___13988 = output_checker13974_13981.call(null,o__11893__auto__);
if(cljs.core.truth_(temp__4425__auto___13988)){
var error__11892__auto___13989 = temp__4425__auto___13988;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null)),cljs.core.pr_str.call(null,error__11892__auto___13989)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13971_13978,new cljs.core.Keyword(null,"value","value",305978217),o__11893__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11892__auto___13989], null));
} else {
}
} else {
}

return o__11893__auto__;
});})(ufv___13977,output_schema13971_13978,input_schema13972_13979,input_checker13973_13980,output_checker13974_13981))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,schema.coerce.coercer_BANG_),schema.core.make_fn_schema.call(null,output_schema13971_13978,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13972_13979], null)));

var ufv___13996 = schema.utils.use_fn_validation;
var output_schema13991_13997 = schema.coerce.CoercionMatcher;
var input_schema13992_13998 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),cljs.core.with_meta(new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)], null)))], null);
var input_checker13993_13999 = schema.core.checker.call(null,input_schema13992_13998);
var output_checker13994_14000 = schema.core.checker.call(null,output_schema13991_13997);
var ret__13416__auto___14001 = /**
 * Inputs: [matchers :- [CoercionMatcher]]
 *   Returns: CoercionMatcher
 * 
 *   A matcher that takes the first match from matchers.
 */
schema.coerce.first_matcher = ((function (ufv___13996,output_schema13991_13997,input_schema13992_13998,input_checker13993_13999,output_checker13994_14000){
return (function schema$coerce$first_matcher(G__13995){
var validate__11890__auto__ = ufv___13996.get_cell();
if(cljs.core.truth_(validate__11890__auto__)){
var args__11891__auto___14002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13995], null);
var temp__4425__auto___14003 = input_checker13993_13999.call(null,args__11891__auto___14002);
if(cljs.core.truth_(temp__4425__auto___14003)){
var error__11892__auto___14004 = temp__4425__auto___14003;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null)),cljs.core.pr_str.call(null,error__11892__auto___14004)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13992_13998,new cljs.core.Keyword(null,"value","value",305978217),args__11891__auto___14002,new cljs.core.Keyword(null,"error","error",-978969032),error__11892__auto___14004], null));
} else {
}
} else {
}

var o__11893__auto__ = (function (){var matchers = G__13995;
while(true){
return ((function (validate__11890__auto__,ufv___13996,output_schema13991_13997,input_schema13992_13998,input_checker13993_13999,output_checker13994_14000){
return (function (schema__$1){
return cljs.core.first.call(null,cljs.core.keep.call(null,((function (validate__11890__auto__,ufv___13996,output_schema13991_13997,input_schema13992_13998,input_checker13993_13999,output_checker13994_14000){
return (function (p1__13990_SHARP_){
return p1__13990_SHARP_.call(null,schema__$1);
});})(validate__11890__auto__,ufv___13996,output_schema13991_13997,input_schema13992_13998,input_checker13993_13999,output_checker13994_14000))
,matchers));
});
;})(validate__11890__auto__,ufv___13996,output_schema13991_13997,input_schema13992_13998,input_checker13993_13999,output_checker13994_14000))
break;
}
})();
if(cljs.core.truth_(validate__11890__auto__)){
var temp__4425__auto___14005 = output_checker13994_14000.call(null,o__11893__auto__);
if(cljs.core.truth_(temp__4425__auto___14005)){
var error__11892__auto___14006 = temp__4425__auto___14005;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null)),cljs.core.pr_str.call(null,error__11892__auto___14006)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13991_13997,new cljs.core.Keyword(null,"value","value",305978217),o__11893__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11892__auto___14006], null));
} else {
}
} else {
}

return o__11893__auto__;
});})(ufv___13996,output_schema13991_13997,input_schema13992_13998,input_checker13993_13999,output_checker13994_14000))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,schema.coerce.first_matcher),schema.core.make_fn_schema.call(null,output_schema13991_13997,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13992_13998], null)));

schema.coerce.string__GT_keyword = (function schema$coerce$string__GT_keyword(s){
if(typeof s === 'string'){
return cljs.core.keyword.call(null,s);
} else {
return s;
}
});
/**
 * returns true for strings that are equal, ignoring case, to the string 'true'
 * (following java.lang.Boolean/parseBoolean semantics)
 */
schema.coerce.string__GT_boolean = (function schema$coerce$string__GT_boolean(s){
if(typeof s === 'string'){
return cljs.core._EQ_.call(null,"true",clojure.string.lower_case.call(null,s));
} else {
return s;
}
});
schema.coerce.keyword_enum_matcher = (function schema$coerce$keyword_enum_matcher(schema__$1){
if((((schema__$1 instanceof schema.core.EnumSchema)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,schema__$1.vs))) || (((schema__$1 instanceof schema.core.EqSchema)) && ((schema__$1.v instanceof cljs.core.Keyword)))){
return schema.coerce.string__GT_keyword;
} else {
return null;
}
});
schema.coerce.set_matcher = (function schema$coerce$set_matcher(schema__$1){
if((schema__$1 instanceof cljs.core.PersistentHashSet)){
return (function (x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.set.call(null,x);
} else {
return x;
}
});
} else {
return null;
}
});
/**
 * Take a single-arg function f, and return a single-arg function that acts as identity
 * if f throws an exception, and like f otherwise.  Useful because coercers are not explicitly
 * guarded for exceptions, and failing to coerce will generally produce a more useful error
 * in this case.
 */
schema.coerce.safe = (function schema$coerce$safe(f){
return (function (x){
try{return f.call(null,x);
}catch (e14008){if((e14008 instanceof Object)){
var e = e14008;
return x;
} else {
throw e14008;

}
}});
});
/**
 * Returns instance of UUID if input is a string.
 * Note: in CLJS, this does not guarantee a specific UUID string representation,
 *       similar to #uuid reader
 */
schema.coerce.string__GT_uuid = (function schema$coerce$string__GT_uuid(p1__14009_SHARP_){
if(typeof p1__14009_SHARP_ === 'string'){
return (new cljs.core.UUID(p1__14009_SHARP_));
} else {
return p1__14009_SHARP_;
}
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean,schema.core.Uuid,schema.coerce.string__GT_uuid], true, false));
/**
 * A matcher that coerces keywords and keyword eq/enums from strings, and longs and doubles
 *   from numbers on the JVM (without losing precision)
 */
schema.coerce.json_coercion_matcher = (function schema$coerce$json_coercion_matcher(schema__$1){
var or__4988__auto__ = schema.coerce._PLUS_json_coercions_PLUS_.call(null,schema__$1);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
var or__4988__auto____$1 = schema.coerce.keyword_enum_matcher.call(null,schema__$1);
if(cljs.core.truth_(or__4988__auto____$1)){
return or__4988__auto____$1;
} else {
return schema.coerce.set_matcher.call(null,schema__$1);
}
}
});
/**
 * Reads one object from a string. Returns nil when string is nil or empty
 */
schema.coerce.edn_read_string = cljs.reader.read_string;
schema.coerce._PLUS_string_coercions_PLUS_ = cljs.core.merge.call(null,schema.coerce._PLUS_json_coercions_PLUS_,cljs.core.PersistentArrayMap.fromArray([schema.core.Num,schema.coerce.safe.call(null,schema.coerce.edn_read_string),schema.core.Int,schema.coerce.safe.call(null,schema.coerce.edn_read_string)], true, false));
/**
 * A matcher that coerces keywords, keyword eq/enums, s/Num and s/Int,
 *   and long and doubles (JVM only) from strings.
 */
schema.coerce.string_coercion_matcher = (function schema$coerce$string_coercion_matcher(schema__$1){
var or__4988__auto__ = schema.coerce._PLUS_string_coercions_PLUS_.call(null,schema__$1);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
var or__4988__auto____$1 = schema.coerce.keyword_enum_matcher.call(null,schema__$1);
if(cljs.core.truth_(or__4988__auto____$1)){
return or__4988__auto____$1;
} else {
return schema.coerce.set_matcher.call(null,schema__$1);
}
}
});

//# sourceMappingURL=coerce.js.map