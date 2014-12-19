// Compiled by ClojureScript 0.0-2496
goog.provide('example.dev');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('om_tools.core');
example.dev.tree = (function tree(v,ks){
if(cljs.core.coll_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4384__auto__ = (function iter__21596(s__21597){
return (new cljs.core.LazySeq(null,(function (){
var s__21597__$1 = s__21597;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21597__$1);
if(temp__4126__auto__){
var s__21597__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21597__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__21597__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__21599 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__21598 = (0);
while(true){
if((i__21598 < size__4383__auto__)){
var vec__21604 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__21598);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21604,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21604,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__21599,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",tree(v__$1,ks__$1)], null));

var G__21606 = (i__21598 + (1));
i__21598 = G__21606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21599),iter__21596(cljs.core.chunk_rest(s__21597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21599),null);
}
} else {
var vec__21605 = cljs.core.first(s__21597__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21605,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21605,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",tree(v__$1,ks__$1)], null),iter__21596(cljs.core.rest(s__21597__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__(((cljs.core.map_QMARK_(v))?v:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v)));
})()], null);
} else {
if(cljs.core.fn_QMARK_(v)){
return "function";
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,[cljs.core.str(v)].join('')], null);

}
}
});

var ufv___21624 = schema.utils.use_fn_validation;
var output_schema21608_21625 = schema.core.Any;
var input_schema21609_21626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21610_21627 = schema.core.checker(input_schema21609_21626);
var output_checker21611_21628 = schema.core.checker(output_schema21608_21625);
/**
* Inputs: [state owner]
*/
example.dev.state_view = ((function (ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628){
return (function state_view(G__21612,G__21613){
var validate__6096__auto__ = ufv___21624.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___21629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21612,G__21613], null);
var temp__4126__auto___21630 = (function (){var G__21619 = args__6097__auto___21629;
return (input_checker21610_21627.cljs$core$IFn$_invoke$arity$1 ? input_checker21610_21627.cljs$core$IFn$_invoke$arity$1(G__21619) : input_checker21610_21627.call(null,G__21619));
})();
if(cljs.core.truth_(temp__4126__auto___21630)){
var error__6098__auto___21631 = temp__4126__auto___21630;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21631], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21631,cljs.core.constant$keyword$23,args__6097__auto___21629,cljs.core.constant$keyword$24,input_schema21609_21626,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var state = G__21612;
var owner = G__21613;
while(true){
if(typeof example.dev.t21620 !== 'undefined'){
} else {

/**
* @constructor
*/
example.dev.t21620 = (function (output_checker21611,G__21613,owner,state_view,input_checker21610,output_schema21608,validate__6096__auto__,G__21612,state,input_schema21609,ufv__,meta21621){
this.output_checker21611 = output_checker21611;
this.G__21613 = G__21613;
this.owner = owner;
this.state_view = state_view;
this.input_checker21610 = input_checker21610;
this.output_schema21608 = output_schema21608;
this.validate__6096__auto__ = validate__6096__auto__;
this.G__21612 = G__21612;
this.state = state;
this.input_schema21609 = input_schema21609;
this.ufv__ = ufv__;
this.meta21621 = meta21621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.dev.t21620.prototype.om$core$IDisplayName$ = true;

example.dev.t21620.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__6096__auto__,ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628){
return (function (_){
var self__ = this;
var ___$1 = this;
return "state-view";
});})(validate__6096__auto__,ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628))
;

example.dev.t21620.prototype.om$core$IRender$ = true;

example.dev.t21620.prototype.om$core$IRender$render$arity$1 = ((function (validate__6096__auto__,ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(example.dev.tree(self__.state,cljs.core.PersistentVector.EMPTY));
});})(validate__6096__auto__,ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628))
;

example.dev.t21620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__6096__auto__,ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628){
return (function (_21622){
var self__ = this;
var _21622__$1 = this;
return self__.meta21621;
});})(validate__6096__auto__,ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628))
;

example.dev.t21620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__6096__auto__,ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628){
return (function (_21622,meta21621__$1){
var self__ = this;
var _21622__$1 = this;
return (new example.dev.t21620(self__.output_checker21611,self__.G__21613,self__.owner,self__.state_view,self__.input_checker21610,self__.output_schema21608,self__.validate__6096__auto__,self__.G__21612,self__.state,self__.input_schema21609,self__.ufv__,meta21621__$1));
});})(validate__6096__auto__,ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628))
;

example.dev.t21620.cljs$lang$type = true;

example.dev.t21620.cljs$lang$ctorStr = "example.dev/t21620";

example.dev.t21620.cljs$lang$ctorPrWriter = ((function (validate__6096__auto__,ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"example.dev/t21620");
});})(validate__6096__auto__,ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628))
;

example.dev.__GT_t21620 = ((function (validate__6096__auto__,ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628){
return (function __GT_t21620(output_checker21611__$1,G__21613__$1,owner__$1,state_view__$1,input_checker21610__$1,output_schema21608__$1,validate__6096__auto____$1,G__21612__$1,state__$1,input_schema21609__$1,ufv____$1,meta21621){
return (new example.dev.t21620(output_checker21611__$1,G__21613__$1,owner__$1,state_view__$1,input_checker21610__$1,output_schema21608__$1,validate__6096__auto____$1,G__21612__$1,state__$1,input_schema21609__$1,ufv____$1,meta21621));
});})(validate__6096__auto__,ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628))
;

}

return (new example.dev.t21620(output_checker21611_21628,G__21613,owner,state_view,input_checker21610_21627,output_schema21608_21625,validate__6096__auto__,G__21612,state,input_schema21609_21626,ufv___21624,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___21632 = (function (){var G__21623 = o__6099__auto__;
return (output_checker21611_21628.cljs$core$IFn$_invoke$arity$1 ? output_checker21611_21628.cljs$core$IFn$_invoke$arity$1(G__21623) : output_checker21611_21628.call(null,G__21623));
})();
if(cljs.core.truth_(temp__4126__auto___21632)){
var error__6098__auto___21633 = temp__4126__auto___21632;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21633], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21633,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema21608_21625,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___21624,output_schema21608_21625,input_schema21609_21626,input_checker21610_21627,output_checker21611_21628))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.dev.state_view),schema.core.make_fn_schema(output_schema21608_21625,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21609_21626], null)));

example.dev.__GT_state_view = (function() {
var __GT_state_view = null;
var __GT_state_view__1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,cursor__7890__auto__);
});
var __GT_state_view__2 = (function (cursor__7890__auto__,m21607){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.dev.state_view,cursor__7890__auto__,m21607);
});
__GT_state_view = function(cursor__7890__auto__,m21607){
switch(arguments.length){
case 1:
return __GT_state_view__1.call(this,cursor__7890__auto__);
case 2:
return __GT_state_view__2.call(this,cursor__7890__auto__,m21607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_state_view.cljs$core$IFn$_invoke$arity$1 = __GT_state_view__1;
__GT_state_view.cljs$core$IFn$_invoke$arity$2 = __GT_state_view__2;
return __GT_state_view;
})()
;
