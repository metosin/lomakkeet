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
var humanize_filesize__delegate = function (bytes,p__22907){
var vec__22917 = p__22907;
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (function (){var G__22918 = ((function (){var G__22919 = bytes;
return Math.log(G__22919);
})() / (function (){var G__22920 = (1000);
return Math.log(G__22920);
})());
return Math.floor(G__22918);
})();
var size = (bytes / (function (){var G__22921 = (1000);
var G__22922 = unit;
return Math.pow(G__22921,G__22922);
})());
var G__22923 = (function (){var or__3758__auto__ = fmt;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return "%0.1f %s";
}
})();
var G__22924 = size;
var G__22925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit);
return goog.string.format(G__22923,G__22924,G__22925);
};
var humanize_filesize = function (bytes,var_args){
var p__22907 = null;
if (arguments.length > 1) {
var G__22926__i = 0, G__22926__a = new Array(arguments.length -  1);
while (G__22926__i < G__22926__a.length) {G__22926__a[G__22926__i] = arguments[G__22926__i + 1]; ++G__22926__i;}
  p__22907 = new cljs.core.IndexedSeq(G__22926__a,0);
} 
return humanize_filesize__delegate.call(this,bytes,p__22907);};
humanize_filesize.cljs$lang$maxFixedArity = 1;
humanize_filesize.cljs$lang$applyTo = (function (arglist__22927){
var bytes = cljs.core.first(arglist__22927);
var p__22907 = cljs.core.rest(arglist__22927);
return humanize_filesize__delegate(bytes,p__22907);
});
humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = humanize_filesize__delegate;
return humanize_filesize;
})()
;

var ufv___22992 = schema.utils.use_fn_validation;
var output_schema22929_22993 = schema.core.Any;
var input_schema22930_22994 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22931_22995 = schema.core.checker(input_schema22930_22994);
var output_checker22932_22996 = schema.core.checker(output_schema22929_22993);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks file-select-label], :or {file-select-label "Select file"}, :as opts}]
*/
lomakkeet.file.file_STAR_ = ((function (ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996){
return (function file_STAR_(G__22933,G__22934,G__22935){
var validate__10718__auto__ = ufv___22992.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___22997 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22933,G__22934,G__22935], null);
var temp__4126__auto___22998 = (function (){var G__22964 = args__10719__auto___22997;
return (input_checker22931_22995.cljs$core$IFn$_invoke$arity$1 ? input_checker22931_22995.cljs$core$IFn$_invoke$arity$1(G__22964) : input_checker22931_22995.call(null,G__22964));
})();
if(cljs.core.truth_(temp__4126__auto___22998)){
var error__10720__auto___22999 = temp__4126__auto___22998;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22999], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22999,cljs.core.constant$keyword$23,args__10719__auto___22997,cljs.core.constant$keyword$24,input_schema22930_22994,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var G__22967 = G__22933;
var map__22969 = G__22967;
var map__22969__$1 = ((cljs.core.seq_QMARK_(map__22969))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22969):map__22969);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,cljs.core.constant$keyword$23);
var owner = G__22934;
var G__22968 = G__22935;
var map__22970 = G__22968;
var map__22970__$1 = ((cljs.core.seq_QMARK_(map__22970))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22970):map__22970);
var opts = map__22970__$1;
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22970__$1,cljs.core.constant$keyword$202,"Select file");
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22970__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22970__$1,cljs.core.constant$keyword$147);
var G__22967__$1 = G__22967;
var owner__$1 = owner;
var G__22968__$1 = G__22968;
while(true){
var map__22971 = G__22967__$1;
var map__22971__$1 = ((cljs.core.seq_QMARK_(map__22971))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22971):map__22971);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__22972 = G__22968__$1;
var map__22972__$1 = ((cljs.core.seq_QMARK_(map__22972))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22972):map__22972);
var opts__$1 = map__22972__$1;
var file_select_label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22972__$1,cljs.core.constant$keyword$202,"Select file");
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22972__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22972__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.file.t22973 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.file.t22973 = (function (G__22934,G__22968,input_schema22930,file_select_label,owner,map__22970,G__22935,G__22933,ks,value,map__22971,ch,map__22969,map__22972,input_checker22931,output_checker22932,opts,ufv__,output_schema22929,file_STAR_,G__22967,validate__10718__auto__,meta22974){
this.G__22934 = G__22934;
this.G__22968 = G__22968;
this.input_schema22930 = input_schema22930;
this.file_select_label = file_select_label;
this.owner = owner;
this.map__22970 = map__22970;
this.G__22935 = G__22935;
this.G__22933 = G__22933;
this.ks = ks;
this.value = value;
this.map__22971 = map__22971;
this.ch = ch;
this.map__22969 = map__22969;
this.map__22972 = map__22972;
this.input_checker22931 = input_checker22931;
this.output_checker22932 = output_checker22932;
this.opts = opts;
this.ufv__ = ufv__;
this.output_schema22929 = output_schema22929;
this.file_STAR_ = file_STAR_;
this.G__22967 = G__22967;
this.validate__10718__auto__ = validate__10718__auto__;
this.meta22974 = meta22974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.file.t22973.prototype.om$core$IDisplayName$ = true;

lomakkeet.file.t22973.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996){
return (function (_){
var self__ = this;
var ___$1 = this;
return "file*";
});})(map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996))
;

