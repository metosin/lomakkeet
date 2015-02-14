// Compiled by ClojureScript 0.0-2850 {}
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
var closable_will_mount__delegate = function (owner,p__23533){
var vec__23542 = p__23533;
var close_cb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23542,(0),null);
var click_handler = ((function (vec__23542,close_cb){
return (function (e){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$168,false);

if(cljs.core.truth_(close_cb)){
return (close_cb.cljs$core$IFn$_invoke$arity$0 ? close_cb.cljs$core$IFn$_invoke$arity$0() : close_cb.call(null));
} else {
return null;
}
});})(vec__23542,close_cb))
;
var key_handler = ((function (click_handler,vec__23542,close_cb){
return (function (e){
var G__23543 = e.keyCode;
switch (G__23543) {
case (27):
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$168,false);

if(cljs.core.truth_(close_cb)){
return (close_cb.cljs$core$IFn$_invoke$arity$0 ? close_cb.cljs$core$IFn$_invoke$arity$0() : close_cb.call(null));
} else {
return null;
}

break;
default:
return null;

}
});})(click_handler,vec__23542,close_cb))
;
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$169,click_handler);

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$170,key_handler);

var G__23544_23551 = window;
var G__23545_23552 = goog.events.EventType.CLICK;
var G__23546_23553 = click_handler;
goog.events.listen(G__23544_23551,G__23545_23552,G__23546_23553);

var G__23547 = window;
var G__23548 = goog.events.EventType.KEYUP;
var G__23549 = key_handler;
return goog.events.listen(G__23547,G__23548,G__23549);
};
var closable_will_mount = function (owner,var_args){
var p__23533 = null;
if (arguments.length > 1) {
var G__23554__i = 0, G__23554__a = new Array(arguments.length -  1);
while (G__23554__i < G__23554__a.length) {G__23554__a[G__23554__i] = arguments[G__23554__i + 1]; ++G__23554__i;}
  p__23533 = new cljs.core.IndexedSeq(G__23554__a,0);
} 
return closable_will_mount__delegate.call(this,owner,p__23533);};
closable_will_mount.cljs$lang$maxFixedArity = 1;
closable_will_mount.cljs$lang$applyTo = (function (arglist__23555){
var owner = cljs.core.first(arglist__23555);
var p__23533 = cljs.core.rest(arglist__23555);
return closable_will_mount__delegate(owner,p__23533);
});
closable_will_mount.cljs$core$IFn$_invoke$arity$variadic = closable_will_mount__delegate;
return closable_will_mount;
})()
;
lomakkeet.autocomplete.closable_will_unmount = (function closable_will_unmount(owner){
var G__23562_23568 = window;
var G__23563_23569 = goog.events.EventType.CLICK;
var G__23564_23570 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$169);
goog.events.listen(G__23562_23568,G__23563_23569,G__23564_23570);

var G__23565 = window;
var G__23566 = goog.events.EventType.KEYUP;
var G__23567 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$170);
return goog.events.listen(G__23565,G__23566,G__23567);
});
lomakkeet.autocomplete.create_matcher = (function create_matcher(fields){
return (function (item,term){
return cljs.core.some((function (field){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,field).toLowerCase().indexOf(term),(-1));
}),fields);
});
});
/**
* If string contains term, returns vector of three elements.
* String before the match, the match, rest of string.
*/
lomakkeet.autocomplete.regex_match = (function regex_match(string,term){
return cljs.core.rest(string.match((new RegExp([cljs.core.str("^(.*)("),cljs.core.str(term),cljs.core.str(")(.*)$")].join(''),"i"))));
});
/**
* Takes and element. Top level strings inside element are matched
* against query terms and highlighted.
* 
* E.g. [:span "Hello World"] -> [:span "H" [:span.highlight "ello"] " World"]
*/
lomakkeet.autocomplete.highlight_match = (function highlight_match(el,query){
if(cljs.core.truth_(query)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (output,term){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,item){
if(typeof item === 'string'){
var temp__4124__auto__ = lomakkeet.autocomplete.regex_match(item,term);
if(temp__4124__auto__){
var vec__23572 = temp__4124__auto__;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23572,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23572,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23572,(2),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,a,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,b], null),c], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,item);
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,item);
}
}),cljs.core.PersistentVector.EMPTY,output);
}),el,query);
} else {
return el;
}
});
lomakkeet.autocomplete.query_match_QMARK_ = (function query_match_QMARK_(term_match_QMARK_,v,query){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(term_match_QMARK_,v),query);
});
lomakkeet.autocomplete.matches = (function matches(term_match_QMARK_,v,query){
var m = cljs.core.group_by(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(term_match_QMARK_,v),query);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,true),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,false)], null);
});
lomakkeet.autocomplete.normalize_search = (function normalize_search(search){
var G__23574 = search;
var G__23574__$1 = (((G__23574 == null))?null:G__23574.toLowerCase());
var G__23574__$2 = (((G__23574__$1 == null))?null:G__23574__$1.split(/ /));
var G__23574__$3 = (((G__23574__$2 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,G__23574__$2));
return G__23574__$3;
});
lomakkeet.autocomplete.create_list_renderer = (function create_list_renderer(p__23575){
var map__23615 = p__23575;
var map__23615__$1 = ((cljs.core.seq_QMARK_(map__23615))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23615):map__23615);
var opts = map__23615__$1;
var term_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23615__$1,cljs.core.constant$keyword$172);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23615__$1,cljs.core.constant$keyword$173);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23615__$1,cljs.core.constant$keyword$174);
if(cljs.core.ifn_QMARK_(item__GT_key)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"item->key","item->key",-1747057492,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(item__GT_text)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"item->text","item->text",-1739995286,null))], 0)))].join('')));
}

