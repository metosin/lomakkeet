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
var humanize_filesize__delegate = function (bytes,p__22682){
var vec__22692 = p__22682;
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22692,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (function (){var G__22693 = ((function (){var G__22694 = bytes;
return Math.log(G__22694);
})() / (function (){var G__22695 = (1000);
return Math.log(G__22695);
})());
return Math.floor(G__22693);
})();
var size = (bytes / (function (){var G__22696 = (1000);
var G__22697 = unit;
return Math.pow(G__22696,G__22697);
})());
var G__22698 = (function (){var or__3815__auto__ = fmt;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return "%0.1f %s";
}
})();
var G__22699 = size;
var G__22700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit);
return goog.string.format(G__22698,G__22699,G__22700);
};
var humanize_filesize = function (bytes,var_args){
var p__22682 = null;
if (arguments.length > 1) {
var G__22701__i = 0, G__22701__a = new Array(arguments.length -  1);
while (G__22701__i < G__22701__a.length) {G__22701__a[G__22701__i] = arguments[G__22701__i + 1]; ++G__22701__i;}
  p__22682 = new cljs.core.IndexedSeq(G__22701__a,0);
} 
return humanize_filesize__delegate.call(this,bytes,p__22682);};
humanize_filesize.cljs$lang$maxFixedArity = 1;
humanize_filesize.cljs$lang$applyTo = (function (arglist__22702){
var bytes = cljs.core.first(arglist__22702);
var p__22682 = cljs.core.rest(arglist__22702);
return humanize_filesize__delegate(bytes,p__22682);
});
humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = humanize_filesize__delegate;
return humanize_filesize;
})()
;

var ufv___22773 = schema.utils.use_fn_validation;
var output_schema22704_22774 = schema.core.Any;
var input_schema22705_22775 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22706_22776 = schema.core.checker(input_schema22705_22775);
var output_checker22707_22777 = schema.core.checker(output_schema22704_22774);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks file-select-label], :or {file-select-label "Select file"}, :as opts}]
*/
lomakkeet.file.file_STAR_ = ((function (ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777){
return (function file_STAR_(G__22708,G__22709,G__22710){
var validate__12170__auto__ = ufv___22773.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22778 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22708,G__22709,G__22710], null);
var temp__4126__auto___22779 = (function (){var G__22742 = args__12171__auto___22778;
return (input_checker22706_22776.cljs$core$IFn$_invoke$arity$1 ? input_checker22706_22776.cljs$core$IFn$_invoke$arity$1(G__22742) : input_checker22706_22776.call(null,G__22742));
})();
if(cljs.core.truth_(temp__4126__auto___22779)){
var error__12172__auto___22780 = temp__4126__auto___22779;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22780], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22780,cljs.core.constant$keyword$64,args__12171__auto___22778,cljs.core.constant$keyword$65,input_schema22705_22775,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__22745 = G__22708;
var map__22747 = G__22745;
var map__22747__$1 = ((cljs.core.seq_QMARK_(map__22747))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22747):map__22747);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22747__$1,cljs.core.constant$keyword$64);
var owner = G__22709;
var G__22746 = G__22710;
var map__22748 = G__22746;
var map__22748__$1 = ((cljs.core.seq_QMARK_(map__22748))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22748):map__22748);
var opts = map__22748__$1;
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22748__$1,cljs.core.constant$keyword$230,"Select file");
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22748__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22748__$1,cljs.core.constant$keyword$145);
var G__22745__$1 = G__22745;
var owner__$1 = owner;
var G__22746__$1 = G__22746;
while(true){
var map__22749 = G__22745__$1;
var map__22749__$1 = ((cljs.core.seq_QMARK_(map__22749))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22749):map__22749);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22749__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__22750 = G__22746__$1;
var map__22750__$1 = ((cljs.core.seq_QMARK_(map__22750))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22750):map__22750);
var opts__$1 = map__22750__$1;
var file_select_label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22750__$1,cljs.core.constant$keyword$230,"Select file");
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22750__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22750__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.file.t22751 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.file.t22751 = (function (G__22746,file_select_label,owner,output_schema22704,map__22747,input_checker22706,map__22750,ks,G__22709,value,output_checker22707,map__22748,G__22708,input_schema22705,validate__12170__auto__,ch,G__22745,G__22710,map__22749,opts,ufv__,file_STAR_,meta22752){
this.G__22746 = G__22746;
this.file_select_label = file_select_label;
this.owner = owner;
this.output_schema22704 = output_schema22704;
this.map__22747 = map__22747;
this.input_checker22706 = input_checker22706;
this.map__22750 = map__22750;
this.ks = ks;
this.G__22709 = G__22709;
this.value = value;
this.output_checker22707 = output_checker22707;
this.map__22748 = map__22748;
this.G__22708 = G__22708;
this.input_schema22705 = input_schema22705;
this.validate__12170__auto__ = validate__12170__auto__;
this.ch = ch;
this.G__22745 = G__22745;
this.G__22710 = G__22710;
this.map__22749 = map__22749;
this.opts = opts;
this.ufv__ = ufv__;
this.file_STAR_ = file_STAR_;
this.meta22752 = meta22752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.file.t22751.prototype.om$core$IDisplayName$ = true;

lomakkeet.file.t22751.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777){
return (function (_){
var self__ = this;
var ___$1 = this;
return "file*";
});})(map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777))
;

