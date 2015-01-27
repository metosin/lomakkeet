// Compiled by ClojureScript 0.0-2727 {}
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
var humanize_filesize__delegate = function (bytes,p__22616){
var vec__22626 = p__22616;
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22626,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (function (){var G__22627 = ((function (){var G__22628 = bytes;
return Math.log(G__22628);
})() / (function (){var G__22629 = (1000);
return Math.log(G__22629);
})());
return Math.floor(G__22627);
})();
var size = (bytes / (function (){var G__22630 = (1000);
var G__22631 = unit;
return Math.pow(G__22630,G__22631);
})());
var G__22632 = (function (){var or__4251__auto__ = fmt;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return "%0.1f %s";
}
})();
var G__22633 = size;
var G__22634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit);
return goog.string.format(G__22632,G__22633,G__22634);
};
var humanize_filesize = function (bytes,var_args){
var p__22616 = null;
if (arguments.length > 1) {
var G__22635__i = 0, G__22635__a = new Array(arguments.length -  1);
while (G__22635__i < G__22635__a.length) {G__22635__a[G__22635__i] = arguments[G__22635__i + 1]; ++G__22635__i;}
  p__22616 = new cljs.core.IndexedSeq(G__22635__a,0);
} 
return humanize_filesize__delegate.call(this,bytes,p__22616);};
humanize_filesize.cljs$lang$maxFixedArity = 1;
humanize_filesize.cljs$lang$applyTo = (function (arglist__22636){
var bytes = cljs.core.first(arglist__22636);
var p__22616 = cljs.core.rest(arglist__22636);
return humanize_filesize__delegate(bytes,p__22616);
});
humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = humanize_filesize__delegate;
return humanize_filesize;
})()
;

var ufv___22701 = schema.utils.use_fn_validation;
var output_schema22638_22702 = schema.core.Any;
var input_schema22639_22703 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22640_22704 = schema.core.checker(input_schema22639_22703);
var output_checker22641_22705 = schema.core.checker(output_schema22638_22702);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks file-select-label], :or {file-select-label "Select file"}, :as opts}]
*/
lomakkeet.file.file_STAR_ = ((function (ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705){
return (function file_STAR_(G__22642,G__22643,G__22644){
var validate__12581__auto__ = ufv___22701.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22706 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22642,G__22643,G__22644], null);
var temp__4126__auto___22707 = (function (){var G__22673 = args__12582__auto___22706;
return (input_checker22640_22704.cljs$core$IFn$_invoke$arity$1 ? input_checker22640_22704.cljs$core$IFn$_invoke$arity$1(G__22673) : input_checker22640_22704.call(null,G__22673));
})();
if(cljs.core.truth_(temp__4126__auto___22707)){
var error__12583__auto___22708 = temp__4126__auto___22707;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22708], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22708,cljs.core.constant$keyword$66,args__12582__auto___22706,cljs.core.constant$keyword$67,input_schema22639_22703,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22676 = G__22642;
var map__22678 = G__22676;
var map__22678__$1 = ((cljs.core.seq_QMARK_(map__22678))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22678):map__22678);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22678__$1,cljs.core.constant$keyword$66);
var owner = G__22643;
var G__22677 = G__22644;
var map__22679 = G__22677;
var map__22679__$1 = ((cljs.core.seq_QMARK_(map__22679))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22679):map__22679);
var opts = map__22679__$1;
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22679__$1,cljs.core.constant$keyword$227,"Select file");
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22679__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22679__$1,cljs.core.constant$keyword$147);
var G__22676__$1 = G__22676;
var owner__$1 = owner;
var G__22677__$1 = G__22677;
while(true){
var map__22680 = G__22676__$1;
var map__22680__$1 = ((cljs.core.seq_QMARK_(map__22680))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22680):map__22680);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22681 = G__22677__$1;
var map__22681__$1 = ((cljs.core.seq_QMARK_(map__22681))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22681):map__22681);
var opts__$1 = map__22681__$1;
var file_select_label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22681__$1,cljs.core.constant$keyword$227,"Select file");
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22681__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22681__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.file.t22682 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.file.t22682 = (function (G__22642,file_select_label,output_checker22641,map__22680,owner,G__22643,map__22679,validate__12581__auto__,G__22677,ks,input_schema22639,G__22676,value,output_schema22638,ch,opts,ufv__,input_checker22640,G__22644,map__22681,map__22678,file_STAR_,meta22683){
this.G__22642 = G__22642;
this.file_select_label = file_select_label;
this.output_checker22641 = output_checker22641;
this.map__22680 = map__22680;
this.owner = owner;
this.G__22643 = G__22643;
this.map__22679 = map__22679;
this.validate__12581__auto__ = validate__12581__auto__;
this.G__22677 = G__22677;
this.ks = ks;
this.input_schema22639 = input_schema22639;
this.G__22676 = G__22676;
this.value = value;
this.output_schema22638 = output_schema22638;
this.ch = ch;
this.opts = opts;
this.ufv__ = ufv__;
this.input_checker22640 = input_checker22640;
this.G__22644 = G__22644;
this.map__22681 = map__22681;
this.map__22678 = map__22678;
this.file_STAR_ = file_STAR_;
this.meta22683 = meta22683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.file.t22682.prototype.om$core$IDisplayName$ = true;

lomakkeet.file.t22682.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705){
return (function (_){
var self__ = this;
var ___$1 = this;
return "file*";
});})(map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705))
;

