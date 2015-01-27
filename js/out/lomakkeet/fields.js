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
var get_in_schema__delegate = function (schema__$1,ks,p__22714){
var vec__22716 = p__22714;
var not_found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22716,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22716,not_found){
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
});})(vec__22716,not_found))
,schema__$1,ks);
};
var get_in_schema = function (schema__$1,ks,var_args){
var p__22714 = null;
if (arguments.length > 2) {
var G__22717__i = 0, G__22717__a = new Array(arguments.length -  2);
while (G__22717__i < G__22717__a.length) {G__22717__a[G__22717__i] = arguments[G__22717__i + 2]; ++G__22717__i;}
  p__22714 = new cljs.core.IndexedSeq(G__22717__a,0);
} 
return get_in_schema__delegate.call(this,schema__$1,ks,p__22714);};
get_in_schema.cljs$lang$maxFixedArity = 2;
get_in_schema.cljs$lang$applyTo = (function (arglist__22718){
var schema__$1 = cljs.core.first(arglist__22718);
arglist__22718 = cljs.core.next(arglist__22718);
var ks = cljs.core.first(arglist__22718);
var p__22714 = cljs.core.rest(arglist__22718);
return get_in_schema__delegate(schema__$1,ks,p__22714);
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
lomakkeet.fields.dissoc_in = (function dissoc_in(m,p__22719){
var vec__22723 = p__22719;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22723,(0),null);
var ks = cljs.core.nthnext(vec__22723,(1));
var keys = vec__22723;
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
lomakkeet.fields.empty_cb = (function empty_cb(p__22724){
var map__22726 = p__22724;
var map__22726__$1 = ((cljs.core.seq_QMARK_(map__22726))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22726):map__22726);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22726__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22726__$1,cljs.core.constant$keyword$147);
return ((function (map__22726,map__22726__$1,ks,ch){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$66,null,cljs.core.constant$keyword$146,ks], null));
});
;})(map__22726,map__22726__$1,ks,ch))
});

var ufv___22771 = schema.utils.use_fn_validation;
var output_schema22728_22772 = schema.core.Any;
var input_schema22729_22773 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22730_22774 = schema.core.checker(input_schema22729_22773);
var output_checker22731_22775 = schema.core.checker(output_schema22728_22772);
/**
* Inputs: [state owner {:keys [real-input], :as opts}]
*/
lomakkeet.fields.emptyable_input = ((function (ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775){
return (function emptyable_input(G__22732,G__22733,G__22734){
var validate__12581__auto__ = ufv___22771.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22776 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22732,G__22733,G__22734], null);
var temp__4126__auto___22777 = (function (){var G__22753 = args__12582__auto___22776;
return (input_checker22730_22774.cljs$core$IFn$_invoke$arity$1 ? input_checker22730_22774.cljs$core$IFn$_invoke$arity$1(G__22753) : input_checker22730_22774.call(null,G__22753));
})();
if(cljs.core.truth_(temp__4126__auto___22777)){
var error__12583__auto___22778 = temp__4126__auto___22777;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22778], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22778,cljs.core.constant$keyword$66,args__12582__auto___22776,cljs.core.constant$keyword$67,input_schema22729_22773,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var state = G__22732;
var owner = G__22733;
var G__22755 = G__22734;
var map__22756 = G__22755;
var map__22756__$1 = ((cljs.core.seq_QMARK_(map__22756))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22756):map__22756);
var opts = map__22756__$1;
var real_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22756__$1,cljs.core.constant$keyword$149);
var state__$1 = state;
var owner__$1 = owner;
var G__22755__$1 = G__22755;
while(true){
var state__$2 = state__$1;
var owner__$2 = owner__$1;
var map__22757 = G__22755__$1;
var map__22757__$1 = ((cljs.core.seq_QMARK_(map__22757))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22757):map__22757);
var opts__$1 = map__22757__$1;
var real_input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22757__$1,cljs.core.constant$keyword$149);
if(typeof lomakkeet.fields.t22758 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22758 = (function (output_schema22728,G__22755,owner,G__22732,validate__12581__auto__,emptyable_input,G__22733,real_input,state,input_schema22729,map__22756,output_checker22731,G__22734,opts,ufv__,input_checker22730,map__22757,meta22759){
this.output_schema22728 = output_schema22728;
this.G__22755 = G__22755;
this.owner = owner;
this.G__22732 = G__22732;
this.validate__12581__auto__ = validate__12581__auto__;
this.emptyable_input = emptyable_input;
this.G__22733 = G__22733;
this.real_input = real_input;
this.state = state;
this.input_schema22729 = input_schema22729;
this.map__22756 = map__22756;
this.output_checker22731 = output_checker22731;
this.G__22734 = G__22734;
this.opts = opts;
this.ufv__ = ufv__;
this.input_checker22730 = input_checker22730;
this.map__22757 = map__22757;
this.meta22759 = meta22759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22758.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22758.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state__$2,owner__$2,map__22757,map__22757__$1,opts__$1,real_input__$1,state,owner,G__22755,map__22756,map__22756__$1,opts,real_input,validate__12581__auto__,ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775){
return (function (_){
var self__ = this;
var ___$1 = this;
return "emptyable-input";
});})(state__$2,owner__$2,map__22757,map__22757__$1,opts__$1,real_input__$1,state,owner,G__22755,map__22756,map__22756__$1,opts,real_input,validate__12581__auto__,ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775))
;

lomakkeet.fields.t22758.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22758.prototype.om$core$IRenderState$render_state$arity$2 = ((function (state__$2,owner__$2,map__22757,map__22757__$1,opts__$1,real_input__$1,state,owner,G__22755,map__22756,map__22756__$1,opts,real_input,validate__12581__auto__,ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var attrs22761 = om.core.build.cljs$core$IFn$_invoke$arity$3(self__.real_input,self__.state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,self__.opts,cljs.core.constant$keyword$53,s], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22761))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-group"], null)], null),attrs22761], 0))):{"className": "input-group"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22761))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22762 = {"className": "input-group-btn"};
var G__22763 = (function (){var G__22764 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22765 = "\u00D7";
return React.DOM.button(G__22764,G__22765);
})();
return React.DOM.span(G__22762,G__22763);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22761),(function (){var G__22766 = {"className": "input-group-btn"};
var G__22767 = (function (){var G__22768 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22769 = "\u00D7";
return React.DOM.button(G__22768,G__22769);
})();
return React.DOM.span(G__22766,G__22767);
})()], null))));
});})(state__$2,owner__$2,map__22757,map__22757__$1,opts__$1,real_input__$1,state,owner,G__22755,map__22756,map__22756__$1,opts,real_input,validate__12581__auto__,ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775))
;

lomakkeet.fields.t22758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state__$2,owner__$2,map__22757,map__22757__$1,opts__$1,real_input__$1,state,owner,G__22755,map__22756,map__22756__$1,opts,real_input,validate__12581__auto__,ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775){
return (function (_22760){
var self__ = this;
var _22760__$1 = this;
return self__.meta22759;
});})(state__$2,owner__$2,map__22757,map__22757__$1,opts__$1,real_input__$1,state,owner,G__22755,map__22756,map__22756__$1,opts,real_input,validate__12581__auto__,ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775))
;

lomakkeet.fields.t22758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state__$2,owner__$2,map__22757,map__22757__$1,opts__$1,real_input__$1,state,owner,G__22755,map__22756,map__22756__$1,opts,real_input,validate__12581__auto__,ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775){
return (function (_22760,meta22759__$1){
var self__ = this;
var _22760__$1 = this;
return (new lomakkeet.fields.t22758(self__.output_schema22728,self__.G__22755,self__.owner,self__.G__22732,self__.validate__12581__auto__,self__.emptyable_input,self__.G__22733,self__.real_input,self__.state,self__.input_schema22729,self__.map__22756,self__.output_checker22731,self__.G__22734,self__.opts,self__.ufv__,self__.input_checker22730,self__.map__22757,meta22759__$1));
});})(state__$2,owner__$2,map__22757,map__22757__$1,opts__$1,real_input__$1,state,owner,G__22755,map__22756,map__22756__$1,opts,real_input,validate__12581__auto__,ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775))
;

lomakkeet.fields.t22758.cljs$lang$type = true;

lomakkeet.fields.t22758.cljs$lang$ctorStr = "lomakkeet.fields/t22758";

lomakkeet.fields.t22758.cljs$lang$ctorPrWriter = ((function (state__$2,owner__$2,map__22757,map__22757__$1,opts__$1,real_input__$1,state,owner,G__22755,map__22756,map__22756__$1,opts,real_input,validate__12581__auto__,ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22758");
});})(state__$2,owner__$2,map__22757,map__22757__$1,opts__$1,real_input__$1,state,owner,G__22755,map__22756,map__22756__$1,opts,real_input,validate__12581__auto__,ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775))
;

lomakkeet.fields.__GT_t22758 = ((function (state__$2,owner__$2,map__22757,map__22757__$1,opts__$1,real_input__$1,state,owner,G__22755,map__22756,map__22756__$1,opts,real_input,validate__12581__auto__,ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775){
return (function __GT_t22758(output_schema22728__$1,G__22755__$2,owner__$3,G__22732__$1,validate__12581__auto____$1,emptyable_input__$1,G__22733__$1,real_input__$2,state__$3,input_schema22729__$1,map__22756__$2,output_checker22731__$1,G__22734__$1,opts__$2,ufv____$1,input_checker22730__$1,map__22757__$2,meta22759){
return (new lomakkeet.fields.t22758(output_schema22728__$1,G__22755__$2,owner__$3,G__22732__$1,validate__12581__auto____$1,emptyable_input__$1,G__22733__$1,real_input__$2,state__$3,input_schema22729__$1,map__22756__$2,output_checker22731__$1,G__22734__$1,opts__$2,ufv____$1,input_checker22730__$1,map__22757__$2,meta22759));
});})(state__$2,owner__$2,map__22757,map__22757__$1,opts__$1,real_input__$1,state,owner,G__22755,map__22756,map__22756__$1,opts,real_input,validate__12581__auto__,ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775))
;

}

return (new lomakkeet.fields.t22758(output_schema22728_22772,G__22755__$1,owner__$2,G__22732,validate__12581__auto__,emptyable_input,G__22733,real_input__$1,state__$2,input_schema22729_22773,map__22756__$1,output_checker22731_22775,G__22734,opts__$1,ufv___22771,input_checker22730_22774,map__22757__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22779 = (function (){var G__22770 = o__12584__auto__;
return (output_checker22731_22775.cljs$core$IFn$_invoke$arity$1 ? output_checker22731_22775.cljs$core$IFn$_invoke$arity$1(G__22770) : output_checker22731_22775.call(null,G__22770));
})();
if(cljs.core.truth_(temp__4126__auto___22779)){
var error__12583__auto___22780 = temp__4126__auto___22779;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22780], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22780,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22728_22772,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22771,output_schema22728_22772,input_schema22729_22773,input_checker22730_22774,output_checker22731_22775))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.emptyable_input),schema.core.make_fn_schema(output_schema22728_22772,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22729_22773], null)));

