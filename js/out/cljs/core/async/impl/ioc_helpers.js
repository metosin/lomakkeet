// Compiled by ClojureScript 0.0-2727 {}
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
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$98);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t34011 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t34011 = (function (f,fn_handler,meta34012){
this.f = f;
this.fn_handler = fn_handler;
this.meta34012 = meta34012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t34011.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t34011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t34011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t34011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34013){
var self__ = this;
var _34013__$1 = this;
return self__.meta34012;
});

cljs.core.async.impl.ioc_helpers.t34011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34013,meta34012__$1){
var self__ = this;
var _34013__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t34011(self__.f,self__.fn_handler,meta34012__$1));
});

cljs.core.async.impl.ioc_helpers.t34011.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t34011.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t34011";

cljs.core.async.impl.ioc_helpers.t34011.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async.impl.ioc-helpers/t34011");
});

cljs.core.async.impl.ioc_helpers.__GT_t34011 = (function __GT_t34011(f__$1,fn_handler__$1,meta34012){
return (new cljs.core.async.impl.ioc_helpers.t34011(f__$1,fn_handler__$1,meta34012));
});

}

return (new cljs.core.async.impl.ioc_helpers.t34011(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,19,cljs.core.constant$keyword$9,30,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,27,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async/impl/ioc_helpers.cljs"], null)));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e34015){if((e34015 instanceof Object)){
var ex = e34015;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e34015;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_34019_34022 = state;
(statearr_34019_34022[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_34019_34022[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_34020_34023 = state;
(statearr_34020_34023[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__34021 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34021) : cljs.core.deref.call(null,G__34021));
})());

(statearr_34020_34023[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$99;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_34027_34030 = state;
(statearr_34027_34030[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_34027_34030[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_34028_34031 = state;
(statearr_34028_34031[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__34029 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34029) : cljs.core.deref.call(null,G__34029));
})());

(statearr_34028_34031[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$99;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k34033,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__34035 = (((k34033 instanceof cljs.core.Keyword))?k34033.fqn:null);
switch (G__34035) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34033,else__4364__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$100,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$101,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$102,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$103,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$104,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
var h__4179__auto__ = self__.__hash;
if(!((h__4179__auto__ == null))){
return h__4179__auto__;
} else {
var h__4179__auto____$1 = cljs.core.hash_imap(this__4356__auto____$1);
self__.__hash = h__4179__auto____$1;

return h__4179__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3746__auto__ = other__4358__auto__;
if(cljs.core.truth_(and__3746__auto__)){
return ((this__4357__auto____$1.constructor === other__4358__auto__.constructor)) && (cljs.core.equiv_map(this__4357__auto____$1,other__4358__auto__));
} else {
return and__3746__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$102,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$104,null,cljs.core.constant$keyword$103,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__34032){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__34036 = cljs.core.keyword_identical_QMARK_;
var expr__34037 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__34039 = cljs.core.constant$keyword$100;
var G__34040 = expr__34037;
return (pred__34036.cljs$core$IFn$_invoke$arity$2 ? pred__34036.cljs$core$IFn$_invoke$arity$2(G__34039,G__34040) : pred__34036.call(null,G__34039,G__34040));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__34032,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34041 = cljs.core.constant$keyword$101;
var G__34042 = expr__34037;
return (pred__34036.cljs$core$IFn$_invoke$arity$2 ? pred__34036.cljs$core$IFn$_invoke$arity$2(G__34041,G__34042) : pred__34036.call(null,G__34041,G__34042));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__34032,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34043 = cljs.core.constant$keyword$102;
var G__34044 = expr__34037;
return (pred__34036.cljs$core$IFn$_invoke$arity$2 ? pred__34036.cljs$core$IFn$_invoke$arity$2(G__34043,G__34044) : pred__34036.call(null,G__34043,G__34044));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__34032,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34045 = cljs.core.constant$keyword$103;
var G__34046 = expr__34037;
return (pred__34036.cljs$core$IFn$_invoke$arity$2 ? pred__34036.cljs$core$IFn$_invoke$arity$2(G__34045,G__34046) : pred__34036.call(null,G__34045,G__34046));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__34032,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34047 = cljs.core.constant$keyword$104;
var G__34048 = expr__34037;
return (pred__34036.cljs$core$IFn$_invoke$arity$2 ? pred__34036.cljs$core$IFn$_invoke$arity$2(G__34047,G__34048) : pred__34036.call(null,G__34047,G__34048));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__34032,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__34032),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$100,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$101,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$102,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$103,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$104,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__34032){
var self__ = this;
var this__4360__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__34032,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__34034){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(G__34034),cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(G__34034),cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(G__34034),cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(G__34034),cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__34034),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34034,cljs.core.constant$keyword$100,cljs.core.array_seq([cljs.core.constant$keyword$101,cljs.core.constant$keyword$102,cljs.core.constant$keyword$103,cljs.core.constant$keyword$104], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_34051 = state;
(statearr_34051[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_34051;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3746__auto__ = exception;
if(cljs.core.truth_(and__3746__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3746__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3746__auto__ = exception;
if(cljs.core.truth_(and__3746__auto__)){
var and__3746__auto____$1 = catch_block;
if(cljs.core.truth_(and__3746__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3746__auto____$1;
}
} else {
return and__3746__auto__;
}
})())){
var statearr_34057 = state;
(statearr_34057[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_34057[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_34057[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_34057[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$100,null,cljs.core.array_seq([cljs.core.constant$keyword$101,null], 0)));

return statearr_34057;
} else {
if(cljs.core.truth_((function (){var and__3746__auto__ = exception;
if(cljs.core.truth_(and__3746__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3746__auto__;
}
})())){
var statearr_34058_34062 = state;
(statearr_34058_34062[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__34063 = state;
state = G__34063;
continue;
} else {
if(cljs.core.truth_((function (){var and__3746__auto__ = exception;
if(cljs.core.truth_(and__3746__auto__)){
var and__3746__auto____$1 = cljs.core.not(catch_block);
if(and__3746__auto____$1){
return cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3746__auto____$1;
}
} else {
return and__3746__auto__;
}
})())){
var statearr_34059 = state;
(statearr_34059[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_34059[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$102,null));

return statearr_34059;
} else {
if(cljs.core.truth_((function (){var and__3746__auto__ = cljs.core.not(exception);
if(and__3746__auto__){
return cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3746__auto__;
}
})())){
var statearr_34060 = state;
(statearr_34060[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_34060[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$102,null));

return statearr_34060;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_34061 = state;
(statearr_34061[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_34061[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_34061;
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
