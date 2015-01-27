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
var closable_will_mount__delegate = function (owner,p__23447){
var vec__23456 = p__23447;
var close_cb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23456,(0),null);
var click_handler = ((function (vec__23456,close_cb){
return (function (e){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$170,false);

if(cljs.core.truth_(close_cb)){
return (close_cb.cljs$core$IFn$_invoke$arity$0 ? close_cb.cljs$core$IFn$_invoke$arity$0() : close_cb.call(null));
} else {
return null;
}
});})(vec__23456,close_cb))
;
var key_handler = ((function (click_handler,vec__23456,close_cb){
return (function (e){
var G__23457 = e.keyCode;
switch (G__23457) {
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
});})(click_handler,vec__23456,close_cb))
;
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$171,click_handler);

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$172,key_handler);

var G__23458_23465 = window;
var G__23459_23466 = goog.events.EventType.CLICK;
var G__23460_23467 = click_handler;
goog.events.listen(G__23458_23465,G__23459_23466,G__23460_23467);

var G__23461 = window;
var G__23462 = goog.events.EventType.KEYUP;
var G__23463 = key_handler;
return goog.events.listen(G__23461,G__23462,G__23463);
};
var closable_will_mount = function (owner,var_args){
var p__23447 = null;
if (arguments.length > 1) {
var G__23468__i = 0, G__23468__a = new Array(arguments.length -  1);
while (G__23468__i < G__23468__a.length) {G__23468__a[G__23468__i] = arguments[G__23468__i + 1]; ++G__23468__i;}
  p__23447 = new cljs.core.IndexedSeq(G__23468__a,0);
} 
return closable_will_mount__delegate.call(this,owner,p__23447);};
closable_will_mount.cljs$lang$maxFixedArity = 1;
closable_will_mount.cljs$lang$applyTo = (function (arglist__23469){
var owner = cljs.core.first(arglist__23469);
var p__23447 = cljs.core.rest(arglist__23469);
return closable_will_mount__delegate(owner,p__23447);
});
closable_will_mount.cljs$core$IFn$_invoke$arity$variadic = closable_will_mount__delegate;
return closable_will_mount;
})()
;
lomakkeet.autocomplete.closable_will_unmount = (function closable_will_unmount(owner){
var G__23476_23482 = window;
var G__23477_23483 = goog.events.EventType.CLICK;
var G__23478_23484 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$171);
goog.events.listen(G__23476_23482,G__23477_23483,G__23478_23484);

var G__23479 = window;
var G__23480 = goog.events.EventType.KEYUP;
var G__23481 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$172);
return goog.events.listen(G__23479,G__23480,G__23481);
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
var vec__23486 = temp__4124__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23486,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23486,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23486,(2),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23486,(3),null);
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
var G__23488 = search;
var G__23488__$1 = (((G__23488 == null))?null:G__23488.toLowerCase());
var G__23488__$2 = (((G__23488__$1 == null))?null:G__23488__$1.split(/ /));
var G__23488__$3 = (((G__23488__$2 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,G__23488__$2));
return G__23488__$3;
});
lomakkeet.autocomplete.create_list_renderer = (function create_list_renderer(p__23489){
var map__23529 = p__23489;
var map__23529__$1 = ((cljs.core.seq_QMARK_(map__23529))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23529):map__23529);
var opts = map__23529__$1;
var term_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23529__$1,cljs.core.constant$keyword$175);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23529__$1,cljs.core.constant$keyword$176);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23529__$1,cljs.core.constant$keyword$177);
if(cljs.core.ifn_QMARK_(item__GT_key)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"item->key","item->key",-1747057492,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(item__GT_text)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"item->text","item->text",-1739995286,null))], 0)))].join('')));
}