lomakkeet.fields.__GT_emptyable_input = (function() {
var __GT_emptyable_input = null;
var __GT_emptyable_input__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.emptyable_input,cursor__20832__auto__);
});
var __GT_emptyable_input__2 = (function (cursor__20832__auto__,m22727){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.emptyable_input,cursor__20832__auto__,m22727);
});
__GT_emptyable_input = function(cursor__20832__auto__,m22727){
switch(arguments.length){
case 1:
return __GT_emptyable_input__1.call(this,cursor__20832__auto__);
case 2:
return __GT_emptyable_input__2.call(this,cursor__20832__auto__,m22727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$1 = __GT_emptyable_input__1;
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$2 = __GT_emptyable_input__2;
return __GT_emptyable_input;
})()
;

var ufv___22833 = schema.utils.use_fn_validation;
var output_schema22782_22834 = schema.core.Any;
var input_schema22783_22835 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22784_22836 = schema.core.checker(input_schema22783_22835);
var output_checker22785_22837 = schema.core.checker(output_schema22782_22834);
/**
* Inputs: [{:keys [error], :as input-state} owner {:keys [input label size help-text], :or {size 6}, :as opts}]
*/
lomakkeet.fields.default_form_group = ((function (ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837){
return (function default_form_group(G__22786,G__22787,G__22788){
var validate__12581__auto__ = ufv___22833.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22838 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22786,G__22787,G__22788], null);
var temp__4126__auto___22839 = (function (){var G__22811 = args__12582__auto___22838;
return (input_checker22784_22836.cljs$core$IFn$_invoke$arity$1 ? input_checker22784_22836.cljs$core$IFn$_invoke$arity$1(G__22811) : input_checker22784_22836.call(null,G__22811));
})();
if(cljs.core.truth_(temp__4126__auto___22839)){
var error__12583__auto___22840 = temp__4126__auto___22839;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22840], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22840,cljs.core.constant$keyword$66,args__12582__auto___22838,cljs.core.constant$keyword$67,input_schema22783_22835,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22814 = G__22786;
var map__22816 = G__22814;
var map__22816__$1 = ((cljs.core.seq_QMARK_(map__22816))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22816):map__22816);
var input_state = map__22816__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22816__$1,cljs.core.constant$keyword$65);
var owner = G__22787;
var G__22815 = G__22788;
var map__22817 = G__22815;
var map__22817__$1 = ((cljs.core.seq_QMARK_(map__22817))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22817):map__22817);
var opts = map__22817__$1;
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22817__$1,cljs.core.constant$keyword$150);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22817__$1,cljs.core.constant$keyword$151,(6));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22817__$1,cljs.core.constant$keyword$137);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22817__$1,cljs.core.constant$keyword$124);
var G__22814__$1 = G__22814;
var owner__$1 = owner;
var G__22815__$1 = G__22815;
while(true){
var map__22818 = G__22814__$1;
var map__22818__$1 = ((cljs.core.seq_QMARK_(map__22818))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22818):map__22818);
var input_state__$1 = map__22818__$1;
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22818__$1,cljs.core.constant$keyword$65);
var owner__$2 = owner__$1;
var map__22819 = G__22815__$1;
var map__22819__$1 = ((cljs.core.seq_QMARK_(map__22819))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22819):map__22819);
var opts__$1 = map__22819__$1;
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22819__$1,cljs.core.constant$keyword$150);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22819__$1,cljs.core.constant$keyword$151,(6));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22819__$1,cljs.core.constant$keyword$137);
var input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22819__$1,cljs.core.constant$keyword$124);
if(typeof lomakkeet.fields.t22820 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22820 = (function (input,output_schema22782,default_form_group,owner,validate__12581__auto__,map__22818,G__22786,output_checker22785,input_state,G__22788,map__22817,G__22815,G__22814,map__22816,size,input_schema22783,input_checker22784,label,opts,ufv__,G__22787,help_text,error,map__22819,meta22821){
this.input = input;
this.output_schema22782 = output_schema22782;
this.default_form_group = default_form_group;
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.map__22818 = map__22818;
this.G__22786 = G__22786;
this.output_checker22785 = output_checker22785;
this.input_state = input_state;
this.G__22788 = G__22788;
this.map__22817 = map__22817;
this.G__22815 = G__22815;
this.G__22814 = G__22814;
this.map__22816 = map__22816;
this.size = size;
this.input_schema22783 = input_schema22783;
this.input_checker22784 = input_checker22784;
this.label = label;
this.opts = opts;
this.ufv__ = ufv__;
this.G__22787 = G__22787;
this.help_text = help_text;
this.error = error;
this.map__22819 = map__22819;
this.meta22821 = meta22821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22820.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22820.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22818,map__22818__$1,input_state__$1,error__$1,owner__$2,map__22819,map__22819__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22814,map__22816,map__22816__$1,input_state,error,owner,G__22815,map__22817,map__22817__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837){
return (function (_){
var self__ = this;
var ___$1 = this;
return "default-form-group";
});})(map__22818,map__22818__$1,input_state__$1,error__$1,owner__$2,map__22819,map__22819__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22814,map__22816,map__22816__$1,input_state,error,owner,G__22815,map__22817,map__22817__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837))
;

lomakkeet.fields.t22820.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22820.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22818,map__22818__$1,input_state__$1,error__$1,owner__$2,map__22819,map__22819__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22814,map__22816,map__22816__$1,input_state,error,owner,G__22815,map__22817,map__22817__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var G__22824 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",(function (){var G__22829 = cljs.core.PersistentVector.EMPTY;
var G__22829__$1 = (cljs.core.truth_(self__.error)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22829,"has-error"):G__22829);
var G__22829__$2 = (cljs.core.truth_(self__.size)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22829__$1,[cljs.core.str("col-md-"),cljs.core.str(self__.size)].join('')):G__22829__$1);
return G__22829__$2;
})()], null))};
var G__22825 = (function (){var attrs22823 = self__.label;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs22823))?sablono.interpreter.attributes(attrs22823):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22823))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22823),":"], null))));
})();
var G__22826 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(self__.input,self__.input_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,self__.opts,cljs.core.constant$keyword$53,s], null)));
var G__22827 = (cljs.core.truth_(self__.help_text)?(function (){var attrs22830 = self__.help_text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs22830))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22830], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22830))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22830)], null))));
})():null);
var G__22828 = (cljs.core.truth_((function (){var and__4239__auto__ = !(cljs.core.empty_QMARK_);
if(and__4239__auto__){
return self__.error;
} else {
return and__4239__auto__;
}
})())?(function (){var attrs22831 = [cljs.core.str(self__.error)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs22831))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22831], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22831))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22831)], null))));
})():null);
return React.DOM.div(G__22824,G__22825,G__22826,G__22827,G__22828);
});})(map__22818,map__22818__$1,input_state__$1,error__$1,owner__$2,map__22819,map__22819__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22814,map__22816,map__22816__$1,input_state,error,owner,G__22815,map__22817,map__22817__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837))
;

lomakkeet.fields.t22820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22818,map__22818__$1,input_state__$1,error__$1,owner__$2,map__22819,map__22819__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22814,map__22816,map__22816__$1,input_state,error,owner,G__22815,map__22817,map__22817__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837){
return (function (_22822){
var self__ = this;
var _22822__$1 = this;
return self__.meta22821;
});})(map__22818,map__22818__$1,input_state__$1,error__$1,owner__$2,map__22819,map__22819__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22814,map__22816,map__22816__$1,input_state,error,owner,G__22815,map__22817,map__22817__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837))
;

lomakkeet.fields.t22820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22818,map__22818__$1,input_state__$1,error__$1,owner__$2,map__22819,map__22819__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22814,map__22816,map__22816__$1,input_state,error,owner,G__22815,map__22817,map__22817__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837){
return (function (_22822,meta22821__$1){
var self__ = this;
var _22822__$1 = this;
return (new lomakkeet.fields.t22820(self__.input,self__.output_schema22782,self__.default_form_group,self__.owner,self__.validate__12581__auto__,self__.map__22818,self__.G__22786,self__.output_checker22785,self__.input_state,self__.G__22788,self__.map__22817,self__.G__22815,self__.G__22814,self__.map__22816,self__.size,self__.input_schema22783,self__.input_checker22784,self__.label,self__.opts,self__.ufv__,self__.G__22787,self__.help_text,self__.error,self__.map__22819,meta22821__$1));
});})(map__22818,map__22818__$1,input_state__$1,error__$1,owner__$2,map__22819,map__22819__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22814,map__22816,map__22816__$1,input_state,error,owner,G__22815,map__22817,map__22817__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837))
;

lomakkeet.fields.t22820.cljs$lang$type = true;

lomakkeet.fields.t22820.cljs$lang$ctorStr = "lomakkeet.fields/t22820";

lomakkeet.fields.t22820.cljs$lang$ctorPrWriter = ((function (map__22818,map__22818__$1,input_state__$1,error__$1,owner__$2,map__22819,map__22819__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22814,map__22816,map__22816__$1,input_state,error,owner,G__22815,map__22817,map__22817__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22820");
});})(map__22818,map__22818__$1,input_state__$1,error__$1,owner__$2,map__22819,map__22819__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22814,map__22816,map__22816__$1,input_state,error,owner,G__22815,map__22817,map__22817__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837))
;

lomakkeet.fields.__GT_t22820 = ((function (map__22818,map__22818__$1,input_state__$1,error__$1,owner__$2,map__22819,map__22819__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22814,map__22816,map__22816__$1,input_state,error,owner,G__22815,map__22817,map__22817__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837){
return (function __GT_t22820(input__$2,output_schema22782__$1,default_form_group__$1,owner__$3,validate__12581__auto____$1,map__22818__$2,G__22786__$1,output_checker22785__$1,input_state__$2,G__22788__$1,map__22817__$2,G__22815__$2,G__22814__$2,map__22816__$2,size__$2,input_schema22783__$1,input_checker22784__$1,label__$2,opts__$2,ufv____$1,G__22787__$1,help_text__$2,error__$2,map__22819__$2,meta22821){
return (new lomakkeet.fields.t22820(input__$2,output_schema22782__$1,default_form_group__$1,owner__$3,validate__12581__auto____$1,map__22818__$2,G__22786__$1,output_checker22785__$1,input_state__$2,G__22788__$1,map__22817__$2,G__22815__$2,G__22814__$2,map__22816__$2,size__$2,input_schema22783__$1,input_checker22784__$1,label__$2,opts__$2,ufv____$1,G__22787__$1,help_text__$2,error__$2,map__22819__$2,meta22821));
});})(map__22818,map__22818__$1,input_state__$1,error__$1,owner__$2,map__22819,map__22819__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22814,map__22816,map__22816__$1,input_state,error,owner,G__22815,map__22817,map__22817__$1,opts,help_text,size,label,input,validate__12581__auto__,ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837))
;

}