lomakkeet.file.t22682.prototype.om$core$IRender$ = true;

lomakkeet.file.t22682.prototype.om$core$IRender$render$arity$1 = ((function (map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22685 = null;
var G__22686 = (function (){var G__22690 = {"style": {"display": "none"}, "type": "file", "ref": "file-input", "onChange": ((function (G__22685,___$1,map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705){
return (function (e){
var temp__4124__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4124__auto__)){
var file = temp__4124__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,file], null));
} else {
return null;
}
});})(G__22685,___$1,map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22690) : sablono.interpreter.input.call(null,G__22690));
})();
var G__22687 = (function (){var G__22691 = {"className": "btn btn-primary", "type": "button", "onClick": ((function (G__22685,G__22686,___$1,map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705){
return (function (){
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"file-input").click();
});})(G__22685,G__22686,___$1,map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705))
};
var G__22692 = sablono.interpreter.interpret(self__.file_select_label);
return React.DOM.button(G__22691,G__22692);
})();
var G__22688 = (function (){var G__22693 = {"className": "btn btn-default", "type": "button", "onClick": ((function (G__22685,G__22686,G__22687,___$1,map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,null], null));
});})(G__22685,G__22686,G__22687,___$1,map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705))
};
var G__22694 = "\u00D7";
return React.DOM.button(G__22693,G__22694);
})();
var G__22689 = (cljs.core.truth_(self__.value)?(function (){var G__22695 = {"className": "selected-file"};
var G__22696 = " ";
var G__22697 = sablono.interpreter.interpret(self__.value.name);
var G__22698 = ", ";
var G__22699 = sablono.interpreter.interpret(lomakkeet.file.humanize_filesize(self__.value.size));
return React.DOM.span(G__22695,G__22696,G__22697,G__22698,G__22699);
})():null);
return React.DOM.div(G__22685,G__22686,G__22687,G__22688,G__22689);
});})(map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705))
;

lomakkeet.file.t22682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705){
return (function (_22684){
var self__ = this;
var _22684__$1 = this;
return self__.meta22683;
});})(map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705))
;

lomakkeet.file.t22682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705){
return (function (_22684,meta22683__$1){
var self__ = this;
var _22684__$1 = this;
return (new lomakkeet.file.t22682(self__.G__22642,self__.file_select_label,self__.output_checker22641,self__.map__22680,self__.owner,self__.G__22643,self__.map__22679,self__.validate__12581__auto__,self__.G__22677,self__.ks,self__.input_schema22639,self__.G__22676,self__.value,self__.output_schema22638,self__.ch,self__.opts,self__.ufv__,self__.input_checker22640,self__.G__22644,self__.map__22681,self__.map__22678,self__.file_STAR_,meta22683__$1));
});})(map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705))
;

lomakkeet.file.t22682.cljs$lang$type = true;

lomakkeet.file.t22682.cljs$lang$ctorStr = "lomakkeet.file/t22682";

lomakkeet.file.t22682.cljs$lang$ctorPrWriter = ((function (map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.file/t22682");
});})(map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705))
;

