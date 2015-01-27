// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lomakkeet.autocomplete');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('lomakkeet.fields');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('om.core');
/**
* @param {...*} var_args
*/
lomakkeet.autocomplete.closable_will_mount = (function() { 
var closable_will_mount__delegate = function (owner,p__23009){
var vec__23018 = p__23009;
var close_cb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23018,(0),null);
var click_handler = ((function (vec__23018,close_cb){
return (function (e){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$210,false);

if(cljs.core.truth_(close_cb)){
return (close_cb.cljs$core$IFn$_invoke$arity$0 ? close_cb.cljs$core$IFn$_invoke$arity$0() : close_cb.call(null));
} else {
return null;
}
});})(vec__23018,close_cb))
;
var key_handler = ((function (click_handler,vec__23018,close_cb){
return (function (e){
var G__23019 = e.keyCode;
switch (G__23019) {
case (27):
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$210,false);

if(cljs.core.truth_(close_cb)){
return (close_cb.cljs$core$IFn$_invoke$arity$0 ? close_cb.cljs$core$IFn$_invoke$arity$0() : close_cb.call(null));
} else {
return null;
}

break;
default:
return null;

}
});})(click_handler,vec__23018,close_cb))
;
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$211,click_handler);

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$212,key_handler);

var G__23020_23027 = window;
var G__23021_23028 = goog.events.EventType.CLICK;
var G__23022_23029 = click_handler;
goog.events.listen(G__23020_23027,G__23021_23028,G__23022_23029);

var G__23023 = window;
var G__23024 = goog.events.EventType.KEYUP;
var G__23025 = key_handler;
return goog.events.listen(G__23023,G__23024,G__23025);
};
var closable_will_mount = function (owner,var_args){
var p__23009 = null;
if (arguments.length > 1) {
var G__23030__i = 0, G__23030__a = new Array(arguments.length -  1);
while (G__23030__i < G__23030__a.length) {G__23030__a[G__23030__i] = arguments[G__23030__i + 1]; ++G__23030__i;}
  p__23009 = new cljs.core.IndexedSeq(G__23030__a,0);
} 
return closable_will_mount__delegate.call(this,owner,p__23009);};
closable_will_mount.cljs$lang$maxFixedArity = 1;
closable_will_mount.cljs$lang$applyTo = (function (arglist__23031){
var owner = cljs.core.first(arglist__23031);
var p__23009 = cljs.core.rest(arglist__23031);
return closable_will_mount__delegate(owner,p__23009);
});
closable_will_mount.cljs$core$IFn$_invoke$arity$variadic = closable_will_mount__delegate;
return closable_will_mount;
})()
;
lomakkeet.autocomplete.closable_will_unmount = (function closable_will_unmount(owner){
var G__23038_23044 = window;
var G__23039_23045 = goog.events.EventType.CLICK;
var G__23040_23046 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$211);
goog.events.listen(G__23038_23044,G__23039_23045,G__23040_23046);

var G__23041 = window;
var G__23042 = goog.events.EventType.KEYUP;
var G__23043 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$212);
return goog.events.listen(G__23041,G__23042,G__23043);
});
lomakkeet.autocomplete.create_matcher = (function create_matcher(fields){
return (function (item,term){
return cljs.core.some((function (field){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,field).toLowerCase().indexOf(term),(-1));
}),fields);
});
});
lomakkeet.autocomplete.highlight_match = (function highlight_match(text,query){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (output,term){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,el){
if(typeof el === 'string'){
var temp__4124__auto__ = el.match((new RegExp([cljs.core.str("^(.*)("),cljs.core.str(term),cljs.core.str(")(.*)$")].join(''),"i")));
if(cljs.core.truth_(temp__4124__auto__)){
var vec__23048 = temp__4124__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23048,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23048,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23048,(2),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23048,(3),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,a,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$213,b], null),c], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,el);
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,el);
}
}),cljs.core.PersistentVector.EMPTY,output);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,text], null),query);
});
lomakkeet.autocomplete.query_match_QMARK_ = (function query_match_QMARK_(term_match_QMARK_,v,query){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(term_match_QMARK_,v),query);
});
lomakkeet.autocomplete.matches = (function matches(term_match_QMARK_,v,query){
var m = cljs.core.group_by(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(term_match_QMARK_,v),query);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,true),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,false)], null);
});
lomakkeet.autocomplete.normalize_search = (function normalize_search(search){
var G__23050 = search;
var G__23050__$1 = (((G__23050 == null))?null:G__23050.toLowerCase());
var G__23050__$2 = (((G__23050__$1 == null))?null:G__23050__$1.split(/ /));
var G__23050__$3 = (((G__23050__$2 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,G__23050__$2));
return G__23050__$3;
});
lomakkeet.autocomplete.create_list_renderer = (function create_list_renderer(p__23051){
var map__23091 = p__23051;
var map__23091__$1 = ((cljs.core.seq_QMARK_(map__23091))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23091):map__23091);
var opts = map__23091__$1;
var term_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23091__$1,cljs.core.constant$keyword$214);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23091__$1,cljs.core.constant$keyword$215);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23091__$1,cljs.core.constant$keyword$216);
if(cljs.core.ifn_QMARK_(item__GT_key)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"item->key","item->key",-1747057492,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(item__GT_text)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"item->text","item->text",-1739995286,null))], 0)))].join('')));
}