lomakkeet.file.t22973.prototype.om$core$IRender$ = true;

lomakkeet.file.t22973.prototype.om$core$IRender$render$arity$1 = ((function (map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22976 = null;
var G__22977 = (function (){var G__22981 = {"style": {"display": "none"}, "type": "file", "ref": "file-input", "onChange": ((function (G__22976,___$1,map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996){
return (function (e){
var temp__4124__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4124__auto__)){
var file = temp__4124__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$23,file], null));
} else {
return null;
}
});})(G__22976,___$1,map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22981) : sablono.interpreter.input.call(null,G__22981));
})();
var G__22978 = (function (){var G__22982 = {"className": "btn btn-primary", "type": "button", "onClick": ((function (G__22976,G__22977,___$1,map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996){
return (function (){
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"file-input").click();
});})(G__22976,G__22977,___$1,map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996))
};
var G__22983 = sablono.interpreter.interpret(self__.file_select_label);
return React.DOM.button(G__22982,G__22983);
})();
var G__22979 = (function (){var G__22984 = {"className": "btn btn-default", "type": "button", "onClick": ((function (G__22976,G__22977,G__22978,___$1,map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$23,null], null));
});})(G__22976,G__22977,G__22978,___$1,map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996))
};
var G__22985 = "\u00D7";
return React.DOM.button(G__22984,G__22985);
})();
var G__22980 = (cljs.core.truth_(self__.value)?(function (){var G__22986 = {"className": "selected-file"};
var G__22987 = " ";
var G__22988 = sablono.interpreter.interpret(self__.value.name);
var G__22989 = ", ";
var G__22990 = sablono.interpreter.interpret(lomakkeet.file.humanize_filesize(self__.value.size));
return React.DOM.span(G__22986,G__22987,G__22988,G__22989,G__22990);
})():null);
return React.DOM.div(G__22976,G__22977,G__22978,G__22979,G__22980);
});})(map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996))
;

lomakkeet.file.t22973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996){
return (function (_22975){
var self__ = this;
var _22975__$1 = this;
return self__.meta22974;
});})(map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996))
;

lomakkeet.file.t22973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996){
return (function (_22975,meta22974__$1){
var self__ = this;
var _22975__$1 = this;
return (new lomakkeet.file.t22973(self__.G__22934,self__.G__22968,self__.input_schema22930,self__.file_select_label,self__.owner,self__.map__22970,self__.G__22935,self__.G__22933,self__.ks,self__.value,self__.map__22971,self__.ch,self__.map__22969,self__.map__22972,self__.input_checker22931,self__.output_checker22932,self__.opts,self__.ufv__,self__.output_schema22929,self__.file_STAR_,self__.G__22967,self__.validate__10718__auto__,meta22974__$1));
});})(map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996))
;

lomakkeet.file.t22973.cljs$lang$type = true;

lomakkeet.file.t22973.cljs$lang$ctorStr = "lomakkeet.file/t22973";

lomakkeet.file.t22973.cljs$lang$ctorPrWriter = ((function (map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.file/t22973");
});})(map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996))
;

