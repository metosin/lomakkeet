// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
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
var G__17615_17619 = open_QMARK_;
var G__17616_17620 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17615_17619,G__17616_17620) : cljs.core.reset_BANG_.call(null,G__17615_17619,G__17616_17620));

var G__17617_17621 = search;
var G__17618_17622 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17617_17621,G__17618_17622) : cljs.core.reset_BANG_.call(null,G__17617_17621,G__17618_17622));
} else {
}

return null;
});
lomakkeet.reagent.autocomplete.click = (function lomakkeet$reagent$autocomplete$click(open_QMARK_,disabled_QMARK_,e){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
var G__17625_17627 = open_QMARK_;
var G__17626_17628 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17625_17627,G__17626_17628) : cljs.core.reset_BANG_.call(null,G__17625_17627,G__17626_17628));

e.stopPropagation();
}

return null;
});
lomakkeet.reagent.autocomplete.focus = (function lomakkeet$reagent$autocomplete$focus(open_QMARK_,search,e){
if(cljs.core.not((function (){var G__17634 = open_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17634) : cljs.core.deref.call(null,G__17634));
})())){
var G__17635_17639 = search;
var G__17636_17640 = "";
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17635_17639,G__17636_17640) : cljs.core.reset_BANG_.call(null,G__17635_17639,G__17636_17640));
} else {
}

var G__17637_17641 = open_QMARK_;
var G__17638_17642 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17637_17641,G__17638_17642) : cljs.core.reset_BANG_.call(null,G__17637_17641,G__17638_17642));

return null;
});
lomakkeet.reagent.autocomplete.change = (function lomakkeet$reagent$autocomplete$change(search,cb,e){
var v_17649 = e.target.value;
var G__17646_17650 = search;
var G__17647_17651 = v_17649;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17646_17650,G__17647_17651) : cljs.core.reset_BANG_.call(null,G__17646_17650,G__17647_17651));

if(cljs.core.truth_(cb)){
var G__17648_17652 = v_17649;
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__17648_17652) : cb.call(null,G__17648_17652));
} else {
}

return null;
});
lomakkeet.reagent.autocomplete.key_down = (function lomakkeet$reagent$autocomplete$key_down(open_QMARK_,search,results,selected,n,find_by_selection,cb,e){
var change_selection = (function lomakkeet$reagent$autocomplete$key_down_$_change_selection(f,e__$1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lomakkeet.util.limit,(0),(function (){var G__17668 = n;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17668) : cljs.core.deref.call(null,G__17668));
})()),f));

e__$1.preventDefault();

return e__$1.stopPropagation();
});
var G__17669_17681 = open_QMARK_;
var G__17670_17682 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17669_17681,G__17670_17682) : cljs.core.reset_BANG_.call(null,G__17669_17681,G__17670_17682));

var G__17671 = e.key;
switch (G__17671) {
case "Enter":
var temp__4423__auto__ = (function (){var G__17672 = (function (){var G__17674 = results;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17674) : cljs.core.deref.call(null,G__17674));
})();
var G__17673 = (function (){var G__17675 = selected;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17675) : cljs.core.deref.call(null,G__17675));
})();
return (find_by_selection.cljs$core$IFn$_invoke$arity$2 ? find_by_selection.cljs$core$IFn$_invoke$arity$2(G__17672,G__17673) : find_by_selection.call(null,G__17672,G__17673));
})();
if(cljs.core.truth_(temp__4423__auto__)){
var v = temp__4423__auto__;
var G__17676_17684 = v;
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__17676_17684) : cb.call(null,G__17676_17684));

var G__17677_17685 = open_QMARK_;
var G__17678_17686 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17677_17685,G__17678_17686) : cljs.core.reset_BANG_.call(null,G__17677_17685,G__17678_17686));

var G__17679 = search;
var G__17680 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17679,G__17680) : cljs.core.reset_BANG_.call(null,G__17679,G__17680));
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
lomakkeet.reagent.autocomplete.filter_results = (function lomakkeet$reagent$autocomplete$filter_results(term_match_fn,n,items,query,value,p__17687){
var map__17695 = p__17687;
var map__17695__$1 = ((cljs.core.seq_QMARK_(map__17695))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17695):map__17695);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17695__$1,cljs.core.constant$keyword$item_DASH__GT_text);
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17695__$1,cljs.core.constant$keyword$multiple_QMARK_);
var filter_current_out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17695__$1,cljs.core.constant$keyword$filter_DASH_current_DASH_out_QMARK_);
var item__GT_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17695__$1,cljs.core.constant$keyword$item_DASH__GT_value);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17695__$1,cljs.core.constant$keyword$item_DASH__GT_key);
var G__17696_17702 = n;
var G__17697_17703 = (-1);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17696_17702,G__17697_17703) : cljs.core.reset_BANG_.call(null,G__17696_17702,G__17697_17703));