var query_match_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.query_match_QMARK_,term_match_QMARK_);
return ((function (query_match_QMARK_,map__23615,map__23615__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (coll,query,cb){
var iter__4571__auto__ = ((function (query_match_QMARK_,map__23615,map__23615__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function iter__23616(s__23617){
return (new cljs.core.LazySeq(null,((function (query_match_QMARK_,map__23615,map__23615__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var s__23617__$1 = s__23617;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23617__$1);
if(temp__4126__auto__){
var s__23617__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23617__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__23617__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__23619 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__23618 = (0);
while(true){
if((i__23618 < size__4570__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__23618);
if(cljs.core.truth_((function (){var or__3815__auto__ = cljs.core.not(query);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var G__23640 = item;
var G__23641 = query;
return (query_match_QMARK_.cljs$core$IFn$_invoke$arity$2 ? query_match_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23640,G__23641) : query_match_QMARK_.call(null,G__23640,G__23641));
}
})())){
var text = (function (){var G__23642 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__23642) : item__GT_text.call(null,G__23642));
})();
cljs.core.chunk_append(b__23619,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$49,(function (){var G__23643 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23643) : item__GT_key.call(null,G__23643));
})(),cljs.core.constant$keyword$176,((function (i__23618,s__23617__$1,text,item,c__4569__auto__,size__4570__auto__,b__23619,s__23617__$2,temp__4126__auto__,query_match_QMARK_,map__23615,map__23615__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var G__23644 = (function (){var G__23645 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23645) : item__GT_key.call(null,G__23645));
})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23644) : cb.call(null,G__23644));
});})(i__23618,s__23617__$1,text,item,c__4569__auto__,size__4570__auto__,b__23619,s__23617__$2,temp__4126__auto__,query_match_QMARK_,map__23615,map__23615__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,cljs.core.constant$keyword$177,true], null),lomakkeet.autocomplete.highlight_match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,text], null),query)], null));