return (new lomakkeet.fields.t22820(input__$1,output_schema22782_22834,default_form_group,owner__$2,validate__12581__auto__,map__22818__$1,G__22786,output_checker22785_22837,input_state__$1,G__22788,map__22817__$1,G__22815__$1,G__22814__$1,map__22816__$1,size__$1,input_schema22783_22835,input_checker22784_22836,label__$1,opts__$1,ufv___22833,G__22787,help_text__$1,error__$1,map__22819__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22841 = (function (){var G__22832 = o__12584__auto__;
return (output_checker22785_22837.cljs$core$IFn$_invoke$arity$1 ? output_checker22785_22837.cljs$core$IFn$_invoke$arity$1(G__22832) : output_checker22785_22837.call(null,G__22832));
})();
if(cljs.core.truth_(temp__4126__auto___22841)){
var error__12583__auto___22842 = temp__4126__auto___22841;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22842], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22842,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22782_22834,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22833,output_schema22782_22834,input_schema22783_22835,input_checker22784_22836,output_checker22785_22837))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.default_form_group),schema.core.make_fn_schema(output_schema22782_22834,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22783_22835], null)));

lomakkeet.fields.__GT_default_form_group = (function() {
var __GT_default_form_group = null;
var __GT_default_form_group__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.default_form_group,cursor__20832__auto__);
});
var __GT_default_form_group__2 = (function (cursor__20832__auto__,m22781){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.default_form_group,cursor__20832__auto__,m22781);
});
__GT_default_form_group = function(cursor__20832__auto__,m22781){
switch(arguments.length){
case 1:
return __GT_default_form_group__1.call(this,cursor__20832__auto__);
case 2:
return __GT_default_form_group__2.call(this,cursor__20832__auto__,m22781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_default_form_group.cljs$core$IFn$_invoke$arity$1 = __GT_default_form_group__1;
__GT_default_form_group.cljs$core$IFn$_invoke$arity$2 = __GT_default_form_group__2;
return __GT_default_form_group;
})()
;
lomakkeet.fields.build = (function build(p__22843){
var map__22849 = p__22843;
var map__22849__$1 = ((cljs.core.seq_QMARK_(map__22849))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22849):map__22849);
var opts = map__22849__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22849__$1,cljs.core.constant$keyword$146);
var form_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22849__$1,cljs.core.constant$keyword$152);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22849__$1,cljs.core.constant$keyword$153);
var map__22850 = form_state;
var map__22850__$1 = ((cljs.core.seq_QMARK_(map__22850))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22850):map__22850);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22850__$1,cljs.core.constant$keyword$67);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22850__$1,cljs.core.constant$keyword$154);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22850__$1,cljs.core.constant$keyword$66);
return om.core.build.cljs$core$IFn$_invoke$arity$3(form_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22851 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22851) : cljs.core.deref.call(null,G__22851));
})(),ks),cljs.core.constant$keyword$65,(cljs.core.truth_(errors)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22852 = errors;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22852) : cljs.core.deref.call(null,G__22852));
})(),ks):null),cljs.core.constant$keyword$67,(cljs.core.truth_(schema__$1)?lomakkeet.fields.get_in_schema((function (){var G__22853 = schema__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22853) : cljs.core.deref.call(null,G__22853));
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

var ufv___22894 = schema.utils.use_fn_validation;
var output_schema22855_22895 = schema.core.Any;
var input_schema22856_22896 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22857_22897 = schema.core.checker(input_schema22856_22896);
var output_checker22858_22898 = schema.core.checker(output_schema22855_22895);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks el transform-value], :or {el input-input, transform-value identity}, :as opts}]
*/
lomakkeet.fields.input_STAR_ = ((function (ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898){
return (function input_STAR_(G__22859,G__22860,G__22861){
var validate__12581__auto__ = ufv___22894.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22899 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22859,G__22860,G__22861], null);
var temp__4126__auto___22900 = (function (){var G__22878 = args__12582__auto___22899;
return (input_checker22857_22897.cljs$core$IFn$_invoke$arity$1 ? input_checker22857_22897.cljs$core$IFn$_invoke$arity$1(G__22878) : input_checker22857_22897.call(null,G__22878));
})();
if(cljs.core.truth_(temp__4126__auto___22900)){
var error__12583__auto___22901 = temp__4126__auto___22900;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22901], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22901,cljs.core.constant$keyword$66,args__12582__auto___22899,cljs.core.constant$keyword$67,input_schema22856_22896,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22881 = G__22859;
var map__22883 = G__22881;
var map__22883__$1 = ((cljs.core.seq_QMARK_(map__22883))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22883):map__22883);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22883__$1,cljs.core.constant$keyword$66);
var owner = G__22860;
var G__22882 = G__22861;
var map__22884 = G__22882;
var map__22884__$1 = ((cljs.core.seq_QMARK_(map__22884))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22884):map__22884);
var opts = map__22884__$1;
var transform_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22884__$1,cljs.core.constant$keyword$159,cljs.core.identity);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22884__$1,cljs.core.constant$keyword$160,lomakkeet.fields.input_input);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22884__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22884__$1,cljs.core.constant$keyword$147);
var G__22881__$1 = G__22881;
var owner__$1 = owner;
var G__22882__$1 = G__22882;
while(true){
var map__22885 = G__22881__$1;
var map__22885__$1 = ((cljs.core.seq_QMARK_(map__22885))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22885):map__22885);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22885__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22886 = G__22882__$1;
var map__22886__$1 = ((cljs.core.seq_QMARK_(map__22886))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22886):map__22886);
var opts__$1 = map__22886__$1;
var transform_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22886__$1,cljs.core.constant$keyword$159,cljs.core.identity);
var el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22886__$1,cljs.core.constant$keyword$160,lomakkeet.fields.input_input);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22886__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22886__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22887 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22887 = (function (map__22884,output_schema22855,owner,input_schema22856,input_STAR_,map__22885,validate__12581__auto__,map__22883,G__22860,el,output_checker22858,ks,value,map__22886,G__22859,G__22882,transform_value,G__22881,ch,G__22861,opts,ufv__,input_checker22857,meta22888){
this.map__22884 = map__22884;
this.output_schema22855 = output_schema22855;
this.owner = owner;
this.input_schema22856 = input_schema22856;
this.input_STAR_ = input_STAR_;
this.map__22885 = map__22885;
this.validate__12581__auto__ = validate__12581__auto__;
this.map__22883 = map__22883;
this.G__22860 = G__22860;
this.el = el;
this.output_checker22858 = output_checker22858;
this.ks = ks;
this.value = value;
this.map__22886 = map__22886;
this.G__22859 = G__22859;
this.G__22882 = G__22882;
this.transform_value = transform_value;
this.G__22881 = G__22881;
this.ch = ch;
this.G__22861 = G__22861;
this.opts = opts;
this.ufv__ = ufv__;
this.input_checker22857 = input_checker22857;
this.meta22888 = meta22888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22887.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22887.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898){
return (function (_){
var self__ = this;
var ___$1 = this;
return "input*";
});})(map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898))
;

lomakkeet.fields.t22887.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22887.prototype.om$core$IRender$render$arity$1 = ((function (map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__22890 = (function (){var G__22892 = self__.value;
return (self__.transform_value.cljs$core$IFn$_invoke$arity$1 ? self__.transform_value.cljs$core$IFn$_invoke$arity$1(G__22892) : self__.transform_value.call(null,G__22892));
})();
var G__22891 = ((function (G__22890,___$1,map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,e.target.value], null));
});})(G__22890,___$1,map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898))
;
return (self__.el.cljs$core$IFn$_invoke$arity$2 ? self__.el.cljs$core$IFn$_invoke$arity$2(G__22890,G__22891) : self__.el.call(null,G__22890,G__22891));
})());
});})(map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898))
;

lomakkeet.fields.t22887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898){
return (function (_22889){
var self__ = this;
var _22889__$1 = this;
return self__.meta22888;
});})(map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898))
;

lomakkeet.fields.t22887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898){
return (function (_22889,meta22888__$1){
var self__ = this;
var _22889__$1 = this;
return (new lomakkeet.fields.t22887(self__.map__22884,self__.output_schema22855,self__.owner,self__.input_schema22856,self__.input_STAR_,self__.map__22885,self__.validate__12581__auto__,self__.map__22883,self__.G__22860,self__.el,self__.output_checker22858,self__.ks,self__.value,self__.map__22886,self__.G__22859,self__.G__22882,self__.transform_value,self__.G__22881,self__.ch,self__.G__22861,self__.opts,self__.ufv__,self__.input_checker22857,meta22888__$1));
});})(map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898))
;

lomakkeet.fields.t22887.cljs$lang$type = true;

lomakkeet.fields.t22887.cljs$lang$ctorStr = "lomakkeet.fields/t22887";

lomakkeet.fields.t22887.cljs$lang$ctorPrWriter = ((function (map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22887");
});})(map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898))
;

lomakkeet.fields.__GT_t22887 = ((function (map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898){
return (function __GT_t22887(map__22884__$2,output_schema22855__$1,owner__$3,input_schema22856__$1,input_STAR___$1,map__22885__$2,validate__12581__auto____$1,map__22883__$2,G__22860__$1,el__$2,output_checker22858__$1,ks__$2,value__$2,map__22886__$2,G__22859__$1,G__22882__$2,transform_value__$2,G__22881__$2,ch__$2,G__22861__$1,opts__$2,ufv____$1,input_checker22857__$1,meta22888){
return (new lomakkeet.fields.t22887(map__22884__$2,output_schema22855__$1,owner__$3,input_schema22856__$1,input_STAR___$1,map__22885__$2,validate__12581__auto____$1,map__22883__$2,G__22860__$1,el__$2,output_checker22858__$1,ks__$2,value__$2,map__22886__$2,G__22859__$1,G__22882__$2,transform_value__$2,G__22881__$2,ch__$2,G__22861__$1,opts__$2,ufv____$1,input_checker22857__$1,meta22888));
});})(map__22885,map__22885__$1,value__$1,owner__$2,map__22886,map__22886__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22881,map__22883,map__22883__$1,value,owner,G__22882,map__22884,map__22884__$1,opts,transform_value,el,ks,ch,validate__12581__auto__,ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898))
;

}

