// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
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
if((function (){var G__17515 = x;
if(G__17515){
var bit__5012__auto__ = (G__17515.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5012__auto__) || (G__17515.cljs$core$IDeref$)){
return true;
} else {
if((!G__17515.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17515);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17515);
}
})()){
var G__17516 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17516) : cljs.core.deref.call(null,G__17516));
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
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first((function (){var G__17518 = validation_error.expectation_delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17518) : cljs.core.deref.call(null,G__17518));
})())], 0));
} else {
return null;
}
});
lomakkeet.reagent.impl.default_form_group = (function lomakkeet$reagent$impl$default_form_group(form,content,p__17519){
var map__17537 = p__17519;
var map__17537__$1 = ((cljs.core.seq_QMARK_(map__17537))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17537):map__17537);
var opts = map__17537__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17537__$1,cljs.core.constant$keyword$ks);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17537__$1,cljs.core.constant$keyword$size,(6));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17537__$1,cljs.core.constant$keyword$label);
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17537__$1,cljs.core.constant$keyword$help_DASH_text);
if(cljs.core.map_QMARK_(form)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"form","form",16469056,null))], 0)))].join('')));
}

if((function (){var G__17538 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
if(G__17538){
var bit__5012__auto__ = (G__17538.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5012__auto__) || (G__17538.cljs$core$IDeref$)){
return true;
} else {
if((!G__17538.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17538);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17538);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),cljs.core.list(cljs.core.constant$keyword$data,new cljs.core.Symbol(null,"form","form",16469056,null)))], 0)))].join('')));
}

