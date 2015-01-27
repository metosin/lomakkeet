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
var G__22117 = (new goog.date.Date());
G__22117.setYear(v.getFullYear());

G__22117.setMonth(v.getMonth());

G__22117.setDate(v.getDate());

return G__22117;
} else {
return null;
}
});
lomakkeet.datepicker.local_date__GT_jsdate = (function local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__22119 = (new Date());
G__22119.setYear(v.getFullYear());

G__22119.setMonth(v.getMonth());

G__22119.setDate(v.getDate());

G__22119.setHours((0));

G__22119.setMinutes((0));

G__22119.setSeconds((0));

return G__22119;
} else {
return null;
}
});
lomakkeet.datepicker.date__GT_str = (function date__GT_str(v){
if(cljs.core.truth_(v)){
var G__22124 = "%d.%d.%d";
var G__22125 = v.getDate();
var G__22126 = (v.getMonth() + (1));
var G__22127 = v.getFullYear();
return goog.string.format(G__22124,G__22125,G__22126,G__22127);
} else {
return null;
}
});
lomakkeet.datepicker.set_limit_date = (function set_limit_date(k,owner){
var el = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$160);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$197,"setMinDate",cljs.core.constant$keyword$198,"setMaxDate"], null),k);
var v = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,k);
if(cljs.core.truth_(v)){
return (el[fn_name]).call(el,v);
} else {
return null;
}
});

var ufv___22166 = schema.utils.use_fn_validation;
var output_schema22129_22167 = schema.core.Any;
var input_schema22130_22168 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22131_22169 = schema.core.checker(input_schema22130_22168);
var output_checker22132_22170 = schema.core.checker(output_schema22129_22167);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks datepicker-i18n], :as opts}]
*/
lomakkeet.datepicker.date_STAR_ = ((function (ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170){
return (function date_STAR_(G__22133,G__22134,G__22135){
var validate__12088__auto__ = ufv___22166.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___22171 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22133,G__22134,G__22135], null);
var temp__4126__auto___22172 = (function (){var G__22151 = args__12089__auto___22171;
return (input_checker22131_22169.cljs$core$IFn$_invoke$arity$1 ? input_checker22131_22169.cljs$core$IFn$_invoke$arity$1(G__22151) : input_checker22131_22169.call(null,G__22151));
})();
if(cljs.core.truth_(temp__4126__auto___22172)){
var error__12090__auto___22173 = temp__4126__auto___22172;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22173], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22173,cljs.core.constant$keyword$66,args__12089__auto___22171,cljs.core.constant$keyword$67,input_schema22130_22168,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var G__22154 = G__22133;
var map__22156 = G__22154;
var map__22156__$1 = ((cljs.core.seq_QMARK_(map__22156))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22156):map__22156);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22156__$1,cljs.core.constant$keyword$66);
var owner = G__22134;
var G__22155 = G__22135;
var map__22157 = G__22155;
var map__22157__$1 = ((cljs.core.seq_QMARK_(map__22157))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22157):map__22157);
var opts = map__22157__$1;
var datepicker_i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22157__$1,cljs.core.constant$keyword$199);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22157__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22157__$1,cljs.core.constant$keyword$147);
var G__22154__$1 = G__22154;
var owner__$1 = owner;
var G__22155__$1 = G__22155;
while(true){
var map__22158 = G__22154__$1;
var map__22158__$1 = ((cljs.core.seq_QMARK_(map__22158))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22158):map__22158);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22158__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22159 = G__22155__$1;
var map__22159__$1 = ((cljs.core.seq_QMARK_(map__22159))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22159):map__22159);
var opts__$1 = map__22159__$1;
var datepicker_i18n__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22159__$1,cljs.core.constant$keyword$199);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22159__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22159__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.datepicker.t22160 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.datepicker.t22160 = (function (G__22133,G__22155,owner,map__22158,validate__12088__auto__,map__22157,output_schema22129,ks,map__22156,value,date_STAR_,datepicker_i18n,input_schema22130,map__22159,G__22154,ch,input_checker22131,G__22135,output_checker22132,opts,ufv__,G__22134,meta22161){
this.G__22133 = G__22133;
this.G__22155 = G__22155;
this.owner = owner;
this.map__22158 = map__22158;
this.validate__12088__auto__ = validate__12088__auto__;
this.map__22157 = map__22157;
this.output_schema22129 = output_schema22129;
this.ks = ks;
this.map__22156 = map__22156;
this.value = value;
this.date_STAR_ = date_STAR_;
this.datepicker_i18n = datepicker_i18n;
this.input_schema22130 = input_schema22130;
this.map__22159 = map__22159;
this.G__22154 = G__22154;
this.ch = ch;
this.input_checker22131 = input_checker22131;
this.G__22135 = G__22135;
this.output_checker22132 = output_checker22132;
this.opts = opts;
this.ufv__ = ufv__;
this.G__22134 = G__22134;
this.meta22161 = meta22161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.datepicker.t22160.prototype.om$core$IDisplayName$ = true;

lomakkeet.datepicker.t22160.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170){
return (function (_){
var self__ = this;
var ___$1 = this;
return "date*";
});})(map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170))
;

