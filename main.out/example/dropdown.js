// Compiled by ClojureScript 1.7.170 {}
goog.provide('example.dropdown');
goog.require('cljs.core');
goog.require('lomakkeet.reagent.dropdown');
goog.require('reagent.core');
goog.require('cljs.test');
goog.require('devcards.core');
goog.require('example.options');
goog.require('goog.date.Date');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.dropdown","example.dropdown",-1062394313),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),[cljs.core.str("# Dropdowns\n\nThere are currently two types of dropdowns on the basis of their container elements:\n`[dropdown-button]` (&lt;button&gt;) and `[dropdown-li]` (&lt;li&gt;).\n\nDropdowns can be used for several use cases:\n\n- Linking to other pages\n- As select box\n\n## Options\n"),cljs.core.str(new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Var(function(){return lomakkeet.reagent.dropdown.dropdown;},new cljs.core.Symbol("example.dropdown","dropdown","example.dropdown/dropdown",438695371,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"example.dropdown","example.dropdown",578137214,null),new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),"/home/juho/.boot/cache/tmp/home/juho/Source/lomakkeet/ibw/rcesf6/lomakkeet/reagent/dropdown.cljs",15,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null)], null)], null)),"- `:text` Text for dropdown toggle element.\n  - `:content` Used to pass in dropdown elements as collection of item-maps.\n  - `:children` (replaces `:content`) Used to pass in dropdown elements as Reagent hiccup form. Most of other options\n  do not work with this option.\n  - `:on-change` (Optional, supported by content) Called with item-map when dropdown item is selected.\n  - `:value` (Optional, supported by content) Current value, marks list item with equivalent value as active.\n  - `:close-on-click?` (Default `true`) Close dropdown when any item is selected.\n  - `:caret?` (Default `true`) Whether to automatically append caret to text.",(cljs.core.truth_(lomakkeet.reagent.dropdown.dropdown)?lomakkeet.reagent.dropdown.dropdown.cljs$lang$test:null)]))))),cljs.core.str("\n\n## Item maps\n"),cljs.core.str(new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Var(function(){return lomakkeet.reagent.dropdown.__GT_menu_item;},new cljs.core.Symbol("example.dropdown","->menu-item","example.dropdown/->menu-item",-1483377857,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"example.dropdown","example.dropdown",578137214,null),new cljs.core.Symbol(null,"->menu-item","->menu-item",26959682,null),"/home/juho/.boot/cache/tmp/home/juho/Source/lomakkeet/ibw/rcesf6/lomakkeet/reagent/dropdown.cljs",18,1,13,13,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"open?","open?",-1415992644,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-change","on-change",908485378,null),new cljs.core.Symbol(null,"close-on-click?","close-on-click?",780549879,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"dropdown-opts","dropdown-opts",-710283792,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"separator","separator",11782402,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"href","href",846725829,null),new cljs.core.Symbol(null,"on-click","on-click",-1021609226,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"item-opts","item-opts",1402006482,null)], null)], null)),"- `:key` React key\n  - `:value` (Optional) Current value\n  - `:href` (Optional) A href\n  - `:on-click` (Optional) callback\n  - `:text` Text\n  ",(cljs.core.truth_(lomakkeet.reagent.dropdown.__GT_menu_item)?lomakkeet.reagent.dropdown.__GT_menu_item.cljs$lang$test:null)]))))),cljs.core.str("\n\n## Notes\n\nIf item doesn't have `:href` attribute, `:on-click` default action is prevented.")].join(''),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.dropdown","example.dropdown",-1062394313),new cljs.core.Keyword(null,"navbar-links","navbar-links",554728904)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"navbar-links",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"If you want to stay on this page, do not click on the items.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.dropdown.t_example$dropdown19034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown19034 = (function (meta19035){
this.meta19035 = meta19035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.dropdown.t_example$dropdown19034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19036,meta19035__$1){
var self__ = this;
var _19036__$1 = this;
return (new example.dropdown.t_example$dropdown19034(meta19035__$1));
});

