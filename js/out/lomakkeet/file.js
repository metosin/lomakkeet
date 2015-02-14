// Compiled by ClojureScript 0.0-2850 {}
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
var humanize_filesize__delegate = function (bytes,p__22666){
var vec__22676 = p__22666;
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22676,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (function (){var G__22677 = ((function (){var G__22678 = bytes;
return Math.log(G__22678);
})() / (function (){var G__22679 = (1000);
return Math.log(G__22679);
})());
return Math.floor(G__22677);
})();
var size = (bytes / (function (){var G__22680 = (1000);
var G__22681 = unit;
return Math.pow(G__22680,G__22681);
})());
var G__22682 = (function (){var or__3815__auto__ = fmt;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return "%0.1f %s";
}
})();
var G__22683 = size;
var G__22684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit);
return goog.string.format(G__22682,G__22683,G__22684);
};
var humanize_filesize = function (bytes,var_args){
var p__22666 = null;
if (arguments.length > 1) {
var G__22685__i = 0, G__22685__a = new Array(arguments.length -  1);
while (G__22685__i < G__22685__a.length) {G__22685__a[G__22685__i] = arguments[G__22685__i + 1]; ++G__22685__i;}
  p__22666 = new cljs.core.IndexedSeq(G__22685__a,0);
} 
return humanize_filesize__delegate.call(this,bytes,p__22666);};
humanize_filesize.cljs$lang$maxFixedArity = 1;
humanize_filesize.cljs$lang$applyTo = (function (arglist__22686){
var bytes = cljs.core.first(arglist__22686);
var p__22666 = cljs.core.rest(arglist__22686);
return humanize_filesize__delegate(bytes,p__22666);
});
humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = humanize_filesize__delegate;
return humanize_filesize;
})()
;

var ufv___22757 = schema.utils.use_fn_validation;
var output_schema22688_22758 = schema.core.Any;
var input_schema22689_22759 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22690_22760 = schema.core.checker(input_schema22689_22759);
var output_checker22691_22761 = schema.core.checker(output_schema22688_22758);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks file-select-label], :or {file-select-label "Select file"}, :as opts}]
*/
lomakkeet.file.file_STAR_ = ((function (ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761){
return (function file_STAR_(G__22692,G__22693,G__22694){
var validate__12170__auto__ = ufv___22757.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22762 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22692,G__22693,G__22694], null);
var temp__4126__auto___22763 = (function (){var G__22726 = args__12171__auto___22762;
return (input_checker22690_22760.cljs$core$IFn$_invoke$arity$1 ? input_checker22690_22760.cljs$core$IFn$_invoke$arity$1(G__22726) : input_checker22690_22760.call(null,G__22726));
})();
if(cljs.core.truth_(temp__4126__auto___22763)){
var error__12172__auto___22764 = temp__4126__auto___22763;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22764], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22764,cljs.core.constant$keyword$64,args__12171__auto___22762,cljs.core.constant$keyword$65,input_schema22689_22759,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__22729 = G__22692;
var map__22731 = G__22729;
var map__22731__$1 = ((cljs.core.seq_QMARK_(map__22731))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22731):map__22731);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22731__$1,cljs.core.constant$keyword$64);
var owner = G__22693;
var G__22730 = G__22694;
var map__22732 = G__22730;
var map__22732__$1 = ((cljs.core.seq_QMARK_(map__22732))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22732):map__22732);
var opts = map__22732__$1;
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22732__$1,cljs.core.constant$keyword$224,"Select file");
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22732__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22732__$1,cljs.core.constant$keyword$145);
var G__22729__$1 = G__22729;
var owner__$1 = owner;
var G__22730__$1 = G__22730;
while(true){
var map__22733 = G__22729__$1;
var map__22733__$1 = ((cljs.core.seq_QMARK_(map__22733))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22733):map__22733);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22733__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__22734 = G__22730__$1;
var map__22734__$1 = ((cljs.core.seq_QMARK_(map__22734))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22734):map__22734);
var opts__$1 = map__22734__$1;
var file_select_label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22734__$1,cljs.core.constant$keyword$224,"Select file");
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22734__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22734__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.file.t22735 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.file.t22735 = (function (G__22730,G__22729,output_schema22688,file_select_label,owner,output_checker22691,input_schema22689,ks,input_checker22690,value,validate__12170__auto__,ch,map__22734,G__22694,map__22732,map__22733,G__22692,opts,map__22731,ufv__,G__22693,file_STAR_,meta22736){
this.G__22730 = G__22730;
this.G__22729 = G__22729;
this.output_schema22688 = output_schema22688;
this.file_select_label = file_select_label;
this.owner = owner;
this.output_checker22691 = output_checker22691;
this.input_schema22689 = input_schema22689;
this.ks = ks;
this.input_checker22690 = input_checker22690;
this.value = value;
this.validate__12170__auto__ = validate__12170__auto__;
this.ch = ch;
this.map__22734 = map__22734;
this.G__22694 = G__22694;
this.map__22732 = map__22732;
this.map__22733 = map__22733;
this.G__22692 = G__22692;
this.opts = opts;
this.map__22731 = map__22731;
this.ufv__ = ufv__;
this.G__22693 = G__22693;
this.file_STAR_ = file_STAR_;
this.meta22736 = meta22736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.file.t22735.prototype.om$core$IDisplayName$ = true;

lomakkeet.file.t22735.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761){
return (function (_){
var self__ = this;
var ___$1 = this;
return "file*";
});})(map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761))
;

