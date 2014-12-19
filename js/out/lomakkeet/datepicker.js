// Compiled by ClojureScript 0.0-2496
goog.provide('lomakkeet.datepicker');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('lomakkeet.fields');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('om.core');
lomakkeet.datepicker.pikaday_i18n = {"weekdaysShort": ["Su","Ma","Ti","Ke","To","Pe","La"], "weekdays": ["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"], "months": ["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kes\u00E4kuu","Hein\u00E4kuu","Elokuu","Elokuu","Lokakuu","Marraskuu","Joulukuu"], "nextMonth": "Seuraava kuukausi", "previousMonth": "Edellinen kuukakausi"};
lomakkeet.datepicker.jsdate__GT_local_date = (function jsdate__GT_local_date(v){
if(cljs.core.truth_(v)){
var G__20832 = (new goog.date.Date());
G__20832.setYear(v.getFullYear());

G__20832.setMonth(v.getMonth());

G__20832.setDate(v.getDate());

return G__20832;
} else {
return null;
}
});
lomakkeet.datepicker.local_date__GT_jsdate = (function local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__20834 = (new Date());
G__20834.setYear(v.getFullYear());

G__20834.setMonth(v.getMonth());

G__20834.setDate(v.getDate());

G__20834.setHours((0));

G__20834.setMinutes((0));

G__20834.setSeconds((0));

return G__20834;
} else {
return null;
}
});
lomakkeet.datepicker.date__GT_str = (function date__GT_str(v){
if(cljs.core.truth_(v)){
var G__20839 = "%d.%d.%d";
var G__20840 = v.getDate();
var G__20841 = (v.getMonth() + (1));
var G__20842 = v.getFullYear();
return goog.string.format(G__20839,G__20840,G__20841,G__20842);
} else {
return null;
}
});
lomakkeet.datepicker.set_limit_date = (function set_limit_date(k,owner){
var el = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$158);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$166,"setMinDate",cljs.core.constant$keyword$167,"setMaxDate"], null),k);
var v = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,k);
if(cljs.core.truth_(v)){
return (el[fn_name]).call(el,v);
} else {
return null;
}
});

var ufv___20879 = schema.utils.use_fn_validation;
var output_schema20844_20880 = schema.core.Any;
var input_schema20845_20881 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker20846_20882 = schema.core.checker(input_schema20845_20881);
var output_checker20847_20883 = schema.core.checker(output_schema20844_20880);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks], :as opts}]
*/
lomakkeet.datepicker.date_STAR_ = ((function (ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883){
return (function date_STAR_(G__20848,G__20849,G__20850){
var validate__6096__auto__ = ufv___20879.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___20884 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20848,G__20849,G__20850], null);
var temp__4126__auto___20885 = (function (){var G__20865 = args__6097__auto___20884;
return (input_checker20846_20882.cljs$core$IFn$_invoke$arity$1 ? input_checker20846_20882.cljs$core$IFn$_invoke$arity$1(G__20865) : input_checker20846_20882.call(null,G__20865));
})();
if(cljs.core.truth_(temp__4126__auto___20885)){
var error__6098__auto___20886 = temp__4126__auto___20885;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___20886], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___20886,cljs.core.constant$keyword$23,args__6097__auto___20884,cljs.core.constant$keyword$24,input_schema20845_20881,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__20868 = G__20848;
var map__20870 = G__20868;
var map__20870__$1 = ((cljs.core.seq_QMARK_(map__20870))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20870):map__20870);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20870__$1,cljs.core.constant$keyword$23);
var owner = G__20849;
var G__20869 = G__20850;
var map__20871 = G__20869;
var map__20871__$1 = ((cljs.core.seq_QMARK_(map__20871))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20871):map__20871);
var opts = map__20871__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20871__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20871__$1,cljs.core.constant$keyword$145);
var G__20868__$1 = G__20868;
var owner__$1 = owner;
var G__20869__$1 = G__20869;
while(true){
var map__20872 = G__20868__$1;
var map__20872__$1 = ((cljs.core.seq_QMARK_(map__20872))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20872):map__20872);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20872__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__20873 = G__20869__$1;
var map__20873__$1 = ((cljs.core.seq_QMARK_(map__20873))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20873):map__20873);
var opts__$1 = map__20873__$1;
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20873__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20873__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.datepicker.t20874 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.datepicker.t20874 = (function (map__20872,G__20868,G__20848,owner,G__20849,output_schema20844,output_checker20847,ks,validate__6096__auto__,map__20871,value,date_STAR_,input_checker20846,input_schema20845,G__20850,ch,map__20873,opts,ufv__,G__20869,map__20870,meta20875){
this.map__20872 = map__20872;
this.G__20868 = G__20868;
this.G__20848 = G__20848;
this.owner = owner;
this.G__20849 = G__20849;
this.output_schema20844 = output_schema20844;
this.output_checker20847 = output_checker20847;
this.ks = ks;
this.validate__6096__auto__ = validate__6096__auto__;
this.map__20871 = map__20871;
this.value = value;
this.date_STAR_ = date_STAR_;
this.input_checker20846 = input_checker20846;
this.input_schema20845 = input_schema20845;
this.G__20850 = G__20850;
this.ch = ch;
this.map__20873 = map__20873;
this.opts = opts;
this.ufv__ = ufv__;
this.G__20869 = G__20869;
this.map__20870 = map__20870;
this.meta20875 = meta20875;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.datepicker.t20874.prototype.om$core$IDisplayName$ = true;

lomakkeet.datepicker.t20874.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883){
return (function (_){
var self__ = this;
var ___$1 = this;
return "date*";
});})(map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883))
;

