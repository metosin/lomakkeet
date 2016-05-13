// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.reagent');
goog.require('cljs.core');
goog.require('lomakkeet.reagent.autocomplete');
goog.require('lomakkeet.reagent.currency_input');
goog.require('lomakkeet.reagent.impl');
goog.require('reagent.ratom');
goog.require('lomakkeet.util');
goog.require('lomakkeet.reagent.datepicker');
goog.require('lomakkeet.reagent.timepicker');
goog.require('lomakkeet.reagent.filepicker');
goog.require('lomakkeet.core');
lomakkeet.reagent.create_form = (function lomakkeet$reagent$create_form(var_args){
var args20900 = [];
var len__6046__auto___20903 = arguments.length;
var i__6047__auto___20904 = (0);
while(true){
if((i__6047__auto___20904 < len__6046__auto___20903)){
args20900.push((arguments[i__6047__auto___20904]));

var G__20905 = (i__6047__auto___20904 + (1));
i__6047__auto___20904 = G__20905;
continue;
} else {
}
break;
}

var G__20902 = args20900.length;
switch (G__20902) {
case 1:
return lomakkeet.reagent.create_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lomakkeet.reagent.create_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20900.length)].join('')));

}
});

lomakkeet.reagent.create_form.cljs$core$IFn$_invoke$arity$1 = (function (data){
return lomakkeet.reagent.create_form.call(null,data,null);
});

lomakkeet.reagent.create_form.cljs$core$IFn$_invoke$arity$2 = (function (data,opts){
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"data","data",-232669377),data);
});

lomakkeet.reagent.create_form.cljs$lang$maxFixedArity = 2;
lomakkeet.reagent.form_group_com = (function lomakkeet$reagent$form_group_com(form){
var or__4988__auto__ = new cljs.core.Keyword(null,"form-group","form-group",-267875328).cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return lomakkeet.reagent.impl.default_form_group;
}
});
lomakkeet.reagent.input = (function lomakkeet$reagent$input(var_args){
var args20907 = [];
var len__6046__auto___20910 = arguments.length;
var i__6047__auto___20911 = (0);
while(true){
if((i__6047__auto___20911 < len__6046__auto___20910)){
args20907.push((arguments[i__6047__auto___20911]));

var G__20912 = (i__6047__auto___20911 + (1));
i__6047__auto___20911 = G__20912;
continue;
} else {
}
break;
}

var G__20909 = args20907.length;
switch (G__20909) {
case 3:
return lomakkeet.reagent.input.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lomakkeet.reagent.input.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20907.length)].join('')));

}
});

lomakkeet.reagent.input.cljs$core$IFn$_invoke$arity$3 = (function (form,label,ks){
return lomakkeet.reagent.input.call(null,form,label,ks,null);
});

lomakkeet.reagent.input.cljs$core$IFn$_invoke$arity$4 = (function (form,label,ks,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com.call(null,form),form,lomakkeet.reagent.impl.input_STAR_,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(form),opts),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"ks","ks",1900203942),ks)], null);
});

lomakkeet.reagent.input.cljs$lang$maxFixedArity = 4;
lomakkeet.reagent.password = (function lomakkeet$reagent$password(var_args){
var args20914 = [];
var len__6046__auto___20917 = arguments.length;
var i__6047__auto___20918 = (0);
while(true){
if((i__6047__auto___20918 < len__6046__auto___20917)){
args20914.push((arguments[i__6047__auto___20918]));

var G__20919 = (i__6047__auto___20918 + (1));
i__6047__auto___20918 = G__20919;
continue;
} else {
}
break;
}

var G__20916 = args20914.length;
switch (G__20916) {
case 3:
return lomakkeet.reagent.password.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lomakkeet.reagent.password.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20914.length)].join('')));

}
});

lomakkeet.reagent.password.cljs$core$IFn$_invoke$arity$3 = (function (form,label,ks){
return lomakkeet.reagent.password.call(null,form,label,ks,null);
});

lomakkeet.reagent.password.cljs$core$IFn$_invoke$arity$4 = (function (form,label,ks,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com.call(null,form),form,lomakkeet.reagent.impl.input_STAR_,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(form),opts),new cljs.core.Keyword(null,"el","el",-1618201118),lomakkeet.reagent.impl.input_password,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"ks","ks",1900203942),ks)], null);
});

