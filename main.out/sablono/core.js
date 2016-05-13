// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__16183__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__16182 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__16182,(0),null);
var body = cljs.core.nthnext.call(null,vec__16182,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__16183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16184__i = 0, G__16184__a = new Array(arguments.length -  0);
while (G__16184__i < G__16184__a.length) {G__16184__a[G__16184__i] = arguments[G__16184__i + 0]; ++G__16184__i;}
  args = new cljs.core.IndexedSeq(G__16184__a,0);
} 
return G__16183__delegate.call(this,args);};
G__16183.cljs$lang$maxFixedArity = 0;
G__16183.cljs$lang$applyTo = (function (arglist__16185){
var args = cljs.core.seq(arglist__16185);
return G__16183__delegate(args);
});
G__16183.cljs$core$IFn$_invoke$arity$variadic = G__16183__delegate;
return G__16183;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5760__auto__ = (function sablono$core$update_arglists_$_iter__16190(s__16191){
return (new cljs.core.LazySeq(null,(function (){
var s__16191__$1 = s__16191;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16191__$1);
if(temp__4425__auto__){
var s__16191__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16191__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__16191__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__16193 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__16192 = (0);
while(true){
if((i__16192 < size__5759__auto__)){
var args = cljs.core._nth.call(null,c__5758__auto__,i__16192);
cljs.core.chunk_append.call(null,b__16193,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__16194 = (i__16192 + (1));
i__16192 = G__16194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16193),sablono$core$update_arglists_$_iter__16190.call(null,cljs.core.chunk_rest.call(null,s__16191__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16193),null);
}
} else {
var args = cljs.core.first.call(null,s__16191__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__16190.call(null,cljs.core.rest.call(null,s__16191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__6053__auto__ = [];
var len__6046__auto___16200 = arguments.length;
var i__6047__auto___16201 = (0);
while(true){
if((i__6047__auto___16201 < len__6046__auto___16200)){
args__6053__auto__.push((arguments[i__6047__auto___16201]));

var G__16202 = (i__6047__auto___16201 + (1));
i__6047__auto___16201 = G__16202;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5760__auto__ = (function sablono$core$iter__16196(s__16197){
return (new cljs.core.LazySeq(null,(function (){
var s__16197__$1 = s__16197;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16197__$1);
if(temp__4425__auto__){
var s__16197__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16197__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__16197__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__16199 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__16198 = (0);
while(true){
if((i__16198 < size__5759__auto__)){
var style = cljs.core._nth.call(null,c__5758__auto__,i__16198);
cljs.core.chunk_append.call(null,b__16199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__16203 = (i__16198 + (1));
i__16198 = G__16203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16199),sablono$core$iter__16196.call(null,cljs.core.chunk_rest.call(null,s__16197__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16199),null);
}
} else {
var style = cljs.core.first.call(null,s__16197__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__16196.call(null,cljs.core.rest.call(null,s__16197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq16195){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16195));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to16204 = (function sablono$core$link_to16204(var_args){
var args__6053__auto__ = [];
var len__6046__auto___16207 = arguments.length;
var i__6047__auto___16208 = (0);
while(true){
if((i__6047__auto___16208 < len__6046__auto___16207)){
args__6053__auto__.push((arguments[i__6047__auto___16208]));

var G__16209 = (i__6047__auto___16208 + (1));
i__6047__auto___16208 = G__16209;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return sablono.core.link_to16204.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

sablono.core.link_to16204.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to16204.cljs$lang$maxFixedArity = (1);

sablono.core.link_to16204.cljs$lang$applyTo = (function (seq16205){
var G__16206 = cljs.core.first.call(null,seq16205);
var seq16205__$1 = cljs.core.next.call(null,seq16205);
return sablono.core.link_to16204.cljs$core$IFn$_invoke$arity$variadic(G__16206,seq16205__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16204);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to16210 = (function sablono$core$mail_to16210(var_args){
var args__6053__auto__ = [];
var len__6046__auto___16215 = arguments.length;
var i__6047__auto___16216 = (0);
while(true){
if((i__6047__auto___16216 < len__6046__auto___16215)){
args__6053__auto__.push((arguments[i__6047__auto___16216]));

var G__16217 = (i__6047__auto___16216 + (1));
i__6047__auto___16216 = G__16217;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return sablono.core.mail_to16210.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

sablono.core.mail_to16210.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__16213){
var vec__16214 = p__16213;
var content = cljs.core.nth.call(null,vec__16214,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4988__auto__ = content;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to16210.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to16210.cljs$lang$applyTo = (function (seq16211){
var G__16212 = cljs.core.first.call(null,seq16211);
var seq16211__$1 = cljs.core.next.call(null,seq16211);
return sablono.core.mail_to16210.cljs$core$IFn$_invoke$arity$variadic(G__16212,seq16211__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16210);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16218 = (function sablono$core$unordered_list16218(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5760__auto__ = (function sablono$core$unordered_list16218_$_iter__16223(s__16224){
return (new cljs.core.LazySeq(null,(function (){
var s__16224__$1 = s__16224;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16224__$1);
if(temp__4425__auto__){
var s__16224__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16224__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__16224__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__16226 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__16225 = (0);
while(true){
if((i__16225 < size__5759__auto__)){
var x = cljs.core._nth.call(null,c__5758__auto__,i__16225);
cljs.core.chunk_append.call(null,b__16226,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16227 = (i__16225 + (1));
i__16225 = G__16227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16226),sablono$core$unordered_list16218_$_iter__16223.call(null,cljs.core.chunk_rest.call(null,s__16224__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16226),null);
}
} else {
var x = cljs.core.first.call(null,s__16224__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list16218_$_iter__16223.call(null,cljs.core.rest.call(null,s__16224__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16218);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16228 = (function sablono$core$ordered_list16228(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5760__auto__ = (function sablono$core$ordered_list16228_$_iter__16233(s__16234){
return (new cljs.core.LazySeq(null,(function (){
var s__16234__$1 = s__16234;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16234__$1);
if(temp__4425__auto__){
var s__16234__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16234__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__16234__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__16236 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__16235 = (0);
while(true){
if((i__16235 < size__5759__auto__)){
var x = cljs.core._nth.call(null,c__5758__auto__,i__16235);
cljs.core.chunk_append.call(null,b__16236,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16237 = (i__16235 + (1));
i__16235 = G__16237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16236),sablono$core$ordered_list16228_$_iter__16233.call(null,cljs.core.chunk_rest.call(null,s__16234__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16236),null);
}
} else {
var x = cljs.core.first.call(null,s__16234__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list16228_$_iter__16233.call(null,cljs.core.rest.call(null,s__16234__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16228);
/**
 * Create an image element.
 */
sablono.core.image16238 = (function sablono$core$image16238(var_args){
var args16239 = [];
var len__6046__auto___16242 = arguments.length;
var i__6047__auto___16243 = (0);
while(true){
if((i__6047__auto___16243 < len__6046__auto___16242)){
args16239.push((arguments[i__6047__auto___16243]));

var G__16244 = (i__6047__auto___16243 + (1));
i__6047__auto___16243 = G__16244;
continue;
} else {
}
break;
}

var G__16241 = args16239.length;
switch (G__16241) {
case 1:
return sablono.core.image16238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image16238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16239.length)].join('')));

}
});

sablono.core.image16238.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image16238.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image16238.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16238);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__16246_SHARP_,p2__16247_SHARP_){
return [cljs.core.str(p1__16246_SHARP_),cljs.core.str("["),cljs.core.str(p2__16247_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__16248_SHARP_,p2__16249_SHARP_){
return [cljs.core.str(p1__16248_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16249_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field16250 = (function sablono$core$color_field16250(var_args){
var args16251 = [];
var len__6046__auto___16318 = arguments.length;
var i__6047__auto___16319 = (0);
while(true){
if((i__6047__auto___16319 < len__6046__auto___16318)){
args16251.push((arguments[i__6047__auto___16319]));

var G__16320 = (i__6047__auto___16319 + (1));
i__6047__auto___16319 = G__16320;
continue;
} else {
}
break;
}

var G__16253 = args16251.length;
switch (G__16253) {
case 1:
return sablono.core.color_field16250.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field16250.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16251.length)].join('')));

}
});

sablono.core.color_field16250.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.color_field16250.call(null,name__16171__auto__,null);
});

sablono.core.color_field16250.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.color_field16250.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field16250);

/**
 * Creates a date input field.
 */
sablono.core.date_field16254 = (function sablono$core$date_field16254(var_args){
var args16255 = [];
var len__6046__auto___16322 = arguments.length;
var i__6047__auto___16323 = (0);
while(true){
if((i__6047__auto___16323 < len__6046__auto___16322)){
args16255.push((arguments[i__6047__auto___16323]));

var G__16324 = (i__6047__auto___16323 + (1));
i__6047__auto___16323 = G__16324;
continue;
} else {
}
break;
}

var G__16257 = args16255.length;
switch (G__16257) {
case 1:
return sablono.core.date_field16254.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field16254.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16255.length)].join('')));

}
});

sablono.core.date_field16254.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.date_field16254.call(null,name__16171__auto__,null);
});

sablono.core.date_field16254.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.date_field16254.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field16254);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field16258 = (function sablono$core$datetime_field16258(var_args){
var args16259 = [];
var len__6046__auto___16326 = arguments.length;
var i__6047__auto___16327 = (0);
while(true){
if((i__6047__auto___16327 < len__6046__auto___16326)){
args16259.push((arguments[i__6047__auto___16327]));

var G__16328 = (i__6047__auto___16327 + (1));
i__6047__auto___16327 = G__16328;
continue;
} else {
}
break;
}

var G__16261 = args16259.length;
switch (G__16261) {
case 1:
return sablono.core.datetime_field16258.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field16258.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16259.length)].join('')));

}
});

sablono.core.datetime_field16258.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.datetime_field16258.call(null,name__16171__auto__,null);
});

sablono.core.datetime_field16258.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.datetime_field16258.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field16258);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field16262 = (function sablono$core$datetime_local_field16262(var_args){
var args16263 = [];
var len__6046__auto___16330 = arguments.length;
var i__6047__auto___16331 = (0);
while(true){
if((i__6047__auto___16331 < len__6046__auto___16330)){
args16263.push((arguments[i__6047__auto___16331]));

var G__16332 = (i__6047__auto___16331 + (1));
i__6047__auto___16331 = G__16332;
continue;
} else {
}
break;
}

var G__16265 = args16263.length;
switch (G__16265) {
case 1:
return sablono.core.datetime_local_field16262.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field16262.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16263.length)].join('')));

}
});

sablono.core.datetime_local_field16262.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.datetime_local_field16262.call(null,name__16171__auto__,null);
});

sablono.core.datetime_local_field16262.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.datetime_local_field16262.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field16262);

/**
 * Creates a email input field.
 */
sablono.core.email_field16266 = (function sablono$core$email_field16266(var_args){
var args16267 = [];
var len__6046__auto___16334 = arguments.length;
var i__6047__auto___16335 = (0);
while(true){
if((i__6047__auto___16335 < len__6046__auto___16334)){
args16267.push((arguments[i__6047__auto___16335]));

var G__16336 = (i__6047__auto___16335 + (1));
i__6047__auto___16335 = G__16336;
continue;
} else {
}
break;
}

var G__16269 = args16267.length;
switch (G__16269) {
case 1:
return sablono.core.email_field16266.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field16266.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16267.length)].join('')));

}
});

sablono.core.email_field16266.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.email_field16266.call(null,name__16171__auto__,null);
});

sablono.core.email_field16266.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.email_field16266.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16266);

/**
 * Creates a file input field.
 */
sablono.core.file_field16270 = (function sablono$core$file_field16270(var_args){
var args16271 = [];
var len__6046__auto___16338 = arguments.length;
var i__6047__auto___16339 = (0);
while(true){
if((i__6047__auto___16339 < len__6046__auto___16338)){
args16271.push((arguments[i__6047__auto___16339]));

var G__16340 = (i__6047__auto___16339 + (1));
i__6047__auto___16339 = G__16340;
continue;
} else {
}
break;
}

var G__16273 = args16271.length;
switch (G__16273) {
case 1:
return sablono.core.file_field16270.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field16270.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16271.length)].join('')));

}
});

sablono.core.file_field16270.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.file_field16270.call(null,name__16171__auto__,null);
});

sablono.core.file_field16270.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.file_field16270.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field16270);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16274 = (function sablono$core$hidden_field16274(var_args){
var args16275 = [];
var len__6046__auto___16342 = arguments.length;
var i__6047__auto___16343 = (0);
while(true){
if((i__6047__auto___16343 < len__6046__auto___16342)){
args16275.push((arguments[i__6047__auto___16343]));

var G__16344 = (i__6047__auto___16343 + (1));
i__6047__auto___16343 = G__16344;
continue;
} else {
}
break;
}

var G__16277 = args16275.length;
switch (G__16277) {
case 1:
return sablono.core.hidden_field16274.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field16274.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16275.length)].join('')));

}
});

sablono.core.hidden_field16274.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.hidden_field16274.call(null,name__16171__auto__,null);
});

sablono.core.hidden_field16274.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.hidden_field16274.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16274);

/**
 * Creates a month input field.
 */
sablono.core.month_field16278 = (function sablono$core$month_field16278(var_args){
var args16279 = [];
var len__6046__auto___16346 = arguments.length;
var i__6047__auto___16347 = (0);
while(true){
if((i__6047__auto___16347 < len__6046__auto___16346)){
args16279.push((arguments[i__6047__auto___16347]));

var G__16348 = (i__6047__auto___16347 + (1));
i__6047__auto___16347 = G__16348;
continue;
} else {
}
break;
}

var G__16281 = args16279.length;
switch (G__16281) {
case 1:
return sablono.core.month_field16278.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field16278.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16279.length)].join('')));

}
});

sablono.core.month_field16278.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.month_field16278.call(null,name__16171__auto__,null);
});

