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
var G__22524 = (new goog.date.Date());
G__22524.setYear(v.getFullYear());

G__22524.setMonth(v.getMonth());

G__22524.setDate(v.getDate());

return G__22524;
} else {
return null;
}
});
lomakkeet.datepicker.local_date__GT_jsdate = (function local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__22526 = (new Date());
G__22526.setYear(v.getFullYear());

G__22526.setMonth(v.getMonth());

G__22526.setDate(v.getDate());

G__22526.setHours((0));

G__22526.setMinutes((0));

G__22526.setSeconds((0));

return G__22526;
} else {
return null;
}
});
lomakkeet.datepicker.date__GT_str = (function date__GT_str(v){
if(cljs.core.truth_(v)){
var G__22531 = "%d.%d.%d";
var G__22532 = v.getDate();
var G__22533 = (v.getMonth() + (1));
var G__22534 = v.getFullYear();
return goog.string.format(G__22531,G__22532,G__22533,G__22534);
} else {
return null;
}
});
lomakkeet.datepicker.set_limit_date = (function set_limit_date(k,owner){
var el = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$160);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$193,"setMinDate",cljs.core.constant$keyword$194,"setMaxDate"], null),k);
var v = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,k);
if(cljs.core.truth_(v)){
return (el[fn_name]).call(el,v);
} else {
return null;
}
});

var ufv___22573 = schema.utils.use_fn_validation;
var output_schema22536_22574 = schema.core.Any;
var input_schema22537_22575 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22538_22576 = schema.core.checker(input_schema22537_22575);
var output_checker22539_22577 = schema.core.checker(output_schema22536_22574);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks datepicker-i18n], :as opts}]
*/
lomakkeet.datepicker.date_STAR_ = ((function (ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577){
return (function date_STAR_(G__22540,G__22541,G__22542){
var validate__12581__auto__ = ufv___22573.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22578 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22540,G__22541,G__22542], null);
var temp__4126__auto___22579 = (function (){var G__22558 = args__12582__auto___22578;
return (input_checker22538_22576.cljs$core$IFn$_invoke$arity$1 ? input_checker22538_22576.cljs$core$IFn$_invoke$arity$1(G__22558) : input_checker22538_22576.call(null,G__22558));
})();
if(cljs.core.truth_(temp__4126__auto___22579)){
var error__12583__auto___22580 = temp__4126__auto___22579;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22580], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22580,cljs.core.constant$keyword$66,args__12582__auto___22578,cljs.core.constant$keyword$67,input_schema22537_22575,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__22561 = G__22540;
var map__22563 = G__22561;
var map__22563__$1 = ((cljs.core.seq_QMARK_(map__22563))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22563):map__22563);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,cljs.core.constant$keyword$66);
var owner = G__22541;
var G__22562 = G__22542;
var map__22564 = G__22562;
var map__22564__$1 = ((cljs.core.seq_QMARK_(map__22564))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22564):map__22564);
var opts = map__22564__$1;
var datepicker_i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,cljs.core.constant$keyword$195);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,cljs.core.constant$keyword$147);
var G__22561__$1 = G__22561;
var owner__$1 = owner;
var G__22562__$1 = G__22562;
while(true){
var map__22565 = G__22561__$1;
var map__22565__$1 = ((cljs.core.seq_QMARK_(map__22565))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22565):map__22565);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22565__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22566 = G__22562__$1;
var map__22566__$1 = ((cljs.core.seq_QMARK_(map__22566))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22566):map__22566);
var opts__$1 = map__22566__$1;
var datepicker_i18n__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22566__$1,cljs.core.constant$keyword$195);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22566__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22566__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.datepicker.t22567 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.datepicker.t22567 = (function (output_checker22539,map__22563,owner,validate__12581__auto__,G__22562,map__22564,G__22541,ks,map__22565,value,date_STAR_,datepicker_i18n,G__22542,ch,G__22540,input_checker22538,input_schema22537,G__22561,map__22566,opts,ufv__,output_schema22536,meta22568){
this.output_checker22539 = output_checker22539;
this.map__22563 = map__22563;
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.G__22562 = G__22562;
this.map__22564 = map__22564;
this.G__22541 = G__22541;
this.ks = ks;
this.map__22565 = map__22565;
this.value = value;
this.date_STAR_ = date_STAR_;
this.datepicker_i18n = datepicker_i18n;
this.G__22542 = G__22542;
this.ch = ch;
this.G__22540 = G__22540;
this.input_checker22538 = input_checker22538;
this.input_schema22537 = input_schema22537;
this.G__22561 = G__22561;
this.map__22566 = map__22566;
this.opts = opts;
this.ufv__ = ufv__;
this.output_schema22536 = output_schema22536;
this.meta22568 = meta22568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.datepicker.t22567.prototype.om$core$IDisplayName$ = true;

lomakkeet.datepicker.t22567.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577){
return (function (_){
var self__ = this;
var ___$1 = this;
return "date*";
});})(map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577))
;

