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
var get_in_schema__delegate = function (schema__$1,ks,p__22718){
var vec__22720 = p__22718;
var not_found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22720,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22720,not_found){
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
});})(vec__22720,not_found))
,schema__$1,ks);
};
var get_in_schema = function (schema__$1,ks,var_args){
var p__22718 = null;
if (arguments.length > 2) {
var G__22721__i = 0, G__22721__a = new Array(arguments.length -  2);
while (G__22721__i < G__22721__a.length) {G__22721__a[G__22721__i] = arguments[G__22721__i + 2]; ++G__22721__i;}
  p__22718 = new cljs.core.IndexedSeq(G__22721__a,0);
} 
return get_in_schema__delegate.call(this,schema__$1,ks,p__22718);};
get_in_schema.cljs$lang$maxFixedArity = 2;
get_in_schema.cljs$lang$applyTo = (function (arglist__22722){
var schema__$1 = cljs.core.first(arglist__22722);
arglist__22722 = cljs.core.next(arglist__22722);
var ks = cljs.core.first(arglist__22722);
var p__22718 = cljs.core.rest(arglist__22722);
return get_in_schema__delegate(schema__$1,ks,p__22718);
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
lomakkeet.fields.dissoc_in = (function dissoc_in(m,p__22723){
var vec__22727 = p__22723;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22727,(0),null);
var ks = cljs.core.nthnext(vec__22727,(1));
var keys = vec__22727;
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
lomakkeet.fields.empty_cb = (function empty_cb(p__22728){
var map__22730 = p__22728;
var map__22730__$1 = ((cljs.core.seq_QMARK_(map__22730))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22730):map__22730);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22730__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22730__$1,cljs.core.constant$keyword$147);
return ((function (map__22730,map__22730__$1,ks,ch){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$66,null,cljs.core.constant$keyword$146,ks], null));
});
;})(map__22730,map__22730__$1,ks,ch))
});

var ufv___22775 = schema.utils.use_fn_validation;
var output_schema22732_22776 = schema.core.Any;
var input_schema22733_22777 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22734_22778 = schema.core.checker(input_schema22733_22777);
var output_checker22735_22779 = schema.core.checker(output_schema22732_22776);
/**
* Inputs: [state owner {:keys [real-input], :as opts}]
*/
lomakkeet.fields.emptyable_input = ((function (ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779){
return (function emptyable_input(G__22736,G__22737,G__22738){
var validate__12581__auto__ = ufv___22775.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22780 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22736,G__22737,G__22738], null);
var temp__4126__auto___22781 = (function (){var G__22757 = args__12582__auto___22780;
return (input_checker22734_22778.cljs$core$IFn$_invoke$arity$1 ? input_checker22734_22778.cljs$core$IFn$_invoke$arity$1(G__22757) : input_checker22734_22778.call(null,G__22757));
})();
if(cljs.core.truth_(temp__4126__auto___22781)){
var error__12583__auto___22782 = temp__4126__auto___22781;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22782], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22782,cljs.core.constant$keyword$66,args__12582__auto___22780,cljs.core.constant$keyword$67,input_schema22733_22777,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var state = G__22736;
var owner = G__22737;
var G__22759 = G__22738;
var map__22760 = G__22759;
var map__22760__$1 = ((cljs.core.seq_QMARK_(map__22760))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22760):map__22760);
var opts = map__22760__$1;
var real_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22760__$1,cljs.core.constant$keyword$149);
var state__$1 = state;
var owner__$1 = owner;
var G__22759__$1 = G__22759;
while(true){
var state__$2 = state__$1;
var owner__$2 = owner__$1;
var map__22761 = G__22759__$1;
var map__22761__$1 = ((cljs.core.seq_QMARK_(map__22761))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22761):map__22761);
var opts__$1 = map__22761__$1;
var real_input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22761__$1,cljs.core.constant$keyword$149);
if(typeof lomakkeet.fields.t22762 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22762 = (function (G__22736,input_checker22734,owner,map__22761,validate__12581__auto__,emptyable_input,G__22737,input_schema22733,output_checker22735,real_input,state,output_schema22732,map__22760,opts,ufv__,G__22759,G__22738,meta22763){
this.G__22736 = G__22736;
this.input_checker22734 = input_checker22734;
this.owner = owner;
this.map__22761 = map__22761;
this.validate__12581__auto__ = validate__12581__auto__;
this.emptyable_input = emptyable_input;
this.G__22737 = G__22737;
this.input_schema22733 = input_schema22733;
this.output_checker22735 = output_checker22735;
this.real_input = real_input;
this.state = state;
this.output_schema22732 = output_schema22732;
this.map__22760 = map__22760;
this.opts = opts;
this.ufv__ = ufv__;
this.G__22759 = G__22759;
this.G__22738 = G__22738;
this.meta22763 = meta22763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22762.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22762.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state__$2,owner__$2,map__22761,map__22761__$1,opts__$1,real_input__$1,state,owner,G__22759,map__22760,map__22760__$1,opts,real_input,validate__12581__auto__,ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779){
return (function (_){
var self__ = this;
var ___$1 = this;
return "emptyable-input";
});})(state__$2,owner__$2,map__22761,map__22761__$1,opts__$1,real_input__$1,state,owner,G__22759,map__22760,map__22760__$1,opts,real_input,validate__12581__auto__,ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779))
;

lomakkeet.fields.t22762.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22762.prototype.om$core$IRenderState$render_state$arity$2 = ((function (state__$2,owner__$2,map__22761,map__22761__$1,opts__$1,real_input__$1,state,owner,G__22759,map__22760,map__22760__$1,opts,real_input,validate__12581__auto__,ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var attrs22765 = om.core.build.cljs$core$IFn$_invoke$arity$3(self__.real_input,self__.state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,self__.opts,cljs.core.constant$keyword$53,s], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22765))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-group"], null)], null),attrs22765], 0))):{"className": "input-group"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22765))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22766 = {"className": "input-group-btn"};
var G__22767 = (function (){var G__22768 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22769 = "\u00D7";
return React.DOM.button(G__22768,G__22769);
})();
return React.DOM.span(G__22766,G__22767);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22765),(function (){var G__22770 = {"className": "input-group-btn"};
var G__22771 = (function (){var G__22772 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22773 = "\u00D7";
return React.DOM.button(G__22772,G__22773);
})();
return React.DOM.span(G__22770,G__22771);
})()], null))));
});})(state__$2,owner__$2,map__22761,map__22761__$1,opts__$1,real_input__$1,state,owner,G__22759,map__22760,map__22760__$1,opts,real_input,validate__12581__auto__,ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779))
;

lomakkeet.fields.t22762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state__$2,owner__$2,map__22761,map__22761__$1,opts__$1,real_input__$1,state,owner,G__22759,map__22760,map__22760__$1,opts,real_input,validate__12581__auto__,ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779){
return (function (_22764){
var self__ = this;
var _22764__$1 = this;
return self__.meta22763;
});})(state__$2,owner__$2,map__22761,map__22761__$1,opts__$1,real_input__$1,state,owner,G__22759,map__22760,map__22760__$1,opts,real_input,validate__12581__auto__,ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779))
;

lomakkeet.fields.t22762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state__$2,owner__$2,map__22761,map__22761__$1,opts__$1,real_input__$1,state,owner,G__22759,map__22760,map__22760__$1,opts,real_input,validate__12581__auto__,ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779){
return (function (_22764,meta22763__$1){
var self__ = this;
var _22764__$1 = this;
return (new lomakkeet.fields.t22762(self__.G__22736,self__.input_checker22734,self__.owner,self__.map__22761,self__.validate__12581__auto__,self__.emptyable_input,self__.G__22737,self__.input_schema22733,self__.output_checker22735,self__.real_input,self__.state,self__.output_schema22732,self__.map__22760,self__.opts,self__.ufv__,self__.G__22759,self__.G__22738,meta22763__$1));
});})(state__$2,owner__$2,map__22761,map__22761__$1,opts__$1,real_input__$1,state,owner,G__22759,map__22760,map__22760__$1,opts,real_input,validate__12581__auto__,ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779))
;

lomakkeet.fields.t22762.cljs$lang$type = true;

lomakkeet.fields.t22762.cljs$lang$ctorStr = "lomakkeet.fields/t22762";

lomakkeet.fields.t22762.cljs$lang$ctorPrWriter = ((function (state__$2,owner__$2,map__22761,map__22761__$1,opts__$1,real_input__$1,state,owner,G__22759,map__22760,map__22760__$1,opts,real_input,validate__12581__auto__,ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22762");
});})(state__$2,owner__$2,map__22761,map__22761__$1,opts__$1,real_input__$1,state,owner,G__22759,map__22760,map__22760__$1,opts,real_input,validate__12581__auto__,ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779))
;

lomakkeet.fields.__GT_t22762 = ((function (state__$2,owner__$2,map__22761,map__22761__$1,opts__$1,real_input__$1,state,owner,G__22759,map__22760,map__22760__$1,opts,real_input,validate__12581__auto__,ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779){
return (function __GT_t22762(G__22736__$1,input_checker22734__$1,owner__$3,map__22761__$2,validate__12581__auto____$1,emptyable_input__$1,G__22737__$1,input_schema22733__$1,output_checker22735__$1,real_input__$2,state__$3,output_schema22732__$1,map__22760__$2,opts__$2,ufv____$1,G__22759__$2,G__22738__$1,meta22763){
return (new lomakkeet.fields.t22762(G__22736__$1,input_checker22734__$1,owner__$3,map__22761__$2,validate__12581__auto____$1,emptyable_input__$1,G__22737__$1,input_schema22733__$1,output_checker22735__$1,real_input__$2,state__$3,output_schema22732__$1,map__22760__$2,opts__$2,ufv____$1,G__22759__$2,G__22738__$1,meta22763));
});})(state__$2,owner__$2,map__22761,map__22761__$1,opts__$1,real_input__$1,state,owner,G__22759,map__22760,map__22760__$1,opts,real_input,validate__12581__auto__,ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779))
;

}

return (new lomakkeet.fields.t22762(G__22736,input_checker22734_22778,owner__$2,map__22761__$1,validate__12581__auto__,emptyable_input,G__22737,input_schema22733_22777,output_checker22735_22779,real_input__$1,state__$2,output_schema22732_22776,map__22760__$1,opts__$1,ufv___22775,G__22759__$1,G__22738,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22783 = (function (){var G__22774 = o__12584__auto__;
return (output_checker22735_22779.cljs$core$IFn$_invoke$arity$1 ? output_checker22735_22779.cljs$core$IFn$_invoke$arity$1(G__22774) : output_checker22735_22779.call(null,G__22774));
})();
if(cljs.core.truth_(temp__4126__auto___22783)){
var error__12583__auto___22784 = temp__4126__auto___22783;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22784], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22784,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22732_22776,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22775,output_schema22732_22776,input_schema22733_22777,input_checker22734_22778,output_checker22735_22779))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.emptyable_input),schema.core.make_fn_schema(output_schema22732_22776,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22733_22777], null)));

