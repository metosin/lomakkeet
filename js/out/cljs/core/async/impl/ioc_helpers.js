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
if(typeof cljs.core.async.impl.ioc_helpers.t35172 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t35172 = (function (f,fn_handler,meta35173){
this.f = f;
this.fn_handler = fn_handler;
this.meta35173 = meta35173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t35172.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t35172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t35172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t35172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35174){
var self__ = this;
var _35174__$1 = this;
return self__.meta35173;
});

cljs.core.async.impl.ioc_helpers.t35172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35174,meta35173__$1){
var self__ = this;
var _35174__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t35172(self__.f,self__.fn_handler,meta35173__$1));
});

cljs.core.async.impl.ioc_helpers.t35172.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t35172.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t35172";

cljs.core.async.impl.ioc_helpers.t35172.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async.impl.ioc-helpers/t35172");
});

cljs.core.async.impl.ioc_helpers.__GT_t35172 = (function __GT_t35172(f__$1,fn_handler__$1,meta35173){
return (new cljs.core.async.impl.ioc_helpers.t35172(f__$1,fn_handler__$1,meta35173));
});

}

return (new cljs.core.async.impl.ioc_helpers.t35172(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,19,cljs.core.constant$keyword$9,30,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,27,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async/impl/ioc_helpers.cljs"], null)));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e35176){if((e35176 instanceof Object)){
var ex = e35176;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e35176;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_35180_35183 = state;
(statearr_35180_35183[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_35180_35183[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_35181_35184 = state;
(statearr_35181_35184[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__35182 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35182) : cljs.core.deref.call(null,G__35182));
})());

(statearr_35181_35184[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$99;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_35188_35191 = state;
(statearr_35188_35191[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_35188_35191[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_35189_35192 = state;
(statearr_35189_35192[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__35190 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35190) : cljs.core.deref.call(null,G__35190));
})());

(statearr_35189_35192[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4854__auto__,k__4855__auto__){
var self__ = this;
var this__4854__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4854__auto____$1,k__4855__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4856__auto__,k35194,else__4857__auto__){
var self__ = this;
var this__4856__auto____$1 = this;
var G__35196 = (((k35194 instanceof cljs.core.Keyword))?k35194.fqn:null);
switch (G__35196) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35194,else__4857__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4868__auto__,writer__4869__auto__,opts__4870__auto__){
var self__ = this;
var this__4868__auto____$1 = this;
var pr_pair__4871__auto__ = ((function (this__4868__auto____$1){
return (function (keyval__4872__auto__){
return cljs.core.pr_sequential_writer(writer__4869__auto__,cljs.core.pr_writer,""," ","",opts__4870__auto__,keyval__4872__auto__);
});})(this__4868__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4869__auto__,pr_pair__4871__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4870__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$100,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$101,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$102,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$103,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$104,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4852__auto__){
var self__ = this;
var this__4852__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4848__auto__){
var self__ = this;
var this__4848__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4858__auto__){
var self__ = this;
var this__4858__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4849__auto__){
var self__ = this;
var this__4849__auto____$1 = this;
var h__4672__auto__ = self__.__hash;
if(!((h__4672__auto__ == null))){
return h__4672__auto__;
} else {
var h__4672__auto____$1 = cljs.core.hash_imap(this__4849__auto____$1);
self__.__hash = h__4672__auto____$1;

return h__4672__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4850__auto__,other__4851__auto__){
var self__ = this;
var this__4850__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4239__auto__ = other__4851__auto__;
if(cljs.core.truth_(and__4239__auto__)){
return ((this__4850__auto____$1.constructor === other__4851__auto__.constructor)) && (cljs.core.equiv_map(this__4850__auto____$1,other__4851__auto__));
} else {
return and__4239__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4863__auto__,k__4864__auto__){
var self__ = this;
var this__4863__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$102,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$104,null,cljs.core.constant$keyword$103,null], null), null),k__4864__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4863__auto____$1),self__.__meta),k__4864__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4864__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4861__auto__,k__4862__auto__,G__35193){
var self__ = this;
var this__4861__auto____$1 = this;
var pred__35197 = cljs.core.keyword_identical_QMARK_;
var expr__35198 = k__4862__auto__;
if(cljs.core.truth_((function (){var G__35200 = cljs.core.constant$keyword$100;
var G__35201 = expr__35198;
return (pred__35197.cljs$core$IFn$_invoke$arity$2 ? pred__35197.cljs$core$IFn$_invoke$arity$2(G__35200,G__35201) : pred__35197.call(null,G__35200,G__35201));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__35193,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35202 = cljs.core.constant$keyword$101;
var G__35203 = expr__35198;
return (pred__35197.cljs$core$IFn$_invoke$arity$2 ? pred__35197.cljs$core$IFn$_invoke$arity$2(G__35202,G__35203) : pred__35197.call(null,G__35202,G__35203));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__35193,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35204 = cljs.core.constant$keyword$102;
var G__35205 = expr__35198;
return (pred__35197.cljs$core$IFn$_invoke$arity$2 ? pred__35197.cljs$core$IFn$_invoke$arity$2(G__35204,G__35205) : pred__35197.call(null,G__35204,G__35205));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__35193,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35206 = cljs.core.constant$keyword$103;
var G__35207 = expr__35198;
return (pred__35197.cljs$core$IFn$_invoke$arity$2 ? pred__35197.cljs$core$IFn$_invoke$arity$2(G__35206,G__35207) : pred__35197.call(null,G__35206,G__35207));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__35193,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35208 = cljs.core.constant$keyword$104;
var G__35209 = expr__35198;
return (pred__35197.cljs$core$IFn$_invoke$arity$2 ? pred__35197.cljs$core$IFn$_invoke$arity$2(G__35208,G__35209) : pred__35197.call(null,G__35208,G__35209));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__35193,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4862__auto__,G__35193),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4866__auto__){
var self__ = this;
var this__4866__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$100,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$101,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$102,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$103,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$104,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4853__auto__,G__35193){
var self__ = this;
var this__4853__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__35193,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4859__auto__,entry__4860__auto__){
var self__ = this;
var this__4859__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4860__auto__)){
return cljs.core._assoc(this__4859__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4860__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4860__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4859__auto____$1,entry__4860__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4888__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__){
return cljs.core._write(writer__4889__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__35195){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(G__35195),cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(G__35195),cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(G__35195),cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(G__35195),cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__35195),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35195,cljs.core.constant$keyword$100,cljs.core.array_seq([cljs.core.constant$keyword$101,cljs.core.constant$keyword$102,cljs.core.constant$keyword$103,cljs.core.constant$keyword$104], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_35212 = state;
(statearr_35212[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_35212;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__4239__auto__ = exception;
if(cljs.core.truth_(and__4239__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__4239__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__4239__auto__ = exception;
if(cljs.core.truth_(and__4239__auto__)){
var and__4239__auto____$1 = catch_block;
if(cljs.core.truth_(and__4239__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__4239__auto____$1;
}
} else {
return and__4239__auto__;
}
})())){
var statearr_35218 = state;
(statearr_35218[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_35218[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_35218[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_35218[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$100,null,cljs.core.array_seq([cljs.core.constant$keyword$101,null], 0)));

return statearr_35218;
} else {
if(cljs.core.truth_((function (){var and__4239__auto__ = exception;
if(cljs.core.truth_(and__4239__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__4239__auto__;
}
})())){
var statearr_35219_35223 = state;
(statearr_35219_35223[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__35224 = state;
state = G__35224;
continue;
} else {
if(cljs.core.truth_((function (){var and__4239__auto__ = exception;
if(cljs.core.truth_(and__4239__auto__)){
var and__4239__auto____$1 = cljs.core.not(catch_block);
if(and__4239__auto____$1){
return cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4239__auto____$1;
}
} else {
return and__4239__auto__;
}
})())){
var statearr_35220 = state;
(statearr_35220[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_35220[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$102,null));

return statearr_35220;
} else {
if(cljs.core.truth_((function (){var and__4239__auto__ = cljs.core.not(exception);
if(and__4239__auto__){
return cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4239__auto__;
}
})())){
var statearr_35221 = state;
(statearr_35221[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_35221[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$102,null));

return statearr_35221;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_35222 = state;
(statearr_35222[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_35222[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_35222;
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
