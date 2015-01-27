// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lomakkeet.fields');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('schema.core');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('schema.coerce');
goog.require('sablono.core');
goog.require('om.core');
goog.require('schema.utils');
/**
* @param {...*} var_args
*/
lomakkeet.fields.get_in_schema = (function() { 
var get_in_schema__delegate = function (schema__$1,ks,p__22692){
var vec__22694 = p__22692;
var not_found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22694,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22694,not_found){
return (function (acc,k){
var or__4251__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,schema.core.optional_key(k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,schema.core.required_key(k)));
if(cljs.core.truth_(or__4251__auto____$1)){
return or__4251__auto____$1;
} else {
return not_found;
}
}
});})(vec__22694,not_found))
,schema__$1,ks);
};
var get_in_schema = function (schema__$1,ks,var_args){
var p__22692 = null;
if (arguments.length > 2) {
var G__22695__i = 0, G__22695__a = new Array(arguments.length -  2);
while (G__22695__i < G__22695__a.length) {G__22695__a[G__22695__i] = arguments[G__22695__i + 2]; ++G__22695__i;}
  p__22692 = new cljs.core.IndexedSeq(G__22695__a,0);
} 
return get_in_schema__delegate.call(this,schema__$1,ks,p__22692);};
get_in_schema.cljs$lang$maxFixedArity = 2;
get_in_schema.cljs$lang$applyTo = (function (arglist__22696){
var schema__$1 = cljs.core.first(arglist__22696);
arglist__22696 = cljs.core.next(arglist__22696);
var ks = cljs.core.first(arglist__22696);
var p__22692 = cljs.core.rest(arglist__22696);
return get_in_schema__delegate(schema__$1,ks,p__22692);
});
get_in_schema.cljs$core$IFn$_invoke$arity$variadic = get_in_schema__delegate;
return get_in_schema;
})()
;
lomakkeet.fields.chan_QMARK_ = (function chan_QMARK_(v){
return (v instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
/**
* Dissociates an entry from a nested associative structure returning a new
* nested structure. keys is a sequence of keys. Any empty maps that result
* will not be present in the new structure.
*/
lomakkeet.fields.dissoc_in = (function dissoc_in(m,p__22697){
var vec__22701 = p__22697;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22701,(0),null);
var ks = cljs.core.nthnext(vec__22701,(1));
var keys = vec__22701;
if(ks){
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var nextmap = temp__4124__auto__;
var newmap = dissoc_in(nextmap,ks);
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
lomakkeet.fields.empty_cb = (function empty_cb(p__22702){
var map__22704 = p__22702;
var map__22704__$1 = ((cljs.core.seq_QMARK_(map__22704))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22704):map__22704);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22704__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22704__$1,cljs.core.constant$keyword$147);
return ((function (map__22704,map__22704__$1,ks,ch){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$66,null,cljs.core.constant$keyword$146,ks], null));
});
;})(map__22704,map__22704__$1,ks,ch))
});

var ufv___22749 = schema.utils.use_fn_validation;
var output_schema22706_22750 = schema.core.Any;
var input_schema22707_22751 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22708_22752 = schema.core.checker(input_schema22707_22751);
var output_checker22709_22753 = schema.core.checker(output_schema22706_22750);
/**
* Inputs: [state owner {:keys [real-input], :as opts}]
*/
lomakkeet.fields.emptyable_input = ((function (ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753){
return (function emptyable_input(G__22710,G__22711,G__22712){
var validate__12581__auto__ = ufv___22749.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22754 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22710,G__22711,G__22712], null);
var temp__4126__auto___22755 = (function (){var G__22731 = args__12582__auto___22754;
return (input_checker22708_22752.cljs$core$IFn$_invoke$arity$1 ? input_checker22708_22752.cljs$core$IFn$_invoke$arity$1(G__22731) : input_checker22708_22752.call(null,G__22731));
})();
if(cljs.core.truth_(temp__4126__auto___22755)){
var error__12583__auto___22756 = temp__4126__auto___22755;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22756], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22756,cljs.core.constant$keyword$66,args__12582__auto___22754,cljs.core.constant$keyword$67,input_schema22707_22751,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var state = G__22710;
var owner = G__22711;
var G__22733 = G__22712;
var map__22734 = G__22733;
var map__22734__$1 = ((cljs.core.seq_QMARK_(map__22734))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22734):map__22734);
var opts = map__22734__$1;
var real_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22734__$1,cljs.core.constant$keyword$149);
var state__$1 = state;
var owner__$1 = owner;
var G__22733__$1 = G__22733;
while(true){
var state__$2 = state__$1;
var owner__$2 = owner__$1;
var map__22735 = G__22733__$1;
var map__22735__$1 = ((cljs.core.seq_QMARK_(map__22735))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22735):map__22735);
var opts__$1 = map__22735__$1;
var real_input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,cljs.core.constant$keyword$149);
if(typeof lomakkeet.fields.t22736 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22736 = (function (owner,validate__12581__auto__,emptyable_input,output_checker22709,G__22711,G__22733,map__22735,output_schema22706,input_schema22707,input_checker22708,real_input,state,G__22710,map__22734,opts,G__22712,ufv__,meta22737){
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.emptyable_input = emptyable_input;
this.output_checker22709 = output_checker22709;
this.G__22711 = G__22711;
this.G__22733 = G__22733;
this.map__22735 = map__22735;
this.output_schema22706 = output_schema22706;
this.input_schema22707 = input_schema22707;
this.input_checker22708 = input_checker22708;
this.real_input = real_input;
this.state = state;
this.G__22710 = G__22710;
this.map__22734 = map__22734;
this.opts = opts;
this.G__22712 = G__22712;
this.ufv__ = ufv__;
this.meta22737 = meta22737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22736.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22736.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state__$2,owner__$2,map__22735,map__22735__$1,opts__$1,real_input__$1,state,owner,G__22733,map__22734,map__22734__$1,opts,real_input,validate__12581__auto__,ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753){
return (function (_){
var self__ = this;
var ___$1 = this;
return "emptyable-input";
});})(state__$2,owner__$2,map__22735,map__22735__$1,opts__$1,real_input__$1,state,owner,G__22733,map__22734,map__22734__$1,opts,real_input,validate__12581__auto__,ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753))
;

lomakkeet.fields.t22736.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22736.prototype.om$core$IRenderState$render_state$arity$2 = ((function (state__$2,owner__$2,map__22735,map__22735__$1,opts__$1,real_input__$1,state,owner,G__22733,map__22734,map__22734__$1,opts,real_input,validate__12581__auto__,ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var attrs22739 = om.core.build.cljs$core$IFn$_invoke$arity$3(self__.real_input,self__.state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,self__.opts,cljs.core.constant$keyword$53,s], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22739))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-group"], null)], null),attrs22739], 0))):{"className": "input-group"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22739))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22740 = {"className": "input-group-btn"};
var G__22741 = (function (){var G__22742 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22743 = "\u00D7";
return React.DOM.button(G__22742,G__22743);
})();
return React.DOM.span(G__22740,G__22741);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22739),(function (){var G__22744 = {"className": "input-group-btn"};
var G__22745 = (function (){var G__22746 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22747 = "\u00D7";
return React.DOM.button(G__22746,G__22747);
})();
return React.DOM.span(G__22744,G__22745);
})()], null))));
});})(state__$2,owner__$2,map__22735,map__22735__$1,opts__$1,real_input__$1,state,owner,G__22733,map__22734,map__22734__$1,opts,real_input,validate__12581__auto__,ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753))
;

lomakkeet.fields.t22736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state__$2,owner__$2,map__22735,map__22735__$1,opts__$1,real_input__$1,state,owner,G__22733,map__22734,map__22734__$1,opts,real_input,validate__12581__auto__,ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753){
return (function (_22738){
var self__ = this;
var _22738__$1 = this;
return self__.meta22737;
});})(state__$2,owner__$2,map__22735,map__22735__$1,opts__$1,real_input__$1,state,owner,G__22733,map__22734,map__22734__$1,opts,real_input,validate__12581__auto__,ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753))
;

lomakkeet.fields.t22736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state__$2,owner__$2,map__22735,map__22735__$1,opts__$1,real_input__$1,state,owner,G__22733,map__22734,map__22734__$1,opts,real_input,validate__12581__auto__,ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753){
return (function (_22738,meta22737__$1){
var self__ = this;
var _22738__$1 = this;
return (new lomakkeet.fields.t22736(self__.owner,self__.validate__12581__auto__,self__.emptyable_input,self__.output_checker22709,self__.G__22711,self__.G__22733,self__.map__22735,self__.output_schema22706,self__.input_schema22707,self__.input_checker22708,self__.real_input,self__.state,self__.G__22710,self__.map__22734,self__.opts,self__.G__22712,self__.ufv__,meta22737__$1));
});})(state__$2,owner__$2,map__22735,map__22735__$1,opts__$1,real_input__$1,state,owner,G__22733,map__22734,map__22734__$1,opts,real_input,validate__12581__auto__,ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753))
;

lomakkeet.fields.t22736.cljs$lang$type = true;

lomakkeet.fields.t22736.cljs$lang$ctorStr = "lomakkeet.fields/t22736";

lomakkeet.fields.t22736.cljs$lang$ctorPrWriter = ((function (state__$2,owner__$2,map__22735,map__22735__$1,opts__$1,real_input__$1,state,owner,G__22733,map__22734,map__22734__$1,opts,real_input,validate__12581__auto__,ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22736");
});})(state__$2,owner__$2,map__22735,map__22735__$1,opts__$1,real_input__$1,state,owner,G__22733,map__22734,map__22734__$1,opts,real_input,validate__12581__auto__,ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753))
;

lomakkeet.fields.__GT_t22736 = ((function (state__$2,owner__$2,map__22735,map__22735__$1,opts__$1,real_input__$1,state,owner,G__22733,map__22734,map__22734__$1,opts,real_input,validate__12581__auto__,ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753){
return (function __GT_t22736(owner__$3,validate__12581__auto____$1,emptyable_input__$1,output_checker22709__$1,G__22711__$1,G__22733__$2,map__22735__$2,output_schema22706__$1,input_schema22707__$1,input_checker22708__$1,real_input__$2,state__$3,G__22710__$1,map__22734__$2,opts__$2,G__22712__$1,ufv____$1,meta22737){
return (new lomakkeet.fields.t22736(owner__$3,validate__12581__auto____$1,emptyable_input__$1,output_checker22709__$1,G__22711__$1,G__22733__$2,map__22735__$2,output_schema22706__$1,input_schema22707__$1,input_checker22708__$1,real_input__$2,state__$3,G__22710__$1,map__22734__$2,opts__$2,G__22712__$1,ufv____$1,meta22737));
});})(state__$2,owner__$2,map__22735,map__22735__$1,opts__$1,real_input__$1,state,owner,G__22733,map__22734,map__22734__$1,opts,real_input,validate__12581__auto__,ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753))
;

}