lomakkeet.fields.__GT_emptyable_input = (function() {
var __GT_emptyable_input = null;
var __GT_emptyable_input__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.emptyable_input,cursor__20832__auto__);
});
var __GT_emptyable_input__2 = (function (cursor__20832__auto__,m22731){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.emptyable_input,cursor__20832__auto__,m22731);
});
__GT_emptyable_input = function(cursor__20832__auto__,m22731){
switch(arguments.length){
case 1:
return __GT_emptyable_input__1.call(this,cursor__20832__auto__);
case 2:
return __GT_emptyable_input__2.call(this,cursor__20832__auto__,m22731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$1 = __GT_emptyable_input__1;
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$2 = __GT_emptyable_input__2;
return __GT_emptyable_input;
})()
;

var ufv___22837 = schema.utils.use_fn_validation;
var output_schema22786_22838 = schema.core.Any;
var input_schema22787_22839 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22788_22840 = schema.core.checker(input_schema22787_22839);
var output_checker22789_22841 = schema.core.checker(output_schema22786_22838);
/**
* Inputs: [{:keys [error], :as input-state} owner {:keys [input label size help-text], :or {size 6}, :as opts}]
*/
lomakkeet.fields.default_form_group = ((function (ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841){
return (function default_form_group(G__22790,G__22791,G__22792){
var validate__12581__auto__ = ufv___22837.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22842 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22790,G__22791,G__22792], null);
var temp__4126__auto___22843 = (function (){var G__22815 = args__12582__auto___22842;
return (input_checker22788_22840.cljs$core$IFn$_invoke$arity$1 ? input_checker22788_22840.cljs$core$IFn$_invoke$arity$1(G__22815) : input_checker22788_22840.call(null,G__22815));
})();
if(cljs.core.truth_(temp__4126__auto___22843)){
var error__12583__auto___22844 = temp__4126__auto___22843;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22844], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22844,cljs.core.constant$keyword$66,args__12582__auto___22842,cljs.core.constant$keyword$67,input_schema22787_22839,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22818 = G__22790;
var map__22820 = G__22818;
var map__22820__$1 = ((cljs.core.seq_QMARK_(map__22820))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22820):map__22820);
var input_state = map__22820__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22820__$1,cljs.core.constant$keyword$65);
var owner = G__22791;
var G__22819 = G__22792;
var map__22821 = G__22819;
var map__22821__$1 = ((cljs.core.seq_QMARK_(map__22821))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22821):map__22821);
var opts = map__22821__$1;
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22821__$1,cljs.core.constant$keyword$150);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22821__$1,cljs.core.constant$keyword$151,(6));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22821__$1,cljs.core.constant$keyword$137);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22821__$1,cljs.core.constant$keyword$124);
var G__22818__$1 = G__22818;
var owner__$1 = owner;
var G__22819__$1 = G__22819;
while(true){
var map__22822 = G__22818__$1;
var map__22822__$1 = ((cljs.core.seq_QMARK_(map__22822))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22822):map__22822);
var input_state__$1 = map__22822__$1;
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22822__$1,cljs.core.constant$keyword$65);
var owner__$2 = owner__$1;
var map__22823 = G__22819__$1;
var map__22823__$1 = ((cljs.core.seq_QMARK_(map__22823))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22823):map__22823);
var opts__$1 = map__22823__$1;
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22823__$1,cljs.core.constant$keyword$150);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22823__$1,cljs.core.constant$keyword$151,(6));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22823__$1,cljs.core.constant$keyword$137);
var input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22823__$1,cljs.core.constant$keyword$124);
if(typeof lomakkeet.fields.t22824 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22824 = (function (input,map__22822,default_form_group,output_checker22789,owner,input_schema22787,validate__12581__auto__,output_schema22786,map__22820,input_state,G__22818,G__22791,G__22819,G__22790,input_checker22788,size,map__22823,label,map__22821,opts,ufv__,help_text,error,G__22792,meta22825){
this.input = input;
this.map__22822 = map__22822;
this.default_form_group = default_form_group;
this.output_checker22789 = output_checker22789;
this.owner = owner;
this.input_schema22787 = input_schema22787;
this.validate__12581__auto__ = validate__12581__auto__;
this.output_schema22786 = output_schema22786;
this.map__22820 = map__22820;
this.input_state = input_state;
this.G__22818 = G__22818;
this.G__22791 = G__22791;
this.G__22819 = G__22819;
this.G__22790 = G__22790;
this.input_checker22788 = input_checker22788;
this.size = size;
this.map__22823 = map__22823;
this.label = label;
this.map__22821 = map__22821;
this.opts = opts;
this.ufv__ = ufv__;
this.help_text = help_text;
this.error = error;
this.G__22792 = G__22792;
this.meta22825 = meta22825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22824.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22824.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22822,map__22822__$1,input_state__$1,error__$1,owner__$2,map__22823,map__22823__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22818,map__22820,map__22820__$1,input_state,error,owner,G__22819,map__22821,map__22821__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841){
return (function (_){
var self__ = this;
var ___$1 = this;
return "default-form-group";
});})(map__22822,map__22822__$1,input_state__$1,error__$1,owner__$2,map__22823,map__22823__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22818,map__22820,map__22820__$1,input_state,error,owner,G__22819,map__22821,map__22821__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841))
;

lomakkeet.fields.t22824.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22824.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22822,map__22822__$1,input_state__$1,error__$1,owner__$2,map__22823,map__22823__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22818,map__22820,map__22820__$1,input_state,error,owner,G__22819,map__22821,map__22821__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var G__22828 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",(function (){var G__22833 = cljs.core.PersistentVector.EMPTY;
var G__22833__$1 = (cljs.core.truth_(self__.error)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22833,"has-error"):G__22833);
var G__22833__$2 = (cljs.core.truth_(self__.size)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22833__$1,[cljs.core.str("col-md-"),cljs.core.str(self__.size)].join('')):G__22833__$1);
return G__22833__$2;
})()], null))};
var G__22829 = (function (){var attrs22827 = self__.label;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs22827))?sablono.interpreter.attributes(attrs22827):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22827))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22827),":"], null))));
})();
var G__22830 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(self__.input,self__.input_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,self__.opts,cljs.core.constant$keyword$53,s], null)));
var G__22831 = (cljs.core.truth_(self__.help_text)?(function (){var attrs22834 = self__.help_text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs22834))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22834], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22834))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22834)], null))));
})():null);
var G__22832 = (cljs.core.truth_((function (){var and__4239__auto__ = !(cljs.core.empty_QMARK_);
if(and__4239__auto__){
return self__.error;
} else {
return and__4239__auto__;
}
})())?(function (){var attrs22835 = [cljs.core.str(self__.error)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs22835))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22835], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22835))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22835)], null))));
})():null);
return React.DOM.div(G__22828,G__22829,G__22830,G__22831,G__22832);
});})(map__22822,map__22822__$1,input_state__$1,error__$1,owner__$2,map__22823,map__22823__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22818,map__22820,map__22820__$1,input_state,error,owner,G__22819,map__22821,map__22821__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841))
;

lomakkeet.fields.t22824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22822,map__22822__$1,input_state__$1,error__$1,owner__$2,map__22823,map__22823__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22818,map__22820,map__22820__$1,input_state,error,owner,G__22819,map__22821,map__22821__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841){
return (function (_22826){
var self__ = this;
var _22826__$1 = this;
return self__.meta22825;
});})(map__22822,map__22822__$1,input_state__$1,error__$1,owner__$2,map__22823,map__22823__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22818,map__22820,map__22820__$1,input_state,error,owner,G__22819,map__22821,map__22821__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841))
;

lomakkeet.fields.t22824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22822,map__22822__$1,input_state__$1,error__$1,owner__$2,map__22823,map__22823__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22818,map__22820,map__22820__$1,input_state,error,owner,G__22819,map__22821,map__22821__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841){
return (function (_22826,meta22825__$1){
var self__ = this;
var _22826__$1 = this;
return (new lomakkeet.fields.t22824(self__.input,self__.map__22822,self__.default_form_group,self__.output_checker22789,self__.owner,self__.input_schema22787,self__.validate__12581__auto__,self__.output_schema22786,self__.map__22820,self__.input_state,self__.G__22818,self__.G__22791,self__.G__22819,self__.G__22790,self__.input_checker22788,self__.size,self__.map__22823,self__.label,self__.map__22821,self__.opts,self__.ufv__,self__.help_text,self__.error,self__.G__22792,meta22825__$1));
});})(map__22822,map__22822__$1,input_state__$1,error__$1,owner__$2,map__22823,map__22823__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22818,map__22820,map__22820__$1,input_state,error,owner,G__22819,map__22821,map__22821__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841))
;

lomakkeet.fields.t22824.cljs$lang$type = true;

lomakkeet.fields.t22824.cljs$lang$ctorStr = "lomakkeet.fields/t22824";

lomakkeet.fields.t22824.cljs$lang$ctorPrWriter = ((function (map__22822,map__22822__$1,input_state__$1,error__$1,owner__$2,map__22823,map__22823__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22818,map__22820,map__22820__$1,input_state,error,owner,G__22819,map__22821,map__22821__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22824");
});})(map__22822,map__22822__$1,input_state__$1,error__$1,owner__$2,map__22823,map__22823__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22818,map__22820,map__22820__$1,input_state,error,owner,G__22819,map__22821,map__22821__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841))
;

lomakkeet.fields.__GT_t22824 = ((function (map__22822,map__22822__$1,input_state__$1,error__$1,owner__$2,map__22823,map__22823__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22818,map__22820,map__22820__$1,input_state,error,owner,G__22819,map__22821,map__22821__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841){
return (function __GT_t22824(input__$2,map__22822__$2,default_form_group__$1,output_checker22789__$1,owner__$3,input_schema22787__$1,validate__12581__auto____$1,output_schema22786__$1,map__22820__$2,input_state__$2,G__22818__$2,G__22791__$1,G__22819__$2,G__22790__$1,input_checker22788__$1,size__$2,map__22823__$2,label__$2,map__22821__$2,opts__$2,ufv____$1,help_text__$2,error__$2,G__22792__$1,meta22825){
return (new lomakkeet.fields.t22824(input__$2,map__22822__$2,default_form_group__$1,output_checker22789__$1,owner__$3,input_schema22787__$1,validate__12581__auto____$1,output_schema22786__$1,map__22820__$2,input_state__$2,G__22818__$2,G__22791__$1,G__22819__$2,G__22790__$1,input_checker22788__$1,size__$2,map__22823__$2,label__$2,map__22821__$2,opts__$2,ufv____$1,help_text__$2,error__$2,G__22792__$1,meta22825));
});})(map__22822,map__22822__$1,input_state__$1,error__$1,owner__$2,map__22823,map__22823__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22818,map__22820,map__22820__$1,input_state,error,owner,G__22819,map__22821,map__22821__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841))
;

}

