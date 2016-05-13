// Compiled by ClojureScript 1.7.170 {}
goog.provide('example.currency_input');
goog.require('cljs.core');
goog.require('lomakkeet.reagent.currency_input');
goog.require('reagent.core');
goog.require('cljs.test');
goog.require('devcards.core');
goog.require('goog.date.Date');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.currency_input","example.currency_input",-1967783240),new cljs.core.Keyword(null,"currency-input","currency-input",-1435779044)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"currency-input",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.currency_input.t_example$currency_input21032 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.currency_input.t_example$currency_input21032 = (function (meta21033){
this.meta21033 = meta21033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.currency_input.t_example$currency_input21032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21034,meta21033__$1){
var self__ = this;
var _21034__$1 = this;
return (new example.currency_input.t_example$currency_input21032(meta21033__$1));
});

example.currency_input.t_example$currency_input21032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21034){
var self__ = this;
var _21034__$1 = this;
return self__.meta21033;
});

example.currency_input.t_example$currency_input21032.prototype.devcards$core$IDevcardOptions$ = true;

example.currency_input.t_example$currency_input21032.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.currency_input.currency_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (this__18502__auto____$1){
return (function (x){
return cljs.core.reset_BANG_.call(null,value,x);
});})(this__18502__auto____$1))
,new cljs.core.Keyword(null,"currency-symbol","currency-symbol",1055725502),"\u20AC"], null)], null);
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

example.currency_input.t_example$currency_input21032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21033","meta21033",-1836392987,null)], null);
});

example.currency_input.t_example$currency_input21032.cljs$lang$type = true;

example.currency_input.t_example$currency_input21032.cljs$lang$ctorStr = "example.currency-input/t_example$currency_input21032";

example.currency_input.t_example$currency_input21032.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.currency-input/t_example$currency_input21032");
});

example.currency_input.__GT_t_example$currency_input21032 = (function example$currency_input$__GT_t_example$currency_input21032(meta21033){
return (new example.currency_input.t_example$currency_input21032(meta21033));
});

}

return (new example.currency_input.t_example$currency_input21032(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.currency_input","example.currency_input",-1967783240),new cljs.core.Keyword(null,"str->currency-test","str->currency-test",-760356067)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"str->currency-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10.0")),(1000));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21035){var t__17034__auto__ = e21035;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.0")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10,0")),(1000));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10,0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10,0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21036){var t__17034__auto__ = e21036;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10,0")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10.50")),(1050));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.50")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.50")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21037){var t__17034__auto__ = e21037;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.50")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null," \t10.50")),(1050));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null)," \t10.50")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null)," \t10.50")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21038){var t__17034__auto__ = e21038;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null)," \t10.50")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10.50abc")),(1050));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.50abc")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.50abc")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21039){var t__17034__auto__ = e21039;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.50abc")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10,50")),(1050));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10,50")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10,50")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21040){var t__17034__auto__ = e21040;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10,50")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10.505")),(1050));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.505")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.505")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21041){var t__17034__auto__ = e21041;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.505")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10")),(1000));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21042){var t__17034__auto__ = e21042;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10 000")),(1000000));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10 000")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10 000")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21043){var t__17034__auto__ = e21043;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10 000")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"1 000 000")),(100000000));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(100000000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"1 000 000")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(100000000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"1 000 000")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21044){var t__17034__auto__ = e21044;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(100000000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"1 000 000")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,".10")),(10));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),".10")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),".10")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21045){var t__17034__auto__ = e21045;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),".10")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,",10")),(10));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),",10")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),",10")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21046){var t__17034__auto__ = e21046;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),",10")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"-10,55")),(-1055));
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1055),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"-10,55")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1055),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"-10,55")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21047){var t__17034__auto__ = e21047;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1055),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"-10,55")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"")),null);
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21048){var t__17034__auto__ = e21048;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"  \t")),null);
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"  \t")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"  \t")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21049){var t__17034__auto__ = e21049;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"  \t")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

