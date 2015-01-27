// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lomakkeet.datepicker');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('lomakkeet.fields');
lomakkeet.datepicker.jsdate__GT_local_date = (function jsdate__GT_local_date(v){
if(cljs.core.truth_(v)){
var G__22550 = (new goog.date.Date());
G__22550.setYear(v.getFullYear());

G__22550.setMonth(v.getMonth());

G__22550.setDate(v.getDate());

return G__22550;
} else {
return null;
}
});
lomakkeet.datepicker.local_date__GT_jsdate = (function local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__22552 = (new Date());
G__22552.setYear(v.getFullYear());

G__22552.setMonth(v.getMonth());

G__22552.setDate(v.getDate());

G__22552.setHours((0));

G__22552.setMinutes((0));

G__22552.setSeconds((0));

return G__22552;
} else {
return null;
}
});
lomakkeet.datepicker.date__GT_str = (function date__GT_str(v){
if(cljs.core.truth_(v)){
var G__22557 = "%d.%d.%d";
var G__22558 = v.getDate();
var G__22559 = (v.getMonth() + (1));
var G__22560 = v.getFullYear();
return goog.string.format(G__22557,G__22558,G__22559,G__22560);
} else {
return null;
}
});
lomakkeet.datepicker.set_limit_date = (function set_limit_date(k,owner){
var el = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$160);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$195,"setMinDate",cljs.core.constant$keyword$196,"setMaxDate"], null),k);
var v = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,k);
if(cljs.core.truth_(v)){
return (el[fn_name]).call(el,v);
} else {
return null;
}
});

var ufv___22599 = schema.utils.use_fn_validation;
var output_schema22562_22600 = schema.core.Any;
var input_schema22563_22601 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22564_22602 = schema.core.checker(input_schema22563_22601);
var output_checker22565_22603 = schema.core.checker(output_schema22562_22600);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks datepicker-i18n], :as opts}]
*/
lomakkeet.datepicker.date_STAR_ = ((function (ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603){
return (function date_STAR_(G__22566,G__22567,G__22568){
var validate__12581__auto__ = ufv___22599.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22604 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22566,G__22567,G__22568], null);
var temp__4126__auto___22605 = (function (){var G__22584 = args__12582__auto___22604;
return (input_checker22564_22602.cljs$core$IFn$_invoke$arity$1 ? input_checker22564_22602.cljs$core$IFn$_invoke$arity$1(G__22584) : input_checker22564_22602.call(null,G__22584));
})();
if(cljs.core.truth_(temp__4126__auto___22605)){
var error__12583__auto___22606 = temp__4126__auto___22605;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22606], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22606,cljs.core.constant$keyword$66,args__12582__auto___22604,cljs.core.constant$keyword$67,input_schema22563_22601,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22587 = G__22566;
var map__22589 = G__22587;
var map__22589__$1 = ((cljs.core.seq_QMARK_(map__22589))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22589):map__22589);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,cljs.core.constant$keyword$66);
var owner = G__22567;
var G__22588 = G__22568;
var map__22590 = G__22588;
var map__22590__$1 = ((cljs.core.seq_QMARK_(map__22590))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22590):map__22590);
var opts = map__22590__$1;
var datepicker_i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,cljs.core.constant$keyword$197);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,cljs.core.constant$keyword$147);
var G__22587__$1 = G__22587;
var owner__$1 = owner;
var G__22588__$1 = G__22588;
while(true){
var map__22591 = G__22587__$1;
var map__22591__$1 = ((cljs.core.seq_QMARK_(map__22591))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22591):map__22591);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22591__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22592 = G__22588__$1;
var map__22592__$1 = ((cljs.core.seq_QMARK_(map__22592))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22592):map__22592);
var opts__$1 = map__22592__$1;
var datepicker_i18n__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22592__$1,cljs.core.constant$keyword$197);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22592__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22592__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.datepicker.t22593 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.datepicker.t22593 = (function (G__22566,owner,output_schema22562,validate__12581__auto__,G__22587,output_checker22565,map__22591,input_schema22563,G__22567,ks,value,date_STAR_,datepicker_i18n,G__22588,ch,input_checker22564,map__22589,opts,ufv__,G__22568,map__22590,map__22592,meta22594){
this.G__22566 = G__22566;
this.owner = owner;
this.output_schema22562 = output_schema22562;
this.validate__12581__auto__ = validate__12581__auto__;
this.G__22587 = G__22587;
this.output_checker22565 = output_checker22565;
this.map__22591 = map__22591;
this.input_schema22563 = input_schema22563;
this.G__22567 = G__22567;
this.ks = ks;
this.value = value;
this.date_STAR_ = date_STAR_;
this.datepicker_i18n = datepicker_i18n;
this.G__22588 = G__22588;
this.ch = ch;
this.input_checker22564 = input_checker22564;
this.map__22589 = map__22589;
this.opts = opts;
this.ufv__ = ufv__;
this.G__22568 = G__22568;
this.map__22590 = map__22590;
this.map__22592 = map__22592;
this.meta22594 = meta22594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.datepicker.t22593.prototype.om$core$IDisplayName$ = true;

lomakkeet.datepicker.t22593.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603){
return (function (_){
var self__ = this;
var ___$1 = this;
return "date*";
});})(map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603))
;

