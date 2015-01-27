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
var closable_will_mount__delegate = function (owner,p__23018){
var vec__23027 = p__23018;
var close_cb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23027,(0),null);
var click_handler = ((function (vec__23027,close_cb){
return (function (e){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$170,false);

if(cljs.core.truth_(close_cb)){
return (close_cb.cljs$core$IFn$_invoke$arity$0 ? close_cb.cljs$core$IFn$_invoke$arity$0() : close_cb.call(null));
} else {
return null;
}
});})(vec__23027,close_cb))
;
var key_handler = ((function (click_handler,vec__23027,close_cb){
return (function (e){
var G__23028 = e.keyCode;
switch (G__23028) {
case (27):
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$170,false);

if(cljs.core.truth_(close_cb)){
return (close_cb.cljs$core$IFn$_invoke$arity$0 ? close_cb.cljs$core$IFn$_invoke$arity$0() : close_cb.call(null));
} else {
return null;
}

break;
default:
return null;

}
});})(click_handler,vec__23027,close_cb))
;
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$171,click_handler);

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$172,key_handler);

var G__23029_23036 = window;
var G__23030_23037 = goog.events.EventType.CLICK;
var G__23031_23038 = click_handler;
goog.events.listen(G__23029_23036,G__23030_23037,G__23031_23038);

var G__23032 = window;
var G__23033 = goog.events.EventType.KEYUP;
var G__23034 = key_handler;
return goog.events.listen(G__23032,G__23033,G__23034);
};
var closable_will_mount = function (owner,var_args){
var p__23018 = null;
if (arguments.length > 1) {
var G__23039__i = 0, G__23039__a = new Array(arguments.length -  1);
while (G__23039__i < G__23039__a.length) {G__23039__a[G__23039__i] = arguments[G__23039__i + 1]; ++G__23039__i;}
  p__23018 = new cljs.core.IndexedSeq(G__23039__a,0);
} 
return closable_will_mount__delegate.call(this,owner,p__23018);};
closable_will_mount.cljs$lang$maxFixedArity = 1;
closable_will_mount.cljs$lang$applyTo = (function (arglist__23040){
var owner = cljs.core.first(arglist__23040);
var p__23018 = cljs.core.rest(arglist__23040);
return closable_will_mount__delegate(owner,p__23018);
});
closable_will_mount.cljs$core$IFn$_invoke$arity$variadic = closable_will_mount__delegate;
return closable_will_mount;
})()
;
lomakkeet.autocomplete.closable_will_unmount = (function closable_will_unmount(owner){
var G__23047_23053 = window;
var G__23048_23054 = goog.events.EventType.CLICK;
var G__23049_23055 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$171);
goog.events.listen(G__23047_23053,G__23048_23054,G__23049_23055);

var G__23050 = window;
var G__23051 = goog.events.EventType.KEYUP;
var G__23052 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$172);
return goog.events.listen(G__23050,G__23051,G__23052);
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
var vec__23057 = temp__4124__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23057,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23057,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23057,(2),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23057,(3),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,a,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,b], null),c], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,el);
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,el);
}
}),cljs.core.PersistentVector.EMPTY,output);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$174,text], null),query);
});
lomakkeet.autocomplete.query_match_QMARK_ = (function query_match_QMARK_(term_match_QMARK_,v,query){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(term_match_QMARK_,v),query);
});
lomakkeet.autocomplete.matches = (function matches(term_match_QMARK_,v,query){
var m = cljs.core.group_by(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(term_match_QMARK_,v),query);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,true),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,false)], null);
});
lomakkeet.autocomplete.normalize_search = (function normalize_search(search){
var G__23059 = search;
var G__23059__$1 = (((G__23059 == null))?null:G__23059.toLowerCase());
var G__23059__$2 = (((G__23059__$1 == null))?null:G__23059__$1.split(/ /));
var G__23059__$3 = (((G__23059__$2 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,G__23059__$2));
return G__23059__$3;
});
lomakkeet.autocomplete.create_list_renderer = (function create_list_renderer(p__23060){
var map__23100 = p__23060;
var map__23100__$1 = ((cljs.core.seq_QMARK_(map__23100))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23100):map__23100);
var opts = map__23100__$1;
var term_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23100__$1,cljs.core.constant$keyword$175);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23100__$1,cljs.core.constant$keyword$176);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23100__$1,cljs.core.constant$keyword$177);
if(cljs.core.ifn_QMARK_(item__GT_key)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"item->key","item->key",-1747057492,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(item__GT_text)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"item->text","item->text",-1739995286,null))], 0)))].join('')));
}

