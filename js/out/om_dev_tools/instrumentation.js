// Compiled by ClojureScript 0.0-2850 {}
goog.provide('om_dev_tools.instrumentation');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('cljs_time.format');
goog.require('cljs_time.core');
om_dev_tools.instrumentation.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"id","id",252129435,null)], 0)))].join('')));
}

return id;
});
/**
* Tracks last call time of componentWillUpdate for each component, then calls
* the original componentWillUpdate.
*/
om_dev_tools.instrumentation.wrap_will_update = (function wrap_will_update(state,f){
return (function (next_props,next_state){
var this$ = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,om_dev_tools.instrumentation.react_id(this$)], null),((function (this$){
return (function (p1__36833_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__36833_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$286,(this$["getDisplayName"]).call(null),cljs.core.constant$keyword$287,cljs_time.core.now()], null)], 0));
});})(this$))
);

return f.call(this$,next_props,next_state);
});
});
/**
* Tracks last call time of componentDidUpdate for each component and updates
* the render times (using start time provided by wrap-will-update), then
* calls the original componentDidUpdate.
*/
om_dev_tools.instrumentation.wrap_did_update = (function wrap_did_update(state,f){
return (function (prev_props,prev_state){
var this$ = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,om_dev_tools.instrumentation.react_id(this$)], null),((function (this$){
return (function (stats){
var now = cljs_time.core.now();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stats,cljs.core.constant$keyword$288,now),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs_time.core.after_QMARK_(now,cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(stats)))?cljs_time.core.in_millis(cljs_time.core.interval(cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(stats),now)):(0)));
});})(this$))
);

return f.call(this$,prev_props,prev_state);
});
});
om_dev_tools.instrumentation.instrumentation_methods = (function instrumentation_methods(state){
return om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(om.core.pure_methods,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.wrap_will_update,state)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$28], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.wrap_did_update,state))));
});
om_dev_tools.instrumentation.avg = (function avg(coll){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,coll) / cljs.core.count(coll));
});
om_dev_tools.instrumentation.std_dev = (function std_dev(coll){
var a = om_dev_tools.instrumentation.avg(coll);
var G__36838 = om_dev_tools.instrumentation.avg(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (a){
return (function (p1__36834_SHARP_){
var G__36839 = (p1__36834_SHARP_ - a);
var G__36840 = (2);
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__36839,G__36840) : Math.pow.call(null,G__36839,G__36840));
});})(a))
,coll));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__36838) : Math.sqrt.call(null,G__36838));
});