lomakkeet.file.__GT_t22682 = ((function (map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705){
return (function __GT_t22682(G__22642__$1,file_select_label__$2,output_checker22641__$1,map__22680__$2,owner__$3,G__22643__$1,map__22679__$2,validate__12581__auto____$1,G__22677__$2,ks__$2,input_schema22639__$1,G__22676__$2,value__$2,output_schema22638__$1,ch__$2,opts__$2,ufv____$1,input_checker22640__$1,G__22644__$1,map__22681__$2,map__22678__$2,file_STAR___$1,meta22683){
return (new lomakkeet.file.t22682(G__22642__$1,file_select_label__$2,output_checker22641__$1,map__22680__$2,owner__$3,G__22643__$1,map__22679__$2,validate__12581__auto____$1,G__22677__$2,ks__$2,input_schema22639__$1,G__22676__$2,value__$2,output_schema22638__$1,ch__$2,opts__$2,ufv____$1,input_checker22640__$1,G__22644__$1,map__22681__$2,map__22678__$2,file_STAR___$1,meta22683));
});})(map__22680,map__22680__$1,value__$1,owner__$2,map__22681,map__22681__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22676,map__22678,map__22678__$1,value,owner,G__22677,map__22679,map__22679__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705))
;

}

return (new lomakkeet.file.t22682(G__22642,file_select_label__$1,output_checker22641_22705,map__22680__$1,owner__$2,G__22643,map__22679__$1,validate__12581__auto__,G__22677__$1,ks__$1,input_schema22639_22703,G__22676__$1,value__$1,output_schema22638_22702,ch__$1,opts__$1,ufv___22701,input_checker22640_22704,G__22644,map__22681__$1,map__22678__$1,file_STAR_,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22709 = (function (){var G__22700 = o__12584__auto__;
return (output_checker22641_22705.cljs$core$IFn$_invoke$arity$1 ? output_checker22641_22705.cljs$core$IFn$_invoke$arity$1(G__22700) : output_checker22641_22705.call(null,G__22700));
})();
if(cljs.core.truth_(temp__4126__auto___22709)){
var error__12583__auto___22710 = temp__4126__auto___22709;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22710], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22710,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22638_22702,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22701,output_schema22638_22702,input_schema22639_22703,input_checker22640_22704,output_checker22641_22705))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.file.file_STAR_),schema.core.make_fn_schema(output_schema22638_22702,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22639_22703], null)));

lomakkeet.file.__GT_file_STAR_ = (function() {
var __GT_file_STAR_ = null;
var __GT_file_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.file.file_STAR_,cursor__20832__auto__);
});
var __GT_file_STAR___2 = (function (cursor__20832__auto__,m22637){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.file.file_STAR_,cursor__20832__auto__,m22637);
});
__GT_file_STAR_ = function(cursor__20832__auto__,m22637){
switch(arguments.length){
case 1:
return __GT_file_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_file_STAR___2.call(this,cursor__20832__auto__,m22637);
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
var file__delegate = function (form,label,ks,p__22711){
var vec__22713 = p__22711;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22713,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.file.file_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var file = function (form,label,ks,var_args){
var p__22711 = null;
if (arguments.length > 3) {
var G__22714__i = 0, G__22714__a = new Array(arguments.length -  3);
while (G__22714__i < G__22714__a.length) {G__22714__a[G__22714__i] = arguments[G__22714__i + 3]; ++G__22714__i;}
  p__22711 = new cljs.core.IndexedSeq(G__22714__a,0);
} 
return file__delegate.call(this,form,label,ks,p__22711);};
file.cljs$lang$maxFixedArity = 3;
file.cljs$lang$applyTo = (function (arglist__22715){
var form = cljs.core.first(arglist__22715);
arglist__22715 = cljs.core.next(arglist__22715);
var label = cljs.core.first(arglist__22715);
arglist__22715 = cljs.core.next(arglist__22715);
var ks = cljs.core.first(arglist__22715);
var p__22711 = cljs.core.rest(arglist__22715);
return file__delegate(form,label,ks,p__22711);
});
file.cljs$core$IFn$_invoke$arity$variadic = file__delegate;
return file;
})()
;
