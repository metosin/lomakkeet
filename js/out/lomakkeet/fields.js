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
var get_in_schema__delegate = function (schema__$1,ks,p__22790){
var vec__22792 = p__22790;
var not_found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22792,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22792,not_found){
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
});})(vec__22792,not_found))
,schema__$1,ks);
};
var get_in_schema = function (schema__$1,ks,var_args){
var p__22790 = null;
if (arguments.length > 2) {
var G__22793__i = 0, G__22793__a = new Array(arguments.length -  2);
while (G__22793__i < G__22793__a.length) {G__22793__a[G__22793__i] = arguments[G__22793__i + 2]; ++G__22793__i;}
  p__22790 = new cljs.core.IndexedSeq(G__22793__a,0);
} 
return get_in_schema__delegate.call(this,schema__$1,ks,p__22790);};
get_in_schema.cljs$lang$maxFixedArity = 2;
get_in_schema.cljs$lang$applyTo = (function (arglist__22794){
var schema__$1 = cljs.core.first(arglist__22794);
arglist__22794 = cljs.core.next(arglist__22794);
var ks = cljs.core.first(arglist__22794);
var p__22790 = cljs.core.rest(arglist__22794);
return get_in_schema__delegate(schema__$1,ks,p__22790);
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
lomakkeet.fields.dissoc_in = (function dissoc_in(m,p__22795){
var vec__22799 = p__22795;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22799,(0),null);
var ks = cljs.core.nthnext(vec__22799,(1));
var keys = vec__22799;
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
lomakkeet.fields.empty_cb = (function empty_cb(p__22800){
var map__22802 = p__22800;
var map__22802__$1 = ((cljs.core.seq_QMARK_(map__22802))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22802):map__22802);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22802__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22802__$1,cljs.core.constant$keyword$145);
return ((function (map__22802,map__22802__$1,ks,ch){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$64,null,cljs.core.constant$keyword$144,ks], null));
});
;})(map__22802,map__22802__$1,ks,ch))
});

var ufv___22855 = schema.utils.use_fn_validation;
var output_schema22804_22856 = schema.core.Any;
var input_schema22805_22857 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22806_22858 = schema.core.checker(input_schema22805_22857);
var output_checker22807_22859 = schema.core.checker(output_schema22804_22856);
/**
* Inputs: [state owner {:keys [real-input], :as opts}]
*/
lomakkeet.fields.emptyable_input = ((function (ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859){
return (function emptyable_input(G__22808,G__22809,G__22810){
var validate__12170__auto__ = ufv___22855.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22860 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22808,G__22809,G__22810], null);
var temp__4126__auto___22861 = (function (){var G__22833 = args__12171__auto___22860;
return (input_checker22806_22858.cljs$core$IFn$_invoke$arity$1 ? input_checker22806_22858.cljs$core$IFn$_invoke$arity$1(G__22833) : input_checker22806_22858.call(null,G__22833));
})();
if(cljs.core.truth_(temp__4126__auto___22861)){
var error__12172__auto___22862 = temp__4126__auto___22861;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22862], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22862,cljs.core.constant$keyword$64,args__12171__auto___22860,cljs.core.constant$keyword$65,input_schema22805_22857,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var state = G__22808;
var owner = G__22809;
var G__22835 = G__22810;
var map__22836 = G__22835;
var map__22836__$1 = ((cljs.core.seq_QMARK_(map__22836))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22836):map__22836);
var opts = map__22836__$1;
var real_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22836__$1,cljs.core.constant$keyword$147);
var state__$1 = state;
var owner__$1 = owner;
var G__22835__$1 = G__22835;
while(true){
var state__$2 = state__$1;
var owner__$2 = owner__$1;
var map__22837 = G__22835__$1;
var map__22837__$1 = ((cljs.core.seq_QMARK_(map__22837))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22837):map__22837);
var opts__$1 = map__22837__$1;
var real_input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22837__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22838 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22838 = (function (output_checker22807,map__22837,owner,G__22835,emptyable_input,input_checker22806,input_schema22805,G__22809,real_input,state,G__22808,validate__12170__auto__,map__22836,opts,ufv__,G__22810,output_schema22804,meta22839){
this.output_checker22807 = output_checker22807;
this.map__22837 = map__22837;
this.owner = owner;
this.G__22835 = G__22835;
this.emptyable_input = emptyable_input;
this.input_checker22806 = input_checker22806;
this.input_schema22805 = input_schema22805;
this.G__22809 = G__22809;
this.real_input = real_input;
this.state = state;
this.G__22808 = G__22808;
this.validate__12170__auto__ = validate__12170__auto__;
this.map__22836 = map__22836;
this.opts = opts;
this.ufv__ = ufv__;
this.G__22810 = G__22810;
this.output_schema22804 = output_schema22804;
this.meta22839 = meta22839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22838.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22838.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state__$2,owner__$2,map__22837,map__22837__$1,opts__$1,real_input__$1,state,owner,G__22835,map__22836,map__22836__$1,opts,real_input,validate__12170__auto__,ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859){
return (function (_){
var self__ = this;
var ___$1 = this;
return "emptyable-input";
});})(state__$2,owner__$2,map__22837,map__22837__$1,opts__$1,real_input__$1,state,owner,G__22835,map__22836,map__22836__$1,opts,real_input,validate__12170__auto__,ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859))
;

lomakkeet.fields.t22838.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22838.prototype.om$core$IRenderState$render_state$arity$2 = ((function (state__$2,owner__$2,map__22837,map__22837__$1,opts__$1,real_input__$1,state,owner,G__22835,map__22836,map__22836__$1,opts,real_input,validate__12170__auto__,ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var attrs22841 = om.core.build.cljs$core$IFn$_invoke$arity$3(self__.real_input,self__.state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,self__.opts,cljs.core.constant$keyword$51,s], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22841))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-group"], null)], null),attrs22841], 0))):{"className": "input-group"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22841))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22842 = "span";
var G__22843 = {"className": "input-group-btn"};
var G__22844 = (function (){var G__22845 = "button";
var G__22846 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22847 = "\u00D7";
return React.createElement(G__22845,G__22846,G__22847);
})();
return React.createElement(G__22842,G__22843,G__22844);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22841),(function (){var G__22848 = "span";
var G__22849 = {"className": "input-group-btn"};
var G__22850 = (function (){var G__22851 = "button";
var G__22852 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22853 = "\u00D7";
return React.createElement(G__22851,G__22852,G__22853);
})();
return React.createElement(G__22848,G__22849,G__22850);
})()], null))));
});})(state__$2,owner__$2,map__22837,map__22837__$1,opts__$1,real_input__$1,state,owner,G__22835,map__22836,map__22836__$1,opts,real_input,validate__12170__auto__,ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859))
;

lomakkeet.fields.t22838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state__$2,owner__$2,map__22837,map__22837__$1,opts__$1,real_input__$1,state,owner,G__22835,map__22836,map__22836__$1,opts,real_input,validate__12170__auto__,ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859){
return (function (_22840){
var self__ = this;
var _22840__$1 = this;
return self__.meta22839;
});})(state__$2,owner__$2,map__22837,map__22837__$1,opts__$1,real_input__$1,state,owner,G__22835,map__22836,map__22836__$1,opts,real_input,validate__12170__auto__,ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859))
;

lomakkeet.fields.t22838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state__$2,owner__$2,map__22837,map__22837__$1,opts__$1,real_input__$1,state,owner,G__22835,map__22836,map__22836__$1,opts,real_input,validate__12170__auto__,ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859){
return (function (_22840,meta22839__$1){
var self__ = this;
var _22840__$1 = this;
return (new lomakkeet.fields.t22838(self__.output_checker22807,self__.map__22837,self__.owner,self__.G__22835,self__.emptyable_input,self__.input_checker22806,self__.input_schema22805,self__.G__22809,self__.real_input,self__.state,self__.G__22808,self__.validate__12170__auto__,self__.map__22836,self__.opts,self__.ufv__,self__.G__22810,self__.output_schema22804,meta22839__$1));
});})(state__$2,owner__$2,map__22837,map__22837__$1,opts__$1,real_input__$1,state,owner,G__22835,map__22836,map__22836__$1,opts,real_input,validate__12170__auto__,ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859))
;

lomakkeet.fields.t22838.cljs$lang$type = true;

lomakkeet.fields.t22838.cljs$lang$ctorStr = "lomakkeet.fields/t22838";

lomakkeet.fields.t22838.cljs$lang$ctorPrWriter = ((function (state__$2,owner__$2,map__22837,map__22837__$1,opts__$1,real_input__$1,state,owner,G__22835,map__22836,map__22836__$1,opts,real_input,validate__12170__auto__,ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.fields/t22838");
});})(state__$2,owner__$2,map__22837,map__22837__$1,opts__$1,real_input__$1,state,owner,G__22835,map__22836,map__22836__$1,opts,real_input,validate__12170__auto__,ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859))
;

lomakkeet.fields.__GT_t22838 = ((function (state__$2,owner__$2,map__22837,map__22837__$1,opts__$1,real_input__$1,state,owner,G__22835,map__22836,map__22836__$1,opts,real_input,validate__12170__auto__,ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859){
return (function __GT_t22838(output_checker22807__$1,map__22837__$2,owner__$3,G__22835__$2,emptyable_input__$1,input_checker22806__$1,input_schema22805__$1,G__22809__$1,real_input__$2,state__$3,G__22808__$1,validate__12170__auto____$1,map__22836__$2,opts__$2,ufv____$1,G__22810__$1,output_schema22804__$1,meta22839){
return (new lomakkeet.fields.t22838(output_checker22807__$1,map__22837__$2,owner__$3,G__22835__$2,emptyable_input__$1,input_checker22806__$1,input_schema22805__$1,G__22809__$1,real_input__$2,state__$3,G__22808__$1,validate__12170__auto____$1,map__22836__$2,opts__$2,ufv____$1,G__22810__$1,output_schema22804__$1,meta22839));
});})(state__$2,owner__$2,map__22837,map__22837__$1,opts__$1,real_input__$1,state,owner,G__22835,map__22836,map__22836__$1,opts,real_input,validate__12170__auto__,ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859))
;

}

return (new lomakkeet.fields.t22838(output_checker22807_22859,map__22837__$1,owner__$2,G__22835__$1,emptyable_input,input_checker22806_22858,input_schema22805_22857,G__22809,real_input__$1,state__$2,G__22808,validate__12170__auto__,map__22836__$1,opts__$1,ufv___22855,G__22810,output_schema22804_22856,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22863 = (function (){var G__22854 = o__12173__auto__;
return (output_checker22807_22859.cljs$core$IFn$_invoke$arity$1 ? output_checker22807_22859.cljs$core$IFn$_invoke$arity$1(G__22854) : output_checker22807_22859.call(null,G__22854));
})();
if(cljs.core.truth_(temp__4126__auto___22863)){
var error__12172__auto___22864 = temp__4126__auto___22863;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22864], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22864,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22804_22856,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___22855,output_schema22804_22856,input_schema22805_22857,input_checker22806_22858,output_checker22807_22859))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.emptyable_input),schema.core.make_fn_schema(output_schema22804_22856,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22805_22857], null)));

