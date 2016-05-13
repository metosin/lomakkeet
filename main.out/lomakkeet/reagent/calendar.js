// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.reagent.calendar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('lomakkeet.date');
goog.require('cljs_time.core');
lomakkeet.reagent.calendar.default_i18n = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date-placeholder","date-placeholder",581021088),new cljs.core.Keyword(null,"quicklist","quicklist",-1966175002),new cljs.core.Keyword(null,"this-month","this-month",176343591),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"this-week","this-week",925871627),new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.Keyword(null,"week-short","week-short",-620634707),new cljs.core.Keyword(null,"date-format","date-format",-557196721),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"month-format","month-format",1338926619)],["dd.mm.yyyy","Quicklist","This month","Start","This week","Today","W","d.M.yyyy","End","LLLL yyyy"]);
lomakkeet.reagent.calendar.default_icons = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"previous","previous",-720163404),"<",new cljs.core.Keyword(null,"next","next",-117701485),">",new cljs.core.Keyword(null,"warning","warning",-1685650671),"!",new cljs.core.Keyword(null,"submit","submit",-49315317),">"], null);
lomakkeet.reagent.calendar.loc = (function lomakkeet$reagent$calendar$loc(i18n,k){
var or__4988__auto__ = cljs.core.get.call(null,i18n,k);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.get.call(null,lomakkeet.reagent.calendar.default_i18n,k);
}
});
lomakkeet.reagent.calendar.icon = (function lomakkeet$reagent$calendar$icon(icons,k){
var or__4988__auto__ = cljs.core.get.call(null,icons,k);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.get.call(null,lomakkeet.reagent.calendar.default_icons,k);
}
});
lomakkeet.reagent.calendar.first_day_of_the_week = (function lomakkeet$reagent$calendar$first_day_of_the_week(day){
return cljs_time.core.minus.call(null,day,cljs_time.core.days.call(null,(cljs_time.core.day_of_week.call(null,day) - (1))));
});
lomakkeet.reagent.calendar.last_day_of_the_week = (function lomakkeet$reagent$calendar$last_day_of_the_week(day){
return cljs_time.core.plus.call(null,day,cljs_time.core.days.call(null,((7) - cljs_time.core.day_of_week.call(null,day))));
});
lomakkeet.reagent.calendar.date_input = (function lomakkeet$reagent$calendar$date_input(value,type,on_change,p__6893){
var map__6896 = p__6893;
var map__6896__$1 = ((((!((map__6896 == null)))?((((map__6896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6896):map__6896);
var icons = cljs.core.get.call(null,map__6896__$1,new cljs.core.Keyword(null,"icons","icons",-297140977));
var i18n = cljs.core.get.call(null,map__6896__$1,new cljs.core.Keyword(null,"i18n","i18n",-563422499));
var input_value = reagent.core.atom.call(null,null);
return ((function (input_value,map__6896,map__6896__$1,icons,i18n){
return (function (value__$1,type__$1,on_change__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (input_value,map__6896,map__6896__$1,icons,i18n){
return (function (e){
e.preventDefault();

e.stopPropagation();

on_change__$1.call(null,lomakkeet.date.date_read.call(null,cljs.core.deref.call(null,input_value),lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"date-format","date-format",-557196721))));

cljs.core.reset_BANG_.call(null,input_value,null);

return null;
});})(input_value,map__6896,map__6896__$1,icons,i18n))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.input-group-sm","div.input-group.input-group-sm",-1182825830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),type__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (input_value,map__6896,map__6896__$1,icons,i18n){
return (function (e){
var x = clojure.string.trim.call(null,e.target.value);
return cljs.core.reset_BANG_.call(null,input_value,x);
});})(input_value,map__6896,map__6896__$1,icons,i18n))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (input_value,map__6896,map__6896__$1,icons,i18n){
return (function (e){
if(cljs.core.seq.call(null,cljs.core.deref.call(null,input_value))){
on_change__$1.call(null,lomakkeet.date.date_read.call(null,cljs.core.deref.call(null,input_value),lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"date-format","date-format",-557196721))));
} else {
}

cljs.core.reset_BANG_.call(null,input_value,null);

return null;
});})(input_value,map__6896,map__6896__$1,icons,i18n))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"date-placeholder","date-placeholder",581021088)),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str((function (){var or__4988__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return lomakkeet.date.date_format.call(null,value__$1,lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"date-format","date-format",-557196721)));
}
})())].join('')], null)], null),(cljs.core.truth_((function (){var and__4976__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(and__4976__auto__)){
return cljs.core.not.call(null,lomakkeet.date.date_read.call(null,cljs.core.deref.call(null,input_value),lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"date-format","date-format",-557196721))));
} else {
return and__4976__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-btn","span.input-group-btn",358441272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.btn.btn-danger","span.btn.btn-danger",-1565512712),lomakkeet.reagent.calendar.icon.call(null,icons,new cljs.core.Keyword(null,"warning","warning",-1685650671))], null)], null):null),(cljs.core.truth_((function (){var and__4976__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(and__4976__auto__)){
return lomakkeet.date.date_read.call(null,cljs.core.deref.call(null,input_value),lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"date-format","date-format",-557196721)));
} else {
return and__4976__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-btn","span.input-group-btn",358441272),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success","button.btn.btn-success",574341715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),lomakkeet.reagent.calendar.icon.call(null,icons,new cljs.core.Keyword(null,"submit","submit",-49315317))], null)], null):null)], null)], null);
});
;})(input_value,map__6896,map__6896__$1,icons,i18n))
});
lomakkeet.reagent.calendar.build_month = (function lomakkeet$reagent$calendar$build_month(day){
var start = cljs_time.core.first_day_of_the_month.call(null,day);
var end = cljs_time.core.last_day_of_the_month.call(null,day);
return cljs.core.vec.call(null,(function (){var iter__5760__auto__ = ((function (start,end){
return (function lomakkeet$reagent$calendar$build_month_$_iter__6918(s__6919){
return (new cljs.core.LazySeq(null,((function (start,end){
return (function (){
var s__6919__$1 = s__6919;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6919__$1);
if(temp__4425__auto__){
var s__6919__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6919__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__6919__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__6921 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__6920 = (0);
while(true){
if((i__6920 < size__5759__auto__)){
var wom = cljs.core._nth.call(null,c__5758__auto__,i__6920);
cljs.core.chunk_append.call(null,b__6921,cljs.core.vec.call(null,(function (){var iter__5760__auto__ = ((function (i__6920,wom,c__5758__auto__,size__5759__auto__,b__6921,s__6919__$2,temp__4425__auto__,start,end){
return (function lomakkeet$reagent$calendar$build_month_$_iter__6918_$_iter__6930(s__6931){
return (new cljs.core.LazySeq(null,((function (i__6920,wom,c__5758__auto__,size__5759__auto__,b__6921,s__6919__$2,temp__4425__auto__,start,end){
return (function (){
var s__6931__$1 = s__6931;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__6931__$1);
if(temp__4425__auto____$1){
var s__6931__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6931__$2)){
var c__5758__auto____$1 = cljs.core.chunk_first.call(null,s__6931__$2);
var size__5759__auto____$1 = cljs.core.count.call(null,c__5758__auto____$1);
var b__6933 = cljs.core.chunk_buffer.call(null,size__5759__auto____$1);
if((function (){var i__6932 = (0);
while(true){
if((i__6932 < size__5759__auto____$1)){
var dow = cljs.core._nth.call(null,c__5758__auto____$1,i__6932);
var date = cljs_time.core.plus.call(null,cljs_time.core.plus.call(null,lomakkeet.reagent.calendar.first_day_of_the_week.call(null,start),cljs_time.core.weeks.call(null,wom)),cljs_time.core.days.call(null,dow));
cljs.core.chunk_append.call(null,b__6933,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"out","out",-910545517),!(cljs.core._EQ_.call(null,cljs_time.core.month.call(null,day),cljs_time.core.month.call(null,date)))], null));

var G__6938 = (i__6932 + (1));
i__6932 = G__6938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6933),lomakkeet$reagent$calendar$build_month_$_iter__6918_$_iter__6930.call(null,cljs.core.chunk_rest.call(null,s__6931__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6933),null);
}
} else {
var dow = cljs.core.first.call(null,s__6931__$2);
var date = cljs_time.core.plus.call(null,cljs_time.core.plus.call(null,lomakkeet.reagent.calendar.first_day_of_the_week.call(null,start),cljs_time.core.weeks.call(null,wom)),cljs_time.core.days.call(null,dow));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"out","out",-910545517),!(cljs.core._EQ_.call(null,cljs_time.core.month.call(null,day),cljs_time.core.month.call(null,date)))], null),lomakkeet$reagent$calendar$build_month_$_iter__6918_$_iter__6930.call(null,cljs.core.rest.call(null,s__6931__$2)));
}
} else {
return null;
}
break;
}
});})(i__6920,wom,c__5758__auto__,size__5759__auto__,b__6921,s__6919__$2,temp__4425__auto__,start,end))
,null,null));
});})(i__6920,wom,c__5758__auto__,size__5759__auto__,b__6921,s__6919__$2,temp__4425__auto__,start,end))
;
return iter__5760__auto__.call(null,cljs.core.range.call(null,(7)));
})()));

var G__6939 = (i__6920 + (1));
i__6920 = G__6939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6921),lomakkeet$reagent$calendar$build_month_$_iter__6918.call(null,cljs.core.chunk_rest.call(null,s__6919__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6921),null);
}
} else {
var wom = cljs.core.first.call(null,s__6919__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__5760__auto__ = ((function (wom,s__6919__$2,temp__4425__auto__,start,end){
return (function lomakkeet$reagent$calendar$build_month_$_iter__6918_$_iter__6934(s__6935){
return (new cljs.core.LazySeq(null,((function (wom,s__6919__$2,temp__4425__auto__,start,end){
return (function (){
var s__6935__$1 = s__6935;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__6935__$1);
if(temp__4425__auto____$1){
var s__6935__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6935__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__6935__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__6937 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__6936 = (0);
while(true){
if((i__6936 < size__5759__auto__)){
var dow = cljs.core._nth.call(null,c__5758__auto__,i__6936);
var date = cljs_time.core.plus.call(null,cljs_time.core.plus.call(null,lomakkeet.reagent.calendar.first_day_of_the_week.call(null,start),cljs_time.core.weeks.call(null,wom)),cljs_time.core.days.call(null,dow));
cljs.core.chunk_append.call(null,b__6937,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"out","out",-910545517),!(cljs.core._EQ_.call(null,cljs_time.core.month.call(null,day),cljs_time.core.month.call(null,date)))], null));

var G__6940 = (i__6936 + (1));
i__6936 = G__6940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6937),lomakkeet$reagent$calendar$build_month_$_iter__6918_$_iter__6934.call(null,cljs.core.chunk_rest.call(null,s__6935__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6937),null);
}
} else {
var dow = cljs.core.first.call(null,s__6935__$2);
var date = cljs_time.core.plus.call(null,cljs_time.core.plus.call(null,lomakkeet.reagent.calendar.first_day_of_the_week.call(null,start),cljs_time.core.weeks.call(null,wom)),cljs_time.core.days.call(null,dow));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"out","out",-910545517),!(cljs.core._EQ_.call(null,cljs_time.core.month.call(null,day),cljs_time.core.month.call(null,date)))], null),lomakkeet$reagent$calendar$build_month_$_iter__6918_$_iter__6934.call(null,cljs.core.rest.call(null,s__6935__$2)));
}
} else {
return null;
}
break;
}
});})(wom,s__6919__$2,temp__4425__auto__,start,end))
,null,null));
});})(wom,s__6919__$2,temp__4425__auto__,start,end))
;
return iter__5760__auto__.call(null,cljs.core.range.call(null,(7)));
})()),lomakkeet$reagent$calendar$build_month_$_iter__6918.call(null,cljs.core.rest.call(null,s__6919__$2)));
}
} else {
return null;
}
break;
}
});})(start,end))
,null,null));
});})(start,end))
;
return iter__5760__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
lomakkeet.reagent.calendar.month_calendar = (function lomakkeet$reagent$calendar$month_calendar(_){
var month_x = reagent.core.atom.call(null,null);
var prev_val = cljs.core.atom.call(null,null);
return ((function (month_x,prev_val){
return (function (p__6968){
var map__6969 = p__6968;
var map__6969__$1 = ((((!((map__6969 == null)))?((((map__6969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6969):map__6969);
var opts = map__6969__$1;
var value = cljs.core.get.call(null,map__6969__$1,new cljs.core.Keyword(null,"value","value",305978217));
var start = cljs.core.get.call(null,map__6969__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__6969__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var text = cljs.core.get.call(null,map__6969__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_change = cljs.core.get.call(null,map__6969__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var icons = cljs.core.get.call(null,map__6969__$1,new cljs.core.Keyword(null,"icons","icons",-297140977));
var week_numbers_QMARK_ = cljs.core.get.call(null,map__6969__$1,new cljs.core.Keyword(null,"week-numbers?","week-numbers?",106454907));
var date_input_QMARK_ = cljs.core.get.call(null,map__6969__$1,new cljs.core.Keyword(null,"date-input?","date-input?",-702221302));
var i18n = cljs.core.get.call(null,map__6969__$1,new cljs.core.Keyword(null,"i18n","i18n",-563422499));
if(cljs.core.not_EQ_.call(null,value,cljs.core.deref.call(null,prev_val))){
cljs.core.reset_BANG_.call(null,month_x,null);
} else {
}

cljs.core.reset_BANG_.call(null,prev_val,value);

var value_SINGLEQUOTE_ = (function (){var or__4988__auto__ = value;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs_time.core.today.call(null);
}
})();
var date = (cljs.core.truth_(cljs.core.deref.call(null,month_x))?cljs_time.core.plus.call(null,value_SINGLEQUOTE_,cljs_time.core.months.call(null,cljs.core.deref.call(null,month_x))):value_SINGLEQUOTE_);
var on_change__$1 = ((function (value_SINGLEQUOTE_,date,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (x){
cljs.core.reset_BANG_.call(null,month_x,null);

return on_change.call(null,x);
});})(value_SINGLEQUOTE_,date,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
;
var month = lomakkeet.reagent.calendar.build_month.call(null,date);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.month-calendar","div.month-calendar",322209926),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("table "),cljs.core.str((cljs.core.truth_(week_numbers_QMARK_)?"with-week-numbers ":null))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),(((date_input_QMARK_ === true) || ((date_input_QMARK_ == null)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.head1","tr.head1",-1886423141),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.prev","th.prev",589654496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-date.prev","button.btn.btn-date.prev",213295098),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (___$1){
cljs.core.swap_BANG_.call(null,month_x,cljs.core.fnil.call(null,cljs.core.dec,(0)));

return null;
});})(value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
], null),lomakkeet.reagent.calendar.icon.call(null,icons,new cljs.core.Keyword(null,"previous","previous",-720163404))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(cljs.core.truth_(week_numbers_QMARK_)?(6):(5))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.calendar.date_input,value,text,on_change__$1,opts], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.next","th.next",345099302),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-date.next","button.btn.btn-date.next",596657953),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (___$1){
cljs.core.swap_BANG_.call(null,month_x,cljs.core.fnil.call(null,cljs.core.inc,(0)));

return null;
});})(value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
], null),lomakkeet.reagent.calendar.icon.call(null,icons,new cljs.core.Keyword(null,"next","next",-117701485))], null)], null)], null):null),(((date_input_QMARK_ === true) || ((date_input_QMARK_ == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(cljs.core.truth_(week_numbers_QMARK_)?(8):(7))], null),clojure.string.capitalize.call(null,lomakkeet.date.date_format.call(null,date,lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"month-format","month-format",1338926619))))], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.prev","th.prev",589654496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-date.prev","button.btn.btn-date.prev",213295098),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (___$1){
cljs.core.swap_BANG_.call(null,month_x,cljs.core.fnil.call(null,cljs.core.dec,(0)));

return null;
});})(value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
], null),lomakkeet.reagent.calendar.icon.call(null,icons,new cljs.core.Keyword(null,"previous","previous",-720163404))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(cljs.core.truth_(week_numbers_QMARK_)?(6):(5))], null),clojure.string.capitalize.call(null,lomakkeet.date.date_format.call(null,date,lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"month-format","month-format",1338926619))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.next","th.next",345099302),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-date.next","button.btn.btn-date.next",596657953),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (___$1){
cljs.core.swap_BANG_.call(null,month_x,cljs.core.fnil.call(null,cljs.core.inc,(0)));

return null;
});})(value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
], null),lomakkeet.reagent.calendar.icon.call(null,icons,new cljs.core.Keyword(null,"next","next",-117701485))], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(cljs.core.truth_(week_numbers_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"week-short","week-short",-620634707))], null):null),(function (){var iter__5760__auto__ = ((function (value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function lomakkeet$reagent$calendar$month_calendar_$_iter__6971(s__6972){
return (new cljs.core.LazySeq(null,((function (value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (){
var s__6972__$1 = s__6972;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6972__$1);
if(temp__4425__auto__){
var s__6972__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6972__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__6972__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__6974 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__6973 = (0);
while(true){
if((i__6973 < size__5759__auto__)){
var day = cljs.core._nth.call(null,c__5758__auto__,i__6973);
var w = lomakkeet.date.date_format.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day),"E");
cljs.core.chunk_append.call(null,b__6974,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),w], null),w], null));

var G__6995 = (i__6973 + (1));
i__6973 = G__6995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6974),lomakkeet$reagent$calendar$month_calendar_$_iter__6971.call(null,cljs.core.chunk_rest.call(null,s__6972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6974),null);
}
} else {
var day = cljs.core.first.call(null,s__6972__$2);
var w = lomakkeet.date.date_format.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day),"E");
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),w], null),w], null),lomakkeet$reagent$calendar$month_calendar_$_iter__6971.call(null,cljs.core.rest.call(null,s__6972__$2)));
}
} else {
return null;
}
break;
}
});})(value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
,null,null));
});})(value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
;
return iter__5760__auto__.call(null,cljs.core.first.call(null,month));
})()], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__5760__auto__ = ((function (value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function lomakkeet$reagent$calendar$month_calendar_$_iter__6975(s__6976){
return (new cljs.core.LazySeq(null,((function (value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (){
var s__6976__$1 = s__6976;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6976__$1);
if(temp__4425__auto__){
var s__6976__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6976__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__6976__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__6978 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__6977 = (0);
while(true){
if((i__6977 < size__5759__auto__)){
var week = cljs.core._nth.call(null,c__5758__auto__,i__6977);
cljs.core.chunk_append.call(null,b__6978,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(cljs.core.truth_(week_numbers_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.week","td.week",384243628),lomakkeet.date.date_format.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,week)),"w")], null):null)], null),(function (){var iter__5760__auto__ = ((function (i__6977,week,c__5758__auto__,size__5759__auto__,b__6978,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function lomakkeet$reagent$calendar$month_calendar_$_iter__6975_$_iter__6987(s__6988){
return (new cljs.core.LazySeq(null,((function (i__6977,week,c__5758__auto__,size__5759__auto__,b__6978,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (){
var s__6988__$1 = s__6988;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__6988__$1);
if(temp__4425__auto____$1){
var s__6988__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6988__$2)){
var c__5758__auto____$1 = cljs.core.chunk_first.call(null,s__6988__$2);
var size__5759__auto____$1 = cljs.core.count.call(null,c__5758__auto____$1);
var b__6990 = cljs.core.chunk_buffer.call(null,size__5759__auto____$1);
if((function (){var i__6989 = (0);
while(true){
if((i__6989 < size__5759__auto____$1)){
var day = cljs.core._nth.call(null,c__5758__auto____$1,i__6989);
cljs.core.chunk_append.call(null,b__6990,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(day))?"out ":null)),cljs.core.str((cljs.core.truth_((function (){var or__4988__auto__ = (function (){var and__4976__auto__ = value;
if(cljs.core.truth_(and__4976__auto__)){
return value.equals(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day));
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
var or__4988__auto____$1 = (function (){var and__4976__auto__ = start;
if(cljs.core.truth_(and__4976__auto__)){
var and__4976__auto____$1 = end;
if(cljs.core.truth_(and__4976__auto____$1)){
return ((start <= new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day))) && ((new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day) <= end));
} else {
return and__4976__auto____$1;
}
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto____$1)){
return or__4988__auto____$1;
} else {
var or__4988__auto____$2 = (function (){var and__4976__auto__ = start;
if(cljs.core.truth_(and__4976__auto__)){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(start);
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto____$2)){
return or__4988__auto____$2;
} else {
var and__4976__auto__ = end;
if(cljs.core.truth_(and__4976__auto__)){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(end);
} else {
return and__4976__auto__;
}
}
}
}
})())?"selected ":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(start))?"start ":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(end))?"end ":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-date","button.btn.btn-date",1365863651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__6989,i__6977,day,c__5758__auto____$1,size__5759__auto____$1,b__6990,s__6988__$2,temp__4425__auto____$1,week,c__5758__auto__,size__5759__auto__,b__6978,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (___$1){
return on_change__$1.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day));
});})(i__6989,i__6977,day,c__5758__auto____$1,size__5759__auto____$1,b__6990,s__6988__$2,temp__4425__auto____$1,week,c__5758__auto__,size__5759__auto__,b__6978,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
], null),lomakkeet.date.date_format.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day),"d")], null)], null));

var G__6996 = (i__6989 + (1));
i__6989 = G__6996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6990),lomakkeet$reagent$calendar$month_calendar_$_iter__6975_$_iter__6987.call(null,cljs.core.chunk_rest.call(null,s__6988__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6990),null);
}
} else {
var day = cljs.core.first.call(null,s__6988__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(day))?"out ":null)),cljs.core.str((cljs.core.truth_((function (){var or__4988__auto__ = (function (){var and__4976__auto__ = value;
if(cljs.core.truth_(and__4976__auto__)){
return value.equals(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day));
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
var or__4988__auto____$1 = (function (){var and__4976__auto__ = start;
if(cljs.core.truth_(and__4976__auto__)){
var and__4976__auto____$1 = end;
if(cljs.core.truth_(and__4976__auto____$1)){
return ((start <= new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day))) && ((new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day) <= end));
} else {
return and__4976__auto____$1;
}
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto____$1)){
return or__4988__auto____$1;
} else {
var or__4988__auto____$2 = (function (){var and__4976__auto__ = start;
if(cljs.core.truth_(and__4976__auto__)){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(start);
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto____$2)){
return or__4988__auto____$2;
} else {
var and__4976__auto__ = end;
if(cljs.core.truth_(and__4976__auto__)){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(end);
} else {
return and__4976__auto__;
}
}
}
}
})())?"selected ":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(start))?"start ":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(end))?"end ":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-date","button.btn.btn-date",1365863651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__6977,day,s__6988__$2,temp__4425__auto____$1,week,c__5758__auto__,size__5759__auto__,b__6978,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (___$1){
return on_change__$1.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day));
});})(i__6977,day,s__6988__$2,temp__4425__auto____$1,week,c__5758__auto__,size__5759__auto__,b__6978,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
], null),lomakkeet.date.date_format.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day),"d")], null)], null),lomakkeet$reagent$calendar$month_calendar_$_iter__6975_$_iter__6987.call(null,cljs.core.rest.call(null,s__6988__$2)));
}
} else {
return null;
}
break;
}
});})(i__6977,week,c__5758__auto__,size__5759__auto__,b__6978,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
,null,null));
});})(i__6977,week,c__5758__auto__,size__5759__auto__,b__6978,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
;
return iter__5760__auto__.call(null,week);
})()));

