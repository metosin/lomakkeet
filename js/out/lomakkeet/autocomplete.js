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
var closable_will_mount__delegate = function (owner,p__23517){
var vec__23526 = p__23517;
var close_cb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23526,(0),null);
var click_handler = ((function (vec__23526,close_cb){
return (function (e){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$168,false);

if(cljs.core.truth_(close_cb)){
return (close_cb.cljs$core$IFn$_invoke$arity$0 ? close_cb.cljs$core$IFn$_invoke$arity$0() : close_cb.call(null));
} else {
return null;
}
});})(vec__23526,close_cb))
;
var key_handler = ((function (click_handler,vec__23526,close_cb){
return (function (e){
var G__23527 = e.keyCode;
switch (G__23527) {
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
});})(click_handler,vec__23526,close_cb))
;
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$169,click_handler);

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$170,key_handler);

var G__23528_23535 = window;
var G__23529_23536 = goog.events.EventType.CLICK;
var G__23530_23537 = click_handler;
goog.events.listen(G__23528_23535,G__23529_23536,G__23530_23537);

var G__23531 = window;
var G__23532 = goog.events.EventType.KEYUP;
var G__23533 = key_handler;
return goog.events.listen(G__23531,G__23532,G__23533);
};
var closable_will_mount = function (owner,var_args){
var p__23517 = null;
if (arguments.length > 1) {
var G__23538__i = 0, G__23538__a = new Array(arguments.length -  1);
while (G__23538__i < G__23538__a.length) {G__23538__a[G__23538__i] = arguments[G__23538__i + 1]; ++G__23538__i;}
  p__23517 = new cljs.core.IndexedSeq(G__23538__a,0);
} 
return closable_will_mount__delegate.call(this,owner,p__23517);};
closable_will_mount.cljs$lang$maxFixedArity = 1;
closable_will_mount.cljs$lang$applyTo = (function (arglist__23539){
var owner = cljs.core.first(arglist__23539);
var p__23517 = cljs.core.rest(arglist__23539);
return closable_will_mount__delegate(owner,p__23517);
});
closable_will_mount.cljs$core$IFn$_invoke$arity$variadic = closable_will_mount__delegate;
return closable_will_mount;
})()
;
lomakkeet.autocomplete.closable_will_unmount = (function closable_will_unmount(owner){
var G__23546_23552 = window;
var G__23547_23553 = goog.events.EventType.CLICK;
var G__23548_23554 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$169);
goog.events.listen(G__23546_23552,G__23547_23553,G__23548_23554);

var G__23549 = window;
var G__23550 = goog.events.EventType.KEYUP;
var G__23551 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$170);
return goog.events.listen(G__23549,G__23550,G__23551);
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
var vec__23556 = temp__4124__auto__;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23556,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23556,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23556,(2),null);
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
var G__23558 = search;
var G__23558__$1 = (((G__23558 == null))?null:G__23558.toLowerCase());
var G__23558__$2 = (((G__23558__$1 == null))?null:G__23558__$1.split(/ /));
var G__23558__$3 = (((G__23558__$2 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,G__23558__$2));
return G__23558__$3;
});
lomakkeet.autocomplete.create_list_renderer = (function create_list_renderer(p__23559){
var map__23599 = p__23559;
var map__23599__$1 = ((cljs.core.seq_QMARK_(map__23599))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23599):map__23599);
var opts = map__23599__$1;
var term_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23599__$1,cljs.core.constant$keyword$172);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23599__$1,cljs.core.constant$keyword$173);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23599__$1,cljs.core.constant$keyword$174);
if(cljs.core.ifn_QMARK_(item__GT_key)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"item->key","item->key",-1747057492,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(item__GT_text)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"item->text","item->text",-1739995286,null))], 0)))].join('')));
}

