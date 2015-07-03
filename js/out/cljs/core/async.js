// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t19747 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19747 = (function (fn_handler,f,meta19748){
this.fn_handler = fn_handler;
this.f = f;
this.meta19748 = meta19748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19749,meta19748__$1){
var self__ = this;
var _19749__$1 = this;
return (new cljs.core.async.t19747(self__.fn_handler,self__.f,meta19748__$1));
});

cljs.core.async.t19747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19749){
var self__ = this;
var _19749__$1 = this;
return self__.meta19748;
});

cljs.core.async.t19747.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta19748","meta19748",-1322196040,null)], null);
});

cljs.core.async.t19747.cljs$lang$type = true;

cljs.core.async.t19747.cljs$lang$ctorStr = "cljs.core.async/t19747";

cljs.core.async.t19747.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t19747");
});

cljs.core.async.__GT_t19747 = (function cljs$core$async$fn_handler_$___GT_t19747(fn_handler__$1,f__$1,meta19748){
return (new cljs.core.async.t19747(fn_handler__$1,f__$1,meta19748));
});

}

return (new cljs.core.async.t19747(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__19751 = buff;
if(G__19751){
var bit__5012__auto__ = null;
if(cljs.core.truth_((function (){var or__4338__auto__ = bit__5012__auto__;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return G__19751.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19751.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__19751);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__19751);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__19753 = arguments.length;
switch (G__19753) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__19756 = arguments.length;
switch (G__19756) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_19761 = (function (){var G__19757 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19757) : cljs.core.deref.call(null,G__19757));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__19758_19762 = val_19761;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__19758_19762) : fn1.call(null,G__19758_19762));
} else {
cljs.core.async.impl.dispatch.run(((function (val_19761,ret){
return (function (){
var G__19759 = val_19761;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__19759) : fn1.call(null,G__19759));
});})(val_19761,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__19764 = arguments.length;
switch (G__19764) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
var G__19765 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19765) : cljs.core.deref.call(null,G__19765));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (function (){var G__19766 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19766) : cljs.core.deref.call(null,G__19766));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__19767_19770 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__19767_19770) : fn1.call(null,G__19767_19770));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
var G__19768 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__19768) : fn1.call(null,G__19768));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5223__auto___19771 = n;
var x_19772 = (0);
while(true){
if((x_19772 < n__5223__auto___19771)){
(a[x_19772] = (0));

var G__19773 = (x_19772 + (1));
x_19772 = G__19773;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__19774 = (i + (1));
i = G__19774;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__19782 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19782) : cljs.core.atom.call(null,G__19782));
})();
if(typeof cljs.core.async.t19783 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19783 = (function (alt_flag,flag,meta19784){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19784 = meta19784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19785,meta19784__$1){
var self__ = this;
var _19785__$1 = this;
return (new cljs.core.async.t19783(self__.alt_flag,self__.flag,meta19784__$1));
});})(flag))
;

cljs.core.async.t19783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19785){
var self__ = this;
var _19785__$1 = this;
return self__.meta19784;
});})(flag))
;

cljs.core.async.t19783.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19786 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19786) : cljs.core.deref.call(null,G__19786));
});})(flag))
;

cljs.core.async.t19783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19787_19789 = self__.flag;
var G__19788_19790 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19787_19789,G__19788_19790) : cljs.core.reset_BANG_.call(null,G__19787_19789,G__19788_19790));

return true;
});})(flag))
;

cljs.core.async.t19783.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19784","meta19784",414467888,null)], null);
});})(flag))
;

cljs.core.async.t19783.cljs$lang$type = true;

cljs.core.async.t19783.cljs$lang$ctorStr = "cljs.core.async/t19783";

cljs.core.async.t19783.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t19783");
});})(flag))
;

cljs.core.async.__GT_t19783 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t19783(alt_flag__$1,flag__$1,meta19784){
return (new cljs.core.async.t19783(alt_flag__$1,flag__$1,meta19784));
});})(flag))
;

}

return (new cljs.core.async.t19783(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t19794 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19794 = (function (alt_handler,flag,cb,meta19795){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19795 = meta19795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19796,meta19795__$1){
var self__ = this;
var _19796__$1 = this;
return (new cljs.core.async.t19794(self__.alt_handler,self__.flag,self__.cb,meta19795__$1));
});

cljs.core.async.t19794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19796){
var self__ = this;
var _19796__$1 = this;
return self__.meta19795;
});

cljs.core.async.t19794.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t19794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t19794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19795","meta19795",1749266637,null)], null);
});

cljs.core.async.t19794.cljs$lang$type = true;

cljs.core.async.t19794.cljs$lang$ctorStr = "cljs.core.async/t19794";

cljs.core.async.t19794.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t19794");
});

cljs.core.async.__GT_t19794 = (function cljs$core$async$alt_handler_$___GT_t19794(alt_handler__$1,flag__$1,cb__$1,meta19795){
return (new cljs.core.async.t19794(alt_handler__$1,flag__$1,cb__$1,meta19795));
});

}

