// Compiled by ClojureScript 1.7.170 {}
goog.provide('example.autocomplete');
goog.require('cljs.core');
goog.require('lomakkeet.reagent.autocomplete');
goog.require('reagent.core');
goog.require('devcards.core');
example.autocomplete.simple_items = (function example$autocomplete$simple_items(n){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.map.call(null,(function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,[cljs.core.str("Option "),cljs.core.str(i)].join('')], null);
}),cljs.core.range.call(null,n)));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.autocomplete","example.autocomplete",-1541913585),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Autocomplete\n\n## Features\n\n- Opens when focused or clicked.\n- Item is selected by mouse or enter.\n- Closes when unfocused, with ESC or when clicked outside.\n- Selection can be moved with up and down arrows.\n- In multiple selection mode, selected items can be removed with Backspace.\n- Searchable. Matches are highlighted.\n- Multiple selection\n- Items provided to component can be updated during the components lifecycle\n- Possible to add new items based on search\n- Implemented using Reagent's lowlevel React utilities, should be possible to\neventually implement using pure React + Sablono to support all React wrappers.\n\n## Items\n\nItems can be provided as:\n\n- Map from key to value\n- Seq of values\n- Function which sets the items\n",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.autocomplete","example.autocomplete",-1541913585),new cljs.core.Keyword(null,"simple-autocomplete","simple-autocomplete",-1671799671)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"simple-autocomplete",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.autocomplete.t_example$autocomplete21021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.autocomplete.t_example$autocomplete21021 = (function (meta21022){
this.meta21022 = meta21022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.autocomplete.t_example$autocomplete21021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21023,meta21022__$1){
var self__ = this;
var _21023__$1 = this;
return (new example.autocomplete.t_example$autocomplete21021(meta21022__$1));
});

example.autocomplete.t_example$autocomplete21021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21023){
var self__ = this;
var _21023__$1 = this;
return self__.meta21022;
});

example.autocomplete.t_example$autocomplete21021.prototype.devcards$core$IDevcardOptions$ = true;

example.autocomplete.t_example$autocomplete21021.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.autocomplete,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"cb","cb",589947841),((function (this__18502__auto____$1){
return (function (item){
return cljs.core.reset_BANG_.call(null,value,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item));
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"search-fields","search-fields",641290308),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.Keyword(null,"items","items",1031954938),example.autocomplete.simple_items.call(null,(50))], null)], null);
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

example.autocomplete.t_example$autocomplete21021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21022","meta21022",-533052440,null)], null);
});

example.autocomplete.t_example$autocomplete21021.cljs$lang$type = true;

example.autocomplete.t_example$autocomplete21021.cljs$lang$ctorStr = "example.autocomplete/t_example$autocomplete21021";

example.autocomplete.t_example$autocomplete21021.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.autocomplete/t_example$autocomplete21021");
});

example.autocomplete.__GT_t_example$autocomplete21021 = (function example$autocomplete$__GT_t_example$autocomplete21021(meta21022){
return (new example.autocomplete.t_example$autocomplete21021(meta21022));
});

}

return (new example.autocomplete.t_example$autocomplete21021(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,(5)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.autocomplete","example.autocomplete",-1541913585),new cljs.core.Keyword(null,"autocomplete-multiple","autocomplete-multiple",-1981053021)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"autocomplete-multiple",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.autocomplete.t_example$autocomplete21024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.autocomplete.t_example$autocomplete21024 = (function (meta21025){
this.meta21025 = meta21025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.autocomplete.t_example$autocomplete21024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21026,meta21025__$1){
var self__ = this;
var _21026__$1 = this;
return (new example.autocomplete.t_example$autocomplete21024(meta21025__$1));
});

example.autocomplete.t_example$autocomplete21024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21026){
var self__ = this;
var _21026__$1 = this;
return self__.meta21025;
});

example.autocomplete.t_example$autocomplete21024.prototype.devcards$core$IDevcardOptions$ = true;

example.autocomplete.t_example$autocomplete21024.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.autocomplete,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"cb","cb",589947841),((function (this__18502__auto____$1){
return (function (item){
return cljs.core.swap_BANG_.call(null,value,cljs.core.conj,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item));
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"remove-cb","remove-cb",1443715269),((function (this__18502__auto____$1){
return (function (x){
return cljs.core.swap_BANG_.call(null,value,cljs.core.disj,x);
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"search-fields","search-fields",641290308),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.Keyword(null,"items","items",1031954938),example.autocomplete.simple_items.call(null,(50)),new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null)], null);
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

example.autocomplete.t_example$autocomplete21024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21025","meta21025",1775938724,null)], null);
});

example.autocomplete.t_example$autocomplete21024.cljs$lang$type = true;

example.autocomplete.t_example$autocomplete21024.cljs$lang$ctorStr = "example.autocomplete/t_example$autocomplete21024";

example.autocomplete.t_example$autocomplete21024.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.autocomplete/t_example$autocomplete21024");
});

example.autocomplete.__GT_t_example$autocomplete21024 = (function example$autocomplete$__GT_t_example$autocomplete21024(meta21025){
return (new example.autocomplete.t_example$autocomplete21024(meta21025));
});

}

return (new example.autocomplete.t_example$autocomplete21024(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.autocomplete","example.autocomplete",-1541913585),new cljs.core.Keyword(null,"create-new-items","create-new-items",161927257)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"create-new-items",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.autocomplete.t_example$autocomplete21027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.autocomplete.t_example$autocomplete21027 = (function (meta21028){
this.meta21028 = meta21028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.autocomplete.t_example$autocomplete21027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21029,meta21028__$1){
var self__ = this;
var _21029__$1 = this;
return (new example.autocomplete.t_example$autocomplete21027(meta21028__$1));
});

example.autocomplete.t_example$autocomplete21027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21029){
var self__ = this;
var _21029__$1 = this;
return self__.meta21028;
});

example.autocomplete.t_example$autocomplete21027.prototype.devcards$core$IDevcardOptions$ = true;

example.autocomplete.t_example$autocomplete21027.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (state,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.autocomplete,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"cb","cb",589947841),((function (this__18502__auto____$1){
return (function (item){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item));
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"search-fields","search-fields",641290308),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"create","create",-1301499256),((function (this__18502__auto____$1){
return (function (s){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.long$.call(null,s)], null),[cljs.core.str("Option "),cljs.core.str(s)].join(''));

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.long$.call(null,s));
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

example.autocomplete.t_example$autocomplete21027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21028","meta21028",-304230203,null)], null);
});

example.autocomplete.t_example$autocomplete21027.cljs$lang$type = true;

example.autocomplete.t_example$autocomplete21027.cljs$lang$ctorStr = "example.autocomplete/t_example$autocomplete21027";

example.autocomplete.t_example$autocomplete21027.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.autocomplete/t_example$autocomplete21027");
});

example.autocomplete.__GT_t_example$autocomplete21027 = (function example$autocomplete$__GT_t_example$autocomplete21027(meta21028){
return (new example.autocomplete.t_example$autocomplete21027(meta21028));
});

}

return (new example.autocomplete.t_example$autocomplete21027(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),example.autocomplete.simple_items.call(null,(5)),new cljs.core.Keyword(null,"value","value",305978217),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.autocomplete","example.autocomplete",-1541913585),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# TODO\n\n- Long search text doesn't show as the input element is small",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));

//# sourceMappingURL=autocomplete.js.map