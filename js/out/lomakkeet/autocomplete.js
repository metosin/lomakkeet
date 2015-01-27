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
var closable_will_mount__delegate = function (owner,p__23425){
var vec__23430 = p__23425;
var close_cb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23430,(0),null);
var G__23431 = window;
var G__23432 = goog.events.EventType.CLICK;
var G__23433 = ((function (G__23431,G__23432,vec__23430,close_cb){
return (function (e){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$170,false);

if(cljs.core.truth_(close_cb)){
return (close_cb.cljs$core$IFn$_invoke$arity$0 ? close_cb.cljs$core$IFn$_invoke$arity$0() : close_cb.call(null));
} else {
return null;
}
});})(G__23431,G__23432,vec__23430,close_cb))
;
return goog.events.listen(G__23431,G__23432,G__23433);
};
var closable_will_mount = function (owner,var_args){
var p__23425 = null;
if (arguments.length > 1) {
var G__23434__i = 0, G__23434__a = new Array(arguments.length -  1);
while (G__23434__i < G__23434__a.length) {G__23434__a[G__23434__i] = arguments[G__23434__i + 1]; ++G__23434__i;}
  p__23425 = new cljs.core.IndexedSeq(G__23434__a,0);
} 
return closable_will_mount__delegate.call(this,owner,p__23425);};
closable_will_mount.cljs$lang$maxFixedArity = 1;
closable_will_mount.cljs$lang$applyTo = (function (arglist__23435){
var owner = cljs.core.first(arglist__23435);
var p__23425 = cljs.core.rest(arglist__23435);
return closable_will_mount__delegate(owner,p__23425);
});
closable_will_mount.cljs$core$IFn$_invoke$arity$variadic = closable_will_mount__delegate;
return closable_will_mount;
})()
;
lomakkeet.autocomplete.closable_will_unmount = (function closable_will_unmount(owner){
return null;
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
var vec__23437 = temp__4124__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23437,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23437,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23437,(2),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23437,(3),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,a,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,b], null),c], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,el);
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,el);
}
}),cljs.core.PersistentVector.EMPTY,output);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,text], null),query);
});
lomakkeet.autocomplete.query_match_QMARK_ = (function query_match_QMARK_(term_match_QMARK_,v,query){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(term_match_QMARK_,v),query);
});
lomakkeet.autocomplete.matches = (function matches(term_match_QMARK_,v,query){
var m = cljs.core.group_by(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(term_match_QMARK_,v),query);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,true),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,false)], null);
});
lomakkeet.autocomplete.normalize_search = (function normalize_search(search){
var G__23439 = search;
var G__23439__$1 = (((G__23439 == null))?null:G__23439.toLowerCase());
var G__23439__$2 = (((G__23439__$1 == null))?null:G__23439__$1.split(/ /));
var G__23439__$3 = (((G__23439__$2 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,G__23439__$2));
return G__23439__$3;
});
lomakkeet.autocomplete.create_list_renderer = (function create_list_renderer(p__23440){
var map__23480 = p__23440;
var map__23480__$1 = ((cljs.core.seq_QMARK_(map__23480))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23480):map__23480);
var opts = map__23480__$1;
var term_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23480__$1,cljs.core.constant$keyword$173);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23480__$1,cljs.core.constant$keyword$174);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23480__$1,cljs.core.constant$keyword$175);
if(cljs.core.ifn_QMARK_(item__GT_key)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"item->key","item->key",-1747057492,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(item__GT_text)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"item->text","item->text",-1739995286,null))], 0)))].join('')));
}