return (new lomakkeet.fields.t22824(input__$1,map__22822__$1,default_form_group,output_checker22789_22841,owner__$2,input_schema22787_22839,validate__12581__auto__,output_schema22786_22838,map__22820__$1,input_state__$1,G__22818__$1,G__22791,G__22819__$1,G__22790,input_checker22788_22840,size__$1,map__22823__$1,label__$1,map__22821__$1,opts__$1,ufv___22837,help_text__$1,error__$1,G__22792,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22845 = (function (){var G__22836 = o__12584__auto__;
return (output_checker22789_22841.cljs$core$IFn$_invoke$arity$1 ? output_checker22789_22841.cljs$core$IFn$_invoke$arity$1(G__22836) : output_checker22789_22841.call(null,G__22836));
})();
if(cljs.core.truth_(temp__4126__auto___22845)){
var error__12583__auto___22846 = temp__4126__auto___22845;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22846], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22846,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22786_22838,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22837,output_schema22786_22838,input_schema22787_22839,input_checker22788_22840,output_checker22789_22841))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.default_form_group),schema.core.make_fn_schema(output_schema22786_22838,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22787_22839], null)));

lomakkeet.fields.__GT_default_form_group = (function() {
var __GT_default_form_group = null;
var __GT_default_form_group__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.default_form_group,cursor__20832__auto__);
});
var __GT_default_form_group__2 = (function (cursor__20832__auto__,m22785){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.default_form_group,cursor__20832__auto__,m22785);
});
__GT_default_form_group = function(cursor__20832__auto__,m22785){
switch(arguments.length){
case 1:
return __GT_default_form_group__1.call(this,cursor__20832__auto__);
case 2:
return __GT_default_form_group__2.call(this,cursor__20832__auto__,m22785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_default_form_group.cljs$core$IFn$_invoke$arity$1 = __GT_default_form_group__1;
__GT_default_form_group.cljs$core$IFn$_invoke$arity$2 = __GT_default_form_group__2;
return __GT_default_form_group;
})()
;
lomakkeet.fields.build = (function build(p__22847){
var map__22853 = p__22847;
var map__22853__$1 = ((cljs.core.seq_QMARK_(map__22853))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22853):map__22853);
var opts = map__22853__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22853__$1,cljs.core.constant$keyword$146);
var form_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22853__$1,cljs.core.constant$keyword$152);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22853__$1,cljs.core.constant$keyword$153);
var map__22854 = form_state;
var map__22854__$1 = ((cljs.core.seq_QMARK_(map__22854))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22854):map__22854);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22854__$1,cljs.core.constant$keyword$67);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22854__$1,cljs.core.constant$keyword$154);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22854__$1,cljs.core.constant$keyword$66);
return om.core.build.cljs$core$IFn$_invoke$arity$3(form_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22855 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22855) : cljs.core.deref.call(null,G__22855));
})(),ks),cljs.core.constant$keyword$65,(cljs.core.truth_(errors)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22856 = errors;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22856) : cljs.core.deref.call(null,G__22856));
})(),ks):null),cljs.core.constant$keyword$67,(cljs.core.truth_(schema__$1)?lomakkeet.fields.get_in_schema((function (){var G__22857 = schema__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22857) : cljs.core.deref.call(null,G__22857));
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

var ufv___22898 = schema.utils.use_fn_validation;
var output_schema22859_22899 = schema.core.Any;
var input_schema22860_22900 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22861_22901 = schema.core.checker(input_schema22860_22900);
var output_checker22862_22902 = schema.core.checker(output_schema22859_22899);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks el transform-value], :or {el input-input, transform-value identity}, :as opts}]
*/
lomakkeet.fields.input_STAR_ = ((function (ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902){
return (function input_STAR_(G__22863,G__22864,G__22865){
var validate__12581__auto__ = ufv___22898.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22903 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22863,G__22864,G__22865], null);
var temp__4126__auto___22904 = (function (){var G__22882 = args__12582__auto___22903;
return (input_checker22861_22901.cljs$core$IFn$_invoke$arity$1 ? input_checker22861_22901.cljs$core$IFn$_invoke$arity$1(G__22882) : input_checker22861_22901.call(null,G__22882));
})();
if(cljs.core.truth_(temp__4126__auto___22904)){
var error__12583__auto___22905 = temp__4126__auto___22904;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22905], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22905,cljs.core.constant$keyword$66,args__12582__auto___22903,cljs.core.constant$keyword$67,input_schema22860_22900,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22885 = G__22863;
var map__22887 = G__22885;
var map__22887__$1 = ((cljs.core.seq_QMARK_(map__22887))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22887):map__22887);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22887__$1,cljs.core.constant$keyword$66);
var owner = G__22864;
var G__22886 = G__22865;
var map__22888 = G__22886;
var map__22888__$1 = ((cljs.core.seq_QMARK_(map__22888))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22888):map__22888);
var opts = map__22888__$1;
var transform_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22888__$1,cljs.core.constant$keyword$159,cljs.core.identity);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22888__$1,cljs.core.constant$keyword$160,lomakkeet.fields.input_input);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22888__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22888__$1,cljs.core.constant$keyword$147);
var G__22885__$1 = G__22885;
var owner__$1 = owner;
var G__22886__$1 = G__22886;
while(true){
var map__22889 = G__22885__$1;
var map__22889__$1 = ((cljs.core.seq_QMARK_(map__22889))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22889):map__22889);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22889__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22890 = G__22886__$1;
var map__22890__$1 = ((cljs.core.seq_QMARK_(map__22890))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22890):map__22890);
var opts__$1 = map__22890__$1;
var transform_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22890__$1,cljs.core.constant$keyword$159,cljs.core.identity);
var el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22890__$1,cljs.core.constant$keyword$160,lomakkeet.fields.input_input);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22890__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22890__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22891 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22891 = (function (owner,G__22886,map__22888,input_STAR_,validate__12581__auto__,input_schema22860,output_schema22859,G__22865,el,ks,G__22885,value,map__22890,G__22864,G__22863,transform_value,output_checker22862,ch,input_checker22861,map__22887,opts,map__22889,ufv__,meta22892){
this.owner = owner;
this.G__22886 = G__22886;
this.map__22888 = map__22888;
this.input_STAR_ = input_STAR_;
this.validate__12581__auto__ = validate__12581__auto__;
this.input_schema22860 = input_schema22860;
this.output_schema22859 = output_schema22859;
this.G__22865 = G__22865;
this.el = el;
this.ks = ks;
this.G__22885 = G__22885;
this.value = value;
this.map__22890 = map__22890;
this.G__22864 = G__22864;
this.G__22863 = G__22863;
this.transform_value = transform_value;
this.output_checker22862 = output_checker22862;
this.ch = ch;
this.input_checker22861 = input_checker22861;
this.map__22887 = map__22887;
this.opts = opts;
this.map__22889 = map__22889;
this.ufv__ = ufv__;
this.meta22892 = meta22892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22891.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22891.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902){
return (function (_){
var self__ = this;
var ___$1 = this;
return "input*";
});})(map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902))
;

lomakkeet.fields.t22891.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22891.prototype.om$core$IRender$render$arity$1 = ((function (map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__22894 = (function (){var G__22896 = self__.value;
return (self__.transform_value.cljs$core$IFn$_invoke$arity$1 ? self__.transform_value.cljs$core$IFn$_invoke$arity$1(G__22896) : self__.transform_value.call(null,G__22896));
})();
var G__22895 = ((function (G__22894,___$1,map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,e.target.value], null));
});})(G__22894,___$1,map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902))
;
return (self__.el.cljs$core$IFn$_invoke$arity$2 ? self__.el.cljs$core$IFn$_invoke$arity$2(G__22894,G__22895) : self__.el.call(null,G__22894,G__22895));
})());
});})(map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902))
;

lomakkeet.fields.t22891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902){
return (function (_22893){
var self__ = this;
var _22893__$1 = this;
return self__.meta22892;
});})(map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902))
;

lomakkeet.fields.t22891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902){
return (function (_22893,meta22892__$1){
var self__ = this;
var _22893__$1 = this;
return (new lomakkeet.fields.t22891(self__.owner,self__.G__22886,self__.map__22888,self__.input_STAR_,self__.validate__12581__auto__,self__.input_schema22860,self__.output_schema22859,self__.G__22865,self__.el,self__.ks,self__.G__22885,self__.value,self__.map__22890,self__.G__22864,self__.G__22863,self__.transform_value,self__.output_checker22862,self__.ch,self__.input_checker22861,self__.map__22887,self__.opts,self__.map__22889,self__.ufv__,meta22892__$1));
});})(map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902))
;

lomakkeet.fields.t22891.cljs$lang$type = true;

lomakkeet.fields.t22891.cljs$lang$ctorStr = "lomakkeet.fields/t22891";

lomakkeet.fields.t22891.cljs$lang$ctorPrWriter = ((function (map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22891");
});})(map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902))
;

lomakkeet.fields.__GT_t22891 = ((function (map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902){
return (function __GT_t22891(owner__$3,G__22886__$2,map__22888__$2,input_STAR___$1,validate__12581__auto____$1,input_schema22860__$1,output_schema22859__$1,G__22865__$1,el__$2,ks__$2,G__22885__$2,value__$2,map__22890__$2,G__22864__$1,G__22863__$1,transform_value__$2,output_checker22862__$1,ch__$2,input_checker22861__$1,map__22887__$2,opts__$2,map__22889__$2,ufv____$1,meta22892){
return (new lomakkeet.fields.t22891(owner__$3,G__22886__$2,map__22888__$2,input_STAR___$1,validate__12581__auto____$1,input_schema22860__$1,output_schema22859__$1,G__22865__$1,el__$2,ks__$2,G__22885__$2,value__$2,map__22890__$2,G__22864__$1,G__22863__$1,transform_value__$2,output_checker22862__$1,ch__$2,input_checker22861__$1,map__22887__$2,opts__$2,map__22889__$2,ufv____$1,meta22892));
});})(map__22889,map__22889__$1,value__$1,owner__$2,map__22890,map__22890__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22885,map__22887,map__22887__$1,value,owner,G__22886,map__22888,map__22888__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902))
;

}