var query_match_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.query_match_QMARK_,term_match_QMARK_);
return ((function (query_match_QMARK_,map__23100,map__23100__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (coll,query,cb){
var iter__4514__auto__ = ((function (query_match_QMARK_,map__23100,map__23100__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function iter__23101(s__23102){
return (new cljs.core.LazySeq(null,((function (query_match_QMARK_,map__23100,map__23100__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var s__23102__$1 = s__23102;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23102__$1);
if(temp__4126__auto__){
var s__23102__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23102__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__23102__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__23104 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__23103 = (0);
while(true){
if((i__23103 < size__4513__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__23103);
if(cljs.core.truth_((function (){var or__3758__auto__ = cljs.core.not(query);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var G__23125 = item;
var G__23126 = query;
return (query_match_QMARK_.cljs$core$IFn$_invoke$arity$2 ? query_match_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23125,G__23126) : query_match_QMARK_.call(null,G__23125,G__23126));
}
})())){
var text = (function (){var G__23127 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__23127) : item__GT_text.call(null,G__23127));
})();
cljs.core.chunk_append(b__23104,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,(function (){var G__23128 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23128) : item__GT_key.call(null,G__23128));
})(),cljs.core.constant$keyword$179,((function (i__23103,s__23102__$1,text,item,c__4512__auto__,size__4513__auto__,b__23104,s__23102__$2,temp__4126__auto__,query_match_QMARK_,map__23100,map__23100__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var G__23129 = (function (){var G__23130 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23130) : item__GT_key.call(null,G__23130));
})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23129) : cb.call(null,G__23129));
});})(i__23103,s__23102__$1,text,item,c__4512__auto__,size__4513__auto__,b__23104,s__23102__$2,temp__4126__auto__,query_match_QMARK_,map__23100,map__23100__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,cljs.core.constant$keyword$180,true], null),(cljs.core.truth_(query)?lomakkeet.autocomplete.highlight_match(text,query):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$174,text], null))], null));

var G__23139 = (i__23103 + (1));
i__23103 = G__23139;
continue;
} else {
var G__23140 = (i__23103 + (1));
i__23103 = G__23140;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23104),iter__23101(cljs.core.chunk_rest(s__23102__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23104),null);
}
} else {
var item = cljs.core.first(s__23102__$2);
if(cljs.core.truth_((function (){var or__3758__auto__ = cljs.core.not(query);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var G__23133 = item;
var G__23134 = query;
return (query_match_QMARK_.cljs$core$IFn$_invoke$arity$2 ? query_match_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23133,G__23134) : query_match_QMARK_.call(null,G__23133,G__23134));
}
})())){
var text = (function (){var G__23135 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__23135) : item__GT_text.call(null,G__23135));
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,(function (){var G__23136 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23136) : item__GT_key.call(null,G__23136));
})(),cljs.core.constant$keyword$179,((function (s__23102__$1,text,item,s__23102__$2,temp__4126__auto__,query_match_QMARK_,map__23100,map__23100__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var G__23137 = (function (){var G__23138 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23138) : item__GT_key.call(null,G__23138));
})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23137) : cb.call(null,G__23137));
});})(s__23102__$1,text,item,s__23102__$2,temp__4126__auto__,query_match_QMARK_,map__23100,map__23100__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,cljs.core.constant$keyword$180,true], null),(cljs.core.truth_(query)?lomakkeet.autocomplete.highlight_match(text,query):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$174,text], null))], null),iter__23101(cljs.core.rest(s__23102__$2)));
} else {
var G__23141 = cljs.core.rest(s__23102__$2);
s__23102__$1 = G__23141;
continue;
}
}
} else {
return null;
}
break;
}
});})(query_match_QMARK_,map__23100,map__23100__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,null,null));
});})(query_match_QMARK_,map__23100,map__23100__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
;
return iter__4514__auto__(coll);
});
;})(query_match_QMARK_,map__23100,map__23100__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
});

