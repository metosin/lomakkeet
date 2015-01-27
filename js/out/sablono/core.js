// Compiled by ClojureScript 0.0-2727 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__31328__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__31327 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31327,(0),null);
var body = cljs.core.nthnext(vec__31327,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__31328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31329__i = 0, G__31329__a = new Array(arguments.length -  0);
while (G__31329__i < G__31329__a.length) {G__31329__a[G__31329__i] = arguments[G__31329__i + 0]; ++G__31329__i;}
  args = new cljs.core.IndexedSeq(G__31329__a,0);
} 
return G__31328__delegate.call(this,args);};
G__31328.cljs$lang$maxFixedArity = 0;
G__31328.cljs$lang$applyTo = (function (arglist__31330){
var args = cljs.core.seq(arglist__31330);
return G__31328__delegate(args);
});
G__31328.cljs$core$IFn$_invoke$arity$variadic = G__31328__delegate;
return G__31328;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__5007__auto__ = (function iter__31337(s__31338){
return (new cljs.core.LazySeq(null,(function (){
var s__31338__$1 = s__31338;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31338__$1);
if(temp__4126__auto__){
var s__31338__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31338__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31338__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31340 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31339 = (0);
while(true){
if((i__31339 < size__5006__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31339);
cljs.core.chunk_append(b__31340,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31343 = (i__31339 + (1));
i__31339 = G__31343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31340),iter__31337(cljs.core.chunk_rest(s__31338__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31340),null);
}
} else {
var args = cljs.core.first(s__31338__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__31337(cljs.core.rest(s__31338__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5007__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){
return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__5007__auto__ = (function iter__31350(s__31351){
return (new cljs.core.LazySeq(null,(function (){
var s__31351__$1 = s__31351;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31351__$1);
if(temp__4126__auto__){
var s__31351__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31351__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31351__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31353 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31352 = (0);
while(true){
if((i__31352 < size__5006__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31352);
cljs.core.chunk_append(b__31353,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,"text/css",cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$127,"stylesheet"], null)], null));

var G__31356 = (i__31352 + (1));
i__31352 = G__31356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31353),iter__31350(cljs.core.chunk_rest(s__31351__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31353),null);
}
} else {
var style = cljs.core.first(s__31351__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,"text/css",cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$127,"stylesheet"], null)], null),iter__31350(cljs.core.rest(s__31351__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5007__auto__(styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__31357__i = 0, G__31357__a = new Array(arguments.length -  0);
while (G__31357__i < G__31357__a.length) {G__31357__a[G__31357__i] = arguments[G__31357__i + 0]; ++G__31357__i;}
  styles = new cljs.core.IndexedSeq(G__31357__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__31358){
var styles = cljs.core.seq(arglist__31358);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
var G__31363 = (function (){return goog.dom.getDocument();
})().body;
var G__31364 = (function (){var G__31365 = "script";
var G__31366 = {"src": src};
return goog.dom.createDom(G__31365,G__31366);
})();
return goog.dom.appendChild(G__31363,G__31364);
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js("http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to31367 = (function() { 
var link_to31367__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to31367 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__31368__i = 0, G__31368__a = new Array(arguments.length -  1);
while (G__31368__i < G__31368__a.length) {G__31368__a[G__31368__i] = arguments[G__31368__i + 1]; ++G__31368__i;}
  content = new cljs.core.IndexedSeq(G__31368__a,0);
} 
return link_to31367__delegate.call(this,url,content);};
link_to31367.cljs$lang$maxFixedArity = 1;
link_to31367.cljs$lang$applyTo = (function (arglist__31369){
var url = cljs.core.first(arglist__31369);
var content = cljs.core.rest(arglist__31369);
return link_to31367__delegate(url,content);
});
link_to31367.cljs$core$IFn$_invoke$arity$variadic = link_to31367__delegate;
return link_to31367;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to31367);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to31370 = (function() { 
var mail_to31370__delegate = function (e_mail,p__31371){
var vec__31373 = p__31371;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31373,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4251__auto__ = content;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to31370 = function (e_mail,var_args){
var p__31371 = null;
if (arguments.length > 1) {
var G__31374__i = 0, G__31374__a = new Array(arguments.length -  1);
while (G__31374__i < G__31374__a.length) {G__31374__a[G__31374__i] = arguments[G__31374__i + 1]; ++G__31374__i;}
  p__31371 = new cljs.core.IndexedSeq(G__31374__a,0);
} 
return mail_to31370__delegate.call(this,e_mail,p__31371);};
mail_to31370.cljs$lang$maxFixedArity = 1;
mail_to31370.cljs$lang$applyTo = (function (arglist__31375){
var e_mail = cljs.core.first(arglist__31375);
var p__31371 = cljs.core.rest(arglist__31375);
return mail_to31370__delegate(e_mail,p__31371);
});
mail_to31370.cljs$core$IFn$_invoke$arity$variadic = mail_to31370__delegate;
return mail_to31370;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to31370);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list31376 = (function unordered_list31376(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__5007__auto__ = (function iter__31383(s__31384){
return (new cljs.core.LazySeq(null,(function (){
var s__31384__$1 = s__31384;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31384__$1);
if(temp__4126__auto__){
var s__31384__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31384__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31384__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31386 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31385 = (0);
while(true){
if((i__31385 < size__5006__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31385);
cljs.core.chunk_append(b__31386,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null));

var G__31389 = (i__31385 + (1));
i__31385 = G__31389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31386),iter__31383(cljs.core.chunk_rest(s__31384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31386),null);
}
} else {
var x = cljs.core.first(s__31384__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null),iter__31383(cljs.core.rest(s__31384__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5007__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list31376);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list31390 = (function ordered_list31390(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,(function (){var iter__5007__auto__ = (function iter__31397(s__31398){
return (new cljs.core.LazySeq(null,(function (){
var s__31398__$1 = s__31398;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31398__$1);
if(temp__4126__auto__){
var s__31398__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31398__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31398__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31400 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31399 = (0);
while(true){
if((i__31399 < size__5006__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31399);
cljs.core.chunk_append(b__31400,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null));

var G__31403 = (i__31399 + (1));
i__31399 = G__31403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31400),iter__31397(cljs.core.chunk_rest(s__31398__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31400),null);
}
} else {
var x = cljs.core.first(s__31398__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null),iter__31397(cljs.core.rest(s__31398__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5007__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list31390);
/**
* Create an image element.
*/
sablono.core.image31404 = (function() {
var image31404 = null;
var image31404__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$133,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image31404__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$133,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$134,alt], null)], null);
});
image31404 = function(src,alt){
switch(arguments.length){
case 1:
return image31404__1.call(this,src);
case 2:
return image31404__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image31404.cljs$core$IFn$_invoke$arity$1 = image31404__1;
image31404.cljs$core$IFn$_invoke$arity$2 = image31404__2;
return image31404;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image31404);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__31405_SHARP_,p2__31406_SHARP_){
return [cljs.core.str(p1__31405_SHARP_),cljs.core.str("["),cljs.core.str(p2__31406_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__31407_SHARP_,p2__31408_SHARP_){
return [cljs.core.str(p1__31407_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31408_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$68,type,cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name),cljs.core.constant$keyword$66,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field31409 = (function() {
var color_field31409 = null;
var color_field31409__1 = (function (name__20277__auto__){
return color_field31409.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var color_field31409__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20277__auto__,value__20278__auto__);
});
color_field31409 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return color_field31409__1.call(this,name__20277__auto__);
case 2:
return color_field31409__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field31409.cljs$core$IFn$_invoke$arity$1 = color_field31409__1;
color_field31409.cljs$core$IFn$_invoke$arity$2 = color_field31409__2;
return color_field31409;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field31409);

/**
* Creates a date input field.
*/
sablono.core.date_field31412 = (function() {
var date_field31412 = null;
var date_field31412__1 = (function (name__20277__auto__){
return date_field31412.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var date_field31412__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20277__auto__,value__20278__auto__);
});
date_field31412 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return date_field31412__1.call(this,name__20277__auto__);
case 2:
return date_field31412__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field31412.cljs$core$IFn$_invoke$arity$1 = date_field31412__1;
date_field31412.cljs$core$IFn$_invoke$arity$2 = date_field31412__2;
return date_field31412;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field31412);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field31415 = (function() {
var datetime_field31415 = null;
var datetime_field31415__1 = (function (name__20277__auto__){
return datetime_field31415.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var datetime_field31415__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20277__auto__,value__20278__auto__);
});
datetime_field31415 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return datetime_field31415__1.call(this,name__20277__auto__);
case 2:
return datetime_field31415__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field31415.cljs$core$IFn$_invoke$arity$1 = datetime_field31415__1;
datetime_field31415.cljs$core$IFn$_invoke$arity$2 = datetime_field31415__2;
return datetime_field31415;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field31415);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field31418 = (function() {
var datetime_local_field31418 = null;
var datetime_local_field31418__1 = (function (name__20277__auto__){
return datetime_local_field31418.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var datetime_local_field31418__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20277__auto__,value__20278__auto__);
});
datetime_local_field31418 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return datetime_local_field31418__1.call(this,name__20277__auto__);
case 2:
return datetime_local_field31418__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field31418.cljs$core$IFn$_invoke$arity$1 = datetime_local_field31418__1;
datetime_local_field31418.cljs$core$IFn$_invoke$arity$2 = datetime_local_field31418__2;
return datetime_local_field31418;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field31418);

/**
* Creates a email input field.
*/
sablono.core.email_field31421 = (function() {
var email_field31421 = null;
var email_field31421__1 = (function (name__20277__auto__){
return email_field31421.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var email_field31421__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20277__auto__,value__20278__auto__);
});
email_field31421 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return email_field31421__1.call(this,name__20277__auto__);
case 2:
return email_field31421__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field31421.cljs$core$IFn$_invoke$arity$1 = email_field31421__1;
email_field31421.cljs$core$IFn$_invoke$arity$2 = email_field31421__2;
return email_field31421;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field31421);

/**
* Creates a file input field.
*/
sablono.core.file_field31424 = (function() {
var file_field31424 = null;
var file_field31424__1 = (function (name__20277__auto__){
return file_field31424.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var file_field31424__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20277__auto__,value__20278__auto__);
});
file_field31424 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return file_field31424__1.call(this,name__20277__auto__);
case 2:
return file_field31424__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field31424.cljs$core$IFn$_invoke$arity$1 = file_field31424__1;
file_field31424.cljs$core$IFn$_invoke$arity$2 = file_field31424__2;
return file_field31424;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field31424);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field31427 = (function() {
var hidden_field31427 = null;
var hidden_field31427__1 = (function (name__20277__auto__){
return hidden_field31427.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var hidden_field31427__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20277__auto__,value__20278__auto__);
});
hidden_field31427 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return hidden_field31427__1.call(this,name__20277__auto__);
case 2:
return hidden_field31427__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field31427.cljs$core$IFn$_invoke$arity$1 = hidden_field31427__1;
hidden_field31427.cljs$core$IFn$_invoke$arity$2 = hidden_field31427__2;
return hidden_field31427;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field31427);

/**
* Creates a month input field.
*/
sablono.core.month_field31430 = (function() {
var month_field31430 = null;
var month_field31430__1 = (function (name__20277__auto__){
return month_field31430.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var month_field31430__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20277__auto__,value__20278__auto__);
});
month_field31430 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return month_field31430__1.call(this,name__20277__auto__);
case 2:
return month_field31430__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field31430.cljs$core$IFn$_invoke$arity$1 = month_field31430__1;
month_field31430.cljs$core$IFn$_invoke$arity$2 = month_field31430__2;
return month_field31430;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field31430);

/**
* Creates a number input field.
*/
sablono.core.number_field31433 = (function() {
var number_field31433 = null;
var number_field31433__1 = (function (name__20277__auto__){
return number_field31433.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var number_field31433__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20277__auto__,value__20278__auto__);
});
number_field31433 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return number_field31433__1.call(this,name__20277__auto__);
case 2:
return number_field31433__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field31433.cljs$core$IFn$_invoke$arity$1 = number_field31433__1;
number_field31433.cljs$core$IFn$_invoke$arity$2 = number_field31433__2;
return number_field31433;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field31433);

/**
* Creates a password input field.
*/
sablono.core.password_field31436 = (function() {
var password_field31436 = null;
var password_field31436__1 = (function (name__20277__auto__){
return password_field31436.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var password_field31436__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20277__auto__,value__20278__auto__);
});
password_field31436 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return password_field31436__1.call(this,name__20277__auto__);
case 2:
return password_field31436__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field31436.cljs$core$IFn$_invoke$arity$1 = password_field31436__1;
password_field31436.cljs$core$IFn$_invoke$arity$2 = password_field31436__2;
return password_field31436;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field31436);

/**
* Creates a range input field.
*/
sablono.core.range_field31439 = (function() {
var range_field31439 = null;
var range_field31439__1 = (function (name__20277__auto__){
return range_field31439.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var range_field31439__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20277__auto__,value__20278__auto__);
});
range_field31439 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return range_field31439__1.call(this,name__20277__auto__);
case 2:
return range_field31439__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field31439.cljs$core$IFn$_invoke$arity$1 = range_field31439__1;
range_field31439.cljs$core$IFn$_invoke$arity$2 = range_field31439__2;
return range_field31439;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field31439);

/**
* Creates a search input field.
*/
sablono.core.search_field31442 = (function() {
var search_field31442 = null;
var search_field31442__1 = (function (name__20277__auto__){
return search_field31442.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var search_field31442__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20277__auto__,value__20278__auto__);
});
search_field31442 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return search_field31442__1.call(this,name__20277__auto__);
case 2:
return search_field31442__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field31442.cljs$core$IFn$_invoke$arity$1 = search_field31442__1;
search_field31442.cljs$core$IFn$_invoke$arity$2 = search_field31442__2;
return search_field31442;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field31442);

/**
* Creates a tel input field.
*/
sablono.core.tel_field31445 = (function() {
var tel_field31445 = null;
var tel_field31445__1 = (function (name__20277__auto__){
return tel_field31445.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var tel_field31445__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20277__auto__,value__20278__auto__);
});
tel_field31445 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return tel_field31445__1.call(this,name__20277__auto__);
case 2:
return tel_field31445__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field31445.cljs$core$IFn$_invoke$arity$1 = tel_field31445__1;
tel_field31445.cljs$core$IFn$_invoke$arity$2 = tel_field31445__2;
return tel_field31445;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field31445);

/**
* Creates a text input field.
*/
sablono.core.text_field31448 = (function() {
var text_field31448 = null;
var text_field31448__1 = (function (name__20277__auto__){
return text_field31448.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var text_field31448__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20277__auto__,value__20278__auto__);
});
text_field31448 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return text_field31448__1.call(this,name__20277__auto__);
case 2:
return text_field31448__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field31448.cljs$core$IFn$_invoke$arity$1 = text_field31448__1;
text_field31448.cljs$core$IFn$_invoke$arity$2 = text_field31448__2;
return text_field31448;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field31448);

/**
* Creates a time input field.
*/
sablono.core.time_field31451 = (function() {
var time_field31451 = null;
var time_field31451__1 = (function (name__20277__auto__){
return time_field31451.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var time_field31451__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20277__auto__,value__20278__auto__);
});
time_field31451 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return time_field31451__1.call(this,name__20277__auto__);
case 2:
return time_field31451__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field31451.cljs$core$IFn$_invoke$arity$1 = time_field31451__1;
time_field31451.cljs$core$IFn$_invoke$arity$2 = time_field31451__2;
return time_field31451;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field31451);

/**
* Creates a url input field.
*/
sablono.core.url_field31454 = (function() {
var url_field31454 = null;
var url_field31454__1 = (function (name__20277__auto__){
return url_field31454.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var url_field31454__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20277__auto__,value__20278__auto__);
});
url_field31454 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return url_field31454__1.call(this,name__20277__auto__);
case 2:
return url_field31454__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field31454.cljs$core$IFn$_invoke$arity$1 = url_field31454__1;
url_field31454.cljs$core$IFn$_invoke$arity$2 = url_field31454__2;
return url_field31454;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field31454);

/**
* Creates a week input field.
*/
sablono.core.week_field31457 = (function() {
var week_field31457 = null;
var week_field31457__1 = (function (name__20277__auto__){
return week_field31457.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var week_field31457__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20277__auto__,value__20278__auto__);
});
week_field31457 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return week_field31457__1.call(this,name__20277__auto__);
case 2:
return week_field31457__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field31457.cljs$core$IFn$_invoke$arity$1 = week_field31457__1;
week_field31457.cljs$core$IFn$_invoke$arity$2 = week_field31457__2;
return week_field31457;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field31457);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box31460 = (function() {
var check_box31460 = null;
var check_box31460__1 = (function (name){
return check_box31460.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box31460__2 = (function (name,checked_QMARK_){
return check_box31460.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box31460__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,"checkbox",cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name),cljs.core.constant$keyword$66,value,cljs.core.constant$keyword$135,checked_QMARK_], null)], null);
});
check_box31460 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box31460__1.call(this,name);
case 2:
return check_box31460__2.call(this,name,checked_QMARK_);
case 3:
return check_box31460__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box31460.cljs$core$IFn$_invoke$arity$1 = check_box31460__1;
check_box31460.cljs$core$IFn$_invoke$arity$2 = check_box31460__2;
check_box31460.cljs$core$IFn$_invoke$arity$3 = check_box31460__3;
return check_box31460;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box31460);
/**
* Creates a radio button.
*/
sablono.core.radio_button31466 = (function() {
var radio_button31466 = null;
var radio_button31466__1 = (function (group){
return radio_button31466.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button31466__2 = (function (group,checked_QMARK_){
return radio_button31466.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button31466__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,"radio",cljs.core.constant$keyword$80,sablono.core.make_name(group),cljs.core.constant$keyword$121,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$66,value,cljs.core.constant$keyword$135,checked_QMARK_], null)], null);
});
radio_button31466 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button31466__1.call(this,group);
case 2:
return radio_button31466__2.call(this,group,checked_QMARK_);
case 3:
return radio_button31466__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button31466.cljs$core$IFn$_invoke$arity$1 = radio_button31466__1;
radio_button31466.cljs$core$IFn$_invoke$arity$2 = radio_button31466__2;
radio_button31466.cljs$core$IFn$_invoke$arity$3 = radio_button31466__3;
return radio_button31466;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button31466);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options31472 = (function() {
var select_options31472 = null;
var select_options31472__1 = (function (coll){
return select_options31472.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options31472__2 = (function (coll,selected){
var iter__5007__auto__ = (function iter__31493(s__31494){
return (new cljs.core.LazySeq(null,(function (){
var s__31494__$1 = s__31494;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31494__$1);
if(temp__4126__auto__){
var s__31494__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31494__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31494__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31496 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31495 = (0);
while(true){
if((i__31495 < size__5006__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31495);
cljs.core.chunk_append(b__31496,((cljs.core.sequential_QMARK_(x))?(function (){var vec__31501 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31501,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31501,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31501,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,text], null),select_options31472.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,val,cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$139,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__31503 = (i__31495 + (1));
i__31495 = G__31503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31496),iter__31493(cljs.core.chunk_rest(s__31494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31496),null);
}
} else {
var x = cljs.core.first(s__31494__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__31502 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31502,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31502,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31502,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,text], null),select_options31472.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,val,cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$139,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__31493(cljs.core.rest(s__31494__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5007__auto__(coll);
});
select_options31472 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options31472__1.call(this,coll);
case 2:
return select_options31472__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options31472.cljs$core$IFn$_invoke$arity$1 = select_options31472__1;
select_options31472.cljs$core$IFn$_invoke$arity$2 = select_options31472__2;
return select_options31472;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options31472);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down31504 = (function() {
var drop_down31504 = null;
var drop_down31504__2 = (function (name,options){
return drop_down31504.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down31504__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$140,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name)], null),(function (){var G__31510 = options;
var G__31511 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__31510,G__31511) : sablono.core.select_options.call(null,G__31510,G__31511));
})()], null);
});
drop_down31504 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down31504__2.call(this,name,options);
case 3:
return drop_down31504__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down31504.cljs$core$IFn$_invoke$arity$2 = drop_down31504__2;
drop_down31504.cljs$core$IFn$_invoke$arity$3 = drop_down31504__3;
return drop_down31504;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down31504);
/**
* Creates a text area element.
*/
sablono.core.text_area31512 = (function() {
var text_area31512 = null;
var text_area31512__1 = (function (name){
return text_area31512.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area31512__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name),cljs.core.constant$keyword$66,value], null)], null);
});
text_area31512 = function(name,value){
switch(arguments.length){
case 1:
return text_area31512__1.call(this,name);
case 2:
return text_area31512__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area31512.cljs$core$IFn$_invoke$arity$1 = text_area31512__1;
text_area31512.cljs$core$IFn$_invoke$arity$2 = text_area31512__2;
return text_area31512;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area31512);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label31515 = (function label31515(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label31515);
/**
* Creates a submit button.
*/
sablono.core.submit_button31516 = (function submit_button31516(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,"submit",cljs.core.constant$keyword$66,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button31516);
/**
* Creates a form reset button.
*/
sablono.core.reset_button31517 = (function reset_button31517(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,"reset",cljs.core.constant$keyword$66,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button31517);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to31518 = (function() { 
var form_to31518__delegate = function (p__31519,body){
var vec__31523 = p__31519;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31523,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31523,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,null,cljs.core.constant$keyword$142,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$144,method_str,cljs.core.constant$keyword$145,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$144,"POST",cljs.core.constant$keyword$145,action_uri], null),(function (){var G__31524 = "_method";
var G__31525 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__31524,G__31525) : sablono.core.hidden_field.call(null,G__31524,G__31525));
})()], null)),body));
};
var form_to31518 = function (p__31519,var_args){
var body = null;
if (arguments.length > 1) {
var G__31526__i = 0, G__31526__a = new Array(arguments.length -  1);
while (G__31526__i < G__31526__a.length) {G__31526__a[G__31526__i] = arguments[G__31526__i + 1]; ++G__31526__i;}
  body = new cljs.core.IndexedSeq(G__31526__a,0);
} 
return form_to31518__delegate.call(this,p__31519,body);};
form_to31518.cljs$lang$maxFixedArity = 1;
form_to31518.cljs$lang$applyTo = (function (arglist__31527){
var p__31519 = cljs.core.first(arglist__31527);
var body = cljs.core.rest(arglist__31527);
return form_to31518__delegate(p__31519,body);
});
form_to31518.cljs$core$IFn$_invoke$arity$variadic = form_to31518__delegate;
return form_to31518;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to31518);