lomakkeet.fields.__GT_emptyable_input = (function() {
var __GT_emptyable_input = null;
var __GT_emptyable_input__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.emptyable_input,cursor__20405__auto__);
});
var __GT_emptyable_input__2 = (function (cursor__20405__auto__,m22803){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.emptyable_input,cursor__20405__auto__,m22803);
});
__GT_emptyable_input = function(cursor__20405__auto__,m22803){
switch(arguments.length){
case 1:
return __GT_emptyable_input__1.call(this,cursor__20405__auto__);
case 2:
return __GT_emptyable_input__2.call(this,cursor__20405__auto__,m22803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$1 = __GT_emptyable_input__1;
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$2 = __GT_emptyable_input__2;
return __GT_emptyable_input;
})()
;

var ufv___22919 = schema.utils.use_fn_validation;
var output_schema22866_22920 = schema.core.Any;
var input_schema22867_22921 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22868_22922 = schema.core.checker(input_schema22867_22921);
var output_checker22869_22923 = schema.core.checker(output_schema22866_22920);
/**
* Inputs: [{:keys [error], :as input-state} owner {:keys [input label size help-text], :or {size 6}, :as opts}]
*/
lomakkeet.fields.default_form_group = ((function (ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923){
return (function default_form_group(G__22870,G__22871,G__22872){
var validate__12170__auto__ = ufv___22919.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22924 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22870,G__22871,G__22872], null);
var temp__4126__auto___22925 = (function (){var G__22896 = args__12171__auto___22924;
return (input_checker22868_22922.cljs$core$IFn$_invoke$arity$1 ? input_checker22868_22922.cljs$core$IFn$_invoke$arity$1(G__22896) : input_checker22868_22922.call(null,G__22896));
})();
if(cljs.core.truth_(temp__4126__auto___22925)){
var error__12172__auto___22926 = temp__4126__auto___22925;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22926], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22926,cljs.core.constant$keyword$64,args__12171__auto___22924,cljs.core.constant$keyword$65,input_schema22867_22921,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__22899 = G__22870;
var map__22901 = G__22899;
var map__22901__$1 = ((cljs.core.seq_QMARK_(map__22901))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22901):map__22901);
var input_state = map__22901__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22901__$1,cljs.core.constant$keyword$63);
var owner = G__22871;
var G__22900 = G__22872;
var map__22902 = G__22900;
var map__22902__$1 = ((cljs.core.seq_QMARK_(map__22902))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22902):map__22902);
var opts = map__22902__$1;
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22902__$1,cljs.core.constant$keyword$148);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22902__$1,cljs.core.constant$keyword$149,(6));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22902__$1,cljs.core.constant$keyword$135);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22902__$1,cljs.core.constant$keyword$122);
var G__22899__$1 = G__22899;
var owner__$1 = owner;
var G__22900__$1 = G__22900;
while(true){
var map__22903 = G__22899__$1;
var map__22903__$1 = ((cljs.core.seq_QMARK_(map__22903))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22903):map__22903);
var input_state__$1 = map__22903__$1;
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22903__$1,cljs.core.constant$keyword$63);
var owner__$2 = owner__$1;
var map__22904 = G__22900__$1;
var map__22904__$1 = ((cljs.core.seq_QMARK_(map__22904))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22904):map__22904);
var opts__$1 = map__22904__$1;
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22904__$1,cljs.core.constant$keyword$148);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22904__$1,cljs.core.constant$keyword$149,(6));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22904__$1,cljs.core.constant$keyword$135);
var input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22904__$1,cljs.core.constant$keyword$122);
if(typeof lomakkeet.fields.t22905 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22905 = (function (input,default_form_group,input_checker22868,owner,G__22871,map__22904,map__22903,input_state,map__22901,map__22902,validate__12170__auto__,size,G__22899,output_checker22869,G__22870,label,opts,G__22900,output_schema22866,ufv__,input_schema22867,help_text,error,G__22872,meta22906){
this.input = input;
this.default_form_group = default_form_group;
this.input_checker22868 = input_checker22868;
this.owner = owner;
this.G__22871 = G__22871;
this.map__22904 = map__22904;
this.map__22903 = map__22903;
this.input_state = input_state;
this.map__22901 = map__22901;
this.map__22902 = map__22902;
this.validate__12170__auto__ = validate__12170__auto__;
this.size = size;
this.G__22899 = G__22899;
this.output_checker22869 = output_checker22869;
this.G__22870 = G__22870;
this.label = label;
this.opts = opts;
this.G__22900 = G__22900;
this.output_schema22866 = output_schema22866;
this.ufv__ = ufv__;
this.input_schema22867 = input_schema22867;
this.help_text = help_text;
this.error = error;
this.G__22872 = G__22872;
this.meta22906 = meta22906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22905.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22905.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22903,map__22903__$1,input_state__$1,error__$1,owner__$2,map__22904,map__22904__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22899,map__22901,map__22901__$1,input_state,error,owner,G__22900,map__22902,map__22902__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923){
return (function (_){
var self__ = this;
var ___$1 = this;
return "default-form-group";
});})(map__22903,map__22903__$1,input_state__$1,error__$1,owner__$2,map__22904,map__22904__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22899,map__22901,map__22901__$1,input_state,error,owner,G__22900,map__22902,map__22902__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923))
;

lomakkeet.fields.t22905.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22905.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22903,map__22903__$1,input_state__$1,error__$1,owner__$2,map__22904,map__22904__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22899,map__22901,map__22901__$1,input_state,error,owner,G__22900,map__22902,map__22902__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var G__22909 = "div";
var G__22910 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",(function (){var G__22915 = cljs.core.PersistentVector.EMPTY;
var G__22915__$1 = (cljs.core.truth_(self__.error)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22915,"has-error"):G__22915);
var G__22915__$2 = (cljs.core.truth_(self__.size)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22915__$1,[cljs.core.str("col-md-"),cljs.core.str(self__.size)].join('')):G__22915__$1);
return G__22915__$2;
})()], null))};
var G__22911 = (function (){var attrs22908 = self__.label;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"label",((cljs.core.map_QMARK_(attrs22908))?sablono.interpreter.attributes(attrs22908):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22908))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22908),":"], null))));
})();
var G__22912 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(self__.input,self__.input_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,self__.opts,cljs.core.constant$keyword$51,s], null)));
var G__22913 = (cljs.core.truth_(self__.help_text)?(function (){var attrs22916 = self__.help_text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs22916))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22916], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22916))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22916)], null))));
})():null);
var G__22914 = (cljs.core.truth_((function (){var and__3803__auto__ = !(cljs.core.empty_QMARK_);
if(and__3803__auto__){
return self__.error;
} else {
return and__3803__auto__;
}
})())?(function (){var attrs22917 = [cljs.core.str(self__.error)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs22917))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22917], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22917))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22917)], null))));
})():null);
return React.createElement(G__22909,G__22910,G__22911,G__22912,G__22913,G__22914);
});})(map__22903,map__22903__$1,input_state__$1,error__$1,owner__$2,map__22904,map__22904__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22899,map__22901,map__22901__$1,input_state,error,owner,G__22900,map__22902,map__22902__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923))
;

lomakkeet.fields.t22905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22903,map__22903__$1,input_state__$1,error__$1,owner__$2,map__22904,map__22904__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22899,map__22901,map__22901__$1,input_state,error,owner,G__22900,map__22902,map__22902__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923){
return (function (_22907){
var self__ = this;
var _22907__$1 = this;
return self__.meta22906;
});})(map__22903,map__22903__$1,input_state__$1,error__$1,owner__$2,map__22904,map__22904__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22899,map__22901,map__22901__$1,input_state,error,owner,G__22900,map__22902,map__22902__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923))
;

lomakkeet.fields.t22905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22903,map__22903__$1,input_state__$1,error__$1,owner__$2,map__22904,map__22904__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22899,map__22901,map__22901__$1,input_state,error,owner,G__22900,map__22902,map__22902__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923){
return (function (_22907,meta22906__$1){
var self__ = this;
var _22907__$1 = this;
return (new lomakkeet.fields.t22905(self__.input,self__.default_form_group,self__.input_checker22868,self__.owner,self__.G__22871,self__.map__22904,self__.map__22903,self__.input_state,self__.map__22901,self__.map__22902,self__.validate__12170__auto__,self__.size,self__.G__22899,self__.output_checker22869,self__.G__22870,self__.label,self__.opts,self__.G__22900,self__.output_schema22866,self__.ufv__,self__.input_schema22867,self__.help_text,self__.error,self__.G__22872,meta22906__$1));
});})(map__22903,map__22903__$1,input_state__$1,error__$1,owner__$2,map__22904,map__22904__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22899,map__22901,map__22901__$1,input_state,error,owner,G__22900,map__22902,map__22902__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923))
;

lomakkeet.fields.t22905.cljs$lang$type = true;

lomakkeet.fields.t22905.cljs$lang$ctorStr = "lomakkeet.fields/t22905";

lomakkeet.fields.t22905.cljs$lang$ctorPrWriter = ((function (map__22903,map__22903__$1,input_state__$1,error__$1,owner__$2,map__22904,map__22904__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22899,map__22901,map__22901__$1,input_state,error,owner,G__22900,map__22902,map__22902__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.fields/t22905");
});})(map__22903,map__22903__$1,input_state__$1,error__$1,owner__$2,map__22904,map__22904__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22899,map__22901,map__22901__$1,input_state,error,owner,G__22900,map__22902,map__22902__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923))
;

lomakkeet.fields.__GT_t22905 = ((function (map__22903,map__22903__$1,input_state__$1,error__$1,owner__$2,map__22904,map__22904__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22899,map__22901,map__22901__$1,input_state,error,owner,G__22900,map__22902,map__22902__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923){
return (function __GT_t22905(input__$2,default_form_group__$1,input_checker22868__$1,owner__$3,G__22871__$1,map__22904__$2,map__22903__$2,input_state__$2,map__22901__$2,map__22902__$2,validate__12170__auto____$1,size__$2,G__22899__$2,output_checker22869__$1,G__22870__$1,label__$2,opts__$2,G__22900__$2,output_schema22866__$1,ufv____$1,input_schema22867__$1,help_text__$2,error__$2,G__22872__$1,meta22906){
return (new lomakkeet.fields.t22905(input__$2,default_form_group__$1,input_checker22868__$1,owner__$3,G__22871__$1,map__22904__$2,map__22903__$2,input_state__$2,map__22901__$2,map__22902__$2,validate__12170__auto____$1,size__$2,G__22899__$2,output_checker22869__$1,G__22870__$1,label__$2,opts__$2,G__22900__$2,output_schema22866__$1,ufv____$1,input_schema22867__$1,help_text__$2,error__$2,G__22872__$1,meta22906));
});})(map__22903,map__22903__$1,input_state__$1,error__$1,owner__$2,map__22904,map__22904__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22899,map__22901,map__22901__$1,input_state,error,owner,G__22900,map__22902,map__22902__$1,opts,help_text,size,label,input,validate__12170__auto__,ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923))
;

}