var query_match_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.query_match_QMARK_,term_match_QMARK_);
return ((function (query_match_QMARK_,map__23480,map__23480__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (coll,query,cb){
var iter__5007__auto__ = ((function (query_match_QMARK_,map__23480,map__23480__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function iter__23481(s__23482){
return (new cljs.core.LazySeq(null,((function (query_match_QMARK_,map__23480,map__23480__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var s__23482__$1 = s__23482;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23482__$1);
if(temp__4126__auto__){
var s__23482__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23482__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__23482__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__23484 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__23483 = (0);
while(true){
if((i__23483 < size__5006__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__23483);
if(cljs.core.truth_((function (){var or__4251__auto__ = cljs.core.not(query);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var G__23505 = item;
var G__23506 = query;
return (query_match_QMARK_.cljs$core$IFn$_invoke$arity$2 ? query_match_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23505,G__23506) : query_match_QMARK_.call(null,G__23505,G__23506));
}
})())){
var text = (function (){var G__23507 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__23507) : item__GT_text.call(null,G__23507));
})();
cljs.core.chunk_append(b__23484,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,(function (){var G__23508 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23508) : item__GT_key.call(null,G__23508));
})(),cljs.core.constant$keyword$177,((function (i__23483,s__23482__$1,text,item,c__5005__auto__,size__5006__auto__,b__23484,s__23482__$2,temp__4126__auto__,query_match_QMARK_,map__23480,map__23480__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var G__23509 = (function (){var G__23510 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23510) : item__GT_key.call(null,G__23510));
})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23509) : cb.call(null,G__23509));
});})(i__23483,s__23482__$1,text,item,c__5005__auto__,size__5006__auto__,b__23484,s__23482__$2,temp__4126__auto__,query_match_QMARK_,map__23480,map__23480__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,cljs.core.constant$keyword$178,true], null),(cljs.core.truth_(query)?lomakkeet.autocomplete.highlight_match(text,query):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,text], null))], null));

var G__23519 = (i__23483 + (1));
i__23483 = G__23519;
continue;
} else {
var G__23520 = (i__23483 + (1));
i__23483 = G__23520;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23484),iter__23481(cljs.core.chunk_rest(s__23482__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23484),null);
}
} else {
var item = cljs.core.first(s__23482__$2);
if(cljs.core.truth_((function (){var or__4251__auto__ = cljs.core.not(query);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var G__23513 = item;
var G__23514 = query;
return (query_match_QMARK_.cljs$core$IFn$_invoke$arity$2 ? query_match_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23513,G__23514) : query_match_QMARK_.call(null,G__23513,G__23514));
}
})())){
var text = (function (){var G__23515 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__23515) : item__GT_text.call(null,G__23515));
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,(function (){var G__23516 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23516) : item__GT_key.call(null,G__23516));
})(),cljs.core.constant$keyword$177,((function (s__23482__$1,text,item,s__23482__$2,temp__4126__auto__,query_match_QMARK_,map__23480,map__23480__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key){
return (function (){
var G__23517 = (function (){var G__23518 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__23518) : item__GT_key.call(null,G__23518));
})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23517) : cb.call(null,G__23517));
});})(s__23482__$1,text,item,s__23482__$2,temp__4126__auto__,query_match_QMARK_,map__23480,map__23480__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,cljs.core.constant$keyword$178,true], null),(cljs.core.truth_(query)?lomakkeet.autocomplete.highlight_match(text,query):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,text], null))], null),iter__23481(cljs.core.rest(s__23482__$2)));
} else {
var G__23521 = cljs.core.rest(s__23482__$2);
s__23482__$1 = G__23521;
continue;
}
}
} else {
return null;
}
break;
}
});})(query_match_QMARK_,map__23480,map__23480__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
,null,null));
});})(query_match_QMARK_,map__23480,map__23480__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
;
return iter__5007__auto__(coll);
});
;})(query_match_QMARK_,map__23480,map__23480__$1,opts,term_match_QMARK_,item__GT_text,item__GT_key))
});