example.currency_input.str__GT_currency_test = (function example$currency_input$str__GT_currency_test(){
return cljs.test.test_var.call(null,example$currency_input$str__GT_currency_test.cljs$lang$var);
});
example.currency_input.str__GT_currency_test.cljs$lang$test = (function (){
try{var values__16996__auto___21065 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10.0")),(1000));
var result__16997__auto___21066 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21065);
if(cljs.core.truth_(result__16997__auto___21066)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21065),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21065)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21050){var t__17034__auto___21067 = e21050;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.0")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21067,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21068 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10,0")),(1000));
var result__16997__auto___21069 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21068);
if(cljs.core.truth_(result__16997__auto___21069)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10,0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21068),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10,0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21068)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21051){var t__17034__auto___21070 = e21051;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10,0")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21070,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21071 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10.50")),(1050));
var result__16997__auto___21072 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21071);
if(cljs.core.truth_(result__16997__auto___21072)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.50")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21071),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.50")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21071)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21052){var t__17034__auto___21073 = e21052;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.50")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21073,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21074 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null," \t10.50")),(1050));
var result__16997__auto___21075 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21074);
if(cljs.core.truth_(result__16997__auto___21075)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null)," \t10.50")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21074),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null)," \t10.50")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21074)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21053){var t__17034__auto___21076 = e21053;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null)," \t10.50")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21076,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21077 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10.50abc")),(1050));
var result__16997__auto___21078 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21077);
if(cljs.core.truth_(result__16997__auto___21078)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.50abc")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21077),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.50abc")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21077)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21054){var t__17034__auto___21079 = e21054;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.50abc")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21079,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21080 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10,50")),(1050));
var result__16997__auto___21081 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21080);
if(cljs.core.truth_(result__16997__auto___21081)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10,50")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21080),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10,50")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21080)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21055){var t__17034__auto___21082 = e21055;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10,50")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21082,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21083 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10.505")),(1050));
var result__16997__auto___21084 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21083);
if(cljs.core.truth_(result__16997__auto___21084)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.505")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21083),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.505")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21083)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21056){var t__17034__auto___21085 = e21056;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1050),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10.505")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21085,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21086 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10")),(1000));
var result__16997__auto___21087 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21086);
if(cljs.core.truth_(result__16997__auto___21087)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21086),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21086)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21057){var t__17034__auto___21088 = e21057;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21088,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21089 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"10 000")),(1000000));
var result__16997__auto___21090 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21089);
if(cljs.core.truth_(result__16997__auto___21090)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10 000")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21089),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10 000")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21089)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21058){var t__17034__auto___21091 = e21058;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1000000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"10 000")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21091,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21092 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"1 000 000")),(100000000));
var result__16997__auto___21093 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21092);
if(cljs.core.truth_(result__16997__auto___21093)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(100000000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"1 000 000")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21092),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(100000000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"1 000 000")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21092)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21059){var t__17034__auto___21094 = e21059;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(100000000),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"1 000 000")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21094,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21095 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,".10")),(10));
var result__16997__auto___21096 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21095);
if(cljs.core.truth_(result__16997__auto___21096)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),".10")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21095),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),".10")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21095)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21060){var t__17034__auto___21097 = e21060;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),".10")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21097,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21098 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,",10")),(10));
var result__16997__auto___21099 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21098);
if(cljs.core.truth_(result__16997__auto___21099)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),",10")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21098),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),",10")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21098)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21061){var t__17034__auto___21100 = e21061;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),",10")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21100,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21101 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"-10,55")),(-1055));
var result__16997__auto___21102 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21101);
if(cljs.core.truth_(result__16997__auto___21102)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1055),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"-10,55")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21101),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1055),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"-10,55")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21101)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21062){var t__17034__auto___21103 = e21062;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1055),cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"-10,55")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21103,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21104 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"")),null);
var result__16997__auto___21105 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21104);
if(cljs.core.truth_(result__16997__auto___21105)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21104),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21104)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21063){var t__17034__auto___21106 = e21063;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21106,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.str__GT_currency.call(null,"  \t")),null);
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"  \t")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"  \t")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21064){var t__17034__auto__ = e21064;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("currency-input","str->currency","currency-input/str->currency",-862613446,null),"  \t")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