lomakkeet.reagent.password.cljs$lang$maxFixedArity = 4;
lomakkeet.reagent.textarea = (function lomakkeet$reagent$textarea(var_args){
var args20921 = [];
var len__6046__auto___20924 = arguments.length;
var i__6047__auto___20925 = (0);
while(true){
if((i__6047__auto___20925 < len__6046__auto___20924)){
args20921.push((arguments[i__6047__auto___20925]));

var G__20926 = (i__6047__auto___20925 + (1));
i__6047__auto___20925 = G__20926;
continue;
} else {
}
break;
}

var G__20923 = args20921.length;
switch (G__20923) {
case 3:
return lomakkeet.reagent.textarea.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lomakkeet.reagent.textarea.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20921.length)].join('')));

}
});

lomakkeet.reagent.textarea.cljs$core$IFn$_invoke$arity$3 = (function (form,label,ks){
return lomakkeet.reagent.textarea.call(null,form,label,ks,null);
});

lomakkeet.reagent.textarea.cljs$core$IFn$_invoke$arity$4 = (function (form,label,ks,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com.call(null,form),form,lomakkeet.reagent.impl.input_STAR_,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(form),opts),new cljs.core.Keyword(null,"el","el",-1618201118),lomakkeet.reagent.impl.input_textarea,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"ks","ks",1900203942),ks)], null);
});

lomakkeet.reagent.textarea.cljs$lang$maxFixedArity = 4;
lomakkeet.reagent.static$ = (function lomakkeet$reagent$static(var_args){
var args20928 = [];
var len__6046__auto___20931 = arguments.length;
var i__6047__auto___20932 = (0);
while(true){
if((i__6047__auto___20932 < len__6046__auto___20931)){
args20928.push((arguments[i__6047__auto___20932]));

var G__20933 = (i__6047__auto___20932 + (1));
i__6047__auto___20932 = G__20933;
continue;
} else {
}
break;
}

var G__20930 = args20928.length;
switch (G__20930) {
case 3:
return lomakkeet.reagent.static$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lomakkeet.reagent.static$.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20928.length)].join('')));

}
});

lomakkeet.reagent.static$.cljs$core$IFn$_invoke$arity$3 = (function (form,label,ks){
return lomakkeet.reagent.static$.call(null,form,label,ks,null);
});

lomakkeet.reagent.static$.cljs$core$IFn$_invoke$arity$4 = (function (form,label,ks,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com.call(null,form),form,lomakkeet.reagent.impl.input_STAR_,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(form),opts),new cljs.core.Keyword(null,"el","el",-1618201118),lomakkeet.reagent.impl.input_static,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"ks","ks",1900203942),ks)], null);
});

lomakkeet.reagent.static$.cljs$lang$maxFixedArity = 4;
lomakkeet.reagent.checkbox = (function lomakkeet$reagent$checkbox(var_args){
var args20935 = [];
var len__6046__auto___20938 = arguments.length;
var i__6047__auto___20939 = (0);
while(true){
if((i__6047__auto___20939 < len__6046__auto___20938)){
args20935.push((arguments[i__6047__auto___20939]));

var G__20940 = (i__6047__auto___20939 + (1));
i__6047__auto___20939 = G__20940;
continue;
} else {
}
break;
}

var G__20937 = args20935.length;
switch (G__20937) {
case 3:
return lomakkeet.reagent.checkbox.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lomakkeet.reagent.checkbox.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20935.length)].join('')));

}
});

lomakkeet.reagent.checkbox.cljs$core$IFn$_invoke$arity$3 = (function (form,label,ks){
return lomakkeet.reagent.checkbox.call(null,form,label,ks,null);
});

lomakkeet.reagent.checkbox.cljs$core$IFn$_invoke$arity$4 = (function (form,label,ks,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com.call(null,form),form,lomakkeet.reagent.impl.checkbox_STAR_,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(form),opts),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"ks","ks",1900203942),ks)], null);
});

