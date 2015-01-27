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
var humanize_filesize__delegate = function (bytes,p__22183){
var vec__22193 = p__22183;
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22193,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (function (){var G__22194 = ((function (){var G__22195 = bytes;
return Math.log(G__22195);
})() / (function (){var G__22196 = (1000);
return Math.log(G__22196);
})());
return Math.floor(G__22194);
})();
var size = (bytes / (function (){var G__22197 = (1000);
var G__22198 = unit;
return Math.pow(G__22197,G__22198);
})());
var G__22199 = (function (){var or__3758__auto__ = fmt;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return "%0.1f %s";
}
})();
var G__22200 = size;
var G__22201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit);
return goog.string.format(G__22199,G__22200,G__22201);
};
var humanize_filesize = function (bytes,var_args){
var p__22183 = null;
if (arguments.length > 1) {
var G__22202__i = 0, G__22202__a = new Array(arguments.length -  1);
while (G__22202__i < G__22202__a.length) {G__22202__a[G__22202__i] = arguments[G__22202__i + 1]; ++G__22202__i;}
  p__22183 = new cljs.core.IndexedSeq(G__22202__a,0);
} 
return humanize_filesize__delegate.call(this,bytes,p__22183);};
humanize_filesize.cljs$lang$maxFixedArity = 1;
humanize_filesize.cljs$lang$applyTo = (function (arglist__22203){
var bytes = cljs.core.first(arglist__22203);
var p__22183 = cljs.core.rest(arglist__22203);
return humanize_filesize__delegate(bytes,p__22183);
});
humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = humanize_filesize__delegate;
return humanize_filesize;
})()
;

var ufv___22268 = schema.utils.use_fn_validation;
var output_schema22205_22269 = schema.core.Any;
var input_schema22206_22270 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22207_22271 = schema.core.checker(input_schema22206_22270);
var output_checker22208_22272 = schema.core.checker(output_schema22205_22269);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks file-select-label], :or {file-select-label "Select file"}, :as opts}]
*/
lomakkeet.file.file_STAR_ = ((function (ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272){
return (function file_STAR_(G__22209,G__22210,G__22211){
var validate__12088__auto__ = ufv___22268.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___22273 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22209,G__22210,G__22211], null);
var temp__4126__auto___22274 = (function (){var G__22240 = args__12089__auto___22273;
return (input_checker22207_22271.cljs$core$IFn$_invoke$arity$1 ? input_checker22207_22271.cljs$core$IFn$_invoke$arity$1(G__22240) : input_checker22207_22271.call(null,G__22240));
})();
if(cljs.core.truth_(temp__4126__auto___22274)){
var error__12090__auto___22275 = temp__4126__auto___22274;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22275], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22275,cljs.core.constant$keyword$66,args__12089__auto___22273,cljs.core.constant$keyword$67,input_schema22206_22270,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var G__22243 = G__22209;
var map__22245 = G__22243;
var map__22245__$1 = ((cljs.core.seq_QMARK_(map__22245))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22245):map__22245);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22245__$1,cljs.core.constant$keyword$66);
var owner = G__22210;
var G__22244 = G__22211;
var map__22246 = G__22244;
var map__22246__$1 = ((cljs.core.seq_QMARK_(map__22246))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22246):map__22246);
var opts = map__22246__$1;
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22246__$1,cljs.core.constant$keyword$229,"Select file");
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22246__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22246__$1,cljs.core.constant$keyword$147);
var G__22243__$1 = G__22243;
var owner__$1 = owner;
var G__22244__$1 = G__22244;
while(true){
var map__22247 = G__22243__$1;
var map__22247__$1 = ((cljs.core.seq_QMARK_(map__22247))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22247):map__22247);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22247__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22248 = G__22244__$1;
var map__22248__$1 = ((cljs.core.seq_QMARK_(map__22248))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22248):map__22248);
var opts__$1 = map__22248__$1;
var file_select_label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22248__$1,cljs.core.constant$keyword$229,"Select file");
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22248__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22248__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.file.t22249 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.file.t22249 = (function (file_select_label,G__22243,owner,validate__12088__auto__,G__22211,map__22246,input_checker22207,map__22247,input_schema22206,ks,G__22244,G__22210,map__22245,value,G__22209,output_schema22205,map__22248,output_checker22208,ch,opts,ufv__,file_STAR_,meta22250){
this.file_select_label = file_select_label;
this.G__22243 = G__22243;
this.owner = owner;
this.validate__12088__auto__ = validate__12088__auto__;
this.G__22211 = G__22211;
this.map__22246 = map__22246;
this.input_checker22207 = input_checker22207;
this.map__22247 = map__22247;
this.input_schema22206 = input_schema22206;
this.ks = ks;
this.G__22244 = G__22244;
this.G__22210 = G__22210;
this.map__22245 = map__22245;
this.value = value;
this.G__22209 = G__22209;
this.output_schema22205 = output_schema22205;
this.map__22248 = map__22248;
this.output_checker22208 = output_checker22208;
this.ch = ch;
this.opts = opts;
this.ufv__ = ufv__;
this.file_STAR_ = file_STAR_;
this.meta22250 = meta22250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.file.t22249.prototype.om$core$IDisplayName$ = true;

lomakkeet.file.t22249.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272){
return (function (_){
var self__ = this;
var ___$1 = this;
return "file*";
});})(map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272))
;