return (new lomakkeet.fields.t22905(input__$1,default_form_group,input_checker22868_22922,owner__$2,G__22871,map__22904__$1,map__22903__$1,input_state__$1,map__22901__$1,map__22902__$1,validate__12170__auto__,size__$1,G__22899__$1,output_checker22869_22923,G__22870,label__$1,opts__$1,G__22900__$1,output_schema22866_22920,ufv___22919,input_schema22867_22921,help_text__$1,error__$1,G__22872,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22927 = (function (){var G__22918 = o__12173__auto__;
return (output_checker22869_22923.cljs$core$IFn$_invoke$arity$1 ? output_checker22869_22923.cljs$core$IFn$_invoke$arity$1(G__22918) : output_checker22869_22923.call(null,G__22918));
})();
if(cljs.core.truth_(temp__4126__auto___22927)){
var error__12172__auto___22928 = temp__4126__auto___22927;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22928], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22928,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22866_22920,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___22919,output_schema22866_22920,input_schema22867_22921,input_checker22868_22922,output_checker22869_22923))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.default_form_group),schema.core.make_fn_schema(output_schema22866_22920,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22867_22921], null)));

lomakkeet.fields.__GT_default_form_group = (function() {
var __GT_default_form_group = null;
var __GT_default_form_group__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.default_form_group,cursor__20405__auto__);
});
var __GT_default_form_group__2 = (function (cursor__20405__auto__,m22865){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.default_form_group,cursor__20405__auto__,m22865);
});
__GT_default_form_group = function(cursor__20405__auto__,m22865){
switch(arguments.length){
case 1:
return __GT_default_form_group__1.call(this,cursor__20405__auto__);
case 2:
return __GT_default_form_group__2.call(this,cursor__20405__auto__,m22865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_default_form_group.cljs$core$IFn$_invoke$arity$1 = __GT_default_form_group__1;
__GT_default_form_group.cljs$core$IFn$_invoke$arity$2 = __GT_default_form_group__2;
return __GT_default_form_group;
})()
;
lomakkeet.fields.build = (function build(p__22929){
var map__22935 = p__22929;
var map__22935__$1 = ((cljs.core.seq_QMARK_(map__22935))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22935):map__22935);
var opts = map__22935__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935__$1,cljs.core.constant$keyword$144);
var form_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935__$1,cljs.core.constant$keyword$150);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935__$1,cljs.core.constant$keyword$151);
var map__22936 = form_state;
var map__22936__$1 = ((cljs.core.seq_QMARK_(map__22936))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22936):map__22936);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22936__$1,cljs.core.constant$keyword$65);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22936__$1,cljs.core.constant$keyword$152);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22936__$1,cljs.core.constant$keyword$64);
return om.core.build.cljs$core$IFn$_invoke$arity$3(form_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22937 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22937) : cljs.core.deref.call(null,G__22937));
})(),ks),cljs.core.constant$keyword$63,(cljs.core.truth_(errors)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22938 = errors;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22938) : cljs.core.deref.call(null,G__22938));
})(),ks):null),cljs.core.constant$keyword$65,(cljs.core.truth_(schema__$1)?lomakkeet.fields.get_in_schema((function (){var G__22939 = schema__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22939) : cljs.core.deref.call(null,G__22939));
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

var ufv___22980 = schema.utils.use_fn_validation;
var output_schema22941_22981 = schema.core.Any;
var input_schema22942_22982 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22943_22983 = schema.core.checker(input_schema22942_22982);
var output_checker22944_22984 = schema.core.checker(output_schema22941_22981);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks el transform-value], :or {el input-input, transform-value identity}, :as opts}]
*/
lomakkeet.fields.input_STAR_ = ((function (ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984){
return (function input_STAR_(G__22945,G__22946,G__22947){
var validate__12170__auto__ = ufv___22980.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22985 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22945,G__22946,G__22947], null);
var temp__4126__auto___22986 = (function (){var G__22964 = args__12171__auto___22985;
return (input_checker22943_22983.cljs$core$IFn$_invoke$arity$1 ? input_checker22943_22983.cljs$core$IFn$_invoke$arity$1(G__22964) : input_checker22943_22983.call(null,G__22964));
})();
if(cljs.core.truth_(temp__4126__auto___22986)){
var error__12172__auto___22987 = temp__4126__auto___22986;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22987], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22987,cljs.core.constant$keyword$64,args__12171__auto___22985,cljs.core.constant$keyword$65,input_schema22942_22982,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__22967 = G__22945;
var map__22969 = G__22967;
var map__22969__$1 = ((cljs.core.seq_QMARK_(map__22969))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22969):map__22969);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,cljs.core.constant$keyword$64);
var owner = G__22946;
var G__22968 = G__22947;
var map__22970 = G__22968;
var map__22970__$1 = ((cljs.core.seq_QMARK_(map__22970))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22970):map__22970);
var opts = map__22970__$1;
var transform_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22970__$1,cljs.core.constant$keyword$157,cljs.core.identity);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22970__$1,cljs.core.constant$keyword$158,lomakkeet.fields.input_input);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22970__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22970__$1,cljs.core.constant$keyword$145);
var G__22967__$1 = G__22967;
var owner__$1 = owner;
var G__22968__$1 = G__22968;
while(true){
var map__22971 = G__22967__$1;
var map__22971__$1 = ((cljs.core.seq_QMARK_(map__22971))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22971):map__22971);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__22972 = G__22968__$1;
var map__22972__$1 = ((cljs.core.seq_QMARK_(map__22972))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22972):map__22972);
var opts__$1 = map__22972__$1;
var transform_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22972__$1,cljs.core.constant$keyword$157,cljs.core.identity);
var el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22972__$1,cljs.core.constant$keyword$158,lomakkeet.fields.input_input);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22972__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22972__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.fields.t22973 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22973 = (function (G__22945,G__22968,owner,map__22970,input_STAR_,input_schema22942,G__22947,el,ks,input_checker22943,output_checker22944,value,map__22971,transform_value,G__22946,validate__12170__auto__,ch,map__22969,map__22972,opts,ufv__,output_schema22941,G__22967,meta22974){
this.G__22945 = G__22945;
this.G__22968 = G__22968;
this.owner = owner;
this.map__22970 = map__22970;
this.input_STAR_ = input_STAR_;
this.input_schema22942 = input_schema22942;
this.G__22947 = G__22947;
this.el = el;
this.ks = ks;
this.input_checker22943 = input_checker22943;
this.output_checker22944 = output_checker22944;
this.value = value;
this.map__22971 = map__22971;
this.transform_value = transform_value;
this.G__22946 = G__22946;
this.validate__12170__auto__ = validate__12170__auto__;
this.ch = ch;
this.map__22969 = map__22969;
this.map__22972 = map__22972;
this.opts = opts;
this.ufv__ = ufv__;
this.output_schema22941 = output_schema22941;
this.G__22967 = G__22967;
this.meta22974 = meta22974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22973.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22973.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984){
return (function (_){
var self__ = this;
var ___$1 = this;
return "input*";
});})(map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984))
;

lomakkeet.fields.t22973.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22973.prototype.om$core$IRender$render$arity$1 = ((function (map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__22976 = (function (){var G__22978 = self__.value;
return (self__.transform_value.cljs$core$IFn$_invoke$arity$1 ? self__.transform_value.cljs$core$IFn$_invoke$arity$1(G__22978) : self__.transform_value.call(null,G__22978));
})();
var G__22977 = ((function (G__22976,___$1,map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,e.target.value], null));
});})(G__22976,___$1,map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984))
;
return (self__.el.cljs$core$IFn$_invoke$arity$2 ? self__.el.cljs$core$IFn$_invoke$arity$2(G__22976,G__22977) : self__.el.call(null,G__22976,G__22977));
})());
});})(map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984))
;

lomakkeet.fields.t22973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984){
return (function (_22975){
var self__ = this;
var _22975__$1 = this;
return self__.meta22974;
});})(map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984))
;

lomakkeet.fields.t22973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984){
return (function (_22975,meta22974__$1){
var self__ = this;
var _22975__$1 = this;
return (new lomakkeet.fields.t22973(self__.G__22945,self__.G__22968,self__.owner,self__.map__22970,self__.input_STAR_,self__.input_schema22942,self__.G__22947,self__.el,self__.ks,self__.input_checker22943,self__.output_checker22944,self__.value,self__.map__22971,self__.transform_value,self__.G__22946,self__.validate__12170__auto__,self__.ch,self__.map__22969,self__.map__22972,self__.opts,self__.ufv__,self__.output_schema22941,self__.G__22967,meta22974__$1));
});})(map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984))
;

lomakkeet.fields.t22973.cljs$lang$type = true;

lomakkeet.fields.t22973.cljs$lang$ctorStr = "lomakkeet.fields/t22973";

lomakkeet.fields.t22973.cljs$lang$ctorPrWriter = ((function (map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.fields/t22973");
});})(map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984))
;

lomakkeet.fields.__GT_t22973 = ((function (map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984){
return (function __GT_t22973(G__22945__$1,G__22968__$2,owner__$3,map__22970__$2,input_STAR___$1,input_schema22942__$1,G__22947__$1,el__$2,ks__$2,input_checker22943__$1,output_checker22944__$1,value__$2,map__22971__$2,transform_value__$2,G__22946__$1,validate__12170__auto____$1,ch__$2,map__22969__$2,map__22972__$2,opts__$2,ufv____$1,output_schema22941__$1,G__22967__$2,meta22974){
return (new lomakkeet.fields.t22973(G__22945__$1,G__22968__$2,owner__$3,map__22970__$2,input_STAR___$1,input_schema22942__$1,G__22947__$1,el__$2,ks__$2,input_checker22943__$1,output_checker22944__$1,value__$2,map__22971__$2,transform_value__$2,G__22946__$1,validate__12170__auto____$1,ch__$2,map__22969__$2,map__22972__$2,opts__$2,ufv____$1,output_schema22941__$1,G__22967__$2,meta22974));
});})(map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,transform_value,el,ks,ch,validate__12170__auto__,ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984))
;

}

