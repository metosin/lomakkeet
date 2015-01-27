// Compiled by ClojureScript 0.0-2727 {}
goog.provide('example.dev');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('om.core');
example.dev.toggle = (function toggle(ks,v){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,ks))){
return cljs.core.assoc_in(v,ks,null);
} else {
return cljs.core.assoc_in(v,ks,cljs.core.PersistentArrayMap.EMPTY);
}
});
example.dev.tree = (function tree(v,ks,owner){
if(cljs.core.coll_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__4514__auto__ = (function iter__21212(s__21213){
return (new cljs.core.LazySeq(null,(function (){
var s__21213__$1 = s__21213;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21213__$1);
if(temp__4126__auto__){
var s__21213__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21213__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__21213__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__21215 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__21214 = (0);
while(true){
if((i__21214 < size__4513__auto__)){
var vec__21220 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__21214);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21220,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21220,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__21215,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$51,k], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$190,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$179,((function (i__21214,ks__$1,vec__21220,k,v__$1,c__4512__auto__,size__4513__auto__,b__21215,s__21213__$2,temp__4126__auto__){
return (function (){
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(example.dev.toggle,ks__$1));
});})(i__21214,ks__$1,vec__21220,k,v__$1,c__4512__auto__,size__4513__auto__,b__21215,s__21213__$2,temp__4126__auto__))
], null),((cljs.core.coll_QMARK_(v__$1))?"+ ":null),(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",(cljs.core.truth_((function (){var or__3758__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3758__auto__){
return or__3758__auto__;
} else {
return om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,ks__$1);
}
})())?tree(v__$1,ks__$1,owner):null)], null));

var G__21222 = (i__21214 + (1));
i__21214 = G__21222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21215),iter__21212(cljs.core.chunk_rest(s__21213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21215),null);
}
} else {
var vec__21221 = cljs.core.first(s__21213__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21221,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21221,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$51,k], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$190,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$179,((function (ks__$1,vec__21221,k,v__$1,s__21213__$2,temp__4126__auto__){
return (function (){
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(example.dev.toggle,ks__$1));
});})(ks__$1,vec__21221,k,v__$1,s__21213__$2,temp__4126__auto__))
], null),((cljs.core.coll_QMARK_(v__$1))?"+ ":null),(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",(cljs.core.truth_((function (){var or__3758__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3758__auto__){
return or__3758__auto__;
} else {
return om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,ks__$1);
}
})())?tree(v__$1,ks__$1,owner):null)], null),iter__21212(cljs.core.rest(s__21213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__(((cljs.core.map_QMARK_(v))?v:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v)));
})()], null);
} else {
if(cljs.core.fn_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$191,"function"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$174,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0))], null);

}
}
});

var ufv___21240 = schema.utils.use_fn_validation;
var output_schema21224_21241 = schema.core.Any;
var input_schema21225_21242 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21226_21243 = schema.core.checker(input_schema21225_21242);
var output_checker21227_21244 = schema.core.checker(output_schema21224_21241);
/**
* Inputs: [state owner]
*/
example.dev.state_view = ((function (ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244){
return (function state_view(G__21228,G__21229){
var validate__12088__auto__ = ufv___21240.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___21245 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21228,G__21229], null);
var temp__4126__auto___21246 = (function (){var G__21235 = args__12089__auto___21245;
return (input_checker21226_21243.cljs$core$IFn$_invoke$arity$1 ? input_checker21226_21243.cljs$core$IFn$_invoke$arity$1(G__21235) : input_checker21226_21243.call(null,G__21235));
})();
if(cljs.core.truth_(temp__4126__auto___21246)){
var error__12090__auto___21247 = temp__4126__auto___21246;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___21247], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___21247,cljs.core.constant$keyword$66,args__12089__auto___21245,cljs.core.constant$keyword$67,input_schema21225_21242,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var state = G__21228;
var owner = G__21229;
while(true){
if(typeof example.dev.t21236 !== 'undefined'){
} else {

/**
* @constructor
*/
example.dev.t21236 = (function (input_checker21226,owner,state_view,validate__12088__auto__,G__21228,output_schema21224,input_schema21225,state,G__21229,output_checker21227,ufv__,meta21237){
this.input_checker21226 = input_checker21226;
this.owner = owner;
this.state_view = state_view;
this.validate__12088__auto__ = validate__12088__auto__;
this.G__21228 = G__21228;
this.output_schema21224 = output_schema21224;
this.input_schema21225 = input_schema21225;
this.state = state;
this.G__21229 = G__21229;
this.output_checker21227 = output_checker21227;
this.ufv__ = ufv__;
this.meta21237 = meta21237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.dev.t21236.prototype.om$core$IDisplayName$ = true;

example.dev.t21236.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244){
return (function (_){
var self__ = this;
var ___$1 = this;
return "state-view";
});})(validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244))
;

example.dev.t21236.prototype.om$core$IRenderState$ = true;

example.dev.t21236.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244){
return (function (_,___$1){
var self__ = this;
var ___$2 = this;
return sablono.interpreter.interpret(example.dev.tree(self__.state,cljs.core.PersistentVector.EMPTY,self__.owner));
});})(validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244))
;

example.dev.t21236.prototype.om$core$IInitState$ = true;

example.dev.t21236.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$192,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$193,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$162,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$193,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$154,cljs.core.PersistentArrayMap.EMPTY], null)], null);
});})(validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244))
;

