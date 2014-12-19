// Compiled by ClojureScript 0.0-2496
goog.provide('example.dev');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('om_tools.core');
example.dev.tree = (function tree(v,ks){
if(cljs.core.coll_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4384__auto__ = (function iter__21604(s__21605){
return (new cljs.core.LazySeq(null,(function (){
var s__21605__$1 = s__21605;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21605__$1);
if(temp__4126__auto__){
var s__21605__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21605__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__21605__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__21607 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__21606 = (0);
while(true){
if((i__21606 < size__4383__auto__)){
var vec__21612 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__21606);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21612,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21612,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__21607,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",tree(v__$1,ks__$1)], null));

var G__21614 = (i__21606 + (1));
i__21606 = G__21614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21607),iter__21604(cljs.core.chunk_rest(s__21605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21607),null);
}
} else {
var vec__21613 = cljs.core.first(s__21605__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21613,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21613,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",tree(v__$1,ks__$1)], null),iter__21604(cljs.core.rest(s__21605__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$174,[cljs.core.str(v)].join('')], null);

}
}
});

var ufv___21632 = schema.utils.use_fn_validation;
var output_schema21616_21633 = schema.core.Any;
var input_schema21617_21634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21618_21635 = schema.core.checker(input_schema21617_21634);
var output_checker21619_21636 = schema.core.checker(output_schema21616_21633);
/**
* Inputs: [state owner]
*/
example.dev.state_view = ((function (ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636){
return (function state_view(G__21620,G__21621){
var validate__6096__auto__ = ufv___21632.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___21637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21620,G__21621], null);
var temp__4126__auto___21638 = (function (){var G__21627 = args__6097__auto___21637;
return (input_checker21618_21635.cljs$core$IFn$_invoke$arity$1 ? input_checker21618_21635.cljs$core$IFn$_invoke$arity$1(G__21627) : input_checker21618_21635.call(null,G__21627));
})();
if(cljs.core.truth_(temp__4126__auto___21638)){
var error__6098__auto___21639 = temp__4126__auto___21638;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21639], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21639,cljs.core.constant$keyword$23,args__6097__auto___21637,cljs.core.constant$keyword$24,input_schema21617_21634,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var state = G__21620;
var owner = G__21621;
while(true){
if(typeof example.dev.t21628 !== 'undefined'){
} else {

/**
* @constructor
*/
example.dev.t21628 = (function (output_checker21619,output_schema21616,owner,state_view,input_schema21617,validate__6096__auto__,state,G__21621,G__21620,input_checker21618,ufv__,meta21629){
this.output_checker21619 = output_checker21619;
this.output_schema21616 = output_schema21616;
this.owner = owner;
this.state_view = state_view;
this.input_schema21617 = input_schema21617;
this.validate__6096__auto__ = validate__6096__auto__;
this.state = state;
this.G__21621 = G__21621;
this.G__21620 = G__21620;
this.input_checker21618 = input_checker21618;
this.ufv__ = ufv__;
this.meta21629 = meta21629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.dev.t21628.prototype.om$core$IDisplayName$ = true;

example.dev.t21628.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__6096__auto__,ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636){
return (function (_){
var self__ = this;
var ___$1 = this;
return "state-view";
});})(validate__6096__auto__,ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636))
;

example.dev.t21628.prototype.om$core$IRender$ = true;

example.dev.t21628.prototype.om$core$IRender$render$arity$1 = ((function (validate__6096__auto__,ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(example.dev.tree(self__.state,cljs.core.PersistentVector.EMPTY));
});})(validate__6096__auto__,ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636))
;

example.dev.t21628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__6096__auto__,ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636){
return (function (_21630){
var self__ = this;
var _21630__$1 = this;
return self__.meta21629;
});})(validate__6096__auto__,ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636))
;

example.dev.t21628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__6096__auto__,ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636){
return (function (_21630,meta21629__$1){
var self__ = this;
var _21630__$1 = this;
return (new example.dev.t21628(self__.output_checker21619,self__.output_schema21616,self__.owner,self__.state_view,self__.input_schema21617,self__.validate__6096__auto__,self__.state,self__.G__21621,self__.G__21620,self__.input_checker21618,self__.ufv__,meta21629__$1));
});})(validate__6096__auto__,ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636))
;

example.dev.t21628.cljs$lang$type = true;

example.dev.t21628.cljs$lang$ctorStr = "example.dev/t21628";

example.dev.t21628.cljs$lang$ctorPrWriter = ((function (validate__6096__auto__,ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"example.dev/t21628");
});})(validate__6096__auto__,ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636))
;

example.dev.__GT_t21628 = ((function (validate__6096__auto__,ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636){
return (function __GT_t21628(output_checker21619__$1,output_schema21616__$1,owner__$1,state_view__$1,input_schema21617__$1,validate__6096__auto____$1,state__$1,G__21621__$1,G__21620__$1,input_checker21618__$1,ufv____$1,meta21629){
return (new example.dev.t21628(output_checker21619__$1,output_schema21616__$1,owner__$1,state_view__$1,input_schema21617__$1,validate__6096__auto____$1,state__$1,G__21621__$1,G__21620__$1,input_checker21618__$1,ufv____$1,meta21629));
});})(validate__6096__auto__,ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636))
;

}

return (new example.dev.t21628(output_checker21619_21636,output_schema21616_21633,owner,state_view,input_schema21617_21634,validate__6096__auto__,state,G__21621,G__21620,input_checker21618_21635,ufv___21632,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___21640 = (function (){var G__21631 = o__6099__auto__;
return (output_checker21619_21636.cljs$core$IFn$_invoke$arity$1 ? output_checker21619_21636.cljs$core$IFn$_invoke$arity$1(G__21631) : output_checker21619_21636.call(null,G__21631));
})();
if(cljs.core.truth_(temp__4126__auto___21640)){
var error__6098__auto___21641 = temp__4126__auto___21640;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21641], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21641,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema21616_21633,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___21632,output_schema21616_21633,input_schema21617_21634,input_checker21618_21635,output_checker21619_21636))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.dev.state_view),schema.core.make_fn_schema(output_schema21616_21633,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21617_21634], null)));

example.dev.__GT_state_view = (function() {
var __GT_state_view = null;
var __GT_state_view__1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,cursor__7890__auto__);
});
var __GT_state_view__2 = (function (cursor__7890__auto__,m21615){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.dev.state_view,cursor__7890__auto__,m21615);
});
__GT_state_view = function(cursor__7890__auto__,m21615){
switch(arguments.length){
case 1:
return __GT_state_view__1.call(this,cursor__7890__auto__);
case 2:
return __GT_state_view__2.call(this,cursor__7890__auto__,m21615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_state_view.cljs$core$IFn$_invoke$arity$1 = __GT_state_view__1;
__GT_state_view.cljs$core$IFn$_invoke$arity$2 = __GT_state_view__2;
return __GT_state_view;
})()
;
