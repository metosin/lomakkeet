// Compiled by ClojureScript 0.0-2850 {}
goog.provide('om_dev_tools.state_tree');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('om.core');
om_dev_tools.state_tree.toggle = (function toggle(ks,v){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,ks))){
return cljs.core.assoc_in(v,ks,null);
} else {
return cljs.core.assoc_in(v,ks,cljs.core.PersistentArrayMap.EMPTY);
}
});
om_dev_tools.state_tree.tree = (function tree(state,v,ks){
if(cljs.core.coll_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4571__auto__ = (function iter__34633(s__34634){
return (new cljs.core.LazySeq(null,(function (){
var s__34634__$1 = s__34634;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34634__$1);
if(temp__4126__auto__){
var s__34634__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34634__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__34634__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__34636 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__34635 = (0);
while(true){
if((i__34635 < size__4570__auto__)){
var vec__34641 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__34635);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34641,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34641,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__34636,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,k,cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.coll_QMARK_(v__$1))?"coll":"single"),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1))?"open":"closed")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$191,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$176,((function (i__34635,ks__$1,vec__34641,k,v__$1,c__4569__auto__,size__4570__auto__,b__34636,s__34634__$2,temp__4126__auto__){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.toggle,ks__$1));
});})(i__34635,ks__$1,vec__34641,k,v__$1,c__4569__auto__,size__4570__auto__,b__34636,s__34634__$2,temp__4126__auto__))
], null),(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",(cljs.core.truth_((function (){var or__3815__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3815__auto__){
return or__3815__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1);
}
})())?tree(state,v__$1,ks__$1):null)], null));

var G__34643 = (i__34635 + (1));
i__34635 = G__34643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34636),iter__34633(cljs.core.chunk_rest(s__34634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34636),null);
}
} else {
var vec__34642 = cljs.core.first(s__34634__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34642,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34642,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,k,cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.coll_QMARK_(v__$1))?"coll":"single"),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1))?"open":"closed")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$191,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$176,((function (ks__$1,vec__34642,k,v__$1,s__34634__$2,temp__4126__auto__){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.toggle,ks__$1));
});})(ks__$1,vec__34642,k,v__$1,s__34634__$2,temp__4126__auto__))
], null),(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",(cljs.core.truth_((function (){var or__3815__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3815__auto__){
return or__3815__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1);
}
})())?tree(state,v__$1,ks__$1):null)], null),iter__34633(cljs.core.rest(s__34634__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(((cljs.core.map_QMARK_(v))?v:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v)));
})()], null);
} else {
if(typeof v === 'string'){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$192,"\"",v,"\""], null);
} else {
if((v == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,"nil"], null);
} else {
if((v instanceof goog.date.UtcDateTime)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,[cljs.core.str(v)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$194,"datetime"], null)], null);
} else {
if((v instanceof goog.date.Date)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,[cljs.core.str(v)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$194,"localdate"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,[cljs.core.str(v)].join('')], null);

}
}
}
}
}
});