example.dev.t21236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244){
return (function (_21238){
var self__ = this;
var _21238__$1 = this;
return self__.meta21237;
});})(validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244))
;

example.dev.t21236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244){
return (function (_21238,meta21237__$1){
var self__ = this;
var _21238__$1 = this;
return (new example.dev.t21236(self__.input_checker21226,self__.owner,self__.state_view,self__.validate__12088__auto__,self__.G__21228,self__.output_schema21224,self__.input_schema21225,self__.state,self__.G__21229,self__.output_checker21227,self__.ufv__,meta21237__$1));
});})(validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244))
;

example.dev.t21236.cljs$lang$type = true;

example.dev.t21236.cljs$lang$ctorStr = "example.dev/t21236";

example.dev.t21236.cljs$lang$ctorPrWriter = ((function (validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"example.dev/t21236");
});})(validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244))
;

example.dev.__GT_t21236 = ((function (validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244){
return (function __GT_t21236(input_checker21226__$1,owner__$1,state_view__$1,validate__12088__auto____$1,G__21228__$1,output_schema21224__$1,input_schema21225__$1,state__$1,G__21229__$1,output_checker21227__$1,ufv____$1,meta21237){
return (new example.dev.t21236(input_checker21226__$1,owner__$1,state_view__$1,validate__12088__auto____$1,G__21228__$1,output_schema21224__$1,input_schema21225__$1,state__$1,G__21229__$1,output_checker21227__$1,ufv____$1,meta21237));
});})(validate__12088__auto__,ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244))
;

}

return (new example.dev.t21236(input_checker21226_21243,owner,state_view,validate__12088__auto__,G__21228,output_schema21224_21241,input_schema21225_21242,state,G__21229,output_checker21227_21244,ufv___21240,null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___21248 = (function (){var G__21239 = o__12091__auto__;
return (output_checker21227_21244.cljs$core$IFn$_invoke$arity$1 ? output_checker21227_21244.cljs$core$IFn$_invoke$arity$1(G__21239) : output_checker21227_21244.call(null,G__21239));
})();
if(cljs.core.truth_(temp__4126__auto___21248)){
var error__12090__auto___21249 = temp__4126__auto___21248;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___21249], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___21249,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema21224_21241,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___21240,output_schema21224_21241,input_schema21225_21242,input_checker21226_21243,output_checker21227_21244))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.dev.state_view),schema.core.make_fn_schema(output_schema21224_21241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21225_21242], null)));

example.dev.__GT_state_view = (function() {
var __GT_state_view = null;
var __GT_state_view__1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,cursor__20339__auto__);
});
var __GT_state_view__2 = (function (cursor__20339__auto__,m21223){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.dev.state_view,cursor__20339__auto__,m21223);
});
__GT_state_view = function(cursor__20339__auto__,m21223){
switch(arguments.length){
case 1:
return __GT_state_view__1.call(this,cursor__20339__auto__);
case 2:
return __GT_state_view__2.call(this,cursor__20339__auto__,m21223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_state_view.cljs$core$IFn$_invoke$arity$1 = __GT_state_view__1;
__GT_state_view.cljs$core$IFn$_invoke$arity$2 = __GT_state_view__2;
return __GT_state_view;
})()
;