return (new lomakkeet.fields.t22973(G__22945,G__22968__$1,owner__$2,map__22970__$1,input_STAR_,input_schema22942_22982,G__22947,el__$1,ks__$1,input_checker22943_22983,output_checker22944_22984,value__$1,map__22971__$1,transform_value__$1,G__22946,validate__12170__auto__,ch__$1,map__22969__$1,map__22972__$1,opts__$1,ufv___22980,output_schema22941_22981,G__22967__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22988 = (function (){var G__22979 = o__12173__auto__;
return (output_checker22944_22984.cljs$core$IFn$_invoke$arity$1 ? output_checker22944_22984.cljs$core$IFn$_invoke$arity$1(G__22979) : output_checker22944_22984.call(null,G__22979));
})();
if(cljs.core.truth_(temp__4126__auto___22988)){
var error__12172__auto___22989 = temp__4126__auto___22988;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22989], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22989,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22941_22981,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___22980,output_schema22941_22981,input_schema22942_22982,input_checker22943_22983,output_checker22944_22984))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.input_STAR_),schema.core.make_fn_schema(output_schema22941_22981,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22942_22982], null)));

lomakkeet.fields.__GT_input_STAR_ = (function() {
var __GT_input_STAR_ = null;
var __GT_input_STAR___1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.input_STAR_,cursor__20405__auto__);
});
var __GT_input_STAR___2 = (function (cursor__20405__auto__,m22940){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.input_STAR_,cursor__20405__auto__,m22940);
});
__GT_input_STAR_ = function(cursor__20405__auto__,m22940){
switch(arguments.length){
case 1:
return __GT_input_STAR___1.call(this,cursor__20405__auto__);
case 2:
return __GT_input_STAR___2.call(this,cursor__20405__auto__,m22940);
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
var input__delegate = function (form,label,ks,p__22990){
var vec__22992 = p__22990;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22992,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null)], 0)));
};
var input = function (form,label,ks,var_args){
var p__22990 = null;
if (arguments.length > 3) {
var G__22993__i = 0, G__22993__a = new Array(arguments.length -  3);
while (G__22993__i < G__22993__a.length) {G__22993__a[G__22993__i] = arguments[G__22993__i + 3]; ++G__22993__i;}
  p__22990 = new cljs.core.IndexedSeq(G__22993__a,0);
} 
return input__delegate.call(this,form,label,ks,p__22990);};
input.cljs$lang$maxFixedArity = 3;
input.cljs$lang$applyTo = (function (arglist__22994){
var form = cljs.core.first(arglist__22994);
arglist__22994 = cljs.core.next(arglist__22994);
var label = cljs.core.first(arglist__22994);
arglist__22994 = cljs.core.next(arglist__22994);
var ks = cljs.core.first(arglist__22994);
var p__22990 = cljs.core.rest(arglist__22994);
return input__delegate(form,label,ks,p__22990);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.textarea = (function() { 
var textarea__delegate = function (form,label,ks,p__22995){
var vec__22997 = p__22995;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22997,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$122,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks,cljs.core.constant$keyword$158,lomakkeet.fields.input_textarea], null)], 0)));
};
var textarea = function (form,label,ks,var_args){
var p__22995 = null;
if (arguments.length > 3) {
var G__22998__i = 0, G__22998__a = new Array(arguments.length -  3);
while (G__22998__i < G__22998__a.length) {G__22998__a[G__22998__i] = arguments[G__22998__i + 3]; ++G__22998__i;}
  p__22995 = new cljs.core.IndexedSeq(G__22998__a,0);
} 
return textarea__delegate.call(this,form,label,ks,p__22995);};
textarea.cljs$lang$maxFixedArity = 3;
textarea.cljs$lang$applyTo = (function (arglist__22999){
var form = cljs.core.first(arglist__22999);
arglist__22999 = cljs.core.next(arglist__22999);
var label = cljs.core.first(arglist__22999);
arglist__22999 = cljs.core.next(arglist__22999);
var ks = cljs.core.first(arglist__22999);
var p__22995 = cljs.core.rest(arglist__22999);
return textarea__delegate(form,label,ks,p__22995);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.static$ = (function() { 
var static$__delegate = function (form,label,ks,p__23000){
var vec__23002 = p__23000;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23002,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$122,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks,cljs.core.constant$keyword$158,lomakkeet.fields.input_static], null)], 0)));
};
var static$ = function (form,label,ks,var_args){
var p__23000 = null;
if (arguments.length > 3) {
var G__23003__i = 0, G__23003__a = new Array(arguments.length -  3);
while (G__23003__i < G__23003__a.length) {G__23003__a[G__23003__i] = arguments[G__23003__i + 3]; ++G__23003__i;}
  p__23000 = new cljs.core.IndexedSeq(G__23003__a,0);
} 
return static$__delegate.call(this,form,label,ks,p__23000);};
static$.cljs$lang$maxFixedArity = 3;
static$.cljs$lang$applyTo = (function (arglist__23004){
var form = cljs.core.first(arglist__23004);
arglist__23004 = cljs.core.next(arglist__23004);
var label = cljs.core.first(arglist__23004);
arglist__23004 = cljs.core.next(arglist__23004);
var ks = cljs.core.first(arglist__23004);
var p__23000 = cljs.core.rest(arglist__23004);
return static$__delegate(form,label,ks,p__23000);
});
static$.cljs$core$IFn$_invoke$arity$variadic = static$__delegate;
return static$;
})()
;

var ufv___23039 = schema.utils.use_fn_validation;
var output_schema23006_23040 = schema.core.Any;
var input_schema23007_23041 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23008_23042 = schema.core.checker(input_schema23007_23041);
var output_checker23009_23043 = schema.core.checker(output_schema23006_23040);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks], :as opts}]
*/
lomakkeet.fields.checkbox_STAR_ = ((function (ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043){
return (function checkbox_STAR_(G__23010,G__23011,G__23012){
var validate__12170__auto__ = ufv___23039.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___23044 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23010,G__23011,G__23012], null);
var temp__4126__auto___23045 = (function (){var G__23026 = args__12171__auto___23044;
return (input_checker23008_23042.cljs$core$IFn$_invoke$arity$1 ? input_checker23008_23042.cljs$core$IFn$_invoke$arity$1(G__23026) : input_checker23008_23042.call(null,G__23026));
})();
if(cljs.core.truth_(temp__4126__auto___23045)){
var error__12172__auto___23046 = temp__4126__auto___23045;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23046], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23046,cljs.core.constant$keyword$64,args__12171__auto___23044,cljs.core.constant$keyword$65,input_schema23007_23041,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__23029 = G__23010;
var map__23031 = G__23029;
var map__23031__$1 = ((cljs.core.seq_QMARK_(map__23031))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23031):map__23031);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23031__$1,cljs.core.constant$keyword$64);
var owner = G__23011;
var G__23030 = G__23012;
var map__23032 = G__23030;
var map__23032__$1 = ((cljs.core.seq_QMARK_(map__23032))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23032):map__23032);
var opts = map__23032__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,cljs.core.constant$keyword$145);
var G__23029__$1 = G__23029;
var owner__$1 = owner;
var G__23030__$1 = G__23030;
while(true){
var map__23033 = G__23029__$1;
var map__23033__$1 = ((cljs.core.seq_QMARK_(map__23033))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23033):map__23033);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23033__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__23034 = G__23030__$1;
var map__23034__$1 = ((cljs.core.seq_QMARK_(map__23034))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23034):map__23034);
var opts__$1 = map__23034__$1;
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23034__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23034__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.fields.t23035 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t23035 = (function (map__23032,owner,map__23031,G__23010,map__23033,ks,output_schema23006,input_checker23008,value,map__23034,G__23011,input_schema23007,validate__12170__auto__,ch,G__23012,checkbox_STAR_,G__23030,opts,ufv__,output_checker23009,G__23029,meta23036){
this.map__23032 = map__23032;
this.owner = owner;
this.map__23031 = map__23031;
this.G__23010 = G__23010;
this.map__23033 = map__23033;
this.ks = ks;
this.output_schema23006 = output_schema23006;
this.input_checker23008 = input_checker23008;
this.value = value;
this.map__23034 = map__23034;
this.G__23011 = G__23011;
this.input_schema23007 = input_schema23007;
this.validate__12170__auto__ = validate__12170__auto__;
this.ch = ch;
this.G__23012 = G__23012;
this.checkbox_STAR_ = checkbox_STAR_;
this.G__23030 = G__23030;
this.opts = opts;
this.ufv__ = ufv__;
this.output_checker23009 = output_checker23009;
this.G__23029 = G__23029;
this.meta23036 = meta23036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t23035.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t23035.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043){
return (function (_){
var self__ = this;
var ___$1 = this;
return "checkbox*";
});})(map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043))
;

lomakkeet.fields.t23035.prototype.om$core$IRender$ = true;

lomakkeet.fields.t23035.prototype.om$core$IRender$render$arity$1 = ((function (map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.create_element("input",{"type": "checkbox", "checked": cljs.core.boolean$(self__.value), "onChange": ((function (___$1,map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,e.target.checked], null));
});})(___$1,map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043))
});
});})(map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043))
;

lomakkeet.fields.t23035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043){
return (function (_23037){
var self__ = this;
var _23037__$1 = this;
return self__.meta23036;
});})(map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043))
;

lomakkeet.fields.t23035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043){
return (function (_23037,meta23036__$1){
var self__ = this;
var _23037__$1 = this;
return (new lomakkeet.fields.t23035(self__.map__23032,self__.owner,self__.map__23031,self__.G__23010,self__.map__23033,self__.ks,self__.output_schema23006,self__.input_checker23008,self__.value,self__.map__23034,self__.G__23011,self__.input_schema23007,self__.validate__12170__auto__,self__.ch,self__.G__23012,self__.checkbox_STAR_,self__.G__23030,self__.opts,self__.ufv__,self__.output_checker23009,self__.G__23029,meta23036__$1));
});})(map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043))
;

lomakkeet.fields.t23035.cljs$lang$type = true;

lomakkeet.fields.t23035.cljs$lang$ctorStr = "lomakkeet.fields/t23035";

lomakkeet.fields.t23035.cljs$lang$ctorPrWriter = ((function (map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.fields/t23035");
});})(map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043))
;