example.currency_input.str__GT_currency_test.cljs$lang$var = new cljs.core.Var(function(){return example.currency_input.str__GT_currency_test;},new cljs.core.Symbol("example.currency-input","str->currency-test","example.currency-input/str->currency-test",1290230154,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"example.currency-input","example.currency-input",-1507252553,null),new cljs.core.Symbol(null,"str->currency-test","str->currency-test",880175460,null),"/home/juho/.boot/cache/tmp/home/juho/Source/lomakkeet/ibw/-p9hf6h/example/currency_input.cljs",31,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.currency_input.str__GT_currency_test)?example.currency_input.str__GT_currency_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.currency_input","example.currency_input",-1967783240),new cljs.core.Keyword(null,"currency->str-test","currency->str-test",-235065719)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"currency->str-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,(1000),",")),"10,00");
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1000),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1000),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21107){var t__17034__auto__ = e21107;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1000),",")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,(1000),".")),"10.00");
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10.00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1000),".")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10.00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1000),".")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21108){var t__17034__auto__ = e21108;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10.00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1000),".")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,(1050),",")),"10,50");
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10,50",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1050),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10,50",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1050),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21109){var t__17034__auto__ = e21109;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10,50",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1050),",")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,(-1000),",")),"-10,00");
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"-10,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(-1000),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"-10,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(-1000),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21110){var t__17034__auto__ = e21110;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"-10,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(-1000),",")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,(-1045),",")),"-10,45");
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"-10,45",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(-1045),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"-10,45",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(-1045),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21111){var t__17034__auto__ = e21111;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"-10,45",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(-1045),",")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,(100),",")),"1,00");
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"1,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(100),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"1,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(100),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21112){var t__17034__auto__ = e21112;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"1,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(100),",")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,null,",")),"");
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),null,",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),null,",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21113){var t__17034__auto__ = e21113;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),null,",")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

example.currency_input.currency__GT_str_test = (function example$currency_input$currency__GT_str_test(){
return cljs.test.test_var.call(null,example$currency_input$currency__GT_str_test.cljs$lang$var);
});
example.currency_input.currency__GT_str_test.cljs$lang$test = (function (){
try{var values__16996__auto___21121 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,(1000),",")),"10,00");
var result__16997__auto___21122 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21121);
if(cljs.core.truth_(result__16997__auto___21122)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1000),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21121),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1000),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21121)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21114){var t__17034__auto___21123 = e21114;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1000),",")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21123,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21124 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,(1000),".")),"10.00");
var result__16997__auto___21125 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21124);
if(cljs.core.truth_(result__16997__auto___21125)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10.00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1000),".")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21124),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10.00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1000),".")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21124)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21115){var t__17034__auto___21126 = e21115;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10.00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1000),".")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21126,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21127 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,(1050),",")),"10,50");
var result__16997__auto___21128 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21127);
if(cljs.core.truth_(result__16997__auto___21128)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10,50",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1050),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21127),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10,50",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1050),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21127)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21116){var t__17034__auto___21129 = e21116;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"10,50",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(1050),",")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21129,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21130 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,(-1000),",")),"-10,00");
var result__16997__auto___21131 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21130);
if(cljs.core.truth_(result__16997__auto___21131)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"-10,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(-1000),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21130),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"-10,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(-1000),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21130)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21117){var t__17034__auto___21132 = e21117;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"-10,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(-1000),",")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21132,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21133 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,(-1045),",")),"-10,45");
var result__16997__auto___21134 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21133);
if(cljs.core.truth_(result__16997__auto___21134)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"-10,45",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(-1045),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21133),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"-10,45",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(-1045),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21133)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21118){var t__17034__auto___21135 = e21118;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"-10,45",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(-1045),",")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21135,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto___21136 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,(100),",")),"1,00");
var result__16997__auto___21137 = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto___21136);
if(cljs.core.truth_(result__16997__auto___21137)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"1,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(100),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto___21136),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"1,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(100),",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto___21136)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e21119){var t__17034__auto___21138 = e21119;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"1,00",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),(100),",")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto___21138,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16996__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lomakkeet.reagent.currency_input.currency__GT_str.call(null,null,",")),"");
var result__16997__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16996__auto__);
if(cljs.core.truth_(result__16997__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),null,",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16996__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),null,",")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16996__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16997__auto__;
}catch (e21120){var t__17034__auto__ = e21120;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"",cljs.core.list(new cljs.core.Symbol("currency-input","currency->str","currency-input/currency->str",1972480925,null),null,",")),new cljs.core.Keyword(null,"actual","actual",107306363),t__17034__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

example.currency_input.currency__GT_str_test.cljs$lang$var = new cljs.core.Var(function(){return example.currency_input.currency__GT_str_test;},new cljs.core.Symbol("example.currency-input","currency->str-test","example.currency-input/currency->str-test",-1958042398,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"example.currency-input","example.currency-input",-1507252553,null),new cljs.core.Symbol(null,"currency->str-test","currency->str-test",1405465808,null),"/home/juho/.boot/cache/tmp/home/juho/Source/lomakkeet/ibw/-p9hf6h/example/currency_input.cljs",31,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.currency_input.currency__GT_str_test)?example.currency_input.currency__GT_str_test.cljs$lang$test:null)]));

//# sourceMappingURL=currency_input.js.map