return (new lomakkeet.fields.t22736(owner__$2,validate__12581__auto__,emptyable_input,output_checker22709_22753,G__22711,G__22733__$1,map__22735__$1,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,real_input__$1,state__$2,G__22710,map__22734__$1,opts__$1,G__22712,ufv___22749,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22757 = (function (){var G__22748 = o__12584__auto__;
return (output_checker22709_22753.cljs$core$IFn$_invoke$arity$1 ? output_checker22709_22753.cljs$core$IFn$_invoke$arity$1(G__22748) : output_checker22709_22753.call(null,G__22748));
})();
if(cljs.core.truth_(temp__4126__auto___22757)){
var error__12583__auto___22758 = temp__4126__auto___22757;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22758], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22758,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22706_22750,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22749,output_schema22706_22750,input_schema22707_22751,input_checker22708_22752,output_checker22709_22753))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.emptyable_input),schema.core.make_fn_schema(output_schema22706_22750,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22707_22751], null)));

lomakkeet.fields.__GT_emptyable_input = (function() {
var __GT_emptyable_input = null;
var __GT_emptyable_input__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.emptyable_input,cursor__20832__auto__);
});
var __GT_emptyable_input__2 = (function (cursor__20832__auto__,m22705){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.emptyable_input,cursor__20832__auto__,m22705);
});
__GT_emptyable_input = function(cursor__20832__auto__,m22705){
switch(arguments.length){
case 1:
return __GT_emptyable_input__1.call(this,cursor__20832__auto__);
case 2:
return __GT_emptyable_input__2.call(this,cursor__20832__auto__,m22705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$1 = __GT_emptyable_input__1;
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$2 = __GT_emptyable_input__2;
return __GT_emptyable_input;
})()
;

var ufv___22811 = schema.utils.use_fn_validation;
var output_schema22760_22812 = schema.core.Any;
var input_schema22761_22813 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22762_22814 = schema.core.checker(input_schema22761_22813);
var output_checker22763_22815 = schema.core.checker(output_schema22760_22812);
/**
* Inputs: [{:keys [error], :as input-state} owner {:keys [input label size help-text], :or {size 6}, :as opts}]
*/
lomakkeet.fields.default_form_group = ((function (ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815){
return (function default_form_group(G__22764,G__22765,G__22766){
var validate__12581__auto__ = ufv___22811.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22816 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22764,G__22765,G__22766], null);
var temp__4126__auto___22817 = (function (){var G__22789 = args__12582__auto___22816;
return (input_checker22762_22814.cljs$core$IFn$_invoke$arity$1 ? input_checker22762_22814.cljs$core$IFn$_invoke$arity$1(G__22789) : input_checker22762_22814.call(null,G__22789));
})();
if(cljs.core.truth_(temp__4126__auto___22817)){
var error__12583__auto___22818 = temp__4126__auto___22817;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22818], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22818,cljs.core.constant$keyword$66,args__12582__auto___22816,cljs.core.constant$keyword$67,input_schema22761_22813,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22792 = G__22764;
var map__22794 = G__22792;
var map__22794__$1 = ((cljs.core.seq_QMARK_(map__22794))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22794):map__22794);
var input_state = map__22794__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794__$1,cljs.core.constant$keyword$65);
var owner = G__22765;
var G__22793 = G__22766;
var map__22795 = G__22793;
var map__22795__$1 = ((cljs.core.seq_QMARK_(map__22795))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22795):map__22795);
var opts = map__22795__$1;
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22795__$1,cljs.core.constant$keyword$150);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22795__$1,cljs.core.constant$keyword$151,(6));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22795__$1,cljs.core.constant$keyword$137);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22795__$1,cljs.core.constant$keyword$124);
var G__22792__$1 = G__22792;
var owner__$1 = owner;
var G__22793__$1 = G__22793;
while(true){
var map__22796 = G__22792__$1;
var map__22796__$1 = ((cljs.core.seq_QMARK_(map__22796))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22796):map__22796);
var input_state__$1 = map__22796__$1;
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22796__$1,cljs.core.constant$keyword$65);
var owner__$2 = owner__$1;
var map__22797 = G__22793__$1;
var map__22797__$1 = ((cljs.core.seq_QMARK_(map__22797))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22797):map__22797);
var opts__$1 = map__22797__$1;
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797__$1,cljs.core.constant$keyword$150);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22797__$1,cljs.core.constant$keyword$151,(6));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797__$1,cljs.core.constant$keyword$137);
var input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797__$1,cljs.core.constant$keyword$124);
if(typeof lomakkeet.fields.t22798 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22798 = (function (map__22794,input,G__22793,default_form_group,map__22797,owner,G__22765,validate__12581__auto__,map__22796,output_checker22763,G__22766,output_schema22760,input_state,input_checker22762,map__22795,input_schema22761,size,G__22764,label,opts,ufv__,help_text,error,G__22792,meta22799){
this.map__22794 = map__22794;
this.input = input;
this.G__22793 = G__22793;
this.default_form_group = default_form_group;
this.map__22797 = map__22797;
this.owner = owner;
this.G__22765 = G__22765;
this.validate__12581__auto__ = validate__12581__auto__;
this.map__22796 = map__22796;
this.output_checker22763 = output_checker22763;
this.G__22766 = G__22766;
this.output_schema22760 = output_schema22760;
this.input_state = input_state;
this.input_checker22762 = input_checker22762;
this.map__22795 = map__22795;
this.input_schema22761 = input_schema22761;
this.size = size;
this.G__22764 = G__22764;
this.label = label;
this.opts = opts;
this.ufv__ = ufv__;
this.help_text = help_text;
this.error = error;
this.G__22792 = G__22792;
this.meta22799 = meta22799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22798.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22798.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22796,map__22796__$1,input_state__$1,error__$1,owner__$2,map__22797,map__22797__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22792,map__22794,map__22794__$1,input_state,error,owner,G__22793,map__22795,map__22795__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815){
return (function (_){
var self__ = this;
var ___$1 = this;
return "default-form-group";
});})(map__22796,map__22796__$1,input_state__$1,error__$1,owner__$2,map__22797,map__22797__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22792,map__22794,map__22794__$1,input_state,error,owner,G__22793,map__22795,map__22795__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815))
;

lomakkeet.fields.t22798.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22798.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22796,map__22796__$1,input_state__$1,error__$1,owner__$2,map__22797,map__22797__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22792,map__22794,map__22794__$1,input_state,error,owner,G__22793,map__22795,map__22795__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var G__22802 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",(function (){var G__22807 = cljs.core.PersistentVector.EMPTY;
var G__22807__$1 = (cljs.core.truth_(self__.error)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22807,"has-error"):G__22807);
var G__22807__$2 = (cljs.core.truth_(self__.size)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22807__$1,[cljs.core.str("col-md-"),cljs.core.str(self__.size)].join('')):G__22807__$1);
return G__22807__$2;
})()], null))};
var G__22803 = (function (){var attrs22801 = self__.label;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs22801))?sablono.interpreter.attributes(attrs22801):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22801))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22801),":"], null))));
})();
var G__22804 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(self__.input,self__.input_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,self__.opts,cljs.core.constant$keyword$53,s], null)));
var G__22805 = (cljs.core.truth_(self__.help_text)?(function (){var attrs22808 = self__.help_text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs22808))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22808], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22808))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22808)], null))));
})():null);
var G__22806 = (cljs.core.truth_((function (){var and__4239__auto__ = !(cljs.core.empty_QMARK_);
if(and__4239__auto__){
return self__.error;
} else {
return and__4239__auto__;
}
})())?(function (){var attrs22809 = [cljs.core.str(self__.error)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs22809))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22809], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22809))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22809)], null))));
})():null);
return React.DOM.div(G__22802,G__22803,G__22804,G__22805,G__22806);
});})(map__22796,map__22796__$1,input_state__$1,error__$1,owner__$2,map__22797,map__22797__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22792,map__22794,map__22794__$1,input_state,error,owner,G__22793,map__22795,map__22795__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815))
;

lomakkeet.fields.t22798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22796,map__22796__$1,input_state__$1,error__$1,owner__$2,map__22797,map__22797__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22792,map__22794,map__22794__$1,input_state,error,owner,G__22793,map__22795,map__22795__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815){
return (function (_22800){
var self__ = this;
var _22800__$1 = this;
return self__.meta22799;
});})(map__22796,map__22796__$1,input_state__$1,error__$1,owner__$2,map__22797,map__22797__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22792,map__22794,map__22794__$1,input_state,error,owner,G__22793,map__22795,map__22795__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815))
;

lomakkeet.fields.t22798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22796,map__22796__$1,input_state__$1,error__$1,owner__$2,map__22797,map__22797__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22792,map__22794,map__22794__$1,input_state,error,owner,G__22793,map__22795,map__22795__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815){
return (function (_22800,meta22799__$1){
var self__ = this;
var _22800__$1 = this;
return (new lomakkeet.fields.t22798(self__.map__22794,self__.input,self__.G__22793,self__.default_form_group,self__.map__22797,self__.owner,self__.G__22765,self__.validate__12581__auto__,self__.map__22796,self__.output_checker22763,self__.G__22766,self__.output_schema22760,self__.input_state,self__.input_checker22762,self__.map__22795,self__.input_schema22761,self__.size,self__.G__22764,self__.label,self__.opts,self__.ufv__,self__.help_text,self__.error,self__.G__22792,meta22799__$1));
});})(map__22796,map__22796__$1,input_state__$1,error__$1,owner__$2,map__22797,map__22797__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22792,map__22794,map__22794__$1,input_state,error,owner,G__22793,map__22795,map__22795__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815))
;

lomakkeet.fields.t22798.cljs$lang$type = true;

lomakkeet.fields.t22798.cljs$lang$ctorStr = "lomakkeet.fields/t22798";

lomakkeet.fields.t22798.cljs$lang$ctorPrWriter = ((function (map__22796,map__22796__$1,input_state__$1,error__$1,owner__$2,map__22797,map__22797__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22792,map__22794,map__22794__$1,input_state,error,owner,G__22793,map__22795,map__22795__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22798");
});})(map__22796,map__22796__$1,input_state__$1,error__$1,owner__$2,map__22797,map__22797__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22792,map__22794,map__22794__$1,input_state,error,owner,G__22793,map__22795,map__22795__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815))
;

lomakkeet.fields.__GT_t22798 = ((function (map__22796,map__22796__$1,input_state__$1,error__$1,owner__$2,map__22797,map__22797__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22792,map__22794,map__22794__$1,input_state,error,owner,G__22793,map__22795,map__22795__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815){
return (function __GT_t22798(map__22794__$2,input__$2,G__22793__$2,default_form_group__$1,map__22797__$2,owner__$3,G__22765__$1,validate__12581__auto____$1,map__22796__$2,output_checker22763__$1,G__22766__$1,output_schema22760__$1,input_state__$2,input_checker22762__$1,map__22795__$2,input_schema22761__$1,size__$2,G__22764__$1,label__$2,opts__$2,ufv____$1,help_text__$2,error__$2,G__22792__$2,meta22799){
return (new lomakkeet.fields.t22798(map__22794__$2,input__$2,G__22793__$2,default_form_group__$1,map__22797__$2,owner__$3,G__22765__$1,validate__12581__auto____$1,map__22796__$2,output_checker22763__$1,G__22766__$1,output_schema22760__$1,input_state__$2,input_checker22762__$1,map__22795__$2,input_schema22761__$1,size__$2,G__22764__$1,label__$2,opts__$2,ufv____$1,help_text__$2,error__$2,G__22792__$2,meta22799));
});})(map__22796,map__22796__$1,input_state__$1,error__$1,owner__$2,map__22797,map__22797__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22792,map__22794,map__22794__$1,input_state,error,owner,G__22793,map__22795,map__22795__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815))
;

}