lomakkeet.reagent.checkbox.cljs$lang$maxFixedArity = 4;
lomakkeet.reagent.select = (function lomakkeet$reagent$select(var_args){
var args20942 = [];
var len__6046__auto___20945 = arguments.length;
var i__6047__auto___20946 = (0);
while(true){
if((i__6047__auto___20946 < len__6046__auto___20945)){
args20942.push((arguments[i__6047__auto___20946]));

var G__20947 = (i__6047__auto___20946 + (1));
i__6047__auto___20946 = G__20947;
continue;
} else {
}
break;
}

var G__20944 = args20942.length;
switch (G__20944) {
case 4:
return lomakkeet.reagent.select.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return lomakkeet.reagent.select.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20942.length)].join('')));

}
});

lomakkeet.reagent.select.cljs$core$IFn$_invoke$arity$4 = (function (form,label,ks,options){
return lomakkeet.reagent.select.call(null,form,label,ks,options,null);
});

lomakkeet.reagent.select.cljs$core$IFn$_invoke$arity$5 = (function (form,label,ks,options,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com.call(null,form),form,lomakkeet.reagent.impl.select_STAR_,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(form),opts),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"options","options",99638489),options)], null);
});

lomakkeet.reagent.select.cljs$lang$maxFixedArity = 5;
lomakkeet.reagent.date = (function lomakkeet$reagent$date(var_args){
var args20949 = [];
var len__6046__auto___20952 = arguments.length;
var i__6047__auto___20953 = (0);
while(true){
if((i__6047__auto___20953 < len__6046__auto___20952)){
args20949.push((arguments[i__6047__auto___20953]));

var G__20954 = (i__6047__auto___20953 + (1));
i__6047__auto___20953 = G__20954;
continue;
} else {
}
break;
}

var G__20951 = args20949.length;
switch (G__20951) {
case 3:
return lomakkeet.reagent.date.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lomakkeet.reagent.date.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20949.length)].join('')));

}
});

lomakkeet.reagent.date.cljs$core$IFn$_invoke$arity$3 = (function (form,label,ks){
return lomakkeet.reagent.date.call(null,form,label,ks,null);
});

lomakkeet.reagent.date.cljs$core$IFn$_invoke$arity$4 = (function (form,label,ks,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com.call(null,form),form,lomakkeet.reagent.datepicker.date_STAR_,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(form),opts),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"ks","ks",1900203942),ks)], null);
});

lomakkeet.reagent.date.cljs$lang$maxFixedArity = 4;
lomakkeet.reagent.time = (function lomakkeet$reagent$time(var_args){
var args20956 = [];
var len__6046__auto___20959 = arguments.length;
var i__6047__auto___20960 = (0);
while(true){
if((i__6047__auto___20960 < len__6046__auto___20959)){
args20956.push((arguments[i__6047__auto___20960]));

var G__20961 = (i__6047__auto___20960 + (1));
i__6047__auto___20960 = G__20961;
continue;
} else {
}
break;
}

var G__20958 = args20956.length;
switch (G__20958) {
case 3:
return lomakkeet.reagent.time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lomakkeet.reagent.time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20956.length)].join('')));

}
});

lomakkeet.reagent.time.cljs$core$IFn$_invoke$arity$3 = (function (form,label,ks){
return lomakkeet.reagent.time.call(null,form,label,ks,null);
});

lomakkeet.reagent.time.cljs$core$IFn$_invoke$arity$4 = (function (form,label,ks,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com.call(null,form),form,lomakkeet.reagent.timepicker.timepicker_STAR_,cljs.core.merge.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(form),opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"ks","ks",1900203942),ks], null))], null);
});

lomakkeet.reagent.time.cljs$lang$maxFixedArity = 4;
lomakkeet.reagent.file = (function lomakkeet$reagent$file(var_args){
var args20963 = [];
var len__6046__auto___20966 = arguments.length;
var i__6047__auto___20967 = (0);
while(true){
if((i__6047__auto___20967 < len__6046__auto___20966)){
args20963.push((arguments[i__6047__auto___20967]));

var G__20968 = (i__6047__auto___20967 + (1));
i__6047__auto___20967 = G__20968;
continue;
} else {
}
break;
}

var G__20965 = args20963.length;
switch (G__20965) {
case 3:
return lomakkeet.reagent.file.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lomakkeet.reagent.file.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20963.length)].join('')));

}
});