return (new lomakkeet.fields.t22887(map__22884__$1,output_schema22855_22895,owner__$2,input_schema22856_22896,input_STAR_,map__22885__$1,validate__12581__auto__,map__22883__$1,G__22860,el__$1,output_checker22858_22898,ks__$1,value__$1,map__22886__$1,G__22859,G__22882__$1,transform_value__$1,G__22881__$1,ch__$1,G__22861,opts__$1,ufv___22894,input_checker22857_22897,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22902 = (function (){var G__22893 = o__12584__auto__;
return (output_checker22858_22898.cljs$core$IFn$_invoke$arity$1 ? output_checker22858_22898.cljs$core$IFn$_invoke$arity$1(G__22893) : output_checker22858_22898.call(null,G__22893));
})();
if(cljs.core.truth_(temp__4126__auto___22902)){
var error__12583__auto___22903 = temp__4126__auto___22902;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22903], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22903,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22855_22895,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22894,output_schema22855_22895,input_schema22856_22896,input_checker22857_22897,output_checker22858_22898))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.input_STAR_),schema.core.make_fn_schema(output_schema22855_22895,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22856_22896], null)));

lomakkeet.fields.__GT_input_STAR_ = (function() {
var __GT_input_STAR_ = null;
var __GT_input_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.input_STAR_,cursor__20832__auto__);
});
var __GT_input_STAR___2 = (function (cursor__20832__auto__,m22854){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.input_STAR_,cursor__20832__auto__,m22854);
});
__GT_input_STAR_ = function(cursor__20832__auto__,m22854){
switch(arguments.length){
case 1:
return __GT_input_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_input_STAR___2.call(this,cursor__20832__auto__,m22854);
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
var input__delegate = function (form,label,ks,p__22904){
var vec__22906 = p__22904;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22906,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var input = function (form,label,ks,var_args){
var p__22904 = null;
if (arguments.length > 3) {
var G__22907__i = 0, G__22907__a = new Array(arguments.length -  3);
while (G__22907__i < G__22907__a.length) {G__22907__a[G__22907__i] = arguments[G__22907__i + 3]; ++G__22907__i;}
  p__22904 = new cljs.core.IndexedSeq(G__22907__a,0);
} 
return input__delegate.call(this,form,label,ks,p__22904);};
input.cljs$lang$maxFixedArity = 3;
input.cljs$lang$applyTo = (function (arglist__22908){
var form = cljs.core.first(arglist__22908);
arglist__22908 = cljs.core.next(arglist__22908);
var label = cljs.core.first(arglist__22908);
arglist__22908 = cljs.core.next(arglist__22908);
var ks = cljs.core.first(arglist__22908);
var p__22904 = cljs.core.rest(arglist__22908);
return input__delegate(form,label,ks,p__22904);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.textarea = (function() { 
var textarea__delegate = function (form,label,ks,p__22909){
var vec__22911 = p__22909;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22911,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$160,lomakkeet.fields.input_textarea], null)], 0)));
};
var textarea = function (form,label,ks,var_args){
var p__22909 = null;
if (arguments.length > 3) {
var G__22912__i = 0, G__22912__a = new Array(arguments.length -  3);
while (G__22912__i < G__22912__a.length) {G__22912__a[G__22912__i] = arguments[G__22912__i + 3]; ++G__22912__i;}
  p__22909 = new cljs.core.IndexedSeq(G__22912__a,0);
} 
return textarea__delegate.call(this,form,label,ks,p__22909);};
textarea.cljs$lang$maxFixedArity = 3;
textarea.cljs$lang$applyTo = (function (arglist__22913){
var form = cljs.core.first(arglist__22913);
arglist__22913 = cljs.core.next(arglist__22913);
var label = cljs.core.first(arglist__22913);
arglist__22913 = cljs.core.next(arglist__22913);
var ks = cljs.core.first(arglist__22913);
var p__22909 = cljs.core.rest(arglist__22913);
return textarea__delegate(form,label,ks,p__22909);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.static$ = (function() { 
var static$__delegate = function (form,label,ks,p__22914){
var vec__22916 = p__22914;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22916,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$160,lomakkeet.fields.input_static], null)], 0)));
};
var static$ = function (form,label,ks,var_args){
var p__22914 = null;
if (arguments.length > 3) {
var G__22917__i = 0, G__22917__a = new Array(arguments.length -  3);
while (G__22917__i < G__22917__a.length) {G__22917__a[G__22917__i] = arguments[G__22917__i + 3]; ++G__22917__i;}
  p__22914 = new cljs.core.IndexedSeq(G__22917__a,0);
} 
return static$__delegate.call(this,form,label,ks,p__22914);};
static$.cljs$lang$maxFixedArity = 3;
static$.cljs$lang$applyTo = (function (arglist__22918){
var form = cljs.core.first(arglist__22918);
arglist__22918 = cljs.core.next(arglist__22918);
var label = cljs.core.first(arglist__22918);
arglist__22918 = cljs.core.next(arglist__22918);
var ks = cljs.core.first(arglist__22918);
var p__22914 = cljs.core.rest(arglist__22918);
return static$__delegate(form,label,ks,p__22914);
});
static$.cljs$core$IFn$_invoke$arity$variadic = static$__delegate;
return static$;
})()
;

var ufv___22955 = schema.utils.use_fn_validation;
var output_schema22920_22956 = schema.core.Any;
var input_schema22921_22957 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22922_22958 = schema.core.checker(input_schema22921_22957);
var output_checker22923_22959 = schema.core.checker(output_schema22920_22956);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks], :as opts}]
*/
lomakkeet.fields.checkbox_STAR_ = ((function (ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959){
return (function checkbox_STAR_(G__22924,G__22925,G__22926){
var validate__12581__auto__ = ufv___22955.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22960 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22924,G__22925,G__22926], null);
var temp__4126__auto___22961 = (function (){var G__22941 = args__12582__auto___22960;
return (input_checker22922_22958.cljs$core$IFn$_invoke$arity$1 ? input_checker22922_22958.cljs$core$IFn$_invoke$arity$1(G__22941) : input_checker22922_22958.call(null,G__22941));
})();
if(cljs.core.truth_(temp__4126__auto___22961)){
var error__12583__auto___22962 = temp__4126__auto___22961;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22962], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22962,cljs.core.constant$keyword$66,args__12582__auto___22960,cljs.core.constant$keyword$67,input_schema22921_22957,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22944 = G__22924;
var map__22946 = G__22944;
var map__22946__$1 = ((cljs.core.seq_QMARK_(map__22946))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22946):map__22946);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22946__$1,cljs.core.constant$keyword$66);
var owner = G__22925;
var G__22945 = G__22926;
var map__22947 = G__22945;
var map__22947__$1 = ((cljs.core.seq_QMARK_(map__22947))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22947):map__22947);
var opts = map__22947__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22947__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22947__$1,cljs.core.constant$keyword$147);
var G__22944__$1 = G__22944;
var owner__$1 = owner;
var G__22945__$1 = G__22945;
while(true){
var map__22948 = G__22944__$1;
var map__22948__$1 = ((cljs.core.seq_QMARK_(map__22948))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22948):map__22948);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22949 = G__22945__$1;
var map__22949__$1 = ((cljs.core.seq_QMARK_(map__22949))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22949):map__22949);
var opts__$1 = map__22949__$1;
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22950 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22950 = (function (G__22945,G__22924,owner,validate__12581__auto__,input_schema22921,ks,G__22926,value,map__22947,map__22948,G__22925,ch,output_checker22923,output_schema22920,checkbox_STAR_,G__22944,map__22949,opts,map__22946,input_checker22922,ufv__,meta22951){
this.G__22945 = G__22945;
this.G__22924 = G__22924;
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.input_schema22921 = input_schema22921;
this.ks = ks;
this.G__22926 = G__22926;
this.value = value;
this.map__22947 = map__22947;
this.map__22948 = map__22948;
this.G__22925 = G__22925;
this.ch = ch;
this.output_checker22923 = output_checker22923;
this.output_schema22920 = output_schema22920;
this.checkbox_STAR_ = checkbox_STAR_;
this.G__22944 = G__22944;
this.map__22949 = map__22949;
this.opts = opts;
this.map__22946 = map__22946;
this.input_checker22922 = input_checker22922;
this.ufv__ = ufv__;
this.meta22951 = meta22951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22950.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22950.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959){
return (function (_){
var self__ = this;
var ___$1 = this;
return "checkbox*";
});})(map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959))
;

lomakkeet.fields.t22950.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22950.prototype.om$core$IRender$render$arity$1 = ((function (map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22953 = {"type": "checkbox", "checked": cljs.core.boolean$(self__.value), "onChange": ((function (___$1,map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,e.target.checked], null));
});})(___$1,map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22953) : sablono.interpreter.input.call(null,G__22953));
});})(map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959))
;

lomakkeet.fields.t22950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959){
return (function (_22952){
var self__ = this;
var _22952__$1 = this;
return self__.meta22951;
});})(map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959))
;

lomakkeet.fields.t22950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959){
return (function (_22952,meta22951__$1){
var self__ = this;
var _22952__$1 = this;
return (new lomakkeet.fields.t22950(self__.G__22945,self__.G__22924,self__.owner,self__.validate__12581__auto__,self__.input_schema22921,self__.ks,self__.G__22926,self__.value,self__.map__22947,self__.map__22948,self__.G__22925,self__.ch,self__.output_checker22923,self__.output_schema22920,self__.checkbox_STAR_,self__.G__22944,self__.map__22949,self__.opts,self__.map__22946,self__.input_checker22922,self__.ufv__,meta22951__$1));
});})(map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959))
;

lomakkeet.fields.t22950.cljs$lang$type = true;

lomakkeet.fields.t22950.cljs$lang$ctorStr = "lomakkeet.fields/t22950";

lomakkeet.fields.t22950.cljs$lang$ctorPrWriter = ((function (map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t22950");
});})(map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959))
;