lomakkeet.file.__GT_t22973 = ((function (map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996){
return (function __GT_t22973(G__22934__$1,G__22968__$2,input_schema22930__$1,file_select_label__$2,owner__$3,map__22970__$2,G__22935__$1,G__22933__$1,ks__$2,value__$2,map__22971__$2,ch__$2,map__22969__$2,map__22972__$2,input_checker22931__$1,output_checker22932__$1,opts__$2,ufv____$1,output_schema22929__$1,file_STAR___$1,G__22967__$2,validate__10718__auto____$1,meta22974){
return (new lomakkeet.file.t22973(G__22934__$1,G__22968__$2,input_schema22930__$1,file_select_label__$2,owner__$3,map__22970__$2,G__22935__$1,G__22933__$1,ks__$2,value__$2,map__22971__$2,ch__$2,map__22969__$2,map__22972__$2,input_checker22931__$1,output_checker22932__$1,opts__$2,ufv____$1,output_schema22929__$1,file_STAR___$1,G__22967__$2,validate__10718__auto____$1,meta22974));
});})(map__22971,map__22971__$1,value__$1,owner__$2,map__22972,map__22972__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22967,map__22969,map__22969__$1,value,owner,G__22968,map__22970,map__22970__$1,opts,file_select_label,ks,ch,validate__10718__auto__,ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996))
;

}

return (new lomakkeet.file.t22973(G__22934,G__22968__$1,input_schema22930_22994,file_select_label__$1,owner__$2,map__22970__$1,G__22935,G__22933,ks__$1,value__$1,map__22971__$1,ch__$1,map__22969__$1,map__22972__$1,input_checker22931_22995,output_checker22932_22996,opts__$1,ufv___22992,output_schema22929_22993,file_STAR_,G__22967__$1,validate__10718__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___23000 = (function (){var G__22991 = o__10721__auto__;
return (output_checker22932_22996.cljs$core$IFn$_invoke$arity$1 ? output_checker22932_22996.cljs$core$IFn$_invoke$arity$1(G__22991) : output_checker22932_22996.call(null,G__22991));
})();
if(cljs.core.truth_(temp__4126__auto___23000)){
var error__10720__auto___23001 = temp__4126__auto___23000;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23001], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23001,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema22929_22993,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___22992,output_schema22929_22993,input_schema22930_22994,input_checker22931_22995,output_checker22932_22996))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.file.file_STAR_),schema.core.make_fn_schema(output_schema22929_22993,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22930_22994], null)));

lomakkeet.file.__GT_file_STAR_ = (function() {
var __GT_file_STAR_ = null;
var __GT_file_STAR___1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.file.file_STAR_,cursor__20339__auto__);
});
var __GT_file_STAR___2 = (function (cursor__20339__auto__,m22928){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.file.file_STAR_,cursor__20339__auto__,m22928);
});
__GT_file_STAR_ = function(cursor__20339__auto__,m22928){
switch(arguments.length){
case 1:
return __GT_file_STAR___1.call(this,cursor__20339__auto__);
case 2:
return __GT_file_STAR___2.call(this,cursor__20339__auto__,m22928);
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
var file__delegate = function (form,label,ks,p__23002){
var vec__23004 = p__23002;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23004,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.file.file_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var file = function (form,label,ks,var_args){
var p__23002 = null;
if (arguments.length > 3) {
var G__23005__i = 0, G__23005__a = new Array(arguments.length -  3);
while (G__23005__i < G__23005__a.length) {G__23005__a[G__23005__i] = arguments[G__23005__i + 3]; ++G__23005__i;}
  p__23002 = new cljs.core.IndexedSeq(G__23005__a,0);
} 
return file__delegate.call(this,form,label,ks,p__23002);};
file.cljs$lang$maxFixedArity = 3;
file.cljs$lang$applyTo = (function (arglist__23006){
var form = cljs.core.first(arglist__23006);
arglist__23006 = cljs.core.next(arglist__23006);
var label = cljs.core.first(arglist__23006);
arglist__23006 = cljs.core.next(arglist__23006);
var ks = cljs.core.first(arglist__23006);
var p__23002 = cljs.core.rest(arglist__23006);
return file__delegate(form,label,ks,p__23002);
});
file.cljs$core$IFn$_invoke$arity$variadic = file__delegate;
return file;
})()
;