var map_to_seq = ((cljs.core.map_QMARK_(items))?cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__17695,map__17695__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key){
return (function (v){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$key,cljs.core.key(v),cljs.core.constant$keyword$value,cljs.core.val(v)], null);
});})(map__17695,map__17695__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key))
):cljs.core.identity);
var filter_search = (cljs.core.truth_((function (){var and__4326__auto__ = term_match_fn;
if(cljs.core.truth_(and__4326__auto__)){
return query;
} else {
return and__4326__auto__;
}
})())?cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map_to_seq,map__17695,map__17695__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key){
return (function (item){
return lomakkeet.autocomplete.query_match_QMARK_(term_match_fn,item,query);
});})(map_to_seq,map__17695,map__17695__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key))
):cljs.core.identity);
var filter_current = (cljs.core.truth_(filter_current_out_QMARK_)?(function (){var value_set = cljs.core.set(value);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(multiple_QMARK_)?((function (value_set,map_to_seq,filter_search,map__17695,map__17695__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key){
return (function (item){
var G__17698 = (function (){var G__17699 = item;
return (item__GT_value.cljs$core$IFn$_invoke$arity$1 ? item__GT_value.cljs$core$IFn$_invoke$arity$1(G__17699) : item__GT_value.call(null,G__17699));
})();
return (value_set.cljs$core$IFn$_invoke$arity$1 ? value_set.cljs$core$IFn$_invoke$arity$1(G__17698) : value_set.call(null,G__17698));
});})(value_set,map_to_seq,filter_search,map__17695,map__17695__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key))
:((function (value_set,map_to_seq,filter_search,map__17695,map__17695__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key){
return (function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17700 = item;
return (item__GT_value.cljs$core$IFn$_invoke$arity$1 ? item__GT_value.cljs$core$IFn$_invoke$arity$1(G__17700) : item__GT_value.call(null,G__17700));
})(),value);
});})(value_set,map_to_seq,filter_search,map__17695,map__17695__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key))
));
})():cljs.core.identity);
var add_index = cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map_to_seq,filter_search,filter_current,map__17695,map__17695__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key){
return (function (v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.constant$keyword$lomakkeet$autocomplete_SLASH_i,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.inc));
});})(map_to_seq,filter_search,filter_current,map__17695,map__17695__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key))
);
var add_highlighted_str = ((cljs.core.seq(query))?cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map_to_seq,filter_search,filter_current,add_index,map__17695,map__17695__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key){
return (function (v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.constant$keyword$lomakkeet$reagent$autocomplete_SLASH_text,lomakkeet.autocomplete.highlight_string((function (){var G__17701 = v;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__17701) : item__GT_text.call(null,G__17701));
})(),query));
});})(map_to_seq,filter_search,filter_current,add_index,map__17695,map__17695__$1,item__GT_text,multiple_QMARK_,filter_current_out_QMARK_,item__GT_value,item__GT_key))
):cljs.core.identity);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(map_to_seq,filter_search,filter_current,cljs.core.array_seq([add_index,add_highlighted_str], 0)),items);
});
lomakkeet.reagent.autocomplete.choice_item = (function lomakkeet$reagent$autocomplete$choice_item(item,selected,cb,p__17704){
var map__17710 = p__17704;
var map__17710__$1 = ((cljs.core.seq_QMARK_(map__17710))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17710):map__17710);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17710__$1,cljs.core.constant$keyword$item_DASH__GT_key);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17710__$1,cljs.core.constant$keyword$item_DASH__GT_text);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$key,(function (){var G__17711 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17711) : item__GT_key.call(null,G__17711));
})(),cljs.core.constant$keyword$on_DASH_click,((function (map__17710,map__17710__$1,item__GT_key,item__GT_text){
return (function() { 
var G__17715__delegate = function (_){
var G__17712_17716 = item;
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__17712_17716) : cb.call(null,G__17712_17716));

return null;
};
var G__17715 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__17717__i = 0, G__17717__a = new Array(arguments.length -  0);
while (G__17717__i < G__17717__a.length) {G__17717__a[G__17717__i] = arguments[G__17717__i + 0]; ++G__17717__i;}
  _ = new cljs.core.IndexedSeq(G__17717__a,0);
} 
return G__17715__delegate.call(this,_);};
G__17715.cljs$lang$maxFixedArity = 0;
G__17715.cljs$lang$applyTo = (function (arglist__17718){
var _ = cljs.core.seq(arglist__17718);
return G__17715__delegate(_);
});
G__17715.cljs$core$IFn$_invoke$arity$variadic = G__17715__delegate;
return G__17715;
})()
;})(map__17710,map__17710__$1,item__GT_key,item__GT_text))
,cljs.core.constant$keyword$class,[cljs.core.str("option "),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$lomakkeet$autocomplete_SLASH_i.cljs$core$IFn$_invoke$arity$1(item),(function (){var G__17713 = selected;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17713) : cljs.core.deref.call(null,G__17713));
})()))?"active":null))].join('')], null),(function (){var or__4338__auto__ = cljs.core.constant$keyword$lomakkeet$reagent$autocomplete_SLASH_text.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var G__17714 = item;
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(G__17714) : item__GT_text.call(null,G__17714));
}
})()], null);
});
lomakkeet.reagent.autocomplete.get_or_deref = (function lomakkeet$reagent$autocomplete$get_or_deref(x){
if((function (){var G__17721 = x;
if(G__17721){
var bit__5012__auto__ = (G__17721.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5012__auto__) || (G__17721.cljs$core$IDeref$)){
return true;
} else {
if((!G__17721.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17721);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17721);
}
})()){
var G__17722 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17722) : cljs.core.deref.call(null,G__17722));
} else {
return x;
}
});
lomakkeet.reagent.autocomplete.defaults = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$value_DASH__GT_text,cljs.core.get,cljs.core.constant$keyword$item_DASH__GT_key,cljs.core.constant$keyword$key,cljs.core.constant$keyword$item_DASH__GT_text,cljs.core.constant$keyword$value,cljs.core.constant$keyword$item_DASH_removable_QMARK_,cljs.core.constantly(true),cljs.core.constant$keyword$value_DASH__GT_search,cljs.core.identity,cljs.core.constant$keyword$_DASH__GT_query,lomakkeet.autocomplete.default__GT_query,cljs.core.constant$keyword$not_DASH_results_DASH_text,"No results"], null);
lomakkeet.reagent.autocomplete.assert_opts = (function lomakkeet$reagent$autocomplete$assert_opts(p__17723){
var map__17726 = p__17723;
var map__17726__$1 = ((cljs.core.seq_QMARK_(map__17726))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17726):map__17726);
var opts = map__17726__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,cljs.core.constant$keyword$items);
var load_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,cljs.core.constant$keyword$load_DASH_items);
var filter_current_out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,cljs.core.constant$keyword$filter_DASH_current_DASH_out_QMARK_);
var value_is_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,cljs.core.constant$keyword$value_DASH_is_DASH_search_QMARK_);
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,cljs.core.constant$keyword$multiple_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,cljs.core.constant$keyword$value);
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,cljs.core.constant$keyword$cb);
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
})())?(function (){var G__17727 = value;
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
var map__17844 = lomakkeet.reagent.autocomplete.assert_opts(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([lomakkeet.reagent.autocomplete.defaults,opts], 0)));
var map__17844__$1 = ((cljs.core.seq_QMARK_(map__17844))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17844):map__17844);
var opts__$1 = map__17844__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$items);
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$groups);
var value__GT_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$value_DASH__GT_search);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$disabled_QMARK_);
var __GT_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$_DASH__GT_query);
var load_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$load_DASH_items);
var item_removable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$item_DASH_removable_QMARK_);
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$cb);
var search_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$search_DASH_fields);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$item_DASH__GT_key);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$placeholder);
var clearable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$clearable_QMARK_);
var remove_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$remove_DASH_cb);
var group_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$group_DASH_by);
var ctrl_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$ctrl_DASH_class);
var filter_current_out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$filter_DASH_current_DASH_out_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$value);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$on_DASH_blur);
var no_results_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$no_DASH_results_DASH_text);
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$input_DASH_class);
var value__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$value_DASH__GT_text);
var value_is_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$value_DASH_is_DASH_search_QMARK_);
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17844__$1,cljs.core.constant$keyword$multiple_QMARK_);
var map__17845 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$item_DASH__GT_value,item__GT_key,cljs.core.constant$keyword$find_DASH_by_DASH_selection,(cljs.core.truth_(group_by)?lomakkeet.autocomplete.default_group_find_by_selection:lomakkeet.autocomplete.default_find_by_selection),cljs.core.constant$keyword$term_DASH_match_DASH_fn,(cljs.core.truth_(search_fields)?lomakkeet.autocomplete.create_matcher_STAR_(search_fields):null)], null),opts__$1], 0));
var map__17845__$1 = ((cljs.core.seq_QMARK_(map__17845))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17845):map__17845);
var opts__$2 = map__17845__$1;
var item__GT_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17845__$1,cljs.core.constant$keyword$item_DASH__GT_value);
var find_by_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17845__$1,cljs.core.constant$keyword$find_DASH_by_DASH_selection);
var term_match_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17845__$1,cljs.core.constant$keyword$term_DASH_match_DASH_fn);
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var closable = lomakkeet.reagent.mixins.create_closable(open_QMARK_);
var search = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var query = reagent.ratom.make_reaction(((function (map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search){
return (function (){
var G__17846 = (function (){var G__17847 = search;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17847) : cljs.core.deref.call(null,G__17847));
})();
return (__GT_query.cljs$core$IFn$_invoke$arity$1 ? __GT_query.cljs$core$IFn$_invoke$arity$1(G__17846) : __GT_query.call(null,G__17846));
});})(map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search))
);
var selected = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var items__$1 = (cljs.core.truth_(load_items)?reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null):items);
var n = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var results = reagent.ratom.make_reaction(((function (map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n){
return (function (){
return lomakkeet.reagent.autocomplete.filter_results(term_match_fn,n,lomakkeet.reagent.autocomplete.get_or_deref(items__$1),(function (){var G__17848 = query;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17848) : cljs.core.deref.call(null,G__17848));
})(),(cljs.core.truth_(filter_current_out_QMARK_)?(function (){var G__17849 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17849) : cljs.core.deref.call(null,G__17849));
})():null),opts__$2);
});})(map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n))
);
var results__$1 = (cljs.core.truth_(group_by)?reagent.ratom.make_reaction(((function (map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results){
return (function (){
return cljs.core.group_by(group_by,(function (){var G__17850 = results;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17850) : cljs.core.deref.call(null,G__17850));
})());
});})(map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results))
):results);
var select_cb = ((function (map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1){
return (function (v){
var G__17851_17960 = v;
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__17851_17960) : cb.call(null,G__17851_17960));

var G__17852 = open_QMARK_;
var G__17853 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17852,G__17853) : cljs.core.reset_BANG_.call(null,G__17852,G__17853));
});})(map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1))
;
var focus_input = ((function (map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb){
return (function (this$){
if(cljs.core.truth_((function (){var G__17854 = open_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17854) : cljs.core.deref.call(null,G__17854));
})())){
var G__17855_17961 = this$;
var G__17855_17962__$1 = (((G__17855_17961 == null))?null:reagent.core.dom_node(G__17855_17961));
var G__17855_17963__$2 = (((G__17855_17962__$1 == null))?null:G__17855_17962__$1.getElementsByTagName("input"));
var G__17855_17964__$3 = (((G__17855_17963__$2 == null))?null:G__17855_17963__$2.item((0)));
var G__17855_17965__$4 = (((G__17855_17964__$3 == null))?null:G__17855_17964__$3.focus());
} else {
}

return null;
});})(map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb))
;
var input_attrs = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$on_DASH_focus,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lomakkeet.reagent.autocomplete.focus,open_QMARK_,search),cljs.core.constant$keyword$on_DASH_blur,((function (map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input){
return (function (e){
lomakkeet.reagent.autocomplete.blur(open_QMARK_,search,e);

if(cljs.core.truth_(on_blur)){
var G__17856 = e;
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(G__17856) : on_blur.call(null,G__17856));
} else {
return null;
}
});})(map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input))
,cljs.core.constant$keyword$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lomakkeet.reagent.autocomplete.change,search,(cljs.core.truth_(value_is_search_QMARK_)?cb:null)),cljs.core.constant$keyword$on_DASH_key_DASH_down,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(lomakkeet.reagent.autocomplete.key_down,open_QMARK_,search,results__$1,cljs.core.array_seq([selected,n,find_by_selection,select_cb], 0)),cljs.core.constant$keyword$auto_DASH_complete,false], null);
var co__16537__auto___17966 = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lomakkeet.util.limit,(0),(function (){var G__17857 = n;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17857) : cljs.core.deref.call(null,G__17857));
})()));
});})(map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,cljs.core.array_seq([cljs.core.constant$keyword$auto_DASH_run,true], 0));
var G__17858_17967 = co__16537__auto___17966;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17858_17967) : cljs.core.deref.call(null,G__17858_17967));