lomakkeet.fields.__GT_t22950 = ((function (map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959){
return (function __GT_t22950(G__22945__$2,G__22924__$1,owner__$3,validate__12581__auto____$1,input_schema22921__$1,ks__$2,G__22926__$1,value__$2,map__22947__$2,map__22948__$2,G__22925__$1,ch__$2,output_checker22923__$1,output_schema22920__$1,checkbox_STAR___$1,G__22944__$2,map__22949__$2,opts__$2,map__22946__$2,input_checker22922__$1,ufv____$1,meta22951){
return (new lomakkeet.fields.t22950(G__22945__$2,G__22924__$1,owner__$3,validate__12581__auto____$1,input_schema22921__$1,ks__$2,G__22926__$1,value__$2,map__22947__$2,map__22948__$2,G__22925__$1,ch__$2,output_checker22923__$1,output_schema22920__$1,checkbox_STAR___$1,G__22944__$2,map__22949__$2,opts__$2,map__22946__$2,input_checker22922__$1,ufv____$1,meta22951));
});})(map__22948,map__22948__$1,value__$1,owner__$2,map__22949,map__22949__$1,opts__$1,ks__$1,ch__$1,G__22944,map__22946,map__22946__$1,value,owner,G__22945,map__22947,map__22947__$1,opts,ks,ch,validate__12581__auto__,ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959))
;

}

return (new lomakkeet.fields.t22950(G__22945__$1,G__22924,owner__$2,validate__12581__auto__,input_schema22921_22957,ks__$1,G__22926,value__$1,map__22947__$1,map__22948__$1,G__22925,ch__$1,output_checker22923_22959,output_schema22920_22956,checkbox_STAR_,G__22944__$1,map__22949__$1,opts__$1,map__22946__$1,input_checker22922_22958,ufv___22955,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22963 = (function (){var G__22954 = o__12584__auto__;
return (output_checker22923_22959.cljs$core$IFn$_invoke$arity$1 ? output_checker22923_22959.cljs$core$IFn$_invoke$arity$1(G__22954) : output_checker22923_22959.call(null,G__22954));
})();
if(cljs.core.truth_(temp__4126__auto___22963)){
var error__12583__auto___22964 = temp__4126__auto___22963;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22964], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22964,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22920_22956,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22955,output_schema22920_22956,input_schema22921_22957,input_checker22922_22958,output_checker22923_22959))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.checkbox_STAR_),schema.core.make_fn_schema(output_schema22920_22956,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22921_22957], null)));

lomakkeet.fields.__GT_checkbox_STAR_ = (function() {
var __GT_checkbox_STAR_ = null;
var __GT_checkbox_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.checkbox_STAR_,cursor__20832__auto__);
});
var __GT_checkbox_STAR___2 = (function (cursor__20832__auto__,m22919){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.checkbox_STAR_,cursor__20832__auto__,m22919);
});
__GT_checkbox_STAR_ = function(cursor__20832__auto__,m22919){
switch(arguments.length){
case 1:
return __GT_checkbox_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_checkbox_STAR___2.call(this,cursor__20832__auto__,m22919);
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
var checkbox__delegate = function (form,label,ks,p__22965){
var vec__22967 = p__22965;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22967,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.fields.checkbox_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var checkbox = function (form,label,ks,var_args){
var p__22965 = null;
if (arguments.length > 3) {
var G__22968__i = 0, G__22968__a = new Array(arguments.length -  3);
while (G__22968__i < G__22968__a.length) {G__22968__a[G__22968__i] = arguments[G__22968__i + 3]; ++G__22968__i;}
  p__22965 = new cljs.core.IndexedSeq(G__22968__a,0);
} 
return checkbox__delegate.call(this,form,label,ks,p__22965);};
checkbox.cljs$lang$maxFixedArity = 3;
checkbox.cljs$lang$applyTo = (function (arglist__22969){
var form = cljs.core.first(arglist__22969);
arglist__22969 = cljs.core.next(arglist__22969);
var label = cljs.core.first(arglist__22969);
arglist__22969 = cljs.core.next(arglist__22969);
var ks = cljs.core.first(arglist__22969);
var p__22965 = cljs.core.rest(arglist__22969);
return checkbox__delegate(form,label,ks,p__22965);
});
checkbox.cljs$core$IFn$_invoke$arity$variadic = checkbox__delegate;
return checkbox;
})()
;

var ufv___23028 = schema.utils.use_fn_validation;
var output_schema22971_23029 = schema.core.Any;
var input_schema22972_23030 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22973_23031 = schema.core.checker(input_schema22972_23030);
var output_checker22974_23032 = schema.core.checker(output_schema22971_23029);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks options], :as opts}]
*/
lomakkeet.fields.select_STAR_ = ((function (ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032){
return (function select_STAR_(G__22975,G__22976,G__22977){
var validate__12581__auto__ = ufv___23028.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___23033 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22975,G__22976,G__22977], null);
var temp__4126__auto___23034 = (function (){var G__23003 = args__12582__auto___23033;
return (input_checker22973_23031.cljs$core$IFn$_invoke$arity$1 ? input_checker22973_23031.cljs$core$IFn$_invoke$arity$1(G__23003) : input_checker22973_23031.call(null,G__23003));
})();
if(cljs.core.truth_(temp__4126__auto___23034)){
var error__12583__auto___23035 = temp__4126__auto___23034;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23035], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23035,cljs.core.constant$keyword$66,args__12582__auto___23033,cljs.core.constant$keyword$67,input_schema22972_23030,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__23006 = G__22975;
var map__23008 = G__23006;
var map__23008__$1 = ((cljs.core.seq_QMARK_(map__23008))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23008):map__23008);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23008__$1,cljs.core.constant$keyword$66);
var owner = G__22976;
var G__23007 = G__22977;
var map__23009 = G__23007;
var map__23009__$1 = ((cljs.core.seq_QMARK_(map__23009))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23009):map__23009);
var opts = map__23009__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,cljs.core.constant$keyword$161);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,cljs.core.constant$keyword$147);
var G__23006__$1 = G__23006;
var owner__$1 = owner;
var G__23007__$1 = G__23007;
while(true){
var map__23010 = G__23006__$1;
var map__23010__$1 = ((cljs.core.seq_QMARK_(map__23010))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23010):map__23010);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23010__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__23011 = G__23007__$1;
var map__23011__$1 = ((cljs.core.seq_QMARK_(map__23011))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23011):map__23011);
var opts__$1 = map__23011__$1;
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23011__$1,cljs.core.constant$keyword$161);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23011__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23011__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t23012 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t23012 = (function (options,G__23007,owner,validate__12581__auto__,output_schema22971,G__22976,G__22975,ks,map__23011,map__23008,value,G__23006,output_checker22974,input_schema22972,map__23010,ch,G__22977,select_STAR_,map__23009,input_checker22973,opts,ufv__,meta23013){
this.options = options;
this.G__23007 = G__23007;
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.output_schema22971 = output_schema22971;
this.G__22976 = G__22976;
this.G__22975 = G__22975;
this.ks = ks;
this.map__23011 = map__23011;
this.map__23008 = map__23008;
this.value = value;
this.G__23006 = G__23006;
this.output_checker22974 = output_checker22974;
this.input_schema22972 = input_schema22972;
this.map__23010 = map__23010;
this.ch = ch;
this.G__22977 = G__22977;
this.select_STAR_ = select_STAR_;
this.map__23009 = map__23009;
this.input_checker22973 = input_checker22973;
this.opts = opts;
this.ufv__ = ufv__;
this.meta23013 = meta23013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t23012.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t23012.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032){
return (function (_){
var self__ = this;
var ___$1 = this;
return "select*";
});})(map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032))
;

lomakkeet.fields.t23012.prototype.om$core$IRender$ = true;

lomakkeet.fields.t23012.prototype.om$core$IRender$render$arity$1 = ((function (map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23015 = {"className": "form-control", "value": self__.value, "onChange": ((function (___$1,map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,e.target.value], null));
});})(___$1,map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032))
};
var G__23016 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(self__.options))?(function (){var iter__5007__auto__ = ((function (G__23015,___$1,map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032){
return (function iter__23017(s__23018){
return (new cljs.core.LazySeq(null,((function (G__23015,___$1,map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032){
return (function (){
var s__23018__$1 = s__23018;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23018__$1);
if(temp__4126__auto__){
var s__23018__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23018__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__23018__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__23020 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__23019 = (0);
while(true){
if((i__23019 < size__5006__auto__)){
var vec__23025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__23019);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23025,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23025,(1),null);
cljs.core.chunk_append(b__23020,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,k,cljs.core.constant$keyword$51,k], null),v], null));

var G__23036 = (i__23019 + (1));
i__23019 = G__23036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23020),iter__23017(cljs.core.chunk_rest(s__23018__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23020),null);
}
} else {
var vec__23026 = cljs.core.first(s__23018__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23026,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23026,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,k,cljs.core.constant$keyword$51,k], null),v], null),iter__23017(cljs.core.rest(s__23018__$2)));
}
} else {
return null;
}
break;
}
});})(G__23015,___$1,map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032))
,null,null));
});})(G__23015,___$1,map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032))
;
return iter__5007__auto__(self__.options);
})():null));
return React.DOM.select(G__23015,G__23016);
});})(map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032))
;

lomakkeet.fields.t23012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032){
return (function (_23014){
var self__ = this;
var _23014__$1 = this;
return self__.meta23013;
});})(map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032))
;

lomakkeet.fields.t23012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032){
return (function (_23014,meta23013__$1){
var self__ = this;
var _23014__$1 = this;
return (new lomakkeet.fields.t23012(self__.options,self__.G__23007,self__.owner,self__.validate__12581__auto__,self__.output_schema22971,self__.G__22976,self__.G__22975,self__.ks,self__.map__23011,self__.map__23008,self__.value,self__.G__23006,self__.output_checker22974,self__.input_schema22972,self__.map__23010,self__.ch,self__.G__22977,self__.select_STAR_,self__.map__23009,self__.input_checker22973,self__.opts,self__.ufv__,meta23013__$1));
});})(map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032))
;

lomakkeet.fields.t23012.cljs$lang$type = true;

lomakkeet.fields.t23012.cljs$lang$ctorStr = "lomakkeet.fields/t23012";

lomakkeet.fields.t23012.cljs$lang$ctorPrWriter = ((function (map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t23012");
});})(map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032))
;

lomakkeet.fields.__GT_t23012 = ((function (map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032){
return (function __GT_t23012(options__$2,G__23007__$2,owner__$3,validate__12581__auto____$1,output_schema22971__$1,G__22976__$1,G__22975__$1,ks__$2,map__23011__$2,map__23008__$2,value__$2,G__23006__$2,output_checker22974__$1,input_schema22972__$1,map__23010__$2,ch__$2,G__22977__$1,select_STAR___$1,map__23009__$2,input_checker22973__$1,opts__$2,ufv____$1,meta23013){
return (new lomakkeet.fields.t23012(options__$2,G__23007__$2,owner__$3,validate__12581__auto____$1,output_schema22971__$1,G__22976__$1,G__22975__$1,ks__$2,map__23011__$2,map__23008__$2,value__$2,G__23006__$2,output_checker22974__$1,input_schema22972__$1,map__23010__$2,ch__$2,G__22977__$1,select_STAR___$1,map__23009__$2,input_checker22973__$1,opts__$2,ufv____$1,meta23013));
});})(map__23010,map__23010__$1,value__$1,owner__$2,map__23011,map__23011__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23006,map__23008,map__23008__$1,value,owner,G__23007,map__23009,map__23009__$1,opts,options,ks,ch,validate__12581__auto__,ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032))
;

}

