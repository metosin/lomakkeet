// Compiled by ClojureScript 0.0-2850 {}
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
var get_in_schema__delegate = function (schema__$1,ks,p__22774){
var vec__22776 = p__22774;
var not_found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22776,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22776,not_found){
return (function (acc,k){
var or__3815__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,schema.core.optional_key(k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,schema.core.required_key(k)));
if(cljs.core.truth_(or__3815__auto____$1)){
return or__3815__auto____$1;
} else {
return not_found;
}
}
});})(vec__22776,not_found))
,schema__$1,ks);
};
var get_in_schema = function (schema__$1,ks,var_args){
var p__22774 = null;
if (arguments.length > 2) {
var G__22777__i = 0, G__22777__a = new Array(arguments.length -  2);
while (G__22777__i < G__22777__a.length) {G__22777__a[G__22777__i] = arguments[G__22777__i + 2]; ++G__22777__i;}
  p__22774 = new cljs.core.IndexedSeq(G__22777__a,0);
} 
return get_in_schema__delegate.call(this,schema__$1,ks,p__22774);};
get_in_schema.cljs$lang$maxFixedArity = 2;
get_in_schema.cljs$lang$applyTo = (function (arglist__22778){
var schema__$1 = cljs.core.first(arglist__22778);
arglist__22778 = cljs.core.next(arglist__22778);
var ks = cljs.core.first(arglist__22778);
var p__22774 = cljs.core.rest(arglist__22778);
return get_in_schema__delegate(schema__$1,ks,p__22774);
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
lomakkeet.fields.dissoc_in = (function dissoc_in(m,p__22779){
var vec__22783 = p__22779;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22783,(0),null);
var ks = cljs.core.nthnext(vec__22783,(1));
var keys = vec__22783;
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
lomakkeet.fields.empty_cb = (function empty_cb(p__22784){
var map__22786 = p__22784;
var map__22786__$1 = ((cljs.core.seq_QMARK_(map__22786))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22786):map__22786);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22786__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22786__$1,cljs.core.constant$keyword$145);
return ((function (map__22786,map__22786__$1,ks,ch){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$64,null,cljs.core.constant$keyword$144,ks], null));
});
;})(map__22786,map__22786__$1,ks,ch))
});

var ufv___22839 = schema.utils.use_fn_validation;
var output_schema22788_22840 = schema.core.Any;
var input_schema22789_22841 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22790_22842 = schema.core.checker(input_schema22789_22841);
var output_checker22791_22843 = schema.core.checker(output_schema22788_22840);
/**
* Inputs: [state owner {:keys [real-input], :as opts}]
*/
lomakkeet.fields.emptyable_input = ((function (ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843){
return (function emptyable_input(G__22792,G__22793,G__22794){
var validate__12170__auto__ = ufv___22839.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22844 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22792,G__22793,G__22794], null);
var temp__4126__auto___22845 = (function (){var G__22817 = args__12171__auto___22844;
return (input_checker22790_22842.cljs$core$IFn$_invoke$arity$1 ? input_checker22790_22842.cljs$core$IFn$_invoke$arity$1(G__22817) : input_checker22790_22842.call(null,G__22817));
})();
if(cljs.core.truth_(temp__4126__auto___22845)){
var error__12172__auto___22846 = temp__4126__auto___22845;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22846], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22846,cljs.core.constant$keyword$64,args__12171__auto___22844,cljs.core.constant$keyword$65,input_schema22789_22841,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var state = G__22792;
var owner = G__22793;
var G__22819 = G__22794;
var map__22820 = G__22819;
var map__22820__$1 = ((cljs.core.seq_QMARK_(map__22820))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22820):map__22820);
var opts = map__22820__$1;
var real_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22820__$1,cljs.core.constant$keyword$147);
var state__$1 = state;
var owner__$1 = owner;
var G__22819__$1 = G__22819;
while(true){
var state__$2 = state__$1;
var owner__$2 = owner__$1;
var map__22821 = G__22819__$1;
var map__22821__$1 = ((cljs.core.seq_QMARK_(map__22821))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22821):map__22821);
var opts__$1 = map__22821__$1;
var real_input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22821__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22822 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22822 = (function (G__22793,owner,input_schema22789,input_checker22790,output_checker22791,output_schema22788,emptyable_input,map__22820,G__22794,G__22819,real_input,state,validate__12170__auto__,map__22821,opts,ufv__,G__22792,meta22823){
this.G__22793 = G__22793;
this.owner = owner;
this.input_schema22789 = input_schema22789;
this.input_checker22790 = input_checker22790;
this.output_checker22791 = output_checker22791;
this.output_schema22788 = output_schema22788;
this.emptyable_input = emptyable_input;
this.map__22820 = map__22820;
this.G__22794 = G__22794;
this.G__22819 = G__22819;
this.real_input = real_input;
this.state = state;
this.validate__12170__auto__ = validate__12170__auto__;
this.map__22821 = map__22821;
this.opts = opts;
this.ufv__ = ufv__;
this.G__22792 = G__22792;
this.meta22823 = meta22823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22822.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22822.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state__$2,owner__$2,map__22821,map__22821__$1,opts__$1,real_input__$1,state,owner,G__22819,map__22820,map__22820__$1,opts,real_input,validate__12170__auto__,ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843){
return (function (_){
var self__ = this;
var ___$1 = this;
return "emptyable-input";
});})(state__$2,owner__$2,map__22821,map__22821__$1,opts__$1,real_input__$1,state,owner,G__22819,map__22820,map__22820__$1,opts,real_input,validate__12170__auto__,ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843))
;

lomakkeet.fields.t22822.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22822.prototype.om$core$IRenderState$render_state$arity$2 = ((function (state__$2,owner__$2,map__22821,map__22821__$1,opts__$1,real_input__$1,state,owner,G__22819,map__22820,map__22820__$1,opts,real_input,validate__12170__auto__,ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var attrs22825 = om.core.build.cljs$core$IFn$_invoke$arity$3(self__.real_input,self__.state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,self__.opts,cljs.core.constant$keyword$51,s], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22825))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-group"], null)], null),attrs22825], 0))):{"className": "input-group"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22825))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22826 = "span";
var G__22827 = {"className": "input-group-btn"};
var G__22828 = (function (){var G__22829 = "button";
var G__22830 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22831 = "\u00D7";
return React.createElement(G__22829,G__22830,G__22831);
})();
return React.createElement(G__22826,G__22827,G__22828);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22825),(function (){var G__22832 = "span";
var G__22833 = {"className": "input-group-btn"};
var G__22834 = (function (){var G__22835 = "button";
var G__22836 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22837 = "\u00D7";
return React.createElement(G__22835,G__22836,G__22837);
})();
return React.createElement(G__22832,G__22833,G__22834);
})()], null))));
});})(state__$2,owner__$2,map__22821,map__22821__$1,opts__$1,real_input__$1,state,owner,G__22819,map__22820,map__22820__$1,opts,real_input,validate__12170__auto__,ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843))
;

lomakkeet.fields.t22822.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state__$2,owner__$2,map__22821,map__22821__$1,opts__$1,real_input__$1,state,owner,G__22819,map__22820,map__22820__$1,opts,real_input,validate__12170__auto__,ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843){
return (function (_22824){
var self__ = this;
var _22824__$1 = this;
return self__.meta22823;
});})(state__$2,owner__$2,map__22821,map__22821__$1,opts__$1,real_input__$1,state,owner,G__22819,map__22820,map__22820__$1,opts,real_input,validate__12170__auto__,ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843))
;

lomakkeet.fields.t22822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state__$2,owner__$2,map__22821,map__22821__$1,opts__$1,real_input__$1,state,owner,G__22819,map__22820,map__22820__$1,opts,real_input,validate__12170__auto__,ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843){
return (function (_22824,meta22823__$1){
var self__ = this;
var _22824__$1 = this;
return (new lomakkeet.fields.t22822(self__.G__22793,self__.owner,self__.input_schema22789,self__.input_checker22790,self__.output_checker22791,self__.output_schema22788,self__.emptyable_input,self__.map__22820,self__.G__22794,self__.G__22819,self__.real_input,self__.state,self__.validate__12170__auto__,self__.map__22821,self__.opts,self__.ufv__,self__.G__22792,meta22823__$1));
});})(state__$2,owner__$2,map__22821,map__22821__$1,opts__$1,real_input__$1,state,owner,G__22819,map__22820,map__22820__$1,opts,real_input,validate__12170__auto__,ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843))
;

lomakkeet.fields.t22822.cljs$lang$type = true;

lomakkeet.fields.t22822.cljs$lang$ctorStr = "lomakkeet.fields/t22822";

lomakkeet.fields.t22822.cljs$lang$ctorPrWriter = ((function (state__$2,owner__$2,map__22821,map__22821__$1,opts__$1,real_input__$1,state,owner,G__22819,map__22820,map__22820__$1,opts,real_input,validate__12170__auto__,ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.fields/t22822");
});})(state__$2,owner__$2,map__22821,map__22821__$1,opts__$1,real_input__$1,state,owner,G__22819,map__22820,map__22820__$1,opts,real_input,validate__12170__auto__,ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843))
;

lomakkeet.fields.__GT_t22822 = ((function (state__$2,owner__$2,map__22821,map__22821__$1,opts__$1,real_input__$1,state,owner,G__22819,map__22820,map__22820__$1,opts,real_input,validate__12170__auto__,ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843){
return (function __GT_t22822(G__22793__$1,owner__$3,input_schema22789__$1,input_checker22790__$1,output_checker22791__$1,output_schema22788__$1,emptyable_input__$1,map__22820__$2,G__22794__$1,G__22819__$2,real_input__$2,state__$3,validate__12170__auto____$1,map__22821__$2,opts__$2,ufv____$1,G__22792__$1,meta22823){
return (new lomakkeet.fields.t22822(G__22793__$1,owner__$3,input_schema22789__$1,input_checker22790__$1,output_checker22791__$1,output_schema22788__$1,emptyable_input__$1,map__22820__$2,G__22794__$1,G__22819__$2,real_input__$2,state__$3,validate__12170__auto____$1,map__22821__$2,opts__$2,ufv____$1,G__22792__$1,meta22823));
});})(state__$2,owner__$2,map__22821,map__22821__$1,opts__$1,real_input__$1,state,owner,G__22819,map__22820,map__22820__$1,opts,real_input,validate__12170__auto__,ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843))
;

}

return (new lomakkeet.fields.t22822(G__22793,owner__$2,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843,output_schema22788_22840,emptyable_input,map__22820__$1,G__22794,G__22819__$1,real_input__$1,state__$2,validate__12170__auto__,map__22821__$1,opts__$1,ufv___22839,G__22792,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22847 = (function (){var G__22838 = o__12173__auto__;
return (output_checker22791_22843.cljs$core$IFn$_invoke$arity$1 ? output_checker22791_22843.cljs$core$IFn$_invoke$arity$1(G__22838) : output_checker22791_22843.call(null,G__22838));
})();
if(cljs.core.truth_(temp__4126__auto___22847)){
var error__12172__auto___22848 = temp__4126__auto___22847;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22848], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22848,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22788_22840,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___22839,output_schema22788_22840,input_schema22789_22841,input_checker22790_22842,output_checker22791_22843))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.emptyable_input),schema.core.make_fn_schema(output_schema22788_22840,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22789_22841], null)));

