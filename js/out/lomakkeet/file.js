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
var humanize_filesize__delegate = function (bytes,p__22590){
var vec__22600 = p__22590;
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22600,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (function (){var G__22601 = ((function (){var G__22602 = bytes;
return Math.log(G__22602);
})() / (function (){var G__22603 = (1000);
return Math.log(G__22603);
})());
return Math.floor(G__22601);
})();
var size = (bytes / (function (){var G__22604 = (1000);
var G__22605 = unit;
return Math.pow(G__22604,G__22605);
})());
var G__22606 = (function (){var or__4251__auto__ = fmt;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return "%0.1f %s";
}
})();
var G__22607 = size;
var G__22608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit);
return goog.string.format(G__22606,G__22607,G__22608);
};
var humanize_filesize = function (bytes,var_args){
var p__22590 = null;
if (arguments.length > 1) {
var G__22609__i = 0, G__22609__a = new Array(arguments.length -  1);
while (G__22609__i < G__22609__a.length) {G__22609__a[G__22609__i] = arguments[G__22609__i + 1]; ++G__22609__i;}
  p__22590 = new cljs.core.IndexedSeq(G__22609__a,0);
} 
return humanize_filesize__delegate.call(this,bytes,p__22590);};
humanize_filesize.cljs$lang$maxFixedArity = 1;
humanize_filesize.cljs$lang$applyTo = (function (arglist__22610){
var bytes = cljs.core.first(arglist__22610);
var p__22590 = cljs.core.rest(arglist__22610);
return humanize_filesize__delegate(bytes,p__22590);
});
humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = humanize_filesize__delegate;
return humanize_filesize;
})()
;

var ufv___22675 = schema.utils.use_fn_validation;
var output_schema22612_22676 = schema.core.Any;
var input_schema22613_22677 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22614_22678 = schema.core.checker(input_schema22613_22677);
var output_checker22615_22679 = schema.core.checker(output_schema22612_22676);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks file-select-label], :or {file-select-label "Select file"}, :as opts}]
*/
lomakkeet.file.file_STAR_ = ((function (ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679){
return (function file_STAR_(G__22616,G__22617,G__22618){
var validate__12581__auto__ = ufv___22675.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22680 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22616,G__22617,G__22618], null);
var temp__4126__auto___22681 = (function (){var G__22647 = args__12582__auto___22680;
return (input_checker22614_22678.cljs$core$IFn$_invoke$arity$1 ? input_checker22614_22678.cljs$core$IFn$_invoke$arity$1(G__22647) : input_checker22614_22678.call(null,G__22647));
})();
if(cljs.core.truth_(temp__4126__auto___22681)){
var error__12583__auto___22682 = temp__4126__auto___22681;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22682], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22682,cljs.core.constant$keyword$66,args__12582__auto___22680,cljs.core.constant$keyword$67,input_schema22613_22677,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22650 = G__22616;
var map__22652 = G__22650;
var map__22652__$1 = ((cljs.core.seq_QMARK_(map__22652))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22652):map__22652);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22652__$1,cljs.core.constant$keyword$66);
var owner = G__22617;
var G__22651 = G__22618;
var map__22653 = G__22651;
var map__22653__$1 = ((cljs.core.seq_QMARK_(map__22653))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22653):map__22653);
var opts = map__22653__$1;
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22653__$1,cljs.core.constant$keyword$225,"Select file");
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22653__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22653__$1,cljs.core.constant$keyword$147);
var G__22650__$1 = G__22650;
var owner__$1 = owner;
var G__22651__$1 = G__22651;
while(true){
var map__22654 = G__22650__$1;
var map__22654__$1 = ((cljs.core.seq_QMARK_(map__22654))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22654):map__22654);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22654__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22655 = G__22651__$1;
var map__22655__$1 = ((cljs.core.seq_QMARK_(map__22655))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22655):map__22655);
var opts__$1 = map__22655__$1;
var file_select_label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22655__$1,cljs.core.constant$keyword$225,"Select file");
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.file.t22656 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.file.t22656 = (function (output_checker22615,input_checker22614,file_select_label,G__22616,owner,G__22651,validate__12581__auto__,map__22653,output_schema22612,map__22654,ks,value,G__22618,G__22650,G__22617,ch,map__22652,map__22655,input_schema22613,opts,ufv__,file_STAR_,meta22657){
this.output_checker22615 = output_checker22615;
this.input_checker22614 = input_checker22614;
this.file_select_label = file_select_label;
this.G__22616 = G__22616;
this.owner = owner;
this.G__22651 = G__22651;
this.validate__12581__auto__ = validate__12581__auto__;
this.map__22653 = map__22653;
this.output_schema22612 = output_schema22612;
this.map__22654 = map__22654;
this.ks = ks;
this.value = value;
this.G__22618 = G__22618;
this.G__22650 = G__22650;
this.G__22617 = G__22617;
this.ch = ch;
this.map__22652 = map__22652;
this.map__22655 = map__22655;
this.input_schema22613 = input_schema22613;
this.opts = opts;
this.ufv__ = ufv__;
this.file_STAR_ = file_STAR_;
this.meta22657 = meta22657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.file.t22656.prototype.om$core$IDisplayName$ = true;

lomakkeet.file.t22656.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679){
return (function (_){
var self__ = this;
var ___$1 = this;
return "file*";
});})(map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679))
;