return (new cljs.core.async.t19794(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__19804 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__19804) : port.call(null,G__19804));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__19805 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__19805) : port.call(null,G__19805));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19797_SHARP_){
var G__19806 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19797_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19806) : fret.call(null,G__19806));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19798_SHARP_){
var G__19807 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19798_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19807) : fret.call(null,G__19807));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19808 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19808) : cljs.core.deref.call(null,G__19808));
})(),(function (){var or__4338__auto__ = wport;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19809 = (i + (1));
i = G__19809;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4338__auto__ = ret;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$default)){
var temp__4425__auto__ = (function (){var and__4326__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4326__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4326__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5378__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5378__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19812){
var map__19813 = p__19812;
var map__19813__$1 = ((cljs.core.seq_QMARK_(map__19813))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19813):map__19813);
var opts = map__19813__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19810){
var G__19811 = cljs.core.first(seq19810);
var seq19810__$1 = cljs.core.next(seq19810);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19811,seq19810__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__19815 = arguments.length;
switch (G__19815) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13636__auto___19864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___19864){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___19864){
return (function (state_19839){
var state_val_19840 = (state_19839[(1)]);
if((state_val_19840 === (7))){
var inst_19835 = (state_19839[(2)]);
var state_19839__$1 = state_19839;
var statearr_19841_19865 = state_19839__$1;
(statearr_19841_19865[(2)] = inst_19835);

(statearr_19841_19865[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19840 === (1))){
var state_19839__$1 = state_19839;
var statearr_19842_19866 = state_19839__$1;
(statearr_19842_19866[(2)] = null);

(statearr_19842_19866[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19840 === (4))){
var inst_19818 = (state_19839[(7)]);
var inst_19818__$1 = (state_19839[(2)]);
var inst_19819 = (inst_19818__$1 == null);
var state_19839__$1 = (function (){var statearr_19843 = state_19839;
(statearr_19843[(7)] = inst_19818__$1);

return statearr_19843;
})();
if(cljs.core.truth_(inst_19819)){
var statearr_19844_19867 = state_19839__$1;
(statearr_19844_19867[(1)] = (5));

} else {
var statearr_19845_19868 = state_19839__$1;
(statearr_19845_19868[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19840 === (13))){
var state_19839__$1 = state_19839;
var statearr_19846_19869 = state_19839__$1;
(statearr_19846_19869[(2)] = null);

(statearr_19846_19869[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19840 === (6))){
var inst_19818 = (state_19839[(7)]);
var state_19839__$1 = state_19839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19839__$1,(11),to,inst_19818);
} else {
if((state_val_19840 === (3))){
var inst_19837 = (state_19839[(2)]);
var state_19839__$1 = state_19839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19839__$1,inst_19837);
} else {
if((state_val_19840 === (12))){
var state_19839__$1 = state_19839;
var statearr_19847_19870 = state_19839__$1;
(statearr_19847_19870[(2)] = null);

(statearr_19847_19870[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19840 === (2))){
var state_19839__$1 = state_19839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19839__$1,(4),from);
} else {
if((state_val_19840 === (11))){
var inst_19828 = (state_19839[(2)]);
var state_19839__$1 = state_19839;
if(cljs.core.truth_(inst_19828)){
var statearr_19848_19871 = state_19839__$1;
(statearr_19848_19871[(1)] = (12));

} else {
var statearr_19849_19872 = state_19839__$1;
(statearr_19849_19872[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19840 === (9))){
var state_19839__$1 = state_19839;
var statearr_19850_19873 = state_19839__$1;
(statearr_19850_19873[(2)] = null);

(statearr_19850_19873[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19840 === (5))){
var state_19839__$1 = state_19839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19851_19874 = state_19839__$1;
(statearr_19851_19874[(1)] = (8));

} else {
var statearr_19852_19875 = state_19839__$1;
(statearr_19852_19875[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19840 === (14))){
var inst_19833 = (state_19839[(2)]);
var state_19839__$1 = state_19839;
var statearr_19853_19876 = state_19839__$1;
(statearr_19853_19876[(2)] = inst_19833);

(statearr_19853_19876[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19840 === (10))){
var inst_19825 = (state_19839[(2)]);
var state_19839__$1 = state_19839;
var statearr_19854_19877 = state_19839__$1;
(statearr_19854_19877[(2)] = inst_19825);

(statearr_19854_19877[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19840 === (8))){
var inst_19822 = cljs.core.async.close_BANG_(to);
var state_19839__$1 = state_19839;
var statearr_19855_19878 = state_19839__$1;
(statearr_19855_19878[(2)] = inst_19822);

(statearr_19855_19878[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___19864))
;
return ((function (switch__13558__auto__,c__13636__auto___19864){
return (function() {
var cljs$core$async$state_machine__13559__auto__ = null;
var cljs$core$async$state_machine__13559__auto____0 = (function (){
var statearr_19859 = [null,null,null,null,null,null,null,null];
(statearr_19859[(0)] = cljs$core$async$state_machine__13559__auto__);

(statearr_19859[(1)] = (1));

return statearr_19859;
});
var cljs$core$async$state_machine__13559__auto____1 = (function (state_19839){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_19839);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e19860){if((e19860 instanceof Object)){
var ex__13562__auto__ = e19860;
var statearr_19861_19879 = state_19839;
(statearr_19861_19879[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19839);

return cljs.core.constant$keyword$recur;
} else {
throw e19860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__19880 = state_19839;
state_19839 = G__19880;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$state_machine__13559__auto__ = function(state_19839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13559__auto____1.call(this,state_19839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13559__auto____0;
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13559__auto____1;
return cljs$core$async$state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___19864))
})();
var state__13638__auto__ = (function (){var statearr_19862 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_19862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___19864);

return statearr_19862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___19864))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__20066){
var vec__20067 = p__20066;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20067,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20067,(1),null);
var job = vec__20067;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13636__auto___20251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___20251,res,vec__20067,v,p,job,jobs,results){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___20251,res,vec__20067,v,p,job,jobs,results){
return (function (state_20072){
var state_val_20073 = (state_20072[(1)]);
if((state_val_20073 === (1))){
var state_20072__$1 = state_20072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20072__$1,(2),res,v);
} else {
if((state_val_20073 === (2))){
var inst_20069 = (state_20072[(2)]);
var inst_20070 = cljs.core.async.close_BANG_(res);
var state_20072__$1 = (function (){var statearr_20074 = state_20072;
(statearr_20074[(7)] = inst_20069);

return statearr_20074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20072__$1,inst_20070);
} else {
return null;
}
}
});})(c__13636__auto___20251,res,vec__20067,v,p,job,jobs,results))
;
return ((function (switch__13558__auto__,c__13636__auto___20251,res,vec__20067,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0 = (function (){
var statearr_20078 = [null,null,null,null,null,null,null,null];
(statearr_20078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__);

(statearr_20078[(1)] = (1));

return statearr_20078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1 = (function (state_20072){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_20072);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e20079){if((e20079 instanceof Object)){
var ex__13562__auto__ = e20079;
var statearr_20080_20252 = state_20072;
(statearr_20080_20252[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20072);

return cljs.core.constant$keyword$recur;
} else {
throw e20079;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__20253 = state_20072;
state_20072 = G__20253;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__ = function(state_20072){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1.call(this,state_20072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___20251,res,vec__20067,v,p,job,jobs,results))
})();
var state__13638__auto__ = (function (){var statearr_20081 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_20081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___20251);

return statearr_20081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___20251,res,vec__20067,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20082){
var vec__20083 = p__20082;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20083,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20083,(1),null);
var job = vec__20083;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__20084_20254 = v;
var G__20085_20255 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__20084_20254,G__20085_20255) : xf.call(null,G__20084_20254,G__20085_20255));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5223__auto___20256 = n;
var __20257 = (0);
while(true){
if((__20257 < n__5223__auto___20256)){
var G__20086_20258 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20086_20258) {
case "compute":
var c__13636__auto___20260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20257,c__13636__auto___20260,G__20086_20258,n__5223__auto___20256,jobs,results,process,async){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (__20257,c__13636__auto___20260,G__20086_20258,n__5223__auto___20256,jobs,results,process,async){
return (function (state_20099){
var state_val_20100 = (state_20099[(1)]);
if((state_val_20100 === (1))){
var state_20099__$1 = state_20099;
var statearr_20101_20261 = state_20099__$1;
(statearr_20101_20261[(2)] = null);

(statearr_20101_20261[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20100 === (2))){
var state_20099__$1 = state_20099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20099__$1,(4),jobs);
} else {
if((state_val_20100 === (3))){
var inst_20097 = (state_20099[(2)]);
var state_20099__$1 = state_20099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20099__$1,inst_20097);
} else {
if((state_val_20100 === (4))){
var inst_20089 = (state_20099[(2)]);
var inst_20090 = process(inst_20089);
var state_20099__$1 = state_20099;
if(cljs.core.truth_(inst_20090)){
var statearr_20102_20262 = state_20099__$1;
(statearr_20102_20262[(1)] = (5));

} else {
var statearr_20103_20263 = state_20099__$1;
(statearr_20103_20263[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20100 === (5))){
var state_20099__$1 = state_20099;
var statearr_20104_20264 = state_20099__$1;
(statearr_20104_20264[(2)] = null);

(statearr_20104_20264[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20100 === (6))){
var state_20099__$1 = state_20099;
var statearr_20105_20265 = state_20099__$1;
(statearr_20105_20265[(2)] = null);

(statearr_20105_20265[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20100 === (7))){
var inst_20095 = (state_20099[(2)]);
var state_20099__$1 = state_20099;
var statearr_20106_20266 = state_20099__$1;
(statearr_20106_20266[(2)] = inst_20095);

(statearr_20106_20266[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__20257,c__13636__auto___20260,G__20086_20258,n__5223__auto___20256,jobs,results,process,async))
;
return ((function (__20257,switch__13558__auto__,c__13636__auto___20260,G__20086_20258,n__5223__auto___20256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0 = (function (){
var statearr_20110 = [null,null,null,null,null,null,null];
(statearr_20110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__);

(statearr_20110[(1)] = (1));

return statearr_20110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1 = (function (state_20099){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_20099);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e20111){if((e20111 instanceof Object)){
var ex__13562__auto__ = e20111;
var statearr_20112_20267 = state_20099;
(statearr_20112_20267[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20099);

return cljs.core.constant$keyword$recur;
} else {
throw e20111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__20268 = state_20099;
state_20099 = G__20268;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__ = function(state_20099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1.call(this,state_20099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__;
})()
;})(__20257,switch__13558__auto__,c__13636__auto___20260,G__20086_20258,n__5223__auto___20256,jobs,results,process,async))
})();
var state__13638__auto__ = (function (){var statearr_20113 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_20113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___20260);

return statearr_20113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(__20257,c__13636__auto___20260,G__20086_20258,n__5223__auto___20256,jobs,results,process,async))
);


break;
case "async":
var c__13636__auto___20269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20257,c__13636__auto___20269,G__20086_20258,n__5223__auto___20256,jobs,results,process,async){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (__20257,c__13636__auto___20269,G__20086_20258,n__5223__auto___20256,jobs,results,process,async){
return (function (state_20126){
var state_val_20127 = (state_20126[(1)]);
if((state_val_20127 === (1))){
var state_20126__$1 = state_20126;
var statearr_20128_20270 = state_20126__$1;
(statearr_20128_20270[(2)] = null);

(statearr_20128_20270[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20127 === (2))){
var state_20126__$1 = state_20126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20126__$1,(4),jobs);
} else {
if((state_val_20127 === (3))){
var inst_20124 = (state_20126[(2)]);
var state_20126__$1 = state_20126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20126__$1,inst_20124);
} else {
if((state_val_20127 === (4))){
var inst_20116 = (state_20126[(2)]);
var inst_20117 = async(inst_20116);
var state_20126__$1 = state_20126;
if(cljs.core.truth_(inst_20117)){
var statearr_20129_20271 = state_20126__$1;
(statearr_20129_20271[(1)] = (5));

} else {
var statearr_20130_20272 = state_20126__$1;
(statearr_20130_20272[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20127 === (5))){
var state_20126__$1 = state_20126;
var statearr_20131_20273 = state_20126__$1;
(statearr_20131_20273[(2)] = null);

(statearr_20131_20273[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20127 === (6))){
var state_20126__$1 = state_20126;
var statearr_20132_20274 = state_20126__$1;
(statearr_20132_20274[(2)] = null);

(statearr_20132_20274[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20127 === (7))){
var inst_20122 = (state_20126[(2)]);
var state_20126__$1 = state_20126;
var statearr_20133_20275 = state_20126__$1;
(statearr_20133_20275[(2)] = inst_20122);

(statearr_20133_20275[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__20257,c__13636__auto___20269,G__20086_20258,n__5223__auto___20256,jobs,results,process,async))
;
return ((function (__20257,switch__13558__auto__,c__13636__auto___20269,G__20086_20258,n__5223__auto___20256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0 = (function (){
var statearr_20137 = [null,null,null,null,null,null,null];
(statearr_20137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__);

(statearr_20137[(1)] = (1));

return statearr_20137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1 = (function (state_20126){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_20126);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e20138){if((e20138 instanceof Object)){
var ex__13562__auto__ = e20138;
var statearr_20139_20276 = state_20126;
(statearr_20139_20276[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20126);

return cljs.core.constant$keyword$recur;
} else {
throw e20138;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__20277 = state_20126;
state_20126 = G__20277;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__ = function(state_20126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1.call(this,state_20126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__;
})()
;})(__20257,switch__13558__auto__,c__13636__auto___20269,G__20086_20258,n__5223__auto___20256,jobs,results,process,async))
})();
var state__13638__auto__ = (function (){var statearr_20140 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_20140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___20269);

return statearr_20140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(__20257,c__13636__auto___20269,G__20086_20258,n__5223__auto___20256,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20278 = (__20257 + (1));
__20257 = G__20278;
continue;
} else {
}
break;
}

var c__13636__auto___20279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___20279,jobs,results,process,async){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___20279,jobs,results,process,async){
return (function (state_20162){
var state_val_20163 = (state_20162[(1)]);
if((state_val_20163 === (1))){
var state_20162__$1 = state_20162;
var statearr_20164_20280 = state_20162__$1;
(statearr_20164_20280[(2)] = null);

(statearr_20164_20280[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20163 === (2))){
var state_20162__$1 = state_20162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20162__$1,(4),from);
} else {
if((state_val_20163 === (3))){
var inst_20160 = (state_20162[(2)]);
var state_20162__$1 = state_20162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20162__$1,inst_20160);
} else {
if((state_val_20163 === (4))){
var inst_20143 = (state_20162[(7)]);
var inst_20143__$1 = (state_20162[(2)]);
var inst_20144 = (inst_20143__$1 == null);
var state_20162__$1 = (function (){var statearr_20165 = state_20162;
(statearr_20165[(7)] = inst_20143__$1);

return statearr_20165;
})();
if(cljs.core.truth_(inst_20144)){
var statearr_20166_20281 = state_20162__$1;
(statearr_20166_20281[(1)] = (5));

} else {
var statearr_20167_20282 = state_20162__$1;
(statearr_20167_20282[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20163 === (5))){
var inst_20146 = cljs.core.async.close_BANG_(jobs);
var state_20162__$1 = state_20162;
var statearr_20168_20283 = state_20162__$1;
(statearr_20168_20283[(2)] = inst_20146);

(statearr_20168_20283[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20163 === (6))){
var inst_20148 = (state_20162[(8)]);
var inst_20143 = (state_20162[(7)]);
var inst_20148__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_20149 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20150 = [inst_20143,inst_20148__$1];
var inst_20151 = (new cljs.core.PersistentVector(null,2,(5),inst_20149,inst_20150,null));
var state_20162__$1 = (function (){var statearr_20169 = state_20162;
(statearr_20169[(8)] = inst_20148__$1);

return statearr_20169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20162__$1,(8),jobs,inst_20151);
} else {
if((state_val_20163 === (7))){
var inst_20158 = (state_20162[(2)]);
var state_20162__$1 = state_20162;
var statearr_20170_20284 = state_20162__$1;
(statearr_20170_20284[(2)] = inst_20158);

(statearr_20170_20284[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20163 === (8))){
var inst_20148 = (state_20162[(8)]);
var inst_20153 = (state_20162[(2)]);
var state_20162__$1 = (function (){var statearr_20171 = state_20162;
(statearr_20171[(9)] = inst_20153);

return statearr_20171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20162__$1,(9),results,inst_20148);
} else {
if((state_val_20163 === (9))){
var inst_20155 = (state_20162[(2)]);
var state_20162__$1 = (function (){var statearr_20172 = state_20162;
(statearr_20172[(10)] = inst_20155);

return statearr_20172;
})();
var statearr_20173_20285 = state_20162__$1;
(statearr_20173_20285[(2)] = null);

(statearr_20173_20285[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___20279,jobs,results,process,async))
;
return ((function (switch__13558__auto__,c__13636__auto___20279,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0 = (function (){
var statearr_20177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__);

(statearr_20177[(1)] = (1));

return statearr_20177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1 = (function (state_20162){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_20162);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e20178){if((e20178 instanceof Object)){
var ex__13562__auto__ = e20178;
var statearr_20179_20286 = state_20162;
(statearr_20179_20286[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20162);

return cljs.core.constant$keyword$recur;
} else {
throw e20178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__20287 = state_20162;
state_20162 = G__20287;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__ = function(state_20162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1.call(this,state_20162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___20279,jobs,results,process,async))
})();
var state__13638__auto__ = (function (){var statearr_20180 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_20180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___20279);

return statearr_20180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___20279,jobs,results,process,async))
);


var c__13636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto__,jobs,results,process,async){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto__,jobs,results,process,async){
return (function (state_20218){
var state_val_20219 = (state_20218[(1)]);
if((state_val_20219 === (7))){
var inst_20214 = (state_20218[(2)]);
var state_20218__$1 = state_20218;
var statearr_20220_20288 = state_20218__$1;
(statearr_20220_20288[(2)] = inst_20214);

(statearr_20220_20288[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (20))){
var state_20218__$1 = state_20218;
var statearr_20221_20289 = state_20218__$1;
(statearr_20221_20289[(2)] = null);

(statearr_20221_20289[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (1))){
var state_20218__$1 = state_20218;
var statearr_20222_20290 = state_20218__$1;
(statearr_20222_20290[(2)] = null);

(statearr_20222_20290[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (4))){
var inst_20183 = (state_20218[(7)]);
var inst_20183__$1 = (state_20218[(2)]);
var inst_20184 = (inst_20183__$1 == null);
var state_20218__$1 = (function (){var statearr_20223 = state_20218;
(statearr_20223[(7)] = inst_20183__$1);

return statearr_20223;
})();
if(cljs.core.truth_(inst_20184)){
var statearr_20224_20291 = state_20218__$1;
(statearr_20224_20291[(1)] = (5));

} else {
var statearr_20225_20292 = state_20218__$1;
(statearr_20225_20292[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (15))){
var inst_20196 = (state_20218[(8)]);
var state_20218__$1 = state_20218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20218__$1,(18),to,inst_20196);
} else {
if((state_val_20219 === (21))){
var inst_20209 = (state_20218[(2)]);
var state_20218__$1 = state_20218;
var statearr_20226_20293 = state_20218__$1;
(statearr_20226_20293[(2)] = inst_20209);

(statearr_20226_20293[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (13))){
var inst_20211 = (state_20218[(2)]);
var state_20218__$1 = (function (){var statearr_20227 = state_20218;
(statearr_20227[(9)] = inst_20211);

return statearr_20227;
})();
var statearr_20228_20294 = state_20218__$1;
(statearr_20228_20294[(2)] = null);

(statearr_20228_20294[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (6))){
var inst_20183 = (state_20218[(7)]);
var state_20218__$1 = state_20218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20218__$1,(11),inst_20183);
} else {
if((state_val_20219 === (17))){
var inst_20204 = (state_20218[(2)]);
var state_20218__$1 = state_20218;
if(cljs.core.truth_(inst_20204)){
var statearr_20229_20295 = state_20218__$1;
(statearr_20229_20295[(1)] = (19));

} else {
var statearr_20230_20296 = state_20218__$1;
(statearr_20230_20296[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (3))){
var inst_20216 = (state_20218[(2)]);
var state_20218__$1 = state_20218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20218__$1,inst_20216);
} else {
if((state_val_20219 === (12))){
var inst_20193 = (state_20218[(10)]);
var state_20218__$1 = state_20218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20218__$1,(14),inst_20193);
} else {
if((state_val_20219 === (2))){
var state_20218__$1 = state_20218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20218__$1,(4),results);
} else {
if((state_val_20219 === (19))){
var state_20218__$1 = state_20218;
var statearr_20231_20297 = state_20218__$1;
(statearr_20231_20297[(2)] = null);

(statearr_20231_20297[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (11))){
var inst_20193 = (state_20218[(2)]);
var state_20218__$1 = (function (){var statearr_20232 = state_20218;
(statearr_20232[(10)] = inst_20193);

return statearr_20232;
})();
var statearr_20233_20298 = state_20218__$1;
(statearr_20233_20298[(2)] = null);

(statearr_20233_20298[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (9))){
var state_20218__$1 = state_20218;
var statearr_20234_20299 = state_20218__$1;
(statearr_20234_20299[(2)] = null);

(statearr_20234_20299[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (5))){
var state_20218__$1 = state_20218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20235_20300 = state_20218__$1;
(statearr_20235_20300[(1)] = (8));

} else {
var statearr_20236_20301 = state_20218__$1;
(statearr_20236_20301[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (14))){
var inst_20198 = (state_20218[(11)]);
var inst_20196 = (state_20218[(8)]);
var inst_20196__$1 = (state_20218[(2)]);
var inst_20197 = (inst_20196__$1 == null);
var inst_20198__$1 = cljs.core.not(inst_20197);
var state_20218__$1 = (function (){var statearr_20237 = state_20218;
(statearr_20237[(11)] = inst_20198__$1);

(statearr_20237[(8)] = inst_20196__$1);

return statearr_20237;
})();
if(inst_20198__$1){
var statearr_20238_20302 = state_20218__$1;
(statearr_20238_20302[(1)] = (15));

} else {
var statearr_20239_20303 = state_20218__$1;
(statearr_20239_20303[(1)] = (16));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (16))){
var inst_20198 = (state_20218[(11)]);
var state_20218__$1 = state_20218;
var statearr_20240_20304 = state_20218__$1;
(statearr_20240_20304[(2)] = inst_20198);

(statearr_20240_20304[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (10))){
var inst_20190 = (state_20218[(2)]);
var state_20218__$1 = state_20218;
var statearr_20241_20305 = state_20218__$1;
(statearr_20241_20305[(2)] = inst_20190);

(statearr_20241_20305[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (18))){
var inst_20201 = (state_20218[(2)]);
var state_20218__$1 = state_20218;
var statearr_20242_20306 = state_20218__$1;
(statearr_20242_20306[(2)] = inst_20201);

(statearr_20242_20306[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20219 === (8))){
var inst_20187 = cljs.core.async.close_BANG_(to);
var state_20218__$1 = state_20218;
var statearr_20243_20307 = state_20218__$1;
(statearr_20243_20307[(2)] = inst_20187);

(statearr_20243_20307[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto__,jobs,results,process,async))
;
return ((function (switch__13558__auto__,c__13636__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0 = (function (){
var statearr_20247 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__);

(statearr_20247[(1)] = (1));

return statearr_20247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1 = (function (state_20218){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_20218);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e20248){if((e20248 instanceof Object)){
var ex__13562__auto__ = e20248;
var statearr_20249_20308 = state_20218;
(statearr_20249_20308[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20218);

return cljs.core.constant$keyword$recur;
} else {
throw e20248;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__20309 = state_20218;
state_20218 = G__20309;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__ = function(state_20218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1.call(this,state_20218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto__,jobs,results,process,async))
})();
var state__13638__auto__ = (function (){var statearr_20250 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_20250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto__);

return statearr_20250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto__,jobs,results,process,async))
);

return c__13636__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__20311 = arguments.length;
switch (G__20311) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__20314 = arguments.length;
switch (G__20314) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__20317 = arguments.length;
switch (G__20317) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13636__auto___20370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___20370,tc,fc){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___20370,tc,fc){
return (function (state_20343){
var state_val_20344 = (state_20343[(1)]);
if((state_val_20344 === (7))){
var inst_20339 = (state_20343[(2)]);
var state_20343__$1 = state_20343;
var statearr_20345_20371 = state_20343__$1;
(statearr_20345_20371[(2)] = inst_20339);

(statearr_20345_20371[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20344 === (1))){
var state_20343__$1 = state_20343;
var statearr_20346_20372 = state_20343__$1;
(statearr_20346_20372[(2)] = null);

(statearr_20346_20372[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20344 === (4))){
var inst_20320 = (state_20343[(7)]);
var inst_20320__$1 = (state_20343[(2)]);
var inst_20321 = (inst_20320__$1 == null);
var state_20343__$1 = (function (){var statearr_20347 = state_20343;
(statearr_20347[(7)] = inst_20320__$1);

return statearr_20347;
})();
if(cljs.core.truth_(inst_20321)){
var statearr_20348_20373 = state_20343__$1;
(statearr_20348_20373[(1)] = (5));

} else {
var statearr_20349_20374 = state_20343__$1;
(statearr_20349_20374[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20344 === (13))){
var state_20343__$1 = state_20343;
var statearr_20350_20375 = state_20343__$1;
(statearr_20350_20375[(2)] = null);

(statearr_20350_20375[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20344 === (6))){
var inst_20320 = (state_20343[(7)]);
var inst_20326 = (function (){var G__20351 = inst_20320;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__20351) : p.call(null,G__20351));
})();
var state_20343__$1 = state_20343;
if(cljs.core.truth_(inst_20326)){
var statearr_20352_20376 = state_20343__$1;
(statearr_20352_20376[(1)] = (9));

} else {
var statearr_20353_20377 = state_20343__$1;
(statearr_20353_20377[(1)] = (10));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20344 === (3))){
var inst_20341 = (state_20343[(2)]);
var state_20343__$1 = state_20343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20343__$1,inst_20341);
} else {
if((state_val_20344 === (12))){
var state_20343__$1 = state_20343;
var statearr_20354_20378 = state_20343__$1;
(statearr_20354_20378[(2)] = null);

(statearr_20354_20378[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20344 === (2))){
var state_20343__$1 = state_20343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20343__$1,(4),ch);
} else {
if((state_val_20344 === (11))){
var inst_20320 = (state_20343[(7)]);
var inst_20330 = (state_20343[(2)]);
var state_20343__$1 = state_20343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20343__$1,(8),inst_20330,inst_20320);
} else {
if((state_val_20344 === (9))){
var state_20343__$1 = state_20343;
var statearr_20355_20379 = state_20343__$1;
(statearr_20355_20379[(2)] = tc);

(statearr_20355_20379[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20344 === (5))){
var inst_20323 = cljs.core.async.close_BANG_(tc);
var inst_20324 = cljs.core.async.close_BANG_(fc);
var state_20343__$1 = (function (){var statearr_20356 = state_20343;
(statearr_20356[(8)] = inst_20323);

return statearr_20356;
})();
var statearr_20357_20380 = state_20343__$1;
(statearr_20357_20380[(2)] = inst_20324);

(statearr_20357_20380[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20344 === (14))){
var inst_20337 = (state_20343[(2)]);
var state_20343__$1 = state_20343;
var statearr_20358_20381 = state_20343__$1;
(statearr_20358_20381[(2)] = inst_20337);

(statearr_20358_20381[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20344 === (10))){
var state_20343__$1 = state_20343;
var statearr_20359_20382 = state_20343__$1;
(statearr_20359_20382[(2)] = fc);

(statearr_20359_20382[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20344 === (8))){
var inst_20332 = (state_20343[(2)]);
var state_20343__$1 = state_20343;
if(cljs.core.truth_(inst_20332)){
var statearr_20360_20383 = state_20343__$1;
(statearr_20360_20383[(1)] = (12));

} else {
var statearr_20361_20384 = state_20343__$1;
(statearr_20361_20384[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___20370,tc,fc))
;
return ((function (switch__13558__auto__,c__13636__auto___20370,tc,fc){
return (function() {
var cljs$core$async$state_machine__13559__auto__ = null;
var cljs$core$async$state_machine__13559__auto____0 = (function (){
var statearr_20365 = [null,null,null,null,null,null,null,null,null];
(statearr_20365[(0)] = cljs$core$async$state_machine__13559__auto__);

(statearr_20365[(1)] = (1));

return statearr_20365;
});
var cljs$core$async$state_machine__13559__auto____1 = (function (state_20343){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_20343);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e20366){if((e20366 instanceof Object)){
var ex__13562__auto__ = e20366;
var statearr_20367_20385 = state_20343;
(statearr_20367_20385[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20343);

return cljs.core.constant$keyword$recur;
} else {
throw e20366;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__20386 = state_20343;
state_20343 = G__20386;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$state_machine__13559__auto__ = function(state_20343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13559__auto____1.call(this,state_20343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13559__auto____0;
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13559__auto____1;
return cljs$core$async$state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___20370,tc,fc))
})();
var state__13638__auto__ = (function (){var statearr_20368 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_20368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___20370);

return statearr_20368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___20370,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto__){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto__){
return (function (state_20435){
var state_val_20436 = (state_20435[(1)]);
if((state_val_20436 === (1))){
var inst_20421 = init;
var state_20435__$1 = (function (){var statearr_20437 = state_20435;
(statearr_20437[(7)] = inst_20421);

return statearr_20437;
})();
var statearr_20438_20455 = state_20435__$1;
(statearr_20438_20455[(2)] = null);

(statearr_20438_20455[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20436 === (2))){
var state_20435__$1 = state_20435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20435__$1,(4),ch);
} else {
if((state_val_20436 === (3))){
var inst_20433 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20435__$1,inst_20433);
} else {
if((state_val_20436 === (4))){
var inst_20424 = (state_20435[(8)]);
var inst_20424__$1 = (state_20435[(2)]);
var inst_20425 = (inst_20424__$1 == null);
var state_20435__$1 = (function (){var statearr_20439 = state_20435;
(statearr_20439[(8)] = inst_20424__$1);

return statearr_20439;
})();
if(cljs.core.truth_(inst_20425)){
var statearr_20440_20456 = state_20435__$1;
(statearr_20440_20456[(1)] = (5));

} else {
var statearr_20441_20457 = state_20435__$1;
(statearr_20441_20457[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20436 === (5))){
var inst_20421 = (state_20435[(7)]);
var state_20435__$1 = state_20435;
var statearr_20442_20458 = state_20435__$1;
(statearr_20442_20458[(2)] = inst_20421);

(statearr_20442_20458[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20436 === (6))){
var inst_20424 = (state_20435[(8)]);
var inst_20421 = (state_20435[(7)]);
var inst_20428 = (function (){var G__20443 = inst_20421;
var G__20444 = inst_20424;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20443,G__20444) : f.call(null,G__20443,G__20444));
})();
var inst_20421__$1 = inst_20428;
var state_20435__$1 = (function (){var statearr_20445 = state_20435;
(statearr_20445[(7)] = inst_20421__$1);

return statearr_20445;
})();
var statearr_20446_20459 = state_20435__$1;
(statearr_20446_20459[(2)] = null);

(statearr_20446_20459[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20436 === (7))){
var inst_20431 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20447_20460 = state_20435__$1;
(statearr_20447_20460[(2)] = inst_20431);

(statearr_20447_20460[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__13636__auto__))
;
return ((function (switch__13558__auto__,c__13636__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13559__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13559__auto____0 = (function (){
var statearr_20451 = [null,null,null,null,null,null,null,null,null];
(statearr_20451[(0)] = cljs$core$async$reduce_$_state_machine__13559__auto__);

(statearr_20451[(1)] = (1));

return statearr_20451;
});
var cljs$core$async$reduce_$_state_machine__13559__auto____1 = (function (state_20435){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_20435);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e20452){if((e20452 instanceof Object)){
var ex__13562__auto__ = e20452;
var statearr_20453_20461 = state_20435;
(statearr_20453_20461[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20435);

return cljs.core.constant$keyword$recur;
} else {
throw e20452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__20462 = state_20435;
state_20435 = G__20462;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13559__auto__ = function(state_20435){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13559__auto____1.call(this,state_20435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13559__auto____0;
cljs$core$async$reduce_$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13559__auto____1;
return cljs$core$async$reduce_$_state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto__))
})();
var state__13638__auto__ = (function (){var statearr_20454 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_20454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto__);

return statearr_20454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto__))
);

return c__13636__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__20464 = arguments.length;
switch (G__20464) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto__){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto__){
return (function (state_20489){
var state_val_20490 = (state_20489[(1)]);
if((state_val_20490 === (7))){
var inst_20471 = (state_20489[(2)]);
var state_20489__$1 = state_20489;
var statearr_20491_20515 = state_20489__$1;
(statearr_20491_20515[(2)] = inst_20471);

(statearr_20491_20515[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20490 === (1))){
var inst_20465 = cljs.core.seq(coll);
var inst_20466 = inst_20465;
var state_20489__$1 = (function (){var statearr_20492 = state_20489;
(statearr_20492[(7)] = inst_20466);

return statearr_20492;
})();
var statearr_20493_20516 = state_20489__$1;
(statearr_20493_20516[(2)] = null);

(statearr_20493_20516[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20490 === (4))){
var inst_20466 = (state_20489[(7)]);
var inst_20469 = cljs.core.first(inst_20466);
var state_20489__$1 = state_20489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20489__$1,(7),ch,inst_20469);
} else {
if((state_val_20490 === (13))){
var inst_20483 = (state_20489[(2)]);
var state_20489__$1 = state_20489;
var statearr_20494_20517 = state_20489__$1;
(statearr_20494_20517[(2)] = inst_20483);

(statearr_20494_20517[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20490 === (6))){
var inst_20474 = (state_20489[(2)]);
var state_20489__$1 = state_20489;
if(cljs.core.truth_(inst_20474)){
var statearr_20495_20518 = state_20489__$1;
(statearr_20495_20518[(1)] = (8));

} else {
var statearr_20496_20519 = state_20489__$1;
(statearr_20496_20519[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20490 === (3))){
var inst_20487 = (state_20489[(2)]);
var state_20489__$1 = state_20489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20489__$1,inst_20487);
} else {
if((state_val_20490 === (12))){
var state_20489__$1 = state_20489;
var statearr_20497_20520 = state_20489__$1;
(statearr_20497_20520[(2)] = null);

(statearr_20497_20520[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20490 === (2))){
var inst_20466 = (state_20489[(7)]);
var state_20489__$1 = state_20489;
if(cljs.core.truth_(inst_20466)){
var statearr_20498_20521 = state_20489__$1;
(statearr_20498_20521[(1)] = (4));

} else {
var statearr_20499_20522 = state_20489__$1;
(statearr_20499_20522[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20490 === (11))){
var inst_20480 = cljs.core.async.close_BANG_(ch);
var state_20489__$1 = state_20489;
var statearr_20500_20523 = state_20489__$1;
(statearr_20500_20523[(2)] = inst_20480);

(statearr_20500_20523[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20490 === (9))){
var state_20489__$1 = state_20489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20501_20524 = state_20489__$1;
(statearr_20501_20524[(1)] = (11));

} else {
var statearr_20502_20525 = state_20489__$1;
(statearr_20502_20525[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20490 === (5))){
var inst_20466 = (state_20489[(7)]);
var state_20489__$1 = state_20489;
var statearr_20503_20526 = state_20489__$1;
(statearr_20503_20526[(2)] = inst_20466);

(statearr_20503_20526[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20490 === (10))){
var inst_20485 = (state_20489[(2)]);
var state_20489__$1 = state_20489;
var statearr_20504_20527 = state_20489__$1;
(statearr_20504_20527[(2)] = inst_20485);

(statearr_20504_20527[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20490 === (8))){
var inst_20466 = (state_20489[(7)]);
var inst_20476 = cljs.core.next(inst_20466);
var inst_20466__$1 = inst_20476;
var state_20489__$1 = (function (){var statearr_20505 = state_20489;
(statearr_20505[(7)] = inst_20466__$1);

return statearr_20505;
})();
var statearr_20506_20528 = state_20489__$1;
(statearr_20506_20528[(2)] = null);

(statearr_20506_20528[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto__))
;
return ((function (switch__13558__auto__,c__13636__auto__){
return (function() {
var cljs$core$async$state_machine__13559__auto__ = null;
var cljs$core$async$state_machine__13559__auto____0 = (function (){
var statearr_20510 = [null,null,null,null,null,null,null,null];
(statearr_20510[(0)] = cljs$core$async$state_machine__13559__auto__);

(statearr_20510[(1)] = (1));

return statearr_20510;
});
var cljs$core$async$state_machine__13559__auto____1 = (function (state_20489){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_20489);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e20511){if((e20511 instanceof Object)){
var ex__13562__auto__ = e20511;
var statearr_20512_20529 = state_20489;
(statearr_20512_20529[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20489);

return cljs.core.constant$keyword$recur;
} else {
throw e20511;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__20530 = state_20489;
state_20489 = G__20530;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$state_machine__13559__auto__ = function(state_20489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13559__auto____1.call(this,state_20489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13559__auto____0;
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13559__auto____1;
return cljs$core$async$state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto__))
})();
var state__13638__auto__ = (function (){var statearr_20513 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_20513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto__);

return statearr_20513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto__))
);

return c__13636__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj20532 = {};
return obj20532;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4326__auto__ = _;
if(and__4326__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4326__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4974__auto__ = (((_ == null))?null:_);
return (function (){var or__4338__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__20536 = x__4974__auto__;
return goog.typeOf(G__20536);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj20538 = {};
return obj20538;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4326__auto__ = m;
if(and__4326__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4326__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4974__auto__ = (((m == null))?null:m);
return (function (){var or__4338__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__20542 = x__4974__auto__;
return goog.typeOf(G__20542);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4326__auto__ = m;
if(and__4326__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4326__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4974__auto__ = (((m == null))?null:m);
return (function (){var or__4338__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__20546 = x__4974__auto__;
return goog.typeOf(G__20546);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4326__auto__ = m;
if(and__4326__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4326__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4974__auto__ = (((m == null))?null:m);
return (function (){var or__4338__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__20550 = x__4974__auto__;
return goog.typeOf(G__20550);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__20780 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20780) : cljs.core.atom.call(null,G__20780));
})();
var m = (function (){
if(typeof cljs.core.async.t20781 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20781 = (function (mult,ch,cs,meta20782){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20782 = meta20782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t20781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20783,meta20782__$1){
var self__ = this;
var _20783__$1 = this;
return (new cljs.core.async.t20781(self__.mult,self__.ch,self__.cs,meta20782__$1));
});})(cs))
;

cljs.core.async.t20781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20783){
var self__ = this;
var _20783__$1 = this;
return self__.meta20782;
});})(cs))
;

cljs.core.async.t20781.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20781.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20781.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20781.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20781.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20781.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20784_21009 = self__.cs;
var G__20785_21010 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20784_21009,G__20785_21010) : cljs.core.reset_BANG_.call(null,G__20784_21009,G__20785_21010));

return null;
});})(cs))
;

cljs.core.async.t20781.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20782","meta20782",2064469317,null)], null);
});})(cs))
;

cljs.core.async.t20781.cljs$lang$type = true;

cljs.core.async.t20781.cljs$lang$ctorStr = "cljs.core.async/t20781";

cljs.core.async.t20781.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t20781");
});})(cs))
;

cljs.core.async.__GT_t20781 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t20781(mult__$1,ch__$1,cs__$1,meta20782){
return (new cljs.core.async.t20781(mult__$1,ch__$1,cs__$1,meta20782));
});})(cs))
;

}

return (new cljs.core.async.t20781(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__20786 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20786) : cljs.core.atom.call(null,G__20786));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13636__auto___21011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___21011,cs,m,dchan,dctr,done){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___21011,cs,m,dchan,dctr,done){
return (function (state_20917){
var state_val_20918 = (state_20917[(1)]);
if((state_val_20918 === (7))){
var inst_20913 = (state_20917[(2)]);
var state_20917__$1 = state_20917;
var statearr_20919_21012 = state_20917__$1;
(statearr_20919_21012[(2)] = inst_20913);

(statearr_20919_21012[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (20))){
var inst_20818 = (state_20917[(7)]);
var inst_20828 = cljs.core.first(inst_20818);
var inst_20829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20828,(0),null);
var inst_20830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20828,(1),null);
var state_20917__$1 = (function (){var statearr_20920 = state_20917;
(statearr_20920[(8)] = inst_20829);

return statearr_20920;
})();
if(cljs.core.truth_(inst_20830)){
var statearr_20921_21013 = state_20917__$1;
(statearr_20921_21013[(1)] = (22));

} else {
var statearr_20922_21014 = state_20917__$1;
(statearr_20922_21014[(1)] = (23));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (27))){
var inst_20858 = (state_20917[(9)]);
var inst_20789 = (state_20917[(10)]);
var inst_20860 = (state_20917[(11)]);
var inst_20865 = (state_20917[(12)]);
var inst_20865__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20858,inst_20860);
var inst_20866 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20865__$1,inst_20789,done);
var state_20917__$1 = (function (){var statearr_20923 = state_20917;
(statearr_20923[(12)] = inst_20865__$1);

return statearr_20923;
})();
if(cljs.core.truth_(inst_20866)){
var statearr_20924_21015 = state_20917__$1;
(statearr_20924_21015[(1)] = (30));

} else {
var statearr_20925_21016 = state_20917__$1;
(statearr_20925_21016[(1)] = (31));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (1))){
var state_20917__$1 = state_20917;
var statearr_20926_21017 = state_20917__$1;
(statearr_20926_21017[(2)] = null);

(statearr_20926_21017[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (24))){
var inst_20818 = (state_20917[(7)]);
var inst_20835 = (state_20917[(2)]);
var inst_20836 = cljs.core.next(inst_20818);
var inst_20798 = inst_20836;
var inst_20799 = null;
var inst_20800 = (0);
var inst_20801 = (0);
var state_20917__$1 = (function (){var statearr_20927 = state_20917;
(statearr_20927[(13)] = inst_20801);

(statearr_20927[(14)] = inst_20798);

(statearr_20927[(15)] = inst_20800);

(statearr_20927[(16)] = inst_20799);

(statearr_20927[(17)] = inst_20835);

return statearr_20927;
})();
var statearr_20928_21018 = state_20917__$1;
(statearr_20928_21018[(2)] = null);

(statearr_20928_21018[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (39))){
var state_20917__$1 = state_20917;
var statearr_20932_21019 = state_20917__$1;
(statearr_20932_21019[(2)] = null);

(statearr_20932_21019[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (4))){
var inst_20789 = (state_20917[(10)]);
var inst_20789__$1 = (state_20917[(2)]);
var inst_20790 = (inst_20789__$1 == null);
var state_20917__$1 = (function (){var statearr_20933 = state_20917;
(statearr_20933[(10)] = inst_20789__$1);

return statearr_20933;
})();
if(cljs.core.truth_(inst_20790)){
var statearr_20934_21020 = state_20917__$1;
(statearr_20934_21020[(1)] = (5));

} else {
var statearr_20935_21021 = state_20917__$1;
(statearr_20935_21021[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (15))){
var inst_20801 = (state_20917[(13)]);
var inst_20798 = (state_20917[(14)]);
var inst_20800 = (state_20917[(15)]);
var inst_20799 = (state_20917[(16)]);
var inst_20814 = (state_20917[(2)]);
var inst_20815 = (inst_20801 + (1));
var tmp20929 = inst_20798;
var tmp20930 = inst_20800;
var tmp20931 = inst_20799;
var inst_20798__$1 = tmp20929;
var inst_20799__$1 = tmp20931;
var inst_20800__$1 = tmp20930;
var inst_20801__$1 = inst_20815;
var state_20917__$1 = (function (){var statearr_20936 = state_20917;
(statearr_20936[(13)] = inst_20801__$1);

(statearr_20936[(14)] = inst_20798__$1);

(statearr_20936[(15)] = inst_20800__$1);

(statearr_20936[(16)] = inst_20799__$1);

(statearr_20936[(18)] = inst_20814);

return statearr_20936;
})();
var statearr_20937_21022 = state_20917__$1;
(statearr_20937_21022[(2)] = null);

(statearr_20937_21022[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (21))){
var inst_20839 = (state_20917[(2)]);
var state_20917__$1 = state_20917;
var statearr_20941_21023 = state_20917__$1;
(statearr_20941_21023[(2)] = inst_20839);

(statearr_20941_21023[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (31))){
var inst_20865 = (state_20917[(12)]);
var inst_20869 = done(null);
var inst_20870 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_20865);
var state_20917__$1 = (function (){var statearr_20942 = state_20917;
(statearr_20942[(19)] = inst_20869);

return statearr_20942;
})();
var statearr_20943_21024 = state_20917__$1;
(statearr_20943_21024[(2)] = inst_20870);

(statearr_20943_21024[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (32))){
var inst_20858 = (state_20917[(9)]);
var inst_20859 = (state_20917[(20)]);
var inst_20860 = (state_20917[(11)]);
var inst_20857 = (state_20917[(21)]);
var inst_20872 = (state_20917[(2)]);
var inst_20873 = (inst_20860 + (1));
var tmp20938 = inst_20858;
var tmp20939 = inst_20859;
var tmp20940 = inst_20857;
var inst_20857__$1 = tmp20940;
var inst_20858__$1 = tmp20938;
var inst_20859__$1 = tmp20939;
var inst_20860__$1 = inst_20873;
var state_20917__$1 = (function (){var statearr_20944 = state_20917;
(statearr_20944[(9)] = inst_20858__$1);

(statearr_20944[(20)] = inst_20859__$1);

(statearr_20944[(11)] = inst_20860__$1);

(statearr_20944[(22)] = inst_20872);

(statearr_20944[(21)] = inst_20857__$1);

return statearr_20944;
})();
var statearr_20945_21025 = state_20917__$1;
(statearr_20945_21025[(2)] = null);

(statearr_20945_21025[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (40))){
var inst_20885 = (state_20917[(23)]);
var inst_20889 = done(null);
var inst_20890 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_20885);
var state_20917__$1 = (function (){var statearr_20946 = state_20917;
(statearr_20946[(24)] = inst_20889);

return statearr_20946;
})();
var statearr_20947_21026 = state_20917__$1;
(statearr_20947_21026[(2)] = inst_20890);

(statearr_20947_21026[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (33))){
var inst_20876 = (state_20917[(25)]);
var inst_20878 = cljs.core.chunked_seq_QMARK_(inst_20876);
var state_20917__$1 = state_20917;
if(inst_20878){
var statearr_20948_21027 = state_20917__$1;
(statearr_20948_21027[(1)] = (36));

} else {
var statearr_20949_21028 = state_20917__$1;
(statearr_20949_21028[(1)] = (37));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (13))){
var inst_20808 = (state_20917[(26)]);
var inst_20811 = cljs.core.async.close_BANG_(inst_20808);
var state_20917__$1 = state_20917;
var statearr_20950_21029 = state_20917__$1;
(statearr_20950_21029[(2)] = inst_20811);

(statearr_20950_21029[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (22))){
var inst_20829 = (state_20917[(8)]);
var inst_20832 = cljs.core.async.close_BANG_(inst_20829);
var state_20917__$1 = state_20917;
var statearr_20951_21030 = state_20917__$1;
(statearr_20951_21030[(2)] = inst_20832);

(statearr_20951_21030[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (36))){
var inst_20876 = (state_20917[(25)]);
var inst_20880 = cljs.core.chunk_first(inst_20876);
var inst_20881 = cljs.core.chunk_rest(inst_20876);
var inst_20882 = cljs.core.count(inst_20880);
var inst_20857 = inst_20881;
var inst_20858 = inst_20880;
var inst_20859 = inst_20882;
var inst_20860 = (0);
var state_20917__$1 = (function (){var statearr_20952 = state_20917;
(statearr_20952[(9)] = inst_20858);

(statearr_20952[(20)] = inst_20859);

(statearr_20952[(11)] = inst_20860);

(statearr_20952[(21)] = inst_20857);

return statearr_20952;
})();
var statearr_20953_21031 = state_20917__$1;
(statearr_20953_21031[(2)] = null);

(statearr_20953_21031[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (41))){
var inst_20876 = (state_20917[(25)]);
var inst_20892 = (state_20917[(2)]);
var inst_20893 = cljs.core.next(inst_20876);
var inst_20857 = inst_20893;
var inst_20858 = null;
var inst_20859 = (0);
var inst_20860 = (0);
var state_20917__$1 = (function (){var statearr_20954 = state_20917;
(statearr_20954[(9)] = inst_20858);

(statearr_20954[(20)] = inst_20859);

(statearr_20954[(11)] = inst_20860);

(statearr_20954[(27)] = inst_20892);

(statearr_20954[(21)] = inst_20857);

return statearr_20954;
})();
var statearr_20955_21032 = state_20917__$1;
(statearr_20955_21032[(2)] = null);

(statearr_20955_21032[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (43))){
var state_20917__$1 = state_20917;
var statearr_20956_21033 = state_20917__$1;
(statearr_20956_21033[(2)] = null);

(statearr_20956_21033[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (29))){
var inst_20901 = (state_20917[(2)]);
var state_20917__$1 = state_20917;
var statearr_20957_21034 = state_20917__$1;
(statearr_20957_21034[(2)] = inst_20901);

(statearr_20957_21034[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (44))){
var inst_20910 = (state_20917[(2)]);
var state_20917__$1 = (function (){var statearr_20958 = state_20917;
(statearr_20958[(28)] = inst_20910);

return statearr_20958;
})();
var statearr_20959_21035 = state_20917__$1;
(statearr_20959_21035[(2)] = null);

(statearr_20959_21035[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (6))){
var inst_20849 = (state_20917[(29)]);
var inst_20848 = (function (){var G__20960 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20960) : cljs.core.deref.call(null,G__20960));
})();
var inst_20849__$1 = cljs.core.keys(inst_20848);
var inst_20850 = cljs.core.count(inst_20849__$1);
var inst_20851 = (function (){var G__20961 = dctr;
var G__20962 = inst_20850;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20961,G__20962) : cljs.core.reset_BANG_.call(null,G__20961,G__20962));
})();
var inst_20856 = cljs.core.seq(inst_20849__$1);
var inst_20857 = inst_20856;
var inst_20858 = null;
var inst_20859 = (0);
var inst_20860 = (0);
var state_20917__$1 = (function (){var statearr_20963 = state_20917;
(statearr_20963[(9)] = inst_20858);

(statearr_20963[(20)] = inst_20859);

(statearr_20963[(30)] = inst_20851);

(statearr_20963[(11)] = inst_20860);

(statearr_20963[(29)] = inst_20849__$1);

(statearr_20963[(21)] = inst_20857);

return statearr_20963;
})();
var statearr_20964_21036 = state_20917__$1;
(statearr_20964_21036[(2)] = null);

(statearr_20964_21036[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (28))){
var inst_20876 = (state_20917[(25)]);
var inst_20857 = (state_20917[(21)]);
var inst_20876__$1 = cljs.core.seq(inst_20857);
var state_20917__$1 = (function (){var statearr_20965 = state_20917;
(statearr_20965[(25)] = inst_20876__$1);

return statearr_20965;
})();
if(inst_20876__$1){
var statearr_20966_21037 = state_20917__$1;
(statearr_20966_21037[(1)] = (33));

} else {
var statearr_20967_21038 = state_20917__$1;
(statearr_20967_21038[(1)] = (34));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (25))){
var inst_20859 = (state_20917[(20)]);
var inst_20860 = (state_20917[(11)]);
var inst_20862 = (inst_20860 < inst_20859);
var inst_20863 = inst_20862;
var state_20917__$1 = state_20917;
if(cljs.core.truth_(inst_20863)){
var statearr_20968_21039 = state_20917__$1;
(statearr_20968_21039[(1)] = (27));

} else {
var statearr_20969_21040 = state_20917__$1;
(statearr_20969_21040[(1)] = (28));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (34))){
var state_20917__$1 = state_20917;
var statearr_20970_21041 = state_20917__$1;
(statearr_20970_21041[(2)] = null);

(statearr_20970_21041[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (17))){
var state_20917__$1 = state_20917;
var statearr_20971_21042 = state_20917__$1;
(statearr_20971_21042[(2)] = null);

(statearr_20971_21042[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (3))){
var inst_20915 = (state_20917[(2)]);
var state_20917__$1 = state_20917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20917__$1,inst_20915);
} else {
if((state_val_20918 === (12))){
var inst_20844 = (state_20917[(2)]);
var state_20917__$1 = state_20917;
var statearr_20972_21043 = state_20917__$1;
(statearr_20972_21043[(2)] = inst_20844);

(statearr_20972_21043[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (2))){
var state_20917__$1 = state_20917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20917__$1,(4),ch);
} else {
if((state_val_20918 === (23))){
var state_20917__$1 = state_20917;
var statearr_20973_21044 = state_20917__$1;
(statearr_20973_21044[(2)] = null);

(statearr_20973_21044[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (35))){
var inst_20899 = (state_20917[(2)]);
var state_20917__$1 = state_20917;
var statearr_20974_21045 = state_20917__$1;
(statearr_20974_21045[(2)] = inst_20899);

(statearr_20974_21045[(1)] = (29));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (19))){
var inst_20818 = (state_20917[(7)]);
var inst_20822 = cljs.core.chunk_first(inst_20818);
var inst_20823 = cljs.core.chunk_rest(inst_20818);
var inst_20824 = cljs.core.count(inst_20822);
var inst_20798 = inst_20823;
var inst_20799 = inst_20822;
var inst_20800 = inst_20824;
var inst_20801 = (0);
var state_20917__$1 = (function (){var statearr_20975 = state_20917;
(statearr_20975[(13)] = inst_20801);

(statearr_20975[(14)] = inst_20798);

(statearr_20975[(15)] = inst_20800);

(statearr_20975[(16)] = inst_20799);

return statearr_20975;
})();
var statearr_20976_21046 = state_20917__$1;
(statearr_20976_21046[(2)] = null);

(statearr_20976_21046[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (11))){
var inst_20798 = (state_20917[(14)]);
var inst_20818 = (state_20917[(7)]);
var inst_20818__$1 = cljs.core.seq(inst_20798);
var state_20917__$1 = (function (){var statearr_20977 = state_20917;
(statearr_20977[(7)] = inst_20818__$1);

return statearr_20977;
})();
if(inst_20818__$1){
var statearr_20978_21047 = state_20917__$1;
(statearr_20978_21047[(1)] = (16));

} else {
var statearr_20979_21048 = state_20917__$1;
(statearr_20979_21048[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (9))){
var inst_20846 = (state_20917[(2)]);
var state_20917__$1 = state_20917;
var statearr_20980_21049 = state_20917__$1;
(statearr_20980_21049[(2)] = inst_20846);

(statearr_20980_21049[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (5))){
var inst_20796 = (function (){var G__20981 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20981) : cljs.core.deref.call(null,G__20981));
})();
var inst_20797 = cljs.core.seq(inst_20796);
var inst_20798 = inst_20797;
var inst_20799 = null;
var inst_20800 = (0);
var inst_20801 = (0);
var state_20917__$1 = (function (){var statearr_20982 = state_20917;
(statearr_20982[(13)] = inst_20801);

(statearr_20982[(14)] = inst_20798);

(statearr_20982[(15)] = inst_20800);

(statearr_20982[(16)] = inst_20799);

return statearr_20982;
})();
var statearr_20983_21050 = state_20917__$1;
(statearr_20983_21050[(2)] = null);

(statearr_20983_21050[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (14))){
var state_20917__$1 = state_20917;
var statearr_20984_21051 = state_20917__$1;
(statearr_20984_21051[(2)] = null);

(statearr_20984_21051[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (45))){
var inst_20907 = (state_20917[(2)]);
var state_20917__$1 = state_20917;
var statearr_20985_21052 = state_20917__$1;
(statearr_20985_21052[(2)] = inst_20907);

(statearr_20985_21052[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (26))){
var inst_20849 = (state_20917[(29)]);
var inst_20903 = (state_20917[(2)]);
var inst_20904 = cljs.core.seq(inst_20849);
var state_20917__$1 = (function (){var statearr_20986 = state_20917;
(statearr_20986[(31)] = inst_20903);

return statearr_20986;
})();
if(inst_20904){
var statearr_20987_21053 = state_20917__$1;
(statearr_20987_21053[(1)] = (42));

} else {
var statearr_20988_21054 = state_20917__$1;
(statearr_20988_21054[(1)] = (43));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (16))){
var inst_20818 = (state_20917[(7)]);
var inst_20820 = cljs.core.chunked_seq_QMARK_(inst_20818);
var state_20917__$1 = state_20917;
if(inst_20820){
var statearr_20989_21055 = state_20917__$1;
(statearr_20989_21055[(1)] = (19));

} else {
var statearr_20990_21056 = state_20917__$1;
(statearr_20990_21056[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (38))){
var inst_20896 = (state_20917[(2)]);
var state_20917__$1 = state_20917;
var statearr_20991_21057 = state_20917__$1;
(statearr_20991_21057[(2)] = inst_20896);

(statearr_20991_21057[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (30))){
var state_20917__$1 = state_20917;
var statearr_20992_21058 = state_20917__$1;
(statearr_20992_21058[(2)] = null);

(statearr_20992_21058[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (10))){
var inst_20801 = (state_20917[(13)]);
var inst_20799 = (state_20917[(16)]);
var inst_20807 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20799,inst_20801);
var inst_20808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20807,(0),null);
var inst_20809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20807,(1),null);
var state_20917__$1 = (function (){var statearr_20993 = state_20917;
(statearr_20993[(26)] = inst_20808);

return statearr_20993;
})();
if(cljs.core.truth_(inst_20809)){
var statearr_20994_21059 = state_20917__$1;
(statearr_20994_21059[(1)] = (13));

} else {
var statearr_20995_21060 = state_20917__$1;
(statearr_20995_21060[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (18))){
var inst_20842 = (state_20917[(2)]);
var state_20917__$1 = state_20917;
var statearr_20996_21061 = state_20917__$1;
(statearr_20996_21061[(2)] = inst_20842);

(statearr_20996_21061[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (42))){
var state_20917__$1 = state_20917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20917__$1,(45),dchan);
} else {
if((state_val_20918 === (37))){
var inst_20789 = (state_20917[(10)]);
var inst_20876 = (state_20917[(25)]);
var inst_20885 = (state_20917[(23)]);
var inst_20885__$1 = cljs.core.first(inst_20876);
var inst_20886 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20885__$1,inst_20789,done);
var state_20917__$1 = (function (){var statearr_20997 = state_20917;
(statearr_20997[(23)] = inst_20885__$1);

return statearr_20997;
})();
if(cljs.core.truth_(inst_20886)){
var statearr_20998_21062 = state_20917__$1;
(statearr_20998_21062[(1)] = (39));

} else {
var statearr_20999_21063 = state_20917__$1;
(statearr_20999_21063[(1)] = (40));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20918 === (8))){
var inst_20801 = (state_20917[(13)]);
var inst_20800 = (state_20917[(15)]);
var inst_20803 = (inst_20801 < inst_20800);
var inst_20804 = inst_20803;
var state_20917__$1 = state_20917;
if(cljs.core.truth_(inst_20804)){
var statearr_21000_21064 = state_20917__$1;
(statearr_21000_21064[(1)] = (10));

} else {
var statearr_21001_21065 = state_20917__$1;
(statearr_21001_21065[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___21011,cs,m,dchan,dctr,done))
;
return ((function (switch__13558__auto__,c__13636__auto___21011,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13559__auto__ = null;
var cljs$core$async$mult_$_state_machine__13559__auto____0 = (function (){
var statearr_21005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21005[(0)] = cljs$core$async$mult_$_state_machine__13559__auto__);

(statearr_21005[(1)] = (1));

return statearr_21005;
});
var cljs$core$async$mult_$_state_machine__13559__auto____1 = (function (state_20917){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_20917);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e21006){if((e21006 instanceof Object)){
var ex__13562__auto__ = e21006;
var statearr_21007_21066 = state_20917;
(statearr_21007_21066[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20917);

return cljs.core.constant$keyword$recur;
} else {
throw e21006;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__21067 = state_20917;
state_20917 = G__21067;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13559__auto__ = function(state_20917){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13559__auto____1.call(this,state_20917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13559__auto____0;
cljs$core$async$mult_$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13559__auto____1;
return cljs$core$async$mult_$_state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___21011,cs,m,dchan,dctr,done))
})();
var state__13638__auto__ = (function (){var statearr_21008 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_21008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___21011);

return statearr_21008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___21011,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__21069 = arguments.length;
switch (G__21069) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj21072 = {};
return obj21072;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4326__auto__ = m;
if(and__4326__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4326__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4974__auto__ = (((m == null))?null:m);
return (function (){var or__4338__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__21076 = x__4974__auto__;
return goog.typeOf(G__21076);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4326__auto__ = m;
if(and__4326__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4326__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4974__auto__ = (((m == null))?null:m);
return (function (){var or__4338__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__21080 = x__4974__auto__;
return goog.typeOf(G__21080);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4326__auto__ = m;
if(and__4326__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4326__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4974__auto__ = (((m == null))?null:m);
return (function (){var or__4338__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__21084 = x__4974__auto__;
return goog.typeOf(G__21084);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4326__auto__ = m;
if(and__4326__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4326__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4974__auto__ = (((m == null))?null:m);
return (function (){var or__4338__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__21088 = x__4974__auto__;
return goog.typeOf(G__21088);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4326__auto__ = m;
if(and__4326__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4326__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4974__auto__ = (((m == null))?null:m);
return (function (){var or__4338__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__21092 = x__4974__auto__;
return goog.typeOf(G__21092);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5378__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5378__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21097){
var map__21098 = p__21097;
var map__21098__$1 = ((cljs.core.seq_QMARK_(map__21098))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21098):map__21098);
var opts = map__21098__$1;
var statearr_21099_21103 = state;
(statearr_21099_21103[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__21098,map__21098__$1,opts){
return (function (val){
var statearr_21100_21104 = state;
(statearr_21100_21104[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__21098,map__21098__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21101_21105 = state;
(statearr_21101_21105[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__21102 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21102) : cljs.core.deref.call(null,G__21102));
})());


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21093){
var G__21094 = cljs.core.first(seq21093);
var seq21093__$1 = cljs.core.next(seq21093);
var G__21095 = cljs.core.first(seq21093__$1);
var seq21093__$2 = cljs.core.next(seq21093__$1);
var G__21096 = cljs.core.first(seq21093__$2);
var seq21093__$3 = cljs.core.next(seq21093__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21094,G__21095,G__21096,seq21093__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__21239 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21239) : cljs.core.atom.call(null,G__21239));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$pause,null,cljs.core.constant$keyword$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$solo);
var solo_mode = (function (){var G__21240 = cljs.core.constant$keyword$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21240) : cljs.core.atom.call(null,G__21240));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__21241 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__21241) : attr.call(null,G__21241));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__21242 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21242) : cljs.core.deref.call(null,G__21242));
})();
var mode = (function (){var G__21243 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21243) : cljs.core.deref.call(null,G__21243));
})();
var solos = pick(cljs.core.constant$keyword$solo,chs);
var pauses = pick(cljs.core.constant$keyword$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$solos,solos,cljs.core.constant$keyword$mutes,pick(cljs.core.constant$keyword$mute,chs),cljs.core.constant$keyword$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t21244 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21244 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21245){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21245 = meta21245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21246,meta21245__$1){
var self__ = this;
var _21246__$1 = this;
return (new cljs.core.async.t21244(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21245__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21246){
var self__ = this;
var _21246__$1 = this;
return self__.meta21245;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21244.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21244.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21244.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21244.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21244.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21247_21372 = self__.cs;
var G__21248_21373 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21247_21372,G__21248_21373) : cljs.core.reset_BANG_.call(null,G__21247_21372,G__21248_21373));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21244.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21244.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__21249 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__21249) : self__.solo_modes.call(null,G__21249));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__21250_21374 = self__.solo_mode;
var G__21251_21375 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21250_21374,G__21251_21375) : cljs.core.reset_BANG_.call(null,G__21250_21374,G__21251_21375));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21244.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21245","meta21245",-2122693965,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21244.cljs$lang$type = true;

cljs.core.async.t21244.cljs$lang$ctorStr = "cljs.core.async/t21244";

cljs.core.async.t21244.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t21244");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21244 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t21244(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21245){
return (new cljs.core.async.t21244(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21245));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21244(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13636__auto___21376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___21376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___21376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21323){
var state_val_21324 = (state_21323[(1)]);
if((state_val_21324 === (7))){
var inst_21265 = (state_21323[(7)]);
var inst_21270 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21265);
var state_21323__$1 = state_21323;
var statearr_21325_21377 = state_21323__$1;
(statearr_21325_21377[(2)] = inst_21270);

(statearr_21325_21377[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (20))){
var inst_21280 = (state_21323[(8)]);
var state_21323__$1 = state_21323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21323__$1,(23),out,inst_21280);
} else {
if((state_val_21324 === (1))){
var inst_21255 = (state_21323[(9)]);
var inst_21255__$1 = calc_state();
var inst_21256 = cljs.core.seq_QMARK_(inst_21255__$1);
var state_21323__$1 = (function (){var statearr_21326 = state_21323;
(statearr_21326[(9)] = inst_21255__$1);

return statearr_21326;
})();
if(inst_21256){
var statearr_21327_21378 = state_21323__$1;
(statearr_21327_21378[(1)] = (2));

} else {
var statearr_21328_21379 = state_21323__$1;
(statearr_21328_21379[(1)] = (3));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (24))){
var inst_21273 = (state_21323[(10)]);
var inst_21265 = inst_21273;
var state_21323__$1 = (function (){var statearr_21329 = state_21323;
(statearr_21329[(7)] = inst_21265);

return statearr_21329;
})();
var statearr_21330_21380 = state_21323__$1;
(statearr_21330_21380[(2)] = null);

(statearr_21330_21380[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (4))){
var inst_21255 = (state_21323[(9)]);
var inst_21261 = (state_21323[(2)]);
var inst_21262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21261,cljs.core.constant$keyword$solos);
var inst_21263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21261,cljs.core.constant$keyword$mutes);
var inst_21264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21261,cljs.core.constant$keyword$reads);
var inst_21265 = inst_21255;
var state_21323__$1 = (function (){var statearr_21331 = state_21323;
(statearr_21331[(7)] = inst_21265);

(statearr_21331[(11)] = inst_21262);

(statearr_21331[(12)] = inst_21263);

(statearr_21331[(13)] = inst_21264);

return statearr_21331;
})();
var statearr_21332_21381 = state_21323__$1;
(statearr_21332_21381[(2)] = null);

(statearr_21332_21381[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (15))){
var state_21323__$1 = state_21323;
var statearr_21333_21382 = state_21323__$1;
(statearr_21333_21382[(2)] = null);

(statearr_21333_21382[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (21))){
var inst_21273 = (state_21323[(10)]);
var inst_21265 = inst_21273;
var state_21323__$1 = (function (){var statearr_21334 = state_21323;
(statearr_21334[(7)] = inst_21265);

return statearr_21334;
})();
var statearr_21335_21383 = state_21323__$1;
(statearr_21335_21383[(2)] = null);

(statearr_21335_21383[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (13))){
var inst_21319 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
var statearr_21336_21384 = state_21323__$1;
(statearr_21336_21384[(2)] = inst_21319);

(statearr_21336_21384[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (22))){
var inst_21317 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
var statearr_21337_21385 = state_21323__$1;
(statearr_21337_21385[(2)] = inst_21317);

(statearr_21337_21385[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (6))){
var inst_21321 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21323__$1,inst_21321);
} else {
if((state_val_21324 === (25))){
var state_21323__$1 = state_21323;
var statearr_21338_21386 = state_21323__$1;
(statearr_21338_21386[(2)] = null);

(statearr_21338_21386[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (17))){
var inst_21296 = (state_21323[(14)]);
var state_21323__$1 = state_21323;
var statearr_21339_21387 = state_21323__$1;
(statearr_21339_21387[(2)] = inst_21296);

(statearr_21339_21387[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (3))){
var inst_21255 = (state_21323[(9)]);
var state_21323__$1 = state_21323;
var statearr_21340_21388 = state_21323__$1;
(statearr_21340_21388[(2)] = inst_21255);

(statearr_21340_21388[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (12))){
var inst_21281 = (state_21323[(15)]);
var inst_21274 = (state_21323[(16)]);
var inst_21296 = (state_21323[(14)]);
var inst_21296__$1 = (function (){var G__21341 = inst_21281;
return (inst_21274.cljs$core$IFn$_invoke$arity$1 ? inst_21274.cljs$core$IFn$_invoke$arity$1(G__21341) : inst_21274.call(null,G__21341));
})();
var state_21323__$1 = (function (){var statearr_21342 = state_21323;
(statearr_21342[(14)] = inst_21296__$1);

return statearr_21342;
})();
if(cljs.core.truth_(inst_21296__$1)){
var statearr_21343_21389 = state_21323__$1;
(statearr_21343_21389[(1)] = (17));

} else {
var statearr_21344_21390 = state_21323__$1;
(statearr_21344_21390[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (2))){
var inst_21255 = (state_21323[(9)]);
var inst_21258 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21255);
var state_21323__$1 = state_21323;
var statearr_21345_21391 = state_21323__$1;
(statearr_21345_21391[(2)] = inst_21258);

(statearr_21345_21391[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (23))){
var inst_21308 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
if(cljs.core.truth_(inst_21308)){
var statearr_21346_21392 = state_21323__$1;
(statearr_21346_21392[(1)] = (24));

} else {
var statearr_21347_21393 = state_21323__$1;
(statearr_21347_21393[(1)] = (25));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (19))){
var inst_21305 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
if(cljs.core.truth_(inst_21305)){
var statearr_21348_21394 = state_21323__$1;
(statearr_21348_21394[(1)] = (20));

} else {
var statearr_21349_21395 = state_21323__$1;
(statearr_21349_21395[(1)] = (21));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (11))){
var inst_21280 = (state_21323[(8)]);
var inst_21286 = (inst_21280 == null);
var state_21323__$1 = state_21323;
if(cljs.core.truth_(inst_21286)){
var statearr_21350_21396 = state_21323__$1;
(statearr_21350_21396[(1)] = (14));

} else {
var statearr_21351_21397 = state_21323__$1;
(statearr_21351_21397[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (9))){
var inst_21273 = (state_21323[(10)]);
var inst_21273__$1 = (state_21323[(2)]);
var inst_21274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21273__$1,cljs.core.constant$keyword$solos);
var inst_21275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21273__$1,cljs.core.constant$keyword$mutes);
var inst_21276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21273__$1,cljs.core.constant$keyword$reads);
var state_21323__$1 = (function (){var statearr_21352 = state_21323;
(statearr_21352[(10)] = inst_21273__$1);

(statearr_21352[(17)] = inst_21275);

(statearr_21352[(16)] = inst_21274);

return statearr_21352;
})();
return cljs.core.async.ioc_alts_BANG_(state_21323__$1,(10),inst_21276);
} else {
if((state_val_21324 === (5))){
var inst_21265 = (state_21323[(7)]);
var inst_21268 = cljs.core.seq_QMARK_(inst_21265);
var state_21323__$1 = state_21323;
if(inst_21268){
var statearr_21353_21398 = state_21323__$1;
(statearr_21353_21398[(1)] = (7));

} else {
var statearr_21354_21399 = state_21323__$1;
(statearr_21354_21399[(1)] = (8));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (14))){
var inst_21281 = (state_21323[(15)]);
var inst_21288 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21281);
var state_21323__$1 = state_21323;
var statearr_21355_21400 = state_21323__$1;
(statearr_21355_21400[(2)] = inst_21288);

(statearr_21355_21400[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (26))){
var inst_21313 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
var statearr_21356_21401 = state_21323__$1;
(statearr_21356_21401[(2)] = inst_21313);

(statearr_21356_21401[(1)] = (22));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (16))){
var inst_21291 = (state_21323[(2)]);
var inst_21292 = calc_state();
var inst_21265 = inst_21292;
var state_21323__$1 = (function (){var statearr_21357 = state_21323;
(statearr_21357[(7)] = inst_21265);

(statearr_21357[(18)] = inst_21291);

return statearr_21357;
})();
var statearr_21358_21402 = state_21323__$1;
(statearr_21358_21402[(2)] = null);

(statearr_21358_21402[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (10))){
var inst_21281 = (state_21323[(15)]);
var inst_21280 = (state_21323[(8)]);
var inst_21279 = (state_21323[(2)]);
var inst_21280__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21279,(0),null);
var inst_21281__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21279,(1),null);
var inst_21282 = (inst_21280__$1 == null);
var inst_21283 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21281__$1,change);
var inst_21284 = (inst_21282) || (inst_21283);
var state_21323__$1 = (function (){var statearr_21359 = state_21323;
(statearr_21359[(15)] = inst_21281__$1);

(statearr_21359[(8)] = inst_21280__$1);

return statearr_21359;
})();
if(cljs.core.truth_(inst_21284)){
var statearr_21360_21403 = state_21323__$1;
(statearr_21360_21403[(1)] = (11));

} else {
var statearr_21361_21404 = state_21323__$1;
(statearr_21361_21404[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (18))){
var inst_21275 = (state_21323[(17)]);
var inst_21281 = (state_21323[(15)]);
var inst_21274 = (state_21323[(16)]);
var inst_21300 = cljs.core.empty_QMARK_(inst_21274);
var inst_21301 = (function (){var G__21362 = inst_21281;
return (inst_21275.cljs$core$IFn$_invoke$arity$1 ? inst_21275.cljs$core$IFn$_invoke$arity$1(G__21362) : inst_21275.call(null,G__21362));
})();
var inst_21302 = cljs.core.not(inst_21301);
var inst_21303 = (inst_21300) && (inst_21302);
var state_21323__$1 = state_21323;
var statearr_21363_21405 = state_21323__$1;
(statearr_21363_21405[(2)] = inst_21303);

(statearr_21363_21405[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21324 === (8))){
var inst_21265 = (state_21323[(7)]);
var state_21323__$1 = state_21323;
var statearr_21364_21406 = state_21323__$1;
(statearr_21364_21406[(2)] = inst_21265);

(statearr_21364_21406[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___21376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13558__auto__,c__13636__auto___21376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13559__auto__ = null;
var cljs$core$async$mix_$_state_machine__13559__auto____0 = (function (){
var statearr_21368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21368[(0)] = cljs$core$async$mix_$_state_machine__13559__auto__);

(statearr_21368[(1)] = (1));

return statearr_21368;
});
var cljs$core$async$mix_$_state_machine__13559__auto____1 = (function (state_21323){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_21323);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e21369){if((e21369 instanceof Object)){
var ex__13562__auto__ = e21369;
var statearr_21370_21407 = state_21323;
(statearr_21370_21407[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21323);

return cljs.core.constant$keyword$recur;
} else {
throw e21369;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__21408 = state_21323;
state_21323 = G__21408;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13559__auto__ = function(state_21323){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13559__auto____1.call(this,state_21323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13559__auto____0;
cljs$core$async$mix_$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13559__auto____1;
return cljs$core$async$mix_$_state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___21376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13638__auto__ = (function (){var statearr_21371 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_21371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___21376);

return statearr_21371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___21376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj21410 = {};
return obj21410;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4326__auto__ = p;
if(and__4326__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4326__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4974__auto__ = (((p == null))?null:p);
return (function (){var or__4338__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__21414 = x__4974__auto__;
return goog.typeOf(G__21414);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4326__auto__ = p;
if(and__4326__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4326__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4974__auto__ = (((p == null))?null:p);
return (function (){var or__4338__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__21418 = x__4974__auto__;
return goog.typeOf(G__21418);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__21420 = arguments.length;
switch (G__21420) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4326__auto__ = p;
if(and__4326__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4326__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4974__auto__ = (((p == null))?null:p);
return (function (){var or__4338__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__21422 = x__4974__auto__;
return goog.typeOf(G__21422);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4326__auto__ = p;
if(and__4326__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4326__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4974__auto__ = (((p == null))?null:p);
return (function (){var or__4338__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__21424 = x__4974__auto__;
return goog.typeOf(G__21424);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__21428 = arguments.length;
switch (G__21428) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__21429 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21429) : cljs.core.atom.call(null,G__21429));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4338__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21431 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21431) : cljs.core.deref.call(null,G__21431));
})(),topic);
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4338__auto__,mults){
return (function (p1__21426_SHARP_){
if(cljs.core.truth_((function (){var G__21432 = topic;
return (p1__21426_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21426_SHARP_.cljs$core$IFn$_invoke$arity$1(G__21432) : p1__21426_SHARP_.call(null,G__21432));
})())){
return p1__21426_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21426_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__21433 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__21433) : buf_fn.call(null,G__21433));
})())));
}
});})(or__4338__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21434 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21434 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21435){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21435 = meta21435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21436,meta21435__$1){
var self__ = this;
var _21436__$1 = this;
return (new cljs.core.async.t21434(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21435__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21436){
var self__ = this;
var _21436__$1 = this;
return self__.meta21435;
});})(mults,ensure_mult))
;

cljs.core.async.t21434.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21434.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21434.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__21437 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__21437) : self__.ensure_mult.call(null,G__21437));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21434.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21438 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21438) : cljs.core.deref.call(null,G__21438));
})(),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t21434.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21439 = self__.mults;
var G__21440 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21439,G__21440) : cljs.core.reset_BANG_.call(null,G__21439,G__21440));
});})(mults,ensure_mult))
;

cljs.core.async.t21434.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21434.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21435","meta21435",-2016405718,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t21434.cljs$lang$type = true;

cljs.core.async.t21434.cljs$lang$ctorStr = "cljs.core.async/t21434";

cljs.core.async.t21434.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t21434");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21434 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t21434(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21435){
return (new cljs.core.async.t21434(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21435));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21434(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13636__auto___21564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___21564,mults,ensure_mult,p){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___21564,mults,ensure_mult,p){
return (function (state_21512){
var state_val_21513 = (state_21512[(1)]);
if((state_val_21513 === (7))){
var inst_21508 = (state_21512[(2)]);
var state_21512__$1 = state_21512;
var statearr_21514_21565 = state_21512__$1;
(statearr_21514_21565[(2)] = inst_21508);

(statearr_21514_21565[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (20))){
var state_21512__$1 = state_21512;
var statearr_21515_21566 = state_21512__$1;
(statearr_21515_21566[(2)] = null);

(statearr_21515_21566[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (1))){
var state_21512__$1 = state_21512;
var statearr_21516_21567 = state_21512__$1;
(statearr_21516_21567[(2)] = null);

(statearr_21516_21567[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (24))){
var inst_21491 = (state_21512[(7)]);
var inst_21500 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_21491);
var state_21512__$1 = state_21512;
var statearr_21517_21568 = state_21512__$1;
(statearr_21517_21568[(2)] = inst_21500);

(statearr_21517_21568[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (4))){
var inst_21443 = (state_21512[(8)]);
var inst_21443__$1 = (state_21512[(2)]);
var inst_21444 = (inst_21443__$1 == null);
var state_21512__$1 = (function (){var statearr_21518 = state_21512;
(statearr_21518[(8)] = inst_21443__$1);

return statearr_21518;
})();
if(cljs.core.truth_(inst_21444)){
var statearr_21519_21569 = state_21512__$1;
(statearr_21519_21569[(1)] = (5));

} else {
var statearr_21520_21570 = state_21512__$1;
(statearr_21520_21570[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (15))){
var inst_21485 = (state_21512[(2)]);
var state_21512__$1 = state_21512;
var statearr_21521_21571 = state_21512__$1;
(statearr_21521_21571[(2)] = inst_21485);

(statearr_21521_21571[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (21))){
var inst_21505 = (state_21512[(2)]);
var state_21512__$1 = (function (){var statearr_21522 = state_21512;
(statearr_21522[(9)] = inst_21505);

return statearr_21522;
})();
var statearr_21523_21572 = state_21512__$1;
(statearr_21523_21572[(2)] = null);

(statearr_21523_21572[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (13))){
var inst_21467 = (state_21512[(10)]);
var inst_21469 = cljs.core.chunked_seq_QMARK_(inst_21467);
var state_21512__$1 = state_21512;
if(inst_21469){
var statearr_21524_21573 = state_21512__$1;
(statearr_21524_21573[(1)] = (16));

} else {
var statearr_21525_21574 = state_21512__$1;
(statearr_21525_21574[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (22))){
var inst_21497 = (state_21512[(2)]);
var state_21512__$1 = state_21512;
if(cljs.core.truth_(inst_21497)){
var statearr_21526_21575 = state_21512__$1;
(statearr_21526_21575[(1)] = (23));

} else {
var statearr_21527_21576 = state_21512__$1;
(statearr_21527_21576[(1)] = (24));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (6))){
var inst_21493 = (state_21512[(11)]);
var inst_21443 = (state_21512[(8)]);
var inst_21491 = (state_21512[(7)]);
var inst_21491__$1 = (function (){var G__21528 = inst_21443;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__21528) : topic_fn.call(null,G__21528));
})();
var inst_21492 = (function (){var G__21529 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21529) : cljs.core.deref.call(null,G__21529));
})();
var inst_21493__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21492,inst_21491__$1);
var state_21512__$1 = (function (){var statearr_21530 = state_21512;
(statearr_21530[(11)] = inst_21493__$1);

(statearr_21530[(7)] = inst_21491__$1);

return statearr_21530;
})();
if(cljs.core.truth_(inst_21493__$1)){
var statearr_21531_21577 = state_21512__$1;
(statearr_21531_21577[(1)] = (19));

} else {
var statearr_21532_21578 = state_21512__$1;
(statearr_21532_21578[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (25))){
var inst_21502 = (state_21512[(2)]);
var state_21512__$1 = state_21512;
var statearr_21533_21579 = state_21512__$1;
(statearr_21533_21579[(2)] = inst_21502);

(statearr_21533_21579[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (17))){
var inst_21467 = (state_21512[(10)]);
var inst_21476 = cljs.core.first(inst_21467);
var inst_21477 = cljs.core.async.muxch_STAR_(inst_21476);
var inst_21478 = cljs.core.async.close_BANG_(inst_21477);
var inst_21479 = cljs.core.next(inst_21467);
var inst_21453 = inst_21479;
var inst_21454 = null;
var inst_21455 = (0);
var inst_21456 = (0);
var state_21512__$1 = (function (){var statearr_21534 = state_21512;
(statearr_21534[(12)] = inst_21454);

(statearr_21534[(13)] = inst_21456);

(statearr_21534[(14)] = inst_21453);

(statearr_21534[(15)] = inst_21478);

(statearr_21534[(16)] = inst_21455);

return statearr_21534;
})();
var statearr_21535_21580 = state_21512__$1;
(statearr_21535_21580[(2)] = null);

(statearr_21535_21580[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (3))){
var inst_21510 = (state_21512[(2)]);
var state_21512__$1 = state_21512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21512__$1,inst_21510);
} else {
if((state_val_21513 === (12))){
var inst_21487 = (state_21512[(2)]);
var state_21512__$1 = state_21512;
var statearr_21536_21581 = state_21512__$1;
(statearr_21536_21581[(2)] = inst_21487);

(statearr_21536_21581[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (2))){
var state_21512__$1 = state_21512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21512__$1,(4),ch);
} else {
if((state_val_21513 === (23))){
var state_21512__$1 = state_21512;
var statearr_21537_21582 = state_21512__$1;
(statearr_21537_21582[(2)] = null);

(statearr_21537_21582[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (19))){
var inst_21493 = (state_21512[(11)]);
var inst_21443 = (state_21512[(8)]);
var inst_21495 = cljs.core.async.muxch_STAR_(inst_21493);
var state_21512__$1 = state_21512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21512__$1,(22),inst_21495,inst_21443);
} else {
if((state_val_21513 === (11))){
var inst_21453 = (state_21512[(14)]);
var inst_21467 = (state_21512[(10)]);
var inst_21467__$1 = cljs.core.seq(inst_21453);
var state_21512__$1 = (function (){var statearr_21538 = state_21512;
(statearr_21538[(10)] = inst_21467__$1);

return statearr_21538;
})();
if(inst_21467__$1){
var statearr_21539_21583 = state_21512__$1;
(statearr_21539_21583[(1)] = (13));

} else {
var statearr_21540_21584 = state_21512__$1;
(statearr_21540_21584[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (9))){
var inst_21489 = (state_21512[(2)]);
var state_21512__$1 = state_21512;
var statearr_21541_21585 = state_21512__$1;
(statearr_21541_21585[(2)] = inst_21489);

(statearr_21541_21585[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (5))){
var inst_21450 = (function (){var G__21542 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21542) : cljs.core.deref.call(null,G__21542));
})();
var inst_21451 = cljs.core.vals(inst_21450);
var inst_21452 = cljs.core.seq(inst_21451);
var inst_21453 = inst_21452;
var inst_21454 = null;
var inst_21455 = (0);
var inst_21456 = (0);
var state_21512__$1 = (function (){var statearr_21543 = state_21512;
(statearr_21543[(12)] = inst_21454);

(statearr_21543[(13)] = inst_21456);

(statearr_21543[(14)] = inst_21453);

(statearr_21543[(16)] = inst_21455);

return statearr_21543;
})();
var statearr_21544_21586 = state_21512__$1;
(statearr_21544_21586[(2)] = null);

(statearr_21544_21586[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (14))){
var state_21512__$1 = state_21512;
var statearr_21548_21587 = state_21512__$1;
(statearr_21548_21587[(2)] = null);

(statearr_21548_21587[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (16))){
var inst_21467 = (state_21512[(10)]);
var inst_21471 = cljs.core.chunk_first(inst_21467);
var inst_21472 = cljs.core.chunk_rest(inst_21467);
var inst_21473 = cljs.core.count(inst_21471);
var inst_21453 = inst_21472;
var inst_21454 = inst_21471;
var inst_21455 = inst_21473;
var inst_21456 = (0);
var state_21512__$1 = (function (){var statearr_21549 = state_21512;
(statearr_21549[(12)] = inst_21454);

(statearr_21549[(13)] = inst_21456);

(statearr_21549[(14)] = inst_21453);

(statearr_21549[(16)] = inst_21455);

return statearr_21549;
})();
var statearr_21550_21588 = state_21512__$1;
(statearr_21550_21588[(2)] = null);

(statearr_21550_21588[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (10))){
var inst_21454 = (state_21512[(12)]);
var inst_21456 = (state_21512[(13)]);
var inst_21453 = (state_21512[(14)]);
var inst_21455 = (state_21512[(16)]);
var inst_21461 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21454,inst_21456);
var inst_21462 = cljs.core.async.muxch_STAR_(inst_21461);
var inst_21463 = cljs.core.async.close_BANG_(inst_21462);
var inst_21464 = (inst_21456 + (1));
var tmp21545 = inst_21454;
var tmp21546 = inst_21453;
var tmp21547 = inst_21455;
var inst_21453__$1 = tmp21546;
var inst_21454__$1 = tmp21545;
var inst_21455__$1 = tmp21547;
var inst_21456__$1 = inst_21464;
var state_21512__$1 = (function (){var statearr_21551 = state_21512;
(statearr_21551[(12)] = inst_21454__$1);

(statearr_21551[(13)] = inst_21456__$1);

(statearr_21551[(14)] = inst_21453__$1);

(statearr_21551[(17)] = inst_21463);

(statearr_21551[(16)] = inst_21455__$1);

return statearr_21551;
})();
var statearr_21552_21589 = state_21512__$1;
(statearr_21552_21589[(2)] = null);

(statearr_21552_21589[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (18))){
var inst_21482 = (state_21512[(2)]);
var state_21512__$1 = state_21512;
var statearr_21553_21590 = state_21512__$1;
(statearr_21553_21590[(2)] = inst_21482);

(statearr_21553_21590[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21513 === (8))){
var inst_21456 = (state_21512[(13)]);
var inst_21455 = (state_21512[(16)]);
var inst_21458 = (inst_21456 < inst_21455);
var inst_21459 = inst_21458;
var state_21512__$1 = state_21512;
if(cljs.core.truth_(inst_21459)){
var statearr_21554_21591 = state_21512__$1;
(statearr_21554_21591[(1)] = (10));

} else {
var statearr_21555_21592 = state_21512__$1;
(statearr_21555_21592[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___21564,mults,ensure_mult,p))
;
return ((function (switch__13558__auto__,c__13636__auto___21564,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13559__auto__ = null;
var cljs$core$async$state_machine__13559__auto____0 = (function (){
var statearr_21559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21559[(0)] = cljs$core$async$state_machine__13559__auto__);

(statearr_21559[(1)] = (1));

return statearr_21559;
});
var cljs$core$async$state_machine__13559__auto____1 = (function (state_21512){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_21512);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e21560){if((e21560 instanceof Object)){
var ex__13562__auto__ = e21560;
var statearr_21561_21593 = state_21512;
(statearr_21561_21593[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21512);

return cljs.core.constant$keyword$recur;
} else {
throw e21560;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__21594 = state_21512;
state_21512 = G__21594;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$state_machine__13559__auto__ = function(state_21512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13559__auto____1.call(this,state_21512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13559__auto____0;
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13559__auto____1;
return cljs$core$async$state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___21564,mults,ensure_mult,p))
})();
var state__13638__auto__ = (function (){var statearr_21562 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_21562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___21564);

return statearr_21562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___21564,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__21596 = arguments.length;
switch (G__21596) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__21599 = arguments.length;
switch (G__21599) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__21602 = arguments.length;
switch (G__21602) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__21603 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21603) : cljs.core.atom.call(null,G__21603));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13636__auto___21677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___21677,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___21677,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21642){
var state_val_21643 = (state_21642[(1)]);
if((state_val_21643 === (7))){
var state_21642__$1 = state_21642;
var statearr_21644_21678 = state_21642__$1;
(statearr_21644_21678[(2)] = null);

(statearr_21644_21678[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21643 === (1))){
var state_21642__$1 = state_21642;
var statearr_21645_21679 = state_21642__$1;
(statearr_21645_21679[(2)] = null);

(statearr_21645_21679[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21643 === (4))){
var inst_21606 = (state_21642[(7)]);
var inst_21608 = (inst_21606 < cnt);
var state_21642__$1 = state_21642;
if(cljs.core.truth_(inst_21608)){
var statearr_21646_21680 = state_21642__$1;
(statearr_21646_21680[(1)] = (6));

} else {
var statearr_21647_21681 = state_21642__$1;
(statearr_21647_21681[(1)] = (7));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21643 === (15))){
var inst_21638 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
var statearr_21648_21682 = state_21642__$1;
(statearr_21648_21682[(2)] = inst_21638);

(statearr_21648_21682[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21643 === (13))){
var inst_21631 = cljs.core.async.close_BANG_(out);
var state_21642__$1 = state_21642;
var statearr_21649_21683 = state_21642__$1;
(statearr_21649_21683[(2)] = inst_21631);

(statearr_21649_21683[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21643 === (6))){
var state_21642__$1 = state_21642;
var statearr_21650_21684 = state_21642__$1;
(statearr_21650_21684[(2)] = null);

(statearr_21650_21684[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21643 === (3))){
var inst_21640 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21642__$1,inst_21640);
} else {
if((state_val_21643 === (12))){
var inst_21628 = (state_21642[(8)]);
var inst_21628__$1 = (state_21642[(2)]);
var inst_21629 = cljs.core.some(cljs.core.nil_QMARK_,inst_21628__$1);
var state_21642__$1 = (function (){var statearr_21651 = state_21642;
(statearr_21651[(8)] = inst_21628__$1);

return statearr_21651;
})();
if(cljs.core.truth_(inst_21629)){
var statearr_21652_21685 = state_21642__$1;
(statearr_21652_21685[(1)] = (13));

} else {
var statearr_21653_21686 = state_21642__$1;
(statearr_21653_21686[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21643 === (2))){
var inst_21605 = (function (){var G__21654 = dctr;
var G__21655 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21654,G__21655) : cljs.core.reset_BANG_.call(null,G__21654,G__21655));
})();
var inst_21606 = (0);
var state_21642__$1 = (function (){var statearr_21656 = state_21642;
(statearr_21656[(7)] = inst_21606);

(statearr_21656[(9)] = inst_21605);

return statearr_21656;
})();
var statearr_21657_21687 = state_21642__$1;
(statearr_21657_21687[(2)] = null);

(statearr_21657_21687[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21643 === (11))){
var inst_21606 = (state_21642[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21642,(10),Object,null,(9));
var inst_21615 = (function (){var G__21658 = inst_21606;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__21658) : chs__$1.call(null,G__21658));
})();
var inst_21616 = (function (){var G__21659 = inst_21606;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21659) : done.call(null,G__21659));
})();
var inst_21617 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_21615,inst_21616);
var state_21642__$1 = state_21642;
var statearr_21660_21688 = state_21642__$1;
(statearr_21660_21688[(2)] = inst_21617);


cljs.core.async.impl.ioc_helpers.process_exception(state_21642__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21643 === (9))){
var inst_21606 = (state_21642[(7)]);
var inst_21619 = (state_21642[(2)]);
var inst_21620 = (inst_21606 + (1));
var inst_21606__$1 = inst_21620;
var state_21642__$1 = (function (){var statearr_21661 = state_21642;
(statearr_21661[(7)] = inst_21606__$1);

(statearr_21661[(10)] = inst_21619);

return statearr_21661;
})();
var statearr_21662_21689 = state_21642__$1;
(statearr_21662_21689[(2)] = null);

(statearr_21662_21689[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21643 === (5))){
var inst_21626 = (state_21642[(2)]);
var state_21642__$1 = (function (){var statearr_21663 = state_21642;
(statearr_21663[(11)] = inst_21626);

return statearr_21663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21642__$1,(12),dchan);
} else {
if((state_val_21643 === (14))){
var inst_21628 = (state_21642[(8)]);
var inst_21633 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_21628);
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21642__$1,(16),out,inst_21633);
} else {
if((state_val_21643 === (16))){
var inst_21635 = (state_21642[(2)]);
var state_21642__$1 = (function (){var statearr_21664 = state_21642;
(statearr_21664[(12)] = inst_21635);

return statearr_21664;
})();
var statearr_21665_21690 = state_21642__$1;
(statearr_21665_21690[(2)] = null);

(statearr_21665_21690[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21643 === (10))){
var inst_21610 = (state_21642[(2)]);
var inst_21611 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_21642__$1 = (function (){var statearr_21666 = state_21642;
(statearr_21666[(13)] = inst_21610);

return statearr_21666;
})();
var statearr_21667_21691 = state_21642__$1;
(statearr_21667_21691[(2)] = inst_21611);


cljs.core.async.impl.ioc_helpers.process_exception(state_21642__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21643 === (8))){
var inst_21624 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
var statearr_21668_21692 = state_21642__$1;
(statearr_21668_21692[(2)] = inst_21624);

(statearr_21668_21692[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___21677,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13558__auto__,c__13636__auto___21677,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13559__auto__ = null;
var cljs$core$async$state_machine__13559__auto____0 = (function (){
var statearr_21672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21672[(0)] = cljs$core$async$state_machine__13559__auto__);

(statearr_21672[(1)] = (1));

return statearr_21672;
});
var cljs$core$async$state_machine__13559__auto____1 = (function (state_21642){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_21642);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e21673){if((e21673 instanceof Object)){
var ex__13562__auto__ = e21673;
var statearr_21674_21693 = state_21642;
(statearr_21674_21693[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21642);

return cljs.core.constant$keyword$recur;
} else {
throw e21673;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__21694 = state_21642;
state_21642 = G__21694;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$state_machine__13559__auto__ = function(state_21642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13559__auto____1.call(this,state_21642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13559__auto____0;
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13559__auto____1;
return cljs$core$async$state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___21677,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13638__auto__ = (function (){var statearr_21675 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_21675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___21677);

return statearr_21675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___21677,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__21697 = arguments.length;
switch (G__21697) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13636__auto___21752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___21752,out){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___21752,out){
return (function (state_21727){
var state_val_21728 = (state_21727[(1)]);
if((state_val_21728 === (7))){
var inst_21706 = (state_21727[(7)]);
var inst_21707 = (state_21727[(8)]);
var inst_21706__$1 = (state_21727[(2)]);
var inst_21707__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21706__$1,(0),null);
var inst_21708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21706__$1,(1),null);
var inst_21709 = (inst_21707__$1 == null);
var state_21727__$1 = (function (){var statearr_21729 = state_21727;
(statearr_21729[(7)] = inst_21706__$1);

(statearr_21729[(9)] = inst_21708);

(statearr_21729[(8)] = inst_21707__$1);

return statearr_21729;
})();
if(cljs.core.truth_(inst_21709)){
var statearr_21730_21753 = state_21727__$1;
(statearr_21730_21753[(1)] = (8));

} else {
var statearr_21731_21754 = state_21727__$1;
(statearr_21731_21754[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21728 === (1))){
var inst_21698 = cljs.core.vec(chs);
var inst_21699 = inst_21698;
var state_21727__$1 = (function (){var statearr_21732 = state_21727;
(statearr_21732[(10)] = inst_21699);

return statearr_21732;
})();
var statearr_21733_21755 = state_21727__$1;
(statearr_21733_21755[(2)] = null);

(statearr_21733_21755[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21728 === (4))){
var inst_21699 = (state_21727[(10)]);
var state_21727__$1 = state_21727;
return cljs.core.async.ioc_alts_BANG_(state_21727__$1,(7),inst_21699);
} else {
if((state_val_21728 === (6))){
var inst_21723 = (state_21727[(2)]);
var state_21727__$1 = state_21727;
var statearr_21734_21756 = state_21727__$1;
(statearr_21734_21756[(2)] = inst_21723);

(statearr_21734_21756[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21728 === (3))){
var inst_21725 = (state_21727[(2)]);
var state_21727__$1 = state_21727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21727__$1,inst_21725);
} else {
if((state_val_21728 === (2))){
var inst_21699 = (state_21727[(10)]);
var inst_21701 = cljs.core.count(inst_21699);
var inst_21702 = (inst_21701 > (0));
var state_21727__$1 = state_21727;
if(cljs.core.truth_(inst_21702)){
var statearr_21736_21757 = state_21727__$1;
(statearr_21736_21757[(1)] = (4));

} else {
var statearr_21737_21758 = state_21727__$1;
(statearr_21737_21758[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21728 === (11))){
var inst_21699 = (state_21727[(10)]);
var inst_21716 = (state_21727[(2)]);
var tmp21735 = inst_21699;
var inst_21699__$1 = tmp21735;
var state_21727__$1 = (function (){var statearr_21738 = state_21727;
(statearr_21738[(11)] = inst_21716);

(statearr_21738[(10)] = inst_21699__$1);

return statearr_21738;
})();
var statearr_21739_21759 = state_21727__$1;
(statearr_21739_21759[(2)] = null);

(statearr_21739_21759[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21728 === (9))){
var inst_21707 = (state_21727[(8)]);
var state_21727__$1 = state_21727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21727__$1,(11),out,inst_21707);
} else {
if((state_val_21728 === (5))){
var inst_21721 = cljs.core.async.close_BANG_(out);
var state_21727__$1 = state_21727;
var statearr_21740_21760 = state_21727__$1;
(statearr_21740_21760[(2)] = inst_21721);

(statearr_21740_21760[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21728 === (10))){
var inst_21719 = (state_21727[(2)]);
var state_21727__$1 = state_21727;
var statearr_21741_21761 = state_21727__$1;
(statearr_21741_21761[(2)] = inst_21719);

(statearr_21741_21761[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21728 === (8))){
var inst_21706 = (state_21727[(7)]);
var inst_21699 = (state_21727[(10)]);
var inst_21708 = (state_21727[(9)]);
var inst_21707 = (state_21727[(8)]);
var inst_21711 = (function (){var cs = inst_21699;
var vec__21704 = inst_21706;
var v = inst_21707;
var c = inst_21708;
return ((function (cs,vec__21704,v,c,inst_21706,inst_21699,inst_21708,inst_21707,state_val_21728,c__13636__auto___21752,out){
return (function (p1__21695_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__21695_SHARP_);
});
;})(cs,vec__21704,v,c,inst_21706,inst_21699,inst_21708,inst_21707,state_val_21728,c__13636__auto___21752,out))
})();
var inst_21712 = cljs.core.filterv(inst_21711,inst_21699);
var inst_21699__$1 = inst_21712;
var state_21727__$1 = (function (){var statearr_21742 = state_21727;
(statearr_21742[(10)] = inst_21699__$1);

return statearr_21742;
})();
var statearr_21743_21762 = state_21727__$1;
(statearr_21743_21762[(2)] = null);

(statearr_21743_21762[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___21752,out))
;
return ((function (switch__13558__auto__,c__13636__auto___21752,out){
return (function() {
var cljs$core$async$state_machine__13559__auto__ = null;
var cljs$core$async$state_machine__13559__auto____0 = (function (){
var statearr_21747 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21747[(0)] = cljs$core$async$state_machine__13559__auto__);

(statearr_21747[(1)] = (1));

return statearr_21747;
});
var cljs$core$async$state_machine__13559__auto____1 = (function (state_21727){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_21727);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e21748){if((e21748 instanceof Object)){
var ex__13562__auto__ = e21748;
var statearr_21749_21763 = state_21727;
(statearr_21749_21763[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21727);

return cljs.core.constant$keyword$recur;
} else {
throw e21748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__21764 = state_21727;
state_21727 = G__21764;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$state_machine__13559__auto__ = function(state_21727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13559__auto____1.call(this,state_21727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13559__auto____0;
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13559__auto____1;
return cljs$core$async$state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___21752,out))
})();
var state__13638__auto__ = (function (){var statearr_21750 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_21750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___21752);

return statearr_21750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___21752,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__21766 = arguments.length;
switch (G__21766) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13636__auto___21814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___21814,out){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___21814,out){
return (function (state_21790){
var state_val_21791 = (state_21790[(1)]);
if((state_val_21791 === (7))){
var inst_21772 = (state_21790[(7)]);
var inst_21772__$1 = (state_21790[(2)]);
var inst_21773 = (inst_21772__$1 == null);
var inst_21774 = cljs.core.not(inst_21773);
var state_21790__$1 = (function (){var statearr_21792 = state_21790;
(statearr_21792[(7)] = inst_21772__$1);

return statearr_21792;
})();
if(inst_21774){
var statearr_21793_21815 = state_21790__$1;
(statearr_21793_21815[(1)] = (8));

} else {
var statearr_21794_21816 = state_21790__$1;
(statearr_21794_21816[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21791 === (1))){
var inst_21767 = (0);
var state_21790__$1 = (function (){var statearr_21795 = state_21790;
(statearr_21795[(8)] = inst_21767);

return statearr_21795;
})();
var statearr_21796_21817 = state_21790__$1;
(statearr_21796_21817[(2)] = null);

(statearr_21796_21817[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21791 === (4))){
var state_21790__$1 = state_21790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21790__$1,(7),ch);
} else {
if((state_val_21791 === (6))){
var inst_21785 = (state_21790[(2)]);
var state_21790__$1 = state_21790;
var statearr_21797_21818 = state_21790__$1;
(statearr_21797_21818[(2)] = inst_21785);

(statearr_21797_21818[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21791 === (3))){
var inst_21787 = (state_21790[(2)]);
var inst_21788 = cljs.core.async.close_BANG_(out);
var state_21790__$1 = (function (){var statearr_21798 = state_21790;
(statearr_21798[(9)] = inst_21787);

return statearr_21798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21790__$1,inst_21788);
} else {
if((state_val_21791 === (2))){
var inst_21767 = (state_21790[(8)]);
var inst_21769 = (inst_21767 < n);
var state_21790__$1 = state_21790;
if(cljs.core.truth_(inst_21769)){
var statearr_21799_21819 = state_21790__$1;
(statearr_21799_21819[(1)] = (4));

} else {
var statearr_21800_21820 = state_21790__$1;
(statearr_21800_21820[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21791 === (11))){
var inst_21767 = (state_21790[(8)]);
var inst_21777 = (state_21790[(2)]);
var inst_21778 = (inst_21767 + (1));
var inst_21767__$1 = inst_21778;
var state_21790__$1 = (function (){var statearr_21801 = state_21790;
(statearr_21801[(8)] = inst_21767__$1);

(statearr_21801[(10)] = inst_21777);

return statearr_21801;
})();
var statearr_21802_21821 = state_21790__$1;
(statearr_21802_21821[(2)] = null);

(statearr_21802_21821[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21791 === (9))){
var state_21790__$1 = state_21790;
var statearr_21803_21822 = state_21790__$1;
(statearr_21803_21822[(2)] = null);

(statearr_21803_21822[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21791 === (5))){
var state_21790__$1 = state_21790;
var statearr_21804_21823 = state_21790__$1;
(statearr_21804_21823[(2)] = null);

(statearr_21804_21823[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21791 === (10))){
var inst_21782 = (state_21790[(2)]);
var state_21790__$1 = state_21790;
var statearr_21805_21824 = state_21790__$1;
(statearr_21805_21824[(2)] = inst_21782);

(statearr_21805_21824[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21791 === (8))){
var inst_21772 = (state_21790[(7)]);
var state_21790__$1 = state_21790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21790__$1,(11),out,inst_21772);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___21814,out))
;
return ((function (switch__13558__auto__,c__13636__auto___21814,out){
return (function() {
var cljs$core$async$state_machine__13559__auto__ = null;
var cljs$core$async$state_machine__13559__auto____0 = (function (){
var statearr_21809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21809[(0)] = cljs$core$async$state_machine__13559__auto__);

(statearr_21809[(1)] = (1));

return statearr_21809;
});
var cljs$core$async$state_machine__13559__auto____1 = (function (state_21790){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_21790);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e21810){if((e21810 instanceof Object)){
var ex__13562__auto__ = e21810;
var statearr_21811_21825 = state_21790;
(statearr_21811_21825[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21790);

return cljs.core.constant$keyword$recur;
} else {
throw e21810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__21826 = state_21790;
state_21790 = G__21826;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$state_machine__13559__auto__ = function(state_21790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13559__auto____1.call(this,state_21790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13559__auto____0;
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13559__auto____1;
return cljs$core$async$state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___21814,out))
})();
var state__13638__auto__ = (function (){var statearr_21812 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_21812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___21814);

return statearr_21812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___21814,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t21839 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21839 = (function (map_LT_,f,ch,meta21840){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21840 = meta21840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21841,meta21840__$1){
var self__ = this;
var _21841__$1 = this;
return (new cljs.core.async.t21839(self__.map_LT_,self__.f,self__.ch,meta21840__$1));
});

cljs.core.async.t21839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21841){
var self__ = this;
var _21841__$1 = this;
return self__.meta21840;
});

cljs.core.async.t21839.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21839.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t21839.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t21839.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21839.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t21842 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21842 = (function (map_LT_,f,ch,meta21840,_,fn1,meta21843){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21840 = meta21840;
this._ = _;
this.fn1 = fn1;
this.meta21843 = meta21843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21844,meta21843__$1){
var self__ = this;
var _21844__$1 = this;
return (new cljs.core.async.t21842(self__.map_LT_,self__.f,self__.ch,self__.meta21840,self__._,self__.fn1,meta21843__$1));
});})(___$1))
;

cljs.core.async.t21842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21844){
var self__ = this;
var _21844__$1 = this;
return self__.meta21843;
});})(___$1))
;

cljs.core.async.t21842.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t21842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21827_SHARP_){
var G__21845 = (((p1__21827_SHARP_ == null))?null:(function (){var G__21846 = p1__21827_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21846) : self__.f.call(null,G__21846));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__21845) : f1.call(null,G__21845));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21842.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21840","meta21840",-532738013,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21843","meta21843",675811928,null)], null);
});})(___$1))
;

cljs.core.async.t21842.cljs$lang$type = true;

cljs.core.async.t21842.cljs$lang$ctorStr = "cljs.core.async/t21842";

cljs.core.async.t21842.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t21842");
});})(___$1))
;

cljs.core.async.__GT_t21842 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t21842(map_LT___$1,f__$1,ch__$1,meta21840__$1,___$2,fn1__$1,meta21843){
return (new cljs.core.async.t21842(map_LT___$1,f__$1,ch__$1,meta21840__$1,___$2,fn1__$1,meta21843));
});})(___$1))
;

}

return (new cljs.core.async.t21842(self__.map_LT_,self__.f,self__.ch,self__.meta21840,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4326__auto__ = ret;
if(cljs.core.truth_(and__4326__auto__)){
return !(((function (){var G__21847 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21847) : cljs.core.deref.call(null,G__21847));
})() == null));
} else {
return and__4326__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__21848 = (function (){var G__21849 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21849) : cljs.core.deref.call(null,G__21849));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21848) : self__.f.call(null,G__21848));
})());
} else {
return ret;
}
});

cljs.core.async.t21839.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21839.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t21839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21840","meta21840",-532738013,null)], null);
});

cljs.core.async.t21839.cljs$lang$type = true;

cljs.core.async.t21839.cljs$lang$ctorStr = "cljs.core.async/t21839";

cljs.core.async.t21839.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t21839");
});

cljs.core.async.__GT_t21839 = (function cljs$core$async$map_LT__$___GT_t21839(map_LT___$1,f__$1,ch__$1,meta21840){
return (new cljs.core.async.t21839(map_LT___$1,f__$1,ch__$1,meta21840));
});

}

return (new cljs.core.async.t21839(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t21854 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21854 = (function (map_GT_,f,ch,meta21855){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21855 = meta21855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21856,meta21855__$1){
var self__ = this;
var _21856__$1 = this;
return (new cljs.core.async.t21854(self__.map_GT_,self__.f,self__.ch,meta21855__$1));
});

cljs.core.async.t21854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21856){
var self__ = this;
var _21856__$1 = this;
return self__.meta21855;
});

cljs.core.async.t21854.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t21854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t21854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__21857 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21857) : self__.f.call(null,G__21857));
})(),fn1);
});

cljs.core.async.t21854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21855","meta21855",1070256206,null)], null);
});

cljs.core.async.t21854.cljs$lang$type = true;

cljs.core.async.t21854.cljs$lang$ctorStr = "cljs.core.async/t21854";

cljs.core.async.t21854.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t21854");
});

cljs.core.async.__GT_t21854 = (function cljs$core$async$map_GT__$___GT_t21854(map_GT___$1,f__$1,ch__$1,meta21855){
return (new cljs.core.async.t21854(map_GT___$1,f__$1,ch__$1,meta21855));
});

}

return (new cljs.core.async.t21854(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t21862 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21862 = (function (filter_GT_,p,ch,meta21863){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21863 = meta21863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21864,meta21863__$1){
var self__ = this;
var _21864__$1 = this;
return (new cljs.core.async.t21862(self__.filter_GT_,self__.p,self__.ch,meta21863__$1));
});

cljs.core.async.t21862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21864){
var self__ = this;
var _21864__$1 = this;
return self__.meta21863;
});

cljs.core.async.t21862.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21862.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t21862.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t21862.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21862.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t21862.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21862.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__21865 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__21865) : self__.p.call(null,G__21865));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t21862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21863","meta21863",-1157073369,null)], null);
});

cljs.core.async.t21862.cljs$lang$type = true;

cljs.core.async.t21862.cljs$lang$ctorStr = "cljs.core.async/t21862";

cljs.core.async.t21862.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t21862");
});

cljs.core.async.__GT_t21862 = (function cljs$core$async$filter_GT__$___GT_t21862(filter_GT___$1,p__$1,ch__$1,meta21863){
return (new cljs.core.async.t21862(filter_GT___$1,p__$1,ch__$1,meta21863));
});

}

return (new cljs.core.async.t21862(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__21867 = arguments.length;
switch (G__21867) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13636__auto___21911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___21911,out){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___21911,out){
return (function (state_21888){
var state_val_21889 = (state_21888[(1)]);
if((state_val_21889 === (7))){
var inst_21884 = (state_21888[(2)]);
var state_21888__$1 = state_21888;
var statearr_21890_21912 = state_21888__$1;
(statearr_21890_21912[(2)] = inst_21884);

(statearr_21890_21912[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21889 === (1))){
var state_21888__$1 = state_21888;
var statearr_21891_21913 = state_21888__$1;
(statearr_21891_21913[(2)] = null);

(statearr_21891_21913[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21889 === (4))){
var inst_21870 = (state_21888[(7)]);
var inst_21870__$1 = (state_21888[(2)]);
var inst_21871 = (inst_21870__$1 == null);
var state_21888__$1 = (function (){var statearr_21892 = state_21888;
(statearr_21892[(7)] = inst_21870__$1);

return statearr_21892;
})();
if(cljs.core.truth_(inst_21871)){
var statearr_21893_21914 = state_21888__$1;
(statearr_21893_21914[(1)] = (5));

} else {
var statearr_21894_21915 = state_21888__$1;
(statearr_21894_21915[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21889 === (6))){
var inst_21870 = (state_21888[(7)]);
var inst_21875 = (function (){var G__21895 = inst_21870;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__21895) : p.call(null,G__21895));
})();
var state_21888__$1 = state_21888;
if(cljs.core.truth_(inst_21875)){
var statearr_21896_21916 = state_21888__$1;
(statearr_21896_21916[(1)] = (8));

} else {
var statearr_21897_21917 = state_21888__$1;
(statearr_21897_21917[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21889 === (3))){
var inst_21886 = (state_21888[(2)]);
var state_21888__$1 = state_21888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21888__$1,inst_21886);
} else {
if((state_val_21889 === (2))){
var state_21888__$1 = state_21888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21888__$1,(4),ch);
} else {
if((state_val_21889 === (11))){
var inst_21878 = (state_21888[(2)]);
var state_21888__$1 = state_21888;
var statearr_21898_21918 = state_21888__$1;
(statearr_21898_21918[(2)] = inst_21878);

(statearr_21898_21918[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21889 === (9))){
var state_21888__$1 = state_21888;
var statearr_21899_21919 = state_21888__$1;
(statearr_21899_21919[(2)] = null);

(statearr_21899_21919[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21889 === (5))){
var inst_21873 = cljs.core.async.close_BANG_(out);
var state_21888__$1 = state_21888;
var statearr_21900_21920 = state_21888__$1;
(statearr_21900_21920[(2)] = inst_21873);

(statearr_21900_21920[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21889 === (10))){
var inst_21881 = (state_21888[(2)]);
var state_21888__$1 = (function (){var statearr_21901 = state_21888;
(statearr_21901[(8)] = inst_21881);

return statearr_21901;
})();
var statearr_21902_21921 = state_21888__$1;
(statearr_21902_21921[(2)] = null);

(statearr_21902_21921[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21889 === (8))){
var inst_21870 = (state_21888[(7)]);
var state_21888__$1 = state_21888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21888__$1,(11),out,inst_21870);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___21911,out))
;
return ((function (switch__13558__auto__,c__13636__auto___21911,out){
return (function() {
var cljs$core$async$state_machine__13559__auto__ = null;
var cljs$core$async$state_machine__13559__auto____0 = (function (){
var statearr_21906 = [null,null,null,null,null,null,null,null,null];
(statearr_21906[(0)] = cljs$core$async$state_machine__13559__auto__);

(statearr_21906[(1)] = (1));

return statearr_21906;
});
var cljs$core$async$state_machine__13559__auto____1 = (function (state_21888){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_21888);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e21907){if((e21907 instanceof Object)){
var ex__13562__auto__ = e21907;
var statearr_21908_21922 = state_21888;
(statearr_21908_21922[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21888);

return cljs.core.constant$keyword$recur;
} else {
throw e21907;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__21923 = state_21888;
state_21888 = G__21923;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$state_machine__13559__auto__ = function(state_21888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13559__auto____1.call(this,state_21888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13559__auto____0;
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13559__auto____1;
return cljs$core$async$state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___21911,out))
})();
var state__13638__auto__ = (function (){var statearr_21909 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_21909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___21911);

return statearr_21909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___21911,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__21925 = arguments.length;
switch (G__21925) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto__){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto__){
return (function (state_22093){
var state_val_22094 = (state_22093[(1)]);
if((state_val_22094 === (7))){
var inst_22089 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22095_22137 = state_22093__$1;
(statearr_22095_22137[(2)] = inst_22089);

(statearr_22095_22137[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (20))){
var inst_22059 = (state_22093[(7)]);
var inst_22070 = (state_22093[(2)]);
var inst_22071 = cljs.core.next(inst_22059);
var inst_22045 = inst_22071;
var inst_22046 = null;
var inst_22047 = (0);
var inst_22048 = (0);
var state_22093__$1 = (function (){var statearr_22096 = state_22093;
(statearr_22096[(8)] = inst_22047);

(statearr_22096[(9)] = inst_22046);

(statearr_22096[(10)] = inst_22070);

(statearr_22096[(11)] = inst_22048);

(statearr_22096[(12)] = inst_22045);

return statearr_22096;
})();
var statearr_22097_22138 = state_22093__$1;
(statearr_22097_22138[(2)] = null);

(statearr_22097_22138[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (1))){
var state_22093__$1 = state_22093;
var statearr_22098_22139 = state_22093__$1;
(statearr_22098_22139[(2)] = null);

(statearr_22098_22139[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (4))){
var inst_22034 = (state_22093[(13)]);
var inst_22034__$1 = (state_22093[(2)]);
var inst_22035 = (inst_22034__$1 == null);
var state_22093__$1 = (function (){var statearr_22099 = state_22093;
(statearr_22099[(13)] = inst_22034__$1);

return statearr_22099;
})();
if(cljs.core.truth_(inst_22035)){
var statearr_22100_22140 = state_22093__$1;
(statearr_22100_22140[(1)] = (5));

} else {
var statearr_22101_22141 = state_22093__$1;
(statearr_22101_22141[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (15))){
var state_22093__$1 = state_22093;
var statearr_22105_22142 = state_22093__$1;
(statearr_22105_22142[(2)] = null);

(statearr_22105_22142[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (21))){
var state_22093__$1 = state_22093;
var statearr_22106_22143 = state_22093__$1;
(statearr_22106_22143[(2)] = null);

(statearr_22106_22143[(1)] = (23));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (13))){
var inst_22047 = (state_22093[(8)]);
var inst_22046 = (state_22093[(9)]);
var inst_22048 = (state_22093[(11)]);
var inst_22045 = (state_22093[(12)]);
var inst_22055 = (state_22093[(2)]);
var inst_22056 = (inst_22048 + (1));
var tmp22102 = inst_22047;
var tmp22103 = inst_22046;
var tmp22104 = inst_22045;
var inst_22045__$1 = tmp22104;
var inst_22046__$1 = tmp22103;
var inst_22047__$1 = tmp22102;
var inst_22048__$1 = inst_22056;
var state_22093__$1 = (function (){var statearr_22107 = state_22093;
(statearr_22107[(14)] = inst_22055);

(statearr_22107[(8)] = inst_22047__$1);

(statearr_22107[(9)] = inst_22046__$1);

(statearr_22107[(11)] = inst_22048__$1);

(statearr_22107[(12)] = inst_22045__$1);

return statearr_22107;
})();
var statearr_22108_22144 = state_22093__$1;
(statearr_22108_22144[(2)] = null);

(statearr_22108_22144[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (22))){
var state_22093__$1 = state_22093;
var statearr_22109_22145 = state_22093__$1;
(statearr_22109_22145[(2)] = null);

(statearr_22109_22145[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (6))){
var inst_22034 = (state_22093[(13)]);
var inst_22043 = (function (){var G__22110 = inst_22034;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22110) : f.call(null,G__22110));
})();
var inst_22044 = cljs.core.seq(inst_22043);
var inst_22045 = inst_22044;
var inst_22046 = null;
var inst_22047 = (0);
var inst_22048 = (0);
var state_22093__$1 = (function (){var statearr_22111 = state_22093;
(statearr_22111[(8)] = inst_22047);

(statearr_22111[(9)] = inst_22046);

(statearr_22111[(11)] = inst_22048);

(statearr_22111[(12)] = inst_22045);

return statearr_22111;
})();
var statearr_22112_22146 = state_22093__$1;
(statearr_22112_22146[(2)] = null);

(statearr_22112_22146[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (17))){
var inst_22059 = (state_22093[(7)]);
var inst_22063 = cljs.core.chunk_first(inst_22059);
var inst_22064 = cljs.core.chunk_rest(inst_22059);
var inst_22065 = cljs.core.count(inst_22063);
var inst_22045 = inst_22064;
var inst_22046 = inst_22063;
var inst_22047 = inst_22065;
var inst_22048 = (0);
var state_22093__$1 = (function (){var statearr_22113 = state_22093;
(statearr_22113[(8)] = inst_22047);

(statearr_22113[(9)] = inst_22046);

(statearr_22113[(11)] = inst_22048);

(statearr_22113[(12)] = inst_22045);

return statearr_22113;
})();
var statearr_22114_22147 = state_22093__$1;
(statearr_22114_22147[(2)] = null);

(statearr_22114_22147[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (3))){
var inst_22091 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22093__$1,inst_22091);
} else {
if((state_val_22094 === (12))){
var inst_22079 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22115_22148 = state_22093__$1;
(statearr_22115_22148[(2)] = inst_22079);

(statearr_22115_22148[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (2))){
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22093__$1,(4),in$);
} else {
if((state_val_22094 === (23))){
var inst_22087 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22116_22149 = state_22093__$1;
(statearr_22116_22149[(2)] = inst_22087);

(statearr_22116_22149[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (19))){
var inst_22074 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22117_22150 = state_22093__$1;
(statearr_22117_22150[(2)] = inst_22074);

(statearr_22117_22150[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (11))){
var inst_22045 = (state_22093[(12)]);
var inst_22059 = (state_22093[(7)]);
var inst_22059__$1 = cljs.core.seq(inst_22045);
var state_22093__$1 = (function (){var statearr_22118 = state_22093;
(statearr_22118[(7)] = inst_22059__$1);

return statearr_22118;
})();
if(inst_22059__$1){
var statearr_22119_22151 = state_22093__$1;
(statearr_22119_22151[(1)] = (14));

} else {
var statearr_22120_22152 = state_22093__$1;
(statearr_22120_22152[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (9))){
var inst_22081 = (state_22093[(2)]);
var inst_22082 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22093__$1 = (function (){var statearr_22121 = state_22093;
(statearr_22121[(15)] = inst_22081);

return statearr_22121;
})();
if(cljs.core.truth_(inst_22082)){
var statearr_22122_22153 = state_22093__$1;
(statearr_22122_22153[(1)] = (21));

} else {
var statearr_22123_22154 = state_22093__$1;
(statearr_22123_22154[(1)] = (22));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (5))){
var inst_22037 = cljs.core.async.close_BANG_(out);
var state_22093__$1 = state_22093;
var statearr_22124_22155 = state_22093__$1;
(statearr_22124_22155[(2)] = inst_22037);

(statearr_22124_22155[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (14))){
var inst_22059 = (state_22093[(7)]);
var inst_22061 = cljs.core.chunked_seq_QMARK_(inst_22059);
var state_22093__$1 = state_22093;
if(inst_22061){
var statearr_22125_22156 = state_22093__$1;
(statearr_22125_22156[(1)] = (17));

} else {
var statearr_22126_22157 = state_22093__$1;
(statearr_22126_22157[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (16))){
var inst_22077 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22127_22158 = state_22093__$1;
(statearr_22127_22158[(2)] = inst_22077);

(statearr_22127_22158[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22094 === (10))){
var inst_22046 = (state_22093[(9)]);
var inst_22048 = (state_22093[(11)]);
var inst_22053 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22046,inst_22048);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22093__$1,(13),out,inst_22053);
} else {
if((state_val_22094 === (18))){
var inst_22059 = (state_22093[(7)]);
var inst_22068 = cljs.core.first(inst_22059);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22093__$1,(20),out,inst_22068);
} else {
if((state_val_22094 === (8))){
var inst_22047 = (state_22093[(8)]);
var inst_22048 = (state_22093[(11)]);
var inst_22050 = (inst_22048 < inst_22047);
var inst_22051 = inst_22050;
var state_22093__$1 = state_22093;
if(cljs.core.truth_(inst_22051)){
var statearr_22128_22159 = state_22093__$1;
(statearr_22128_22159[(1)] = (10));

} else {
var statearr_22129_22160 = state_22093__$1;
(statearr_22129_22160[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto__))
;
return ((function (switch__13558__auto__,c__13636__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13559__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13559__auto____0 = (function (){
var statearr_22133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22133[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13559__auto__);

(statearr_22133[(1)] = (1));

return statearr_22133;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13559__auto____1 = (function (state_22093){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_22093);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e22134){if((e22134 instanceof Object)){
var ex__13562__auto__ = e22134;
var statearr_22135_22161 = state_22093;
(statearr_22135_22161[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22093);

return cljs.core.constant$keyword$recur;
} else {
throw e22134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__22162 = state_22093;
state_22093 = G__22162;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13559__auto__ = function(state_22093){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13559__auto____1.call(this,state_22093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13559__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13559__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto__))
})();
var state__13638__auto__ = (function (){var statearr_22136 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_22136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto__);

return statearr_22136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto__))
);

return c__13636__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__22164 = arguments.length;
switch (G__22164) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__22167 = arguments.length;
switch (G__22167) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__22170 = arguments.length;
switch (G__22170) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13636__auto___22220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___22220,out){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___22220,out){
return (function (state_22194){
var state_val_22195 = (state_22194[(1)]);
if((state_val_22195 === (7))){
var inst_22189 = (state_22194[(2)]);
var state_22194__$1 = state_22194;
var statearr_22196_22221 = state_22194__$1;
(statearr_22196_22221[(2)] = inst_22189);

(statearr_22196_22221[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22195 === (1))){
var inst_22171 = null;
var state_22194__$1 = (function (){var statearr_22197 = state_22194;
(statearr_22197[(7)] = inst_22171);

return statearr_22197;
})();
var statearr_22198_22222 = state_22194__$1;
(statearr_22198_22222[(2)] = null);

(statearr_22198_22222[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22195 === (4))){
var inst_22174 = (state_22194[(8)]);
var inst_22174__$1 = (state_22194[(2)]);
var inst_22175 = (inst_22174__$1 == null);
var inst_22176 = cljs.core.not(inst_22175);
var state_22194__$1 = (function (){var statearr_22199 = state_22194;
(statearr_22199[(8)] = inst_22174__$1);

return statearr_22199;
})();
if(inst_22176){
var statearr_22200_22223 = state_22194__$1;
(statearr_22200_22223[(1)] = (5));

} else {
var statearr_22201_22224 = state_22194__$1;
(statearr_22201_22224[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22195 === (6))){
var state_22194__$1 = state_22194;
var statearr_22202_22225 = state_22194__$1;
(statearr_22202_22225[(2)] = null);

(statearr_22202_22225[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22195 === (3))){
var inst_22191 = (state_22194[(2)]);
var inst_22192 = cljs.core.async.close_BANG_(out);
var state_22194__$1 = (function (){var statearr_22203 = state_22194;
(statearr_22203[(9)] = inst_22191);

return statearr_22203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22194__$1,inst_22192);
} else {
if((state_val_22195 === (2))){
var state_22194__$1 = state_22194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22194__$1,(4),ch);
} else {
if((state_val_22195 === (11))){
var inst_22174 = (state_22194[(8)]);
var inst_22183 = (state_22194[(2)]);
var inst_22171 = inst_22174;
var state_22194__$1 = (function (){var statearr_22204 = state_22194;
(statearr_22204[(7)] = inst_22171);

(statearr_22204[(10)] = inst_22183);

return statearr_22204;
})();
var statearr_22205_22226 = state_22194__$1;
(statearr_22205_22226[(2)] = null);

(statearr_22205_22226[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22195 === (9))){
var inst_22174 = (state_22194[(8)]);
var state_22194__$1 = state_22194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22194__$1,(11),out,inst_22174);
} else {
if((state_val_22195 === (5))){
var inst_22171 = (state_22194[(7)]);
var inst_22174 = (state_22194[(8)]);
var inst_22178 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22174,inst_22171);
var state_22194__$1 = state_22194;
if(inst_22178){
var statearr_22207_22227 = state_22194__$1;
(statearr_22207_22227[(1)] = (8));

} else {
var statearr_22208_22228 = state_22194__$1;
(statearr_22208_22228[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22195 === (10))){
var inst_22186 = (state_22194[(2)]);
var state_22194__$1 = state_22194;
var statearr_22209_22229 = state_22194__$1;
(statearr_22209_22229[(2)] = inst_22186);

(statearr_22209_22229[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22195 === (8))){
var inst_22171 = (state_22194[(7)]);
var tmp22206 = inst_22171;
var inst_22171__$1 = tmp22206;
var state_22194__$1 = (function (){var statearr_22210 = state_22194;
(statearr_22210[(7)] = inst_22171__$1);

return statearr_22210;
})();
var statearr_22211_22230 = state_22194__$1;
(statearr_22211_22230[(2)] = null);

(statearr_22211_22230[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___22220,out))
;
return ((function (switch__13558__auto__,c__13636__auto___22220,out){
return (function() {
var cljs$core$async$state_machine__13559__auto__ = null;
var cljs$core$async$state_machine__13559__auto____0 = (function (){
var statearr_22215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22215[(0)] = cljs$core$async$state_machine__13559__auto__);

(statearr_22215[(1)] = (1));

return statearr_22215;
});
var cljs$core$async$state_machine__13559__auto____1 = (function (state_22194){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_22194);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e22216){if((e22216 instanceof Object)){
var ex__13562__auto__ = e22216;
var statearr_22217_22231 = state_22194;
(statearr_22217_22231[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22194);

return cljs.core.constant$keyword$recur;
} else {
throw e22216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__22232 = state_22194;
state_22194 = G__22232;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$state_machine__13559__auto__ = function(state_22194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13559__auto____1.call(this,state_22194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13559__auto____0;
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13559__auto____1;
return cljs$core$async$state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___22220,out))
})();
var state__13638__auto__ = (function (){var statearr_22218 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_22218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___22220);

return statearr_22218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___22220,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__22234 = arguments.length;
switch (G__22234) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13636__auto___22303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___22303,out){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___22303,out){
return (function (state_22272){
var state_val_22273 = (state_22272[(1)]);
if((state_val_22273 === (7))){
var inst_22268 = (state_22272[(2)]);
var state_22272__$1 = state_22272;
var statearr_22274_22304 = state_22272__$1;
(statearr_22274_22304[(2)] = inst_22268);

(statearr_22274_22304[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22273 === (1))){
var inst_22235 = (new Array(n));
var inst_22236 = inst_22235;
var inst_22237 = (0);
var state_22272__$1 = (function (){var statearr_22275 = state_22272;
(statearr_22275[(7)] = inst_22237);

(statearr_22275[(8)] = inst_22236);

return statearr_22275;
})();
var statearr_22276_22305 = state_22272__$1;
(statearr_22276_22305[(2)] = null);

(statearr_22276_22305[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22273 === (4))){
var inst_22240 = (state_22272[(9)]);
var inst_22240__$1 = (state_22272[(2)]);
var inst_22241 = (inst_22240__$1 == null);
var inst_22242 = cljs.core.not(inst_22241);
var state_22272__$1 = (function (){var statearr_22277 = state_22272;
(statearr_22277[(9)] = inst_22240__$1);

return statearr_22277;
})();
if(inst_22242){
var statearr_22278_22306 = state_22272__$1;
(statearr_22278_22306[(1)] = (5));

} else {
var statearr_22279_22307 = state_22272__$1;
(statearr_22279_22307[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22273 === (15))){
var inst_22262 = (state_22272[(2)]);
var state_22272__$1 = state_22272;
var statearr_22280_22308 = state_22272__$1;
(statearr_22280_22308[(2)] = inst_22262);

(statearr_22280_22308[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22273 === (13))){
var state_22272__$1 = state_22272;
var statearr_22281_22309 = state_22272__$1;
(statearr_22281_22309[(2)] = null);

(statearr_22281_22309[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22273 === (6))){
var inst_22237 = (state_22272[(7)]);
var inst_22258 = (inst_22237 > (0));
var state_22272__$1 = state_22272;
if(cljs.core.truth_(inst_22258)){
var statearr_22282_22310 = state_22272__$1;
(statearr_22282_22310[(1)] = (12));

} else {
var statearr_22283_22311 = state_22272__$1;
(statearr_22283_22311[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22273 === (3))){
var inst_22270 = (state_22272[(2)]);
var state_22272__$1 = state_22272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22272__$1,inst_22270);
} else {
if((state_val_22273 === (12))){
var inst_22236 = (state_22272[(8)]);
var inst_22260 = cljs.core.vec(inst_22236);
var state_22272__$1 = state_22272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22272__$1,(15),out,inst_22260);
} else {
if((state_val_22273 === (2))){
var state_22272__$1 = state_22272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22272__$1,(4),ch);
} else {
if((state_val_22273 === (11))){
var inst_22252 = (state_22272[(2)]);
var inst_22253 = (new Array(n));
var inst_22236 = inst_22253;
var inst_22237 = (0);
var state_22272__$1 = (function (){var statearr_22284 = state_22272;
(statearr_22284[(10)] = inst_22252);

(statearr_22284[(7)] = inst_22237);

(statearr_22284[(8)] = inst_22236);

return statearr_22284;
})();
var statearr_22285_22312 = state_22272__$1;
(statearr_22285_22312[(2)] = null);

(statearr_22285_22312[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22273 === (9))){
var inst_22236 = (state_22272[(8)]);
var inst_22250 = cljs.core.vec(inst_22236);
var state_22272__$1 = state_22272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22272__$1,(11),out,inst_22250);
} else {
if((state_val_22273 === (5))){
var inst_22245 = (state_22272[(11)]);
var inst_22237 = (state_22272[(7)]);
var inst_22236 = (state_22272[(8)]);
var inst_22240 = (state_22272[(9)]);
var inst_22244 = (inst_22236[inst_22237] = inst_22240);
var inst_22245__$1 = (inst_22237 + (1));
var inst_22246 = (inst_22245__$1 < n);
var state_22272__$1 = (function (){var statearr_22286 = state_22272;
(statearr_22286[(11)] = inst_22245__$1);

(statearr_22286[(12)] = inst_22244);

return statearr_22286;
})();
if(cljs.core.truth_(inst_22246)){
var statearr_22287_22313 = state_22272__$1;
(statearr_22287_22313[(1)] = (8));

} else {
var statearr_22288_22314 = state_22272__$1;
(statearr_22288_22314[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22273 === (14))){
var inst_22265 = (state_22272[(2)]);
var inst_22266 = cljs.core.async.close_BANG_(out);
var state_22272__$1 = (function (){var statearr_22290 = state_22272;
(statearr_22290[(13)] = inst_22265);

return statearr_22290;
})();
var statearr_22291_22315 = state_22272__$1;
(statearr_22291_22315[(2)] = inst_22266);

(statearr_22291_22315[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22273 === (10))){
var inst_22256 = (state_22272[(2)]);
var state_22272__$1 = state_22272;
var statearr_22292_22316 = state_22272__$1;
(statearr_22292_22316[(2)] = inst_22256);

(statearr_22292_22316[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22273 === (8))){
var inst_22245 = (state_22272[(11)]);
var inst_22236 = (state_22272[(8)]);
var tmp22289 = inst_22236;
var inst_22236__$1 = tmp22289;
var inst_22237 = inst_22245;
var state_22272__$1 = (function (){var statearr_22293 = state_22272;
(statearr_22293[(7)] = inst_22237);

(statearr_22293[(8)] = inst_22236__$1);

return statearr_22293;
})();
var statearr_22294_22317 = state_22272__$1;
(statearr_22294_22317[(2)] = null);

(statearr_22294_22317[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___22303,out))
;
return ((function (switch__13558__auto__,c__13636__auto___22303,out){
return (function() {
var cljs$core$async$state_machine__13559__auto__ = null;
var cljs$core$async$state_machine__13559__auto____0 = (function (){
var statearr_22298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22298[(0)] = cljs$core$async$state_machine__13559__auto__);

(statearr_22298[(1)] = (1));

return statearr_22298;
});
var cljs$core$async$state_machine__13559__auto____1 = (function (state_22272){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_22272);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e22299){if((e22299 instanceof Object)){
var ex__13562__auto__ = e22299;
var statearr_22300_22318 = state_22272;
(statearr_22300_22318[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22272);

return cljs.core.constant$keyword$recur;
} else {
throw e22299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__22319 = state_22272;
state_22272 = G__22319;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$state_machine__13559__auto__ = function(state_22272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13559__auto____1.call(this,state_22272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13559__auto____0;
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13559__auto____1;
return cljs$core$async$state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___22303,out))
})();
var state__13638__auto__ = (function (){var statearr_22301 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_22301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___22303);

return statearr_22301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___22303,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__22321 = arguments.length;
switch (G__22321) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13636__auto___22395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___22395,out){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___22395,out){
return (function (state_22363){
var state_val_22364 = (state_22363[(1)]);
if((state_val_22364 === (7))){
var inst_22359 = (state_22363[(2)]);
var state_22363__$1 = state_22363;
var statearr_22365_22396 = state_22363__$1;
(statearr_22365_22396[(2)] = inst_22359);

(statearr_22365_22396[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22364 === (1))){
var inst_22322 = [];
var inst_22323 = inst_22322;
var inst_22324 = cljs.core.constant$keyword$cljs$core$async_SLASH_nothing;
var state_22363__$1 = (function (){var statearr_22366 = state_22363;
(statearr_22366[(7)] = inst_22324);

(statearr_22366[(8)] = inst_22323);

return statearr_22366;
})();
var statearr_22367_22397 = state_22363__$1;
(statearr_22367_22397[(2)] = null);

(statearr_22367_22397[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22364 === (4))){
var inst_22327 = (state_22363[(9)]);
var inst_22327__$1 = (state_22363[(2)]);
var inst_22328 = (inst_22327__$1 == null);
var inst_22329 = cljs.core.not(inst_22328);
var state_22363__$1 = (function (){var statearr_22368 = state_22363;
(statearr_22368[(9)] = inst_22327__$1);

return statearr_22368;
})();
if(inst_22329){
var statearr_22369_22398 = state_22363__$1;
(statearr_22369_22398[(1)] = (5));

} else {
var statearr_22370_22399 = state_22363__$1;
(statearr_22370_22399[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22364 === (15))){
var inst_22353 = (state_22363[(2)]);
var state_22363__$1 = state_22363;
var statearr_22371_22400 = state_22363__$1;
(statearr_22371_22400[(2)] = inst_22353);

(statearr_22371_22400[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22364 === (13))){
var state_22363__$1 = state_22363;
var statearr_22372_22401 = state_22363__$1;
(statearr_22372_22401[(2)] = null);

(statearr_22372_22401[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22364 === (6))){
var inst_22323 = (state_22363[(8)]);
var inst_22348 = inst_22323.length;
var inst_22349 = (inst_22348 > (0));
var state_22363__$1 = state_22363;
if(cljs.core.truth_(inst_22349)){
var statearr_22373_22402 = state_22363__$1;
(statearr_22373_22402[(1)] = (12));

} else {
var statearr_22374_22403 = state_22363__$1;
(statearr_22374_22403[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22364 === (3))){
var inst_22361 = (state_22363[(2)]);
var state_22363__$1 = state_22363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22363__$1,inst_22361);
} else {
if((state_val_22364 === (12))){
var inst_22323 = (state_22363[(8)]);
var inst_22351 = cljs.core.vec(inst_22323);
var state_22363__$1 = state_22363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22363__$1,(15),out,inst_22351);
} else {
if((state_val_22364 === (2))){
var state_22363__$1 = state_22363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22363__$1,(4),ch);
} else {
if((state_val_22364 === (11))){
var inst_22327 = (state_22363[(9)]);
var inst_22331 = (state_22363[(10)]);
var inst_22341 = (state_22363[(2)]);
var inst_22342 = [];
var inst_22343 = inst_22342.push(inst_22327);
var inst_22323 = inst_22342;
var inst_22324 = inst_22331;
var state_22363__$1 = (function (){var statearr_22375 = state_22363;
(statearr_22375[(7)] = inst_22324);

(statearr_22375[(11)] = inst_22343);

(statearr_22375[(12)] = inst_22341);

(statearr_22375[(8)] = inst_22323);

return statearr_22375;
})();
var statearr_22376_22404 = state_22363__$1;
(statearr_22376_22404[(2)] = null);

(statearr_22376_22404[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22364 === (9))){
var inst_22323 = (state_22363[(8)]);
var inst_22339 = cljs.core.vec(inst_22323);
var state_22363__$1 = state_22363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22363__$1,(11),out,inst_22339);
} else {
if((state_val_22364 === (5))){
var inst_22327 = (state_22363[(9)]);
var inst_22324 = (state_22363[(7)]);
var inst_22331 = (state_22363[(10)]);
var inst_22331__$1 = (function (){var G__22377 = inst_22327;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22377) : f.call(null,G__22377));
})();
var inst_22332 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22331__$1,inst_22324);
var inst_22333 = cljs.core.keyword_identical_QMARK_(inst_22324,cljs.core.constant$keyword$cljs$core$async_SLASH_nothing);
var inst_22334 = (inst_22332) || (inst_22333);
var state_22363__$1 = (function (){var statearr_22378 = state_22363;
(statearr_22378[(10)] = inst_22331__$1);

return statearr_22378;
})();
if(cljs.core.truth_(inst_22334)){
var statearr_22379_22405 = state_22363__$1;
(statearr_22379_22405[(1)] = (8));

} else {
var statearr_22380_22406 = state_22363__$1;
(statearr_22380_22406[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22364 === (14))){
var inst_22356 = (state_22363[(2)]);
var inst_22357 = cljs.core.async.close_BANG_(out);
var state_22363__$1 = (function (){var statearr_22382 = state_22363;
(statearr_22382[(13)] = inst_22356);

return statearr_22382;
})();
var statearr_22383_22407 = state_22363__$1;
(statearr_22383_22407[(2)] = inst_22357);

(statearr_22383_22407[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22364 === (10))){
var inst_22346 = (state_22363[(2)]);
var state_22363__$1 = state_22363;
var statearr_22384_22408 = state_22363__$1;
(statearr_22384_22408[(2)] = inst_22346);

(statearr_22384_22408[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22364 === (8))){
var inst_22327 = (state_22363[(9)]);
var inst_22331 = (state_22363[(10)]);
var inst_22323 = (state_22363[(8)]);
var inst_22336 = inst_22323.push(inst_22327);
var tmp22381 = inst_22323;
var inst_22323__$1 = tmp22381;
var inst_22324 = inst_22331;
var state_22363__$1 = (function (){var statearr_22385 = state_22363;
(statearr_22385[(7)] = inst_22324);

(statearr_22385[(14)] = inst_22336);

(statearr_22385[(8)] = inst_22323__$1);

return statearr_22385;
})();
var statearr_22386_22409 = state_22363__$1;
(statearr_22386_22409[(2)] = null);

(statearr_22386_22409[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13636__auto___22395,out))
;
return ((function (switch__13558__auto__,c__13636__auto___22395,out){
return (function() {
var cljs$core$async$state_machine__13559__auto__ = null;
var cljs$core$async$state_machine__13559__auto____0 = (function (){
var statearr_22390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22390[(0)] = cljs$core$async$state_machine__13559__auto__);

(statearr_22390[(1)] = (1));

return statearr_22390;
});
var cljs$core$async$state_machine__13559__auto____1 = (function (state_22363){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_22363);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e22391){if((e22391 instanceof Object)){
var ex__13562__auto__ = e22391;
var statearr_22392_22410 = state_22363;
(statearr_22392_22410[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22363);

return cljs.core.constant$keyword$recur;
} else {
throw e22391;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__22411 = state_22363;
state_22363 = G__22411;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
cljs$core$async$state_machine__13559__auto__ = function(state_22363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13559__auto____1.call(this,state_22363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13559__auto____0;
cljs$core$async$state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13559__auto____1;
return cljs$core$async$state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___22395,out))
})();
var state__13638__auto__ = (function (){var statearr_22393 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_22393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___22395);

return statearr_22393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___22395,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
