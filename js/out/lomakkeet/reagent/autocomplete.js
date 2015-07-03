// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('lomakkeet.reagent.autocomplete');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('lomakkeet.reagent.impl');
goog.require('reagent.ratom');
goog.require('lomakkeet.util');
goog.require('lomakkeet.autocomplete');
goog.require('lomakkeet.reagent.mixins');
lomakkeet.reagent.autocomplete.blur = (function lomakkeet$reagent$autocomplete$blur(open_QMARK_,search,e){
if(cljs.core.truth_(e.relatedTarget)){
var G__17621_17625 = open_QMARK_;
var G__17622_17626 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17621_17625,G__17622_17626) : cljs.core.reset_BANG_.call(null,G__17621_17625,G__17622_17626));

var G__17623_17627 = search;
var G__17624_17628 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17623_17627,G__17624_17628) : cljs.core.reset_BANG_.call(null,G__17623_17627,G__17624_17628));
} else {
}

return null;
});
lomakkeet.reagent.autocomplete.click = (function lomakkeet$reagent$autocomplete$click(open_QMARK_,disabled_QMARK_,e){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
var G__17631_17633 = open_QMARK_;
var G__17632_17634 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17631_17633,G__17632_17634) : cljs.core.reset_BANG_.call(null,G__17631_17633,G__17632_17634));

e.stopPropagation();
}

return null;
});
lomakkeet.reagent.autocomplete.focus = (function lomakkeet$reagent$autocomplete$focus(open_QMARK_,search,e){
if(cljs.core.not((function (){var G__17640 = open_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17640) : cljs.core.deref.call(null,G__17640));
})())){
var G__17641_17645 = search;
var G__17642_17646 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17641_17645,G__17642_17646) : cljs.core.reset_BANG_.call(null,G__17641_17645,G__17642_17646));
} else {
}

var G__17643_17647 = open_QMARK_;
var G__17644_17648 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17643_17647,G__17644_17648) : cljs.core.reset_BANG_.call(null,G__17643_17647,G__17644_17648));

return null;
});
lomakkeet.reagent.autocomplete.change = (function lomakkeet$reagent$autocomplete$change(search,cb,e){
var v_17655 = e.target.value;
var G__17652_17656 = search;
var G__17653_17657 = v_17655;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17652_17656,G__17653_17657) : cljs.core.reset_BANG_.call(null,G__17652_17656,G__17653_17657));

if(cljs.core.truth_(cb)){
var G__17654_17658 = v_17655;
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__17654_17658) : cb.call(null,G__17654_17658));
} else {
}

return null;
});
lomakkeet.reagent.autocomplete.key_down = (function lomakkeet$reagent$autocomplete$key_down(open_QMARK_,search,results,selected,n,find_by_selection,cb,e){
var change_selection = (function lomakkeet$reagent$autocomplete$key_down_$_change_selection(f,e__$1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lomakkeet.util.limit,(0),(function (){var G__17674 = n;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17674) : cljs.core.deref.call(null,G__17674));
})()),f));

e__$1.preventDefault();

return e__$1.stopPropagation();
});
var G__17675_17687 = open_QMARK_;
var G__17676_17688 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17675_17687,G__17676_17688) : cljs.core.reset_BANG_.call(null,G__17675_17687,G__17676_17688));

var G__17677 = e.key;
switch (G__17677) {
case "Enter":
var temp__4425__auto__ = (function (){var G__17678 = (function (){var G__17680 = results;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17680) : cljs.core.deref.call(null,G__17680));
})();
var G__17679 = (function (){var G__17681 = selected;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17681) : cljs.core.deref.call(null,G__17681));
})();
return (find_by_selection.cljs$core$IFn$_invoke$arity$2 ? find_by_selection.cljs$core$IFn$_invoke$arity$2(G__17678,G__17679) : find_by_selection.call(null,G__17678,G__17679));
})();
if(cljs.core.truth_(temp__4425__auto__)){
var v = temp__4425__auto__;
var G__17682_17690 = v;
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__17682_17690) : cb.call(null,G__17682_17690));

var G__17683_17691 = open_QMARK_;
var G__17684_17692 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17683_17691,G__17684_17692) : cljs.core.reset_BANG_.call(null,G__17683_17691,G__17684_17692));

var G__17685 = search;
var G__17686 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17685,G__17686) : cljs.core.reset_BANG_.call(null,G__17685,G__17686));
} else {
return null;
}

break;
case "ArrowUp":
return change_selection(cljs.core.dec,e);

break;
case "ArrowDown":
return change_selection(cljs.core.inc,e);

break;
default:
return null;

}
});
lomakkeet.reagent.autocomplete.filter_results = (function lomakkeet$reagent$autocomplete$filter_results(term_match_fn,n,items,query,value,p__17693){
var map__17701 = p__17693;
var map__17701__$1 = ((cljs.core.seq_QMARK_(map__17701))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17701):map__17701);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17701__$1,cljs.core.constant$keyword$item_DASH__GT_text);
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17701__$1,cljs.core.constant$keyword$multiple_QMARK_);
var filter_current_out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17701__$1,cljs.core.constant$keyword$filter_DASH_current_DASH_out_QMARK_);
var item__GT_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17701__$1,cljs.core.constant$keyword$item_DASH__GT_value);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17701__$1,cljs.core.constant$keyword$item_DASH__GT_key);
var G__17702_17708 = n;
var G__17703_17709 = (-1);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17702_17708,G__17703_17709) : cljs.core.reset_BANG_.call(null,G__17702_17708,G__17703_17709));