lomakkeet.file.t22656.prototype.om$core$IRender$ = true;

lomakkeet.file.t22656.prototype.om$core$IRender$render$arity$1 = ((function (map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22659 = null;
var G__22660 = (function (){var G__22664 = {"style": {"display": "none"}, "type": "file", "ref": "file-input", "onChange": ((function (G__22659,___$1,map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679){
return (function (e){
var temp__4124__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4124__auto__)){
var file = temp__4124__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,file], null));
} else {
return null;
}
});})(G__22659,___$1,map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22664) : sablono.interpreter.input.call(null,G__22664));
})();
var G__22661 = (function (){var G__22665 = {"className": "btn btn-primary", "type": "button", "onClick": ((function (G__22659,G__22660,___$1,map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679){
return (function (){
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"file-input").click();
});})(G__22659,G__22660,___$1,map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679))
};
var G__22666 = sablono.interpreter.interpret(self__.file_select_label);
return React.DOM.button(G__22665,G__22666);
})();
var G__22662 = (function (){var G__22667 = {"className": "btn btn-default", "type": "button", "onClick": ((function (G__22659,G__22660,G__22661,___$1,map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,null], null));
});})(G__22659,G__22660,G__22661,___$1,map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679))
};
var G__22668 = "\u00D7";
return React.DOM.button(G__22667,G__22668);
})();
var G__22663 = (cljs.core.truth_(self__.value)?(function (){var G__22669 = {"className": "selected-file"};
var G__22670 = " ";
var G__22671 = sablono.interpreter.interpret(self__.value.name);
var G__22672 = ", ";
var G__22673 = sablono.interpreter.interpret(lomakkeet.file.humanize_filesize(self__.value.size));
return React.DOM.span(G__22669,G__22670,G__22671,G__22672,G__22673);
})():null);
return React.DOM.div(G__22659,G__22660,G__22661,G__22662,G__22663);
});})(map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679))
;

lomakkeet.file.t22656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679){
return (function (_22658){
var self__ = this;
var _22658__$1 = this;
return self__.meta22657;
});})(map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679))
;

lomakkeet.file.t22656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679){
return (function (_22658,meta22657__$1){
var self__ = this;
var _22658__$1 = this;
return (new lomakkeet.file.t22656(self__.output_checker22615,self__.input_checker22614,self__.file_select_label,self__.G__22616,self__.owner,self__.G__22651,self__.validate__12581__auto__,self__.map__22653,self__.output_schema22612,self__.map__22654,self__.ks,self__.value,self__.G__22618,self__.G__22650,self__.G__22617,self__.ch,self__.map__22652,self__.map__22655,self__.input_schema22613,self__.opts,self__.ufv__,self__.file_STAR_,meta22657__$1));
});})(map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679))
;

lomakkeet.file.t22656.cljs$lang$type = true;

lomakkeet.file.t22656.cljs$lang$ctorStr = "lomakkeet.file/t22656";

lomakkeet.file.t22656.cljs$lang$ctorPrWriter = ((function (map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.file/t22656");
});})(map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679))
;