var query_match_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.query_match_QMARK_,term_match_QMARK_);
return ((function (query_match_QMARK_,map__23091,map__23091__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (coll,query,cb){
var iter__4514__auto__ = ((function (query_match_QMARK_,map__23091,map__23091__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function iter__23092(s__23093){
return (new cljs.core.LazySeq(null,((function (query_match_QMARK_,map__23091,map__23091__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var s__23093__$1 = s__23093;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23093__$1);
if(temp__4126__auto__){
var s__23093__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23093__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__23093__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__23095 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__23094 = (0);
while(true){
if((i__23094 < size__4513__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__23094);
if(cljs.core.truth_((function (){var or__3758__auto__ = cljs.core.not(query);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var G__23116 = item;
var G__23117 = query;
return (query_match_QMARK_.cljs$core$IFn$_invoke$arity$2 ? query_match_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23116,G__23117) : query_match_QMARK_.call(null,G__23116,G__23117));
}
})())){
var text = (function (){var G__23118 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__23118) : item__GT_text.call(null,G__23118));
})();
cljs.core.chunk_append(b__23095,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$217,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$49,(function (){var G__23119 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23119) : item__GT_key.call(null,G__23119));
})(),cljs.core.constant$keyword$204,((function (i__23094,s__23093__$1,text,item,c__4512__auto__,size__4513__auto__,b__23095,s__23093__$2,temp__4126__auto__,query_match_QMARK_,map__23091,map__23091__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var G__23120 = (function (){var G__23121 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23121) : item__GT_key.call(null,G__23121));
})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23120) : cb.call(null,G__23120));
});})(i__23094,s__23093__$1,text,item,c__4512__auto__,size__4513__auto__,b__23095,s__23093__$2,temp__4126__auto__,query_match_QMARK_,map__23091,map__23091__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,cljs.core.constant$keyword$218,true], null),(cljs.core.truth_(query)?lomakkeet.autocomplete.highlight_match(text,query):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,text], null))], null));

