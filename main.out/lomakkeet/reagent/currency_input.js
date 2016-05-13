// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.reagent.currency_input');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('clojure.string');
goog.require('lomakkeet.core');
goog.require('lomakkeet.reagent.impl');
lomakkeet.reagent.currency_input.zero_to_end = (function lomakkeet$reagent$currency_input$zero_to_end(s){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,s))){
return [cljs.core.str(s),cljs.core.str("0")].join('');
} else {
return s;
}
});
lomakkeet.reagent.currency_input.str__GT_currency = (function lomakkeet$reagent$currency_input$str__GT_currency(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
var vec__20757 = cljs.core.re_find.call(null,/([-])?(\d*)([,.](\d*))?/,clojure.string.replace.call(null,s,/\s/,""));
var _ = cljs.core.nth.call(null,vec__20757,(0),null);
var minus_QMARK_ = cljs.core.nth.call(null,vec__20757,(1),null);
var a = cljs.core.nth.call(null,vec__20757,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__20757,(3),null);
var b = cljs.core.nth.call(null,vec__20757,(4),null);
var f = ((cljs.core.seq.call(null,minus_QMARK_))?cljs.core._:cljs.core.identity);
return f.call(null,(cljs.core.long$.call(null,((100) * a)) + (function (){var G__20758 = b;
var G__20758__$1 = (((G__20758 == null))?null:G__20758.substring((0),(2)));
var G__20758__$2 = (((G__20758__$1 == null))?null:lomakkeet.reagent.currency_input.zero_to_end.call(null,G__20758__$1));
var G__20758__$3 = (((G__20758__$2 == null))?null:cljs.core.long$.call(null,G__20758__$2));
return G__20758__$3;
})()));
}
});
lomakkeet.reagent.currency_input.padded_value = (function lomakkeet$reagent$currency_input$padded_value(value){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,value))){
return [cljs.core.str("0"),cljs.core.str(value)].join('');
} else {
return value;
}
});
lomakkeet.reagent.currency_input.currency__GT_str = (function lomakkeet$reagent$currency_input$currency__GT_str(value,delimiter){
if((value == null)){
return "";
} else {
return [cljs.core.str(cljs.core.long$.call(null,(value / (100)))),cljs.core.str(delimiter),cljs.core.str(lomakkeet.reagent.currency_input.padded_value.call(null,[cljs.core.str(cljs.core.mod.call(null,Math.abs(value),(100)))].join('')))].join('');
}
});
lomakkeet.reagent.currency_input.currency_input = (function lomakkeet$reagent$currency_input$currency_input(p__20759){
var map__20766 = p__20759;
var map__20766__$1 = ((((!((map__20766 == null)))?((((map__20766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20766):map__20766);
var value = cljs.core.get.call(null,map__20766__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.call(null,map__20766__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.call(null,map__20766__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var currency_symbol = cljs.core.get.call(null,map__20766__$1,new cljs.core.Keyword(null,"currency-symbol","currency-symbol",1055725502));
var delimiter = cljs.core.get.call(null,map__20766__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000));
var temp = reagent.core.atom.call(null,null);
return ((function (temp,map__20766,map__20766__$1,value,on_change,on_blur,currency_symbol,delimiter){
return (function (p__20768){
var map__20769 = p__20768;
var map__20769__$1 = ((((!((map__20769 == null)))?((((map__20769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20769):map__20769);
var value__$1 = cljs.core.get.call(null,map__20769__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change__$1 = cljs.core.get.call(null,map__20769__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur__$1 = cljs.core.get.call(null,map__20769__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var currency_symbol__$1 = cljs.core.get.call(null,map__20769__$1,new cljs.core.Keyword(null,"currency-symbol","currency-symbol",1055725502));
var delimiter__$1 = cljs.core.get.call(null,map__20769__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group","span.input-group",-1467501169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4988__auto__ = cljs.core.deref.call(null,temp);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return lomakkeet.reagent.currency_input.currency__GT_str.call(null,value__$1,(function (){var or__4988__auto____$1 = delimiter__$1;
if(cljs.core.truth_(or__4988__auto____$1)){
return or__4988__auto____$1;
} else {
return ".";
}
})());
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__20769,map__20769__$1,value__$1,on_change__$1,on_blur__$1,currency_symbol__$1,delimiter__$1,temp,map__20766,map__20766__$1,value,on_change,on_blur,currency_symbol,delimiter){
return (function (e){
cljs.core.reset_BANG_.call(null,temp,e.target.value);

return null;
});})(map__20769,map__20769__$1,value__$1,on_change__$1,on_blur__$1,currency_symbol__$1,delimiter__$1,temp,map__20766,map__20766__$1,value,on_change,on_blur,currency_symbol,delimiter))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__20769,map__20769__$1,value__$1,on_change__$1,on_blur__$1,currency_symbol__$1,delimiter__$1,temp,map__20766,map__20766__$1,value,on_change,on_blur,currency_symbol,delimiter){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,temp))){
on_change__$1.call(null,lomakkeet.reagent.currency_input.str__GT_currency.call(null,cljs.core.deref.call(null,temp)));
} else {
}

cljs.core.reset_BANG_.call(null,temp,null);

if(cljs.core.truth_(on_blur__$1)){
on_blur__$1.call(null,e);
} else {
}

return null;
});})(map__20769,map__20769__$1,value__$1,on_change__$1,on_blur__$1,currency_symbol__$1,delimiter__$1,temp,map__20766,map__20766__$1,value,on_change,on_blur,currency_symbol,delimiter))
,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),((function (map__20769,map__20769__$1,value__$1,on_change__$1,on_blur__$1,currency_symbol__$1,delimiter__$1,temp,map__20766,map__20766__$1,value,on_change,on_blur,currency_symbol,delimiter){
return (function (e){
var G__20771_20772 = e.key;
switch (G__20771_20772) {
case "Enter":
if(cljs.core.truth_(cljs.core.deref.call(null,temp))){
on_change__$1.call(null,lomakkeet.reagent.currency_input.str__GT_currency.call(null,cljs.core.deref.call(null,temp)));
} else {
}

cljs.core.reset_BANG_.call(null,temp,null);

break;
default:

}

return null;
});})(map__20769,map__20769__$1,value__$1,on_change__$1,on_blur__$1,currency_symbol__$1,delimiter__$1,temp,map__20766,map__20766__$1,value,on_change,on_blur,currency_symbol,delimiter))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),(function (){var or__4988__auto__ = currency_symbol__$1;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return "\u20AC";
}
})()], null)], null);
});
;})(temp,map__20766,map__20766__$1,value,on_change,on_blur,currency_symbol,delimiter))
});
lomakkeet.reagent.currency_input.currency_input_STAR_ = (function lomakkeet$reagent$currency_input$currency_input_STAR_(form,p__20774){
var map__20780 = p__20774;
var map__20780__$1 = ((((!((map__20780 == null)))?((((map__20780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20780):map__20780);
var ks = cljs.core.get.call(null,map__20780__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var currency_symbol = cljs.core.get.call(null,map__20780__$1,new cljs.core.Keyword(null,"currency-symbol","currency-symbol",1055725502));
var delimiter = cljs.core.get.call(null,map__20780__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000));
var form_value = reagent.ratom.make_reaction.call(null,((function (map__20780,map__20780__$1,ks,currency_symbol,delimiter){
return (function (){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form)));
});})(map__20780,map__20780__$1,ks,currency_symbol,delimiter))
);
var value = reagent.ratom.make_reaction.call(null,((function (form_value,map__20780,map__20780__$1,ks,currency_symbol,delimiter){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,form_value),ks);
});})(form_value,map__20780,map__20780__$1,ks,currency_symbol,delimiter))
);
return ((function (form_value,value,map__20780,map__20780__$1,ks,currency_symbol,delimiter){
return (function (form__$1,p__20782){
var map__20783 = p__20782;
var map__20783__$1 = ((((!((map__20783 == null)))?((((map__20783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20783):map__20783);
var ks__$1 = cljs.core.get.call(null,map__20783__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var currency_symbol__$1 = cljs.core.get.call(null,map__20783__$1,new cljs.core.Keyword(null,"currency-symbol","currency-symbol",1055725502));
var delimiter__$1 = cljs.core.get.call(null,map__20783__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.currency_input.currency_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__20783,map__20783__$1,ks__$1,currency_symbol__$1,delimiter__$1,form_value,value,map__20780,map__20780__$1,ks,currency_symbol,delimiter){
return (function (){
return lomakkeet.reagent.impl.blur.call(null,form__$1,ks__$1);
});})(map__20783,map__20783__$1,ks__$1,currency_symbol__$1,delimiter__$1,form_value,value,map__20780,map__20780__$1,ks,currency_symbol,delimiter))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__20783,map__20783__$1,ks__$1,currency_symbol__$1,delimiter__$1,form_value,value,map__20780,map__20780__$1,ks,currency_symbol,delimiter){
return (function (value__$1){
return lomakkeet.reagent.impl.cb.call(null,form__$1,ks__$1,value__$1);
});})(map__20783,map__20783__$1,ks__$1,currency_symbol__$1,delimiter__$1,form_value,value,map__20780,map__20780__$1,ks,currency_symbol,delimiter))
,new cljs.core.Keyword(null,"currency-symbol","currency-symbol",1055725502),currency_symbol__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),delimiter__$1], null)], null);
});
;})(form_value,value,map__20780,map__20780__$1,ks,currency_symbol,delimiter))
});

//# sourceMappingURL=currency_input.js.map