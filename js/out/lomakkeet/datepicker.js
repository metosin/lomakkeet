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
var G__22546 = (new goog.date.Date());
G__22546.setYear(v.getFullYear());

G__22546.setMonth(v.getMonth());

G__22546.setDate(v.getDate());

return G__22546;
} else {
return null;
}
});
lomakkeet.datepicker.local_date__GT_jsdate = (function local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__22548 = (new Date());
G__22548.setYear(v.getFullYear());

G__22548.setMonth(v.getMonth());

G__22548.setDate(v.getDate());

G__22548.setHours((0));

G__22548.setMinutes((0));

G__22548.setSeconds((0));

return G__22548;
} else {
return null;
}
});
lomakkeet.datepicker.date__GT_str = (function date__GT_str(v){
if(cljs.core.truth_(v)){
var G__22553 = "%d.%d.%d";
var G__22554 = v.getDate();
var G__22555 = (v.getMonth() + (1));
var G__22556 = v.getFullYear();
return goog.string.format(G__22553,G__22554,G__22555,G__22556);
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

var ufv___22595 = schema.utils.use_fn_validation;
var output_schema22558_22596 = schema.core.Any;
var input_schema22559_22597 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22560_22598 = schema.core.checker(input_schema22559_22597);
var output_checker22561_22599 = schema.core.checker(output_schema22558_22596);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks datepicker-i18n], :as opts}]
*/
lomakkeet.datepicker.date_STAR_ = ((function (ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599){
return (function date_STAR_(G__22562,G__22563,G__22564){
var validate__12581__auto__ = ufv___22595.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22600 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22562,G__22563,G__22564], null);
var temp__4126__auto___22601 = (function (){var G__22580 = args__12582__auto___22600;
return (input_checker22560_22598.cljs$core$IFn$_invoke$arity$1 ? input_checker22560_22598.cljs$core$IFn$_invoke$arity$1(G__22580) : input_checker22560_22598.call(null,G__22580));
})();
if(cljs.core.truth_(temp__4126__auto___22601)){
var error__12583__auto___22602 = temp__4126__auto___22601;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22602], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22602,cljs.core.constant$keyword$66,args__12582__auto___22600,cljs.core.constant$keyword$67,input_schema22559_22597,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22583 = G__22562;
var map__22585 = G__22583;
var map__22585__$1 = ((cljs.core.seq_QMARK_(map__22585))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22585):map__22585);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22585__$1,cljs.core.constant$keyword$66);
var owner = G__22563;
var G__22584 = G__22564;
var map__22586 = G__22584;
var map__22586__$1 = ((cljs.core.seq_QMARK_(map__22586))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22586):map__22586);
var opts = map__22586__$1;
var datepicker_i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22586__$1,cljs.core.constant$keyword$197);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22586__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22586__$1,cljs.core.constant$keyword$147);
var G__22583__$1 = G__22583;
var owner__$1 = owner;
var G__22584__$1 = G__22584;
while(true){
var map__22587 = G__22583__$1;
var map__22587__$1 = ((cljs.core.seq_QMARK_(map__22587))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22587):map__22587);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22588 = G__22584__$1;
var map__22588__$1 = ((cljs.core.seq_QMARK_(map__22588))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22588):map__22588);
var opts__$1 = map__22588__$1;
var datepicker_i18n__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22588__$1,cljs.core.constant$keyword$197);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22588__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22588__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.datepicker.t22589 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.datepicker.t22589 = (function (map__22586,G__22563,output_checker22561,map__22588,owner,G__22583,validate__12581__auto__,G__22562,map__22587,G__22584,output_schema22558,ks,input_checker22560,value,date_STAR_,datepicker_i18n,map__22585,ch,opts,ufv__,G__22564,input_schema22559,meta22590){
this.map__22586 = map__22586;
this.G__22563 = G__22563;
this.output_checker22561 = output_checker22561;
this.map__22588 = map__22588;
this.owner = owner;
this.G__22583 = G__22583;
this.validate__12581__auto__ = validate__12581__auto__;
this.G__22562 = G__22562;
this.map__22587 = map__22587;
this.G__22584 = G__22584;
this.output_schema22558 = output_schema22558;
this.ks = ks;
this.input_checker22560 = input_checker22560;
this.value = value;
this.date_STAR_ = date_STAR_;
this.datepicker_i18n = datepicker_i18n;
this.map__22585 = map__22585;
this.ch = ch;
this.opts = opts;
this.ufv__ = ufv__;
this.G__22564 = G__22564;
this.input_schema22559 = input_schema22559;
this.meta22590 = meta22590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.datepicker.t22589.prototype.om$core$IDisplayName$ = true;

lomakkeet.datepicker.t22589.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599){
return (function (_){
var self__ = this;
var ___$1 = this;
return "date*";
});})(map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599))
;