lomakkeet.fields.__GT_emptyable_input = (function() {
var __GT_emptyable_input = null;
var __GT_emptyable_input__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.emptyable_input,cursor__20405__auto__);
});
var __GT_emptyable_input__2 = (function (cursor__20405__auto__,m22787){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.emptyable_input,cursor__20405__auto__,m22787);
});
__GT_emptyable_input = function(cursor__20405__auto__,m22787){
switch(arguments.length){
case 1:
return __GT_emptyable_input__1.call(this,cursor__20405__auto__);
case 2:
return __GT_emptyable_input__2.call(this,cursor__20405__auto__,m22787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$1 = __GT_emptyable_input__1;
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$2 = __GT_emptyable_input__2;
return __GT_emptyable_input;
})()
;

var ufv___22903 = schema.utils.use_fn_validation;
var output_schema22850_22904 = schema.core.Any;
var input_schema22851_22905 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22852_22906 = schema.core.checker(input_schema22851_22905);
var output_checker22853_22907 = schema.core.checker(output_schema22850_22904);
/**
* Inputs: [{:keys [error], :as input-state} owner {:keys [input label size help-text], :or {size 6}, :as opts}]
*/
lomakkeet.fields.default_form_group = ((function (ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907){
return (function default_form_group(G__22854,G__22855,G__22856){
var validate__12170__auto__ = ufv___22903.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22908 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22854,G__22855,G__22856], null);
var temp__4126__auto___22909 = (function (){var G__22880 = args__12171__auto___22908;
return (input_checker22852_22906.cljs$core$IFn$_invoke$arity$1 ? input_checker22852_22906.cljs$core$IFn$_invoke$arity$1(G__22880) : input_checker22852_22906.call(null,G__22880));
})();
if(cljs.core.truth_(temp__4126__auto___22909)){
var error__12172__auto___22910 = temp__4126__auto___22909;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22910], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22910,cljs.core.constant$keyword$64,args__12171__auto___22908,cljs.core.constant$keyword$65,input_schema22851_22905,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__22883 = G__22854;
var map__22885 = G__22883;
var map__22885__$1 = ((cljs.core.seq_QMARK_(map__22885))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22885):map__22885);
var input_state = map__22885__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22885__$1,cljs.core.constant$keyword$63);
var owner = G__22855;
var G__22884 = G__22856;
var map__22886 = G__22884;
var map__22886__$1 = ((cljs.core.seq_QMARK_(map__22886))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22886):map__22886);
var opts = map__22886__$1;
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22886__$1,cljs.core.constant$keyword$148);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22886__$1,cljs.core.constant$keyword$149,(6));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22886__$1,cljs.core.constant$keyword$135);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22886__$1,cljs.core.constant$keyword$122);
var G__22883__$1 = G__22883;
var owner__$1 = owner;
var G__22884__$1 = G__22884;
while(true){
var map__22887 = G__22883__$1;
var map__22887__$1 = ((cljs.core.seq_QMARK_(map__22887))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22887):map__22887);
var input_state__$1 = map__22887__$1;
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22887__$1,cljs.core.constant$keyword$63);
var owner__$2 = owner__$1;
var map__22888 = G__22884__$1;
var map__22888__$1 = ((cljs.core.seq_QMARK_(map__22888))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22888):map__22888);
var opts__$1 = map__22888__$1;
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22888__$1,cljs.core.constant$keyword$148);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22888__$1,cljs.core.constant$keyword$149,(6));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22888__$1,cljs.core.constant$keyword$135);
var input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22888__$1,cljs.core.constant$keyword$122);
if(typeof lomakkeet.fields.t22889 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22889 = (function (input,output_schema22850,default_form_group,owner,G__22855,map__22888,map__22885,input_schema22851,input_checker22852,output_checker22853,input_state,G__22856,G__22854,map__22886,validate__12170__auto__,size,G__22884,G__22883,label,map__22887,opts,ufv__,help_text,error,meta22890){
this.input = input;
this.output_schema22850 = output_schema22850;
this.default_form_group = default_form_group;
this.owner = owner;
this.G__22855 = G__22855;
this.map__22888 = map__22888;
this.map__22885 = map__22885;
this.input_schema22851 = input_schema22851;
this.input_checker22852 = input_checker22852;
this.output_checker22853 = output_checker22853;
this.input_state = input_state;
this.G__22856 = G__22856;
this.G__22854 = G__22854;
this.map__22886 = map__22886;
this.validate__12170__auto__ = validate__12170__auto__;
this.size = size;
this.G__22884 = G__22884;
this.G__22883 = G__22883;
this.label = label;
this.map__22887 = map__22887;
this.opts = opts;
this.ufv__ = ufv__;
this.help_text = help_text;
this.error = error;
this.meta22890 = meta22890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22889.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22889.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22887,map__22887__$1,input_state__$1,error__$1,owner__$2,map__22888,map__22888__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22883,map__22885,map__22885__$1,input_state,error,owner,G__22884,map__22886,map__22886__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907){
return (function (_){
var self__ = this;
var ___$1 = this;
return "default-form-group";
});})(map__22887,map__22887__$1,input_state__$1,error__$1,owner__$2,map__22888,map__22888__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22883,map__22885,map__22885__$1,input_state,error,owner,G__22884,map__22886,map__22886__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907))
;

lomakkeet.fields.t22889.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22889.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22887,map__22887__$1,input_state__$1,error__$1,owner__$2,map__22888,map__22888__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22883,map__22885,map__22885__$1,input_state,error,owner,G__22884,map__22886,map__22886__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var G__22893 = "div";
var G__22894 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",(function (){var G__22899 = cljs.core.PersistentVector.EMPTY;
var G__22899__$1 = (cljs.core.truth_(self__.error)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22899,"has-error"):G__22899);
var G__22899__$2 = (cljs.core.truth_(self__.size)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22899__$1,[cljs.core.str("col-md-"),cljs.core.str(self__.size)].join('')):G__22899__$1);
return G__22899__$2;
})()], null))};
var G__22895 = (function (){var attrs22892 = self__.label;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"label",((cljs.core.map_QMARK_(attrs22892))?sablono.interpreter.attributes(attrs22892):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22892))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22892),":"], null))));
})();
var G__22896 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(self__.input,self__.input_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,self__.opts,cljs.core.constant$keyword$51,s], null)));
var G__22897 = (cljs.core.truth_(self__.help_text)?(function (){var attrs22900 = self__.help_text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs22900))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22900], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22900))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22900)], null))));
})():null);
var G__22898 = (cljs.core.truth_((function (){var and__3803__auto__ = !(cljs.core.empty_QMARK_);
if(and__3803__auto__){
return self__.error;
} else {
return and__3803__auto__;
}
})())?(function (){var attrs22901 = [cljs.core.str(self__.error)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs22901))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22901], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22901))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22901)], null))));
})():null);
return React.createElement(G__22893,G__22894,G__22895,G__22896,G__22897,G__22898);
});})(map__22887,map__22887__$1,input_state__$1,error__$1,owner__$2,map__22888,map__22888__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22883,map__22885,map__22885__$1,input_state,error,owner,G__22884,map__22886,map__22886__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907))
;

lomakkeet.fields.t22889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22887,map__22887__$1,input_state__$1,error__$1,owner__$2,map__22888,map__22888__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22883,map__22885,map__22885__$1,input_state,error,owner,G__22884,map__22886,map__22886__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907){
return (function (_22891){
var self__ = this;
var _22891__$1 = this;
return self__.meta22890;
});})(map__22887,map__22887__$1,input_state__$1,error__$1,owner__$2,map__22888,map__22888__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22883,map__22885,map__22885__$1,input_state,error,owner,G__22884,map__22886,map__22886__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907))
;

lomakkeet.fields.t22889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22887,map__22887__$1,input_state__$1,error__$1,owner__$2,map__22888,map__22888__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22883,map__22885,map__22885__$1,input_state,error,owner,G__22884,map__22886,map__22886__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907){
return (function (_22891,meta22890__$1){
var self__ = this;
var _22891__$1 = this;
return (new lomakkeet.fields.t22889(self__.input,self__.output_schema22850,self__.default_form_group,self__.owner,self__.G__22855,self__.map__22888,self__.map__22885,self__.input_schema22851,self__.input_checker22852,self__.output_checker22853,self__.input_state,self__.G__22856,self__.G__22854,self__.map__22886,self__.validate__12170__auto__,self__.size,self__.G__22884,self__.G__22883,self__.label,self__.map__22887,self__.opts,self__.ufv__,self__.help_text,self__.error,meta22890__$1));
});})(map__22887,map__22887__$1,input_state__$1,error__$1,owner__$2,map__22888,map__22888__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22883,map__22885,map__22885__$1,input_state,error,owner,G__22884,map__22886,map__22886__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907))
;

lomakkeet.fields.t22889.cljs$lang$type = true;

lomakkeet.fields.t22889.cljs$lang$ctorStr = "lomakkeet.fields/t22889";

lomakkeet.fields.t22889.cljs$lang$ctorPrWriter = ((function (map__22887,map__22887__$1,input_state__$1,error__$1,owner__$2,map__22888,map__22888__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22883,map__22885,map__22885__$1,input_state,error,owner,G__22884,map__22886,map__22886__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.fields/t22889");
});})(map__22887,map__22887__$1,input_state__$1,error__$1,owner__$2,map__22888,map__22888__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22883,map__22885,map__22885__$1,input_state,error,owner,G__22884,map__22886,map__22886__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907))
;

lomakkeet.fields.__GT_t22889 = ((function (map__22887,map__22887__$1,input_state__$1,error__$1,owner__$2,map__22888,map__22888__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22883,map__22885,map__22885__$1,input_state,error,owner,G__22884,map__22886,map__22886__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907){
return (function __GT_t22889(input__$2,output_schema22850__$1,default_form_group__$1,owner__$3,G__22855__$1,map__22888__$2,map__22885__$2,input_schema22851__$1,input_checker22852__$1,output_checker22853__$1,input_state__$2,G__22856__$1,G__22854__$1,map__22886__$2,validate__12170__auto____$1,size__$2,G__22884__$2,G__22883__$2,label__$2,map__22887__$2,opts__$2,ufv____$1,help_text__$2,error__$2,meta22890){
return (new lomakkeet.fields.t22889(input__$2,output_schema22850__$1,default_form_group__$1,owner__$3,G__22855__$1,map__22888__$2,map__22885__$2,input_schema22851__$1,input_checker22852__$1,output_checker22853__$1,input_state__$2,G__22856__$1,G__22854__$1,map__22886__$2,validate__12170__auto____$1,size__$2,G__22884__$2,G__22883__$2,label__$2,map__22887__$2,opts__$2,ufv____$1,help_text__$2,error__$2,meta22890));
});})(map__22887,map__22887__$1,input_state__$1,error__$1,owner__$2,map__22888,map__22888__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22883,map__22885,map__22885__$1,input_state,error,owner,G__22884,map__22886,map__22886__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907))
;

}