sablono.core.month_field16278.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.month_field16278.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field16278);

/**
 * Creates a number input field.
 */
sablono.core.number_field16282 = (function sablono$core$number_field16282(var_args){
var args16283 = [];
var len__6046__auto___16350 = arguments.length;
var i__6047__auto___16351 = (0);
while(true){
if((i__6047__auto___16351 < len__6046__auto___16350)){
args16283.push((arguments[i__6047__auto___16351]));

var G__16352 = (i__6047__auto___16351 + (1));
i__6047__auto___16351 = G__16352;
continue;
} else {
}
break;
}

var G__16285 = args16283.length;
switch (G__16285) {
case 1:
return sablono.core.number_field16282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field16282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16283.length)].join('')));

}
});

sablono.core.number_field16282.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.number_field16282.call(null,name__16171__auto__,null);
});

sablono.core.number_field16282.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.number_field16282.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field16282);

/**
 * Creates a password input field.
 */
sablono.core.password_field16286 = (function sablono$core$password_field16286(var_args){
var args16287 = [];
var len__6046__auto___16354 = arguments.length;
var i__6047__auto___16355 = (0);
while(true){
if((i__6047__auto___16355 < len__6046__auto___16354)){
args16287.push((arguments[i__6047__auto___16355]));

var G__16356 = (i__6047__auto___16355 + (1));
i__6047__auto___16355 = G__16356;
continue;
} else {
}
break;
}

var G__16289 = args16287.length;
switch (G__16289) {
case 1:
return sablono.core.password_field16286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field16286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16287.length)].join('')));

}
});