lomakkeet.datepicker.t22589.prototype.om$core$IRender$ = true;

lomakkeet.datepicker.t22589.prototype.om$core$IRender$render$arity$1 = ((function (map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22592 = {"className": "form-control", "ref": "input", "type": "text", "value": (function (){var or__4251__auto__ = lomakkeet.datepicker.date__GT_str(self__.value);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return "";
}
})()};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22592) : sablono.interpreter.input.call(null,G__22592));
});})(map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599))
;

lomakkeet.datepicker.t22589.prototype.om$core$IDidUpdate$ = true;

lomakkeet.datepicker.t22589.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599){
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
});})(map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599))
;

lomakkeet.datepicker.t22589.prototype.om$core$IDidMount$ = true;

lomakkeet.datepicker.t22589.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599){
return (function (_){
var self__ = this;
var ___$1 = this;
var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"input");
var el = (new Pikaday(cljs.core.clj__GT_js((function (){var G__22593 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$198,input,cljs.core.constant$keyword$199,"D.M.YYYY",cljs.core.constant$keyword$200,(1),cljs.core.constant$keyword$201,((function (input,___$1,map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599){
return (function (v){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,lomakkeet.datepicker.jsdate__GT_local_date(v)], null));
});})(input,___$1,map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599))
], null);
var G__22593__$1 = (cljs.core.truth_(self__.datepicker_i18n)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22593,cljs.core.constant$keyword$202,self__.datepicker_i18n):G__22593);
return G__22593__$1;
})())));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$160,el);

lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$195,self__.owner);

return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$196,self__.owner);
});})(map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599))
;

lomakkeet.datepicker.t22589.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599){
return (function (_22591){
var self__ = this;
var _22591__$1 = this;
return self__.meta22590;
});})(map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599))
;

lomakkeet.datepicker.t22589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599){
return (function (_22591,meta22590__$1){
var self__ = this;
var _22591__$1 = this;
return (new lomakkeet.datepicker.t22589(self__.map__22586,self__.G__22563,self__.output_checker22561,self__.map__22588,self__.owner,self__.G__22583,self__.validate__12581__auto__,self__.G__22562,self__.map__22587,self__.G__22584,self__.output_schema22558,self__.ks,self__.input_checker22560,self__.value,self__.date_STAR_,self__.datepicker_i18n,self__.map__22585,self__.ch,self__.opts,self__.ufv__,self__.G__22564,self__.input_schema22559,meta22590__$1));
});})(map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599))
;

lomakkeet.datepicker.t22589.cljs$lang$type = true;

lomakkeet.datepicker.t22589.cljs$lang$ctorStr = "lomakkeet.datepicker/t22589";

lomakkeet.datepicker.t22589.cljs$lang$ctorPrWriter = ((function (map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.datepicker/t22589");
});})(map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599))
;