lomakkeet.datepicker.t22567.prototype.om$core$IRender$ = true;

lomakkeet.datepicker.t22567.prototype.om$core$IRender$render$arity$1 = ((function (map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22570 = {"className": "form-control", "ref": "input", "type": "text", "value": (function (){var or__4251__auto__ = lomakkeet.datepicker.date__GT_str(self__.value);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return "";
}
})()};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22570) : sablono.interpreter.input.call(null,G__22570));
});})(map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577))
;

lomakkeet.datepicker.t22567.prototype.om$core$IDidUpdate$ = true;

lomakkeet.datepicker.t22567.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577){
return (function (_,prev,___$1){
var self__ = this;
var ___$2 = this;
var props = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(prev))){
lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$193,self__.owner);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(prev))){
return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$194,self__.owner);
} else {
return null;
}
});})(map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577))
;

lomakkeet.datepicker.t22567.prototype.om$core$IDidMount$ = true;

lomakkeet.datepicker.t22567.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577){
return (function (_){
var self__ = this;
var ___$1 = this;
var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"input");
var el = (new Pikaday(cljs.core.clj__GT_js((function (){var G__22571 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$196,input,cljs.core.constant$keyword$197,"D.M.YYYY",cljs.core.constant$keyword$198,(1),cljs.core.constant$keyword$199,((function (input,___$1,map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577){
return (function (v){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,lomakkeet.datepicker.jsdate__GT_local_date(v)], null));
});})(input,___$1,map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577))
], null);
var G__22571__$1 = (cljs.core.truth_(self__.datepicker_i18n)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22571,cljs.core.constant$keyword$200,self__.datepicker_i18n):G__22571);
return G__22571__$1;
})())));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$160,el);

lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$193,self__.owner);

return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$194,self__.owner);
});})(map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577))
;

lomakkeet.datepicker.t22567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577){
return (function (_22569){
var self__ = this;
var _22569__$1 = this;
return self__.meta22568;
});})(map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577))
;

lomakkeet.datepicker.t22567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577){
return (function (_22569,meta22568__$1){
var self__ = this;
var _22569__$1 = this;
return (new lomakkeet.datepicker.t22567(self__.output_checker22539,self__.map__22563,self__.owner,self__.validate__12581__auto__,self__.G__22562,self__.map__22564,self__.G__22541,self__.ks,self__.map__22565,self__.value,self__.date_STAR_,self__.datepicker_i18n,self__.G__22542,self__.ch,self__.G__22540,self__.input_checker22538,self__.input_schema22537,self__.G__22561,self__.map__22566,self__.opts,self__.ufv__,self__.output_schema22536,meta22568__$1));
});})(map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577))
;

lomakkeet.datepicker.t22567.cljs$lang$type = true;

lomakkeet.datepicker.t22567.cljs$lang$ctorStr = "lomakkeet.datepicker/t22567";

lomakkeet.datepicker.t22567.cljs$lang$ctorPrWriter = ((function (map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.datepicker/t22567");
});})(map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577))
;