sablono.core.password_field16286.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.password_field16286.call(null,name__16171__auto__,null);
});

sablono.core.password_field16286.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.password_field16286.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16286);

/**
 * Creates a range input field.
 */
sablono.core.range_field16290 = (function sablono$core$range_field16290(var_args){
var args16291 = [];
var len__6046__auto___16358 = arguments.length;
var i__6047__auto___16359 = (0);
while(true){
if((i__6047__auto___16359 < len__6046__auto___16358)){
args16291.push((arguments[i__6047__auto___16359]));

var G__16360 = (i__6047__auto___16359 + (1));
i__6047__auto___16359 = G__16360;
continue;
} else {
}
break;
}

var G__16293 = args16291.length;
switch (G__16293) {
case 1:
return sablono.core.range_field16290.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field16290.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16291.length)].join('')));

}
});

sablono.core.range_field16290.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.range_field16290.call(null,name__16171__auto__,null);
});

sablono.core.range_field16290.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.range_field16290.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field16290);

/**
 * Creates a search input field.
 */
sablono.core.search_field16294 = (function sablono$core$search_field16294(var_args){
var args16295 = [];
var len__6046__auto___16362 = arguments.length;
var i__6047__auto___16363 = (0);
while(true){
if((i__6047__auto___16363 < len__6046__auto___16362)){
args16295.push((arguments[i__6047__auto___16363]));

var G__16364 = (i__6047__auto___16363 + (1));
i__6047__auto___16363 = G__16364;
continue;
} else {
}
break;
}

var G__16297 = args16295.length;
switch (G__16297) {
case 1:
return sablono.core.search_field16294.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field16294.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16295.length)].join('')));

}
});

