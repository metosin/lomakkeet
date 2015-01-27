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
var G__34611__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__34610 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34610,(0),null);
var body = cljs.core.nthnext(vec__34610,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__34611 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34612__i = 0, G__34612__a = new Array(arguments.length -  0);
while (G__34612__i < G__34612__a.length) {G__34612__a[G__34612__i] = arguments[G__34612__i + 0]; ++G__34612__i;}
  args = new cljs.core.IndexedSeq(G__34612__a,0);
} 
return G__34611__delegate.call(this,args);};
G__34611.cljs$lang$maxFixedArity = 0;
G__34611.cljs$lang$applyTo = (function (arglist__34613){
var args = cljs.core.seq(arglist__34613);
return G__34611__delegate(args);
});
G__34611.cljs$core$IFn$_invoke$arity$variadic = G__34611__delegate;
return G__34611;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4514__auto__ = (function iter__34620(s__34621){
return (new cljs.core.LazySeq(null,(function (){
var s__34621__$1 = s__34621;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34621__$1);
if(temp__4126__auto__){
var s__34621__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34621__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__34621__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__34623 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__34622 = (0);
while(true){
if((i__34622 < size__4513__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__34622);
cljs.core.chunk_append(b__34623,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__34626 = (i__34622 + (1));
i__34622 = G__34626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34623),iter__34620(cljs.core.chunk_rest(s__34621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34623),null);
}
} else {
var args = cljs.core.first(s__34621__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__34620(cljs.core.rest(s__34621__$2)));
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
var iter__4514__auto__ = (function iter__34633(s__34634){
return (new cljs.core.LazySeq(null,(function (){
var s__34634__$1 = s__34634;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34634__$1);
if(temp__4126__auto__){
var s__34634__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34634__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__34634__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__34636 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__34635 = (0);
while(true){
if((i__34635 < size__4513__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__34635);
cljs.core.chunk_append(b__34636,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,"text/css",cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$127,"stylesheet"], null)], null));

var G__34639 = (i__34635 + (1));
i__34635 = G__34639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34636),iter__34633(cljs.core.chunk_rest(s__34634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34636),null);
}
} else {
var style = cljs.core.first(s__34634__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,"text/css",cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$127,"stylesheet"], null)], null),iter__34633(cljs.core.rest(s__34634__$2)));
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
var G__34640__i = 0, G__34640__a = new Array(arguments.length -  0);
while (G__34640__i < G__34640__a.length) {G__34640__a[G__34640__i] = arguments[G__34640__i + 0]; ++G__34640__i;}
  styles = new cljs.core.IndexedSeq(G__34640__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__34641){
var styles = cljs.core.seq(arglist__34641);
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
var G__34646 = (function (){return goog.dom.getDocument();
})().body;
var G__34647 = (function (){var G__34648 = "script";
var G__34649 = {"src": src};
return goog.dom.createDom(G__34648,G__34649);
})();
return goog.dom.appendChild(G__34646,G__34647);
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
sablono.core.link_to34650 = (function() { 
var link_to34650__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to34650 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__34651__i = 0, G__34651__a = new Array(arguments.length -  1);
while (G__34651__i < G__34651__a.length) {G__34651__a[G__34651__i] = arguments[G__34651__i + 1]; ++G__34651__i;}
  content = new cljs.core.IndexedSeq(G__34651__a,0);
} 
return link_to34650__delegate.call(this,url,content);};
link_to34650.cljs$lang$maxFixedArity = 1;
link_to34650.cljs$lang$applyTo = (function (arglist__34652){
var url = cljs.core.first(arglist__34652);
var content = cljs.core.rest(arglist__34652);
return link_to34650__delegate(url,content);
});
link_to34650.cljs$core$IFn$_invoke$arity$variadic = link_to34650__delegate;
return link_to34650;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to34650);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to34653 = (function() { 
var mail_to34653__delegate = function (e_mail,p__34654){
var vec__34656 = p__34654;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34656,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3758__auto__ = content;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to34653 = function (e_mail,var_args){
var p__34654 = null;
if (arguments.length > 1) {
var G__34657__i = 0, G__34657__a = new Array(arguments.length -  1);
while (G__34657__i < G__34657__a.length) {G__34657__a[G__34657__i] = arguments[G__34657__i + 1]; ++G__34657__i;}
  p__34654 = new cljs.core.IndexedSeq(G__34657__a,0);
} 
return mail_to34653__delegate.call(this,e_mail,p__34654);};
mail_to34653.cljs$lang$maxFixedArity = 1;
mail_to34653.cljs$lang$applyTo = (function (arglist__34658){
var e_mail = cljs.core.first(arglist__34658);
var p__34654 = cljs.core.rest(arglist__34658);
return mail_to34653__delegate(e_mail,p__34654);
});
mail_to34653.cljs$core$IFn$_invoke$arity$variadic = mail_to34653__delegate;
return mail_to34653;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to34653);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list34659 = (function unordered_list34659(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__4514__auto__ = (function iter__34666(s__34667){
return (new cljs.core.LazySeq(null,(function (){
var s__34667__$1 = s__34667;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34667__$1);
if(temp__4126__auto__){
var s__34667__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34667__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__34667__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__34669 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__34668 = (0);
while(true){
if((i__34668 < size__4513__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__34668);
cljs.core.chunk_append(b__34669,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null));

var G__34672 = (i__34668 + (1));
i__34668 = G__34672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34669),iter__34666(cljs.core.chunk_rest(s__34667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34669),null);
}
} else {
var x = cljs.core.first(s__34667__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null),iter__34666(cljs.core.rest(s__34667__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list34659);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list34673 = (function ordered_list34673(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,(function (){var iter__4514__auto__ = (function iter__34680(s__34681){
return (new cljs.core.LazySeq(null,(function (){
var s__34681__$1 = s__34681;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34681__$1);
if(temp__4126__auto__){
var s__34681__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34681__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__34681__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__34683 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__34682 = (0);
while(true){
if((i__34682 < size__4513__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__34682);
cljs.core.chunk_append(b__34683,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null));

var G__34686 = (i__34682 + (1));
i__34682 = G__34686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34683),iter__34680(cljs.core.chunk_rest(s__34681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34683),null);
}
} else {
var x = cljs.core.first(s__34681__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,x], null),iter__34680(cljs.core.rest(s__34681__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list34673);
/**
* Create an image element.
*/
sablono.core.image34687 = (function() {
var image34687 = null;
var image34687__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$133,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image34687__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$133,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$134,alt], null)], null);
});
image34687 = function(src,alt){
switch(arguments.length){
case 1:
return image34687__1.call(this,src);
case 2:
return image34687__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image34687.cljs$core$IFn$_invoke$arity$1 = image34687__1;
image34687.cljs$core$IFn$_invoke$arity$2 = image34687__2;
return image34687;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image34687);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__34688_SHARP_,p2__34689_SHARP_){
return [cljs.core.str(p1__34688_SHARP_),cljs.core.str("["),cljs.core.str(p2__34689_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__34690_SHARP_,p2__34691_SHARP_){
return [cljs.core.str(p1__34690_SHARP_),cljs.core.str("-"),cljs.core.str(p2__34691_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$25,type,cljs.core.constant$keyword$37,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name),cljs.core.constant$keyword$23,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field34692 = (function() {
var color_field34692 = null;
var color_field34692__1 = (function (name__19784__auto__){
return color_field34692.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var color_field34692__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19784__auto__,value__19785__auto__);
});
color_field34692 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return color_field34692__1.call(this,name__19784__auto__);
case 2:
return color_field34692__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field34692.cljs$core$IFn$_invoke$arity$1 = color_field34692__1;
color_field34692.cljs$core$IFn$_invoke$arity$2 = color_field34692__2;
return color_field34692;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field34692);

/**
* Creates a date input field.
*/
sablono.core.date_field34695 = (function() {
var date_field34695 = null;
var date_field34695__1 = (function (name__19784__auto__){
return date_field34695.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var date_field34695__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19784__auto__,value__19785__auto__);
});
date_field34695 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return date_field34695__1.call(this,name__19784__auto__);
case 2:
return date_field34695__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field34695.cljs$core$IFn$_invoke$arity$1 = date_field34695__1;
date_field34695.cljs$core$IFn$_invoke$arity$2 = date_field34695__2;
return date_field34695;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field34695);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field34698 = (function() {
var datetime_field34698 = null;
var datetime_field34698__1 = (function (name__19784__auto__){
return datetime_field34698.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var datetime_field34698__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19784__auto__,value__19785__auto__);
});
datetime_field34698 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return datetime_field34698__1.call(this,name__19784__auto__);
case 2:
return datetime_field34698__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field34698.cljs$core$IFn$_invoke$arity$1 = datetime_field34698__1;
datetime_field34698.cljs$core$IFn$_invoke$arity$2 = datetime_field34698__2;
return datetime_field34698;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field34698);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field34701 = (function() {
var datetime_local_field34701 = null;
var datetime_local_field34701__1 = (function (name__19784__auto__){
return datetime_local_field34701.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var datetime_local_field34701__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19784__auto__,value__19785__auto__);
});
datetime_local_field34701 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return datetime_local_field34701__1.call(this,name__19784__auto__);
case 2:
return datetime_local_field34701__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field34701.cljs$core$IFn$_invoke$arity$1 = datetime_local_field34701__1;
datetime_local_field34701.cljs$core$IFn$_invoke$arity$2 = datetime_local_field34701__2;
return datetime_local_field34701;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field34701);

/**
* Creates a email input field.
*/
sablono.core.email_field34704 = (function() {
var email_field34704 = null;
var email_field34704__1 = (function (name__19784__auto__){
return email_field34704.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var email_field34704__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19784__auto__,value__19785__auto__);
});
email_field34704 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return email_field34704__1.call(this,name__19784__auto__);
case 2:
return email_field34704__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field34704.cljs$core$IFn$_invoke$arity$1 = email_field34704__1;
email_field34704.cljs$core$IFn$_invoke$arity$2 = email_field34704__2;
return email_field34704;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field34704);

/**
* Creates a file input field.
*/
sablono.core.file_field34707 = (function() {
var file_field34707 = null;
var file_field34707__1 = (function (name__19784__auto__){
return file_field34707.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var file_field34707__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19784__auto__,value__19785__auto__);
});
file_field34707 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return file_field34707__1.call(this,name__19784__auto__);
case 2:
return file_field34707__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field34707.cljs$core$IFn$_invoke$arity$1 = file_field34707__1;
file_field34707.cljs$core$IFn$_invoke$arity$2 = file_field34707__2;
return file_field34707;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field34707);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field34710 = (function() {
var hidden_field34710 = null;
var hidden_field34710__1 = (function (name__19784__auto__){
return hidden_field34710.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var hidden_field34710__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19784__auto__,value__19785__auto__);
});
hidden_field34710 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return hidden_field34710__1.call(this,name__19784__auto__);
case 2:
return hidden_field34710__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field34710.cljs$core$IFn$_invoke$arity$1 = hidden_field34710__1;
hidden_field34710.cljs$core$IFn$_invoke$arity$2 = hidden_field34710__2;
return hidden_field34710;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field34710);

/**
* Creates a month input field.
*/
sablono.core.month_field34713 = (function() {
var month_field34713 = null;
var month_field34713__1 = (function (name__19784__auto__){
return month_field34713.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var month_field34713__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19784__auto__,value__19785__auto__);
});
month_field34713 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return month_field34713__1.call(this,name__19784__auto__);
case 2:
return month_field34713__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field34713.cljs$core$IFn$_invoke$arity$1 = month_field34713__1;
month_field34713.cljs$core$IFn$_invoke$arity$2 = month_field34713__2;
return month_field34713;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field34713);

/**
* Creates a number input field.
*/
sablono.core.number_field34716 = (function() {
var number_field34716 = null;
var number_field34716__1 = (function (name__19784__auto__){
return number_field34716.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var number_field34716__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19784__auto__,value__19785__auto__);
});
number_field34716 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return number_field34716__1.call(this,name__19784__auto__);
case 2:
return number_field34716__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field34716.cljs$core$IFn$_invoke$arity$1 = number_field34716__1;
number_field34716.cljs$core$IFn$_invoke$arity$2 = number_field34716__2;
return number_field34716;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field34716);

/**
* Creates a password input field.
*/
sablono.core.password_field34719 = (function() {
var password_field34719 = null;
var password_field34719__1 = (function (name__19784__auto__){
return password_field34719.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var password_field34719__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19784__auto__,value__19785__auto__);
});
password_field34719 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return password_field34719__1.call(this,name__19784__auto__);
case 2:
return password_field34719__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field34719.cljs$core$IFn$_invoke$arity$1 = password_field34719__1;
password_field34719.cljs$core$IFn$_invoke$arity$2 = password_field34719__2;
return password_field34719;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field34719);

/**
* Creates a range input field.
*/
sablono.core.range_field34722 = (function() {
var range_field34722 = null;
var range_field34722__1 = (function (name__19784__auto__){
return range_field34722.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var range_field34722__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19784__auto__,value__19785__auto__);
});
range_field34722 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return range_field34722__1.call(this,name__19784__auto__);
case 2:
return range_field34722__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field34722.cljs$core$IFn$_invoke$arity$1 = range_field34722__1;
range_field34722.cljs$core$IFn$_invoke$arity$2 = range_field34722__2;
return range_field34722;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field34722);

/**
* Creates a search input field.
*/
sablono.core.search_field34725 = (function() {
var search_field34725 = null;
var search_field34725__1 = (function (name__19784__auto__){
return search_field34725.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var search_field34725__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19784__auto__,value__19785__auto__);
});
search_field34725 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return search_field34725__1.call(this,name__19784__auto__);
case 2:
return search_field34725__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field34725.cljs$core$IFn$_invoke$arity$1 = search_field34725__1;
search_field34725.cljs$core$IFn$_invoke$arity$2 = search_field34725__2;
return search_field34725;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field34725);

/**
* Creates a tel input field.
*/
sablono.core.tel_field34728 = (function() {
var tel_field34728 = null;
var tel_field34728__1 = (function (name__19784__auto__){
return tel_field34728.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var tel_field34728__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19784__auto__,value__19785__auto__);
});
tel_field34728 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return tel_field34728__1.call(this,name__19784__auto__);
case 2:
return tel_field34728__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field34728.cljs$core$IFn$_invoke$arity$1 = tel_field34728__1;
tel_field34728.cljs$core$IFn$_invoke$arity$2 = tel_field34728__2;
return tel_field34728;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field34728);

/**
* Creates a text input field.
*/
sablono.core.text_field34731 = (function() {
var text_field34731 = null;
var text_field34731__1 = (function (name__19784__auto__){
return text_field34731.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var text_field34731__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19784__auto__,value__19785__auto__);
});
text_field34731 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return text_field34731__1.call(this,name__19784__auto__);
case 2:
return text_field34731__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field34731.cljs$core$IFn$_invoke$arity$1 = text_field34731__1;
text_field34731.cljs$core$IFn$_invoke$arity$2 = text_field34731__2;
return text_field34731;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field34731);

/**
* Creates a time input field.
*/
sablono.core.time_field34734 = (function() {
var time_field34734 = null;
var time_field34734__1 = (function (name__19784__auto__){
return time_field34734.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var time_field34734__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19784__auto__,value__19785__auto__);
});
time_field34734 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return time_field34734__1.call(this,name__19784__auto__);
case 2:
return time_field34734__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field34734.cljs$core$IFn$_invoke$arity$1 = time_field34734__1;
time_field34734.cljs$core$IFn$_invoke$arity$2 = time_field34734__2;
return time_field34734;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field34734);

/**
* Creates a url input field.
*/
sablono.core.url_field34737 = (function() {
var url_field34737 = null;
var url_field34737__1 = (function (name__19784__auto__){
return url_field34737.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var url_field34737__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19784__auto__,value__19785__auto__);
});
url_field34737 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return url_field34737__1.call(this,name__19784__auto__);
case 2:
return url_field34737__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field34737.cljs$core$IFn$_invoke$arity$1 = url_field34737__1;
url_field34737.cljs$core$IFn$_invoke$arity$2 = url_field34737__2;
return url_field34737;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field34737);

/**
* Creates a week input field.
*/
sablono.core.week_field34740 = (function() {
var week_field34740 = null;
var week_field34740__1 = (function (name__19784__auto__){
return week_field34740.cljs$core$IFn$_invoke$arity$2(name__19784__auto__,null);
});
var week_field34740__2 = (function (name__19784__auto__,value__19785__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19784__auto__,value__19785__auto__);
});
week_field34740 = function(name__19784__auto__,value__19785__auto__){
switch(arguments.length){
case 1:
return week_field34740__1.call(this,name__19784__auto__);
case 2:
return week_field34740__2.call(this,name__19784__auto__,value__19785__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field34740.cljs$core$IFn$_invoke$arity$1 = week_field34740__1;
week_field34740.cljs$core$IFn$_invoke$arity$2 = week_field34740__2;
return week_field34740;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field34740);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box34743 = (function() {
var check_box34743 = null;
var check_box34743__1 = (function (name){
return check_box34743.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box34743__2 = (function (name,checked_QMARK_){
return check_box34743.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box34743__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$25,"checkbox",cljs.core.constant$keyword$37,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name),cljs.core.constant$keyword$23,value,cljs.core.constant$keyword$135,checked_QMARK_], null)], null);
});
check_box34743 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box34743__1.call(this,name);
case 2:
return check_box34743__2.call(this,name,checked_QMARK_);
case 3:
return check_box34743__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box34743.cljs$core$IFn$_invoke$arity$1 = check_box34743__1;
check_box34743.cljs$core$IFn$_invoke$arity$2 = check_box34743__2;
check_box34743.cljs$core$IFn$_invoke$arity$3 = check_box34743__3;
return check_box34743;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box34743);
/**
* Creates a radio button.
*/
sablono.core.radio_button34749 = (function() {
var radio_button34749 = null;
var radio_button34749__1 = (function (group){
return radio_button34749.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button34749__2 = (function (group,checked_QMARK_){
return radio_button34749.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button34749__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$25,"radio",cljs.core.constant$keyword$37,sablono.core.make_name(group),cljs.core.constant$keyword$121,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$23,value,cljs.core.constant$keyword$135,checked_QMARK_], null)], null);
});
radio_button34749 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button34749__1.call(this,group);
case 2:
return radio_button34749__2.call(this,group,checked_QMARK_);
case 3:
return radio_button34749__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button34749.cljs$core$IFn$_invoke$arity$1 = radio_button34749__1;
radio_button34749.cljs$core$IFn$_invoke$arity$2 = radio_button34749__2;
radio_button34749.cljs$core$IFn$_invoke$arity$3 = radio_button34749__3;
return radio_button34749;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button34749);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options34755 = (function() {
var select_options34755 = null;
var select_options34755__1 = (function (coll){
return select_options34755.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options34755__2 = (function (coll,selected){
var iter__4514__auto__ = (function iter__34776(s__34777){
return (new cljs.core.LazySeq(null,(function (){
var s__34777__$1 = s__34777;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34777__$1);
if(temp__4126__auto__){
var s__34777__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34777__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__34777__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__34779 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__34778 = (0);
while(true){
if((i__34778 < size__4513__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__34778);
cljs.core.chunk_append(b__34779,((cljs.core.sequential_QMARK_(x))?(function (){var vec__34784 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34784,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34784,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34784,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,text], null),select_options34755.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,val,cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$139,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__34786 = (i__34778 + (1));
i__34778 = G__34786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34779),iter__34776(cljs.core.chunk_rest(s__34777__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34779),null);
}
} else {
var x = cljs.core.first(s__34777__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__34785 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,text], null),select_options34755.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,val,cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$139,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__34776(cljs.core.rest(s__34777__$2)));
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
select_options34755 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options34755__1.call(this,coll);
case 2:
return select_options34755__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options34755.cljs$core$IFn$_invoke$arity$1 = select_options34755__1;
select_options34755.cljs$core$IFn$_invoke$arity$2 = select_options34755__2;
return select_options34755;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options34755);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down34787 = (function() {
var drop_down34787 = null;
var drop_down34787__2 = (function (name,options){
return drop_down34787.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down34787__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$140,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$37,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name)], null),(function (){var G__34793 = options;
var G__34794 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__34793,G__34794) : sablono.core.select_options.call(null,G__34793,G__34794));
})()], null);
});
drop_down34787 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down34787__2.call(this,name,options);
case 3:
return drop_down34787__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down34787.cljs$core$IFn$_invoke$arity$2 = drop_down34787__2;
drop_down34787.cljs$core$IFn$_invoke$arity$3 = drop_down34787__3;
return drop_down34787;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down34787);
/**
* Creates a text area element.
*/
sablono.core.text_area34795 = (function() {
var text_area34795 = null;
var text_area34795__1 = (function (name){
return text_area34795.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area34795__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$37,sablono.core.make_name(name),cljs.core.constant$keyword$121,sablono.core.make_id(name),cljs.core.constant$keyword$23,value], null)], null);
});
text_area34795 = function(name,value){
switch(arguments.length){
case 1:
return text_area34795__1.call(this,name);
case 2:
return text_area34795__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area34795.cljs$core$IFn$_invoke$arity$1 = text_area34795__1;
text_area34795.cljs$core$IFn$_invoke$arity$2 = text_area34795__2;
return text_area34795;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area34795);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label34798 = (function label34798(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label34798);
/**
* Creates a submit button.
*/
sablono.core.submit_button34799 = (function submit_button34799(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"submit",cljs.core.constant$keyword$23,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button34799);
/**
* Creates a form reset button.
*/
sablono.core.reset_button34800 = (function reset_button34800(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"reset",cljs.core.constant$keyword$23,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button34800);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to34801 = (function() { 
var form_to34801__delegate = function (p__34802,body){
var vec__34806 = p__34802;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34806,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34806,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,null,cljs.core.constant$keyword$142,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$144,method_str,cljs.core.constant$keyword$145,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$144,"POST",cljs.core.constant$keyword$145,action_uri], null),(function (){var G__34807 = "_method";
var G__34808 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__34807,G__34808) : sablono.core.hidden_field.call(null,G__34807,G__34808));
})()], null)),body));
};
var form_to34801 = function (p__34802,var_args){
var body = null;
if (arguments.length > 1) {
var G__34809__i = 0, G__34809__a = new Array(arguments.length -  1);
while (G__34809__i < G__34809__a.length) {G__34809__a[G__34809__i] = arguments[G__34809__i + 1]; ++G__34809__i;}
  body = new cljs.core.IndexedSeq(G__34809__a,0);
} 
return form_to34801__delegate.call(this,p__34802,body);};
form_to34801.cljs$lang$maxFixedArity = 1;
form_to34801.cljs$lang$applyTo = (function (arglist__34810){
var p__34802 = cljs.core.first(arglist__34810);
var body = cljs.core.rest(arglist__34810);
return form_to34801__delegate(p__34802,body);
});
form_to34801.cljs$core$IFn$_invoke$arity$variadic = form_to34801__delegate;
return form_to34801;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to34801);