lomakkeet.file.__GT_t22656 = ((function (map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679){
return (function __GT_t22656(output_checker22615__$1,input_checker22614__$1,file_select_label__$2,G__22616__$1,owner__$3,G__22651__$2,validate__12581__auto____$1,map__22653__$2,output_schema22612__$1,map__22654__$2,ks__$2,value__$2,G__22618__$1,G__22650__$2,G__22617__$1,ch__$2,map__22652__$2,map__22655__$2,input_schema22613__$1,opts__$2,ufv____$1,file_STAR___$1,meta22657){
return (new lomakkeet.file.t22656(output_checker22615__$1,input_checker22614__$1,file_select_label__$2,G__22616__$1,owner__$3,G__22651__$2,validate__12581__auto____$1,map__22653__$2,output_schema22612__$1,map__22654__$2,ks__$2,value__$2,G__22618__$1,G__22650__$2,G__22617__$1,ch__$2,map__22652__$2,map__22655__$2,input_schema22613__$1,opts__$2,ufv____$1,file_STAR___$1,meta22657));
});})(map__22654,map__22654__$1,value__$1,owner__$2,map__22655,map__22655__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22650,map__22652,map__22652__$1,value,owner,G__22651,map__22653,map__22653__$1,opts,file_select_label,ks,ch,validate__12581__auto__,ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679))
;

}

return (new lomakkeet.file.t22656(output_checker22615_22679,input_checker22614_22678,file_select_label__$1,G__22616,owner__$2,G__22651__$1,validate__12581__auto__,map__22653__$1,output_schema22612_22676,map__22654__$1,ks__$1,value__$1,G__22618,G__22650__$1,G__22617,ch__$1,map__22652__$1,map__22655__$1,input_schema22613_22677,opts__$1,ufv___22675,file_STAR_,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22683 = (function (){var G__22674 = o__12584__auto__;
return (output_checker22615_22679.cljs$core$IFn$_invoke$arity$1 ? output_checker22615_22679.cljs$core$IFn$_invoke$arity$1(G__22674) : output_checker22615_22679.call(null,G__22674));
})();
if(cljs.core.truth_(temp__4126__auto___22683)){
var error__12583__auto___22684 = temp__4126__auto___22683;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22684], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22684,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22612_22676,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22675,output_schema22612_22676,input_schema22613_22677,input_checker22614_22678,output_checker22615_22679))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.file.file_STAR_),schema.core.make_fn_schema(output_schema22612_22676,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22613_22677], null)));

lomakkeet.file.__GT_file_STAR_ = (function() {
var __GT_file_STAR_ = null;
var __GT_file_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.file.file_STAR_,cursor__20832__auto__);
});
var __GT_file_STAR___2 = (function (cursor__20832__auto__,m22611){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.file.file_STAR_,cursor__20832__auto__,m22611);
});
__GT_file_STAR_ = function(cursor__20832__auto__,m22611){
switch(arguments.length){
case 1:
return __GT_file_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_file_STAR___2.call(this,cursor__20832__auto__,m22611);
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
var file__delegate = function (form,label,ks,p__22685){
var vec__22687 = p__22685;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22687,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.file.file_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var file = function (form,label,ks,var_args){
var p__22685 = null;
if (arguments.length > 3) {
var G__22688__i = 0, G__22688__a = new Array(arguments.length -  3);
while (G__22688__i < G__22688__a.length) {G__22688__a[G__22688__i] = arguments[G__22688__i + 3]; ++G__22688__i;}
  p__22685 = new cljs.core.IndexedSeq(G__22688__a,0);
} 
return file__delegate.call(this,form,label,ks,p__22685);};
file.cljs$lang$maxFixedArity = 3;
file.cljs$lang$applyTo = (function (arglist__22689){
var form = cljs.core.first(arglist__22689);
arglist__22689 = cljs.core.next(arglist__22689);
var label = cljs.core.first(arglist__22689);
arglist__22689 = cljs.core.next(arglist__22689);
var ks = cljs.core.first(arglist__22689);
var p__22685 = cljs.core.rest(arglist__22689);
return file__delegate(form,label,ks,p__22685);
});
file.cljs$core$IFn$_invoke$arity$variadic = file__delegate;
return file;
})()
;
