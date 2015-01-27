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
var humanize_filesize__delegate = function (bytes,p__22612){
var vec__22622 = p__22612;
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22622,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (function (){var G__22623 = ((function (){var G__22624 = bytes;
return Math.log(G__22624);
})() / (function (){var G__22625 = (1000);
return Math.log(G__22625);
})());
return Math.floor(G__22623);
})();
var size = (bytes / (function (){var G__22626 = (1000);
var G__22627 = unit;
return Math.pow(G__22626,G__22627);
})());
var G__22628 = (function (){var or__4251__auto__ = fmt;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return "%0.1f %s";
}
})();
var G__22629 = size;
var G__22630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit);
return goog.string.format(G__22628,G__22629,G__22630);
};
var humanize_filesize = function (bytes,var_args){
var p__22612 = null;
if (arguments.length > 1) {
var G__22631__i = 0, G__22631__a = new Array(arguments.length -  1);
while (G__22631__i < G__22631__a.length) {G__22631__a[G__22631__i] = arguments[G__22631__i + 1]; ++G__22631__i;}
  p__22612 = new cljs.core.IndexedSeq(G__22631__a,0);
} 
return humanize_filesize__delegate.call(this,bytes,p__22612);};
humanize_filesize.cljs$lang$maxFixedArity = 1;
humanize_filesize.cljs$lang$applyTo = (function (arglist__22632){
var bytes = cljs.core.first(arglist__22632);
var p__22612 = cljs.core.rest(arglist__22632);
return humanize_filesize__delegate(bytes,p__22612);
});
humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = humanize_filesize__delegate;
return humanize_filesize;
})()
;

var ufv___22697 = schema.utils.use_fn_validation;
var output_schema22634_22698 = schema.core.Any;
var input_schema22635_22699 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22636_22700 = schema.core.checker(input_schema22635_22699);
var output_checker22637_22701 = schema.core.checker(output_schema22634_22698);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks file-select-label], :or {file-select-label "Select file"}, :as opts}]
*/
lomakkeet.file.file_STAR_ = ((function (ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701){
return (function file_STAR_(G__22638,G__22639,G__22640){
var validate__12581__auto__ = ufv___22697.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22702 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22638,G__22639,G__22640], null);
var temp__4126__auto___22703 = (function (){var G__22669 = args__12582__auto___22702;
return (input_checker22636_22700.cljs$core$IFn$_invoke$arity$1 ? input_checker22636_22700.cljs$core$IFn$_invoke$arity$1(G__22669) : input_checker22636_22700.call(null,G__22669));
})();
if(cljs.core.truth_(temp__4126__auto___22703)){
var error__12583__auto___22704 = temp__4126__auto___22703;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22704], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22704,cljs.core.constant$keyword$66,args__12582__auto___22702,cljs.core.constant$keyword$67,input_schema22635_22699,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22672 = G__22638;
var map__22674 = G__22672;
var map__22674__$1 = ((cljs.core.seq_QMARK_(map__22674))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22674):map__22674);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22674__$1,cljs.core.constant$keyword$66);
var owner = G__22639;
var G__22673 = G__22640;
var map__22675 = G__22673;
var map__22675__$1 = ((cljs.core.seq_QMARK_(map__22675))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22675):map__22675);
var opts = map__22675__$1;
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22675__$1,cljs.core.constant$keyword$227,"Select file");
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22675__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22675__$1,cljs.core.constant$keyword$147);
var G__22672__$1 = G__22672;
var owner__$1 = owner;
var G__22673__$1 = G__22673;
while(true){
var map__22676 = G__22672__$1;
var map__22676__$1 = ((cljs.core.seq_QMARK_(map__22676))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22676):map__22676);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22676__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22677 = G__22673__$1;
var map__22677__$1 = ((cljs.core.seq_QMARK_(map__22677))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22677):map__22677);
var opts__$1 = map__22677__$1;
var file_select_label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22677__$1,cljs.core.constant$keyword$227,"Select file");
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22677__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22677__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.file.t22678 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.file.t22678 = (function (output_schema22634,file_select_label,map__22675,G__22638,owner,input_schema22635,validate__12581__auto__,G__22640,map__22674,map__22677,ks,output_checker22637,value,G__22673,G__22672,map__22676,ch,G__22639,opts,ufv__,input_checker22636,file_STAR_,meta22679){
this.output_schema22634 = output_schema22634;
this.file_select_label = file_select_label;
this.map__22675 = map__22675;
this.G__22638 = G__22638;
this.owner = owner;
this.input_schema22635 = input_schema22635;
this.validate__12581__auto__ = validate__12581__auto__;
this.G__22640 = G__22640;
this.map__22674 = map__22674;
this.map__22677 = map__22677;
this.ks = ks;
this.output_checker22637 = output_checker22637;
this.value = value;
this.G__22673 = G__22673;
this.G__22672 = G__22672;
this.map__22676 = map__22676;
this.ch = ch;
this.G__22639 = G__22639;
this.opts = opts;
this.ufv__ = ufv__;
this.input_checker22636 = input_checker22636;
this.file_STAR_ = file_STAR_;
this.meta22679 = meta22679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.file.t22678.prototype.om$core$IDisplayName$ = true;

lomakkeet.file.t22678.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701){
return (function (_){
var self__ = this;
var ___$1 = this;
return "file*";
});})(map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701))
;

