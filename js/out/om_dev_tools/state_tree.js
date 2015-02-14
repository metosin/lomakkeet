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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4571__auto__ = (function iter__36785(s__36786){
return (new cljs.core.LazySeq(null,(function (){
var s__36786__$1 = s__36786;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36786__$1);
if(temp__4126__auto__){
var s__36786__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36786__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36786__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36788 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36787 = (0);
while(true){
if((i__36787 < size__4570__auto__)){
var vec__36793 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36787);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36793,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36793,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__36788,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,k,cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.coll_QMARK_(v__$1))?"coll":"single"),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1))?"open":"closed")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$176,((function (i__36787,ks__$1,vec__36793,k,v__$1,c__4569__auto__,size__4570__auto__,b__36788,s__36786__$2,temp__4126__auto__){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.toggle,ks__$1));
});})(i__36787,ks__$1,vec__36793,k,v__$1,c__4569__auto__,size__4570__auto__,b__36788,s__36786__$2,temp__4126__auto__))
], null),(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",(cljs.core.truth_((function (){var or__3815__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3815__auto__){
return or__3815__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1);
}
})())?tree(state,v__$1,ks__$1):null)], null));

var G__36795 = (i__36787 + (1));
i__36787 = G__36795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36788),iter__36785(cljs.core.chunk_rest(s__36786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36788),null);
}
} else {
var vec__36794 = cljs.core.first(s__36786__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36794,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36794,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,k,cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.coll_QMARK_(v__$1))?"coll":"single"),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1))?"open":"closed")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$176,((function (ks__$1,vec__36794,k,v__$1,s__36786__$2,temp__4126__auto__){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.toggle,ks__$1));
});})(ks__$1,vec__36794,k,v__$1,s__36786__$2,temp__4126__auto__))
], null),(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",(cljs.core.truth_((function (){var or__3815__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3815__auto__){
return or__3815__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1);
}
})())?tree(state,v__$1,ks__$1):null)], null),iter__36785(cljs.core.rest(s__36786__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,"\"",v,"\""], null);
} else {
if((v == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$307,"nil"], null);
} else {
if((v instanceof goog.date.UtcDateTime)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,[cljs.core.str(v)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,"datetime"], null)], null);
} else {
if((v instanceof goog.date.Date)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,[cljs.core.str(v)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,"localdate"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,[cljs.core.str(v)].join('')], null);

}
}
}
}
}
});

var ufv___36821 = schema.utils.use_fn_validation;
var output_schema36797_36822 = schema.core.Any;
var input_schema36798_36823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker36799_36824 = schema.core.checker(input_schema36798_36823);
var output_checker36800_36825 = schema.core.checker(output_schema36797_36822);
/**
* Inputs: [{:keys [state-tree-state app-state]} owner]
*/
om_dev_tools.state_tree.state_view = ((function (ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825){
return (function state_view(G__36801,G__36802){
var validate__12170__auto__ = ufv___36821.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___36826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36801,G__36802], null);
var temp__4126__auto___36827 = (function (){var G__36812 = args__12171__auto___36826;
return (input_checker36799_36824.cljs$core$IFn$_invoke$arity$1 ? input_checker36799_36824.cljs$core$IFn$_invoke$arity$1(G__36812) : input_checker36799_36824.call(null,G__36812));
})();
if(cljs.core.truth_(temp__4126__auto___36827)){
var error__12172__auto___36828 = temp__4126__auto___36827;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___36828], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___36828,cljs.core.constant$keyword$64,args__12171__auto___36826,cljs.core.constant$keyword$65,input_schema36798_36823,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__36814 = G__36801;
var map__36815 = G__36814;
var map__36815__$1 = ((cljs.core.seq_QMARK_(map__36815))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36815):map__36815);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36815__$1,cljs.core.constant$keyword$309);
var state_tree_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36815__$1,cljs.core.constant$keyword$310);
var owner = G__36802;
var G__36814__$1 = G__36814;
var owner__$1 = owner;
while(true){
var map__36816 = G__36814__$1;
var map__36816__$1 = ((cljs.core.seq_QMARK_(map__36816))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36816):map__36816);
var app_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36816__$1,cljs.core.constant$keyword$309);
var state_tree_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36816__$1,cljs.core.constant$keyword$310);
var owner__$2 = owner__$1;
if(typeof om_dev_tools.state_tree.t36817 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.state_tree.t36817 = (function (output_schema36797,owner,state_view,input_schema36798,G__36814,input_checker36799,G__36802,map__36816,validate__12170__auto__,G__36801,app_state,map__36815,state_tree_state,output_checker36800,ufv__,meta36818){
this.output_schema36797 = output_schema36797;
this.owner = owner;
this.state_view = state_view;
this.input_schema36798 = input_schema36798;
this.G__36814 = G__36814;
this.input_checker36799 = input_checker36799;
this.G__36802 = G__36802;
this.map__36816 = map__36816;
this.validate__12170__auto__ = validate__12170__auto__;
this.G__36801 = G__36801;
this.app_state = app_state;
this.map__36815 = map__36815;
this.state_tree_state = state_tree_state;
this.output_checker36800 = output_checker36800;
this.ufv__ = ufv__;
this.meta36818 = meta36818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.state_tree.t36817.prototype.om$core$IDisplayName$ = true;

om_dev_tools.state_tree.t36817.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__36816,map__36816__$1,app_state__$1,state_tree_state__$1,owner__$2,G__36814,map__36815,map__36815__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825){
return (function (_){
var self__ = this;
var ___$1 = this;
return "state-view";
});})(map__36816,map__36816__$1,app_state__$1,state_tree_state__$1,owner__$2,G__36814,map__36815,map__36815__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825))
;