return (new lomakkeet.fields.t22891(owner__$2,G__22886__$1,map__22888__$1,input_STAR_,validate__12581__auto__,input_schema22860_22900,output_schema22859_22899,G__22865,el__$1,ks__$1,G__22885__$1,value__$1,map__22890__$1,G__22864,G__22863,transform_value__$1,output_checker22862_22902,ch__$1,input_checker22861_22901,map__22887__$1,opts__$1,map__22889__$1,ufv___22898,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22906 = (function (){var G__22897 = o__12584__auto__;
return (output_checker22862_22902.cljs$core$IFn$_invoke$arity$1 ? output_checker22862_22902.cljs$core$IFn$_invoke$arity$1(G__22897) : output_checker22862_22902.call(null,G__22897));
})();
if(cljs.core.truth_(temp__4126__auto___22906)){
var error__12583__auto___22907 = temp__4126__auto___22906;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22907], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22907,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22859_22899,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22898,output_schema22859_22899,input_schema22860_22900,input_checker22861_22901,output_checker22862_22902))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.input_STAR_),schema.core.make_fn_schema(output_schema22859_22899,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22860_22900], null)));

lomakkeet.fields.__GT_input_STAR_ = (function() {
var __GT_input_STAR_ = null;
var __GT_input_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.input_STAR_,cursor__20832__auto__);
});
var __GT_input_STAR___2 = (function (cursor__20832__auto__,m22858){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.input_STAR_,cursor__20832__auto__,m22858);
});
__GT_input_STAR_ = function(cursor__20832__auto__,m22858){
switch(arguments.length){
case 1:
return __GT_input_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_input_STAR___2.call(this,cursor__20832__auto__,m22858);
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
var input__delegate = function (form,label,ks,p__22908){
var vec__22910 = p__22908;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22910,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var input = function (form,label,ks,var_args){
var p__22908 = null;
if (arguments.length > 3) {
var G__22911__i = 0, G__22911__a = new Array(arguments.length -  3);
while (G__22911__i < G__22911__a.length) {G__22911__a[G__22911__i] = arguments[G__22911__i + 3]; ++G__22911__i;}
  p__22908 = new cljs.core.IndexedSeq(G__22911__a,0);
} 
return input__delegate.call(this,form,label,ks,p__22908);};
input.cljs$lang$maxFixedArity = 3;
input.cljs$lang$applyTo = (function (arglist__22912){
var form = cljs.core.first(arglist__22912);
arglist__22912 = cljs.core.next(arglist__22912);
var label = cljs.core.first(arglist__22912);
arglist__22912 = cljs.core.next(arglist__22912);
var ks = cljs.core.first(arglist__22912);
var p__22908 = cljs.core.rest(arglist__22912);
return input__delegate(form,label,ks,p__22908);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.textarea = (function() { 
var textarea__delegate = function (form,label,ks,p__22913){
var vec__22915 = p__22913;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22915,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$160,lomakkeet.fields.input_textarea], null)], 0)));
};
var textarea = function (form,label,ks,var_args){
var p__22913 = null;
if (arguments.length > 3) {
var G__22916__i = 0, G__22916__a = new Array(arguments.length -  3);
while (G__22916__i < G__22916__a.length) {G__22916__a[G__22916__i] = arguments[G__22916__i + 3]; ++G__22916__i;}
  p__22913 = new cljs.core.IndexedSeq(G__22916__a,0);
} 
return textarea__delegate.call(this,form,label,ks,p__22913);};
textarea.cljs$lang$maxFixedArity = 3;
textarea.cljs$lang$applyTo = (function (arglist__22917){
var form = cljs.core.first(arglist__22917);
arglist__22917 = cljs.core.next(arglist__22917);
var label = cljs.core.first(arglist__22917);
arglist__22917 = cljs.core.next(arglist__22917);
var ks = cljs.core.first(arglist__22917);
var p__22913 = cljs.core.rest(arglist__22917);
return textarea__delegate(form,label,ks,p__22913);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.static$ = (function() { 
var static$__delegate = function (form,label,ks,p__22918){
var vec__22920 = p__22918;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$160,lomakkeet.fields.input_static], null)], 0)));
};
var static$ = function (form,label,ks,var_args){
var p__22918 = null;
if (arguments.length > 3) {
var G__22921__i = 0, G__22921__a = new Array(arguments.length -  3);
while (G__22921__i < G__22921__a.length) {G__22921__a[G__22921__i] = arguments[G__22921__i + 3]; ++G__22921__i;}
  p__22918 = new cljs.core.IndexedSeq(G__22921__a,0);
} 
return static$__delegate.call(this,form,label,ks,p__22918);};
static$.cljs$lang$maxFixedArity = 3;
static$.cljs$lang$applyTo = (function (arglist__22922){
var form = cljs.core.first(arglist__22922);
arglist__22922 = cljs.core.next(arglist__22922);
var label = cljs.core.first(arglist__22922);
arglist__22922 = cljs.core.next(arglist__22922);
var ks = cljs.core.first(arglist__22922);
var p__22918 = cljs.core.rest(arglist__22922);
return static$__delegate(form,label,ks,p__22918);
});
static$.cljs$core$IFn$_invoke$arity$variadic = static$__delegate;
return static$;
})()
;

var ufv___22959 = schema.utils.use_fn_validation;
var output_schema22924_22960 = schema.core.Any;
var input_schema22925_22961 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22926_22962 = schema.core.checker(input_schema22925_22961);
var output_checker22927_22963 = schema.core.checker(output_schema22924_22960);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks], :as opts}]
*/
lomakkeet.fields.checkbox_STAR_ = ((function (ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963){
return (function checkbox_STAR_(G__22928,G__22929,G__22930){
var validate__12581__auto__ = ufv___22959.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22964 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22928,G__22929,G__22930], null);
var temp__4126__auto___22965 = (function (){var G__22945 = args__12582__auto___22964;
return (input_checker22926_22962.cljs$core$IFn$_invoke$arity$1 ? input_checker22926_22962.cljs$core$IFn$_invoke$arity$1(G__22945) : input_checker22926_22962.call(null,G__22945));
})();
if(cljs.core.truth_(temp__4126__auto___22965)){
var error__12583__auto___22966 = temp__4126__auto___22965;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22966], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22966,cljs.core.constant$keyword$66,args__12582__auto___22964,cljs.core.constant$keyword$67,input_schema22925_22961,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22948 = G__22928;
var map__22950 = G__22948;
var map__22950__$1 = ((cljs.core.seq_QMARK_(map__22950))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22950):map__22950);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22950__$1,cljs.core.constant$keyword$66);
var owner = G__22929;
var G__22949 = G__22930;
var map__22951 = G__22949;
var map__22951__$1 = ((cljs.core.seq_QMARK_(map__22951))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22951):map__22951);
var opts = map__22951__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,cljs.core.constant$keyword$147);
var G__22948__$1 = G__22948;
var owner__$1 = owner;
var G__22949__$1 = G__22949;
while(true){
var map__22952 = G__22948__$1;
var map__22952__$1 = ((cljs.core.seq_QMARK_(map__22952))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22952):map__22952);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22953 = G__22949__$1;
var map__22953__$1 = ((cljs.core.seq_QMARK_(map__22953))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22953):map__22953);
var opts__$1 = map__22953__$1;
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22954 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22954 = (function (map__22953,output_checker22927,G__22949,G__22929,owner,G__22928,validate__12581__auto__,G__22948,map__22950,output_schema22924,ks,value,G__22930,ch,map__22952,checkbox_STAR_,opts,ufv__,input_schema22925,map__22951,input_checker22926,meta22955){
this.map__22953 = map__22953;
this.output_checker22927 = output_checker22927;
this.G__22949 = G__22949;
this.G__22929 = G__22929;
this.owner = owner;
this.G__22928 = G__22928;
this.validate__12581__auto__ = validate__12581__auto__;
this.G__22948 = G__22948;
this.map__22950 = map__22950;
this.output_schema22924 = output_schema22924;
this.ks = ks;
this.value = value;
this.G__22930 = G__22930;
this.ch = ch;
this.map__22952 = map__22952;
this.checkbox_STAR_ = checkbox_STAR_;
this.opts = opts;
this.ufv__ = ufv__;
this.input_schema22925 = input_schema22925;
this.map__22951 = map__22951;
this.input_checker22926 = input_checker22926;
this.meta22955 = meta22955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22954.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22954.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963){
return (function (_){
var self__ = this;
var ___$1 = this;
return "checkbox*";
});})(map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963))
;

lomakkeet.fields.t22954.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22954.prototype.om$core$IRender$render$arity$1 = ((function (map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22957 = {"type": "checkbox", "checked": cljs.core.boolean$(self__.value), "onChange": ((function (___$1,map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,e.target.checked], null));
});})(___$1,map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22957) : sablono.interpreter.input.call(null,G__22957));
});})(map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963))
;

lomakkeet.fields.t22954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963){
return (function (_22956){
var self__ = this;
var _22956__$1 = this;
return self__.meta22955;
});})(map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963))
;

lomakkeet.fields.t22954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963){
return (function (_22956,meta22955__$1){
var self__ = this;
var _22956__$1 = this;
return (new lomakkeet.fields.t22954(self__.map__22953,self__.output_checker22927,self__.G__22949,self__.G__22929,self__.owner,self__.G__22928,self__.validate__12581__auto__,self__.G__22948,self__.map__22950,self__.output_schema22924,self__.ks,self__.value,self__.G__22930,self__.ch,self__.map__22952,self__.checkbox_STAR_,self__.opts,self__.ufv__,self__.input_schema22925,self__.map__22951,self__.input_checker22926,meta22955__$1));
});})(map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963))
;

lomakkeet.fields.t22954.cljs$lang$type = true;

lomakkeet.fields.t22954.cljs$lang$ctorStr = "lomakkeet.fields/t22954";

lomakkeet.fields.t22954.cljs$lang$ctorPrWriter = ((function (map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22954");
});})(map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963))
;