return (new lomakkeet.fields.t22889(input__$1,output_schema22850_22904,default_form_group,owner__$2,G__22855,map__22888__$1,map__22885__$1,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907,input_state__$1,G__22856,G__22854,map__22886__$1,validate__12170__auto__,size__$1,G__22884__$1,G__22883__$1,label__$1,map__22887__$1,opts__$1,ufv___22903,help_text__$1,error__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22911 = (function (){var G__22902 = o__12173__auto__;
return (output_checker22853_22907.cljs$core$IFn$_invoke$arity$1 ? output_checker22853_22907.cljs$core$IFn$_invoke$arity$1(G__22902) : output_checker22853_22907.call(null,G__22902));
})();
if(cljs.core.truth_(temp__4126__auto___22911)){
var error__12172__auto___22912 = temp__4126__auto___22911;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22912], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22912,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22850_22904,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___22903,output_schema22850_22904,input_schema22851_22905,input_checker22852_22906,output_checker22853_22907))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.default_form_group),schema.core.make_fn_schema(output_schema22850_22904,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22851_22905], null)));

lomakkeet.fields.__GT_default_form_group = (function() {
var __GT_default_form_group = null;
var __GT_default_form_group__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.default_form_group,cursor__20405__auto__);
});
var __GT_default_form_group__2 = (function (cursor__20405__auto__,m22849){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.default_form_group,cursor__20405__auto__,m22849);
});
__GT_default_form_group = function(cursor__20405__auto__,m22849){
switch(arguments.length){
case 1:
return __GT_default_form_group__1.call(this,cursor__20405__auto__);
case 2:
return __GT_default_form_group__2.call(this,cursor__20405__auto__,m22849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_default_form_group.cljs$core$IFn$_invoke$arity$1 = __GT_default_form_group__1;
__GT_default_form_group.cljs$core$IFn$_invoke$arity$2 = __GT_default_form_group__2;
return __GT_default_form_group;
})()
;
lomakkeet.fields.build = (function build(p__22913){
var map__22919 = p__22913;
var map__22919__$1 = ((cljs.core.seq_QMARK_(map__22919))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22919):map__22919);
var opts = map__22919__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22919__$1,cljs.core.constant$keyword$144);
var form_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22919__$1,cljs.core.constant$keyword$150);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22919__$1,cljs.core.constant$keyword$151);
var map__22920 = form_state;
var map__22920__$1 = ((cljs.core.seq_QMARK_(map__22920))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22920):map__22920);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22920__$1,cljs.core.constant$keyword$65);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22920__$1,cljs.core.constant$keyword$152);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22920__$1,cljs.core.constant$keyword$64);
return om.core.build.cljs$core$IFn$_invoke$arity$3(form_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22921 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22921) : cljs.core.deref.call(null,G__22921));
})(),ks),cljs.core.constant$keyword$63,(cljs.core.truth_(errors)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22922 = errors;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22922) : cljs.core.deref.call(null,G__22922));
})(),ks):null),cljs.core.constant$keyword$65,(cljs.core.truth_(schema__$1)?lomakkeet.fields.get_in_schema((function (){var G__22923 = schema__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22923) : cljs.core.deref.call(null,G__22923));
})(),ks):null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$51),cljs.core.constant$keyword$51,cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(opts)], null));
});
lomakkeet.fields.input_input = (function input_input(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,"text",cljs.core.constant$keyword$64,(function (){var or__3815__auto__ = value;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$154,cb], null)], null);
});
lomakkeet.fields.input_textarea = (function input_textarea(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,(function (){var or__3815__auto__ = value;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$154,cb], null)], null);
});
lomakkeet.fields.input_static = (function input_static(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,value], null);
});

var ufv___22964 = schema.utils.use_fn_validation;
var output_schema22925_22965 = schema.core.Any;
var input_schema22926_22966 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22927_22967 = schema.core.checker(input_schema22926_22966);
var output_checker22928_22968 = schema.core.checker(output_schema22925_22965);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks el transform-value], :or {el input-input, transform-value identity}, :as opts}]
*/
lomakkeet.fields.input_STAR_ = ((function (ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968){
return (function input_STAR_(G__22929,G__22930,G__22931){
var validate__12170__auto__ = ufv___22964.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22969 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22929,G__22930,G__22931], null);
var temp__4126__auto___22970 = (function (){var G__22948 = args__12171__auto___22969;
return (input_checker22927_22967.cljs$core$IFn$_invoke$arity$1 ? input_checker22927_22967.cljs$core$IFn$_invoke$arity$1(G__22948) : input_checker22927_22967.call(null,G__22948));
})();
if(cljs.core.truth_(temp__4126__auto___22970)){
var error__12172__auto___22971 = temp__4126__auto___22970;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22971], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22971,cljs.core.constant$keyword$64,args__12171__auto___22969,cljs.core.constant$keyword$65,input_schema22926_22966,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__22951 = G__22929;
var map__22953 = G__22951;
var map__22953__$1 = ((cljs.core.seq_QMARK_(map__22953))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22953):map__22953);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953__$1,cljs.core.constant$keyword$64);
var owner = G__22930;
var G__22952 = G__22931;
var map__22954 = G__22952;
var map__22954__$1 = ((cljs.core.seq_QMARK_(map__22954))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22954):map__22954);
var opts = map__22954__$1;
var transform_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22954__$1,cljs.core.constant$keyword$157,cljs.core.identity);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22954__$1,cljs.core.constant$keyword$158,lomakkeet.fields.input_input);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22954__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22954__$1,cljs.core.constant$keyword$145);
var G__22951__$1 = G__22951;
var owner__$1 = owner;
var G__22952__$1 = G__22952;
while(true){
var map__22955 = G__22951__$1;
var map__22955__$1 = ((cljs.core.seq_QMARK_(map__22955))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22955):map__22955);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22955__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__22956 = G__22952__$1;
var map__22956__$1 = ((cljs.core.seq_QMARK_(map__22956))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22956):map__22956);
var opts__$1 = map__22956__$1;
var transform_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22956__$1,cljs.core.constant$keyword$157,cljs.core.identity);
var el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22956__$1,cljs.core.constant$keyword$158,lomakkeet.fields.input_input);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22956__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22956__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.fields.t22957 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22957 = (function (map__22953,G__22951,G__22931,G__22929,map__22955,owner,input_STAR_,output_checker22928,el,map__22956,input_schema22926,G__22952,input_checker22927,ks,map__22954,value,G__22930,transform_value,validate__12170__auto__,ch,output_schema22925,opts,ufv__,meta22958){
this.map__22953 = map__22953;
this.G__22951 = G__22951;
this.G__22931 = G__22931;
this.G__22929 = G__22929;
this.map__22955 = map__22955;
this.owner = owner;
this.input_STAR_ = input_STAR_;
this.output_checker22928 = output_checker22928;
this.el = el;
this.map__22956 = map__22956;
this.input_schema22926 = input_schema22926;
this.G__22952 = G__22952;
this.input_checker22927 = input_checker22927;
this.ks = ks;
this.map__22954 = map__22954;
this.value = value;
this.G__22930 = G__22930;
this.transform_value = transform_value;
this.validate__12170__auto__ = validate__12170__auto__;
this.ch = ch;
this.output_schema22925 = output_schema22925;
this.opts = opts;
this.ufv__ = ufv__;
this.meta22958 = meta22958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22957.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22957.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968){
return (function (_){
var self__ = this;
var ___$1 = this;
return "input*";
});})(map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968))
;

lomakkeet.fields.t22957.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22957.prototype.om$core$IRender$render$arity$1 = ((function (map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__22960 = (function (){var G__22962 = self__.value;
return (self__.transform_value.cljs$core$IFn$_invoke$arity$1 ? self__.transform_value.cljs$core$IFn$_invoke$arity$1(G__22962) : self__.transform_value.call(null,G__22962));
})();
var G__22961 = ((function (G__22960,___$1,map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,e.target.value], null));
});})(G__22960,___$1,map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968))
;
return (self__.el.cljs$core$IFn$_invoke$arity$2 ? self__.el.cljs$core$IFn$_invoke$arity$2(G__22960,G__22961) : self__.el.call(null,G__22960,G__22961));
})());
});})(map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968))
;

lomakkeet.fields.t22957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968){
return (function (_22959){
var self__ = this;
var _22959__$1 = this;
return self__.meta22958;
});})(map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968))
;

lomakkeet.fields.t22957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968){
return (function (_22959,meta22958__$1){
var self__ = this;
var _22959__$1 = this;
return (new lomakkeet.fields.t22957(self__.map__22953,self__.G__22951,self__.G__22931,self__.G__22929,self__.map__22955,self__.owner,self__.input_STAR_,self__.output_checker22928,self__.el,self__.map__22956,self__.input_schema22926,self__.G__22952,self__.input_checker22927,self__.ks,self__.map__22954,self__.value,self__.G__22930,self__.transform_value,self__.validate__12170__auto__,self__.ch,self__.output_schema22925,self__.opts,self__.ufv__,meta22958__$1));
});})(map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968))
;

lomakkeet.fields.t22957.cljs$lang$type = true;

lomakkeet.fields.t22957.cljs$lang$ctorStr = "lomakkeet.fields/t22957";

lomakkeet.fields.t22957.cljs$lang$ctorPrWriter = ((function (map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.fields/t22957");
});})(map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968))
;

lomakkeet.fields.__GT_t22957 = ((function (map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968){
return (function __GT_t22957(map__22953__$2,G__22951__$2,G__22931__$1,G__22929__$1,map__22955__$2,owner__$3,input_STAR___$1,output_checker22928__$1,el__$2,map__22956__$2,input_schema22926__$1,G__22952__$2,input_checker22927__$1,ks__$2,map__22954__$2,value__$2,G__22930__$1,transform_value__$2,validate__12170__auto____$1,ch__$2,output_schema22925__$1,opts__$2,ufv____$1,meta22958){
return (new lomakkeet.fields.t22957(map__22953__$2,G__22951__$2,G__22931__$1,G__22929__$1,map__22955__$2,owner__$3,input_STAR___$1,output_checker22928__$1,el__$2,map__22956__$2,input_schema22926__$1,G__22952__$2,input_checker22927__$1,ks__$2,map__22954__$2,value__$2,G__22930__$1,transform_value__$2,validate__12170__auto____$1,ch__$2,output_schema22925__$1,opts__$2,ufv____$1,meta22958));
});})(map__22955,map__22955__$1,value__$1,owner__$2,map__22956,map__22956__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22951,map__22953,map__22953__$1,value,owner,G__22952,map__22954,map__22954__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968))
;

}

