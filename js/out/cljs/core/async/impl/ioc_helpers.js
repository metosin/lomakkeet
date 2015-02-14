// Compiled by ClojureScript 0.0-2850 {}
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
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$96);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t34473 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t34473 = (function (f,fn_handler,meta34474){
this.f = f;
this.fn_handler = fn_handler;
this.meta34474 = meta34474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t34473.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t34473.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t34473.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t34473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34475){
var self__ = this;
var _34475__$1 = this;
return self__.meta34474;
});

cljs.core.async.impl.ioc_helpers.t34473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34475,meta34474__$1){
var self__ = this;
var _34475__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t34473(self__.f,self__.fn_handler,meta34474__$1));
});

cljs.core.async.impl.ioc_helpers.t34473.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t34473.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t34473";

cljs.core.async.impl.ioc_helpers.t34473.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async.impl.ioc-helpers/t34473");
});

cljs.core.async.impl.ioc_helpers.__GT_t34473 = (function __GT_t34473(f__$1,fn_handler__$1,meta34474){
return (new cljs.core.async.impl.ioc_helpers.t34473(f__$1,fn_handler__$1,meta34474));
});

}

return (new cljs.core.async.impl.ioc_helpers.t34473(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e34477){if((e34477 instanceof Object)){
var ex = e34477;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e34477;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_34481_34484 = state;
(statearr_34481_34484[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_34481_34484[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_34482_34485 = state;
(statearr_34482_34485[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__34483 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34483) : cljs.core.deref.call(null,G__34483));
})());

(statearr_34482_34485[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$97;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_34489_34492 = state;
(statearr_34489_34492[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_34489_34492[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_34490_34493 = state;
(statearr_34490_34493[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__34491 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34491) : cljs.core.deref.call(null,G__34491));
})());

(statearr_34490_34493[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$97;
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k34495,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__34497 = (((k34495 instanceof cljs.core.Keyword))?k34495.fqn:null);
switch (G__34497) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34495,else__4421__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$98,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$99,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$100,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$101,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$102,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$98,null,cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$102,null,cljs.core.constant$keyword$101,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__34494){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__34498 = cljs.core.keyword_identical_QMARK_;
var expr__34499 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__34501 = cljs.core.constant$keyword$98;
var G__34502 = expr__34499;
return (pred__34498.cljs$core$IFn$_invoke$arity$2 ? pred__34498.cljs$core$IFn$_invoke$arity$2(G__34501,G__34502) : pred__34498.call(null,G__34501,G__34502));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__34494,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34503 = cljs.core.constant$keyword$99;
var G__34504 = expr__34499;
return (pred__34498.cljs$core$IFn$_invoke$arity$2 ? pred__34498.cljs$core$IFn$_invoke$arity$2(G__34503,G__34504) : pred__34498.call(null,G__34503,G__34504));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__34494,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34505 = cljs.core.constant$keyword$100;
var G__34506 = expr__34499;
return (pred__34498.cljs$core$IFn$_invoke$arity$2 ? pred__34498.cljs$core$IFn$_invoke$arity$2(G__34505,G__34506) : pred__34498.call(null,G__34505,G__34506));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__34494,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34507 = cljs.core.constant$keyword$101;
var G__34508 = expr__34499;
return (pred__34498.cljs$core$IFn$_invoke$arity$2 ? pred__34498.cljs$core$IFn$_invoke$arity$2(G__34507,G__34508) : pred__34498.call(null,G__34507,G__34508));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__34494,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34509 = cljs.core.constant$keyword$102;
var G__34510 = expr__34499;
return (pred__34498.cljs$core$IFn$_invoke$arity$2 ? pred__34498.cljs$core$IFn$_invoke$arity$2(G__34509,G__34510) : pred__34498.call(null,G__34509,G__34510));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__34494,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__34494),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$98,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$99,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$100,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$101,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$102,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__34494){
var self__ = this;
var this__4417__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__34494,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__34496){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(G__34496),cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(G__34496),cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(G__34496),cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(G__34496),cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(G__34496),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34496,cljs.core.constant$keyword$98,cljs.core.array_seq([cljs.core.constant$keyword$99,cljs.core.constant$keyword$100,cljs.core.constant$keyword$101,cljs.core.constant$keyword$102], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_34513 = state;
(statearr_34513[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_34513;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3803__auto__ = exception;
if(cljs.core.truth_(and__3803__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3803__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3803__auto__ = exception;
if(cljs.core.truth_(and__3803__auto__)){
var and__3803__auto____$1 = catch_block;
if(cljs.core.truth_(and__3803__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3803__auto____$1;
}
} else {
return and__3803__auto__;
}
})())){
var statearr_34519 = state;
(statearr_34519[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_34519[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_34519[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_34519[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$98,null,cljs.core.array_seq([cljs.core.constant$keyword$99,null], 0)));

return statearr_34519;
} else {
if(cljs.core.truth_((function (){var and__3803__auto__ = exception;
if(cljs.core.truth_(and__3803__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3803__auto__;
}
})())){
var statearr_34520_34524 = state;
(statearr_34520_34524[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__34525 = state;
state = G__34525;
continue;
} else {
if(cljs.core.truth_((function (){var and__3803__auto__ = exception;
if(cljs.core.truth_(and__3803__auto__)){
var and__3803__auto____$1 = cljs.core.not(catch_block);
if(and__3803__auto____$1){
return cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3803__auto____$1;
}
} else {
return and__3803__auto__;
}
})())){
var statearr_34521 = state;
(statearr_34521[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_34521[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$100,null));

return statearr_34521;
} else {
if(cljs.core.truth_((function (){var and__3803__auto__ = cljs.core.not(exception);
if(and__3803__auto__){
return cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3803__auto__;
}
})())){
var statearr_34522 = state;
(statearr_34522[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_34522[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$100,null));

return statearr_34522;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_34523 = state;
(statearr_34523[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_34523[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_34523;
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