var map_to_seq = ((cljs.core.map_QMARK_(items))?cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__17701,map__17701__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key){
return (function (v){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$key,cljs.core.key(v),cljs.core.constant$keyword$value,cljs.core.val(v)], null);
});})(map__17701,map__17701__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key))
):cljs.core.identity);
var filter_search = (cljs.core.truth_((function (){var and__4326__auto__ = term_match_fn;
if(cljs.core.truth_(and__4326__auto__)){
return query;
} else {
return and__4326__auto__;
}
})())?cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map_to_seq,map__17701,map__17701__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key){
return (function (item){
return lomakkeet.autocomplete.query_match_QMARK_(term_match_fn,item,query);
});})(map_to_seq,map__17701,map__17701__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key))
):cljs.core.identity);
var filter_current = (cljs.core.truth_(filter_current_out_QMARK_)?(function (){var value_set = cljs.core.set(value);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(multiple_QMARK_)?((function (value_set,map_to_seq,filter_search,map__17701,map__17701__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key){
return (function (item){
var G__17704 = (function (){var G__17705 = item;
return (item__GT_value.cljs$core$IFn$_invoke$arity$1 ? item__GT_value.cljs$core$IFn$_invoke$arity$1(G__17705) : item__GT_value.call(null,G__17705));
})();
return (value_set.cljs$core$IFn$_invoke$arity$1 ? value_set.cljs$core$IFn$_invoke$arity$1(G__17704) : value_set.call(null,G__17704));
});})(value_set,map_to_seq,filter_search,map__17701,map__17701__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key))
:((function (value_set,map_to_seq,filter_search,map__17701,map__17701__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key){
return (function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17706 = item;
return (item__GT_value.cljs$core$IFn$_invoke$arity$1 ? item__GT_value.cljs$core$IFn$_invoke$arity$1(G__17706) : item__GT_value.call(null,G__17706));
})(),value);
});})(value_set,map_to_seq,filter_search,map__17701,map__17701__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key))
));
})():cljs.core.identity);
var add_index = cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map_to_seq,filter_search,filter_current,map__17701,map__17701__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key){
return (function (v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.constant$keyword$lomakkeet$autocomplete_SLASH_i,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.inc));
});})(map_to_seq,filter_search,filter_current,map__17701,map__17701__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key))
);
var add_highlighted_str = ((cljs.core.seq(query))?cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map_to_seq,filter_search,filter_current,add_index,map__17701,map__17701__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key){
return (function (v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.constant$keyword$lomakkeet$reagent$autocomplete_SLASH_text,lomakkeet.autocomplete.highlight_string((function (){var G__17707 = v;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__17707) : item__GT_text.call(null,G__17707));
})(),query));
});})(map_to_seq,filter_search,filter_current,add_index,map__17701,map__17701__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key))
):cljs.core.identity);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(map_to_seq,filter_search,filter_current,cljs.core.array_seq([add_index,add_highlighted_str], 0)),items);
});
lomakkeet.reagent.autocomplete.choice_item = (function lomakkeet$reagent$autocomplete$choice_item(item,selected,cb,p__17710){
var map__17716 = p__17710;
var map__17716__$1 = ((cljs.core.seq_QMARK_(map__17716))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17716):map__17716);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17716__$1,cljs.core.constant$keyword$item_DASH__GT_key);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17716__$1,cljs.core.constant$keyword$item_DASH__GT_text);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$key,(function (){var G__17717 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17717) : item__GT_key.call(null,G__17717));
})(),cljs.core.constant$keyword$on_DASH_click,((function (map__17716,map__17716__$1,item__GT_key,item__GT_text){
return (function() { 
var G__17721__delegate = function (_){
var G__17718_17722 = item;
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__17718_17722) : cb.call(null,G__17718_17722));

return null;
};
var G__17721 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__17723__i = 0, G__17723__a = new Array(arguments.length -  0);
while (G__17723__i < G__17723__a.length) {G__17723__a[G__17723__i] = arguments[G__17723__i + 0]; ++G__17723__i;}
  _ = new cljs.core.IndexedSeq(G__17723__a,0);
} 
return G__17721__delegate.call(this,_);};
G__17721.cljs$lang$maxFixedArity = 0;
G__17721.cljs$lang$applyTo = (function (arglist__17724){
var _ = cljs.core.seq(arglist__17724);
return G__17721__delegate(_);
});
G__17721.cljs$core$IFn$_invoke$arity$variadic = G__17721__delegate;
return G__17721;
})()
;})(map__17716,map__17716__$1,item__GT_key,item__GT_text))
,cljs.core.constant$keyword$class,[cljs.core.str("option "),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$lomakkeet$autocomplete_SLASH_i.cljs$core$IFn$_invoke$arity$1(item),(function (){var G__17719 = selected;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17719) : cljs.core.deref.call(null,G__17719));
})()))?"active":null))].join('')], null),(function (){var or__4338__auto__ = cljs.core.constant$keyword$lomakkeet$reagent$autocomplete_SLASH_text.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var G__17720 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__17720) : item__GT_text.call(null,G__17720));
}
})()], null);
});
lomakkeet.reagent.autocomplete.get_or_deref = (function lomakkeet$reagent$autocomplete$get_or_deref(x){
if((function (){var G__17727 = x;
if(G__17727){
var bit__5012__auto__ = (G__17727.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5012__auto__) || (G__17727.cljs$core$IDeref$)){
return true;
} else {
if((!G__17727.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17727);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17727);
}
})()){
var G__17728 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17728) : cljs.core.deref.call(null,G__17728));
} else {
return x;
}
});
lomakkeet.reagent.autocomplete.defaults = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$value_DASH__GT_text,cljs.core.get,cljs.core.constant$keyword$item_DASH__GT_key,cljs.core.constant$keyword$key,cljs.core.constant$keyword$item_DASH__GT_text,cljs.core.constant$keyword$value,cljs.core.constant$keyword$item_DASH_removable_QMARK_,cljs.core.constantly(true),cljs.core.constant$keyword$value_DASH__GT_search,cljs.core.identity,cljs.core.constant$keyword$_DASH__GT_query,lomakkeet.autocomplete.default__GT_query,cljs.core.constant$keyword$not_DASH_results_DASH_text,"No results"], null);
lomakkeet.reagent.autocomplete.assert_opts = (function lomakkeet$reagent$autocomplete$assert_opts(p__17729){
var map__17732 = p__17729;
var map__17732__$1 = ((cljs.core.seq_QMARK_(map__17732))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17732):map__17732);
var opts = map__17732__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17732__$1,cljs.core.constant$keyword$items);
var load_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17732__$1,cljs.core.constant$keyword$load_DASH_items);
var filter_current_out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17732__$1,cljs.core.constant$keyword$filter_DASH_current_DASH_out_QMARK_);
var value_is_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17732__$1,cljs.core.constant$keyword$value_DASH_is_DASH_search_QMARK_);
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17732__$1,cljs.core.constant$keyword$multiple_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17732__$1,cljs.core.constant$keyword$value);
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17732__$1,cljs.core.constant$keyword$cb);
if(cljs.core.not((function (){var and__4326__auto__ = items;
if(cljs.core.truth_(and__4326__auto__)){
return load_items;
} else {
return and__4326__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(":items and :load-items are exclusive."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.Symbol(null,"load-items","load-items",1918023525,null)))], 0)))].join('')));
}