lomakkeet.file.t22249.prototype.om$core$IRender$ = true;

lomakkeet.file.t22249.prototype.om$core$IRender$render$arity$1 = ((function (map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22252 = null;
var G__22253 = (function (){var G__22257 = {"style": {"display": "none"}, "type": "file", "ref": "file-input", "onChange": ((function (G__22252,___$1,map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272){
return (function (e){
var temp__4124__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4124__auto__)){
var file = temp__4124__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,file], null));
} else {
return null;
}
});})(G__22252,___$1,map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22257) : sablono.interpreter.input.call(null,G__22257));
})();
var G__22254 = (function (){var G__22258 = {"className": "btn btn-primary", "type": "button", "onClick": ((function (G__22252,G__22253,___$1,map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272){
return (function (){
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"file-input").click();
});})(G__22252,G__22253,___$1,map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272))
};
var G__22259 = sablono.interpreter.interpret(self__.file_select_label);
return React.DOM.button(G__22258,G__22259);
})();
var G__22255 = (function (){var G__22260 = {"className": "btn btn-default", "type": "button", "onClick": ((function (G__22252,G__22253,G__22254,___$1,map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,null], null));
});})(G__22252,G__22253,G__22254,___$1,map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272))
};
var G__22261 = "\u00D7";
return React.DOM.button(G__22260,G__22261);
})();
var G__22256 = (cljs.core.truth_(self__.value)?(function (){var G__22262 = {"className": "selected-file"};
var G__22263 = " ";
var G__22264 = sablono.interpreter.interpret(self__.value.name);
var G__22265 = ", ";
var G__22266 = sablono.interpreter.interpret(lomakkeet.file.humanize_filesize(self__.value.size));
return React.DOM.span(G__22262,G__22263,G__22264,G__22265,G__22266);
})():null);
return React.DOM.div(G__22252,G__22253,G__22254,G__22255,G__22256);
});})(map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272))
;

lomakkeet.file.t22249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272){
return (function (_22251){
var self__ = this;
var _22251__$1 = this;
return self__.meta22250;
});})(map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272))
;

lomakkeet.file.t22249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272){
return (function (_22251,meta22250__$1){
var self__ = this;
var _22251__$1 = this;
return (new lomakkeet.file.t22249(self__.file_select_label,self__.G__22243,self__.owner,self__.validate__12088__auto__,self__.G__22211,self__.map__22246,self__.input_checker22207,self__.map__22247,self__.input_schema22206,self__.ks,self__.G__22244,self__.G__22210,self__.map__22245,self__.value,self__.G__22209,self__.output_schema22205,self__.map__22248,self__.output_checker22208,self__.ch,self__.opts,self__.ufv__,self__.file_STAR_,meta22250__$1));
});})(map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272))
;

lomakkeet.file.t22249.cljs$lang$type = true;

lomakkeet.file.t22249.cljs$lang$ctorStr = "lomakkeet.file/t22249";

lomakkeet.file.t22249.cljs$lang$ctorPrWriter = ((function (map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.file/t22249");
});})(map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272))
;