lomakkeet.file.t22678.prototype.om$core$IRender$ = true;

lomakkeet.file.t22678.prototype.om$core$IRender$render$arity$1 = ((function (map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22681 = null;
var G__22682 = (function (){var G__22686 = {"style": {"display": "none"}, "type": "file", "ref": "file-input", "onChange": ((function (G__22681,___$1,map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701){
return (function (e){
var temp__4124__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4124__auto__)){
var file = temp__4124__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,file], null));
} else {
return null;
}
});})(G__22681,___$1,map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22686) : sablono.interpreter.input.call(null,G__22686));
})();
var G__22683 = (function (){var G__22687 = {"className": "btn btn-primary", "type": "button", "onClick": ((function (G__22681,G__22682,___$1,map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701){
return (function (){
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"file-input").click();
});})(G__22681,G__22682,___$1,map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701))
};
var G__22688 = sablono.interpreter.interpret(self__.file_select_label);
return React.DOM.button(G__22687,G__22688);
})();
var G__22684 = (function (){var G__22689 = {"className": "btn btn-default", "type": "button", "onClick": ((function (G__22681,G__22682,G__22683,___$1,map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,null], null));
});})(G__22681,G__22682,G__22683,___$1,map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701))
};
var G__22690 = "\u00D7";
return React.DOM.button(G__22689,G__22690);
})();
var G__22685 = (cljs.core.truth_(self__.value)?(function (){var G__22691 = {"className": "selected-file"};
var G__22692 = " ";
var G__22693 = sablono.interpreter.interpret(self__.value.name);
var G__22694 = ", ";
var G__22695 = sablono.interpreter.interpret(lomakkeet.file.humanize_filesize(self__.value.size));
return React.DOM.span(G__22691,G__22692,G__22693,G__22694,G__22695);
})():null);
return React.DOM.div(G__22681,G__22682,G__22683,G__22684,G__22685);
});})(map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701))
;

lomakkeet.file.t22678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701){
return (function (_22680){
var self__ = this;
var _22680__$1 = this;
return self__.meta22679;
});})(map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701))
;

lomakkeet.file.t22678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701){
return (function (_22680,meta22679__$1){
var self__ = this;
var _22680__$1 = this;
return (new lomakkeet.file.t22678(self__.output_schema22634,self__.file_select_label,self__.map__22675,self__.G__22638,self__.owner,self__.input_schema22635,self__.validate__12581__auto__,self__.G__22640,self__.map__22674,self__.map__22677,self__.ks,self__.output_checker22637,self__.value,self__.G__22673,self__.G__22672,self__.map__22676,self__.ch,self__.G__22639,self__.opts,self__.ufv__,self__.input_checker22636,self__.file_STAR_,meta22679__$1));
});})(map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701))
;

lomakkeet.file.t22678.cljs$lang$type = true;

lomakkeet.file.t22678.cljs$lang$ctorStr = "lomakkeet.file/t22678";

lomakkeet.file.t22678.cljs$lang$ctorPrWriter = ((function (map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.file/t22678");
});})(map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701))
;