if(cljs.core.truth_(load_items)){
var search_or_value_17968 = reagent.ratom.make_reaction(((function (map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
if(cljs.core.seq((function (){var G__17859 = search;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17859) : cljs.core.deref.call(null,G__17859));
})())){
var G__17860 = search;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17860) : cljs.core.deref.call(null,G__17860));
} else {
var G__17861 = lomakkeet.reagent.autocomplete.get_or_deref(value);
return (value__GT_search.cljs$core$IFn$_invoke$arity$1 ? value__GT_search.cljs$core$IFn$_invoke$arity$1(G__17861) : value__GT_search.call(null,G__17861));
}
});})(map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
);
var co__16537__auto___17969 = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (search_or_value_17968,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
if(cljs.core.truth_((function (){var G__17862 = open_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17862) : cljs.core.deref.call(null,G__17862));
})())){
var G__17863 = items__$1;
var G__17864 = (function (){var G__17865 = search_or_value_17968;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17865) : cljs.core.deref.call(null,G__17865));
})();
return (load_items.cljs$core$IFn$_invoke$arity$2 ? load_items.cljs$core$IFn$_invoke$arity$2(G__17863,G__17864) : load_items.call(null,G__17863,G__17864));
} else {
return null;
}
});})(search_or_value_17968,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,cljs.core.array_seq([cljs.core.constant$keyword$auto_DASH_run,true], 0));
var G__17866_17970 = co__16537__auto___17969;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17866_17970) : cljs.core.deref.call(null,G__17866_17970));

} else {
}

