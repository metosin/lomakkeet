// Compiled by ClojureScript 0.0-2496
goog.provide('lomakkeet.file');
goog.require('cljs.core');
goog.require('lomakkeet.fields');
goog.require('goog.string');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('om.core');
/**
* @param {...*} var_args
*/
lomakkeet.file.humanize_filesize = (function() { 
var humanize_filesize__delegate = function (bytes,p__20733){
var vec__20743 = p__20733;
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20743,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (function (){var G__20744 = ((function (){var G__20745 = bytes;
return Math.log(G__20745);
})() / (function (){var G__20746 = (1000);
return Math.log(G__20746);
})());
return Math.floor(G__20744);
})();
var size = (bytes / (function (){var G__20747 = (1000);
var G__20748 = unit;
return Math.pow(G__20747,G__20748);
})());
var G__20749 = (function (){var or__3628__auto__ = fmt;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return "%0.1f %s";
}
})();
var G__20750 = size;
var G__20751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit);
return goog.string.format(G__20749,G__20750,G__20751);
};
var humanize_filesize = function (bytes,var_args){
var p__20733 = null;
if (arguments.length > 1) {
  p__20733 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return humanize_filesize__delegate.call(this,bytes,p__20733);};
humanize_filesize.cljs$lang$maxFixedArity = 1;
humanize_filesize.cljs$lang$applyTo = (function (arglist__20752){
var bytes = cljs.core.first(arglist__20752);
var p__20733 = cljs.core.rest(arglist__20752);
return humanize_filesize__delegate(bytes,p__20733);
});
humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = humanize_filesize__delegate;
return humanize_filesize;
})()
;

var ufv___20817 = schema.utils.use_fn_validation;
var output_schema20754_20818 = schema.core.Any;
var input_schema20755_20819 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker20756_20820 = schema.core.checker(input_schema20755_20819);
var output_checker20757_20821 = schema.core.checker(output_schema20754_20818);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks file-select-label], :or {file-select-label "Select file"}, :as opts}]
*/
lomakkeet.file.file_STAR_ = ((function (ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821){
return (function file_STAR_(G__20758,G__20759,G__20760){
var validate__6096__auto__ = ufv___20817.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___20822 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20758,G__20759,G__20760], null);
var temp__4126__auto___20823 = (function (){var G__20789 = args__6097__auto___20822;
return (input_checker20756_20820.cljs$core$IFn$_invoke$arity$1 ? input_checker20756_20820.cljs$core$IFn$_invoke$arity$1(G__20789) : input_checker20756_20820.call(null,G__20789));
})();
if(cljs.core.truth_(temp__4126__auto___20823)){
var error__6098__auto___20824 = temp__4126__auto___20823;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___20824], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___20824,cljs.core.constant$keyword$23,args__6097__auto___20822,cljs.core.constant$keyword$24,input_schema20755_20819,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__20792 = G__20758;
var map__20794 = G__20792;
var map__20794__$1 = ((cljs.core.seq_QMARK_(map__20794))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20794):map__20794);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20794__$1,cljs.core.constant$keyword$23);
var owner = G__20759;
var G__20793 = G__20760;
var map__20795 = G__20793;
var map__20795__$1 = ((cljs.core.seq_QMARK_(map__20795))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20795):map__20795);
var opts = map__20795__$1;
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20795__$1,cljs.core.constant$keyword$165,"Select file");
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,cljs.core.constant$keyword$145);
var G__20792__$1 = G__20792;
var owner__$1 = owner;
var G__20793__$1 = G__20793;
while(true){
var map__20796 = G__20792__$1;
var map__20796__$1 = ((cljs.core.seq_QMARK_(map__20796))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20796):map__20796);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__20797 = G__20793__$1;
var map__20797__$1 = ((cljs.core.seq_QMARK_(map__20797))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20797):map__20797);
var opts__$1 = map__20797__$1;
var file_select_label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20797__$1,cljs.core.constant$keyword$165,"Select file");
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.file.t20798 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.file.t20798 = (function (G__20760,G__20792,file_select_label,owner,map__20795,input_schema20755,G__20758,ks,validate__6096__auto__,G__20759,output_schema20754,G__20793,value,map__20796,map__20797,map__20794,output_checker20757,ch,input_checker20756,opts,ufv__,file_STAR_,meta20799){
this.G__20760 = G__20760;
this.G__20792 = G__20792;
this.file_select_label = file_select_label;
this.owner = owner;
this.map__20795 = map__20795;
this.input_schema20755 = input_schema20755;
this.G__20758 = G__20758;
this.ks = ks;
this.validate__6096__auto__ = validate__6096__auto__;
this.G__20759 = G__20759;
this.output_schema20754 = output_schema20754;
this.G__20793 = G__20793;
this.value = value;
this.map__20796 = map__20796;
this.map__20797 = map__20797;
this.map__20794 = map__20794;
this.output_checker20757 = output_checker20757;
this.ch = ch;
this.input_checker20756 = input_checker20756;
this.opts = opts;
this.ufv__ = ufv__;
this.file_STAR_ = file_STAR_;
this.meta20799 = meta20799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.file.t20798.prototype.om$core$IDisplayName$ = true;

lomakkeet.file.t20798.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821){
return (function (_){
var self__ = this;
var ___$1 = this;
return "file*";
});})(map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821))
;

