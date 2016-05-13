// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.reagent.autocomplete');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('lomakkeet.reagent.impl');
goog.require('reagent.ratom');
goog.require('reagent.core');
goog.require('lomakkeet.util');
goog.require('lomakkeet.autocomplete');
goog.require('lomakkeet.reagent.mixins');
goog.require('goog.style');
lomakkeet.reagent.autocomplete.filter_results;
lomakkeet.reagent.autocomplete.close = (function lomakkeet$reagent$autocomplete$close(this$){
return reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
});
lomakkeet.reagent.autocomplete.open = (function lomakkeet$reagent$autocomplete$open(this$){
return reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
});
lomakkeet.reagent.autocomplete.update_search = (function lomakkeet$reagent$autocomplete$update_search(this$,v,p__20556){
var map__20559 = p__20556;
var map__20559__$1 = ((((!((map__20559 == null)))?((((map__20559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20559):map__20559);
var opts = map__20559__$1;
var __GT_query = cljs.core.get.call(null,map__20559__$1,new cljs.core.Keyword(null,"->query","->query",-416543779));
reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",1564939822),v,new cljs.core.Keyword(null,"query","query",-1288509510),__GT_query.call(null,v)], null));

return reagent.core.set_state.call(null,this$,lomakkeet.reagent.autocomplete.filter_results.call(null,this$,opts));
});
lomakkeet.reagent.autocomplete.reset_search = (function lomakkeet$reagent$autocomplete$reset_search(this$,opts){
reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null));

return reagent.core.set_state.call(null,this$,lomakkeet.reagent.autocomplete.filter_results.call(null,this$,opts));
});
lomakkeet.reagent.autocomplete.blur = (function lomakkeet$reagent$autocomplete$blur(this$,opts,e){
if(cljs.core.truth_(e.relatedTarget)){
lomakkeet.reagent.autocomplete.close.call(null,this$);

lomakkeet.reagent.autocomplete.reset_search.call(null,this$,opts);
} else {
}

return null;
});
lomakkeet.reagent.autocomplete.click = (function lomakkeet$reagent$autocomplete$click(this$,disabled_QMARK_,e){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
lomakkeet.reagent.autocomplete.open.call(null,this$);

e.stopPropagation();
}

return null;
});
lomakkeet.reagent.autocomplete.focus = (function lomakkeet$reagent$autocomplete$focus(this$,search,e){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(reagent.core.state.call(null,this$)))){
reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
} else {
}

lomakkeet.reagent.autocomplete.open.call(null,this$);

return null;
});
lomakkeet.reagent.autocomplete.change = (function lomakkeet$reagent$autocomplete$change(this$,cb,opts,e){
var v_20561 = e.target.value;
lomakkeet.reagent.autocomplete.update_search.call(null,this$,v_20561,opts);

if(cljs.core.truth_(cb)){
cb.call(null,v_20561);
} else {
}

return null;
});
lomakkeet.reagent.autocomplete.key_down = (function lomakkeet$reagent$autocomplete$key_down(this$,find_by_selection,cb,opts,e){
var map__20565 = reagent.core.state.call(null,this$);
var map__20565__$1 = ((((!((map__20565 == null)))?((((map__20565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20565):map__20565);
var results = cljs.core.get.call(null,map__20565__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var selected = cljs.core.get.call(null,map__20565__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var n = cljs.core.get.call(null,map__20565__$1,new cljs.core.Keyword(null,"n","n",562130025));
var change_selection = ((function (map__20565,map__20565__$1,results,selected,n){
return (function lomakkeet$reagent$autocomplete$key_down_$_change_selection(f,e__$1){
reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),lomakkeet.util.limit.call(null,(0),n,f.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(reagent.core.state.call(null,this$))))], null));

e__$1.preventDefault();

return e__$1.stopPropagation();
});})(map__20565,map__20565__$1,results,selected,n))
;
reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));

var G__20567 = e.key;
switch (G__20567) {
case "Enter":
e.preventDefault();

e.stopPropagation();

var temp__4425__auto__ = find_by_selection.call(null,results,selected);
if(cljs.core.truth_(temp__4425__auto__)){
var v = temp__4425__auto__;
cb.call(null,v);

return reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"search","search",1564939822),null], null));
} else {
return null;
}

break;
case "Escape":
return reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"search","search",1564939822),null], null));

break;
case "Backspace":
var temp__4423__auto__ = new cljs.core.Keyword(null,"remove-cb","remove-cb",1443715269).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var remove_cb = temp__4423__auto__;
return remove_cb.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return null;
}

break;
case "ArrowUp":
return change_selection.call(null,cljs.core.dec,e);

break;
case "ArrowDown":
return change_selection.call(null,cljs.core.inc,e);