lomakkeet.file.t22735.prototype.om$core$IRender$ = true;

lomakkeet.file.t22735.prototype.om$core$IRender$render$arity$1 = ((function (map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22738 = "div";
var G__22739 = null;
var G__22740 = sablono.interpreter.create_element("input",{"style": {"display": "none"}, "type": "file", "ref": "file-input", "onChange": ((function (G__22738,G__22739,___$1,map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761){
return (function (e){
var temp__4124__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4124__auto__)){
var file = temp__4124__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,file], null));
} else {
return null;
}
});})(G__22738,G__22739,___$1,map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761))
});
var G__22741 = (function (){var G__22744 = "button";
var G__22745 = {"className": "btn btn-primary", "type": "button", "onClick": ((function (G__22744,G__22738,G__22739,G__22740,___$1,map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761){
return (function (){
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"file-input").click();
});})(G__22744,G__22738,G__22739,G__22740,___$1,map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761))
};
var G__22746 = sablono.interpreter.interpret(self__.file_select_label);
return React.createElement(G__22744,G__22745,G__22746);
})();
var G__22742 = (function (){var G__22747 = "button";
var G__22748 = {"className": "btn btn-default", "type": "button", "onClick": ((function (G__22747,G__22738,G__22739,G__22740,G__22741,___$1,map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,null], null));
});})(G__22747,G__22738,G__22739,G__22740,G__22741,___$1,map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761))
};
var G__22749 = "\u00D7";
return React.createElement(G__22747,G__22748,G__22749);
})();
var G__22743 = (cljs.core.truth_(self__.value)?(function (){var G__22750 = "span";
var G__22751 = {"className": "selected-file"};
var G__22752 = " ";
var G__22753 = sablono.interpreter.interpret(self__.value.name);
var G__22754 = ", ";
var G__22755 = sablono.interpreter.interpret(lomakkeet.file.humanize_filesize(self__.value.size));
return React.createElement(G__22750,G__22751,G__22752,G__22753,G__22754,G__22755);
})():null);
return React.createElement(G__22738,G__22739,G__22740,G__22741,G__22742,G__22743);
});})(map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761))
;

lomakkeet.file.t22735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761){
return (function (_22737){
var self__ = this;
var _22737__$1 = this;
return self__.meta22736;
});})(map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761))
;

lomakkeet.file.t22735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761){
return (function (_22737,meta22736__$1){
var self__ = this;
var _22737__$1 = this;
return (new lomakkeet.file.t22735(self__.G__22730,self__.G__22729,self__.output_schema22688,self__.file_select_label,self__.owner,self__.output_checker22691,self__.input_schema22689,self__.ks,self__.input_checker22690,self__.value,self__.validate__12170__auto__,self__.ch,self__.map__22734,self__.G__22694,self__.map__22732,self__.map__22733,self__.G__22692,self__.opts,self__.map__22731,self__.ufv__,self__.G__22693,self__.file_STAR_,meta22736__$1));
});})(map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761))
;

lomakkeet.file.t22735.cljs$lang$type = true;

lomakkeet.file.t22735.cljs$lang$ctorStr = "lomakkeet.file/t22735";

lomakkeet.file.t22735.cljs$lang$ctorPrWriter = ((function (map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.file/t22735");
});})(map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761))
;

