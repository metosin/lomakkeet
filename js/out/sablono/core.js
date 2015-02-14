// Compiled by ClojureScript 0.0-2850 {}
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
var G__36340__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__36339 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36339,(0),null);
var body = cljs.core.nthnext(vec__36339,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__36340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36341__i = 0, G__36341__a = new Array(arguments.length -  0);
while (G__36341__i < G__36341__a.length) {G__36341__a[G__36341__i] = arguments[G__36341__i + 0]; ++G__36341__i;}
  args = new cljs.core.IndexedSeq(G__36341__a,0);
} 
return G__36340__delegate.call(this,args);};
G__36340.cljs$lang$maxFixedArity = 0;
G__36340.cljs$lang$applyTo = (function (arglist__36342){
var args = cljs.core.seq(arglist__36342);
return G__36340__delegate(args);
});
G__36340.cljs$core$IFn$_invoke$arity$variadic = G__36340__delegate;
return G__36340;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4571__auto__ = (function iter__36349(s__36350){
return (new cljs.core.LazySeq(null,(function (){
var s__36350__$1 = s__36350;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36350__$1);
if(temp__4126__auto__){
var s__36350__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36350__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36350__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36352 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36351 = (0);
while(true){
if((i__36351 < size__4570__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36351);
cljs.core.chunk_append(b__36352,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36355 = (i__36351 + (1));
i__36351 = G__36355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36352),iter__36349(cljs.core.chunk_rest(s__36350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36352),null);
}
} else {
var args = cljs.core.first(s__36350__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__36349(cljs.core.rest(s__36350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(arglists);
});
/**
* Render `element` as HTML string.
*/
sablono.core.render = (function render(element){
if(cljs.core.truth_(element)){
var G__36357 = element;
return React.renderToString(G__36357);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
var G__36359 = element;
return React.renderToStaticMarkup(G__36359);
} else {
return null;
}
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4571__auto__ = (function iter__36366(s__36367){
return (new cljs.core.LazySeq(null,(function (){
var s__36367__$1 = s__36367;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36367__$1);
if(temp__4126__auto__){
var s__36367__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36367__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36367__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36369 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36368 = (0);
while(true){
if((i__36368 < size__4570__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36368);
cljs.core.chunk_append(b__36369,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null));

var G__36372 = (i__36368 + (1));
i__36368 = G__36372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36369),iter__36366(cljs.core.chunk_rest(s__36367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36369),null);
}
} else {
var style = cljs.core.first(s__36367__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null),iter__36366(cljs.core.rest(s__36367__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__36373__i = 0, G__36373__a = new Array(arguments.length -  0);
while (G__36373__i < G__36373__a.length) {G__36373__a[G__36373__i] = arguments[G__36373__i + 0]; ++G__36373__i;}
  styles = new cljs.core.IndexedSeq(G__36373__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__36374){
var styles = cljs.core.seq(arglist__36374);
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
var G__36379 = (function (){return goog.dom.getDocument();
})().body;
var G__36380 = (function (){var G__36381 = "script";
var G__36382 = {"src": src};
return goog.dom.createDom(G__36381,G__36382);
})();
return goog.dom.appendChild(G__36379,G__36380);
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to36383 = (function() { 
var link_to36383__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to36383 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__36384__i = 0, G__36384__a = new Array(arguments.length -  1);
while (G__36384__i < G__36384__a.length) {G__36384__a[G__36384__i] = arguments[G__36384__i + 1]; ++G__36384__i;}
  content = new cljs.core.IndexedSeq(G__36384__a,0);
} 
return link_to36383__delegate.call(this,url,content);};
link_to36383.cljs$lang$maxFixedArity = 1;
link_to36383.cljs$lang$applyTo = (function (arglist__36385){
var url = cljs.core.first(arglist__36385);
var content = cljs.core.rest(arglist__36385);
return link_to36383__delegate(url,content);
});
link_to36383.cljs$core$IFn$_invoke$arity$variadic = link_to36383__delegate;
return link_to36383;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to36383);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to36386 = (function() { 
var mail_to36386__delegate = function (e_mail,p__36387){
var vec__36389 = p__36387;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36389,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3815__auto__ = content;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to36386 = function (e_mail,var_args){
var p__36387 = null;
if (arguments.length > 1) {
var G__36390__i = 0, G__36390__a = new Array(arguments.length -  1);
while (G__36390__i < G__36390__a.length) {G__36390__a[G__36390__i] = arguments[G__36390__i + 1]; ++G__36390__i;}
  p__36387 = new cljs.core.IndexedSeq(G__36390__a,0);
} 
return mail_to36386__delegate.call(this,e_mail,p__36387);};
mail_to36386.cljs$lang$maxFixedArity = 1;
mail_to36386.cljs$lang$applyTo = (function (arglist__36391){
var e_mail = cljs.core.first(arglist__36391);
var p__36387 = cljs.core.rest(arglist__36391);
return mail_to36386__delegate(e_mail,p__36387);
});
mail_to36386.cljs$core$IFn$_invoke$arity$variadic = mail_to36386__delegate;
return mail_to36386;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to36386);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list36392 = (function unordered_list36392(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4571__auto__ = (function iter__36399(s__36400){
return (new cljs.core.LazySeq(null,(function (){
var s__36400__$1 = s__36400;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36400__$1);
if(temp__4126__auto__){
var s__36400__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36400__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36400__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36402 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36401 = (0);
while(true){
if((i__36401 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36401);
cljs.core.chunk_append(b__36402,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__36405 = (i__36401 + (1));
i__36401 = G__36405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36402),iter__36399(cljs.core.chunk_rest(s__36400__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36402),null);
}
} else {
var x = cljs.core.first(s__36400__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__36399(cljs.core.rest(s__36400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list36392);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list36406 = (function ordered_list36406(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__4571__auto__ = (function iter__36413(s__36414){
return (new cljs.core.LazySeq(null,(function (){
var s__36414__$1 = s__36414;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36414__$1);
if(temp__4126__auto__){
var s__36414__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36414__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36414__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36416 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36415 = (0);
while(true){
if((i__36415 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36415);
cljs.core.chunk_append(b__36416,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__36419 = (i__36415 + (1));
i__36415 = G__36419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36416),iter__36413(cljs.core.chunk_rest(s__36414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36416),null);
}
} else {
var x = cljs.core.first(s__36414__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__36413(cljs.core.rest(s__36414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list36406);
/**
* Create an image element.
*/
sablono.core.image36420 = (function() {
var image36420 = null;
var image36420__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image36420__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$132,alt], null)], null);
});
image36420 = function(src,alt){
switch(arguments.length){
case 1:
return image36420__1.call(this,src);
case 2:
return image36420__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image36420.cljs$core$IFn$_invoke$arity$1 = image36420__1;
image36420.cljs$core$IFn$_invoke$arity$2 = image36420__2;
return image36420;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image36420);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__36421_SHARP_,p2__36422_SHARP_){
return [cljs.core.str(p1__36421_SHARP_),cljs.core.str("["),cljs.core.str(p2__36422_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__36423_SHARP_,p2__36424_SHARP_){
return [cljs.core.str(p1__36423_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36424_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$66,type,cljs.core.constant$keyword$78,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$64,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field36425 = (function() {
var color_field36425 = null;
var color_field36425__1 = (function (name__19862__auto__){
return color_field36425.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var color_field36425__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19862__auto__,value__19863__auto__);
});
color_field36425 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return color_field36425__1.call(this,name__19862__auto__);
case 2:
return color_field36425__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field36425.cljs$core$IFn$_invoke$arity$1 = color_field36425__1;
color_field36425.cljs$core$IFn$_invoke$arity$2 = color_field36425__2;
return color_field36425;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field36425);

/**
* Creates a date input field.
*/
sablono.core.date_field36428 = (function() {
var date_field36428 = null;
var date_field36428__1 = (function (name__19862__auto__){
return date_field36428.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var date_field36428__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19862__auto__,value__19863__auto__);
});
date_field36428 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return date_field36428__1.call(this,name__19862__auto__);
case 2:
return date_field36428__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field36428.cljs$core$IFn$_invoke$arity$1 = date_field36428__1;
date_field36428.cljs$core$IFn$_invoke$arity$2 = date_field36428__2;
return date_field36428;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field36428);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field36431 = (function() {
var datetime_field36431 = null;
var datetime_field36431__1 = (function (name__19862__auto__){
return datetime_field36431.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var datetime_field36431__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19862__auto__,value__19863__auto__);
});
datetime_field36431 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return datetime_field36431__1.call(this,name__19862__auto__);
case 2:
return datetime_field36431__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field36431.cljs$core$IFn$_invoke$arity$1 = datetime_field36431__1;
datetime_field36431.cljs$core$IFn$_invoke$arity$2 = datetime_field36431__2;
return datetime_field36431;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field36431);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field36434 = (function() {
var datetime_local_field36434 = null;
var datetime_local_field36434__1 = (function (name__19862__auto__){
return datetime_local_field36434.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var datetime_local_field36434__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19862__auto__,value__19863__auto__);
});
datetime_local_field36434 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return datetime_local_field36434__1.call(this,name__19862__auto__);
case 2:
return datetime_local_field36434__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field36434.cljs$core$IFn$_invoke$arity$1 = datetime_local_field36434__1;
datetime_local_field36434.cljs$core$IFn$_invoke$arity$2 = datetime_local_field36434__2;
return datetime_local_field36434;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field36434);

/**
* Creates a email input field.
*/
sablono.core.email_field36437 = (function() {
var email_field36437 = null;
var email_field36437__1 = (function (name__19862__auto__){
return email_field36437.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var email_field36437__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19862__auto__,value__19863__auto__);
});
email_field36437 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return email_field36437__1.call(this,name__19862__auto__);
case 2:
return email_field36437__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field36437.cljs$core$IFn$_invoke$arity$1 = email_field36437__1;
email_field36437.cljs$core$IFn$_invoke$arity$2 = email_field36437__2;
return email_field36437;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field36437);

/**
* Creates a file input field.
*/
sablono.core.file_field36440 = (function() {
var file_field36440 = null;
var file_field36440__1 = (function (name__19862__auto__){
return file_field36440.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var file_field36440__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19862__auto__,value__19863__auto__);
});
file_field36440 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return file_field36440__1.call(this,name__19862__auto__);
case 2:
return file_field36440__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field36440.cljs$core$IFn$_invoke$arity$1 = file_field36440__1;
file_field36440.cljs$core$IFn$_invoke$arity$2 = file_field36440__2;
return file_field36440;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field36440);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field36443 = (function() {
var hidden_field36443 = null;
var hidden_field36443__1 = (function (name__19862__auto__){
return hidden_field36443.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var hidden_field36443__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19862__auto__,value__19863__auto__);
});
hidden_field36443 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return hidden_field36443__1.call(this,name__19862__auto__);
case 2:
return hidden_field36443__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field36443.cljs$core$IFn$_invoke$arity$1 = hidden_field36443__1;
hidden_field36443.cljs$core$IFn$_invoke$arity$2 = hidden_field36443__2;
return hidden_field36443;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field36443);

/**
* Creates a month input field.
*/
sablono.core.month_field36446 = (function() {
var month_field36446 = null;
var month_field36446__1 = (function (name__19862__auto__){
return month_field36446.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var month_field36446__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19862__auto__,value__19863__auto__);
});
month_field36446 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return month_field36446__1.call(this,name__19862__auto__);
case 2:
return month_field36446__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field36446.cljs$core$IFn$_invoke$arity$1 = month_field36446__1;
month_field36446.cljs$core$IFn$_invoke$arity$2 = month_field36446__2;
return month_field36446;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field36446);

/**
* Creates a number input field.
*/
sablono.core.number_field36449 = (function() {
var number_field36449 = null;
var number_field36449__1 = (function (name__19862__auto__){
return number_field36449.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var number_field36449__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19862__auto__,value__19863__auto__);
});
number_field36449 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return number_field36449__1.call(this,name__19862__auto__);
case 2:
return number_field36449__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field36449.cljs$core$IFn$_invoke$arity$1 = number_field36449__1;
number_field36449.cljs$core$IFn$_invoke$arity$2 = number_field36449__2;
return number_field36449;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field36449);

/**
* Creates a password input field.
*/
sablono.core.password_field36452 = (function() {
var password_field36452 = null;
var password_field36452__1 = (function (name__19862__auto__){
return password_field36452.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var password_field36452__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19862__auto__,value__19863__auto__);
});
password_field36452 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return password_field36452__1.call(this,name__19862__auto__);
case 2:
return password_field36452__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field36452.cljs$core$IFn$_invoke$arity$1 = password_field36452__1;
password_field36452.cljs$core$IFn$_invoke$arity$2 = password_field36452__2;
return password_field36452;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field36452);

/**
* Creates a range input field.
*/
sablono.core.range_field36455 = (function() {
var range_field36455 = null;
var range_field36455__1 = (function (name__19862__auto__){
return range_field36455.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var range_field36455__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19862__auto__,value__19863__auto__);
});
range_field36455 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return range_field36455__1.call(this,name__19862__auto__);
case 2:
return range_field36455__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field36455.cljs$core$IFn$_invoke$arity$1 = range_field36455__1;
range_field36455.cljs$core$IFn$_invoke$arity$2 = range_field36455__2;
return range_field36455;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field36455);

/**
* Creates a search input field.
*/
sablono.core.search_field36458 = (function() {
var search_field36458 = null;
var search_field36458__1 = (function (name__19862__auto__){
return search_field36458.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var search_field36458__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19862__auto__,value__19863__auto__);
});
search_field36458 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return search_field36458__1.call(this,name__19862__auto__);
case 2:
return search_field36458__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field36458.cljs$core$IFn$_invoke$arity$1 = search_field36458__1;
search_field36458.cljs$core$IFn$_invoke$arity$2 = search_field36458__2;
return search_field36458;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field36458);

/**
* Creates a tel input field.
*/
sablono.core.tel_field36461 = (function() {
var tel_field36461 = null;
var tel_field36461__1 = (function (name__19862__auto__){
return tel_field36461.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var tel_field36461__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19862__auto__,value__19863__auto__);
});
tel_field36461 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return tel_field36461__1.call(this,name__19862__auto__);
case 2:
return tel_field36461__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field36461.cljs$core$IFn$_invoke$arity$1 = tel_field36461__1;
tel_field36461.cljs$core$IFn$_invoke$arity$2 = tel_field36461__2;
return tel_field36461;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field36461);

/**
* Creates a text input field.
*/
sablono.core.text_field36464 = (function() {
var text_field36464 = null;
var text_field36464__1 = (function (name__19862__auto__){
return text_field36464.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var text_field36464__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19862__auto__,value__19863__auto__);
});
text_field36464 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return text_field36464__1.call(this,name__19862__auto__);
case 2:
return text_field36464__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field36464.cljs$core$IFn$_invoke$arity$1 = text_field36464__1;
text_field36464.cljs$core$IFn$_invoke$arity$2 = text_field36464__2;
return text_field36464;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field36464);

/**
* Creates a time input field.
*/
sablono.core.time_field36467 = (function() {
var time_field36467 = null;
var time_field36467__1 = (function (name__19862__auto__){
return time_field36467.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var time_field36467__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19862__auto__,value__19863__auto__);
});
time_field36467 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return time_field36467__1.call(this,name__19862__auto__);
case 2:
return time_field36467__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field36467.cljs$core$IFn$_invoke$arity$1 = time_field36467__1;
time_field36467.cljs$core$IFn$_invoke$arity$2 = time_field36467__2;
return time_field36467;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field36467);

/**
* Creates a url input field.
*/
sablono.core.url_field36470 = (function() {
var url_field36470 = null;
var url_field36470__1 = (function (name__19862__auto__){
return url_field36470.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var url_field36470__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19862__auto__,value__19863__auto__);
});
url_field36470 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return url_field36470__1.call(this,name__19862__auto__);
case 2:
return url_field36470__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field36470.cljs$core$IFn$_invoke$arity$1 = url_field36470__1;
url_field36470.cljs$core$IFn$_invoke$arity$2 = url_field36470__2;
return url_field36470;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field36470);

/**
* Creates a week input field.
*/
sablono.core.week_field36473 = (function() {
var week_field36473 = null;
var week_field36473__1 = (function (name__19862__auto__){
return week_field36473.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var week_field36473__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19862__auto__,value__19863__auto__);
});
week_field36473 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return week_field36473__1.call(this,name__19862__auto__);
case 2:
return week_field36473__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field36473.cljs$core$IFn$_invoke$arity$1 = week_field36473__1;
week_field36473.cljs$core$IFn$_invoke$arity$2 = week_field36473__2;
return week_field36473;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field36473);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box36476 = (function() {
var check_box36476 = null;
var check_box36476__1 = (function (name){
return check_box36476.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box36476__2 = (function (name,checked_QMARK_){
return check_box36476.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box36476__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$66,"checkbox",cljs.core.constant$keyword$78,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$64,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
check_box36476 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box36476__1.call(this,name);
case 2:
return check_box36476__2.call(this,name,checked_QMARK_);
case 3:
return check_box36476__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box36476.cljs$core$IFn$_invoke$arity$1 = check_box36476__1;
check_box36476.cljs$core$IFn$_invoke$arity$2 = check_box36476__2;
check_box36476.cljs$core$IFn$_invoke$arity$3 = check_box36476__3;
return check_box36476;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box36476);
/**
* Creates a radio button.
*/
sablono.core.radio_button36482 = (function() {
var radio_button36482 = null;
var radio_button36482__1 = (function (group){
return radio_button36482.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button36482__2 = (function (group,checked_QMARK_){
return radio_button36482.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button36482__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$66,"radio",cljs.core.constant$keyword$78,sablono.core.make_name(group),cljs.core.constant$keyword$119,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$64,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
radio_button36482 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button36482__1.call(this,group);
case 2:
return radio_button36482__2.call(this,group,checked_QMARK_);
case 3:
return radio_button36482__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button36482.cljs$core$IFn$_invoke$arity$1 = radio_button36482__1;
radio_button36482.cljs$core$IFn$_invoke$arity$2 = radio_button36482__2;
radio_button36482.cljs$core$IFn$_invoke$arity$3 = radio_button36482__3;
return radio_button36482;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button36482);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options36488 = (function() {
var select_options36488 = null;
var select_options36488__1 = (function (coll){
return select_options36488.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options36488__2 = (function (coll,selected){
var iter__4571__auto__ = (function iter__36509(s__36510){
return (new cljs.core.LazySeq(null,(function (){
var s__36510__$1 = s__36510;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36510__$1);
if(temp__4126__auto__){
var s__36510__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36510__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36510__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36512 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36511 = (0);
while(true){
if((i__36511 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36511);
cljs.core.chunk_append(b__36512,((cljs.core.sequential_QMARK_(x))?(function (){var vec__36517 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36517,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36517,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36517,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options36488.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__36519 = (i__36511 + (1));
i__36511 = G__36519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36512),iter__36509(cljs.core.chunk_rest(s__36510__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36512),null);
}
} else {
var x = cljs.core.first(s__36510__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__36518 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36518,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36518,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36518,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options36488.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__36509(cljs.core.rest(s__36510__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(coll);
});
select_options36488 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options36488__1.call(this,coll);
case 2:
return select_options36488__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options36488.cljs$core$IFn$_invoke$arity$1 = select_options36488__1;
select_options36488.cljs$core$IFn$_invoke$arity$2 = select_options36488__2;
return select_options36488;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options36488);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down36520 = (function() {
var drop_down36520 = null;
var drop_down36520__2 = (function (name,options){
return drop_down36520.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down36520__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$78,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),(function (){var G__36526 = options;
var G__36527 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__36526,G__36527) : sablono.core.select_options.call(null,G__36526,G__36527));
})()], null);
});
drop_down36520 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down36520__2.call(this,name,options);
case 3:
return drop_down36520__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down36520.cljs$core$IFn$_invoke$arity$2 = drop_down36520__2;
drop_down36520.cljs$core$IFn$_invoke$arity$3 = drop_down36520__3;
return drop_down36520;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down36520);
/**
* Creates a text area element.
*/
sablono.core.text_area36528 = (function() {
var text_area36528 = null;
var text_area36528__1 = (function (name){
return text_area36528.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area36528__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$78,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$64,value], null)], null);
});
text_area36528 = function(name,value){
switch(arguments.length){
case 1:
return text_area36528__1.call(this,name);
case 2:
return text_area36528__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area36528.cljs$core$IFn$_invoke$arity$1 = text_area36528__1;
text_area36528.cljs$core$IFn$_invoke$arity$2 = text_area36528__2;
return text_area36528;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area36528);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label36531 = (function label36531(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label36531);
/**
* Creates a submit button.
*/
sablono.core.submit_button36532 = (function submit_button36532(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,"submit",cljs.core.constant$keyword$64,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button36532);
/**
* Creates a form reset button.
*/
sablono.core.reset_button36533 = (function reset_button36533(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,"reset",cljs.core.constant$keyword$64,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button36533);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to36534 = (function() { 
var form_to36534__delegate = function (p__36535,body){
var vec__36539 = p__36535;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36539,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36539,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,null,cljs.core.constant$keyword$140,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,method_str,cljs.core.constant$keyword$143,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"POST",cljs.core.constant$keyword$143,action_uri], null),(function (){var G__36540 = "_method";
var G__36541 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__36540,G__36541) : sablono.core.hidden_field.call(null,G__36540,G__36541));
})()], null)),body));
};
var form_to36534 = function (p__36535,var_args){
var body = null;
if (arguments.length > 1) {
var G__36542__i = 0, G__36542__a = new Array(arguments.length -  1);
while (G__36542__i < G__36542__a.length) {G__36542__a[G__36542__i] = arguments[G__36542__i + 1]; ++G__36542__i;}
  body = new cljs.core.IndexedSeq(G__36542__a,0);
} 
return form_to36534__delegate.call(this,p__36535,body);};
form_to36534.cljs$lang$maxFixedArity = 1;
form_to36534.cljs$lang$applyTo = (function (arglist__36543){
var p__36535 = cljs.core.first(arglist__36543);
var body = cljs.core.rest(arglist__36543);
return form_to36534__delegate(p__36535,body);
});
form_to36534.cljs$core$IFn$_invoke$arity$variadic = form_to36534__delegate;
return form_to36534;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to36534);