var ufv___34669 = schema.utils.use_fn_validation;
var output_schema34645_34670 = schema.core.Any;
var input_schema34646_34671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker34647_34672 = schema.core.checker(input_schema34646_34671);
var output_checker34648_34673 = schema.core.checker(output_schema34645_34670);
/**
* Inputs: [{:keys [state-tree-state app-state]} owner]
*/
om_dev_tools.state_tree.state_view = ((function (ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673){
return (function state_view(G__34649,G__34650){
var validate__12170__auto__ = ufv___34669.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___34674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34649,G__34650], null);
var temp__4126__auto___34675 = (function (){var G__34660 = args__12171__auto___34674;
return (input_checker34647_34672.cljs$core$IFn$_invoke$arity$1 ? input_checker34647_34672.cljs$core$IFn$_invoke$arity$1(G__34660) : input_checker34647_34672.call(null,G__34660));
})();
if(cljs.core.truth_(temp__4126__auto___34675)){
var error__12172__auto___34676 = temp__4126__auto___34675;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___34676], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___34676,cljs.core.constant$keyword$64,args__12171__auto___34674,cljs.core.constant$keyword$65,input_schema34646_34671,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__34662 = G__34649;
var map__34663 = G__34662;
var map__34663__$1 = ((cljs.core.seq_QMARK_(map__34663))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34663):map__34663);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34663__$1,cljs.core.constant$keyword$195);
var state_tree_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34663__$1,cljs.core.constant$keyword$196);
var owner = G__34650;
var G__34662__$1 = G__34662;
var owner__$1 = owner;
while(true){
var map__34664 = G__34662__$1;
var map__34664__$1 = ((cljs.core.seq_QMARK_(map__34664))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34664):map__34664);
var app_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664__$1,cljs.core.constant$keyword$195);
var state_tree_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664__$1,cljs.core.constant$keyword$196);
var owner__$2 = owner__$1;
if(typeof om_dev_tools.state_tree.t34665 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.state_tree.t34665 = (function (input_schema34646,output_schema34645,owner,state_view,map__34664,map__34663,G__34649,G__34662,validate__12170__auto__,output_checker34648,app_state,state_tree_state,G__34650,ufv__,input_checker34647,meta34666){
this.input_schema34646 = input_schema34646;
this.output_schema34645 = output_schema34645;
this.owner = owner;
this.state_view = state_view;
this.map__34664 = map__34664;
this.map__34663 = map__34663;
this.G__34649 = G__34649;
this.G__34662 = G__34662;
this.validate__12170__auto__ = validate__12170__auto__;
this.output_checker34648 = output_checker34648;
this.app_state = app_state;
this.state_tree_state = state_tree_state;
this.G__34650 = G__34650;
this.ufv__ = ufv__;
this.input_checker34647 = input_checker34647;
this.meta34666 = meta34666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.state_tree.t34665.prototype.om$core$IDisplayName$ = true;

om_dev_tools.state_tree.t34665.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__34664,map__34664__$1,app_state__$1,state_tree_state__$1,owner__$2,G__34662,map__34663,map__34663__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673){
return (function (_){
var self__ = this;
var ___$1 = this;
return "state-view";
});})(map__34664,map__34664__$1,app_state__$1,state_tree_state__$1,owner__$2,G__34662,map__34663,map__34663__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673))
;

om_dev_tools.state_tree.t34665.prototype.om$core$IRender$ = true;

om_dev_tools.state_tree.t34665.prototype.om$core$IRender$render$arity$1 = ((function (map__34664,map__34664__$1,app_state__$1,state_tree_state__$1,owner__$2,G__34662,map__34663,map__34663__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(om_dev_tools.state_tree.tree(self__.state_tree_state,self__.app_state,cljs.core.PersistentVector.EMPTY));
});})(map__34664,map__34664__$1,app_state__$1,state_tree_state__$1,owner__$2,G__34662,map__34663,map__34663__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673))
;

om_dev_tools.state_tree.t34665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__34664,map__34664__$1,app_state__$1,state_tree_state__$1,owner__$2,G__34662,map__34663,map__34663__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673){
return (function (_34667){
var self__ = this;
var _34667__$1 = this;
return self__.meta34666;
});})(map__34664,map__34664__$1,app_state__$1,state_tree_state__$1,owner__$2,G__34662,map__34663,map__34663__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673))
;

om_dev_tools.state_tree.t34665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__34664,map__34664__$1,app_state__$1,state_tree_state__$1,owner__$2,G__34662,map__34663,map__34663__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673){
return (function (_34667,meta34666__$1){
var self__ = this;
var _34667__$1 = this;
return (new om_dev_tools.state_tree.t34665(self__.input_schema34646,self__.output_schema34645,self__.owner,self__.state_view,self__.map__34664,self__.map__34663,self__.G__34649,self__.G__34662,self__.validate__12170__auto__,self__.output_checker34648,self__.app_state,self__.state_tree_state,self__.G__34650,self__.ufv__,self__.input_checker34647,meta34666__$1));
});})(map__34664,map__34664__$1,app_state__$1,state_tree_state__$1,owner__$2,G__34662,map__34663,map__34663__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673))
;

