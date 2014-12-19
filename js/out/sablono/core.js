// Compiled by ClojureScript 0.0-2496
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
var G__31795__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__31794 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31794,(0),null);
var body = cljs.core.nthnext(vec__31794,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__31795 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__31795__delegate.call(this,args);};
G__31795.cljs$lang$maxFixedArity = 0;
G__31795.cljs$lang$applyTo = (function (arglist__31796){
var args = cljs.core.seq(arglist__31796);
return G__31795__delegate(args);
});
G__31795.cljs$core$IFn$_invoke$arity$variadic = G__31795__delegate;
return G__31795;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4384__auto__ = (function iter__31803(s__31804){
return (new cljs.core.LazySeq(null,(function (){
var s__31804__$1 = s__31804;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31804__$1);
if(temp__4126__auto__){
var s__31804__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31804__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__31804__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__31806 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__31805 = (0);
while(true){
if((i__31805 < size__4383__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__31805);
cljs.core.chunk_append(b__31806,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31809 = (i__31805 + (1));
i__31805 = G__31809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31806),iter__31803(cljs.core.chunk_rest(s__31804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31806),null);
}
} else {
var args = cljs.core.first(s__31804__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__31803(cljs.core.rest(s__31804__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__(arglists);
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
var iter__4384__auto__ = (function iter__31816(s__31817){
return (new cljs.core.LazySeq(null,(function (){
var s__31817__$1 = s__31817;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31817__$1);
if(temp__4126__auto__){
var s__31817__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31817__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__31817__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__31819 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__31818 = (0);
while(true){
if((i__31818 < size__4383__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__31818);
cljs.core.chunk_append(b__31819,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null));

var G__31822 = (i__31818 + (1));
i__31818 = G__31822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31819),iter__31816(cljs.core.chunk_rest(s__31817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31819),null);
}
} else {
var style = cljs.core.first(s__31817__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null),iter__31816(cljs.core.rest(s__31817__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__(styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__31823){
var styles = cljs.core.seq(arglist__31823);
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
var G__31828 = (function (){return goog.dom.getDocument();
})().body;
var G__31829 = (function (){var G__31830 = "script";
var G__31831 = {"src": src};
return goog.dom.createDom(G__31830,G__31831);
})();
return goog.dom.appendChild(G__31828,G__31829);
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
sablono.core.link_to31832 = (function() { 
var link_to31832__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to31832 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to31832__delegate.call(this,url,content);};
link_to31832.cljs$lang$maxFixedArity = 1;
link_to31832.cljs$lang$applyTo = (function (arglist__31833){
var url = cljs.core.first(arglist__31833);
var content = cljs.core.rest(arglist__31833);
return link_to31832__delegate(url,content);
});
link_to31832.cljs$core$IFn$_invoke$arity$variadic = link_to31832__delegate;
return link_to31832;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to31832);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to31834 = (function() { 
var mail_to31834__delegate = function (e_mail,p__31835){
var vec__31837 = p__31835;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31837,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3628__auto__ = content;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to31834 = function (e_mail,var_args){
var p__31835 = null;
if (arguments.length > 1) {
  p__31835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to31834__delegate.call(this,e_mail,p__31835);};
mail_to31834.cljs$lang$maxFixedArity = 1;
mail_to31834.cljs$lang$applyTo = (function (arglist__31838){
var e_mail = cljs.core.first(arglist__31838);
var p__31835 = cljs.core.rest(arglist__31838);
return mail_to31834__delegate(e_mail,p__31835);
});
mail_to31834.cljs$core$IFn$_invoke$arity$variadic = mail_to31834__delegate;
return mail_to31834;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to31834);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list31839 = (function unordered_list31839(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4384__auto__ = (function iter__31846(s__31847){
return (new cljs.core.LazySeq(null,(function (){
var s__31847__$1 = s__31847;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31847__$1);
if(temp__4126__auto__){
var s__31847__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31847__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__31847__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__31849 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__31848 = (0);
while(true){
if((i__31848 < size__4383__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__31848);
cljs.core.chunk_append(b__31849,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__31852 = (i__31848 + (1));
i__31848 = G__31852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31849),iter__31846(cljs.core.chunk_rest(s__31847__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31849),null);
}
} else {
var x = cljs.core.first(s__31847__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__31846(cljs.core.rest(s__31847__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list31839);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list31853 = (function ordered_list31853(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__4384__auto__ = (function iter__31860(s__31861){
return (new cljs.core.LazySeq(null,(function (){
var s__31861__$1 = s__31861;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31861__$1);
if(temp__4126__auto__){
var s__31861__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31861__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__31861__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__31863 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__31862 = (0);
while(true){
if((i__31862 < size__4383__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__31862);
cljs.core.chunk_append(b__31863,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__31866 = (i__31862 + (1));
i__31862 = G__31866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31863),iter__31860(cljs.core.chunk_rest(s__31861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31863),null);
}
} else {
var x = cljs.core.first(s__31861__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__31860(cljs.core.rest(s__31861__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list31853);
/**
* Create an image element.
*/
sablono.core.image31867 = (function() {
var image31867 = null;
var image31867__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image31867__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$132,alt], null)], null);
});
image31867 = function(src,alt){
switch(arguments.length){
case 1:
return image31867__1.call(this,src);
case 2:
return image31867__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image31867.cljs$core$IFn$_invoke$arity$1 = image31867__1;
image31867.cljs$core$IFn$_invoke$arity$2 = image31867__2;
return image31867;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image31867);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__31868_SHARP_,p2__31869_SHARP_){
return [cljs.core.str(p1__31868_SHARP_),cljs.core.str("["),cljs.core.str(p2__31869_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__31870_SHARP_,p2__31871_SHARP_){
return [cljs.core.str(p1__31870_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31871_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$25,type,cljs.core.constant$keyword$37,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$23,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field31872 = (function() {
var color_field31872 = null;
var color_field31872__1 = (function (name__5157__auto__){
return color_field31872.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var color_field31872__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5157__auto__,value__5158__auto__);
});
color_field31872 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return color_field31872__1.call(this,name__5157__auto__);
case 2:
return color_field31872__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field31872.cljs$core$IFn$_invoke$arity$1 = color_field31872__1;
color_field31872.cljs$core$IFn$_invoke$arity$2 = color_field31872__2;
return color_field31872;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field31872);

/**
* Creates a date input field.
*/
sablono.core.date_field31875 = (function() {
var date_field31875 = null;
var date_field31875__1 = (function (name__5157__auto__){
return date_field31875.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var date_field31875__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5157__auto__,value__5158__auto__);
});
date_field31875 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return date_field31875__1.call(this,name__5157__auto__);
case 2:
return date_field31875__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field31875.cljs$core$IFn$_invoke$arity$1 = date_field31875__1;
date_field31875.cljs$core$IFn$_invoke$arity$2 = date_field31875__2;
return date_field31875;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field31875);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field31878 = (function() {
var datetime_field31878 = null;
var datetime_field31878__1 = (function (name__5157__auto__){
return datetime_field31878.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var datetime_field31878__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5157__auto__,value__5158__auto__);
});
datetime_field31878 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return datetime_field31878__1.call(this,name__5157__auto__);
case 2:
return datetime_field31878__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field31878.cljs$core$IFn$_invoke$arity$1 = datetime_field31878__1;
datetime_field31878.cljs$core$IFn$_invoke$arity$2 = datetime_field31878__2;
return datetime_field31878;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field31878);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field31881 = (function() {
var datetime_local_field31881 = null;
var datetime_local_field31881__1 = (function (name__5157__auto__){
return datetime_local_field31881.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var datetime_local_field31881__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5157__auto__,value__5158__auto__);
});
datetime_local_field31881 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return datetime_local_field31881__1.call(this,name__5157__auto__);
case 2:
return datetime_local_field31881__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field31881.cljs$core$IFn$_invoke$arity$1 = datetime_local_field31881__1;
datetime_local_field31881.cljs$core$IFn$_invoke$arity$2 = datetime_local_field31881__2;
return datetime_local_field31881;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field31881);

/**
* Creates a email input field.
*/
sablono.core.email_field31884 = (function() {
var email_field31884 = null;
var email_field31884__1 = (function (name__5157__auto__){
return email_field31884.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var email_field31884__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5157__auto__,value__5158__auto__);
});
email_field31884 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return email_field31884__1.call(this,name__5157__auto__);
case 2:
return email_field31884__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field31884.cljs$core$IFn$_invoke$arity$1 = email_field31884__1;
email_field31884.cljs$core$IFn$_invoke$arity$2 = email_field31884__2;
return email_field31884;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field31884);

/**
* Creates a file input field.
*/
sablono.core.file_field31887 = (function() {
var file_field31887 = null;
var file_field31887__1 = (function (name__5157__auto__){
return file_field31887.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var file_field31887__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5157__auto__,value__5158__auto__);
});
file_field31887 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return file_field31887__1.call(this,name__5157__auto__);
case 2:
return file_field31887__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field31887.cljs$core$IFn$_invoke$arity$1 = file_field31887__1;
file_field31887.cljs$core$IFn$_invoke$arity$2 = file_field31887__2;
return file_field31887;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field31887);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field31890 = (function() {
var hidden_field31890 = null;
var hidden_field31890__1 = (function (name__5157__auto__){
return hidden_field31890.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var hidden_field31890__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5157__auto__,value__5158__auto__);
});
hidden_field31890 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return hidden_field31890__1.call(this,name__5157__auto__);
case 2:
return hidden_field31890__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field31890.cljs$core$IFn$_invoke$arity$1 = hidden_field31890__1;
hidden_field31890.cljs$core$IFn$_invoke$arity$2 = hidden_field31890__2;
return hidden_field31890;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field31890);

/**
* Creates a month input field.
*/
sablono.core.month_field31893 = (function() {
var month_field31893 = null;
var month_field31893__1 = (function (name__5157__auto__){
return month_field31893.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var month_field31893__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5157__auto__,value__5158__auto__);
});
month_field31893 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return month_field31893__1.call(this,name__5157__auto__);
case 2:
return month_field31893__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field31893.cljs$core$IFn$_invoke$arity$1 = month_field31893__1;
month_field31893.cljs$core$IFn$_invoke$arity$2 = month_field31893__2;
return month_field31893;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field31893);

/**
* Creates a number input field.
*/
sablono.core.number_field31896 = (function() {
var number_field31896 = null;
var number_field31896__1 = (function (name__5157__auto__){
return number_field31896.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var number_field31896__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5157__auto__,value__5158__auto__);
});
number_field31896 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return number_field31896__1.call(this,name__5157__auto__);
case 2:
return number_field31896__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field31896.cljs$core$IFn$_invoke$arity$1 = number_field31896__1;
number_field31896.cljs$core$IFn$_invoke$arity$2 = number_field31896__2;
return number_field31896;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field31896);

/**
* Creates a password input field.
*/
sablono.core.password_field31899 = (function() {
var password_field31899 = null;
var password_field31899__1 = (function (name__5157__auto__){
return password_field31899.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var password_field31899__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5157__auto__,value__5158__auto__);
});
password_field31899 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return password_field31899__1.call(this,name__5157__auto__);
case 2:
return password_field31899__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field31899.cljs$core$IFn$_invoke$arity$1 = password_field31899__1;
password_field31899.cljs$core$IFn$_invoke$arity$2 = password_field31899__2;
return password_field31899;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field31899);

/**
* Creates a range input field.
*/
sablono.core.range_field31902 = (function() {
var range_field31902 = null;
var range_field31902__1 = (function (name__5157__auto__){
return range_field31902.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var range_field31902__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5157__auto__,value__5158__auto__);
});
range_field31902 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return range_field31902__1.call(this,name__5157__auto__);
case 2:
return range_field31902__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field31902.cljs$core$IFn$_invoke$arity$1 = range_field31902__1;
range_field31902.cljs$core$IFn$_invoke$arity$2 = range_field31902__2;
return range_field31902;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field31902);

/**
* Creates a search input field.
*/
sablono.core.search_field31905 = (function() {
var search_field31905 = null;
var search_field31905__1 = (function (name__5157__auto__){
return search_field31905.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var search_field31905__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5157__auto__,value__5158__auto__);
});
search_field31905 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return search_field31905__1.call(this,name__5157__auto__);
case 2:
return search_field31905__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field31905.cljs$core$IFn$_invoke$arity$1 = search_field31905__1;
search_field31905.cljs$core$IFn$_invoke$arity$2 = search_field31905__2;
return search_field31905;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field31905);

/**
* Creates a tel input field.
*/
sablono.core.tel_field31908 = (function() {
var tel_field31908 = null;
var tel_field31908__1 = (function (name__5157__auto__){
return tel_field31908.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var tel_field31908__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5157__auto__,value__5158__auto__);
});
tel_field31908 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return tel_field31908__1.call(this,name__5157__auto__);
case 2:
return tel_field31908__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field31908.cljs$core$IFn$_invoke$arity$1 = tel_field31908__1;
tel_field31908.cljs$core$IFn$_invoke$arity$2 = tel_field31908__2;
return tel_field31908;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field31908);

/**
* Creates a text input field.
*/
sablono.core.text_field31911 = (function() {
var text_field31911 = null;
var text_field31911__1 = (function (name__5157__auto__){
return text_field31911.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var text_field31911__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5157__auto__,value__5158__auto__);
});
text_field31911 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return text_field31911__1.call(this,name__5157__auto__);
case 2:
return text_field31911__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field31911.cljs$core$IFn$_invoke$arity$1 = text_field31911__1;
text_field31911.cljs$core$IFn$_invoke$arity$2 = text_field31911__2;
return text_field31911;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field31911);

/**
* Creates a time input field.
*/
sablono.core.time_field31914 = (function() {
var time_field31914 = null;
var time_field31914__1 = (function (name__5157__auto__){
return time_field31914.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var time_field31914__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5157__auto__,value__5158__auto__);
});
time_field31914 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return time_field31914__1.call(this,name__5157__auto__);
case 2:
return time_field31914__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field31914.cljs$core$IFn$_invoke$arity$1 = time_field31914__1;
time_field31914.cljs$core$IFn$_invoke$arity$2 = time_field31914__2;
return time_field31914;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field31914);

/**
* Creates a url input field.
*/
sablono.core.url_field31917 = (function() {
var url_field31917 = null;
var url_field31917__1 = (function (name__5157__auto__){
return url_field31917.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var url_field31917__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5157__auto__,value__5158__auto__);
});
url_field31917 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return url_field31917__1.call(this,name__5157__auto__);
case 2:
return url_field31917__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field31917.cljs$core$IFn$_invoke$arity$1 = url_field31917__1;
url_field31917.cljs$core$IFn$_invoke$arity$2 = url_field31917__2;
return url_field31917;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field31917);

/**
* Creates a week input field.
*/
sablono.core.week_field31920 = (function() {
var week_field31920 = null;
var week_field31920__1 = (function (name__5157__auto__){
return week_field31920.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var week_field31920__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5157__auto__,value__5158__auto__);
});
week_field31920 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return week_field31920__1.call(this,name__5157__auto__);
case 2:
return week_field31920__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field31920.cljs$core$IFn$_invoke$arity$1 = week_field31920__1;
week_field31920.cljs$core$IFn$_invoke$arity$2 = week_field31920__2;
return week_field31920;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field31920);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box31923 = (function() {
var check_box31923 = null;
var check_box31923__1 = (function (name){
return check_box31923.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box31923__2 = (function (name,checked_QMARK_){
return check_box31923.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box31923__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$25,"checkbox",cljs.core.constant$keyword$37,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$23,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
check_box31923 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box31923__1.call(this,name);
case 2:
return check_box31923__2.call(this,name,checked_QMARK_);
case 3:
return check_box31923__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box31923.cljs$core$IFn$_invoke$arity$1 = check_box31923__1;
check_box31923.cljs$core$IFn$_invoke$arity$2 = check_box31923__2;
check_box31923.cljs$core$IFn$_invoke$arity$3 = check_box31923__3;
return check_box31923;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box31923);
/**
* Creates a radio button.
*/
sablono.core.radio_button31929 = (function() {
var radio_button31929 = null;
var radio_button31929__1 = (function (group){
return radio_button31929.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button31929__2 = (function (group,checked_QMARK_){
return radio_button31929.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button31929__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$25,"radio",cljs.core.constant$keyword$37,sablono.core.make_name(group),cljs.core.constant$keyword$119,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$23,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
radio_button31929 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button31929__1.call(this,group);
case 2:
return radio_button31929__2.call(this,group,checked_QMARK_);
case 3:
return radio_button31929__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button31929.cljs$core$IFn$_invoke$arity$1 = radio_button31929__1;
radio_button31929.cljs$core$IFn$_invoke$arity$2 = radio_button31929__2;
radio_button31929.cljs$core$IFn$_invoke$arity$3 = radio_button31929__3;
return radio_button31929;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button31929);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options31935 = (function() {
var select_options31935 = null;
var select_options31935__1 = (function (coll){
return select_options31935.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options31935__2 = (function (coll,selected){
var iter__4384__auto__ = (function iter__31956(s__31957){
return (new cljs.core.LazySeq(null,(function (){
var s__31957__$1 = s__31957;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31957__$1);
if(temp__4126__auto__){
var s__31957__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31957__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__31957__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__31959 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__31958 = (0);
while(true){
if((i__31958 < size__4383__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__31958);
cljs.core.chunk_append(b__31959,((cljs.core.sequential_QMARK_(x))?(function (){var vec__31964 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31964,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31964,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31964,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options31935.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__31966 = (i__31958 + (1));
i__31958 = G__31966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31959),iter__31956(cljs.core.chunk_rest(s__31957__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31959),null);
}
} else {
var x = cljs.core.first(s__31957__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__31965 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31965,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31965,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31965,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options31935.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__31956(cljs.core.rest(s__31957__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__(coll);
});
select_options31935 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options31935__1.call(this,coll);
case 2:
return select_options31935__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options31935.cljs$core$IFn$_invoke$arity$1 = select_options31935__1;
select_options31935.cljs$core$IFn$_invoke$arity$2 = select_options31935__2;
return select_options31935;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options31935);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down31967 = (function() {
var drop_down31967 = null;
var drop_down31967__2 = (function (name,options){
return drop_down31967.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down31967__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$37,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),(function (){var G__31973 = options;
var G__31974 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__31973,G__31974) : sablono.core.select_options.call(null,G__31973,G__31974));
})()], null);
});
drop_down31967 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down31967__2.call(this,name,options);
case 3:
return drop_down31967__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down31967.cljs$core$IFn$_invoke$arity$2 = drop_down31967__2;
drop_down31967.cljs$core$IFn$_invoke$arity$3 = drop_down31967__3;
return drop_down31967;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down31967);
/**
* Creates a text area element.
*/
sablono.core.text_area31975 = (function() {
var text_area31975 = null;
var text_area31975__1 = (function (name){
return text_area31975.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area31975__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$37,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$23,value], null)], null);
});
text_area31975 = function(name,value){
switch(arguments.length){
case 1:
return text_area31975__1.call(this,name);
case 2:
return text_area31975__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area31975.cljs$core$IFn$_invoke$arity$1 = text_area31975__1;
text_area31975.cljs$core$IFn$_invoke$arity$2 = text_area31975__2;
return text_area31975;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area31975);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label31978 = (function label31978(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label31978);
/**
* Creates a submit button.
*/
sablono.core.submit_button31979 = (function submit_button31979(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"submit",cljs.core.constant$keyword$23,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button31979);
/**
* Creates a form reset button.
*/
sablono.core.reset_button31980 = (function reset_button31980(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"reset",cljs.core.constant$keyword$23,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button31980);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to31981 = (function() { 
var form_to31981__delegate = function (p__31982,body){
var vec__31986 = p__31982;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31986,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31986,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,null,cljs.core.constant$keyword$140,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,method_str,cljs.core.constant$keyword$143,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"POST",cljs.core.constant$keyword$143,action_uri], null),(function (){var G__31987 = "_method";
var G__31988 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__31987,G__31988) : sablono.core.hidden_field.call(null,G__31987,G__31988));
})()], null)),body));
};
var form_to31981 = function (p__31982,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to31981__delegate.call(this,p__31982,body);};
form_to31981.cljs$lang$maxFixedArity = 1;
form_to31981.cljs$lang$applyTo = (function (arglist__31989){
var p__31982 = cljs.core.first(arglist__31989);
var body = cljs.core.rest(arglist__31989);
return form_to31981__delegate(p__31982,body);
});
form_to31981.cljs$core$IFn$_invoke$arity$variadic = form_to31981__delegate;
return form_to31981;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to31981);
