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
var G__30951__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__30950 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30950,(0),null);
var body = cljs.core.nthnext(vec__30950,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__30951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30952__i = 0, G__30952__a = new Array(arguments.length -  0);
while (G__30952__i < G__30952__a.length) {G__30952__a[G__30952__i] = arguments[G__30952__i + 0]; ++G__30952__i;}
  args = new cljs.core.IndexedSeq(G__30952__a,0);
} 
return G__30951__delegate.call(this,args);};
G__30951.cljs$lang$maxFixedArity = 0;
G__30951.cljs$lang$applyTo = (function (arglist__30953){
var args = cljs.core.seq(arglist__30953);
return G__30951__delegate(args);
});
G__30951.cljs$core$IFn$_invoke$arity$variadic = G__30951__delegate;
return G__30951;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4514__auto__ = (function iter__30960(s__30961){
return (new cljs.core.LazySeq(null,(function (){
var s__30961__$1 = s__30961;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__30961__$1);
if(temp__4126__auto__){
var s__30961__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30961__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__30961__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__30963 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__30962 = (0);
while(true){
if((i__30962 < size__4513__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__30962);
cljs.core.chunk_append(b__30963,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__30966 = (i__30962 + (1));
i__30962 = G__30966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30963),iter__30960(cljs.core.chunk_rest(s__30961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30963),null);
}
} else {
var args = cljs.core.first(s__30961__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__30960(cljs.core.rest(s__30961__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__(arglists);
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
var iter__4514__auto__ = (function iter__30973(s__30974){
return (new cljs.core.LazySeq(null,(function (){
var s__30974__$1 = s__30974;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__30974__$1);
if(temp__4126__auto__){
var s__30974__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30974__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__30974__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__30976 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__30975 = (0);
while(true){
if((i__30975 < size__4513__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__30975);
cljs.core.chunk_append(b__30976,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,"text/css",cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$127,"stylesheet"], null)], null));

var G__30979 = (i__30975 + (1));
i__30975 = G__30979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30976),iter__30973(cljs.core.chunk_rest(s__30974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30976),null);
}
} else {
var style = cljs.core.first(s__30974__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,"text/css",cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$127,"stylesheet"], null)], null),iter__30973(cljs.core.rest(s__30974__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__(styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__30980__i = 0, G__30980__a = new Array(arguments.length -  0);
while (G__30980__i < G__30980__a.length) {G__30980__a[G__30980__i] = arguments[G__30980__i + 0]; ++G__30980__i;}
  styles = new cljs.core.IndexedSeq(G__30980__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__30981){
var styles = cljs.core.seq(arglist__30981);
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
var G__30986 = (function (){return goog.dom.getDocument();
})().body;
var G__30987 = (function (){var G__30988 = "script";
var G__30989 = {"src": src};
return goog.dom.createDom(G__30988,G__30989);
})();
return goog.dom.appendChild(G__30986,G__30987);
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
sablono.core.link_to30990 = (function() { 
var link_to30990__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to30990 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__30991__i = 0, G__30991__a = new Array(arguments.length -  1);
while (G__30991__i < G__30991__a.length) {G__30991__a[G__30991__i] = arguments[G__30991__i + 1]; ++G__30991__i;}
  content = new cljs.core.IndexedSeq(G__30991__a,0);
} 
return link_to30990__delegate.call(this,url,content);};
link_to30990.cljs$lang$maxFixedArity = 1;
link_to30990.cljs$lang$applyTo = (function (arglist__30992){
var url = cljs.core.first(arglist__30992);
var content = cljs.core.rest(arglist__30992);
return link_to30990__delegate(url,content);
});
link_to30990.cljs$core$IFn$_invoke$arity$variadic = link_to30990__delegate;
return link_to30990;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to30990);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to30993 = (function() { 
var mail_to30993__delegate = function (e_mail,p__30994){
var vec__30996 = p__30994;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30996,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3758__auto__ = content;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to30993 = function (e_mail,var_args){
var p__30994 = null;
if (arguments.length > 1) {
var G__30997__i = 0, G__30997__a = new Array(arguments.length -  1);
while (G__30997__i < G__30997__a.length) {G__30997__a[G__30997__i] = arguments[G__30997__i + 1]; ++G__30997__i;}
  p__30994 = new cljs.core.IndexedSeq(G__30997__a,0);
} 
return mail_to30993__delegate.call(this,e_mail,p__30994);};
mail_to30993.cljs$lang$maxFixedArity = 1;
mail_to30993.cljs$lang$applyTo = (function (arglist__30998){
var e_mail = cljs.core.first(arglist__30998);
var p__30994 = cljs.core.rest(arglist__30998);
return mail_to30993__delegate(e_mail,p__30994);
});
mail_to30993.cljs$core$IFn$_invoke$arity$variadic = mail_to30993__delegate;
return mail_to30993;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to30993);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list30999 = (function unordered_list30999(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__4514__auto__ = (function iter__31006(s__31007){
return (new cljs.core.LazySeq(null,(function (){
var s__31007__$1 = s__31007;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31007__$1);
if(temp__4126__auto__){
var s__31007__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31007__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__31007__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__31009 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__31008 = (0);
while(true){
if((i__31008 < size__4513__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__31008);
cljs.core.chunk_append(b__31009,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null));

var G__31012 = (i__31008 + (1));
i__31008 = G__31012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31009),iter__31006(cljs.core.chunk_rest(s__31007__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31009),null);
}
} else {
var x = cljs.core.first(s__31007__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null),iter__31006(cljs.core.rest(s__31007__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list30999);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list31013 = (function ordered_list31013(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,(function (){var iter__4514__auto__ = (function iter__31020(s__31021){
return (new cljs.core.LazySeq(null,(function (){
var s__31021__$1 = s__31021;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31021__$1);
if(temp__4126__auto__){
var s__31021__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31021__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__31021__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__31023 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__31022 = (0);
while(true){
if((i__31022 < size__4513__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__31022);
cljs.core.chunk_append(b__31023,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null));

var G__31026 = (i__31022 + (1));
i__31022 = G__31026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31023),iter__31020(cljs.core.chunk_rest(s__31021__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31023),null);
}
} else {
var x = cljs.core.first(s__31021__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null),iter__31020(cljs.core.rest(s__31021__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list31013);
/**
* Create an image element.
*/
sablono.core.image31027 = (function() {
var image31027 = null;
var image31027__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$133,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image31027__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$133,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$134,alt], null)], null);
});
image31027 = function(src,alt){
switch(arguments.length){
case 1:
return image31027__1.call(this,src);
case 2:
return image31027__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image31027.cljs$core$IFn$_invoke$arity$1 = image31027__1;
image31027.cljs$core$IFn$_invoke$arity$2 = image31027__2;
return image31027;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image31027);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__31028_SHARP_,p2__31029_SHARP_){
return [cljs.core.str(p1__31028_SHARP_),cljs.core.str("["),cljs.core.str(p2__31029_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__31030_SHARP_,p2__31031_SHARP_){
return [cljs.core.str(p1__31030_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31031_SHARP_)].join('');
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
sablono.core.color_field31032 = (function() {
var color_field31032 = null;
var color_field31032__1 = (function (name__19784__auto__){
return color_field31032.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var color_field31032__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19784__auto__,value__19785__auto__);
});
color_field31032 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return color_field31032__1.call(this,name__19784__auto__);
case 2:
return color_field31032__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field31032.cljs$core$IFn$_invoke$arity$1 = color_field31032__1;
color_field31032.cljs$core$IFn$_invoke$arity$2 = color_field31032__2;
return color_field31032;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field31032);

/**
* Creates a date input field.
*/
sablono.core.date_field31035 = (function() {
var date_field31035 = null;
var date_field31035__1 = (function (name__19784__auto__){
return date_field31035.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var date_field31035__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19784__auto__,value__19785__auto__);
});
date_field31035 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return date_field31035__1.call(this,name__19784__auto__);
case 2:
return date_field31035__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field31035.cljs$core$IFn$_invoke$arity$1 = date_field31035__1;
date_field31035.cljs$core$IFn$_invoke$arity$2 = date_field31035__2;
return date_field31035;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field31035);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field31038 = (function() {
var datetime_field31038 = null;
var datetime_field31038__1 = (function (name__19784__auto__){
return datetime_field31038.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var datetime_field31038__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19784__auto__,value__19785__auto__);
});
datetime_field31038 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return datetime_field31038__1.call(this,name__19784__auto__);
case 2:
return datetime_field31038__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field31038.cljs$core$IFn$_invoke$arity$1 = datetime_field31038__1;
datetime_field31038.cljs$core$IFn$_invoke$arity$2 = datetime_field31038__2;
return datetime_field31038;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field31038);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field31041 = (function() {
var datetime_local_field31041 = null;
var datetime_local_field31041__1 = (function (name__19784__auto__){
return datetime_local_field31041.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var datetime_local_field31041__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19784__auto__,value__19785__auto__);
});
datetime_local_field31041 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return datetime_local_field31041__1.call(this,name__19784__auto__);
case 2:
return datetime_local_field31041__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field31041.cljs$core$IFn$_invoke$arity$1 = datetime_local_field31041__1;
datetime_local_field31041.cljs$core$IFn$_invoke$arity$2 = datetime_local_field31041__2;
return datetime_local_field31041;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field31041);

/**
* Creates a email input field.
*/
sablono.core.email_field31044 = (function() {
var email_field31044 = null;
var email_field31044__1 = (function (name__19784__auto__){
return email_field31044.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var email_field31044__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19784__auto__,value__19785__auto__);
});
email_field31044 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return email_field31044__1.call(this,name__19784__auto__);
case 2:
return email_field31044__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field31044.cljs$core$IFn$_invoke$arity$1 = email_field31044__1;
email_field31044.cljs$core$IFn$_invoke$arity$2 = email_field31044__2;
return email_field31044;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field31044);

/**
* Creates a file input field.
*/
sablono.core.file_field31047 = (function() {
var file_field31047 = null;
var file_field31047__1 = (function (name__19784__auto__){
return file_field31047.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var file_field31047__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19784__auto__,value__19785__auto__);
});
file_field31047 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return file_field31047__1.call(this,name__19784__auto__);
case 2:
return file_field31047__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field31047.cljs$core$IFn$_invoke$arity$1 = file_field31047__1;
file_field31047.cljs$core$IFn$_invoke$arity$2 = file_field31047__2;
return file_field31047;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field31047);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field31050 = (function() {
var hidden_field31050 = null;
var hidden_field31050__1 = (function (name__19784__auto__){
return hidden_field31050.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var hidden_field31050__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19784__auto__,value__19785__auto__);
});
hidden_field31050 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return hidden_field31050__1.call(this,name__19784__auto__);
case 2:
return hidden_field31050__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field31050.cljs$core$IFn$_invoke$arity$1 = hidden_field31050__1;
hidden_field31050.cljs$core$IFn$_invoke$arity$2 = hidden_field31050__2;
return hidden_field31050;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field31050);

/**
* Creates a month input field.
*/
sablono.core.month_field31053 = (function() {
var month_field31053 = null;
var month_field31053__1 = (function (name__19784__auto__){
return month_field31053.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var month_field31053__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19784__auto__,value__19785__auto__);
});
month_field31053 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return month_field31053__1.call(this,name__19784__auto__);
case 2:
return month_field31053__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field31053.cljs$core$IFn$_invoke$arity$1 = month_field31053__1;
month_field31053.cljs$core$IFn$_invoke$arity$2 = month_field31053__2;
return month_field31053;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field31053);

/**
* Creates a number input field.
*/
sablono.core.number_field31056 = (function() {
var number_field31056 = null;
var number_field31056__1 = (function (name__19784__auto__){
return number_field31056.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var number_field31056__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19784__auto__,value__19785__auto__);
});
number_field31056 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return number_field31056__1.call(this,name__19784__auto__);
case 2:
return number_field31056__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field31056.cljs$core$IFn$_invoke$arity$1 = number_field31056__1;
number_field31056.cljs$core$IFn$_invoke$arity$2 = number_field31056__2;
return number_field31056;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field31056);

/**
* Creates a password input field.
*/
sablono.core.password_field31059 = (function() {
var password_field31059 = null;
var password_field31059__1 = (function (name__19784__auto__){
return password_field31059.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var password_field31059__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19784__auto__,value__19785__auto__);
});
password_field31059 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return password_field31059__1.call(this,name__19784__auto__);
case 2:
return password_field31059__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field31059.cljs$core$IFn$_invoke$arity$1 = password_field31059__1;
password_field31059.cljs$core$IFn$_invoke$arity$2 = password_field31059__2;
return password_field31059;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field31059);

/**
* Creates a range input field.
*/
sablono.core.range_field31062 = (function() {
var range_field31062 = null;
var range_field31062__1 = (function (name__19784__auto__){
return range_field31062.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var range_field31062__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19784__auto__,value__19785__auto__);
});
range_field31062 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return range_field31062__1.call(this,name__19784__auto__);
case 2:
return range_field31062__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field31062.cljs$core$IFn$_invoke$arity$1 = range_field31062__1;
range_field31062.cljs$core$IFn$_invoke$arity$2 = range_field31062__2;
return range_field31062;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field31062);

/**
* Creates a search input field.
*/
sablono.core.search_field31065 = (function() {
var search_field31065 = null;
var search_field31065__1 = (function (name__19784__auto__){
return search_field31065.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var search_field31065__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19784__auto__,value__19785__auto__);
});
search_field31065 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return search_field31065__1.call(this,name__19784__auto__);
case 2:
return search_field31065__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field31065.cljs$core$IFn$_invoke$arity$1 = search_field31065__1;
search_field31065.cljs$core$IFn$_invoke$arity$2 = search_field31065__2;
return search_field31065;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field31065);

/**
* Creates a tel input field.
*/
sablono.core.tel_field31068 = (function() {
var tel_field31068 = null;
var tel_field31068__1 = (function (name__19784__auto__){
return tel_field31068.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var tel_field31068__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19784__auto__,value__19785__auto__);
});
tel_field31068 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return tel_field31068__1.call(this,name__19784__auto__);
case 2:
return tel_field31068__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field31068.cljs$core$IFn$_invoke$arity$1 = tel_field31068__1;
tel_field31068.cljs$core$IFn$_invoke$arity$2 = tel_field31068__2;
return tel_field31068;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field31068);

/**
* Creates a text input field.
*/
sablono.core.text_field31071 = (function() {
var text_field31071 = null;
var text_field31071__1 = (function (name__19784__auto__){
return text_field31071.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var text_field31071__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19784__auto__,value__19785__auto__);
});
text_field31071 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return text_field31071__1.call(this,name__19784__auto__);
case 2:
return text_field31071__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field31071.cljs$core$IFn$_invoke$arity$1 = text_field31071__1;
text_field31071.cljs$core$IFn$_invoke$arity$2 = text_field31071__2;
return text_field31071;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field31071);

/**
* Creates a time input field.
*/
sablono.core.time_field31074 = (function() {
var time_field31074 = null;
var time_field31074__1 = (function (name__19784__auto__){
return time_field31074.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var time_field31074__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19784__auto__,value__19785__auto__);
});
time_field31074 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return time_field31074__1.call(this,name__19784__auto__);
case 2:
return time_field31074__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field31074.cljs$core$IFn$_invoke$arity$1 = time_field31074__1;
time_field31074.cljs$core$IFn$_invoke$arity$2 = time_field31074__2;
return time_field31074;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field31074);

/**
* Creates a url input field.
*/
sablono.core.url_field31077 = (function() {
var url_field31077 = null;
var url_field31077__1 = (function (name__19784__auto__){
return url_field31077.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var url_field31077__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19784__auto__,value__19785__auto__);
});
url_field31077 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return url_field31077__1.call(this,name__19784__auto__);
case 2:
return url_field31077__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field31077.cljs$core$IFn$_invoke$arity$1 = url_field31077__1;
url_field31077.cljs$core$IFn$_invoke$arity$2 = url_field31077__2;
return url_field31077;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field31077);

/**
* Creates a week input field.
*/
sablono.core.week_field31080 = (function() {
var week_field31080 = null;
var week_field31080__1 = (function (name__19784__auto__){
return week_field31080.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var week_field31080__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19784__auto__,value__19785__auto__);
});
week_field31080 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return week_field31080__1.call(this,name__19784__auto__);
case 2:
return week_field31080__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field31080.cljs$core$IFn$_invoke$arity$1 = week_field31080__1;
week_field31080.cljs$core$IFn$_invoke$arity$2 = week_field31080__2;
return week_field31080;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field31080);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box31083 = (function() {
var check_box31083 = null;
var check_box31083__1 = (function (name){
return check_box31083.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box31083__2 = (function (name,checked_QMARK_){
return check_box31083.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box31083__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,"checkbox",cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name),cljs.core.constant$keyword$66,value,cljs.core.constant$keyword$135,checked_QMARK_], null)], null);
});
check_box31083 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box31083__1.call(this,name);
case 2:
return check_box31083__2.call(this,name,checked_QMARK_);
case 3:
return check_box31083__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box31083.cljs$core$IFn$_invoke$arity$1 = check_box31083__1;
check_box31083.cljs$core$IFn$_invoke$arity$2 = check_box31083__2;
check_box31083.cljs$core$IFn$_invoke$arity$3 = check_box31083__3;
return check_box31083;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box31083);
/**
* Creates a radio button.
*/
sablono.core.radio_button31089 = (function() {
var radio_button31089 = null;
var radio_button31089__1 = (function (group){
return radio_button31089.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button31089__2 = (function (group,checked_QMARK_){
return radio_button31089.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button31089__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,"radio",cljs.core.constant$keyword$80,sablono.core.make_name(group),cljs.core.constant$keyword$121,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$66,value,cljs.core.constant$keyword$135,checked_QMARK_], null)], null);
});
radio_button31089 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button31089__1.call(this,group);
case 2:
return radio_button31089__2.call(this,group,checked_QMARK_);
case 3:
return radio_button31089__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button31089.cljs$core$IFn$_invoke$arity$1 = radio_button31089__1;
radio_button31089.cljs$core$IFn$_invoke$arity$2 = radio_button31089__2;
radio_button31089.cljs$core$IFn$_invoke$arity$3 = radio_button31089__3;
return radio_button31089;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button31089);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options31095 = (function() {
var select_options31095 = null;
var select_options31095__1 = (function (coll){
return select_options31095.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options31095__2 = (function (coll,selected){
var iter__4514__auto__ = (function iter__31116(s__31117){
return (new cljs.core.LazySeq(null,(function (){
var s__31117__$1 = s__31117;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31117__$1);
if(temp__4126__auto__){
var s__31117__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31117__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__31117__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__31119 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__31118 = (0);
while(true){
if((i__31118 < size__4513__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__31118);
cljs.core.chunk_append(b__31119,((cljs.core.sequential_QMARK_(x))?(function (){var vec__31124 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31124,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31124,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31124,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,text], null),select_options31095.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,val,cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$139,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__31126 = (i__31118 + (1));
i__31118 = G__31126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31119),iter__31116(cljs.core.chunk_rest(s__31117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31119),null);
}
} else {
var x = cljs.core.first(s__31117__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__31125 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31125,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31125,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31125,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,text], null),select_options31095.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,val,cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$139,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__31116(cljs.core.rest(s__31117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__(coll);
});
select_options31095 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options31095__1.call(this,coll);
case 2:
return select_options31095__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options31095.cljs$core$IFn$_invoke$arity$1 = select_options31095__1;
select_options31095.cljs$core$IFn$_invoke$arity$2 = select_options31095__2;
return select_options31095;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options31095);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down31127 = (function() {
var drop_down31127 = null;
var drop_down31127__2 = (function (name,options){
return drop_down31127.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down31127__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$140,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name)], null),(function (){var G__31133 = options;
var G__31134 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__31133,G__31134) : sablono.core.select_options.call(null,G__31133,G__31134));
})()], null);
});
drop_down31127 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down31127__2.call(this,name,options);
case 3:
return drop_down31127__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down31127.cljs$core$IFn$_invoke$arity$2 = drop_down31127__2;
drop_down31127.cljs$core$IFn$_invoke$arity$3 = drop_down31127__3;
return drop_down31127;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down31127);
/**
* Creates a text area element.
*/
sablono.core.text_area31135 = (function() {
var text_area31135 = null;
var text_area31135__1 = (function (name){
return text_area31135.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area31135__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name),cljs.core.constant$keyword$66,value], null)], null);
});
text_area31135 = function(name,value){
switch(arguments.length){
case 1:
return text_area31135__1.call(this,name);
case 2:
return text_area31135__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area31135.cljs$core$IFn$_invoke$arity$1 = text_area31135__1;
text_area31135.cljs$core$IFn$_invoke$arity$2 = text_area31135__2;
return text_area31135;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area31135);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label31138 = (function label31138(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label31138);
/**
* Creates a submit button.
*/
sablono.core.submit_button31139 = (function submit_button31139(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,"submit",cljs.core.constant$keyword$66,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button31139);
/**
* Creates a form reset button.
*/
sablono.core.reset_button31140 = (function reset_button31140(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,"reset",cljs.core.constant$keyword$66,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button31140);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to31141 = (function() { 
var form_to31141__delegate = function (p__31142,body){
var vec__31146 = p__31142;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31146,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31146,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,null,cljs.core.constant$keyword$142,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$144,method_str,cljs.core.constant$keyword$145,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$144,"POST",cljs.core.constant$keyword$145,action_uri], null),(function (){var G__31147 = "_method";
var G__31148 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__31147,G__31148) : sablono.core.hidden_field.call(null,G__31147,G__31148));
})()], null)),body));
};
var form_to31141 = function (p__31142,var_args){
var body = null;
if (arguments.length > 1) {
var G__31149__i = 0, G__31149__a = new Array(arguments.length -  1);
while (G__31149__i < G__31149__a.length) {G__31149__a[G__31149__i] = arguments[G__31149__i + 1]; ++G__31149__i;}
  body = new cljs.core.IndexedSeq(G__31149__a,0);
} 
return form_to31141__delegate.call(this,p__31142,body);};
form_to31141.cljs$lang$maxFixedArity = 1;
form_to31141.cljs$lang$applyTo = (function (arglist__31150){
var p__31142 = cljs.core.first(arglist__31150);
var body = cljs.core.rest(arglist__31150);
return form_to31141__delegate(p__31142,body);
});
form_to31141.cljs$core$IFn$_invoke$arity$variadic = form_to31141__delegate;
return form_to31141;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to31141);
