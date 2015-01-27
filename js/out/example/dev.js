// Compiled by ClojureScript 0.0-2727 {}
goog.provide('example.dev');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('om_tools.core');
example.dev.tree = (function tree(v,ks){
if(cljs.core.coll_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__5007__auto__ = (function iter__21705(s__21706){
return (new cljs.core.LazySeq(null,(function (){
var s__21706__$1 = s__21706;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21706__$1);
if(temp__4126__auto__){
var s__21706__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21706__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__21706__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__21708 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__21707 = (0);
while(true){
if((i__21707 < size__5006__auto__)){
var vec__21713 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__21707);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21713,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21713,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__21708,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$51,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$190,(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",tree(v__$1,ks__$1)], null));

var G__21715 = (i__21707 + (1));
i__21707 = G__21715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21708),iter__21705(cljs.core.chunk_rest(s__21706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21708),null);
}
} else {
var vec__21714 = cljs.core.first(s__21706__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21714,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21714,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$51,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$190,(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",tree(v__$1,ks__$1)], null),iter__21705(cljs.core.rest(s__21706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5007__auto__(((cljs.core.map_QMARK_(v))?v:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v)));
})()], null);
} else {
if(cljs.core.fn_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$191,"function"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$174,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0))], null);

}
}
});

var ufv___21733 = schema.utils.use_fn_validation;
var output_schema21717_21734 = schema.core.Any;
var input_schema21718_21735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21719_21736 = schema.core.checker(input_schema21718_21735);
var output_checker21720_21737 = schema.core.checker(output_schema21717_21734);
/**
* Inputs: [state owner]
*/
example.dev.state_view = ((function (ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737){
return (function state_view(G__21721,G__21722){
var validate__12581__auto__ = ufv___21733.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___21738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21721,G__21722], null);
var temp__4126__auto___21739 = (function (){var G__21728 = args__12582__auto___21738;
return (input_checker21719_21736.cljs$core$IFn$_invoke$arity$1 ? input_checker21719_21736.cljs$core$IFn$_invoke$arity$1(G__21728) : input_checker21719_21736.call(null,G__21728));
})();
if(cljs.core.truth_(temp__4126__auto___21739)){
var error__12583__auto___21740 = temp__4126__auto___21739;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___21740], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___21740,cljs.core.constant$keyword$66,args__12582__auto___21738,cljs.core.constant$keyword$67,input_schema21718_21735,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var state = G__21721;
var owner = G__21722;
while(true){
if(typeof example.dev.t21729 !== 'undefined'){
} else {

/**
* @constructor
*/
example.dev.t21729 = (function (output_schema21717,owner,state_view,output_checker21720,validate__12581__auto__,input_schema21718,state,input_checker21719,G__21722,G__21721,ufv__,meta21730){
this.output_schema21717 = output_schema21717;
this.owner = owner;
this.state_view = state_view;
this.output_checker21720 = output_checker21720;
this.validate__12581__auto__ = validate__12581__auto__;
this.input_schema21718 = input_schema21718;
this.state = state;
this.input_checker21719 = input_checker21719;
this.G__21722 = G__21722;
this.G__21721 = G__21721;
this.ufv__ = ufv__;
this.meta21730 = meta21730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.dev.t21729.prototype.om$core$IDisplayName$ = true;

example.dev.t21729.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12581__auto__,ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737){
return (function (_){
var self__ = this;
var ___$1 = this;
return "state-view";
});})(validate__12581__auto__,ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737))
;

example.dev.t21729.prototype.om$core$IRender$ = true;

example.dev.t21729.prototype.om$core$IRender$render$arity$1 = ((function (validate__12581__auto__,ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(example.dev.tree(self__.state,cljs.core.PersistentVector.EMPTY));
});})(validate__12581__auto__,ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737))
;

example.dev.t21729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12581__auto__,ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737){
return (function (_21731){
var self__ = this;
var _21731__$1 = this;
return self__.meta21730;
});})(validate__12581__auto__,ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737))
;

example.dev.t21729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12581__auto__,ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737){
return (function (_21731,meta21730__$1){
var self__ = this;
var _21731__$1 = this;
return (new example.dev.t21729(self__.output_schema21717,self__.owner,self__.state_view,self__.output_checker21720,self__.validate__12581__auto__,self__.input_schema21718,self__.state,self__.input_checker21719,self__.G__21722,self__.G__21721,self__.ufv__,meta21730__$1));
});})(validate__12581__auto__,ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737))
;

example.dev.t21729.cljs$lang$type = true;

example.dev.t21729.cljs$lang$ctorStr = "example.dev/t21729";

example.dev.t21729.cljs$lang$ctorPrWriter = ((function (validate__12581__auto__,ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"example.dev/t21729");
});})(validate__12581__auto__,ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737))
;

example.dev.__GT_t21729 = ((function (validate__12581__auto__,ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737){
return (function __GT_t21729(output_schema21717__$1,owner__$1,state_view__$1,output_checker21720__$1,validate__12581__auto____$1,input_schema21718__$1,state__$1,input_checker21719__$1,G__21722__$1,G__21721__$1,ufv____$1,meta21730){
return (new example.dev.t21729(output_schema21717__$1,owner__$1,state_view__$1,output_checker21720__$1,validate__12581__auto____$1,input_schema21718__$1,state__$1,input_checker21719__$1,G__21722__$1,G__21721__$1,ufv____$1,meta21730));
});})(validate__12581__auto__,ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737))
;

}

return (new example.dev.t21729(output_schema21717_21734,owner,state_view,output_checker21720_21737,validate__12581__auto__,input_schema21718_21735,state,input_checker21719_21736,G__21722,G__21721,ufv___21733,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___21741 = (function (){var G__21732 = o__12584__auto__;
return (output_checker21720_21737.cljs$core$IFn$_invoke$arity$1 ? output_checker21720_21737.cljs$core$IFn$_invoke$arity$1(G__21732) : output_checker21720_21737.call(null,G__21732));
})();
if(cljs.core.truth_(temp__4126__auto___21741)){
var error__12583__auto___21742 = temp__4126__auto___21741;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___21742], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___21742,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema21717_21734,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___21733,output_schema21717_21734,input_schema21718_21735,input_checker21719_21736,output_checker21720_21737))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.dev.state_view),schema.core.make_fn_schema(output_schema21717_21734,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21718_21735], null)));

example.dev.__GT_state_view = (function() {
var __GT_state_view = null;
var __GT_state_view__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,cursor__20832__auto__);
});
var __GT_state_view__2 = (function (cursor__20832__auto__,m21716){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.dev.state_view,cursor__20832__auto__,m21716);
});
__GT_state_view = function(cursor__20832__auto__,m21716){
switch(arguments.length){
case 1:
return __GT_state_view__1.call(this,cursor__20832__auto__);
case 2:
return __GT_state_view__2.call(this,cursor__20832__auto__,m21716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_state_view.cljs$core$IFn$_invoke$arity$1 = __GT_state_view__1;
__GT_state_view.cljs$core$IFn$_invoke$arity$2 = __GT_state_view__2;
return __GT_state_view;
})()
;