lomakkeet.file.__GT_t22678 = ((function (map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701){
return (function __GT_t22678(output_schema22634__$1,file_select_label__$2,map__22675__$2,G__22638__$1,owner__$3,input_schema22635__$1,validate__12581__auto____$1,G__22640__$1,map__22674__$2,map__22677__$2,ks__$2,output_checker22637__$1,value__$2,G__22673__$2,G__22672__$2,map__22676__$2,ch__$2,G__22639__$1,opts__$2,ufv____$1,input_checker22636__$1,file_STAR___$1,meta22679){
return (new lomakkeet.file.t22678(output_schema22634__$1,file_select_label__$2,map__22675__$2,G__22638__$1,owner__$3,input_schema22635__$1,validate__12581__auto____$1,G__22640__$1,map__22674__$2,map__22677__$2,ks__$2,output_checker22637__$1,value__$2,G__22673__$2,G__22672__$2,map__22676__$2,ch__$2,G__22639__$1,opts__$2,ufv____$1,input_checker22636__$1,file_STAR___$1,meta22679));
});})(map__22676,map__22676__$1,value__$1,owner__$2,map__22677,map__22677__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22672,map__22674,map__22674__$1,value,owner,G__22673,map__22675,map__22675__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701))
;

}

return (new lomakkeet.file.t22678(output_schema22634_22698,file_select_label__$1,map__22675__$1,G__22638,owner__$2,input_schema22635_22699,validate__12581__auto__,G__22640,map__22674__$1,map__22677__$1,ks__$1,output_checker22637_22701,value__$1,G__22673__$1,G__22672__$1,map__22676__$1,ch__$1,G__22639,opts__$1,ufv___22697,input_checker22636_22700,file_STAR_,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22705 = (function (){var G__22696 = o__12584__auto__;
return (output_checker22637_22701.cljs$core$IFn$_invoke$arity$1 ? output_checker22637_22701.cljs$core$IFn$_invoke$arity$1(G__22696) : output_checker22637_22701.call(null,G__22696));
})();
if(cljs.core.truth_(temp__4126__auto___22705)){
var error__12583__auto___22706 = temp__4126__auto___22705;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22706], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22706,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22634_22698,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22697,output_schema22634_22698,input_schema22635_22699,input_checker22636_22700,output_checker22637_22701))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.file.file_STAR_),schema.core.make_fn_schema(output_schema22634_22698,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22635_22699], null)));

lomakkeet.file.__GT_file_STAR_ = (function() {
var __GT_file_STAR_ = null;
var __GT_file_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.file.file_STAR_,cursor__20832__auto__);
});
var __GT_file_STAR___2 = (function (cursor__20832__auto__,m22633){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.file.file_STAR_,cursor__20832__auto__,m22633);
});
__GT_file_STAR_ = function(cursor__20832__auto__,m22633){
switch(arguments.length){
case 1:
return __GT_file_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_file_STAR___2.call(this,cursor__20832__auto__,m22633);
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
var file__delegate = function (form,label,ks,p__22707){
var vec__22709 = p__22707;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22709,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.file.file_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var file = function (form,label,ks,var_args){
var p__22707 = null;
if (arguments.length > 3) {
var G__22710__i = 0, G__22710__a = new Array(arguments.length -  3);
while (G__22710__i < G__22710__a.length) {G__22710__a[G__22710__i] = arguments[G__22710__i + 3]; ++G__22710__i;}
  p__22707 = new cljs.core.IndexedSeq(G__22710__a,0);
} 
return file__delegate.call(this,form,label,ks,p__22707);};
file.cljs$lang$maxFixedArity = 3;
file.cljs$lang$applyTo = (function (arglist__22711){
var form = cljs.core.first(arglist__22711);
arglist__22711 = cljs.core.next(arglist__22711);
var label = cljs.core.first(arglist__22711);
arglist__22711 = cljs.core.next(arglist__22711);
var ks = cljs.core.first(arglist__22711);
var p__22707 = cljs.core.rest(arglist__22711);
return file__delegate(form,label,ks,p__22707);
});
file.cljs$core$IFn$_invoke$arity$variadic = file__delegate;
return file;
})()
;