lomakkeet.fields.__GT_t22954 = ((function (map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963){
return (function __GT_t22954(map__22953__$2,output_checker22927__$1,G__22949__$2,G__22929__$1,owner__$3,G__22928__$1,validate__12581__auto____$1,G__22948__$2,map__22950__$2,output_schema22924__$1,ks__$2,value__$2,G__22930__$1,ch__$2,map__22952__$2,checkbox_STAR___$1,opts__$2,ufv____$1,input_schema22925__$1,map__22951__$2,input_checker22926__$1,meta22955){
return (new lomakkeet.fields.t22954(map__22953__$2,output_checker22927__$1,G__22949__$2,G__22929__$1,owner__$3,G__22928__$1,validate__12581__auto____$1,G__22948__$2,map__22950__$2,output_schema22924__$1,ks__$2,value__$2,G__22930__$1,ch__$2,map__22952__$2,checkbox_STAR___$1,opts__$2,ufv____$1,input_schema22925__$1,map__22951__$2,input_checker22926__$1,meta22955));
});})(map__22952,map__22952__$1,value__$1,owner__$2,map__22953,map__22953__$1,opts__$1,ks__$1,ch__$1,G__22948,map__22950,map__22950__$1,value,owner,G__22949,map__22951,map__22951__$1,opts,ks,ch,validate__12581__auto__,ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963))
;

}

return (new lomakkeet.fields.t22954(map__22953__$1,output_checker22927_22963,G__22949__$1,G__22929,owner__$2,G__22928,validate__12581__auto__,G__22948__$1,map__22950__$1,output_schema22924_22960,ks__$1,value__$1,G__22930,ch__$1,map__22952__$1,checkbox_STAR_,opts__$1,ufv___22959,input_schema22925_22961,map__22951__$1,input_checker22926_22962,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22967 = (function (){var G__22958 = o__12584__auto__;
return (output_checker22927_22963.cljs$core$IFn$_invoke$arity$1 ? output_checker22927_22963.cljs$core$IFn$_invoke$arity$1(G__22958) : output_checker22927_22963.call(null,G__22958));
})();
if(cljs.core.truth_(temp__4126__auto___22967)){
var error__12583__auto___22968 = temp__4126__auto___22967;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22968], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22968,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22924_22960,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22959,output_schema22924_22960,input_schema22925_22961,input_checker22926_22962,output_checker22927_22963))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.checkbox_STAR_),schema.core.make_fn_schema(output_schema22924_22960,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22925_22961], null)));

lomakkeet.fields.__GT_checkbox_STAR_ = (function() {
var __GT_checkbox_STAR_ = null;
var __GT_checkbox_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.checkbox_STAR_,cursor__20832__auto__);
});
var __GT_checkbox_STAR___2 = (function (cursor__20832__auto__,m22923){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.checkbox_STAR_,cursor__20832__auto__,m22923);
});
__GT_checkbox_STAR_ = function(cursor__20832__auto__,m22923){
switch(arguments.length){
case 1:
return __GT_checkbox_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_checkbox_STAR___2.call(this,cursor__20832__auto__,m22923);
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
var checkbox__delegate = function (form,label,ks,p__22969){
var vec__22971 = p__22969;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22971,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.fields.checkbox_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var checkbox = function (form,label,ks,var_args){
var p__22969 = null;
if (arguments.length > 3) {
var G__22972__i = 0, G__22972__a = new Array(arguments.length -  3);
while (G__22972__i < G__22972__a.length) {G__22972__a[G__22972__i] = arguments[G__22972__i + 3]; ++G__22972__i;}
  p__22969 = new cljs.core.IndexedSeq(G__22972__a,0);
} 
return checkbox__delegate.call(this,form,label,ks,p__22969);};
checkbox.cljs$lang$maxFixedArity = 3;
checkbox.cljs$lang$applyTo = (function (arglist__22973){
var form = cljs.core.first(arglist__22973);
arglist__22973 = cljs.core.next(arglist__22973);
var label = cljs.core.first(arglist__22973);
arglist__22973 = cljs.core.next(arglist__22973);
var ks = cljs.core.first(arglist__22973);
var p__22969 = cljs.core.rest(arglist__22973);
return checkbox__delegate(form,label,ks,p__22969);
});
checkbox.cljs$core$IFn$_invoke$arity$variadic = checkbox__delegate;
return checkbox;
})()
;

var ufv___23032 = schema.utils.use_fn_validation;
var output_schema22975_23033 = schema.core.Any;
var input_schema22976_23034 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22977_23035 = schema.core.checker(input_schema22976_23034);
var output_checker22978_23036 = schema.core.checker(output_schema22975_23033);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks options], :as opts}]
*/
lomakkeet.fields.select_STAR_ = ((function (ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036){
return (function select_STAR_(G__22979,G__22980,G__22981){
var validate__12581__auto__ = ufv___23032.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___23037 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22979,G__22980,G__22981], null);
var temp__4126__auto___23038 = (function (){var G__23007 = args__12582__auto___23037;
return (input_checker22977_23035.cljs$core$IFn$_invoke$arity$1 ? input_checker22977_23035.cljs$core$IFn$_invoke$arity$1(G__23007) : input_checker22977_23035.call(null,G__23007));
})();
if(cljs.core.truth_(temp__4126__auto___23038)){
var error__12583__auto___23039 = temp__4126__auto___23038;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23039], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23039,cljs.core.constant$keyword$66,args__12582__auto___23037,cljs.core.constant$keyword$67,input_schema22976_23034,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__23010 = G__22979;
var map__23012 = G__23010;
var map__23012__$1 = ((cljs.core.seq_QMARK_(map__23012))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23012):map__23012);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23012__$1,cljs.core.constant$keyword$66);
var owner = G__22980;
var G__23011 = G__22981;
var map__23013 = G__23011;
var map__23013__$1 = ((cljs.core.seq_QMARK_(map__23013))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23013):map__23013);
var opts = map__23013__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23013__$1,cljs.core.constant$keyword$161);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23013__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23013__$1,cljs.core.constant$keyword$147);
var G__23010__$1 = G__23010;
var owner__$1 = owner;
var G__23011__$1 = G__23011;
while(true){
var map__23014 = G__23010__$1;
var map__23014__$1 = ((cljs.core.seq_QMARK_(map__23014))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23014):map__23014);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__23015 = G__23011__$1;
var map__23015__$1 = ((cljs.core.seq_QMARK_(map__23015))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23015):map__23015);
var opts__$1 = map__23015__$1;
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23015__$1,cljs.core.constant$keyword$161);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23015__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23015__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t23016 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t23016 = (function (options,owner,validate__12581__auto__,input_checker22977,map__23012,G__23010,G__22980,ks,value,G__23011,G__22981,input_schema22976,output_schema22975,ch,map__23013,map__23014,select_STAR_,G__22979,opts,map__23015,ufv__,output_checker22978,meta23017){
this.options = options;
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.input_checker22977 = input_checker22977;
this.map__23012 = map__23012;
this.G__23010 = G__23010;
this.G__22980 = G__22980;
this.ks = ks;
this.value = value;
this.G__23011 = G__23011;
this.G__22981 = G__22981;
this.input_schema22976 = input_schema22976;
this.output_schema22975 = output_schema22975;
this.ch = ch;
this.map__23013 = map__23013;
this.map__23014 = map__23014;
this.select_STAR_ = select_STAR_;
this.G__22979 = G__22979;
this.opts = opts;
this.map__23015 = map__23015;
this.ufv__ = ufv__;
this.output_checker22978 = output_checker22978;
this.meta23017 = meta23017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t23016.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t23016.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036){
return (function (_){
var self__ = this;
var ___$1 = this;
return "select*";
});})(map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036))
;

lomakkeet.fields.t23016.prototype.om$core$IRender$ = true;

lomakkeet.fields.t23016.prototype.om$core$IRender$render$arity$1 = ((function (map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23019 = {"className": "form-control", "value": self__.value, "onChange": ((function (___$1,map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,e.target.value], null));
});})(___$1,map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036))
};
var G__23020 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(self__.options))?(function (){var iter__5007__auto__ = ((function (G__23019,___$1,map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036){
return (function iter__23021(s__23022){
return (new cljs.core.LazySeq(null,((function (G__23019,___$1,map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036){
return (function (){
var s__23022__$1 = s__23022;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23022__$1);
if(temp__4126__auto__){
var s__23022__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23022__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__23022__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__23024 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__23023 = (0);
while(true){
if((i__23023 < size__5006__auto__)){
var vec__23029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__23023);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23029,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23029,(1),null);
cljs.core.chunk_append(b__23024,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,k,cljs.core.constant$keyword$51,k], null),v], null));

var G__23040 = (i__23023 + (1));
i__23023 = G__23040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23024),iter__23021(cljs.core.chunk_rest(s__23022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23024),null);
}
} else {
var vec__23030 = cljs.core.first(s__23022__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23030,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,k,cljs.core.constant$keyword$51,k], null),v], null),iter__23021(cljs.core.rest(s__23022__$2)));
}
} else {
return null;
}
break;
}
});})(G__23019,___$1,map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036))
,null,null));
});})(G__23019,___$1,map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036))
;
return iter__5007__auto__(self__.options);
})():null));
return React.DOM.select(G__23019,G__23020);
});})(map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036))
;

lomakkeet.fields.t23016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036){
return (function (_23018){
var self__ = this;
var _23018__$1 = this;
return self__.meta23017;
});})(map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036))
;

lomakkeet.fields.t23016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036){
return (function (_23018,meta23017__$1){
var self__ = this;
var _23018__$1 = this;
return (new lomakkeet.fields.t23016(self__.options,self__.owner,self__.validate__12581__auto__,self__.input_checker22977,self__.map__23012,self__.G__23010,self__.G__22980,self__.ks,self__.value,self__.G__23011,self__.G__22981,self__.input_schema22976,self__.output_schema22975,self__.ch,self__.map__23013,self__.map__23014,self__.select_STAR_,self__.G__22979,self__.opts,self__.map__23015,self__.ufv__,self__.output_checker22978,meta23017__$1));
});})(map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036))
;

lomakkeet.fields.t23016.cljs$lang$type = true;

lomakkeet.fields.t23016.cljs$lang$ctorStr = "lomakkeet.fields/t23016";

lomakkeet.fields.t23016.cljs$lang$ctorPrWriter = ((function (map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t23016");
});})(map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036))
;

lomakkeet.fields.__GT_t23016 = ((function (map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036){
return (function __GT_t23016(options__$2,owner__$3,validate__12581__auto____$1,input_checker22977__$1,map__23012__$2,G__23010__$2,G__22980__$1,ks__$2,value__$2,G__23011__$2,G__22981__$1,input_schema22976__$1,output_schema22975__$1,ch__$2,map__23013__$2,map__23014__$2,select_STAR___$1,G__22979__$1,opts__$2,map__23015__$2,ufv____$1,output_checker22978__$1,meta23017){
return (new lomakkeet.fields.t23016(options__$2,owner__$3,validate__12581__auto____$1,input_checker22977__$1,map__23012__$2,G__23010__$2,G__22980__$1,ks__$2,value__$2,G__23011__$2,G__22981__$1,input_schema22976__$1,output_schema22975__$1,ch__$2,map__23013__$2,map__23014__$2,select_STAR___$1,G__22979__$1,opts__$2,map__23015__$2,ufv____$1,output_checker22978__$1,meta23017));
});})(map__23014,map__23014__$1,value__$1,owner__$2,map__23015,map__23015__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23010,map__23012,map__23012__$1,value,owner,G__23011,map__23013,map__23013__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036))
;

}

