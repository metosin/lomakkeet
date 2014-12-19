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
var humanize_filesize__delegate = function (bytes,p__20729){
var vec__20739 = p__20729;
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20739,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (function (){var G__20740 = ((function (){var G__20741 = bytes;
return Math.log(G__20741);
})() / (function (){var G__20742 = (1000);
return Math.log(G__20742);
})());
return Math.floor(G__20740);
})();
var size = (bytes / (function (){var G__20743 = (1000);
var G__20744 = unit;
return Math.pow(G__20743,G__20744);
})());
var G__20745 = (function (){var or__3628__auto__ = fmt;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return "%0.1f %s";
}
})();
var G__20746 = size;
var G__20747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit);
return goog.string.format(G__20745,G__20746,G__20747);
};
var humanize_filesize = function (bytes,var_args){
var p__20729 = null;
if (arguments.length > 1) {
  p__20729 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return humanize_filesize__delegate.call(this,bytes,p__20729);};
humanize_filesize.cljs$lang$maxFixedArity = 1;
humanize_filesize.cljs$lang$applyTo = (function (arglist__20748){
var bytes = cljs.core.first(arglist__20748);
var p__20729 = cljs.core.rest(arglist__20748);
return humanize_filesize__delegate(bytes,p__20729);
});
humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = humanize_filesize__delegate;
return humanize_filesize;
})()
;

var ufv___20813 = schema.utils.use_fn_validation;
var output_schema20750_20814 = schema.core.Any;
var input_schema20751_20815 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker20752_20816 = schema.core.checker(input_schema20751_20815);
var output_checker20753_20817 = schema.core.checker(output_schema20750_20814);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks file-select-label], :or {file-select-label "Select file"}, :as opts}]
*/
lomakkeet.file.file_STAR_ = ((function (ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817){
return (function file_STAR_(G__20754,G__20755,G__20756){
var validate__6096__auto__ = ufv___20813.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___20818 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20754,G__20755,G__20756], null);
var temp__4126__auto___20819 = (function (){var G__20785 = args__6097__auto___20818;
return (input_checker20752_20816.cljs$core$IFn$_invoke$arity$1 ? input_checker20752_20816.cljs$core$IFn$_invoke$arity$1(G__20785) : input_checker20752_20816.call(null,G__20785));
})();
if(cljs.core.truth_(temp__4126__auto___20819)){
var error__6098__auto___20820 = temp__4126__auto___20819;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___20820], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___20820,cljs.core.constant$keyword$23,args__6097__auto___20818,cljs.core.constant$keyword$24,input_schema20751_20815,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__20788 = G__20754;
var map__20790 = G__20788;
var map__20790__$1 = ((cljs.core.seq_QMARK_(map__20790))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20790):map__20790);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20790__$1,cljs.core.constant$keyword$23);
var owner = G__20755;
var G__20789 = G__20756;
var map__20791 = G__20789;
var map__20791__$1 = ((cljs.core.seq_QMARK_(map__20791))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20791):map__20791);
var opts = map__20791__$1;
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20791__$1,cljs.core.constant$keyword$164,"Select file");
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20791__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20791__$1,cljs.core.constant$keyword$145);
var G__20788__$1 = G__20788;
var owner__$1 = owner;
var G__20789__$1 = G__20789;
while(true){
var map__20792 = G__20788__$1;
var map__20792__$1 = ((cljs.core.seq_QMARK_(map__20792))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20792):map__20792);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20792__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__20793 = G__20789__$1;
var map__20793__$1 = ((cljs.core.seq_QMARK_(map__20793))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20793):map__20793);
var opts__$1 = map__20793__$1;
var file_select_label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20793__$1,cljs.core.constant$keyword$164,"Select file");
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.file.t20794 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.file.t20794 = (function (G__20754,file_select_label,owner,G__20755,G__20788,G__20756,G__20789,ks,validate__6096__auto__,value,input_checker20752,input_schema20751,map__20793,output_checker20753,ch,map__20791,map__20792,map__20790,opts,ufv__,output_schema20750,file_STAR_,meta20795){
this.G__20754 = G__20754;
this.file_select_label = file_select_label;
this.owner = owner;
this.G__20755 = G__20755;
this.G__20788 = G__20788;
this.G__20756 = G__20756;
this.G__20789 = G__20789;
this.ks = ks;
this.validate__6096__auto__ = validate__6096__auto__;
this.value = value;
this.input_checker20752 = input_checker20752;
this.input_schema20751 = input_schema20751;
this.map__20793 = map__20793;
this.output_checker20753 = output_checker20753;
this.ch = ch;
this.map__20791 = map__20791;
this.map__20792 = map__20792;
this.map__20790 = map__20790;
this.opts = opts;
this.ufv__ = ufv__;
this.output_schema20750 = output_schema20750;
this.file_STAR_ = file_STAR_;
this.meta20795 = meta20795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.file.t20794.prototype.om$core$IDisplayName$ = true;

lomakkeet.file.t20794.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817){
return (function (_){
var self__ = this;
var ___$1 = this;
return "file*";
});})(map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817))
;