lomakkeet.file.t22751.prototype.om$core$IRender$ = true;

lomakkeet.file.t22751.prototype.om$core$IRender$render$arity$1 = ((function (map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22754 = "div";
var G__22755 = null;
var G__22756 = sablono.interpreter.create_element("input",{"style": {"display": "none"}, "type": "file", "ref": "file-input", "onChange": ((function (G__22754,G__22755,___$1,map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777){
return (function (e){
var temp__4124__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4124__auto__)){
var file = temp__4124__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,file], null));
} else {
return null;
}
});})(G__22754,G__22755,___$1,map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777))
});
var G__22757 = (function (){var G__22760 = "button";
var G__22761 = {"className": "btn btn-primary", "type": "button", "onClick": ((function (G__22760,G__22754,G__22755,G__22756,___$1,map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777){
return (function (){
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"file-input").click();
});})(G__22760,G__22754,G__22755,G__22756,___$1,map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777))
};
var G__22762 = sablono.interpreter.interpret(self__.file_select_label);
return React.createElement(G__22760,G__22761,G__22762);
})();
var G__22758 = (function (){var G__22763 = "button";
var G__22764 = {"className": "btn btn-default", "type": "button", "onClick": ((function (G__22763,G__22754,G__22755,G__22756,G__22757,___$1,map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,null], null));
});})(G__22763,G__22754,G__22755,G__22756,G__22757,___$1,map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777))
};
var G__22765 = "\u00D7";
return React.createElement(G__22763,G__22764,G__22765);
})();
var G__22759 = (cljs.core.truth_(self__.value)?(function (){var G__22766 = "span";
var G__22767 = {"className": "selected-file"};
var G__22768 = " ";
var G__22769 = sablono.interpreter.interpret(self__.value.name);
var G__22770 = ", ";
var G__22771 = sablono.interpreter.interpret(lomakkeet.file.humanize_filesize(self__.value.size));
return React.createElement(G__22766,G__22767,G__22768,G__22769,G__22770,G__22771);
})():null);
return React.createElement(G__22754,G__22755,G__22756,G__22757,G__22758,G__22759);
});})(map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777))
;

lomakkeet.file.t22751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777){
return (function (_22753){
var self__ = this;
var _22753__$1 = this;
return self__.meta22752;
});})(map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777))
;

lomakkeet.file.t22751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777){
return (function (_22753,meta22752__$1){
var self__ = this;
var _22753__$1 = this;
return (new lomakkeet.file.t22751(self__.G__22746,self__.file_select_label,self__.owner,self__.output_schema22704,self__.map__22747,self__.input_checker22706,self__.map__22750,self__.ks,self__.G__22709,self__.value,self__.output_checker22707,self__.map__22748,self__.G__22708,self__.input_schema22705,self__.validate__12170__auto__,self__.ch,self__.G__22745,self__.G__22710,self__.map__22749,self__.opts,self__.ufv__,self__.file_STAR_,meta22752__$1));
});})(map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777))
;

lomakkeet.file.t22751.cljs$lang$type = true;

lomakkeet.file.t22751.cljs$lang$ctorStr = "lomakkeet.file/t22751";

lomakkeet.file.t22751.cljs$lang$ctorPrWriter = ((function (map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.file/t22751");
});})(map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777))
;