sablono.core.search_field16294.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.search_field16294.call(null,name__16171__auto__,null);
});

sablono.core.search_field16294.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.search_field16294.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field16294);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16298 = (function sablono$core$tel_field16298(var_args){
var args16299 = [];
var len__6046__auto___16366 = arguments.length;
var i__6047__auto___16367 = (0);
while(true){
if((i__6047__auto___16367 < len__6046__auto___16366)){
args16299.push((arguments[i__6047__auto___16367]));

var G__16368 = (i__6047__auto___16367 + (1));
i__6047__auto___16367 = G__16368;
continue;
} else {
}
break;
}

var G__16301 = args16299.length;
switch (G__16301) {
case 1:
return sablono.core.tel_field16298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field16298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16299.length)].join('')));

}
});

sablono.core.tel_field16298.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.tel_field16298.call(null,name__16171__auto__,null);
});

sablono.core.tel_field16298.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.tel_field16298.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field16298);

/**
 * Creates a text input field.
 */
sablono.core.text_field16302 = (function sablono$core$text_field16302(var_args){
var args16303 = [];
var len__6046__auto___16370 = arguments.length;
var i__6047__auto___16371 = (0);
while(true){
if((i__6047__auto___16371 < len__6046__auto___16370)){
args16303.push((arguments[i__6047__auto___16371]));

var G__16372 = (i__6047__auto___16371 + (1));
i__6047__auto___16371 = G__16372;
continue;
} else {
}
break;
}

var G__16305 = args16303.length;
switch (G__16305) {
case 1:
return sablono.core.text_field16302.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field16302.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16303.length)].join('')));

}
});