var G__23654 = (i__23618 + (1));
i__23618 = G__23654;
continue;
} else {
var G__23655 = (i__23618 + (1));
i__23618 = G__23655;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23619),iter__23616(cljs.core.chunk_rest(s__23617__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23619),null);
}
} else {
var item = cljs.core.first(s__23617__$2);
if(cljs.core.truth_((function (){var or__3815__auto__ = cljs.core.not(query);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var G__23648 = item;
var G__23649 = query;
return (query_match_QMARK_.cljs$core$IFn$_invoke$arity$2 ? query_match_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23648,G__23649) : query_match_QMARK_.call(null,G__23648,G__23649));
}
})())){
var text = (function (){var G__23650 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__23650) : item__GT_text.call(null,G__23650));
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$49,(function (){var G__23651 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23651) : item__GT_key.call(null,G__23651));
})(),cljs.core.constant$keyword$176,((function (s__23617__$1,text,item,s__23617__$2,temp__4126__auto__,query_match_QMARK_,map__23615,map__23615__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var G__23652 = (function (){var G__23653 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23653) : item__GT_key.call(null,G__23653));
})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23652) : cb.call(null,G__23652));
});})(s__23617__$1,text,item,s__23617__$2,temp__4126__auto__,query_match_QMARK_,map__23615,map__23615__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,cljs.core.constant$keyword$177,true], null),lomakkeet.autocomplete.highlight_match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,text], null),query)], null),iter__23616(cljs.core.rest(s__23617__$2)));
} else {
var G__23656 = cljs.core.rest(s__23617__$2);
s__23617__$1 = G__23656;
continue;
}
}
} else {
return null;
}
break;
}
});})(query_match_QMARK_,map__23615,map__23615__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,null,null));
});})(query_match_QMARK_,map__23615,map__23615__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
;
return iter__4571__auto__(coll);
});
;})(query_match_QMARK_,map__23615,map__23615__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
});