return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$component_DASH_did_DASH_unmount,((function (map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
return (closable.cljs$core$IFn$_invoke$arity$0 ? closable.cljs$core$IFn$_invoke$arity$0() : closable.call(null));
});})(map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,cljs.core.constant$keyword$component_DASH_did_DASH_update,focus_input,cljs.core.constant$keyword$component_DASH_did_DASH_mount,focus_input,cljs.core.constant$keyword$reagent_DASH_render,((function (map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (p__17867){
var map__17868 = p__17867;
var map__17868__$1 = ((cljs.core.seq_QMARK_(map__17868))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17868):map__17868);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17868__$1,cljs.core.constant$keyword$value);
var disabled_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17868__$1,cljs.core.constant$keyword$disabled_QMARK_);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$selectize_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,[cljs.core.str(ctrl_class),cljs.core.str((cljs.core.truth_(multiple_QMARK_)?" multi":" single"))].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$selectize_DASH_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,[cljs.core.str(input_class),cljs.core.str((cljs.core.truth_((function (){var G__17869 = open_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17869) : cljs.core.deref.call(null,G__17869));
})())?" input-active dropdown-active ":null)),cljs.core.str((cljs.core.truth_(disabled_QMARK___$1)?" disabled ":null)),cljs.core.str(((cljs.core.seq(lomakkeet.reagent.autocomplete.get_or_deref(results__$1)))?" items ":null)),cljs.core.str(((cljs.core.seq(lomakkeet.reagent.autocomplete.get_or_deref(value__$1)))?" has-items ":null))].join(''),cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lomakkeet.reagent.autocomplete.click,open_QMARK_,disabled_QMARK___$1)], null),(cljs.core.truth_(multiple_QMARK_)?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5092__auto__ = ((function (map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function lomakkeet$reagent$autocomplete$autocomplete_$_iter__17870(s__17871){
return (new cljs.core.LazySeq(null,((function (map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
var s__17871__$1 = s__17871;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__17871__$1);
if(temp__4423__auto__){
var s__17871__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17871__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__17871__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__17873 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__17872 = (0);
while(true){
if((i__17872 < size__5091__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__17872);
cljs.core.chunk_append(b__17873,(function (){var removable_QMARK_ = (function (){var G__17882 = x;
return (item_removable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? item_removable_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17882) : item_removable_QMARK_.call(null,G__17882));
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,(cljs.core.truth_(removable_QMARK_)?"item":"non-removable-item")], null),(function (){var G__17883 = lomakkeet.reagent.autocomplete.get_or_deref(items__$1);
var G__17884 = x;
return (value__GT_text.cljs$core$IFn$_invoke$arity$2 ? value__GT_text.cljs$core$IFn$_invoke$arity$2(G__17883,G__17884) : value__GT_text.call(null,G__17883,G__17884));
})(),(cljs.core.truth_(removable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a$remove,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(remove_cb,x)], null),"\u00D7"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,x], null));
})());

var G__17971 = (i__17872 + (1));
i__17872 = G__17971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17873),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17870(cljs.core.chunk_rest(s__17871__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17873),null);
}
} else {
var x = cljs.core.first(s__17871__$2);
return cljs.core.cons((function (){var removable_QMARK_ = (function (){var G__17885 = x;
return (item_removable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? item_removable_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17885) : item_removable_QMARK_.call(null,G__17885));
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,(cljs.core.truth_(removable_QMARK_)?"item":"non-removable-item")], null),(function (){var G__17886 = lomakkeet.reagent.autocomplete.get_or_deref(items__$1);
var G__17887 = x;
return (value__GT_text.cljs$core$IFn$_invoke$arity$2 ? value__GT_text.cljs$core$IFn$_invoke$arity$2(G__17886,G__17887) : value__GT_text.call(null,G__17886,G__17887));
})(),(cljs.core.truth_(removable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a$remove,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(remove_cb,x)], null),"\u00D7"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,x], null));
})(),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17870(cljs.core.rest(s__17871__$2)));
}
} else {
return null;
}
break;
}
});})(map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,null,null));
});})(map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
;
return iter__5092__auto__(lomakkeet.reagent.autocomplete.get_or_deref(value__$1));
})()):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(input_attrs,cljs.core.constant$keyword$disabled,disabled_QMARK___$1,cljs.core.array_seq([cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$placeholder,placeholder,cljs.core.constant$keyword$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lomakkeet.reagent.autocomplete.click,open_QMARK_,disabled_QMARK___$1),cljs.core.constant$keyword$value,(cljs.core.truth_(value_is_search_QMARK_)?lomakkeet.reagent.autocomplete.get_or_deref(value__$1):(cljs.core.truth_((function (){var G__17888 = open_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17888) : cljs.core.deref.call(null,G__17888));
})())?[cljs.core.str((function (){var G__17889 = search;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17889) : cljs.core.deref.call(null,G__17889));
})())].join(''):((cljs.core.not(multiple_QMARK_))?(function (){var G__17890 = lomakkeet.reagent.autocomplete.get_or_deref(items__$1);
var G__17891 = lomakkeet.reagent.autocomplete.get_or_deref(value__$1);
return (value__GT_text.cljs$core$IFn$_invoke$arity$2 ? value__GT_text.cljs$core$IFn$_invoke$arity$2(G__17890,G__17891) : value__GT_text.call(null,G__17890,G__17891));
})():null)))], 0))], null),(cljs.core.truth_(clearable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$selectize_DASH_clear,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,((function (map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
return select_cb(null);
});})(map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
], null),"\u00D7"], null):null)], null),(cljs.core.truth_((function (){var G__17892 = open_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17892) : cljs.core.deref.call(null,G__17892));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$selectize_DASH_dropdown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,(cljs.core.truth_(multiple_QMARK_)?"multi":"single")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$selectize_DASH_dropdown_DASH_content,(cljs.core.truth_((function (){var or__4338__auto__ = group_by;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return groups;
}
})())?(function (){var r = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5092__auto__ = ((function (map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function lomakkeet$reagent$autocomplete$autocomplete_$_iter__17893(s__17894){
return (new cljs.core.LazySeq(null,((function (map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
var s__17894__$1 = s__17894;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__17894__$1);
if(temp__4423__auto__){
var s__17894__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17894__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__17894__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__17896 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__17895 = (0);
while(true){
if((i__17895 < size__5091__auto__)){
var vec__17923 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__17895);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17923,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17923,(1),null);
var group_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17924 = results__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17924) : cljs.core.deref.call(null,G__17924));
})(),k);
if(cljs.core.truth_(group_results)){
cljs.core.chunk_append(b__17896,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$optgroup_DASH_header,(cljs.core.truth_(groups)?v:cljs.core.name(k))], null),(function (){var iter__5092__auto__ = ((function (i__17895,s__17894__$1,group_results,vec__17923,k,v,c__5090__auto__,size__5091__auto__,b__17896,s__17894__$2,temp__4423__auto__,map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function lomakkeet$reagent$autocomplete$autocomplete_$_iter__17893_$_iter__17925(s__17926){
return (new cljs.core.LazySeq(null,((function (i__17895,s__17894__$1,group_results,vec__17923,k,v,c__5090__auto__,size__5091__auto__,b__17896,s__17894__$2,temp__4423__auto__,map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
var s__17926__$1 = s__17926;
while(true){
var temp__4423__auto____$1 = cljs.core.seq(s__17926__$1);
if(temp__4423__auto____$1){
var s__17926__$2 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17926__$2)){
var c__5090__auto____$1 = cljs.core.chunk_first(s__17926__$2);
var size__5091__auto____$1 = cljs.core.count(c__5090__auto____$1);
var b__17928 = cljs.core.chunk_buffer(size__5091__auto____$1);
if((function (){var i__17927 = (0);
while(true){
if((i__17927 < size__5091__auto____$1)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto____$1,i__17927);
cljs.core.chunk_append(b__17928,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,item,selected,cb,opts__$2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,(function (){var G__17933 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17933) : item__GT_key.call(null,G__17933));
})()], null)));

var G__17972 = (i__17927 + (1));
i__17927 = G__17972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17928),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17893_$_iter__17925(cljs.core.chunk_rest(s__17926__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17928),null);
}
} else {
var item = cljs.core.first(s__17926__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,item,selected,cb,opts__$2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,(function (){var G__17934 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17934) : item__GT_key.call(null,G__17934));
})()], null)),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17893_$_iter__17925(cljs.core.rest(s__17926__$2)));
}
} else {
return null;
}
break;
}
});})(i__17895,s__17894__$1,group_results,vec__17923,k,v,c__5090__auto__,size__5091__auto__,b__17896,s__17894__$2,temp__4423__auto__,map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,null,null));
});})(i__17895,s__17894__$1,group_results,vec__17923,k,v,c__5090__auto__,size__5091__auto__,b__17896,s__17894__$2,temp__4423__auto__,map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
;
return iter__5092__auto__(group_results);
})()], null));