return (new lomakkeet.fields.t23012(options__$1,G__23007__$1,owner__$2,validate__12581__auto__,output_schema22971_23029,G__22976,G__22975,ks__$1,map__23011__$1,map__23008__$1,value__$1,G__23006__$1,output_checker22974_23032,input_schema22972_23030,map__23010__$1,ch__$1,G__22977,select_STAR_,map__23009__$1,input_checker22973_23031,opts__$1,ufv___23028,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___23037 = (function (){var G__23027 = o__12584__auto__;
return (output_checker22974_23032.cljs$core$IFn$_invoke$arity$1 ? output_checker22974_23032.cljs$core$IFn$_invoke$arity$1(G__23027) : output_checker22974_23032.call(null,G__23027));
})();
if(cljs.core.truth_(temp__4126__auto___23037)){
var error__12583__auto___23038 = temp__4126__auto___23037;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23038], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23038,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22971_23029,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___23028,output_schema22971_23029,input_schema22972_23030,input_checker22973_23031,output_checker22974_23032))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.select_STAR_),schema.core.make_fn_schema(output_schema22971_23029,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22972_23030], null)));

lomakkeet.fields.__GT_select_STAR_ = (function() {
var __GT_select_STAR_ = null;
var __GT_select_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.select_STAR_,cursor__20832__auto__);
});
var __GT_select_STAR___2 = (function (cursor__20832__auto__,m22970){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.select_STAR_,cursor__20832__auto__,m22970);
});
__GT_select_STAR_ = function(cursor__20832__auto__,m22970){
switch(arguments.length){
case 1:
return __GT_select_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_select_STAR___2.call(this,cursor__20832__auto__,m22970);
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
var select__delegate = function (form,label,ks,options,p__23039){
var vec__23041 = p__23039;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23041,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.select_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$161,options], null)], 0)));
};
var select = function (form,label,ks,options,var_args){
var p__23039 = null;
if (arguments.length > 4) {
var G__23042__i = 0, G__23042__a = new Array(arguments.length -  4);
while (G__23042__i < G__23042__a.length) {G__23042__a[G__23042__i] = arguments[G__23042__i + 4]; ++G__23042__i;}
  p__23039 = new cljs.core.IndexedSeq(G__23042__a,0);
} 
return select__delegate.call(this,form,label,ks,options,p__23039);};
select.cljs$lang$maxFixedArity = 4;
select.cljs$lang$applyTo = (function (arglist__23043){
var form = cljs.core.first(arglist__23043);
arglist__23043 = cljs.core.next(arglist__23043);
var label = cljs.core.first(arglist__23043);
arglist__23043 = cljs.core.next(arglist__23043);
var ks = cljs.core.first(arglist__23043);
arglist__23043 = cljs.core.next(arglist__23043);
var options = cljs.core.first(arglist__23043);
var p__23039 = cljs.core.rest(arglist__23043);
return select__delegate(form,label,ks,options,p__23039);
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
lomakkeet.fields.save_form = (function save_form(p__23046,value){
var map__23048 = p__23046;
var map__23048__$1 = ((cljs.core.seq_QMARK_(map__23048))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23048):map__23048);
var form_state = map__23048__$1;
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23048__$1,cljs.core.constant$keyword$67);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.constant$keyword$66,value,cljs.core.array_seq([cljs.core.constant$keyword$162,value,cljs.core.constant$keyword$154,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null)], 0));
});
/**
* @param {...*} var_args
*/
lomakkeet.fields.update_form = (function() { 
var update_form__delegate = function (p__23049,f,args){
var map__23051 = p__23049;
var map__23051__$1 = ((cljs.core.seq_QMARK_(map__23051))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23051):map__23051);
var form_state = map__23051__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23051__$1,cljs.core.constant$keyword$66);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,value,args);
return lomakkeet.fields.save_form(form_state,new_value);
};
var update_form = function (p__23049,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23052__i = 0, G__23052__a = new Array(arguments.length -  2);
while (G__23052__i < G__23052__a.length) {G__23052__a[G__23052__i] = arguments[G__23052__i + 2]; ++G__23052__i;}
  args = new cljs.core.IndexedSeq(G__23052__a,0);
} 
return update_form__delegate.call(this,p__23049,f,args);};
update_form.cljs$lang$maxFixedArity = 2;
update_form.cljs$lang$applyTo = (function (arglist__23053){
var p__23049 = cljs.core.first(arglist__23053);
arglist__23053 = cljs.core.next(arglist__23053);
var f = cljs.core.first(arglist__23053);
var args = cljs.core.rest(arglist__23053);
return update_form__delegate(p__23049,f,args);
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
return (function (p1__23054_SHARP_){
return lomakkeet.fields.dissoc_in(p1__23054_SHARP_,ks);
});})(schema__$2))
);
} else {
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(value_cursor,ks,value);
}
}
});

var ufv___23395 = schema.utils.use_fn_validation;
var output_schema23056_23396 = schema.core.Any;
var input_schema23057_23397 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(lomakkeet.fields.FormState,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23058_23398 = schema.core.checker(input_schema23057_23397);
var output_checker23059_23399 = schema.core.checker(output_schema23056_23396);
/**
* Inputs: [{:keys [value initial-value], :as form-state} :- FormState owner {:keys [actions render-fn form form-validation-fn after-change], :as opts}]
*/
lomakkeet.fields.form = ((function (ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function form(G__23060,G__23061,G__23062){
var validate__12581__auto__ = ufv___23395.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___23400 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23060,G__23061,G__23062], null);
var temp__4126__auto___23401 = (function (){var G__23229 = args__12582__auto___23400;
return (input_checker23058_23398.cljs$core$IFn$_invoke$arity$1 ? input_checker23058_23398.cljs$core$IFn$_invoke$arity$1(G__23229) : input_checker23058_23398.call(null,G__23229));
})();
if(cljs.core.truth_(temp__4126__auto___23401)){
var error__12583__auto___23402 = temp__4126__auto___23401;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23402], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23402,cljs.core.constant$keyword$66,args__12582__auto___23400,cljs.core.constant$keyword$67,input_schema23057_23397,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__23232 = G__23060;
var map__23234 = G__23232;
var map__23234__$1 = ((cljs.core.seq_QMARK_(map__23234))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23234):map__23234);
var form_state = map__23234__$1;
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23234__$1,cljs.core.constant$keyword$162);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23234__$1,cljs.core.constant$keyword$66);
var owner = G__23061;
var G__23233 = G__23062;
var map__23235 = G__23233;
var map__23235__$1 = ((cljs.core.seq_QMARK_(map__23235))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23235):map__23235);
var opts = map__23235__$1;
var after_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23235__$1,cljs.core.constant$keyword$163);
var form_validation_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23235__$1,cljs.core.constant$keyword$164);
var form__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23235__$1,cljs.core.constant$keyword$143);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23235__$1,cljs.core.constant$keyword$165);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23235__$1,cljs.core.constant$keyword$166);
var G__23232__$1 = G__23232;
var owner__$1 = owner;
var G__23233__$1 = G__23233;
while(true){
var map__23236 = G__23232__$1;
var map__23236__$1 = ((cljs.core.seq_QMARK_(map__23236))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23236):map__23236);
var form_state__$1 = map__23236__$1;
var initial_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23236__$1,cljs.core.constant$keyword$162);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23236__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__23237 = G__23233__$1;
var map__23237__$1 = ((cljs.core.seq_QMARK_(map__23237))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23237):map__23237);
var opts__$1 = map__23237__$1;
var after_change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23237__$1,cljs.core.constant$keyword$163);
var form_validation_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23237__$1,cljs.core.constant$keyword$164);
var form__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23237__$1,cljs.core.constant$keyword$143);
var render_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23237__$1,cljs.core.constant$keyword$165);
var actions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23237__$1,cljs.core.constant$keyword$166);
if(typeof lomakkeet.fields.t23238 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t23238 = (function (form,map__23234,G__23233,after_change,owner,map__23236,G__23061,validate__12581__auto__,input_schema23057,form_validation_fn,input_checker23058,form_state,map__23237,render_fn,map__23235,G__23062,value,actions,output_schema23056,output_checker23059,G__23060,G__23232,opts,initial_value,ufv__,meta23239){
this.form = form;
this.map__23234 = map__23234;
this.G__23233 = G__23233;
this.after_change = after_change;
this.owner = owner;
this.map__23236 = map__23236;
this.G__23061 = G__23061;
this.validate__12581__auto__ = validate__12581__auto__;
this.input_schema23057 = input_schema23057;
this.form_validation_fn = form_validation_fn;
this.input_checker23058 = input_checker23058;
this.form_state = form_state;
this.map__23237 = map__23237;
this.render_fn = render_fn;
this.map__23235 = map__23235;
this.G__23062 = G__23062;
this.value = value;
this.actions = actions;
this.output_schema23056 = output_schema23056;
this.output_checker23059 = output_checker23059;
this.G__23060 = G__23060;
this.G__23232 = G__23232;
this.opts = opts;
this.initial_value = initial_value;
this.ufv__ = ufv__;
this.meta23239 = meta23239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t23238.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t23238.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function (_){
var self__ = this;
var ___$1 = this;
return "form";
});})(map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
;

lomakkeet.fields.t23238.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t23238.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function (_,form__$1){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__23241 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$153,self__.form_state,cljs.core.constant$keyword$66,(function (){var G__23242 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23242) : cljs.core.deref.call(null,G__23242));
})(),cljs.core.constant$keyword$162,(function (){var G__23243 = self__.initial_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23243) : cljs.core.deref.call(null,G__23243));
})(),cljs.core.constant$keyword$143,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,cljs.core.constant$keyword$153,self__.form_state),cljs.core.constant$keyword$147,cljs.core.constant$keyword$147.cljs$core$IFn$_invoke$arity$1(form__$1)], null);
return (self__.render_fn.cljs$core$IFn$_invoke$arity$1 ? self__.render_fn.cljs$core$IFn$_invoke$arity$1(G__23241) : self__.render_fn.call(null,G__23241));
})());
});})(map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
;

lomakkeet.fields.t23238.prototype.om$core$IWillMount$ = true;

lomakkeet.fields.t23238.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function (_){
var self__ = this;
var ___$1 = this;
var schema__$1 = (cljs.core.truth_(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(self__.form_state))?(function (){var G__23245 = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(self__.form_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23245) : cljs.core.deref.call(null,G__23245));
})():null);
var map__23244 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
var map__23244__$1 = ((cljs.core.seq_QMARK_(map__23244))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23244):map__23244);
var coercion_matcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23244__$1,cljs.core.constant$keyword$167);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23244__$1,cljs.core.constant$keyword$147);
var c__16627__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto__,schema__$1,map__23244,map__23244__$1,coercion_matcher,ch,___$1,map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto__,schema__$1,map__23244,map__23244__$1,coercion_matcher,ch,___$1,map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function (state_23326){
var state_val_23327 = (state_23326[(1)]);
if((state_val_23327 === (7))){
var inst_23254 = (state_23326[(7)]);
var inst_23248 = (state_23326[(8)]);
var inst_23251 = (state_23326[(9)]);
var inst_23253 = (function (){var G__23328 = self__.form_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23328) : cljs.core.deref.call(null,G__23328));
})();
var inst_23254__$1 = (function (){var G__23329 = inst_23253;
var G__23330 = inst_23248;
return (inst_23251.cljs$core$IFn$_invoke$arity$2 ? inst_23251.cljs$core$IFn$_invoke$arity$2(G__23329,G__23330) : inst_23251.call(null,G__23329,G__23330));
})();
var inst_23255 = lomakkeet.fields.chan_QMARK_(inst_23254__$1);
var state_23326__$1 = (function (){var statearr_23331 = state_23326;
(statearr_23331[(7)] = inst_23254__$1);

return statearr_23331;
})();
if(inst_23255){
var statearr_23332_23403 = state_23326__$1;
(statearr_23332_23403[(1)] = (10));

} else {
var statearr_23333_23404 = state_23326__$1;
(statearr_23333_23404[(1)] = (11));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (20))){
var state_23326__$1 = state_23326;
var statearr_23334_23405 = state_23326__$1;
(statearr_23334_23405[(2)] = null);

(statearr_23334_23405[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (27))){
var inst_23313 = (state_23326[(10)]);
var inst_23319 = (state_23326[(2)]);
var inst_23320 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23313,inst_23319], 0));
var inst_23321 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.form_state,cljs.core.constant$keyword$154,inst_23320);
var state_23326__$1 = (function (){var statearr_23335 = state_23326;
(statearr_23335[(11)] = inst_23321);

return statearr_23335;
})();
var statearr_23336_23406 = state_23326__$1;
(statearr_23336_23406[(2)] = null);