lomakkeet.datepicker.__GT_t22567 = ((function (map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577){
return (function __GT_t22567(output_checker22539__$1,map__22563__$2,owner__$3,validate__12581__auto____$1,G__22562__$2,map__22564__$2,G__22541__$1,ks__$2,map__22565__$2,value__$2,date_STAR___$1,datepicker_i18n__$2,G__22542__$1,ch__$2,G__22540__$1,input_checker22538__$1,input_schema22537__$1,G__22561__$2,map__22566__$2,opts__$2,ufv____$1,output_schema22536__$1,meta22568){
return (new lomakkeet.datepicker.t22567(output_checker22539__$1,map__22563__$2,owner__$3,validate__12581__auto____$1,G__22562__$2,map__22564__$2,G__22541__$1,ks__$2,map__22565__$2,value__$2,date_STAR___$1,datepicker_i18n__$2,G__22542__$1,ch__$2,G__22540__$1,input_checker22538__$1,input_schema22537__$1,G__22561__$2,map__22566__$2,opts__$2,ufv____$1,output_schema22536__$1,meta22568));
});})(map__22565,map__22565__$1,value__$1,owner__$2,map__22566,map__22566__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22561,map__22563,map__22563__$1,value,owner,G__22562,map__22564,map__22564__$1,opts,datepicker_i18n,ks,ch,validate__12581__auto__,ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577))
;

}

return (new lomakkeet.datepicker.t22567(output_checker22539_22577,map__22563__$1,owner__$2,validate__12581__auto__,G__22562__$1,map__22564__$1,G__22541,ks__$1,map__22565__$1,value__$1,date_STAR_,datepicker_i18n__$1,G__22542,ch__$1,G__22540,input_checker22538_22576,input_schema22537_22575,G__22561__$1,map__22566__$1,opts__$1,ufv___22573,output_schema22536_22574,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22581 = (function (){var G__22572 = o__12584__auto__;
return (output_checker22539_22577.cljs$core$IFn$_invoke$arity$1 ? output_checker22539_22577.cljs$core$IFn$_invoke$arity$1(G__22572) : output_checker22539_22577.call(null,G__22572));
})();
if(cljs.core.truth_(temp__4126__auto___22581)){
var error__12583__auto___22582 = temp__4126__auto___22581;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22582], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22582,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22536_22574,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22573,output_schema22536_22574,input_schema22537_22575,input_checker22538_22576,output_checker22539_22577))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.datepicker.date_STAR_),schema.core.make_fn_schema(output_schema22536_22574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22537_22575], null)));

lomakkeet.datepicker.__GT_date_STAR_ = (function() {
var __GT_date_STAR_ = null;
var __GT_date_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.datepicker.date_STAR_,cursor__20832__auto__);
});
var __GT_date_STAR___2 = (function (cursor__20832__auto__,m22535){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.datepicker.date_STAR_,cursor__20832__auto__,m22535);
});
__GT_date_STAR_ = function(cursor__20832__auto__,m22535){
switch(arguments.length){
case 1:
return __GT_date_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_date_STAR___2.call(this,cursor__20832__auto__,m22535);
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
var date__delegate = function (form,label,ks,p__22583){
var vec__22585 = p__22583;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22585,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null),(cljs.core.truth_(cljs.core.constant$keyword$201.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,lomakkeet.fields.emptyable_input,cljs.core.constant$keyword$149,lomakkeet.datepicker.date_STAR_], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,lomakkeet.datepicker.date_STAR_], null))], 0)));
};
var date = function (form,label,ks,var_args){
var p__22583 = null;
if (arguments.length > 3) {
var G__22586__i = 0, G__22586__a = new Array(arguments.length -  3);
while (G__22586__i < G__22586__a.length) {G__22586__a[G__22586__i] = arguments[G__22586__i + 3]; ++G__22586__i;}
  p__22583 = new cljs.core.IndexedSeq(G__22586__a,0);
} 
return date__delegate.call(this,form,label,ks,p__22583);};
date.cljs$lang$maxFixedArity = 3;
date.cljs$lang$applyTo = (function (arglist__22587){
var form = cljs.core.first(arglist__22587);
arglist__22587 = cljs.core.next(arglist__22587);
var label = cljs.core.first(arglist__22587);
arglist__22587 = cljs.core.next(arglist__22587);
var ks = cljs.core.first(arglist__22587);
var p__22583 = cljs.core.rest(arglist__22587);
return date__delegate(form,label,ks,p__22583);
});
date.cljs$core$IFn$_invoke$arity$variadic = date__delegate;
return date;
})()
;