if((cljs.core.truth_((function (){var or__4338__auto__ = load_items;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return filter_current_out_QMARK_;
}
})())?(function (){var G__17733 = value;
if(G__17733){
var bit__5012__auto__ = (G__17733.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5012__auto__) || (G__17733.cljs$core$IDeref$)){
return true;
} else {
if((!G__17733.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17733);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17733);
}
})():true)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Using either :load-items or :filter-current-out? requires dereffable value"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"load-items","load-items",1918023525,null),new cljs.core.Symbol(null,"filter-current-out?","filter-current-out?",-1745897585,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"value","value",1946509744,null)),true)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(cb)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Callback function is required"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null))], 0)))].join('')));
}

if((cljs.core.truth_(value_is_search_QMARK_)?cljs.core.not(multiple_QMARK_):true)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(":value-is-search? doesn't work together with :multiple?"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"value-is-search?","value-is-search?",1218641784,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"multiple?","multiple?",1150529244,null)),true)], 0)))].join('')));
}

return opts;
});
/**
 * :value - (required) IDeref or value
 * :cb - (required) Function. [value]
 * :remove-cb - For multiple?
 * :on-blur - Input :on-blur. Might be useful for form pristine handling.
 * :items
 * :load-items
 * :value->search
 * :value->text
 * :item->key
 * :item->value
 * :item-removable? - predicate function to determine if item is non-removable
 * :value-is-search? - Save the search value using cb instantly and always display the value.
 * :term-match-fn
 * :search-fields
 * :->query
 * :find-by-selection
 * :clearable?
 * :multiple?
 * :group-by
 * :groups
 * :filter-current-opt?
 * 
 * Localization
 * :placeholder
 * :no-results-text
 * 
 * Style
 * :ctrl-class
 * :input-class
 * :disabled?
 */
