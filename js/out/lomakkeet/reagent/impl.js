// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('lomakkeet.reagent.impl');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('lomakkeet.core');
lomakkeet.reagent.impl.cb = (function lomakkeet$reagent$impl$cb(form,ks,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form),lomakkeet.core.change_value,ks,value,cljs.core.array_seq([cljs.core.constant$keyword$validation_DASH_fn.cljs$core$IFn$_invoke$arity$1(form)], 0));
});
lomakkeet.reagent.impl.blur = (function lomakkeet$reagent$impl$blur(form,ks){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form),cljs.core.update,cljs.core.constant$keyword$not_DASH_pristine,cljs.core.assoc_in,cljs.core.array_seq([ks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$lomakkeet$reagent$impl_SLASH_hack,true], null)], 0));
});
lomakkeet.reagent.impl.get_or_deref = (function lomakkeet$reagent$impl$get_or_deref(x){
if((function (){var G__17509 = x;
if(G__17509){
var bit__5012__auto__ = (G__17509.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5012__auto__) || (G__17509.cljs$core$IDeref$)){
return true;
} else {
if((!G__17509.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17509);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17509);
}
})()){
var G__17510 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17510) : cljs.core.deref.call(null,G__17510));
} else {
return x;
}
});
/**
 * Should convert error from e.g. predicate to single word.
 * 
 * (not (required "")) => "required"
 */
lomakkeet.reagent.impl.error_explanation = (function lomakkeet$reagent$impl$error_explanation(validation_error){
if((validation_error instanceof schema.utils.ValidationError)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first((function (){var G__17512 = validation_error.expectation_delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17512) : cljs.core.deref.call(null,G__17512));
})())], 0));
} else {
return null;
}
});
lomakkeet.reagent.impl.default_form_group = (function lomakkeet$reagent$impl$default_form_group(form,content,p__17513){
var map__17531 = p__17513;
var map__17531__$1 = ((cljs.core.seq_QMARK_(map__17531))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17531):map__17531);
var opts = map__17531__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17531__$1,cljs.core.constant$keyword$ks);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17531__$1,cljs.core.constant$keyword$size,(6));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17531__$1,cljs.core.constant$keyword$label);
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17531__$1,cljs.core.constant$keyword$help_DASH_text);
if(cljs.core.map_QMARK_(form)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"form","form",16469056,null))], 0)))].join('')));
}

if((function (){var G__17532 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
if(G__17532){
var bit__5012__auto__ = (G__17532.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5012__auto__) || (G__17532.cljs$core$IDeref$)){
return true;
} else {
if((!G__17532.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17532);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17532);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),cljs.core.list(cljs.core.constant$keyword$data,new cljs.core.Symbol(null,"form","form",16469056,null)))], 0)))].join('')));
}