lomakkeet.fields.__GT_t23035 = ((function (map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043){
return (function __GT_t23035(map__23032__$2,owner__$3,map__23031__$2,G__23010__$1,map__23033__$2,ks__$2,output_schema23006__$1,input_checker23008__$1,value__$2,map__23034__$2,G__23011__$1,input_schema23007__$1,validate__12170__auto____$1,ch__$2,G__23012__$1,checkbox_STAR___$1,G__23030__$2,opts__$2,ufv____$1,output_checker23009__$1,G__23029__$2,meta23036){
return (new lomakkeet.fields.t23035(map__23032__$2,owner__$3,map__23031__$2,G__23010__$1,map__23033__$2,ks__$2,output_schema23006__$1,input_checker23008__$1,value__$2,map__23034__$2,G__23011__$1,input_schema23007__$1,validate__12170__auto____$1,ch__$2,G__23012__$1,checkbox_STAR___$1,G__23030__$2,opts__$2,ufv____$1,output_checker23009__$1,G__23029__$2,meta23036));
});})(map__23033,map__23033__$1,value__$1,owner__$2,map__23034,map__23034__$1,opts__$1,ks__$1,ch__$1,G__23029,map__23031,map__23031__$1,value,owner,G__23030,map__23032,map__23032__$1,opts,ks,ch,validate__12170__auto__,ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043))
;

}

return (new lomakkeet.fields.t23035(map__23032__$1,owner__$2,map__23031__$1,G__23010,map__23033__$1,ks__$1,output_schema23006_23040,input_checker23008_23042,value__$1,map__23034__$1,G__23011,input_schema23007_23041,validate__12170__auto__,ch__$1,G__23012,checkbox_STAR_,G__23030__$1,opts__$1,ufv___23039,output_checker23009_23043,G__23029__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___23047 = (function (){var G__23038 = o__12173__auto__;
return (output_checker23009_23043.cljs$core$IFn$_invoke$arity$1 ? output_checker23009_23043.cljs$core$IFn$_invoke$arity$1(G__23038) : output_checker23009_23043.call(null,G__23038));
})();
if(cljs.core.truth_(temp__4126__auto___23047)){
var error__12172__auto___23048 = temp__4126__auto___23047;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23048], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23048,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema23006_23040,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___23039,output_schema23006_23040,input_schema23007_23041,input_checker23008_23042,output_checker23009_23043))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.checkbox_STAR_),schema.core.make_fn_schema(output_schema23006_23040,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23007_23041], null)));

lomakkeet.fields.__GT_checkbox_STAR_ = (function() {
var __GT_checkbox_STAR_ = null;
var __GT_checkbox_STAR___1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.checkbox_STAR_,cursor__20405__auto__);
});
var __GT_checkbox_STAR___2 = (function (cursor__20405__auto__,m23005){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.checkbox_STAR_,cursor__20405__auto__,m23005);
});
__GT_checkbox_STAR_ = function(cursor__20405__auto__,m23005){
switch(arguments.length){
case 1:
return __GT_checkbox_STAR___1.call(this,cursor__20405__auto__);
case 2:
return __GT_checkbox_STAR___2.call(this,cursor__20405__auto__,m23005);
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
var checkbox__delegate = function (form,label,ks,p__23049){
var vec__23051 = p__23049;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23051,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,lomakkeet.fields.checkbox_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null)], 0)));
};
var checkbox = function (form,label,ks,var_args){
var p__23049 = null;
if (arguments.length > 3) {
var G__23052__i = 0, G__23052__a = new Array(arguments.length -  3);
while (G__23052__i < G__23052__a.length) {G__23052__a[G__23052__i] = arguments[G__23052__i + 3]; ++G__23052__i;}
  p__23049 = new cljs.core.IndexedSeq(G__23052__a,0);
} 
return checkbox__delegate.call(this,form,label,ks,p__23049);};
checkbox.cljs$lang$maxFixedArity = 3;
checkbox.cljs$lang$applyTo = (function (arglist__23053){
var form = cljs.core.first(arglist__23053);
arglist__23053 = cljs.core.next(arglist__23053);
var label = cljs.core.first(arglist__23053);
arglist__23053 = cljs.core.next(arglist__23053);
var ks = cljs.core.first(arglist__23053);
var p__23049 = cljs.core.rest(arglist__23053);
return checkbox__delegate(form,label,ks,p__23049);
});
checkbox.cljs$core$IFn$_invoke$arity$variadic = checkbox__delegate;
return checkbox;
})()
;

var ufv___23114 = schema.utils.use_fn_validation;
var output_schema23055_23115 = schema.core.Any;
var input_schema23056_23116 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23057_23117 = schema.core.checker(input_schema23056_23116);
var output_checker23058_23118 = schema.core.checker(output_schema23055_23115);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks options], :as opts}]
*/
lomakkeet.fields.select_STAR_ = ((function (ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118){
return (function select_STAR_(G__23059,G__23060,G__23061){
var validate__12170__auto__ = ufv___23114.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___23119 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23059,G__23060,G__23061], null);
var temp__4126__auto___23120 = (function (){var G__23088 = args__12171__auto___23119;
return (input_checker23057_23117.cljs$core$IFn$_invoke$arity$1 ? input_checker23057_23117.cljs$core$IFn$_invoke$arity$1(G__23088) : input_checker23057_23117.call(null,G__23088));
})();
if(cljs.core.truth_(temp__4126__auto___23120)){
var error__12172__auto___23121 = temp__4126__auto___23120;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23121], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23121,cljs.core.constant$keyword$64,args__12171__auto___23119,cljs.core.constant$keyword$65,input_schema23056_23116,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__23091 = G__23059;
var map__23093 = G__23091;
var map__23093__$1 = ((cljs.core.seq_QMARK_(map__23093))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23093):map__23093);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23093__$1,cljs.core.constant$keyword$64);
var owner = G__23060;
var G__23092 = G__23061;
var map__23094 = G__23092;
var map__23094__$1 = ((cljs.core.seq_QMARK_(map__23094))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23094):map__23094);
var opts = map__23094__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23094__$1,cljs.core.constant$keyword$159);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23094__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23094__$1,cljs.core.constant$keyword$145);
var G__23091__$1 = G__23091;
var owner__$1 = owner;
var G__23092__$1 = G__23092;
while(true){
var map__23095 = G__23091__$1;
var map__23095__$1 = ((cljs.core.seq_QMARK_(map__23095))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23095):map__23095);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23095__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__23096 = G__23092__$1;
var map__23096__$1 = ((cljs.core.seq_QMARK_(map__23096))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23096):map__23096);
var opts__$1 = map__23096__$1;
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23096__$1,cljs.core.constant$keyword$159);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23096__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23096__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.fields.t23097 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t23097 = (function (options,input_checker23057,map__23095,output_schema23055,G__23092,owner,G__23061,G__23059,map__23094,ks,value,map__23096,validate__12170__auto__,ch,G__23091,G__23060,select_STAR_,map__23093,opts,ufv__,output_checker23058,input_schema23056,meta23098){
this.options = options;
this.input_checker23057 = input_checker23057;
this.map__23095 = map__23095;
this.output_schema23055 = output_schema23055;
this.G__23092 = G__23092;
this.owner = owner;
this.G__23061 = G__23061;
this.G__23059 = G__23059;
this.map__23094 = map__23094;
this.ks = ks;
this.value = value;
this.map__23096 = map__23096;
this.validate__12170__auto__ = validate__12170__auto__;
this.ch = ch;
this.G__23091 = G__23091;
this.G__23060 = G__23060;
this.select_STAR_ = select_STAR_;
this.map__23093 = map__23093;
this.opts = opts;
this.ufv__ = ufv__;
this.output_checker23058 = output_checker23058;
this.input_schema23056 = input_schema23056;
this.meta23098 = meta23098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t23097.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t23097.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118){
return (function (_){
var self__ = this;
var ___$1 = this;
return "select*";
});})(map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118))
;

lomakkeet.fields.t23097.prototype.om$core$IRender$ = true;

lomakkeet.fields.t23097.prototype.om$core$IRender$render$arity$1 = ((function (map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23100 = "select";
var G__23101 = {"className": "form-control", "value": (((self__.value instanceof cljs.core.Keyword))?cljs.core.name(self__.value):self__.value), "onChange": ((function (G__23100,___$1,map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,e.target.value], null));
});})(G__23100,___$1,map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118))
};
var G__23102 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(self__.options))?(function (){var iter__4571__auto__ = ((function (G__23100,G__23101,___$1,map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118){
return (function iter__23103(s__23104){
return (new cljs.core.LazySeq(null,((function (G__23100,G__23101,___$1,map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118){
return (function (){
var s__23104__$1 = s__23104;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23104__$1);
if(temp__4126__auto__){
var s__23104__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23104__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__23104__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__23106 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__23105 = (0);
while(true){
if((i__23105 < size__4570__auto__)){
var vec__23111 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__23105);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23111,(1),null);
cljs.core.chunk_append(b__23106,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,k,cljs.core.constant$keyword$49,k], null),v], null));

var G__23122 = (i__23105 + (1));
i__23105 = G__23122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23106),iter__23103(cljs.core.chunk_rest(s__23104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23106),null);
}
} else {
var vec__23112 = cljs.core.first(s__23104__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23112,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23112,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,k,cljs.core.constant$keyword$49,k], null),v], null),iter__23103(cljs.core.rest(s__23104__$2)));
}
} else {
return null;
}
break;
}
});})(G__23100,G__23101,___$1,map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118))
,null,null));
});})(G__23100,G__23101,___$1,map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118))
;
return iter__4571__auto__(self__.options);
})():null));
return React.createElement(G__23100,G__23101,G__23102);
});})(map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118))
;

lomakkeet.fields.t23097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118){
return (function (_23099){
var self__ = this;
var _23099__$1 = this;
return self__.meta23098;
});})(map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118))
;

lomakkeet.fields.t23097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118){
return (function (_23099,meta23098__$1){
var self__ = this;
var _23099__$1 = this;
return (new lomakkeet.fields.t23097(self__.options,self__.input_checker23057,self__.map__23095,self__.output_schema23055,self__.G__23092,self__.owner,self__.G__23061,self__.G__23059,self__.map__23094,self__.ks,self__.value,self__.map__23096,self__.validate__12170__auto__,self__.ch,self__.G__23091,self__.G__23060,self__.select_STAR_,self__.map__23093,self__.opts,self__.ufv__,self__.output_checker23058,self__.input_schema23056,meta23098__$1));
});})(map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118))
;

lomakkeet.fields.t23097.cljs$lang$type = true;

lomakkeet.fields.t23097.cljs$lang$ctorStr = "lomakkeet.fields/t23097";

lomakkeet.fields.t23097.cljs$lang$ctorPrWriter = ((function (map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.fields/t23097");
});})(map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118))
;