lomakkeet.reagent.autocomplete.autocomplete = (function lomakkeet$reagent$autocomplete$autocomplete(opts){
var map__17850 = lomakkeet.reagent.autocomplete.assert_opts(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([lomakkeet.reagent.autocomplete.defaults,opts], 0)));
var map__17850__$1 = ((cljs.core.seq_QMARK_(map__17850))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17850):map__17850);
var opts__$1 = map__17850__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$items);
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$groups);
var value__GT_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$value_DASH__GT_search);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$disabled_QMARK_);
var __GT_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$_DASH__GT_query);
var load_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$load_DASH_items);
var item_removable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$item_DASH_removable_QMARK_);
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$cb);
var search_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$search_DASH_fields);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$item_DASH__GT_key);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$placeholder);
var clearable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$clearable_QMARK_);
var remove_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$remove_DASH_cb);
var group_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$group_DASH_by);
var ctrl_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$ctrl_DASH_class);
var filter_current_out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$filter_DASH_current_DASH_out_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$value);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$on_DASH_blur);
var no_results_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$no_DASH_results_DASH_text);
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$input_DASH_class);
var value__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$value_DASH__GT_text);
var value_is_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$value_DASH_is_DASH_search_QMARK_);
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,cljs.core.constant$keyword$multiple_QMARK_);
var map__17851 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$item_DASH__GT_value,item__GT_key,cljs.core.constant$keyword$find_DASH_by_DASH_selection,(cljs.core.truth_(group_by)?lomakkeet.autocomplete.default_group_find_by_selection:lomakkeet.autocomplete.default_find_by_selection),cljs.core.constant$keyword$term_DASH_match_DASH_fn,(cljs.core.truth_(search_fields)?lomakkeet.autocomplete.create_matcher_STAR_(search_fields):null)], null),opts__$1], 0));
var map__17851__$1 = ((cljs.core.seq_QMARK_(map__17851))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17851):map__17851);
var opts__$2 = map__17851__$1;
var item__GT_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17851__$1,cljs.core.constant$keyword$item_DASH__GT_value);
var find_by_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17851__$1,cljs.core.constant$keyword$find_DASH_by_DASH_selection);
var term_match_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17851__$1,cljs.core.constant$keyword$term_DASH_match_DASH_fn);
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var closable = lomakkeet.reagent.mixins.create_closable(open_QMARK_);
var search = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var query = reagent.ratom.make_reaction(((function (map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search){
return (function (){
var G__17852 = (function (){var G__17853 = search;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17853) : cljs.core.deref.call(null,G__17853));
})();
return (__GT_query.cljs$core$IFn$_invoke$arity$1 ? __GT_query.cljs$core$IFn$_invoke$arity$1(G__17852) : __GT_query.call(null,G__17852));
});})(map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search))
);
var selected = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var items__$1 = (cljs.core.truth_(load_items)?reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null):items);
var n = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var results = reagent.ratom.make_reaction(((function (map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n){
return (function (){
return lomakkeet.reagent.autocomplete.filter_results(term_match_fn,n,lomakkeet.reagent.autocomplete.get_or_deref(items__$1),(function (){var G__17854 = query;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17854) : cljs.core.deref.call(null,G__17854));
})(),(cljs.core.truth_(filter_current_out_QMARK_)?(function (){var G__17855 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17855) : cljs.core.deref.call(null,G__17855));
})():null),opts__$2);
});})(map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n))
);
var results__$1 = (cljs.core.truth_(group_by)?reagent.ratom.make_reaction(((function (map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results){
return (function (){
return cljs.core.group_by(group_by,(function (){var G__17856 = results;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17856) : cljs.core.deref.call(null,G__17856));
})());
});})(map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results))
):results);
var select_cb = ((function (map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1){
return (function (v){
var G__17857_17966 = v;
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__17857_17966) : cb.call(null,G__17857_17966));

var G__17858 = open_QMARK_;
var G__17859 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17858,G__17859) : cljs.core.reset_BANG_.call(null,G__17858,G__17859));
});})(map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1))
;
var focus_input = ((function (map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb){
return (function (this$){
if(cljs.core.truth_((function (){var G__17860 = open_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17860) : cljs.core.deref.call(null,G__17860));
})())){
var G__17861_17967 = this$;
var G__17861_17968__$1 = (((G__17861_17967 == null))?null:reagent.core.dom_node(G__17861_17967));
var G__17861_17969__$2 = (((G__17861_17968__$1 == null))?null:G__17861_17968__$1.getElementsByTagName("input"));
var G__17861_17970__$3 = (((G__17861_17969__$2 == null))?null:G__17861_17969__$2.item((0)));
var G__17861_17971__$4 = (((G__17861_17970__$3 == null))?null:G__17861_17970__$3.focus());
} else {
}

return null;
});})(map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb))
;
var input_attrs = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$on_DASH_focus,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lomakkeet.reagent.autocomplete.focus,open_QMARK_,search),cljs.core.constant$keyword$on_DASH_blur,((function (map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input){
return (function (e){
lomakkeet.reagent.autocomplete.blur(open_QMARK_,search,e);

if(cljs.core.truth_(on_blur)){
var G__17862 = e;
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(G__17862) : on_blur.call(null,G__17862));
} else {
return null;
}
});})(map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input))
,cljs.core.constant$keyword$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lomakkeet.reagent.autocomplete.change,search,(cljs.core.truth_(value_is_search_QMARK_)?cb:null)),cljs.core.constant$keyword$on_DASH_key_DASH_down,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(lomakkeet.reagent.autocomplete.key_down,open_QMARK_,search,results__$1,cljs.core.array_seq([selected,n,find_by_selection,select_cb], 0)),cljs.core.constant$keyword$auto_DASH_complete,false], null);
var co__16543__auto___17972 = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lomakkeet.util.limit,(0),(function (){var G__17863 = n;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17863) : cljs.core.deref.call(null,G__17863));
})()));
});})(map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,cljs.core.array_seq([cljs.core.constant$keyword$auto_DASH_run,true], 0));
var G__17864_17973 = co__16543__auto___17972;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17864_17973) : cljs.core.deref.call(null,G__17864_17973));