var G__6997 = (i__6977 + (1));
i__6977 = G__6997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6978),lomakkeet$reagent$calendar$month_calendar_$_iter__6975.call(null,cljs.core.chunk_rest.call(null,s__6976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6978),null);
}
} else {
var week = cljs.core.first.call(null,s__6976__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(cljs.core.truth_(week_numbers_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.week","td.week",384243628),lomakkeet.date.date_format.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,week)),"w")], null):null)], null),(function (){var iter__5760__auto__ = ((function (week,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function lomakkeet$reagent$calendar$month_calendar_$_iter__6975_$_iter__6991(s__6992){
return (new cljs.core.LazySeq(null,((function (week,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (){
var s__6992__$1 = s__6992;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__6992__$1);
if(temp__4425__auto____$1){
var s__6992__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6992__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__6992__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__6994 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__6993 = (0);
while(true){
if((i__6993 < size__5759__auto__)){
var day = cljs.core._nth.call(null,c__5758__auto__,i__6993);
cljs.core.chunk_append.call(null,b__6994,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(day))?"out ":null)),cljs.core.str((cljs.core.truth_((function (){var or__4988__auto__ = (function (){var and__4976__auto__ = value;
if(cljs.core.truth_(and__4976__auto__)){
return value.equals(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day));
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
var or__4988__auto____$1 = (function (){var and__4976__auto__ = start;
if(cljs.core.truth_(and__4976__auto__)){
var and__4976__auto____$1 = end;
if(cljs.core.truth_(and__4976__auto____$1)){
return ((start <= new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day))) && ((new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day) <= end));
} else {
return and__4976__auto____$1;
}
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto____$1)){
return or__4988__auto____$1;
} else {
var or__4988__auto____$2 = (function (){var and__4976__auto__ = start;
if(cljs.core.truth_(and__4976__auto__)){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(start);
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto____$2)){
return or__4988__auto____$2;
} else {
var and__4976__auto__ = end;
if(cljs.core.truth_(and__4976__auto__)){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(end);
} else {
return and__4976__auto__;
}
}
}
}
})())?"selected ":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(start))?"start ":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(end))?"end ":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-date","button.btn.btn-date",1365863651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__6993,day,c__5758__auto__,size__5759__auto__,b__6994,s__6992__$2,temp__4425__auto____$1,week,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (___$1){
return on_change__$1.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day));
});})(i__6993,day,c__5758__auto__,size__5759__auto__,b__6994,s__6992__$2,temp__4425__auto____$1,week,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
], null),lomakkeet.date.date_format.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day),"d")], null)], null));