return (new lomakkeet.fields.t22798(map__22794__$1,input__$1,G__22793__$1,default_form_group,map__22797__$1,owner__$2,G__22765,validate__12581__auto__,map__22796__$1,output_checker22763_22815,G__22766,output_schema22760_22812,input_state__$1,input_checker22762_22814,map__22795__$1,input_schema22761_22813,size__$1,G__22764,label__$1,opts__$1,ufv___22811,help_text__$1,error__$1,G__22792__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22819 = (function (){var G__22810 = o__12584__auto__;
return (output_checker22763_22815.cljs$core$IFn$_invoke$arity$1 ? output_checker22763_22815.cljs$core$IFn$_invoke$arity$1(G__22810) : output_checker22763_22815.call(null,G__22810));
})();
if(cljs.core.truth_(temp__4126__auto___22819)){
var error__12583__auto___22820 = temp__4126__auto___22819;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22820], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22820,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22760_22812,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22811,output_schema22760_22812,input_schema22761_22813,input_checker22762_22814,output_checker22763_22815))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.default_form_group),schema.core.make_fn_schema(output_schema22760_22812,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22761_22813], null)));

lomakkeet.fields.__GT_default_form_group = (function() {
var __GT_default_form_group = null;
var __GT_default_form_group__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.default_form_group,cursor__20832__auto__);
});
var __GT_default_form_group__2 = (function (cursor__20832__auto__,m22759){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.default_form_group,cursor__20832__auto__,m22759);
});
__GT_default_form_group = function(cursor__20832__auto__,m22759){
switch(arguments.length){
case 1:
return __GT_default_form_group__1.call(this,cursor__20832__auto__);
case 2:
return __GT_default_form_group__2.call(this,cursor__20832__auto__,m22759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_default_form_group.cljs$core$IFn$_invoke$arity$1 = __GT_default_form_group__1;
__GT_default_form_group.cljs$core$IFn$_invoke$arity$2 = __GT_default_form_group__2;
return __GT_default_form_group;
})()
;
lomakkeet.fields.build = (function build(p__22821){
var map__22827 = p__22821;
var map__22827__$1 = ((cljs.core.seq_QMARK_(map__22827))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22827):map__22827);
var opts = map__22827__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22827__$1,cljs.core.constant$keyword$146);
var form_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22827__$1,cljs.core.constant$keyword$152);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22827__$1,cljs.core.constant$keyword$153);
var map__22828 = form_state;
var map__22828__$1 = ((cljs.core.seq_QMARK_(map__22828))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22828):map__22828);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22828__$1,cljs.core.constant$keyword$67);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22828__$1,cljs.core.constant$keyword$154);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22828__$1,cljs.core.constant$keyword$66);
return om.core.build.cljs$core$IFn$_invoke$arity$3(form_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22829 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22829) : cljs.core.deref.call(null,G__22829));
})(),ks),cljs.core.constant$keyword$65,(cljs.core.truth_(errors)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22830 = errors;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22830) : cljs.core.deref.call(null,G__22830));
})(),ks):null),cljs.core.constant$keyword$67,(cljs.core.truth_(schema__$1)?lomakkeet.fields.get_in_schema((function (){var G__22831 = schema__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22831) : cljs.core.deref.call(null,G__22831));
})(),ks):null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$53),cljs.core.constant$keyword$53,cljs.core.constant$keyword$53.cljs$core$IFn$_invoke$arity$1(opts)], null));
});
lomakkeet.fields.input_input = (function input_input(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,"text",cljs.core.constant$keyword$66,(function (){var or__4251__auto__ = value;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$156,cb], null)], null);
});
lomakkeet.fields.input_textarea = (function input_textarea(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,(function (){var or__4251__auto__ = value;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$156,cb], null)], null);
});
lomakkeet.fields.input_static = (function input_static(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,value], null);
});

var ufv___22872 = schema.utils.use_fn_validation;
var output_schema22833_22873 = schema.core.Any;
var input_schema22834_22874 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22835_22875 = schema.core.checker(input_schema22834_22874);
var output_checker22836_22876 = schema.core.checker(output_schema22833_22873);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks el transform-value], :or {el input-input, transform-value identity}, :as opts}]
*/
lomakkeet.fields.input_STAR_ = ((function (ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876){
return (function input_STAR_(G__22837,G__22838,G__22839){
var validate__12581__auto__ = ufv___22872.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22877 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22837,G__22838,G__22839], null);
var temp__4126__auto___22878 = (function (){var G__22856 = args__12582__auto___22877;
return (input_checker22835_22875.cljs$core$IFn$_invoke$arity$1 ? input_checker22835_22875.cljs$core$IFn$_invoke$arity$1(G__22856) : input_checker22835_22875.call(null,G__22856));
})();
if(cljs.core.truth_(temp__4126__auto___22878)){
var error__12583__auto___22879 = temp__4126__auto___22878;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22879], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22879,cljs.core.constant$keyword$66,args__12582__auto___22877,cljs.core.constant$keyword$67,input_schema22834_22874,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22859 = G__22837;
var map__22861 = G__22859;
var map__22861__$1 = ((cljs.core.seq_QMARK_(map__22861))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22861):map__22861);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22861__$1,cljs.core.constant$keyword$66);
var owner = G__22838;
var G__22860 = G__22839;
var map__22862 = G__22860;
var map__22862__$1 = ((cljs.core.seq_QMARK_(map__22862))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22862):map__22862);
var opts = map__22862__$1;
var transform_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22862__$1,cljs.core.constant$keyword$159,cljs.core.identity);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22862__$1,cljs.core.constant$keyword$160,lomakkeet.fields.input_input);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22862__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22862__$1,cljs.core.constant$keyword$147);
var G__22859__$1 = G__22859;
var owner__$1 = owner;
var G__22860__$1 = G__22860;
while(true){
var map__22863 = G__22859__$1;
var map__22863__$1 = ((cljs.core.seq_QMARK_(map__22863))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22863):map__22863);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22863__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22864 = G__22860__$1;
var map__22864__$1 = ((cljs.core.seq_QMARK_(map__22864))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22864):map__22864);
var opts__$1 = map__22864__$1;
var transform_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22864__$1,cljs.core.constant$keyword$159,cljs.core.identity);
var el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22864__$1,cljs.core.constant$keyword$160,lomakkeet.fields.input_input);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22865 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22865 = (function (map__22861,owner,G__22838,output_schema22833,input_STAR_,G__22839,validate__12581__auto__,G__22860,el,G__22837,input_schema22834,ks,map__22862,value,G__22859,transform_value,ch,map__22864,input_checker22835,map__22863,output_checker22836,opts,ufv__,meta22866){
this.map__22861 = map__22861;
this.owner = owner;
this.G__22838 = G__22838;
this.output_schema22833 = output_schema22833;
this.input_STAR_ = input_STAR_;
this.G__22839 = G__22839;
this.validate__12581__auto__ = validate__12581__auto__;
this.G__22860 = G__22860;
this.el = el;
this.G__22837 = G__22837;
this.input_schema22834 = input_schema22834;
this.ks = ks;
this.map__22862 = map__22862;
this.value = value;
this.G__22859 = G__22859;
this.transform_value = transform_value;
this.ch = ch;
this.map__22864 = map__22864;
this.input_checker22835 = input_checker22835;
this.map__22863 = map__22863;
this.output_checker22836 = output_checker22836;
this.opts = opts;
this.ufv__ = ufv__;
this.meta22866 = meta22866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22865.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22865.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876){
return (function (_){
var self__ = this;
var ___$1 = this;
return "input*";
});})(map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876))
;

lomakkeet.fields.t22865.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22865.prototype.om$core$IRender$render$arity$1 = ((function (map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__22868 = (function (){var G__22870 = self__.value;
return (self__.transform_value.cljs$core$IFn$_invoke$arity$1 ? self__.transform_value.cljs$core$IFn$_invoke$arity$1(G__22870) : self__.transform_value.call(null,G__22870));
})();
var G__22869 = ((function (G__22868,___$1,map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,e.target.value], null));
});})(G__22868,___$1,map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876))
;
return (self__.el.cljs$core$IFn$_invoke$arity$2 ? self__.el.cljs$core$IFn$_invoke$arity$2(G__22868,G__22869) : self__.el.call(null,G__22868,G__22869));
})());
});})(map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876))
;

lomakkeet.fields.t22865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876){
return (function (_22867){
var self__ = this;
var _22867__$1 = this;
return self__.meta22866;
});})(map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876))
;

lomakkeet.fields.t22865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876){
return (function (_22867,meta22866__$1){
var self__ = this;
var _22867__$1 = this;
return (new lomakkeet.fields.t22865(self__.map__22861,self__.owner,self__.G__22838,self__.output_schema22833,self__.input_STAR_,self__.G__22839,self__.validate__12581__auto__,self__.G__22860,self__.el,self__.G__22837,self__.input_schema22834,self__.ks,self__.map__22862,self__.value,self__.G__22859,self__.transform_value,self__.ch,self__.map__22864,self__.input_checker22835,self__.map__22863,self__.output_checker22836,self__.opts,self__.ufv__,meta22866__$1));
});})(map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876))
;

lomakkeet.fields.t22865.cljs$lang$type = true;

lomakkeet.fields.t22865.cljs$lang$ctorStr = "lomakkeet.fields/t22865";

lomakkeet.fields.t22865.cljs$lang$ctorPrWriter = ((function (map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22865");
});})(map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876))
;

lomakkeet.fields.__GT_t22865 = ((function (map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876){
return (function __GT_t22865(map__22861__$2,owner__$3,G__22838__$1,output_schema22833__$1,input_STAR___$1,G__22839__$1,validate__12581__auto____$1,G__22860__$2,el__$2,G__22837__$1,input_schema22834__$1,ks__$2,map__22862__$2,value__$2,G__22859__$2,transform_value__$2,ch__$2,map__22864__$2,input_checker22835__$1,map__22863__$2,output_checker22836__$1,opts__$2,ufv____$1,meta22866){
return (new lomakkeet.fields.t22865(map__22861__$2,owner__$3,G__22838__$1,output_schema22833__$1,input_STAR___$1,G__22839__$1,validate__12581__auto____$1,G__22860__$2,el__$2,G__22837__$1,input_schema22834__$1,ks__$2,map__22862__$2,value__$2,G__22859__$2,transform_value__$2,ch__$2,map__22864__$2,input_checker22835__$1,map__22863__$2,output_checker22836__$1,opts__$2,ufv____$1,meta22866));
});})(map__22863,map__22863__$1,value__$1,owner__$2,map__22864,map__22864__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22859,map__22861,map__22861__$1,value,owner,G__22860,map__22862,map__22862__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876))
;

}

