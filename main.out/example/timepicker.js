// Compiled by ClojureScript 1.7.170 {}
goog.provide('example.timepicker');
goog.require('cljs.core');
goog.require('lomakkeet.reagent.timepicker');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('goog.date.UtcDateTime');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.timepicker","example.timepicker",1456010845),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Work in progress",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.timepicker","example.timepicker",1456010845),new cljs.core.Keyword(null,"timepicker","timepicker",-201934559)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"timepicker",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The Date object is updated on input blur event or when enter is pressed.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.timepicker.t_example$timepicker20821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.timepicker.t_example$timepicker20821 = (function (meta20822){
this.meta20822 = meta20822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.timepicker.t_example$timepicker20821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20823,meta20822__$1){
var self__ = this;
var _20823__$1 = this;
return (new example.timepicker.t_example$timepicker20821(meta20822__$1));
});

example.timepicker.t_example$timepicker20821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20823){
var self__ = this;
var _20823__$1 = this;
return self__.meta20822;
});

example.timepicker.t_example$timepicker20821.prototype.devcards$core$IDevcardOptions$ = true;

example.timepicker.t_example$timepicker20821.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (datetime,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.timepicker.timepicker,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,datetime),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (this__18502__auto____$1){
return (function (x){
return cljs.core.reset_BANG_.call(null,datetime,x);
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

example.timepicker.t_example$timepicker20821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20822","meta20822",1614051056,null)], null);
});

example.timepicker.t_example$timepicker20821.cljs$lang$type = true;

example.timepicker.t_example$timepicker20821.cljs$lang$ctorStr = "example.timepicker/t_example$timepicker20821";

example.timepicker.t_example$timepicker20821.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.timepicker/t_example$timepicker20821");
});

example.timepicker.__GT_t_example$timepicker20821 = (function example$timepicker$__GT_t_example$timepicker20821(meta20822){
return (new example.timepicker.t_example$timepicker20821(meta20822));
});

}

return (new example.timepicker.t_example$timepicker20821(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,(new goog.date.UtcDateTime())),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));

//# sourceMappingURL=timepicker.js.map