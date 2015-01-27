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
var G__31388__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__31387 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31387,(0),null);
var body = cljs.core.nthnext(vec__31387,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__31388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31389__i = 0, G__31389__a = new Array(arguments.length -  0);
while (G__31389__i < G__31389__a.length) {G__31389__a[G__31389__i] = arguments[G__31389__i + 0]; ++G__31389__i;}
  args = new cljs.core.IndexedSeq(G__31389__a,0);
} 
return G__31388__delegate.call(this,args);};
G__31388.cljs$lang$maxFixedArity = 0;
G__31388.cljs$lang$applyTo = (function (arglist__31390){
var args = cljs.core.seq(arglist__31390);
return G__31388__delegate(args);
});
G__31388.cljs$core$IFn$_invoke$arity$variadic = G__31388__delegate;
return G__31388;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__5007__auto__ = (function iter__31397(s__31398){
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
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31399);
cljs.core.chunk_append(b__31400,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

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
var args = cljs.core.first(s__31398__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__31397(cljs.core.rest(s__31398__$2)));
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
var iter__5007__auto__ = (function iter__31410(s__31411){
return (new cljs.core.LazySeq(null,(function (){
var s__31411__$1 = s__31411;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31411__$1);
if(temp__4126__auto__){
var s__31411__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31411__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31411__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31413 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31412 = (0);
while(true){
if((i__31412 < size__5006__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31412);
cljs.core.chunk_append(b__31413,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,"text/css",cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$127,"stylesheet"], null)], null));

var G__31416 = (i__31412 + (1));
i__31412 = G__31416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31413),iter__31410(cljs.core.chunk_rest(s__31411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31413),null);
}
} else {
var style = cljs.core.first(s__31411__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,"text/css",cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$127,"stylesheet"], null)], null),iter__31410(cljs.core.rest(s__31411__$2)));
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
var G__31417__i = 0, G__31417__a = new Array(arguments.length -  0);
while (G__31417__i < G__31417__a.length) {G__31417__a[G__31417__i] = arguments[G__31417__i + 0]; ++G__31417__i;}
  styles = new cljs.core.IndexedSeq(G__31417__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__31418){
var styles = cljs.core.seq(arglist__31418);
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
var G__31423 = (function (){return goog.dom.getDocument();
})().body;
var G__31424 = (function (){var G__31425 = "script";
var G__31426 = {"src": src};
return goog.dom.createDom(G__31425,G__31426);
})();
return goog.dom.appendChild(G__31423,G__31424);
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
sablono.core.link_to31427 = (function() { 
var link_to31427__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to31427 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__31428__i = 0, G__31428__a = new Array(arguments.length -  1);
while (G__31428__i < G__31428__a.length) {G__31428__a[G__31428__i] = arguments[G__31428__i + 1]; ++G__31428__i;}
  content = new cljs.core.IndexedSeq(G__31428__a,0);
} 
return link_to31427__delegate.call(this,url,content);};
link_to31427.cljs$lang$maxFixedArity = 1;
link_to31427.cljs$lang$applyTo = (function (arglist__31429){
var url = cljs.core.first(arglist__31429);
var content = cljs.core.rest(arglist__31429);
return link_to31427__delegate(url,content);
});
link_to31427.cljs$core$IFn$_invoke$arity$variadic = link_to31427__delegate;
return link_to31427;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to31427);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to31430 = (function() { 
var mail_to31430__delegate = function (e_mail,p__31431){
var vec__31433 = p__31431;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31433,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4251__auto__ = content;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to31430 = function (e_mail,var_args){
var p__31431 = null;
if (arguments.length > 1) {
var G__31434__i = 0, G__31434__a = new Array(arguments.length -  1);
while (G__31434__i < G__31434__a.length) {G__31434__a[G__31434__i] = arguments[G__31434__i + 1]; ++G__31434__i;}
  p__31431 = new cljs.core.IndexedSeq(G__31434__a,0);
} 
return mail_to31430__delegate.call(this,e_mail,p__31431);};
mail_to31430.cljs$lang$maxFixedArity = 1;
mail_to31430.cljs$lang$applyTo = (function (arglist__31435){
var e_mail = cljs.core.first(arglist__31435);
var p__31431 = cljs.core.rest(arglist__31435);
return mail_to31430__delegate(e_mail,p__31431);
});
mail_to31430.cljs$core$IFn$_invoke$arity$variadic = mail_to31430__delegate;
return mail_to31430;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to31430);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list31436 = (function unordered_list31436(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__5007__auto__ = (function iter__31443(s__31444){
return (new cljs.core.LazySeq(null,(function (){
var s__31444__$1 = s__31444;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31444__$1);
if(temp__4126__auto__){
var s__31444__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31444__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31444__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31446 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31445 = (0);
while(true){
if((i__31445 < size__5006__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31445);
cljs.core.chunk_append(b__31446,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null));

var G__31449 = (i__31445 + (1));
i__31445 = G__31449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31446),iter__31443(cljs.core.chunk_rest(s__31444__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31446),null);
}
} else {
var x = cljs.core.first(s__31444__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null),iter__31443(cljs.core.rest(s__31444__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list31436);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list31450 = (function ordered_list31450(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,(function (){var iter__5007__auto__ = (function iter__31457(s__31458){
return (new cljs.core.LazySeq(null,(function (){
var s__31458__$1 = s__31458;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31458__$1);
if(temp__4126__auto__){
var s__31458__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31458__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31458__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31460 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31459 = (0);
while(true){
if((i__31459 < size__5006__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31459);
cljs.core.chunk_append(b__31460,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null));

var G__31463 = (i__31459 + (1));
i__31459 = G__31463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31460),iter__31457(cljs.core.chunk_rest(s__31458__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31460),null);
}
} else {
var x = cljs.core.first(s__31458__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null),iter__31457(cljs.core.rest(s__31458__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list31450);
/**
* Create an image element.
*/
sablono.core.image31464 = (function() {
var image31464 = null;
var image31464__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$133,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image31464__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$133,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$134,alt], null)], null);
});
image31464 = function(src,alt){
switch(arguments.length){
case 1:
return image31464__1.call(this,src);
case 2:
return image31464__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image31464.cljs$core$IFn$_invoke$arity$1 = image31464__1;
image31464.cljs$core$IFn$_invoke$arity$2 = image31464__2;
return image31464;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image31464);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__31465_SHARP_,p2__31466_SHARP_){
return [cljs.core.str(p1__31465_SHARP_),cljs.core.str("["),cljs.core.str(p2__31466_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__31467_SHARP_,p2__31468_SHARP_){
return [cljs.core.str(p1__31467_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31468_SHARP_)].join('');
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
sablono.core.color_field31469 = (function() {
var color_field31469 = null;
var color_field31469__1 = (function (name__20277__auto__){
return color_field31469.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var color_field31469__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20277__auto__,value__20278__auto__);
});
color_field31469 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return color_field31469__1.call(this,name__20277__auto__);
case 2:
return color_field31469__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field31469.cljs$core$IFn$_invoke$arity$1 = color_field31469__1;
color_field31469.cljs$core$IFn$_invoke$arity$2 = color_field31469__2;
return color_field31469;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field31469);

/**
* Creates a date input field.
*/
sablono.core.date_field31472 = (function() {
var date_field31472 = null;
var date_field31472__1 = (function (name__20277__auto__){
return date_field31472.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var date_field31472__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20277__auto__,value__20278__auto__);
});
date_field31472 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return date_field31472__1.call(this,name__20277__auto__);
case 2:
return date_field31472__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field31472.cljs$core$IFn$_invoke$arity$1 = date_field31472__1;
date_field31472.cljs$core$IFn$_invoke$arity$2 = date_field31472__2;
return date_field31472;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field31472);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field31475 = (function() {
var datetime_field31475 = null;
var datetime_field31475__1 = (function (name__20277__auto__){
return datetime_field31475.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var datetime_field31475__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20277__auto__,value__20278__auto__);
});
datetime_field31475 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return datetime_field31475__1.call(this,name__20277__auto__);
case 2:
return datetime_field31475__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field31475.cljs$core$IFn$_invoke$arity$1 = datetime_field31475__1;
datetime_field31475.cljs$core$IFn$_invoke$arity$2 = datetime_field31475__2;
return datetime_field31475;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field31475);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field31478 = (function() {
var datetime_local_field31478 = null;
var datetime_local_field31478__1 = (function (name__20277__auto__){
return datetime_local_field31478.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var datetime_local_field31478__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20277__auto__,value__20278__auto__);
});
datetime_local_field31478 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return datetime_local_field31478__1.call(this,name__20277__auto__);
case 2:
return datetime_local_field31478__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field31478.cljs$core$IFn$_invoke$arity$1 = datetime_local_field31478__1;
datetime_local_field31478.cljs$core$IFn$_invoke$arity$2 = datetime_local_field31478__2;
return datetime_local_field31478;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field31478);

/**
* Creates a email input field.
*/
sablono.core.email_field31481 = (function() {
var email_field31481 = null;
var email_field31481__1 = (function (name__20277__auto__){
return email_field31481.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var email_field31481__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20277__auto__,value__20278__auto__);
});
email_field31481 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return email_field31481__1.call(this,name__20277__auto__);
case 2:
return email_field31481__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field31481.cljs$core$IFn$_invoke$arity$1 = email_field31481__1;
email_field31481.cljs$core$IFn$_invoke$arity$2 = email_field31481__2;
return email_field31481;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field31481);

/**
* Creates a file input field.
*/
sablono.core.file_field31484 = (function() {
var file_field31484 = null;
var file_field31484__1 = (function (name__20277__auto__){
return file_field31484.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var file_field31484__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20277__auto__,value__20278__auto__);
});
file_field31484 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return file_field31484__1.call(this,name__20277__auto__);
case 2:
return file_field31484__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field31484.cljs$core$IFn$_invoke$arity$1 = file_field31484__1;
file_field31484.cljs$core$IFn$_invoke$arity$2 = file_field31484__2;
return file_field31484;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field31484);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field31487 = (function() {
var hidden_field31487 = null;
var hidden_field31487__1 = (function (name__20277__auto__){
return hidden_field31487.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var hidden_field31487__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20277__auto__,value__20278__auto__);
});
hidden_field31487 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return hidden_field31487__1.call(this,name__20277__auto__);
case 2:
return hidden_field31487__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field31487.cljs$core$IFn$_invoke$arity$1 = hidden_field31487__1;
hidden_field31487.cljs$core$IFn$_invoke$arity$2 = hidden_field31487__2;
return hidden_field31487;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field31487);

/**
* Creates a month input field.
*/
sablono.core.month_field31490 = (function() {
var month_field31490 = null;
var month_field31490__1 = (function (name__20277__auto__){
return month_field31490.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var month_field31490__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20277__auto__,value__20278__auto__);
});
month_field31490 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return month_field31490__1.call(this,name__20277__auto__);
case 2:
return month_field31490__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field31490.cljs$core$IFn$_invoke$arity$1 = month_field31490__1;
month_field31490.cljs$core$IFn$_invoke$arity$2 = month_field31490__2;
return month_field31490;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field31490);

/**
* Creates a number input field.
*/
sablono.core.number_field31493 = (function() {
var number_field31493 = null;
var number_field31493__1 = (function (name__20277__auto__){
return number_field31493.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var number_field31493__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20277__auto__,value__20278__auto__);
});
number_field31493 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return number_field31493__1.call(this,name__20277__auto__);
case 2:
return number_field31493__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field31493.cljs$core$IFn$_invoke$arity$1 = number_field31493__1;
number_field31493.cljs$core$IFn$_invoke$arity$2 = number_field31493__2;
return number_field31493;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field31493);

/**
* Creates a password input field.
*/
sablono.core.password_field31496 = (function() {
var password_field31496 = null;
var password_field31496__1 = (function (name__20277__auto__){
return password_field31496.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var password_field31496__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20277__auto__,value__20278__auto__);
});
password_field31496 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return password_field31496__1.call(this,name__20277__auto__);
case 2:
return password_field31496__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field31496.cljs$core$IFn$_invoke$arity$1 = password_field31496__1;
password_field31496.cljs$core$IFn$_invoke$arity$2 = password_field31496__2;
return password_field31496;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field31496);

/**
* Creates a range input field.
*/
sablono.core.range_field31499 = (function() {
var range_field31499 = null;
var range_field31499__1 = (function (name__20277__auto__){
return range_field31499.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var range_field31499__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20277__auto__,value__20278__auto__);
});
range_field31499 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return range_field31499__1.call(this,name__20277__auto__);
case 2:
return range_field31499__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field31499.cljs$core$IFn$_invoke$arity$1 = range_field31499__1;
range_field31499.cljs$core$IFn$_invoke$arity$2 = range_field31499__2;
return range_field31499;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field31499);

/**
* Creates a search input field.
*/
sablono.core.search_field31502 = (function() {
var search_field31502 = null;
var search_field31502__1 = (function (name__20277__auto__){
return search_field31502.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var search_field31502__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20277__auto__,value__20278__auto__);
});
search_field31502 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return search_field31502__1.call(this,name__20277__auto__);
case 2:
return search_field31502__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field31502.cljs$core$IFn$_invoke$arity$1 = search_field31502__1;
search_field31502.cljs$core$IFn$_invoke$arity$2 = search_field31502__2;
return search_field31502;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field31502);

/**
* Creates a tel input field.
*/
sablono.core.tel_field31505 = (function() {
var tel_field31505 = null;
var tel_field31505__1 = (function (name__20277__auto__){
return tel_field31505.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var tel_field31505__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20277__auto__,value__20278__auto__);
});
tel_field31505 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return tel_field31505__1.call(this,name__20277__auto__);
case 2:
return tel_field31505__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field31505.cljs$core$IFn$_invoke$arity$1 = tel_field31505__1;
tel_field31505.cljs$core$IFn$_invoke$arity$2 = tel_field31505__2;
return tel_field31505;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field31505);

/**
* Creates a text input field.
*/
sablono.core.text_field31508 = (function() {
var text_field31508 = null;
var text_field31508__1 = (function (name__20277__auto__){
return text_field31508.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var text_field31508__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20277__auto__,value__20278__auto__);
});
text_field31508 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return text_field31508__1.call(this,name__20277__auto__);
case 2:
return text_field31508__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field31508.cljs$core$IFn$_invoke$arity$1 = text_field31508__1;
text_field31508.cljs$core$IFn$_invoke$arity$2 = text_field31508__2;
return text_field31508;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field31508);

/**
* Creates a time input field.
*/
sablono.core.time_field31511 = (function() {
var time_field31511 = null;
var time_field31511__1 = (function (name__20277__auto__){
return time_field31511.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var time_field31511__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20277__auto__,value__20278__auto__);
});
time_field31511 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return time_field31511__1.call(this,name__20277__auto__);
case 2:
return time_field31511__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field31511.cljs$core$IFn$_invoke$arity$1 = time_field31511__1;
time_field31511.cljs$core$IFn$_invoke$arity$2 = time_field31511__2;
return time_field31511;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field31511);

/**
* Creates a url input field.
*/
sablono.core.url_field31514 = (function() {
var url_field31514 = null;
var url_field31514__1 = (function (name__20277__auto__){
return url_field31514.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var url_field31514__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20277__auto__,value__20278__auto__);
});
url_field31514 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return url_field31514__1.call(this,name__20277__auto__);
case 2:
return url_field31514__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field31514.cljs$core$IFn$_invoke$arity$1 = url_field31514__1;
url_field31514.cljs$core$IFn$_invoke$arity$2 = url_field31514__2;
return url_field31514;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field31514);

/**
* Creates a week input field.
*/
sablono.core.week_field31517 = (function() {
var week_field31517 = null;
var week_field31517__1 = (function (name__20277__auto__){
return week_field31517.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var week_field31517__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20277__auto__,value__20278__auto__);
});
week_field31517 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return week_field31517__1.call(this,name__20277__auto__);
case 2:
return week_field31517__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field31517.cljs$core$IFn$_invoke$arity$1 = week_field31517__1;
week_field31517.cljs$core$IFn$_invoke$arity$2 = week_field31517__2;
return week_field31517;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field31517);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box31520 = (function() {
var check_box31520 = null;
var check_box31520__1 = (function (name){
return check_box31520.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box31520__2 = (function (name,checked_QMARK_){
return check_box31520.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box31520__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,"checkbox",cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name),cljs.core.constant$keyword$66,value,cljs.core.constant$keyword$135,checked_QMARK_], null)], null);
});
check_box31520 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box31520__1.call(this,name);
case 2:
return check_box31520__2.call(this,name,checked_QMARK_);
case 3:
return check_box31520__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box31520.cljs$core$IFn$_invoke$arity$1 = check_box31520__1;
check_box31520.cljs$core$IFn$_invoke$arity$2 = check_box31520__2;
check_box31520.cljs$core$IFn$_invoke$arity$3 = check_box31520__3;
return check_box31520;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box31520);
/**
* Creates a radio button.
*/
sablono.core.radio_button31526 = (function() {
var radio_button31526 = null;
var radio_button31526__1 = (function (group){
return radio_button31526.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button31526__2 = (function (group,checked_QMARK_){
return radio_button31526.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button31526__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,"radio",cljs.core.constant$keyword$80,sablono.core.make_name(group),cljs.core.constant$keyword$121,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$66,value,cljs.core.constant$keyword$135,checked_QMARK_], null)], null);
});
radio_button31526 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button31526__1.call(this,group);
case 2:
return radio_button31526__2.call(this,group,checked_QMARK_);
case 3:
return radio_button31526__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button31526.cljs$core$IFn$_invoke$arity$1 = radio_button31526__1;
radio_button31526.cljs$core$IFn$_invoke$arity$2 = radio_button31526__2;
radio_button31526.cljs$core$IFn$_invoke$arity$3 = radio_button31526__3;
return radio_button31526;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button31526);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options31532 = (function() {
var select_options31532 = null;
var select_options31532__1 = (function (coll){
return select_options31532.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options31532__2 = (function (coll,selected){
var iter__5007__auto__ = (function iter__31553(s__31554){
return (new cljs.core.LazySeq(null,(function (){
var s__31554__$1 = s__31554;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31554__$1);
if(temp__4126__auto__){
var s__31554__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31554__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31554__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31556 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31555 = (0);
while(true){
if((i__31555 < size__5006__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31555);
cljs.core.chunk_append(b__31556,((cljs.core.sequential_QMARK_(x))?(function (){var vec__31561 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31561,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31561,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31561,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,text], null),select_options31532.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,val,cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$139,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__31563 = (i__31555 + (1));
i__31555 = G__31563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31556),iter__31553(cljs.core.chunk_rest(s__31554__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31556),null);
}
} else {
var x = cljs.core.first(s__31554__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__31562 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31562,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31562,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31562,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,text], null),select_options31532.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,val,cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$139,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__31553(cljs.core.rest(s__31554__$2)));
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
select_options31532 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options31532__1.call(this,coll);
case 2:
return select_options31532__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options31532.cljs$core$IFn$_invoke$arity$1 = select_options31532__1;
select_options31532.cljs$core$IFn$_invoke$arity$2 = select_options31532__2;
return select_options31532;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options31532);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down31564 = (function() {
var drop_down31564 = null;
var drop_down31564__2 = (function (name,options){
return drop_down31564.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down31564__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$140,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name)], null),(function (){var G__31570 = options;
var G__31571 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__31570,G__31571) : sablono.core.select_options.call(null,G__31570,G__31571));
})()], null);
});
drop_down31564 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down31564__2.call(this,name,options);
case 3:
return drop_down31564__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down31564.cljs$core$IFn$_invoke$arity$2 = drop_down31564__2;
drop_down31564.cljs$core$IFn$_invoke$arity$3 = drop_down31564__3;
return drop_down31564;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down31564);
/**
* Creates a text area element.
*/
sablono.core.text_area31572 = (function() {
var text_area31572 = null;
var text_area31572__1 = (function (name){
return text_area31572.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area31572__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name),cljs.core.constant$keyword$66,value], null)], null);
});
text_area31572 = function(name,value){
switch(arguments.length){
case 1:
return text_area31572__1.call(this,name);
case 2:
return text_area31572__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area31572.cljs$core$IFn$_invoke$arity$1 = text_area31572__1;
text_area31572.cljs$core$IFn$_invoke$arity$2 = text_area31572__2;
return text_area31572;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area31572);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label31575 = (function label31575(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label31575);
/**
* Creates a submit button.
*/
sablono.core.submit_button31576 = (function submit_button31576(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,"submit",cljs.core.constant$keyword$66,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button31576);
/**
* Creates a form reset button.
*/
sablono.core.reset_button31577 = (function reset_button31577(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,"reset",cljs.core.constant$keyword$66,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button31577);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to31578 = (function() { 
var form_to31578__delegate = function (p__31579,body){
var vec__31583 = p__31579;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31583,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31583,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,null,cljs.core.constant$keyword$142,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$144,method_str,cljs.core.constant$keyword$145,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$144,"POST",cljs.core.constant$keyword$145,action_uri], null),(function (){var G__31584 = "_method";
var G__31585 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__31584,G__31585) : sablono.core.hidden_field.call(null,G__31584,G__31585));
})()], null)),body));
};
var form_to31578 = function (p__31579,var_args){
var body = null;
if (arguments.length > 1) {
var G__31586__i = 0, G__31586__a = new Array(arguments.length -  1);
while (G__31586__i < G__31586__a.length) {G__31586__a[G__31586__i] = arguments[G__31586__i + 1]; ++G__31586__i;}
  body = new cljs.core.IndexedSeq(G__31586__a,0);
} 
return form_to31578__delegate.call(this,p__31579,body);};
form_to31578.cljs$lang$maxFixedArity = 1;
form_to31578.cljs$lang$applyTo = (function (arglist__31587){
var p__31579 = cljs.core.first(arglist__31587);
var body = cljs.core.rest(arglist__31587);
return form_to31578__delegate(p__31579,body);
});
form_to31578.cljs$core$IFn$_invoke$arity$variadic = form_to31578__delegate;
return form_to31578;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to31578);
