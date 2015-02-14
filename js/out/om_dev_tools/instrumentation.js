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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,om_dev_tools.instrumentation.react_id(this$)], null),((function (this$){
return (function (p1__36849_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__36849_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$292,(this$["getDisplayName"]).call(null),cljs.core.constant$keyword$293,cljs_time.core.now()], null)], 0));
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,om_dev_tools.instrumentation.react_id(this$)], null),((function (this$){
return (function (stats){
var now = cljs_time.core.now();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stats,cljs.core.constant$keyword$294,now),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$295], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs_time.core.after_QMARK_(now,cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(stats)))?cljs_time.core.in_millis(cljs_time.core.interval(cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(stats),now)):(0)));
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
var G__36854 = om_dev_tools.instrumentation.avg(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (a){
return (function (p1__36850_SHARP_){
var G__36855 = (p1__36850_SHARP_ - a);
var G__36856 = (2);
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__36855,G__36856) : Math.pow.call(null,G__36855,G__36856));
});})(a))
,coll));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__36854) : Math.sqrt.call(null,G__36854));
});

var ufv___36912 = schema.utils.use_fn_validation;
var output_schema36858_36913 = schema.core.Any;
var input_schema36859_36914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker36860_36915 = schema.core.checker(input_schema36859_36914);
var output_checker36861_36916 = schema.core.checker(output_schema36858_36913);
/**
* Inputs: [data owner]
*/
om_dev_tools.instrumentation.stats_view = ((function (ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916){
return (function stats_view(G__36862,G__36863){
var validate__12170__auto__ = ufv___36912.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___36917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36862,G__36863], null);
var temp__4126__auto___36918 = (function (){var G__36888 = args__12171__auto___36917;
return (input_checker36860_36915.cljs$core$IFn$_invoke$arity$1 ? input_checker36860_36915.cljs$core$IFn$_invoke$arity$1(G__36888) : input_checker36860_36915.call(null,G__36888));
})();
if(cljs.core.truth_(temp__4126__auto___36918)){
var error__12172__auto___36919 = temp__4126__auto___36918;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"stats-view","stats-view",-814342528,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___36919], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___36919,cljs.core.constant$keyword$64,args__12171__auto___36917,cljs.core.constant$keyword$65,input_schema36859_36914,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var data = G__36862;
var owner = G__36863;
while(true){
if(typeof om_dev_tools.instrumentation.t36889 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.instrumentation.t36889 = (function (stats_view,input_schema36859,owner,data,G__36862,G__36863,validate__12170__auto__,output_checker36861,input_checker36860,ufv__,output_schema36858,meta36890){
this.stats_view = stats_view;
this.input_schema36859 = input_schema36859;
this.owner = owner;
this.data = data;
this.G__36862 = G__36862;
this.G__36863 = G__36863;
this.validate__12170__auto__ = validate__12170__auto__;
this.output_checker36861 = output_checker36861;
this.input_checker36860 = input_checker36860;
this.ufv__ = ufv__;
this.output_schema36858 = output_schema36858;
this.meta36890 = meta36890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.instrumentation.t36889.prototype.om$core$IDisplayName$ = true;

om_dev_tools.instrumentation.t36889.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916){
return (function (_){
var self__ = this;
var ___$1 = this;
return "stats-view";
});})(validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916))
;

om_dev_tools.instrumentation.t36889.prototype.om$core$IRender$ = true;

om_dev_tools.instrumentation.t36889.prototype.om$core$IRender$render$arity$1 = ((function (validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs36892 = (cljs.core.truth_(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$296))?null:(function (){var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1,validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916){
return (function (p__36893){
var vec__36894 = p__36893;
var display_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36894,(0),null);
var renders = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36894,(1),null);
var times = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$295,cljs.core.array_seq([renders], 0));
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$292,(function (){var or__3815__auto__ = display_name;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return "Unknown";
}
})(),cljs.core.constant$keyword$297,cljs.core.count(times),cljs.core.constant$keyword$293,cljs.core.last(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$293,renders))),cljs.core.constant$keyword$298,cljs.core.last(cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$294,renders)))),cljs.core.constant$keyword$299,((cljs.core.seq(times))?(om_dev_tools.instrumentation.avg(times) | (0)):null),cljs.core.constant$keyword$300,((cljs.core.seq(times))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,times):null),cljs.core.constant$keyword$301,((cljs.core.seq(times))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,times):null),cljs.core.constant$keyword$302,((cljs.core.seq(times))?(om_dev_tools.instrumentation.std_dev(times) | (0)):null)], null);
});})(___$1,validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916){
return (function (acc,p__36895){
var vec__36896 = p__36895;
var react_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36896,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36896,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(data__$1)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),data__$1);
});})(___$1,validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916))
,cljs.core.PersistentArrayMap.EMPTY,self__.data));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"admin-stats"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,"component",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$307,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$308,((function (stats,___$1,validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.data,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
});})(stats,___$1,validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916))
], null),"Clear"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"count"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"last-update"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"last-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"average-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"max-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"min-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"std-ms"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$309,(function (){var iter__4571__auto__ = ((function (stats,___$1,validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916){
return (function iter__36897(s__36898){
return (new cljs.core.LazySeq(null,((function (stats,___$1,validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916){
return (function (){
var s__36898__$1 = s__36898;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36898__$1);
if(temp__4126__auto__){
var s__36898__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36898__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36898__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36900 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36899 = (0);
while(true){
if((i__36899 < size__4570__auto__)){
var map__36907 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36899);
var map__36907__$1 = ((cljs.core.seq_QMARK_(map__36907))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36907):map__36907);
var stat = map__36907__$1;
var last_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36907__$1,cljs.core.constant$keyword$298);
var render_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36907__$1,cljs.core.constant$keyword$297);
var std_dev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36907__$1,cljs.core.constant$keyword$302);
var min_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36907__$1,cljs.core.constant$keyword$301);
var max_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36907__$1,cljs.core.constant$keyword$300);
var average_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36907__$1,cljs.core.constant$keyword$299);
var last_will_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36907__$1,cljs.core.constant$keyword$293);
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36907__$1,cljs.core.constant$keyword$292);
cljs.core.chunk_append(b__36900,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,display_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),render_count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),(cljs.core.truth_(last_will_update)?cljs_time.format.unparse((function (){var G__36908 = cljs.core.constant$keyword$267;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__36908) : cljs_time.format.formatters.call(null,G__36908));
})(),last_will_update):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),last_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),average_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),max_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),min_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),std_dev], null)], null));

