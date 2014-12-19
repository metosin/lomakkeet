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
var G__31807__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__31806 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31806,(0),null);
var body = cljs.core.nthnext(vec__31806,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__31807 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__31807__delegate.call(this,args);};
G__31807.cljs$lang$maxFixedArity = 0;
G__31807.cljs$lang$applyTo = (function (arglist__31808){
var args = cljs.core.seq(arglist__31808);
return G__31807__delegate(args);
});
G__31807.cljs$core$IFn$_invoke$arity$variadic = G__31807__delegate;
return G__31807;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4384__auto__ = (function iter__31815(s__31816){
return (new cljs.core.LazySeq(null,(function (){
var s__31816__$1 = s__31816;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31816__$1);
if(temp__4126__auto__){
var s__31816__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31816__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__31816__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__31818 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__31817 = (0);
while(true){
if((i__31817 < size__4383__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__31817);
cljs.core.chunk_append(b__31818,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31821 = (i__31817 + (1));
i__31817 = G__31821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31818),iter__31815(cljs.core.chunk_rest(s__31816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31818),null);
}
} else {
var args = cljs.core.first(s__31816__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__31815(cljs.core.rest(s__31816__$2)));
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
var iter__4384__auto__ = (function iter__31828(s__31829){
return (new cljs.core.LazySeq(null,(function (){
var s__31829__$1 = s__31829;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31829__$1);
if(temp__4126__auto__){
var s__31829__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31829__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__31829__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__31831 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__31830 = (0);
while(true){
if((i__31830 < size__4383__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__31830);
cljs.core.chunk_append(b__31831,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null));

var G__31834 = (i__31830 + (1));
i__31830 = G__31834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31831),iter__31828(cljs.core.chunk_rest(s__31829__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31831),null);
}
} else {
var style = cljs.core.first(s__31829__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null),iter__31828(cljs.core.rest(s__31829__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__31835){
var styles = cljs.core.seq(arglist__31835);
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
var G__31840 = (function (){return goog.dom.getDocument();
})().body;
var G__31841 = (function (){var G__31842 = "script";
var G__31843 = {"src": src};
return goog.dom.createDom(G__31842,G__31843);
})();
return goog.dom.appendChild(G__31840,G__31841);
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
sablono.core.link_to31844 = (function() { 
var link_to31844__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to31844 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to31844__delegate.call(this,url,content);};
link_to31844.cljs$lang$maxFixedArity = 1;
link_to31844.cljs$lang$applyTo = (function (arglist__31845){
var url = cljs.core.first(arglist__31845);
var content = cljs.core.rest(arglist__31845);
return link_to31844__delegate(url,content);
});
link_to31844.cljs$core$IFn$_invoke$arity$variadic = link_to31844__delegate;
return link_to31844;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to31844);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to31846 = (function() { 
var mail_to31846__delegate = function (e_mail,p__31847){
var vec__31849 = p__31847;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31849,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3628__auto__ = content;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to31846 = function (e_mail,var_args){
var p__31847 = null;
if (arguments.length > 1) {
  p__31847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to31846__delegate.call(this,e_mail,p__31847);};
mail_to31846.cljs$lang$maxFixedArity = 1;
mail_to31846.cljs$lang$applyTo = (function (arglist__31850){
var e_mail = cljs.core.first(arglist__31850);
var p__31847 = cljs.core.rest(arglist__31850);
return mail_to31846__delegate(e_mail,p__31847);
});
mail_to31846.cljs$core$IFn$_invoke$arity$variadic = mail_to31846__delegate;
return mail_to31846;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to31846);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list31851 = (function unordered_list31851(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4384__auto__ = (function iter__31858(s__31859){
return (new cljs.core.LazySeq(null,(function (){
var s__31859__$1 = s__31859;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31859__$1);
if(temp__4126__auto__){
var s__31859__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31859__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__31859__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__31861 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__31860 = (0);
while(true){
if((i__31860 < size__4383__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__31860);
cljs.core.chunk_append(b__31861,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__31864 = (i__31860 + (1));
i__31860 = G__31864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31861),iter__31858(cljs.core.chunk_rest(s__31859__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31861),null);
}
} else {
var x = cljs.core.first(s__31859__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__31858(cljs.core.rest(s__31859__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list31851);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list31865 = (function ordered_list31865(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__4384__auto__ = (function iter__31872(s__31873){
return (new cljs.core.LazySeq(null,(function (){
var s__31873__$1 = s__31873;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31873__$1);
if(temp__4126__auto__){
var s__31873__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31873__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__31873__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__31875 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__31874 = (0);
while(true){
if((i__31874 < size__4383__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__31874);
cljs.core.chunk_append(b__31875,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__31878 = (i__31874 + (1));
i__31874 = G__31878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31875),iter__31872(cljs.core.chunk_rest(s__31873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31875),null);
}
} else {
var x = cljs.core.first(s__31873__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__31872(cljs.core.rest(s__31873__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list31865);
/**
* Create an image element.
*/
sablono.core.image31879 = (function() {
var image31879 = null;
var image31879__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image31879__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$132,alt], null)], null);
});
image31879 = function(src,alt){
switch(arguments.length){
case 1:
return image31879__1.call(this,src);
case 2:
return image31879__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image31879.cljs$core$IFn$_invoke$arity$1 = image31879__1;
image31879.cljs$core$IFn$_invoke$arity$2 = image31879__2;
return image31879;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image31879);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__31880_SHARP_,p2__31881_SHARP_){
return [cljs.core.str(p1__31880_SHARP_),cljs.core.str("["),cljs.core.str(p2__31881_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__31882_SHARP_,p2__31883_SHARP_){
return [cljs.core.str(p1__31882_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31883_SHARP_)].join('');
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
sablono.core.color_field31884 = (function() {
var color_field31884 = null;
var color_field31884__1 = (function (name__5157__auto__){
return color_field31884.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var color_field31884__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5157__auto__,value__5158__auto__);
});
color_field31884 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return color_field31884__1.call(this,name__5157__auto__);
case 2:
return color_field31884__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field31884.cljs$core$IFn$_invoke$arity$1 = color_field31884__1;
color_field31884.cljs$core$IFn$_invoke$arity$2 = color_field31884__2;
return color_field31884;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field31884);

/**
* Creates a date input field.
*/
sablono.core.date_field31887 = (function() {
var date_field31887 = null;
var date_field31887__1 = (function (name__5157__auto__){
return date_field31887.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var date_field31887__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5157__auto__,value__5158__auto__);
});
date_field31887 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return date_field31887__1.call(this,name__5157__auto__);
case 2:
return date_field31887__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field31887.cljs$core$IFn$_invoke$arity$1 = date_field31887__1;
date_field31887.cljs$core$IFn$_invoke$arity$2 = date_field31887__2;
return date_field31887;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field31887);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field31890 = (function() {
var datetime_field31890 = null;
var datetime_field31890__1 = (function (name__5157__auto__){
return datetime_field31890.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var datetime_field31890__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5157__auto__,value__5158__auto__);
});
datetime_field31890 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return datetime_field31890__1.call(this,name__5157__auto__);
case 2:
return datetime_field31890__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field31890.cljs$core$IFn$_invoke$arity$1 = datetime_field31890__1;
datetime_field31890.cljs$core$IFn$_invoke$arity$2 = datetime_field31890__2;
return datetime_field31890;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field31890);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field31893 = (function() {
var datetime_local_field31893 = null;
var datetime_local_field31893__1 = (function (name__5157__auto__){
return datetime_local_field31893.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var datetime_local_field31893__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5157__auto__,value__5158__auto__);
});
datetime_local_field31893 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return datetime_local_field31893__1.call(this,name__5157__auto__);
case 2:
return datetime_local_field31893__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field31893.cljs$core$IFn$_invoke$arity$1 = datetime_local_field31893__1;
datetime_local_field31893.cljs$core$IFn$_invoke$arity$2 = datetime_local_field31893__2;
return datetime_local_field31893;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field31893);

/**
* Creates a email input field.
*/
sablono.core.email_field31896 = (function() {
var email_field31896 = null;
var email_field31896__1 = (function (name__5157__auto__){
return email_field31896.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var email_field31896__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5157__auto__,value__5158__auto__);
});
email_field31896 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return email_field31896__1.call(this,name__5157__auto__);
case 2:
return email_field31896__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field31896.cljs$core$IFn$_invoke$arity$1 = email_field31896__1;
email_field31896.cljs$core$IFn$_invoke$arity$2 = email_field31896__2;
return email_field31896;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field31896);

/**
* Creates a file input field.
*/
sablono.core.file_field31899 = (function() {
var file_field31899 = null;
var file_field31899__1 = (function (name__5157__auto__){
return file_field31899.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var file_field31899__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5157__auto__,value__5158__auto__);
});
file_field31899 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return file_field31899__1.call(this,name__5157__auto__);
case 2:
return file_field31899__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field31899.cljs$core$IFn$_invoke$arity$1 = file_field31899__1;
file_field31899.cljs$core$IFn$_invoke$arity$2 = file_field31899__2;
return file_field31899;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field31899);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field31902 = (function() {
var hidden_field31902 = null;
var hidden_field31902__1 = (function (name__5157__auto__){
return hidden_field31902.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var hidden_field31902__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5157__auto__,value__5158__auto__);
});
hidden_field31902 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return hidden_field31902__1.call(this,name__5157__auto__);
case 2:
return hidden_field31902__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field31902.cljs$core$IFn$_invoke$arity$1 = hidden_field31902__1;
hidden_field31902.cljs$core$IFn$_invoke$arity$2 = hidden_field31902__2;
return hidden_field31902;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field31902);

/**
* Creates a month input field.
*/
sablono.core.month_field31905 = (function() {
var month_field31905 = null;
var month_field31905__1 = (function (name__5157__auto__){
return month_field31905.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var month_field31905__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5157__auto__,value__5158__auto__);
});
month_field31905 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return month_field31905__1.call(this,name__5157__auto__);
case 2:
return month_field31905__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field31905.cljs$core$IFn$_invoke$arity$1 = month_field31905__1;
month_field31905.cljs$core$IFn$_invoke$arity$2 = month_field31905__2;
return month_field31905;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field31905);

/**
* Creates a number input field.
*/
sablono.core.number_field31908 = (function() {
var number_field31908 = null;
var number_field31908__1 = (function (name__5157__auto__){
return number_field31908.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var number_field31908__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5157__auto__,value__5158__auto__);
});
number_field31908 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return number_field31908__1.call(this,name__5157__auto__);
case 2:
return number_field31908__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field31908.cljs$core$IFn$_invoke$arity$1 = number_field31908__1;
number_field31908.cljs$core$IFn$_invoke$arity$2 = number_field31908__2;
return number_field31908;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field31908);

/**
* Creates a password input field.
*/
sablono.core.password_field31911 = (function() {
var password_field31911 = null;
var password_field31911__1 = (function (name__5157__auto__){
return password_field31911.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var password_field31911__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5157__auto__,value__5158__auto__);
});
password_field31911 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return password_field31911__1.call(this,name__5157__auto__);
case 2:
return password_field31911__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field31911.cljs$core$IFn$_invoke$arity$1 = password_field31911__1;
password_field31911.cljs$core$IFn$_invoke$arity$2 = password_field31911__2;
return password_field31911;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field31911);

/**
* Creates a range input field.
*/
sablono.core.range_field31914 = (function() {
var range_field31914 = null;
var range_field31914__1 = (function (name__5157__auto__){
return range_field31914.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var range_field31914__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5157__auto__,value__5158__auto__);
});
range_field31914 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return range_field31914__1.call(this,name__5157__auto__);
case 2:
return range_field31914__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field31914.cljs$core$IFn$_invoke$arity$1 = range_field31914__1;
range_field31914.cljs$core$IFn$_invoke$arity$2 = range_field31914__2;
return range_field31914;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field31914);

/**
* Creates a search input field.
*/
sablono.core.search_field31917 = (function() {
var search_field31917 = null;
var search_field31917__1 = (function (name__5157__auto__){
return search_field31917.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var search_field31917__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5157__auto__,value__5158__auto__);
});
search_field31917 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return search_field31917__1.call(this,name__5157__auto__);
case 2:
return search_field31917__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field31917.cljs$core$IFn$_invoke$arity$1 = search_field31917__1;
search_field31917.cljs$core$IFn$_invoke$arity$2 = search_field31917__2;
return search_field31917;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field31917);

/**
* Creates a tel input field.
*/
sablono.core.tel_field31920 = (function() {
var tel_field31920 = null;
var tel_field31920__1 = (function (name__5157__auto__){
return tel_field31920.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var tel_field31920__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5157__auto__,value__5158__auto__);
});
tel_field31920 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return tel_field31920__1.call(this,name__5157__auto__);
case 2:
return tel_field31920__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field31920.cljs$core$IFn$_invoke$arity$1 = tel_field31920__1;
tel_field31920.cljs$core$IFn$_invoke$arity$2 = tel_field31920__2;
return tel_field31920;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field31920);

/**
* Creates a text input field.
*/
sablono.core.text_field31923 = (function() {
var text_field31923 = null;
var text_field31923__1 = (function (name__5157__auto__){
return text_field31923.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var text_field31923__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5157__auto__,value__5158__auto__);
});
text_field31923 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return text_field31923__1.call(this,name__5157__auto__);
case 2:
return text_field31923__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field31923.cljs$core$IFn$_invoke$arity$1 = text_field31923__1;
text_field31923.cljs$core$IFn$_invoke$arity$2 = text_field31923__2;
return text_field31923;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field31923);

/**
* Creates a time input field.
*/
sablono.core.time_field31926 = (function() {
var time_field31926 = null;
var time_field31926__1 = (function (name__5157__auto__){
return time_field31926.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var time_field31926__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5157__auto__,value__5158__auto__);
});
time_field31926 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return time_field31926__1.call(this,name__5157__auto__);
case 2:
return time_field31926__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field31926.cljs$core$IFn$_invoke$arity$1 = time_field31926__1;
time_field31926.cljs$core$IFn$_invoke$arity$2 = time_field31926__2;
return time_field31926;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field31926);

/**
* Creates a url input field.
*/
sablono.core.url_field31929 = (function() {
var url_field31929 = null;
var url_field31929__1 = (function (name__5157__auto__){
return url_field31929.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var url_field31929__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5157__auto__,value__5158__auto__);
});
url_field31929 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return url_field31929__1.call(this,name__5157__auto__);
case 2:
return url_field31929__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field31929.cljs$core$IFn$_invoke$arity$1 = url_field31929__1;
url_field31929.cljs$core$IFn$_invoke$arity$2 = url_field31929__2;
return url_field31929;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field31929);

/**
* Creates a week input field.
*/
sablono.core.week_field31932 = (function() {
var week_field31932 = null;
var week_field31932__1 = (function (name__5157__auto__){
return week_field31932.cljs$core$IFn$_invoke$arity$2(name__5157__auto__,null);
});
var week_field31932__2 = (function (name__5157__auto__,value__5158__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5157__auto__,value__5158__auto__);
});
week_field31932 = function(name__5157__auto__,value__5158__auto__){
switch(arguments.length){
case 1:
return week_field31932__1.call(this,name__5157__auto__);
case 2:
return week_field31932__2.call(this,name__5157__auto__,value__5158__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field31932.cljs$core$IFn$_invoke$arity$1 = week_field31932__1;
week_field31932.cljs$core$IFn$_invoke$arity$2 = week_field31932__2;
return week_field31932;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field31932);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box31935 = (function() {
var check_box31935 = null;
var check_box31935__1 = (function (name){
return check_box31935.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box31935__2 = (function (name,checked_QMARK_){
return check_box31935.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box31935__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$25,"checkbox",cljs.core.constant$keyword$37,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$23,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
check_box31935 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box31935__1.call(this,name);
case 2:
return check_box31935__2.call(this,name,checked_QMARK_);
case 3:
return check_box31935__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box31935.cljs$core$IFn$_invoke$arity$1 = check_box31935__1;
check_box31935.cljs$core$IFn$_invoke$arity$2 = check_box31935__2;
check_box31935.cljs$core$IFn$_invoke$arity$3 = check_box31935__3;
return check_box31935;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box31935);
/**
* Creates a radio button.
*/
sablono.core.radio_button31941 = (function() {
var radio_button31941 = null;
var radio_button31941__1 = (function (group){
return radio_button31941.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button31941__2 = (function (group,checked_QMARK_){
return radio_button31941.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button31941__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$25,"radio",cljs.core.constant$keyword$37,sablono.core.make_name(group),cljs.core.constant$keyword$119,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$23,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
radio_button31941 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button31941__1.call(this,group);
case 2:
return radio_button31941__2.call(this,group,checked_QMARK_);
case 3:
return radio_button31941__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button31941.cljs$core$IFn$_invoke$arity$1 = radio_button31941__1;
radio_button31941.cljs$core$IFn$_invoke$arity$2 = radio_button31941__2;
radio_button31941.cljs$core$IFn$_invoke$arity$3 = radio_button31941__3;
return radio_button31941;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button31941);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options31947 = (function() {
var select_options31947 = null;
var select_options31947__1 = (function (coll){
return select_options31947.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options31947__2 = (function (coll,selected){
var iter__4384__auto__ = (function iter__31968(s__31969){
return (new cljs.core.LazySeq(null,(function (){
var s__31969__$1 = s__31969;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__31969__$1);
if(temp__4126__auto__){
var s__31969__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31969__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__31969__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__31971 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__31970 = (0);
while(true){
if((i__31970 < size__4383__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__31970);
cljs.core.chunk_append(b__31971,((cljs.core.sequential_QMARK_(x))?(function (){var vec__31976 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31976,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31976,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31976,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options31947.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__31978 = (i__31970 + (1));
i__31970 = G__31978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31971),iter__31968(cljs.core.chunk_rest(s__31969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31971),null);
}
} else {
var x = cljs.core.first(s__31969__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__31977 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31977,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31977,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31977,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options31947.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__31968(cljs.core.rest(s__31969__$2)));
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
select_options31947 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options31947__1.call(this,coll);
case 2:
return select_options31947__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options31947.cljs$core$IFn$_invoke$arity$1 = select_options31947__1;
select_options31947.cljs$core$IFn$_invoke$arity$2 = select_options31947__2;
return select_options31947;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options31947);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down31979 = (function() {
var drop_down31979 = null;
var drop_down31979__2 = (function (name,options){
return drop_down31979.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down31979__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$37,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),(function (){var G__31985 = options;
var G__31986 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__31985,G__31986) : sablono.core.select_options.call(null,G__31985,G__31986));
})()], null);
});
drop_down31979 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down31979__2.call(this,name,options);
case 3:
return drop_down31979__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down31979.cljs$core$IFn$_invoke$arity$2 = drop_down31979__2;
drop_down31979.cljs$core$IFn$_invoke$arity$3 = drop_down31979__3;
return drop_down31979;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down31979);
/**
* Creates a text area element.
*/
sablono.core.text_area31987 = (function() {
var text_area31987 = null;
var text_area31987__1 = (function (name){
return text_area31987.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area31987__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$37,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$23,value], null)], null);
});
text_area31987 = function(name,value){
switch(arguments.length){
case 1:
return text_area31987__1.call(this,name);
case 2:
return text_area31987__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area31987.cljs$core$IFn$_invoke$arity$1 = text_area31987__1;
text_area31987.cljs$core$IFn$_invoke$arity$2 = text_area31987__2;
return text_area31987;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area31987);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label31990 = (function label31990(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label31990);
/**
* Creates a submit button.
*/
sablono.core.submit_button31991 = (function submit_button31991(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"submit",cljs.core.constant$keyword$23,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button31991);
/**
* Creates a form reset button.
*/
sablono.core.reset_button31992 = (function reset_button31992(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"reset",cljs.core.constant$keyword$23,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button31992);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to31993 = (function() { 
var form_to31993__delegate = function (p__31994,body){
var vec__31998 = p__31994;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31998,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31998,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,null,cljs.core.constant$keyword$140,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,method_str,cljs.core.constant$keyword$143,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"POST",cljs.core.constant$keyword$143,action_uri], null),(function (){var G__31999 = "_method";
var G__32000 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__31999,G__32000) : sablono.core.hidden_field.call(null,G__31999,G__32000));
})()], null)),body));
};
var form_to31993 = function (p__31994,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to31993__delegate.call(this,p__31994,body);};
form_to31993.cljs$lang$maxFixedArity = 1;
form_to31993.cljs$lang$applyTo = (function (arglist__32001){
var p__31994 = cljs.core.first(arglist__32001);
var body = cljs.core.rest(arglist__32001);
return form_to31993__delegate(p__31994,body);
});
form_to31993.cljs$core$IFn$_invoke$arity$variadic = form_to31993__delegate;
return form_to31993;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to31993);