var G__17973 = (i__17895 + (1));
i__17895 = G__17973;
continue;
} else {
var G__17974 = (i__17895 + (1));
i__17895 = G__17974;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17896),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17893(cljs.core.chunk_rest(s__17894__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17896),null);
}
} else {
var vec__17935 = cljs.core.first(s__17894__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17935,(1),null);
var group_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17936 = results__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17936) : cljs.core.deref.call(null,G__17936));
})(),k);
if(cljs.core.truth_(group_results)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$optgroup_DASH_header,(cljs.core.truth_(groups)?v:cljs.core.name(k))], null),(function (){var iter__5092__auto__ = ((function (s__17894__$1,group_results,vec__17935,k,v,s__17894__$2,temp__4423__auto__,map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function lomakkeet$reagent$autocomplete$autocomplete_$_iter__17893_$_iter__17937(s__17938){
return (new cljs.core.LazySeq(null,((function (s__17894__$1,group_results,vec__17935,k,v,s__17894__$2,temp__4423__auto__,map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
var s__17938__$1 = s__17938;
while(true){
var temp__4423__auto____$1 = cljs.core.seq(s__17938__$1);
if(temp__4423__auto____$1){
var s__17938__$2 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17938__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__17938__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__17940 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__17939 = (0);
while(true){
if((i__17939 < size__5091__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__17939);
cljs.core.chunk_append(b__17940,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,item,selected,cb,opts__$2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,(function (){var G__17945 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17945) : item__GT_key.call(null,G__17945));
})()], null)));

var G__17975 = (i__17939 + (1));
i__17939 = G__17975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17940),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17893_$_iter__17937(cljs.core.chunk_rest(s__17938__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17940),null);
}
} else {
var item = cljs.core.first(s__17938__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,item,selected,cb,opts__$2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,(function (){var G__17946 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17946) : item__GT_key.call(null,G__17946));
})()], null)),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17893_$_iter__17937(cljs.core.rest(s__17938__$2)));
}
} else {
return null;
}
break;
}
});})(s__17894__$1,group_results,vec__17935,k,v,s__17894__$2,temp__4423__auto__,map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,null,null));
});})(s__17894__$1,group_results,vec__17935,k,v,s__17894__$2,temp__4423__auto__,map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
;
return iter__5092__auto__(group_results);
})()], null),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17893(cljs.core.rest(s__17894__$2)));
} else {
var G__17976 = cljs.core.rest(s__17894__$2);
s__17894__$1 = G__17976;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,null,null));
});})(map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
;
return iter__5092__auto__((function (){var or__4338__auto__ = groups;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var G__17947 = results__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17947) : cljs.core.deref.call(null,G__17947));
}
})());
})());
if(cljs.core.seq(r)){
return r;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$option,no_results_text], null);
}
})():((cljs.core.seq((function (){var G__17948 = results__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17948) : cljs.core.deref.call(null,G__17948));
})()))?(function (){var iter__5092__auto__ = ((function (map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function lomakkeet$reagent$autocomplete$autocomplete_$_iter__17949(s__17950){
return (new cljs.core.LazySeq(null,((function (map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs){
return (function (){
var s__17950__$1 = s__17950;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__17950__$1);
if(temp__4423__auto__){
var s__17950__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17950__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__17950__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__17952 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__17951 = (0);
while(true){
if((i__17951 < size__5091__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__17951);
cljs.core.chunk_append(b__17952,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,item,selected,select_cb,opts__$2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,(function (){var G__17957 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17957) : item__GT_key.call(null,G__17957));
})()], null)));

var G__17977 = (i__17951 + (1));
i__17951 = G__17977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17952),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17949(cljs.core.chunk_rest(s__17950__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17952),null);
}
} else {
var item = cljs.core.first(s__17950__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,item,selected,select_cb,opts__$2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$key,(function (){var G__17958 = item;
return (item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(G__17958) : item__GT_key.call(null,G__17958));
})()], null)),lomakkeet$reagent$autocomplete$autocomplete_$_iter__17949(cljs.core.rest(s__17950__$2)));
}
} else {
return null;
}
break;
}
});})(map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
,null,null));
});})(map__17868,map__17868__$1,value__$1,disabled_QMARK___$1,map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
;
return iter__5092__auto__((function (){var G__17959 = results__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17959) : cljs.core.deref.call(null,G__17959));
})());
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$option,no_results_text], null)))], null)], null):null)], null);
});})(map__17844,map__17844__$1,opts__$1,items,groups,value__GT_search,disabled_QMARK_,__GT_query,load_items,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,ctrl_class,filter_current_out_QMARK_,value,on_blur,no_results_text,input_class,value__GT_text,value_is_search_QMARK_,multiple_QMARK_,map__17845,map__17845__$1,opts__$2,item__GT_value,find_by_selection,term_match_fn,open_QMARK_,closable,search,query,selected,items__$1,n,results,results__$1,select_cb,focus_input,input_attrs))
], null));
});
lomakkeet.reagent.autocomplete.autocomplete_STAR_ = (function lomakkeet$reagent$autocomplete$autocomplete_STAR_(form,p__17979){
var map__17999 = p__17979;
var map__17999__$1 = ((cljs.core.seq_QMARK_(map__17999))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17999):map__17999);
var opts = map__17999__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17999__$1,cljs.core.constant$keyword$ks);
var item__GT_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17999__$1,cljs.core.constant$keyword$item_DASH__GT_value);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17999__$1,cljs.core.constant$keyword$item_DASH__GT_key,cljs.core.key);
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17999__$1,cljs.core.constant$keyword$multiple_QMARK_);
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17999__$1,cljs.core.constant$keyword$cb);
var remove_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17999__$1,cljs.core.constant$keyword$remove_DASH_cb);
var value = reagent.ratom.make_reaction(((function (map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1((function (){var G__18000 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18000) : cljs.core.deref.call(null,G__18000));
})()),ks);
});})(map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
);
var item__GT_value__$1 = (function (){var or__4338__auto__ = item__GT_value;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return item__GT_key;
}
})();
var cb__$1 = ((function (value,item__GT_value__$1,map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (v){
if(cljs.core.truth_(cb)){
var G__18001_18018 = v;
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18001_18018) : cb.call(null,G__18001_18018));
} else {
}

var item__GT_value_18019__$2 = ((cljs.core.map_QMARK_(item__GT_value__$1))?item__GT_value__$1:new cljs.core.PersistentArrayMap.fromArray([ks,item__GT_value__$1], true, false));
var seq__18002_18020 = cljs.core.seq(item__GT_value_18019__$2);
var chunk__18003_18021 = null;
var count__18004_18022 = (0);
var i__18005_18023 = (0);
while(true){
if((i__18005_18023 < count__18004_18022)){
var vec__18006_18024 = chunk__18003_18021.cljs$core$IIndexed$_nth$arity$2(null,i__18005_18023);
var ks_18025__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18006_18024,(0),null);
var item__GT_value_18026__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18006_18024,(1),null);
lomakkeet.reagent.impl.cb(form,ks_18025__$1,(cljs.core.truth_(multiple_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__18007 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18007) : cljs.core.deref.call(null,G__18007));
})(),(function (){var G__18008 = v;
return (item__GT_value_18026__$3.cljs$core$IFn$_invoke$arity$1 ? item__GT_value_18026__$3.cljs$core$IFn$_invoke$arity$1(G__18008) : item__GT_value_18026__$3.call(null,G__18008));
})()):(function (){var G__18009 = v;
return (item__GT_value_18026__$3.cljs$core$IFn$_invoke$arity$1 ? item__GT_value_18026__$3.cljs$core$IFn$_invoke$arity$1(G__18009) : item__GT_value_18026__$3.call(null,G__18009));
})()));