lomakkeet.datepicker.t22160.prototype.om$core$IRender$ = true;

lomakkeet.datepicker.t22160.prototype.om$core$IRender$render$arity$1 = ((function (map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22163 = {"className": "form-control", "ref": "input", "type": "text", "value": (function (){var or__3758__auto__ = lomakkeet.datepicker.date__GT_str(self__.value);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return "";
}
})(), "autoComplete": false};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22163) : sablono.interpreter.input.call(null,G__22163));
});})(map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170))
;

lomakkeet.datepicker.t22160.prototype.om$core$IDidUpdate$ = true;

lomakkeet.datepicker.t22160.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170){
return (function (_,prev,___$1){
var self__ = this;
var ___$2 = this;
var props = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(prev))){
lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$197,self__.owner);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(prev))){
return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$198,self__.owner);
} else {
return null;
}
});})(map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170))
;

lomakkeet.datepicker.t22160.prototype.om$core$IDidMount$ = true;

lomakkeet.datepicker.t22160.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170){
return (function (_){
var self__ = this;
var ___$1 = this;
var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"input");
var el = (new Pikaday(cljs.core.clj__GT_js((function (){var G__22164 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$200,input,cljs.core.constant$keyword$201,"D.M.YYYY",cljs.core.constant$keyword$202,(1),cljs.core.constant$keyword$203,((function (input,___$1,map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170){
return (function (v){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,lomakkeet.datepicker.jsdate__GT_local_date(v)], null));
});})(input,___$1,map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170))
], null);
var G__22164__$1 = (cljs.core.truth_(self__.datepicker_i18n)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22164,cljs.core.constant$keyword$204,self__.datepicker_i18n):G__22164);
return G__22164__$1;
})())));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$160,el);

lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$197,self__.owner);

return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$198,self__.owner);
});})(map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170))
;

lomakkeet.datepicker.t22160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170){
return (function (_22162){
var self__ = this;
var _22162__$1 = this;
return self__.meta22161;
});})(map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170))
;

lomakkeet.datepicker.t22160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170){
return (function (_22162,meta22161__$1){
var self__ = this;
var _22162__$1 = this;
return (new lomakkeet.datepicker.t22160(self__.G__22133,self__.G__22155,self__.owner,self__.map__22158,self__.validate__12088__auto__,self__.map__22157,self__.output_schema22129,self__.ks,self__.map__22156,self__.value,self__.date_STAR_,self__.datepicker_i18n,self__.input_schema22130,self__.map__22159,self__.G__22154,self__.ch,self__.input_checker22131,self__.G__22135,self__.output_checker22132,self__.opts,self__.ufv__,self__.G__22134,meta22161__$1));
});})(map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170))
;

lomakkeet.datepicker.t22160.cljs$lang$type = true;

lomakkeet.datepicker.t22160.cljs$lang$ctorStr = "lomakkeet.datepicker/t22160";

lomakkeet.datepicker.t22160.cljs$lang$ctorPrWriter = ((function (map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.datepicker/t22160");
});})(map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170))
;