return (new lomakkeet.fields.t23016(options__$1,owner__$2,validate__12581__auto__,input_checker22977_23035,map__23012__$1,G__23010__$1,G__22980,ks__$1,value__$1,G__23011__$1,G__22981,input_schema22976_23034,output_schema22975_23033,ch__$1,map__23013__$1,map__23014__$1,select_STAR_,G__22979,opts__$1,map__23015__$1,ufv___23032,output_checker22978_23036,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___23041 = (function (){var G__23031 = o__12584__auto__;
return (output_checker22978_23036.cljs$core$IFn$_invoke$arity$1 ? output_checker22978_23036.cljs$core$IFn$_invoke$arity$1(G__23031) : output_checker22978_23036.call(null,G__23031));
})();
if(cljs.core.truth_(temp__4126__auto___23041)){
var error__12583__auto___23042 = temp__4126__auto___23041;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23042], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23042,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22975_23033,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___23032,output_schema22975_23033,input_schema22976_23034,input_checker22977_23035,output_checker22978_23036))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.select_STAR_),schema.core.make_fn_schema(output_schema22975_23033,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22976_23034], null)));

lomakkeet.fields.__GT_select_STAR_ = (function() {
var __GT_select_STAR_ = null;
var __GT_select_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.select_STAR_,cursor__20832__auto__);
});
var __GT_select_STAR___2 = (function (cursor__20832__auto__,m22974){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.select_STAR_,cursor__20832__auto__,m22974);
});
__GT_select_STAR_ = function(cursor__20832__auto__,m22974){
switch(arguments.length){
case 1:
return __GT_select_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_select_STAR___2.call(this,cursor__20832__auto__,m22974);
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
var select__delegate = function (form,label,ks,options,p__23043){
var vec__23045 = p__23043;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23045,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.select_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$161,options], null)], 0)));
};
var select = function (form,label,ks,options,var_args){
var p__23043 = null;
if (arguments.length > 4) {
var G__23046__i = 0, G__23046__a = new Array(arguments.length -  4);
while (G__23046__i < G__23046__a.length) {G__23046__a[G__23046__i] = arguments[G__23046__i + 4]; ++G__23046__i;}
  p__23043 = new cljs.core.IndexedSeq(G__23046__a,0);
} 
return select__delegate.call(this,form,label,ks,options,p__23043);};
select.cljs$lang$maxFixedArity = 4;
select.cljs$lang$applyTo = (function (arglist__23047){
var form = cljs.core.first(arglist__23047);
arglist__23047 = cljs.core.next(arglist__23047);
var label = cljs.core.first(arglist__23047);
arglist__23047 = cljs.core.next(arglist__23047);
var ks = cljs.core.first(arglist__23047);
arglist__23047 = cljs.core.next(arglist__23047);
var options = cljs.core.first(arglist__23047);
var p__23043 = cljs.core.rest(arglist__23047);
return select__delegate(form,label,ks,options,p__23043);
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
lomakkeet.fields.save_form = (function save_form(p__23050,value){
var map__23052 = p__23050;
var map__23052__$1 = ((cljs.core.seq_QMARK_(map__23052))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23052):map__23052);
var form_state = map__23052__$1;
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23052__$1,cljs.core.constant$keyword$67);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.constant$keyword$66,value,cljs.core.array_seq([cljs.core.constant$keyword$162,value,cljs.core.constant$keyword$154,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null)], 0));
});
/**
* @param {...*} var_args
*/
lomakkeet.fields.update_form = (function() { 
var update_form__delegate = function (p__23053,f,args){
var map__23055 = p__23053;
var map__23055__$1 = ((cljs.core.seq_QMARK_(map__23055))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23055):map__23055);
var form_state = map__23055__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23055__$1,cljs.core.constant$keyword$66);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,value,args);
return lomakkeet.fields.save_form(form_state,new_value);
};
var update_form = function (p__23053,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23056__i = 0, G__23056__a = new Array(arguments.length -  2);
while (G__23056__i < G__23056__a.length) {G__23056__a[G__23056__i] = arguments[G__23056__i + 2]; ++G__23056__i;}
  args = new cljs.core.IndexedSeq(G__23056__a,0);
} 
return update_form__delegate.call(this,p__23053,f,args);};
update_form.cljs$lang$maxFixedArity = 2;
update_form.cljs$lang$applyTo = (function (arglist__23057){
var p__23053 = cljs.core.first(arglist__23057);
arglist__23057 = cljs.core.next(arglist__23057);
var f = cljs.core.first(arglist__23057);
var args = cljs.core.rest(arglist__23057);
return update_form__delegate(p__23053,f,args);
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
return (function (p1__23058_SHARP_){
return lomakkeet.fields.dissoc_in(p1__23058_SHARP_,ks);
});})(schema__$2))
);
} else {
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(value_cursor,ks,value);
}
}
});

var ufv___23399 = schema.utils.use_fn_validation;
var output_schema23060_23400 = schema.core.Any;
var input_schema23061_23401 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(lomakkeet.fields.FormState,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23062_23402 = schema.core.checker(input_schema23061_23401);
var output_checker23063_23403 = schema.core.checker(output_schema23060_23400);
/**
* Inputs: [{:keys [value initial-value], :as form-state} :- FormState owner {:keys [actions render-fn form form-validation-fn after-change], :as opts}]
*/
lomakkeet.fields.form = ((function (ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function form(G__23064,G__23065,G__23066){
var validate__12581__auto__ = ufv___23399.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___23404 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23064,G__23065,G__23066], null);
var temp__4126__auto___23405 = (function (){var G__23233 = args__12582__auto___23404;
return (input_checker23062_23402.cljs$core$IFn$_invoke$arity$1 ? input_checker23062_23402.cljs$core$IFn$_invoke$arity$1(G__23233) : input_checker23062_23402.call(null,G__23233));
})();
if(cljs.core.truth_(temp__4126__auto___23405)){
var error__12583__auto___23406 = temp__4126__auto___23405;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23406], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23406,cljs.core.constant$keyword$66,args__12582__auto___23404,cljs.core.constant$keyword$67,input_schema23061_23401,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__23236 = G__23064;
var map__23238 = G__23236;
var map__23238__$1 = ((cljs.core.seq_QMARK_(map__23238))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23238):map__23238);
var form_state = map__23238__$1;
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23238__$1,cljs.core.constant$keyword$162);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23238__$1,cljs.core.constant$keyword$66);
var owner = G__23065;
var G__23237 = G__23066;
var map__23239 = G__23237;
var map__23239__$1 = ((cljs.core.seq_QMARK_(map__23239))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23239):map__23239);
var opts = map__23239__$1;
var after_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23239__$1,cljs.core.constant$keyword$163);
var form_validation_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23239__$1,cljs.core.constant$keyword$164);
var form__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23239__$1,cljs.core.constant$keyword$143);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23239__$1,cljs.core.constant$keyword$165);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23239__$1,cljs.core.constant$keyword$166);
var G__23236__$1 = G__23236;
var owner__$1 = owner;
var G__23237__$1 = G__23237;
while(true){
var map__23240 = G__23236__$1;
var map__23240__$1 = ((cljs.core.seq_QMARK_(map__23240))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23240):map__23240);
var form_state__$1 = map__23240__$1;
var initial_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23240__$1,cljs.core.constant$keyword$162);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23240__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__23241 = G__23237__$1;
var map__23241__$1 = ((cljs.core.seq_QMARK_(map__23241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23241):map__23241);
var opts__$1 = map__23241__$1;
var after_change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23241__$1,cljs.core.constant$keyword$163);
var form_validation_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23241__$1,cljs.core.constant$keyword$164);
var form__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23241__$1,cljs.core.constant$keyword$143);
var render_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23241__$1,cljs.core.constant$keyword$165);
var actions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23241__$1,cljs.core.constant$keyword$166);
if(typeof lomakkeet.fields.t23242 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t23242 = (function (form,map__23239,map__23241,after_change,G__23064,owner,G__23066,validate__12581__auto__,output_schema23060,form_validation_fn,map__23238,form_state,map__23240,render_fn,value,G__23065,input_checker23062,actions,output_checker23063,input_schema23061,opts,initial_value,ufv__,G__23237,G__23236,meta23243){
this.form = form;
this.map__23239 = map__23239;
this.map__23241 = map__23241;
this.after_change = after_change;
this.G__23064 = G__23064;
this.owner = owner;
this.G__23066 = G__23066;
this.validate__12581__auto__ = validate__12581__auto__;
this.output_schema23060 = output_schema23060;
this.form_validation_fn = form_validation_fn;
this.map__23238 = map__23238;
this.form_state = form_state;
this.map__23240 = map__23240;
this.render_fn = render_fn;
this.value = value;
this.G__23065 = G__23065;
this.input_checker23062 = input_checker23062;
this.actions = actions;
this.output_checker23063 = output_checker23063;
this.input_schema23061 = input_schema23061;
this.opts = opts;
this.initial_value = initial_value;
this.ufv__ = ufv__;
this.G__23237 = G__23237;
this.G__23236 = G__23236;
this.meta23243 = meta23243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t23242.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t23242.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function (_){
var self__ = this;
var ___$1 = this;
return "form";
});})(map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
;

lomakkeet.fields.t23242.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t23242.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function (_,form__$1){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__23245 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$153,self__.form_state,cljs.core.constant$keyword$66,(function (){var G__23246 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23246) : cljs.core.deref.call(null,G__23246));
})(),cljs.core.constant$keyword$162,(function (){var G__23247 = self__.initial_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23247) : cljs.core.deref.call(null,G__23247));
})(),cljs.core.constant$keyword$143,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,cljs.core.constant$keyword$153,self__.form_state),cljs.core.constant$keyword$147,cljs.core.constant$keyword$147.cljs$core$IFn$_invoke$arity$1(form__$1)], null);
return (self__.render_fn.cljs$core$IFn$_invoke$arity$1 ? self__.render_fn.cljs$core$IFn$_invoke$arity$1(G__23245) : self__.render_fn.call(null,G__23245));
})());
});})(map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
;

lomakkeet.fields.t23242.prototype.om$core$IWillMount$ = true;

lomakkeet.fields.t23242.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function (_){
var self__ = this;
var ___$1 = this;
var schema__$1 = (cljs.core.truth_(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(self__.form_state))?(function (){var G__23249 = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(self__.form_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23249) : cljs.core.deref.call(null,G__23249));
})():null);
var map__23248 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
var map__23248__$1 = ((cljs.core.seq_QMARK_(map__23248))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23248):map__23248);
var coercion_matcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23248__$1,cljs.core.constant$keyword$167);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23248__$1,cljs.core.constant$keyword$147);
var c__16627__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto__,schema__$1,map__23248,map__23248__$1,coercion_matcher,ch,___$1,map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto__,schema__$1,map__23248,map__23248__$1,coercion_matcher,ch,___$1,map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function (state_23330){
var state_val_23331 = (state_23330[(1)]);
if((state_val_23331 === (7))){
var inst_23255 = (state_23330[(7)]);
var inst_23258 = (state_23330[(8)]);
var inst_23252 = (state_23330[(9)]);
var inst_23257 = (function (){var G__23332 = self__.form_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23332) : cljs.core.deref.call(null,G__23332));
})();
var inst_23258__$1 = (function (){var G__23333 = inst_23257;
var G__23334 = inst_23252;
return (inst_23255.cljs$core$IFn$_invoke$arity$2 ? inst_23255.cljs$core$IFn$_invoke$arity$2(G__23333,G__23334) : inst_23255.call(null,G__23333,G__23334));
})();
var inst_23259 = lomakkeet.fields.chan_QMARK_(inst_23258__$1);
var state_23330__$1 = (function (){var statearr_23335 = state_23330;
(statearr_23335[(8)] = inst_23258__$1);

return statearr_23335;
})();
if(inst_23259){
var statearr_23336_23407 = state_23330__$1;
(statearr_23336_23407[(1)] = (10));

} else {
var statearr_23337_23408 = state_23330__$1;
(statearr_23337_23408[(1)] = (11));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (20))){
var state_23330__$1 = state_23330;
var statearr_23338_23409 = state_23330__$1;
(statearr_23338_23409[(2)] = null);

(statearr_23338_23409[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (27))){
var inst_23317 = (state_23330[(10)]);
var inst_23323 = (state_23330[(2)]);
var inst_23324 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23317,inst_23323], 0));
var inst_23325 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.form_state,cljs.core.constant$keyword$154,inst_23324);
var state_23330__$1 = (function (){var statearr_23339 = state_23330;
(statearr_23339[(11)] = inst_23325);

return statearr_23339;
})();
var statearr_23340_23410 = state_23330__$1;
(statearr_23340_23410[(2)] = null);