break;
default:
return null;

}
});
lomakkeet.reagent.autocomplete.prepare_items = (function lomakkeet$reagent$autocomplete$prepare_items(items,p__20569){
var map__20572 = p__20569;
var map__20572__$1 = ((((!((map__20572 == null)))?((((map__20572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20572):map__20572);
var opts = map__20572__$1;
var prepare_xform = cljs.core.get.call(null,map__20572__$1,new cljs.core.Keyword(null,"prepare-xform","prepare-xform",1010317835));
var map_to_seq = ((cljs.core.map_QMARK_.call(null,items))?cljs.core.map.call(null,((function (map__20572,map__20572__$1,opts,prepare_xform){
return (function (v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key.call(null,v),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.val.call(null,v)], null);
});})(map__20572,map__20572__$1,opts,prepare_xform))
):cljs.core.identity);
var prepare_xform__$1 = (function (){var or__4988__auto__ = prepare_xform;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,map_to_seq,prepare_xform__$1),items);
});
lomakkeet.reagent.autocomplete.filter_results_SINGLEQUOTE_ = (function lomakkeet$reagent$autocomplete$filter_results_SINGLEQUOTE_(prepared_items,query,p__20574){
var map__20577 = p__20574;
var map__20577__$1 = ((((!((map__20577 == null)))?((((map__20577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20577):map__20577);
var value = cljs.core.get.call(null,map__20577__$1,new cljs.core.Keyword(null,"value","value",305978217));
var term_match_fn = cljs.core.get.call(null,map__20577__$1,new cljs.core.Keyword(null,"term-match-fn","term-match-fn",-1830086322));
var multiple_QMARK_ = cljs.core.get.call(null,map__20577__$1,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283));
var filter_current_out_QMARK_ = cljs.core.get.call(null,map__20577__$1,new cljs.core.Keyword(null,"filter-current-out?","filter-current-out?",908538184));
var item__GT_text = cljs.core.get.call(null,map__20577__$1,new cljs.core.Keyword(null,"item->text","item->text",914440483));
var item__GT_value = cljs.core.get.call(null,map__20577__$1,new cljs.core.Keyword(null,"item->value","item->value",370830851));
var item__GT_key = cljs.core.get.call(null,map__20577__$1,new cljs.core.Keyword(null,"item->key","item->key",907378277));
var min_search_length = cljs.core.get.call(null,map__20577__$1,new cljs.core.Keyword(null,"min-search-length","min-search-length",-1126006720));
var max_results = cljs.core.get.call(null,map__20577__$1,new cljs.core.Keyword(null,"max-results","max-results",-32858165));
var n = cljs.core.atom.call(null,(-1));
var search_QMARK_ = (function (){var or__4988__auto__ = (function (){var and__4976__auto__ = min_search_length;
if(cljs.core.truth_(and__4976__auto__)){
return (cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.str,query)) >= min_search_length);
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.not.call(null,min_search_length);
}
})();
var filter_search = (cljs.core.truth_((function (){var and__4976__auto__ = search_QMARK_;
if(cljs.core.truth_(and__4976__auto__)){
var and__4976__auto____$1 = term_match_fn;
if(cljs.core.truth_(and__4976__auto____$1)){
return query;
} else {
return and__4976__auto____$1;
}
} else {
return and__4976__auto__;
}
})())?cljs.core.filter.call(null,((function (n,search_QMARK_,map__20577,map__20577__$1,value,term_match_fn,multiple_QMARK_,filter_current_out_QMARK_,item__GT_text,item__GT_value,item__GT_key,min_search_length,max_results){
return (function (item){
return lomakkeet.autocomplete.query_match_QMARK_.call(null,term_match_fn,item,query);
});})(n,search_QMARK_,map__20577,map__20577__$1,value,term_match_fn,multiple_QMARK_,filter_current_out_QMARK_,item__GT_text,item__GT_value,item__GT_key,min_search_length,max_results))
):cljs.core.identity);
var filter_current = (cljs.core.truth_(filter_current_out_QMARK_)?(function (){var value_set = cljs.core.set.call(null,value);
return cljs.core.remove.call(null,(cljs.core.truth_(multiple_QMARK_)?((function (value_set,n,search_QMARK_,filter_search,map__20577,map__20577__$1,value,term_match_fn,multiple_QMARK_,filter_current_out_QMARK_,item__GT_text,item__GT_value,item__GT_key,min_search_length,max_results){
return (function (item){
return value_set.call(null,item__GT_value.call(null,item));
});})(value_set,n,search_QMARK_,filter_search,map__20577,map__20577__$1,value,term_match_fn,multiple_QMARK_,filter_current_out_QMARK_,item__GT_text,item__GT_value,item__GT_key,min_search_length,max_results))
:((function (value_set,n,search_QMARK_,filter_search,map__20577,map__20577__$1,value,term_match_fn,multiple_QMARK_,filter_current_out_QMARK_,item__GT_text,item__GT_value,item__GT_key,min_search_length,max_results){
return (function (item){
return cljs.core._EQ_.call(null,item__GT_value.call(null,item),value);
});})(value_set,n,search_QMARK_,filter_search,map__20577,map__20577__$1,value,term_match_fn,multiple_QMARK_,filter_current_out_QMARK_,item__GT_text,item__GT_value,item__GT_key,min_search_length,max_results))
));
})():cljs.core.identity);
var limit = (cljs.core.truth_(max_results)?cljs.core.take.call(null,max_results):cljs.core.identity);
var add_index = cljs.core.map.call(null,((function (n,search_QMARK_,filter_search,filter_current,limit,map__20577,map__20577__$1,value,term_match_fn,multiple_QMARK_,filter_current_out_QMARK_,item__GT_text,item__GT_value,item__GT_key,min_search_length,max_results){
return (function (v){
return cljs.core.assoc.call(null,v,new cljs.core.Keyword("lomakkeet.autocomplete","i","lomakkeet.autocomplete/i",-2094349674),cljs.core.swap_BANG_.call(null,n,cljs.core.inc));
});})(n,search_QMARK_,filter_search,filter_current,limit,map__20577,map__20577__$1,value,term_match_fn,multiple_QMARK_,filter_current_out_QMARK_,item__GT_text,item__GT_value,item__GT_key,min_search_length,max_results))
);
var add_highlighted_str = (cljs.core.truth_((function (){var and__4976__auto__ = search_QMARK_;
if(cljs.core.truth_(and__4976__auto__)){
return cljs.core.seq.call(null,query);
} else {
return and__4976__auto__;
}
})())?cljs.core.map.call(null,((function (n,search_QMARK_,filter_search,filter_current,limit,add_index,map__20577,map__20577__$1,value,term_match_fn,multiple_QMARK_,filter_current_out_QMARK_,item__GT_text,item__GT_value,item__GT_key,min_search_length,max_results){
return (function (v){
return cljs.core.assoc.call(null,v,new cljs.core.Keyword("lomakkeet.reagent.autocomplete","text","lomakkeet.reagent.autocomplete/text",720702604),lomakkeet.autocomplete.highlight_string.call(null,item__GT_text.call(null,v),query));
});})(n,search_QMARK_,filter_search,filter_current,limit,add_index,map__20577,map__20577__$1,value,term_match_fn,multiple_QMARK_,filter_current_out_QMARK_,item__GT_text,item__GT_value,item__GT_key,min_search_length,max_results))
):cljs.core.identity);
var results = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,filter_search,filter_current,limit,add_index,add_highlighted_str),prepared_items);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),cljs.core.deref.call(null,n),new cljs.core.Keyword(null,"results","results",-1134170113),results], null);
});
lomakkeet.reagent.autocomplete.filter_results = (function lomakkeet$reagent$autocomplete$filter_results(this$,opts){
var map__20581 = reagent.core.state.call(null,this$);
var map__20581__$1 = ((((!((map__20581 == null)))?((((map__20581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20581):map__20581);
var prepared_items = cljs.core.get.call(null,map__20581__$1,new cljs.core.Keyword(null,"prepared-items","prepared-items",144484006));
var query = cljs.core.get.call(null,map__20581__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return lomakkeet.reagent.autocomplete.filter_results_SINGLEQUOTE_.call(null,prepared_items,query,opts);
});
lomakkeet.reagent.autocomplete.choice_item = (function lomakkeet$reagent$autocomplete$choice_item(_){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var map__20591 = reagent.core.props.call(null,this$);
var map__20591__$1 = ((((!((map__20591 == null)))?((((map__20591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20591):map__20591);
var item = cljs.core.get.call(null,map__20591__$1,new cljs.core.Keyword(null,"item","item",249373802));
var selected = cljs.core.get.call(null,map__20591__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("lomakkeet.autocomplete","i","lomakkeet.autocomplete/i",-2094349674).cljs$core$IFn$_invoke$arity$1(item),selected)){
return goog.style.scrollIntoContainerView.call(null,reagent.core.dom_node.call(null,this$),reagent.core.dom_node.call(null,this$).parentNode,true);
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var map__20593 = reagent.core.props.call(null,this$);
var map__20593__$1 = ((((!((map__20593 == null)))?((((map__20593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20593):map__20593);
var item = cljs.core.get.call(null,map__20593__$1,new cljs.core.Keyword(null,"item","item",249373802));
var selected = cljs.core.get.call(null,map__20593__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("lomakkeet.autocomplete","i","lomakkeet.autocomplete/i",-2094349674).cljs$core$IFn$_invoke$arity$1(item),selected)){
return goog.style.scrollIntoContainerView.call(null,reagent.core.dom_node.call(null,this$),reagent.core.dom_node.call(null,this$).parentNode,true);
} else {
return null;
}
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (this$){
var map__20595 = reagent.core.props.call(null,this$);
var map__20595__$1 = ((((!((map__20595 == null)))?((((map__20595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20595):map__20595);
var item = cljs.core.get.call(null,map__20595__$1,new cljs.core.Keyword(null,"item","item",249373802));
var selected = cljs.core.get.call(null,map__20595__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cb = cljs.core.get.call(null,map__20595__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var opts = cljs.core.get.call(null,map__20595__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var map__20596 = opts;
var map__20596__$1 = ((((!((map__20596 == null)))?((((map__20596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20596):map__20596);
var value = cljs.core.get.call(null,map__20596__$1,new cljs.core.Keyword(null,"value","value",305978217));
var item__GT_key = cljs.core.get.call(null,map__20596__$1,new cljs.core.Keyword(null,"item->key","item->key",907378277));
var item__GT_text = cljs.core.get.call(null,map__20596__$1,new cljs.core.Keyword(null,"item->text","item->text",914440483));
var item__GT_value = cljs.core.get.call(null,map__20596__$1,new cljs.core.Keyword(null,"item->value","item->value",370830851));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),item__GT_key.call(null,item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__20595,map__20595__$1,item,selected,cb,opts,map__20596,map__20596__$1,value,item__GT_key,item__GT_text,item__GT_value){
return (function (___$1){
cb.call(null,item);

return null;
});})(map__20595,map__20595__$1,item,selected,cb,opts,map__20596,map__20596__$1,value,item__GT_key,item__GT_text,item__GT_value))
,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("option "),cljs.core.str((((cljs.core._EQ_.call(null,new cljs.core.Keyword("lomakkeet.autocomplete","i","lomakkeet.autocomplete/i",-2094349674).cljs$core$IFn$_invoke$arity$1(item),selected)) || (cljs.core._EQ_.call(null,value,item__GT_value.call(null,item))))?"active":null))].join('')], null),(function (){var or__4988__auto__ = new cljs.core.Keyword("lomakkeet.reagent.autocomplete","text","lomakkeet.reagent.autocomplete/text",720702604).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return item__GT_text.call(null,item);
}
})()], null);
})], null));
});
lomakkeet.reagent.autocomplete.defaults = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value->text","value->text",-2066558161),cljs.core.get,new cljs.core.Keyword(null,"item->key","item->key",907378277),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"item->text","item->text",914440483),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"item-removable?","item-removable?",-1660611552),cljs.core.constantly.call(null,true),new cljs.core.Keyword(null,"value->search","value->search",169049659),cljs.core.identity,new cljs.core.Keyword(null,"->query","->query",-416543779),lomakkeet.autocomplete.default__GT_query,new cljs.core.Keyword(null,"no-results-text","no-results-text",2070582635),"No results"], null);
lomakkeet.reagent.autocomplete.assert_opts = (function lomakkeet$reagent$autocomplete$assert_opts(p__20599){
var map__20602 = p__20599;
var map__20602__$1 = ((((!((map__20602 == null)))?((((map__20602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20602):map__20602);
var opts = map__20602__$1;
var items = cljs.core.get.call(null,map__20602__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var filter_current_out_QMARK_ = cljs.core.get.call(null,map__20602__$1,new cljs.core.Keyword(null,"filter-current-out?","filter-current-out?",908538184));
var multiple_QMARK_ = cljs.core.get.call(null,map__20602__$1,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283));
var value = cljs.core.get.call(null,map__20602__$1,new cljs.core.Keyword(null,"value","value",305978217));
var cb = cljs.core.get.call(null,map__20602__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
if(cljs.core.ifn_QMARK_.call(null,cb)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Callback function is required"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null))))].join('')));
}

return opts;
});
lomakkeet.reagent.autocomplete.find_container = (function lomakkeet$reagent$autocomplete$find_container(el){
var el__$1 = el;
while(true){
if(cljs.core.truth_(el__$1)){
if(cljs.core.truth_(goog.dom.classes.has(el__$1,"scroll"))){
var rect = el__$1.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),rect.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),rect.bottom], null);
} else {
var G__20604 = el__$1.offsetParent;
el__$1 = G__20604;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),window.innerHeight], null);
}
break;
}
});
lomakkeet.reagent.autocomplete.create_new_item = (function lomakkeet$reagent$autocomplete$create_new_item(search,create_cb,_){
if(cljs.core.truth_((function (){var and__4976__auto__ = create_cb;
if(cljs.core.truth_(and__4976__auto__)){
return cljs.core.seq.call(null,search);
} else {
return and__4976__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.option","div.option",-1520829790),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (___$1){
create_cb.call(null,search);

return null;
})], null),"Add ",search,"..."], null);
} else {
return null;
}
});
lomakkeet.reagent.autocomplete.autocomplete_contents = (function lomakkeet$reagent$autocomplete$autocomplete_contents(_,container_state,___$1,___$2,___$3,___$4){
var top_QMARK_ = reagent.core.atom.call(null,false);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (top_QMARK_){
return (function (this$){
var el = reagent.core.dom_node.call(null,this$);
var rect = el.getBoundingClientRect();
var height = el.offsetHeight;
var top = rect.top;
var container = lomakkeet.reagent.autocomplete.find_container.call(null,el);
return cljs.core.reset_BANG_.call(null,top_QMARK_,(((top + height) > new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(container))) && ((((top - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(container_state)) - height) > new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(container))));
});})(top_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (top_QMARK_){
return (function (results,container_state__$1,selected,select_cb,create_cb,search,p__20636){
var map__20637 = p__20636;
var map__20637__$1 = ((((!((map__20637 == null)))?((((map__20637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20637):map__20637);
var opts = map__20637__$1;
var multiple_QMARK_ = cljs.core.get.call(null,map__20637__$1,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283));
var group_by = cljs.core.get.call(null,map__20637__$1,new cljs.core.Keyword(null,"group-by","group-by",-379139802));
var groups = cljs.core.get.call(null,map__20637__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var cb = cljs.core.get.call(null,map__20637__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var item__GT_key = cljs.core.get.call(null,map__20637__$1,new cljs.core.Keyword(null,"item->key","item->key",907378277));
var no_results_text = cljs.core.get.call(null,map__20637__$1,new cljs.core.Keyword(null,"no-results-text","no-results-text",2070582635));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("selectize-dropdown "),cljs.core.str((cljs.core.truth_(multiple_QMARK_)?"multi ":"single ")),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,top_QMARK_))?"above ":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref.call(null,top_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),[cljs.core.str(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(container_state__$1)),cljs.core.str("px")].join('')], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selectize-dropdown-content","div.selectize-dropdown-content",184313908),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.create_new_item,search,create_cb,opts], null),(cljs.core.truth_((function (){var or__4988__auto__ = group_by;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return groups;
}
})())?(function (){var r = cljs.core.doall.call(null,(function (){var iter__5760__auto__ = ((function (map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_){
return (function lomakkeet$reagent$autocomplete$autocomplete_contents_$_iter__20639(s__20640){
return (new cljs.core.LazySeq(null,((function (map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_){
return (function (){
var s__20640__$1 = s__20640;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20640__$1);
if(temp__4425__auto__){
var s__20640__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20640__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__20640__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__20642 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__20641 = (0);
while(true){
if((i__20641 < size__5759__auto__)){
var vec__20653 = cljs.core._nth.call(null,c__5758__auto__,i__20641);
var k = cljs.core.nth.call(null,vec__20653,(0),null);
var v = cljs.core.nth.call(null,vec__20653,(1),null);
var group_results = cljs.core.get.call(null,results,k);
if(cljs.core.truth_(group_results)){
cljs.core.chunk_append.call(null,b__20642,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.optgroup","div.optgroup",411779389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.optgroup-header","div.optgroup-header",978098154),(cljs.core.truth_(groups)?v:cljs.core.name.call(null,k))], null),(function (){var iter__5760__auto__ = ((function (i__20641,s__20640__$1,group_results,vec__20653,k,v,c__5758__auto__,size__5759__auto__,b__20642,s__20640__$2,temp__4425__auto__,map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_){
return (function lomakkeet$reagent$autocomplete$autocomplete_contents_$_iter__20639_$_iter__20654(s__20655){
return (new cljs.core.LazySeq(null,((function (i__20641,s__20640__$1,group_results,vec__20653,k,v,c__5758__auto__,size__5759__auto__,b__20642,s__20640__$2,temp__4425__auto__,map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_){
return (function (){
var s__20655__$1 = s__20655;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__20655__$1);
if(temp__4425__auto____$1){
var s__20655__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20655__$2)){
var c__5758__auto____$1 = cljs.core.chunk_first.call(null,s__20655__$2);
var size__5759__auto____$1 = cljs.core.count.call(null,c__5758__auto____$1);
var b__20657 = cljs.core.chunk_buffer.call(null,size__5759__auto____$1);
if((function (){var i__20656 = (0);
while(true){
if((i__20656 < size__5759__auto____$1)){
var item = cljs.core._nth.call(null,c__5758__auto____$1,i__20656);
cljs.core.chunk_append.call(null,b__20657,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"cb","cb",589947841),cb,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item__GT_key.call(null,item)], null)));

var G__20667 = (i__20656 + (1));
i__20656 = G__20667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20657),lomakkeet$reagent$autocomplete$autocomplete_contents_$_iter__20639_$_iter__20654.call(null,cljs.core.chunk_rest.call(null,s__20655__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20657),null);
}
} else {
var item = cljs.core.first.call(null,s__20655__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"cb","cb",589947841),cb,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item__GT_key.call(null,item)], null)),lomakkeet$reagent$autocomplete$autocomplete_contents_$_iter__20639_$_iter__20654.call(null,cljs.core.rest.call(null,s__20655__$2)));
}
} else {
return null;
}
break;
}
});})(i__20641,s__20640__$1,group_results,vec__20653,k,v,c__5758__auto__,size__5759__auto__,b__20642,s__20640__$2,temp__4425__auto__,map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_))
,null,null));
});})(i__20641,s__20640__$1,group_results,vec__20653,k,v,c__5758__auto__,size__5759__auto__,b__20642,s__20640__$2,temp__4425__auto__,map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_))
;
return iter__5760__auto__.call(null,group_results);
})()], null));

var G__20668 = (i__20641 + (1));
i__20641 = G__20668;
continue;
} else {
var G__20669 = (i__20641 + (1));
i__20641 = G__20669;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20642),lomakkeet$reagent$autocomplete$autocomplete_contents_$_iter__20639.call(null,cljs.core.chunk_rest.call(null,s__20640__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20642),null);
}
} else {
var vec__20658 = cljs.core.first.call(null,s__20640__$2);
var k = cljs.core.nth.call(null,vec__20658,(0),null);
var v = cljs.core.nth.call(null,vec__20658,(1),null);
var group_results = cljs.core.get.call(null,results,k);
if(cljs.core.truth_(group_results)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.optgroup","div.optgroup",411779389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.optgroup-header","div.optgroup-header",978098154),(cljs.core.truth_(groups)?v:cljs.core.name.call(null,k))], null),(function (){var iter__5760__auto__ = ((function (s__20640__$1,group_results,vec__20658,k,v,s__20640__$2,temp__4425__auto__,map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_){
return (function lomakkeet$reagent$autocomplete$autocomplete_contents_$_iter__20639_$_iter__20659(s__20660){
return (new cljs.core.LazySeq(null,((function (s__20640__$1,group_results,vec__20658,k,v,s__20640__$2,temp__4425__auto__,map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_){
return (function (){
var s__20660__$1 = s__20660;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__20660__$1);
if(temp__4425__auto____$1){
var s__20660__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20660__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__20660__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__20662 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__20661 = (0);
while(true){
if((i__20661 < size__5759__auto__)){
var item = cljs.core._nth.call(null,c__5758__auto__,i__20661);
cljs.core.chunk_append.call(null,b__20662,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"cb","cb",589947841),cb,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item__GT_key.call(null,item)], null)));

var G__20670 = (i__20661 + (1));
i__20661 = G__20670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20662),lomakkeet$reagent$autocomplete$autocomplete_contents_$_iter__20639_$_iter__20659.call(null,cljs.core.chunk_rest.call(null,s__20660__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20662),null);
}
} else {
var item = cljs.core.first.call(null,s__20660__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"cb","cb",589947841),cb,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item__GT_key.call(null,item)], null)),lomakkeet$reagent$autocomplete$autocomplete_contents_$_iter__20639_$_iter__20659.call(null,cljs.core.rest.call(null,s__20660__$2)));
}
} else {
return null;
}
break;
}
});})(s__20640__$1,group_results,vec__20658,k,v,s__20640__$2,temp__4425__auto__,map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_))
,null,null));
});})(s__20640__$1,group_results,vec__20658,k,v,s__20640__$2,temp__4425__auto__,map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_))
;
return iter__5760__auto__.call(null,group_results);
})()], null),lomakkeet$reagent$autocomplete$autocomplete_contents_$_iter__20639.call(null,cljs.core.rest.call(null,s__20640__$2)));
} else {
var G__20671 = cljs.core.rest.call(null,s__20640__$2);
s__20640__$1 = G__20671;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_))
,null,null));
});})(map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_))
;
return iter__5760__auto__.call(null,(function (){var or__4988__auto__ = groups;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return results;
}
})());
})());
if(cljs.core.seq.call(null,r)){
return r;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.option","div.option",-1520829790),no_results_text], null);
}
})():((cljs.core.seq.call(null,results))?(function (){var iter__5760__auto__ = ((function (map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_){
return (function lomakkeet$reagent$autocomplete$autocomplete_contents_$_iter__20663(s__20664){
return (new cljs.core.LazySeq(null,((function (map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_){
return (function (){
var s__20664__$1 = s__20664;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20664__$1);
if(temp__4425__auto__){
var s__20664__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20664__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__20664__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__20666 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__20665 = (0);
while(true){
if((i__20665 < size__5759__auto__)){
var item = cljs.core._nth.call(null,c__5758__auto__,i__20665);
cljs.core.chunk_append.call(null,b__20666,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"cb","cb",589947841),cb,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item__GT_key.call(null,item)], null)));

var G__20672 = (i__20665 + (1));
i__20665 = G__20672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20666),lomakkeet$reagent$autocomplete$autocomplete_contents_$_iter__20663.call(null,cljs.core.chunk_rest.call(null,s__20664__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20666),null);
}
} else {
var item = cljs.core.first.call(null,s__20664__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.choice_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"cb","cb",589947841),cb,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item__GT_key.call(null,item)], null)),lomakkeet$reagent$autocomplete$autocomplete_contents_$_iter__20663.call(null,cljs.core.rest.call(null,s__20664__$2)));
}
} else {
return null;
}
break;
}
});})(map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_))
,null,null));
});})(map__20637,map__20637__$1,opts,multiple_QMARK_,group_by,groups,cb,item__GT_key,no_results_text,top_QMARK_))
;
return iter__5760__auto__.call(null,results);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.option","div.option",-1520829790),no_results_text], null)))], null)], null);
});})(top_QMARK_))
], null));
});
/**
 * Save the container dimensions to component state.
 *   Container contains the input and dropdown.
 */
