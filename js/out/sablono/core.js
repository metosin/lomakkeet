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
var G__36426__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__36425 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36425,(0),null);
var body = cljs.core.nthnext(vec__36425,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__36426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36427__i = 0, G__36427__a = new Array(arguments.length -  0);
while (G__36427__i < G__36427__a.length) {G__36427__a[G__36427__i] = arguments[G__36427__i + 0]; ++G__36427__i;}
  args = new cljs.core.IndexedSeq(G__36427__a,0);
} 
return G__36426__delegate.call(this,args);};
G__36426.cljs$lang$maxFixedArity = 0;
G__36426.cljs$lang$applyTo = (function (arglist__36428){
var args = cljs.core.seq(arglist__36428);
return G__36426__delegate(args);
});
G__36426.cljs$core$IFn$_invoke$arity$variadic = G__36426__delegate;
return G__36426;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4571__auto__ = (function iter__36435(s__36436){
return (new cljs.core.LazySeq(null,(function (){
var s__36436__$1 = s__36436;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36436__$1);
if(temp__4126__auto__){
var s__36436__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36436__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36436__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36438 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36437 = (0);
while(true){
if((i__36437 < size__4570__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36437);
cljs.core.chunk_append(b__36438,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36441 = (i__36437 + (1));
i__36437 = G__36441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36438),iter__36435(cljs.core.chunk_rest(s__36436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36438),null);
}
} else {
var args = cljs.core.first(s__36436__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__36435(cljs.core.rest(s__36436__$2)));
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
var G__36443 = element;
return React.renderToString(G__36443);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
var G__36445 = element;
return React.renderToStaticMarkup(G__36445);
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
var iter__4571__auto__ = (function iter__36452(s__36453){
return (new cljs.core.LazySeq(null,(function (){
var s__36453__$1 = s__36453;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36453__$1);
if(temp__4126__auto__){
var s__36453__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36453__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36453__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36455 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36454 = (0);
while(true){
if((i__36454 < size__4570__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36454);
cljs.core.chunk_append(b__36455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null));

var G__36458 = (i__36454 + (1));
i__36454 = G__36458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36455),iter__36452(cljs.core.chunk_rest(s__36453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36455),null);
}
} else {
var style = cljs.core.first(s__36453__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null),iter__36452(cljs.core.rest(s__36453__$2)));
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
var G__36459__i = 0, G__36459__a = new Array(arguments.length -  0);
while (G__36459__i < G__36459__a.length) {G__36459__a[G__36459__i] = arguments[G__36459__i + 0]; ++G__36459__i;}
  styles = new cljs.core.IndexedSeq(G__36459__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__36460){
var styles = cljs.core.seq(arglist__36460);
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
var G__36465 = (function (){return goog.dom.getDocument();
})().body;
var G__36466 = (function (){var G__36467 = "script";
var G__36468 = {"src": src};
return goog.dom.createDom(G__36467,G__36468);
})();
return goog.dom.appendChild(G__36465,G__36466);
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
sablono.core.link_to36469 = (function() { 
var link_to36469__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to36469 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__36470__i = 0, G__36470__a = new Array(arguments.length -  1);
while (G__36470__i < G__36470__a.length) {G__36470__a[G__36470__i] = arguments[G__36470__i + 1]; ++G__36470__i;}
  content = new cljs.core.IndexedSeq(G__36470__a,0);
} 
return link_to36469__delegate.call(this,url,content);};
link_to36469.cljs$lang$maxFixedArity = 1;
link_to36469.cljs$lang$applyTo = (function (arglist__36471){
var url = cljs.core.first(arglist__36471);
var content = cljs.core.rest(arglist__36471);
return link_to36469__delegate(url,content);
});
link_to36469.cljs$core$IFn$_invoke$arity$variadic = link_to36469__delegate;
return link_to36469;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to36469);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to36472 = (function() { 
var mail_to36472__delegate = function (e_mail,p__36473){
var vec__36475 = p__36473;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36475,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3815__auto__ = content;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to36472 = function (e_mail,var_args){
var p__36473 = null;
if (arguments.length > 1) {
var G__36476__i = 0, G__36476__a = new Array(arguments.length -  1);
while (G__36476__i < G__36476__a.length) {G__36476__a[G__36476__i] = arguments[G__36476__i + 1]; ++G__36476__i;}
  p__36473 = new cljs.core.IndexedSeq(G__36476__a,0);
} 
return mail_to36472__delegate.call(this,e_mail,p__36473);};
mail_to36472.cljs$lang$maxFixedArity = 1;
mail_to36472.cljs$lang$applyTo = (function (arglist__36477){
var e_mail = cljs.core.first(arglist__36477);
var p__36473 = cljs.core.rest(arglist__36477);
return mail_to36472__delegate(e_mail,p__36473);
});
mail_to36472.cljs$core$IFn$_invoke$arity$variadic = mail_to36472__delegate;
return mail_to36472;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to36472);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list36478 = (function unordered_list36478(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4571__auto__ = (function iter__36485(s__36486){
return (new cljs.core.LazySeq(null,(function (){
var s__36486__$1 = s__36486;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36486__$1);
if(temp__4126__auto__){
var s__36486__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36486__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36486__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36488 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36487 = (0);
while(true){
if((i__36487 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36487);
cljs.core.chunk_append(b__36488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__36491 = (i__36487 + (1));
i__36487 = G__36491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36488),iter__36485(cljs.core.chunk_rest(s__36486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36488),null);
}
} else {
var x = cljs.core.first(s__36486__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__36485(cljs.core.rest(s__36486__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list36478);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list36492 = (function ordered_list36492(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__4571__auto__ = (function iter__36499(s__36500){
return (new cljs.core.LazySeq(null,(function (){
var s__36500__$1 = s__36500;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36500__$1);
if(temp__4126__auto__){
var s__36500__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36500__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36500__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36502 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36501 = (0);
while(true){
if((i__36501 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36501);
cljs.core.chunk_append(b__36502,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__36505 = (i__36501 + (1));
i__36501 = G__36505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36502),iter__36499(cljs.core.chunk_rest(s__36500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36502),null);
}
} else {
var x = cljs.core.first(s__36500__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__36499(cljs.core.rest(s__36500__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list36492);
/**
* Create an image element.
*/
sablono.core.image36506 = (function() {
var image36506 = null;
var image36506__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image36506__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$132,alt], null)], null);
});
image36506 = function(src,alt){
switch(arguments.length){
case 1:
return image36506__1.call(this,src);
case 2:
return image36506__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image36506.cljs$core$IFn$_invoke$arity$1 = image36506__1;
image36506.cljs$core$IFn$_invoke$arity$2 = image36506__2;
return image36506;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image36506);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__36507_SHARP_,p2__36508_SHARP_){
return [cljs.core.str(p1__36507_SHARP_),cljs.core.str("["),cljs.core.str(p2__36508_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__36509_SHARP_,p2__36510_SHARP_){
return [cljs.core.str(p1__36509_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36510_SHARP_)].join('');
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
sablono.core.color_field36511 = (function() {
var color_field36511 = null;
var color_field36511__1 = (function (name__19862__auto__){
return color_field36511.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var color_field36511__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19862__auto__,value__19863__auto__);
});
color_field36511 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return color_field36511__1.call(this,name__19862__auto__);
case 2:
return color_field36511__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field36511.cljs$core$IFn$_invoke$arity$1 = color_field36511__1;
color_field36511.cljs$core$IFn$_invoke$arity$2 = color_field36511__2;
return color_field36511;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field36511);

/**
* Creates a date input field.
*/
sablono.core.date_field36514 = (function() {
var date_field36514 = null;
var date_field36514__1 = (function (name__19862__auto__){
return date_field36514.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var date_field36514__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19862__auto__,value__19863__auto__);
});
date_field36514 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return date_field36514__1.call(this,name__19862__auto__);
case 2:
return date_field36514__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field36514.cljs$core$IFn$_invoke$arity$1 = date_field36514__1;
date_field36514.cljs$core$IFn$_invoke$arity$2 = date_field36514__2;
return date_field36514;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field36514);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field36517 = (function() {
var datetime_field36517 = null;
var datetime_field36517__1 = (function (name__19862__auto__){
return datetime_field36517.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var datetime_field36517__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19862__auto__,value__19863__auto__);
});
datetime_field36517 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return datetime_field36517__1.call(this,name__19862__auto__);
case 2:
return datetime_field36517__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field36517.cljs$core$IFn$_invoke$arity$1 = datetime_field36517__1;
datetime_field36517.cljs$core$IFn$_invoke$arity$2 = datetime_field36517__2;
return datetime_field36517;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field36517);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field36520 = (function() {
var datetime_local_field36520 = null;
var datetime_local_field36520__1 = (function (name__19862__auto__){
return datetime_local_field36520.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var datetime_local_field36520__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19862__auto__,value__19863__auto__);
});
datetime_local_field36520 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return datetime_local_field36520__1.call(this,name__19862__auto__);
case 2:
return datetime_local_field36520__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field36520.cljs$core$IFn$_invoke$arity$1 = datetime_local_field36520__1;
datetime_local_field36520.cljs$core$IFn$_invoke$arity$2 = datetime_local_field36520__2;
return datetime_local_field36520;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field36520);

/**
* Creates a email input field.
*/
sablono.core.email_field36523 = (function() {
var email_field36523 = null;
var email_field36523__1 = (function (name__19862__auto__){
return email_field36523.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var email_field36523__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19862__auto__,value__19863__auto__);
});
email_field36523 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return email_field36523__1.call(this,name__19862__auto__);
case 2:
return email_field36523__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field36523.cljs$core$IFn$_invoke$arity$1 = email_field36523__1;
email_field36523.cljs$core$IFn$_invoke$arity$2 = email_field36523__2;
return email_field36523;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field36523);

/**
* Creates a file input field.
*/
sablono.core.file_field36526 = (function() {
var file_field36526 = null;
var file_field36526__1 = (function (name__19862__auto__){
return file_field36526.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var file_field36526__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19862__auto__,value__19863__auto__);
});
file_field36526 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return file_field36526__1.call(this,name__19862__auto__);
case 2:
return file_field36526__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field36526.cljs$core$IFn$_invoke$arity$1 = file_field36526__1;
file_field36526.cljs$core$IFn$_invoke$arity$2 = file_field36526__2;
return file_field36526;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field36526);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field36529 = (function() {
var hidden_field36529 = null;
var hidden_field36529__1 = (function (name__19862__auto__){
return hidden_field36529.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var hidden_field36529__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19862__auto__,value__19863__auto__);
});
hidden_field36529 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return hidden_field36529__1.call(this,name__19862__auto__);
case 2:
return hidden_field36529__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field36529.cljs$core$IFn$_invoke$arity$1 = hidden_field36529__1;
hidden_field36529.cljs$core$IFn$_invoke$arity$2 = hidden_field36529__2;
return hidden_field36529;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field36529);

/**
* Creates a month input field.
*/
sablono.core.month_field36532 = (function() {
var month_field36532 = null;
var month_field36532__1 = (function (name__19862__auto__){
return month_field36532.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var month_field36532__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19862__auto__,value__19863__auto__);
});
month_field36532 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return month_field36532__1.call(this,name__19862__auto__);
case 2:
return month_field36532__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field36532.cljs$core$IFn$_invoke$arity$1 = month_field36532__1;
month_field36532.cljs$core$IFn$_invoke$arity$2 = month_field36532__2;
return month_field36532;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field36532);

/**
* Creates a number input field.
*/
sablono.core.number_field36535 = (function() {
var number_field36535 = null;
var number_field36535__1 = (function (name__19862__auto__){
return number_field36535.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var number_field36535__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19862__auto__,value__19863__auto__);
});
number_field36535 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return number_field36535__1.call(this,name__19862__auto__);
case 2:
return number_field36535__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field36535.cljs$core$IFn$_invoke$arity$1 = number_field36535__1;
number_field36535.cljs$core$IFn$_invoke$arity$2 = number_field36535__2;
return number_field36535;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field36535);

/**
* Creates a password input field.
*/
sablono.core.password_field36538 = (function() {
var password_field36538 = null;
var password_field36538__1 = (function (name__19862__auto__){
return password_field36538.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var password_field36538__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19862__auto__,value__19863__auto__);
});
password_field36538 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return password_field36538__1.call(this,name__19862__auto__);
case 2:
return password_field36538__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field36538.cljs$core$IFn$_invoke$arity$1 = password_field36538__1;
password_field36538.cljs$core$IFn$_invoke$arity$2 = password_field36538__2;
return password_field36538;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field36538);

/**
* Creates a range input field.
*/
sablono.core.range_field36541 = (function() {
var range_field36541 = null;
var range_field36541__1 = (function (name__19862__auto__){
return range_field36541.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var range_field36541__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19862__auto__,value__19863__auto__);
});
range_field36541 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return range_field36541__1.call(this,name__19862__auto__);
case 2:
return range_field36541__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field36541.cljs$core$IFn$_invoke$arity$1 = range_field36541__1;
range_field36541.cljs$core$IFn$_invoke$arity$2 = range_field36541__2;
return range_field36541;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field36541);

/**
* Creates a search input field.
*/
sablono.core.search_field36544 = (function() {
var search_field36544 = null;
var search_field36544__1 = (function (name__19862__auto__){
return search_field36544.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var search_field36544__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19862__auto__,value__19863__auto__);
});
search_field36544 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return search_field36544__1.call(this,name__19862__auto__);
case 2:
return search_field36544__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field36544.cljs$core$IFn$_invoke$arity$1 = search_field36544__1;
search_field36544.cljs$core$IFn$_invoke$arity$2 = search_field36544__2;
return search_field36544;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field36544);

/**
* Creates a tel input field.
*/
sablono.core.tel_field36547 = (function() {
var tel_field36547 = null;
var tel_field36547__1 = (function (name__19862__auto__){
return tel_field36547.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var tel_field36547__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19862__auto__,value__19863__auto__);
});
tel_field36547 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return tel_field36547__1.call(this,name__19862__auto__);
case 2:
return tel_field36547__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field36547.cljs$core$IFn$_invoke$arity$1 = tel_field36547__1;
tel_field36547.cljs$core$IFn$_invoke$arity$2 = tel_field36547__2;
return tel_field36547;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field36547);

/**
* Creates a text input field.
*/
sablono.core.text_field36550 = (function() {
var text_field36550 = null;
var text_field36550__1 = (function (name__19862__auto__){
return text_field36550.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var text_field36550__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19862__auto__,value__19863__auto__);
});
text_field36550 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return text_field36550__1.call(this,name__19862__auto__);
case 2:
return text_field36550__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field36550.cljs$core$IFn$_invoke$arity$1 = text_field36550__1;
text_field36550.cljs$core$IFn$_invoke$arity$2 = text_field36550__2;
return text_field36550;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field36550);

/**
* Creates a time input field.
*/
sablono.core.time_field36553 = (function() {
var time_field36553 = null;
var time_field36553__1 = (function (name__19862__auto__){
return time_field36553.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var time_field36553__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19862__auto__,value__19863__auto__);
});
time_field36553 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return time_field36553__1.call(this,name__19862__auto__);
case 2:
return time_field36553__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field36553.cljs$core$IFn$_invoke$arity$1 = time_field36553__1;
time_field36553.cljs$core$IFn$_invoke$arity$2 = time_field36553__2;
return time_field36553;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field36553);

/**
* Creates a url input field.
*/
sablono.core.url_field36556 = (function() {
var url_field36556 = null;
var url_field36556__1 = (function (name__19862__auto__){
return url_field36556.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var url_field36556__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19862__auto__,value__19863__auto__);
});
url_field36556 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return url_field36556__1.call(this,name__19862__auto__);
case 2:
return url_field36556__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field36556.cljs$core$IFn$_invoke$arity$1 = url_field36556__1;
url_field36556.cljs$core$IFn$_invoke$arity$2 = url_field36556__2;
return url_field36556;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field36556);

/**
* Creates a week input field.
*/
sablono.core.week_field36559 = (function() {
var week_field36559 = null;
var week_field36559__1 = (function (name__19862__auto__){
return week_field36559.cljs$core$IFn$_invoke$arity$2(name__19862__auto__,null);
});
var week_field36559__2 = (function (name__19862__auto__,value__19863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19862__auto__,value__19863__auto__);
});
week_field36559 = function(name__19862__auto__,value__19863__auto__){
switch(arguments.length){
case 1:
return week_field36559__1.call(this,name__19862__auto__);
case 2:
return week_field36559__2.call(this,name__19862__auto__,value__19863__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field36559.cljs$core$IFn$_invoke$arity$1 = week_field36559__1;
week_field36559.cljs$core$IFn$_invoke$arity$2 = week_field36559__2;
return week_field36559;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field36559);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box36562 = (function() {
var check_box36562 = null;
var check_box36562__1 = (function (name){
return check_box36562.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box36562__2 = (function (name,checked_QMARK_){
return check_box36562.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box36562__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$66,"checkbox",cljs.core.constant$keyword$78,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$64,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
check_box36562 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box36562__1.call(this,name);
case 2:
return check_box36562__2.call(this,name,checked_QMARK_);
case 3:
return check_box36562__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box36562.cljs$core$IFn$_invoke$arity$1 = check_box36562__1;
check_box36562.cljs$core$IFn$_invoke$arity$2 = check_box36562__2;
check_box36562.cljs$core$IFn$_invoke$arity$3 = check_box36562__3;
return check_box36562;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box36562);
/**
* Creates a radio button.
*/
sablono.core.radio_button36568 = (function() {
var radio_button36568 = null;
var radio_button36568__1 = (function (group){
return radio_button36568.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button36568__2 = (function (group,checked_QMARK_){
return radio_button36568.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button36568__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$66,"radio",cljs.core.constant$keyword$78,sablono.core.make_name(group),cljs.core.constant$keyword$119,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$64,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
radio_button36568 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button36568__1.call(this,group);
case 2:
return radio_button36568__2.call(this,group,checked_QMARK_);
case 3:
return radio_button36568__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button36568.cljs$core$IFn$_invoke$arity$1 = radio_button36568__1;
radio_button36568.cljs$core$IFn$_invoke$arity$2 = radio_button36568__2;
radio_button36568.cljs$core$IFn$_invoke$arity$3 = radio_button36568__3;
return radio_button36568;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button36568);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options36574 = (function() {
var select_options36574 = null;
var select_options36574__1 = (function (coll){
return select_options36574.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options36574__2 = (function (coll,selected){
var iter__4571__auto__ = (function iter__36595(s__36596){
return (new cljs.core.LazySeq(null,(function (){
var s__36596__$1 = s__36596;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36596__$1);
if(temp__4126__auto__){
var s__36596__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36596__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__36596__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__36598 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__36597 = (0);
while(true){
if((i__36597 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__36597);
cljs.core.chunk_append(b__36598,((cljs.core.sequential_QMARK_(x))?(function (){var vec__36603 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36603,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36603,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36603,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options36574.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__36605 = (i__36597 + (1));
i__36597 = G__36605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36598),iter__36595(cljs.core.chunk_rest(s__36596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36598),null);
}
} else {
var x = cljs.core.first(s__36596__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__36604 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options36574.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__36595(cljs.core.rest(s__36596__$2)));
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
select_options36574 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options36574__1.call(this,coll);
case 2:
return select_options36574__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options36574.cljs$core$IFn$_invoke$arity$1 = select_options36574__1;
select_options36574.cljs$core$IFn$_invoke$arity$2 = select_options36574__2;
return select_options36574;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options36574);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down36606 = (function() {
var drop_down36606 = null;
var drop_down36606__2 = (function (name,options){
return drop_down36606.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down36606__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$78,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),(function (){var G__36612 = options;
var G__36613 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__36612,G__36613) : sablono.core.select_options.call(null,G__36612,G__36613));
})()], null);
});
drop_down36606 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down36606__2.call(this,name,options);
case 3:
return drop_down36606__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down36606.cljs$core$IFn$_invoke$arity$2 = drop_down36606__2;
drop_down36606.cljs$core$IFn$_invoke$arity$3 = drop_down36606__3;
return drop_down36606;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down36606);
/**
* Creates a text area element.
*/
sablono.core.text_area36614 = (function() {
var text_area36614 = null;
var text_area36614__1 = (function (name){
return text_area36614.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area36614__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$78,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$64,value], null)], null);
});
text_area36614 = function(name,value){
switch(arguments.length){
case 1:
return text_area36614__1.call(this,name);
case 2:
return text_area36614__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area36614.cljs$core$IFn$_invoke$arity$1 = text_area36614__1;
text_area36614.cljs$core$IFn$_invoke$arity$2 = text_area36614__2;
return text_area36614;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area36614);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label36617 = (function label36617(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label36617);
/**
* Creates a submit button.
*/
sablono.core.submit_button36618 = (function submit_button36618(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,"submit",cljs.core.constant$keyword$64,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button36618);
/**
* Creates a form reset button.
*/
sablono.core.reset_button36619 = (function reset_button36619(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,"reset",cljs.core.constant$keyword$64,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button36619);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to36620 = (function() { 
var form_to36620__delegate = function (p__36621,body){
var vec__36625 = p__36621;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36625,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36625,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,null,cljs.core.constant$keyword$140,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,method_str,cljs.core.constant$keyword$143,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"POST",cljs.core.constant$keyword$143,action_uri], null),(function (){var G__36626 = "_method";
var G__36627 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__36626,G__36627) : sablono.core.hidden_field.call(null,G__36626,G__36627));
})()], null)),body));
};
var form_to36620 = function (p__36621,var_args){
var body = null;
if (arguments.length > 1) {
var G__36628__i = 0, G__36628__a = new Array(arguments.length -  1);
while (G__36628__i < G__36628__a.length) {G__36628__a[G__36628__i] = arguments[G__36628__i + 1]; ++G__36628__i;}
  body = new cljs.core.IndexedSeq(G__36628__a,0);
} 
return form_to36620__delegate.call(this,p__36621,body);};
form_to36620.cljs$lang$maxFixedArity = 1;
form_to36620.cljs$lang$applyTo = (function (arglist__36629){
var p__36621 = cljs.core.first(arglist__36629);
var body = cljs.core.rest(arglist__36629);
return form_to36620__delegate(p__36621,body);
});
form_to36620.cljs$core$IFn$_invoke$arity$variadic = form_to36620__delegate;
return form_to36620;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to36620);