(statearr_23340_23410[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (1))){
var state_23330__$1 = state_23330;
var statearr_23341_23411 = state_23330__$1;
(statearr_23341_23411[(2)] = null);

(statearr_23341_23411[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (24))){
var inst_23317 = (state_23330[(2)]);
var state_23330__$1 = (function (){var statearr_23342 = state_23330;
(statearr_23342[(10)] = inst_23317);

return statearr_23342;
})();
if(cljs.core.truth_(schema__$1)){
var statearr_23343_23412 = state_23330__$1;
(statearr_23343_23412[(1)] = (25));

} else {
var statearr_23344_23413 = state_23330__$1;
(statearr_23344_23413[(1)] = (26));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (4))){
var inst_23252 = (state_23330[(9)]);
var inst_23252__$1 = (state_23330[(2)]);
var inst_23253 = (function (){var G__23345 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23345) : cljs.core.deref.call(null,G__23345));
})();
var inst_23300 = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(inst_23252__$1);
var state_23330__$1 = (function (){var statearr_23346 = state_23330;
(statearr_23346[(9)] = inst_23252__$1);

(statearr_23346[(12)] = inst_23253);

return statearr_23346;
})();
var G__23347_23414 = (((inst_23300 instanceof cljs.core.Keyword))?inst_23300.fqn:null);
switch (G__23347_23414) {
case "change":
var statearr_23348_23416 = state_23330__$1;
(statearr_23348_23416[(1)] = (14));


break;
case "cancel":
var statearr_23349_23417 = state_23330__$1;
(statearr_23349_23417[(1)] = (13));


break;
case "action":
var statearr_23350_23418 = state_23330__$1;
(statearr_23350_23418[(1)] = (6));


break;
default:
var statearr_23351_23419 = state_23330__$1;
(statearr_23351_23419[(1)] = (18));



}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (15))){
var inst_23252 = (state_23330[(9)]);
var inst_23286 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23252);
var state_23330__$1 = state_23330;
var statearr_23352_23420 = state_23330__$1;
(statearr_23352_23420[(2)] = inst_23286);

(statearr_23352_23420[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (21))){
var inst_23311 = (state_23330[(2)]);
var state_23330__$1 = (function (){var statearr_23353 = state_23330;
(statearr_23353[(13)] = inst_23311);

return statearr_23353;
})();
if(cljs.core.truth_(self__.form_validation_fn)){
var statearr_23354_23421 = state_23330__$1;
(statearr_23354_23421[(1)] = (22));

} else {
var statearr_23355_23422 = state_23330__$1;
(statearr_23355_23422[(1)] = (23));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (13))){
var inst_23281 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,lomakkeet.fields.cancel_form);
var state_23330__$1 = state_23330;
var statearr_23356_23423 = state_23330__$1;
(statearr_23356_23423[(2)] = inst_23281);

(statearr_23356_23423[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (22))){
var inst_23313 = (function (){var G__23357 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23357) : cljs.core.deref.call(null,G__23357));
})();
var inst_23314 = (function (){var G__23358 = inst_23313;
return (self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1 ? self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1(G__23358) : self__.form_validation_fn.call(null,G__23358));
})();
var state_23330__$1 = state_23330;
var statearr_23359_23424 = state_23330__$1;
(statearr_23359_23424[(2)] = inst_23314);

(statearr_23359_23424[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (6))){
var inst_23255 = (state_23330[(7)]);
var inst_23252 = (state_23330[(9)]);
var inst_23254 = cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(inst_23252);
var inst_23255__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.actions,inst_23254);
var state_23330__$1 = (function (){var statearr_23360 = state_23330;
(statearr_23360[(7)] = inst_23255__$1);

return statearr_23360;
})();
if(cljs.core.truth_(inst_23255__$1)){
var statearr_23361_23425 = state_23330__$1;
(statearr_23361_23425[(1)] = (7));

} else {
var statearr_23362_23426 = state_23330__$1;
(statearr_23362_23426[(1)] = (8));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (25))){
var inst_23319 = (function (){var G__23363 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23363) : cljs.core.deref.call(null,G__23363));
})();
var inst_23320 = schema.core.check(schema__$1,inst_23319);
var state_23330__$1 = state_23330;
var statearr_23364_23427 = state_23330__$1;
(statearr_23364_23427[(2)] = inst_23320);

(statearr_23364_23427[(1)] = (27));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (17))){
var inst_23252 = (state_23330[(9)]);
var inst_23289 = (state_23330[(2)]);
var inst_23290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23289,cljs.core.constant$keyword$146);
var inst_23291 = lomakkeet.fields.get_in_schema(schema__$1,inst_23290);
var inst_23292 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_23252);
var inst_23293 = lomakkeet.fields.coerce(coercion_matcher,inst_23291,inst_23292);
var inst_23294 = lomakkeet.fields.change_value(self__.value,schema__$1,inst_23290,inst_23293);
var state_23330__$1 = state_23330;
var statearr_23365_23428 = state_23330__$1;
(statearr_23365_23428[(2)] = inst_23294);