lomakkeet.fields.__GT_t23097 = ((function (map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118){
return (function __GT_t23097(options__$2,input_checker23057__$1,map__23095__$2,output_schema23055__$1,G__23092__$2,owner__$3,G__23061__$1,G__23059__$1,map__23094__$2,ks__$2,value__$2,map__23096__$2,validate__12170__auto____$1,ch__$2,G__23091__$2,G__23060__$1,select_STAR___$1,map__23093__$2,opts__$2,ufv____$1,output_checker23058__$1,input_schema23056__$1,meta23098){
return (new lomakkeet.fields.t23097(options__$2,input_checker23057__$1,map__23095__$2,output_schema23055__$1,G__23092__$2,owner__$3,G__23061__$1,G__23059__$1,map__23094__$2,ks__$2,value__$2,map__23096__$2,validate__12170__auto____$1,ch__$2,G__23091__$2,G__23060__$1,select_STAR___$1,map__23093__$2,opts__$2,ufv____$1,output_checker23058__$1,input_schema23056__$1,meta23098));
});})(map__23095,map__23095__$1,value__$1,owner__$2,map__23096,map__23096__$1,opts__$1,options__$1,ks__$1,ch__$1,G__23091,map__23093,map__23093__$1,value,owner,G__23092,map__23094,map__23094__$1,opts,options,ks,ch,validate__12170__auto__,ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118))
;

}

return (new lomakkeet.fields.t23097(options__$1,input_checker23057_23117,map__23095__$1,output_schema23055_23115,G__23092__$1,owner__$2,G__23061,G__23059,map__23094__$1,ks__$1,value__$1,map__23096__$1,validate__12170__auto__,ch__$1,G__23091__$1,G__23060,select_STAR_,map__23093__$1,opts__$1,ufv___23114,output_checker23058_23118,input_schema23056_23116,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___23123 = (function (){var G__23113 = o__12173__auto__;
return (output_checker23058_23118.cljs$core$IFn$_invoke$arity$1 ? output_checker23058_23118.cljs$core$IFn$_invoke$arity$1(G__23113) : output_checker23058_23118.call(null,G__23113));
})();
if(cljs.core.truth_(temp__4126__auto___23123)){
var error__12172__auto___23124 = temp__4126__auto___23123;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23124], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23124,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema23055_23115,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___23114,output_schema23055_23115,input_schema23056_23116,input_checker23057_23117,output_checker23058_23118))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.select_STAR_),schema.core.make_fn_schema(output_schema23055_23115,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23056_23116], null)));

lomakkeet.fields.__GT_select_STAR_ = (function() {
var __GT_select_STAR_ = null;
var __GT_select_STAR___1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.select_STAR_,cursor__20405__auto__);
});
var __GT_select_STAR___2 = (function (cursor__20405__auto__,m23054){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.select_STAR_,cursor__20405__auto__,m23054);
});
__GT_select_STAR_ = function(cursor__20405__auto__,m23054){
switch(arguments.length){
case 1:
return __GT_select_STAR___1.call(this,cursor__20405__auto__);
case 2:
return __GT_select_STAR___2.call(this,cursor__20405__auto__,m23054);
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
var select__delegate = function (form,label,ks,options,p__23125){
var vec__23127 = p__23125;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23127,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$122,lomakkeet.fields.select_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks,cljs.core.constant$keyword$159,options], null)], 0)));
};
var select = function (form,label,ks,options,var_args){
var p__23125 = null;
if (arguments.length > 4) {
var G__23128__i = 0, G__23128__a = new Array(arguments.length -  4);
while (G__23128__i < G__23128__a.length) {G__23128__a[G__23128__i] = arguments[G__23128__i + 4]; ++G__23128__i;}
  p__23125 = new cljs.core.IndexedSeq(G__23128__a,0);
} 
return select__delegate.call(this,form,label,ks,options,p__23125);};
select.cljs$lang$maxFixedArity = 4;
select.cljs$lang$applyTo = (function (arglist__23129){
var form = cljs.core.first(arglist__23129);
arglist__23129 = cljs.core.next(arglist__23129);
var label = cljs.core.first(arglist__23129);
arglist__23129 = cljs.core.next(arglist__23129);
var ks = cljs.core.first(arglist__23129);
arglist__23129 = cljs.core.next(arglist__23129);
var options = cljs.core.first(arglist__23129);
var p__23125 = cljs.core.rest(arglist__23129);
return select__delegate(form,label,ks,options,p__23125);
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
lomakkeet.fields.save_form = (function save_form(p__23132,value){
var map__23134 = p__23132;
var map__23134__$1 = ((cljs.core.seq_QMARK_(map__23134))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23134):map__23134);
var form_state = map__23134__$1;
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23134__$1,cljs.core.constant$keyword$65);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.constant$keyword$64,value,cljs.core.array_seq([cljs.core.constant$keyword$160,value,cljs.core.constant$keyword$152,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null)], 0));
});
/**
* @param {...*} var_args
*/
lomakkeet.fields.update_form = (function() { 
var update_form__delegate = function (p__23135,f,args){
var map__23137 = p__23135;
var map__23137__$1 = ((cljs.core.seq_QMARK_(map__23137))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23137):map__23137);
var form_state = map__23137__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23137__$1,cljs.core.constant$keyword$64);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,value,args);
return lomakkeet.fields.save_form(form_state,new_value);
};
var update_form = function (p__23135,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23138__i = 0, G__23138__a = new Array(arguments.length -  2);
while (G__23138__i < G__23138__a.length) {G__23138__a[G__23138__i] = arguments[G__23138__i + 2]; ++G__23138__i;}
  args = new cljs.core.IndexedSeq(G__23138__a,0);
} 
return update_form__delegate.call(this,p__23135,f,args);};
update_form.cljs$lang$maxFixedArity = 2;
update_form.cljs$lang$applyTo = (function (arglist__23139){
var p__23135 = cljs.core.first(arglist__23139);
arglist__23139 = cljs.core.next(arglist__23139);
var f = cljs.core.first(arglist__23139);
var args = cljs.core.rest(arglist__23139);
return update_form__delegate(p__23135,f,args);
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
return (function (p1__23140_SHARP_){
return lomakkeet.fields.dissoc_in(p1__23140_SHARP_,ks);
});})(schema__$2))
);
} else {
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(value_cursor,ks,value);
}
}
});

var ufv___23481 = schema.utils.use_fn_validation;
var output_schema23142_23482 = schema.core.Any;
var input_schema23143_23483 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(lomakkeet.fields.FormState,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23144_23484 = schema.core.checker(input_schema23143_23483);
var output_checker23145_23485 = schema.core.checker(output_schema23142_23482);
/**
* Inputs: [{:keys [value initial-value], :as form-state} :- FormState owner {:keys [actions render-fn form form-validation-fn after-change], :as opts}]
*/
lomakkeet.fields.form = ((function (ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function form(G__23146,G__23147,G__23148){
var validate__12170__auto__ = ufv___23481.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___23486 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23146,G__23147,G__23148], null);
var temp__4126__auto___23487 = (function (){var G__23315 = args__12171__auto___23486;
return (input_checker23144_23484.cljs$core$IFn$_invoke$arity$1 ? input_checker23144_23484.cljs$core$IFn$_invoke$arity$1(G__23315) : input_checker23144_23484.call(null,G__23315));
})();
if(cljs.core.truth_(temp__4126__auto___23487)){
var error__12172__auto___23488 = temp__4126__auto___23487;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23488], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23488,cljs.core.constant$keyword$64,args__12171__auto___23486,cljs.core.constant$keyword$65,input_schema23143_23483,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__23318 = G__23146;
var map__23320 = G__23318;
var map__23320__$1 = ((cljs.core.seq_QMARK_(map__23320))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23320):map__23320);
var form_state = map__23320__$1;
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23320__$1,cljs.core.constant$keyword$160);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23320__$1,cljs.core.constant$keyword$64);
var owner = G__23147;
var G__23319 = G__23148;
var map__23321 = G__23319;
var map__23321__$1 = ((cljs.core.seq_QMARK_(map__23321))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23321):map__23321);
var opts = map__23321__$1;
var after_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,cljs.core.constant$keyword$161);
var form_validation_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,cljs.core.constant$keyword$162);
var form__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,cljs.core.constant$keyword$141);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,cljs.core.constant$keyword$163);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,cljs.core.constant$keyword$164);
var G__23318__$1 = G__23318;
var owner__$1 = owner;
var G__23319__$1 = G__23319;
while(true){
var map__23322 = G__23318__$1;
var map__23322__$1 = ((cljs.core.seq_QMARK_(map__23322))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23322):map__23322);
var form_state__$1 = map__23322__$1;
var initial_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23322__$1,cljs.core.constant$keyword$160);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23322__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__23323 = G__23319__$1;
var map__23323__$1 = ((cljs.core.seq_QMARK_(map__23323))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23323):map__23323);
var opts__$1 = map__23323__$1;
var after_change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23323__$1,cljs.core.constant$keyword$161);
var form_validation_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23323__$1,cljs.core.constant$keyword$162);
var form__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23323__$1,cljs.core.constant$keyword$141);
var render_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23323__$1,cljs.core.constant$keyword$163);
var actions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23323__$1,cljs.core.constant$keyword$164);
if(typeof lomakkeet.fields.t23324 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t23324 = (function (form,G__23319,input_checker23144,after_change,owner,form_validation_fn,form_state,map__23320,render_fn,G__23318,G__23146,G__23148,value,map__23321,output_schema23142,actions,validate__12170__auto__,input_schema23143,G__23147,output_checker23145,opts,initial_value,map__23322,ufv__,map__23323,meta23325){
this.form = form;
this.G__23319 = G__23319;
this.input_checker23144 = input_checker23144;
this.after_change = after_change;
this.owner = owner;
this.form_validation_fn = form_validation_fn;
this.form_state = form_state;
this.map__23320 = map__23320;
this.render_fn = render_fn;
this.G__23318 = G__23318;
this.G__23146 = G__23146;
this.G__23148 = G__23148;
this.value = value;
this.map__23321 = map__23321;
this.output_schema23142 = output_schema23142;
this.actions = actions;
this.validate__12170__auto__ = validate__12170__auto__;
this.input_schema23143 = input_schema23143;
this.G__23147 = G__23147;
this.output_checker23145 = output_checker23145;
this.opts = opts;
this.initial_value = initial_value;
this.map__23322 = map__23322;
this.ufv__ = ufv__;
this.map__23323 = map__23323;
this.meta23325 = meta23325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t23324.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t23324.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function (_){
var self__ = this;
var ___$1 = this;
return "form";
});})(map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
;

lomakkeet.fields.t23324.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t23324.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function (_,form__$1){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__23327 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$151,self__.form_state,cljs.core.constant$keyword$64,(function (){var G__23328 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23328) : cljs.core.deref.call(null,G__23328));
})(),cljs.core.constant$keyword$160,(function (){var G__23329 = self__.initial_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23329) : cljs.core.deref.call(null,G__23329));
})(),cljs.core.constant$keyword$141,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,cljs.core.constant$keyword$151,self__.form_state),cljs.core.constant$keyword$145,cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(form__$1)], null);
return (self__.render_fn.cljs$core$IFn$_invoke$arity$1 ? self__.render_fn.cljs$core$IFn$_invoke$arity$1(G__23327) : self__.render_fn.call(null,G__23327));
})());
});})(map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
;

lomakkeet.fields.t23324.prototype.om$core$IWillMount$ = true;

lomakkeet.fields.t23324.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function (_){
var self__ = this;
var ___$1 = this;
var schema__$1 = (cljs.core.truth_(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(self__.form_state))?(function (){var G__23331 = cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(self__.form_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23331) : cljs.core.deref.call(null,G__23331));
})():null);
var map__23330 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
var map__23330__$1 = ((cljs.core.seq_QMARK_(map__23330))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23330):map__23330);
var coercion_matcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23330__$1,cljs.core.constant$keyword$165);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23330__$1,cljs.core.constant$keyword$145);
var c__16216__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto__,schema__$1,map__23330,map__23330__$1,coercion_matcher,ch,___$1,map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto__,schema__$1,map__23330,map__23330__$1,coercion_matcher,ch,___$1,map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function (state_23412){
var state_val_23413 = (state_23412[(1)]);
if((state_val_23413 === (7))){
var inst_23334 = (state_23412[(7)]);
var inst_23337 = (state_23412[(8)]);
var inst_23340 = (state_23412[(9)]);
var inst_23339 = (function (){var G__23414 = self__.form_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23414) : cljs.core.deref.call(null,G__23414));
})();
var inst_23340__$1 = (function (){var G__23415 = inst_23339;
var G__23416 = inst_23334;
return (inst_23337.cljs$core$IFn$_invoke$arity$2 ? inst_23337.cljs$core$IFn$_invoke$arity$2(G__23415,G__23416) : inst_23337.call(null,G__23415,G__23416));
})();
var inst_23341 = lomakkeet.fields.chan_QMARK_(inst_23340__$1);
var state_23412__$1 = (function (){var statearr_23417 = state_23412;
(statearr_23417[(9)] = inst_23340__$1);

return statearr_23417;
})();
if(inst_23341){
var statearr_23418_23489 = state_23412__$1;
(statearr_23418_23489[(1)] = (10));

} else {
var statearr_23419_23490 = state_23412__$1;
(statearr_23419_23490[(1)] = (11));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (20))){
var state_23412__$1 = state_23412;
var statearr_23420_23491 = state_23412__$1;
(statearr_23420_23491[(2)] = null);

(statearr_23420_23491[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (27))){
var inst_23399 = (state_23412[(10)]);
var inst_23405 = (state_23412[(2)]);
var inst_23406 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23399,inst_23405], 0));
var inst_23407 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.form_state,cljs.core.constant$keyword$152,inst_23406);
var state_23412__$1 = (function (){var statearr_23421 = state_23412;
(statearr_23421[(11)] = inst_23407);

return statearr_23421;
})();
var statearr_23422_23492 = state_23412__$1;
(statearr_23422_23492[(2)] = null);