lomakkeet.file.t20798.prototype.om$core$IRender$ = true;

lomakkeet.file.t20798.prototype.om$core$IRender$render$arity$1 = ((function (map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20801 = null;
var G__20802 = (function (){var G__20806 = {"style": {"display": "none"}, "type": "file", "ref": "file-input", "onChange": ((function (G__20801,___$1,map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821){
return (function (e){
var temp__4124__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4124__auto__)){
var file = temp__4124__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$23,file], null));
} else {
return null;
}
});})(G__20801,___$1,map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__20806) : sablono.interpreter.input.call(null,G__20806));
})();
var G__20803 = (function (){var G__20807 = {"className": "btn btn-primary", "type": "button", "onClick": ((function (G__20801,G__20802,___$1,map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821){
return (function (){
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"file-input").click();
});})(G__20801,G__20802,___$1,map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821))
};
var G__20808 = sablono.interpreter.interpret(self__.file_select_label);
return React.DOM.button(G__20807,G__20808);
})();
var G__20804 = (function (){var G__20809 = {"className": "btn btn-default", "type": "button", "onClick": ((function (G__20801,G__20802,G__20803,___$1,map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$23,null], null));
});})(G__20801,G__20802,G__20803,___$1,map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821))
};
var G__20810 = "\u00D7";
return React.DOM.button(G__20809,G__20810);
})();
var G__20805 = (cljs.core.truth_(self__.value)?(function (){var G__20811 = {"className": "selected-file"};
var G__20812 = " ";
var G__20813 = sablono.interpreter.interpret(self__.value.name);
var G__20814 = ", ";
var G__20815 = sablono.interpreter.interpret(lomakkeet.file.humanize_filesize(self__.value.size));
return React.DOM.span(G__20811,G__20812,G__20813,G__20814,G__20815);
})():null);
return React.DOM.div(G__20801,G__20802,G__20803,G__20804,G__20805);
});})(map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821))
;

lomakkeet.file.t20798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821){
return (function (_20800){
var self__ = this;
var _20800__$1 = this;
return self__.meta20799;
});})(map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821))
;

lomakkeet.file.t20798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821){
return (function (_20800,meta20799__$1){
var self__ = this;
var _20800__$1 = this;
return (new lomakkeet.file.t20798(self__.G__20760,self__.G__20792,self__.file_select_label,self__.owner,self__.map__20795,self__.input_schema20755,self__.G__20758,self__.ks,self__.validate__6096__auto__,self__.G__20759,self__.output_schema20754,self__.G__20793,self__.value,self__.map__20796,self__.map__20797,self__.map__20794,self__.output_checker20757,self__.ch,self__.input_checker20756,self__.opts,self__.ufv__,self__.file_STAR_,meta20799__$1));
});})(map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821))
;

lomakkeet.file.t20798.cljs$lang$type = true;

lomakkeet.file.t20798.cljs$lang$ctorStr = "lomakkeet.file/t20798";

lomakkeet.file.t20798.cljs$lang$ctorPrWriter = ((function (map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.file/t20798");
});})(map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821))
;