return (new lomakkeet.fields.t22957(map__22953__$1,G__22951__$1,G__22931,G__22929,map__22955__$1,owner__$2,input_STAR_,output_checker22928_22968,el__$1,map__22956__$1,input_schema22926_22966,G__22952__$1,input_checker22927_22967,ks__$1,map__22954__$1,value__$1,G__22930,transform_value__$1,validate__12170__auto__,ch__$1,output_schema22925_22965,opts__$1,ufv___22964,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22972 = (function (){var G__22963 = o__12173__auto__;
return (output_checker22928_22968.cljs$core$IFn$_invoke$arity$1 ? output_checker22928_22968.cljs$core$IFn$_invoke$arity$1(G__22963) : output_checker22928_22968.call(null,G__22963));
})();
if(cljs.core.truth_(temp__4126__auto___22972)){
var error__12172__auto___22973 = temp__4126__auto___22972;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22973], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22973,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22925_22965,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___22964,output_schema22925_22965,input_schema22926_22966,input_checker22927_22967,output_checker22928_22968))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.input_STAR_),schema.core.make_fn_schema(output_schema22925_22965,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22926_22966], null)));

lomakkeet.fields.__GT_input_STAR_ = (function() {
var __GT_input_STAR_ = null;
var __GT_input_STAR___1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.input_STAR_,cursor__20405__auto__);
});
var __GT_input_STAR___2 = (function (cursor__20405__auto__,m22924){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.input_STAR_,cursor__20405__auto__,m22924);
});
__GT_input_STAR_ = function(cursor__20405__auto__,m22924){
switch(arguments.length){
case 1:
return __GT_input_STAR___1.call(this,cursor__20405__auto__);
case 2:
return __GT_input_STAR___2.call(this,cursor__20405__auto__,m22924);
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
var input__delegate = function (form,label,ks,p__22974){
var vec__22976 = p__22974;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22976,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null)], 0)));
};
var input = function (form,label,ks,var_args){
var p__22974 = null;
if (arguments.length > 3) {
var G__22977__i = 0, G__22977__a = new Array(arguments.length -  3);
while (G__22977__i < G__22977__a.length) {G__22977__a[G__22977__i] = arguments[G__22977__i + 3]; ++G__22977__i;}
  p__22974 = new cljs.core.IndexedSeq(G__22977__a,0);
} 
return input__delegate.call(this,form,label,ks,p__22974);};
input.cljs$lang$maxFixedArity = 3;
input.cljs$lang$applyTo = (function (arglist__22978){
var form = cljs.core.first(arglist__22978);
arglist__22978 = cljs.core.next(arglist__22978);
var label = cljs.core.first(arglist__22978);
arglist__22978 = cljs.core.next(arglist__22978);
var ks = cljs.core.first(arglist__22978);
var p__22974 = cljs.core.rest(arglist__22978);
return input__delegate(form,label,ks,p__22974);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.textarea = (function() { 
var textarea__delegate = function (form,label,ks,p__22979){
var vec__22981 = p__22979;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22981,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$122,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks,cljs.core.constant$keyword$158,lomakkeet.fields.input_textarea], null)], 0)));
};
var textarea = function (form,label,ks,var_args){
var p__22979 = null;
if (arguments.length > 3) {
var G__22982__i = 0, G__22982__a = new Array(arguments.length -  3);
while (G__22982__i < G__22982__a.length) {G__22982__a[G__22982__i] = arguments[G__22982__i + 3]; ++G__22982__i;}
  p__22979 = new cljs.core.IndexedSeq(G__22982__a,0);
} 
return textarea__delegate.call(this,form,label,ks,p__22979);};
textarea.cljs$lang$maxFixedArity = 3;
textarea.cljs$lang$applyTo = (function (arglist__22983){
var form = cljs.core.first(arglist__22983);
arglist__22983 = cljs.core.next(arglist__22983);
var label = cljs.core.first(arglist__22983);
arglist__22983 = cljs.core.next(arglist__22983);
var ks = cljs.core.first(arglist__22983);
var p__22979 = cljs.core.rest(arglist__22983);
return textarea__delegate(form,label,ks,p__22979);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.static$ = (function() { 
var static$__delegate = function (form,label,ks,p__22984){
var vec__22986 = p__22984;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22986,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$122,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks,cljs.core.constant$keyword$158,lomakkeet.fields.input_static], null)], 0)));
};
var static$ = function (form,label,ks,var_args){
var p__22984 = null;
if (arguments.length > 3) {
var G__22987__i = 0, G__22987__a = new Array(arguments.length -  3);
while (G__22987__i < G__22987__a.length) {G__22987__a[G__22987__i] = arguments[G__22987__i + 3]; ++G__22987__i;}
  p__22984 = new cljs.core.IndexedSeq(G__22987__a,0);
} 
return static$__delegate.call(this,form,label,ks,p__22984);};
static$.cljs$lang$maxFixedArity = 3;
static$.cljs$lang$applyTo = (function (arglist__22988){
var form = cljs.core.first(arglist__22988);
arglist__22988 = cljs.core.next(arglist__22988);
var label = cljs.core.first(arglist__22988);
arglist__22988 = cljs.core.next(arglist__22988);
var ks = cljs.core.first(arglist__22988);
var p__22984 = cljs.core.rest(arglist__22988);
return static$__delegate(form,label,ks,p__22984);
});
static$.cljs$core$IFn$_invoke$arity$variadic = static$__delegate;
return static$;
})()
;

var ufv___23023 = schema.utils.use_fn_validation;
var output_schema22990_23024 = schema.core.Any;
var input_schema22991_23025 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22992_23026 = schema.core.checker(input_schema22991_23025);
var output_checker22993_23027 = schema.core.checker(output_schema22990_23024);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks], :as opts}]
*/
lomakkeet.fields.checkbox_STAR_ = ((function (ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027){
return (function checkbox_STAR_(G__22994,G__22995,G__22996){
var validate__12170__auto__ = ufv___23023.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___23028 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22994,G__22995,G__22996], null);
var temp__4126__auto___23029 = (function (){var G__23010 = args__12171__auto___23028;
return (input_checker22992_23026.cljs$core$IFn$_invoke$arity$1 ? input_checker22992_23026.cljs$core$IFn$_invoke$arity$1(G__23010) : input_checker22992_23026.call(null,G__23010));
})();
if(cljs.core.truth_(temp__4126__auto___23029)){
var error__12172__auto___23030 = temp__4126__auto___23029;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23030], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23030,cljs.core.constant$keyword$64,args__12171__auto___23028,cljs.core.constant$keyword$65,input_schema22991_23025,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__23013 = G__22994;
var map__23015 = G__23013;
var map__23015__$1 = ((cljs.core.seq_QMARK_(map__23015))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23015):map__23015);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23015__$1,cljs.core.constant$keyword$64);
var owner = G__22995;
var G__23014 = G__22996;
var map__23016 = G__23014;
var map__23016__$1 = ((cljs.core.seq_QMARK_(map__23016))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23016):map__23016);
var opts = map__23016__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23016__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23016__$1,cljs.core.constant$keyword$145);
var G__23013__$1 = G__23013;
var owner__$1 = owner;
var G__23014__$1 = G__23014;
while(true){
var map__23017 = G__23013__$1;
var map__23017__$1 = ((cljs.core.seq_QMARK_(map__23017))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23017):map__23017);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23017__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__23018 = G__23014__$1;
var map__23018__$1 = ((cljs.core.seq_QMARK_(map__23018))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23018):map__23018);
var opts__$1 = map__23018__$1;
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.fields.t23019 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t23019 = (function (owner,G__22996,G__22995,input_checker22992,ks,output_checker22993,value,input_schema22991,map__23016,validate__12170__auto__,ch,map__23018,G__22994,G__23013,G__23014,checkbox_STAR_,map__23017,opts,output_schema22990,map__23015,ufv__,meta23020){
this.owner = owner;
this.G__22996 = G__22996;
this.G__22995 = G__22995;
this.input_checker22992 = input_checker22992;
this.ks = ks;
this.output_checker22993 = output_checker22993;
this.value = value;
this.input_schema22991 = input_schema22991;
this.map__23016 = map__23016;
this.validate__12170__auto__ = validate__12170__auto__;
this.ch = ch;
this.map__23018 = map__23018;
this.G__22994 = G__22994;
this.G__23013 = G__23013;
this.G__23014 = G__23014;
this.checkbox_STAR_ = checkbox_STAR_;
this.map__23017 = map__23017;
this.opts = opts;
this.output_schema22990 = output_schema22990;
this.map__23015 = map__23015;
this.ufv__ = ufv__;
this.meta23020 = meta23020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t23019.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t23019.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027){
return (function (_){
var self__ = this;
var ___$1 = this;
return "checkbox*";
});})(map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027))
;

lomakkeet.fields.t23019.prototype.om$core$IRender$ = true;

lomakkeet.fields.t23019.prototype.om$core$IRender$render$arity$1 = ((function (map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.create_element("input",{"type": "checkbox", "checked": cljs.core.boolean$(self__.value), "onChange": ((function (___$1,map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,e.target.checked], null));
});})(___$1,map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027))
});
});})(map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027))
;

lomakkeet.fields.t23019.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027){
return (function (_23021){
var self__ = this;
var _23021__$1 = this;
return self__.meta23020;
});})(map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027))
;

lomakkeet.fields.t23019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027){
return (function (_23021,meta23020__$1){
var self__ = this;
var _23021__$1 = this;
return (new lomakkeet.fields.t23019(self__.owner,self__.G__22996,self__.G__22995,self__.input_checker22992,self__.ks,self__.output_checker22993,self__.value,self__.input_schema22991,self__.map__23016,self__.validate__12170__auto__,self__.ch,self__.map__23018,self__.G__22994,self__.G__23013,self__.G__23014,self__.checkbox_STAR_,self__.map__23017,self__.opts,self__.output_schema22990,self__.map__23015,self__.ufv__,meta23020__$1));
});})(map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027))
;

lomakkeet.fields.t23019.cljs$lang$type = true;

lomakkeet.fields.t23019.cljs$lang$ctorStr = "lomakkeet.fields/t23019";

lomakkeet.fields.t23019.cljs$lang$ctorPrWriter = ((function (map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.fields/t23019");
});})(map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027))
;