(statearr_23422_23492[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (1))){
var state_23412__$1 = state_23412;
var statearr_23423_23493 = state_23412__$1;
(statearr_23423_23493[(2)] = null);

(statearr_23423_23493[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (24))){
var inst_23399 = (state_23412[(2)]);
var state_23412__$1 = (function (){var statearr_23424 = state_23412;
(statearr_23424[(10)] = inst_23399);

return statearr_23424;
})();
if(cljs.core.truth_(schema__$1)){
var statearr_23425_23494 = state_23412__$1;
(statearr_23425_23494[(1)] = (25));

} else {
var statearr_23426_23495 = state_23412__$1;
(statearr_23426_23495[(1)] = (26));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (4))){
var inst_23334 = (state_23412[(7)]);
var inst_23334__$1 = (state_23412[(2)]);
var inst_23335 = (function (){var G__23427 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23427) : cljs.core.deref.call(null,G__23427));
})();
var inst_23382 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_23334__$1);
var state_23412__$1 = (function (){var statearr_23428 = state_23412;
(statearr_23428[(7)] = inst_23334__$1);

(statearr_23428[(12)] = inst_23335);

return statearr_23428;
})();
var G__23429_23496 = (((inst_23382 instanceof cljs.core.Keyword))?inst_23382.fqn:null);
switch (G__23429_23496) {
case "change":
var statearr_23430_23498 = state_23412__$1;
(statearr_23430_23498[(1)] = (14));


break;
case "cancel":
var statearr_23431_23499 = state_23412__$1;
(statearr_23431_23499[(1)] = (13));


break;
case "action":
var statearr_23432_23500 = state_23412__$1;
(statearr_23432_23500[(1)] = (6));


break;
default:
var statearr_23433_23501 = state_23412__$1;
(statearr_23433_23501[(1)] = (18));



}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (15))){
var inst_23334 = (state_23412[(7)]);
var inst_23368 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23334);
var state_23412__$1 = state_23412;
var statearr_23434_23502 = state_23412__$1;
(statearr_23434_23502[(2)] = inst_23368);

(statearr_23434_23502[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (21))){
var inst_23393 = (state_23412[(2)]);
var state_23412__$1 = (function (){var statearr_23435 = state_23412;
(statearr_23435[(13)] = inst_23393);

return statearr_23435;
})();
if(cljs.core.truth_(self__.form_validation_fn)){
var statearr_23436_23503 = state_23412__$1;
(statearr_23436_23503[(1)] = (22));

} else {
var statearr_23437_23504 = state_23412__$1;
(statearr_23437_23504[(1)] = (23));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (13))){
var inst_23363 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,lomakkeet.fields.cancel_form);
var state_23412__$1 = state_23412;
var statearr_23438_23505 = state_23412__$1;
(statearr_23438_23505[(2)] = inst_23363);

(statearr_23438_23505[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (22))){
var inst_23395 = (function (){var G__23439 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23439) : cljs.core.deref.call(null,G__23439));
})();
var inst_23396 = (function (){var G__23440 = inst_23395;
return (self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1 ? self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1(G__23440) : self__.form_validation_fn.call(null,G__23440));
})();
var state_23412__$1 = state_23412;
var statearr_23441_23506 = state_23412__$1;
(statearr_23441_23506[(2)] = inst_23396);

(statearr_23441_23506[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (6))){
var inst_23334 = (state_23412[(7)]);
var inst_23337 = (state_23412[(8)]);
var inst_23336 = cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(inst_23334);
var inst_23337__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.actions,inst_23336);
var state_23412__$1 = (function (){var statearr_23442 = state_23412;
(statearr_23442[(8)] = inst_23337__$1);

return statearr_23442;
})();
if(cljs.core.truth_(inst_23337__$1)){
var statearr_23443_23507 = state_23412__$1;
(statearr_23443_23507[(1)] = (7));

} else {
var statearr_23444_23508 = state_23412__$1;
(statearr_23444_23508[(1)] = (8));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (25))){
var inst_23401 = (function (){var G__23445 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23445) : cljs.core.deref.call(null,G__23445));
})();
var inst_23402 = schema.core.check(schema__$1,inst_23401);
var state_23412__$1 = state_23412;
var statearr_23446_23509 = state_23412__$1;
(statearr_23446_23509[(2)] = inst_23402);

(statearr_23446_23509[(1)] = (27));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (17))){
var inst_23334 = (state_23412[(7)]);
var inst_23371 = (state_23412[(2)]);
var inst_23372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23371,cljs.core.constant$keyword$144);
var inst_23373 = lomakkeet.fields.get_in_schema(schema__$1,inst_23372);
var inst_23374 = cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(inst_23334);
var inst_23375 = lomakkeet.fields.coerce(coercion_matcher,inst_23373,inst_23374);
var inst_23376 = lomakkeet.fields.change_value(self__.value,schema__$1,inst_23372,inst_23375);
var state_23412__$1 = state_23412;
var statearr_23447_23510 = state_23412__$1;
(statearr_23447_23510[(2)] = inst_23376);