lomakkeet.file.t20794.prototype.om$core$IRender$ = true;

lomakkeet.file.t20794.prototype.om$core$IRender$render$arity$1 = ((function (map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20797 = null;
var G__20798 = (function (){var G__20802 = {"style": {"display": "none"}, "type": "file", "ref": "file-input", "onChange": ((function (G__20797,___$1,map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817){
return (function (e){
var temp__4124__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4124__auto__)){
var file = temp__4124__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$23,file], null));
} else {
return null;
}
});})(G__20797,___$1,map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__20802) : sablono.interpreter.input.call(null,G__20802));
})();
var G__20799 = (function (){var G__20803 = {"className": "btn btn-primary", "type": "button", "onClick": ((function (G__20797,G__20798,___$1,map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817){
return (function (){
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"file-input").click();
});})(G__20797,G__20798,___$1,map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817))
};
var G__20804 = sablono.interpreter.interpret(self__.file_select_label);
return React.DOM.button(G__20803,G__20804);
})();
var G__20800 = (function (){var G__20805 = {"className": "btn btn-default", "type": "button", "onClick": ((function (G__20797,G__20798,G__20799,___$1,map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$23,null], null));
});})(G__20797,G__20798,G__20799,___$1,map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817))
};
var G__20806 = "\u00D7";
return React.DOM.button(G__20805,G__20806);
})();
var G__20801 = (cljs.core.truth_(self__.value)?(function (){var G__20807 = {"className": "selected-file"};
var G__20808 = " ";
var G__20809 = sablono.interpreter.interpret(self__.value.name);
var G__20810 = ", ";
var G__20811 = sablono.interpreter.interpret(lomakkeet.file.humanize_filesize(self__.value.size));
return React.DOM.span(G__20807,G__20808,G__20809,G__20810,G__20811);
})():null);
return React.DOM.div(G__20797,G__20798,G__20799,G__20800,G__20801);
});})(map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817))
;

lomakkeet.file.t20794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817){
return (function (_20796){
var self__ = this;
var _20796__$1 = this;
return self__.meta20795;
});})(map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817))
;

lomakkeet.file.t20794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817){
return (function (_20796,meta20795__$1){
var self__ = this;
var _20796__$1 = this;
return (new lomakkeet.file.t20794(self__.G__20754,self__.file_select_label,self__.owner,self__.G__20755,self__.G__20788,self__.G__20756,self__.G__20789,self__.ks,self__.validate__6096__auto__,self__.value,self__.input_checker20752,self__.input_schema20751,self__.map__20793,self__.output_checker20753,self__.ch,self__.map__20791,self__.map__20792,self__.map__20790,self__.opts,self__.ufv__,self__.output_schema20750,self__.file_STAR_,meta20795__$1));
});})(map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817))
;

lomakkeet.file.t20794.cljs$lang$type = true;

lomakkeet.file.t20794.cljs$lang$ctorStr = "lomakkeet.file/t20794";

lomakkeet.file.t20794.cljs$lang$ctorPrWriter = ((function (map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.file/t20794");
});})(map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817))
;