lomakkeet.fields.__GT_t23019 = ((function (map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027){
return (function __GT_t23019(owner__$3,G__22996__$1,G__22995__$1,input_checker22992__$1,ks__$2,output_checker22993__$1,value__$2,input_schema22991__$1,map__23016__$2,validate__12170__auto____$1,ch__$2,map__23018__$2,G__22994__$1,G__23013__$2,G__23014__$2,checkbox_STAR___$1,map__23017__$2,opts__$2,output_schema22990__$1,map__23015__$2,ufv____$1,meta23020){
return (new lomakkeet.fields.t23019(owner__$3,G__22996__$1,G__22995__$1,input_checker22992__$1,ks__$2,output_checker22993__$1,value__$2,input_schema22991__$1,map__23016__$2,validate__12170__auto____$1,ch__$2,map__23018__$2,G__22994__$1,G__23013__$2,G__23014__$2,checkbox_STAR___$1,map__23017__$2,opts__$2,output_schema22990__$1,map__23015__$2,ufv____$1,meta23020));
});})(map__23017,map__23017__$1,value__$1,owner__$2,map__23018,map__23018__$1,opts__$1,ks__$1,ch__$1,G__23013,map__23015,map__23015__$1,value,owner,G__23014,map__23016,map__23016__$1,opts,ks,ch,validate__12170__auto__,ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027))
;

}

return (new lomakkeet.fields.t23019(owner__$2,G__22996,G__22995,input_checker22992_23026,ks__$1,output_checker22993_23027,value__$1,input_schema22991_23025,map__23016__$1,validate__12170__auto__,ch__$1,map__23018__$1,G__22994,G__23013__$1,G__23014__$1,checkbox_STAR_,map__23017__$1,opts__$1,output_schema22990_23024,map__23015__$1,ufv___23023,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___23031 = (function (){var G__23022 = o__12173__auto__;
return (output_checker22993_23027.cljs$core$IFn$_invoke$arity$1 ? output_checker22993_23027.cljs$core$IFn$_invoke$arity$1(G__23022) : output_checker22993_23027.call(null,G__23022));
})();
if(cljs.core.truth_(temp__4126__auto___23031)){
var error__12172__auto___23032 = temp__4126__auto___23031;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23032], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23032,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22990_23024,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___23023,output_schema22990_23024,input_schema22991_23025,input_checker22992_23026,output_checker22993_23027))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.checkbox_STAR_),schema.core.make_fn_schema(output_schema22990_23024,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22991_23025], null)));

lomakkeet.fields.__GT_checkbox_STAR_ = (function() {
var __GT_checkbox_STAR_ = null;
var __GT_checkbox_STAR___1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.checkbox_STAR_,cursor__20405__auto__);
});
var __GT_checkbox_STAR___2 = (function (cursor__20405__auto__,m22989){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.checkbox_STAR_,cursor__20405__auto__,m22989);
});
__GT_checkbox_STAR_ = function(cursor__20405__auto__,m22989){
switch(arguments.length){
case 1:
return __GT_checkbox_STAR___1.call(this,cursor__20405__auto__);
case 2:
return __GT_checkbox_STAR___2.call(this,cursor__20405__auto__,m22989);
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
var checkbox__delegate = function (form,label,ks,p__23033){
var vec__23035 = p__23033;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23035,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,lomakkeet.fields.checkbox_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null)], 0)));
};
var checkbox = function (form,label,ks,var_args){
var p__23033 = null;
if (arguments.length > 3) {
var G__23036__i = 0, G__23036__a = new Array(arguments.length -  3);
while (G__23036__i < G__23036__a.length) {G__23036__a[G__23036__i] = arguments[G__23036__i + 3]; ++G__23036__i;}
  p__23033 = new cljs.core.IndexedSeq(G__23036__a,0);
} 
return checkbox__delegate.call(this,form,label,ks,p__23033);};
checkbox.cljs$lang$maxFixedArity = 3;
checkbox.cljs$lang$applyTo = (function (arglist__23037){
var form = cljs.core.first(arglist__23037);
arglist__23037 = cljs.core.next(arglist__23037);
var label = cljs.core.first(arglist__23037);
arglist__23037 = cljs.core.next(arglist__23037);
var ks = cljs.core.first(arglist__23037);
var p__23033 = cljs.core.rest(arglist__23037);
return checkbox__delegate(form,label,ks,p__23033);
});
checkbox.cljs$core$IFn$_invoke$arity$variadic = checkbox__delegate;
return checkbox;
})()
;

var ufv___23098 = schema.utils.use_fn_validation;
var output_schema23039_23099 = schema.core.Any;
var input_schema23040_23100 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23041_23101 = schema.core.checker(input_schema23040_23100);
var output_checker23042_23102 = schema.core.checker(output_schema23039_23099);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks options], :as opts}]
*/
lomakkeet.fields.select_STAR_ = ((function (ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102){
return (function select_STAR_(G__23043,G__23044,G__23045){
var validate__12170__auto__ = ufv___23098.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___23103 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23043,G__23044,G__23045], null);
var temp__4126__auto___23104 = (function (){var G__23072 = args__12171__auto___23103;
return (input_checker23041_23101.cljs$core$IFn$_invoke$arity$1 ? input_checker23041_23101.cljs$core$IFn$_invoke$arity$1(G__23072) : input_checker23041_23101.call(null,G__23072));
})();
if(cljs.core.truth_(temp__4126__auto___23104)){
var error__12172__auto___23105 = temp__4126__auto___23104;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23105], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23105,cljs.core.constant$keyword$64,args__12171__auto___23103,cljs.core.constant$keyword$65,input_schema23040_23100,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__23075 = G__23043;
var map__23077 = G__23075;
var map__23077__$1 = ((cljs.core.seq_QMARK_(map__23077))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23077):map__23077);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23077__$1,cljs.core.constant$keyword$64);
var owner = G__23044;
var G__23076 = G__23045;
var map__23078 = G__23076;
var map__23078__$1 = ((cljs.core.seq_QMARK_(map__23078))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23078):map__23078);
var opts = map__23078__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23078__$1,cljs.core.constant$keyword$159);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23078__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23078__$1,cljs.core.constant$keyword$145);
var G__23075__$1 = G__23075;
var owner__$1 = owner;
var G__23076__$1 = G__23076;
while(true){
var map__23079 = G__23075__$1;
var map__23079__$1 = ((cljs.core.seq_QMARK_(map__23079))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23079):map__23079);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23079__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__23080 = G__23076__$1;
var map__23080__$1 = ((cljs.core.seq_QMARK_(map__23080))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23080):map__23080);
var opts__$1 = map__23080__$1;
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23080__$1,cljs.core.constant$keyword$159);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23080__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23080__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.fields.t23081 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t23081 = (function (input_schema23040,options,G__23044,output_schema23039,owner,map__23077,G__23075,output_checker23042,G__23043,map__23080,G__23076,ks,value,map__23078,input_checker23041,G__23045,map__23079,validate__12170__auto__,ch,select_STAR_,opts,ufv__,meta23082){
this.input_schema23040 = input_schema23040;
this.options = options;
this.G__23044 = G__23044;
this.output_schema23039 = output_schema23039;
this.owner = owner;
this.map__23077 = map__23077;
this.G__23075 = G__23075;
this.output_checker23042 = output_checker23042;
this.G__23043 = G__23043;
this.map__23080 = map__23080;
this.G__23076 = G__23076;
this.ks = ks;
this.value = value;
this.map__23078 = map__23078;
this.input_checker23041 = input_checker23041;
this.G__23045 = G__23045;
this.map__23079 = map__23079;
this.validate__12170__auto__ = validate__12170__auto__;
this.ch = ch;
this.select_STAR_ = select_STAR_;
this.opts = opts;
this.ufv__ = ufv__;
this.meta23082 = meta23082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t23081.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t23081.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102){
return (function (_){
var self__ = this;
var ___$1 = this;
return "select*";
});})(map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102))
;

lomakkeet.fields.t23081.prototype.om$core$IRender$ = true;

lomakkeet.fields.t23081.prototype.om$core$IRender$render$arity$1 = ((function (map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23084 = "select";
var G__23085 = {"className": "form-control", "value": (((self__.value instanceof cljs.core.Keyword))?cljs.core.name(self__.value):self__.value), "onChange": ((function (G__23084,___$1,map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,e.target.value], null));
});})(G__23084,___$1,map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102))
};
var G__23086 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(self__.options))?(function (){var iter__4571__auto__ = ((function (G__23084,G__23085,___$1,map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102){
return (function iter__23087(s__23088){
return (new cljs.core.LazySeq(null,((function (G__23084,G__23085,___$1,map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102){
return (function (){
var s__23088__$1 = s__23088;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23088__$1);
if(temp__4126__auto__){
var s__23088__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23088__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__23088__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__23090 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__23089 = (0);
while(true){
if((i__23089 < size__4570__auto__)){
var vec__23095 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__23089);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23095,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23095,(1),null);
cljs.core.chunk_append(b__23090,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,k,cljs.core.constant$keyword$49,k], null),v], null));

var G__23106 = (i__23089 + (1));
i__23089 = G__23106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23090),iter__23087(cljs.core.chunk_rest(s__23088__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23090),null);
}
} else {
var vec__23096 = cljs.core.first(s__23088__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23096,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23096,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,k,cljs.core.constant$keyword$49,k], null),v], null),iter__23087(cljs.core.rest(s__23088__$2)));
}
} else {
return null;
}
break;
}
});})(G__23084,G__23085,___$1,map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102))
,null,null));
});})(G__23084,G__23085,___$1,map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102))
;
return iter__4571__auto__(self__.options);
})():null));
return React.createElement(G__23084,G__23085,G__23086);
});})(map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102))
;

lomakkeet.fields.t23081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102){
return (function (_23083){
var self__ = this;
var _23083__$1 = this;
return self__.meta23082;
});})(map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102))
;

lomakkeet.fields.t23081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102){
return (function (_23083,meta23082__$1){
var self__ = this;
var _23083__$1 = this;
return (new lomakkeet.fields.t23081(self__.input_schema23040,self__.options,self__.G__23044,self__.output_schema23039,self__.owner,self__.map__23077,self__.G__23075,self__.output_checker23042,self__.G__23043,self__.map__23080,self__.G__23076,self__.ks,self__.value,self__.map__23078,self__.input_checker23041,self__.G__23045,self__.map__23079,self__.validate__12170__auto__,self__.ch,self__.select_STAR_,self__.opts,self__.ufv__,meta23082__$1));
});})(map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102))
;

lomakkeet.fields.t23081.cljs$lang$type = true;

lomakkeet.fields.t23081.cljs$lang$ctorStr = "lomakkeet.fields/t23081";

lomakkeet.fields.t23081.cljs$lang$ctorPrWriter = ((function (map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.fields/t23081");
});})(map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102))
;

lomakkeet.fields.__GT_t23081 = ((function (map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102){
return (function __GT_t23081(input_schema23040__$1,options__$2,G__23044__$1,output_schema23039__$1,owner__$3,map__23077__$2,G__23075__$2,output_checker23042__$1,G__23043__$1,map__23080__$2,G__23076__$2,ks__$2,value__$2,map__23078__$2,input_checker23041__$1,G__23045__$1,map__23079__$2,validate__12170__auto____$1,ch__$2,select_STAR___$1,opts__$2,ufv____$1,meta23082){
return (new lomakkeet.fields.t23081(input_schema23040__$1,options__$2,G__23044__$1,output_schema23039__$1,owner__$3,map__23077__$2,G__23075__$2,output_checker23042__$1,G__23043__$1,map__23080__$2,G__23076__$2,ks__$2,value__$2,map__23078__$2,input_checker23041__$1,G__23045__$1,map__23079__$2,validate__12170__auto____$1,ch__$2,select_STAR___$1,opts__$2,ufv____$1,meta23082));
});})(map__23079,map__23079__$1,value__$1,owner__$2,map__23080,map__23080__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23075,map__23077,map__23077__$1,value,owner,G__23076,map__23078,map__23078__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102))
;

}