lomakkeet.reagent.autocomplete.update_el_dimensions = (function lomakkeet$reagent$autocomplete$update_el_dimensions(this$){
var el = reagent.core.dom_node.call(null,this$);
return reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),el.offsetWidth,new cljs.core.Keyword(null,"height","height",1025178622),el.offsetHeight], null));
});
/**
 * Focus the input element if autocomplete is open.
 */
lomakkeet.reagent.autocomplete.focus_input = (function lomakkeet$reagent$autocomplete$focus_input(this$){
if(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(reagent.core.state.call(null,this$)))){
var G__20674 = this$;
var G__20674__$1 = (((G__20674 == null))?null:reagent.core.dom_node.call(null,G__20674));
var G__20674__$2 = (((G__20674__$1 == null))?null:G__20674__$1.getElementsByTagName("input"));
var G__20674__$3 = (((G__20674__$2 == null))?null:G__20674__$2.item((0)));
var G__20674__$4 = (((G__20674__$3 == null))?null:G__20674__$3.focus());
return G__20674__$4;
} else {
return null;
}
});
/**
 * :value - (required) IDeref or value
 * :cb - (required) Function. [value]
 * :remove-cb - For multiple?
 * :on-blur - Input :on-blur. Might be useful for form pristine handling.
 * :items
 * :max-results
 * :value->search
 * :value->text
 * :item->key
 * :item->value
 * :item-removable? - predicate function to determine if item is non-removable
 * :term-match-fn
 * :search-fields
 * :min-search-length - Required number of characters in search string before results are filtered.
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
lomakkeet.reagent.autocomplete.autocomplete = (function lomakkeet$reagent$autocomplete$autocomplete(p__20675){
var map__20692 = p__20675;
var map__20692__$1 = ((((!((map__20692 == null)))?((((map__20692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20692):map__20692);
var opts = map__20692__$1;
var items = cljs.core.get.call(null,map__20692__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"get-initial-state","get-initial-state",-4494070),((function (map__20692,map__20692__$1,opts,items){
return (function (this$){
var prepared_items = lomakkeet.reagent.autocomplete.prepare_items.call(null,items,opts);
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"prepared-items","prepared-items",144484006),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"closable","closable",-2093671916),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"height","height",1025178622)],[(0),prepared_items,null,null,null,false,items,null,null]),lomakkeet.reagent.autocomplete.filter_results_SINGLEQUOTE_.call(null,prepared_items,null,cljs.core.merge.call(null,lomakkeet.reagent.autocomplete.defaults,opts)));
});})(map__20692,map__20692__$1,opts,items))
,new cljs.core.Keyword(null,"component-will-receive-props","component-will-receive-props",551608157),((function (map__20692,map__20692__$1,opts,items){
return (function (this$,p__20694){
var vec__20695 = p__20694;
var _ = cljs.core.nth.call(null,vec__20695,(0),null);
var map__20696 = cljs.core.nth.call(null,vec__20695,(1),null);
var map__20696__$1 = ((((!((map__20696 == null)))?((((map__20696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20696):map__20696);
var opts__$1 = map__20696__$1;
var items__$1 = cljs.core.get.call(null,map__20696__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,this$)),items__$1)){
return null;
} else {
reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),items__$1], null));

reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prepared-items","prepared-items",144484006),lomakkeet.reagent.autocomplete.prepare_items.call(null,items__$1,opts__$1)], null));

return lomakkeet.reagent.autocomplete.reset_search.call(null,this$,opts__$1);
}
});})(map__20692,map__20692__$1,opts,items))
,new cljs.core.Keyword(null,"component-did-unmount","component-did-unmount",-665071477),((function (map__20692,map__20692__$1,opts,items){
return (function (this$){
var temp__4423__auto__ = new cljs.core.Keyword(null,"closable","closable",-2093671916).cljs$core$IFn$_invoke$arity$1(reagent.core.state.call(null,this$));
if(cljs.core.truth_(temp__4423__auto__)){
var closable = temp__4423__auto__;
return closable.call(null);
} else {
return null;
}
});})(map__20692,map__20692__$1,opts,items))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__20692,map__20692__$1,opts,items){
return (function (this$,old_argv){
lomakkeet.reagent.autocomplete.update_el_dimensions.call(null,this$);

return lomakkeet.reagent.autocomplete.focus_input.call(null,this$);
});})(map__20692,map__20692__$1,opts,items))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__20692,map__20692__$1,opts,items){
return (function (this$){
reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closable","closable",-2093671916),lomakkeet.reagent.mixins.create_closable.call(null,((function (map__20692,map__20692__$1,opts,items){
return (function (){
lomakkeet.reagent.autocomplete.close.call(null,this$);

return lomakkeet.reagent.autocomplete.reset_search.call(null,this$,opts);
});})(map__20692,map__20692__$1,opts,items))
)], null));

lomakkeet.reagent.autocomplete.update_el_dimensions.call(null,this$);

return lomakkeet.reagent.autocomplete.focus_input.call(null,this$);
});})(map__20692,map__20692__$1,opts,items))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (map__20692,map__20692__$1,opts,items){
return (function (this$){
var opts__$1 = reagent.core.props.call(null,this$);
var map__20698 = reagent.core.state.call(null,this$);
var map__20698__$1 = ((((!((map__20698 == null)))?((((map__20698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20698):map__20698);
var items__$1 = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var open_QMARK_ = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var results = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var search = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"search","search",1564939822));
var selected = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var n = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"n","n",562130025));
var width = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__20699 = lomakkeet.reagent.autocomplete.assert_opts.call(null,cljs.core.merge.call(null,lomakkeet.reagent.autocomplete.defaults,opts__$1));
var map__20699__$1 = ((((!((map__20699 == null)))?((((map__20699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20699):map__20699);
var opts__$2 = map__20699__$1;
var groups = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var disabled_QMARK_ = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var __GT_query = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"->query","->query",-416543779));
var item_removable_QMARK_ = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"item-removable?","item-removable?",-1660611552));
var cb = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var search_fields = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"search-fields","search-fields",641290308));
var item__GT_key = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"item->key","item->key",907378277));
var placeholder = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var clearable_QMARK_ = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"clearable?","clearable?",661720997));
var remove_cb = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"remove-cb","remove-cb",1443715269));
var group_by = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"group-by","group-by",-379139802));
var create = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"create","create",-1301499256));
var ctrl_class = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"ctrl-class","ctrl-class",721988264));
var value = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_blur = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var input_class = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var value__GT_text = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"value->text","value->text",-2066558161));
var multiple_QMARK_ = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283));
var map__20700 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item->value","item->value",370830851),item__GT_key,new cljs.core.Keyword(null,"find-by-selection","find-by-selection",1601927046),(cljs.core.truth_(group_by)?lomakkeet.autocomplete.default_group_find_by_selection:lomakkeet.autocomplete.default_find_by_selection),new cljs.core.Keyword(null,"term-match-fn","term-match-fn",-1830086322),(cljs.core.truth_(search_fields)?lomakkeet.autocomplete.create_matcher_STAR_.call(null,search_fields):null)], null),opts__$2);
var map__20700__$1 = ((((!((map__20700 == null)))?((((map__20700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20700):map__20700);
var opts__$3 = map__20700__$1;
var item__GT_value = cljs.core.get.call(null,map__20700__$1,new cljs.core.Keyword(null,"item->value","item->value",370830851));
var find_by_selection = cljs.core.get.call(null,map__20700__$1,new cljs.core.Keyword(null,"find-by-selection","find-by-selection",1601927046));
var term_match_fn = cljs.core.get.call(null,map__20700__$1,new cljs.core.Keyword(null,"term-match-fn","term-match-fn",-1830086322));
var select_cb = ((function (opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,map__20692,map__20692__$1,opts,items){
return (function (v){
cb.call(null,v);

return reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
});})(opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,map__20692,map__20692__$1,opts,items))
;
var create_cb = (cljs.core.truth_(create)?((function (opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,map__20692,map__20692__$1,opts,items){
return (function (s){
create.call(null,s);

return reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
});})(opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,map__20692,map__20692__$1,opts,items))
:null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selectize-control","div.selectize-control",-783070962),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(ctrl_class),cljs.core.str((cljs.core.truth_(multiple_QMARK_)?" multi":" single"))].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selectize-input","div.selectize-input",-1926662936),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(input_class),cljs.core.str((cljs.core.truth_(open_QMARK_)?" input-active dropdown-active ":null)),cljs.core.str((cljs.core.truth_(disabled_QMARK_)?" disabled ":null)),cljs.core.str(((cljs.core.seq.call(null,results))?" items ":null)),cljs.core.str((function (){var v = value;
if(((!(cljs.core.coll_QMARK_.call(null,v))) && (cljs.core.some_QMARK_.call(null,v))) || (cljs.core.seq.call(null,v))){
return " has-items ";
} else {
return null;
}
})())].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,lomakkeet.reagent.autocomplete.click,this$,disabled_QMARK_)], null),(cljs.core.truth_(multiple_QMARK_)?cljs.core.doall.call(null,(function (){var iter__5760__auto__ = ((function (opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,create_cb,map__20692,map__20692__$1,opts,items){
return (function lomakkeet$reagent$autocomplete$autocomplete_$_iter__20704(s__20705){
return (new cljs.core.LazySeq(null,((function (opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,create_cb,map__20692,map__20692__$1,opts,items){
return (function (){
var s__20705__$1 = s__20705;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20705__$1);
if(temp__4425__auto__){
var s__20705__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20705__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__20705__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__20707 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__20706 = (0);
while(true){
if((i__20706 < size__5759__auto__)){
var x = cljs.core._nth.call(null,c__5758__auto__,i__20706);
cljs.core.chunk_append.call(null,b__20707,(function (){var removable_QMARK_ = item_removable_QMARK_.call(null,x);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(removable_QMARK_)?"item":"non-removable-item")], null),value__GT_text.call(null,items__$1,x),(cljs.core.truth_(removable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.remove","a.remove",743200610),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20706,removable_QMARK_,x,c__5758__auto__,size__5759__auto__,b__20707,s__20705__$2,temp__4425__auto__,opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,create_cb,map__20692,map__20692__$1,opts,items){
return (function (e){
remove_cb.call(null,x);

return null;
});})(i__20706,removable_QMARK_,x,c__5758__auto__,size__5759__auto__,b__20707,s__20705__$2,temp__4425__auto__,opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,create_cb,map__20692,map__20692__$1,opts,items))
], null),"\u00D7"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null));
})());

var G__20708 = (i__20706 + (1));
i__20706 = G__20708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20707),lomakkeet$reagent$autocomplete$autocomplete_$_iter__20704.call(null,cljs.core.chunk_rest.call(null,s__20705__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20707),null);
}
} else {
var x = cljs.core.first.call(null,s__20705__$2);
return cljs.core.cons.call(null,(function (){var removable_QMARK_ = item_removable_QMARK_.call(null,x);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(removable_QMARK_)?"item":"non-removable-item")], null),value__GT_text.call(null,items__$1,x),(cljs.core.truth_(removable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.remove","a.remove",743200610),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (removable_QMARK_,x,s__20705__$2,temp__4425__auto__,opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,create_cb,map__20692,map__20692__$1,opts,items){
return (function (e){
remove_cb.call(null,x);

return null;
});})(removable_QMARK_,x,s__20705__$2,temp__4425__auto__,opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,create_cb,map__20692,map__20692__$1,opts,items))
], null),"\u00D7"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null));
})(),lomakkeet$reagent$autocomplete$autocomplete_$_iter__20704.call(null,cljs.core.rest.call(null,s__20705__$2)));
}
} else {
return null;
}
break;
}
});})(opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,create_cb,map__20692,map__20692__$1,opts,items))
,null,null));
});})(opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,create_cb,map__20692,map__20692__$1,opts,items))
;
return iter__5760__auto__.call(null,value);
})()):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[false,placeholder,disabled_QMARK_,cljs.core.partial.call(null,lomakkeet.reagent.autocomplete.focus,this$,search),(cljs.core.truth_(open_QMARK_)?[cljs.core.str(search)].join(''):((cljs.core.not.call(null,multiple_QMARK_))?value__GT_text.call(null,items__$1,value):null)),((function (opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,create_cb,map__20692,map__20692__$1,opts,items){
return (function (e){
lomakkeet.reagent.autocomplete.blur.call(null,this$,opts__$3,e);

if(cljs.core.truth_(on_blur)){
return on_blur.call(null,e);
} else {
return null;
}
});})(opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,create_cb,map__20692,map__20692__$1,opts,items))
,"text",cljs.core.partial.call(null,lomakkeet.reagent.autocomplete.click,this$,disabled_QMARK_),cljs.core.partial.call(null,lomakkeet.reagent.autocomplete.change,this$,null,opts__$3),cljs.core.partial.call(null,lomakkeet.reagent.autocomplete.key_down,this$,find_by_selection,select_cb,opts__$3)])], null),(cljs.core.truth_(clearable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.selectize-clear","span.selectize-clear",569546082),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,create_cb,map__20692,map__20692__$1,opts,items){
return (function (){
return select_cb.call(null,null);
});})(opts__$1,map__20698,map__20698__$1,items__$1,open_QMARK_,results,search,selected,n,width,height,map__20699,map__20699__$1,opts__$2,groups,disabled_QMARK_,__GT_query,item_removable_QMARK_,cb,search_fields,item__GT_key,placeholder,clearable_QMARK_,remove_cb,group_by,create,ctrl_class,value,on_blur,input_class,value__GT_text,multiple_QMARK_,map__20700,map__20700__$1,opts__$3,item__GT_value,find_by_selection,term_match_fn,select_cb,create_cb,map__20692,map__20692__$1,opts,items))
], null),"\u00D7"], null):null)], null),(cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.autocomplete_contents,results,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),selected,select_cb,create_cb,search,opts__$3], null):null)], null);
});})(map__20692,map__20692__$1,opts,items))
], null));
});
lomakkeet.reagent.autocomplete.autocomplete_STAR_ = (function lomakkeet$reagent$autocomplete$autocomplete_STAR_(form,p__20710){
var map__20719 = p__20710;
var map__20719__$1 = ((((!((map__20719 == null)))?((((map__20719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20719):map__20719);
var ks = cljs.core.get.call(null,map__20719__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var item__GT_value = cljs.core.get.call(null,map__20719__$1,new cljs.core.Keyword(null,"item->value","item->value",370830851));
var item__GT_key = cljs.core.get.call(null,map__20719__$1,new cljs.core.Keyword(null,"item->key","item->key",907378277),cljs.core.key);
var multiple_QMARK_ = cljs.core.get.call(null,map__20719__$1,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283));
var cb = cljs.core.get.call(null,map__20719__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var remove_cb = cljs.core.get.call(null,map__20719__$1,new cljs.core.Keyword(null,"remove-cb","remove-cb",1443715269));
var disabled_QMARK_ = cljs.core.get.call(null,map__20719__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var value = reagent.ratom.make_reaction.call(null,((function (map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_){
return (function (){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form))),ks);
});})(map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_))
);
var item__GT_value__$1 = (function (){var or__4988__auto__ = item__GT_value;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return item__GT_key;
}
})();
var cb__$1 = ((function (value,item__GT_value__$1,map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_){
return (function (v){
if(cljs.core.truth_(cb)){
cb.call(null,v);
} else {
}

var item__GT_value_20727__$2 = ((cljs.core.map_QMARK_.call(null,item__GT_value__$1))?item__GT_value__$1:cljs.core.PersistentArrayMap.fromArray([ks,item__GT_value__$1], true, false));
var seq__20721_20728 = cljs.core.seq.call(null,item__GT_value_20727__$2);
var chunk__20722_20729 = null;
var count__20723_20730 = (0);
var i__20724_20731 = (0);
while(true){
if((i__20724_20731 < count__20723_20730)){
var vec__20725_20732 = cljs.core._nth.call(null,chunk__20722_20729,i__20724_20731);
var ks_20733__$1 = cljs.core.nth.call(null,vec__20725_20732,(0),null);
var item__GT_value_20734__$3 = cljs.core.nth.call(null,vec__20725_20732,(1),null);
lomakkeet.reagent.impl.cb.call(null,form,ks_20733__$1,(cljs.core.truth_(multiple_QMARK_)?cljs.core.conj.call(null,cljs.core.deref.call(null,value),item__GT_value_20734__$3.call(null,v)):item__GT_value_20734__$3.call(null,v)));

var G__20735 = seq__20721_20728;
var G__20736 = chunk__20722_20729;
var G__20737 = count__20723_20730;
var G__20738 = (i__20724_20731 + (1));
seq__20721_20728 = G__20735;
chunk__20722_20729 = G__20736;
count__20723_20730 = G__20737;
i__20724_20731 = G__20738;
continue;
} else {
var temp__4425__auto___20739 = cljs.core.seq.call(null,seq__20721_20728);
if(temp__4425__auto___20739){
var seq__20721_20740__$1 = temp__4425__auto___20739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20721_20740__$1)){
var c__5791__auto___20741 = cljs.core.chunk_first.call(null,seq__20721_20740__$1);
var G__20742 = cljs.core.chunk_rest.call(null,seq__20721_20740__$1);
var G__20743 = c__5791__auto___20741;
var G__20744 = cljs.core.count.call(null,c__5791__auto___20741);
var G__20745 = (0);
seq__20721_20728 = G__20742;
chunk__20722_20729 = G__20743;
count__20723_20730 = G__20744;
i__20724_20731 = G__20745;
continue;
} else {
var vec__20726_20746 = cljs.core.first.call(null,seq__20721_20740__$1);
var ks_20747__$1 = cljs.core.nth.call(null,vec__20726_20746,(0),null);
var item__GT_value_20748__$3 = cljs.core.nth.call(null,vec__20726_20746,(1),null);
lomakkeet.reagent.impl.cb.call(null,form,ks_20747__$1,(cljs.core.truth_(multiple_QMARK_)?cljs.core.conj.call(null,cljs.core.deref.call(null,value),item__GT_value_20748__$3.call(null,v)):item__GT_value_20748__$3.call(null,v)));

var G__20749 = cljs.core.next.call(null,seq__20721_20740__$1);
var G__20750 = null;
var G__20751 = (0);
var G__20752 = (0);
seq__20721_20728 = G__20749;
chunk__20722_20729 = G__20750;
count__20723_20730 = G__20751;
i__20724_20731 = G__20752;
continue;
}
} else {
}
}
break;
}

return null;
});})(value,item__GT_value__$1,map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_))
;
var remove_cb__$1 = ((function (value,item__GT_value__$1,cb__$1,map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_){
return (function (x,_){
if(cljs.core.truth_(remove_cb)){
remove_cb.call(null,x);
} else {
}

return lomakkeet.reagent.impl.cb.call(null,form,ks,cljs.core.into.call(null,cljs.core.empty.call(null,cljs.core.deref.call(null,value)),cljs.core.remove.call(null,((function (value,item__GT_value__$1,cb__$1,map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_){
return (function (p1__20709_SHARP_){
return cljs.core._EQ_.call(null,p1__20709_SHARP_,x);
});})(value,item__GT_value__$1,cb__$1,map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_))
,cljs.core.deref.call(null,value))));
});})(value,item__GT_value__$1,cb__$1,map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_))
;
var on_blur = ((function (value,item__GT_value__$1,cb__$1,remove_cb__$1,map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_){
return (function (e){
return lomakkeet.reagent.impl.blur.call(null,form,ks);
});})(value,item__GT_value__$1,cb__$1,remove_cb__$1,map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_))
;
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(form);
var disabled = reagent.ratom.make_reaction.call(null,((function (value,item__GT_value__$1,cb__$1,remove_cb__$1,on_blur,attrs,map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_){
return (function (){
var or__4988__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs);
}
});})(value,item__GT_value__$1,cb__$1,remove_cb__$1,on_blur,attrs,map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_))
);
return ((function (value,item__GT_value__$1,cb__$1,remove_cb__$1,on_blur,attrs,disabled,map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_){
return (function (form__$1,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.autocomplete.autocomplete,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"cb","cb",589947841),cb__$1,new cljs.core.Keyword(null,"remove-cb","remove-cb",1443715269),remove_cb__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),on_blur,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.deref.call(null,disabled))], null);
});
;})(value,item__GT_value__$1,cb__$1,remove_cb__$1,on_blur,attrs,disabled,map__20719,map__20719__$1,ks,item__GT_value,item__GT_key,multiple_QMARK_,cb,remove_cb,disabled_QMARK_))
});

//# sourceMappingURL=autocomplete.js.map