om_dev_tools.state_tree.t34665.cljs$lang$type = true;

om_dev_tools.state_tree.t34665.cljs$lang$ctorStr = "om-dev-tools.state-tree/t34665";

om_dev_tools.state_tree.t34665.cljs$lang$ctorPrWriter = ((function (map__34664,map__34664__$1,app_state__$1,state_tree_state__$1,owner__$2,G__34662,map__34663,map__34663__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.state-tree/t34665");
});})(map__34664,map__34664__$1,app_state__$1,state_tree_state__$1,owner__$2,G__34662,map__34663,map__34663__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673))
;

om_dev_tools.state_tree.__GT_t34665 = ((function (map__34664,map__34664__$1,app_state__$1,state_tree_state__$1,owner__$2,G__34662,map__34663,map__34663__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673){
return (function __GT_t34665(input_schema34646__$1,output_schema34645__$1,owner__$3,state_view__$1,map__34664__$2,map__34663__$2,G__34649__$1,G__34662__$2,validate__12170__auto____$1,output_checker34648__$1,app_state__$2,state_tree_state__$2,G__34650__$1,ufv____$1,input_checker34647__$1,meta34666){
return (new om_dev_tools.state_tree.t34665(input_schema34646__$1,output_schema34645__$1,owner__$3,state_view__$1,map__34664__$2,map__34663__$2,G__34649__$1,G__34662__$2,validate__12170__auto____$1,output_checker34648__$1,app_state__$2,state_tree_state__$2,G__34650__$1,ufv____$1,input_checker34647__$1,meta34666));
});})(map__34664,map__34664__$1,app_state__$1,state_tree_state__$1,owner__$2,G__34662,map__34663,map__34663__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673))
;

}

return (new om_dev_tools.state_tree.t34665(input_schema34646_34671,output_schema34645_34670,owner__$2,state_view,map__34664__$1,map__34663__$1,G__34649,G__34662__$1,validate__12170__auto__,output_checker34648_34673,app_state__$1,state_tree_state__$1,G__34650,ufv___34669,input_checker34647_34672,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___34677 = (function (){var G__34668 = o__12173__auto__;
return (output_checker34648_34673.cljs$core$IFn$_invoke$arity$1 ? output_checker34648_34673.cljs$core$IFn$_invoke$arity$1(G__34668) : output_checker34648_34673.call(null,G__34668));
})();
if(cljs.core.truth_(temp__4126__auto___34677)){
var error__12172__auto___34678 = temp__4126__auto___34677;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___34678], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___34678,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema34645_34670,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___34669,output_schema34645_34670,input_schema34646_34671,input_checker34647_34672,output_checker34648_34673))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.state_tree.state_view),schema.core.make_fn_schema(output_schema34645_34670,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34646_34671], null)));

om_dev_tools.state_tree.__GT_state_view = (function() {
var __GT_state_view = null;
var __GT_state_view__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.state_view,cursor__20405__auto__);
});
var __GT_state_view__2 = (function (cursor__20405__auto__,m34644){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.state_tree.state_view,cursor__20405__auto__,m34644);
});
__GT_state_view = function(cursor__20405__auto__,m34644){
switch(arguments.length){
case 1:
return __GT_state_view__1.call(this,cursor__20405__auto__);
case 2:
return __GT_state_view__2.call(this,cursor__20405__auto__,m34644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_state_view.cljs$core$IFn$_invoke$arity$1 = __GT_state_view__1;
__GT_state_view.cljs$core$IFn$_invoke$arity$2 = __GT_state_view__2;
return __GT_state_view;
})()
;