lomakkeet.file.__GT_t20794 = ((function (map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817){
return (function __GT_t20794(G__20754__$1,file_select_label__$2,owner__$3,G__20755__$1,G__20788__$2,G__20756__$1,G__20789__$2,ks__$2,validate__6096__auto____$1,value__$2,input_checker20752__$1,input_schema20751__$1,map__20793__$2,output_checker20753__$1,ch__$2,map__20791__$2,map__20792__$2,map__20790__$2,opts__$2,ufv____$1,output_schema20750__$1,file_STAR___$1,meta20795){
return (new lomakkeet.file.t20794(G__20754__$1,file_select_label__$2,owner__$3,G__20755__$1,G__20788__$2,G__20756__$1,G__20789__$2,ks__$2,validate__6096__auto____$1,value__$2,input_checker20752__$1,input_schema20751__$1,map__20793__$2,output_checker20753__$1,ch__$2,map__20791__$2,map__20792__$2,map__20790__$2,opts__$2,ufv____$1,output_schema20750__$1,file_STAR___$1,meta20795));
});})(map__20792,map__20792__$1,value__$1,owner__$2,map__20793,map__20793__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__20788,map__20790,map__20790__$1,value,owner,G__20789,map__20791,map__20791__$1,opts,file_select_label,ks,ch,validate__6096__auto__,ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817))
;

}

return (new lomakkeet.file.t20794(G__20754,file_select_label__$1,owner__$2,G__20755,G__20788__$1,G__20756,G__20789__$1,ks__$1,validate__6096__auto__,value__$1,input_checker20752_20816,input_schema20751_20815,map__20793__$1,output_checker20753_20817,ch__$1,map__20791__$1,map__20792__$1,map__20790__$1,opts__$1,ufv___20813,output_schema20750_20814,file_STAR_,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___20821 = (function (){var G__20812 = o__6099__auto__;
return (output_checker20753_20817.cljs$core$IFn$_invoke$arity$1 ? output_checker20753_20817.cljs$core$IFn$_invoke$arity$1(G__20812) : output_checker20753_20817.call(null,G__20812));
})();
if(cljs.core.truth_(temp__4126__auto___20821)){
var error__6098__auto___20822 = temp__4126__auto___20821;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___20822], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___20822,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema20750_20814,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___20813,output_schema20750_20814,input_schema20751_20815,input_checker20752_20816,output_checker20753_20817))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.file.file_STAR_),schema.core.make_fn_schema(output_schema20750_20814,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20751_20815], null)));

lomakkeet.file.__GT_file_STAR_ = (function() {
var __GT_file_STAR_ = null;
var __GT_file_STAR___1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.file.file_STAR_,cursor__7890__auto__);
});
var __GT_file_STAR___2 = (function (cursor__7890__auto__,m20749){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.file.file_STAR_,cursor__7890__auto__,m20749);
});
__GT_file_STAR_ = function(cursor__7890__auto__,m20749){
switch(arguments.length){
case 1:
return __GT_file_STAR___1.call(this,cursor__7890__auto__);
case 2:
return __GT_file_STAR___2.call(this,cursor__7890__auto__,m20749);
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
var file__delegate = function (form,label,ks,p__20823){
var vec__20825 = p__20823;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20825,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,lomakkeet.file.file_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null)], 0)));
};
var file = function (form,label,ks,var_args){
var p__20823 = null;
if (arguments.length > 3) {
  p__20823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return file__delegate.call(this,form,label,ks,p__20823);};
file.cljs$lang$maxFixedArity = 3;
file.cljs$lang$applyTo = (function (arglist__20826){
var form = cljs.core.first(arglist__20826);
arglist__20826 = cljs.core.next(arglist__20826);
var label = cljs.core.first(arglist__20826);
arglist__20826 = cljs.core.next(arglist__20826);
var ks = cljs.core.first(arglist__20826);
var p__20823 = cljs.core.rest(arglist__20826);
return file__delegate(form,label,ks,p__20823);
});
file.cljs$core$IFn$_invoke$arity$variadic = file__delegate;
return file;
})()
;
