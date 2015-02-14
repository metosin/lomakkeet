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
var G__22613 = (new goog.date.Date());
G__22613.setYear(v.getFullYear());

G__22613.setMonth(v.getMonth());

G__22613.setDate(v.getDate());

return G__22613;
} else {
return null;
}
});
lomakkeet.datepicker.local_date__GT_jsdate = (function local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__22615 = (new Date());
G__22615.setYear(v.getFullYear());

G__22615.setMonth(v.getMonth());

G__22615.setDate(v.getDate());

G__22615.setHours((0));

G__22615.setMinutes((0));

G__22615.setSeconds((0));

return G__22615;
} else {
return null;
}
});
lomakkeet.datepicker.date__GT_str = (function date__GT_str(v){
if(cljs.core.truth_(v)){
var G__22620 = "%d.%d.%d";
var G__22621 = v.getDate();
var G__22622 = (v.getMonth() + (1));
var G__22623 = v.getFullYear();
return goog.string.format(G__22620,G__22621,G__22622,G__22623);
} else {
return null;
}
});
lomakkeet.datepicker.set_limit_date = (function set_limit_date(k,owner){
var el = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$158);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$197,"setMinDate",cljs.core.constant$keyword$198,"setMaxDate"], null),k);
var v = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,k);
if(cljs.core.truth_(v)){
return (el[fn_name]).call(el,v);
} else {
return null;
}
});

var ufv___22665 = schema.utils.use_fn_validation;
var output_schema22626_22666 = schema.core.Any;
var input_schema22627_22667 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22628_22668 = schema.core.checker(input_schema22627_22667);
var output_checker22629_22669 = schema.core.checker(output_schema22626_22666);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks datepicker-i18n], :as opts}]
*/
lomakkeet.datepicker.date_STAR_ = ((function (ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
return (function date_STAR_(G__22630,G__22631,G__22632){
var validate__12170__auto__ = ufv___22665.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22670 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22630,G__22631,G__22632], null);
var temp__4126__auto___22671 = (function (){var G__22649 = args__12171__auto___22670;
return (input_checker22628_22668.cljs$core$IFn$_invoke$arity$1 ? input_checker22628_22668.cljs$core$IFn$_invoke$arity$1(G__22649) : input_checker22628_22668.call(null,G__22649));
})();
if(cljs.core.truth_(temp__4126__auto___22671)){
var error__12172__auto___22672 = temp__4126__auto___22671;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22672], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22672,cljs.core.constant$keyword$64,args__12171__auto___22670,cljs.core.constant$keyword$65,input_schema22627_22667,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__22652 = G__22630;
var map__22654 = G__22652;
var map__22654__$1 = ((cljs.core.seq_QMARK_(map__22654))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22654):map__22654);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22654__$1,cljs.core.constant$keyword$64);
var owner = G__22631;
var G__22653 = G__22632;
var map__22655 = G__22653;
var map__22655__$1 = ((cljs.core.seq_QMARK_(map__22655))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22655):map__22655);
var opts = map__22655__$1;
var datepicker_i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,cljs.core.constant$keyword$199);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,cljs.core.constant$keyword$145);
var G__22652__$1 = G__22652;
var owner__$1 = owner;
var G__22653__$1 = G__22653;
while(true){
var map__22656 = G__22652__$1;
var map__22656__$1 = ((cljs.core.seq_QMARK_(map__22656))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22656):map__22656);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22656__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__22657 = G__22653__$1;
var map__22657__$1 = ((cljs.core.seq_QMARK_(map__22657))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22657):map__22657);
var opts__$1 = map__22657__$1;
var datepicker_i18n__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22657__$1,cljs.core.constant$keyword$199);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22657__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22657__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.datepicker.t22658 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.datepicker.t22658 = (function (G__22652,owner,output_schema22626,input_checker22628,map__22656,map__22657,map__22654,input_schema22627,G__22631,ks,value,G__22653,date_STAR_,G__22630,datepicker_i18n,validate__12170__auto__,ch,map__22655,output_checker22629,G__22632,opts,ufv__,meta22659){
this.G__22652 = G__22652;
this.owner = owner;
this.output_schema22626 = output_schema22626;
this.input_checker22628 = input_checker22628;
this.map__22656 = map__22656;
this.map__22657 = map__22657;
this.map__22654 = map__22654;
this.input_schema22627 = input_schema22627;
this.G__22631 = G__22631;
this.ks = ks;
this.value = value;
this.G__22653 = G__22653;
this.date_STAR_ = date_STAR_;
this.G__22630 = G__22630;
this.datepicker_i18n = datepicker_i18n;
this.validate__12170__auto__ = validate__12170__auto__;
this.ch = ch;
this.map__22655 = map__22655;
this.output_checker22629 = output_checker22629;
this.G__22632 = G__22632;
this.opts = opts;
this.ufv__ = ufv__;
this.meta22659 = meta22659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.datepicker.t22658.prototype.om$core$IDisplayName$ = true;

lomakkeet.datepicker.t22658.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
return (function (_){
var self__ = this;
var ___$1 = this;
return "date*";
});})(map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
;

lomakkeet.datepicker.t22658.prototype.om$core$IRenderState$ = true;

lomakkeet.datepicker.t22658.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
return (function (_,p__22661){
var self__ = this;
var map__22662 = p__22661;
var map__22662__$1 = ((cljs.core.seq_QMARK_(map__22662))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22662):map__22662);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22662__$1,cljs.core.constant$keyword$200);
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
})(), "onChange": ((function (___$1,map__22662,map__22662__$1,val,map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
return (function (p1__22624_SHARP_){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$200,p1__22624_SHARP_.target.value);
});})(___$1,map__22662,map__22662__$1,val,map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
, "onKeyPress": ((function (___$1,map__22662,map__22662__$1,val,map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
return (function (e){
var k = e.key;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",k)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$200)], null));
} else {
return null;
}
});})(___$1,map__22662,map__22662__$1,val,map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
, "autoComplete": false});
});})(map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
;

lomakkeet.datepicker.t22658.prototype.om$core$IDidUpdate$ = true;

lomakkeet.datepicker.t22658.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
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
});})(map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
;

lomakkeet.datepicker.t22658.prototype.om$core$IDidMount$ = true;

lomakkeet.datepicker.t22658.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
return (function (_){
var self__ = this;
var ___$1 = this;
var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"input");
var el = (new Pikaday(cljs.core.clj__GT_js((function (){var G__22663 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$201,input,cljs.core.constant$keyword$202,"D.M.YYYY",cljs.core.constant$keyword$203,(1),cljs.core.constant$keyword$204,((function (input,___$1,map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
return (function (v){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,lomakkeet.datepicker.jsdate__GT_local_date(v)], null));
});})(input,___$1,map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
], null);
var G__22663__$1 = (cljs.core.truth_(self__.datepicker_i18n)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22663,cljs.core.constant$keyword$205,self__.datepicker_i18n):G__22663);
return G__22663__$1;
})())));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$158,el);

lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$197,self__.owner);

return lomakkeet.datepicker.set_limit_date(cljs.core.constant$keyword$198,self__.owner);
});})(map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
;

lomakkeet.datepicker.t22658.prototype.om$core$IInitState$ = true;

lomakkeet.datepicker.t22658.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$200,null], null);
});})(map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
;

lomakkeet.datepicker.t22658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
return (function (_22660){
var self__ = this;
var _22660__$1 = this;
return self__.meta22659;
});})(map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
;

lomakkeet.datepicker.t22658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
return (function (_22660,meta22659__$1){
var self__ = this;
var _22660__$1 = this;
return (new lomakkeet.datepicker.t22658(self__.G__22652,self__.owner,self__.output_schema22626,self__.input_checker22628,self__.map__22656,self__.map__22657,self__.map__22654,self__.input_schema22627,self__.G__22631,self__.ks,self__.value,self__.G__22653,self__.date_STAR_,self__.G__22630,self__.datepicker_i18n,self__.validate__12170__auto__,self__.ch,self__.map__22655,self__.output_checker22629,self__.G__22632,self__.opts,self__.ufv__,meta22659__$1));
});})(map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
;

lomakkeet.datepicker.t22658.cljs$lang$type = true;

lomakkeet.datepicker.t22658.cljs$lang$ctorStr = "lomakkeet.datepicker/t22658";

lomakkeet.datepicker.t22658.cljs$lang$ctorPrWriter = ((function (map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.datepicker/t22658");
});})(map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
;

lomakkeet.datepicker.__GT_t22658 = ((function (map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669){
return (function __GT_t22658(G__22652__$2,owner__$3,output_schema22626__$1,input_checker22628__$1,map__22656__$2,map__22657__$2,map__22654__$2,input_schema22627__$1,G__22631__$1,ks__$2,value__$2,G__22653__$2,date_STAR___$1,G__22630__$1,datepicker_i18n__$2,validate__12170__auto____$1,ch__$2,map__22655__$2,output_checker22629__$1,G__22632__$1,opts__$2,ufv____$1,meta22659){
return (new lomakkeet.datepicker.t22658(G__22652__$2,owner__$3,output_schema22626__$1,input_checker22628__$1,map__22656__$2,map__22657__$2,map__22654__$2,input_schema22627__$1,G__22631__$1,ks__$2,value__$2,G__22653__$2,date_STAR___$1,G__22630__$1,datepicker_i18n__$2,validate__12170__auto____$1,ch__$2,map__22655__$2,output_checker22629__$1,G__22632__$1,opts__$2,ufv____$1,meta22659));
});})(map__22656,map__22656__$1,value__$1,owner__$2,map__22657,map__22657__$1,opts__$1,datepicker_i18n__$1,ks__$1,ch__$1,G__22652,map__22654,map__22654__$1,value,owner,G__22653,map__22655,map__22655__$1,opts,datepicker_i18n,ks,ch,validate__12170__auto__,ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
;

}

return (new lomakkeet.datepicker.t22658(G__22652__$1,owner__$2,output_schema22626_22666,input_checker22628_22668,map__22656__$1,map__22657__$1,map__22654__$1,input_schema22627_22667,G__22631,ks__$1,value__$1,G__22653__$1,date_STAR_,G__22630,datepicker_i18n__$1,validate__12170__auto__,ch__$1,map__22655__$1,output_checker22629_22669,G__22632,opts__$1,ufv___22665,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22673 = (function (){var G__22664 = o__12173__auto__;
return (output_checker22629_22669.cljs$core$IFn$_invoke$arity$1 ? output_checker22629_22669.cljs$core$IFn$_invoke$arity$1(G__22664) : output_checker22629_22669.call(null,G__22664));
})();
if(cljs.core.truth_(temp__4126__auto___22673)){
var error__12172__auto___22674 = temp__4126__auto___22673;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"date*","date*",-272800079,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22674], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22674,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22626_22666,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___22665,output_schema22626_22666,input_schema22627_22667,input_checker22628_22668,output_checker22629_22669))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.datepicker.date_STAR_),schema.core.make_fn_schema(output_schema22626_22666,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22627_22667], null)));