(statearr_23447_23510[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (3))){
var inst_23410 = (state_23412[(2)]);
var state_23412__$1 = state_23412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23412__$1,inst_23410);
} else {
if((state_val_23413 === (12))){
var inst_23355 = (state_23412[(2)]);
var state_23412__$1 = state_23412;
var statearr_23448_23511 = state_23412__$1;
(statearr_23448_23511[(2)] = inst_23355);

(statearr_23448_23511[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (2))){
var state_23412__$1 = state_23412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23412__$1,(4),ch);
} else {
if((state_val_23413 === (23))){
var state_23412__$1 = state_23412;
var statearr_23449_23512 = state_23412__$1;
(statearr_23449_23512[(2)] = null);

(statearr_23449_23512[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (19))){
var inst_23335 = (state_23412[(12)]);
var inst_23386 = [cljs.core.constant$keyword$151,cljs.core.constant$keyword$64,cljs.core.constant$keyword$166,cljs.core.constant$keyword$167];
var inst_23387 = (function (){var G__23450 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23450) : cljs.core.deref.call(null,G__23450));
})();
var inst_23388 = [self__.form_state,inst_23387,self__.value,inst_23335];
var inst_23389 = cljs.core.PersistentHashMap.fromArrays(inst_23386,inst_23388);
var inst_23390 = (function (){var G__23451 = inst_23389;
return (self__.after_change.cljs$core$IFn$_invoke$arity$1 ? self__.after_change.cljs$core$IFn$_invoke$arity$1(G__23451) : self__.after_change.call(null,G__23451));
})();
var state_23412__$1 = state_23412;
var statearr_23452_23513 = state_23412__$1;
(statearr_23452_23513[(2)] = inst_23390);

(statearr_23452_23513[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (11))){
var inst_23340 = (state_23412[(9)]);
var inst_23353 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_23340);
var state_23412__$1 = state_23412;
var statearr_23453_23514 = state_23412__$1;
(statearr_23453_23514[(2)] = inst_23353);

(statearr_23453_23514[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (9))){
var inst_23361 = (state_23412[(2)]);
var state_23412__$1 = state_23412;
var statearr_23454_23515 = state_23412__$1;
(statearr_23454_23515[(2)] = inst_23361);

(statearr_23454_23515[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (5))){
var inst_23384 = (state_23412[(2)]);
var state_23412__$1 = (function (){var statearr_23455 = state_23412;
(statearr_23455[(14)] = inst_23384);

return statearr_23455;
})();
if(cljs.core.truth_(self__.after_change)){
var statearr_23456_23516 = state_23412__$1;
(statearr_23456_23516[(1)] = (19));

} else {
var statearr_23457_23517 = state_23412__$1;
(statearr_23457_23517[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (14))){
var inst_23334 = (state_23412[(7)]);
var inst_23366 = cljs.core.seq_QMARK_(inst_23334);
var state_23412__$1 = state_23412;
if(inst_23366){
var statearr_23458_23518 = state_23412__$1;
(statearr_23458_23518[(1)] = (15));

} else {
var statearr_23459_23519 = state_23412__$1;
(statearr_23459_23519[(1)] = (16));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (26))){
var state_23412__$1 = state_23412;
var statearr_23460_23520 = state_23412__$1;
(statearr_23460_23520[(2)] = null);

(statearr_23460_23520[(1)] = (27));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (16))){
var inst_23334 = (state_23412[(7)]);
var state_23412__$1 = state_23412;
var statearr_23461_23521 = state_23412__$1;
(statearr_23461_23521[(2)] = inst_23334);

(statearr_23461_23521[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (10))){
var inst_23334 = (state_23412[(7)]);
var inst_23337 = (state_23412[(8)]);
var inst_23335 = (state_23412[(12)]);
var inst_23340 = (state_23412[(9)]);
var inst_23349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23350 = (function (){var c__16216__auto____$1 = inst_23349;
var next = inst_23340;
var action_fn = inst_23337;
var temp__4124__auto__ = inst_23337;
var prev_value = inst_23335;
var evt = inst_23334;
return ((function (c__16216__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23334,inst_23337,inst_23335,inst_23340,inst_23349,state_val_23413,c__16216__auto__,schema__$1,map__23330,map__23330__$1,coercion_matcher,ch,___$1,map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23334,inst_23337,inst_23335,inst_23340,inst_23349,state_val_23413,c__16216__auto__,schema__$1,map__23330,map__23330__$1,coercion_matcher,ch,___$1,map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function (state_23347){
var state_val_23348 = (state_23347[(1)]);
if((state_val_23348 === (2))){
var inst_23344 = (state_23347[(2)]);
var inst_23345 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_23344);
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23347__$1,inst_23345);
} else {
if((state_val_23348 === (1))){
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23347__$1,(2),next);
} else {
return null;
}
}
});})(c__16216__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23334,inst_23337,inst_23335,inst_23340,inst_23349,state_val_23413,c__16216__auto__,schema__$1,map__23330,map__23330__$1,coercion_matcher,ch,___$1,map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
;
return ((function (switch__16136__auto__,c__16216__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23334,inst_23337,inst_23335,inst_23340,inst_23349,state_val_23413,c__16216__auto__,schema__$1,map__23330,map__23330__$1,coercion_matcher,ch,___$1,map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_23465 = [null,null,null,null,null,null,null];
(statearr_23465[(0)] = state_machine__16137__auto__);

(statearr_23465[(1)] = (1));

return statearr_23465;
});
var state_machine__16137__auto____1 = (function (state_23347){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_23347);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e23466){if((e23466 instanceof Object)){
var ex__16140__auto__ = e23466;
var statearr_23467_23522 = state_23347;
(statearr_23467_23522[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23347);

return cljs.core.constant$keyword$97;
} else {
throw e23466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__23523 = state_23347;
state_23347 = G__23523;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_23347){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_23347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23334,inst_23337,inst_23335,inst_23340,inst_23349,state_val_23413,c__16216__auto__,schema__$1,map__23330,map__23330__$1,coercion_matcher,ch,___$1,map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
})();
var state__16218__auto__ = (function (){var statearr_23468 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_23468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto____$1);

return statearr_23468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});
;})(c__16216__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_23334,inst_23337,inst_23335,inst_23340,inst_23349,state_val_23413,c__16216__auto__,schema__$1,map__23330,map__23330__$1,coercion_matcher,ch,___$1,map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
})();
var inst_23351 = cljs.core.async.impl.dispatch.run(inst_23350);
var state_23412__$1 = (function (){var statearr_23469 = state_23412;
(statearr_23469[(15)] = inst_23351);

return statearr_23469;
})();
var statearr_23470_23524 = state_23412__$1;
(statearr_23470_23524[(2)] = inst_23349);

(statearr_23470_23524[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (18))){
var inst_23334 = (state_23412[(7)]);
var inst_23378 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_23334);
var inst_23379 = [cljs.core.str("Unknown event-type: "),cljs.core.str(inst_23378)].join('');
var inst_23380 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23379], 0));
var state_23412__$1 = state_23412;
var statearr_23471_23525 = state_23412__$1;
(statearr_23471_23525[(2)] = inst_23380);

(statearr_23471_23525[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_23413 === (8))){
var inst_23334 = (state_23412[(7)]);
var inst_23357 = cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(inst_23334);
var inst_23358 = [cljs.core.str("WARNING: "),cljs.core.str(inst_23357),cljs.core.str(" is unknown")].join('');
var inst_23359 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23358], 0));
var state_23412__$1 = state_23412;
var statearr_23472_23526 = state_23412__$1;
(statearr_23472_23526[(2)] = inst_23359);

(statearr_23472_23526[(1)] = (9));


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
});})(c__16216__auto__,schema__$1,map__23330,map__23330__$1,coercion_matcher,ch,___$1,map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
;
return ((function (switch__16136__auto__,c__16216__auto__,schema__$1,map__23330,map__23330__$1,coercion_matcher,ch,___$1,map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_23476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23476[(0)] = state_machine__16137__auto__);

(statearr_23476[(1)] = (1));

return statearr_23476;
});
var state_machine__16137__auto____1 = (function (state_23412){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_23412);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e23477){if((e23477 instanceof Object)){
var ex__16140__auto__ = e23477;
var statearr_23478_23527 = state_23412;
(statearr_23478_23527[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23412);

return cljs.core.constant$keyword$97;
} else {
throw e23477;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__23528 = state_23412;
state_23412 = G__23528;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_23412){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_23412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto__,schema__$1,map__23330,map__23330__$1,coercion_matcher,ch,___$1,map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
})();
var state__16218__auto__ = (function (){var statearr_23479 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_23479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_23479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto__,schema__$1,map__23330,map__23330__$1,coercion_matcher,ch,___$1,map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
);

return c__16216__auto__;
});})(map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
;

lomakkeet.fields.t23324.prototype.om$core$IInitState$ = true;

lomakkeet.fields.t23324.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function (_){
var self__ = this;
var ___$1 = this;
if((schema.core.check(lomakkeet.fields.FormState,self__.form_state) == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"FormState","FormState",834878066,null),new cljs.core.Symbol(null,"form-state","form-state",-256843510,null)))], 0)))].join('')));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$145,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$150,lomakkeet.fields.default_form_group,cljs.core.constant$keyword$165,schema.coerce.json_coercion_matcher], null),self__.form], 0));
});})(map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
;

lomakkeet.fields.t23324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function (_23326){
var self__ = this;
var _23326__$1 = this;
return self__.meta23325;
});})(map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
;

lomakkeet.fields.t23324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function (_23326,meta23325__$1){
var self__ = this;
var _23326__$1 = this;
return (new lomakkeet.fields.t23324(self__.form,self__.G__23319,self__.input_checker23144,self__.after_change,self__.owner,self__.form_validation_fn,self__.form_state,self__.map__23320,self__.render_fn,self__.G__23318,self__.G__23146,self__.G__23148,self__.value,self__.map__23321,self__.output_schema23142,self__.actions,self__.validate__12170__auto__,self__.input_schema23143,self__.G__23147,self__.output_checker23145,self__.opts,self__.initial_value,self__.map__23322,self__.ufv__,self__.map__23323,meta23325__$1));
});})(map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
;

lomakkeet.fields.t23324.cljs$lang$type = true;

lomakkeet.fields.t23324.cljs$lang$ctorStr = "lomakkeet.fields/t23324";

lomakkeet.fields.t23324.cljs$lang$ctorPrWriter = ((function (map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.fields/t23324");
});})(map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
;

lomakkeet.fields.__GT_t23324 = ((function (map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485){
return (function __GT_t23324(form__$3,G__23319__$2,input_checker23144__$1,after_change__$2,owner__$3,form_validation_fn__$2,form_state__$2,map__23320__$2,render_fn__$2,G__23318__$2,G__23146__$1,G__23148__$1,value__$2,map__23321__$2,output_schema23142__$1,actions__$2,validate__12170__auto____$1,input_schema23143__$1,G__23147__$1,output_checker23145__$1,opts__$2,initial_value__$2,map__23322__$2,ufv____$1,map__23323__$2,meta23325){
return (new lomakkeet.fields.t23324(form__$3,G__23319__$2,input_checker23144__$1,after_change__$2,owner__$3,form_validation_fn__$2,form_state__$2,map__23320__$2,render_fn__$2,G__23318__$2,G__23146__$1,G__23148__$1,value__$2,map__23321__$2,output_schema23142__$1,actions__$2,validate__12170__auto____$1,input_schema23143__$1,G__23147__$1,output_checker23145__$1,opts__$2,initial_value__$2,map__23322__$2,ufv____$1,map__23323__$2,meta23325));
});})(map__23322,map__23322__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__23323,map__23323__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__23318,map__23320,map__23320__$1,form_state,initial_value,value,owner,G__23319,map__23321,map__23321__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12170__auto__,ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
;

}

return (new lomakkeet.fields.t23324(form__$2,G__23319__$1,input_checker23144_23484,after_change__$1,owner__$2,form_validation_fn__$1,form_state__$1,map__23320__$1,render_fn__$1,G__23318__$1,G__23146,G__23148,value__$1,map__23321__$1,output_schema23142_23482,actions__$1,validate__12170__auto__,input_schema23143_23483,G__23147,output_checker23145_23485,opts__$1,initial_value__$1,map__23322__$1,ufv___23481,map__23323__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___23529 = (function (){var G__23480 = o__12173__auto__;
return (output_checker23145_23485.cljs$core$IFn$_invoke$arity$1 ? output_checker23145_23485.cljs$core$IFn$_invoke$arity$1(G__23480) : output_checker23145_23485.call(null,G__23480));
})();
if(cljs.core.truth_(temp__4126__auto___23529)){
var error__12172__auto___23530 = temp__4126__auto___23529;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23530], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23530,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema23142_23482,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___23481,output_schema23142_23482,input_schema23143_23483,input_checker23144_23484,output_checker23145_23485))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.form),schema.core.make_fn_schema(output_schema23142_23482,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23143_23483], null)));

lomakkeet.fields.__GT_form = (function() {
var __GT_form = null;
var __GT_form__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.form,cursor__20405__auto__);
});
var __GT_form__2 = (function (cursor__20405__auto__,m23141){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,cursor__20405__auto__,m23141);
});
__GT_form = function(cursor__20405__auto__,m23141){
switch(arguments.length){
case 1:
return __GT_form__1.call(this,cursor__20405__auto__);
case 2:
return __GT_form__2.call(this,cursor__20405__auto__,m23141);
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