var form_errors = reagent.ratom.make_reaction(((function (map__17531,map__17531__$1,opts,ks,size,label,help_text){
return (function (){
return cljs.core.constant$keyword$errors.cljs$core$IFn$_invoke$arity$1((function (){var G__17533 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17533) : cljs.core.deref.call(null,G__17533));
})());
});})(map__17531,map__17531__$1,opts,ks,size,label,help_text))
);
var error = reagent.ratom.make_reaction(((function (form_errors,map__17531,map__17531__$1,opts,ks,size,label,help_text){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17534 = form_errors;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17534) : cljs.core.deref.call(null,G__17534));
})(),ks);
});})(form_errors,map__17531,map__17531__$1,opts,ks,size,label,help_text))
);
var pristine = reagent.ratom.make_reaction(((function (form_errors,error,map__17531,map__17531__$1,opts,ks,size,label,help_text){
return (function (){
return cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$not_DASH_pristine.cljs$core$IFn$_invoke$arity$1((function (){var G__17535 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17535) : cljs.core.deref.call(null,G__17535));
})()),ks));
});})(form_errors,error,map__17531,map__17531__$1,opts,ks,size,label,help_text))
);
return ((function (form_errors,error,pristine,map__17531,map__17531__$1,opts,ks,size,label,help_text){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,[cljs.core.str((cljs.core.truth_((function (){var and__4326__auto__ = cljs.core.not((function (){var G__17538 = pristine;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17538) : cljs.core.deref.call(null,G__17538));
})());
if(and__4326__auto__){
var G__17539 = error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17539) : cljs.core.deref.call(null,G__17539));
} else {
return and__4326__auto__;
}
})())?"has-error ":null)),cljs.core.str((cljs.core.truth_((function (){var and__4326__auto__ = (function (){var G__17541 = pristine;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17541) : cljs.core.deref.call(null,G__17541));
})();
if(cljs.core.truth_(and__4326__auto__)){
var G__17542 = error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17542) : cljs.core.deref.call(null,G__17542));
} else {
return and__4326__auto__;
}
})())?"needs-attention ":null)),cljs.core.str((cljs.core.truth_(size)?[cljs.core.str(" col-md-"),cljs.core.str(size),cljs.core.str(" ")].join(''):null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$label,label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [content,form,opts], null),(cljs.core.truth_(help_text)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$help_DASH_block,help_text], null):null),(cljs.core.truth_((function (){var and__4326__auto__ = cljs.core.not((function (){var G__17545 = pristine;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17545) : cljs.core.deref.call(null,G__17545));
})());
if(and__4326__auto__){
var G__17546 = error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17546) : cljs.core.deref.call(null,G__17546));
} else {
return and__4326__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$help_DASH_block,lomakkeet.reagent.impl.error_explanation((function (){var G__17547 = error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17547) : cljs.core.deref.call(null,G__17547));
})())], null):null)], null);
});
;})(form_errors,error,pristine,map__17531,map__17531__$1,opts,ks,size,label,help_text))
});
lomakkeet.reagent.impl.input_input = (function lomakkeet$reagent$impl$input_input(attrs,value,cb,blur){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$value,(function (){var or__4338__auto__ = value;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$on_DASH_change,cb,cljs.core.constant$keyword$on_DASH_blur,blur], null)], 0))], null);
});
lomakkeet.reagent.impl.input_textarea = (function lomakkeet$reagent$impl$input_textarea(attrs,value,cb,blur){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$textarea$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$value,(function (){var or__4338__auto__ = value;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$on_DASH_change,cb,cljs.core.constant$keyword$on_DASH_blur,blur], null)], 0))], null);
});
lomakkeet.reagent.impl.input_static = (function lomakkeet$reagent$impl$input_static(attrs,value,_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p$form_DASH_control_DASH_static,value], null);
});
lomakkeet.reagent.impl.input_STAR_ = (function lomakkeet$reagent$impl$input_STAR_(form,p__17549){
var map__17559 = p__17549;
var map__17559__$1 = ((cljs.core.seq_QMARK_(map__17559))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17559):map__17559);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17559__$1,cljs.core.constant$keyword$ks);
var transform_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17559__$1,cljs.core.constant$keyword$transform_DASH_value,cljs.core.identity);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17559__$1,cljs.core.constant$keyword$el,lomakkeet.reagent.impl.input_input);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17559__$1,cljs.core.constant$keyword$attrs);
var form_value = reagent.ratom.make_reaction(((function (map__17559,map__17559__$1,ks,transform_value,el,attrs){
return (function (){
return cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1((function (){var G__17560 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17560) : cljs.core.deref.call(null,G__17560));
})());
});})(map__17559,map__17559__$1,ks,transform_value,el,attrs))
);
var value = reagent.ratom.make_reaction(((function (form_value,map__17559,map__17559__$1,ks,transform_value,el,attrs){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17561 = form_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17561) : cljs.core.deref.call(null,G__17561));
})(),ks);
});})(form_value,map__17559,map__17559__$1,ks,transform_value,el,attrs))
);
return ((function (form_value,value,map__17559,map__17559__$1,ks,transform_value,el,attrs){
return (function (){
var G__17562 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([lomakkeet.reagent.impl.get_or_deref(cljs.core.constant$keyword$attrs.cljs$core$IFn$_invoke$arity$1(form)),attrs], 0));
var G__17563 = (function (){var G__17566 = (function (){var G__17567 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17567) : cljs.core.deref.call(null,G__17567));
})();
return (transform_value.cljs$core$IFn$_invoke$arity$1 ? transform_value.cljs$core$IFn$_invoke$arity$1(G__17566) : transform_value.call(null,G__17566));
})();
var G__17564 = ((function (G__17562,G__17563,form_value,value,map__17559,map__17559__$1,ks,transform_value,el,attrs){
return (function (p1__17548_SHARP_){
return lomakkeet.reagent.impl.cb(form,ks,p1__17548_SHARP_.target.value);
});})(G__17562,G__17563,form_value,value,map__17559,map__17559__$1,ks,transform_value,el,attrs))
;
var G__17565 = ((function (G__17562,G__17563,G__17564,form_value,value,map__17559,map__17559__$1,ks,transform_value,el,attrs){
return (function (){
return lomakkeet.reagent.impl.blur(form,ks);
});})(G__17562,G__17563,G__17564,form_value,value,map__17559,map__17559__$1,ks,transform_value,el,attrs))
;
return (el.cljs$core$IFn$_invoke$arity$4 ? el.cljs$core$IFn$_invoke$arity$4(G__17562,G__17563,G__17564,G__17565) : el.call(null,G__17562,G__17563,G__17564,G__17565));
});
;})(form_value,value,map__17559,map__17559__$1,ks,transform_value,el,attrs))
});
lomakkeet.reagent.impl.checkbox_STAR_ = (function lomakkeet$reagent$impl$checkbox_STAR_(form,p__17569){
var map__17574 = p__17569;
var map__17574__$1 = ((cljs.core.seq_QMARK_(map__17574))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17574):map__17574);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17574__$1,cljs.core.constant$keyword$ks);
var form_value = reagent.ratom.make_reaction(((function (map__17574,map__17574__$1,ks){
return (function (){
return cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1((function (){var G__17575 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17575) : cljs.core.deref.call(null,G__17575));
})());
});})(map__17574,map__17574__$1,ks))
);
var value = reagent.ratom.make_reaction(((function (form_value,map__17574,map__17574__$1,ks){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17576 = form_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17576) : cljs.core.deref.call(null,G__17576));
})(),ks);
});})(form_value,map__17574,map__17574__$1,ks))
);
return ((function (form_value,value,map__17574,map__17574__$1,ks){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"checkbox",cljs.core.constant$keyword$checked,cljs.core.boolean$((function (){var G__17577 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17577) : cljs.core.deref.call(null,G__17577));
})()),cljs.core.constant$keyword$on_DASH_change,((function (form_value,value,map__17574,map__17574__$1,ks){
return (function (p1__17568_SHARP_){
return lomakkeet.reagent.impl.cb(form,ks,p1__17568_SHARP_.target.checked);
});})(form_value,value,map__17574,map__17574__$1,ks))
,cljs.core.constant$keyword$on_DASH_blur,((function (form_value,value,map__17574,map__17574__$1,ks){
return (function (){
return lomakkeet.reagent.impl.blur(form,ks);
});})(form_value,value,map__17574,map__17574__$1,ks))
], null)], null);
});
;})(form_value,value,map__17574,map__17574__$1,ks))
});
lomakkeet.reagent.impl.select_STAR_ = (function lomakkeet$reagent$impl$select_STAR_(form,p__17579){
var map__17594 = p__17579;
var map__17594__$1 = ((cljs.core.seq_QMARK_(map__17594))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17594):map__17594);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17594__$1,cljs.core.constant$keyword$ks);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17594__$1,cljs.core.constant$keyword$options);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17594__$1,cljs.core.constant$keyword$attrs);
var form_value = reagent.ratom.make_reaction(((function (map__17594,map__17594__$1,ks,options,attrs){
return (function (){
return cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1((function (){var G__17595 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17595) : cljs.core.deref.call(null,G__17595));
})());
});})(map__17594,map__17594__$1,ks,options,attrs))
);
var value = reagent.ratom.make_reaction(((function (form_value,map__17594,map__17594__$1,ks,options,attrs){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17596 = form_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17596) : cljs.core.deref.call(null,G__17596));
})(),ks);
});})(form_value,map__17594,map__17594__$1,ks,options,attrs))
);
return ((function (form_value,value,map__17594,map__17594__$1,ks,options,attrs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$select$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([lomakkeet.reagent.impl.get_or_deref(cljs.core.constant$keyword$attrs.cljs$core$IFn$_invoke$arity$1(form)),attrs], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$value,(function (){var G__17597 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17597) : cljs.core.deref.call(null,G__17597));
})(),cljs.core.constant$keyword$on_DASH_change,((function (form_value,value,map__17594,map__17594__$1,ks,options,attrs){
return (function (p1__17578_SHARP_){
return lomakkeet.reagent.impl.cb(form,ks,p1__17578_SHARP_.target.value);
});})(form_value,value,map__17594,map__17594__$1,ks,options,attrs))
,cljs.core.constant$keyword$on_DASH_blur,((function (form_value,value,map__17594,map__17594__$1,ks,options,attrs){
return (function (){
return lomakkeet.reagent.impl.blur(form,ks);
});})(form_value,value,map__17594,map__17594__$1,ks,options,attrs))
], null)], 0)),((cljs.core.map_QMARK_(options))?(function (){var iter__5092__auto__ = ((function (form_value,value,map__17594,map__17594__$1,ks,options,attrs){
return (function lomakkeet$reagent$impl$select_STAR__$_iter__17598(s__17599){
return (new cljs.core.LazySeq(null,((function (form_value,value,map__17594,map__17594__$1,ks,options,attrs){
return (function (){
var s__17599__$1 = s__17599;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__17599__$1);
if(temp__4423__auto__){
var s__17599__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17599__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__17599__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__17601 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__17600 = (0);
while(true){
if((i__17600 < size__5091__auto__)){
var vec__17606 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__17600);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17606,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17606,(1),null);
cljs.core.chunk_append(b__17601,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$value,k,cljs.core.constant$keyword$key,v], null),v], null));

var G__17608 = (i__17600 + (1));
i__17600 = G__17608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17601),lomakkeet$reagent$impl$select_STAR__$_iter__17598(cljs.core.chunk_rest(s__17599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17601),null);
}
} else {
var vec__17607 = cljs.core.first(s__17599__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17607,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17607,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$value,k,cljs.core.constant$keyword$key,v], null),v], null),lomakkeet$reagent$impl$select_STAR__$_iter__17598(cljs.core.rest(s__17599__$2)));
}
} else {
return null;
}
break;
}
});})(form_value,value,map__17594,map__17594__$1,ks,options,attrs))
,null,null));
});})(form_value,value,map__17594,map__17594__$1,ks,options,attrs))
;
return iter__5092__auto__(options);
})():null)], null);
});
;})(form_value,value,map__17594,map__17594__$1,ks,options,attrs))
});
