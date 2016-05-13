// Compiled by ClojureScript 1.7.170 {}
goog.provide('example.calendar');
goog.require('cljs.core');
goog.require('lomakkeet.reagent.calendar');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('example.options');
goog.require('goog.date.Date');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.calendar","example.calendar",-1543567115),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Work in progress",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.calendar","example.calendar",-1543567115),new cljs.core.Keyword(null,"month-calendar","month-calendar",-1187294973)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"month-calendar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.calendar.t_example$calendar18992 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.calendar.t_example$calendar18992 = (function (meta18993){
this.meta18993 = meta18993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.calendar.t_example$calendar18992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18994,meta18993__$1){
var self__ = this;
var _18994__$1 = this;
return (new example.calendar.t_example$calendar18992(meta18993__$1));
});

example.calendar.t_example$calendar18992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18994){
var self__ = this;
var _18994__$1 = this;
return self__.meta18993;
});

example.calendar.t_example$calendar18992.prototype.devcards$core$IDevcardOptions$ = true;

example.calendar.t_example$calendar18992.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (date,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.calendar.month_calendar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Foo",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,date),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (this__18502__auto____$1){
return (function (x){
return cljs.core.reset_BANG_.call(null,date,x);
});})(this__18502__auto____$1))
], null)], null)], null);
});})(this__18502__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__18521__auto__)){
return ((function (v__18521__auto__,this__18502__auto____$1){
return (function (data_atom__18522__auto__,owner__18523__auto__){
return reagent.core.as_element.call(null,v__18521__auto__.call(null,data_atom__18522__auto__,owner__18523__auto__));
});
;})(v__18521__auto__,this__18502__auto____$1))
} else {
return reagent.core.as_element.call(null,v__18521__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__18503__auto__))));
});

example.calendar.t_example$calendar18992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta18993","meta18993",1540971049,null)], null);
});

example.calendar.t_example$calendar18992.cljs$lang$type = true;

example.calendar.t_example$calendar18992.cljs$lang$ctorStr = "example.calendar/t_example$calendar18992";

example.calendar.t_example$calendar18992.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.calendar/t_example$calendar18992");
});

example.calendar.__GT_t_example$calendar18992 = (function example$calendar$__GT_t_example$calendar18992(meta18993){
return (new example.calendar.t_example$calendar18992(meta18993));
});

}

return (new example.calendar.t_example$calendar18992(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.calendar","example.calendar",-1543567115),new cljs.core.Keyword(null,"date-range","date-range",63083517)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"date-range",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.calendar.t_example$calendar18996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.calendar.t_example$calendar18996 = (function (meta18997){
this.meta18997 = meta18997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.calendar.t_example$calendar18996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18998,meta18997__$1){
var self__ = this;
var _18998__$1 = this;
return (new example.calendar.t_example$calendar18996(meta18997__$1));
});

example.calendar.t_example$calendar18996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18998){
var self__ = this;
var _18998__$1 = this;
return self__.meta18997;
});

example.calendar.t_example$calendar18996.prototype.devcards$core$IDevcardOptions$ = true;

example.calendar.t_example$calendar18996.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (state,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.table,cljs.core.deref.call(null,state),((function (this__18502__auto____$1){
return (function (k,v){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,k,v);
});})(this__18502__auto____$1))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"week-numbers?","week-numbers?",106454907),new cljs.core.Keyword(null,"bool","bool",1444635321)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quicklist?","quicklist?",200176627),new cljs.core.Keyword(null,"bool","bool",1444635321)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-input?","date-input?",-702221302),new cljs.core.Keyword(null,"bool","bool",1444635321)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.calendar.date_range,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (this__18502__auto____$1){
return (function (p1__18995_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge,p1__18995_SHARP_);
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"week-numbers?","week-numbers?",106454907),new cljs.core.Keyword(null,"week-numbers?","week-numbers?",106454907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"quicklist?","quicklist?",200176627),new cljs.core.Keyword(null,"quicklist?","quicklist?",200176627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"date-input?","date-input?",-702221302),new cljs.core.Keyword(null,"date-input?","date-input?",-702221302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (this__18502__auto____$1){
return (function (___$1){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null);

return null;
});})(this__18502__auto____$1))
], null),"Reset"], null)], null);
});})(this__18502__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__18521__auto__)){
return ((function (v__18521__auto__,this__18502__auto____$1){
return (function (data_atom__18522__auto__,owner__18523__auto__){
return reagent.core.as_element.call(null,v__18521__auto__.call(null,data_atom__18522__auto__,owner__18523__auto__));
});
;})(v__18521__auto__,this__18502__auto____$1))
} else {
return reagent.core.as_element.call(null,v__18521__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__18503__auto__))));
});

example.calendar.t_example$calendar18996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta18997","meta18997",-1799243888,null)], null);
});

example.calendar.t_example$calendar18996.cljs$lang$type = true;

example.calendar.t_example$calendar18996.cljs$lang$ctorStr = "example.calendar/t_example$calendar18996";

example.calendar.t_example$calendar18996.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.calendar/t_example$calendar18996");
});

example.calendar.__GT_t_example$calendar18996 = (function example$calendar$__GT_t_example$calendar18996(meta18997){
return (new example.calendar.t_example$calendar18996(meta18997));
});

}

return (new example.calendar.t_example$calendar18996(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));

//# sourceMappingURL=calendar.js.map