return (new lomakkeet.fields.t22865(map__22861__$1,owner__$2,G__22838,output_schema22833_22873,input_STAR_,G__22839,validate__12581__auto__,G__22860__$1,el__$1,G__22837,input_schema22834_22874,ks__$1,map__22862__$1,value__$1,G__22859__$1,transform_value__$1,ch__$1,map__22864__$1,input_checker22835_22875,map__22863__$1,output_checker22836_22876,opts__$1,ufv___22872,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22880 = (function (){var G__22871 = o__12584__auto__;
return (output_checker22836_22876.cljs$core$IFn$_invoke$arity$1 ? output_checker22836_22876.cljs$core$IFn$_invoke$arity$1(G__22871) : output_checker22836_22876.call(null,G__22871));
})();
if(cljs.core.truth_(temp__4126__auto___22880)){
var error__12583__auto___22881 = temp__4126__auto___22880;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22881], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22881,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22833_22873,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22872,output_schema22833_22873,input_schema22834_22874,input_checker22835_22875,output_checker22836_22876))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.input_STAR_),schema.core.make_fn_schema(output_schema22833_22873,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22834_22874], null)));

lomakkeet.fields.__GT_input_STAR_ = (function() {
var __GT_input_STAR_ = null;
var __GT_input_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.input_STAR_,cursor__20832__auto__);
});
var __GT_input_STAR___2 = (function (cursor__20832__auto__,m22832){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.input_STAR_,cursor__20832__auto__,m22832);
});
__GT_input_STAR_ = function(cursor__20832__auto__,m22832){
switch(arguments.length){
case 1:
return __GT_input_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_input_STAR___2.call(this,cursor__20832__auto__,m22832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_input_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_input_STAR___1;
__GT_input_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_input_STAR___2;
return __GT_input_STAR_;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.input = (function() { 
var input__delegate = function (form,label,ks,p__22882){
var vec__22884 = p__22882;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22884,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var input = function (form,label,ks,var_args){
var p__22882 = null;
if (arguments.length > 3) {
var G__22885__i = 0, G__22885__a = new Array(arguments.length -  3);
while (G__22885__i < G__22885__a.length) {G__22885__a[G__22885__i] = arguments[G__22885__i + 3]; ++G__22885__i;}
  p__22882 = new cljs.core.IndexedSeq(G__22885__a,0);
} 
return input__delegate.call(this,form,label,ks,p__22882);};
input.cljs$lang$maxFixedArity = 3;
input.cljs$lang$applyTo = (function (arglist__22886){
var form = cljs.core.first(arglist__22886);
arglist__22886 = cljs.core.next(arglist__22886);
var label = cljs.core.first(arglist__22886);
arglist__22886 = cljs.core.next(arglist__22886);
var ks = cljs.core.first(arglist__22886);
var p__22882 = cljs.core.rest(arglist__22886);
return input__delegate(form,label,ks,p__22882);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.textarea = (function() { 
var textarea__delegate = function (form,label,ks,p__22887){
var vec__22889 = p__22887;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22889,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$160,lomakkeet.fields.input_textarea], null)], 0)));
};
var textarea = function (form,label,ks,var_args){
var p__22887 = null;
if (arguments.length > 3) {
var G__22890__i = 0, G__22890__a = new Array(arguments.length -  3);
while (G__22890__i < G__22890__a.length) {G__22890__a[G__22890__i] = arguments[G__22890__i + 3]; ++G__22890__i;}
  p__22887 = new cljs.core.IndexedSeq(G__22890__a,0);
} 
return textarea__delegate.call(this,form,label,ks,p__22887);};
textarea.cljs$lang$maxFixedArity = 3;
textarea.cljs$lang$applyTo = (function (arglist__22891){
var form = cljs.core.first(arglist__22891);
arglist__22891 = cljs.core.next(arglist__22891);
var label = cljs.core.first(arglist__22891);
arglist__22891 = cljs.core.next(arglist__22891);
var ks = cljs.core.first(arglist__22891);
var p__22887 = cljs.core.rest(arglist__22891);
return textarea__delegate(form,label,ks,p__22887);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.static$ = (function() { 
var static$__delegate = function (form,label,ks,p__22892){
var vec__22894 = p__22892;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22894,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$160,lomakkeet.fields.input_static], null)], 0)));
};
var static$ = function (form,label,ks,var_args){
var p__22892 = null;
if (arguments.length > 3) {
var G__22895__i = 0, G__22895__a = new Array(arguments.length -  3);
while (G__22895__i < G__22895__a.length) {G__22895__a[G__22895__i] = arguments[G__22895__i + 3]; ++G__22895__i;}
  p__22892 = new cljs.core.IndexedSeq(G__22895__a,0);
} 
return static$__delegate.call(this,form,label,ks,p__22892);};
static$.cljs$lang$maxFixedArity = 3;
static$.cljs$lang$applyTo = (function (arglist__22896){
var form = cljs.core.first(arglist__22896);
arglist__22896 = cljs.core.next(arglist__22896);
var label = cljs.core.first(arglist__22896);
arglist__22896 = cljs.core.next(arglist__22896);
var ks = cljs.core.first(arglist__22896);
var p__22892 = cljs.core.rest(arglist__22896);
return static$__delegate(form,label,ks,p__22892);
});
static$.cljs$core$IFn$_invoke$arity$variadic = static$__delegate;
return static$;
})()
;

var ufv___22933 = schema.utils.use_fn_validation;
var output_schema22898_22934 = schema.core.Any;
var input_schema22899_22935 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22900_22936 = schema.core.checker(input_schema22899_22935);
var output_checker22901_22937 = schema.core.checker(output_schema22898_22934);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks], :as opts}]
*/
lomakkeet.fields.checkbox_STAR_ = ((function (ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937){
return (function checkbox_STAR_(G__22902,G__22903,G__22904){
var validate__12581__auto__ = ufv___22933.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22938 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22902,G__22903,G__22904], null);
var temp__4126__auto___22939 = (function (){var G__22919 = args__12582__auto___22938;
return (input_checker22900_22936.cljs$core$IFn$_invoke$arity$1 ? input_checker22900_22936.cljs$core$IFn$_invoke$arity$1(G__22919) : input_checker22900_22936.call(null,G__22919));
})();
if(cljs.core.truth_(temp__4126__auto___22939)){
var error__12583__auto___22940 = temp__4126__auto___22939;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22940], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22940,cljs.core.constant$keyword$66,args__12582__auto___22938,cljs.core.constant$keyword$67,input_schema22899_22935,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22922 = G__22902;
var map__22924 = G__22922;
var map__22924__$1 = ((cljs.core.seq_QMARK_(map__22924))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22924):map__22924);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22924__$1,cljs.core.constant$keyword$66);
var owner = G__22903;
var G__22923 = G__22904;
var map__22925 = G__22923;
var map__22925__$1 = ((cljs.core.seq_QMARK_(map__22925))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22925):map__22925);
var opts = map__22925__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22925__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22925__$1,cljs.core.constant$keyword$147);
var G__22922__$1 = G__22922;
var owner__$1 = owner;
var G__22923__$1 = G__22923;
while(true){
var map__22926 = G__22922__$1;
var map__22926__$1 = ((cljs.core.seq_QMARK_(map__22926))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22926):map__22926);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22926__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22927 = G__22923__$1;
var map__22927__$1 = ((cljs.core.seq_QMARK_(map__22927))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22927):map__22927);
var opts__$1 = map__22927__$1;
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22927__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22927__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22928 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22928 = (function (input_schema22899,output_schema22898,owner,validate__12581__auto__,G__22923,map__22926,input_checker22900,map__22927,ks,G__22903,G__22902,value,G__22904,G__22922,output_checker22901,ch,map__22925,checkbox_STAR_,opts,map__22924,ufv__,meta22929){
this.input_schema22899 = input_schema22899;
this.output_schema22898 = output_schema22898;
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.G__22923 = G__22923;
this.map__22926 = map__22926;
this.input_checker22900 = input_checker22900;
this.map__22927 = map__22927;
this.ks = ks;
this.G__22903 = G__22903;
this.G__22902 = G__22902;
this.value = value;
this.G__22904 = G__22904;
this.G__22922 = G__22922;
this.output_checker22901 = output_checker22901;
this.ch = ch;
this.map__22925 = map__22925;
this.checkbox_STAR_ = checkbox_STAR_;
this.opts = opts;
this.map__22924 = map__22924;
this.ufv__ = ufv__;
this.meta22929 = meta22929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22928.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22928.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937){
return (function (_){
var self__ = this;
var ___$1 = this;
return "checkbox*";
});})(map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937))
;

lomakkeet.fields.t22928.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22928.prototype.om$core$IRender$render$arity$1 = ((function (map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22931 = {"type": "checkbox", "checked": cljs.core.boolean$(self__.value), "onChange": ((function (___$1,map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,e.target.checked], null));
});})(___$1,map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22931) : sablono.interpreter.input.call(null,G__22931));
});})(map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937))
;

lomakkeet.fields.t22928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937){
return (function (_22930){
var self__ = this;
var _22930__$1 = this;
return self__.meta22929;
});})(map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937))
;

lomakkeet.fields.t22928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937){
return (function (_22930,meta22929__$1){
var self__ = this;
var _22930__$1 = this;
return (new lomakkeet.fields.t22928(self__.input_schema22899,self__.output_schema22898,self__.owner,self__.validate__12581__auto__,self__.G__22923,self__.map__22926,self__.input_checker22900,self__.map__22927,self__.ks,self__.G__22903,self__.G__22902,self__.value,self__.G__22904,self__.G__22922,self__.output_checker22901,self__.ch,self__.map__22925,self__.checkbox_STAR_,self__.opts,self__.map__22924,self__.ufv__,meta22929__$1));
});})(map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937))
;

lomakkeet.fields.t22928.cljs$lang$type = true;

lomakkeet.fields.t22928.cljs$lang$ctorStr = "lomakkeet.fields/t22928";

lomakkeet.fields.t22928.cljs$lang$ctorPrWriter = ((function (map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22928");
});})(map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937))
;

lomakkeet.fields.__GT_t22928 = ((function (map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937){
return (function __GT_t22928(input_schema22899__$1,output_schema22898__$1,owner__$3,validate__12581__auto____$1,G__22923__$2,map__22926__$2,input_checker22900__$1,map__22927__$2,ks__$2,G__22903__$1,G__22902__$1,value__$2,G__22904__$1,G__22922__$2,output_checker22901__$1,ch__$2,map__22925__$2,checkbox_STAR___$1,opts__$2,map__22924__$2,ufv____$1,meta22929){
return (new lomakkeet.fields.t22928(input_schema22899__$1,output_schema22898__$1,owner__$3,validate__12581__auto____$1,G__22923__$2,map__22926__$2,input_checker22900__$1,map__22927__$2,ks__$2,G__22903__$1,G__22902__$1,value__$2,G__22904__$1,G__22922__$2,output_checker22901__$1,ch__$2,map__22925__$2,checkbox_STAR___$1,opts__$2,map__22924__$2,ufv____$1,meta22929));
});})(map__22926,map__22926__$1,value__$1,owner__$2,map__22927,map__22927__$1,opts__$1,ks__$1,ch__$1,G__22922,map__22924,map__22924__$1,value,owner,G__22923,map__22925,map__22925__$1,opts,ks,ch,validate__12581__auto__,ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937))
;

}

