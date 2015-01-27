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
var G__31380__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__31379 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31379,(0),null);
var body = cljs.core.nthnext(vec__31379,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__31380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31381__i = 0, G__31381__a = new Array(arguments.length -  0);
while (G__31381__i < G__31381__a.length) {G__31381__a[G__31381__i] = arguments[G__31381__i + 0]; ++G__31381__i;}
  args = new cljs.core.IndexedSeq(G__31381__a,0);
} 
return G__31380__delegate.call(this,args);};
G__31380.cljs$lang$maxFixedArity = 0;
G__31380.cljs$lang$applyTo = (function (arglist__31382){
var args = cljs.core.seq(arglist__31382);
return G__31380__delegate(args);
});
G__31380.cljs$core$IFn$_invoke$arity$variadic = G__31380__delegate;
return G__31380;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__5007__auto__ = (function iter__31389(s__31390){
return (new cljs.core.LazySeq(null,(function (){
var s__31390__$1 = s__31390;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31390__$1);
if(temp__4126__auto__){
var s__31390__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31390__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31390__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31392 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31391 = (0);
while(true){
if((i__31391 < size__5006__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31391);
cljs.core.chunk_append(b__31392,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31395 = (i__31391 + (1));
i__31391 = G__31395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31392),iter__31389(cljs.core.chunk_rest(s__31390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31392),null);
}
} else {
var args = cljs.core.first(s__31390__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__31389(cljs.core.rest(s__31390__$2)));
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
var iter__5007__auto__ = (function iter__31402(s__31403){
return (new cljs.core.LazySeq(null,(function (){
var s__31403__$1 = s__31403;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31403__$1);
if(temp__4126__auto__){
var s__31403__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31403__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31403__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31405 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31404 = (0);
while(true){
if((i__31404 < size__5006__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31404);
cljs.core.chunk_append(b__31405,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,"text/css",cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$127,"stylesheet"], null)], null));

var G__31408 = (i__31404 + (1));
i__31404 = G__31408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31405),iter__31402(cljs.core.chunk_rest(s__31403__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31405),null);
}
} else {
var style = cljs.core.first(s__31403__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,"text/css",cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$127,"stylesheet"], null)], null),iter__31402(cljs.core.rest(s__31403__$2)));
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
var G__31409__i = 0, G__31409__a = new Array(arguments.length -  0);
while (G__31409__i < G__31409__a.length) {G__31409__a[G__31409__i] = arguments[G__31409__i + 0]; ++G__31409__i;}
  styles = new cljs.core.IndexedSeq(G__31409__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__31410){
var styles = cljs.core.seq(arglist__31410);
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
var G__31415 = (function (){return goog.dom.getDocument();
})().body;
var G__31416 = (function (){var G__31417 = "script";
var G__31418 = {"src": src};
return goog.dom.createDom(G__31417,G__31418);
})();
return goog.dom.appendChild(G__31415,G__31416);
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
sablono.core.link_to31419 = (function() { 
var link_to31419__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to31419 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__31420__i = 0, G__31420__a = new Array(arguments.length -  1);
while (G__31420__i < G__31420__a.length) {G__31420__a[G__31420__i] = arguments[G__31420__i + 1]; ++G__31420__i;}
  content = new cljs.core.IndexedSeq(G__31420__a,0);
} 
return link_to31419__delegate.call(this,url,content);};
link_to31419.cljs$lang$maxFixedArity = 1;
link_to31419.cljs$lang$applyTo = (function (arglist__31421){
var url = cljs.core.first(arglist__31421);
var content = cljs.core.rest(arglist__31421);
return link_to31419__delegate(url,content);
});
link_to31419.cljs$core$IFn$_invoke$arity$variadic = link_to31419__delegate;
return link_to31419;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to31419);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to31422 = (function() { 
var mail_to31422__delegate = function (e_mail,p__31423){
var vec__31425 = p__31423;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31425,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4251__auto__ = content;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to31422 = function (e_mail,var_args){
var p__31423 = null;
if (arguments.length > 1) {
var G__31426__i = 0, G__31426__a = new Array(arguments.length -  1);
while (G__31426__i < G__31426__a.length) {G__31426__a[G__31426__i] = arguments[G__31426__i + 1]; ++G__31426__i;}
  p__31423 = new cljs.core.IndexedSeq(G__31426__a,0);
} 
return mail_to31422__delegate.call(this,e_mail,p__31423);};
mail_to31422.cljs$lang$maxFixedArity = 1;
mail_to31422.cljs$lang$applyTo = (function (arglist__31427){
var e_mail = cljs.core.first(arglist__31427);
var p__31423 = cljs.core.rest(arglist__31427);
return mail_to31422__delegate(e_mail,p__31423);
});
mail_to31422.cljs$core$IFn$_invoke$arity$variadic = mail_to31422__delegate;
return mail_to31422;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to31422);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list31428 = (function unordered_list31428(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__5007__auto__ = (function iter__31435(s__31436){
return (new cljs.core.LazySeq(null,(function (){
var s__31436__$1 = s__31436;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31436__$1);
if(temp__4126__auto__){
var s__31436__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31436__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31436__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31438 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31437 = (0);
while(true){
if((i__31437 < size__5006__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31437);
cljs.core.chunk_append(b__31438,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null));

var G__31441 = (i__31437 + (1));
i__31437 = G__31441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31438),iter__31435(cljs.core.chunk_rest(s__31436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31438),null);
}
} else {
var x = cljs.core.first(s__31436__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null),iter__31435(cljs.core.rest(s__31436__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list31428);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list31442 = (function ordered_list31442(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,(function (){var iter__5007__auto__ = (function iter__31449(s__31450){
return (new cljs.core.LazySeq(null,(function (){
var s__31450__$1 = s__31450;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31450__$1);
if(temp__4126__auto__){
var s__31450__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31450__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31450__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31452 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31451 = (0);
while(true){
if((i__31451 < size__5006__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31451);
cljs.core.chunk_append(b__31452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null));

var G__31455 = (i__31451 + (1));
i__31451 = G__31455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31452),iter__31449(cljs.core.chunk_rest(s__31450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31452),null);
}
} else {
var x = cljs.core.first(s__31450__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null),iter__31449(cljs.core.rest(s__31450__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list31442);
/**
* Create an image element.
*/
sablono.core.image31456 = (function() {
var image31456 = null;
var image31456__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$133,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image31456__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$133,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$134,alt], null)], null);
});
image31456 = function(src,alt){
switch(arguments.length){
case 1:
return image31456__1.call(this,src);
case 2:
return image31456__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image31456.cljs$core$IFn$_invoke$arity$1 = image31456__1;
image31456.cljs$core$IFn$_invoke$arity$2 = image31456__2;
return image31456;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image31456);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__31457_SHARP_,p2__31458_SHARP_){
return [cljs.core.str(p1__31457_SHARP_),cljs.core.str("["),cljs.core.str(p2__31458_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__31459_SHARP_,p2__31460_SHARP_){
return [cljs.core.str(p1__31459_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31460_SHARP_)].join('');
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
sablono.core.color_field31461 = (function() {
var color_field31461 = null;
var color_field31461__1 = (function (name__20277__auto__){
return color_field31461.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var color_field31461__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20277__auto__,value__20278__auto__);
});
color_field31461 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return color_field31461__1.call(this,name__20277__auto__);
case 2:
return color_field31461__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field31461.cljs$core$IFn$_invoke$arity$1 = color_field31461__1;
color_field31461.cljs$core$IFn$_invoke$arity$2 = color_field31461__2;
return color_field31461;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field31461);

/**
* Creates a date input field.
*/
sablono.core.date_field31464 = (function() {
var date_field31464 = null;
var date_field31464__1 = (function (name__20277__auto__){
return date_field31464.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var date_field31464__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20277__auto__,value__20278__auto__);
});
date_field31464 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return date_field31464__1.call(this,name__20277__auto__);
case 2:
return date_field31464__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field31464.cljs$core$IFn$_invoke$arity$1 = date_field31464__1;
date_field31464.cljs$core$IFn$_invoke$arity$2 = date_field31464__2;
return date_field31464;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field31464);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field31467 = (function() {
var datetime_field31467 = null;
var datetime_field31467__1 = (function (name__20277__auto__){
return datetime_field31467.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var datetime_field31467__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20277__auto__,value__20278__auto__);
});
datetime_field31467 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return datetime_field31467__1.call(this,name__20277__auto__);
case 2:
return datetime_field31467__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field31467.cljs$core$IFn$_invoke$arity$1 = datetime_field31467__1;
datetime_field31467.cljs$core$IFn$_invoke$arity$2 = datetime_field31467__2;
return datetime_field31467;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field31467);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field31470 = (function() {
var datetime_local_field31470 = null;
var datetime_local_field31470__1 = (function (name__20277__auto__){
return datetime_local_field31470.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var datetime_local_field31470__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20277__auto__,value__20278__auto__);
});
datetime_local_field31470 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return datetime_local_field31470__1.call(this,name__20277__auto__);
case 2:
return datetime_local_field31470__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field31470.cljs$core$IFn$_invoke$arity$1 = datetime_local_field31470__1;
datetime_local_field31470.cljs$core$IFn$_invoke$arity$2 = datetime_local_field31470__2;
return datetime_local_field31470;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field31470);

/**
* Creates a email input field.
*/
sablono.core.email_field31473 = (function() {
var email_field31473 = null;
var email_field31473__1 = (function (name__20277__auto__){
return email_field31473.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var email_field31473__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20277__auto__,value__20278__auto__);
});
email_field31473 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return email_field31473__1.call(this,name__20277__auto__);
case 2:
return email_field31473__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field31473.cljs$core$IFn$_invoke$arity$1 = email_field31473__1;
email_field31473.cljs$core$IFn$_invoke$arity$2 = email_field31473__2;
return email_field31473;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field31473);

/**
* Creates a file input field.
*/
sablono.core.file_field31476 = (function() {
var file_field31476 = null;
var file_field31476__1 = (function (name__20277__auto__){
return file_field31476.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var file_field31476__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20277__auto__,value__20278__auto__);
});
file_field31476 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return file_field31476__1.call(this,name__20277__auto__);
case 2:
return file_field31476__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field31476.cljs$core$IFn$_invoke$arity$1 = file_field31476__1;
file_field31476.cljs$core$IFn$_invoke$arity$2 = file_field31476__2;
return file_field31476;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field31476);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field31479 = (function() {
var hidden_field31479 = null;
var hidden_field31479__1 = (function (name__20277__auto__){
return hidden_field31479.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var hidden_field31479__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20277__auto__,value__20278__auto__);
});
hidden_field31479 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return hidden_field31479__1.call(this,name__20277__auto__);
case 2:
return hidden_field31479__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field31479.cljs$core$IFn$_invoke$arity$1 = hidden_field31479__1;
hidden_field31479.cljs$core$IFn$_invoke$arity$2 = hidden_field31479__2;
return hidden_field31479;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field31479);

/**
* Creates a month input field.
*/
sablono.core.month_field31482 = (function() {
var month_field31482 = null;
var month_field31482__1 = (function (name__20277__auto__){
return month_field31482.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var month_field31482__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20277__auto__,value__20278__auto__);
});
month_field31482 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return month_field31482__1.call(this,name__20277__auto__);
case 2:
return month_field31482__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field31482.cljs$core$IFn$_invoke$arity$1 = month_field31482__1;
month_field31482.cljs$core$IFn$_invoke$arity$2 = month_field31482__2;
return month_field31482;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field31482);

/**
* Creates a number input field.
*/
sablono.core.number_field31485 = (function() {
var number_field31485 = null;
var number_field31485__1 = (function (name__20277__auto__){
return number_field31485.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var number_field31485__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20277__auto__,value__20278__auto__);
});
number_field31485 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return number_field31485__1.call(this,name__20277__auto__);
case 2:
return number_field31485__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field31485.cljs$core$IFn$_invoke$arity$1 = number_field31485__1;
number_field31485.cljs$core$IFn$_invoke$arity$2 = number_field31485__2;
return number_field31485;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field31485);

/**
* Creates a password input field.
*/
sablono.core.password_field31488 = (function() {
var password_field31488 = null;
var password_field31488__1 = (function (name__20277__auto__){
return password_field31488.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var password_field31488__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20277__auto__,value__20278__auto__);
});
password_field31488 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return password_field31488__1.call(this,name__20277__auto__);
case 2:
return password_field31488__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field31488.cljs$core$IFn$_invoke$arity$1 = password_field31488__1;
password_field31488.cljs$core$IFn$_invoke$arity$2 = password_field31488__2;
return password_field31488;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field31488);

/**
* Creates a range input field.
*/
sablono.core.range_field31491 = (function() {
var range_field31491 = null;
var range_field31491__1 = (function (name__20277__auto__){
return range_field31491.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var range_field31491__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20277__auto__,value__20278__auto__);
});
range_field31491 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return range_field31491__1.call(this,name__20277__auto__);
case 2:
return range_field31491__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field31491.cljs$core$IFn$_invoke$arity$1 = range_field31491__1;
range_field31491.cljs$core$IFn$_invoke$arity$2 = range_field31491__2;
return range_field31491;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field31491);

/**
* Creates a search input field.
*/
sablono.core.search_field31494 = (function() {
var search_field31494 = null;
var search_field31494__1 = (function (name__20277__auto__){
return search_field31494.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var search_field31494__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20277__auto__,value__20278__auto__);
});
search_field31494 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return search_field31494__1.call(this,name__20277__auto__);
case 2:
return search_field31494__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field31494.cljs$core$IFn$_invoke$arity$1 = search_field31494__1;
search_field31494.cljs$core$IFn$_invoke$arity$2 = search_field31494__2;
return search_field31494;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field31494);

/**
* Creates a tel input field.
*/
sablono.core.tel_field31497 = (function() {
var tel_field31497 = null;
var tel_field31497__1 = (function (name__20277__auto__){
return tel_field31497.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var tel_field31497__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20277__auto__,value__20278__auto__);
});
tel_field31497 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return tel_field31497__1.call(this,name__20277__auto__);
case 2:
return tel_field31497__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field31497.cljs$core$IFn$_invoke$arity$1 = tel_field31497__1;
tel_field31497.cljs$core$IFn$_invoke$arity$2 = tel_field31497__2;
return tel_field31497;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field31497);

/**
* Creates a text input field.
*/
sablono.core.text_field31500 = (function() {
var text_field31500 = null;
var text_field31500__1 = (function (name__20277__auto__){
return text_field31500.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var text_field31500__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20277__auto__,value__20278__auto__);
});
text_field31500 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return text_field31500__1.call(this,name__20277__auto__);
case 2:
return text_field31500__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field31500.cljs$core$IFn$_invoke$arity$1 = text_field31500__1;
text_field31500.cljs$core$IFn$_invoke$arity$2 = text_field31500__2;
return text_field31500;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field31500);

/**
* Creates a time input field.
*/
sablono.core.time_field31503 = (function() {
var time_field31503 = null;
var time_field31503__1 = (function (name__20277__auto__){
return time_field31503.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var time_field31503__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20277__auto__,value__20278__auto__);
});
time_field31503 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return time_field31503__1.call(this,name__20277__auto__);
case 2:
return time_field31503__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field31503.cljs$core$IFn$_invoke$arity$1 = time_field31503__1;
time_field31503.cljs$core$IFn$_invoke$arity$2 = time_field31503__2;
return time_field31503;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field31503);

/**
* Creates a url input field.
*/
sablono.core.url_field31506 = (function() {
var url_field31506 = null;
var url_field31506__1 = (function (name__20277__auto__){
return url_field31506.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var url_field31506__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20277__auto__,value__20278__auto__);
});
url_field31506 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return url_field31506__1.call(this,name__20277__auto__);
case 2:
return url_field31506__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field31506.cljs$core$IFn$_invoke$arity$1 = url_field31506__1;
url_field31506.cljs$core$IFn$_invoke$arity$2 = url_field31506__2;
return url_field31506;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field31506);

/**
* Creates a week input field.
*/
sablono.core.week_field31509 = (function() {
var week_field31509 = null;
var week_field31509__1 = (function (name__20277__auto__){
return week_field31509.cljs$core$IFn$_invoke$arity$2(name__20277__auto__,null);
});
var week_field31509__2 = (function (name__20277__auto__,value__20278__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20277__auto__,value__20278__auto__);
});
week_field31509 = function(name__20277__auto__,value__20278__auto__){
switch(arguments.length){
case 1:
return week_field31509__1.call(this,name__20277__auto__);
case 2:
return week_field31509__2.call(this,name__20277__auto__,value__20278__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field31509.cljs$core$IFn$_invoke$arity$1 = week_field31509__1;
week_field31509.cljs$core$IFn$_invoke$arity$2 = week_field31509__2;
return week_field31509;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field31509);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box31512 = (function() {
var check_box31512 = null;
var check_box31512__1 = (function (name){
return check_box31512.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box31512__2 = (function (name,checked_QMARK_){
return check_box31512.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box31512__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,"checkbox",cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name),cljs.core.constant$keyword$66,value,cljs.core.constant$keyword$135,checked_QMARK_], null)], null);
});
check_box31512 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box31512__1.call(this,name);
case 2:
return check_box31512__2.call(this,name,checked_QMARK_);
case 3:
return check_box31512__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box31512.cljs$core$IFn$_invoke$arity$1 = check_box31512__1;
check_box31512.cljs$core$IFn$_invoke$arity$2 = check_box31512__2;
check_box31512.cljs$core$IFn$_invoke$arity$3 = check_box31512__3;
return check_box31512;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box31512);
/**
* Creates a radio button.
*/
sablono.core.radio_button31518 = (function() {
var radio_button31518 = null;
var radio_button31518__1 = (function (group){
return radio_button31518.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button31518__2 = (function (group,checked_QMARK_){
return radio_button31518.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button31518__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,"radio",cljs.core.constant$keyword$80,sablono.core.make_name(group),cljs.core.constant$keyword$121,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$66,value,cljs.core.constant$keyword$135,checked_QMARK_], null)], null);
});
radio_button31518 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button31518__1.call(this,group);
case 2:
return radio_button31518__2.call(this,group,checked_QMARK_);
case 3:
return radio_button31518__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button31518.cljs$core$IFn$_invoke$arity$1 = radio_button31518__1;
radio_button31518.cljs$core$IFn$_invoke$arity$2 = radio_button31518__2;
radio_button31518.cljs$core$IFn$_invoke$arity$3 = radio_button31518__3;
return radio_button31518;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button31518);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options31524 = (function() {
var select_options31524 = null;
var select_options31524__1 = (function (coll){
return select_options31524.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options31524__2 = (function (coll,selected){
var iter__5007__auto__ = (function iter__31545(s__31546){
return (new cljs.core.LazySeq(null,(function (){
var s__31546__$1 = s__31546;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31546__$1);
if(temp__4126__auto__){
var s__31546__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31546__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__31546__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__31548 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__31547 = (0);
while(true){
if((i__31547 < size__5006__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__31547);
cljs.core.chunk_append(b__31548,((cljs.core.sequential_QMARK_(x))?(function (){var vec__31553 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31553,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31553,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31553,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,text], null),select_options31524.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,val,cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$139,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__31555 = (i__31547 + (1));
i__31547 = G__31555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31548),iter__31545(cljs.core.chunk_rest(s__31546__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31548),null);
}
} else {
var x = cljs.core.first(s__31546__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__31554 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31554,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31554,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31554,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,text], null),select_options31524.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,val,cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$139,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__31545(cljs.core.rest(s__31546__$2)));
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
select_options31524 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options31524__1.call(this,coll);
case 2:
return select_options31524__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options31524.cljs$core$IFn$_invoke$arity$1 = select_options31524__1;
select_options31524.cljs$core$IFn$_invoke$arity$2 = select_options31524__2;
return select_options31524;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options31524);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down31556 = (function() {
var drop_down31556 = null;
var drop_down31556__2 = (function (name,options){
return drop_down31556.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down31556__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$140,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name)], null),(function (){var G__31562 = options;
var G__31563 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__31562,G__31563) : sablono.core.select_options.call(null,G__31562,G__31563));
})()], null);
});
drop_down31556 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down31556__2.call(this,name,options);
case 3:
return drop_down31556__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down31556.cljs$core$IFn$_invoke$arity$2 = drop_down31556__2;
drop_down31556.cljs$core$IFn$_invoke$arity$3 = drop_down31556__3;
return drop_down31556;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down31556);
/**
* Creates a text area element.
*/
sablono.core.text_area31564 = (function() {
var text_area31564 = null;
var text_area31564__1 = (function (name){
return text_area31564.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area31564__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name),cljs.core.constant$keyword$66,value], null)], null);
});
text_area31564 = function(name,value){
switch(arguments.length){
case 1:
return text_area31564__1.call(this,name);
case 2:
return text_area31564__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area31564.cljs$core$IFn$_invoke$arity$1 = text_area31564__1;
text_area31564.cljs$core$IFn$_invoke$arity$2 = text_area31564__2;
return text_area31564;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area31564);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label31567 = (function label31567(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label31567);
/**
* Creates a submit button.
*/
sablono.core.submit_button31568 = (function submit_button31568(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,"submit",cljs.core.constant$keyword$66,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button31568);
/**
* Creates a form reset button.
*/
sablono.core.reset_button31569 = (function reset_button31569(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,"reset",cljs.core.constant$keyword$66,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button31569);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to31570 = (function() { 
var form_to31570__delegate = function (p__31571,body){
var vec__31575 = p__31571;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31575,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31575,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,null,cljs.core.constant$keyword$142,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$144,method_str,cljs.core.constant$keyword$145,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$144,"POST",cljs.core.constant$keyword$145,action_uri], null),(function (){var G__31576 = "_method";
var G__31577 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__31576,G__31577) : sablono.core.hidden_field.call(null,G__31576,G__31577));
})()], null)),body));
};
var form_to31570 = function (p__31571,var_args){
var body = null;
if (arguments.length > 1) {
var G__31578__i = 0, G__31578__a = new Array(arguments.length -  1);
while (G__31578__i < G__31578__a.length) {G__31578__a[G__31578__i] = arguments[G__31578__i + 1]; ++G__31578__i;}
  body = new cljs.core.IndexedSeq(G__31578__a,0);
} 
return form_to31570__delegate.call(this,p__31571,body);};
form_to31570.cljs$lang$maxFixedArity = 1;
form_to31570.cljs$lang$applyTo = (function (arglist__31579){
var p__31571 = cljs.core.first(arglist__31579);
var body = cljs.core.rest(arglist__31579);
return form_to31570__delegate(p__31571,body);
});
form_to31570.cljs$core$IFn$_invoke$arity$variadic = form_to31570__delegate;
return form_to31570;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to31570);