var ufv___36896 = schema.utils.use_fn_validation;
var output_schema36842_36897 = schema.core.Any;
var input_schema36843_36898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker36844_36899 = schema.core.checker(input_schema36843_36898);
var output_checker36845_36900 = schema.core.checker(output_schema36842_36897);
/**
* Inputs: [data owner]
*/
om_dev_tools.instrumentation.stats_view = ((function (ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900){
return (function stats_view(G__36846,G__36847){
var validate__12170__auto__ = ufv___36896.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___36901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36846,G__36847], null);
var temp__4126__auto___36902 = (function (){var G__36872 = args__12171__auto___36901;
return (input_checker36844_36899.cljs$core$IFn$_invoke$arity$1 ? input_checker36844_36899.cljs$core$IFn$_invoke$arity$1(G__36872) : input_checker36844_36899.call(null,G__36872));
})();
if(cljs.core.truth_(temp__4126__auto___36902)){
var error__12172__auto___36903 = temp__4126__auto___36902;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"stats-view","stats-view",-814342528,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___36903], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___36903,cljs.core.constant$keyword$64,args__12171__auto___36901,cljs.core.constant$keyword$65,input_schema36843_36898,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var data = G__36846;
var owner = G__36847;
while(true){
if(typeof om_dev_tools.instrumentation.t36873 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.instrumentation.t36873 = (function (stats_view,owner,data,input_checker36844,output_schema36842,input_schema36843,validate__12170__auto__,G__36846,output_checker36845,ufv__,G__36847,meta36874){
this.stats_view = stats_view;
this.owner = owner;
this.data = data;
this.input_checker36844 = input_checker36844;
this.output_schema36842 = output_schema36842;
this.input_schema36843 = input_schema36843;
this.validate__12170__auto__ = validate__12170__auto__;
this.G__36846 = G__36846;
this.output_checker36845 = output_checker36845;
this.ufv__ = ufv__;
this.G__36847 = G__36847;
this.meta36874 = meta36874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.instrumentation.t36873.prototype.om$core$IDisplayName$ = true;

om_dev_tools.instrumentation.t36873.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900){
return (function (_){
var self__ = this;
var ___$1 = this;
return "stats-view";
});})(validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900))
;

om_dev_tools.instrumentation.t36873.prototype.om$core$IRender$ = true;

om_dev_tools.instrumentation.t36873.prototype.om$core$IRender$render$arity$1 = ((function (validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs36876 = (cljs.core.truth_(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$290))?null:(function (){var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1,validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900){
return (function (p__36877){
var vec__36878 = p__36877;
var display_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36878,(0),null);
var renders = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36878,(1),null);
var times = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$289,cljs.core.array_seq([renders], 0));
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$286,(function (){var or__3815__auto__ = display_name;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return "Unknown";
}
})(),cljs.core.constant$keyword$291,cljs.core.count(times),cljs.core.constant$keyword$287,cljs.core.last(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$287,renders))),cljs.core.constant$keyword$292,cljs.core.last(cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$288,renders)))),cljs.core.constant$keyword$293,((cljs.core.seq(times))?(om_dev_tools.instrumentation.avg(times) | (0)):null),cljs.core.constant$keyword$294,((cljs.core.seq(times))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,times):null),cljs.core.constant$keyword$295,((cljs.core.seq(times))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,times):null),cljs.core.constant$keyword$296,((cljs.core.seq(times))?(om_dev_tools.instrumentation.std_dev(times) | (0)):null)], null);
});})(___$1,validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900){
return (function (acc,p__36879){
var vec__36880 = p__36879;
var react_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36880,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36880,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(data__$1)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),data__$1);
});})(___$1,validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900))
,cljs.core.PersistentArrayMap.EMPTY,self__.data));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"admin-stats"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$297,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$298,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$299,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"component",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$301,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$302,((function (stats,___$1,validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.data,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
});})(stats,___$1,validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900))
], null),"Clear"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"count"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"last-update"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"last-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"average-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"max-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"min-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"std-ms"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,(function (){var iter__4571__auto__ = ((function (stats,___$1,validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900){
return (function iter__36881(s__36882){
return (new cljs.core.LazySeq(null,((function (stats,___$1,validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900){
return (function (){
var s__36882__$1 = s__36882;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36882__$1);
if(temp__4126__auto__){
var s__36882__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36882__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36882__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36884 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36883 = (0);
while(true){
if((i__36883 < size__4570__auto__)){
var map__36891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36883);
var map__36891__$1 = ((cljs.core.seq_QMARK_(map__36891))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36891):map__36891);
var stat = map__36891__$1;
var last_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36891__$1,cljs.core.constant$keyword$292);
var render_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36891__$1,cljs.core.constant$keyword$291);
var std_dev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36891__$1,cljs.core.constant$keyword$296);
var min_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36891__$1,cljs.core.constant$keyword$295);
var max_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36891__$1,cljs.core.constant$keyword$294);
var average_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36891__$1,cljs.core.constant$keyword$293);
var last_will_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36891__$1,cljs.core.constant$keyword$287);
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36891__$1,cljs.core.constant$keyword$286);
cljs.core.chunk_append(b__36884,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$299,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,display_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),render_count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),(cljs.core.truth_(last_will_update)?cljs_time.format.unparse((function (){var G__36892 = cljs.core.constant$keyword$261;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__36892) : cljs_time.format.formatters.call(null,G__36892));
})(),last_will_update):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),last_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),average_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),max_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),min_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),std_dev], null)], null));

