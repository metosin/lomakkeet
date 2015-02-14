// Compiled by ClojureScript 0.0-2850 {}
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
var G__22597 = (new goog.date.Date());
G__22597.setYear(v.getFullYear());

G__22597.setMonth(v.getMonth());

G__22597.setDate(v.getDate());

return G__22597;
} else {
return null;
}
});
lomakkeet.datepicker.local_date__GT_jsdate = (function local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__22599 = (new Date());
G__22599.setYear(v.getFullYear());

G__22599.setMonth(v.getMonth());

G__22599.setDate(v.getDate());

G__22599.setHours((0));

G__22599.setMinutes((0));

G__22599.setSeconds((0));

return G__22599;
} else {
return null;
}
});
lomakkeet.datepicker.date__GT_str = (function date__GT_str(v){
if(cljs.core.truth_(v)){
var G__22604 = "%d.%d.%d";
var G__22605 = v.getDate();
var G__22606 = (v.getMonth() + (1));
var G__22607 = v.getFullYear();
return goog.string.format(G__22604,G__22605,G__22606,G__22607);
} else {
return null;
}
});
lomakkeet.datepicker.set_limit_date = (function set_limit_date(k,owner){
var el = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$158);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$191,"setMinDate",cljs.core.constant$keyword$192,"setMaxDate"], null),k);
var v = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,k);
if(cljs.core.truth_(v)){
return (el[fn_name]).call(el,v);
} else {
return null;
}
});