return (new lomakkeet.fields.t23081(input_schema23040_23100,options__$1,G__23044,output_schema23039_23099,owner__$2,map__23077__$1,G__23075__$1,output_checker23042_23102,G__23043,map__23080__$1,G__23076__$1,ks__$1,value__$1,map__23078__$1,input_checker23041_23101,G__23045,map__23079__$1,validate__12170__auto__,ch__$1,select_STAR_,opts__$1,ufv___23098,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___23107 = (function (){var G__23097 = o__12173__auto__;
return (output_checker23042_23102.cljs$core$IFn$_invoke$arity$1 ? output_checker23042_23102.cljs$core$IFn$_invoke$arity$1(G__23097) : output_checker23042_23102.call(null,G__23097));
})();
if(cljs.core.truth_(temp__4126__auto___23107)){
var error__12172__auto___23108 = temp__4126__auto___23107;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23108], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23108,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema23039_23099,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___23098,output_schema23039_23099,input_schema23040_23100,input_checker23041_23101,output_checker23042_23102))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.select_STAR_),schema.core.make_fn_schema(output_schema23039_23099,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23040_23100], null)));

lomakkeet.fields.__GT_select_STAR_ = (function() {
var __GT_select_STAR_ = null;
var __GT_select_STAR___1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.select_STAR_,cursor__20405__auto__);
});
var __GT_select_STAR___2 = (function (cursor__20405__auto__,m23038){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.select_STAR_,cursor__20405__auto__,m23038);
});
__GT_select_STAR_ = function(cursor__20405__auto__,m23038){
switch(arguments.length){
case 1:
return __GT_select_STAR___1.call(this,cursor__20405__auto__);
case 2:
return __GT_select_STAR___2.call(this,cursor__20405__auto__,m23038);
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
var select__delegate = function (form,label,ks,options,p__23109){
var vec__23111 = p__23109;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23111,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$122,lomakkeet.fields.select_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks,cljs.core.constant$keyword$159,options], null)], 0)));
};
var select = function (form,label,ks,options,var_args){
var p__23109 = null;
if (arguments.length > 4) {
var G__23112__i = 0, G__23112__a = new Array(arguments.length -  4);
while (G__23112__i < G__23112__a.length) {G__23112__a[G__23112__i] = arguments[G__23112__i + 4]; ++G__23112__i;}
  p__23109 = new cljs.core.IndexedSeq(G__23112__a,0);
} 
return select__delegate.call(this,form,label,ks,options,p__23109);};
select.cljs$lang$maxFixedArity = 4;
select.cljs$lang$applyTo = (function (arglist__23113){
var form = cljs.core.first(arglist__23113);
arglist__23113 = cljs.core.next(arglist__23113);
var label = cljs.core.first(arglist__23113);
arglist__23113 = cljs.core.next(arglist__23113);
var ks = cljs.core.first(arglist__23113);
arglist__23113 = cljs.core.next(arglist__23113);
var options = cljs.core.first(arglist__23113);
var p__23109 = cljs.core.rest(arglist__23113);
return select__delegate(form,label,ks,options,p__23109);
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
lomakkeet.fields.FormState = schema.core.schema_with_name(new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$64,schema.core.Any,cljs.core.constant$keyword$160,schema.core.Any,cljs.core.constant$keyword$152,schema.core.Any,cljs.core.constant$keyword$65,schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"FormState","FormState",834878066,null));
lomakkeet.fields.__GT_form_state = (function() {
var __GT_form_state = null;
var __GT_form_state__1 = (function (value){
return __GT_form_state.cljs$core$IFn$_invoke$arity$2(value,null);
});
var __GT_form_state__2 = (function (value,schema__$1){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$64,value,cljs.core.constant$keyword$160,value,cljs.core.constant$keyword$152,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null),cljs.core.constant$keyword$65,schema__$1], null);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_state,cljs.core.constant$keyword$64,cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(form_state));
});
lomakkeet.fields.save_form = (function save_form(p__23116,value){
var map__23118 = p__23116;
var map__23118__$1 = ((cljs.core.seq_QMARK_(map__23118))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23118):map__23118);
var form_state = map__23118__$1;
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23118__$1,cljs.core.constant$keyword$65);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.constant$keyword$64,value,cljs.core.array_seq([cljs.core.constant$keyword$160,value,cljs.core.constant$keyword$152,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null)], 0));
});
/**
* @param {...*} var_args
*/
lomakkeet.fields.update_form = (function() { 
var update_form__delegate = function (p__23119,f,args){
var map__23121 = p__23119;
var map__23121__$1 = ((cljs.core.seq_QMARK_(map__23121))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23121):map__23121);
var form_state = map__23121__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23121__$1,cljs.core.constant$keyword$64);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,value,args);
return lomakkeet.fields.save_form(form_state,new_value);
};
var update_form = function (p__23119,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23122__i = 0, G__23122__a = new Array(arguments.length -  2);
while (G__23122__i < G__23122__a.length) {G__23122__a[G__23122__i] = arguments[G__23122__i + 2]; ++G__23122__i;}
  args = new cljs.core.IndexedSeq(G__23122__a,0);
} 
return update_form__delegate.call(this,p__23119,f,args);};
update_form.cljs$lang$maxFixedArity = 2;
update_form.cljs$lang$applyTo = (function (arglist__23123){
var p__23119 = cljs.core.first(arglist__23123);
arglist__23123 = cljs.core.next(arglist__23123);
var f = cljs.core.first(arglist__23123);
var args = cljs.core.rest(arglist__23123);
return update_form__delegate(p__23119,f,args);
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
return (function (p1__23124_SHARP_){
return lomakkeet.fields.dissoc_in(p1__23124_SHARP_,ks);
});})(schema__$2))
);
} else {
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(value_cursor,ks,value);
}
}
});

var ufv___23465 = schema.utils.use_fn_validation;
var output_schema23126_23466 = schema.core.Any;
var input_schema23127_23467 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(lomakkeet.fields.FormState,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23128_23468 = schema.core.checker(input_schema23127_23467);
var output_checker23129_23469 = schema.core.checker(output_schema23126_23466);
/**
* Inputs: [{:keys [value initial-value], :as form-state} :- FormState owner {:keys [actions render-fn form form-validation-fn after-change], :as opts}]
*/
lomakkeet.fields.form = ((function (ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function form(G__23130,G__23131,G__23132){
var validate__12170__auto__ = ufv___23465.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___23470 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23130,G__23131,G__23132], null);
var temp__4126__auto___23471 = (function (){var G__23299 = args__12171__auto___23470;
return (input_checker23128_23468.cljs$core$IFn$_invoke$arity$1 ? input_checker23128_23468.cljs$core$IFn$_invoke$arity$1(G__23299) : input_checker23128_23468.call(null,G__23299));
})();
if(cljs.core.truth_(temp__4126__auto___23471)){
var error__12172__auto___23472 = temp__4126__auto___23471;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23472], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23472,cljs.core.constant$keyword$64,args__12171__auto___23470,cljs.core.constant$keyword$65,input_schema23127_23467,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__23302 = G__23130;
var map__23304 = G__23302;
var map__23304__$1 = ((cljs.core.seq_QMARK_(map__23304))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23304):map__23304);
var form_state = map__23304__$1;
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23304__$1,cljs.core.constant$keyword$160);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23304__$1,cljs.core.constant$keyword$64);
var owner = G__23131;
var G__23303 = G__23132;
var map__23305 = G__23303;
var map__23305__$1 = ((cljs.core.seq_QMARK_(map__23305))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23305):map__23305);
var opts = map__23305__$1;
var after_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,cljs.core.constant$keyword$161);
var form_validation_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,cljs.core.constant$keyword$162);
var form__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,cljs.core.constant$keyword$141);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,cljs.core.constant$keyword$163);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,cljs.core.constant$keyword$164);
var G__23302__$1 = G__23302;
var owner__$1 = owner;
var G__23303__$1 = G__23303;
while(true){
var map__23306 = G__23302__$1;
var map__23306__$1 = ((cljs.core.seq_QMARK_(map__23306))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23306):map__23306);
var form_state__$1 = map__23306__$1;
var initial_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23306__$1,cljs.core.constant$keyword$160);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23306__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__23307 = G__23303__$1;
var map__23307__$1 = ((cljs.core.seq_QMARK_(map__23307))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23307):map__23307);
var opts__$1 = map__23307__$1;
var after_change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,cljs.core.constant$keyword$161);
var form_validation_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,cljs.core.constant$keyword$162);
var form__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,cljs.core.constant$keyword$141);
var render_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,cljs.core.constant$keyword$163);
var actions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,cljs.core.constant$keyword$164);
if(typeof lomakkeet.fields.t23308 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t23308 = (function (form,map__23307,after_change,owner,map__23304,form_validation_fn,G__23132,form_state,G__23130,output_schema23126,render_fn,value,output_checker23129,input_schema23127,actions,validate__12170__auto__,map__23305,input_checker23128,map__23306,G__23303,opts,initial_value,ufv__,G__23131,G__23302,meta23309){
this.form = form;
this.map__23307 = map__23307;
this.after_change = after_change;
this.owner = owner;
this.map__23304 = map__23304;
this.form_validation_fn = form_validation_fn;
this.G__23132 = G__23132;
this.form_state = form_state;
this.G__23130 = G__23130;
this.output_schema23126 = output_schema23126;
this.render_fn = render_fn;
this.value = value;
this.output_checker23129 = output_checker23129;
this.input_schema23127 = input_schema23127;
this.actions = actions;
this.validate__12170__auto__ = validate__12170__auto__;
this.map__23305 = map__23305;
this.input_checker23128 = input_checker23128;
this.map__23306 = map__23306;
this.G__23303 = G__23303;
this.opts = opts;
this.initial_value = initial_value;
this.ufv__ = ufv__;
this.G__23131 = G__23131;
this.G__23302 = G__23302;
this.meta23309 = meta23309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t23308.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t23308.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function (_){
var self__ = this;
var ___$1 = this;
return "form";
});})(map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
;

lomakkeet.fields.t23308.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t23308.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function (_,form__$1){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__23311 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$151,self__.form_state,cljs.core.constant$keyword$64,(function (){var G__23312 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23312) : cljs.core.deref.call(null,G__23312));
})(),cljs.core.constant$keyword$160,(function (){var G__23313 = self__.initial_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23313) : cljs.core.deref.call(null,G__23313));
})(),cljs.core.constant$keyword$141,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,cljs.core.constant$keyword$151,self__.form_state),cljs.core.constant$keyword$145,cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(form__$1)], null);
return (self__.render_fn.cljs$core$IFn$_invoke$arity$1 ? self__.render_fn.cljs$core$IFn$_invoke$arity$1(G__23311) : self__.render_fn.call(null,G__23311));
})());
});})(map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
;

lomakkeet.fields.t23308.prototype.om$core$IWillMount$ = true;

lomakkeet.fields.t23308.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function (_){
var self__ = this;
var ___$1 = this;
var schema__$1 = (cljs.core.truth_(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(self__.form_state))?(function (){var G__23315 = cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(self__.form_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23315) : cljs.core.deref.call(null,G__23315));
})():null);
var map__23314 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
var map__23314__$1 = ((cljs.core.seq_QMARK_(map__23314))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23314):map__23314);
var coercion_matcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23314__$1,cljs.core.constant$keyword$165);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23314__$1,cljs.core.constant$keyword$145);
var c__16216__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto__,schema__$1,map__23314,map__23314__$1,coercion_matcher,ch,___$1,map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto__,schema__$1,map__23314,map__23314__$1,coercion_matcher,ch,___$1,map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function (state_23396){
var state_val_23397 = (state_23396[(1)]);
if((state_val_23397 === (7))){
var inst_23321 = (state_23396[(7)]);
var inst_23324 = (state_23396[(8)]);
var inst_23318 = (state_23396[(9)]);
var inst_23323 = (function (){var G__23398 = self__.form_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23398) : cljs.core.deref.call(null,G__23398));
})();
var inst_23324__$1 = (function (){var G__23399 = inst_23323;
var G__23400 = inst_23318;
return (inst_23321.cljs$core$IFn$_invoke$arity$2 ? inst_23321.cljs$core$IFn$_invoke$arity$2(G__23399,G__23400) : inst_23321.call(null,G__23399,G__23400));
})();
var inst_23325 = lomakkeet.fields.chan_QMARK_(inst_23324__$1);
var state_23396__$1 = (function (){var statearr_23401 = state_23396;
(statearr_23401[(8)] = inst_23324__$1);

return statearr_23401;
})();
if(inst_23325){
var statearr_23402_23473 = state_23396__$1;
(statearr_23402_23473[(1)] = (10));

} else {
var statearr_23403_23474 = state_23396__$1;
(statearr_23403_23474[(1)] = (11));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (20))){
var state_23396__$1 = state_23396;
var statearr_23404_23475 = state_23396__$1;
(statearr_23404_23475[(2)] = null);

(statearr_23404_23475[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (27))){
var inst_23383 = (state_23396[(10)]);
var inst_23389 = (state_23396[(2)]);
var inst_23390 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23383,inst_23389], 0));
var inst_23391 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.form_state,cljs.core.constant$keyword$152,inst_23390);
var state_23396__$1 = (function (){var statearr_23405 = state_23396;
(statearr_23405[(11)] = inst_23391);

return statearr_23405;
})();
var statearr_23406_23476 = state_23396__$1;
(statearr_23406_23476[(2)] = null);