if(cljs.core.truth_(load_items)){
var search_or_value_17974 = reagent.ratom.make_reaction(((function (map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
if(cljs.core.seq((function (){var G__17865 = search;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17865) : cljs.core.deref.call(null,G__17865));
})())){
var G__17866 = search;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17866) : cljs.core.deref.call(null,G__17866));
} else {
var G__17867 = lomakkeet.reagent.autocomplete.get_or_deref(value);
return (value__GT_search.cljs$core$IFn$_invoke$arity$1 ? value__GT_search.cljs$core$IFn$_invoke$arity$1(G__17867) : value__GT_search.call(null,G__17867));
}
});})(map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
);
var co__16543__auto___17975 = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (search_or_value_17974,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
if(cljs.core.truth_((function (){var G__17868 = open_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17868) : cljs.core.deref.call(null,G__17868));
})())){
var G__17869 = items__$1;
var G__17870 = (function (){var G__17871 = search_or_value_17974;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17871) : cljs.core.deref.call(null,G__17871));
})();
return (load_items.cljs$core$IFn$_invoke$arity$2 ? load_items.cljs$core$IFn$_invoke$arity$2(G__17869,G__17870) : load_items.call(null,G__17869,G__17870));
} else {
return null;
}
});})(search_or_value_17974,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,cljs.core.array_seq([cljs.core.constant$keyword$auto_DASH_run,true], 0));
var G__17872_17976 = co__16543__auto___17975;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17872_17976) : cljs.core.deref.call(null,G__17872_17976));

} else {
}

return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$component_DASH_did_DASH_unmount,((function (map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
return (closable.cljs$core$IFn$_invoke$arity$0 ? closable.cljs$core$IFn$_invoke$arity$0() : closable.call(null));
});})(map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,cljs.core.constant$keyword$component_DASH_did_DASH_update,focus_input,cljs.core.constant$keyword$component_DASH_did_DASH_mount,focus_input,cljs.core.constant$keyword$reagent_DASH_render,((function (map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (p__17873){
var map__17874 = p__17873;
var map__17874__$1 = ((cljs.core.seq_QMARK_(map__17874))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17874):map__17874);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17874__$1,cljs.core.constant$keyword$value);
var disabled_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17874__$1,cljs.core.constant$keyword$disabled_QMARK_);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$selectize_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,[cljs.core.str(ctrl_class),cljs.core.str((cljs.core.truth_(multiple_QMARK_)?" multi":" single"))].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$selectize_DASH_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,[cljs.core.str(input_class),cljs.core.str((cljs.core.truth_((function (){var G__17875 = open_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17875) : cljs.core.deref.call(null,G__17875));
})())?" input-active dropdown-active ":null)),cljs.core.str((cljs.core.truth_(disabled_QMARK___$1)?" disabled ":null)),cljs.core.str(((cljs.core.seq(lomakkeet.reagent.autocomplete.get_or_deref(results__$1)))?" items ":null)),cljs.core.str(((cljs.core.seq(lomakkeet.reagent.autocomplete.get_or_deref(value__$1)))?" has-items ":null))].join(''),cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lomakkeet.reagent.autocomplete.click,open_QMARK_,disabled_QMARK___$1)], null),(cljs.core.truth_(multiple_QMARK_)?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5092__auto__ = ((function (map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function lomakkeet$reagent$autocomplete$autocomplete_$_iter__17876(s__17877){
return (new cljs.core.LazySeq(null,((function (map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
var s__17877__$1 = s__17877;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17877__$1);
if(temp__4425__auto__){
var s__17877__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17877__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__17877__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__17879 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__17878 = (0);
while(true){
if((i__17878 < size__5091__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__17878);
cljs.core.chunk_append(b__17879,(function (){var removable_QMARK_ = (function (){var G__17888 = x;
return (item_removable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? item_removable_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17888) : item_removable_QMARK_.call(null,G__17888));
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,(cljs.core.truth_(removable_QMARK_)?"item":"non-removable-item")], null),(function (){var G__17889 = lomakkeet.reagent.autocomplete.get_or_deref(items__$1);
var G__17890 = x;
return (value__GT_text.cljs$core$IFn$_invoke$arity$2 ? value__GT_text.cljs$core$IFn$_invoke$arity$2(G__17889,G__17890) : value__GT_text.call(null,G__17889,G__17890));
})(),(cljs.core.truth_(removable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a$remove,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(remove_cb,x)], null),"\u00D7"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,x], null));
})());

var G__17977 = (i__17878 + (1));
i__17878 = G__17977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17879),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17876(cljs.core.chunk_rest(s__17877__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17879),null);
}
} else {
var x = cljs.core.first(s__17877__$2);
return cljs.core.cons((function (){var removable_QMARK_ = (function (){var G__17891 = x;
return (item_removable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? item_removable_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17891) : item_removable_QMARK_.call(null,G__17891));
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,(cljs.core.truth_(removable_QMARK_)?"item":"non-removable-item")], null),(function (){var G__17892 = lomakkeet.reagent.autocomplete.get_or_deref(items__$1);
var G__17893 = x;
return (value__GT_text.cljs$core$IFn$_invoke$arity$2 ? value__GT_text.cljs$core$IFn$_invoke$arity$2(G__17892,G__17893) : value__GT_text.call(null,G__17892,G__17893));
})(),(cljs.core.truth_(removable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a$remove,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(remove_cb,x)], null),"\u00D7"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,x], null));
})(),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17876(cljs.core.rest(s__17877__$2)));
}
} else {
return null;
}
break;
}
});})(map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,null,null));
});})(map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
;
return iter__5092__auto__(lomakkeet.reagent.autocomplete.get_or_deref(value__$1));
})()):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(input_attrs,cljs.core.constant$keyword$disabled,disabled_QMARK___$1,cljs.core.array_seq([cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$placeholder,placeholder,cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lomakkeet.reagent.autocomplete.click,open_QMARK_,disabled_QMARK___$1),cljs.core.constant$keyword$value,(cljs.core.truth_(value_is_search_QMARK_)?lomakkeet.reagent.autocomplete.get_or_deref(value__$1):(cljs.core.truth_((function (){var G__17894 = open_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17894) : cljs.core.deref.call(null,G__17894));
})())?[cljs.core.str((function (){var G__17895 = search;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17895) : cljs.core.deref.call(null,G__17895));
})())].join(''):((cljs.core.not(multiple_QMARK_))?(function (){var G__17896 = lomakkeet.reagent.autocomplete.get_or_deref(items__$1);
var G__17897 = lomakkeet.reagent.autocomplete.get_or_deref(value__$1);
return (value__GT_text.cljs$core$IFn$_invoke$arity$2 ? value__GT_text.cljs$core$IFn$_invoke$arity$2(G__17896,G__17897) : value__GT_text.call(null,G__17896,G__17897));
})():null)))], 0))], null),(cljs.core.truth_(clearable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$selectize_DASH_clear,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,((function (map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
return select_cb(null);
});})(map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
], null),"\u00D7"], null):null)], null),(cljs.core.truth_((function (){var G__17898 = open_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17898) : cljs.core.deref.call(null,G__17898));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$selectize_DASH_dropdown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,(cljs.core.truth_(multiple_QMARK_)?"multi":"single")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$selectize_DASH_dropdown_DASH_content,(cljs.core.truth_((function (){var or__4338__auto__ = group_by;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return groups;
}
})())?(function (){var r = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5092__auto__ = ((function (map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function lomakkeet$reagent$autocomplete$autocomplete_$_iter__17899(s__17900){
return (new cljs.core.LazySeq(null,((function (map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
var s__17900__$1 = s__17900;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17900__$1);
if(temp__4425__auto__){
var s__17900__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17900__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__17900__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__17902 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__17901 = (0);
while(true){
if((i__17901 < size__5091__auto__)){
var vec__17929 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__17901);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17929,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17929,(1),null);
var group_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17930 = results__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17930) : cljs.core.deref.call(null,G__17930));
})(),k);
if(cljs.core.truth_(group_results)){
cljs.core.chunk_append(b__17902,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$optgroup_DASH_header,(cljs.core.truth_(groups)?v:cljs.core.name(k))], null),(function (){var iter__5092__auto__ = ((function (i__17901,s__17900__$1,group_results,vec__17929,k,v,c__5090__auto__,size__5091__auto__,b__17902,s__17900__$2,temp__4425__auto__,map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function lomakkeet$reagent$autocomplete$autocomplete_$_iter__17899_$_iter__17931(s__17932){
return (new cljs.core.LazySeq(null,((function (i__17901,s__17900__$1,group_results,vec__17929,k,v,c__5090__auto__,size__5091__auto__,b__17902,s__17900__$2,temp__4425__auto__,map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
var s__17932__$1 = s__17932;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__17932__$1);
if(temp__4425__auto____$1){
var s__17932__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17932__$2)){
var c__5090__auto____$1 = cljs.core.chunk_first(s__17932__$2);
var size__5091__auto____$1 = cljs.core.count(c__5090__auto____$1);
var b__17934 = cljs.core.chunk_buffer(size__5091__auto____$1);
if((function (){var i__17933 = (0);
while(true){
if((i__17933 < size__5091__auto____$1)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto____$1,i__17933);
cljs.core.chunk_append(b__17934,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,item,selected,cb,opts__$2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,(function (){var G__17939 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17939) : item__GT_key.call(null,G__17939));
})()], null)));

var G__17978 = (i__17933 + (1));
i__17933 = G__17978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17934),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17899_$_iter__17931(cljs.core.chunk_rest(s__17932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17934),null);
}
} else {
var item = cljs.core.first(s__17932__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,item,selected,cb,opts__$2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,(function (){var G__17940 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17940) : item__GT_key.call(null,G__17940));
})()], null)),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17899_$_iter__17931(cljs.core.rest(s__17932__$2)));
}
} else {
return null;
}
break;
}
});})(i__17901,s__17900__$1,group_results,vec__17929,k,v,c__5090__auto__,size__5091__auto__,b__17902,s__17900__$2,temp__4425__auto__,map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,null,null));
});})(i__17901,s__17900__$1,group_results,vec__17929,k,v,c__5090__auto__,size__5091__auto__,b__17902,s__17900__$2,temp__4425__auto__,map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
;
return iter__5092__auto__(group_results);
})()], null));