var ufv___22649 = schema.utils.use_fn_validation;
var output_schema22610_22650 = schema.core.Any;
var input_schema22611_22651 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22612_22652 = schema.core.checker(input_schema22611_22651);
var output_checker22613_22653 = schema.core.checker(output_schema22610_22650);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks datepicker-i18n], :as opts}]
*/
lomakkeet.datepicker.date_STAR_ = ((function (ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function date_STAR_(G__22614,G__22615,G__22616){
var validate__12170__auto__ = ufv___22649.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22654 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22614,G__22615,G__22616], null);
var temp__4126__auto___22655 = (function (){var G__22633 = args__12171__auto___22654;
return (input_checker22612_22652.cljs$core$IFn$_invoke$arity$1 ? input_checker22612_22652.cljs$core$IFn$_invoke$arity$1(G__22633) : input_checker22612_22652.call(null,G__22633));
})();
if(cljs.core.truth_(temp__4126__auto___22655)){
var error__12172__auto___22656 = temp__4126__auto___22655;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22656], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22656,cljs.core.constant$keyword$64,args__12171__auto___22654,cljs.core.constant$keyword$65,input_schema22611_22651,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__22636 = G__22614;
var map__22638 = G__22636;
var map__22638__$1 = ((cljs.core.seq_QMARK_(map__22638))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22638):map__22638);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22638__$1,cljs.core.constant$keyword$64);
var owner = G__22615;
var G__22637 = G__22616;
var map__22639 = G__22637;
var map__22639__$1 = ((cljs.core.seq_QMARK_(map__22639))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22639):map__22639);
var opts = map__22639__$1;
var datepicker_i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22639__$1,cljs.core.constant$keyword$193);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22639__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22639__$1,cljs.core.constant$keyword$145);
var G__22636__$1 = G__22636;
var owner__$1 = owner;
var G__22637__$1 = G__22637;
while(true){
var map__22640 = G__22636__$1;
var map__22640__$1 = ((cljs.core.seq_QMARK_(map__22640))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22640):map__22640);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22640__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__22641 = G__22637__$1;
var map__22641__$1 = ((cljs.core.seq_QMARK_(map__22641))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22641):map__22641);
var opts__$1 = map__22641__$1;
var datepicker_i18n__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22641__$1,cljs.core.constant$keyword$193);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22641__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22641__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.datepicker.t22642 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.datepicker.t22642 = (function (map__22638,output_checker22613,input_schema22611,G__22616,owner,map__22639,map__22641,G__22636,G__22614,ks,output_schema22610,value,G__22615,input_checker22612,date_STAR_,G__22637,datepicker_i18n,validate__12170__auto__,ch,map__22640,opts,ufv__,meta22643){
this.map__22638 = map__22638;
this.output_checker22613 = output_checker22613;
this.input_schema22611 = input_schema22611;
this.G__22616 = G__22616;
this.owner = owner;
this.map__22639 = map__22639;
this.map__22641 = map__22641;
this.G__22636 = G__22636;
this.G__22614 = G__22614;
this.ks = ks;
this.output_schema22610 = output_schema22610;
this.value = value;
this.G__22615 = G__22615;
this.input_checker22612 = input_checker22612;
this.date_STAR_ = date_STAR_;
this.G__22637 = G__22637;
this.datepicker_i18n = datepicker_i18n;
this.validate__12170__auto__ = validate__12170__auto__;
this.ch = ch;
this.map__22640 = map__22640;
this.opts = opts;
this.ufv__ = ufv__;
this.meta22643 = meta22643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.datepicker.t22642.prototype.om$core$IDisplayName$ = true;

lomakkeet.datepicker.t22642.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function (_){
var self__ = this;
var ___$1 = this;
return "date*";
});})(map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
;

lomakkeet.datepicker.t22642.prototype.om$core$IRenderState$ = true;

lomakkeet.datepicker.t22642.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function (_,p__22645){
var self__ = this;
var map__22646 = p__22645;
var map__22646__$1 = ((cljs.core.seq_QMARK_(map__22646))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22646):map__22646);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22646__$1,cljs.core.constant$keyword$194);
var ___$1 = this;
return sablono.interpreter.create_element("input",{"className": "form-control", "ref": "input", "type": "text", "value": (function (){var or__3815__auto__ = val;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = lomakkeet.datepicker.date__GT_str(self__.value);
if(cljs.core.truth_(or__3815__auto____$1)){
return or__3815__auto____$1;
} else {
return "";
}
}
})(), "onChange": ((function (___$1,map__22646,map__22646__$1,val,map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function (p1__22608_SHARP_){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$194,p1__22608_SHARP_.target.value);
});})(___$1,map__22646,map__22646__$1,val,map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
, "onKeyPress": ((function (___$1,map__22646,map__22646__$1,val,map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function (e){
var k = e.key;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",k)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$194)], null));
} else {
return null;
}
});})(___$1,map__22646,map__22646__$1,val,map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
, "autoComplete": false});
});})(map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
;

lomakkeet.datepicker.t22642.prototype.om$core$IDidUpdate$ = true;

lomakkeet.datepicker.t22642.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function (_,prev,___$1){
var self__ = this;
var ___$2 = this;
var props = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$191.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$191.cljs$core$IFn$_invoke$arity$1(prev))){
lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$191,self__.owner);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$192.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$192.cljs$core$IFn$_invoke$arity$1(prev))){
return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$192,self__.owner);
} else {
return null;
}
});})(map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
;

lomakkeet.datepicker.t22642.prototype.om$core$IDidMount$ = true;

lomakkeet.datepicker.t22642.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function (_){
var self__ = this;
var ___$1 = this;
var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"input");
var el = (new Pikaday(cljs.core.clj__GT_js((function (){var G__22647 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$195,input,cljs.core.constant$keyword$196,"D.M.YYYY",cljs.core.constant$keyword$197,(1),cljs.core.constant$keyword$198,((function (input,___$1,map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function (v){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,lomakkeet.datepicker.jsdate__GT_local_date(v)], null));
});})(input,___$1,map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
], null);
var G__22647__$1 = (cljs.core.truth_(self__.datepicker_i18n)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22647,cljs.core.constant$keyword$199,self__.datepicker_i18n):G__22647);
return G__22647__$1;
})())));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$158,el);

lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$191,self__.owner);

