// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t22448 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t22448 = (function (fn_handler,f,meta22449){
this.fn_handler = fn_handler;
this.f = f;
this.meta22449 = meta22449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.ioc_helpers.t22448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22450,meta22449__$1){
var self__ = this;
var _22450__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t22448(self__.fn_handler,self__.f,meta22449__$1));
});

cljs.core.async.impl.ioc_helpers.t22448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22450){
var self__ = this;
var _22450__$1 = this;
return self__.meta22449;
});

cljs.core.async.impl.ioc_helpers.t22448.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t22448.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t22448.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t22448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta22449","meta22449",-788160800,null)], null);
});

cljs.core.async.impl.ioc_helpers.t22448.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t22448.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t22448";

cljs.core.async.impl.ioc_helpers.t22448.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async.impl.ioc-helpers/t22448");
});

cljs.core.async.impl.ioc_helpers.__GT_t22448 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t22448(fn_handler__$1,f__$1,meta22449){
return (new cljs.core.async.impl.ioc_helpers.t22448(fn_handler__$1,f__$1,meta22449));
});

}

return (new cljs.core.async.impl.ioc_helpers.t22448(cljs$core$async$impl$ioc_helpers$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e22452){if((e22452 instanceof Object)){
var ex = e22452;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e22452;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4421__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_22456_22459 = state;
(statearr_22456_22459[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_22456_22459[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4421__auto__)){
var cb = temp__4421__auto__;
var statearr_22457_22460 = state;
(statearr_22457_22460[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__22458 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22458) : cljs.core.deref.call(null,G__22458));
})());

(statearr_22457_22460[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4421__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_22464_22467 = state;
(statearr_22464_22467[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_22464_22467[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4421__auto__)){
var cb = temp__4421__auto__;
var statearr_22465_22468 = state;
(statearr_22465_22468[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__22466 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22466) : cljs.core.deref.call(null,G__22466));
})());

(statearr_22465_22468[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k22470,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__22472 = (((k22470 instanceof cljs.core.Keyword))?k22470.fqn:null);
switch (G__22472) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22470,else__4936__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$finally_DASH_block,null,cljs.core.constant$keyword$catch_DASH_block,null,cljs.core.constant$keyword$catch_DASH_exception,null,cljs.core.constant$keyword$prev,null,cljs.core.constant$keyword$continue_DASH_block,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__22469){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__22473 = cljs.core.keyword_identical_QMARK_;
var expr__22474 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__22476 = cljs.core.constant$keyword$catch_DASH_block;
var G__22477 = expr__22474;
return (pred__22473.cljs$core$IFn$_invoke$arity$2 ? pred__22473.cljs$core$IFn$_invoke$arity$2(G__22476,G__22477) : pred__22473.call(null,G__22476,G__22477));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__22469,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22478 = cljs.core.constant$keyword$catch_DASH_exception;
var G__22479 = expr__22474;
return (pred__22473.cljs$core$IFn$_invoke$arity$2 ? pred__22473.cljs$core$IFn$_invoke$arity$2(G__22478,G__22479) : pred__22473.call(null,G__22478,G__22479));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__22469,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22480 = cljs.core.constant$keyword$finally_DASH_block;
var G__22481 = expr__22474;
return (pred__22473.cljs$core$IFn$_invoke$arity$2 ? pred__22473.cljs$core$IFn$_invoke$arity$2(G__22480,G__22481) : pred__22473.call(null,G__22480,G__22481));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__22469,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22482 = cljs.core.constant$keyword$continue_DASH_block;
var G__22483 = expr__22474;
return (pred__22473.cljs$core$IFn$_invoke$arity$2 ? pred__22473.cljs$core$IFn$_invoke$arity$2(G__22482,G__22483) : pred__22473.call(null,G__22482,G__22483));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__22469,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22484 = cljs.core.constant$keyword$prev;
var G__22485 = expr__22474;
return (pred__22473.cljs$core$IFn$_invoke$arity$2 ? pred__22473.cljs$core$IFn$_invoke$arity$2(G__22484,G__22485) : pred__22473.call(null,G__22484,G__22485));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__22469,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__22469),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__22469){
var self__ = this;
var this__4932__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__22469,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catch-block","catch-block",-1479223021,null),new cljs.core.Symbol(null,"catch-exception","catch-exception",-356775268,null),new cljs.core.Symbol(null,"finally-block","finally-block",-1821453297,null),new cljs.core.Symbol(null,"continue-block","continue-block",-211516323,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__22471){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(G__22471),cljs.core.constant$keyword$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(G__22471),cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(G__22471),cljs.core.constant$keyword$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(G__22471),cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(G__22471),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22471,cljs.core.constant$keyword$catch_DASH_block,cljs.core.array_seq([cljs.core.constant$keyword$catch_DASH_exception,cljs.core.constant$keyword$finally_DASH_block,cljs.core.constant$keyword$continue_DASH_block,cljs.core.constant$keyword$prev], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_22488 = state;
(statearr_22488[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_22488;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__4326__auto__ = exception;
if(cljs.core.truth_(and__4326__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__4326__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__4326__auto__ = exception;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = catch_block;
if(cljs.core.truth_(and__4326__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
var statearr_22494 = state;
(statearr_22494[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_22494[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_22494[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_22494[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$catch_DASH_block,null,cljs.core.array_seq([cljs.core.constant$keyword$catch_DASH_exception,null], 0)));

return statearr_22494;
} else {
if(cljs.core.truth_((function (){var and__4326__auto__ = exception;
if(cljs.core.truth_(and__4326__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__4326__auto__;
}
})())){
var statearr_22495_22499 = state;
(statearr_22495_22499[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__22500 = state;
state = G__22500;
continue;
} else {
if(cljs.core.truth_((function (){var and__4326__auto__ = exception;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = cljs.core.not(catch_block);
if(and__4326__auto____$1){
return cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
var statearr_22496 = state;
(statearr_22496[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_22496[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$finally_DASH_block,null));

return statearr_22496;
} else {
if(cljs.core.truth_((function (){var and__4326__auto__ = cljs.core.not(exception);
if(and__4326__auto__){
return cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4326__auto__;
}
})())){
var statearr_22497 = state;
(statearr_22497[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_22497[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$finally_DASH_block,null));

return statearr_22497;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_22498 = state;
(statearr_22498[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_22498[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_22498;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