var query_match_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.query_match_QMARK_,term_match_QMARK_);
return ((function (query_match_QMARK_,map__23529,map__23529__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (coll,query,cb){
var iter__5007__auto__ = ((function (query_match_QMARK_,map__23529,map__23529__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function iter__23530(s__23531){
return (new cljs.core.LazySeq(null,((function (query_match_QMARK_,map__23529,map__23529__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var s__23531__$1 = s__23531;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23531__$1);
if(temp__4126__auto__){
var s__23531__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23531__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__23531__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__23533 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__23532 = (0);
while(true){
if((i__23532 < size__5006__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__23532);
if(cljs.core.truth_((function (){var or__4251__auto__ = cljs.core.not(query);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var G__23554 = item;
var G__23555 = query;
return (query_match_QMARK_.cljs$core$IFn$_invoke$arity$2 ? query_match_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23554,G__23555) : query_match_QMARK_.call(null,G__23554,G__23555));
}
})())){
var text = (function (){var G__23556 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__23556) : item__GT_text.call(null,G__23556));
})();
cljs.core.chunk_append(b__23533,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,(function (){var G__23557 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23557) : item__GT_key.call(null,G__23557));
})(),cljs.core.constant$keyword$179,((function (i__23532,s__23531__$1,text,item,c__5005__auto__,size__5006__auto__,b__23533,s__23531__$2,temp__4126__auto__,query_match_QMARK_,map__23529,map__23529__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var G__23558 = (function (){var G__23559 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23559) : item__GT_key.call(null,G__23559));
})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23558) : cb.call(null,G__23558));
});})(i__23532,s__23531__$1,text,item,c__5005__auto__,size__5006__auto__,b__23533,s__23531__$2,temp__4126__auto__,query_match_QMARK_,map__23529,map__23529__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,cljs.core.constant$keyword$180,true], null),(cljs.core.truth_(query)?lomakkeet.autocomplete.highlight_match(text,query):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$174,text], null))], null));

var G__23568 = (i__23532 + (1));
i__23532 = G__23568;
continue;
} else {
var G__23569 = (i__23532 + (1));
i__23532 = G__23569;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23533),iter__23530(cljs.core.chunk_rest(s__23531__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23533),null);
}
} else {
var item = cljs.core.first(s__23531__$2);
if(cljs.core.truth_((function (){var or__4251__auto__ = cljs.core.not(query);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var G__23562 = item;
var G__23563 = query;
return (query_match_QMARK_.cljs$core$IFn$_invoke$arity$2 ? query_match_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23562,G__23563) : query_match_QMARK_.call(null,G__23562,G__23563));
}
})())){
var text = (function (){var G__23564 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__23564) : item__GT_text.call(null,G__23564));
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,(function (){var G__23565 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23565) : item__GT_key.call(null,G__23565));
})(),cljs.core.constant$keyword$179,((function (s__23531__$1,text,item,s__23531__$2,temp__4126__auto__,query_match_QMARK_,map__23529,map__23529__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var G__23566 = (function (){var G__23567 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23567) : item__GT_key.call(null,G__23567));
})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23566) : cb.call(null,G__23566));
});})(s__23531__$1,text,item,s__23531__$2,temp__4126__auto__,query_match_QMARK_,map__23529,map__23529__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,cljs.core.constant$keyword$180,true], null),(cljs.core.truth_(query)?lomakkeet.autocomplete.highlight_match(text,query):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$174,text], null))], null),iter__23530(cljs.core.rest(s__23531__$2)));
} else {
var G__23570 = cljs.core.rest(s__23531__$2);
s__23531__$1 = G__23570;
continue;
}
}
} else {
return null;
}
break;
}
});})(query_match_QMARK_,map__23529,map__23529__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,null,null));
});})(query_match_QMARK_,map__23529,map__23529__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
;
return iter__5007__auto__(coll);
});
;})(query_match_QMARK_,map__23529,map__23529__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
});

