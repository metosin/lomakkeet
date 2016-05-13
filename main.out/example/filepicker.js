// Compiled by ClojureScript 1.7.170 {}
goog.provide('example.filepicker');
goog.require('cljs.core');
goog.require('lomakkeet.reagent.filepicker');
goog.require('reagent.core');
goog.require('devcards.core');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.filepicker","example.filepicker",-2038533982),new cljs.core.Keyword(null,"filepicker","filepicker",1129245490)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"filepicker",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.filepicker.t_example$filepicker20994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.filepicker.t_example$filepicker20994 = (function (meta20995){
this.meta20995 = meta20995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.filepicker.t_example$filepicker20994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20996,meta20995__$1){
var self__ = this;
var _20996__$1 = this;
return (new example.filepicker.t_example$filepicker20994(meta20995__$1));
});

example.filepicker.t_example$filepicker20994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20996){
var self__ = this;
var _20996__$1 = this;
return self__.meta20995;
});

example.filepicker.t_example$filepicker20994.prototype.devcards$core$IDevcardOptions$ = true;

example.filepicker.t_example$filepicker20994.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (value1,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.filepicker.filepicker,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value1),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (this__18502__auto____$1){
return (function (p1__20993_SHARP_){
return cljs.core.reset_BANG_.call(null,value1,p1__20993_SHARP_);
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"file-select-label","file-select-label",89488379),"Select a file"], null)], null);
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

example.filepicker.t_example$filepicker20994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20995","meta20995",-74161042,null)], null);
});

example.filepicker.t_example$filepicker20994.cljs$lang$type = true;

example.filepicker.t_example$filepicker20994.cljs$lang$ctorStr = "example.filepicker/t_example$filepicker20994";

example.filepicker.t_example$filepicker20994.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.filepicker/t_example$filepicker20994");
});

example.filepicker.__GT_t_example$filepicker20994 = (function example$filepicker$__GT_t_example$filepicker20994(meta20995){
return (new example.filepicker.t_example$filepicker20994(meta20995));
});

}

return (new example.filepicker.t_example$filepicker20994(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,null),new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.filepicker","example.filepicker",-2038533982),new cljs.core.Keyword(null,"filepicker-clearable","filepicker-clearable",-250041724)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"filepicker-clearable",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.filepicker.t_example$filepicker20998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.filepicker.t_example$filepicker20998 = (function (meta20999){
this.meta20999 = meta20999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.filepicker.t_example$filepicker20998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21000,meta20999__$1){
var self__ = this;
var _21000__$1 = this;
return (new example.filepicker.t_example$filepicker20998(meta20999__$1));
});

example.filepicker.t_example$filepicker20998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21000){
var self__ = this;
var _21000__$1 = this;
return self__.meta20999;
});

example.filepicker.t_example$filepicker20998.prototype.devcards$core$IDevcardOptions$ = true;

example.filepicker.t_example$filepicker20998.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (value1,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.filepicker.filepicker,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value1),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (this__18502__auto____$1){
return (function (p1__20997_SHARP_){
return cljs.core.reset_BANG_.call(null,value1,p1__20997_SHARP_);
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"file-select-label","file-select-label",89488379),"Select a file",new cljs.core.Keyword(null,"clearable?","clearable?",661720997),true], null)], null);
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

example.filepicker.t_example$filepicker20998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20999","meta20999",-220432296,null)], null);
});

example.filepicker.t_example$filepicker20998.cljs$lang$type = true;

example.filepicker.t_example$filepicker20998.cljs$lang$ctorStr = "example.filepicker/t_example$filepicker20998";

example.filepicker.t_example$filepicker20998.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.filepicker/t_example$filepicker20998");
});

example.filepicker.__GT_t_example$filepicker20998 = (function example$filepicker$__GT_t_example$filepicker20998(meta20999){
return (new example.filepicker.t_example$filepicker20998(meta20999));
});

}

return (new example.filepicker.t_example$filepicker20998(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,null),new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
example.filepicker.clear_button = (function example$filepicker$clear_button(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.PersistentVector.EMPTY);

return null;
})], null),"Empty"], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.filepicker","example.filepicker",-2038533982),new cljs.core.Keyword(null,"drag-and-drop","drag-and-drop",-1528484051)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"drag-and-drop",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.filepicker.t_example$filepicker21002 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.filepicker.t_example$filepicker21002 = (function (meta21003){
this.meta21003 = meta21003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.filepicker.t_example$filepicker21002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21004,meta21003__$1){
var self__ = this;
var _21004__$1 = this;
return (new example.filepicker.t_example$filepicker21002(meta21003__$1));
});

example.filepicker.t_example$filepicker21002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21004){
var self__ = this;
var _21004__$1 = this;
return self__.meta21003;
});

example.filepicker.t_example$filepicker21002.prototype.devcards$core$IDevcardOptions$ = true;

example.filepicker.t_example$filepicker21002.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (state,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,lomakkeet.reagent.filepicker.drop_area.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-file-drop","on-file-drop",-376277559),((function (this__18502__auto____$1){
return (function (files){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.into,files);
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"on-active-change","on-active-change",286676332),((function (this__18502__auto____$1){
return (function (p1__21001_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active?","active?",459499776),p1__21001_SHARP_);
});})(this__18502__auto____$1))
], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"40px",new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"2px dotted #888":"2px dotted #ccc")], null)], null)),"Drop a file here",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.filepicker.clear_button,state], null)], null)], null);
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

example.filepicker.t_example$filepicker21002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21003","meta21003",-1646534807,null)], null);
});

example.filepicker.t_example$filepicker21002.cljs$lang$type = true;

example.filepicker.t_example$filepicker21002.cljs$lang$ctorStr = "example.filepicker/t_example$filepicker21002";

example.filepicker.t_example$filepicker21002.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.filepicker/t_example$filepicker21002");
});

example.filepicker.__GT_t_example$filepicker21002 = (function example$filepicker$__GT_t_example$filepicker21002(meta21003){
return (new example.filepicker.t_example$filepicker21002(meta21003));
});

}

return (new example.filepicker.t_example$filepicker21002(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active?","active?",459499776),false], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));

//# sourceMappingURL=filepicker.js.map