lomakkeet.datepicker.t22593.prototype.om$core$IRender$ = true;

lomakkeet.datepicker.t22593.prototype.om$core$IRender$render$arity$1 = ((function (map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22596 = {"className": "form-control", "ref": "input", "type": "text", "value": (function (){var or__4251__auto__ = lomakkeet.datepicker.date__GT_str(self__.value);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return "";
}
})()};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22596) : sablono.interpreter.input.call(null,G__22596));
});})(map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603))
;

lomakkeet.datepicker.t22593.prototype.om$core$IDidUpdate$ = true;

lomakkeet.datepicker.t22593.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603){
return (function (_,prev,___$1){
var self__ = this;
var ___$2 = this;
var props = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$195.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$195.cljs$core$IFn$_invoke$arity$1(prev))){
lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$195,self__.owner);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(prev))){
return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$196,self__.owner);
} else {
return null;
}
});})(map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603))
;

lomakkeet.datepicker.t22593.prototype.om$core$IDidMount$ = true;

lomakkeet.datepicker.t22593.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603){
return (function (_){
var self__ = this;
var ___$1 = this;
var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"input");
var el = (new Pikaday(cljs.core.clj__GT_js((function (){var G__22597 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$198,input,cljs.core.constant$keyword$199,"D.M.YYYY",cljs.core.constant$keyword$200,(1),cljs.core.constant$keyword$201,((function (input,___$1,map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603){
return (function (v){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,lomakkeet.datepicker.jsdate__GT_local_date(v)], null));
});})(input,___$1,map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603))
], null);
var G__22597__$1 = (cljs.core.truth_(self__.datepicker_i18n)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22597,cljs.core.constant$keyword$202,self__.datepicker_i18n):G__22597);
return G__22597__$1;
})())));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$160,el);

lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$195,self__.owner);

return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$196,self__.owner);
});})(map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603))
;

lomakkeet.datepicker.t22593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603){
return (function (_22595){
var self__ = this;
var _22595__$1 = this;
return self__.meta22594;
});})(map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603))
;

lomakkeet.datepicker.t22593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603){
return (function (_22595,meta22594__$1){
var self__ = this;
var _22595__$1 = this;
return (new lomakkeet.datepicker.t22593(self__.G__22566,self__.owner,self__.output_schema22562,self__.validate__12581__auto__,self__.G__22587,self__.output_checker22565,self__.map__22591,self__.input_schema22563,self__.G__22567,self__.ks,self__.value,self__.date_STAR_,self__.datepicker_i18n,self__.G__22588,self__.ch,self__.input_checker22564,self__.map__22589,self__.opts,self__.ufv__,self__.G__22568,self__.map__22590,self__.map__22592,meta22594__$1));
});})(map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603))
;

lomakkeet.datepicker.t22593.cljs$lang$type = true;

lomakkeet.datepicker.t22593.cljs$lang$ctorStr = "lomakkeet.datepicker/t22593";

lomakkeet.datepicker.t22593.cljs$lang$ctorPrWriter = ((function (map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.datepicker/t22593");
});})(map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603))
;

