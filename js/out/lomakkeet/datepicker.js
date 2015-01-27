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
var G__22841 = (new goog.date.Date());
G__22841.setYear(v.getFullYear());

G__22841.setMonth(v.getMonth());

G__22841.setDate(v.getDate());

return G__22841;
} else {
return null;
}
});
lomakkeet.datepicker.local_date__GT_jsdate = (function local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__22843 = (new Date());
G__22843.setYear(v.getFullYear());

G__22843.setMonth(v.getMonth());

G__22843.setDate(v.getDate());

G__22843.setHours((0));

G__22843.setMinutes((0));

G__22843.setSeconds((0));

return G__22843;
} else {
return null;
}
});
lomakkeet.datepicker.date__GT_str = (function date__GT_str(v){
if(cljs.core.truth_(v)){
var G__22848 = "%d.%d.%d";
var G__22849 = v.getDate();
var G__22850 = (v.getMonth() + (1));
var G__22851 = v.getFullYear();
return goog.string.format(G__22848,G__22849,G__22850,G__22851);
} else {
return null;
}
});
lomakkeet.datepicker.set_limit_date = (function set_limit_date(k,owner){
var el = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$160);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$170,"setMinDate",cljs.core.constant$keyword$171,"setMaxDate"], null),k);
var v = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,k);
if(cljs.core.truth_(v)){
return (el[fn_name]).call(el,v);
} else {
return null;
}
});

var ufv___22890 = schema.utils.use_fn_validation;
var output_schema22853_22891 = schema.core.Any;
var input_schema22854_22892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22855_22893 = schema.core.checker(input_schema22854_22892);
var output_checker22856_22894 = schema.core.checker(output_schema22853_22891);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks datepicker-i18n], :as opts}]
*/
lomakkeet.datepicker.date_STAR_ = ((function (ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894){
return (function date_STAR_(G__22857,G__22858,G__22859){
var validate__10718__auto__ = ufv___22890.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___22895 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22857,G__22858,G__22859], null);
var temp__4126__auto___22896 = (function (){var G__22875 = args__10719__auto___22895;
return (input_checker22855_22893.cljs$core$IFn$_invoke$arity$1 ? input_checker22855_22893.cljs$core$IFn$_invoke$arity$1(G__22875) : input_checker22855_22893.call(null,G__22875));
})();
if(cljs.core.truth_(temp__4126__auto___22896)){
var error__10720__auto___22897 = temp__4126__auto___22896;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22897], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22897,cljs.core.constant$keyword$23,args__10719__auto___22895,cljs.core.constant$keyword$24,input_schema22854_22892,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var G__22878 = G__22857;
var map__22880 = G__22878;
var map__22880__$1 = ((cljs.core.seq_QMARK_(map__22880))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22880):map__22880);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22880__$1,cljs.core.constant$keyword$23);
var owner = G__22858;
var G__22879 = G__22859;
var map__22881 = G__22879;
var map__22881__$1 = ((cljs.core.seq_QMARK_(map__22881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22881):map__22881);
var opts = map__22881__$1;
var datepicker_i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881__$1,cljs.core.constant$keyword$172);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881__$1,cljs.core.constant$keyword$147);
var G__22878__$1 = G__22878;
var owner__$1 = owner;
var G__22879__$1 = G__22879;
while(true){
var map__22882 = G__22878__$1;
var map__22882__$1 = ((cljs.core.seq_QMARK_(map__22882))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22882):map__22882);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22882__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__22883 = G__22879__$1;
var map__22883__$1 = ((cljs.core.seq_QMARK_(map__22883))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22883):map__22883);
var opts__$1 = map__22883__$1;
var datepicker_i18n__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22883__$1,cljs.core.constant$keyword$172);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22883__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22883__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.datepicker.t22884 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.datepicker.t22884 = (function (map__22881,owner,G__22879,map__22883,ks,input_checker22855,output_schema22853,output_checker22856,value,date_STAR_,G__22859,datepicker_i18n,ch,map__22880,G__22857,G__22858,input_schema22854,G__22878,opts,ufv__,map__22882,validate__10718__auto__,meta22885){
this.map__22881 = map__22881;
this.owner = owner;
this.G__22879 = G__22879;
this.map__22883 = map__22883;
this.ks = ks;
this.input_checker22855 = input_checker22855;
this.output_schema22853 = output_schema22853;
this.output_checker22856 = output_checker22856;
this.value = value;
this.date_STAR_ = date_STAR_;
this.G__22859 = G__22859;
this.datepicker_i18n = datepicker_i18n;
this.ch = ch;
this.map__22880 = map__22880;
this.G__22857 = G__22857;
this.G__22858 = G__22858;
this.input_schema22854 = input_schema22854;
this.G__22878 = G__22878;
this.opts = opts;
this.ufv__ = ufv__;
this.map__22882 = map__22882;
this.validate__10718__auto__ = validate__10718__auto__;
this.meta22885 = meta22885;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.datepicker.t22884.prototype.om$core$IDisplayName$ = true;

lomakkeet.datepicker.t22884.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894){
return (function (_){
var self__ = this;
var ___$1 = this;
return "date*";
});})(map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894))
;