lomakkeet.datepicker.t20874.prototype.om$core$IRender$ = true;

lomakkeet.datepicker.t20874.prototype.om$core$IRender$render$arity$1 = ((function (map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20877 = {"className": "form-control", "ref": "input", "type": "text", "value": (function (){var or__3628__auto__ = lomakkeet.datepicker.date__GT_str(self__.value);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return "";
}
})()};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__20877) : sablono.interpreter.input.call(null,G__20877));
});})(map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883))
;

lomakkeet.datepicker.t20874.prototype.om$core$IDidUpdate$ = true;

lomakkeet.datepicker.t20874.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883){
return (function (_,prev,___$1){
var self__ = this;
var ___$2 = this;
var props = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(prev))){
lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$166,self__.owner);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(prev))){
return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$167,self__.owner);
} else {
return null;
}
});})(map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883))
;

lomakkeet.datepicker.t20874.prototype.om$core$IDidMount$ = true;

lomakkeet.datepicker.t20874.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883){
return (function (_){
var self__ = this;
var ___$1 = this;
var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"input");
var el = (new Pikaday({"i18n": lomakkeet.datepicker.pikaday_i18n, "onSelect": ((function (input,___$1,map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883){
return (function (v){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$23,lomakkeet.datepicker.jsdate__GT_local_date(v)], null));
});})(input,___$1,map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883))
, "firstDay": (1), "format": "D.M.YYYY", "field": input}));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$158,el);

lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$166,self__.owner);

return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$167,self__.owner);
});})(map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883))
;

lomakkeet.datepicker.t20874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883){
return (function (_20876){
var self__ = this;
var _20876__$1 = this;
return self__.meta20875;
});})(map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883))
;

lomakkeet.datepicker.t20874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883){
return (function (_20876,meta20875__$1){
var self__ = this;
var _20876__$1 = this;
return (new lomakkeet.datepicker.t20874(self__.map__20872,self__.G__20868,self__.G__20848,self__.owner,self__.G__20849,self__.output_schema20844,self__.output_checker20847,self__.ks,self__.validate__6096__auto__,self__.map__20871,self__.value,self__.date_STAR_,self__.input_checker20846,self__.input_schema20845,self__.G__20850,self__.ch,self__.map__20873,self__.opts,self__.ufv__,self__.G__20869,self__.map__20870,meta20875__$1));
});})(map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883))
;

lomakkeet.datepicker.t20874.cljs$lang$type = true;

lomakkeet.datepicker.t20874.cljs$lang$ctorStr = "lomakkeet.datepicker/t20874";

lomakkeet.datepicker.t20874.cljs$lang$ctorPrWriter = ((function (map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.datepicker/t20874");
});})(map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883))
;