lomakkeet.datepicker.__GT_t22593 = ((function (map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603){
return (function __GT_t22593(G__22566__$1,owner__$3,output_schema22562__$1,validate__12581__auto____$1,G__22587__$2,output_checker22565__$1,map__22591__$2,input_schema22563__$1,G__22567__$1,ks__$2,value__$2,date_STAR___$1,datepicker_i18n__$2,G__22588__$2,ch__$2,input_checker22564__$1,map__22589__$2,opts__$2,ufv____$1,G__22568__$1,map__22590__$2,map__22592__$2,meta22594){
return (new lomakkeet.datepicker.t22593(G__22566__$1,owner__$3,output_schema22562__$1,validate__12581__auto____$1,G__22587__$2,output_checker22565__$1,map__22591__$2,input_schema22563__$1,G__22567__$1,ks__$2,value__$2,date_STAR___$1,datepicker_i18n__$2,G__22588__$2,ch__$2,input_checker22564__$1,map__22589__$2,opts__$2,ufv____$1,G__22568__$1,map__22590__$2,map__22592__$2,meta22594));
});})(map__22591,map__22591__$1,value__$1,owner__$2,map__22592,map__22592__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22587,map__22589,map__22589__$1,value,owner,G__22588,map__22590,map__22590__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603))
;

}

return (new lomakkeet.datepicker.t22593(G__22566,owner__$2,output_schema22562_22600,validate__12581__auto__,G__22587__$1,output_checker22565_22603,map__22591__$1,input_schema22563_22601,G__22567,ks__$1,value__$1,date_STAR_,datepicker_i18n__$1,G__22588__$1,ch__$1,input_checker22564_22602,map__22589__$1,opts__$1,ufv___22599,G__22568,map__22590__$1,map__22592__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22607 = (function (){var G__22598 = o__12584__auto__;
return (output_checker22565_22603.cljs$core$IFn$_invoke$arity$1 ? output_checker22565_22603.cljs$core$IFn$_invoke$arity$1(G__22598) : output_checker22565_22603.call(null,G__22598));
})();
if(cljs.core.truth_(temp__4126__auto___22607)){
var error__12583__auto___22608 = temp__4126__auto___22607;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22608], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22608,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22562_22600,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22599,output_schema22562_22600,input_schema22563_22601,input_checker22564_22602,output_checker22565_22603))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.datepicker.date_STAR_),schema.core.make_fn_schema(output_schema22562_22600,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22563_22601], null)));

lomakkeet.datepicker.__GT_date_STAR_ = (function() {
var __GT_date_STAR_ = null;
var __GT_date_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.datepicker.date_STAR_,cursor__20832__auto__);
});
var __GT_date_STAR___2 = (function (cursor__20832__auto__,m22561){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.datepicker.date_STAR_,cursor__20832__auto__,m22561);
});
__GT_date_STAR_ = function(cursor__20832__auto__,m22561){
switch(arguments.length){
case 1:
return __GT_date_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_date_STAR___2.call(this,cursor__20832__auto__,m22561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_date_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_date_STAR___1;
__GT_date_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_date_STAR___2;
return __GT_date_STAR_;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.datepicker.date = (function() { 
var date__delegate = function (form,label,ks,p__22609){
var vec__22611 = p__22609;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22611,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null),(cljs.core.truth_(cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,lomakkeet.fields.emptyable_input,cljs.core.constant$keyword$149,lomakkeet.datepicker.date_STAR_], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,lomakkeet.datepicker.date_STAR_], null))], 0)));
};
var date = function (form,label,ks,var_args){
var p__22609 = null;
if (arguments.length > 3) {
var G__22612__i = 0, G__22612__a = new Array(arguments.length -  3);
while (G__22612__i < G__22612__a.length) {G__22612__a[G__22612__i] = arguments[G__22612__i + 3]; ++G__22612__i;}
  p__22609 = new cljs.core.IndexedSeq(G__22612__a,0);
} 
return date__delegate.call(this,form,label,ks,p__22609);};
date.cljs$lang$maxFixedArity = 3;
date.cljs$lang$applyTo = (function (arglist__22613){
var form = cljs.core.first(arglist__22613);
arglist__22613 = cljs.core.next(arglist__22613);
var label = cljs.core.first(arglist__22613);
arglist__22613 = cljs.core.next(arglist__22613);
var ks = cljs.core.first(arglist__22613);
var p__22609 = cljs.core.rest(arglist__22613);
return date__delegate(form,label,ks,p__22609);
});
date.cljs$core$IFn$_invoke$arity$variadic = date__delegate;
return date;
})()
;