lomakkeet.file.__GT_t20798 = ((function (map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821){
return (function __GT_t20798(G__20760__$1,G__20792__$2,file_select_label__$2,owner__$3,map__20795__$2,input_schema20755__$1,G__20758__$1,ks__$2,validate__6096__auto____$1,G__20759__$1,output_schema20754__$1,G__20793__$2,value__$2,map__20796__$2,map__20797__$2,map__20794__$2,output_checker20757__$1,ch__$2,input_checker20756__$1,opts__$2,ufv____$1,file_STAR___$1,meta20799){
return (new lomakkeet.file.t20798(G__20760__$1,G__20792__$2,file_select_label__$2,owner__$3,map__20795__$2,input_schema20755__$1,G__20758__$1,ks__$2,validate__6096__auto____$1,G__20759__$1,output_schema20754__$1,G__20793__$2,value__$2,map__20796__$2,map__20797__$2,map__20794__$2,output_checker20757__$1,ch__$2,input_checker20756__$1,opts__$2,ufv____$1,file_STAR___$1,meta20799));
});})(map__20796,map__20796__$1,value__$1,owner__$2,map__20797,map__20797__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20792,map__20794,map__20794__$1,value,owner,G__20793,map__20795,map__20795__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821))
;

}

return (new lomakkeet.file.t20798(G__20760,G__20792__$1,file_select_label__$1,owner__$2,map__20795__$1,input_schema20755_20819,G__20758,ks__$1,validate__6096__auto__,G__20759,output_schema20754_20818,G__20793__$1,value__$1,map__20796__$1,map__20797__$1,map__20794__$1,output_checker20757_20821,ch__$1,input_checker20756_20820,opts__$1,ufv___20817,file_STAR_,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___20825 = (function (){var G__20816 = o__6099__auto__;
return (output_checker20757_20821.cljs$core$IFn$_invoke$arity$1 ? output_checker20757_20821.cljs$core$IFn$_invoke$arity$1(G__20816) : output_checker20757_20821.call(null,G__20816));
})();
if(cljs.core.truth_(temp__4126__auto___20825)){
var error__6098__auto___20826 = temp__4126__auto___20825;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___20826], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___20826,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema20754_20818,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___20817,output_schema20754_20818,input_schema20755_20819,input_checker20756_20820,output_checker20757_20821))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.file.file_STAR_),schema.core.make_fn_schema(output_schema20754_20818,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20755_20819], null)));

lomakkeet.file.__GT_file_STAR_ = (function() {
var __GT_file_STAR_ = null;
var __GT_file_STAR___1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.file.file_STAR_,cursor__7890__auto__);
});
var __GT_file_STAR___2 = (function (cursor__7890__auto__,m20753){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.file.file_STAR_,cursor__7890__auto__,m20753);
});
__GT_file_STAR_ = function(cursor__7890__auto__,m20753){
switch(arguments.length){
case 1:
return __GT_file_STAR___1.call(this,cursor__7890__auto__);
case 2:
return __GT_file_STAR___2.call(this,cursor__7890__auto__,m20753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_file_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_file_STAR___1;
__GT_file_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_file_STAR___2;
return __GT_file_STAR_;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.file.file = (function() { 
var file__delegate = function (form,label,ks,p__20827){
var vec__20829 = p__20827;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20829,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,lomakkeet.file.file_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null)], 0)));
};
var file = function (form,label,ks,var_args){
var p__20827 = null;
if (arguments.length > 3) {
  p__20827 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return file__delegate.call(this,form,label,ks,p__20827);};
file.cljs$lang$maxFixedArity = 3;
file.cljs$lang$applyTo = (function (arglist__20830){
var form = cljs.core.first(arglist__20830);
arglist__20830 = cljs.core.next(arglist__20830);
var label = cljs.core.first(arglist__20830);
arglist__20830 = cljs.core.next(arglist__20830);
var ks = cljs.core.first(arglist__20830);
var p__20827 = cljs.core.rest(arglist__20830);
return file__delegate(form,label,ks,p__20827);
});
file.cljs$core$IFn$_invoke$arity$variadic = file__delegate;
return file;
})()
;