lomakkeet.datepicker.t22884.prototype.om$core$IRender$ = true;

lomakkeet.datepicker.t22884.prototype.om$core$IRender$render$arity$1 = ((function (map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22887 = {"className": "form-control", "ref": "input", "type": "text", "value": (function (){var or__3758__auto__ = lomakkeet.datepicker.date__GT_str(self__.value);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return "";
}
})()};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22887) : sablono.interpreter.input.call(null,G__22887));
});})(map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894))
;

lomakkeet.datepicker.t22884.prototype.om$core$IDidUpdate$ = true;

lomakkeet.datepicker.t22884.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894){
return (function (_,prev,___$1){
var self__ = this;
var ___$2 = this;
var props = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$170.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$170.cljs$core$IFn$_invoke$arity$1(prev))){
lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$170,self__.owner);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$171.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$171.cljs$core$IFn$_invoke$arity$1(prev))){
return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$171,self__.owner);
} else {
return null;
}
});})(map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894))
;

lomakkeet.datepicker.t22884.prototype.om$core$IDidMount$ = true;

lomakkeet.datepicker.t22884.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894){
return (function (_){
var self__ = this;
var ___$1 = this;
var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"input");
var el = (new Pikaday(cljs.core.clj__GT_js((function (){var G__22888 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$173,input,cljs.core.constant$keyword$174,"D.M.YYYY",cljs.core.constant$keyword$175,(1),cljs.core.constant$keyword$176,((function (input,___$1,map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894){
return (function (v){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$23,lomakkeet.datepicker.jsdate__GT_local_date(v)], null));
});})(input,___$1,map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894))
], null);
var G__22888__$1 = (cljs.core.truth_(self__.datepicker_i18n)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22888,cljs.core.constant$keyword$177,self__.datepicker_i18n):G__22888);
return G__22888__$1;
})())));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$160,el);

lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$170,self__.owner);

return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$171,self__.owner);
});})(map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894))
;

lomakkeet.datepicker.t22884.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894){
return (function (_22886){
var self__ = this;
var _22886__$1 = this;
return self__.meta22885;
});})(map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894))
;

lomakkeet.datepicker.t22884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894){
return (function (_22886,meta22885__$1){
var self__ = this;
var _22886__$1 = this;
return (new lomakkeet.datepicker.t22884(self__.map__22881,self__.owner,self__.G__22879,self__.map__22883,self__.ks,self__.input_checker22855,self__.output_schema22853,self__.output_checker22856,self__.value,self__.date_STAR_,self__.G__22859,self__.datepicker_i18n,self__.ch,self__.map__22880,self__.G__22857,self__.G__22858,self__.input_schema22854,self__.G__22878,self__.opts,self__.ufv__,self__.map__22882,self__.validate__10718__auto__,meta22885__$1));
});})(map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894))
;

lomakkeet.datepicker.t22884.cljs$lang$type = true;

lomakkeet.datepicker.t22884.cljs$lang$ctorStr = "lomakkeet.datepicker/t22884";

lomakkeet.datepicker.t22884.cljs$lang$ctorPrWriter = ((function (map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.datepicker/t22884");
});})(map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894))
;