(statearr_23336_23406[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (1))){
var state_23326__$1 = state_23326;
var statearr_23337_23407 = state_23326__$1;
(statearr_23337_23407[(2)] = null);

(statearr_23337_23407[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (24))){
var inst_23313 = (state_23326[(2)]);
var state_23326__$1 = (function (){var statearr_23338 = state_23326;
(statearr_23338[(10)] = inst_23313);

return statearr_23338;
})();
if(cljs.core.truth_(schema__$1)){
var statearr_23339_23408 = state_23326__$1;
(statearr_23339_23408[(1)] = (25));

} else {
var statearr_23340_23409 = state_23326__$1;
(statearr_23340_23409[(1)] = (26));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (4))){
var inst_23248 = (state_23326[(8)]);
var inst_23248__$1 = (state_23326[(2)]);
var inst_23249 = (function (){var G__23341 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23341) : cljs.core.deref.call(null,G__23341));
})();
var inst_23296 = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(inst_23248__$1);
var state_23326__$1 = (function (){var statearr_23342 = state_23326;
(statearr_23342[(8)] = inst_23248__$1);

(statearr_23342[(12)] = inst_23249);

return statearr_23342;
})();
var G__23343_23410 = (((inst_23296 instanceof cljs.core.Keyword))?inst_23296.fqn:null);
switch (G__23343_23410) {
case "change":
var statearr_23344_23412 = state_23326__$1;
(statearr_23344_23412[(1)] = (14));


break;
case "cancel":
var statearr_23345_23413 = state_23326__$1;
(statearr_23345_23413[(1)] = (13));


break;
case "action":
var statearr_23346_23414 = state_23326__$1;
(statearr_23346_23414[(1)] = (6));


break;
default:
var statearr_23347_23415 = state_23326__$1;
(statearr_23347_23415[(1)] = (18));



}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (15))){
var inst_23248 = (state_23326[(8)]);
var inst_23282 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23248);
var state_23326__$1 = state_23326;
var statearr_23348_23416 = state_23326__$1;
(statearr_23348_23416[(2)] = inst_23282);

(statearr_23348_23416[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (21))){
var inst_23307 = (state_23326[(2)]);
var state_23326__$1 = (function (){var statearr_23349 = state_23326;
(statearr_23349[(13)] = inst_23307);

return statearr_23349;
})();
if(cljs.core.truth_(self__.form_validation_fn)){
var statearr_23350_23417 = state_23326__$1;
(statearr_23350_23417[(1)] = (22));

} else {
var statearr_23351_23418 = state_23326__$1;
(statearr_23351_23418[(1)] = (23));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (13))){
var inst_23277 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,lomakkeet.fields.cancel_form);
var state_23326__$1 = state_23326;
var statearr_23352_23419 = state_23326__$1;
(statearr_23352_23419[(2)] = inst_23277);

(statearr_23352_23419[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (22))){
var inst_23309 = (function (){var G__23353 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23353) : cljs.core.deref.call(null,G__23353));
})();
var inst_23310 = (function (){var G__23354 = inst_23309;
return (self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1 ? self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1(G__23354) : self__.form_validation_fn.call(null,G__23354));
})();
var state_23326__$1 = state_23326;
var statearr_23355_23420 = state_23326__$1;
(statearr_23355_23420[(2)] = inst_23310);

(statearr_23355_23420[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (6))){
var inst_23248 = (state_23326[(8)]);
var inst_23251 = (state_23326[(9)]);
var inst_23250 = cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(inst_23248);
var inst_23251__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.actions,inst_23250);
var state_23326__$1 = (function (){var statearr_23356 = state_23326;
(statearr_23356[(9)] = inst_23251__$1);

return statearr_23356;
})();
if(cljs.core.truth_(inst_23251__$1)){
var statearr_23357_23421 = state_23326__$1;
(statearr_23357_23421[(1)] = (7));

} else {
var statearr_23358_23422 = state_23326__$1;
(statearr_23358_23422[(1)] = (8));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (25))){
var inst_23315 = (function (){var G__23359 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23359) : cljs.core.deref.call(null,G__23359));
})();
var inst_23316 = schema.core.check(schema__$1,inst_23315);
var state_23326__$1 = state_23326;
var statearr_23360_23423 = state_23326__$1;
(statearr_23360_23423[(2)] = inst_23316);

(statearr_23360_23423[(1)] = (27));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (17))){
var inst_23248 = (state_23326[(8)]);
var inst_23285 = (state_23326[(2)]);
var inst_23286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23285,cljs.core.constant$keyword$146);
var inst_23287 = lomakkeet.fields.get_in_schema(schema__$1,inst_23286);
var inst_23288 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_23248);
var inst_23289 = lomakkeet.fields.coerce(coercion_matcher,inst_23287,inst_23288);
var inst_23290 = lomakkeet.fields.change_value(self__.value,schema__$1,inst_23286,inst_23289);
var state_23326__$1 = state_23326;
var statearr_23361_23424 = state_23326__$1;
(statearr_23361_23424[(2)] = inst_23290);