om_dev_tools.state_tree.t36817.prototype.om$core$IRender$ = true;

om_dev_tools.state_tree.t36817.prototype.om$core$IRender$render$arity$1 = ((function (map__36816,map__36816__$1,app_state__$1,state_tree_state__$1,owner__$2,G__36814,map__36815,map__36815__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(om_dev_tools.state_tree.tree(self__.state_tree_state,self__.app_state,cljs.core.PersistentVector.EMPTY));
});})(map__36816,map__36816__$1,app_state__$1,state_tree_state__$1,owner__$2,G__36814,map__36815,map__36815__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825))
;

om_dev_tools.state_tree.t36817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__36816,map__36816__$1,app_state__$1,state_tree_state__$1,owner__$2,G__36814,map__36815,map__36815__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825){
return (function (_36819){
var self__ = this;
var _36819__$1 = this;
return self__.meta36818;
});})(map__36816,map__36816__$1,app_state__$1,state_tree_state__$1,owner__$2,G__36814,map__36815,map__36815__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825))
;

om_dev_tools.state_tree.t36817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__36816,map__36816__$1,app_state__$1,state_tree_state__$1,owner__$2,G__36814,map__36815,map__36815__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825){
return (function (_36819,meta36818__$1){
var self__ = this;
var _36819__$1 = this;
return (new om_dev_tools.state_tree.t36817(self__.output_schema36797,self__.owner,self__.state_view,self__.input_schema36798,self__.G__36814,self__.input_checker36799,self__.G__36802,self__.map__36816,self__.validate__12170__auto__,self__.G__36801,self__.app_state,self__.map__36815,self__.state_tree_state,self__.output_checker36800,self__.ufv__,meta36818__$1));
});})(map__36816,map__36816__$1,app_state__$1,state_tree_state__$1,owner__$2,G__36814,map__36815,map__36815__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825))
;

om_dev_tools.state_tree.t36817.cljs$lang$type = true;

om_dev_tools.state_tree.t36817.cljs$lang$ctorStr = "om-dev-tools.state-tree/t36817";

om_dev_tools.state_tree.t36817.cljs$lang$ctorPrWriter = ((function (map__36816,map__36816__$1,app_state__$1,state_tree_state__$1,owner__$2,G__36814,map__36815,map__36815__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.state-tree/t36817");
});})(map__36816,map__36816__$1,app_state__$1,state_tree_state__$1,owner__$2,G__36814,map__36815,map__36815__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825))
;

om_dev_tools.state_tree.__GT_t36817 = ((function (map__36816,map__36816__$1,app_state__$1,state_tree_state__$1,owner__$2,G__36814,map__36815,map__36815__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825){
return (function __GT_t36817(output_schema36797__$1,owner__$3,state_view__$1,input_schema36798__$1,G__36814__$2,input_checker36799__$1,G__36802__$1,map__36816__$2,validate__12170__auto____$1,G__36801__$1,app_state__$2,map__36815__$2,state_tree_state__$2,output_checker36800__$1,ufv____$1,meta36818){
return (new om_dev_tools.state_tree.t36817(output_schema36797__$1,owner__$3,state_view__$1,input_schema36798__$1,G__36814__$2,input_checker36799__$1,G__36802__$1,map__36816__$2,validate__12170__auto____$1,G__36801__$1,app_state__$2,map__36815__$2,state_tree_state__$2,output_checker36800__$1,ufv____$1,meta36818));
});})(map__36816,map__36816__$1,app_state__$1,state_tree_state__$1,owner__$2,G__36814,map__36815,map__36815__$1,app_state,state_tree_state,owner,validate__12170__auto__,ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825))
;

}

return (new om_dev_tools.state_tree.t36817(output_schema36797_36822,owner__$2,state_view,input_schema36798_36823,G__36814__$1,input_checker36799_36824,G__36802,map__36816__$1,validate__12170__auto__,G__36801,app_state__$1,map__36815__$1,state_tree_state__$1,output_checker36800_36825,ufv___36821,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___36829 = (function (){var G__36820 = o__12173__auto__;
return (output_checker36800_36825.cljs$core$IFn$_invoke$arity$1 ? output_checker36800_36825.cljs$core$IFn$_invoke$arity$1(G__36820) : output_checker36800_36825.call(null,G__36820));
})();
if(cljs.core.truth_(temp__4126__auto___36829)){
var error__12172__auto___36830 = temp__4126__auto___36829;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___36830], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___36830,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema36797_36822,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___36821,output_schema36797_36822,input_schema36798_36823,input_checker36799_36824,output_checker36800_36825))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.state_tree.state_view),schema.core.make_fn_schema(output_schema36797_36822,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36798_36823], null)));

om_dev_tools.state_tree.__GT_state_view = (function() {
var __GT_state_view = null;
var __GT_state_view__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.state_view,cursor__20405__auto__);
});
var __GT_state_view__2 = (function (cursor__20405__auto__,m36796){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.state_tree.state_view,cursor__20405__auto__,m36796);
});
__GT_state_view = function(cursor__20405__auto__,m36796){
switch(arguments.length){
case 1:
return __GT_state_view__1.call(this,cursor__20405__auto__);
case 2:
return __GT_state_view__2.call(this,cursor__20405__auto__,m36796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_state_view.cljs$core$IFn$_invoke$arity$1 = __GT_state_view__1;
__GT_state_view.cljs$core$IFn$_invoke$arity$2 = __GT_state_view__2;
return __GT_state_view;
})()
;