lomakkeet.datepicker.__GT_t22589 = ((function (map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599){
return (function __GT_t22589(map__22586__$2,G__22563__$1,output_checker22561__$1,map__22588__$2,owner__$3,G__22583__$2,validate__12581__auto____$1,G__22562__$1,map__22587__$2,G__22584__$2,output_schema22558__$1,ks__$2,input_checker22560__$1,value__$2,date_STAR___$1,datepicker_i18n__$2,map__22585__$2,ch__$2,opts__$2,ufv____$1,G__22564__$1,input_schema22559__$1,meta22590){
return (new lomakkeet.datepicker.t22589(map__22586__$2,G__22563__$1,output_checker22561__$1,map__22588__$2,owner__$3,G__22583__$2,validate__12581__auto____$1,G__22562__$1,map__22587__$2,G__22584__$2,output_schema22558__$1,ks__$2,input_checker22560__$1,value__$2,date_STAR___$1,datepicker_i18n__$2,map__22585__$2,ch__$2,opts__$2,ufv____$1,G__22564__$1,input_schema22559__$1,meta22590));
});})(map__22587,map__22587__$1,value__$1,owner__$2,map__22588,map__22588__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22583,map__22585,map__22585__$1,value,owner,G__22584,map__22586,map__22586__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599))
;

}

return (new lomakkeet.datepicker.t22589(map__22586__$1,G__22563,output_checker22561_22599,map__22588__$1,owner__$2,G__22583__$1,validate__12581__auto__,G__22562,map__22587__$1,G__22584__$1,output_schema22558_22596,ks__$1,input_checker22560_22598,value__$1,date_STAR_,datepicker_i18n__$1,map__22585__$1,ch__$1,opts__$1,ufv___22595,G__22564,input_schema22559_22597,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22603 = (function (){var G__22594 = o__12584__auto__;
return (output_checker22561_22599.cljs$core$IFn$_invoke$arity$1 ? output_checker22561_22599.cljs$core$IFn$_invoke$arity$1(G__22594) : output_checker22561_22599.call(null,G__22594));
})();
if(cljs.core.truth_(temp__4126__auto___22603)){
var error__12583__auto___22604 = temp__4126__auto___22603;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22604], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22604,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22558_22596,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22595,output_schema22558_22596,input_schema22559_22597,input_checker22560_22598,output_checker22561_22599))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.datepicker.date_STAR_),schema.core.make_fn_schema(output_schema22558_22596,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22559_22597], null)));

lomakkeet.datepicker.__GT_date_STAR_ = (function() {
var __GT_date_STAR_ = null;
var __GT_date_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.datepicker.date_STAR_,cursor__20832__auto__);
});
var __GT_date_STAR___2 = (function (cursor__20832__auto__,m22557){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.datepicker.date_STAR_,cursor__20832__auto__,m22557);
});
__GT_date_STAR_ = function(cursor__20832__auto__,m22557){
switch(arguments.length){
case 1:
return __GT_date_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_date_STAR___2.call(this,cursor__20832__auto__,m22557);
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
var date__delegate = function (form,label,ks,p__22605){
var vec__22607 = p__22605;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22607,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null),(cljs.core.truth_(cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,lomakkeet.fields.emptyable_input,cljs.core.constant$keyword$149,lomakkeet.datepicker.date_STAR_], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,lomakkeet.datepicker.date_STAR_], null))], 0)));
};
var date = function (form,label,ks,var_args){
var p__22605 = null;
if (arguments.length > 3) {
var G__22608__i = 0, G__22608__a = new Array(arguments.length -  3);
while (G__22608__i < G__22608__a.length) {G__22608__a[G__22608__i] = arguments[G__22608__i + 3]; ++G__22608__i;}
  p__22605 = new cljs.core.IndexedSeq(G__22608__a,0);
} 
return date__delegate.call(this,form,label,ks,p__22605);};
date.cljs$lang$maxFixedArity = 3;
date.cljs$lang$applyTo = (function (arglist__22609){
var form = cljs.core.first(arglist__22609);
arglist__22609 = cljs.core.next(arglist__22609);
var label = cljs.core.first(arglist__22609);
arglist__22609 = cljs.core.next(arglist__22609);
var ks = cljs.core.first(arglist__22609);
var p__22605 = cljs.core.rest(arglist__22609);
return date__delegate(form,label,ks,p__22605);
});
date.cljs$core$IFn$_invoke$arity$variadic = date__delegate;
return date;
})()
;