var G__23130 = (i__23094 + (1));
i__23094 = G__23130;
continue;
} else {
var G__23131 = (i__23094 + (1));
i__23094 = G__23131;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23095),iter__23092(cljs.core.chunk_rest(s__23093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23095),null);
}
} else {
var item = cljs.core.first(s__23093__$2);
if(cljs.core.truth_((function (){var or__3758__auto__ = cljs.core.not(query);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var G__23124 = item;
var G__23125 = query;
return (query_match_QMARK_.cljs$core$IFn$_invoke$arity$2 ? query_match_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23124,G__23125) : query_match_QMARK_.call(null,G__23124,G__23125));
}
})())){
var text = (function (){var G__23126 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__23126) : item__GT_text.call(null,G__23126));
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$217,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$49,(function (){var G__23127 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23127) : item__GT_key.call(null,G__23127));
})(),cljs.core.constant$keyword$204,((function (s__23093__$1,text,item,s__23093__$2,temp__4126__auto__,query_match_QMARK_,map__23091,map__23091__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var G__23128 = (function (){var G__23129 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23129) : item__GT_key.call(null,G__23129));
})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23128) : cb.call(null,G__23128));
});})(s__23093__$1,text,item,s__23093__$2,temp__4126__auto__,query_match_QMARK_,map__23091,map__23091__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,cljs.core.constant$keyword$218,true], null),(cljs.core.truth_(query)?lomakkeet.autocomplete.highlight_match(text,query):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,text], null))], null),iter__23092(cljs.core.rest(s__23093__$2)));
} else {
var G__23132 = cljs.core.rest(s__23093__$2);
s__23093__$1 = G__23132;
continue;
}
}
} else {
return null;
}
break;
}
});})(query_match_QMARK_,map__23091,map__23091__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,null,null));
});})(query_match_QMARK_,map__23091,map__23091__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
;
return iter__4514__auto__(coll);
});
;})(query_match_QMARK_,map__23091,map__23091__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
});