sablono.core.text_field16302.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.text_field16302.call(null,name__16171__auto__,null);
});

sablono.core.text_field16302.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.text_field16302.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16302);

/**
 * Creates a time input field.
 */
sablono.core.time_field16306 = (function sablono$core$time_field16306(var_args){
var args16307 = [];
var len__6046__auto___16374 = arguments.length;
var i__6047__auto___16375 = (0);
while(true){
if((i__6047__auto___16375 < len__6046__auto___16374)){
args16307.push((arguments[i__6047__auto___16375]));

var G__16376 = (i__6047__auto___16375 + (1));
i__6047__auto___16375 = G__16376;
continue;
} else {
}
break;
}

var G__16309 = args16307.length;
switch (G__16309) {
case 1:
return sablono.core.time_field16306.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field16306.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16307.length)].join('')));

}
});

sablono.core.time_field16306.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.time_field16306.call(null,name__16171__auto__,null);
});

sablono.core.time_field16306.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.time_field16306.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field16306);

/**
 * Creates a url input field.
 */
sablono.core.url_field16310 = (function sablono$core$url_field16310(var_args){
var args16311 = [];
var len__6046__auto___16378 = arguments.length;
var i__6047__auto___16379 = (0);
while(true){
if((i__6047__auto___16379 < len__6046__auto___16378)){
args16311.push((arguments[i__6047__auto___16379]));

var G__16380 = (i__6047__auto___16379 + (1));
i__6047__auto___16379 = G__16380;
continue;
} else {
}
break;
}

var G__16313 = args16311.length;
switch (G__16313) {
case 1:
return sablono.core.url_field16310.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field16310.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16311.length)].join('')));

}
});