return (new lomakkeet.fields.t22928(input_schema22899_22935,output_schema22898_22934,owner__$2,validate__12581__auto__,G__22923__$1,map__22926__$1,input_checker22900_22936,map__22927__$1,ks__$1,G__22903,G__22902,value__$1,G__22904,G__22922__$1,output_checker22901_22937,ch__$1,map__22925__$1,checkbox_STAR_,opts__$1,map__22924__$1,ufv___22933,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22941 = (function (){var G__22932 = o__12584__auto__;
return (output_checker22901_22937.cljs$core$IFn$_invoke$arity$1 ? output_checker22901_22937.cljs$core$IFn$_invoke$arity$1(G__22932) : output_checker22901_22937.call(null,G__22932));
})();
if(cljs.core.truth_(temp__4126__auto___22941)){
var error__12583__auto___22942 = temp__4126__auto___22941;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22942], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22942,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22898_22934,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22933,output_schema22898_22934,input_schema22899_22935,input_checker22900_22936,output_checker22901_22937))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.checkbox_STAR_),schema.core.make_fn_schema(output_schema22898_22934,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22899_22935], null)));

lomakkeet.fields.__GT_checkbox_STAR_ = (function() {
var __GT_checkbox_STAR_ = null;
var __GT_checkbox_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.checkbox_STAR_,cursor__20832__auto__);
});
var __GT_checkbox_STAR___2 = (function (cursor__20832__auto__,m22897){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.checkbox_STAR_,cursor__20832__auto__,m22897);
});
__GT_checkbox_STAR_ = function(cursor__20832__auto__,m22897){
switch(arguments.length){
case 1:
return __GT_checkbox_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_checkbox_STAR___2.call(this,cursor__20832__auto__,m22897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkbox_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_checkbox_STAR___1;
__GT_checkbox_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_checkbox_STAR___2;
return __GT_checkbox_STAR_;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.checkbox = (function() { 
var checkbox__delegate = function (form,label,ks,p__22943){
var vec__22945 = p__22943;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22945,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.fields.checkbox_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var checkbox = function (form,label,ks,var_args){
var p__22943 = null;
if (arguments.length > 3) {
var G__22946__i = 0, G__22946__a = new Array(arguments.length -  3);
while (G__22946__i < G__22946__a.length) {G__22946__a[G__22946__i] = arguments[G__22946__i + 3]; ++G__22946__i;}
  p__22943 = new cljs.core.IndexedSeq(G__22946__a,0);
} 
return checkbox__delegate.call(this,form,label,ks,p__22943);};
checkbox.cljs$lang$maxFixedArity = 3;
checkbox.cljs$lang$applyTo = (function (arglist__22947){
var form = cljs.core.first(arglist__22947);
arglist__22947 = cljs.core.next(arglist__22947);
var label = cljs.core.first(arglist__22947);
arglist__22947 = cljs.core.next(arglist__22947);
var ks = cljs.core.first(arglist__22947);
var p__22943 = cljs.core.rest(arglist__22947);
return checkbox__delegate(form,label,ks,p__22943);
});
checkbox.cljs$core$IFn$_invoke$arity$variadic = checkbox__delegate;
return checkbox;
})()
;

var ufv___23006 = schema.utils.use_fn_validation;
var output_schema22949_23007 = schema.core.Any;
var input_schema22950_23008 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22951_23009 = schema.core.checker(input_schema22950_23008);
var output_checker22952_23010 = schema.core.checker(output_schema22949_23007);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks options], :as opts}]
*/
lomakkeet.fields.select_STAR_ = ((function (ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010){
return (function select_STAR_(G__22953,G__22954,G__22955){
var validate__12581__auto__ = ufv___23006.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___23011 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22953,G__22954,G__22955], null);
var temp__4126__auto___23012 = (function (){var G__22981 = args__12582__auto___23011;
return (input_checker22951_23009.cljs$core$IFn$_invoke$arity$1 ? input_checker22951_23009.cljs$core$IFn$_invoke$arity$1(G__22981) : input_checker22951_23009.call(null,G__22981));
})();
if(cljs.core.truth_(temp__4126__auto___23012)){
var error__12583__auto___23013 = temp__4126__auto___23012;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23013], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23013,cljs.core.constant$keyword$66,args__12582__auto___23011,cljs.core.constant$keyword$67,input_schema22950_23008,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22984 = G__22953;
var map__22986 = G__22984;
var map__22986__$1 = ((cljs.core.seq_QMARK_(map__22986))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22986):map__22986);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22986__$1,cljs.core.constant$keyword$66);
var owner = G__22954;
var G__22985 = G__22955;
var map__22987 = G__22985;
var map__22987__$1 = ((cljs.core.seq_QMARK_(map__22987))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22987):map__22987);
var opts = map__22987__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22987__$1,cljs.core.constant$keyword$161);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22987__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22987__$1,cljs.core.constant$keyword$147);
var G__22984__$1 = G__22984;
var owner__$1 = owner;
var G__22985__$1 = G__22985;
while(true){
var map__22988 = G__22984__$1;
var map__22988__$1 = ((cljs.core.seq_QMARK_(map__22988))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22988):map__22988);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22988__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22989 = G__22985__$1;
var map__22989__$1 = ((cljs.core.seq_QMARK_(map__22989))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22989):map__22989);
var opts__$1 = map__22989__$1;
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22989__$1,cljs.core.constant$keyword$161);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22989__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22989__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22990 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22990 = (function (G__22984,options,map__22989,G__22954,owner,output_schema22949,validate__12581__auto__,map__22988,G__22985,ks,G__22953,value,map__22987,G__22955,output_checker22952,ch,map__22986,input_checker22951,select_STAR_,input_schema22950,opts,ufv__,meta22991){
this.G__22984 = G__22984;
this.options = options;
this.map__22989 = map__22989;
this.G__22954 = G__22954;
this.owner = owner;
this.output_schema22949 = output_schema22949;
this.validate__12581__auto__ = validate__12581__auto__;
this.map__22988 = map__22988;
this.G__22985 = G__22985;
this.ks = ks;
this.G__22953 = G__22953;
this.value = value;
this.map__22987 = map__22987;
this.G__22955 = G__22955;
this.output_checker22952 = output_checker22952;
this.ch = ch;
this.map__22986 = map__22986;
this.input_checker22951 = input_checker22951;
this.select_STAR_ = select_STAR_;
this.input_schema22950 = input_schema22950;
this.opts = opts;
this.ufv__ = ufv__;
this.meta22991 = meta22991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22990.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22990.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010){
return (function (_){
var self__ = this;
var ___$1 = this;
return "select*";
});})(map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010))
;

lomakkeet.fields.t22990.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22990.prototype.om$core$IRender$render$arity$1 = ((function (map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22993 = {"className": "form-control", "value": self__.value, "onChange": ((function (___$1,map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,e.target.value], null));
});})(___$1,map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010))
};
var G__22994 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(self__.options))?(function (){var iter__5007__auto__ = ((function (G__22993,___$1,map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010){
return (function iter__22995(s__22996){
return (new cljs.core.LazySeq(null,((function (G__22993,___$1,map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010){
return (function (){
var s__22996__$1 = s__22996;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22996__$1);
if(temp__4126__auto__){
var s__22996__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22996__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__22996__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__22998 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__22997 = (0);
while(true){
if((i__22997 < size__5006__auto__)){
var vec__23003 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__22997);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003,(1),null);
cljs.core.chunk_append(b__22998,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,k,cljs.core.constant$keyword$51,k], null),v], null));

var G__23014 = (i__22997 + (1));
i__22997 = G__23014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22998),iter__22995(cljs.core.chunk_rest(s__22996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22998),null);
}
} else {
var vec__23004 = cljs.core.first(s__22996__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23004,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23004,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,k,cljs.core.constant$keyword$51,k], null),v], null),iter__22995(cljs.core.rest(s__22996__$2)));
}
} else {
return null;
}
break;
}
});})(G__22993,___$1,map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010))
,null,null));
});})(G__22993,___$1,map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010))
;
return iter__5007__auto__(self__.options);
})():null));
return React.DOM.select(G__22993,G__22994);
});})(map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010))
;

lomakkeet.fields.t22990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010){
return (function (_22992){
var self__ = this;
var _22992__$1 = this;
return self__.meta22991;
});})(map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010))
;

lomakkeet.fields.t22990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010){
return (function (_22992,meta22991__$1){
var self__ = this;
var _22992__$1 = this;
return (new lomakkeet.fields.t22990(self__.G__22984,self__.options,self__.map__22989,self__.G__22954,self__.owner,self__.output_schema22949,self__.validate__12581__auto__,self__.map__22988,self__.G__22985,self__.ks,self__.G__22953,self__.value,self__.map__22987,self__.G__22955,self__.output_checker22952,self__.ch,self__.map__22986,self__.input_checker22951,self__.select_STAR_,self__.input_schema22950,self__.opts,self__.ufv__,meta22991__$1));
});})(map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010))
;

lomakkeet.fields.t22990.cljs$lang$type = true;

lomakkeet.fields.t22990.cljs$lang$ctorStr = "lomakkeet.fields/t22990";

lomakkeet.fields.t22990.cljs$lang$ctorPrWriter = ((function (map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22990");
});})(map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010))
;

lomakkeet.fields.__GT_t22990 = ((function (map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010){
return (function __GT_t22990(G__22984__$2,options__$2,map__22989__$2,G__22954__$1,owner__$3,output_schema22949__$1,validate__12581__auto____$1,map__22988__$2,G__22985__$2,ks__$2,G__22953__$1,value__$2,map__22987__$2,G__22955__$1,output_checker22952__$1,ch__$2,map__22986__$2,input_checker22951__$1,select_STAR___$1,input_schema22950__$1,opts__$2,ufv____$1,meta22991){
return (new lomakkeet.fields.t22990(G__22984__$2,options__$2,map__22989__$2,G__22954__$1,owner__$3,output_schema22949__$1,validate__12581__auto____$1,map__22988__$2,G__22985__$2,ks__$2,G__22953__$1,value__$2,map__22987__$2,G__22955__$1,output_checker22952__$1,ch__$2,map__22986__$2,input_checker22951__$1,select_STAR___$1,input_schema22950__$1,opts__$2,ufv____$1,meta22991));
});})(map__22988,map__22988__$1,value__$1,owner__$2,map__22989,map__22989__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22984,map__22986,map__22986__$1,value,owner,G__22985,map__22987,map__22987__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010))
;

}