var query_match_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.query_match_QMARK_,term_match_QMARK_);
return ((function (query_match_QMARK_,map__23599,map__23599__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (coll,query,cb){
var iter__4571__auto__ = ((function (query_match_QMARK_,map__23599,map__23599__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function iter__23600(s__23601){
return (new cljs.core.LazySeq(null,((function (query_match_QMARK_,map__23599,map__23599__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var s__23601__$1 = s__23601;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23601__$1);
if(temp__4126__auto__){
var s__23601__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23601__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__23601__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__23603 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__23602 = (0);
while(true){
if((i__23602 < size__4570__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__23602);
if(cljs.core.truth_((function (){var or__3815__auto__ = cljs.core.not(query);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var G__23624 = item;
var G__23625 = query;
return (query_match_QMARK_.cljs$core$IFn$_invoke$arity$2 ? query_match_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23624,G__23625) : query_match_QMARK_.call(null,G__23624,G__23625));
}
})())){
var text = (function (){var G__23626 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__23626) : item__GT_text.call(null,G__23626));
})();
cljs.core.chunk_append(b__23603,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$49,(function (){var G__23627 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23627) : item__GT_key.call(null,G__23627));
})(),cljs.core.constant$keyword$176,((function (i__23602,s__23601__$1,text,item,c__4569__auto__,size__4570__auto__,b__23603,s__23601__$2,temp__4126__auto__,query_match_QMARK_,map__23599,map__23599__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var G__23628 = (function (){var G__23629 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23629) : item__GT_key.call(null,G__23629));
})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23628) : cb.call(null,G__23628));
});})(i__23602,s__23601__$1,text,item,c__4569__auto__,size__4570__auto__,b__23603,s__23601__$2,temp__4126__auto__,query_match_QMARK_,map__23599,map__23599__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,cljs.core.constant$keyword$177,true], null),lomakkeet.autocomplete.highlight_match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,text], null),query)], null));

var G__23638 = (i__23602 + (1));
i__23602 = G__23638;
continue;
} else {
var G__23639 = (i__23602 + (1));
i__23602 = G__23639;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23603),iter__23600(cljs.core.chunk_rest(s__23601__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23603),null);
}
} else {
var item = cljs.core.first(s__23601__$2);
if(cljs.core.truth_((function (){var or__3815__auto__ = cljs.core.not(query);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var G__23632 = item;
var G__23633 = query;
return (query_match_QMARK_.cljs$core$IFn$_invoke$arity$2 ? query_match_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23632,G__23633) : query_match_QMARK_.call(null,G__23632,G__23633));
}
})())){
var text = (function (){var G__23634 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__23634) : item__GT_text.call(null,G__23634));
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$49,(function (){var G__23635 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23635) : item__GT_key.call(null,G__23635));
})(),cljs.core.constant$keyword$176,((function (s__23601__$1,text,item,s__23601__$2,temp__4126__auto__,query_match_QMARK_,map__23599,map__23599__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var G__23636 = (function (){var G__23637 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23637) : item__GT_key.call(null,G__23637));
})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23636) : cb.call(null,G__23636));
});})(s__23601__$1,text,item,s__23601__$2,temp__4126__auto__,query_match_QMARK_,map__23599,map__23599__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,cljs.core.constant$keyword$177,true], null),lomakkeet.autocomplete.highlight_match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,text], null),query)], null),iter__23600(cljs.core.rest(s__23601__$2)));
} else {
var G__23640 = cljs.core.rest(s__23601__$2);
s__23601__$1 = G__23640;
continue;
}
}
} else {
return null;
}
break;
}
});})(query_match_QMARK_,map__23599,map__23599__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,null,null));
});})(query_match_QMARK_,map__23599,map__23599__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
;
return iter__4571__auto__(coll);
});
;})(query_match_QMARK_,map__23599,map__23599__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
});