var G__36920 = (i__36899 + (1));
i__36899 = G__36920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36900),iter__36897(cljs.core.chunk_rest(s__36898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36900),null);
}
} else {
var map__36909 = cljs.core.first(s__36898__$2);
var map__36909__$1 = ((cljs.core.seq_QMARK_(map__36909))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36909):map__36909);
var stat = map__36909__$1;
var last_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36909__$1,cljs.core.constant$keyword$298);
var render_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36909__$1,cljs.core.constant$keyword$297);
var std_dev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36909__$1,cljs.core.constant$keyword$302);
var min_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36909__$1,cljs.core.constant$keyword$301);
var max_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36909__$1,cljs.core.constant$keyword$300);
var average_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36909__$1,cljs.core.constant$keyword$299);
var last_will_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36909__$1,cljs.core.constant$keyword$293);
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36909__$1,cljs.core.constant$keyword$292);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,display_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),render_count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),(cljs.core.truth_(last_will_update)?cljs_time.format.unparse((function (){var G__36910 = cljs.core.constant$keyword$267;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__36910) : cljs_time.format.formatters.call(null,G__36910));
})(),last_will_update):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),last_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),average_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),max_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),min_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),std_dev], null)], null),iter__36897(cljs.core.rest(s__36898__$2)));
}
} else {
return null;
}
break;
}
});})(stats,___$1,validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916))
,null,null));
});})(stats,___$1,validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916))
;
return iter__4571__auto__(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$293,stats)));
})()], null)], null)], null);
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs36892))?sablono.interpreter.attributes(attrs36892):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36892))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36892)], null))));
});})(validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916))
;