lomakkeet.reagent.file.cljs$core$IFn$_invoke$arity$3 = (function (form,label,ks){
return lomakkeet.reagent.file.call(null,form,label,ks,null);
});

lomakkeet.reagent.file.cljs$core$IFn$_invoke$arity$4 = (function (form,label,ks,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com.call(null,form),form,lomakkeet.reagent.filepicker.file_STAR_,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(form),opts),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"ks","ks",1900203942),ks)], null);
});

lomakkeet.reagent.file.cljs$lang$maxFixedArity = 4;
lomakkeet.reagent.complete = (function lomakkeet$reagent$complete(var_args){
var args20970 = [];
var len__6046__auto___20973 = arguments.length;
var i__6047__auto___20974 = (0);
while(true){
if((i__6047__auto___20974 < len__6046__auto___20973)){
args20970.push((arguments[i__6047__auto___20974]));

var G__20975 = (i__6047__auto___20974 + (1));
i__6047__auto___20974 = G__20975;
continue;
} else {
}
break;
}

var G__20972 = args20970.length;
switch (G__20972) {
case 3:
return lomakkeet.reagent.complete.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lomakkeet.reagent.complete.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20970.length)].join('')));

}
});

lomakkeet.reagent.complete.cljs$core$IFn$_invoke$arity$3 = (function (form,label,ks){
return lomakkeet.reagent.complete.call(null,form,label,ks,null);
});

lomakkeet.reagent.complete.cljs$core$IFn$_invoke$arity$4 = (function (form,label,ks,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com.call(null,form),form,lomakkeet.reagent.autocomplete.autocomplete_STAR_,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(form),opts),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"ks","ks",1900203942),ks)], null);
});

lomakkeet.reagent.complete.cljs$lang$maxFixedArity = 4;
lomakkeet.reagent.currency = (function lomakkeet$reagent$currency(var_args){
var args20977 = [];
var len__6046__auto___20980 = arguments.length;
var i__6047__auto___20981 = (0);
while(true){
if((i__6047__auto___20981 < len__6046__auto___20980)){
args20977.push((arguments[i__6047__auto___20981]));

var G__20982 = (i__6047__auto___20981 + (1));
i__6047__auto___20981 = G__20982;
continue;
} else {
}
break;
}

var G__20979 = args20977.length;
switch (G__20979) {
case 3:
return lomakkeet.reagent.currency.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lomakkeet.reagent.currency.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20977.length)].join('')));

}
});

lomakkeet.reagent.currency.cljs$core$IFn$_invoke$arity$3 = (function (form,label,ks){
return lomakkeet.reagent.currency.call(null,form,label,ks,null);
});

lomakkeet.reagent.currency.cljs$core$IFn$_invoke$arity$4 = (function (form,label,ks,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.form_group_com.call(null,form),form,lomakkeet.reagent.currency_input.currency_input_STAR_,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(form),opts),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"ks","ks",1900203942),ks)], null);
});

lomakkeet.reagent.currency.cljs$lang$maxFixedArity = 4;
lomakkeet.reagent.validation_error__GT_str = lomakkeet.core.validation_error__GT_str;
lomakkeet.reagent.default_explain_error = lomakkeet.core.default_explain_error;
lomakkeet.reagent.__GT_fs = lomakkeet.core.__GT_fs;
lomakkeet.reagent.value = lomakkeet.core.value;
lomakkeet.reagent.reset = lomakkeet.core.reset;
lomakkeet.reagent.commit = lomakkeet.core.commit;
lomakkeet.reagent.save = lomakkeet.core.save;
lomakkeet.reagent.validate = lomakkeet.core.validate;
lomakkeet.reagent.update = lomakkeet.core.update;
lomakkeet.reagent.dirty_QMARK_ = lomakkeet.core.dirty_QMARK_;
lomakkeet.reagent.errors_QMARK_ = lomakkeet.core.errors_QMARK_;

//# sourceMappingURL=reagent.js.map