return (new lomakkeet.fields.t22990(G__22984__$1,options__$1,map__22989__$1,G__22954,owner__$2,output_schema22949_23007,validate__12581__auto__,map__22988__$1,G__22985__$1,ks__$1,G__22953,value__$1,map__22987__$1,G__22955,output_checker22952_23010,ch__$1,map__22986__$1,input_checker22951_23009,select_STAR_,input_schema22950_23008,opts__$1,ufv___23006,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___23015 = (function (){var G__23005 = o__12584__auto__;
return (output_checker22952_23010.cljs$core$IFn$_invoke$arity$1 ? output_checker22952_23010.cljs$core$IFn$_invoke$arity$1(G__23005) : output_checker22952_23010.call(null,G__23005));
})();
if(cljs.core.truth_(temp__4126__auto___23015)){
var error__12583__auto___23016 = temp__4126__auto___23015;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23016], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23016,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22949_23007,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___23006,output_schema22949_23007,input_schema22950_23008,input_checker22951_23009,output_checker22952_23010))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.select_STAR_),schema.core.make_fn_schema(output_schema22949_23007,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22950_23008], null)));

lomakkeet.fields.__GT_select_STAR_ = (function() {
var __GT_select_STAR_ = null;
var __GT_select_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.select_STAR_,cursor__20832__auto__);
});
var __GT_select_STAR___2 = (function (cursor__20832__auto__,m22948){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.select_STAR_,cursor__20832__auto__,m22948);
});
__GT_select_STAR_ = function(cursor__20832__auto__,m22948){
switch(arguments.length){
case 1:
return __GT_select_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_select_STAR___2.call(this,cursor__20832__auto__,m22948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_select_STAR___1;
__GT_select_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_select_STAR___2;
return __GT_select_STAR_;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.select = (function() { 
var select__delegate = function (form,label,ks,options,p__23017){
var vec__23019 = p__23017;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23019,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.select_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$161,options], null)], 0)));
};
var select = function (form,label,ks,options,var_args){
var p__23017 = null;
if (arguments.length > 4) {
var G__23020__i = 0, G__23020__a = new Array(arguments.length -  4);
while (G__23020__i < G__23020__a.length) {G__23020__a[G__23020__i] = arguments[G__23020__i + 4]; ++G__23020__i;}
  p__23017 = new cljs.core.IndexedSeq(G__23020__a,0);
} 
return select__delegate.call(this,form,label,ks,options,p__23017);};
select.cljs$lang$maxFixedArity = 4;
select.cljs$lang$applyTo = (function (arglist__23021){
var form = cljs.core.first(arglist__23021);
arglist__23021 = cljs.core.next(arglist__23021);
var label = cljs.core.first(arglist__23021);
arglist__23021 = cljs.core.next(arglist__23021);
var ks = cljs.core.first(arglist__23021);
arglist__23021 = cljs.core.next(arglist__23021);
var options = cljs.core.first(arglist__23021);
var p__23017 = cljs.core.rest(arglist__23021);
return select__delegate(form,label,ks,options,p__23017);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
lomakkeet.fields.coerce = (function coerce(coercion_matcher,schema__$1,value){
if(cljs.core.truth_(schema__$1)){
var coerced = schema.coerce.coercer(schema__$1,coercion_matcher).call(null,value);
if(schema.utils.error_QMARK_(coerced)){
return value;
} else {
return coerced;
}
} else {
return value;
}
});
/**
* 
*/
lomakkeet.fields.FormState = schema.core.schema_with_name(new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$66,schema.core.Any,cljs.core.constant$keyword$162,schema.core.Any,cljs.core.constant$keyword$154,schema.core.Any,cljs.core.constant$keyword$67,schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"FormState","FormState",834878066,null));
lomakkeet.fields.__GT_form_state = (function() {
var __GT_form_state = null;
var __GT_form_state__1 = (function (value){
return __GT_form_state.cljs$core$IFn$_invoke$arity$2(value,null);
});
var __GT_form_state__2 = (function (value,schema__$1){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$66,value,cljs.core.constant$keyword$162,value,cljs.core.constant$keyword$154,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null),cljs.core.constant$keyword$67,schema__$1], null);
});
__GT_form_state = function(value,schema__$1){
switch(arguments.length){
case 1:
return __GT_form_state__1.call(this,value);
case 2:
return __GT_form_state__2.call(this,value,schema__$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_form_state.cljs$core$IFn$_invoke$arity$1 = __GT_form_state__1;
__GT_form_state.cljs$core$IFn$_invoke$arity$2 = __GT_form_state__2;
return __GT_form_state;
})()
;
lomakkeet.fields.cancel_form = (function cancel_form(form_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_state,cljs.core.constant$keyword$66,cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(form_state));
});
lomakkeet.fields.save_form = (function save_form(p__23024,value){
var map__23026 = p__23024;
var map__23026__$1 = ((cljs.core.seq_QMARK_(map__23026))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23026):map__23026);
var form_state = map__23026__$1;
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23026__$1,cljs.core.constant$keyword$67);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.constant$keyword$66,value,cljs.core.array_seq([cljs.core.constant$keyword$162,value,cljs.core.constant$keyword$154,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null)], 0));
});
/**
* @param {...*} var_args
*/
lomakkeet.fields.update_form = (function() { 
var update_form__delegate = function (p__23027,f,args){
var map__23029 = p__23027;
var map__23029__$1 = ((cljs.core.seq_QMARK_(map__23029))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23029):map__23029);
var form_state = map__23029__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23029__$1,cljs.core.constant$keyword$66);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,value,args);
return lomakkeet.fields.save_form(form_state,new_value);
};
var update_form = function (p__23027,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23030__i = 0, G__23030__a = new Array(arguments.length -  2);
while (G__23030__i < G__23030__a.length) {G__23030__a[G__23030__i] = arguments[G__23030__i + 2]; ++G__23030__i;}
  args = new cljs.core.IndexedSeq(G__23030__a,0);
} 
return update_form__delegate.call(this,p__23027,f,args);};
update_form.cljs$lang$maxFixedArity = 2;
update_form.cljs$lang$applyTo = (function (arglist__23031){
var p__23027 = cljs.core.first(arglist__23031);
arglist__23031 = cljs.core.next(arglist__23031);
var f = cljs.core.first(arglist__23031);
var args = cljs.core.rest(arglist__23031);
return update_form__delegate(p__23027,f,args);
});
update_form.cljs$core$IFn$_invoke$arity$variadic = update_form__delegate;
return update_form;
})()
;
/**
* Takes cursor, schema, vector of keywords and new value.
* 
* If new value is nil, schema is checked if value is in optional-key,
* value it is, instead of setting value to nil, the key is dissoced.
*/
lomakkeet.fields.change_value = (function change_value(value_cursor,schema__$1,ks,value){
if(cljs.core.truth_(value)){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(value_cursor,ks,value);
} else {
var schema__$2 = lomakkeet.fields.get_in_schema(schema__$1,cljs.core.butlast(ks));
if(cljs.core.contains_QMARK_(schema__$2,schema.core.optional_key(cljs.core.last(ks)))){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(value_cursor,((function (schema__$2){
return (function (p1__23032_SHARP_){
return lomakkeet.fields.dissoc_in(p1__23032_SHARP_,ks);
});})(schema__$2))
);
} else {
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(value_cursor,ks,value);
}
}
});

var ufv___23373 = schema.utils.use_fn_validation;
var output_schema23034_23374 = schema.core.Any;
var input_schema23035_23375 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(lomakkeet.fields.FormState,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23036_23376 = schema.core.checker(input_schema23035_23375);
var output_checker23037_23377 = schema.core.checker(output_schema23034_23374);
/**
* Inputs: [{:keys [value initial-value], :as form-state} :- FormState owner {:keys [actions render-fn form form-validation-fn after-change], :as opts}]
*/
lomakkeet.fields.form = ((function (ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function form(G__23038,G__23039,G__23040){
var validate__12581__auto__ = ufv___23373.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___23378 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23038,G__23039,G__23040], null);
var temp__4126__auto___23379 = (function (){var G__23207 = args__12582__auto___23378;
return (input_checker23036_23376.cljs$core$IFn$_invoke$arity$1 ? input_checker23036_23376.cljs$core$IFn$_invoke$arity$1(G__23207) : input_checker23036_23376.call(null,G__23207));
})();
if(cljs.core.truth_(temp__4126__auto___23379)){
var error__12583__auto___23380 = temp__4126__auto___23379;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23380], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23380,cljs.core.constant$keyword$66,args__12582__auto___23378,cljs.core.constant$keyword$67,input_schema23035_23375,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__23210 = G__23038;
var map__23212 = G__23210;
var map__23212__$1 = ((cljs.core.seq_QMARK_(map__23212))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23212):map__23212);
var form_state = map__23212__$1;
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23212__$1,cljs.core.constant$keyword$162);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23212__$1,cljs.core.constant$keyword$66);
var owner = G__23039;
var G__23211 = G__23040;
var map__23213 = G__23211;
var map__23213__$1 = ((cljs.core.seq_QMARK_(map__23213))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23213):map__23213);
var opts = map__23213__$1;
var after_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213__$1,cljs.core.constant$keyword$163);
var form_validation_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213__$1,cljs.core.constant$keyword$164);
var form__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213__$1,cljs.core.constant$keyword$143);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213__$1,cljs.core.constant$keyword$165);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213__$1,cljs.core.constant$keyword$166);
var G__23210__$1 = G__23210;
var owner__$1 = owner;
var G__23211__$1 = G__23211;
while(true){
var map__23214 = G__23210__$1;
var map__23214__$1 = ((cljs.core.seq_QMARK_(map__23214))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23214):map__23214);
var form_state__$1 = map__23214__$1;
var initial_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23214__$1,cljs.core.constant$keyword$162);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23214__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__23215 = G__23211__$1;
var map__23215__$1 = ((cljs.core.seq_QMARK_(map__23215))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23215):map__23215);
var opts__$1 = map__23215__$1;
var after_change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215__$1,cljs.core.constant$keyword$163);
var form_validation_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215__$1,cljs.core.constant$keyword$164);
var form__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215__$1,cljs.core.constant$keyword$143);
var render_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215__$1,cljs.core.constant$keyword$165);
var actions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215__$1,cljs.core.constant$keyword$166);
if(typeof lomakkeet.fields.t23216 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t23216 = (function (form,after_change,owner,validate__12581__auto__,G__23039,map__23212,form_validation_fn,input_checker23036,form_state,G__23040,G__23038,render_fn,map__23214,output_checker23037,value,output_schema23034,map__23213,actions,G__23210,G__23211,map__23215,opts,initial_value,ufv__,input_schema23035,meta23217){
this.form = form;
this.after_change = after_change;
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.G__23039 = G__23039;
this.map__23212 = map__23212;
this.form_validation_fn = form_validation_fn;
this.input_checker23036 = input_checker23036;
this.form_state = form_state;
this.G__23040 = G__23040;
this.G__23038 = G__23038;
this.render_fn = render_fn;
this.map__23214 = map__23214;
this.output_checker23037 = output_checker23037;
this.value = value;
this.output_schema23034 = output_schema23034;
this.map__23213 = map__23213;
this.actions = actions;
this.G__23210 = G__23210;
this.G__23211 = G__23211;
this.map__23215 = map__23215;
this.opts = opts;
this.initial_value = initial_value;
this.ufv__ = ufv__;
this.input_schema23035 = input_schema23035;
this.meta23217 = meta23217;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t23216.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t23216.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function (_){
var self__ = this;
var ___$1 = this;
return "form";
});})(map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
;

lomakkeet.fields.t23216.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t23216.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function (_,form__$1){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__23219 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$153,self__.form_state,cljs.core.constant$keyword$66,(function (){var G__23220 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23220) : cljs.core.deref.call(null,G__23220));
})(),cljs.core.constant$keyword$162,(function (){var G__23221 = self__.initial_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23221) : cljs.core.deref.call(null,G__23221));
})(),cljs.core.constant$keyword$143,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,cljs.core.constant$keyword$153,self__.form_state),cljs.core.constant$keyword$147,cljs.core.constant$keyword$147.cljs$core$IFn$_invoke$arity$1(form__$1)], null);
return (self__.render_fn.cljs$core$IFn$_invoke$arity$1 ? self__.render_fn.cljs$core$IFn$_invoke$arity$1(G__23219) : self__.render_fn.call(null,G__23219));
})());
});})(map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
;

lomakkeet.fields.t23216.prototype.om$core$IWillMount$ = true;

lomakkeet.fields.t23216.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function (_){
var self__ = this;
var ___$1 = this;
var schema__$1 = (cljs.core.truth_(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(self__.form_state))?(function (){var G__23223 = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(self__.form_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23223) : cljs.core.deref.call(null,G__23223));
})():null);
var map__23222 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
var map__23222__$1 = ((cljs.core.seq_QMARK_(map__23222))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23222):map__23222);
var coercion_matcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23222__$1,cljs.core.constant$keyword$167);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23222__$1,cljs.core.constant$keyword$147);
var c__16627__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto__,schema__$1,map__23222,map__23222__$1,coercion_matcher,ch,___$1,map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto__,schema__$1,map__23222,map__23222__$1,coercion_matcher,ch,___$1,map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function (state_23304){
var state_val_23305 = (state_23304[(1)]);
if((state_val_23305 === (7))){
var inst_23232 = (state_23304[(7)]);
var inst_23226 = (state_23304[(8)]);
var inst_23229 = (state_23304[(9)]);
var inst_23231 = (function (){var G__23306 = self__.form_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23306) : cljs.core.deref.call(null,G__23306));
})();
var inst_23232__$1 = (function (){var G__23307 = inst_23231;
var G__23308 = inst_23226;
return (inst_23229.cljs$core$IFn$_invoke$arity$2 ? inst_23229.cljs$core$IFn$_invoke$arity$2(G__23307,G__23308) : inst_23229.call(null,G__23307,G__23308));
})();
var inst_23233 = lomakkeet.fields.chan_QMARK_(inst_23232__$1);
var state_23304__$1 = (function (){var statearr_23309 = state_23304;
(statearr_23309[(7)] = inst_23232__$1);

return statearr_23309;
})();
if(inst_23233){
var statearr_23310_23381 = state_23304__$1;
(statearr_23310_23381[(1)] = (10));

} else {
var statearr_23311_23382 = state_23304__$1;
(statearr_23311_23382[(1)] = (11));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (20))){
var state_23304__$1 = state_23304;
var statearr_23312_23383 = state_23304__$1;
(statearr_23312_23383[(2)] = null);

(statearr_23312_23383[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (27))){
var inst_23291 = (state_23304[(10)]);
var inst_23297 = (state_23304[(2)]);
var inst_23298 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23291,inst_23297], 0));
var inst_23299 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.form_state,cljs.core.constant$keyword$154,inst_23298);
var state_23304__$1 = (function (){var statearr_23313 = state_23304;
(statearr_23313[(11)] = inst_23299);

return statearr_23313;
})();
var statearr_23314_23384 = state_23304__$1;
(statearr_23314_23384[(2)] = null);