var G__17979 = (i__17901 + (1));
i__17901 = G__17979;
continue;
} else {
var G__17980 = (i__17901 + (1));
i__17901 = G__17980;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17902),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17899(cljs.core.chunk_rest(s__17900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17902),null);
}
} else {
var vec__17941 = cljs.core.first(s__17900__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17941,(1),null);
var group_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17942 = results__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17942) : cljs.core.deref.call(null,G__17942));
})(),k);
if(cljs.core.truth_(group_results)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$optgroup_DASH_header,(cljs.core.truth_(groups)?v:cljs.core.name(k))], null),(function (){var iter__5092__auto__ = ((function (s__17900__$1,group_results,vec__17941,k,v,s__17900__$2,temp__4425__auto__,map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function lomakkeet$reagent$autocomplete$autocomplete_$_iter__17899_$_iter__17943(s__17944){
return (new cljs.core.LazySeq(null,((function (s__17900__$1,group_results,vec__17941,k,v,s__17900__$2,temp__4425__auto__,map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
var s__17944__$1 = s__17944;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__17944__$1);
if(temp__4425__auto____$1){
var s__17944__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17944__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__17944__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__17946 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__17945 = (0);
while(true){
if((i__17945 < size__5091__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__17945);
cljs.core.chunk_append(b__17946,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,item,selected,cb,opts__$2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,(function (){var G__17951 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17951) : item__GT_key.call(null,G__17951));
})()], null)));

var G__17981 = (i__17945 + (1));
i__17945 = G__17981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17946),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17899_$_iter__17943(cljs.core.chunk_rest(s__17944__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17946),null);
}
} else {
var item = cljs.core.first(s__17944__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,item,selected,cb,opts__$2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,(function (){var G__17952 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17952) : item__GT_key.call(null,G__17952));
})()], null)),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17899_$_iter__17943(cljs.core.rest(s__17944__$2)));
}
} else {
return null;
}
break;
}
});})(s__17900__$1,group_results,vec__17941,k,v,s__17900__$2,temp__4425__auto__,map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,null,null));
});})(s__17900__$1,group_results,vec__17941,k,v,s__17900__$2,temp__4425__auto__,map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
;
return iter__5092__auto__(group_results);
})()], null),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17899(cljs.core.rest(s__17900__$2)));
} else {
var G__17982 = cljs.core.rest(s__17900__$2);
s__17900__$1 = G__17982;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,null,null));
});})(map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
;
return iter__5092__auto__((function (){var or__4338__auto__ = groups;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var G__17953 = results__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17953) : cljs.core.deref.call(null,G__17953));
}
})());
})());
if(cljs.core.seq(r)){
return r;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$option,no_results_text], null);
}
})():((cljs.core.seq((function (){var G__17954 = results__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17954) : cljs.core.deref.call(null,G__17954));
})()))?(function (){var iter__5092__auto__ = ((function (map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function lomakkeet$reagent$autocomplete$autocomplete_$_iter__17955(s__17956){
return (new cljs.core.LazySeq(null,((function (map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
var s__17956__$1 = s__17956;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17956__$1);
if(temp__4425__auto__){
var s__17956__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17956__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__17956__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__17958 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__17957 = (0);
while(true){
if((i__17957 < size__5091__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__17957);
cljs.core.chunk_append(b__17958,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,item,selected,select_cb,opts__$2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,(function (){var G__17963 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17963) : item__GT_key.call(null,G__17963));
})()], null)));

var G__17983 = (i__17957 + (1));
i__17957 = G__17983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17958),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17955(cljs.core.chunk_rest(s__17956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17958),null);
}
} else {
var item = cljs.core.first(s__17956__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,item,selected,select_cb,opts__$2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,(function (){var G__17964 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17964) : item__GT_key.call(null,G__17964));
})()], null)),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17955(cljs.core.rest(s__17956__$2)));
}
} else {
return null;
}
break;
}
});})(map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,null,null));
});})(map__17874,map__17874__$1,value__$1,disabled_QMARK___$1,map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
;
return iter__5092__auto__((function (){var G__17965 = results__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17965) : cljs.core.deref.call(null,G__17965));
})());
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$option,no_results_text], null)))], null)], null):null)], null);
});})(map__17850,map__17850__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17851,map__17851__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
], null));
});
lomakkeet.reagent.autocomplete.autocomplete_STAR_ = (function lomakkeet$reagent$autocomplete$autocomplete_STAR_(form,p__17985){
var map__18005 = p__17985;
var map__18005__$1 = ((cljs.core.seq_QMARK_(map__18005))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18005):map__18005);
var opts = map__18005__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18005__$1,cljs.core.constant$keyword$ks);
var item__GT_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18005__$1,cljs.core.constant$keyword$item_DASH__GT_value);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18005__$1,cljs.core.constant$keyword$item_DASH__GT_key,cljs.core.key);
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18005__$1,cljs.core.constant$keyword$multiple_QMARK_);
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18005__$1,cljs.core.constant$keyword$cb);
var remove_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18005__$1,cljs.core.constant$keyword$remove_DASH_cb);
var value = reagent.ratom.make_reaction(((function (map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1((function (){var G__18006 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18006) : cljs.core.deref.call(null,G__18006));
})()),ks);
});})(map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
);
var item__GT_value__$1 = (function (){var or__4338__auto__ = item__GT_value;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return item__GT_key;
}
})();
var cb__$1 = ((function (value,item__GT_value__$1,map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (v){
if(cljs.core.truth_(cb)){
var G__18007_18024 = v;
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18007_18024) : cb.call(null,G__18007_18024));
} else {
}

var item__GT_value_18025__$2 = ((cljs.core.map_QMARK_(item__GT_value__$1))?item__GT_value__$1:new cljs.core.PersistentArrayMap.fromArray([ks,item__GT_value__$1], true, false));
var seq__18008_18026 = cljs.core.seq(item__GT_value_18025__$2);
var chunk__18009_18027 = null;
var count__18010_18028 = (0);
var i__18011_18029 = (0);
while(true){
if((i__18011_18029 < count__18010_18028)){
var vec__18012_18030 = chunk__18009_18027.cljs$core$IIndexed$_nth$arity$2(null,i__18011_18029);
var ks_18031__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18012_18030,(0),null);
var item__GT_value_18032__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18012_18030,(1),null);
lomakkeet.reagent.impl.cb(form,ks_18031__$1,(cljs.core.truth_(multiple_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__18013 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18013) : cljs.core.deref.call(null,G__18013));
})(),(function (){var G__18014 = v;
return (item__GT_value_18032__$3.cljs$core$IFn$_invoke$arity$1 ? item__GT_value_18032__$3.cljs$core$IFn$_invoke$arity$1(G__18014) : item__GT_value_18032__$3.call(null,G__18014));
})()):(function (){var G__18015 = v;
return (item__GT_value_18032__$3.cljs$core$IFn$_invoke$arity$1 ? item__GT_value_18032__$3.cljs$core$IFn$_invoke$arity$1(G__18015) : item__GT_value_18032__$3.call(null,G__18015));
})()));