lomakkeet.datepicker.__GT_t22160 = ((function (map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170){
return (function __GT_t22160(G__22133__$1,G__22155__$2,owner__$3,map__22158__$2,validate__12088__auto____$1,map__22157__$2,output_schema22129__$1,ks__$2,map__22156__$2,value__$2,date_STAR___$1,datepicker_i18n__$2,input_schema22130__$1,map__22159__$2,G__22154__$2,ch__$2,input_checker22131__$1,G__22135__$1,output_checker22132__$1,opts__$2,ufv____$1,G__22134__$1,meta22161){
return (new lomakkeet.datepicker.t22160(G__22133__$1,G__22155__$2,owner__$3,map__22158__$2,validate__12088__auto____$1,map__22157__$2,output_schema22129__$1,ks__$2,map__22156__$2,value__$2,date_STAR___$1,datepicker_i18n__$2,input_schema22130__$1,map__22159__$2,G__22154__$2,ch__$2,input_checker22131__$1,G__22135__$1,output_checker22132__$1,opts__$2,ufv____$1,G__22134__$1,meta22161));
});})(map__22158,map__22158__$1,value__$1,owner__$2,map__22159,map__22159__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22154,map__22156,map__22156__$1,value,owner,G__22155,map__22157,map__22157__$1,opts,datepicker_i18n,ks,ch,validate__12088__auto__,ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170))
;

}

return (new lomakkeet.datepicker.t22160(G__22133,G__22155__$1,owner__$2,map__22158__$1,validate__12088__auto__,map__22157__$1,output_schema22129_22167,ks__$1,map__22156__$1,value__$1,date_STAR_,datepicker_i18n__$1,input_schema22130_22168,map__22159__$1,G__22154__$1,ch__$1,input_checker22131_22169,G__22135,output_checker22132_22170,opts__$1,ufv___22166,G__22134,null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___22174 = (function (){var G__22165 = o__12091__auto__;
return (output_checker22132_22170.cljs$core$IFn$_invoke$arity$1 ? output_checker22132_22170.cljs$core$IFn$_invoke$arity$1(G__22165) : output_checker22132_22170.call(null,G__22165));
})();
if(cljs.core.truth_(temp__4126__auto___22174)){
var error__12090__auto___22175 = temp__4126__auto___22174;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22175], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22175,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema22129_22167,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___22166,output_schema22129_22167,input_schema22130_22168,input_checker22131_22169,output_checker22132_22170))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.datepicker.date_STAR_),schema.core.make_fn_schema(output_schema22129_22167,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22130_22168], null)));

lomakkeet.datepicker.__GT_date_STAR_ = (function() {
var __GT_date_STAR_ = null;
var __GT_date_STAR___1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.datepicker.date_STAR_,cursor__20339__auto__);
});
var __GT_date_STAR___2 = (function (cursor__20339__auto__,m22128){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.datepicker.date_STAR_,cursor__20339__auto__,m22128);
});
__GT_date_STAR_ = function(cursor__20339__auto__,m22128){
switch(arguments.length){
case 1:
return __GT_date_STAR___1.call(this,cursor__20339__auto__);
case 2:
return __GT_date_STAR___2.call(this,cursor__20339__auto__,m22128);
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
var date__delegate = function (form,label,ks,p__22176){
var vec__22178 = p__22176;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22178,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null),(cljs.core.truth_(cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,lomakkeet.fields.emptyable_input,cljs.core.constant$keyword$149,lomakkeet.datepicker.date_STAR_], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,lomakkeet.datepicker.date_STAR_], null))], 0)));
};
var date = function (form,label,ks,var_args){
var p__22176 = null;
if (arguments.length > 3) {
var G__22179__i = 0, G__22179__a = new Array(arguments.length -  3);
while (G__22179__i < G__22179__a.length) {G__22179__a[G__22179__i] = arguments[G__22179__i + 3]; ++G__22179__i;}
  p__22176 = new cljs.core.IndexedSeq(G__22179__a,0);
} 
return date__delegate.call(this,form,label,ks,p__22176);};
date.cljs$lang$maxFixedArity = 3;
date.cljs$lang$applyTo = (function (arglist__22180){
var form = cljs.core.first(arglist__22180);
arglist__22180 = cljs.core.next(arglist__22180);
var label = cljs.core.first(arglist__22180);
arglist__22180 = cljs.core.next(arglist__22180);
var ks = cljs.core.first(arglist__22180);
var p__22176 = cljs.core.rest(arglist__22180);
return date__delegate(form,label,ks,p__22176);
});
date.cljs$core$IFn$_invoke$arity$variadic = date__delegate;
return date;
})()
;