var ufv___23632 = schema.utils.use_fn_validation;
var output_schema23573_23633 = schema.core.Any;
var input_schema23574_23634 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23575_23635 = schema.core.checker(input_schema23574_23634);
var output_checker23576_23636 = schema.core.checker(output_schema23573_23633);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks renderer value->text loading-el load-items], :or {value->text identity, loading-el [:div "Loading..."]}, :as opts}]
*/
lomakkeet.autocomplete.autocomplete_STAR_ = ((function (ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function autocomplete_STAR_(G__23577,G__23578,G__23579){
var validate__12581__auto__ = ufv___23632.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___23637 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23577,G__23578,G__23579], null);
var temp__4126__auto___23638 = (function (){var G__23606 = args__12582__auto___23637;
return (input_checker23575_23635.cljs$core$IFn$_invoke$arity$1 ? input_checker23575_23635.cljs$core$IFn$_invoke$arity$1(G__23606) : input_checker23575_23635.call(null,G__23606));
})();
if(cljs.core.truth_(temp__4126__auto___23638)){
var error__12583__auto___23639 = temp__4126__auto___23638;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"autocomplete*","autocomplete*",1280941171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23639], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23639,cljs.core.constant$keyword$66,args__12582__auto___23637,cljs.core.constant$keyword$67,input_schema23574_23634,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__23609 = G__23577;
var map__23611 = G__23609;
var map__23611__$1 = ((cljs.core.seq_QMARK_(map__23611))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23611):map__23611);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23611__$1,cljs.core.constant$keyword$66);
var owner = G__23578;
var G__23610 = G__23579;
var map__23612 = G__23610;
var map__23612__$1 = ((cljs.core.seq_QMARK_(map__23612))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23612):map__23612);
var opts = map__23612__$1;
var load_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23612__$1,cljs.core.constant$keyword$181);
var loading_el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23612__$1,cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,"Loading..."], null));
var value__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23612__$1,cljs.core.constant$keyword$183,cljs.core.identity);
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23612__$1,cljs.core.constant$keyword$184);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23612__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23612__$1,cljs.core.constant$keyword$147);
var G__23609__$1 = G__23609;
var owner__$1 = owner;
var G__23610__$1 = G__23610;
while(true){
var map__23613 = G__23609__$1;
var map__23613__$1 = ((cljs.core.seq_QMARK_(map__23613))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23613):map__23613);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23613__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__23614 = G__23610__$1;
var map__23614__$1 = ((cljs.core.seq_QMARK_(map__23614))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23614):map__23614);
var opts__$1 = map__23614__$1;
var load_items__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23614__$1,cljs.core.constant$keyword$181);
var loading_el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23614__$1,cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,"Loading..."], null));
var value__GT_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23614__$1,cljs.core.constant$keyword$183,cljs.core.identity);
var renderer__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23614__$1,cljs.core.constant$keyword$184);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23614__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23614__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.autocomplete.t23615 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.autocomplete.t23615 = (function (input_checker23575,G__23578,owner,load_items,G__23577,validate__12581__auto__,input_schema23574,output_checker23576,map__23611,ks,value,G__23579,map__23613,autocomplete_STAR_,value__GT_text,map__23612,ch,renderer,G__23610,G__23609,opts,loading_el,ufv__,map__23614,output_schema23573,meta23616){
this.input_checker23575 = input_checker23575;
this.G__23578 = G__23578;
this.owner = owner;
this.load_items = load_items;
this.G__23577 = G__23577;
this.validate__12581__auto__ = validate__12581__auto__;
this.input_schema23574 = input_schema23574;
this.output_checker23576 = output_checker23576;
this.map__23611 = map__23611;
this.ks = ks;
this.value = value;
this.G__23579 = G__23579;
this.map__23613 = map__23613;
this.autocomplete_STAR_ = autocomplete_STAR_;
this.value__GT_text = value__GT_text;
this.map__23612 = map__23612;
this.ch = ch;
this.renderer = renderer;
this.G__23610 = G__23610;
this.G__23609 = G__23609;
this.opts = opts;
this.loading_el = loading_el;
this.ufv__ = ufv__;
this.map__23614 = map__23614;
this.output_schema23573 = output_schema23573;
this.meta23616 = meta23616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.autocomplete.t23615.prototype.om$core$IDisplayName$ = true;

lomakkeet.autocomplete.t23615.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (_){
var self__ = this;
var ___$1 = this;
return "autocomplete*";
});})(map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
;

lomakkeet.autocomplete.t23615.prototype.om$core$IRenderState$ = true;

lomakkeet.autocomplete.t23615.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (_,p__23618){
var self__ = this;
var map__23619 = p__23618;
var map__23619__$1 = ((cljs.core.seq_QMARK_(map__23619))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23619):map__23619);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23619__$1,cljs.core.constant$keyword$185);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23619__$1,cljs.core.constant$keyword$186);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23619__$1,cljs.core.constant$keyword$170);
var ___$1 = this;
var G__23620 = {"className": "selectize-control single"};
var G__23621 = (function (){var G__23623 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selectize-input",(function (){var G__23626 = "";
var G__23626__$1 = (cljs.core.truth_(open_QMARK_)?[cljs.core.str(G__23626),cljs.core.str(" input-active dropdown-active")].join(''):G__23626);
return G__23626__$1;
})()], null)), "onFocus": ((function (G__23620,___$1,map__23619,map__23619__$1,items,search,open_QMARK_,map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (e){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$170,true);

if(cljs.core.not(search)){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$186,"");
} else {
return null;
}
});})(G__23620,___$1,map__23619,map__23619__$1,items,search,open_QMARK_,map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
, "onClick": ((function (G__23620,___$1,map__23619,map__23619__$1,items,search,open_QMARK_,map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (e){
return e.stopPropagation();
});})(G__23620,___$1,map__23619,map__23619__$1,items,search,open_QMARK_,map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
, "onChange": ((function (G__23620,___$1,map__23619,map__23619__$1,items,search,open_QMARK_,map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (p1__23571_SHARP_){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$186,p1__23571_SHARP_.target.value);
});})(G__23620,___$1,map__23619,map__23619__$1,items,search,open_QMARK_,map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
, "value": (cljs.core.truth_(search)?search:((cljs.core.seq(self__.value))?(function (){var G__23625 = self__.value;
return (self__.value__GT_text.cljs$core$IFn$_invoke$arity$1 ? self__.value__GT_text.cljs$core$IFn$_invoke$arity$1(G__23625) : self__.value__GT_text.call(null,G__23625));
})():""
)), "autoComplete": "off", "onKeyUp": ((function (G__23620,___$1,map__23619,map__23619__$1,items,search,open_QMARK_,map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (e){
var G__23624 = e.key;
switch (G__23624) {
default:
return null;

}
});})(G__23620,___$1,map__23619,map__23619__$1,items,search,open_QMARK_,map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__23623) : sablono.interpreter.input.call(null,G__23623));
})();
var G__23622 = sablono.interpreter.interpret((cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$188,(cljs.core.truth_(items)?(function (){var G__23627 = items;
var G__23628 = lomakkeet.autocomplete.normalize_search(search);
var G__23629 = ((function (G__23627,G__23628,G__23620,G__23621,___$1,map__23619,map__23619__$1,items,search,open_QMARK_,map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (id){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,id], null));

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$170,false);
});})(G__23627,G__23628,G__23620,G__23621,___$1,map__23619,map__23619__$1,items,search,open_QMARK_,map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
;
return (self__.renderer.cljs$core$IFn$_invoke$arity$3 ? self__.renderer.cljs$core$IFn$_invoke$arity$3(G__23627,G__23628,G__23629) : self__.renderer.call(null,G__23627,G__23628,G__23629));
})():self__.loading_el)], null)], null):null));
return React.DOM.div(G__23620,G__23621,G__23622);
});})(map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
;

lomakkeet.autocomplete.t23615.prototype.om$core$IWillUnmount$ = true;

lomakkeet.autocomplete.t23615.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (_){
var self__ = this;
var ___$1 = this;
return lomakkeet.autocomplete.closable_will_unmount(self__.owner);
});})(map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
;

lomakkeet.autocomplete.t23615.prototype.om$core$IWillMount$ = true;

lomakkeet.autocomplete.t23615.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23630_23641 = self__.owner;
(self__.load_items.cljs$core$IFn$_invoke$arity$1 ? self__.load_items.cljs$core$IFn$_invoke$arity$1(G__23630_23641) : self__.load_items.call(null,G__23630_23641));

return lomakkeet.autocomplete.closable_will_mount.cljs$core$IFn$_invoke$arity$variadic(self__.owner,cljs.core.array_seq([((function (___$1,map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$186,null);
});})(___$1,map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
], 0));
});})(map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
;

lomakkeet.autocomplete.t23615.prototype.om$core$IInitState$ = true;

lomakkeet.autocomplete.t23615.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$170,false,cljs.core.constant$keyword$186,null], null);
});})(map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
;

lomakkeet.autocomplete.t23615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (_23617){
var self__ = this;
var _23617__$1 = this;
return self__.meta23616;
});})(map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
;

lomakkeet.autocomplete.t23615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (_23617,meta23616__$1){
var self__ = this;
var _23617__$1 = this;
return (new lomakkeet.autocomplete.t23615(self__.input_checker23575,self__.G__23578,self__.owner,self__.load_items,self__.G__23577,self__.validate__12581__auto__,self__.input_schema23574,self__.output_checker23576,self__.map__23611,self__.ks,self__.value,self__.G__23579,self__.map__23613,self__.autocomplete_STAR_,self__.value__GT_text,self__.map__23612,self__.ch,self__.renderer,self__.G__23610,self__.G__23609,self__.opts,self__.loading_el,self__.ufv__,self__.map__23614,self__.output_schema23573,meta23616__$1));
});})(map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
;

lomakkeet.autocomplete.t23615.cljs$lang$type = true;

lomakkeet.autocomplete.t23615.cljs$lang$ctorStr = "lomakkeet.autocomplete/t23615";

lomakkeet.autocomplete.t23615.cljs$lang$ctorPrWriter = ((function (map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.autocomplete/t23615");
});})(map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
;

lomakkeet.autocomplete.__GT_t23615 = ((function (map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636){
return (function __GT_t23615(input_checker23575__$1,G__23578__$1,owner__$3,load_items__$2,G__23577__$1,validate__12581__auto____$1,input_schema23574__$1,output_checker23576__$1,map__23611__$2,ks__$2,value__$2,G__23579__$1,map__23613__$2,autocomplete_STAR___$1,value__GT_text__$2,map__23612__$2,ch__$2,renderer__$2,G__23610__$2,G__23609__$2,opts__$2,loading_el__$2,ufv____$1,map__23614__$2,output_schema23573__$1,meta23616){
return (new lomakkeet.autocomplete.t23615(input_checker23575__$1,G__23578__$1,owner__$3,load_items__$2,G__23577__$1,validate__12581__auto____$1,input_schema23574__$1,output_checker23576__$1,map__23611__$2,ks__$2,value__$2,G__23579__$1,map__23613__$2,autocomplete_STAR___$1,value__GT_text__$2,map__23612__$2,ch__$2,renderer__$2,G__23610__$2,G__23609__$2,opts__$2,loading_el__$2,ufv____$1,map__23614__$2,output_schema23573__$1,meta23616));
});})(map__23613,map__23613__$1,value__$1,owner__$2,map__23614,map__23614__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23609,map__23611,map__23611__$1,value,owner,G__23610,map__23612,map__23612__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
;

}

return (new lomakkeet.autocomplete.t23615(input_checker23575_23635,G__23578,owner__$2,load_items__$1,G__23577,validate__12581__auto__,input_schema23574_23634,output_checker23576_23636,map__23611__$1,ks__$1,value__$1,G__23579,map__23613__$1,autocomplete_STAR_,value__GT_text__$1,map__23612__$1,ch__$1,renderer__$1,G__23610__$1,G__23609__$1,opts__$1,loading_el__$1,ufv___23632,map__23614__$1,output_schema23573_23633,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___23642 = (function (){var G__23631 = o__12584__auto__;
return (output_checker23576_23636.cljs$core$IFn$_invoke$arity$1 ? output_checker23576_23636.cljs$core$IFn$_invoke$arity$1(G__23631) : output_checker23576_23636.call(null,G__23631));
})();
if(cljs.core.truth_(temp__4126__auto___23642)){
var error__12583__auto___23643 = temp__4126__auto___23642;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"autocomplete*","autocomplete*",1280941171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23643], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23643,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema23573_23633,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___23632,output_schema23573_23633,input_schema23574_23634,input_checker23575_23635,output_checker23576_23636))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.autocomplete.autocomplete_STAR_),schema.core.make_fn_schema(output_schema23573_23633,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23574_23634], null)));

lomakkeet.autocomplete.__GT_autocomplete_STAR_ = (function() {
var __GT_autocomplete_STAR_ = null;
var __GT_autocomplete_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.autocomplete_STAR_,cursor__20832__auto__);
});
var __GT_autocomplete_STAR___2 = (function (cursor__20832__auto__,m23572){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.autocomplete.autocomplete_STAR_,cursor__20832__auto__,m23572);
});
__GT_autocomplete_STAR_ = function(cursor__20832__auto__,m23572){
switch(arguments.length){
case 1:
return __GT_autocomplete_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_autocomplete_STAR___2.call(this,cursor__20832__auto__,m23572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_autocomplete_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_autocomplete_STAR___1;
__GT_autocomplete_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_autocomplete_STAR___2;
return __GT_autocomplete_STAR_;
})()
;