example.dropdown.t_example$dropdown19034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19036){
var self__ = this;
var _19036__$1 = this;
return self__.meta19035;
});

example.dropdown.t_example$dropdown19034.prototype.devcards$core$IDevcardOptions$ = true;

example.dropdown.t_example$dropdown19034.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-default","div.navbar.navbar-default",-2009098921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Normal list item"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.dropdown.dropdown_li,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"List item with dropdown",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.map.call(null,((function (this__18502__auto____$1){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#foo"),cljs.core.str(i)].join(''),new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str("Option "),cljs.core.str(i)].join('')], null);
});})(this__18502__auto____$1))
,cljs.core.range.call(null,(5)))], null)], null)], null)], null);
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

example.dropdown.t_example$dropdown19034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta19035","meta19035",-1047137705,null)], null);
});

example.dropdown.t_example$dropdown19034.cljs$lang$type = true;

example.dropdown.t_example$dropdown19034.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown19034";

example.dropdown.t_example$dropdown19034.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.dropdown/t_example$dropdown19034");
});

example.dropdown.__GT_t_example$dropdown19034 = (function example$dropdown$__GT_t_example$dropdown19034(meta19035){
return (new example.dropdown.t_example$dropdown19034(meta19035));
});

}

return (new example.dropdown.t_example$dropdown19034(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.dropdown","example.dropdown",-1062394313),new cljs.core.Keyword(null,"selectbox","selectbox",-1368189838)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"selectbox",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.dropdown.t_example$dropdown19038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown19038 = (function (meta19039){
this.meta19039 = meta19039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.dropdown.t_example$dropdown19038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19040,meta19039__$1){
var self__ = this;
var _19040__$1 = this;
return (new example.dropdown.t_example$dropdown19038(meta19039__$1));
});

example.dropdown.t_example$dropdown19038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19040){
var self__ = this;
var _19040__$1 = this;
return self__.meta19039;
});

example.dropdown.t_example$dropdown19038.prototype.devcards$core$IDevcardOptions$ = true;

example.dropdown.t_example$dropdown19038.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.dropdown.dropdown_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"A button with dropdown",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.map.call(null,((function (this__18502__auto____$1){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"value","value",305978217),i,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str("Option "),cljs.core.str(i)].join('')], null);
});})(this__18502__auto____$1))
,cljs.core.range.call(null,(5))),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (this__18502__auto____$1){
return (function (p1__19037_SHARP_){
return cljs.core.reset_BANG_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__19037_SHARP_));
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

example.dropdown.t_example$dropdown19038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta19039","meta19039",-660092314,null)], null);
});

example.dropdown.t_example$dropdown19038.cljs$lang$type = true;

example.dropdown.t_example$dropdown19038.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown19038";

example.dropdown.t_example$dropdown19038.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.dropdown/t_example$dropdown19038");
});

example.dropdown.__GT_t_example$dropdown19038 = (function example$dropdown$__GT_t_example$dropdown19038(meta19039){
return (new example.dropdown.t_example$dropdown19038(meta19039));
});

}

return (new example.dropdown.t_example$dropdown19038(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.dropdown","example.dropdown",-1062394313),new cljs.core.Keyword(null,"selectbox-2","selectbox-2",528142109)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"selectbox-2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"List items with on-click handlers",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.dropdown.t_example$dropdown19041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown19041 = (function (meta19042){
this.meta19042 = meta19042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.dropdown.t_example$dropdown19041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19043,meta19042__$1){
var self__ = this;
var _19043__$1 = this;
return (new example.dropdown.t_example$dropdown19041(meta19042__$1));
});

example.dropdown.t_example$dropdown19041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19043){
var self__ = this;
var _19043__$1 = this;
return self__.meta19042;
});

example.dropdown.t_example$dropdown19041.prototype.devcards$core$IDevcardOptions$ = true;