lomakkeet.datepicker.__GT_t22884 = ((function (map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894){
return (function __GT_t22884(map__22881__$2,owner__$3,G__22879__$2,map__22883__$2,ks__$2,input_checker22855__$1,output_schema22853__$1,output_checker22856__$1,value__$2,date_STAR___$1,G__22859__$1,datepicker_i18n__$2,ch__$2,map__22880__$2,G__22857__$1,G__22858__$1,input_schema22854__$1,G__22878__$2,opts__$2,ufv____$1,map__22882__$2,validate__10718__auto____$1,meta22885){
return (new lomakkeet.datepicker.t22884(map__22881__$2,owner__$3,G__22879__$2,map__22883__$2,ks__$2,input_checker22855__$1,output_schema22853__$1,output_checker22856__$1,value__$2,date_STAR___$1,G__22859__$1,datepicker_i18n__$2,ch__$2,map__22880__$2,G__22857__$1,G__22858__$1,input_schema22854__$1,G__22878__$2,opts__$2,ufv____$1,map__22882__$2,validate__10718__auto____$1,meta22885));
});})(map__22882,map__22882__$1,value__$1,owner__$2,map__22883,map__22883__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22878,map__22880,map__22880__$1,value,owner,G__22879,map__22881,map__22881__$1,opts,datepicker_i18n,ks,ch,validate__10718__auto__,ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894))
;

}

return (new lomakkeet.datepicker.t22884(map__22881__$1,owner__$2,G__22879__$1,map__22883__$1,ks__$1,input_checker22855_22893,output_schema22853_22891,output_checker22856_22894,value__$1,date_STAR_,G__22859,datepicker_i18n__$1,ch__$1,map__22880__$1,G__22857,G__22858,input_schema22854_22892,G__22878__$1,opts__$1,ufv___22890,map__22882__$1,validate__10718__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___22898 = (function (){var G__22889 = o__10721__auto__;
return (output_checker22856_22894.cljs$core$IFn$_invoke$arity$1 ? output_checker22856_22894.cljs$core$IFn$_invoke$arity$1(G__22889) : output_checker22856_22894.call(null,G__22889));
})();
if(cljs.core.truth_(temp__4126__auto___22898)){
var error__10720__auto___22899 = temp__4126__auto___22898;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22899], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22899,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema22853_22891,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___22890,output_schema22853_22891,input_schema22854_22892,input_checker22855_22893,output_checker22856_22894))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.datepicker.date_STAR_),schema.core.make_fn_schema(output_schema22853_22891,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22854_22892], null)));

lomakkeet.datepicker.__GT_date_STAR_ = (function() {
var __GT_date_STAR_ = null;
var __GT_date_STAR___1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.datepicker.date_STAR_,cursor__20339__auto__);
});
var __GT_date_STAR___2 = (function (cursor__20339__auto__,m22852){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.datepicker.date_STAR_,cursor__20339__auto__,m22852);
});
__GT_date_STAR_ = function(cursor__20339__auto__,m22852){
switch(arguments.length){
case 1:
return __GT_date_STAR___1.call(this,cursor__20339__auto__);
case 2:
return __GT_date_STAR___2.call(this,cursor__20339__auto__,m22852);
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
var date__delegate = function (form,label,ks,p__22900){
var vec__22902 = p__22900;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null),(cljs.core.truth_(cljs.core.constant$keyword$178.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,lomakkeet.fields.emptyable_input,cljs.core.constant$keyword$149,lomakkeet.datepicker.date_STAR_], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,lomakkeet.datepicker.date_STAR_], null))], 0)));
};
var date = function (form,label,ks,var_args){
var p__22900 = null;
if (arguments.length > 3) {
var G__22903__i = 0, G__22903__a = new Array(arguments.length -  3);
while (G__22903__i < G__22903__a.length) {G__22903__a[G__22903__i] = arguments[G__22903__i + 3]; ++G__22903__i;}
  p__22900 = new cljs.core.IndexedSeq(G__22903__a,0);
} 
return date__delegate.call(this,form,label,ks,p__22900);};
date.cljs$lang$maxFixedArity = 3;
date.cljs$lang$applyTo = (function (arglist__22904){
var form = cljs.core.first(arglist__22904);
arglist__22904 = cljs.core.next(arglist__22904);
var label = cljs.core.first(arglist__22904);
arglist__22904 = cljs.core.next(arglist__22904);
var ks = cljs.core.first(arglist__22904);
var p__22900 = cljs.core.rest(arglist__22904);
return date__delegate(form,label,ks,p__22900);
});
date.cljs$core$IFn$_invoke$arity$variadic = date__delegate;
return date;
})()
;