var G__18027 = seq__18002_18020;
var G__18028 = chunk__18003_18021;
var G__18029 = count__18004_18022;
var G__18030 = (i__18005_18023 + (1));
seq__18002_18020 = G__18027;
chunk__18003_18021 = G__18028;
count__18004_18022 = G__18029;
i__18005_18023 = G__18030;
continue;
} else {
var temp__4423__auto___18031 = cljs.core.seq(seq__18002_18020);
if(temp__4423__auto___18031){
var seq__18002_18032__$1 = temp__4423__auto___18031;
if(cljs.core.chunked_seq_QMARK_(seq__18002_18032__$1)){
var c__5123__auto___18033 = cljs.core.chunk_first(seq__18002_18032__$1);
var G__18034 = cljs.core.chunk_rest(seq__18002_18032__$1);
var G__18035 = c__5123__auto___18033;
var G__18036 = cljs.core.count(c__5123__auto___18033);
var G__18037 = (0);
seq__18002_18020 = G__18034;
chunk__18003_18021 = G__18035;
count__18004_18022 = G__18036;
i__18005_18023 = G__18037;
continue;
} else {
var vec__18010_18038 = cljs.core.first(seq__18002_18032__$1);
var ks_18039__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18010_18038,(0),null);
var item__GT_value_18040__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18010_18038,(1),null);
lomakkeet.reagent.impl.cb(form,ks_18039__$1,(cljs.core.truth_(multiple_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__18011 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18011) : cljs.core.deref.call(null,G__18011));
})(),(function (){var G__18012 = v;
return (item__GT_value_18040__$3.cljs$core$IFn$_invoke$arity$1 ? item__GT_value_18040__$3.cljs$core$IFn$_invoke$arity$1(G__18012) : item__GT_value_18040__$3.call(null,G__18012));
})()):(function (){var G__18013 = v;
return (item__GT_value_18040__$3.cljs$core$IFn$_invoke$arity$1 ? item__GT_value_18040__$3.cljs$core$IFn$_invoke$arity$1(G__18013) : item__GT_value_18040__$3.call(null,G__18013));
})()));

