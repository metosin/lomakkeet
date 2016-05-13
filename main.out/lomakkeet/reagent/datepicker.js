// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.reagent.datepicker');
goog.require('cljs.core');
goog.require('cljsjs.pikaday.with_moment');
goog.require('goog.string');
goog.require('lomakkeet.reagent.impl');
goog.require('lomakkeet.date');
goog.require('reagent.ratom');
goog.require('reagent.core');
goog.require('lomakkeet.core');
lomakkeet.reagent.datepicker.date = (function lomakkeet$reagent$datepicker$date(p__20826){
var map__20836 = p__20826;
var map__20836__$1 = ((((!((map__20836 == null)))?((((map__20836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20836):map__20836);
var disabled_QMARK_ = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_clear = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891));
var min_date = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"min-date","min-date",999087300));
var max_date = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"max-date","max-date",-1725227804));
var clearable_QMARK_ = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"clearable?","clearable?",661720997));
var value = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_blur = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var datepicker_i18n = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"datepicker-i18n","datepicker-i18n",449667371));
var date_time_QMARK_ = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"date-time?","date-time?",-1139110382));
var on_select = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var attrs = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var el = cljs.core.atom.call(null,null);
var coerce = (cljs.core.truth_(date_time_QMARK_)?lomakkeet.date.jsdate__GT_date_time:lomakkeet.date.jsdate__GT_local_date);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (el,coerce,map__20836,map__20836__$1,disabled_QMARK_,on_clear,min_date,max_date,clearable_QMARK_,value,on_blur,datepicker_i18n,date_time_QMARK_,on_select,attrs){
return (function (this$){
return cljs.core.reset_BANG_.call(null,el,(function (){var G__20838 = (new Pikaday(cljs.core.clj__GT_js.call(null,(function (){var G__20839 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),reagent.core.dom_node.call(null,this$),new cljs.core.Keyword(null,"format","format",-1306924766),"D.M.YYYY",new cljs.core.Keyword(null,"firstDay","firstDay",126302838),(1),new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (el,coerce,map__20836,map__20836__$1,disabled_QMARK_,on_clear,min_date,max_date,clearable_QMARK_,value,on_blur,datepicker_i18n,date_time_QMARK_,on_select,attrs){
return (function (date__$1){
return on_select.call(null,coerce.call(null,date__$1));
});})(el,coerce,map__20836,map__20836__$1,disabled_QMARK_,on_clear,min_date,max_date,clearable_QMARK_,value,on_blur,datepicker_i18n,date_time_QMARK_,on_select,attrs))
], null);
var G__20839__$1 = (cljs.core.truth_(datepicker_i18n)?cljs.core.assoc.call(null,G__20839,new cljs.core.Keyword(null,"i18n","i18n",-563422499),datepicker_i18n):G__20839);
return G__20839__$1;
})())));
G__20838.setDate(lomakkeet.date.date_format.call(null,value,"yyyy-MM-dd"));

G__20838.setMinDate(min_date);

G__20838.setMaxDate(max_date);

return G__20838;
})());
});})(el,coerce,map__20836,map__20836__$1,disabled_QMARK_,on_clear,min_date,max_date,clearable_QMARK_,value,on_blur,datepicker_i18n,date_time_QMARK_,on_select,attrs))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (el,coerce,map__20836,map__20836__$1,disabled_QMARK_,on_clear,min_date,max_date,clearable_QMARK_,value,on_blur,datepicker_i18n,date_time_QMARK_,on_select,attrs){
return (function (this$,_){
var map__20840 = reagent.core.props.call(null,this$);
var map__20840__$1 = ((((!((map__20840 == null)))?((((map__20840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20840):map__20840);
var min_date__$1 = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"min-date","min-date",999087300));
var max_date__$1 = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"max-date","max-date",-1725227804));
cljs.core.deref.call(null,el).setMinDate(min_date__$1);

return cljs.core.deref.call(null,el).setMaxDate(max_date__$1);
});})(el,coerce,map__20836,map__20836__$1,disabled_QMARK_,on_clear,min_date,max_date,clearable_QMARK_,value,on_blur,datepicker_i18n,date_time_QMARK_,on_select,attrs))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (el,coerce,map__20836,map__20836__$1,disabled_QMARK_,on_clear,min_date,max_date,clearable_QMARK_,value,on_blur,datepicker_i18n,date_time_QMARK_,on_select,attrs){
return (function (p__20842){
var map__20843 = p__20842;
var map__20843__$1 = ((((!((map__20843 == null)))?((((map__20843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20843):map__20843);
var value__$1 = cljs.core.get.call(null,map__20843__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_blur__$1 = cljs.core.get.call(null,map__20843__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var attrs__$1 = cljs.core.get.call(null,map__20843__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var clearable_QMARK___$1 = cljs.core.get.call(null,map__20843__$1,new cljs.core.Keyword(null,"clearable?","clearable?",661720997));
var disabled_QMARK___$1 = cljs.core.get.call(null,map__20843__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_clear__$1 = cljs.core.get.call(null,map__20843__$1,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-calendar","span.glyphicon.glyphicon-calendar",-1391996336)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,attrs__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4988__auto__ = lomakkeet.date.date__GT_str.call(null,value__$1);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.identity,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),on_blur__$1], null))], null),(cljs.core.truth_(clearable_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-btn","span.input-group-btn",358441272),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__20843,map__20843__$1,value__$1,on_blur__$1,attrs__$1,clearable_QMARK___$1,disabled_QMARK___$1,on_clear__$1,el,coerce,map__20836,map__20836__$1,disabled_QMARK_,on_clear,min_date,max_date,clearable_QMARK_,value,on_blur,datepicker_i18n,date_time_QMARK_,on_select,attrs){
return (function (e){
if(cljs.core.truth_(on_clear__$1)){
on_clear__$1.call(null,e);
} else {
on_select.call(null,null);
}

cljs.core.deref.call(null,el).hide();

return null;
});})(map__20843,map__20843__$1,value__$1,on_blur__$1,attrs__$1,clearable_QMARK___$1,disabled_QMARK___$1,on_clear__$1,el,coerce,map__20836,map__20836__$1,disabled_QMARK_,on_clear,min_date,max_date,clearable_QMARK_,value,on_blur,datepicker_i18n,date_time_QMARK_,on_select,attrs))
], null),"\u00D7"], null)], null):null)], null);
});})(el,coerce,map__20836,map__20836__$1,disabled_QMARK_,on_clear,min_date,max_date,clearable_QMARK_,value,on_blur,datepicker_i18n,date_time_QMARK_,on_select,attrs))
], null));
});
lomakkeet.reagent.datepicker.try_deref = (function lomakkeet$reagent$datepicker$try_deref(x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
lomakkeet.reagent.datepicker.date_STAR_ = (function lomakkeet$reagent$datepicker$date_STAR_(form,p__20847){
var map__20853 = p__20847;
var map__20853__$1 = ((((!((map__20853 == null)))?((((map__20853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20853):map__20853);
var ks = cljs.core.get.call(null,map__20853__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var datepicker_i18n = cljs.core.get.call(null,map__20853__$1,new cljs.core.Keyword(null,"datepicker-i18n","datepicker-i18n",449667371));
var min_date = cljs.core.get.call(null,map__20853__$1,new cljs.core.Keyword(null,"min-date","min-date",999087300));
var max_date = cljs.core.get.call(null,map__20853__$1,new cljs.core.Keyword(null,"max-date","max-date",-1725227804));
var date_time_QMARK_ = cljs.core.get.call(null,map__20853__$1,new cljs.core.Keyword(null,"date-time?","date-time?",-1139110382));
var clearable_QMARK_ = cljs.core.get.call(null,map__20853__$1,new cljs.core.Keyword(null,"clearable?","clearable?",661720997));
var disabled = cljs.core.get.call(null,map__20853__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var this$ = reagent.core.current_component.call(null);
var form_value = reagent.ratom.make_reaction.call(null,((function (this$,map__20853,map__20853__$1,ks,datepicker_i18n,min_date,max_date,date_time_QMARK_,clearable_QMARK_,disabled){
return (function (){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form)));
});})(this$,map__20853,map__20853__$1,ks,datepicker_i18n,min_date,max_date,date_time_QMARK_,clearable_QMARK_,disabled))
);
var value = reagent.ratom.make_reaction.call(null,((function (this$,form_value,map__20853,map__20853__$1,ks,datepicker_i18n,min_date,max_date,date_time_QMARK_,clearable_QMARK_,disabled){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,form_value),ks);
});})(this$,form_value,map__20853,map__20853__$1,ks,datepicker_i18n,min_date,max_date,date_time_QMARK_,clearable_QMARK_,disabled))
);
return ((function (this$,form_value,value,map__20853,map__20853__$1,ks,datepicker_i18n,min_date,max_date,date_time_QMARK_,clearable_QMARK_,disabled){
return (function (_,p__20855){
var map__20856 = p__20855;
var map__20856__$1 = ((((!((map__20856 == null)))?((((map__20856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20856):map__20856);
var ks__$1 = cljs.core.get.call(null,map__20856__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var datepicker_i18n__$1 = cljs.core.get.call(null,map__20856__$1,new cljs.core.Keyword(null,"datepicker-i18n","datepicker-i18n",449667371));
var min_date__$1 = cljs.core.get.call(null,map__20856__$1,new cljs.core.Keyword(null,"min-date","min-date",999087300));
var max_date__$1 = cljs.core.get.call(null,map__20856__$1,new cljs.core.Keyword(null,"max-date","max-date",-1725227804));
var date_time_QMARK___$1 = cljs.core.get.call(null,map__20856__$1,new cljs.core.Keyword(null,"date-time?","date-time?",-1139110382));
var disabled__$1 = cljs.core.get.call(null,map__20856__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.datepicker.date,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-clear","on-clear",2009781891),new cljs.core.Keyword(null,"min-date","min-date",999087300),new cljs.core.Keyword(null,"max-date","max-date",-1725227804),new cljs.core.Keyword(null,"clearable?","clearable?",661720997),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"datepicker-i18n","datepicker-i18n",449667371),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"date-time?","date-time?",-1139110382),new cljs.core.Keyword(null,"on-select","on-select",-192407950)],[((function (map__20856,map__20856__$1,ks__$1,datepicker_i18n__$1,min_date__$1,max_date__$1,date_time_QMARK___$1,disabled__$1,this$,form_value,value,map__20853,map__20853__$1,ks,datepicker_i18n,min_date,max_date,date_time_QMARK_,clearable_QMARK_,disabled){
return (function (e){
return lomakkeet.reagent.impl.cb.call(null,form,ks__$1,null);
});})(map__20856,map__20856__$1,ks__$1,datepicker_i18n__$1,min_date__$1,max_date__$1,date_time_QMARK___$1,disabled__$1,this$,form_value,value,map__20853,map__20853__$1,ks,datepicker_i18n,min_date,max_date,date_time_QMARK_,clearable_QMARK_,disabled))
,min_date__$1,max_date__$1,clearable_QMARK_,lomakkeet.reagent.datepicker.try_deref.call(null,disabled__$1),cljs.core.deref.call(null,value),datepicker_i18n__$1,((function (map__20856,map__20856__$1,ks__$1,datepicker_i18n__$1,min_date__$1,max_date__$1,date_time_QMARK___$1,disabled__$1,this$,form_value,value,map__20853,map__20853__$1,ks,datepicker_i18n,min_date,max_date,date_time_QMARK_,clearable_QMARK_,disabled){
return (function (){
return lomakkeet.reagent.impl.blur.call(null,form,ks__$1);
});})(map__20856,map__20856__$1,ks__$1,datepicker_i18n__$1,min_date__$1,max_date__$1,date_time_QMARK___$1,disabled__$1,this$,form_value,value,map__20853,map__20853__$1,ks,datepicker_i18n,min_date,max_date,date_time_QMARK_,clearable_QMARK_,disabled))
,date_time_QMARK___$1,((function (map__20856,map__20856__$1,ks__$1,datepicker_i18n__$1,min_date__$1,max_date__$1,date_time_QMARK___$1,disabled__$1,this$,form_value,value,map__20853,map__20853__$1,ks,datepicker_i18n,min_date,max_date,date_time_QMARK_,clearable_QMARK_,disabled){
return (function (date){
return lomakkeet.reagent.impl.cb.call(null,form,ks__$1,date);
});})(map__20856,map__20856__$1,ks__$1,datepicker_i18n__$1,min_date__$1,max_date__$1,date_time_QMARK___$1,disabled__$1,this$,form_value,value,map__20853,map__20853__$1,ks,datepicker_i18n,min_date,max_date,date_time_QMARK_,clearable_QMARK_,disabled))
])], null);
});
;})(this$,form_value,value,map__20853,map__20853__$1,ks,datepicker_i18n,min_date,max_date,date_time_QMARK_,clearable_QMARK_,disabled))
});

//# sourceMappingURL=datepicker.js.map