lomakkeet.file.__GT_t22249 = ((function (map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272){
return (function __GT_t22249(file_select_label__$2,G__22243__$2,owner__$3,validate__12088__auto____$1,G__22211__$1,map__22246__$2,input_checker22207__$1,map__22247__$2,input_schema22206__$1,ks__$2,G__22244__$2,G__22210__$1,map__22245__$2,value__$2,G__22209__$1,output_schema22205__$1,map__22248__$2,output_checker22208__$1,ch__$2,opts__$2,ufv____$1,file_STAR___$1,meta22250){
return (new lomakkeet.file.t22249(file_select_label__$2,G__22243__$2,owner__$3,validate__12088__auto____$1,G__22211__$1,map__22246__$2,input_checker22207__$1,map__22247__$2,input_schema22206__$1,ks__$2,G__22244__$2,G__22210__$1,map__22245__$2,value__$2,G__22209__$1,output_schema22205__$1,map__22248__$2,output_checker22208__$1,ch__$2,opts__$2,ufv____$1,file_STAR___$1,meta22250));
});})(map__22247,map__22247__$1,value__$1,owner__$2,map__22248,map__22248__$1,opts__$1,file_select_label__$1,ks__$1,ch__$1,G__22243,map__22245,map__22245__$1,value,owner,G__22244,map__22246,map__22246__$1,opts,file_select_label,ks,ch,validate__12088__auto__,ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272))
;

}

return (new lomakkeet.file.t22249(file_select_label__$1,G__22243__$1,owner__$2,validate__12088__auto__,G__22211,map__22246__$1,input_checker22207_22271,map__22247__$1,input_schema22206_22270,ks__$1,G__22244__$1,G__22210,map__22245__$1,value__$1,G__22209,output_schema22205_22269,map__22248__$1,output_checker22208_22272,ch__$1,opts__$1,ufv___22268,file_STAR_,null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___22276 = (function (){var G__22267 = o__12091__auto__;
return (output_checker22208_22272.cljs$core$IFn$_invoke$arity$1 ? output_checker22208_22272.cljs$core$IFn$_invoke$arity$1(G__22267) : output_checker22208_22272.call(null,G__22267));
})();
if(cljs.core.truth_(temp__4126__auto___22276)){
var error__12090__auto___22277 = temp__4126__auto___22276;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"file*","file*",-950149057,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22277], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22277,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema22205_22269,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___22268,output_schema22205_22269,input_schema22206_22270,input_checker22207_22271,output_checker22208_22272))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.file.file_STAR_),schema.core.make_fn_schema(output_schema22205_22269,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22206_22270], null)));

lomakkeet.file.__GT_file_STAR_ = (function() {
var __GT_file_STAR_ = null;
var __GT_file_STAR___1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.file.file_STAR_,cursor__20339__auto__);
});
var __GT_file_STAR___2 = (function (cursor__20339__auto__,m22204){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.file.file_STAR_,cursor__20339__auto__,m22204);
});
__GT_file_STAR_ = function(cursor__20339__auto__,m22204){
switch(arguments.length){
case 1:
return __GT_file_STAR___1.call(this,cursor__20339__auto__);
case 2:
return __GT_file_STAR___2.call(this,cursor__20339__auto__,m22204);
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
var file__delegate = function (form,label,ks,p__22278){
var vec__22280 = p__22278;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22280,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.file.file_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var file = function (form,label,ks,var_args){
var p__22278 = null;
if (arguments.length > 3) {
var G__22281__i = 0, G__22281__a = new Array(arguments.length -  3);
while (G__22281__i < G__22281__a.length) {G__22281__a[G__22281__i] = arguments[G__22281__i + 3]; ++G__22281__i;}
  p__22278 = new cljs.core.IndexedSeq(G__22281__a,0);
} 
return file__delegate.call(this,form,label,ks,p__22278);};
file.cljs$lang$maxFixedArity = 3;
file.cljs$lang$applyTo = (function (arglist__22282){
var form = cljs.core.first(arglist__22282);
arglist__22282 = cljs.core.next(arglist__22282);
var label = cljs.core.first(arglist__22282);
arglist__22282 = cljs.core.next(arglist__22282);
var ks = cljs.core.first(arglist__22282);
var p__22278 = cljs.core.rest(arglist__22282);
return file__delegate(form,label,ks,p__22278);
});
file.cljs$core$IFn$_invoke$arity$variadic = file__delegate;
return file;
})()
;
