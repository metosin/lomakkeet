// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.reagent.dropdown');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * - `:key` React key
 *   - `:value` (Optional) Current value
 *   - `:href` (Optional) A href
 *   - `:on-click` (Optional) callback
 *   - `:text` Text
 *   
 */
lomakkeet.reagent.dropdown.__GT_menu_item = (function lomakkeet$reagent$dropdown$__GT_menu_item(open_QMARK_,p__19001,p__19002){
var map__19007 = p__19001;
var map__19007__$1 = ((((!((map__19007 == null)))?((((map__19007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19007):map__19007);
var dropdown_opts = map__19007__$1;
var on_change = cljs.core.get.call(null,map__19007__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var close_on_click_QMARK_ = cljs.core.get.call(null,map__19007__$1,new cljs.core.Keyword(null,"close-on-click?","close-on-click?",-859981648));
var map__19008 = p__19002;
var map__19008__$1 = ((((!((map__19008 == null)))?((((map__19008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19008):map__19008);
var item_opts = map__19008__$1;
var separator = cljs.core.get.call(null,map__19008__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125));
var key = cljs.core.get.call(null,map__19008__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var text = cljs.core.get.call(null,map__19008__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var value = cljs.core.get.call(null,map__19008__$1,new cljs.core.Keyword(null,"value","value",305978217));
var href = cljs.core.get.call(null,map__19008__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var on_click = cljs.core.get.call(null,map__19008__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
if(cljs.core.truth_(separator)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.divider","li.divider",1214212749)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_((function (){var and__4976__auto__ = value;
if(cljs.core.truth_(and__4976__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(dropdown_opts),value);
} else {
return and__4976__auto__;
}
})())?"active ":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var or__4988__auto__ = href;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return "#";
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__19007,map__19007__$1,dropdown_opts,on_change,close_on_click_QMARK_,map__19008,map__19008__$1,item_opts,separator,key,text,value,href,on_click){
return (function (e){
if(cljs.core.not.call(null,href)){
e.preventDefault();
} else {
}

if(!(close_on_click_QMARK_ === false)){
cljs.core.reset_BANG_.call(null,open_QMARK_,false);
} else {
}

if(cljs.core.truth_(on_click)){
on_click.call(null,e);
} else {
}

if(cljs.core.truth_(on_change)){
on_change.call(null,item_opts);
} else {
}

return null;
});})(map__19007,map__19007__$1,dropdown_opts,on_change,close_on_click_QMARK_,map__19008,map__19008__$1,item_opts,separator,key,text,value,href,on_click))
], null),text], null)], null);

}
});
/**
 * - `:text` Text for dropdown toggle element.
 *   - `:content` Used to pass in dropdown elements as collection of item-maps.
 *   - `:children` (replaces `:content`) Used to pass in dropdown elements as Reagent hiccup form. Most of other options
 *   do not work with this option.
 *   - `:on-change` (Optional, supported by content) Called with item-map when dropdown item is selected.
 *   - `:value` (Optional, supported by content) Current value, marks list item with equivalent value as active.
 *   - `:close-on-click?` (Default `true`) Close dropdown when any item is selected.
 *   - `:caret?` (Default `true`) Whether to automatically append caret to text.
 */
lomakkeet.reagent.dropdown.dropdown = (function lomakkeet$reagent$dropdown$dropdown(p__19011){
var map__19017 = p__19011;
var map__19017__$1 = ((((!((map__19017 == null)))?((((map__19017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19017):map__19017);
var el = cljs.core.get.call(null,map__19017__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var content = cljs.core.get.call(null,map__19017__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children = cljs.core.get.call(null,map__19017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var open_QMARK_ = reagent.core.atom.call(null,false);
var listener = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (open_QMARK_,listener,map__19017,map__19017__$1,el,content,children){
return (function (this$){
return cljs.core.reset_BANG_.call(null,listener,goog.events.listen(window,goog.events.EventType.CLICK,((function (open_QMARK_,listener,map__19017,map__19017__$1,el,content,children){
return (function (e){
if(cljs.core.not.call(null,goog.dom.contains(reagent.core.dom_node.call(null,this$),e.target))){
return cljs.core.reset_BANG_.call(null,open_QMARK_,false);
} else {
return null;
}
});})(open_QMARK_,listener,map__19017,map__19017__$1,el,content,children))
));
});})(open_QMARK_,listener,map__19017,map__19017__$1,el,content,children))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (open_QMARK_,listener,map__19017,map__19017__$1,el,content,children){
return (function (_){
return goog.events.unlistenByKey(cljs.core.deref.call(null,listener));
});})(open_QMARK_,listener,map__19017,map__19017__$1,el,content,children))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (open_QMARK_,listener,map__19017,map__19017__$1,el,content,children){
return (function (p__19019){
var map__19020 = p__19019;
var map__19020__$1 = ((((!((map__19020 == null)))?((((map__19020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19020):map__19020);
var opts = map__19020__$1;
var el__$1 = cljs.core.get.call(null,map__19020__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var content__$1 = cljs.core.get.call(null,map__19020__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children__$1 = cljs.core.get.call(null,map__19020__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [el__$1,open_QMARK_,(cljs.core.truth_(open_QMARK_)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu","ul.dropdown-menu",-867384656)], null),(cljs.core.truth_(children__$1)?children__$1:cljs.core.map.call(null,cljs.core.partial.call(null,lomakkeet.reagent.dropdown.__GT_menu_item,open_QMARK_,opts),content__$1))):null),opts], null);
});})(open_QMARK_,listener,map__19017,map__19017__$1,el,content,children))
], null));
});
lomakkeet.reagent.dropdown.toggle = (function lomakkeet$reagent$dropdown$toggle(open_QMARK_,e){
e.preventDefault();

cljs.core.swap_BANG_.call(null,open_QMARK_,cljs.core.not);

return null;
});
lomakkeet.reagent.dropdown.dropdown_li_SINGLEQUOTE_ = (function lomakkeet$reagent$dropdown$dropdown_li_SINGLEQUOTE_(open_QMARK_,dropdown,p__19022){
var map__19025 = p__19022;
var map__19025__$1 = ((((!((map__19025 == null)))?((((map__19025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19025):map__19025);
var text = cljs.core.get.call(null,map__19025__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var caret_QMARK_ = cljs.core.get.call(null,map__19025__$1,new cljs.core.Keyword(null,"caret?","caret?",1814896510));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("dropdown "),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,open_QMARK_))?"open ":null))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-toggle","a.dropdown-toggle",-264466802),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,lomakkeet.reagent.dropdown.toggle,open_QMARK_),new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),true,new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),cljs.core.deref.call(null,open_QMARK_)], null),text,((!(caret_QMARK_ === false))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null)], null):null)], null),dropdown], null);
});
lomakkeet.reagent.dropdown.dropdown_li = (function lomakkeet$reagent$dropdown$dropdown_li(opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.dropdown.dropdown,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"el","el",-1618201118),lomakkeet.reagent.dropdown.dropdown_li_SINGLEQUOTE_)], null);
});
lomakkeet.reagent.dropdown.dropdown_button_SINGLEQUOTE_ = (function lomakkeet$reagent$dropdown$dropdown_button_SINGLEQUOTE_(open_QMARK_,dropdown,p__19027){
var map__19030 = p__19027;
var map__19030__$1 = ((((!((map__19030 == null)))?((((map__19030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19030):map__19030);
var text = cljs.core.get.call(null,map__19030__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var caret_QMARK_ = cljs.core.get.call(null,map__19030__$1,new cljs.core.Keyword(null,"caret?","caret?",1814896510));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn-group "),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,open_QMARK_))?"open ":null))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.dropdown-toggle","button.btn.btn-default.dropdown-toggle",-1235297954),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,lomakkeet.reagent.dropdown.toggle,open_QMARK_),new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),true,new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),cljs.core.deref.call(null,open_QMARK_)], null),text,((!(caret_QMARK_ === false))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null)], null):null)], null),dropdown], null);
});
lomakkeet.reagent.dropdown.dropdown_button = (function lomakkeet$reagent$dropdown$dropdown_button(opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.dropdown.dropdown,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"el","el",-1618201118),lomakkeet.reagent.dropdown.dropdown_button_SINGLEQUOTE_)], null);
});

//# sourceMappingURL=dropdown.js.map