(statearr_23406_23476[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (1))){
var state_23396__$1 = state_23396;
var statearr_23407_23477 = state_23396__$1;
(statearr_23407_23477[(2)] = null);

(statearr_23407_23477[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (24))){
var inst_23383 = (state_23396[(2)]);
var state_23396__$1 = (function (){var statearr_23408 = state_23396;
(statearr_23408[(10)] = inst_23383);

return statearr_23408;
})();
if(cljs.core.truth_(schema__$1)){
var statearr_23409_23478 = state_23396__$1;
(statearr_23409_23478[(1)] = (25));

} else {
var statearr_23410_23479 = state_23396__$1;
(statearr_23410_23479[(1)] = (26));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (4))){
var inst_23318 = (state_23396[(9)]);
var inst_23318__$1 = (state_23396[(2)]);
var inst_23319 = (function (){var G__23411 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23411) : cljs.core.deref.call(null,G__23411));
})();
var inst_23366 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_23318__$1);
var state_23396__$1 = (function (){var statearr_23412 = state_23396;
(statearr_23412[(9)] = inst_23318__$1);

(statearr_23412[(12)] = inst_23319);

return statearr_23412;
})();
var G__23413_23480 = (((inst_23366 instanceof cljs.core.Keyword))?inst_23366.fqn:null);
switch (G__23413_23480) {
case "change":
var statearr_23414_23482 = state_23396__$1;
(statearr_23414_23482[(1)] = (14));


break;
case "cancel":
var statearr_23415_23483 = state_23396__$1;
(statearr_23415_23483[(1)] = (13));


break;
case "action":
var statearr_23416_23484 = state_23396__$1;
(statearr_23416_23484[(1)] = (6));


break;
default:
var statearr_23417_23485 = state_23396__$1;
(statearr_23417_23485[(1)] = (18));



}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (15))){
var inst_23318 = (state_23396[(9)]);
var inst_23352 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23318);
var state_23396__$1 = state_23396;
var statearr_23418_23486 = state_23396__$1;
(statearr_23418_23486[(2)] = inst_23352);

(statearr_23418_23486[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (21))){
var inst_23377 = (state_23396[(2)]);
var state_23396__$1 = (function (){var statearr_23419 = state_23396;
(statearr_23419[(13)] = inst_23377);

return statearr_23419;
})();
if(cljs.core.truth_(self__.form_validation_fn)){
var statearr_23420_23487 = state_23396__$1;
(statearr_23420_23487[(1)] = (22));

} else {
var statearr_23421_23488 = state_23396__$1;
(statearr_23421_23488[(1)] = (23));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (13))){
var inst_23347 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,lomakkeet.fields.cancel_form);
var state_23396__$1 = state_23396;
var statearr_23422_23489 = state_23396__$1;
(statearr_23422_23489[(2)] = inst_23347);

(statearr_23422_23489[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (22))){
var inst_23379 = (function (){var G__23423 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23423) : cljs.core.deref.call(null,G__23423));
})();
var inst_23380 = (function (){var G__23424 = inst_23379;
return (self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1 ? self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1(G__23424) : self__.form_validation_fn.call(null,G__23424));
})();
var state_23396__$1 = state_23396;
var statearr_23425_23490 = state_23396__$1;
(statearr_23425_23490[(2)] = inst_23380);

(statearr_23425_23490[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (6))){
var inst_23321 = (state_23396[(7)]);
var inst_23318 = (state_23396[(9)]);
var inst_23320 = cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(inst_23318);
var inst_23321__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.actions,inst_23320);
var state_23396__$1 = (function (){var statearr_23426 = state_23396;
(statearr_23426[(7)] = inst_23321__$1);

return statearr_23426;
})();
if(cljs.core.truth_(inst_23321__$1)){
var statearr_23427_23491 = state_23396__$1;
(statearr_23427_23491[(1)] = (7));

} else {
var statearr_23428_23492 = state_23396__$1;
(statearr_23428_23492[(1)] = (8));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (25))){
var inst_23385 = (function (){var G__23429 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23429) : cljs.core.deref.call(null,G__23429));
})();
var inst_23386 = schema.core.check(schema__$1,inst_23385);
var state_23396__$1 = state_23396;
var statearr_23430_23493 = state_23396__$1;
(statearr_23430_23493[(2)] = inst_23386);

(statearr_23430_23493[(1)] = (27));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (17))){
var inst_23318 = (state_23396[(9)]);
var inst_23355 = (state_23396[(2)]);
var inst_23356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23355,cljs.core.constant$keyword$144);
var inst_23357 = lomakkeet.fields.get_in_schema(schema__$1,inst_23356);
var inst_23358 = cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(inst_23318);
var inst_23359 = lomakkeet.fields.coerce(coercion_matcher,inst_23357,inst_23358);
var inst_23360 = lomakkeet.fields.change_value(self__.value,schema__$1,inst_23356,inst_23359);
var state_23396__$1 = state_23396;
var statearr_23431_23494 = state_23396__$1;
(statearr_23431_23494[(2)] = inst_23360);