(statearr_23365_23428[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (3))){
var inst_23328 = (state_23330[(2)]);
var state_23330__$1 = state_23330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23330__$1,inst_23328);
} else {
if((state_val_23331 === (12))){
var inst_23273 = (state_23330[(2)]);
var state_23330__$1 = state_23330;
var statearr_23366_23429 = state_23330__$1;
(statearr_23366_23429[(2)] = inst_23273);

(statearr_23366_23429[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (2))){
var state_23330__$1 = state_23330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23330__$1,(4),ch);
} else {
if((state_val_23331 === (23))){
var state_23330__$1 = state_23330;
var statearr_23367_23430 = state_23330__$1;
(statearr_23367_23430[(2)] = null);

(statearr_23367_23430[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (19))){
var inst_23253 = (state_23330[(12)]);
var inst_23304 = [cljs.core.constant$keyword$153,cljs.core.constant$keyword$66,cljs.core.constant$keyword$168,cljs.core.constant$keyword$169];
var inst_23305 = (function (){var G__23368 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23368) : cljs.core.deref.call(null,G__23368));
})();
var inst_23306 = [self__.form_state,inst_23305,self__.value,inst_23253];
var inst_23307 = cljs.core.PersistentHashMap.fromArrays(inst_23304,inst_23306);
var inst_23308 = (function (){var G__23369 = inst_23307;
return (self__.after_change.cljs$core$IFn$_invoke$arity$1 ? self__.after_change.cljs$core$IFn$_invoke$arity$1(G__23369) : self__.after_change.call(null,G__23369));
})();
var state_23330__$1 = state_23330;
var statearr_23370_23431 = state_23330__$1;
(statearr_23370_23431[(2)] = inst_23308);

(statearr_23370_23431[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (11))){
var inst_23258 = (state_23330[(8)]);
var inst_23271 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_23258);
var state_23330__$1 = state_23330;
var statearr_23371_23432 = state_23330__$1;
(statearr_23371_23432[(2)] = inst_23271);

(statearr_23371_23432[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (9))){
var inst_23279 = (state_23330[(2)]);
var state_23330__$1 = state_23330;
var statearr_23372_23433 = state_23330__$1;
(statearr_23372_23433[(2)] = inst_23279);

(statearr_23372_23433[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (5))){
var inst_23302 = (state_23330[(2)]);
var state_23330__$1 = (function (){var statearr_23373 = state_23330;
(statearr_23373[(14)] = inst_23302);

return statearr_23373;
})();
if(cljs.core.truth_(self__.after_change)){
var statearr_23374_23434 = state_23330__$1;
(statearr_23374_23434[(1)] = (19));

} else {
var statearr_23375_23435 = state_23330__$1;
(statearr_23375_23435[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (14))){
var inst_23252 = (state_23330[(9)]);
var inst_23284 = cljs.core.seq_QMARK_(inst_23252);
var state_23330__$1 = state_23330;
if(inst_23284){
var statearr_23376_23436 = state_23330__$1;
(statearr_23376_23436[(1)] = (15));

} else {
var statearr_23377_23437 = state_23330__$1;
(statearr_23377_23437[(1)] = (16));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (26))){
var state_23330__$1 = state_23330;
var statearr_23378_23438 = state_23330__$1;
(statearr_23378_23438[(2)] = null);

(statearr_23378_23438[(1)] = (27));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (16))){
var inst_23252 = (state_23330[(9)]);
var state_23330__$1 = state_23330;
var statearr_23379_23439 = state_23330__$1;
(statearr_23379_23439[(2)] = inst_23252);

(statearr_23379_23439[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (10))){
var inst_23255 = (state_23330[(7)]);
var inst_23258 = (state_23330[(8)]);
var inst_23252 = (state_23330[(9)]);
var inst_23253 = (state_23330[(12)]);
var inst_23267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23268 = (function (){var c__16627__auto____$1 = inst_23267;
var next = inst_23258;
var action_fn = inst_23255;
var temp__4124__auto__ = inst_23255;
var prev_value = inst_23253;
var evt = inst_23252;
return ((function (c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23255,inst_23258,inst_23252,inst_23253,inst_23267,state_val_23331,c__16627__auto__,schema__$1,map__23248,map__23248__$1,coercion_matcher,ch,___$1,map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23255,inst_23258,inst_23252,inst_23253,inst_23267,state_val_23331,c__16627__auto__,schema__$1,map__23248,map__23248__$1,coercion_matcher,ch,___$1,map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function (state_23265){
var state_val_23266 = (state_23265[(1)]);
if((state_val_23266 === (2))){
var inst_23262 = (state_23265[(2)]);
var inst_23263 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_23262);
var state_23265__$1 = state_23265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23265__$1,inst_23263);
} else {
if((state_val_23266 === (1))){
var state_23265__$1 = state_23265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23265__$1,(2),next);
} else {
return null;
}
}
});})(c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23255,inst_23258,inst_23252,inst_23253,inst_23267,state_val_23331,c__16627__auto__,schema__$1,map__23248,map__23248__$1,coercion_matcher,ch,___$1,map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
;
return ((function (switch__16547__auto__,c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23255,inst_23258,inst_23252,inst_23253,inst_23267,state_val_23331,c__16627__auto__,schema__$1,map__23248,map__23248__$1,coercion_matcher,ch,___$1,map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_23383 = [null,null,null,null,null,null,null];
(statearr_23383[(0)] = state_machine__16548__auto__);

(statearr_23383[(1)] = (1));

return statearr_23383;
});
var state_machine__16548__auto____1 = (function (state_23265){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_23265);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e23384){if((e23384 instanceof Object)){
var ex__16551__auto__ = e23384;
var statearr_23385_23440 = state_23265;
(statearr_23385_23440[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23265);

return cljs.core.constant$keyword$99;
} else {
throw e23384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__23441 = state_23265;
state_23265 = G__23441;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_23265){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_23265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23255,inst_23258,inst_23252,inst_23253,inst_23267,state_val_23331,c__16627__auto__,schema__$1,map__23248,map__23248__$1,coercion_matcher,ch,___$1,map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
})();
var state__16629__auto__ = (function (){var statearr_23386 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_23386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto____$1);

return statearr_23386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});
;})(c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23255,inst_23258,inst_23252,inst_23253,inst_23267,state_val_23331,c__16627__auto__,schema__$1,map__23248,map__23248__$1,coercion_matcher,ch,___$1,map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
})();
var inst_23269 = cljs.core.async.impl.dispatch.run(inst_23268);
var state_23330__$1 = (function (){var statearr_23387 = state_23330;
(statearr_23387[(15)] = inst_23269);

return statearr_23387;
})();
var statearr_23388_23442 = state_23330__$1;
(statearr_23388_23442[(2)] = inst_23267);

(statearr_23388_23442[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (18))){
var inst_23252 = (state_23330[(9)]);
var inst_23296 = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(inst_23252);
var inst_23297 = [cljs.core.str("Unknown event-type: "),cljs.core.str(inst_23296)].join('');
var inst_23298 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23297], 0));
var state_23330__$1 = state_23330;
var statearr_23389_23443 = state_23330__$1;
(statearr_23389_23443[(2)] = inst_23298);

(statearr_23389_23443[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23331 === (8))){
var inst_23252 = (state_23330[(9)]);
var inst_23275 = cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(inst_23252);
var inst_23276 = [cljs.core.str("WARNING: "),cljs.core.str(inst_23275),cljs.core.str(" is unknown")].join('');
var inst_23277 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23276], 0));
var state_23330__$1 = state_23330;
var statearr_23390_23444 = state_23330__$1;
(statearr_23390_23444[(2)] = inst_23277);

(statearr_23390_23444[(1)] = (9));


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
});})(c__16627__auto__,schema__$1,map__23248,map__23248__$1,coercion_matcher,ch,___$1,map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
;
return ((function (switch__16547__auto__,c__16627__auto__,schema__$1,map__23248,map__23248__$1,coercion_matcher,ch,___$1,map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_23394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23394[(0)] = state_machine__16548__auto__);

(statearr_23394[(1)] = (1));

return statearr_23394;
});
var state_machine__16548__auto____1 = (function (state_23330){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_23330);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e23395){if((e23395 instanceof Object)){
var ex__16551__auto__ = e23395;
var statearr_23396_23445 = state_23330;
(statearr_23396_23445[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23330);

return cljs.core.constant$keyword$99;
} else {
throw e23395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__23446 = state_23330;
state_23330 = G__23446;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_23330){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_23330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__,schema__$1,map__23248,map__23248__$1,coercion_matcher,ch,___$1,map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
})();
var state__16629__auto__ = (function (){var statearr_23397 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_23397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_23397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto__,schema__$1,map__23248,map__23248__$1,coercion_matcher,ch,___$1,map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
);

return c__16627__auto__;
});})(map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
;

lomakkeet.fields.t23242.prototype.om$core$IInitState$ = true;

lomakkeet.fields.t23242.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function (_){
var self__ = this;
var ___$1 = this;
if((schema.core.check(lomakkeet.fields.FormState,self__.form_state) == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"FormState","FormState",834878066,null),new cljs.core.Symbol(null,"form-state","form-state",-256843510,null)))], 0)))].join('')));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$147,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$152,lomakkeet.fields.default_form_group,cljs.core.constant$keyword$167,schema.coerce.json_coercion_matcher], null),self__.form], 0));
});})(map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
;

lomakkeet.fields.t23242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function (_23244){
var self__ = this;
var _23244__$1 = this;
return self__.meta23243;
});})(map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
;

lomakkeet.fields.t23242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function (_23244,meta23243__$1){
var self__ = this;
var _23244__$1 = this;
return (new lomakkeet.fields.t23242(self__.form,self__.map__23239,self__.map__23241,self__.after_change,self__.G__23064,self__.owner,self__.G__23066,self__.validate__12581__auto__,self__.output_schema23060,self__.form_validation_fn,self__.map__23238,self__.form_state,self__.map__23240,self__.render_fn,self__.value,self__.G__23065,self__.input_checker23062,self__.actions,self__.output_checker23063,self__.input_schema23061,self__.opts,self__.initial_value,self__.ufv__,self__.G__23237,self__.G__23236,meta23243__$1));
});})(map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
;

lomakkeet.fields.t23242.cljs$lang$type = true;

lomakkeet.fields.t23242.cljs$lang$ctorStr = "lomakkeet.fields/t23242";

lomakkeet.fields.t23242.cljs$lang$ctorPrWriter = ((function (map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t23242");
});})(map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
;

lomakkeet.fields.__GT_t23242 = ((function (map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403){
return (function __GT_t23242(form__$3,map__23239__$2,map__23241__$2,after_change__$2,G__23064__$1,owner__$3,G__23066__$1,validate__12581__auto____$1,output_schema23060__$1,form_validation_fn__$2,map__23238__$2,form_state__$2,map__23240__$2,render_fn__$2,value__$2,G__23065__$1,input_checker23062__$1,actions__$2,output_checker23063__$1,input_schema23061__$1,opts__$2,initial_value__$2,ufv____$1,G__23237__$2,G__23236__$2,meta23243){
return (new lomakkeet.fields.t23242(form__$3,map__23239__$2,map__23241__$2,after_change__$2,G__23064__$1,owner__$3,G__23066__$1,validate__12581__auto____$1,output_schema23060__$1,form_validation_fn__$2,map__23238__$2,form_state__$2,map__23240__$2,render_fn__$2,value__$2,G__23065__$1,input_checker23062__$1,actions__$2,output_checker23063__$1,input_schema23061__$1,opts__$2,initial_value__$2,ufv____$1,G__23237__$2,G__23236__$2,meta23243));
});})(map__23240,map__23240__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23241,map__23241__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23236,map__23238,map__23238__$1,form_state,initial_value,value,owner,G__23237,map__23239,map__23239__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
;

}

return (new lomakkeet.fields.t23242(form__$2,map__23239__$1,map__23241__$1,after_change__$1,G__23064,owner__$2,G__23066,validate__12581__auto__,output_schema23060_23400,form_validation_fn__$1,map__23238__$1,form_state__$1,map__23240__$1,render_fn__$1,value__$1,G__23065,input_checker23062_23402,actions__$1,output_checker23063_23403,input_schema23061_23401,opts__$1,initial_value__$1,ufv___23399,G__23237__$1,G__23236__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___23447 = (function (){var G__23398 = o__12584__auto__;
return (output_checker23063_23403.cljs$core$IFn$_invoke$arity$1 ? output_checker23063_23403.cljs$core$IFn$_invoke$arity$1(G__23398) : output_checker23063_23403.call(null,G__23398));
})();
if(cljs.core.truth_(temp__4126__auto___23447)){
var error__12583__auto___23448 = temp__4126__auto___23447;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23448], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23448,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema23060_23400,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___23399,output_schema23060_23400,input_schema23061_23401,input_checker23062_23402,output_checker23063_23403))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.form),schema.core.make_fn_schema(output_schema23060_23400,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23061_23401], null)));

lomakkeet.fields.__GT_form = (function() {
var __GT_form = null;
var __GT_form__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.form,cursor__20832__auto__);
});
var __GT_form__2 = (function (cursor__20832__auto__,m23059){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,cursor__20832__auto__,m23059);
});
__GT_form = function(cursor__20832__auto__,m23059){
switch(arguments.length){
case 1:
return __GT_form__1.call(this,cursor__20832__auto__);
case 2:
return __GT_form__2.call(this,cursor__20832__auto__,m23059);
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