return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$192,self__.owner);
});})(map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
;

lomakkeet.datepicker.t22642.prototype.om$core$IInitState$ = true;

lomakkeet.datepicker.t22642.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$194,null], null);
});})(map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
;

lomakkeet.datepicker.t22642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function (_22644){
var self__ = this;
var _22644__$1 = this;
return self__.meta22643;
});})(map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
;

lomakkeet.datepicker.t22642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function (_22644,meta22643__$1){
var self__ = this;
var _22644__$1 = this;
return (new lomakkeet.datepicker.t22642(self__.map__22638,self__.output_checker22613,self__.input_schema22611,self__.G__22616,self__.owner,self__.map__22639,self__.map__22641,self__.G__22636,self__.G__22614,self__.ks,self__.output_schema22610,self__.value,self__.G__22615,self__.input_checker22612,self__.date_STAR_,self__.G__22637,self__.datepicker_i18n,self__.validate__12170__auto__,self__.ch,self__.map__22640,self__.opts,self__.ufv__,meta22643__$1));
});})(map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
;

lomakkeet.datepicker.t22642.cljs$lang$type = true;

lomakkeet.datepicker.t22642.cljs$lang$ctorStr = "lomakkeet.datepicker/t22642";

lomakkeet.datepicker.t22642.cljs$lang$ctorPrWriter = ((function (map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.datepicker/t22642");
});})(map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
;

lomakkeet.datepicker.__GT_t22642 = ((function (map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653){
return (function __GT_t22642(map__22638__$2,output_checker22613__$1,input_schema22611__$1,G__22616__$1,owner__$3,map__22639__$2,map__22641__$2,G__22636__$2,G__22614__$1,ks__$2,output_schema22610__$1,value__$2,G__22615__$1,input_checker22612__$1,date_STAR___$1,G__22637__$2,datepicker_i18n__$2,validate__12170__auto____$1,ch__$2,map__22640__$2,opts__$2,ufv____$1,meta22643){
return (new lomakkeet.datepicker.t22642(map__22638__$2,output_checker22613__$1,input_schema22611__$1,G__22616__$1,owner__$3,map__22639__$2,map__22641__$2,G__22636__$2,G__22614__$1,ks__$2,output_schema22610__$1,value__$2,G__22615__$1,input_checker22612__$1,date_STAR___$1,G__22637__$2,datepicker_i18n__$2,validate__12170__auto____$1,ch__$2,map__22640__$2,opts__$2,ufv____$1,meta22643));
});})(map__22640,map__22640__$1,value__$1,owner__$2,map__22641,map__22641__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22636,map__22638,map__22638__$1,value,owner,G__22637,map__22639,map__22639__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
;

}

return (new lomakkeet.datepicker.t22642(map__22638__$1,output_checker22613_22653,input_schema22611_22651,G__22616,owner__$2,map__22639__$1,map__22641__$1,G__22636__$1,G__22614,ks__$1,output_schema22610_22650,value__$1,G__22615,input_checker22612_22652,date_STAR_,G__22637__$1,datepicker_i18n__$1,validate__12170__auto__,ch__$1,map__22640__$1,opts__$1,ufv___22649,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22657 = (function (){var G__22648 = o__12173__auto__;
return (output_checker22613_22653.cljs$core$IFn$_invoke$arity$1 ? output_checker22613_22653.cljs$core$IFn$_invoke$arity$1(G__22648) : output_checker22613_22653.call(null,G__22648));
})();
if(cljs.core.truth_(temp__4126__auto___22657)){
var error__12172__auto___22658 = temp__4126__auto___22657;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22658], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22658,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22610_22650,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___22649,output_schema22610_22650,input_schema22611_22651,input_checker22612_22652,output_checker22613_22653))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.datepicker.date_STAR_),schema.core.make_fn_schema(output_schema22610_22650,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22611_22651], null)));

lomakkeet.datepicker.__GT_date_STAR_ = (function() {
var __GT_date_STAR_ = null;
var __GT_date_STAR___1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.datepicker.date_STAR_,cursor__20405__auto__);
});
var __GT_date_STAR___2 = (function (cursor__20405__auto__,m22609){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.datepicker.date_STAR_,cursor__20405__auto__,m22609);
});
__GT_date_STAR_ = function(cursor__20405__auto__,m22609){
switch(arguments.length){
case 1:
return __GT_date_STAR___1.call(this,cursor__20405__auto__);
case 2:
return __GT_date_STAR___2.call(this,cursor__20405__auto__,m22609);
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
var date__delegate = function (form,label,ks,p__22659){
var vec__22661 = p__22659;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22661,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null),(cljs.core.truth_(cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$122,lomakkeet.fields.emptyable_input,cljs.core.constant$keyword$147,lomakkeet.datepicker.date_STAR_], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,lomakkeet.datepicker.date_STAR_], null))], 0)));
};
var date = function (form,label,ks,var_args){
var p__22659 = null;
if (arguments.length > 3) {
var G__22662__i = 0, G__22662__a = new Array(arguments.length -  3);
while (G__22662__i < G__22662__a.length) {G__22662__a[G__22662__i] = arguments[G__22662__i + 3]; ++G__22662__i;}
  p__22659 = new cljs.core.IndexedSeq(G__22662__a,0);
} 
return date__delegate.call(this,form,label,ks,p__22659);};
date.cljs$lang$maxFixedArity = 3;
date.cljs$lang$applyTo = (function (arglist__22663){
var form = cljs.core.first(arglist__22663);
arglist__22663 = cljs.core.next(arglist__22663);
var label = cljs.core.first(arglist__22663);
arglist__22663 = cljs.core.next(arglist__22663);
var ks = cljs.core.first(arglist__22663);
var p__22659 = cljs.core.rest(arglist__22663);
return date__delegate(form,label,ks,p__22659);
});
date.cljs$core$IFn$_invoke$arity$variadic = date__delegate;
return date;
})()
;
