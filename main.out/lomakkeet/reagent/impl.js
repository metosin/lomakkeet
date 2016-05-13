// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.reagent.impl');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('lomakkeet.core');
lomakkeet.reagent.impl.cb = (function lomakkeet$reagent$impl$cb(form,ks,value){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form),lomakkeet.core.change_value,ks,value,cljs.core.select_keys.call(null,form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation-fn","validation-fn",484220738),new cljs.core.Keyword(null,"coercion-matcher","coercion-matcher",725015316)], null)));
});
lomakkeet.reagent.impl.blur = (function lomakkeet$reagent$impl$blur(form,ks){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form),cljs.core.update,new cljs.core.Keyword(null,"not-pristine","not-pristine",623148367),cljs.core.assoc_in,ks,cljs.core.PersistentArrayMap.EMPTY);
});
lomakkeet.reagent.impl.get_or_deref = (function lomakkeet$reagent$impl$get_or_deref(x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
lomakkeet.reagent.impl.default_form_group = (function lomakkeet$reagent$impl$default_form_group(form,content,p__20506){
var map__20510 = p__20506;
var map__20510__$1 = ((((!((map__20510 == null)))?((((map__20510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20510):map__20510);
var opts = map__20510__$1;
var ks = cljs.core.get.call(null,map__20510__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var size = cljs.core.get.call(null,map__20510__$1,new cljs.core.Keyword(null,"size","size",1098693007),(6));
var label = cljs.core.get.call(null,map__20510__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var help_text = cljs.core.get.call(null,map__20510__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var explain_error = cljs.core.get.call(null,map__20510__$1,new cljs.core.Keyword(null,"explain-error","explain-error",-2038480438),lomakkeet.core.default_explain_error);
if(cljs.core.map_QMARK_.call(null,form)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"form","form",16469056,null))))].join('')));
}

if((function (){var G__20512 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form);
if(!((G__20512 == null))){
if(((G__20512.cljs$lang$protocol_mask$partition0$ & (32768))) || (G__20512.cljs$core$IDeref$)){
return true;
} else {
if((!G__20512.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__20512);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__20512);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),cljs.core.list(new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol(null,"form","form",16469056,null)))))].join('')));
}

var form_errors = reagent.ratom.make_reaction.call(null,((function (map__20510,map__20510__$1,opts,ks,size,label,help_text,explain_error){
return (function (){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form)));
});})(map__20510,map__20510__$1,opts,ks,size,label,help_text,explain_error))
);
var error = reagent.ratom.make_reaction.call(null,((function (form_errors,map__20510,map__20510__$1,opts,ks,size,label,help_text,explain_error){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,form_errors),ks);
});})(form_errors,map__20510,map__20510__$1,opts,ks,size,label,help_text,explain_error))
);
var pristine = reagent.ratom.make_reaction.call(null,((function (form_errors,error,map__20510,map__20510__$1,opts,ks,size,label,help_text,explain_error){
return (function (){
return cljs.core.not.call(null,cljs.core.get_in.call(null,new cljs.core.Keyword(null,"not-pristine","not-pristine",623148367).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form))),ks));
});})(form_errors,error,map__20510,map__20510__$1,opts,ks,size,label,help_text,explain_error))
);
return ((function (form_errors,error,pristine,map__20510,map__20510__$1,opts,ks,size,label,help_text,explain_error){
return (function (form__$1,content__$1,opts__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_((function (){var and__4976__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,pristine));
if(and__4976__auto__){
return cljs.core.deref.call(null,error);
} else {
return and__4976__auto__;
}
})())?"has-error ":null)),cljs.core.str((cljs.core.truth_((function (){var and__4976__auto__ = cljs.core.deref.call(null,pristine);
if(cljs.core.truth_(and__4976__auto__)){
return cljs.core.deref.call(null,error);
} else {
return and__4976__auto__;
}
})())?"needs-attention ":null)),cljs.core.str((cljs.core.truth_(size)?[cljs.core.str(" col-md-"),cljs.core.str(size),cljs.core.str(" ")].join(''):null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1,form__$1,opts__$1], null),(cljs.core.truth_(help_text)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.help-block","span.help-block",883406276),help_text], null):null),(cljs.core.truth_((function (){var and__4976__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,pristine));
if(and__4976__auto__){
return cljs.core.deref.call(null,error);
} else {
return and__4976__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.help-block","span.help-block",883406276),explain_error.call(null,cljs.core.deref.call(null,error))], null):null)], null);
});
;})(form_errors,error,pristine,map__20510,map__20510__$1,opts,ks,size,label,help_text,explain_error))
});
lomakkeet.reagent.impl.input_input = (function lomakkeet$reagent$impl$input_input(attrs,value,cb,blur){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4988__auto__ = [cljs.core.str(value)].join('');
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cb,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),blur], null))], null);
});
lomakkeet.reagent.impl.input_password = (function lomakkeet$reagent$impl$input_password(attrs,value,cb,blur){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4988__auto__ = [cljs.core.str(value)].join('');
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cb,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),blur], null))], null);
});
lomakkeet.reagent.impl.input_textarea = (function lomakkeet$reagent$impl$input_textarea(attrs,value,cb,blur){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4988__auto__ = value;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cb,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),blur], null))], null);
});
lomakkeet.reagent.impl.input_static = (function lomakkeet$reagent$impl$input_static(attrs,value,_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.form-control-static","p.form-control-static",216852603),value], null);
});
lomakkeet.reagent.impl.input_STAR_ = (function lomakkeet$reagent$impl$input_STAR_(form,p__20514){
var map__20517 = p__20514;
var map__20517__$1 = ((((!((map__20517 == null)))?((((map__20517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20517):map__20517);
var ks = cljs.core.get.call(null,map__20517__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var transform_value = cljs.core.get.call(null,map__20517__$1,new cljs.core.Keyword(null,"transform-value","transform-value",821015661),cljs.core.identity);
var el = cljs.core.get.call(null,map__20517__$1,new cljs.core.Keyword(null,"el","el",-1618201118),lomakkeet.reagent.impl.input_input);
var attrs = cljs.core.get.call(null,map__20517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var form_value = reagent.ratom.make_reaction.call(null,((function (map__20517,map__20517__$1,ks,transform_value,el,attrs){
return (function (){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form)));
});})(map__20517,map__20517__$1,ks,transform_value,el,attrs))
);
var value = reagent.ratom.make_reaction.call(null,((function (form_value,map__20517,map__20517__$1,ks,transform_value,el,attrs){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,form_value),ks);
});})(form_value,map__20517,map__20517__$1,ks,transform_value,el,attrs))
);
return ((function (form_value,value,map__20517,map__20517__$1,ks,transform_value,el,attrs){
return (function (){
return el.call(null,cljs.core.merge.call(null,lomakkeet.reagent.impl.get_or_deref.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(form)),attrs),transform_value.call(null,cljs.core.deref.call(null,value)),((function (form_value,value,map__20517,map__20517__$1,ks,transform_value,el,attrs){
return (function (p1__20513_SHARP_){
return lomakkeet.reagent.impl.cb.call(null,form,ks,p1__20513_SHARP_.target.value);
});})(form_value,value,map__20517,map__20517__$1,ks,transform_value,el,attrs))
,((function (form_value,value,map__20517,map__20517__$1,ks,transform_value,el,attrs){
return (function (){
return lomakkeet.reagent.impl.blur.call(null,form,ks);
});})(form_value,value,map__20517,map__20517__$1,ks,transform_value,el,attrs))
);
});
;})(form_value,value,map__20517,map__20517__$1,ks,transform_value,el,attrs))
});
lomakkeet.reagent.impl.checkbox_STAR_ = (function lomakkeet$reagent$impl$checkbox_STAR_(form,p__20520){
var map__20523 = p__20520;
var map__20523__$1 = ((((!((map__20523 == null)))?((((map__20523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20523):map__20523);
var ks = cljs.core.get.call(null,map__20523__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var form_value = reagent.ratom.make_reaction.call(null,((function (map__20523,map__20523__$1,ks){
return (function (){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form)));
});})(map__20523,map__20523__$1,ks))
);
var value = reagent.ratom.make_reaction.call(null,((function (form_value,map__20523,map__20523__$1,ks){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,form_value),ks);
});})(form_value,map__20523,map__20523__$1,ks))
);
return ((function (form_value,value,map__20523,map__20523__$1,ks){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$.call(null,cljs.core.deref.call(null,value)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (form_value,value,map__20523,map__20523__$1,ks){
return (function (p1__20519_SHARP_){
return lomakkeet.reagent.impl.cb.call(null,form,ks,p1__20519_SHARP_.target.checked);
});})(form_value,value,map__20523,map__20523__$1,ks))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (form_value,value,map__20523,map__20523__$1,ks){
return (function (){
return lomakkeet.reagent.impl.blur.call(null,form,ks);
});})(form_value,value,map__20523,map__20523__$1,ks))
], null)], null);
});
;})(form_value,value,map__20523,map__20523__$1,ks))
});
lomakkeet.reagent.impl.select_STAR_ = (function lomakkeet$reagent$impl$select_STAR_(form,p__20526){
var map__20540 = p__20526;
var map__20540__$1 = ((((!((map__20540 == null)))?((((map__20540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20540):map__20540);
var ks = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var options = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"options","options",99638489));
var attrs = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var form_value = reagent.ratom.make_reaction.call(null,((function (map__20540,map__20540__$1,ks,options,attrs){
return (function (){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form)));
});})(map__20540,map__20540__$1,ks,options,attrs))
);
var value = reagent.ratom.make_reaction.call(null,((function (form_value,map__20540,map__20540__$1,ks,options,attrs){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,form_value),ks);
});})(form_value,map__20540,map__20540__$1,ks,options,attrs))
);
return ((function (form_value,value,map__20540,map__20540__$1,ks,options,attrs){
return (function (form__$1,p__20542){
var map__20543 = p__20542;
var map__20543__$1 = ((((!((map__20543 == null)))?((((map__20543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20543):map__20543);
var ks__$1 = cljs.core.get.call(null,map__20543__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var options__$1 = cljs.core.get.call(null,map__20543__$1,new cljs.core.Keyword(null,"options","options",99638489));
var attrs__$1 = cljs.core.get.call(null,map__20543__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),cljs.core.merge.call(null,cljs.core.merge.call(null,lomakkeet.reagent.impl.get_or_deref.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(form__$1)),attrs__$1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__20543,map__20543__$1,ks__$1,options__$1,attrs__$1,form_value,value,map__20540,map__20540__$1,ks,options,attrs){
return (function (p1__20525_SHARP_){
return lomakkeet.reagent.impl.cb.call(null,form__$1,ks__$1,p1__20525_SHARP_.target.value);
});})(map__20543,map__20543__$1,ks__$1,options__$1,attrs__$1,form_value,value,map__20540,map__20540__$1,ks,options,attrs))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__20543,map__20543__$1,ks__$1,options__$1,attrs__$1,form_value,value,map__20540,map__20540__$1,ks,options,attrs){
return (function (){
return lomakkeet.reagent.impl.blur.call(null,form__$1,ks__$1);
});})(map__20543,map__20543__$1,ks__$1,options__$1,attrs__$1,form_value,value,map__20540,map__20540__$1,ks,options,attrs))
], null)),(function (){var iter__5760__auto__ = ((function (map__20543,map__20543__$1,ks__$1,options__$1,attrs__$1,form_value,value,map__20540,map__20540__$1,ks,options,attrs){
return (function lomakkeet$reagent$impl$select_STAR__$_iter__20545(s__20546){
return (new cljs.core.LazySeq(null,((function (map__20543,map__20543__$1,ks__$1,options__$1,attrs__$1,form_value,value,map__20540,map__20540__$1,ks,options,attrs){
return (function (){
var s__20546__$1 = s__20546;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20546__$1);
if(temp__4425__auto__){
var s__20546__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20546__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__20546__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__20548 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__20547 = (0);
while(true){
if((i__20547 < size__5759__auto__)){
var option = cljs.core._nth.call(null,c__5758__auto__,i__20547);
var vec__20551 = ((cljs.core.map_QMARK_.call(null,option))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option)], null):option);
var k = cljs.core.nth.call(null,vec__20551,(0),null);
var v = cljs.core.nth.call(null,vec__20551,(1),null);
cljs.core.chunk_append.call(null,b__20548,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"key","key",-1516042587),v], null),v], null));

var G__20553 = (i__20547 + (1));
i__20547 = G__20553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20548),lomakkeet$reagent$impl$select_STAR__$_iter__20545.call(null,cljs.core.chunk_rest.call(null,s__20546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20548),null);
}
} else {
var option = cljs.core.first.call(null,s__20546__$2);
var vec__20552 = ((cljs.core.map_QMARK_.call(null,option))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option)], null):option);
var k = cljs.core.nth.call(null,vec__20552,(0),null);
var v = cljs.core.nth.call(null,vec__20552,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"key","key",-1516042587),v], null),v], null),lomakkeet$reagent$impl$select_STAR__$_iter__20545.call(null,cljs.core.rest.call(null,s__20546__$2)));
}
} else {
return null;
}
break;
}
});})(map__20543,map__20543__$1,ks__$1,options__$1,attrs__$1,form_value,value,map__20540,map__20540__$1,ks,options,attrs))
,null,null));
});})(map__20543,map__20543__$1,ks__$1,options__$1,attrs__$1,form_value,value,map__20540,map__20540__$1,ks,options,attrs))
;
return iter__5760__auto__.call(null,options__$1);
})()], null);
});
;})(form_value,value,map__20540,map__20540__$1,ks,options,attrs))
});

//# sourceMappingURL=impl.js.map