lomakkeet.file.__GT_t22751 = ((function (map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777){
return (function __GT_t22751(G__22746__$2,file_select_label__$2,owner__$3,output_schema22704__$1,map__22747__$2,input_checker22706__$1,map__22750__$2,ks__$2,G__22709__$1,value__$2,output_checker22707__$1,map__22748__$2,G__22708__$1,input_schema22705__$1,validate__12170__auto____$1,ch__$2,G__22745__$2,G__22710__$1,map__22749__$2,opts__$2,ufv____$1,file_STAR___$1,meta22752){
return (new lomakkeet.file.t22751(G__22746__$2,file_select_label__$2,owner__$3,output_schema22704__$1,map__22747__$2,input_checker22706__$1,map__22750__$2,ks__$2,G__22709__$1,value__$2,output_checker22707__$1,map__22748__$2,G__22708__$1,input_schema22705__$1,validate__12170__auto____$1,ch__$2,G__22745__$2,G__22710__$1,map__22749__$2,opts__$2,ufv____$1,file_STAR___$1,meta22752));
});})(map__22749,map__22749__$1,value__$1,owner__$2,map__22750,map__22750__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22745,map__22747,map__22747__$1,value,owner,G__22746,map__22748,map__22748__$1,opts,file_select_label,ks,ch,validate__12170__auto__,ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777))
;

}

return (new lomakkeet.file.t22751(G__22746__$1,file_select_label__$1,owner__$2,output_schema22704_22774,map__22747__$1,input_checker22706_22776,map__22750__$1,ks__$1,G__22709,value__$1,output_checker22707_22777,map__22748__$1,G__22708,input_schema22705_22775,validate__12170__auto__,ch__$1,G__22745__$1,G__22710,map__22749__$1,opts__$1,ufv___22773,file_STAR_,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22781 = (function (){var G__22772 = o__12173__auto__;
return (output_checker22707_22777.cljs$core$IFn$_invoke$arity$1 ? output_checker22707_22777.cljs$core$IFn$_invoke$arity$1(G__22772) : output_checker22707_22777.call(null,G__22772));
})();
if(cljs.core.truth_(temp__4126__auto___22781)){
var error__12172__auto___22782 = temp__4126__auto___22781;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22782], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22782,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22704_22774,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___22773,output_schema22704_22774,input_schema22705_22775,input_checker22706_22776,output_checker22707_22777))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.file.file_STAR_),schema.core.make_fn_schema(output_schema22704_22774,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22705_22775], null)));

lomakkeet.file.__GT_file_STAR_ = (function() {
var __GT_file_STAR_ = null;
var __GT_file_STAR___1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.file.file_STAR_,cursor__20405__auto__);
});
var __GT_file_STAR___2 = (function (cursor__20405__auto__,m22703){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.file.file_STAR_,cursor__20405__auto__,m22703);
});
__GT_file_STAR_ = function(cursor__20405__auto__,m22703){
switch(arguments.length){
case 1:
return __GT_file_STAR___1.call(this,cursor__20405__auto__);
case 2:
return __GT_file_STAR___2.call(this,cursor__20405__auto__,m22703);
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
var file__delegate = function (form,label,ks,p__22783){
var vec__22785 = p__22783;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22785,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,lomakkeet.file.file_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null)], 0)));
};
var file = function (form,label,ks,var_args){
var p__22783 = null;
if (arguments.length > 3) {
var G__22786__i = 0, G__22786__a = new Array(arguments.length -  3);
while (G__22786__i < G__22786__a.length) {G__22786__a[G__22786__i] = arguments[G__22786__i + 3]; ++G__22786__i;}
  p__22783 = new cljs.core.IndexedSeq(G__22786__a,0);
} 
return file__delegate.call(this,form,label,ks,p__22783);};
file.cljs$lang$maxFixedArity = 3;
file.cljs$lang$applyTo = (function (arglist__22787){
var form = cljs.core.first(arglist__22787);
arglist__22787 = cljs.core.next(arglist__22787);
var label = cljs.core.first(arglist__22787);
arglist__22787 = cljs.core.next(arglist__22787);
var ks = cljs.core.first(arglist__22787);
var p__22783 = cljs.core.rest(arglist__22787);
return file__delegate(form,label,ks,p__22783);
});
file.cljs$core$IFn$_invoke$arity$variadic = file__delegate;
return file;
})()
;