sablono.core.url_field16310.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.url_field16310.call(null,name__16171__auto__,null);
});

sablono.core.url_field16310.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.url_field16310.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field16310);

/**
 * Creates a week input field.
 */
sablono.core.week_field16314 = (function sablono$core$week_field16314(var_args){
var args16315 = [];
var len__6046__auto___16382 = arguments.length;
var i__6047__auto___16383 = (0);
while(true){
if((i__6047__auto___16383 < len__6046__auto___16382)){
args16315.push((arguments[i__6047__auto___16383]));

var G__16384 = (i__6047__auto___16383 + (1));
i__6047__auto___16383 = G__16384;
continue;
} else {
}
break;
}

var G__16317 = args16315.length;
switch (G__16317) {
case 1:
return sablono.core.week_field16314.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field16314.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16315.length)].join('')));

}
});

sablono.core.week_field16314.cljs$core$IFn$_invoke$arity$1 = (function (name__16171__auto__){
return sablono.core.week_field16314.call(null,name__16171__auto__,null);
});

sablono.core.week_field16314.cljs$core$IFn$_invoke$arity$2 = (function (name__16171__auto__,value__16172__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__16171__auto__,value__16172__auto__);
});

sablono.core.week_field16314.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field16314);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box16386 = (function sablono$core$check_box16386(var_args){
var args16387 = [];
var len__6046__auto___16390 = arguments.length;
var i__6047__auto___16391 = (0);
while(true){
if((i__6047__auto___16391 < len__6046__auto___16390)){
args16387.push((arguments[i__6047__auto___16391]));

var G__16392 = (i__6047__auto___16391 + (1));
i__6047__auto___16391 = G__16392;
continue;
} else {
}
break;
}

var G__16389 = args16387.length;
switch (G__16389) {
case 1:
return sablono.core.check_box16386.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box16386.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box16386.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16387.length)].join('')));

}
});

sablono.core.check_box16386.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box16386.call(null,name,null);
});

sablono.core.check_box16386.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box16386.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box16386.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box16386.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16386);
/**
 * Creates a radio button.
 */
sablono.core.radio_button16394 = (function sablono$core$radio_button16394(var_args){
var args16395 = [];
var len__6046__auto___16398 = arguments.length;
var i__6047__auto___16399 = (0);
while(true){
if((i__6047__auto___16399 < len__6046__auto___16398)){
args16395.push((arguments[i__6047__auto___16399]));

var G__16400 = (i__6047__auto___16399 + (1));
i__6047__auto___16399 = G__16400;
continue;
} else {
}
break;
}

var G__16397 = args16395.length;
switch (G__16397) {
case 1:
return sablono.core.radio_button16394.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button16394.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button16394.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16395.length)].join('')));

}
});

sablono.core.radio_button16394.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button16394.call(null,group,null);
});