var G__18033 = seq__18008_18026;
var G__18034 = chunk__18009_18027;
var G__18035 = count__18010_18028;
var G__18036 = (i__18011_18029 + (1));
seq__18008_18026 = G__18033;
chunk__18009_18027 = G__18034;
count__18010_18028 = G__18035;
i__18011_18029 = G__18036;
continue;
} else {
var temp__4425__auto___18037 = cljs.core.seq(seq__18008_18026);
if(temp__4425__auto___18037){
var seq__18008_18038__$1 = temp__4425__auto___18037;
if(cljs.core.chunked_seq_QMARK_(seq__18008_18038__$1)){
var c__5123__auto___18039 = cljs.core.chunk_first(seq__18008_18038__$1);
var G__18040 = cljs.core.chunk_rest(seq__18008_18038__$1);
var G__18041 = c__5123__auto___18039;
var G__18042 = cljs.core.count(c__5123__auto___18039);
var G__18043 = (0);
seq__18008_18026 = G__18040;
chunk__18009_18027 = G__18041;
count__18010_18028 = G__18042;
i__18011_18029 = G__18043;
continue;
} else {
var vec__18016_18044 = cljs.core.first(seq__18008_18038__$1);
var ks_18045__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18016_18044,(0),null);
var item__GT_value_18046__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18016_18044,(1),null);
lomakkeet.reagent.impl.cb(form,ks_18045__$1,(cljs.core.truth_(multiple_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__18017 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18017) : cljs.core.deref.call(null,G__18017));
})(),(function (){var G__18018 = v;
return (item__GT_value_18046__$3.cljs$core$IFn$_invoke$arity$1 ? item__GT_value_18046__$3.cljs$core$IFn$_invoke$arity$1(G__18018) : item__GT_value_18046__$3.call(null,G__18018));
})()):(function (){var G__18019 = v;
return (item__GT_value_18046__$3.cljs$core$IFn$_invoke$arity$1 ? item__GT_value_18046__$3.cljs$core$IFn$_invoke$arity$1(G__18019) : item__GT_value_18046__$3.call(null,G__18019));
})()));