var G__6998 = (i__6993 + (1));
i__6993 = G__6998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6994),lomakkeet$reagent$calendar$month_calendar_$_iter__6975_$_iter__6991.call(null,cljs.core.chunk_rest.call(null,s__6992__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6994),null);
}
} else {
var day = cljs.core.first.call(null,s__6992__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(day))?"out ":null)),cljs.core.str((cljs.core.truth_((function (){var or__4988__auto__ = (function (){var and__4976__auto__ = value;
if(cljs.core.truth_(and__4976__auto__)){
return value.equals(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day));
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
var or__4988__auto____$1 = (function (){var and__4976__auto__ = start;
if(cljs.core.truth_(and__4976__auto__)){
var and__4976__auto____$1 = end;
if(cljs.core.truth_(and__4976__auto____$1)){
return ((start <= new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day))) && ((new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day) <= end));
} else {
return and__4976__auto____$1;
}
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto____$1)){
return or__4988__auto____$1;
} else {
var or__4988__auto____$2 = (function (){var and__4976__auto__ = start;
if(cljs.core.truth_(and__4976__auto__)){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(start);
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto____$2)){
return or__4988__auto____$2;
} else {
var and__4976__auto__ = end;
if(cljs.core.truth_(and__4976__auto__)){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(end);
} else {
return and__4976__auto__;
}
}
}
}
})())?"selected ":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(start))?"start ":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day).equals(end))?"end ":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-date","button.btn.btn-date",1365863651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (day,s__6992__$2,temp__4425__auto____$1,week,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val){
return (function (___$1){
return on_change__$1.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day));
});})(day,s__6992__$2,temp__4425__auto____$1,week,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
], null),lomakkeet.date.date_format.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(day),"d")], null)], null),lomakkeet$reagent$calendar$month_calendar_$_iter__6975_$_iter__6991.call(null,cljs.core.rest.call(null,s__6992__$2)));
}
} else {
return null;
}
break;
}
});})(week,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
,null,null));
});})(week,s__6976__$2,temp__4425__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
;
return iter__5760__auto__.call(null,week);
})()),lomakkeet$reagent$calendar$month_calendar_$_iter__6975.call(null,cljs.core.rest.call(null,s__6976__$2)));
}
} else {
return null;
}
break;
}
});})(value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
,null,null));
});})(value_SINGLEQUOTE_,date,on_change__$1,month,map__6969,map__6969__$1,opts,value,start,end,text,on_change,icons,week_numbers_QMARK_,date_input_QMARK_,i18n,month_x,prev_val))
;
return iter__5760__auto__.call(null,month);
})())], null)], null);
});
;})(month_x,prev_val))
});
lomakkeet.reagent.calendar.quicklist_item = (function lomakkeet$reagent$calendar$quicklist_item(p__6999,item){
var map__7002 = p__6999;
var map__7002__$1 = ((((!((map__7002 == null)))?((((map__7002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7002):map__7002);
var start = cljs.core.get.call(null,map__7002__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__7002__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var on_change = cljs.core.get.call(null,map__7002__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var i18n = cljs.core.get.call(null,map__7002__$1,new cljs.core.Keyword(null,"i18n","i18n",-563422499));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__7002,map__7002__$1,start,end,on_change,i18n){
return (function (_){
return on_change.call(null,cljs.core.select_keys.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null)));
});})(map__7002,map__7002__$1,start,end,on_change,i18n))
,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_((function (){var and__4976__auto__ = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(item).equals(start);
if(cljs.core.truth_(and__4976__auto__)){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(item).equals(end);
} else {
return and__4976__auto__;
}
})())?"active ":null))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null)], null);
});
lomakkeet.reagent.calendar.quicklist = (function lomakkeet$reagent$calendar$quicklist(p__7004){
var map__7011 = p__7004;
var map__7011__$1 = ((((!((map__7011 == null)))?((((map__7011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7011):map__7011);
var opts = map__7011__$1;
var start = cljs.core.get.call(null,map__7011__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__7011__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var on_change = cljs.core.get.call(null,map__7011__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var i18n = cljs.core.get.call(null,map__7011__$1,new cljs.core.Keyword(null,"i18n","i18n",-563422499));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.month-calendar","div.month-calendar",322209926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"quicklist","quicklist",-1966175002))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.calendar.quicklist_item,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"today","today",945271563)),new cljs.core.Keyword(null,"start","start",-355208981),cljs_time.core.today.call(null),new cljs.core.Keyword(null,"end","end",-268185958),cljs_time.core.today.call(null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.calendar.quicklist_item,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"this-week","this-week",925871627)),new cljs.core.Keyword(null,"start","start",-355208981),lomakkeet.reagent.calendar.first_day_of_the_week.call(null,cljs_time.core.today.call(null)),new cljs.core.Keyword(null,"end","end",-268185958),lomakkeet.reagent.calendar.last_day_of_the_week.call(null,cljs_time.core.today.call(null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.calendar.quicklist_item,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"this-month","this-month",176343591)),new cljs.core.Keyword(null,"start","start",-355208981),cljs_time.core.first_day_of_the_month.call(null,cljs_time.core.today.call(null)),new cljs.core.Keyword(null,"end","end",-268185958),cljs_time.core.last_day_of_the_month.call(null,cljs_time.core.today.call(null))], null)], null),(function (){var iter__5760__auto__ = ((function (map__7011,map__7011__$1,opts,start,end,on_change,i18n){
return (function lomakkeet$reagent$calendar$quicklist_$_iter__7013(s__7014){
return (new cljs.core.LazySeq(null,((function (map__7011,map__7011__$1,opts,start,end,on_change,i18n){
return (function (){
var s__7014__$1 = s__7014;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7014__$1);
if(temp__4425__auto__){
var s__7014__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7014__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__7014__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__7016 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__7015 = (0);
while(true){
if((i__7015 < size__5759__auto__)){
var i = cljs.core._nth.call(null,c__5758__auto__,i__7015);
var month = cljs_time.core.minus.call(null,cljs_time.core.today.call(null),cljs_time.core.months.call(null,i));
cljs.core.chunk_append.call(null,b__7016,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.calendar.quicklist_item,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.capitalize.call(null,lomakkeet.date.date_format.call(null,month,"LLLL")),new cljs.core.Keyword(null,"start","start",-355208981),cljs_time.core.first_day_of_the_month.call(null,month),new cljs.core.Keyword(null,"end","end",-268185958),cljs_time.core.last_day_of_the_month.call(null,month)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__7017 = (i__7015 + (1));
i__7015 = G__7017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7016),lomakkeet$reagent$calendar$quicklist_$_iter__7013.call(null,cljs.core.chunk_rest.call(null,s__7014__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7016),null);
}
} else {
var i = cljs.core.first.call(null,s__7014__$2);
var month = cljs_time.core.minus.call(null,cljs_time.core.today.call(null),cljs_time.core.months.call(null,i));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.calendar.quicklist_item,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.capitalize.call(null,lomakkeet.date.date_format.call(null,month,"LLLL")),new cljs.core.Keyword(null,"start","start",-355208981),cljs_time.core.first_day_of_the_month.call(null,month),new cljs.core.Keyword(null,"end","end",-268185958),cljs_time.core.last_day_of_the_month.call(null,month)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),lomakkeet$reagent$calendar$quicklist_$_iter__7013.call(null,cljs.core.rest.call(null,s__7014__$2)));
}
} else {
return null;
}
break;
}
});})(map__7011,map__7011__$1,opts,start,end,on_change,i18n))
,null,null));
});})(map__7011,map__7011__$1,opts,start,end,on_change,i18n))
;
return iter__5760__auto__.call(null,cljs.core.range.call(null,(1),(6)));
})()], null)], null);
});
lomakkeet.reagent.calendar.set_start = (function lomakkeet$reagent$calendar$set_start(p__7018,x){
var map__7021 = p__7018;
var map__7021__$1 = ((((!((map__7021 == null)))?((((map__7021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7021):map__7021);
var end = cljs.core.get.call(null,map__7021__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),x,new cljs.core.Keyword(null,"end","end",-268185958),(((cljs.core.not.call(null,end)) || ((x > end)))?x:end)], null);
});
lomakkeet.reagent.calendar.set_end = (function lomakkeet$reagent$calendar$set_end(p__7023,x){
var map__7026 = p__7023;
var map__7026__$1 = ((((!((map__7026 == null)))?((((map__7026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7026):map__7026);
var start = cljs.core.get.call(null,map__7026__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end","end",-268185958),x,new cljs.core.Keyword(null,"start","start",-355208981),(((cljs.core.not.call(null,start)) || ((x < start)))?x:start)], null);
});
lomakkeet.reagent.calendar.date_range = (function lomakkeet$reagent$calendar$date_range(p__7028){
var map__7034 = p__7028;
var map__7034__$1 = ((((!((map__7034 == null)))?((((map__7034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7034):map__7034);
var opts = map__7034__$1;
var start = cljs.core.get.call(null,map__7034__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__7034__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var on_change = cljs.core.get.call(null,map__7034__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var i18n = cljs.core.get.call(null,map__7034__$1,new cljs.core.Keyword(null,"i18n","i18n",-563422499));
var quicklist_QMARK_ = cljs.core.get.call(null,map__7034__$1,new cljs.core.Keyword(null,"quicklist?","quicklist?",200176627));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.date-range","div.date-range",-712998386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.calendar.month_calendar,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"text","text",-1790561697),lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"start","start",-355208981)),new cljs.core.Keyword(null,"value","value",305978217),start,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__7034,map__7034__$1,opts,start,end,on_change,i18n,quicklist_QMARK_){
return (function (x){
return on_change.call(null,lomakkeet.reagent.calendar.set_start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end","end",-268185958),end], null),x));
});})(map__7034,map__7034__$1,opts,start,end,on_change,i18n,quicklist_QMARK_))
)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.calendar.month_calendar,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"text","text",-1790561697),lomakkeet.reagent.calendar.loc.call(null,i18n,new cljs.core.Keyword(null,"end","end",-268185958)),new cljs.core.Keyword(null,"value","value",305978217),end,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__7034,map__7034__$1,opts,start,end,on_change,i18n,quicklist_QMARK_){
return (function (x){
return on_change.call(null,lomakkeet.reagent.calendar.set_end.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),start], null),x));
});})(map__7034,map__7034__$1,opts,start,end,on_change,i18n,quicklist_QMARK_))
)], null),(((quicklist_QMARK_ === true) || ((quicklist_QMARK_ == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.calendar.quicklist,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__7034,map__7034__$1,opts,start,end,on_change,i18n,quicklist_QMARK_){
return (function (p__7036){
var map__7037 = p__7036;
var map__7037__$1 = ((((!((map__7037 == null)))?((((map__7037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7037):map__7037);
var x = map__7037__$1;
var start__$1 = cljs.core.get.call(null,map__7037__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__7037__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return on_change.call(null,x);
});})(map__7034,map__7034__$1,opts,start,end,on_change,i18n,quicklist_QMARK_))
)], null):null)], null);
});

//# sourceMappingURL=calendar.js.map