// Compiled by ClojureScript 0.0-2850 {}
goog.provide('om_dev_tools.ui');
goog.require('cljs.core');
goog.require('om_dev_tools.instrumentation');
goog.require('om_dev_tools.state_tree');
goog.require('goog.string');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
om_dev_tools.ui.default_views = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$311,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,"State",cljs.core.constant$keyword$313,(function (state,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$314,om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.state_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$310,cljs.core.constant$keyword$310.cljs$core$IFn$_invoke$arity$1(state),cljs.core.constant$keyword$309,om.core.root_cursor(cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(opts))], null))], null);
})], null),cljs.core.constant$keyword$312,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,"Om instrumentation",cljs.core.constant$keyword$313,(function (state,_){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.stats_view,cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(state));
})], null)], null);

var ufv___36750 = schema.utils.use_fn_validation;
var output_schema36683_36751 = schema.core.Any;
var input_schema36684_36752 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker36685_36753 = schema.core.checker(input_schema36684_36752);
var output_checker36686_36754 = schema.core.checker(output_schema36683_36751);
/**
* Inputs: [{:keys [open? current component-stats], :as state} owner {:keys [views app-state], :as opts}]
*/
om_dev_tools.ui.dev_tools = ((function (ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function dev_tools(G__36687,G__36688,G__36689){
var validate__12170__auto__ = ufv___36750.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___36755 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36687,G__36688,G__36689], null);
var temp__4126__auto___36756 = (function (){var G__36720 = args__12171__auto___36755;
return (input_checker36685_36753.cljs$core$IFn$_invoke$arity$1 ? input_checker36685_36753.cljs$core$IFn$_invoke$arity$1(G__36720) : input_checker36685_36753.call(null,G__36720));
})();
if(cljs.core.truth_(temp__4126__auto___36756)){
var error__12172__auto___36757 = temp__4126__auto___36756;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"dev-tools","dev-tools",1391381292,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___36757], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___36757,cljs.core.constant$keyword$64,args__12171__auto___36755,cljs.core.constant$keyword$65,input_schema36684_36752,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__36723 = G__36687;
var map__36725 = G__36723;
var map__36725__$1 = ((cljs.core.seq_QMARK_(map__36725))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36725):map__36725);
var state = map__36725__$1;
var component_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36725__$1,cljs.core.constant$keyword$285);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36725__$1,cljs.core.constant$keyword$315);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36725__$1,cljs.core.constant$keyword$168);
var owner = G__36688;
var G__36724 = G__36689;
var map__36726 = G__36724;
var map__36726__$1 = ((cljs.core.seq_QMARK_(map__36726))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36726):map__36726);
var opts = map__36726__$1;
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36726__$1,cljs.core.constant$keyword$309);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36726__$1,cljs.core.constant$keyword$316);
var G__36723__$1 = G__36723;
var owner__$1 = owner;
var G__36724__$1 = G__36724;
while(true){
var map__36727 = G__36723__$1;
var map__36727__$1 = ((cljs.core.seq_QMARK_(map__36727))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36727):map__36727);
var state__$1 = map__36727__$1;
var component_stats__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36727__$1,cljs.core.constant$keyword$285);
var current__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36727__$1,cljs.core.constant$keyword$315);
var open_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36727__$1,cljs.core.constant$keyword$168);
var owner__$2 = owner__$1;
var map__36728 = G__36724__$1;
var map__36728__$1 = ((cljs.core.seq_QMARK_(map__36728))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36728):map__36728);
var opts__$1 = map__36728__$1;
var app_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36728__$1,cljs.core.constant$keyword$309);
var views__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36728__$1,cljs.core.constant$keyword$316);
if(typeof om_dev_tools.ui.t36729 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.ui.t36729 = (function (component_stats,owner,views,map__36727,output_schema36683,G__36724,map__36725,output_checker36686,map__36726,dev_tools,input_checker36685,G__36687,state,G__36689,G__36723,validate__12170__auto__,G__36688,input_schema36684,app_state,open_QMARK_,opts,map__36728,current,ufv__,meta36730){
this.component_stats = component_stats;
this.owner = owner;
this.views = views;
this.map__36727 = map__36727;
this.output_schema36683 = output_schema36683;
this.G__36724 = G__36724;
this.map__36725 = map__36725;
this.output_checker36686 = output_checker36686;
this.map__36726 = map__36726;
this.dev_tools = dev_tools;
this.input_checker36685 = input_checker36685;
this.G__36687 = G__36687;
this.state = state;
this.G__36689 = G__36689;
this.G__36723 = G__36723;
this.validate__12170__auto__ = validate__12170__auto__;
this.G__36688 = G__36688;
this.input_schema36684 = input_schema36684;
this.app_state = app_state;
this.open_QMARK_ = open_QMARK_;
this.opts = opts;
this.map__36728 = map__36728;
this.current = current;
this.ufv__ = ufv__;
this.meta36730 = meta36730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.ui.t36729.prototype.om$core$IDisplayName$ = true;

om_dev_tools.ui.t36729.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dev-tools";
});})(map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
;

om_dev_tools.ui.t36729.prototype.om$core$IRender$ = true;

om_dev_tools.ui.t36729.prototype.om$core$IRender$render$arity$1 = ((function (map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function (_){
var self__ = this;
var ___$1 = this;
window.document.body.className = (cljs.core.truth_(self__.open_QMARK_)?"dev":"");

if(cljs.core.truth_(self__.open_QMARK_)){
return sablono.interpreter.interpret((function (){var all_views = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_dev_tools.ui.default_views], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$317,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$318,(function (){var iter__4571__auto__ = ((function (all_views,___$1,map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function iter__36732(s__36733){
return (new cljs.core.LazySeq(null,((function (all_views,___$1,map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function (){
var s__36733__$1 = s__36733;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36733__$1);
if(temp__4126__auto__){
var s__36733__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36733__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36733__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36735 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36734 = (0);
while(true){
if((i__36734 < size__4570__auto__)){
var vec__36742 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36734);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36742,(0),null);
var map__36743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36742,(1),null);
var map__36743__$1 = ((cljs.core.seq_QMARK_(map__36743))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36743):map__36743);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36743__$1,cljs.core.constant$keyword$135);
cljs.core.chunk_append(b__36735,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.state),k))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$176,((function (i__36734,vec__36742,k,map__36743,map__36743__$1,label,c__4569__auto__,size__4570__auto__,b__36735,s__36733__$2,temp__4126__auto__,all_views,___$1,map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$315,k);
});})(i__36734,vec__36742,k,map__36743,map__36743__$1,label,c__4569__auto__,size__4570__auto__,b__36735,s__36733__$2,temp__4126__auto__,all_views,___$1,map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
], null),label], null)], null));

var G__36758 = (i__36734 + (1));
i__36734 = G__36758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36735),iter__36732(cljs.core.chunk_rest(s__36733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36735),null);
}
} else {
var vec__36744 = cljs.core.first(s__36733__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36744,(0),null);
var map__36745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36744,(1),null);
var map__36745__$1 = ((cljs.core.seq_QMARK_(map__36745))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36745):map__36745);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36745__$1,cljs.core.constant$keyword$135);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.state),k))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$176,((function (vec__36744,k,map__36745,map__36745__$1,label,s__36733__$2,temp__4126__auto__,all_views,___$1,map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$315,k);
});})(vec__36744,k,map__36745,map__36745__$1,label,s__36733__$2,temp__4126__auto__,all_views,___$1,map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
], null),label], null)], null),iter__36732(cljs.core.rest(s__36733__$2)));
}
} else {
return null;
}
break;
}
});})(all_views,___$1,map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
,null,null));
});})(all_views,___$1,map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
;
return iter__4571__auto__(all_views);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$320,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$302,((function (all_views,___$1,map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$168,cljs.core.not);
});})(all_views,___$1,map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,"\u00D7"], null)], null)], null)], null),cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_views,self__.current)).call(null,self__.state,self__.opts)], null);
})());
} else {
var G__36746 = "button";
var G__36747 = {"className": "pull-right om-dev-tools-btn", "onClick": ((function (G__36746,___$1,map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$168,cljs.core.not);
});})(G__36746,___$1,map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
};
var G__36748 = "dev";
return React.createElement(G__36746,G__36747,G__36748);
}
});})(map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
;

om_dev_tools.ui.t36729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function (_36731){
var self__ = this;
var _36731__$1 = this;
return self__.meta36730;
});})(map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
;

om_dev_tools.ui.t36729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function (_36731,meta36730__$1){
var self__ = this;
var _36731__$1 = this;
return (new om_dev_tools.ui.t36729(self__.component_stats,self__.owner,self__.views,self__.map__36727,self__.output_schema36683,self__.G__36724,self__.map__36725,self__.output_checker36686,self__.map__36726,self__.dev_tools,self__.input_checker36685,self__.G__36687,self__.state,self__.G__36689,self__.G__36723,self__.validate__12170__auto__,self__.G__36688,self__.input_schema36684,self__.app_state,self__.open_QMARK_,self__.opts,self__.map__36728,self__.current,self__.ufv__,meta36730__$1));
});})(map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
;

om_dev_tools.ui.t36729.cljs$lang$type = true;

om_dev_tools.ui.t36729.cljs$lang$ctorStr = "om-dev-tools.ui/t36729";

om_dev_tools.ui.t36729.cljs$lang$ctorPrWriter = ((function (map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.ui/t36729");
});})(map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
;

om_dev_tools.ui.__GT_t36729 = ((function (map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754){
return (function __GT_t36729(component_stats__$2,owner__$3,views__$2,map__36727__$2,output_schema36683__$1,G__36724__$2,map__36725__$2,output_checker36686__$1,map__36726__$2,dev_tools__$1,input_checker36685__$1,G__36687__$1,state__$2,G__36689__$1,G__36723__$2,validate__12170__auto____$1,G__36688__$1,input_schema36684__$1,app_state__$2,open_QMARK___$2,opts__$2,map__36728__$2,current__$2,ufv____$1,meta36730){
return (new om_dev_tools.ui.t36729(component_stats__$2,owner__$3,views__$2,map__36727__$2,output_schema36683__$1,G__36724__$2,map__36725__$2,output_checker36686__$1,map__36726__$2,dev_tools__$1,input_checker36685__$1,G__36687__$1,state__$2,G__36689__$1,G__36723__$2,validate__12170__auto____$1,G__36688__$1,input_schema36684__$1,app_state__$2,open_QMARK___$2,opts__$2,map__36728__$2,current__$2,ufv____$1,meta36730));
});})(map__36727,map__36727__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36728,map__36728__$1,opts__$1,app_state__$1,views__$1,G__36723,map__36725,map__36725__$1,state,component_stats,current,open_QMARK_,owner,G__36724,map__36726,map__36726__$1,opts,app_state,views,validate__12170__auto__,ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
;

}

return (new om_dev_tools.ui.t36729(component_stats__$1,owner__$2,views__$1,map__36727__$1,output_schema36683_36751,G__36724__$1,map__36725__$1,output_checker36686_36754,map__36726__$1,dev_tools,input_checker36685_36753,G__36687,state__$1,G__36689,G__36723__$1,validate__12170__auto__,G__36688,input_schema36684_36752,app_state__$1,open_QMARK___$1,opts__$1,map__36728__$1,current__$1,ufv___36750,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___36759 = (function (){var G__36749 = o__12173__auto__;
return (output_checker36686_36754.cljs$core$IFn$_invoke$arity$1 ? output_checker36686_36754.cljs$core$IFn$_invoke$arity$1(G__36749) : output_checker36686_36754.call(null,G__36749));
})();
if(cljs.core.truth_(temp__4126__auto___36759)){
var error__12172__auto___36760 = temp__4126__auto___36759;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"dev-tools","dev-tools",1391381292,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___36760], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___36760,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema36683_36751,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___36750,output_schema36683_36751,input_schema36684_36752,input_checker36685_36753,output_checker36686_36754))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.ui.dev_tools),schema.core.make_fn_schema(output_schema36683_36751,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36684_36752], null)));

om_dev_tools.ui.__GT_dev_tools = (function() {
var __GT_dev_tools = null;
var __GT_dev_tools__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.ui.dev_tools,cursor__20405__auto__);
});
var __GT_dev_tools__2 = (function (cursor__20405__auto__,m36682){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.ui.dev_tools,cursor__20405__auto__,m36682);
});
__GT_dev_tools = function(cursor__20405__auto__,m36682){
switch(arguments.length){
case 1:
return __GT_dev_tools__1.call(this,cursor__20405__auto__);
case 2:
return __GT_dev_tools__2.call(this,cursor__20405__auto__,m36682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dev_tools.cljs$core$IFn$_invoke$arity$1 = __GT_dev_tools__1;
__GT_dev_tools.cljs$core$IFn$_invoke$arity$2 = __GT_dev_tools__2;
return __GT_dev_tools;
})()
;