var G__18047 = cljs.core.next(seq__18008_18038__$1);
var G__18048 = null;
var G__18049 = (0);
var G__18050 = (0);
seq__18008_18026 = G__18047;
chunk__18009_18027 = G__18048;
count__18010_18028 = G__18049;
i__18011_18029 = G__18050;
continue;
}
} else {
}
}
break;
}

return null;
});})(value,item__GT_value__$1,map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
;
var remove_cb__$1 = ((function (value,item__GT_value__$1,cb__$1,map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (x,_){
if(cljs.core.truth_(remove_cb)){
var G__18020_18051 = x;
(remove_cb.cljs$core$IFn$_invoke$arity$1 ? remove_cb.cljs$core$IFn$_invoke$arity$1(G__18020_18051) : remove_cb.call(null,G__18020_18051));
} else {
}

return lomakkeet.reagent.impl.cb(form,ks,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty((function (){var G__18021 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18021) : cljs.core.deref.call(null,G__18021));
})()),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (value,item__GT_value__$1,cb__$1,map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (p1__17984_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17984_SHARP_,x);
});})(value,item__GT_value__$1,cb__$1,map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
,(function (){var G__18022 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18022) : cljs.core.deref.call(null,G__18022));
})())));
});})(value,item__GT_value__$1,cb__$1,map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
;
var on_blur = ((function (value,item__GT_value__$1,cb__$1,remove_cb__$1,map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (e){
return lomakkeet.reagent.impl.blur(form,ks);
});})(value,item__GT_value__$1,cb__$1,remove_cb__$1,map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
;
var attrs = cljs.core.constant$keyword$attrs.cljs$core$IFn$_invoke$arity$1(form);
var disabled = reagent.ratom.make_reaction(((function (value,item__GT_value__$1,cb__$1,remove_cb__$1,on_blur,attrs,map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (){
return cljs.core.constant$keyword$disabled.cljs$core$IFn$_invoke$arity$1(lomakkeet.reagent.autocomplete.get_or_deref(attrs));
});})(value,item__GT_value__$1,cb__$1,remove_cb__$1,on_blur,attrs,map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
);
return ((function (value,item__GT_value__$1,cb__$1,remove_cb__$1,on_blur,attrs,disabled,map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.autocomplete,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$value,value,cljs.core.array_seq([cljs.core.constant$keyword$cb,cb__$1,cljs.core.constant$keyword$remove_DASH_cb,remove_cb__$1,cljs.core.constant$keyword$on_DASH_blur,on_blur,cljs.core.constant$keyword$disabled_QMARK_,(function (){var G__18023 = disabled;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18023) : cljs.core.deref.call(null,G__18023));
})()], 0))], null);
});
;})(value,item__GT_value__$1,cb__$1,remove_cb__$1,on_blur,attrs,disabled,map__18005,map__18005__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
});