var form_errors = reagent.ratom.make_reaction(((function (map__17537,map__17537__$1,opts,ks,size,label,help_text){
return (function (){
return cljs.core.constant$keyword$errors.cljs$core$IFn$_invoke$arity$1((function (){var G__17539 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17539) : cljs.core.deref.call(null,G__17539));
})());
});})(map__17537,map__17537__$1,opts,ks,size,label,help_text))
);
var error = reagent.ratom.make_reaction(((function (form_errors,map__17537,map__17537__$1,opts,ks,size,label,help_text){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17540 = form_errors;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17540) : cljs.core.deref.call(null,G__17540));
})(),ks);
});})(form_errors,map__17537,map__17537__$1,opts,ks,size,label,help_text))
);
var pristine = reagent.ratom.make_reaction(((function (form_errors,error,map__17537,map__17537__$1,opts,ks,size,label,help_text){
return (function (){
return cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$not_DASH_pristine.cljs$core$IFn$_invoke$arity$1((function (){var G__17541 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17541) : cljs.core.deref.call(null,G__17541));
})()),ks));
});})(form_errors,error,map__17537,map__17537__$1,opts,ks,size,label,help_text))
);
return ((function (form_errors,error,pristine,map__17537,map__17537__$1,opts,ks,size,label,help_text){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,[cljs.core.str((cljs.core.truth_((function (){var and__4326__auto__ = cljs.core.not((function (){var G__17544 = pristine;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17544) : cljs.core.deref.call(null,G__17544));
})());
if(and__4326__auto__){
var G__17545 = error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17545) : cljs.core.deref.call(null,G__17545));
} else {
return and__4326__auto__;
}
})())?"has-error ":null)),cljs.core.str((cljs.core.truth_((function (){var and__4326__auto__ = (function (){var G__17547 = pristine;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17547) : cljs.core.deref.call(null,G__17547));
})();
if(cljs.core.truth_(and__4326__auto__)){
var G__17548 = error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17548) : cljs.core.deref.call(null,G__17548));
} else {
return and__4326__auto__;
}
})())?"needs-attention ":null)),cljs.core.str((cljs.core.truth_(size)?[cljs.core.str(" col-md-"),cljs.core.str(size),cljs.core.str(" ")].join(''):null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$label,label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [content,form,opts], null),(cljs.core.truth_(help_text)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$help_DASH_block,help_text], null):null),(cljs.core.truth_((function (){var and__4326__auto__ = cljs.core.not((function (){var G__17551 = pristine;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17551) : cljs.core.deref.call(null,G__17551));
})());
if(and__4326__auto__){
var G__17552 = error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17552) : cljs.core.deref.call(null,G__17552));
} else {
return and__4326__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$help_DASH_block,lomakkeet.reagent.impl.error_explanation((function (){var G__17553 = error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17553) : cljs.core.deref.call(null,G__17553));
})())], null):null)], null);
});
;})(form_errors,error,pristine,map__17537,map__17537__$1,opts,ks,size,label,help_text))
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
lomakkeet.reagent.impl.input_STAR_ = (function lomakkeet$reagent$impl$input_STAR_(form,p__17555){
var map__17565 = p__17555;
var map__17565__$1 = ((cljs.core.seq_QMARK_(map__17565))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17565):map__17565);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17565__$1,cljs.core.constant$keyword$ks);
var transform_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17565__$1,cljs.core.constant$keyword$transform_DASH_value,cljs.core.identity);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17565__$1,cljs.core.constant$keyword$el,lomakkeet.reagent.impl.input_input);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17565__$1,cljs.core.constant$keyword$attrs);
var form_value = reagent.ratom.make_reaction(((function (map__17565,map__17565__$1,ks,transform_value,el,attrs){
return (function (){
return cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1((function (){var G__17566 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17566) : cljs.core.deref.call(null,G__17566));
})());
});})(map__17565,map__17565__$1,ks,transform_value,el,attrs))
);
var value = reagent.ratom.make_reaction(((function (form_value,map__17565,map__17565__$1,ks,transform_value,el,attrs){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17567 = form_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17567) : cljs.core.deref.call(null,G__17567));
})(),ks);
});})(form_value,map__17565,map__17565__$1,ks,transform_value,el,attrs))
);
return ((function (form_value,value,map__17565,map__17565__$1,ks,transform_value,el,attrs){
return (function (){
var G__17568 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([lomakkeet.reagent.impl.get_or_deref(cljs.core.constant$keyword$attrs.cljs$core$IFn$_invoke$arity$1(form)),attrs], 0));
var G__17569 = (function (){var G__17572 = (function (){var G__17573 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17573) : cljs.core.deref.call(null,G__17573));
})();
return (transform_value.cljs$core$IFn$_invoke$arity$1 ? transform_value.cljs$core$IFn$_invoke$arity$1(G__17572) : transform_value.call(null,G__17572));
})();
var G__17570 = ((function (G__17568,G__17569,form_value,value,map__17565,map__17565__$1,ks,transform_value,el,attrs){
return (function (p1__17554_SHARP_){
return lomakkeet.reagent.impl.cb(form,ks,p1__17554_SHARP_.target.value);
});})(G__17568,G__17569,form_value,value,map__17565,map__17565__$1,ks,transform_value,el,attrs))
;
var G__17571 = ((function (G__17568,G__17569,G__17570,form_value,value,map__17565,map__17565__$1,ks,transform_value,el,attrs){
return (function (){
return lomakkeet.reagent.impl.blur(form,ks);
});})(G__17568,G__17569,G__17570,form_value,value,map__17565,map__17565__$1,ks,transform_value,el,attrs))
;
return (el.cljs$core$IFn$_invoke$arity$4 ? el.cljs$core$IFn$_invoke$arity$4(G__17568,G__17569,G__17570,G__17571) : el.call(null,G__17568,G__17569,G__17570,G__17571));
});
;})(form_value,value,map__17565,map__17565__$1,ks,transform_value,el,attrs))
});
lomakkeet.reagent.impl.checkbox_STAR_ = (function lomakkeet$reagent$impl$checkbox_STAR_(form,p__17575){
var map__17580 = p__17575;
var map__17580__$1 = ((cljs.core.seq_QMARK_(map__17580))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17580):map__17580);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17580__$1,cljs.core.constant$keyword$ks);
var form_value = reagent.ratom.make_reaction(((function (map__17580,map__17580__$1,ks){
return (function (){
return cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1((function (){var G__17581 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17581) : cljs.core.deref.call(null,G__17581));
})());
});})(map__17580,map__17580__$1,ks))
);
var value = reagent.ratom.make_reaction(((function (form_value,map__17580,map__17580__$1,ks){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17582 = form_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17582) : cljs.core.deref.call(null,G__17582));
})(),ks);
});})(form_value,map__17580,map__17580__$1,ks))
);
return ((function (form_value,value,map__17580,map__17580__$1,ks){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,"checkbox",cljs.core.constant$keyword$checked,cljs.core.boolean$((function (){var G__17583 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17583) : cljs.core.deref.call(null,G__17583));
})()),cljs.core.constant$keyword$on_DASH_change,((function (form_value,value,map__17580,map__17580__$1,ks){
return (function (p1__17574_SHARP_){
return lomakkeet.reagent.impl.cb(form,ks,p1__17574_SHARP_.target.checked);
});})(form_value,value,map__17580,map__17580__$1,ks))
,cljs.core.constant$keyword$on_DASH_blur,((function (form_value,value,map__17580,map__17580__$1,ks){
return (function (){
return lomakkeet.reagent.impl.blur(form,ks);
});})(form_value,value,map__17580,map__17580__$1,ks))
], null)], null);
});
;})(form_value,value,map__17580,map__17580__$1,ks))
});
lomakkeet.reagent.impl.select_STAR_ = (function lomakkeet$reagent$impl$select_STAR_(form,p__17585){
var map__17600 = p__17585;
var map__17600__$1 = ((cljs.core.seq_QMARK_(map__17600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17600):map__17600);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17600__$1,cljs.core.constant$keyword$ks);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17600__$1,cljs.core.constant$keyword$options);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17600__$1,cljs.core.constant$keyword$attrs);
var form_value = reagent.ratom.make_reaction(((function (map__17600,map__17600__$1,ks,options,attrs){
return (function (){
return cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1((function (){var G__17601 = cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(form);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17601) : cljs.core.deref.call(null,G__17601));
})());
});})(map__17600,map__17600__$1,ks,options,attrs))
);
var value = reagent.ratom.make_reaction(((function (form_value,map__17600,map__17600__$1,ks,options,attrs){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17602 = form_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17602) : cljs.core.deref.call(null,G__17602));
})(),ks);
});})(form_value,map__17600,map__17600__$1,ks,options,attrs))
);
return ((function (form_value,value,map__17600,map__17600__$1,ks,options,attrs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$select$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([lomakkeet.reagent.impl.get_or_deref(cljs.core.constant$keyword$attrs.cljs$core$IFn$_invoke$arity$1(form)),attrs], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$value,(function (){var G__17603 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17603) : cljs.core.deref.call(null,G__17603));
})(),cljs.core.constant$keyword$on_DASH_change,((function (form_value,value,map__17600,map__17600__$1,ks,options,attrs){
return (function (p1__17584_SHARP_){
return lomakkeet.reagent.impl.cb(form,ks,p1__17584_SHARP_.target.value);
});})(form_value,value,map__17600,map__17600__$1,ks,options,attrs))
,cljs.core.constant$keyword$on_DASH_blur,((function (form_value,value,map__17600,map__17600__$1,ks,options,attrs){
return (function (){
return lomakkeet.reagent.impl.blur(form,ks);
});})(form_value,value,map__17600,map__17600__$1,ks,options,attrs))
], null)], 0)),((cljs.core.map_QMARK_(options))?(function (){var iter__5092__auto__ = ((function (form_value,value,map__17600,map__17600__$1,ks,options,attrs){
return (function lomakkeet$reagent$impl$select_STAR__$_iter__17604(s__17605){
return (new cljs.core.LazySeq(null,((function (form_value,value,map__17600,map__17600__$1,ks,options,attrs){
return (function (){
var s__17605__$1 = s__17605;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17605__$1);
if(temp__4425__auto__){
var s__17605__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17605__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__17605__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__17607 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__17606 = (0);
while(true){
if((i__17606 < size__5091__auto__)){
var vec__17612 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__17606);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17612,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17612,(1),null);
cljs.core.chunk_append(b__17607,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$value,k,cljs.core.constant$keyword$key,v], null),v], null));

var G__17614 = (i__17606 + (1));
i__17606 = G__17614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17607),lomakkeet$reagent$impl$select_STAR__$_iter__17604(cljs.core.chunk_rest(s__17605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17607),null);
}
} else {
var vec__17613 = cljs.core.first(s__17605__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$value,k,cljs.core.constant$keyword$key,v], null),v], null),lomakkeet$reagent$impl$select_STAR__$_iter__17604(cljs.core.rest(s__17605__$2)));
}
} else {
return null;
}
break;
}
});})(form_value,value,map__17600,map__17600__$1,ks,options,attrs))
,null,null));
});})(form_value,value,map__17600,map__17600__$1,ks,options,attrs))
;
return iter__5092__auto__(options);
})():null)], null);
});
;})(form_value,value,map__17600,map__17600__$1,ks,options,attrs))
});
