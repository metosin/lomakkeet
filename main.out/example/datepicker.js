// Compiled by ClojureScript 1.7.170 {}
goog.provide('example.datepicker');
goog.require('cljs.core');
goog.require('lomakkeet.reagent.datepicker');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('goog.date.Date');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.datepicker","example.datepicker",-540315733),new cljs.core.Keyword(null,"datepicker","datepicker",821741450)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"datepicker",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.datepicker.t_example$datepicker21007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker21007 = (function (meta21008){
this.meta21008 = meta21008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.datepicker.t_example$datepicker21007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21009,meta21008__$1){
var self__ = this;
var _21009__$1 = this;
return (new example.datepicker.t_example$datepicker21007(meta21008__$1));
});

example.datepicker.t_example$datepicker21007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21009){
var self__ = this;
var _21009__$1 = this;
return self__.meta21008;
});

example.datepicker.t_example$datepicker21007.prototype.devcards$core$IDevcardOptions$ = true;

example.datepicker.t_example$datepicker21007.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (date,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.datepicker.date,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,date),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (this__18502__auto____$1){
return (function (x){
return cljs.core.reset_BANG_.call(null,date,x);
});})(this__18502__auto____$1))
], null)], null);
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

example.datepicker.t_example$datepicker21007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21008","meta21008",-2020085149,null)], null);
});

example.datepicker.t_example$datepicker21007.cljs$lang$type = true;

example.datepicker.t_example$datepicker21007.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker21007";

example.datepicker.t_example$datepicker21007.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.datepicker/t_example$datepicker21007");
});

example.datepicker.__GT_t_example$datepicker21007 = (function example$datepicker$__GT_t_example$datepicker21007(meta21008){
return (new example.datepicker.t_example$datepicker21007(meta21008));
});

}

return (new example.datepicker.t_example$datepicker21007(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.datepicker","example.datepicker",-540315733),new cljs.core.Keyword(null,"datepicker-min-and-max","datepicker-min-and-max",-1521985524)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"datepicker-min-and-max",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The selectable date can be limited with min and max dates.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.datepicker.t_example$datepicker21010 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker21010 = (function (meta21011){
this.meta21011 = meta21011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.datepicker.t_example$datepicker21010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21012,meta21011__$1){
var self__ = this;
var _21012__$1 = this;
return (new example.datepicker.t_example$datepicker21010(meta21011__$1));
});

example.datepicker.t_example$datepicker21010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21012){
var self__ = this;
var _21012__$1 = this;
return self__.meta21011;
});

example.datepicker.t_example$datepicker21010.prototype.devcards$core$IDevcardOptions$ = true;

example.datepicker.t_example$datepicker21010.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (date,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.datepicker.date,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,date),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (this__18502__auto____$1){
return (function (x){
return cljs.core.reset_BANG_.call(null,date,x);
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"min-date","min-date",999087300),(new goog.date.Date((2015),(9),(10))),new cljs.core.Keyword(null,"max-date","max-date",-1725227804),(new goog.date.Date((2015),(9),(30)))], null)], null);
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

example.datepicker.t_example$datepicker21010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21011","meta21011",1258451336,null)], null);
});

example.datepicker.t_example$datepicker21010.cljs$lang$type = true;

example.datepicker.t_example$datepicker21010.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker21010";

example.datepicker.t_example$datepicker21010.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.datepicker/t_example$datepicker21010");
});

example.datepicker.__GT_t_example$datepicker21010 = (function example$datepicker$__GT_t_example$datepicker21010(meta21011){
return (new example.datepicker.t_example$datepicker21010(meta21011));
});

}

return (new example.datepicker.t_example$datepicker21010(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,(new goog.date.Date((2015),(9),(22)))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.datepicker","example.datepicker",-540315733),new cljs.core.Keyword(null,"datepicker-min-and-max-two-fields","datepicker-min-and-max-two-fields",-1862944764)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"datepicker-min-and-max-two-fields",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The min and max dates can be se reactively based on other inputs.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.datepicker.t_example$datepicker21013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker21013 = (function (meta21014){
this.meta21014 = meta21014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.datepicker.t_example$datepicker21013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21015,meta21014__$1){
var self__ = this;
var _21015__$1 = this;
return (new example.datepicker.t_example$datepicker21013(meta21014__$1));
});

example.datepicker.t_example$datepicker21013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21015){
var self__ = this;
var _21015__$1 = this;
return self__.meta21014;
});

example.datepicker.t_example$datepicker21013.prototype.devcards$core$IDevcardOptions$ = true;

example.datepicker.t_example$datepicker21013.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (state,_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Start"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.datepicker.date,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (this__18502__auto____$1){
return (function (x){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),x);
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"max-date","max-date",-1725227804),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"End"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.datepicker.date,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (this__18502__auto____$1){
return (function (x){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"end","end",-268185958),x);
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"min-date","min-date",999087300),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null)], null);
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

example.datepicker.t_example$datepicker21013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21014","meta21014",-472686469,null)], null);
});

example.datepicker.t_example$datepicker21013.cljs$lang$type = true;

example.datepicker.t_example$datepicker21013.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker21013";

example.datepicker.t_example$datepicker21013.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.datepicker/t_example$datepicker21013");
});

example.datepicker.__GT_t_example$datepicker21013 = (function example$datepicker$__GT_t_example$datepicker21013(meta21014){
return (new example.datepicker.t_example$datepicker21013(meta21014));
});

}

return (new example.datepicker.t_example$datepicker21013(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(new goog.date.Date((2015),(9),(22))),new cljs.core.Keyword(null,"end","end",-268185958),(new goog.date.Date((2015),(9),(25)))], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.datepicker","example.datepicker",-540315733),new cljs.core.Keyword(null,"clearable","clearable",943040201)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"clearable",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.datepicker.t_example$datepicker21016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker21016 = (function (meta21017){
this.meta21017 = meta21017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.datepicker.t_example$datepicker21016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21018,meta21017__$1){
var self__ = this;
var _21018__$1 = this;
return (new example.datepicker.t_example$datepicker21016(meta21017__$1));
});

example.datepicker.t_example$datepicker21016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21018){
var self__ = this;
var _21018__$1 = this;
return self__.meta21017;
});

example.datepicker.t_example$datepicker21016.prototype.devcards$core$IDevcardOptions$ = true;

example.datepicker.t_example$datepicker21016.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (date,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.datepicker.date,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,date),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (this__18502__auto____$1){
return (function (x){
return cljs.core.reset_BANG_.call(null,date,x);
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"clearable?","clearable?",661720997),true], null)], null);
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

example.datepicker.t_example$datepicker21016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21017","meta21017",223805903,null)], null);
});

example.datepicker.t_example$datepicker21016.cljs$lang$type = true;

example.datepicker.t_example$datepicker21016.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker21016";

example.datepicker.t_example$datepicker21016.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.datepicker/t_example$datepicker21016");
});

example.datepicker.__GT_t_example$datepicker21016 = (function example$datepicker$__GT_t_example$datepicker21016(meta21017){
return (new example.datepicker.t_example$datepicker21016(meta21017));
});

}

return (new example.datepicker.t_example$datepicker21016(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));

//# sourceMappingURL=datepicker.js.map