var G__36904 = (i__36883 + (1));
i__36883 = G__36904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36884),iter__36881(cljs.core.chunk_rest(s__36882__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36884),null);
}
} else {
var map__36893 = cljs.core.first(s__36882__$2);
var map__36893__$1 = ((cljs.core.seq_QMARK_(map__36893))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36893):map__36893);
var stat = map__36893__$1;
var last_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,cljs.core.constant$keyword$292);
var render_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,cljs.core.constant$keyword$291);
var std_dev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,cljs.core.constant$keyword$296);
var min_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,cljs.core.constant$keyword$295);
var max_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,cljs.core.constant$keyword$294);
var average_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,cljs.core.constant$keyword$293);
var last_will_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,cljs.core.constant$keyword$287);
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,cljs.core.constant$keyword$286);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$299,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,display_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),render_count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),(cljs.core.truth_(last_will_update)?cljs_time.format.unparse((function (){var G__36894 = cljs.core.constant$keyword$261;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__36894) : cljs_time.format.formatters.call(null,G__36894));
})(),last_will_update):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),last_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),average_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),max_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),min_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),std_dev], null)], null),iter__36881(cljs.core.rest(s__36882__$2)));
}
} else {
return null;
}
break;
}
});})(stats,___$1,validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900))
,null,null));
});})(stats,___$1,validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900))
;
return iter__4571__auto__(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$287,stats)));
})()], null)], null)], null);
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs36876))?sablono.interpreter.attributes(attrs36876):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36876))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36876)], null))));
});})(validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900))
;

om_dev_tools.instrumentation.t36873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900){
return (function (_36875){
var self__ = this;
var _36875__$1 = this;
return self__.meta36874;
});})(validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900))
;

om_dev_tools.instrumentation.t36873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900){
return (function (_36875,meta36874__$1){
var self__ = this;
var _36875__$1 = this;
return (new om_dev_tools.instrumentation.t36873(self__.stats_view,self__.owner,self__.data,self__.input_checker36844,self__.output_schema36842,self__.input_schema36843,self__.validate__12170__auto__,self__.G__36846,self__.output_checker36845,self__.ufv__,self__.G__36847,meta36874__$1));
});})(validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900))
;

om_dev_tools.instrumentation.t36873.cljs$lang$type = true;

om_dev_tools.instrumentation.t36873.cljs$lang$ctorStr = "om-dev-tools.instrumentation/t36873";

om_dev_tools.instrumentation.t36873.cljs$lang$ctorPrWriter = ((function (validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.instrumentation/t36873");
});})(validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900))
;

om_dev_tools.instrumentation.__GT_t36873 = ((function (validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900){
return (function __GT_t36873(stats_view__$1,owner__$1,data__$1,input_checker36844__$1,output_schema36842__$1,input_schema36843__$1,validate__12170__auto____$1,G__36846__$1,output_checker36845__$1,ufv____$1,G__36847__$1,meta36874){
return (new om_dev_tools.instrumentation.t36873(stats_view__$1,owner__$1,data__$1,input_checker36844__$1,output_schema36842__$1,input_schema36843__$1,validate__12170__auto____$1,G__36846__$1,output_checker36845__$1,ufv____$1,G__36847__$1,meta36874));
});})(validate__12170__auto__,ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900))
;

}

return (new om_dev_tools.instrumentation.t36873(stats_view,owner,data,input_checker36844_36899,output_schema36842_36897,input_schema36843_36898,validate__12170__auto__,G__36846,output_checker36845_36900,ufv___36896,G__36847,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___36905 = (function (){var G__36895 = o__12173__auto__;
return (output_checker36845_36900.cljs$core$IFn$_invoke$arity$1 ? output_checker36845_36900.cljs$core$IFn$_invoke$arity$1(G__36895) : output_checker36845_36900.call(null,G__36895));
})();
if(cljs.core.truth_(temp__4126__auto___36905)){
var error__12172__auto___36906 = temp__4126__auto___36905;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"stats-view","stats-view",-814342528,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___36906], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___36906,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema36842_36897,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___36896,output_schema36842_36897,input_schema36843_36898,input_checker36844_36899,output_checker36845_36900))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.instrumentation.stats_view),schema.core.make_fn_schema(output_schema36842_36897,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36843_36898], null)));

om_dev_tools.instrumentation.__GT_stats_view = (function() {
var __GT_stats_view = null;
var __GT_stats_view__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.stats_view,cursor__20405__auto__);
});
var __GT_stats_view__2 = (function (cursor__20405__auto__,m36841){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.instrumentation.stats_view,cursor__20405__auto__,m36841);
});
__GT_stats_view = function(cursor__20405__auto__,m36841){
switch(arguments.length){
case 1:
return __GT_stats_view__1.call(this,cursor__20405__auto__);
case 2:
return __GT_stats_view__2.call(this,cursor__20405__auto__,m36841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_stats_view.cljs$core$IFn$_invoke$arity$1 = __GT_stats_view__1;
__GT_stats_view.cljs$core$IFn$_invoke$arity$2 = __GT_stats_view__2;
return __GT_stats_view;
})()
;