var ufv___23194 = schema.utils.use_fn_validation;
var output_schema23135_23195 = schema.core.Any;
var input_schema23136_23196 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23137_23197 = schema.core.checker(input_schema23136_23196);
var output_checker23138_23198 = schema.core.checker(output_schema23135_23195);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks renderer value->text loading-el load-items], :or {value->text identity, loading-el [:div "Loading..."]}, :as opts}]
*/
lomakkeet.autocomplete.autocomplete_STAR_ = ((function (ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function autocomplete_STAR_(G__23139,G__23140,G__23141){
var validate__10718__auto__ = ufv___23194.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___23199 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23139,G__23140,G__23141], null);
var temp__4126__auto___23200 = (function (){var G__23168 = args__10719__auto___23199;
return (input_checker23137_23197.cljs$core$IFn$_invoke$arity$1 ? input_checker23137_23197.cljs$core$IFn$_invoke$arity$1(G__23168) : input_checker23137_23197.call(null,G__23168));
})();
if(cljs.core.truth_(temp__4126__auto___23200)){
var error__10720__auto___23201 = temp__4126__auto___23200;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"autocomplete*","autocomplete*",1280941171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23201], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23201,cljs.core.constant$keyword$23,args__10719__auto___23199,cljs.core.constant$keyword$24,input_schema23136_23196,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var G__23171 = G__23139;
var map__23173 = G__23171;
var map__23173__$1 = ((cljs.core.seq_QMARK_(map__23173))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23173):map__23173);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173__$1,cljs.core.constant$keyword$23);
var owner = G__23140;
var G__23172 = G__23141;
var map__23174 = G__23172;
var map__23174__$1 = ((cljs.core.seq_QMARK_(map__23174))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23174):map__23174);
var opts = map__23174__$1;
var load_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23174__$1,cljs.core.constant$keyword$219);
var loading_el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23174__$1,cljs.core.constant$keyword$220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$217,"Loading..."], null));
var value__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23174__$1,cljs.core.constant$keyword$221,cljs.core.identity);
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23174__$1,cljs.core.constant$keyword$222);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23174__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23174__$1,cljs.core.constant$keyword$147);
var G__23171__$1 = G__23171;
var owner__$1 = owner;
var G__23172__$1 = G__23172;
while(true){
var map__23175 = G__23171__$1;
var map__23175__$1 = ((cljs.core.seq_QMARK_(map__23175))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23175):map__23175);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__23176 = G__23172__$1;
var map__23176__$1 = ((cljs.core.seq_QMARK_(map__23176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23176):map__23176);
var opts__$1 = map__23176__$1;
var load_items__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23176__$1,cljs.core.constant$keyword$219);
var loading_el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23176__$1,cljs.core.constant$keyword$220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$217,"Loading..."], null));
var value__GT_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23176__$1,cljs.core.constant$keyword$221,cljs.core.identity);
var renderer__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23176__$1,cljs.core.constant$keyword$222);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23176__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23176__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.autocomplete.t23177 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.autocomplete.t23177 = (function (map__23176,map__23175,owner,G__23139,load_items,output_checker23138,G__23140,input_checker23137,G__23141,map__23173,ks,output_schema23135,G__23172,input_schema23136,value,autocomplete_STAR_,value__GT_text,ch,renderer,opts,loading_el,map__23174,ufv__,G__23171,validate__10718__auto__,meta23178){
this.map__23176 = map__23176;
this.map__23175 = map__23175;
this.owner = owner;
this.G__23139 = G__23139;
this.load_items = load_items;
this.output_checker23138 = output_checker23138;
this.G__23140 = G__23140;
this.input_checker23137 = input_checker23137;
this.G__23141 = G__23141;
this.map__23173 = map__23173;
this.ks = ks;
this.output_schema23135 = output_schema23135;
this.G__23172 = G__23172;
this.input_schema23136 = input_schema23136;
this.value = value;
this.autocomplete_STAR_ = autocomplete_STAR_;
this.value__GT_text = value__GT_text;
this.ch = ch;
this.renderer = renderer;
this.opts = opts;
this.loading_el = loading_el;
this.map__23174 = map__23174;
this.ufv__ = ufv__;
this.G__23171 = G__23171;
this.validate__10718__auto__ = validate__10718__auto__;
this.meta23178 = meta23178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.autocomplete.t23177.prototype.om$core$IDisplayName$ = true;

lomakkeet.autocomplete.t23177.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (_){
var self__ = this;
var ___$1 = this;
return "autocomplete*";
});})(map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
;

lomakkeet.autocomplete.t23177.prototype.om$core$IRenderState$ = true;

lomakkeet.autocomplete.t23177.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (_,p__23180){
var self__ = this;
var map__23181 = p__23180;
var map__23181__$1 = ((cljs.core.seq_QMARK_(map__23181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23181):map__23181);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23181__$1,cljs.core.constant$keyword$223);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23181__$1,cljs.core.constant$keyword$224);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23181__$1,cljs.core.constant$keyword$210);
var ___$1 = this;
var G__23182 = {"className": "selectize-control single"};
var G__23183 = (function (){var G__23185 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selectize-input",(function (){var G__23188 = "";
var G__23188__$1 = (cljs.core.truth_(open_QMARK_)?[cljs.core.str(G__23188),cljs.core.str(" input-active dropdown-active")].join(''):G__23188);
return G__23188__$1;
})()], null)), "onFocus": ((function (G__23182,___$1,map__23181,map__23181__$1,items,search,open_QMARK_,map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (e){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$210,true);

if(cljs.core.not(search)){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$224,"");
} else {
return null;
}
});})(G__23182,___$1,map__23181,map__23181__$1,items,search,open_QMARK_,map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
, "onClick": ((function (G__23182,___$1,map__23181,map__23181__$1,items,search,open_QMARK_,map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (e){
return e.stopPropagation();
});})(G__23182,___$1,map__23181,map__23181__$1,items,search,open_QMARK_,map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
, "onChange": ((function (G__23182,___$1,map__23181,map__23181__$1,items,search,open_QMARK_,map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (p1__23133_SHARP_){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$224,p1__23133_SHARP_.target.value);
});})(G__23182,___$1,map__23181,map__23181__$1,items,search,open_QMARK_,map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
, "value": (cljs.core.truth_(search)?search:((cljs.core.seq(self__.value))?(function (){var G__23187 = self__.value;
return (self__.value__GT_text.cljs$core$IFn$_invoke$arity$1 ? self__.value__GT_text.cljs$core$IFn$_invoke$arity$1(G__23187) : self__.value__GT_text.call(null,G__23187));
})():""
)), "autoComplete": "off", "onKeyUp": ((function (G__23182,___$1,map__23181,map__23181__$1,items,search,open_QMARK_,map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (e){
var G__23186 = e.key;
switch (G__23186) {
default:
return null;

}
});})(G__23182,___$1,map__23181,map__23181__$1,items,search,open_QMARK_,map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__23185) : sablono.interpreter.input.call(null,G__23185));
})();
var G__23184 = sablono.interpreter.interpret((cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$226,(cljs.core.truth_(items)?(function (){var G__23189 = items;
var G__23190 = lomakkeet.autocomplete.normalize_search(search);
var G__23191 = ((function (G__23189,G__23190,G__23182,G__23183,___$1,map__23181,map__23181__$1,items,search,open_QMARK_,map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (id){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$23,id], null));

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$210,false);
});})(G__23189,G__23190,G__23182,G__23183,___$1,map__23181,map__23181__$1,items,search,open_QMARK_,map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
;
return (self__.renderer.cljs$core$IFn$_invoke$arity$3 ? self__.renderer.cljs$core$IFn$_invoke$arity$3(G__23189,G__23190,G__23191) : self__.renderer.call(null,G__23189,G__23190,G__23191));
})():self__.loading_el)], null)], null):null));
return React.DOM.div(G__23182,G__23183,G__23184);
});})(map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
;

lomakkeet.autocomplete.t23177.prototype.om$core$IWillUnmount$ = true;

lomakkeet.autocomplete.t23177.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (_){
var self__ = this;
var ___$1 = this;
return lomakkeet.autocomplete.closable_will_unmount(self__.owner);
});})(map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
;

lomakkeet.autocomplete.t23177.prototype.om$core$IWillMount$ = true;

lomakkeet.autocomplete.t23177.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23192_23203 = self__.owner;
(self__.load_items.cljs$core$IFn$_invoke$arity$1 ? self__.load_items.cljs$core$IFn$_invoke$arity$1(G__23192_23203) : self__.load_items.call(null,G__23192_23203));

return lomakkeet.autocomplete.closable_will_mount.cljs$core$IFn$_invoke$arity$variadic(self__.owner,cljs.core.array_seq([((function (___$1,map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$224,null);
});})(___$1,map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
], 0));
});})(map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
;

lomakkeet.autocomplete.t23177.prototype.om$core$IInitState$ = true;

lomakkeet.autocomplete.t23177.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$210,false,cljs.core.constant$keyword$224,null], null);
});})(map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
;

lomakkeet.autocomplete.t23177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (_23179){
var self__ = this;
var _23179__$1 = this;
return self__.meta23178;
});})(map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
;

lomakkeet.autocomplete.t23177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (_23179,meta23178__$1){
var self__ = this;
var _23179__$1 = this;
return (new lomakkeet.autocomplete.t23177(self__.map__23176,self__.map__23175,self__.owner,self__.G__23139,self__.load_items,self__.output_checker23138,self__.G__23140,self__.input_checker23137,self__.G__23141,self__.map__23173,self__.ks,self__.output_schema23135,self__.G__23172,self__.input_schema23136,self__.value,self__.autocomplete_STAR_,self__.value__GT_text,self__.ch,self__.renderer,self__.opts,self__.loading_el,self__.map__23174,self__.ufv__,self__.G__23171,self__.validate__10718__auto__,meta23178__$1));
});})(map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
;

lomakkeet.autocomplete.t23177.cljs$lang$type = true;

lomakkeet.autocomplete.t23177.cljs$lang$ctorStr = "lomakkeet.autocomplete/t23177";

lomakkeet.autocomplete.t23177.cljs$lang$ctorPrWriter = ((function (map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.autocomplete/t23177");
});})(map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
;

lomakkeet.autocomplete.__GT_t23177 = ((function (map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198){
return (function __GT_t23177(map__23176__$2,map__23175__$2,owner__$3,G__23139__$1,load_items__$2,output_checker23138__$1,G__23140__$1,input_checker23137__$1,G__23141__$1,map__23173__$2,ks__$2,output_schema23135__$1,G__23172__$2,input_schema23136__$1,value__$2,autocomplete_STAR___$1,value__GT_text__$2,ch__$2,renderer__$2,opts__$2,loading_el__$2,map__23174__$2,ufv____$1,G__23171__$2,validate__10718__auto____$1,meta23178){
return (new lomakkeet.autocomplete.t23177(map__23176__$2,map__23175__$2,owner__$3,G__23139__$1,load_items__$2,output_checker23138__$1,G__23140__$1,input_checker23137__$1,G__23141__$1,map__23173__$2,ks__$2,output_schema23135__$1,G__23172__$2,input_schema23136__$1,value__$2,autocomplete_STAR___$1,value__GT_text__$2,ch__$2,renderer__$2,opts__$2,loading_el__$2,map__23174__$2,ufv____$1,G__23171__$2,validate__10718__auto____$1,meta23178));
});})(map__23175,map__23175__$1,value__$1,owner__$2,map__23176,map__23176__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23171,map__23173,map__23173__$1,value,owner,G__23172,map__23174,map__23174__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__10718__auto__,ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
;

}

return (new lomakkeet.autocomplete.t23177(map__23176__$1,map__23175__$1,owner__$2,G__23139,load_items__$1,output_checker23138_23198,G__23140,input_checker23137_23197,G__23141,map__23173__$1,ks__$1,output_schema23135_23195,G__23172__$1,input_schema23136_23196,value__$1,autocomplete_STAR_,value__GT_text__$1,ch__$1,renderer__$1,opts__$1,loading_el__$1,map__23174__$1,ufv___23194,G__23171__$1,validate__10718__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___23204 = (function (){var G__23193 = o__10721__auto__;
return (output_checker23138_23198.cljs$core$IFn$_invoke$arity$1 ? output_checker23138_23198.cljs$core$IFn$_invoke$arity$1(G__23193) : output_checker23138_23198.call(null,G__23193));
})();
if(cljs.core.truth_(temp__4126__auto___23204)){
var error__10720__auto___23205 = temp__4126__auto___23204;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"autocomplete*","autocomplete*",1280941171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___23205], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___23205,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema23135_23195,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___23194,output_schema23135_23195,input_schema23136_23196,input_checker23137_23197,output_checker23138_23198))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.autocomplete.autocomplete_STAR_),schema.core.make_fn_schema(output_schema23135_23195,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23136_23196], null)));

lomakkeet.autocomplete.__GT_autocomplete_STAR_ = (function() {
var __GT_autocomplete_STAR_ = null;
var __GT_autocomplete_STAR___1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.autocomplete_STAR_,cursor__20339__auto__);
});
var __GT_autocomplete_STAR___2 = (function (cursor__20339__auto__,m23134){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.autocomplete.autocomplete_STAR_,cursor__20339__auto__,m23134);
});
__GT_autocomplete_STAR_ = function(cursor__20339__auto__,m23134){
switch(arguments.length){
case 1:
return __GT_autocomplete_STAR___1.call(this,cursor__20339__auto__);
case 2:
return __GT_autocomplete_STAR___2.call(this,cursor__20339__auto__,m23134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_autocomplete_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_autocomplete_STAR___1;
__GT_autocomplete_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_autocomplete_STAR___2;
return __GT_autocomplete_STAR_;
})()
;
