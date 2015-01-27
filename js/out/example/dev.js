// Compiled by ClojureScript 0.0-2727 {}
goog.provide('example.dev');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('om_tools.core');
example.dev.tree = (function tree(v,ks){
if(cljs.core.coll_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__4514__auto__ = (function iter__22058(s__22059){
return (new cljs.core.LazySeq(null,(function (){
var s__22059__$1 = s__22059;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22059__$1);
if(temp__4126__auto__){
var s__22059__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22059__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__22059__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__22061 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__22060 = (0);
while(true){
if((i__22060 < size__4513__auto__)){
var vec__22066 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__22060);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22066,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22066,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__22061,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",tree(v__$1,ks__$1)], null));

var G__22068 = (i__22060 + (1));
i__22060 = G__22068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22061),iter__22058(cljs.core.chunk_rest(s__22059__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22061),null);
}
} else {
var vec__22067 = cljs.core.first(s__22059__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22067,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22067,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",tree(v__$1,ks__$1)], null),iter__22058(cljs.core.rest(s__22059__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__(((cljs.core.map_QMARK_(v))?v:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v)));
})()], null);
} else {
if(cljs.core.fn_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208,"function"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0))], null);

}
}
});

var ufv___22086 = schema.utils.use_fn_validation;
var output_schema22070_22087 = schema.core.Any;
var input_schema22071_22088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22072_22089 = schema.core.checker(input_schema22071_22088);
var output_checker22073_22090 = schema.core.checker(output_schema22070_22087);
/**
* Inputs: [state owner]
*/
example.dev.state_view = ((function (ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090){
return (function state_view(G__22074,G__22075){
var validate__10718__auto__ = ufv___22086.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___22091 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22074,G__22075], null);
var temp__4126__auto___22092 = (function (){var G__22081 = args__10719__auto___22091;
return (input_checker22072_22089.cljs$core$IFn$_invoke$arity$1 ? input_checker22072_22089.cljs$core$IFn$_invoke$arity$1(G__22081) : input_checker22072_22089.call(null,G__22081));
})();
if(cljs.core.truth_(temp__4126__auto___22092)){
var error__10720__auto___22093 = temp__4126__auto___22092;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22093], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22093,cljs.core.constant$keyword$23,args__10719__auto___22091,cljs.core.constant$keyword$24,input_schema22071_22088,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var state = G__22074;
var owner = G__22075;
while(true){
if(typeof example.dev.t22082 !== 'undefined'){
} else {

/**
* @constructor
*/
example.dev.t22082 = (function (output_checker22073,G__22074,owner,state_view,G__22075,state,input_schema22071,input_checker22072,ufv__,output_schema22070,validate__10718__auto__,meta22083){
this.output_checker22073 = output_checker22073;
this.G__22074 = G__22074;
this.owner = owner;
this.state_view = state_view;
this.G__22075 = G__22075;
this.state = state;
this.input_schema22071 = input_schema22071;
this.input_checker22072 = input_checker22072;
this.ufv__ = ufv__;
this.output_schema22070 = output_schema22070;
this.validate__10718__auto__ = validate__10718__auto__;
this.meta22083 = meta22083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.dev.t22082.prototype.om$core$IDisplayName$ = true;

example.dev.t22082.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__10718__auto__,ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090){
return (function (_){
var self__ = this;
var ___$1 = this;
return "state-view";
});})(validate__10718__auto__,ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090))
;

example.dev.t22082.prototype.om$core$IRender$ = true;

example.dev.t22082.prototype.om$core$IRender$render$arity$1 = ((function (validate__10718__auto__,ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(example.dev.tree(self__.state,cljs.core.PersistentVector.EMPTY));
});})(validate__10718__auto__,ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090))
;

example.dev.t22082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__10718__auto__,ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090){
return (function (_22084){
var self__ = this;
var _22084__$1 = this;
return self__.meta22083;
});})(validate__10718__auto__,ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090))
;

example.dev.t22082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__10718__auto__,ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090){
return (function (_22084,meta22083__$1){
var self__ = this;
var _22084__$1 = this;
return (new example.dev.t22082(self__.output_checker22073,self__.G__22074,self__.owner,self__.state_view,self__.G__22075,self__.state,self__.input_schema22071,self__.input_checker22072,self__.ufv__,self__.output_schema22070,self__.validate__10718__auto__,meta22083__$1));
});})(validate__10718__auto__,ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090))
;

example.dev.t22082.cljs$lang$type = true;

example.dev.t22082.cljs$lang$ctorStr = "example.dev/t22082";

example.dev.t22082.cljs$lang$ctorPrWriter = ((function (validate__10718__auto__,ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"example.dev/t22082");
});})(validate__10718__auto__,ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090))
;

example.dev.__GT_t22082 = ((function (validate__10718__auto__,ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090){
return (function __GT_t22082(output_checker22073__$1,G__22074__$1,owner__$1,state_view__$1,G__22075__$1,state__$1,input_schema22071__$1,input_checker22072__$1,ufv____$1,output_schema22070__$1,validate__10718__auto____$1,meta22083){
return (new example.dev.t22082(output_checker22073__$1,G__22074__$1,owner__$1,state_view__$1,G__22075__$1,state__$1,input_schema22071__$1,input_checker22072__$1,ufv____$1,output_schema22070__$1,validate__10718__auto____$1,meta22083));
});})(validate__10718__auto__,ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090))
;

}

return (new example.dev.t22082(output_checker22073_22090,G__22074,owner,state_view,G__22075,state,input_schema22071_22088,input_checker22072_22089,ufv___22086,output_schema22070_22087,validate__10718__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___22094 = (function (){var G__22085 = o__10721__auto__;
return (output_checker22073_22090.cljs$core$IFn$_invoke$arity$1 ? output_checker22073_22090.cljs$core$IFn$_invoke$arity$1(G__22085) : output_checker22073_22090.call(null,G__22085));
})();
if(cljs.core.truth_(temp__4126__auto___22094)){
var error__10720__auto___22095 = temp__4126__auto___22094;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22095], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22095,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema22070_22087,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___22086,output_schema22070_22087,input_schema22071_22088,input_checker22072_22089,output_checker22073_22090))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.dev.state_view),schema.core.make_fn_schema(output_schema22070_22087,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22071_22088], null)));

example.dev.__GT_state_view = (function() {
var __GT_state_view = null;
var __GT_state_view__1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,cursor__20339__auto__);
});
var __GT_state_view__2 = (function (cursor__20339__auto__,m22069){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.dev.state_view,cursor__20339__auto__,m22069);
});
__GT_state_view = function(cursor__20339__auto__,m22069){
switch(arguments.length){
case 1:
return __GT_state_view__1.call(this,cursor__20339__auto__);
case 2:
return __GT_state_view__2.call(this,cursor__20339__auto__,m22069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_state_view.cljs$core$IFn$_invoke$arity$1 = __GT_state_view__1;
__GT_state_view.cljs$core$IFn$_invoke$arity$2 = __GT_state_view__2;
return __GT_state_view;
})()
;
