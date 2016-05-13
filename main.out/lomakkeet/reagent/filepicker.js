// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.reagent.filepicker');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('lomakkeet.reagent.impl');
lomakkeet.reagent.filepicker.humanize_filesize = (function lomakkeet$reagent$filepicker$humanize_filesize(var_args){
var args__6053__auto__ = [];
var len__6046__auto___20864 = arguments.length;
var i__6047__auto___20865 = (0);
while(true){
if((i__6047__auto___20865 < len__6046__auto___20864)){
args__6053__auto__.push((arguments[i__6047__auto___20865]));

var G__20866 = (i__6047__auto___20865 + (1));
i__6047__auto___20865 = G__20866;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return lomakkeet.reagent.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

lomakkeet.reagent.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$variadic = (function (bytes,p__20862){
var vec__20863 = p__20862;
var fmt = cljs.core.nth.call(null,vec__20863,(0),null);
var units = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null);
var unit = (((bytes === (0)))?(0):Math.floor((Math.log(bytes) / Math.log((1000)))));
var size = (bytes / Math.pow((1000),unit));
return goog.string.format((function (){var or__4988__auto__ = fmt;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return "%0.1f %s";
}
})(),size,cljs.core.get.call(null,units,unit));
});

lomakkeet.reagent.filepicker.humanize_filesize.cljs$lang$maxFixedArity = (1);

lomakkeet.reagent.filepicker.humanize_filesize.cljs$lang$applyTo = (function (seq20860){
var G__20861 = cljs.core.first.call(null,seq20860);
var seq20860__$1 = cljs.core.next.call(null,seq20860);
return lomakkeet.reagent.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$variadic(G__20861,seq20860__$1);
});
lomakkeet.reagent.filepicker.file_list__GT_vec = (function lomakkeet$reagent$filepicker$file_list__GT_vec(file_list){
return cljs.core.vec.call(null,cljs.core.mapv.call(null,(function (p1__20867_SHARP_){
return file_list.item(p1__20867_SHARP_);
}),cljs.core.range.call(null,file_list.length)));
});
lomakkeet.reagent.filepicker.noop = cljs.core.constantly.call(null,null);
lomakkeet.reagent.filepicker.filepicker = (function lomakkeet$reagent$filepicker$filepicker(p__20868){
var map__20871 = p__20868;
var map__20871__$1 = ((((!((map__20871 == null)))?((((map__20871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20871):map__20871);
var on_select = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var on_blur = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var value = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword(null,"value","value",305978217));
var file_select_label = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword(null,"file-select-label","file-select-label",89488379));
var clear = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword(null,"clear","clear",1877104959));
var clearable_QMARK_ = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword(null,"clearable?","clearable?",661720997));
var this$ = reagent.core.current_component.call(null);
var on_select__$1 = (function (){var or__4988__auto__ = on_select;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return lomakkeet.reagent.filepicker.noop;
}
})();
var clear__$1 = (cljs.core.truth_(clearable_QMARK_)?(function (){var or__4988__auto__ = clear;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return ((function (or__4988__auto__,this$,on_select__$1,map__20871,map__20871__$1,on_select,on_blur,value,file_select_label,clear,clearable_QMARK_){
return (function (){
return on_select__$1.call(null,null);
});
;})(or__4988__auto__,this$,on_select__$1,map__20871,map__20871__$1,on_select,on_blur,value,file_select_label,clear,clearable_QMARK_))
}
})():lomakkeet.reagent.filepicker.noop);
var on_blur__$1 = (function (){var or__4988__auto__ = on_blur;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return lomakkeet.reagent.filepicker.noop;
}
})();
var file_select_label__$1 = (function (){var or__4988__auto__ = file_select_label;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return "Select file";
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null),new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (this$,on_select__$1,clear__$1,on_blur__$1,file_select_label__$1,map__20871,map__20871__$1,on_select,on_blur,value,file_select_label,clear,clearable_QMARK_){
return (function (e){
var temp__4423__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4423__auto__)){
var file = temp__4423__auto__;
return on_select__$1.call(null,file);
} else {
return null;
}
});})(this$,on_select__$1,clear__$1,on_blur__$1,file_select_label__$1,map__20871,map__20871__$1,on_select,on_blur,value,file_select_label,clear,clearable_QMARK_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),on_blur__$1], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (this$,on_select__$1,clear__$1,on_blur__$1,file_select_label__$1,map__20871,map__20871__$1,on_select,on_blur,value,file_select_label,clear,clearable_QMARK_){
return (function (e){
reagent.core.dom_node.call(null,this$).getElementsByTagName("input").item((0)).click();

return null;
});})(this$,on_select__$1,clear__$1,on_blur__$1,file_select_label__$1,map__20871,map__20871__$1,on_select,on_blur,value,file_select_label,clear,clearable_QMARK_))
], null),file_select_label__$1], null),(cljs.core.truth_(clearable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (this$,on_select__$1,clear__$1,on_blur__$1,file_select_label__$1,map__20871,map__20871__$1,on_select,on_blur,value,file_select_label,clear,clearable_QMARK_){
return (function (){
return clear__$1.call(null);
});})(this$,on_select__$1,clear__$1,on_blur__$1,file_select_label__$1,map__20871,map__20871__$1,on_select,on_blur,value,file_select_label,clear,clearable_QMARK_))
], null),"\u00D7"], null):null),(cljs.core.truth_(value)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.selected-file","span.selected-file",230032861)," ",value.name,", ",lomakkeet.reagent.filepicker.humanize_filesize.call(null,value.size)], null):null)], null);
});
lomakkeet.reagent.filepicker.on_drag_over_handler = (function lomakkeet$reagent$filepicker$on_drag_over_handler(p__20873){
var map__20876 = p__20873;
var map__20876__$1 = ((((!((map__20876 == null)))?((((map__20876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20876):map__20876);
var on_active_change = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"on-active-change","on-active-change",286676332));
return ((function (map__20876,map__20876__$1,on_active_change){
return (function (e){
e.preventDefault();

e.stopPropagation();

if(cljs.core.truth_(on_active_change)){
on_active_change.call(null,true);
} else {
}

return null;
});
;})(map__20876,map__20876__$1,on_active_change))
});
lomakkeet.reagent.filepicker.on_drag_leave_handler = (function lomakkeet$reagent$filepicker$on_drag_leave_handler(p__20878){
var map__20881 = p__20878;
var map__20881__$1 = ((((!((map__20881 == null)))?((((map__20881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20881):map__20881);
var on_active_change = cljs.core.get.call(null,map__20881__$1,new cljs.core.Keyword(null,"on-active-change","on-active-change",286676332));
return ((function (map__20881,map__20881__$1,on_active_change){
return (function (e){
if(cljs.core.truth_(on_active_change)){
on_active_change.call(null,false);
} else {
}

return null;
});
;})(map__20881,map__20881__$1,on_active_change))
});
/**
 * Create handler when can be used for file drag'n'drop.
 * 
 * Options:
 * 
 * - :files - The IReactiveAtom containing vector of Files.
 * - :active? - (optional) IReactiveAtom containing status if the drag'n'drop
 *   is active.
 */
lomakkeet.reagent.filepicker.on_drop_handler = (function lomakkeet$reagent$filepicker$on_drop_handler(p__20883){
var map__20886 = p__20883;
var map__20886__$1 = ((((!((map__20886 == null)))?((((map__20886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20886):map__20886);
var on_file_drop = cljs.core.get.call(null,map__20886__$1,new cljs.core.Keyword(null,"on-file-drop","on-file-drop",-376277559));
var on_active_change = cljs.core.get.call(null,map__20886__$1,new cljs.core.Keyword(null,"on-active-change","on-active-change",286676332));
return ((function (map__20886,map__20886__$1,on_file_drop,on_active_change){
return (function (e){
e.preventDefault();

e.stopPropagation();

if(cljs.core.truth_(on_active_change)){
on_active_change.call(null,false);
} else {
}

on_file_drop.call(null,lomakkeet.reagent.filepicker.file_list__GT_vec.call(null,e.dataTransfer.files));

return null;
});
;})(map__20886,map__20886__$1,on_file_drop,on_active_change))
});
/**
 * Create attribute map for drop area.
 */
lomakkeet.reagent.filepicker.drop_area = (function lomakkeet$reagent$filepicker$drop_area(p__20888){
var map__20891 = p__20888;
var map__20891__$1 = ((((!((map__20891 == null)))?((((map__20891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20891):map__20891);
var opts = map__20891__$1;
var on_file_drop = cljs.core.get.call(null,map__20891__$1,new cljs.core.Keyword(null,"on-file-drop","on-file-drop",-376277559));
var on_active_change = cljs.core.get.call(null,map__20891__$1,new cljs.core.Keyword(null,"on-active-change","on-active-change",286676332));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),lomakkeet.reagent.filepicker.on_drag_over_handler.call(null,opts),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),lomakkeet.reagent.filepicker.on_drag_leave_handler.call(null,opts),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),lomakkeet.reagent.filepicker.on_drop_handler.call(null,opts)], null);
});
lomakkeet.reagent.filepicker.file_STAR_ = (function lomakkeet$reagent$filepicker$file_STAR_(form,p__20893){
var map__20896 = p__20893;
var map__20896__$1 = ((((!((map__20896 == null)))?((((map__20896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20896):map__20896);
var ks = cljs.core.get.call(null,map__20896__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var file_select_label = cljs.core.get.call(null,map__20896__$1,new cljs.core.Keyword(null,"file-select-label","file-select-label",89488379));
var clearable_QMARK_ = cljs.core.get.call(null,map__20896__$1,new cljs.core.Keyword(null,"clearable?","clearable?",661720997));
var this$ = reagent.core.current_component.call(null);
var form_value = reagent.ratom.make_reaction.call(null,((function (this$,map__20896,map__20896__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form)));
});})(this$,map__20896,map__20896__$1,ks,file_select_label,clearable_QMARK_))
);
var value = reagent.ratom.make_reaction.call(null,((function (this$,form_value,map__20896,map__20896__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,form_value),ks);
});})(this$,form_value,map__20896,map__20896__$1,ks,file_select_label,clearable_QMARK_))
);
return ((function (this$,form_value,value,map__20896,map__20896__$1,ks,file_select_label,clearable_QMARK_){
return (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.filepicker.filepicker,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (this$,form_value,value,map__20896,map__20896__$1,ks,file_select_label,clearable_QMARK_){
return (function (){
return lomakkeet.reagent.impl.blur.call(null,form,ks);
});})(this$,form_value,value,map__20896,map__20896__$1,ks,file_select_label,clearable_QMARK_))
,new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (this$,form_value,value,map__20896,map__20896__$1,ks,file_select_label,clearable_QMARK_){
return (function (file){
return lomakkeet.reagent.impl.cb.call(null,form,ks,file);
});})(this$,form_value,value,map__20896,map__20896__$1,ks,file_select_label,clearable_QMARK_))
,new cljs.core.Keyword(null,"clearable?","clearable?",661720997),clearable_QMARK_,new cljs.core.Keyword(null,"file-select-label","file-select-label",89488379),file_select_label], null)], null);
});
;})(this$,form_value,value,map__20896,map__20896__$1,ks,file_select_label,clearable_QMARK_))
});

//# sourceMappingURL=filepicker.js.map