var ufv___23581 = schema.utils.use_fn_validation;
var output_schema23524_23582 = schema.core.Any;
var input_schema23525_23583 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker23526_23584 = schema.core.checker(input_schema23525_23583);
var output_checker23527_23585 = schema.core.checker(output_schema23524_23582);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks renderer value->text loading-el load-items], :or {value->text identity, loading-el [:div "Loading..."]}, :as opts}]
*/
lomakkeet.autocomplete.autocomplete_STAR_ = ((function (ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function autocomplete_STAR_(G__23528,G__23529,G__23530){
var validate__12581__auto__ = ufv___23581.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___23586 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23528,G__23529,G__23530], null);
var temp__4126__auto___23587 = (function (){var G__23556 = args__12582__auto___23586;
return (input_checker23526_23584.cljs$core$IFn$_invoke$arity$1 ? input_checker23526_23584.cljs$core$IFn$_invoke$arity$1(G__23556) : input_checker23526_23584.call(null,G__23556));
})();
if(cljs.core.truth_(temp__4126__auto___23587)){
var error__12583__auto___23588 = temp__4126__auto___23587;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"autocomplete*","autocomplete*",1280941171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23588], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23588,cljs.core.constant$keyword$66,args__12582__auto___23586,cljs.core.constant$keyword$67,input_schema23525_23583,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var G__23559 = G__23528;
var map__23561 = G__23559;
var map__23561__$1 = ((cljs.core.seq_QMARK_(map__23561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23561):map__23561);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23561__$1,cljs.core.constant$keyword$66);
var owner = G__23529;
var G__23560 = G__23530;
var map__23562 = G__23560;
var map__23562__$1 = ((cljs.core.seq_QMARK_(map__23562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23562):map__23562);
var opts = map__23562__$1;
var load_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23562__$1,cljs.core.constant$keyword$179);
var loading_el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23562__$1,cljs.core.constant$keyword$180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,"Loading..."], null));
var value__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23562__$1,cljs.core.constant$keyword$181,cljs.core.identity);
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23562__$1,cljs.core.constant$keyword$182);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23562__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23562__$1,cljs.core.constant$keyword$147);
var G__23559__$1 = G__23559;
var owner__$1 = owner;
var G__23560__$1 = G__23560;
while(true){
var map__23563 = G__23559__$1;
var map__23563__$1 = ((cljs.core.seq_QMARK_(map__23563))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23563):map__23563);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23563__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__23564 = G__23560__$1;
var map__23564__$1 = ((cljs.core.seq_QMARK_(map__23564))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23564):map__23564);
var opts__$1 = map__23564__$1;
var load_items__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23564__$1,cljs.core.constant$keyword$179);
var loading_el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23564__$1,cljs.core.constant$keyword$180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,"Loading..."], null));
var value__GT_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23564__$1,cljs.core.constant$keyword$181,cljs.core.identity);
var renderer__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23564__$1,cljs.core.constant$keyword$182);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23564__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23564__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.autocomplete.t23565 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.autocomplete.t23565 = (function (G__23560,owner,load_items,G__23528,validate__12581__auto__,input_checker23526,G__23529,G__23559,input_schema23525,ks,map__23564,value,output_schema23524,autocomplete_STAR_,value__GT_text,ch,renderer,G__23530,output_checker23527,map__23562,map__23563,map__23561,opts,loading_el,ufv__,meta23566){
this.G__23560 = G__23560;
this.owner = owner;
this.load_items = load_items;
this.G__23528 = G__23528;
this.validate__12581__auto__ = validate__12581__auto__;
this.input_checker23526 = input_checker23526;
this.G__23529 = G__23529;
this.G__23559 = G__23559;
this.input_schema23525 = input_schema23525;
this.ks = ks;
this.map__23564 = map__23564;
this.value = value;
this.output_schema23524 = output_schema23524;
this.autocomplete_STAR_ = autocomplete_STAR_;
this.value__GT_text = value__GT_text;
this.ch = ch;
this.renderer = renderer;
this.G__23530 = G__23530;
this.output_checker23527 = output_checker23527;
this.map__23562 = map__23562;
this.map__23563 = map__23563;
this.map__23561 = map__23561;
this.opts = opts;
this.loading_el = loading_el;
this.ufv__ = ufv__;
this.meta23566 = meta23566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.autocomplete.t23565.prototype.om$core$IDisplayName$ = true;

lomakkeet.autocomplete.t23565.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (_){
var self__ = this;
var ___$1 = this;
return "autocomplete*";
});})(map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
;

lomakkeet.autocomplete.t23565.prototype.om$core$IRenderState$ = true;

lomakkeet.autocomplete.t23565.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (_,p__23568){
var self__ = this;
var map__23569 = p__23568;
var map__23569__$1 = ((cljs.core.seq_QMARK_(map__23569))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23569):map__23569);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23569__$1,cljs.core.constant$keyword$183);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23569__$1,cljs.core.constant$keyword$184);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23569__$1,cljs.core.constant$keyword$170);
var ___$1 = this;
var G__23570 = {"className": "selectize-control single"};
var G__23571 = (function (){var G__23573 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selectize-input",(function (){var G__23575 = "";
var G__23575__$1 = (cljs.core.truth_(open_QMARK_)?[cljs.core.str(G__23575),cljs.core.str(" input-active dropdown-active")].join(''):G__23575);
return G__23575__$1;
})()], null)), "onFocus": ((function (G__23570,___$1,map__23569,map__23569__$1,items,search,open_QMARK_,map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (e){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$170,true);

if(cljs.core.not(search)){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$184,"");
} else {
return null;
}
});})(G__23570,___$1,map__23569,map__23569__$1,items,search,open_QMARK_,map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
, "onClick": ((function (G__23570,___$1,map__23569,map__23569__$1,items,search,open_QMARK_,map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (e){
return e.stopPropagation();
});})(G__23570,___$1,map__23569,map__23569__$1,items,search,open_QMARK_,map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
, "onChange": ((function (G__23570,___$1,map__23569,map__23569__$1,items,search,open_QMARK_,map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (p1__23522_SHARP_){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$184,p1__23522_SHARP_.target.value);
});})(G__23570,___$1,map__23569,map__23569__$1,items,search,open_QMARK_,map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
, "value": (cljs.core.truth_(search)?search:((cljs.core.seq(self__.value))?(function (){var G__23574 = self__.value;
return (self__.value__GT_text.cljs$core$IFn$_invoke$arity$1 ? self__.value__GT_text.cljs$core$IFn$_invoke$arity$1(G__23574) : self__.value__GT_text.call(null,G__23574));
})():""
))};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__23573) : sablono.interpreter.input.call(null,G__23573));
})();
var G__23572 = sablono.interpreter.interpret((cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,(cljs.core.truth_(items)?(function (){var G__23576 = items;
var G__23577 = lomakkeet.autocomplete.normalize_search(search);
var G__23578 = ((function (G__23576,G__23577,G__23570,G__23571,___$1,map__23569,map__23569__$1,items,search,open_QMARK_,map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (id){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,id], null));

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$170,false);
});})(G__23576,G__23577,G__23570,G__23571,___$1,map__23569,map__23569__$1,items,search,open_QMARK_,map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
;
return (self__.renderer.cljs$core$IFn$_invoke$arity$3 ? self__.renderer.cljs$core$IFn$_invoke$arity$3(G__23576,G__23577,G__23578) : self__.renderer.call(null,G__23576,G__23577,G__23578));
})():self__.loading_el)], null)], null):null));
return React.DOM.div(G__23570,G__23571,G__23572);
});})(map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
;

lomakkeet.autocomplete.t23565.prototype.om$core$IWillUnmount$ = true;

lomakkeet.autocomplete.t23565.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (_){
var self__ = this;
var ___$1 = this;
return lomakkeet.autocomplete.closable_will_unmount(self__.owner);
});})(map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
;

lomakkeet.autocomplete.t23565.prototype.om$core$IWillMount$ = true;

lomakkeet.autocomplete.t23565.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23579_23589 = self__.owner;
(self__.load_items.cljs$core$IFn$_invoke$arity$1 ? self__.load_items.cljs$core$IFn$_invoke$arity$1(G__23579_23589) : self__.load_items.call(null,G__23579_23589));

return lomakkeet.autocomplete.closable_will_mount.cljs$core$IFn$_invoke$arity$variadic(self__.owner,cljs.core.array_seq([((function (___$1,map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$184,null);
});})(___$1,map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
], 0));
});})(map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
;

lomakkeet.autocomplete.t23565.prototype.om$core$IInitState$ = true;

lomakkeet.autocomplete.t23565.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$170,false,cljs.core.constant$keyword$184,null], null);
});})(map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
;

lomakkeet.autocomplete.t23565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (_23567){
var self__ = this;
var _23567__$1 = this;
return self__.meta23566;
});})(map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
;

lomakkeet.autocomplete.t23565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (_23567,meta23566__$1){
var self__ = this;
var _23567__$1 = this;
return (new lomakkeet.autocomplete.t23565(self__.G__23560,self__.owner,self__.load_items,self__.G__23528,self__.validate__12581__auto__,self__.input_checker23526,self__.G__23529,self__.G__23559,self__.input_schema23525,self__.ks,self__.map__23564,self__.value,self__.output_schema23524,self__.autocomplete_STAR_,self__.value__GT_text,self__.ch,self__.renderer,self__.G__23530,self__.output_checker23527,self__.map__23562,self__.map__23563,self__.map__23561,self__.opts,self__.loading_el,self__.ufv__,meta23566__$1));
});})(map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
;

lomakkeet.autocomplete.t23565.cljs$lang$type = true;

lomakkeet.autocomplete.t23565.cljs$lang$ctorStr = "lomakkeet.autocomplete/t23565";

lomakkeet.autocomplete.t23565.cljs$lang$ctorPrWriter = ((function (map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"lomakkeet.autocomplete/t23565");
});})(map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
;

lomakkeet.autocomplete.__GT_t23565 = ((function (map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585){
return (function __GT_t23565(G__23560__$2,owner__$3,load_items__$2,G__23528__$1,validate__12581__auto____$1,input_checker23526__$1,G__23529__$1,G__23559__$2,input_schema23525__$1,ks__$2,map__23564__$2,value__$2,output_schema23524__$1,autocomplete_STAR___$1,value__GT_text__$2,ch__$2,renderer__$2,G__23530__$1,output_checker23527__$1,map__23562__$2,map__23563__$2,map__23561__$2,opts__$2,loading_el__$2,ufv____$1,meta23566){
return (new lomakkeet.autocomplete.t23565(G__23560__$2,owner__$3,load_items__$2,G__23528__$1,validate__12581__auto____$1,input_checker23526__$1,G__23529__$1,G__23559__$2,input_schema23525__$1,ks__$2,map__23564__$2,value__$2,output_schema23524__$1,autocomplete_STAR___$1,value__GT_text__$2,ch__$2,renderer__$2,G__23530__$1,output_checker23527__$1,map__23562__$2,map__23563__$2,map__23561__$2,opts__$2,loading_el__$2,ufv____$1,meta23566));
});})(map__23563,map__23563__$1,value__$1,owner__$2,map__23564,map__23564__$1,opts__$1,load_items__$1,loading_el__$1,value__GT_text__$1,renderer__$1,ks__$1,ch__$1,G__23559,map__23561,map__23561__$1,value,owner,G__23560,map__23562,map__23562__$1,opts,load_items,loading_el,value__GT_text,renderer,ks,ch,validate__12581__auto__,ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
;

}

return (new lomakkeet.autocomplete.t23565(G__23560__$1,owner__$2,load_items__$1,G__23528,validate__12581__auto__,input_checker23526_23584,G__23529,G__23559__$1,input_schema23525_23583,ks__$1,map__23564__$1,value__$1,output_schema23524_23582,autocomplete_STAR_,value__GT_text__$1,ch__$1,renderer__$1,G__23530,output_checker23527_23585,map__23562__$1,map__23563__$1,map__23561__$1,opts__$1,loading_el__$1,ufv___23581,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___23590 = (function (){var G__23580 = o__12584__auto__;
return (output_checker23527_23585.cljs$core$IFn$_invoke$arity$1 ? output_checker23527_23585.cljs$core$IFn$_invoke$arity$1(G__23580) : output_checker23527_23585.call(null,G__23580));
})();
if(cljs.core.truth_(temp__4126__auto___23590)){
var error__12583__auto___23591 = temp__4126__auto___23590;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"autocomplete*","autocomplete*",1280941171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___23591], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___23591,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema23524_23582,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___23581,output_schema23524_23582,input_schema23525_23583,input_checker23526_23584,output_checker23527_23585))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.autocomplete.autocomplete_STAR_),schema.core.make_fn_schema(output_schema23524_23582,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23525_23583], null)));

lomakkeet.autocomplete.__GT_autocomplete_STAR_ = (function() {
var __GT_autocomplete_STAR_ = null;
var __GT_autocomplete_STAR___1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.autocomplete.autocomplete_STAR_,cursor__20832__auto__);
});
var __GT_autocomplete_STAR___2 = (function (cursor__20832__auto__,m23523){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.autocomplete.autocomplete_STAR_,cursor__20832__auto__,m23523);
});
__GT_autocomplete_STAR_ = function(cursor__20832__auto__,m23523){
switch(arguments.length){
case 1:
return __GT_autocomplete_STAR___1.call(this,cursor__20832__auto__);
case 2:
return __GT_autocomplete_STAR___2.call(this,cursor__20832__auto__,m23523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_autocomplete_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_autocomplete_STAR___1;
__GT_autocomplete_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_autocomplete_STAR___2;
return __GT_autocomplete_STAR_;
})()
;
