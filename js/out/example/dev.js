// Compiled by ClojureScript 0.0-2727 {}
goog.provide('example.dev');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('om_tools.core');
example.dev.tree = (function tree(v,ks){
if(cljs.core.coll_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__5007__auto__ = (function iter__21679(s__21680){
return (new cljs.core.LazySeq(null,(function (){
var s__21680__$1 = s__21680;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21680__$1);
if(temp__4126__auto__){
var s__21680__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21680__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__21680__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__21682 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__21681 = (0);
while(true){
if((i__21681 < size__5006__auto__)){
var vec__21687 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__21681);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21687,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21687,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__21682,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$51,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$188,(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",tree(v__$1,ks__$1)], null));

var G__21689 = (i__21681 + (1));
i__21681 = G__21689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21682),iter__21679(cljs.core.chunk_rest(s__21680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21682),null);
}
} else {
var vec__21688 = cljs.core.first(s__21680__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21688,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21688,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$51,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$188,(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",tree(v__$1,ks__$1)], null),iter__21679(cljs.core.rest(s__21680__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$189,"function"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0))], null);

}
}
});

var ufv___21707 = schema.utils.use_fn_validation;
var output_schema21691_21708 = schema.core.Any;
var input_schema21692_21709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21693_21710 = schema.core.checker(input_schema21692_21709);
var output_checker21694_21711 = schema.core.checker(output_schema21691_21708);
/**
* Inputs: [state owner]
*/
example.dev.state_view = ((function (ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711){
return (function state_view(G__21695,G__21696){
var validate__12581__auto__ = ufv___21707.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___21712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21695,G__21696], null);
var temp__4126__auto___21713 = (function (){var G__21702 = args__12582__auto___21712;
return (input_checker21693_21710.cljs$core$IFn$_invoke$arity$1 ? input_checker21693_21710.cljs$core$IFn$_invoke$arity$1(G__21702) : input_checker21693_21710.call(null,G__21702));
})();
if(cljs.core.truth_(temp__4126__auto___21713)){
var error__12583__auto___21714 = temp__4126__auto___21713;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___21714], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___21714,cljs.core.constant$keyword$66,args__12582__auto___21712,cljs.core.constant$keyword$67,input_schema21692_21709,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var state = G__21695;
var owner = G__21696;
while(true){
if(typeof example.dev.t21703 !== 'undefined'){
} else {

/**
* @constructor
*/
example.dev.t21703 = (function (owner,state_view,validate__12581__auto__,output_checker21694,output_schema21691,G__21696,G__21695,state,input_schema21692,input_checker21693,ufv__,meta21704){
this.owner = owner;
this.state_view = state_view;
this.validate__12581__auto__ = validate__12581__auto__;
this.output_checker21694 = output_checker21694;
this.output_schema21691 = output_schema21691;
this.G__21696 = G__21696;
this.G__21695 = G__21695;
this.state = state;
this.input_schema21692 = input_schema21692;
this.input_checker21693 = input_checker21693;
this.ufv__ = ufv__;
this.meta21704 = meta21704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.dev.t21703.prototype.om$core$IDisplayName$ = true;

example.dev.t21703.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12581__auto__,ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711){
return (function (_){
var self__ = this;
var ___$1 = this;
return "state-view";
});})(validate__12581__auto__,ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711))
;

example.dev.t21703.prototype.om$core$IRender$ = true;

example.dev.t21703.prototype.om$core$IRender$render$arity$1 = ((function (validate__12581__auto__,ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(example.dev.tree(self__.state,cljs.core.PersistentVector.EMPTY));
});})(validate__12581__auto__,ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711))
;

example.dev.t21703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12581__auto__,ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711){
return (function (_21705){
var self__ = this;
var _21705__$1 = this;
return self__.meta21704;
});})(validate__12581__auto__,ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711))
;

example.dev.t21703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12581__auto__,ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711){
return (function (_21705,meta21704__$1){
var self__ = this;
var _21705__$1 = this;
return (new example.dev.t21703(self__.owner,self__.state_view,self__.validate__12581__auto__,self__.output_checker21694,self__.output_schema21691,self__.G__21696,self__.G__21695,self__.state,self__.input_schema21692,self__.input_checker21693,self__.ufv__,meta21704__$1));
});})(validate__12581__auto__,ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711))
;

example.dev.t21703.cljs$lang$type = true;

example.dev.t21703.cljs$lang$ctorStr = "example.dev/t21703";

example.dev.t21703.cljs$lang$ctorPrWriter = ((function (validate__12581__auto__,ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"example.dev/t21703");
});})(validate__12581__auto__,ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711))
;

example.dev.__GT_t21703 = ((function (validate__12581__auto__,ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711){
return (function __GT_t21703(owner__$1,state_view__$1,validate__12581__auto____$1,output_checker21694__$1,output_schema21691__$1,G__21696__$1,G__21695__$1,state__$1,input_schema21692__$1,input_checker21693__$1,ufv____$1,meta21704){
return (new example.dev.t21703(owner__$1,state_view__$1,validate__12581__auto____$1,output_checker21694__$1,output_schema21691__$1,G__21696__$1,G__21695__$1,state__$1,input_schema21692__$1,input_checker21693__$1,ufv____$1,meta21704));
});})(validate__12581__auto__,ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711))
;

}

return (new example.dev.t21703(owner,state_view,validate__12581__auto__,output_checker21694_21711,output_schema21691_21708,G__21696,G__21695,state,input_schema21692_21709,input_checker21693_21710,ufv___21707,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___21715 = (function (){var G__21706 = o__12584__auto__;
return (output_checker21694_21711.cljs$core$IFn$_invoke$arity$1 ? output_checker21694_21711.cljs$core$IFn$_invoke$arity$1(G__21706) : output_checker21694_21711.call(null,G__21706));
})();
if(cljs.core.truth_(temp__4126__auto___21715)){
var error__12583__auto___21716 = temp__4126__auto___21715;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___21716], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___21716,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema21691_21708,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___21707,output_schema21691_21708,input_schema21692_21709,input_checker21693_21710,output_checker21694_21711))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.dev.state_view),schema.core.make_fn_schema(output_schema21691_21708,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21692_21709], null)));

example.dev.__GT_state_view = (function() {
var __GT_state_view = null;
var __GT_state_view__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,cursor__20832__auto__);
});
var __GT_state_view__2 = (function (cursor__20832__auto__,m21690){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.dev.state_view,cursor__20832__auto__,m21690);
});
__GT_state_view = function(cursor__20832__auto__,m21690){
switch(arguments.length){
case 1:
return __GT_state_view__1.call(this,cursor__20832__auto__);
case 2:
return __GT_state_view__2.call(this,cursor__20832__auto__,m21690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_state_view.cljs$core$IFn$_invoke$arity$1 = __GT_state_view__1;
__GT_state_view.cljs$core$IFn$_invoke$arity$2 = __GT_state_view__2;
return __GT_state_view;
})()
;