(statearr_23431_23494[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (3))){
var inst_23394 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23396__$1,inst_23394);
} else {
if((state_val_23397 === (12))){
var inst_23339 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
var statearr_23432_23495 = state_23396__$1;
(statearr_23432_23495[(2)] = inst_23339);

(statearr_23432_23495[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (2))){
var state_23396__$1 = state_23396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23396__$1,(4),ch);
} else {
if((state_val_23397 === (23))){
var state_23396__$1 = state_23396;
var statearr_23433_23496 = state_23396__$1;
(statearr_23433_23496[(2)] = null);

(statearr_23433_23496[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (19))){
var inst_23319 = (state_23396[(12)]);
var inst_23370 = [cljs.core.constant$keyword$151,cljs.core.constant$keyword$64,cljs.core.constant$keyword$166,cljs.core.constant$keyword$167];
var inst_23371 = (function (){var G__23434 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23434) : cljs.core.deref.call(null,G__23434));
})();
var inst_23372 = [self__.form_state,inst_23371,self__.value,inst_23319];
var inst_23373 = cljs.core.PersistentHashMap.fromArrays(inst_23370,inst_23372);
var inst_23374 = (function (){var G__23435 = inst_23373;
return (self__.after_change.cljs$core$IFn$_invoke$arity$1 ? self__.after_change.cljs$core$IFn$_invoke$arity$1(G__23435) : self__.after_change.call(null,G__23435));
})();
var state_23396__$1 = state_23396;
var statearr_23436_23497 = state_23396__$1;
(statearr_23436_23497[(2)] = inst_23374);

(statearr_23436_23497[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (11))){
var inst_23324 = (state_23396[(8)]);
var inst_23337 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_23324);
var state_23396__$1 = state_23396;
var statearr_23437_23498 = state_23396__$1;
(statearr_23437_23498[(2)] = inst_23337);

(statearr_23437_23498[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (9))){
var inst_23345 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
var statearr_23438_23499 = state_23396__$1;
(statearr_23438_23499[(2)] = inst_23345);

(statearr_23438_23499[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (5))){
var inst_23368 = (state_23396[(2)]);
var state_23396__$1 = (function (){var statearr_23439 = state_23396;
(statearr_23439[(14)] = inst_23368);

return statearr_23439;
})();
if(cljs.core.truth_(self__.after_change)){
var statearr_23440_23500 = state_23396__$1;
(statearr_23440_23500[(1)] = (19));

} else {
var statearr_23441_23501 = state_23396__$1;
(statearr_23441_23501[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (14))){
var inst_23318 = (state_23396[(9)]);
var inst_23350 = cljs.core.seq_QMARK_(inst_23318);
var state_23396__$1 = state_23396;
if(inst_23350){
var statearr_23442_23502 = state_23396__$1;
(statearr_23442_23502[(1)] = (15));

} else {
var statearr_23443_23503 = state_23396__$1;
(statearr_23443_23503[(1)] = (16));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (26))){
var state_23396__$1 = state_23396;
var statearr_23444_23504 = state_23396__$1;
(statearr_23444_23504[(2)] = null);

(statearr_23444_23504[(1)] = (27));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (16))){
var inst_23318 = (state_23396[(9)]);
var state_23396__$1 = state_23396;
var statearr_23445_23505 = state_23396__$1;
(statearr_23445_23505[(2)] = inst_23318);

(statearr_23445_23505[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (10))){
var inst_23321 = (state_23396[(7)]);
var inst_23324 = (state_23396[(8)]);
var inst_23318 = (state_23396[(9)]);
var inst_23319 = (state_23396[(12)]);
var inst_23333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23334 = (function (){var c__16216__auto____$1 = inst_23333;
var next = inst_23324;
var action_fn = inst_23321;
var temp__4124__auto__ = inst_23321;
var prev_value = inst_23319;
var evt = inst_23318;
return ((function (c__16216__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23321,inst_23324,inst_23318,inst_23319,inst_23333,state_val_23397,c__16216__auto__,schema__$1,map__23314,map__23314__$1,coercion_matcher,ch,___$1,map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23321,inst_23324,inst_23318,inst_23319,inst_23333,state_val_23397,c__16216__auto__,schema__$1,map__23314,map__23314__$1,coercion_matcher,ch,___$1,map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function (state_23331){
var state_val_23332 = (state_23331[(1)]);
if((state_val_23332 === (2))){
var inst_23328 = (state_23331[(2)]);
var inst_23329 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_23328);
var state_23331__$1 = state_23331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23331__$1,inst_23329);
} else {
if((state_val_23332 === (1))){
var state_23331__$1 = state_23331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23331__$1,(2),next);
} else {
return null;
}
}
});})(c__16216__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23321,inst_23324,inst_23318,inst_23319,inst_23333,state_val_23397,c__16216__auto__,schema__$1,map__23314,map__23314__$1,coercion_matcher,ch,___$1,map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
;
return ((function (switch__16136__auto__,c__16216__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23321,inst_23324,inst_23318,inst_23319,inst_23333,state_val_23397,c__16216__auto__,schema__$1,map__23314,map__23314__$1,coercion_matcher,ch,___$1,map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_23449 = [null,null,null,null,null,null,null];
(statearr_23449[(0)] = state_machine__16137__auto__);

(statearr_23449[(1)] = (1));

return statearr_23449;
});
var state_machine__16137__auto____1 = (function (state_23331){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_23331);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e23450){if((e23450 instanceof Object)){
var ex__16140__auto__ = e23450;
var statearr_23451_23506 = state_23331;
(statearr_23451_23506[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23331);

return cljs.core.constant$keyword$97;
} else {
throw e23450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__23507 = state_23331;
state_23331 = G__23507;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_23331){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_23331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23321,inst_23324,inst_23318,inst_23319,inst_23333,state_val_23397,c__16216__auto__,schema__$1,map__23314,map__23314__$1,coercion_matcher,ch,___$1,map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
})();
var state__16218__auto__ = (function (){var statearr_23452 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_23452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto____$1);

return statearr_23452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});
;})(c__16216__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23321,inst_23324,inst_23318,inst_23319,inst_23333,state_val_23397,c__16216__auto__,schema__$1,map__23314,map__23314__$1,coercion_matcher,ch,___$1,map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
})();
var inst_23335 = cljs.core.async.impl.dispatch.run(inst_23334);
var state_23396__$1 = (function (){var statearr_23453 = state_23396;
(statearr_23453[(15)] = inst_23335);

return statearr_23453;
})();
var statearr_23454_23508 = state_23396__$1;
(statearr_23454_23508[(2)] = inst_23333);

(statearr_23454_23508[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (18))){
var inst_23318 = (state_23396[(9)]);
var inst_23362 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_23318);
var inst_23363 = [cljs.core.str("Unknown event-type: "),cljs.core.str(inst_23362)].join('');
var inst_23364 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23363], 0));
var state_23396__$1 = state_23396;
var statearr_23455_23509 = state_23396__$1;
(statearr_23455_23509[(2)] = inst_23364);

(statearr_23455_23509[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23397 === (8))){
var inst_23318 = (state_23396[(9)]);
var inst_23341 = cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(inst_23318);
var inst_23342 = [cljs.core.str("WARNING: "),cljs.core.str(inst_23341),cljs.core.str(" is unknown")].join('');
var inst_23343 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23342], 0));
var state_23396__$1 = state_23396;
var statearr_23456_23510 = state_23396__$1;
(statearr_23456_23510[(2)] = inst_23343);

(statearr_23456_23510[(1)] = (9));


return cljs.core.constant$keyword$97;
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
});})(c__16216__auto__,schema__$1,map__23314,map__23314__$1,coercion_matcher,ch,___$1,map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
;
return ((function (switch__16136__auto__,c__16216__auto__,schema__$1,map__23314,map__23314__$1,coercion_matcher,ch,___$1,map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_23460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23460[(0)] = state_machine__16137__auto__);

(statearr_23460[(1)] = (1));

return statearr_23460;
});
var state_machine__16137__auto____1 = (function (state_23396){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_23396);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e23461){if((e23461 instanceof Object)){
var ex__16140__auto__ = e23461;
var statearr_23462_23511 = state_23396;
(statearr_23462_23511[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23396);

return cljs.core.constant$keyword$97;
} else {
throw e23461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__23512 = state_23396;
state_23396 = G__23512;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_23396){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_23396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto__,schema__$1,map__23314,map__23314__$1,coercion_matcher,ch,___$1,map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
})();
var state__16218__auto__ = (function (){var statearr_23463 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_23463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_23463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto__,schema__$1,map__23314,map__23314__$1,coercion_matcher,ch,___$1,map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
);

return c__16216__auto__;
});})(map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
;

lomakkeet.fields.t23308.prototype.om$core$IInitState$ = true;

lomakkeet.fields.t23308.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function (_){
var self__ = this;
var ___$1 = this;
if((schema.core.check(lomakkeet.fields.FormState,self__.form_state) == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"FormState","FormState",834878066,null),new cljs.core.Symbol(null,"form-state","form-state",-256843510,null)))], 0)))].join('')));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$145,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$150,lomakkeet.fields.default_form_group,cljs.core.constant$keyword$165,schema.coerce.json_coercion_matcher], null),self__.form], 0));
});})(map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
;

lomakkeet.fields.t23308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function (_23310){
var self__ = this;
var _23310__$1 = this;
return self__.meta23309;
});})(map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
;

lomakkeet.fields.t23308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function (_23310,meta23309__$1){
var self__ = this;
var _23310__$1 = this;
return (new lomakkeet.fields.t23308(self__.form,self__.map__23307,self__.after_change,self__.owner,self__.map__23304,self__.form_validation_fn,self__.G__23132,self__.form_state,self__.G__23130,self__.output_schema23126,self__.render_fn,self__.value,self__.output_checker23129,self__.input_schema23127,self__.actions,self__.validate__12170__auto__,self__.map__23305,self__.input_checker23128,self__.map__23306,self__.G__23303,self__.opts,self__.initial_value,self__.ufv__,self__.G__23131,self__.G__23302,meta23309__$1));
});})(map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
;

lomakkeet.fields.t23308.cljs$lang$type = true;

lomakkeet.fields.t23308.cljs$lang$ctorStr = "lomakkeet.fields/t23308";

lomakkeet.fields.t23308.cljs$lang$ctorPrWriter = ((function (map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.fields/t23308");
});})(map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
;

lomakkeet.fields.__GT_t23308 = ((function (map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469){
return (function __GT_t23308(form__$3,map__23307__$2,after_change__$2,owner__$3,map__23304__$2,form_validation_fn__$2,G__23132__$1,form_state__$2,G__23130__$1,output_schema23126__$1,render_fn__$2,value__$2,output_checker23129__$1,input_schema23127__$1,actions__$2,validate__12170__auto____$1,map__23305__$2,input_checker23128__$1,map__23306__$2,G__23303__$2,opts__$2,initial_value__$2,ufv____$1,G__23131__$1,G__23302__$2,meta23309){
return (new lomakkeet.fields.t23308(form__$3,map__23307__$2,after_change__$2,owner__$3,map__23304__$2,form_validation_fn__$2,G__23132__$1,form_state__$2,G__23130__$1,output_schema23126__$1,render_fn__$2,value__$2,output_checker23129__$1,input_schema23127__$1,actions__$2,validate__12170__auto____$1,map__23305__$2,input_checker23128__$1,map__23306__$2,G__23303__$2,opts__$2,initial_value__$2,ufv____$1,G__23131__$1,G__23302__$2,meta23309));
});})(map__23306,map__23306__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23307,map__23307__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23302,map__23304,map__23304__$1,form_state,initial_value,value,owner,G__23303,map__23305,map__23305__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
;

}

return (new lomakkeet.fields.t23308(form__$2,map__23307__$1,after_change__$1,owner__$2,map__23304__$1,form_validation_fn__$1,G__23132,form_state__$1,G__23130,output_schema23126_23466,render_fn__$1,value__$1,output_checker23129_23469,input_schema23127_23467,actions__$1,validate__12170__auto__,map__23305__$1,input_checker23128_23468,map__23306__$1,G__23303__$1,opts__$1,initial_value__$1,ufv___23465,G__23131,G__23302__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___23513 = (function (){var G__23464 = o__12173__auto__;
return (output_checker23129_23469.cljs$core$IFn$_invoke$arity$1 ? output_checker23129_23469.cljs$core$IFn$_invoke$arity$1(G__23464) : output_checker23129_23469.call(null,G__23464));
})();
if(cljs.core.truth_(temp__4126__auto___23513)){
var error__12172__auto___23514 = temp__4126__auto___23513;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23514], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23514,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema23126_23466,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___23465,output_schema23126_23466,input_schema23127_23467,input_checker23128_23468,output_checker23129_23469))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.form),schema.core.make_fn_schema(output_schema23126_23466,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23127_23467], null)));

lomakkeet.fields.__GT_form = (function() {
var __GT_form = null;
var __GT_form__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.form,cursor__20405__auto__);
});
var __GT_form__2 = (function (cursor__20405__auto__,m23125){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,cursor__20405__auto__,m23125);
});
__GT_form = function(cursor__20405__auto__,m23125){
switch(arguments.length){
case 1:
return __GT_form__1.call(this,cursor__20405__auto__);
case 2:
return __GT_form__2.call(this,cursor__20405__auto__,m23125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_form.cljs$core$IFn$_invoke$arity$1 = __GT_form__1;
__GT_form.cljs$core$IFn$_invoke$arity$2 = __GT_form__2;
return __GT_form;
})()
;
lomakkeet.fields.dirty_QMARK_ = (function dirty_QMARK_(form_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(form_state),cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(form_state));
});
lomakkeet.fields.errors_QMARK_ = (function errors_QMARK_(form_state){
return cljs.core.seq(cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(form_state));
});