var G__18041 = cljs.core.next(seq__18002_18032__$1);
var G__18042 = null;
var G__18043 = (0);
var G__18044 = (0);
seq__18002_18020 = G__18041;
chunk__18003_18021 = G__18042;
count__18004_18022 = G__18043;
i__18005_18023 = G__18044;
continue;
}
} else {
}
}
break;
}

return null;
});})(value,item__GT_value__$1,map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
;
var remove_cb__$1 = ((function (value,item__GT_value__$1,cb__$1,map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (x,_){
if(cljs.core.truth_(remove_cb)){
var G__18014_18045 = x;
(remove_cb.cljs$core$IFn$_invoke$arity$1 ? remove_cb.cljs$core$IFn$_invoke$arity$1(G__18014_18045) : remove_cb.call(null,G__18014_18045));
} else {
}

return lomakkeet.reagent.impl.cb(form,ks,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty((function (){var G__18015 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18015) : cljs.core.deref.call(null,G__18015));
})()),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (value,item__GT_value__$1,cb__$1,map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (p1__17978_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17978_SHARP_,x);
});})(value,item__GT_value__$1,cb__$1,map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
,(function (){var G__18016 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18016) : cljs.core.deref.call(null,G__18016));
})())));
});})(value,item__GT_value__$1,cb__$1,map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
;
var on_blur = ((function (value,item__GT_value__$1,cb__$1,remove_cb__$1,map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (e){
return lomakkeet.reagent.impl.blur(form,ks);
});})(value,item__GT_value__$1,cb__$1,remove_cb__$1,map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
;
var attrs = cljs.core.constant$keyword$attrs.cljs$core$IFn$_invoke$arity$1(form);
var disabled = reagent.ratom.make_reaction(((function (value,item__GT_value__$1,cb__$1,remove_cb__$1,on_blur,attrs,map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (){
return cljs.core.constant$keyword$disabled.cljs$core$IFn$_invoke$arity$1(lomakkeet.reagent.autocomplete.get_or_deref(attrs));
});})(value,item__GT_value__$1,cb__$1,remove_cb__$1,on_blur,attrs,map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
);
return ((function (value,item__GT_value__$1,cb__$1,remove_cb__$1,on_blur,attrs,disabled,map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.autocomplete,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$value,value,cljs.core.array_seq([cljs.core.constant$keyword$cb,cb__$1,cljs.core.constant$keyword$remove_DASH_cb,remove_cb__$1,cljs.core.constant$keyword$on_DASH_blur,on_blur,cljs.core.constant$keyword$disabled_QMARK_,(function (){var G__18017 = disabled;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18017) : cljs.core.deref.call(null,G__18017));
})()], 0))], null);
});
;})(value,item__GT_value__$1,cb__$1,remove_cb__$1,on_blur,attrs,disabled,map__17999,map__17999__$1,opts,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb))
});