lomakkeet.datepicker.__GT_t20874 = ((function (map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883){
return (function __GT_t20874(map__20872__$2,G__20868__$2,G__20848__$1,owner__$3,G__20849__$1,output_schema20844__$1,output_checker20847__$1,ks__$2,validate__6096__auto____$1,map__20871__$2,value__$2,date_STAR___$1,input_checker20846__$1,input_schema20845__$1,G__20850__$1,ch__$2,map__20873__$2,opts__$2,ufv____$1,G__20869__$2,map__20870__$2,meta20875){
return (new lomakkeet.datepicker.t20874(map__20872__$2,G__20868__$2,G__20848__$1,owner__$3,G__20849__$1,output_schema20844__$1,output_checker20847__$1,ks__$2,validate__6096__auto____$1,map__20871__$2,value__$2,date_STAR___$1,input_checker20846__$1,input_schema20845__$1,G__20850__$1,ch__$2,map__20873__$2,opts__$2,ufv____$1,G__20869__$2,map__20870__$2,meta20875));
});})(map__20872,map__20872__$1,value__$1,owner__$2,map__20873,map__20873__$1,opts__$1,ks__$1,ch__$1,G__20868,map__20870,map__20870__$1,value,owner,G__20869,map__20871,map__20871__$1,opts,ks,ch,validate__6096__auto__,ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883))
;

}

return (new lomakkeet.datepicker.t20874(map__20872__$1,G__20868__$1,G__20848,owner__$2,G__20849,output_schema20844_20880,output_checker20847_20883,ks__$1,validate__6096__auto__,map__20871__$1,value__$1,date_STAR_,input_checker20846_20882,input_schema20845_20881,G__20850,ch__$1,map__20873__$1,opts__$1,ufv___20879,G__20869__$1,map__20870__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___20887 = (function (){var G__20878 = o__6099__auto__;
return (output_checker20847_20883.cljs$core$IFn$_invoke$arity$1 ? output_checker20847_20883.cljs$core$IFn$_invoke$arity$1(G__20878) : output_checker20847_20883.call(null,G__20878));
})();
if(cljs.core.truth_(temp__4126__auto___20887)){
var error__6098__auto___20888 = temp__4126__auto___20887;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___20888], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___20888,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema20844_20880,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___20879,output_schema20844_20880,input_schema20845_20881,input_checker20846_20882,output_checker20847_20883))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.datepicker.date_STAR_),schema.core.make_fn_schema(output_schema20844_20880,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20845_20881], null)));

lomakkeet.datepicker.__GT_date_STAR_ = (function() {
var __GT_date_STAR_ = null;
var __GT_date_STAR___1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.datepicker.date_STAR_,cursor__7890__auto__);
});
var __GT_date_STAR___2 = (function (cursor__7890__auto__,m20843){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.datepicker.date_STAR_,cursor__7890__auto__,m20843);
});
__GT_date_STAR_ = function(cursor__7890__auto__,m20843){
switch(arguments.length){
case 1:
return __GT_date_STAR___1.call(this,cursor__7890__auto__);
case 2:
return __GT_date_STAR___2.call(this,cursor__7890__auto__,m20843);
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
var date__delegate = function (form,label,ks,p__20889){
var vec__20891 = p__20889;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20891,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null),(cljs.core.truth_(cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$122,lomakkeet.fields.emptyable_input,cljs.core.constant$keyword$147,lomakkeet.datepicker.date_STAR_], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,lomakkeet.datepicker.date_STAR_], null))], 0)));
};
var date = function (form,label,ks,var_args){
var p__20889 = null;
if (arguments.length > 3) {
  p__20889 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return date__delegate.call(this,form,label,ks,p__20889);};
date.cljs$lang$maxFixedArity = 3;
date.cljs$lang$applyTo = (function (arglist__20892){
var form = cljs.core.first(arglist__20892);
arglist__20892 = cljs.core.next(arglist__20892);
var label = cljs.core.first(arglist__20892);
arglist__20892 = cljs.core.next(arglist__20892);
var ks = cljs.core.first(arglist__20892);
var p__20889 = cljs.core.rest(arglist__20892);
return date__delegate(form,label,ks,p__20889);
});
date.cljs$core$IFn$_invoke$arity$variadic = date__delegate;
return date;
})()
;