(statearr_23314_23384[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (1))){
var state_23304__$1 = state_23304;
var statearr_23315_23385 = state_23304__$1;
(statearr_23315_23385[(2)] = null);

(statearr_23315_23385[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (24))){
var inst_23291 = (state_23304[(2)]);
var state_23304__$1 = (function (){var statearr_23316 = state_23304;
(statearr_23316[(10)] = inst_23291);

return statearr_23316;
})();
if(cljs.core.truth_(schema__$1)){
var statearr_23317_23386 = state_23304__$1;
(statearr_23317_23386[(1)] = (25));

} else {
var statearr_23318_23387 = state_23304__$1;
(statearr_23318_23387[(1)] = (26));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (4))){
var inst_23226 = (state_23304[(8)]);
var inst_23226__$1 = (state_23304[(2)]);
var inst_23227 = (function (){var G__23319 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23319) : cljs.core.deref.call(null,G__23319));
})();
var inst_23274 = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(inst_23226__$1);
var state_23304__$1 = (function (){var statearr_23320 = state_23304;
(statearr_23320[(8)] = inst_23226__$1);

(statearr_23320[(12)] = inst_23227);

return statearr_23320;
})();
var G__23321_23388 = (((inst_23274 instanceof cljs.core.Keyword))?inst_23274.fqn:null);
switch (G__23321_23388) {
case "change":
var statearr_23322_23390 = state_23304__$1;
(statearr_23322_23390[(1)] = (14));


break;
case "cancel":
var statearr_23323_23391 = state_23304__$1;
(statearr_23323_23391[(1)] = (13));


break;
case "action":
var statearr_23324_23392 = state_23304__$1;
(statearr_23324_23392[(1)] = (6));


break;
default:
var statearr_23325_23393 = state_23304__$1;
(statearr_23325_23393[(1)] = (18));



}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (15))){
var inst_23226 = (state_23304[(8)]);
var inst_23260 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23226);
var state_23304__$1 = state_23304;
var statearr_23326_23394 = state_23304__$1;
(statearr_23326_23394[(2)] = inst_23260);

(statearr_23326_23394[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (21))){
var inst_23285 = (state_23304[(2)]);
var state_23304__$1 = (function (){var statearr_23327 = state_23304;
(statearr_23327[(13)] = inst_23285);

return statearr_23327;
})();
if(cljs.core.truth_(self__.form_validation_fn)){
var statearr_23328_23395 = state_23304__$1;
(statearr_23328_23395[(1)] = (22));

} else {
var statearr_23329_23396 = state_23304__$1;
(statearr_23329_23396[(1)] = (23));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (13))){
var inst_23255 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,lomakkeet.fields.cancel_form);
var state_23304__$1 = state_23304;
var statearr_23330_23397 = state_23304__$1;
(statearr_23330_23397[(2)] = inst_23255);

(statearr_23330_23397[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (22))){
var inst_23287 = (function (){var G__23331 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23331) : cljs.core.deref.call(null,G__23331));
})();
var inst_23288 = (function (){var G__23332 = inst_23287;
return (self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1 ? self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1(G__23332) : self__.form_validation_fn.call(null,G__23332));
})();
var state_23304__$1 = state_23304;
var statearr_23333_23398 = state_23304__$1;
(statearr_23333_23398[(2)] = inst_23288);

(statearr_23333_23398[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (6))){
var inst_23226 = (state_23304[(8)]);
var inst_23229 = (state_23304[(9)]);
var inst_23228 = cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(inst_23226);
var inst_23229__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.actions,inst_23228);
var state_23304__$1 = (function (){var statearr_23334 = state_23304;
(statearr_23334[(9)] = inst_23229__$1);

return statearr_23334;
})();
if(cljs.core.truth_(inst_23229__$1)){
var statearr_23335_23399 = state_23304__$1;
(statearr_23335_23399[(1)] = (7));

} else {
var statearr_23336_23400 = state_23304__$1;
(statearr_23336_23400[(1)] = (8));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (25))){
var inst_23293 = (function (){var G__23337 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23337) : cljs.core.deref.call(null,G__23337));
})();
var inst_23294 = schema.core.check(schema__$1,inst_23293);
var state_23304__$1 = state_23304;
var statearr_23338_23401 = state_23304__$1;
(statearr_23338_23401[(2)] = inst_23294);

(statearr_23338_23401[(1)] = (27));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (17))){
var inst_23226 = (state_23304[(8)]);
var inst_23263 = (state_23304[(2)]);
var inst_23264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23263,cljs.core.constant$keyword$146);
var inst_23265 = lomakkeet.fields.get_in_schema(schema__$1,inst_23264);
var inst_23266 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_23226);
var inst_23267 = lomakkeet.fields.coerce(coercion_matcher,inst_23265,inst_23266);
var inst_23268 = lomakkeet.fields.change_value(self__.value,schema__$1,inst_23264,inst_23267);
var state_23304__$1 = state_23304;
var statearr_23339_23402 = state_23304__$1;
(statearr_23339_23402[(2)] = inst_23268);