var ufv___23718 = schema.utils.use_fn_validation;
var output_schema23659_23719 = schema.core.Any;
var input_schema23660_23720 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23661_23721 = schema.core.checker(input_schema23660_23720);
var output_checker23662_23722 = schema.core.checker(output_schema23659_23719);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks renderer value->text loading-el load-items], :or {value->text identity, loading-el [:div "Loading..."]}, :as opts}]
*/
lomakkeet.autocomplete.autocomplete_STAR_ = ((function (ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function autocomplete_STAR_(G__23663,G__23664,G__23665){
var validate__12170__auto__ = ufv___23718.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___23723 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23663,G__23664,G__23665], null);
var temp__4126__auto___23724 = (function (){var G__23692 = args__12171__auto___23723;
return (input_checker23661_23721.cljs$core$IFn$_invoke$arity$1 ? input_checker23661_23721.cljs$core$IFn$_invoke$arity$1(G__23692) : input_checker23661_23721.call(null,G__23692));
})();
if(cljs.core.truth_(temp__4126__auto___23724)){
var error__12172__auto___23725 = temp__4126__auto___23724;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"autocomplete*","autocomplete*",1280941171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23725], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23725,cljs.core.constant$keyword$64,args__12171__auto___23723,cljs.core.constant$keyword$65,input_schema23660_23720,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__23695 = G__23663;
var map__23697 = G__23695;
var map__23697__$1 = ((cljs.core.seq_QMARK_(map__23697))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23697):map__23697);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23697__$1,cljs.core.constant$keyword$64);
var owner = G__23664;
var G__23696 = G__23665;
var map__23698 = G__23696;
var map__23698__$1 = ((cljs.core.seq_QMARK_(map__23698))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23698):map__23698);
var opts = map__23698__$1;
var load_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23698__$1,cljs.core.constant$keyword$179);
var loading_el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23698__$1,cljs.core.constant$keyword$180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,"Loading..."], null));
var value__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23698__$1,cljs.core.constant$keyword$181,cljs.core.identity);
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23698__$1,cljs.core.constant$keyword$182);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23698__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23698__$1,cljs.core.constant$keyword$145);
var G__23695__$1 = G__23695;
var owner__$1 = owner;
var G__23696__$1 = G__23696;
while(true){
var map__23699 = G__23695__$1;
var map__23699__$1 = ((cljs.core.seq_QMARK_(map__23699))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23699):map__23699);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23699__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__23700 = G__23696__$1;
var map__23700__$1 = ((cljs.core.seq_QMARK_(map__23700))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23700):map__23700);
var opts__$1 = map__23700__$1;
var load_items__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23700__$1,cljs.core.constant$keyword$179);
var loading_el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23700__$1,cljs.core.constant$keyword$180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,"Loading..."], null));
var value__GT_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23700__$1,cljs.core.constant$keyword$181,cljs.core.identity);
var renderer__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23700__$1,cljs.core.constant$keyword$182);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23700__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23700__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.autocomplete.t23701 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.autocomplete.t23701 = (function (map__23698,owner,output_schema23659,load_items,G__23665,G__23695,ks,G__23696,value,autocomplete_STAR_,map__23699,input_schema23660,map__23700,value__GT_text,validate__12170__auto__,ch,renderer,output_checker23662,input_checker23661,G__23663,opts,map__23697,G__23664,loading_el,ufv__,meta23702){
this.map__23698 = map__23698;
this.owner = owner;
this.output_schema23659 = output_schema23659;
this.load_items = load_items;
this.G__23665 = G__23665;
this.G__23695 = G__23695;
this.ks = ks;
this.G__23696 = G__23696;
this.value = value;
this.autocomplete_STAR_ = autocomplete_STAR_;
this.map__23699 = map__23699;
this.input_schema23660 = input_schema23660;
this.map__23700 = map__23700;
this.value__GT_text = value__GT_text;
this.validate__12170__auto__ = validate__12170__auto__;
this.ch = ch;
this.renderer = renderer;
this.output_checker23662 = output_checker23662;
this.input_checker23661 = input_checker23661;
this.G__23663 = G__23663;
this.opts = opts;
this.map__23697 = map__23697;
this.G__23664 = G__23664;
this.loading_el = loading_el;
this.ufv__ = ufv__;
this.meta23702 = meta23702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.autocomplete.t23701.prototype.om$core$IDisplayName$ = true;

lomakkeet.autocomplete.t23701.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (_){
var self__ = this;
var ___$1 = this;
return "autocomplete*";
});})(map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
;

lomakkeet.autocomplete.t23701.prototype.om$core$IRenderState$ = true;

lomakkeet.autocomplete.t23701.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (_,p__23704){
var self__ = this;
var map__23705 = p__23704;
var map__23705__$1 = ((cljs.core.seq_QMARK_(map__23705))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23705):map__23705);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23705__$1,cljs.core.constant$keyword$183);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23705__$1,cljs.core.constant$keyword$184);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23705__$1,cljs.core.constant$keyword$168);
var ___$1 = this;
var G__23706 = "div";
var G__23707 = {"className": "selectize-control single"};
var G__23708 = sablono.interpreter.create_element("input",{"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selectize-input",(function (){var G__23712 = "";
var G__23712__$1 = (cljs.core.truth_(open_QMARK_)?[cljs.core.str(G__23712),cljs.core.str(" input-active dropdown-active")].join(''):G__23712);
return G__23712__$1;
})()], null)), "onFocus": ((function (G__23706,G__23707,___$1,map__23705,map__23705__$1,items,search,open_QMARK_,map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (e){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$168,true);

if(cljs.core.not(search)){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$184,"");
} else {
return null;
}
});})(G__23706,G__23707,___$1,map__23705,map__23705__$1,items,search,open_QMARK_,map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
, "onClick": ((function (G__23706,G__23707,___$1,map__23705,map__23705__$1,items,search,open_QMARK_,map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (e){
return e.stopPropagation();
});})(G__23706,G__23707,___$1,map__23705,map__23705__$1,items,search,open_QMARK_,map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
, "onChange": ((function (G__23706,G__23707,___$1,map__23705,map__23705__$1,items,search,open_QMARK_,map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (p1__23657_SHARP_){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$184,p1__23657_SHARP_.target.value);
});})(G__23706,G__23707,___$1,map__23705,map__23705__$1,items,search,open_QMARK_,map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
, "value": (cljs.core.truth_(search)?search:((cljs.core.seq(self__.value))?(function (){var G__23711 = self__.value;
return (self__.value__GT_text.cljs$core$IFn$_invoke$arity$1 ? self__.value__GT_text.cljs$core$IFn$_invoke$arity$1(G__23711) : self__.value__GT_text.call(null,G__23711));
})():""
)), "autoComplete": false, "onKeyUp": ((function (G__23706,G__23707,___$1,map__23705,map__23705__$1,items,search,open_QMARK_,map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (e){
var G__23710 = e.key;
switch (G__23710) {
default:
return null;

}
});})(G__23706,G__23707,___$1,map__23705,map__23705__$1,items,search,open_QMARK_,map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
});
var G__23709 = sablono.interpreter.interpret((cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,(cljs.core.truth_(items)?(function (){var G__23713 = items;
var G__23714 = lomakkeet.autocomplete.normalize_search(search);
var G__23715 = ((function (G__23713,G__23714,G__23706,G__23707,G__23708,___$1,map__23705,map__23705__$1,items,search,open_QMARK_,map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (id){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,id], null));

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$168,false);
});})(G__23713,G__23714,G__23706,G__23707,G__23708,___$1,map__23705,map__23705__$1,items,search,open_QMARK_,map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
;
return (self__.renderer.cljs$core$IFn$_invoke$arity$3 ? self__.renderer.cljs$core$IFn$_invoke$arity$3(G__23713,G__23714,G__23715) : self__.renderer.call(null,G__23713,G__23714,G__23715));
})():self__.loading_el)], null)], null):null));
return React.createElement(G__23706,G__23707,G__23708,G__23709);
});})(map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
;

lomakkeet.autocomplete.t23701.prototype.om$core$IWillUnmount$ = true;

lomakkeet.autocomplete.t23701.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (_){
var self__ = this;
var ___$1 = this;
return lomakkeet.autocomplete.closable_will_unmount(self__.owner);
});})(map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
;

lomakkeet.autocomplete.t23701.prototype.om$core$IWillMount$ = true;

lomakkeet.autocomplete.t23701.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23716_23727 = self__.owner;
(self__.load_items.cljs$core$IFn$_invoke$arity$1 ? self__.load_items.cljs$core$IFn$_invoke$arity$1(G__23716_23727) : self__.load_items.call(null,G__23716_23727));

return lomakkeet.autocomplete.closable_will_mount.cljs$core$IFn$_invoke$arity$variadic(self__.owner,cljs.core.array_seq([((function (___$1,map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$184,null);
});})(___$1,map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
], 0));
});})(map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
;

lomakkeet.autocomplete.t23701.prototype.om$core$IInitState$ = true;

lomakkeet.autocomplete.t23701.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$168,false,cljs.core.constant$keyword$184,null], null);
});})(map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
;

lomakkeet.autocomplete.t23701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (_23703){
var self__ = this;
var _23703__$1 = this;
return self__.meta23702;
});})(map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
;

lomakkeet.autocomplete.t23701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (_23703,meta23702__$1){
var self__ = this;
var _23703__$1 = this;
return (new lomakkeet.autocomplete.t23701(self__.map__23698,self__.owner,self__.output_schema23659,self__.load_items,self__.G__23665,self__.G__23695,self__.ks,self__.G__23696,self__.value,self__.autocomplete_STAR_,self__.map__23699,self__.input_schema23660,self__.map__23700,self__.value__GT_text,self__.validate__12170__auto__,self__.ch,self__.renderer,self__.output_checker23662,self__.input_checker23661,self__.G__23663,self__.opts,self__.map__23697,self__.G__23664,self__.loading_el,self__.ufv__,meta23702__$1));
});})(map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
;

lomakkeet.autocomplete.t23701.cljs$lang$type = true;

lomakkeet.autocomplete.t23701.cljs$lang$ctorStr = "lomakkeet.autocomplete/t23701";

lomakkeet.autocomplete.t23701.cljs$lang$ctorPrWriter = ((function (map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.autocomplete/t23701");
});})(map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
;

lomakkeet.autocomplete.__GT_t23701 = ((function (map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722){
return (function __GT_t23701(map__23698__$2,owner__$3,output_schema23659__$1,load_items__$2,G__23665__$1,G__23695__$2,ks__$2,G__23696__$2,value__$2,autocomplete_STAR___$1,map__23699__$2,input_schema23660__$1,map__23700__$2,value__GT_text__$2,validate__12170__auto____$1,ch__$2,renderer__$2,output_checker23662__$1,input_checker23661__$1,G__23663__$1,opts__$2,map__23697__$2,G__23664__$1,loading_el__$2,ufv____$1,meta23702){
return (new lomakkeet.autocomplete.t23701(map__23698__$2,owner__$3,output_schema23659__$1,load_items__$2,G__23665__$1,G__23695__$2,ks__$2,G__23696__$2,value__$2,autocomplete_STAR___$1,map__23699__$2,input_schema23660__$1,map__23700__$2,value__GT_text__$2,validate__12170__auto____$1,ch__$2,renderer__$2,output_checker23662__$1,input_checker23661__$1,G__23663__$1,opts__$2,map__23697__$2,G__23664__$1,loading_el__$2,ufv____$1,meta23702));
});})(map__23699,map__23699__$1,value__$1,owner__$2,map__23700,map__23700__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23695,map__23697,map__23697__$1,value,owner,G__23696,map__23698,map__23698__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
;

}

return (new lomakkeet.autocomplete.t23701(map__23698__$1,owner__$2,output_schema23659_23719,load_items__$1,G__23665,G__23695__$1,ks__$1,G__23696__$1,value__$1,autocomplete_STAR_,map__23699__$1,input_schema23660_23720,map__23700__$1,value__GT_text__$1,validate__12170__auto__,ch__$1,renderer__$1,output_checker23662_23722,input_checker23661_23721,G__23663,opts__$1,map__23697__$1,G__23664,loading_el__$1,ufv___23718,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___23728 = (function (){var G__23717 = o__12173__auto__;
return (output_checker23662_23722.cljs$core$IFn$_invoke$arity$1 ? output_checker23662_23722.cljs$core$IFn$_invoke$arity$1(G__23717) : output_checker23662_23722.call(null,G__23717));
})();
if(cljs.core.truth_(temp__4126__auto___23728)){
var error__12172__auto___23729 = temp__4126__auto___23728;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"autocomplete*","autocomplete*",1280941171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23729], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23729,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema23659_23719,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___23718,output_schema23659_23719,input_schema23660_23720,input_checker23661_23721,output_checker23662_23722))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.autocomplete.autocomplete_STAR_),schema.core.make_fn_schema(output_schema23659_23719,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23660_23720], null)));

lomakkeet.autocomplete.__GT_autocomplete_STAR_ = (function() {
var __GT_autocomplete_STAR_ = null;
var __GT_autocomplete_STAR___1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.autocomplete_STAR_,cursor__20405__auto__);
});
var __GT_autocomplete_STAR___2 = (function (cursor__20405__auto__,m23658){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.autocomplete.autocomplete_STAR_,cursor__20405__auto__,m23658);
});
__GT_autocomplete_STAR_ = function(cursor__20405__auto__,m23658){
switch(arguments.length){
case 1:
return __GT_autocomplete_STAR___1.call(this,cursor__20405__auto__);
case 2:
return __GT_autocomplete_STAR___2.call(this,cursor__20405__auto__,m23658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_autocomplete_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_autocomplete_STAR___1;
__GT_autocomplete_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_autocomplete_STAR___2;
return __GT_autocomplete_STAR_;
})()
;