var ufv___23203 = schema.utils.use_fn_validation;
var output_schema23144_23204 = schema.core.Any;
var input_schema23145_23205 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23146_23206 = schema.core.checker(input_schema23145_23205);
var output_checker23147_23207 = schema.core.checker(output_schema23144_23204);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks renderer value->text loading-el load-items], :or {value->text identity, loading-el [:div "Loading..."]}, :as opts}]
*/
lomakkeet.autocomplete.autocomplete_STAR_ = ((function (ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function autocomplete_STAR_(G__23148,G__23149,G__23150){
var validate__12088__auto__ = ufv___23203.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___23208 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23148,G__23149,G__23150], null);
var temp__4126__auto___23209 = (function (){var G__23177 = args__12089__auto___23208;
return (input_checker23146_23206.cljs$core$IFn$_invoke$arity$1 ? input_checker23146_23206.cljs$core$IFn$_invoke$arity$1(G__23177) : input_checker23146_23206.call(null,G__23177));
})();
if(cljs.core.truth_(temp__4126__auto___23209)){
var error__12090__auto___23210 = temp__4126__auto___23209;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"autocomplete*","autocomplete*",1280941171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___23210], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___23210,cljs.core.constant$keyword$66,args__12089__auto___23208,cljs.core.constant$keyword$67,input_schema23145_23205,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var G__23180 = G__23148;
var map__23182 = G__23180;
var map__23182__$1 = ((cljs.core.seq_QMARK_(map__23182))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23182):map__23182);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23182__$1,cljs.core.constant$keyword$66);
var owner = G__23149;
var G__23181 = G__23150;
var map__23183 = G__23181;
var map__23183__$1 = ((cljs.core.seq_QMARK_(map__23183))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23183):map__23183);
var opts = map__23183__$1;
var load_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183__$1,cljs.core.constant$keyword$181);
var loading_el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23183__$1,cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,"Loading..."], null));
var value__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23183__$1,cljs.core.constant$keyword$183,cljs.core.identity);
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183__$1,cljs.core.constant$keyword$184);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183__$1,cljs.core.constant$keyword$147);
var G__23180__$1 = G__23180;
var owner__$1 = owner;
var G__23181__$1 = G__23181;
while(true){
var map__23184 = G__23180__$1;
var map__23184__$1 = ((cljs.core.seq_QMARK_(map__23184))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23184):map__23184);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23184__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__23185 = G__23181__$1;
var map__23185__$1 = ((cljs.core.seq_QMARK_(map__23185))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23185):map__23185);
var opts__$1 = map__23185__$1;
var load_items__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.constant$keyword$181);
var loading_el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23185__$1,cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,"Loading..."], null));
var value__GT_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23185__$1,cljs.core.constant$keyword$183,cljs.core.identity);
var renderer__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.constant$keyword$184);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.autocomplete.t23186 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.autocomplete.t23186 = (function (map__23185,owner,validate__12088__auto__,load_items,input_schema23145,map__23184,ks,output_schema23144,G__23148,value,autocomplete_STAR_,map__23182,G__23181,value__GT_text,ch,renderer,input_checker23146,G__23150,G__23180,G__23149,map__23183,output_checker23147,opts,loading_el,ufv__,meta23187){
this.map__23185 = map__23185;
this.owner = owner;
this.validate__12088__auto__ = validate__12088__auto__;
this.load_items = load_items;
this.input_schema23145 = input_schema23145;
this.map__23184 = map__23184;
this.ks = ks;
this.output_schema23144 = output_schema23144;
this.G__23148 = G__23148;
this.value = value;
this.autocomplete_STAR_ = autocomplete_STAR_;
this.map__23182 = map__23182;
this.G__23181 = G__23181;
this.value__GT_text = value__GT_text;
this.ch = ch;
this.renderer = renderer;
this.input_checker23146 = input_checker23146;
this.G__23150 = G__23150;
this.G__23180 = G__23180;
this.G__23149 = G__23149;
this.map__23183 = map__23183;
this.output_checker23147 = output_checker23147;
this.opts = opts;
this.loading_el = loading_el;
this.ufv__ = ufv__;
this.meta23187 = meta23187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.autocomplete.t23186.prototype.om$core$IDisplayName$ = true;

lomakkeet.autocomplete.t23186.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (_){
var self__ = this;
var ___$1 = this;
return "autocomplete*";
});})(map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
;

lomakkeet.autocomplete.t23186.prototype.om$core$IRenderState$ = true;

lomakkeet.autocomplete.t23186.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (_,p__23189){
var self__ = this;
var map__23190 = p__23189;
var map__23190__$1 = ((cljs.core.seq_QMARK_(map__23190))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23190):map__23190);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23190__$1,cljs.core.constant$keyword$185);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23190__$1,cljs.core.constant$keyword$186);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23190__$1,cljs.core.constant$keyword$170);
var ___$1 = this;
var G__23191 = {"className": "selectize-control single"};
var G__23192 = (function (){var G__23194 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selectize-input",(function (){var G__23197 = "";
var G__23197__$1 = (cljs.core.truth_(open_QMARK_)?[cljs.core.str(G__23197),cljs.core.str(" input-active dropdown-active")].join(''):G__23197);
return G__23197__$1;
})()], null)), "onFocus": ((function (G__23191,___$1,map__23190,map__23190__$1,items,search,open_QMARK_,map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (e){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$170,true);

if(cljs.core.not(search)){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$186,"");
} else {
return null;
}
});})(G__23191,___$1,map__23190,map__23190__$1,items,search,open_QMARK_,map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
, "onClick": ((function (G__23191,___$1,map__23190,map__23190__$1,items,search,open_QMARK_,map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (e){
return e.stopPropagation();
});})(G__23191,___$1,map__23190,map__23190__$1,items,search,open_QMARK_,map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
, "onChange": ((function (G__23191,___$1,map__23190,map__23190__$1,items,search,open_QMARK_,map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (p1__23142_SHARP_){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$186,p1__23142_SHARP_.target.value);
});})(G__23191,___$1,map__23190,map__23190__$1,items,search,open_QMARK_,map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
, "value": (cljs.core.truth_(search)?search:((cljs.core.seq(self__.value))?(function (){var G__23196 = self__.value;
return (self__.value__GT_text.cljs$core$IFn$_invoke$arity$1 ? self__.value__GT_text.cljs$core$IFn$_invoke$arity$1(G__23196) : self__.value__GT_text.call(null,G__23196));
})():""
)), "autoComplete": false, "onKeyUp": ((function (G__23191,___$1,map__23190,map__23190__$1,items,search,open_QMARK_,map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (e){
var G__23195 = e.key;
switch (G__23195) {
default:
return null;

}
});})(G__23191,___$1,map__23190,map__23190__$1,items,search,open_QMARK_,map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__23194) : sablono.interpreter.input.call(null,G__23194));
})();
var G__23193 = sablono.interpreter.interpret((cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$188,(cljs.core.truth_(items)?(function (){var G__23198 = items;
var G__23199 = lomakkeet.autocomplete.normalize_search(search);
var G__23200 = ((function (G__23198,G__23199,G__23191,G__23192,___$1,map__23190,map__23190__$1,items,search,open_QMARK_,map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (id){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,id], null));

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$170,false);
});})(G__23198,G__23199,G__23191,G__23192,___$1,map__23190,map__23190__$1,items,search,open_QMARK_,map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
;
return (self__.renderer.cljs$core$IFn$_invoke$arity$3 ? self__.renderer.cljs$core$IFn$_invoke$arity$3(G__23198,G__23199,G__23200) : self__.renderer.call(null,G__23198,G__23199,G__23200));
})():self__.loading_el)], null)], null):null));
return React.DOM.div(G__23191,G__23192,G__23193);
});})(map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
;

lomakkeet.autocomplete.t23186.prototype.om$core$IWillUnmount$ = true;

lomakkeet.autocomplete.t23186.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (_){
var self__ = this;
var ___$1 = this;
return lomakkeet.autocomplete.closable_will_unmount(self__.owner);
});})(map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
;

lomakkeet.autocomplete.t23186.prototype.om$core$IWillMount$ = true;

lomakkeet.autocomplete.t23186.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23201_23212 = self__.owner;
(self__.load_items.cljs$core$IFn$_invoke$arity$1 ? self__.load_items.cljs$core$IFn$_invoke$arity$1(G__23201_23212) : self__.load_items.call(null,G__23201_23212));

return lomakkeet.autocomplete.closable_will_mount.cljs$core$IFn$_invoke$arity$variadic(self__.owner,cljs.core.array_seq([((function (___$1,map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$186,null);
});})(___$1,map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
], 0));
});})(map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
;

lomakkeet.autocomplete.t23186.prototype.om$core$IInitState$ = true;

lomakkeet.autocomplete.t23186.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$170,false,cljs.core.constant$keyword$186,null], null);
});})(map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
;

lomakkeet.autocomplete.t23186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (_23188){
var self__ = this;
var _23188__$1 = this;
return self__.meta23187;
});})(map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
;

lomakkeet.autocomplete.t23186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (_23188,meta23187__$1){
var self__ = this;
var _23188__$1 = this;
return (new lomakkeet.autocomplete.t23186(self__.map__23185,self__.owner,self__.validate__12088__auto__,self__.load_items,self__.input_schema23145,self__.map__23184,self__.ks,self__.output_schema23144,self__.G__23148,self__.value,self__.autocomplete_STAR_,self__.map__23182,self__.G__23181,self__.value__GT_text,self__.ch,self__.renderer,self__.input_checker23146,self__.G__23150,self__.G__23180,self__.G__23149,self__.map__23183,self__.output_checker23147,self__.opts,self__.loading_el,self__.ufv__,meta23187__$1));
});})(map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
;

lomakkeet.autocomplete.t23186.cljs$lang$type = true;

lomakkeet.autocomplete.t23186.cljs$lang$ctorStr = "lomakkeet.autocomplete/t23186";

lomakkeet.autocomplete.t23186.cljs$lang$ctorPrWriter = ((function (map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.autocomplete/t23186");
});})(map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
;

lomakkeet.autocomplete.__GT_t23186 = ((function (map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207){
return (function __GT_t23186(map__23185__$2,owner__$3,validate__12088__auto____$1,load_items__$2,input_schema23145__$1,map__23184__$2,ks__$2,output_schema23144__$1,G__23148__$1,value__$2,autocomplete_STAR___$1,map__23182__$2,G__23181__$2,value__GT_text__$2,ch__$2,renderer__$2,input_checker23146__$1,G__23150__$1,G__23180__$2,G__23149__$1,map__23183__$2,output_checker23147__$1,opts__$2,loading_el__$2,ufv____$1,meta23187){
return (new lomakkeet.autocomplete.t23186(map__23185__$2,owner__$3,validate__12088__auto____$1,load_items__$2,input_schema23145__$1,map__23184__$2,ks__$2,output_schema23144__$1,G__23148__$1,value__$2,autocomplete_STAR___$1,map__23182__$2,G__23181__$2,value__GT_text__$2,ch__$2,renderer__$2,input_checker23146__$1,G__23150__$1,G__23180__$2,G__23149__$1,map__23183__$2,output_checker23147__$1,opts__$2,loading_el__$2,ufv____$1,meta23187));
});})(map__23184,map__23184__$1,value__$1,owner__$2,map__23185,map__23185__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23180,map__23182,map__23182__$1,value,owner,G__23181,map__23183,map__23183__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12088__auto__,ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
;

}

return (new lomakkeet.autocomplete.t23186(map__23185__$1,owner__$2,validate__12088__auto__,load_items__$1,input_schema23145_23205,map__23184__$1,ks__$1,output_schema23144_23204,G__23148,value__$1,autocomplete_STAR_,map__23182__$1,G__23181__$1,value__GT_text__$1,ch__$1,renderer__$1,input_checker23146_23206,G__23150,G__23180__$1,G__23149,map__23183__$1,output_checker23147_23207,opts__$1,loading_el__$1,ufv___23203,null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___23213 = (function (){var G__23202 = o__12091__auto__;
return (output_checker23147_23207.cljs$core$IFn$_invoke$arity$1 ? output_checker23147_23207.cljs$core$IFn$_invoke$arity$1(G__23202) : output_checker23147_23207.call(null,G__23202));
})();
if(cljs.core.truth_(temp__4126__auto___23213)){
var error__12090__auto___23214 = temp__4126__auto___23213;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"autocomplete*","autocomplete*",1280941171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___23214], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___23214,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema23144_23204,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___23203,output_schema23144_23204,input_schema23145_23205,input_checker23146_23206,output_checker23147_23207))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.autocomplete.autocomplete_STAR_),schema.core.make_fn_schema(output_schema23144_23204,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23145_23205], null)));

lomakkeet.autocomplete.__GT_autocomplete_STAR_ = (function() {
var __GT_autocomplete_STAR_ = null;
var __GT_autocomplete_STAR___1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.autocomplete_STAR_,cursor__20339__auto__);
});
var __GT_autocomplete_STAR___2 = (function (cursor__20339__auto__,m23143){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.autocomplete.autocomplete_STAR_,cursor__20339__auto__,m23143);
});
__GT_autocomplete_STAR_ = function(cursor__20339__auto__,m23143){
switch(arguments.length){
case 1:
return __GT_autocomplete_STAR___1.call(this,cursor__20339__auto__);
case 2:
return __GT_autocomplete_STAR___2.call(this,cursor__20339__auto__,m23143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_autocomplete_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_autocomplete_STAR___1;
__GT_autocomplete_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_autocomplete_STAR___2;
return __GT_autocomplete_STAR_;
})()
;