lomakkeet.file.__GT_t22735 = ((function (map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761){
return (function __GT_t22735(G__22730__$2,G__22729__$2,output_schema22688__$1,file_select_label__$2,owner__$3,output_checker22691__$1,input_schema22689__$1,ks__$2,input_checker22690__$1,value__$2,validate__12170__auto____$1,ch__$2,map__22734__$2,G__22694__$1,map__22732__$2,map__22733__$2,G__22692__$1,opts__$2,map__22731__$2,ufv____$1,G__22693__$1,file_STAR___$1,meta22736){
return (new lomakkeet.file.t22735(G__22730__$2,G__22729__$2,output_schema22688__$1,file_select_label__$2,owner__$3,output_checker22691__$1,input_schema22689__$1,ks__$2,input_checker22690__$1,value__$2,validate__12170__auto____$1,ch__$2,map__22734__$2,G__22694__$1,map__22732__$2,map__22733__$2,G__22692__$1,opts__$2,map__22731__$2,ufv____$1,G__22693__$1,file_STAR___$1,meta22736));
});})(map__22733,map__22733__$1,value__$1,owner__$2,map__22734,map__22734__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22729,map__22731,map__22731__$1,value,owner,G__22730,map__22732,map__22732__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761))
;

}

return (new lomakkeet.file.t22735(G__22730__$1,G__22729__$1,output_schema22688_22758,file_select_label__$1,owner__$2,output_checker22691_22761,input_schema22689_22759,ks__$1,input_checker22690_22760,value__$1,validate__12170__auto__,ch__$1,map__22734__$1,G__22694,map__22732__$1,map__22733__$1,G__22692,opts__$1,map__22731__$1,ufv___22757,G__22693,file_STAR_,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22765 = (function (){var G__22756 = o__12173__auto__;
return (output_checker22691_22761.cljs$core$IFn$_invoke$arity$1 ? output_checker22691_22761.cljs$core$IFn$_invoke$arity$1(G__22756) : output_checker22691_22761.call(null,G__22756));
})();
if(cljs.core.truth_(temp__4126__auto___22765)){
var error__12172__auto___22766 = temp__4126__auto___22765;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22766], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22766,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22688_22758,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___22757,output_schema22688_22758,input_schema22689_22759,input_checker22690_22760,output_checker22691_22761))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.file.file_STAR_),schema.core.make_fn_schema(output_schema22688_22758,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22689_22759], null)));

lomakkeet.file.__GT_file_STAR_ = (function() {
var __GT_file_STAR_ = null;
var __GT_file_STAR___1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.file.file_STAR_,cursor__20405__auto__);
});
var __GT_file_STAR___2 = (function (cursor__20405__auto__,m22687){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.file.file_STAR_,cursor__20405__auto__,m22687);
});
__GT_file_STAR_ = function(cursor__20405__auto__,m22687){
switch(arguments.length){
case 1:
return __GT_file_STAR___1.call(this,cursor__20405__auto__);
case 2:
return __GT_file_STAR___2.call(this,cursor__20405__auto__,m22687);
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
var file__delegate = function (form,label,ks,p__22767){
var vec__22769 = p__22767;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22769,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,lomakkeet.file.file_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null)], 0)));
};
var file = function (form,label,ks,var_args){
var p__22767 = null;
if (arguments.length > 3) {
var G__22770__i = 0, G__22770__a = new Array(arguments.length -  3);
while (G__22770__i < G__22770__a.length) {G__22770__a[G__22770__i] = arguments[G__22770__i + 3]; ++G__22770__i;}
  p__22767 = new cljs.core.IndexedSeq(G__22770__a,0);
} 
return file__delegate.call(this,form,label,ks,p__22767);};
file.cljs$lang$maxFixedArity = 3;
file.cljs$lang$applyTo = (function (arglist__22771){
var form = cljs.core.first(arglist__22771);
arglist__22771 = cljs.core.next(arglist__22771);
var label = cljs.core.first(arglist__22771);
arglist__22771 = cljs.core.next(arglist__22771);
var ks = cljs.core.first(arglist__22771);
var p__22767 = cljs.core.rest(arglist__22771);
return file__delegate(form,label,ks,p__22767);
});
file.cljs$core$IFn$_invoke$arity$variadic = file__delegate;
return file;
})()
;