sablono.core.radio_button16394.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button16394.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button16394.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button16394.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16394);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options16402 = (function sablono$core$select_options16402(coll){
var iter__5760__auto__ = (function sablono$core$select_options16402_$_iter__16411(s__16412){
return (new cljs.core.LazySeq(null,(function (){
var s__16412__$1 = s__16412;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16412__$1);
if(temp__4425__auto__){
var s__16412__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16412__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__16412__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__16414 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__16413 = (0);
while(true){
if((i__16413 < size__5759__auto__)){
var x = cljs.core._nth.call(null,c__5758__auto__,i__16413);
cljs.core.chunk_append.call(null,b__16414,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16417 = x;
var text = cljs.core.nth.call(null,vec__16417,(0),null);
var val = cljs.core.nth.call(null,vec__16417,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__16417,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options16402.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__16419 = (i__16413 + (1));
i__16413 = G__16419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16414),sablono$core$select_options16402_$_iter__16411.call(null,cljs.core.chunk_rest.call(null,s__16412__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16414),null);
}
} else {
var x = cljs.core.first.call(null,s__16412__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16418 = x;
var text = cljs.core.nth.call(null,vec__16418,(0),null);
var val = cljs.core.nth.call(null,vec__16418,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__16418,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options16402.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options16402_$_iter__16411.call(null,cljs.core.rest.call(null,s__16412__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16402);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down16420 = (function sablono$core$drop_down16420(var_args){
var args16421 = [];
var len__6046__auto___16424 = arguments.length;
var i__6047__auto___16425 = (0);
while(true){
if((i__6047__auto___16425 < len__6046__auto___16424)){
args16421.push((arguments[i__6047__auto___16425]));

var G__16426 = (i__6047__auto___16425 + (1));
i__6047__auto___16425 = G__16426;
continue;
} else {
}
break;
}

var G__16423 = args16421.length;
switch (G__16423) {
case 2:
return sablono.core.drop_down16420.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down16420.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16421.length)].join('')));

}
});

sablono.core.drop_down16420.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down16420.call(null,name,options,null);
});

sablono.core.drop_down16420.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down16420.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16420);
/**
 * Creates a text area element.
 */
sablono.core.text_area16428 = (function sablono$core$text_area16428(var_args){
var args16429 = [];
var len__6046__auto___16432 = arguments.length;
var i__6047__auto___16433 = (0);
while(true){
if((i__6047__auto___16433 < len__6046__auto___16432)){
args16429.push((arguments[i__6047__auto___16433]));

var G__16434 = (i__6047__auto___16433 + (1));
i__6047__auto___16433 = G__16434;
continue;
} else {
}
break;
}

var G__16431 = args16429.length;
switch (G__16431) {
case 1:
return sablono.core.text_area16428.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area16428.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16429.length)].join('')));

}
});

sablono.core.text_area16428.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area16428.call(null,name,null);
});

sablono.core.text_area16428.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area16428.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16428);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label16436 = (function sablono$core$label16436(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16436);
/**
 * Creates a submit button.
 */
sablono.core.submit_button16437 = (function sablono$core$submit_button16437(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16437);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button16438 = (function sablono$core$reset_button16438(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16438);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to16439 = (function sablono$core$form_to16439(var_args){
var args__6053__auto__ = [];
var len__6046__auto___16444 = arguments.length;
var i__6047__auto___16445 = (0);
while(true){
if((i__6047__auto___16445 < len__6046__auto___16444)){
args__6053__auto__.push((arguments[i__6047__auto___16445]));

var G__16446 = (i__6047__auto___16445 + (1));
i__6047__auto___16445 = G__16446;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return sablono.core.form_to16439.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

sablono.core.form_to16439.cljs$core$IFn$_invoke$arity$variadic = (function (p__16442,body){
var vec__16443 = p__16442;
var method = cljs.core.nth.call(null,vec__16443,(0),null);
var action = cljs.core.nth.call(null,vec__16443,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to16439.cljs$lang$maxFixedArity = (1);

sablono.core.form_to16439.cljs$lang$applyTo = (function (seq16440){
var G__16441 = cljs.core.first.call(null,seq16440);
var seq16440__$1 = cljs.core.next.call(null,seq16440);
return sablono.core.form_to16439.cljs$core$IFn$_invoke$arity$variadic(G__16441,seq16440__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16439);

//# sourceMappingURL=core.js.map