var ufv___23702 = schema.utils.use_fn_validation;
var output_schema23643_23703 = schema.core.Any;
var input_schema23644_23704 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23645_23705 = schema.core.checker(input_schema23644_23704);
var output_checker23646_23706 = schema.core.checker(output_schema23643_23703);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks renderer value->text loading-el load-items], :or {value->text identity, loading-el [:div "Loading..."]}, :as opts}]
*/
lomakkeet.autocomplete.autocomplete_STAR_ = ((function (ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function autocomplete_STAR_(G__23647,G__23648,G__23649){
var validate__12170__auto__ = ufv___23702.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___23707 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23647,G__23648,G__23649], null);
var temp__4126__auto___23708 = (function (){var G__23676 = args__12171__auto___23707;
return (input_checker23645_23705.cljs$core$IFn$_invoke$arity$1 ? input_checker23645_23705.cljs$core$IFn$_invoke$arity$1(G__23676) : input_checker23645_23705.call(null,G__23676));
})();
if(cljs.core.truth_(temp__4126__auto___23708)){
var error__12172__auto___23709 = temp__4126__auto___23708;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"autocomplete*","autocomplete*",1280941171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23709], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23709,cljs.core.constant$keyword$64,args__12171__auto___23707,cljs.core.constant$keyword$65,input_schema23644_23704,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var G__23679 = G__23647;
var map__23681 = G__23679;
var map__23681__$1 = ((cljs.core.seq_QMARK_(map__23681))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23681):map__23681);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23681__$1,cljs.core.constant$keyword$64);
var owner = G__23648;
var G__23680 = G__23649;
var map__23682 = G__23680;
var map__23682__$1 = ((cljs.core.seq_QMARK_(map__23682))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23682):map__23682);
var opts = map__23682__$1;
var load_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23682__$1,cljs.core.constant$keyword$179);
var loading_el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23682__$1,cljs.core.constant$keyword$180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,"Loading..."], null));
var value__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23682__$1,cljs.core.constant$keyword$181,cljs.core.identity);
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23682__$1,cljs.core.constant$keyword$182);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23682__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23682__$1,cljs.core.constant$keyword$145);
var G__23679__$1 = G__23679;
var owner__$1 = owner;
var G__23680__$1 = G__23680;
while(true){
var map__23683 = G__23679__$1;
var map__23683__$1 = ((cljs.core.seq_QMARK_(map__23683))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23683):map__23683);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23683__$1,cljs.core.constant$keyword$64);
var owner__$2 = owner__$1;
var map__23684 = G__23680__$1;
var map__23684__$1 = ((cljs.core.seq_QMARK_(map__23684))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23684):map__23684);
var opts__$1 = map__23684__$1;
var load_items__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23684__$1,cljs.core.constant$keyword$179);
var loading_el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23684__$1,cljs.core.constant$keyword$180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,"Loading..."], null));
var value__GT_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23684__$1,cljs.core.constant$keyword$181,cljs.core.identity);
var renderer__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23684__$1,cljs.core.constant$keyword$182);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23684__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23684__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.autocomplete.t23685 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.autocomplete.t23685 = (function (owner,G__23679,load_items,G__23680,G__23649,output_checker23646,map__23683,output_schema23643,G__23648,ks,map__23684,value,map__23682,map__23681,autocomplete_STAR_,input_checker23645,G__23647,value__GT_text,validate__12170__auto__,ch,renderer,input_schema23644,opts,loading_el,ufv__,meta23686){
this.owner = owner;
this.G__23679 = G__23679;
this.load_items = load_items;
this.G__23680 = G__23680;
this.G__23649 = G__23649;
this.output_checker23646 = output_checker23646;
this.map__23683 = map__23683;
this.output_schema23643 = output_schema23643;
this.G__23648 = G__23648;
this.ks = ks;
this.map__23684 = map__23684;
this.value = value;
this.map__23682 = map__23682;
this.map__23681 = map__23681;
this.autocomplete_STAR_ = autocomplete_STAR_;
this.input_checker23645 = input_checker23645;
this.G__23647 = G__23647;
this.value__GT_text = value__GT_text;
this.validate__12170__auto__ = validate__12170__auto__;
this.ch = ch;
this.renderer = renderer;
this.input_schema23644 = input_schema23644;
this.opts = opts;
this.loading_el = loading_el;
this.ufv__ = ufv__;
this.meta23686 = meta23686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.autocomplete.t23685.prototype.om$core$IDisplayName$ = true;

lomakkeet.autocomplete.t23685.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (_){
var self__ = this;
var ___$1 = this;
return "autocomplete*";
});})(map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
;

lomakkeet.autocomplete.t23685.prototype.om$core$IRenderState$ = true;

lomakkeet.autocomplete.t23685.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (_,p__23688){
var self__ = this;
var map__23689 = p__23688;
var map__23689__$1 = ((cljs.core.seq_QMARK_(map__23689))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23689):map__23689);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23689__$1,cljs.core.constant$keyword$183);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23689__$1,cljs.core.constant$keyword$184);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23689__$1,cljs.core.constant$keyword$168);
var ___$1 = this;
var G__23690 = "div";
var G__23691 = {"className": "selectize-control single"};
var G__23692 = sablono.interpreter.create_element("input",{"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selectize-input",(function (){var G__23696 = "";
var G__23696__$1 = (cljs.core.truth_(open_QMARK_)?[cljs.core.str(G__23696),cljs.core.str(" input-active dropdown-active")].join(''):G__23696);
return G__23696__$1;
})()], null)), "onFocus": ((function (G__23690,G__23691,___$1,map__23689,map__23689__$1,items,search,open_QMARK_,map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (e){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$168,true);

if(cljs.core.not(search)){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$184,"");
} else {
return null;
}
});})(G__23690,G__23691,___$1,map__23689,map__23689__$1,items,search,open_QMARK_,map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
, "onClick": ((function (G__23690,G__23691,___$1,map__23689,map__23689__$1,items,search,open_QMARK_,map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (e){
return e.stopPropagation();
});})(G__23690,G__23691,___$1,map__23689,map__23689__$1,items,search,open_QMARK_,map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
, "onChange": ((function (G__23690,G__23691,___$1,map__23689,map__23689__$1,items,search,open_QMARK_,map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (p1__23641_SHARP_){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$184,p1__23641_SHARP_.target.value);
});})(G__23690,G__23691,___$1,map__23689,map__23689__$1,items,search,open_QMARK_,map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
, "value": (cljs.core.truth_(search)?search:((cljs.core.seq(self__.value))?(function (){var G__23695 = self__.value;
return (self__.value__GT_text.cljs$core$IFn$_invoke$arity$1 ? self__.value__GT_text.cljs$core$IFn$_invoke$arity$1(G__23695) : self__.value__GT_text.call(null,G__23695));
})():""
)), "autoComplete": false, "onKeyUp": ((function (G__23690,G__23691,___$1,map__23689,map__23689__$1,items,search,open_QMARK_,map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (e){
var G__23694 = e.key;
switch (G__23694) {
default:
return null;

}
});})(G__23690,G__23691,___$1,map__23689,map__23689__$1,items,search,open_QMARK_,map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
});
var G__23693 = sablono.interpreter.interpret((cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,(cljs.core.truth_(items)?(function (){var G__23697 = items;
var G__23698 = lomakkeet.autocomplete.normalize_search(search);
var G__23699 = ((function (G__23697,G__23698,G__23690,G__23691,G__23692,___$1,map__23689,map__23689__$1,items,search,open_QMARK_,map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (id){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$64,id], null));

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$168,false);
});})(G__23697,G__23698,G__23690,G__23691,G__23692,___$1,map__23689,map__23689__$1,items,search,open_QMARK_,map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
;
return (self__.renderer.cljs$core$IFn$_invoke$arity$3 ? self__.renderer.cljs$core$IFn$_invoke$arity$3(G__23697,G__23698,G__23699) : self__.renderer.call(null,G__23697,G__23698,G__23699));
})():self__.loading_el)], null)], null):null));
return React.createElement(G__23690,G__23691,G__23692,G__23693);
});})(map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
;

lomakkeet.autocomplete.t23685.prototype.om$core$IWillUnmount$ = true;

lomakkeet.autocomplete.t23685.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (_){
var self__ = this;
var ___$1 = this;
return lomakkeet.autocomplete.closable_will_unmount(self__.owner);
});})(map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
;

lomakkeet.autocomplete.t23685.prototype.om$core$IWillMount$ = true;

lomakkeet.autocomplete.t23685.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23700_23711 = self__.owner;
(self__.load_items.cljs$core$IFn$_invoke$arity$1 ? self__.load_items.cljs$core$IFn$_invoke$arity$1(G__23700_23711) : self__.load_items.call(null,G__23700_23711));

return lomakkeet.autocomplete.closable_will_mount.cljs$core$IFn$_invoke$arity$variadic(self__.owner,cljs.core.array_seq([((function (___$1,map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$184,null);
});})(___$1,map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
], 0));
});})(map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
;

lomakkeet.autocomplete.t23685.prototype.om$core$IInitState$ = true;

lomakkeet.autocomplete.t23685.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$168,false,cljs.core.constant$keyword$184,null], null);
});})(map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
;

lomakkeet.autocomplete.t23685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (_23687){
var self__ = this;
var _23687__$1 = this;
return self__.meta23686;
});})(map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
;

lomakkeet.autocomplete.t23685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (_23687,meta23686__$1){
var self__ = this;
var _23687__$1 = this;
return (new lomakkeet.autocomplete.t23685(self__.owner,self__.G__23679,self__.load_items,self__.G__23680,self__.G__23649,self__.output_checker23646,self__.map__23683,self__.output_schema23643,self__.G__23648,self__.ks,self__.map__23684,self__.value,self__.map__23682,self__.map__23681,self__.autocomplete_STAR_,self__.input_checker23645,self__.G__23647,self__.value__GT_text,self__.validate__12170__auto__,self__.ch,self__.renderer,self__.input_schema23644,self__.opts,self__.loading_el,self__.ufv__,meta23686__$1));
});})(map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
;

lomakkeet.autocomplete.t23685.cljs$lang$type = true;

lomakkeet.autocomplete.t23685.cljs$lang$ctorStr = "lomakkeet.autocomplete/t23685";

lomakkeet.autocomplete.t23685.cljs$lang$ctorPrWriter = ((function (map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"lomakkeet.autocomplete/t23685");
});})(map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
;

lomakkeet.autocomplete.__GT_t23685 = ((function (map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706){
return (function __GT_t23685(owner__$3,G__23679__$2,load_items__$2,G__23680__$2,G__23649__$1,output_checker23646__$1,map__23683__$2,output_schema23643__$1,G__23648__$1,ks__$2,map__23684__$2,value__$2,map__23682__$2,map__23681__$2,autocomplete_STAR___$1,input_checker23645__$1,G__23647__$1,value__GT_text__$2,validate__12170__auto____$1,ch__$2,renderer__$2,input_schema23644__$1,opts__$2,loading_el__$2,ufv____$1,meta23686){
return (new lomakkeet.autocomplete.t23685(owner__$3,G__23679__$2,load_items__$2,G__23680__$2,G__23649__$1,output_checker23646__$1,map__23683__$2,output_schema23643__$1,G__23648__$1,ks__$2,map__23684__$2,value__$2,map__23682__$2,map__23681__$2,autocomplete_STAR___$1,input_checker23645__$1,G__23647__$1,value__GT_text__$2,validate__12170__auto____$1,ch__$2,renderer__$2,input_schema23644__$1,opts__$2,loading_el__$2,ufv____$1,meta23686));
});})(map__23683,map__23683__$1,value__$1,owner__$2,map__23684,map__23684__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23679,map__23681,map__23681__$1,value,owner,G__23680,map__23682,map__23682__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12170__auto__,ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
;

}

return (new lomakkeet.autocomplete.t23685(owner__$2,G__23679__$1,load_items__$1,G__23680__$1,G__23649,output_checker23646_23706,map__23683__$1,output_schema23643_23703,G__23648,ks__$1,map__23684__$1,value__$1,map__23682__$1,map__23681__$1,autocomplete_STAR_,input_checker23645_23705,G__23647,value__GT_text__$1,validate__12170__auto__,ch__$1,renderer__$1,input_schema23644_23704,opts__$1,loading_el__$1,ufv___23702,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___23712 = (function (){var G__23701 = o__12173__auto__;
return (output_checker23646_23706.cljs$core$IFn$_invoke$arity$1 ? output_checker23646_23706.cljs$core$IFn$_invoke$arity$1(G__23701) : output_checker23646_23706.call(null,G__23701));
})();
if(cljs.core.truth_(temp__4126__auto___23712)){
var error__12172__auto___23713 = temp__4126__auto___23712;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"autocomplete*","autocomplete*",1280941171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___23713], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___23713,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema23643_23703,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___23702,output_schema23643_23703,input_schema23644_23704,input_checker23645_23705,output_checker23646_23706))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.autocomplete.autocomplete_STAR_),schema.core.make_fn_schema(output_schema23643_23703,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23644_23704], null)));

lomakkeet.autocomplete.__GT_autocomplete_STAR_ = (function() {
var __GT_autocomplete_STAR_ = null;
var __GT_autocomplete_STAR___1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.autocomplete_STAR_,cursor__20405__auto__);
});
var __GT_autocomplete_STAR___2 = (function (cursor__20405__auto__,m23642){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.autocomplete.autocomplete_STAR_,cursor__20405__auto__,m23642);
});
__GT_autocomplete_STAR_ = function(cursor__20405__auto__,m23642){
switch(arguments.length){
case 1:
return __GT_autocomplete_STAR___1.call(this,cursor__20405__auto__);
case 2:
return __GT_autocomplete_STAR___2.call(this,cursor__20405__auto__,m23642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_autocomplete_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_autocomplete_STAR___1;
__GT_autocomplete_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_autocomplete_STAR___2;
return __GT_autocomplete_STAR_;
})()
;