example.dropdown.t_example$dropdown19041.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.dropdown.dropdown_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"A button with dropdown",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.map.call(null,((function (this__18502__auto____$1){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (this__18502__auto____$1){
return (function (){
return alert([cljs.core.str("Option "),cljs.core.str(i)].join(''));
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str("Option "),cljs.core.str(i)].join('')], null);
});})(this__18502__auto____$1))
,cljs.core.range.call(null,(5)))], null)], null);
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

example.dropdown.t_example$dropdown19041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta19042","meta19042",1484886618,null)], null);
});

example.dropdown.t_example$dropdown19041.cljs$lang$type = true;

example.dropdown.t_example$dropdown19041.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown19041";

example.dropdown.t_example$dropdown19041.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.dropdown/t_example$dropdown19041");
});

example.dropdown.__GT_t_example$dropdown19041 = (function example$dropdown$__GT_t_example$dropdown19041(meta19042){
return (new example.dropdown.t_example$dropdown19041(meta19042));
});

}

return (new example.dropdown.t_example$dropdown19041(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.dropdown","example.dropdown",-1062394313),new cljs.core.Keyword(null,"options","options",99638489)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.dropdown.t_example$dropdown19045 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown19045 = (function (meta19046){
this.meta19046 = meta19046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.dropdown.t_example$dropdown19045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19047,meta19046__$1){
var self__ = this;
var _19047__$1 = this;
return (new example.dropdown.t_example$dropdown19045(meta19046__$1));
});

example.dropdown.t_example$dropdown19045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19047){
var self__ = this;
var _19047__$1 = this;
return self__.meta19046;
});

example.dropdown.t_example$dropdown19045.prototype.devcards$core$IDevcardOptions$ = true;

example.dropdown.t_example$dropdown19045.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (options,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.table,cljs.core.deref.call(null,options),((function (this__18502__auto____$1){
return (function (k,v){
return cljs.core.swap_BANG_.call(null,options,cljs.core.assoc,k,v);
});})(this__18502__auto____$1))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-on-click?","close-on-click?",-859981648),new cljs.core.Keyword(null,"bool","bool",1444635321)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caret?","caret?",1814896510),new cljs.core.Keyword(null,"bool","bool",1444635321)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.dropdown.dropdown_button,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,options)),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.map.call(null,((function (this__18502__auto____$1){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"value","value",305978217),i,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str("Option "),cljs.core.str(i)].join('')], null);
});})(this__18502__auto____$1))
,cljs.core.range.call(null,(5))),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (this__18502__auto____$1){
return (function (p1__19044_SHARP_){
return cljs.core.swap_BANG_.call(null,options,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__19044_SHARP_));
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"close-on-click?","close-on-click?",-859981648),new cljs.core.Keyword(null,"close-on-click?","close-on-click?",-859981648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,options)),new cljs.core.Keyword(null,"caret?","caret?",1814896510),new cljs.core.Keyword(null,"caret?","caret?",1814896510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,options))], null)], null)], null);
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

example.dropdown.t_example$dropdown19045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta19046","meta19046",1809460533,null)], null);
});

example.dropdown.t_example$dropdown19045.cljs$lang$type = true;

example.dropdown.t_example$dropdown19045.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown19045";

example.dropdown.t_example$dropdown19045.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.dropdown/t_example$dropdown19045");
});

example.dropdown.__GT_t_example$dropdown19045 = (function example$dropdown$__GT_t_example$dropdown19045(meta19046){
return (new example.dropdown.t_example$dropdown19045(meta19046));
});

}

return (new example.dropdown.t_example$dropdown19045(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"A dropdown button",new cljs.core.Keyword(null,"close-on-click?","close-on-click?",-859981648),true,new cljs.core.Keyword(null,"caret?","caret?",1814896510),true,new cljs.core.Keyword(null,"value","value",305978217),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));

//# sourceMappingURL=dropdown.js.map