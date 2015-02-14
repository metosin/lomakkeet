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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$314,om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.state_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$196,cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(state),cljs.core.constant$keyword$195,om.core.root_cursor(cljs.core.constant$keyword$195.cljs$core$IFn$_invoke$arity$1(opts))], null))], null);
})], null),cljs.core.constant$keyword$312,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,"Om instrumentation",cljs.core.constant$keyword$313,(function (state,_){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.stats_view,cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(state));
})], null)], null);

var ufv___36836 = schema.utils.use_fn_validation;
var output_schema36769_36837 = schema.core.Any;
var input_schema36770_36838 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker36771_36839 = schema.core.checker(input_schema36770_36838);
var output_checker36772_36840 = schema.core.checker(output_schema36769_36837);
/**
* Inputs: [{:keys [open? current component-stats], :as state} owner {:keys [views app-state], :as opts}]
*/
om_dev_tools.ui.dev_tools = ((function (ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function dev_tools(G__36773,G__36774,G__36775){
var validate__12170__auto__ = ufv___36836.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___36841 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36773,G__36774,G__36775], null);
var temp__4126__auto___36842 = (function (){var G__36806 = args__12171__auto___36841;
return (input_checker36771_36839.cljs$core$IFn$_invoke$arity$1 ? input_checker36771_36839.cljs$core$IFn$_invoke$arity$1(G__36806) : input_checker36771_36839.call(null,G__36806));
})();
if(cljs.core.truth_(temp__4126__auto___36842)){
var error__12172__auto___36843 = temp__4126__auto___36842;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"dev-tools","dev-tools",1391381292,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___36843], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___36843,cljs.core.constant$keyword$64,args__12171__auto___36841,cljs.core.constant$keyword$65,input_schema36770_36838,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__36809 = G__36773;
var map__36811 = G__36809;
var map__36811__$1 = ((cljs.core.seq_QMARK_(map__36811))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36811):map__36811);
var state = map__36811__$1;
var component_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36811__$1,cljs.core.constant$keyword$291);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36811__$1,cljs.core.constant$keyword$315);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36811__$1,cljs.core.constant$keyword$168);
var owner = G__36774;
var G__36810 = G__36775;
var map__36812 = G__36810;
var map__36812__$1 = ((cljs.core.seq_QMARK_(map__36812))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36812):map__36812);
var opts = map__36812__$1;
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812__$1,cljs.core.constant$keyword$195);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812__$1,cljs.core.constant$keyword$316);
var G__36809__$1 = G__36809;
var owner__$1 = owner;
var G__36810__$1 = G__36810;
while(true){
var map__36813 = G__36809__$1;
var map__36813__$1 = ((cljs.core.seq_QMARK_(map__36813))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36813):map__36813);
var state__$1 = map__36813__$1;
var component_stats__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36813__$1,cljs.core.constant$keyword$291);
var current__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36813__$1,cljs.core.constant$keyword$315);
var open_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36813__$1,cljs.core.constant$keyword$168);
var owner__$2 = owner__$1;
var map__36814 = G__36810__$1;
var map__36814__$1 = ((cljs.core.seq_QMARK_(map__36814))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36814):map__36814);
var opts__$1 = map__36814__$1;
var app_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36814__$1,cljs.core.constant$keyword$195);
var views__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36814__$1,cljs.core.constant$keyword$316);
if(typeof om_dev_tools.ui.t36815 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.ui.t36815 = (function (component_stats,map__36812,G__36775,G__36774,owner,views,map__36814,dev_tools,G__36809,output_checker36772,G__36810,state,map__36813,validate__12170__auto__,output_schema36769,app_state,input_schema36770,map__36811,open_QMARK_,opts,current,ufv__,input_checker36771,G__36773,meta36816){
this.component_stats = component_stats;
this.map__36812 = map__36812;
this.G__36775 = G__36775;
this.G__36774 = G__36774;
this.owner = owner;
this.views = views;
this.map__36814 = map__36814;
this.dev_tools = dev_tools;
this.G__36809 = G__36809;
this.output_checker36772 = output_checker36772;
this.G__36810 = G__36810;
this.state = state;
this.map__36813 = map__36813;
this.validate__12170__auto__ = validate__12170__auto__;
this.output_schema36769 = output_schema36769;
this.app_state = app_state;
this.input_schema36770 = input_schema36770;
this.map__36811 = map__36811;
this.open_QMARK_ = open_QMARK_;
this.opts = opts;
this.current = current;
this.ufv__ = ufv__;
this.input_checker36771 = input_checker36771;
this.G__36773 = G__36773;
this.meta36816 = meta36816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.ui.t36815.prototype.om$core$IDisplayName$ = true;

om_dev_tools.ui.t36815.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dev-tools";
});})(map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
;

om_dev_tools.ui.t36815.prototype.om$core$IRender$ = true;

om_dev_tools.ui.t36815.prototype.om$core$IRender$render$arity$1 = ((function (map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function (_){
var self__ = this;
var ___$1 = this;
window.document.body.className = (cljs.core.truth_(self__.open_QMARK_)?"dev":"");

if(cljs.core.truth_(self__.open_QMARK_)){
return sablono.interpreter.interpret((function (){var all_views = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_dev_tools.ui.default_views], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$317,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$318,(function (){var iter__4571__auto__ = ((function (all_views,___$1,map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function iter__36818(s__36819){
return (new cljs.core.LazySeq(null,((function (all_views,___$1,map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function (){
var s__36819__$1 = s__36819;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36819__$1);
if(temp__4126__auto__){
var s__36819__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36819__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36819__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36821 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36820 = (0);
while(true){
if((i__36820 < size__4570__auto__)){
var vec__36828 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36820);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36828,(0),null);
var map__36829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36828,(1),null);
var map__36829__$1 = ((cljs.core.seq_QMARK_(map__36829))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36829):map__36829);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36829__$1,cljs.core.constant$keyword$135);
cljs.core.chunk_append(b__36821,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.state),k))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$176,((function (i__36820,vec__36828,k,map__36829,map__36829__$1,label,c__4569__auto__,size__4570__auto__,b__36821,s__36819__$2,temp__4126__auto__,all_views,___$1,map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$315,k);
});})(i__36820,vec__36828,k,map__36829,map__36829__$1,label,c__4569__auto__,size__4570__auto__,b__36821,s__36819__$2,temp__4126__auto__,all_views,___$1,map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
], null),label], null)], null));

var G__36844 = (i__36820 + (1));
i__36820 = G__36844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36821),iter__36818(cljs.core.chunk_rest(s__36819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36821),null);
}
} else {
var vec__36830 = cljs.core.first(s__36819__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36830,(0),null);
var map__36831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36830,(1),null);
var map__36831__$1 = ((cljs.core.seq_QMARK_(map__36831))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36831):map__36831);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36831__$1,cljs.core.constant$keyword$135);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.state),k))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$176,((function (vec__36830,k,map__36831,map__36831__$1,label,s__36819__$2,temp__4126__auto__,all_views,___$1,map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$315,k);
});})(vec__36830,k,map__36831,map__36831__$1,label,s__36819__$2,temp__4126__auto__,all_views,___$1,map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
], null),label], null)], null),iter__36818(cljs.core.rest(s__36819__$2)));
}
} else {
return null;
}
break;
}
});})(all_views,___$1,map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
,null,null));
});})(all_views,___$1,map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
;
return iter__4571__auto__(all_views);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$320,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$308,((function (all_views,___$1,map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$168,cljs.core.not);
});})(all_views,___$1,map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,"\u00D7"], null)], null)], null)], null),cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_views,self__.current)).call(null,self__.state,self__.opts)], null);
})());
} else {
var G__36832 = "button";
var G__36833 = {"className": "pull-right om-dev-tools-btn", "onClick": ((function (G__36832,___$1,map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$168,cljs.core.not);
});})(G__36832,___$1,map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
};
var G__36834 = "dev";
return React.createElement(G__36832,G__36833,G__36834);
}
});})(map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
;

om_dev_tools.ui.t36815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function (_36817){
var self__ = this;
var _36817__$1 = this;
return self__.meta36816;
});})(map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
;

om_dev_tools.ui.t36815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function (_36817,meta36816__$1){
var self__ = this;
var _36817__$1 = this;
return (new om_dev_tools.ui.t36815(self__.component_stats,self__.map__36812,self__.G__36775,self__.G__36774,self__.owner,self__.views,self__.map__36814,self__.dev_tools,self__.G__36809,self__.output_checker36772,self__.G__36810,self__.state,self__.map__36813,self__.validate__12170__auto__,self__.output_schema36769,self__.app_state,self__.input_schema36770,self__.map__36811,self__.open_QMARK_,self__.opts,self__.current,self__.ufv__,self__.input_checker36771,self__.G__36773,meta36816__$1));
});})(map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
;

om_dev_tools.ui.t36815.cljs$lang$type = true;

om_dev_tools.ui.t36815.cljs$lang$ctorStr = "om-dev-tools.ui/t36815";

om_dev_tools.ui.t36815.cljs$lang$ctorPrWriter = ((function (map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.ui/t36815");
});})(map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
;

om_dev_tools.ui.__GT_t36815 = ((function (map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840){
return (function __GT_t36815(component_stats__$2,map__36812__$2,G__36775__$1,G__36774__$1,owner__$3,views__$2,map__36814__$2,dev_tools__$1,G__36809__$2,output_checker36772__$1,G__36810__$2,state__$2,map__36813__$2,validate__12170__auto____$1,output_schema36769__$1,app_state__$2,input_schema36770__$1,map__36811__$2,open_QMARK___$2,opts__$2,current__$2,ufv____$1,input_checker36771__$1,G__36773__$1,meta36816){
return (new om_dev_tools.ui.t36815(component_stats__$2,map__36812__$2,G__36775__$1,G__36774__$1,owner__$3,views__$2,map__36814__$2,dev_tools__$1,G__36809__$2,output_checker36772__$1,G__36810__$2,state__$2,map__36813__$2,validate__12170__auto____$1,output_schema36769__$1,app_state__$2,input_schema36770__$1,map__36811__$2,open_QMARK___$2,opts__$2,current__$2,ufv____$1,input_checker36771__$1,G__36773__$1,meta36816));
});})(map__36813,map__36813__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__36814,map__36814__$1,opts__$1,app_state__$1,views__$1,G__36809,map__36811,map__36811__$1,state,component_stats,current,open_QMARK_,owner,G__36810,map__36812,map__36812__$1,opts,app_state,views,validate__12170__auto__,ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
;

}

return (new om_dev_tools.ui.t36815(component_stats__$1,map__36812__$1,G__36775,G__36774,owner__$2,views__$1,map__36814__$1,dev_tools,G__36809__$1,output_checker36772_36840,G__36810__$1,state__$1,map__36813__$1,validate__12170__auto__,output_schema36769_36837,app_state__$1,input_schema36770_36838,map__36811__$1,open_QMARK___$1,opts__$1,current__$1,ufv___36836,input_checker36771_36839,G__36773,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___36845 = (function (){var G__36835 = o__12173__auto__;
return (output_checker36772_36840.cljs$core$IFn$_invoke$arity$1 ? output_checker36772_36840.cljs$core$IFn$_invoke$arity$1(G__36835) : output_checker36772_36840.call(null,G__36835));
})();
if(cljs.core.truth_(temp__4126__auto___36845)){
var error__12172__auto___36846 = temp__4126__auto___36845;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"dev-tools","dev-tools",1391381292,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___36846], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___36846,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema36769_36837,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___36836,output_schema36769_36837,input_schema36770_36838,input_checker36771_36839,output_checker36772_36840))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.ui.dev_tools),schema.core.make_fn_schema(output_schema36769_36837,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36770_36838], null)));

om_dev_tools.ui.__GT_dev_tools = (function() {
var __GT_dev_tools = null;
var __GT_dev_tools__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.ui.dev_tools,cursor__20405__auto__);
});
var __GT_dev_tools__2 = (function (cursor__20405__auto__,m36768){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.ui.dev_tools,cursor__20405__auto__,m36768);
});
__GT_dev_tools = function(cursor__20405__auto__,m36768){
switch(arguments.length){
case 1:
return __GT_dev_tools__1.call(this,cursor__20405__auto__);
case 2:
return __GT_dev_tools__2.call(this,cursor__20405__auto__,m36768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dev_tools.cljs$core$IFn$_invoke$arity$1 = __GT_dev_tools__1;
__GT_dev_tools.cljs$core$IFn$_invoke$arity$2 = __GT_dev_tools__2;
return __GT_dev_tools;
})()
;