om_dev_tools.instrumentation.t36889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916){
return (function (_36891){
var self__ = this;
var _36891__$1 = this;
return self__.meta36890;
});})(validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916))
;

om_dev_tools.instrumentation.t36889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916){
return (function (_36891,meta36890__$1){
var self__ = this;
var _36891__$1 = this;
return (new om_dev_tools.instrumentation.t36889(self__.stats_view,self__.input_schema36859,self__.owner,self__.data,self__.G__36862,self__.G__36863,self__.validate__12170__auto__,self__.output_checker36861,self__.input_checker36860,self__.ufv__,self__.output_schema36858,meta36890__$1));
});})(validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916))
;

om_dev_tools.instrumentation.t36889.cljs$lang$type = true;

om_dev_tools.instrumentation.t36889.cljs$lang$ctorStr = "om-dev-tools.instrumentation/t36889";

om_dev_tools.instrumentation.t36889.cljs$lang$ctorPrWriter = ((function (validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.instrumentation/t36889");
});})(validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916))
;

om_dev_tools.instrumentation.__GT_t36889 = ((function (validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916){
return (function __GT_t36889(stats_view__$1,input_schema36859__$1,owner__$1,data__$1,G__36862__$1,G__36863__$1,validate__12170__auto____$1,output_checker36861__$1,input_checker36860__$1,ufv____$1,output_schema36858__$1,meta36890){
return (new om_dev_tools.instrumentation.t36889(stats_view__$1,input_schema36859__$1,owner__$1,data__$1,G__36862__$1,G__36863__$1,validate__12170__auto____$1,output_checker36861__$1,input_checker36860__$1,ufv____$1,output_schema36858__$1,meta36890));
});})(validate__12170__auto__,ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916))
;

}

return (new om_dev_tools.instrumentation.t36889(stats_view,input_schema36859_36914,owner,data,G__36862,G__36863,validate__12170__auto__,output_checker36861_36916,input_checker36860_36915,ufv___36912,output_schema36858_36913,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___36921 = (function (){var G__36911 = o__12173__auto__;
return (output_checker36861_36916.cljs$core$IFn$_invoke$arity$1 ? output_checker36861_36916.cljs$core$IFn$_invoke$arity$1(G__36911) : output_checker36861_36916.call(null,G__36911));
})();
if(cljs.core.truth_(temp__4126__auto___36921)){
var error__12172__auto___36922 = temp__4126__auto___36921;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"stats-view","stats-view",-814342528,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___36922], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___36922,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema36858_36913,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___36912,output_schema36858_36913,input_schema36859_36914,input_checker36860_36915,output_checker36861_36916))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.instrumentation.stats_view),schema.core.make_fn_schema(output_schema36858_36913,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36859_36914], null)));

om_dev_tools.instrumentation.__GT_stats_view = (function() {
var __GT_stats_view = null;
var __GT_stats_view__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.stats_view,cursor__20405__auto__);
});
var __GT_stats_view__2 = (function (cursor__20405__auto__,m36857){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.instrumentation.stats_view,cursor__20405__auto__,m36857);
});
__GT_stats_view = function(cursor__20405__auto__,m36857){
switch(arguments.length){
case 1:
return __GT_stats_view__1.call(this,cursor__20405__auto__);
case 2:
return __GT_stats_view__2.call(this,cursor__20405__auto__,m36857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_stats_view.cljs$core$IFn$_invoke$arity$1 = __GT_stats_view__1;
__GT_stats_view.cljs$core$IFn$_invoke$arity$2 = __GT_stats_view__2;
return __GT_stats_view;
})()
;
