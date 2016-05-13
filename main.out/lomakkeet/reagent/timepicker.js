// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.reagent.timepicker');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('lomakkeet.date');
goog.require('lomakkeet.reagent.impl');
lomakkeet.reagent.timepicker.allow_only_numbers = (function lomakkeet$reagent$timepicker$allow_only_numbers(e){
console.log(e.key);

if(!((((48) <= e.which)) && ((e.which <= (57))))){
return e.preventDefault();
} else {
return null;
}
});
lomakkeet.reagent.timepicker.validate_hours = (function lomakkeet$reagent$timepicker$validate_hours(h){
var hours_len = cljs.core.count.call(null,h);
var hours_val = parseInt(h);
if((cljs.core._EQ_.call(null,hours_len,(0))) || ((cljs.core._EQ_.call(null,hours_len,(1))) && ((((0) <= hours_val)) && ((hours_val <= (9))))) || ((cljs.core._EQ_.call(null,hours_len,(2))) && ((((0) <= hours_val)) && ((hours_val <= (23)))))){
return hours_val;
} else {
return null;
}
});
lomakkeet.reagent.timepicker.validate_minutes = (function lomakkeet$reagent$timepicker$validate_minutes(m){
var minutes_len = cljs.core.count.call(null,m);
var minutes_val = parseInt(m);
if((cljs.core._EQ_.call(null,minutes_len,(0))) || ((cljs.core._EQ_.call(null,minutes_len,(1))) && ((((0) <= minutes_val)) && ((minutes_val <= (9))))) || ((cljs.core._EQ_.call(null,minutes_len,(2))) && ((((0) <= minutes_val)) && ((minutes_val <= (59)))))){
return minutes_val;
} else {
return null;
}
});
lomakkeet.reagent.timepicker.padded_value = (function lomakkeet$reagent$timepicker$padded_value(value){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,value))){
return [cljs.core.str("0"),cljs.core.str(value)].join('');
} else {
return value;
}
});
lomakkeet.reagent.timepicker.timepicker = (function lomakkeet$reagent$timepicker$timepicker(p__20787){
var map__20799 = p__20787;
var map__20799__$1 = ((((!((map__20799 == null)))?((((map__20799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20799):map__20799);
var opts = map__20799__$1;
var value = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_select = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var on_blur = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var clearable_QMARK_ = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword(null,"clearable?","clearable?",661720997));
var hours = reagent.core.atom.call(null,null);
var minutes = reagent.core.atom.call(null,null);
return ((function (hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_){
return (function (p__20801){
var map__20802 = p__20801;
var map__20802__$1 = ((((!((map__20802 == null)))?((((map__20802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20802):map__20802);
var opts__$1 = map__20802__$1;
var value__$1 = cljs.core.get.call(null,map__20802__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_select__$1 = cljs.core.get.call(null,map__20802__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var on_blur__$1 = cljs.core.get.call(null,map__20802__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var clearable_QMARK___$1 = cljs.core.get.call(null,map__20802__$1,new cljs.core.Keyword(null,"clearable?","clearable?",661720997));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timepicker","div.timepicker",1815823668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.timepicker-hours","input.form-control.timepicker-hours",878730504),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"step","step",1288888124)],[(0),((function (map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_){
return (function (e){
var G__20804_20810 = e.key;
switch (G__20804_20810) {
case "Enter":
on_select__$1.call(null,(function (){var G__20805 = value__$1.clone();
G__20805.setHours(cljs.core.deref.call(null,hours));

return G__20805;
})());

cljs.core.reset_BANG_.call(null,hours,null);

break;
default:

}

return lomakkeet.reagent.timepicker.allow_only_numbers.call(null,e);
});})(map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_))
,"hh",(function (){var or__4988__auto__ = cljs.core.deref.call(null,hours);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return lomakkeet.reagent.timepicker.padded_value.call(null,[cljs.core.str(value__$1.getHours())].join(''));
}
})(),((function (map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,hours))){
on_select__$1.call(null,(function (){var G__20806 = value__$1.clone();
G__20806.setHours(cljs.core.deref.call(null,hours));

return G__20806;
})());
} else {
}

cljs.core.reset_BANG_.call(null,hours,null);

if(cljs.core.truth_(on_blur__$1)){
on_blur__$1.call(null,e);
} else {
}

return null;
});})(map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_))
,"number",(23),((function (map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_){
return (function (e){
var temp__4423__auto__ = lomakkeet.reagent.timepicker.validate_hours.call(null,e.target.value);
if(cljs.core.truth_(temp__4423__auto__)){
var x = temp__4423__auto__;
return cljs.core.reset_BANG_.call(null,hours,x);
} else {
return null;
}
});})(map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_))
,(1)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.timepicker-minutes","input.form-control.timepicker-minutes",1351802357),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"step","step",1288888124)],[(0),((function (map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_){
return (function (e){
var G__20807_20812 = e.key;
switch (G__20807_20812) {
case "Enter":
on_select__$1.call(null,(function (){var G__20808 = value__$1.clone();
G__20808.setMinutes(cljs.core.deref.call(null,minutes));

return G__20808;
})());

cljs.core.reset_BANG_.call(null,minutes,null);

break;
default:

}

return lomakkeet.reagent.timepicker.allow_only_numbers.call(null,e);
});})(map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_))
,"mm",(function (){var or__4988__auto__ = cljs.core.deref.call(null,minutes);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return lomakkeet.reagent.timepicker.padded_value.call(null,[cljs.core.str(value__$1.getMinutes())].join(''));
}
})(),((function (map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,minutes))){
on_select__$1.call(null,(function (){var G__20809 = value__$1.clone();
G__20809.setMinutes(cljs.core.deref.call(null,minutes));

return G__20809;
})());
} else {
}

cljs.core.reset_BANG_.call(null,minutes,null);

if(cljs.core.truth_(on_blur__$1)){
on_blur__$1.call(null,e);
} else {
}

return null;
});})(map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_))
,"number",(59),((function (map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_){
return (function (e){
var temp__4423__auto__ = lomakkeet.reagent.timepicker.validate_minutes.call(null,e.target.value);
if(cljs.core.truth_(temp__4423__auto__)){
var x = temp__4423__auto__;
return cljs.core.reset_BANG_.call(null,minutes,x);
} else {
return null;
}
});})(map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_))
,(1)])], null),(cljs.core.truth_(clearable_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove.timepicker-remove-btn","span.glyphicon.glyphicon-remove.timepicker-remove-btn",547147703),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_){
return (function (){
return on_select__$1.call(null,null);
});})(map__20802,map__20802__$1,opts__$1,value__$1,on_select__$1,on_blur__$1,clearable_QMARK___$1,hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_))
], null)], null):null)], null);
});
;})(hours,minutes,map__20799,map__20799__$1,opts,value,on_select,on_blur,clearable_QMARK_))
});
lomakkeet.reagent.timepicker.timepicker_STAR_ = (function lomakkeet$reagent$timepicker$timepicker_STAR_(form,p__20814){
var map__20817 = p__20814;
var map__20817__$1 = ((((!((map__20817 == null)))?((((map__20817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20817):map__20817);
var ks = cljs.core.get.call(null,map__20817__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var clearable_QMARK_ = cljs.core.get.call(null,map__20817__$1,new cljs.core.Keyword(null,"clearable?","clearable?",661720997));
var this$ = reagent.core.current_component.call(null);
var form_value = reagent.ratom.make_reaction.call(null,((function (this$,map__20817,map__20817__$1,ks,clearable_QMARK_){
return (function (){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form)));
});})(this$,map__20817,map__20817__$1,ks,clearable_QMARK_))
);
var value = reagent.ratom.make_reaction.call(null,((function (this$,form_value,map__20817,map__20817__$1,ks,clearable_QMARK_){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,form_value),ks);
});})(this$,form_value,map__20817,map__20817__$1,ks,clearable_QMARK_))
);
return ((function (this$,form_value,value,map__20817,map__20817__$1,ks,clearable_QMARK_){
return (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.timepicker.timepicker,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (this$,form_value,value,map__20817,map__20817__$1,ks,clearable_QMARK_){
return (function (){
return lomakkeet.reagent.impl.blur.call(null,form,ks);
});})(this$,form_value,value,map__20817,map__20817__$1,ks,clearable_QMARK_))
,new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (this$,form_value,value,map__20817,map__20817__$1,ks,clearable_QMARK_){
return (function (date){
return lomakkeet.reagent.impl.cb.call(null,form,ks,date);
});})(this$,form_value,value,map__20817,map__20817__$1,ks,clearable_QMARK_))
,new cljs.core.Keyword(null,"clearable?","clearable?",661720997),clearable_QMARK_], null)], null);
});
;})(this$,form_value,value,map__20817,map__20817__$1,ks,clearable_QMARK_))
});

//# sourceMappingURL=timepicker.js.map