(statearr_23339_23402[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (3))){
var inst_23302 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23304__$1,inst_23302);
} else {
if((state_val_23305 === (12))){
var inst_23247 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
var statearr_23340_23403 = state_23304__$1;
(statearr_23340_23403[(2)] = inst_23247);

(statearr_23340_23403[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (2))){
var state_23304__$1 = state_23304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23304__$1,(4),ch);
} else {
if((state_val_23305 === (23))){
var state_23304__$1 = state_23304;
var statearr_23341_23404 = state_23304__$1;
(statearr_23341_23404[(2)] = null);

(statearr_23341_23404[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (19))){
var inst_23227 = (state_23304[(12)]);
var inst_23278 = [cljs.core.constant$keyword$153,cljs.core.constant$keyword$66,cljs.core.constant$keyword$168,cljs.core.constant$keyword$169];
var inst_23279 = (function (){var G__23342 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23342) : cljs.core.deref.call(null,G__23342));
})();
var inst_23280 = [self__.form_state,inst_23279,self__.value,inst_23227];
var inst_23281 = cljs.core.PersistentHashMap.fromArrays(inst_23278,inst_23280);
var inst_23282 = (function (){var G__23343 = inst_23281;
return (self__.after_change.cljs$core$IFn$_invoke$arity$1 ? self__.after_change.cljs$core$IFn$_invoke$arity$1(G__23343) : self__.after_change.call(null,G__23343));
})();
var state_23304__$1 = state_23304;
var statearr_23344_23405 = state_23304__$1;
(statearr_23344_23405[(2)] = inst_23282);

(statearr_23344_23405[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (11))){
var inst_23232 = (state_23304[(7)]);
var inst_23245 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_23232);
var state_23304__$1 = state_23304;
var statearr_23345_23406 = state_23304__$1;
(statearr_23345_23406[(2)] = inst_23245);

(statearr_23345_23406[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (9))){
var inst_23253 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
var statearr_23346_23407 = state_23304__$1;
(statearr_23346_23407[(2)] = inst_23253);

(statearr_23346_23407[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (5))){
var inst_23276 = (state_23304[(2)]);
var state_23304__$1 = (function (){var statearr_23347 = state_23304;
(statearr_23347[(14)] = inst_23276);

return statearr_23347;
})();
if(cljs.core.truth_(self__.after_change)){
var statearr_23348_23408 = state_23304__$1;
(statearr_23348_23408[(1)] = (19));

} else {
var statearr_23349_23409 = state_23304__$1;
(statearr_23349_23409[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (14))){
var inst_23226 = (state_23304[(8)]);
var inst_23258 = cljs.core.seq_QMARK_(inst_23226);
var state_23304__$1 = state_23304;
if(inst_23258){
var statearr_23350_23410 = state_23304__$1;
(statearr_23350_23410[(1)] = (15));

} else {
var statearr_23351_23411 = state_23304__$1;
(statearr_23351_23411[(1)] = (16));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (26))){
var state_23304__$1 = state_23304;
var statearr_23352_23412 = state_23304__$1;
(statearr_23352_23412[(2)] = null);

(statearr_23352_23412[(1)] = (27));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (16))){
var inst_23226 = (state_23304[(8)]);
var state_23304__$1 = state_23304;
var statearr_23353_23413 = state_23304__$1;
(statearr_23353_23413[(2)] = inst_23226);

(statearr_23353_23413[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (10))){
var inst_23232 = (state_23304[(7)]);
var inst_23226 = (state_23304[(8)]);
var inst_23227 = (state_23304[(12)]);
var inst_23229 = (state_23304[(9)]);
var inst_23241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23242 = (function (){var c__16627__auto____$1 = inst_23241;
var next = inst_23232;
var action_fn = inst_23229;
var temp__4124__auto__ = inst_23229;
var prev_value = inst_23227;
var evt = inst_23226;
return ((function (c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23232,inst_23226,inst_23227,inst_23229,inst_23241,state_val_23305,c__16627__auto__,schema__$1,map__23222,map__23222__$1,coercion_matcher,ch,___$1,map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23232,inst_23226,inst_23227,inst_23229,inst_23241,state_val_23305,c__16627__auto__,schema__$1,map__23222,map__23222__$1,coercion_matcher,ch,___$1,map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function (state_23239){
var state_val_23240 = (state_23239[(1)]);
if((state_val_23240 === (2))){
var inst_23236 = (state_23239[(2)]);
var inst_23237 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_23236);
var state_23239__$1 = state_23239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23239__$1,inst_23237);
} else {
if((state_val_23240 === (1))){
var state_23239__$1 = state_23239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23239__$1,(2),next);
} else {
return null;
}
}
});})(c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23232,inst_23226,inst_23227,inst_23229,inst_23241,state_val_23305,c__16627__auto__,schema__$1,map__23222,map__23222__$1,coercion_matcher,ch,___$1,map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
;
return ((function (switch__16547__auto__,c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23232,inst_23226,inst_23227,inst_23229,inst_23241,state_val_23305,c__16627__auto__,schema__$1,map__23222,map__23222__$1,coercion_matcher,ch,___$1,map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_23357 = [null,null,null,null,null,null,null];
(statearr_23357[(0)] = state_machine__16548__auto__);

(statearr_23357[(1)] = (1));

return statearr_23357;
});
var state_machine__16548__auto____1 = (function (state_23239){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_23239);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e23358){if((e23358 instanceof Object)){
var ex__16551__auto__ = e23358;
var statearr_23359_23414 = state_23239;
(statearr_23359_23414[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23239);

return cljs.core.constant$keyword$99;
} else {
throw e23358;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__23415 = state_23239;
state_23239 = G__23415;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_23239){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_23239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23232,inst_23226,inst_23227,inst_23229,inst_23241,state_val_23305,c__16627__auto__,schema__$1,map__23222,map__23222__$1,coercion_matcher,ch,___$1,map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
})();
var state__16629__auto__ = (function (){var statearr_23360 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_23360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto____$1);

return statearr_23360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});
;})(c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23232,inst_23226,inst_23227,inst_23229,inst_23241,state_val_23305,c__16627__auto__,schema__$1,map__23222,map__23222__$1,coercion_matcher,ch,___$1,map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
})();
var inst_23243 = cljs.core.async.impl.dispatch.run(inst_23242);
var state_23304__$1 = (function (){var statearr_23361 = state_23304;
(statearr_23361[(15)] = inst_23243);

return statearr_23361;
})();
var statearr_23362_23416 = state_23304__$1;
(statearr_23362_23416[(2)] = inst_23241);

(statearr_23362_23416[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (18))){
var inst_23226 = (state_23304[(8)]);
var inst_23270 = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(inst_23226);
var inst_23271 = [cljs.core.str("Unknown event-type: "),cljs.core.str(inst_23270)].join('');
var inst_23272 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23271], 0));
var state_23304__$1 = state_23304;
var statearr_23363_23417 = state_23304__$1;
(statearr_23363_23417[(2)] = inst_23272);

(statearr_23363_23417[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23305 === (8))){
var inst_23226 = (state_23304[(8)]);
var inst_23249 = cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(inst_23226);
var inst_23250 = [cljs.core.str("WARNING: "),cljs.core.str(inst_23249),cljs.core.str(" is unknown")].join('');
var inst_23251 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23250], 0));
var state_23304__$1 = state_23304;
var statearr_23364_23418 = state_23304__$1;
(statearr_23364_23418[(2)] = inst_23251);

(statearr_23364_23418[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16627__auto__,schema__$1,map__23222,map__23222__$1,coercion_matcher,ch,___$1,map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
;
return ((function (switch__16547__auto__,c__16627__auto__,schema__$1,map__23222,map__23222__$1,coercion_matcher,ch,___$1,map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_23368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23368[(0)] = state_machine__16548__auto__);

(statearr_23368[(1)] = (1));

return statearr_23368;
});
var state_machine__16548__auto____1 = (function (state_23304){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_23304);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e23369){if((e23369 instanceof Object)){
var ex__16551__auto__ = e23369;
var statearr_23370_23419 = state_23304;
(statearr_23370_23419[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23304);

return cljs.core.constant$keyword$99;
} else {
throw e23369;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__23420 = state_23304;
state_23304 = G__23420;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_23304){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_23304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__,schema__$1,map__23222,map__23222__$1,coercion_matcher,ch,___$1,map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
})();
var state__16629__auto__ = (function (){var statearr_23371 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_23371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_23371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto__,schema__$1,map__23222,map__23222__$1,coercion_matcher,ch,___$1,map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
);

return c__16627__auto__;
});})(map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
;

lomakkeet.fields.t23216.prototype.om$core$IInitState$ = true;

lomakkeet.fields.t23216.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function (_){
var self__ = this;
var ___$1 = this;
if((schema.core.check(lomakkeet.fields.FormState,self__.form_state) == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"FormState","FormState",834878066,null),new cljs.core.Symbol(null,"form-state","form-state",-256843510,null)))], 0)))].join('')));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$147,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$152,lomakkeet.fields.default_form_group,cljs.core.constant$keyword$167,schema.coerce.json_coercion_matcher], null),self__.form], 0));
});})(map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
;

lomakkeet.fields.t23216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function (_23218){
var self__ = this;
var _23218__$1 = this;
return self__.meta23217;
});})(map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
;

lomakkeet.fields.t23216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function (_23218,meta23217__$1){
var self__ = this;
var _23218__$1 = this;
return (new lomakkeet.fields.t23216(self__.form,self__.after_change,self__.owner,self__.validate__12581__auto__,self__.G__23039,self__.map__23212,self__.form_validation_fn,self__.input_checker23036,self__.form_state,self__.G__23040,self__.G__23038,self__.render_fn,self__.map__23214,self__.output_checker23037,self__.value,self__.output_schema23034,self__.map__23213,self__.actions,self__.G__23210,self__.G__23211,self__.map__23215,self__.opts,self__.initial_value,self__.ufv__,self__.input_schema23035,meta23217__$1));
});})(map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
;

lomakkeet.fields.t23216.cljs$lang$type = true;

lomakkeet.fields.t23216.cljs$lang$ctorStr = "lomakkeet.fields/t23216";

lomakkeet.fields.t23216.cljs$lang$ctorPrWriter = ((function (map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t23216");
});})(map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
;

lomakkeet.fields.__GT_t23216 = ((function (map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377){
return (function __GT_t23216(form__$3,after_change__$2,owner__$3,validate__12581__auto____$1,G__23039__$1,map__23212__$2,form_validation_fn__$2,input_checker23036__$1,form_state__$2,G__23040__$1,G__23038__$1,render_fn__$2,map__23214__$2,output_checker23037__$1,value__$2,output_schema23034__$1,map__23213__$2,actions__$2,G__23210__$2,G__23211__$2,map__23215__$2,opts__$2,initial_value__$2,ufv____$1,input_schema23035__$1,meta23217){
return (new lomakkeet.fields.t23216(form__$3,after_change__$2,owner__$3,validate__12581__auto____$1,G__23039__$1,map__23212__$2,form_validation_fn__$2,input_checker23036__$1,form_state__$2,G__23040__$1,G__23038__$1,render_fn__$2,map__23214__$2,output_checker23037__$1,value__$2,output_schema23034__$1,map__23213__$2,actions__$2,G__23210__$2,G__23211__$2,map__23215__$2,opts__$2,initial_value__$2,ufv____$1,input_schema23035__$1,meta23217));
});})(map__23214,map__23214__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23215,map__23215__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23210,map__23212,map__23212__$1,form_state,initial_value,value,owner,G__23211,map__23213,map__23213__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
;

}

return (new lomakkeet.fields.t23216(form__$2,after_change__$1,owner__$2,validate__12581__auto__,G__23039,map__23212__$1,form_validation_fn__$1,input_checker23036_23376,form_state__$1,G__23040,G__23038,render_fn__$1,map__23214__$1,output_checker23037_23377,value__$1,output_schema23034_23374,map__23213__$1,actions__$1,G__23210__$1,G__23211__$1,map__23215__$1,opts__$1,initial_value__$1,ufv___23373,input_schema23035_23375,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___23421 = (function (){var G__23372 = o__12584__auto__;
return (output_checker23037_23377.cljs$core$IFn$_invoke$arity$1 ? output_checker23037_23377.cljs$core$IFn$_invoke$arity$1(G__23372) : output_checker23037_23377.call(null,G__23372));
})();
if(cljs.core.truth_(temp__4126__auto___23421)){
var error__12583__auto___23422 = temp__4126__auto___23421;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23422], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23422,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema23034_23374,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___23373,output_schema23034_23374,input_schema23035_23375,input_checker23036_23376,output_checker23037_23377))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.form),schema.core.make_fn_schema(output_schema23034_23374,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23035_23375], null)));

lomakkeet.fields.__GT_form = (function() {
var __GT_form = null;
var __GT_form__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.form,cursor__20832__auto__);
});
var __GT_form__2 = (function (cursor__20832__auto__,m23033){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,cursor__20832__auto__,m23033);
});
__GT_form = function(cursor__20832__auto__,m23033){
switch(arguments.length){
case 1:
return __GT_form__1.call(this,cursor__20832__auto__);
case 2:
return __GT_form__2.call(this,cursor__20832__auto__,m23033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_form.cljs$core$IFn$_invoke$arity$1 = __GT_form__1;
__GT_form.cljs$core$IFn$_invoke$arity$2 = __GT_form__2;
return __GT_form;
})()
;
lomakkeet.fields.dirty_QMARK_ = (function dirty_QMARK_(form_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(form_state),cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(form_state));
});
lomakkeet.fields.errors_QMARK_ = (function errors_QMARK_(form_state){
return cljs.core.seq(cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(form_state));
});