lomakkeet.datepicker.__GT_date_STAR_ = (function() {
var __GT_date_STAR_ = null;
var __GT_date_STAR___1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.datepicker.date_STAR_,cursor__20405__auto__);
});
var __GT_date_STAR___2 = (function (cursor__20405__auto__,m22625){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.datepicker.date_STAR_,cursor__20405__auto__,m22625);
});
__GT_date_STAR_ = function(cursor__20405__auto__,m22625){
switch(arguments.length){
case 1:
return __GT_date_STAR___1.call(this,cursor__20405__auto__);
case 2:
return __GT_date_STAR___2.call(this,cursor__20405__auto__,m22625);
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
var date__delegate = function (form,label,ks,p__22675){
var vec__22677 = p__22675;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null),(cljs.core.truth_(cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$122,lomakkeet.fields.emptyable_input,cljs.core.constant$keyword$147,lomakkeet.datepicker.date_STAR_], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,lomakkeet.datepicker.date_STAR_], null))], 0)));
};
var date = function (form,label,ks,var_args){
var p__22675 = null;
if (arguments.length > 3) {
var G__22678__i = 0, G__22678__a = new Array(arguments.length -  3);
while (G__22678__i < G__22678__a.length) {G__22678__a[G__22678__i] = arguments[G__22678__i + 3]; ++G__22678__i;}
  p__22675 = new cljs.core.IndexedSeq(G__22678__a,0);
} 
return date__delegate.call(this,form,label,ks,p__22675);};
date.cljs$lang$maxFixedArity = 3;
date.cljs$lang$applyTo = (function (arglist__22679){
var form = cljs.core.first(arglist__22679);
arglist__22679 = cljs.core.next(arglist__22679);
var label = cljs.core.first(arglist__22679);
arglist__22679 = cljs.core.next(arglist__22679);
var ks = cljs.core.first(arglist__22679);
var p__22675 = cljs.core.rest(arglist__22679);
return date__delegate(form,label,ks,p__22675);
});
date.cljs$core$IFn$_invoke$arity$variadic = date__delegate;
return date;
})()
;