(statearr_23361_23424[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (3))){
var inst_23324 = (state_23326[(2)]);
var state_23326__$1 = state_23326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23326__$1,inst_23324);
} else {
if((state_val_23327 === (12))){
var inst_23269 = (state_23326[(2)]);
var state_23326__$1 = state_23326;
var statearr_23362_23425 = state_23326__$1;
(statearr_23362_23425[(2)] = inst_23269);

(statearr_23362_23425[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (2))){
var state_23326__$1 = state_23326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23326__$1,(4),ch);
} else {
if((state_val_23327 === (23))){
var state_23326__$1 = state_23326;
var statearr_23363_23426 = state_23326__$1;
(statearr_23363_23426[(2)] = null);

(statearr_23363_23426[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (19))){
var inst_23249 = (state_23326[(12)]);
var inst_23300 = [cljs.core.constant$keyword$153,cljs.core.constant$keyword$66,cljs.core.constant$keyword$168,cljs.core.constant$keyword$169];
var inst_23301 = (function (){var G__23364 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23364) : cljs.core.deref.call(null,G__23364));
})();
var inst_23302 = [self__.form_state,inst_23301,self__.value,inst_23249];
var inst_23303 = cljs.core.PersistentHashMap.fromArrays(inst_23300,inst_23302);
var inst_23304 = (function (){var G__23365 = inst_23303;
return (self__.after_change.cljs$core$IFn$_invoke$arity$1 ? self__.after_change.cljs$core$IFn$_invoke$arity$1(G__23365) : self__.after_change.call(null,G__23365));
})();
var state_23326__$1 = state_23326;
var statearr_23366_23427 = state_23326__$1;
(statearr_23366_23427[(2)] = inst_23304);

(statearr_23366_23427[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (11))){
var inst_23254 = (state_23326[(7)]);
var inst_23267 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_23254);
var state_23326__$1 = state_23326;
var statearr_23367_23428 = state_23326__$1;
(statearr_23367_23428[(2)] = inst_23267);

(statearr_23367_23428[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (9))){
var inst_23275 = (state_23326[(2)]);
var state_23326__$1 = state_23326;
var statearr_23368_23429 = state_23326__$1;
(statearr_23368_23429[(2)] = inst_23275);

(statearr_23368_23429[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (5))){
var inst_23298 = (state_23326[(2)]);
var state_23326__$1 = (function (){var statearr_23369 = state_23326;
(statearr_23369[(14)] = inst_23298);

return statearr_23369;
})();
if(cljs.core.truth_(self__.after_change)){
var statearr_23370_23430 = state_23326__$1;
(statearr_23370_23430[(1)] = (19));

} else {
var statearr_23371_23431 = state_23326__$1;
(statearr_23371_23431[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (14))){
var inst_23248 = (state_23326[(8)]);
var inst_23280 = cljs.core.seq_QMARK_(inst_23248);
var state_23326__$1 = state_23326;
if(inst_23280){
var statearr_23372_23432 = state_23326__$1;
(statearr_23372_23432[(1)] = (15));

} else {
var statearr_23373_23433 = state_23326__$1;
(statearr_23373_23433[(1)] = (16));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (26))){
var state_23326__$1 = state_23326;
var statearr_23374_23434 = state_23326__$1;
(statearr_23374_23434[(2)] = null);

(statearr_23374_23434[(1)] = (27));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (16))){
var inst_23248 = (state_23326[(8)]);
var state_23326__$1 = state_23326;
var statearr_23375_23435 = state_23326__$1;
(statearr_23375_23435[(2)] = inst_23248);

(statearr_23375_23435[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (10))){
var inst_23254 = (state_23326[(7)]);
var inst_23248 = (state_23326[(8)]);
var inst_23249 = (state_23326[(12)]);
var inst_23251 = (state_23326[(9)]);
var inst_23263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23264 = (function (){var c__16627__auto____$1 = inst_23263;
var next = inst_23254;
var action_fn = inst_23251;
var temp__4124__auto__ = inst_23251;
var prev_value = inst_23249;
var evt = inst_23248;
return ((function (c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23254,inst_23248,inst_23249,inst_23251,inst_23263,state_val_23327,c__16627__auto__,schema__$1,map__23244,map__23244__$1,coercion_matcher,ch,___$1,map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23254,inst_23248,inst_23249,inst_23251,inst_23263,state_val_23327,c__16627__auto__,schema__$1,map__23244,map__23244__$1,coercion_matcher,ch,___$1,map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function (state_23261){
var state_val_23262 = (state_23261[(1)]);
if((state_val_23262 === (2))){
var inst_23258 = (state_23261[(2)]);
var inst_23259 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_23258);
var state_23261__$1 = state_23261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23261__$1,inst_23259);
} else {
if((state_val_23262 === (1))){
var state_23261__$1 = state_23261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23261__$1,(2),next);
} else {
return null;
}
}
});})(c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23254,inst_23248,inst_23249,inst_23251,inst_23263,state_val_23327,c__16627__auto__,schema__$1,map__23244,map__23244__$1,coercion_matcher,ch,___$1,map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
;
return ((function (switch__16547__auto__,c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23254,inst_23248,inst_23249,inst_23251,inst_23263,state_val_23327,c__16627__auto__,schema__$1,map__23244,map__23244__$1,coercion_matcher,ch,___$1,map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_23379 = [null,null,null,null,null,null,null];
(statearr_23379[(0)] = state_machine__16548__auto__);

(statearr_23379[(1)] = (1));

return statearr_23379;
});
var state_machine__16548__auto____1 = (function (state_23261){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_23261);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e23380){if((e23380 instanceof Object)){
var ex__16551__auto__ = e23380;
var statearr_23381_23436 = state_23261;
(statearr_23381_23436[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23261);

return cljs.core.constant$keyword$99;
} else {
throw e23380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__23437 = state_23261;
state_23261 = G__23437;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_23261){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_23261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23254,inst_23248,inst_23249,inst_23251,inst_23263,state_val_23327,c__16627__auto__,schema__$1,map__23244,map__23244__$1,coercion_matcher,ch,___$1,map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
})();
var state__16629__auto__ = (function (){var statearr_23382 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_23382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto____$1);

return statearr_23382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});
;})(c__16627__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23254,inst_23248,inst_23249,inst_23251,inst_23263,state_val_23327,c__16627__auto__,schema__$1,map__23244,map__23244__$1,coercion_matcher,ch,___$1,map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
})();
var inst_23265 = cljs.core.async.impl.dispatch.run(inst_23264);
var state_23326__$1 = (function (){var statearr_23383 = state_23326;
(statearr_23383[(15)] = inst_23265);

return statearr_23383;
})();
var statearr_23384_23438 = state_23326__$1;
(statearr_23384_23438[(2)] = inst_23263);

(statearr_23384_23438[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (18))){
var inst_23248 = (state_23326[(8)]);
var inst_23292 = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(inst_23248);
var inst_23293 = [cljs.core.str("Unknown event-type: "),cljs.core.str(inst_23292)].join('');
var inst_23294 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23293], 0));
var state_23326__$1 = state_23326;
var statearr_23385_23439 = state_23326__$1;
(statearr_23385_23439[(2)] = inst_23294);

(statearr_23385_23439[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_23327 === (8))){
var inst_23248 = (state_23326[(8)]);
var inst_23271 = cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(inst_23248);
var inst_23272 = [cljs.core.str("WARNING: "),cljs.core.str(inst_23271),cljs.core.str(" is unknown")].join('');
var inst_23273 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23272], 0));
var state_23326__$1 = state_23326;
var statearr_23386_23440 = state_23326__$1;
(statearr_23386_23440[(2)] = inst_23273);

(statearr_23386_23440[(1)] = (9));


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
});})(c__16627__auto__,schema__$1,map__23244,map__23244__$1,coercion_matcher,ch,___$1,map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
;
return ((function (switch__16547__auto__,c__16627__auto__,schema__$1,map__23244,map__23244__$1,coercion_matcher,ch,___$1,map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_23390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23390[(0)] = state_machine__16548__auto__);

(statearr_23390[(1)] = (1));

return statearr_23390;
});
var state_machine__16548__auto____1 = (function (state_23326){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_23326);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e23391){if((e23391 instanceof Object)){
var ex__16551__auto__ = e23391;
var statearr_23392_23441 = state_23326;
(statearr_23392_23441[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23326);

return cljs.core.constant$keyword$99;
} else {
throw e23391;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__23442 = state_23326;
state_23326 = G__23442;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_23326){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_23326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__,schema__$1,map__23244,map__23244__$1,coercion_matcher,ch,___$1,map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
})();
var state__16629__auto__ = (function (){var statearr_23393 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_23393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_23393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto__,schema__$1,map__23244,map__23244__$1,coercion_matcher,ch,___$1,map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
);

return c__16627__auto__;
});})(map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
;

lomakkeet.fields.t23238.prototype.om$core$IInitState$ = true;

lomakkeet.fields.t23238.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function (_){
var self__ = this;
var ___$1 = this;
if((schema.core.check(lomakkeet.fields.FormState,self__.form_state) == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"FormState","FormState",834878066,null),new cljs.core.Symbol(null,"form-state","form-state",-256843510,null)))], 0)))].join('')));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$147,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$152,lomakkeet.fields.default_form_group,cljs.core.constant$keyword$167,schema.coerce.json_coercion_matcher], null),self__.form], 0));
});})(map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
;

lomakkeet.fields.t23238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function (_23240){
var self__ = this;
var _23240__$1 = this;
return self__.meta23239;
});})(map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
;

lomakkeet.fields.t23238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function (_23240,meta23239__$1){
var self__ = this;
var _23240__$1 = this;
return (new lomakkeet.fields.t23238(self__.form,self__.map__23234,self__.G__23233,self__.after_change,self__.owner,self__.map__23236,self__.G__23061,self__.validate__12581__auto__,self__.input_schema23057,self__.form_validation_fn,self__.input_checker23058,self__.form_state,self__.map__23237,self__.render_fn,self__.map__23235,self__.G__23062,self__.value,self__.actions,self__.output_schema23056,self__.output_checker23059,self__.G__23060,self__.G__23232,self__.opts,self__.initial_value,self__.ufv__,meta23239__$1));
});})(map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
;

lomakkeet.fields.t23238.cljs$lang$type = true;

lomakkeet.fields.t23238.cljs$lang$ctorStr = "lomakkeet.fields/t23238";

lomakkeet.fields.t23238.cljs$lang$ctorPrWriter = ((function (map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.fields/t23238");
});})(map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
;

lomakkeet.fields.__GT_t23238 = ((function (map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399){
return (function __GT_t23238(form__$3,map__23234__$2,G__23233__$2,after_change__$2,owner__$3,map__23236__$2,G__23061__$1,validate__12581__auto____$1,input_schema23057__$1,form_validation_fn__$2,input_checker23058__$1,form_state__$2,map__23237__$2,render_fn__$2,map__23235__$2,G__23062__$1,value__$2,actions__$2,output_schema23056__$1,output_checker23059__$1,G__23060__$1,G__23232__$2,opts__$2,initial_value__$2,ufv____$1,meta23239){
return (new lomakkeet.fields.t23238(form__$3,map__23234__$2,G__23233__$2,after_change__$2,owner__$3,map__23236__$2,G__23061__$1,validate__12581__auto____$1,input_schema23057__$1,form_validation_fn__$2,input_checker23058__$1,form_state__$2,map__23237__$2,render_fn__$2,map__23235__$2,G__23062__$1,value__$2,actions__$2,output_schema23056__$1,output_checker23059__$1,G__23060__$1,G__23232__$2,opts__$2,initial_value__$2,ufv____$1,meta23239));
});})(map__23236,map__23236__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23237,map__23237__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23232,map__23234,map__23234__$1,form_state,initial_value,value,owner,G__23233,map__23235,map__23235__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12581__auto__,ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
;

}

return (new lomakkeet.fields.t23238(form__$2,map__23234__$1,G__23233__$1,after_change__$1,owner__$2,map__23236__$1,G__23061,validate__12581__auto__,input_schema23057_23397,form_validation_fn__$1,input_checker23058_23398,form_state__$1,map__23237__$1,render_fn__$1,map__23235__$1,G__23062,value__$1,actions__$1,output_schema23056_23396,output_checker23059_23399,G__23060,G__23232__$1,opts__$1,initial_value__$1,ufv___23395,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___23443 = (function (){var G__23394 = o__12584__auto__;
return (output_checker23059_23399.cljs$core$IFn$_invoke$arity$1 ? output_checker23059_23399.cljs$core$IFn$_invoke$arity$1(G__23394) : output_checker23059_23399.call(null,G__23394));
})();
if(cljs.core.truth_(temp__4126__auto___23443)){
var error__12583__auto___23444 = temp__4126__auto___23443;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23444], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23444,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema23056_23396,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___23395,output_schema23056_23396,input_schema23057_23397,input_checker23058_23398,output_checker23059_23399))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.form),schema.core.make_fn_schema(output_schema23056_23396,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23057_23397], null)));

lomakkeet.fields.__GT_form = (function() {
var __GT_form = null;
var __GT_form__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.form,cursor__20832__auto__);
});
var __GT_form__2 = (function (cursor__20832__auto__,m23055){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,cursor__20832__auto__,m23055);
});
__GT_form = function(cursor__20832__auto__,m23055){
switch(arguments.length){
case 1:
return __GT_form__1.call(this,cursor__20832__auto__);
case 2:
return __GT_form__2.call(this,cursor__20832__auto__,m23055);
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
