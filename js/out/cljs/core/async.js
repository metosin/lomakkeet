// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t19741 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19741 = (function (fn_handler,f,meta19742){
this.fn_handler = fn_handler;
this.f = f;
this.meta19742 = meta19742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19743,meta19742__$1){
var self__ = this;
var _19743__$1 = this;
return (new cljs.core.async.t19741(self__.fn_handler,self__.f,meta19742__$1));
});

cljs.core.async.t19741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19743){
var self__ = this;
var _19743__$1 = this;
return self__.meta19742;
});

cljs.core.async.t19741.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta19742","meta19742",792301529,null)], null);
});

cljs.core.async.t19741.cljs$lang$type = true;

cljs.core.async.t19741.cljs$lang$ctorStr = "cljs.core.async/t19741";

cljs.core.async.t19741.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t19741");
});

cljs.core.async.__GT_t19741 = (function cljs$core$async$fn_handler_$___GT_t19741(fn_handler__$1,f__$1,meta19742){
return (new cljs.core.async.t19741(fn_handler__$1,f__$1,meta19742));
});

}

return (new cljs.core.async.t19741(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19745 = buff;
if(G__19745){
var bit__5012__auto__ = null;
if(cljs.core.truth_((function (){var or__4338__auto__ = bit__5012__auto__;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return G__19745.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19745.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__19745);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__19745);
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
var G__19747 = arguments.length;
switch (G__19747) {
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
var G__19750 = arguments.length;
switch (G__19750) {
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
var val_19755 = (function (){var G__19751 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19751) : cljs.core.deref.call(null,G__19751));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__19752_19756 = val_19755;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__19752_19756) : fn1.call(null,G__19752_19756));
} else {
cljs.core.async.impl.dispatch.run(((function (val_19755,ret){
return (function (){
var G__19753 = val_19755;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__19753) : fn1.call(null,G__19753));
});})(val_19755,ret))
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
var G__19758 = arguments.length;
switch (G__19758) {
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
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
var G__19759 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19759) : cljs.core.deref.call(null,G__19759));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = (function (){var G__19760 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19760) : cljs.core.deref.call(null,G__19760));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__19761_19764 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__19761_19764) : fn1.call(null,G__19761_19764));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4421__auto__){
return (function (){
var G__19762 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__19762) : fn1.call(null,G__19762));
});})(ret,retb,temp__4421__auto__))
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
var n__5223__auto___19765 = n;
var x_19766 = (0);
while(true){
if((x_19766 < n__5223__auto___19765)){
(a[x_19766] = (0));

var G__19767 = (x_19766 + (1));
x_19766 = G__19767;
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

var G__19768 = (i + (1));
i = G__19768;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__19776 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19776) : cljs.core.atom.call(null,G__19776));
})();
if(typeof cljs.core.async.t19777 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19777 = (function (alt_flag,flag,meta19778){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19778 = meta19778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19779,meta19778__$1){
var self__ = this;
var _19779__$1 = this;
return (new cljs.core.async.t19777(self__.alt_flag,self__.flag,meta19778__$1));
});})(flag))
;

cljs.core.async.t19777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19779){
var self__ = this;
var _19779__$1 = this;
return self__.meta19778;
});})(flag))
;

cljs.core.async.t19777.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19777.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19780 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19780) : cljs.core.deref.call(null,G__19780));
});})(flag))
;

cljs.core.async.t19777.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19781_19783 = self__.flag;
var G__19782_19784 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19781_19783,G__19782_19784) : cljs.core.reset_BANG_.call(null,G__19781_19783,G__19782_19784));

return true;
});})(flag))
;

cljs.core.async.t19777.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19778","meta19778",-1442668334,null)], null);
});})(flag))
;

cljs.core.async.t19777.cljs$lang$type = true;

cljs.core.async.t19777.cljs$lang$ctorStr = "cljs.core.async/t19777";

cljs.core.async.t19777.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t19777");
});})(flag))
;

cljs.core.async.__GT_t19777 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t19777(alt_flag__$1,flag__$1,meta19778){
return (new cljs.core.async.t19777(alt_flag__$1,flag__$1,meta19778));
});})(flag))
;

}

return (new cljs.core.async.t19777(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t19788 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19788 = (function (alt_handler,flag,cb,meta19789){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19789 = meta19789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19790,meta19789__$1){
var self__ = this;
var _19790__$1 = this;
return (new cljs.core.async.t19788(self__.alt_handler,self__.flag,self__.cb,meta19789__$1));
});

cljs.core.async.t19788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19790){
var self__ = this;
var _19790__$1 = this;
return self__.meta19789;
});

cljs.core.async.t19788.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t19788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t19788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19789","meta19789",-1453154119,null)], null);
});

cljs.core.async.t19788.cljs$lang$type = true;

cljs.core.async.t19788.cljs$lang$ctorStr = "cljs.core.async/t19788";

cljs.core.async.t19788.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t19788");
});

cljs.core.async.__GT_t19788 = (function cljs$core$async$alt_handler_$___GT_t19788(alt_handler__$1,flag__$1,cb__$1,meta19789){
return (new cljs.core.async.t19788(alt_handler__$1,flag__$1,cb__$1,meta19789));
});

}

return (new cljs.core.async.t19788(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__19798 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__19798) : port.call(null,G__19798));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__19799 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__19799) : port.call(null,G__19799));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19791_SHARP_){
var G__19800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19791_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19800) : fret.call(null,G__19800));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19792_SHARP_){
var G__19801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19792_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19801) : fret.call(null,G__19801));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19802 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19802) : cljs.core.deref.call(null,G__19802));
})(),(function (){var or__4338__auto__ = wport;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19803 = (i + (1));
i = G__19803;
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
var temp__4423__auto__ = (function (){var and__4326__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4326__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4326__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19806){
var map__19807 = p__19806;
var map__19807__$1 = ((cljs.core.seq_QMARK_(map__19807))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19807):map__19807);
var opts = map__19807__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19804){
var G__19805 = cljs.core.first(seq19804);
var seq19804__$1 = cljs.core.next(seq19804);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19805,seq19804__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__19809 = arguments.length;
switch (G__19809) {
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
var c__13630__auto___19858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___19858){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___19858){
return (function (state_19833){
var state_val_19834 = (state_19833[(1)]);
if((state_val_19834 === (7))){
var inst_19829 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
var statearr_19835_19859 = state_19833__$1;
(statearr_19835_19859[(2)] = inst_19829);

(statearr_19835_19859[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19834 === (1))){
var state_19833__$1 = state_19833;
var statearr_19836_19860 = state_19833__$1;
(statearr_19836_19860[(2)] = null);

(statearr_19836_19860[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19834 === (4))){
var inst_19812 = (state_19833[(7)]);
var inst_19812__$1 = (state_19833[(2)]);
var inst_19813 = (inst_19812__$1 == null);
var state_19833__$1 = (function (){var statearr_19837 = state_19833;
(statearr_19837[(7)] = inst_19812__$1);

return statearr_19837;
})();
if(cljs.core.truth_(inst_19813)){
var statearr_19838_19861 = state_19833__$1;
(statearr_19838_19861[(1)] = (5));

} else {
var statearr_19839_19862 = state_19833__$1;
(statearr_19839_19862[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19834 === (13))){
var state_19833__$1 = state_19833;
var statearr_19840_19863 = state_19833__$1;
(statearr_19840_19863[(2)] = null);

(statearr_19840_19863[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19834 === (6))){
var inst_19812 = (state_19833[(7)]);
var state_19833__$1 = state_19833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19833__$1,(11),to,inst_19812);
} else {
if((state_val_19834 === (3))){
var inst_19831 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19833__$1,inst_19831);
} else {
if((state_val_19834 === (12))){
var state_19833__$1 = state_19833;
var statearr_19841_19864 = state_19833__$1;
(statearr_19841_19864[(2)] = null);

(statearr_19841_19864[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19834 === (2))){
var state_19833__$1 = state_19833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19833__$1,(4),from);
} else {
if((state_val_19834 === (11))){
var inst_19822 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
if(cljs.core.truth_(inst_19822)){
var statearr_19842_19865 = state_19833__$1;
(statearr_19842_19865[(1)] = (12));

} else {
var statearr_19843_19866 = state_19833__$1;
(statearr_19843_19866[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19834 === (9))){
var state_19833__$1 = state_19833;
var statearr_19844_19867 = state_19833__$1;
(statearr_19844_19867[(2)] = null);

(statearr_19844_19867[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19834 === (5))){
var state_19833__$1 = state_19833;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19845_19868 = state_19833__$1;
(statearr_19845_19868[(1)] = (8));

} else {
var statearr_19846_19869 = state_19833__$1;
(statearr_19846_19869[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19834 === (14))){
var inst_19827 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
var statearr_19847_19870 = state_19833__$1;
(statearr_19847_19870[(2)] = inst_19827);

(statearr_19847_19870[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19834 === (10))){
var inst_19819 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
var statearr_19848_19871 = state_19833__$1;
(statearr_19848_19871[(2)] = inst_19819);

(statearr_19848_19871[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19834 === (8))){
var inst_19816 = cljs.core.async.close_BANG_(to);
var state_19833__$1 = state_19833;
var statearr_19849_19872 = state_19833__$1;
(statearr_19849_19872[(2)] = inst_19816);

(statearr_19849_19872[(1)] = (10));


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
});})(c__13630__auto___19858))
;
return ((function (switch__13552__auto__,c__13630__auto___19858){
return (function() {
var cljs$core$async$state_machine__13553__auto__ = null;
var cljs$core$async$state_machine__13553__auto____0 = (function (){
var statearr_19853 = [null,null,null,null,null,null,null,null];
(statearr_19853[(0)] = cljs$core$async$state_machine__13553__auto__);

(statearr_19853[(1)] = (1));

return statearr_19853;
});
var cljs$core$async$state_machine__13553__auto____1 = (function (state_19833){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_19833);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e19854){if((e19854 instanceof Object)){
var ex__13556__auto__ = e19854;
var statearr_19855_19873 = state_19833;
(statearr_19855_19873[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19833);

return cljs.core.constant$keyword$recur;
} else {
throw e19854;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__19874 = state_19833;
state_19833 = G__19874;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$state_machine__13553__auto__ = function(state_19833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13553__auto____1.call(this,state_19833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13553__auto____0;
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13553__auto____1;
return cljs$core$async$state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___19858))
})();
var state__13632__auto__ = (function (){var statearr_19856 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_19856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___19858);

return statearr_19856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___19858))
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
return (function (p__20060){
var vec__20061 = p__20060;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20061,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20061,(1),null);
var job = vec__20061;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13630__auto___20245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___20245,res,vec__20061,v,p,job,jobs,results){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___20245,res,vec__20061,v,p,job,jobs,results){
return (function (state_20066){
var state_val_20067 = (state_20066[(1)]);
if((state_val_20067 === (1))){
var state_20066__$1 = state_20066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20066__$1,(2),res,v);
} else {
if((state_val_20067 === (2))){
var inst_20063 = (state_20066[(2)]);
var inst_20064 = cljs.core.async.close_BANG_(res);
var state_20066__$1 = (function (){var statearr_20068 = state_20066;
(statearr_20068[(7)] = inst_20063);

return statearr_20068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20066__$1,inst_20064);
} else {
return null;
}
}
});})(c__13630__auto___20245,res,vec__20061,v,p,job,jobs,results))
;
return ((function (switch__13552__auto__,c__13630__auto___20245,res,vec__20061,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0 = (function (){
var statearr_20072 = [null,null,null,null,null,null,null,null];
(statearr_20072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__);

(statearr_20072[(1)] = (1));

return statearr_20072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1 = (function (state_20066){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_20066);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e20073){if((e20073 instanceof Object)){
var ex__13556__auto__ = e20073;
var statearr_20074_20246 = state_20066;
(statearr_20074_20246[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20066);

return cljs.core.constant$keyword$recur;
} else {
throw e20073;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__20247 = state_20066;
state_20066 = G__20247;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__ = function(state_20066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1.call(this,state_20066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___20245,res,vec__20061,v,p,job,jobs,results))
})();
var state__13632__auto__ = (function (){var statearr_20075 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_20075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___20245);

return statearr_20075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___20245,res,vec__20061,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20076){
var vec__20077 = p__20076;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20077,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20077,(1),null);
var job = vec__20077;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__20078_20248 = v;
var G__20079_20249 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__20078_20248,G__20079_20249) : xf.call(null,G__20078_20248,G__20079_20249));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5223__auto___20250 = n;
var __20251 = (0);
while(true){
if((__20251 < n__5223__auto___20250)){
var G__20080_20252 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20080_20252) {
case "compute":
var c__13630__auto___20254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20251,c__13630__auto___20254,G__20080_20252,n__5223__auto___20250,jobs,results,process,async){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (__20251,c__13630__auto___20254,G__20080_20252,n__5223__auto___20250,jobs,results,process,async){
return (function (state_20093){
var state_val_20094 = (state_20093[(1)]);
if((state_val_20094 === (1))){
var state_20093__$1 = state_20093;
var statearr_20095_20255 = state_20093__$1;
(statearr_20095_20255[(2)] = null);

(statearr_20095_20255[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20094 === (2))){
var state_20093__$1 = state_20093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20093__$1,(4),jobs);
} else {
if((state_val_20094 === (3))){
var inst_20091 = (state_20093[(2)]);
var state_20093__$1 = state_20093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20093__$1,inst_20091);
} else {
if((state_val_20094 === (4))){
var inst_20083 = (state_20093[(2)]);
var inst_20084 = process(inst_20083);
var state_20093__$1 = state_20093;
if(cljs.core.truth_(inst_20084)){
var statearr_20096_20256 = state_20093__$1;
(statearr_20096_20256[(1)] = (5));

} else {
var statearr_20097_20257 = state_20093__$1;
(statearr_20097_20257[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20094 === (5))){
var state_20093__$1 = state_20093;
var statearr_20098_20258 = state_20093__$1;
(statearr_20098_20258[(2)] = null);

(statearr_20098_20258[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20094 === (6))){
var state_20093__$1 = state_20093;
var statearr_20099_20259 = state_20093__$1;
(statearr_20099_20259[(2)] = null);

(statearr_20099_20259[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20094 === (7))){
var inst_20089 = (state_20093[(2)]);
var state_20093__$1 = state_20093;
var statearr_20100_20260 = state_20093__$1;
(statearr_20100_20260[(2)] = inst_20089);

(statearr_20100_20260[(1)] = (3));


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
});})(__20251,c__13630__auto___20254,G__20080_20252,n__5223__auto___20250,jobs,results,process,async))
;
return ((function (__20251,switch__13552__auto__,c__13630__auto___20254,G__20080_20252,n__5223__auto___20250,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0 = (function (){
var statearr_20104 = [null,null,null,null,null,null,null];
(statearr_20104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__);

(statearr_20104[(1)] = (1));

return statearr_20104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1 = (function (state_20093){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_20093);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e20105){if((e20105 instanceof Object)){
var ex__13556__auto__ = e20105;
var statearr_20106_20261 = state_20093;
(statearr_20106_20261[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20093);

return cljs.core.constant$keyword$recur;
} else {
throw e20105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__20262 = state_20093;
state_20093 = G__20262;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__ = function(state_20093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1.call(this,state_20093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__;
})()
;})(__20251,switch__13552__auto__,c__13630__auto___20254,G__20080_20252,n__5223__auto___20250,jobs,results,process,async))
})();
var state__13632__auto__ = (function (){var statearr_20107 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_20107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___20254);

return statearr_20107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(__20251,c__13630__auto___20254,G__20080_20252,n__5223__auto___20250,jobs,results,process,async))
);


break;
case "async":
var c__13630__auto___20263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20251,c__13630__auto___20263,G__20080_20252,n__5223__auto___20250,jobs,results,process,async){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (__20251,c__13630__auto___20263,G__20080_20252,n__5223__auto___20250,jobs,results,process,async){
return (function (state_20120){
var state_val_20121 = (state_20120[(1)]);
if((state_val_20121 === (1))){
var state_20120__$1 = state_20120;
var statearr_20122_20264 = state_20120__$1;
(statearr_20122_20264[(2)] = null);

(statearr_20122_20264[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20121 === (2))){
var state_20120__$1 = state_20120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20120__$1,(4),jobs);
} else {
if((state_val_20121 === (3))){
var inst_20118 = (state_20120[(2)]);
var state_20120__$1 = state_20120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20120__$1,inst_20118);
} else {
if((state_val_20121 === (4))){
var inst_20110 = (state_20120[(2)]);
var inst_20111 = async(inst_20110);
var state_20120__$1 = state_20120;
if(cljs.core.truth_(inst_20111)){
var statearr_20123_20265 = state_20120__$1;
(statearr_20123_20265[(1)] = (5));

} else {
var statearr_20124_20266 = state_20120__$1;
(statearr_20124_20266[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20121 === (5))){
var state_20120__$1 = state_20120;
var statearr_20125_20267 = state_20120__$1;
(statearr_20125_20267[(2)] = null);

(statearr_20125_20267[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20121 === (6))){
var state_20120__$1 = state_20120;
var statearr_20126_20268 = state_20120__$1;
(statearr_20126_20268[(2)] = null);

(statearr_20126_20268[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20121 === (7))){
var inst_20116 = (state_20120[(2)]);
var state_20120__$1 = state_20120;
var statearr_20127_20269 = state_20120__$1;
(statearr_20127_20269[(2)] = inst_20116);

(statearr_20127_20269[(1)] = (3));


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
});})(__20251,c__13630__auto___20263,G__20080_20252,n__5223__auto___20250,jobs,results,process,async))
;
return ((function (__20251,switch__13552__auto__,c__13630__auto___20263,G__20080_20252,n__5223__auto___20250,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0 = (function (){
var statearr_20131 = [null,null,null,null,null,null,null];
(statearr_20131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__);

(statearr_20131[(1)] = (1));

return statearr_20131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1 = (function (state_20120){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_20120);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e20132){if((e20132 instanceof Object)){
var ex__13556__auto__ = e20132;
var statearr_20133_20270 = state_20120;
(statearr_20133_20270[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20120);

return cljs.core.constant$keyword$recur;
} else {
throw e20132;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__20271 = state_20120;
state_20120 = G__20271;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__ = function(state_20120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1.call(this,state_20120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__;
})()
;})(__20251,switch__13552__auto__,c__13630__auto___20263,G__20080_20252,n__5223__auto___20250,jobs,results,process,async))
})();
var state__13632__auto__ = (function (){var statearr_20134 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_20134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___20263);

return statearr_20134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(__20251,c__13630__auto___20263,G__20080_20252,n__5223__auto___20250,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20272 = (__20251 + (1));
__20251 = G__20272;
continue;
} else {
}
break;
}

var c__13630__auto___20273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___20273,jobs,results,process,async){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___20273,jobs,results,process,async){
return (function (state_20156){
var state_val_20157 = (state_20156[(1)]);
if((state_val_20157 === (1))){
var state_20156__$1 = state_20156;
var statearr_20158_20274 = state_20156__$1;
(statearr_20158_20274[(2)] = null);

(statearr_20158_20274[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20157 === (2))){
var state_20156__$1 = state_20156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20156__$1,(4),from);
} else {
if((state_val_20157 === (3))){
var inst_20154 = (state_20156[(2)]);
var state_20156__$1 = state_20156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20156__$1,inst_20154);
} else {
if((state_val_20157 === (4))){
var inst_20137 = (state_20156[(7)]);
var inst_20137__$1 = (state_20156[(2)]);
var inst_20138 = (inst_20137__$1 == null);
var state_20156__$1 = (function (){var statearr_20159 = state_20156;
(statearr_20159[(7)] = inst_20137__$1);

return statearr_20159;
})();
if(cljs.core.truth_(inst_20138)){
var statearr_20160_20275 = state_20156__$1;
(statearr_20160_20275[(1)] = (5));

} else {
var statearr_20161_20276 = state_20156__$1;
(statearr_20161_20276[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20157 === (5))){
var inst_20140 = cljs.core.async.close_BANG_(jobs);
var state_20156__$1 = state_20156;
var statearr_20162_20277 = state_20156__$1;
(statearr_20162_20277[(2)] = inst_20140);

(statearr_20162_20277[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20157 === (6))){
var inst_20137 = (state_20156[(7)]);
var inst_20142 = (state_20156[(8)]);
var inst_20142__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_20143 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20144 = [inst_20137,inst_20142__$1];
var inst_20145 = (new cljs.core.PersistentVector(null,2,(5),inst_20143,inst_20144,null));
var state_20156__$1 = (function (){var statearr_20163 = state_20156;
(statearr_20163[(8)] = inst_20142__$1);

return statearr_20163;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20156__$1,(8),jobs,inst_20145);
} else {
if((state_val_20157 === (7))){
var inst_20152 = (state_20156[(2)]);
var state_20156__$1 = state_20156;
var statearr_20164_20278 = state_20156__$1;
(statearr_20164_20278[(2)] = inst_20152);

(statearr_20164_20278[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20157 === (8))){
var inst_20142 = (state_20156[(8)]);
var inst_20147 = (state_20156[(2)]);
var state_20156__$1 = (function (){var statearr_20165 = state_20156;
(statearr_20165[(9)] = inst_20147);

return statearr_20165;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20156__$1,(9),results,inst_20142);
} else {
if((state_val_20157 === (9))){
var inst_20149 = (state_20156[(2)]);
var state_20156__$1 = (function (){var statearr_20166 = state_20156;
(statearr_20166[(10)] = inst_20149);

return statearr_20166;
})();
var statearr_20167_20279 = state_20156__$1;
(statearr_20167_20279[(2)] = null);

(statearr_20167_20279[(1)] = (2));


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
});})(c__13630__auto___20273,jobs,results,process,async))
;
return ((function (switch__13552__auto__,c__13630__auto___20273,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0 = (function (){
var statearr_20171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__);

(statearr_20171[(1)] = (1));

return statearr_20171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1 = (function (state_20156){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_20156);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e20172){if((e20172 instanceof Object)){
var ex__13556__auto__ = e20172;
var statearr_20173_20280 = state_20156;
(statearr_20173_20280[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20156);

return cljs.core.constant$keyword$recur;
} else {
throw e20172;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__20281 = state_20156;
state_20156 = G__20281;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__ = function(state_20156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1.call(this,state_20156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___20273,jobs,results,process,async))
})();
var state__13632__auto__ = (function (){var statearr_20174 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_20174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___20273);

return statearr_20174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___20273,jobs,results,process,async))
);


var c__13630__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto__,jobs,results,process,async){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto__,jobs,results,process,async){
return (function (state_20212){
var state_val_20213 = (state_20212[(1)]);
if((state_val_20213 === (7))){
var inst_20208 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20214_20282 = state_20212__$1;
(statearr_20214_20282[(2)] = inst_20208);

(statearr_20214_20282[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (20))){
var state_20212__$1 = state_20212;
var statearr_20215_20283 = state_20212__$1;
(statearr_20215_20283[(2)] = null);

(statearr_20215_20283[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (1))){
var state_20212__$1 = state_20212;
var statearr_20216_20284 = state_20212__$1;
(statearr_20216_20284[(2)] = null);

(statearr_20216_20284[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (4))){
var inst_20177 = (state_20212[(7)]);
var inst_20177__$1 = (state_20212[(2)]);
var inst_20178 = (inst_20177__$1 == null);
var state_20212__$1 = (function (){var statearr_20217 = state_20212;
(statearr_20217[(7)] = inst_20177__$1);

return statearr_20217;
})();
if(cljs.core.truth_(inst_20178)){
var statearr_20218_20285 = state_20212__$1;
(statearr_20218_20285[(1)] = (5));

} else {
var statearr_20219_20286 = state_20212__$1;
(statearr_20219_20286[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (15))){
var inst_20190 = (state_20212[(8)]);
var state_20212__$1 = state_20212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20212__$1,(18),to,inst_20190);
} else {
if((state_val_20213 === (21))){
var inst_20203 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20220_20287 = state_20212__$1;
(statearr_20220_20287[(2)] = inst_20203);

(statearr_20220_20287[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (13))){
var inst_20205 = (state_20212[(2)]);
var state_20212__$1 = (function (){var statearr_20221 = state_20212;
(statearr_20221[(9)] = inst_20205);

return statearr_20221;
})();
var statearr_20222_20288 = state_20212__$1;
(statearr_20222_20288[(2)] = null);

(statearr_20222_20288[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (6))){
var inst_20177 = (state_20212[(7)]);
var state_20212__$1 = state_20212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20212__$1,(11),inst_20177);
} else {
if((state_val_20213 === (17))){
var inst_20198 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
if(cljs.core.truth_(inst_20198)){
var statearr_20223_20289 = state_20212__$1;
(statearr_20223_20289[(1)] = (19));

} else {
var statearr_20224_20290 = state_20212__$1;
(statearr_20224_20290[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (3))){
var inst_20210 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20212__$1,inst_20210);
} else {
if((state_val_20213 === (12))){
var inst_20187 = (state_20212[(10)]);
var state_20212__$1 = state_20212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20212__$1,(14),inst_20187);
} else {
if((state_val_20213 === (2))){
var state_20212__$1 = state_20212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20212__$1,(4),results);
} else {
if((state_val_20213 === (19))){
var state_20212__$1 = state_20212;
var statearr_20225_20291 = state_20212__$1;
(statearr_20225_20291[(2)] = null);

(statearr_20225_20291[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (11))){
var inst_20187 = (state_20212[(2)]);
var state_20212__$1 = (function (){var statearr_20226 = state_20212;
(statearr_20226[(10)] = inst_20187);

return statearr_20226;
})();
var statearr_20227_20292 = state_20212__$1;
(statearr_20227_20292[(2)] = null);

(statearr_20227_20292[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (9))){
var state_20212__$1 = state_20212;
var statearr_20228_20293 = state_20212__$1;
(statearr_20228_20293[(2)] = null);

(statearr_20228_20293[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (5))){
var state_20212__$1 = state_20212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20229_20294 = state_20212__$1;
(statearr_20229_20294[(1)] = (8));

} else {
var statearr_20230_20295 = state_20212__$1;
(statearr_20230_20295[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (14))){
var inst_20192 = (state_20212[(11)]);
var inst_20190 = (state_20212[(8)]);
var inst_20190__$1 = (state_20212[(2)]);
var inst_20191 = (inst_20190__$1 == null);
var inst_20192__$1 = cljs.core.not(inst_20191);
var state_20212__$1 = (function (){var statearr_20231 = state_20212;
(statearr_20231[(11)] = inst_20192__$1);

(statearr_20231[(8)] = inst_20190__$1);

return statearr_20231;
})();
if(inst_20192__$1){
var statearr_20232_20296 = state_20212__$1;
(statearr_20232_20296[(1)] = (15));

} else {
var statearr_20233_20297 = state_20212__$1;
(statearr_20233_20297[(1)] = (16));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (16))){
var inst_20192 = (state_20212[(11)]);
var state_20212__$1 = state_20212;
var statearr_20234_20298 = state_20212__$1;
(statearr_20234_20298[(2)] = inst_20192);

(statearr_20234_20298[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (10))){
var inst_20184 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20235_20299 = state_20212__$1;
(statearr_20235_20299[(2)] = inst_20184);

(statearr_20235_20299[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (18))){
var inst_20195 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20236_20300 = state_20212__$1;
(statearr_20236_20300[(2)] = inst_20195);

(statearr_20236_20300[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20213 === (8))){
var inst_20181 = cljs.core.async.close_BANG_(to);
var state_20212__$1 = state_20212;
var statearr_20237_20301 = state_20212__$1;
(statearr_20237_20301[(2)] = inst_20181);

(statearr_20237_20301[(1)] = (10));


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
});})(c__13630__auto__,jobs,results,process,async))
;
return ((function (switch__13552__auto__,c__13630__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0 = (function (){
var statearr_20241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__);

(statearr_20241[(1)] = (1));

return statearr_20241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1 = (function (state_20212){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_20212);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e20242){if((e20242 instanceof Object)){
var ex__13556__auto__ = e20242;
var statearr_20243_20302 = state_20212;
(statearr_20243_20302[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20212);

return cljs.core.constant$keyword$recur;
} else {
throw e20242;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__20303 = state_20212;
state_20212 = G__20303;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__ = function(state_20212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1.call(this,state_20212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto__,jobs,results,process,async))
})();
var state__13632__auto__ = (function (){var statearr_20244 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_20244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto__);

return statearr_20244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto__,jobs,results,process,async))
);

return c__13630__auto__;
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
var G__20305 = arguments.length;
switch (G__20305) {
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
var G__20308 = arguments.length;
switch (G__20308) {
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
var G__20311 = arguments.length;
switch (G__20311) {
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
var c__13630__auto___20364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___20364,tc,fc){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___20364,tc,fc){
return (function (state_20337){
var state_val_20338 = (state_20337[(1)]);
if((state_val_20338 === (7))){
var inst_20333 = (state_20337[(2)]);
var state_20337__$1 = state_20337;
var statearr_20339_20365 = state_20337__$1;
(statearr_20339_20365[(2)] = inst_20333);

(statearr_20339_20365[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20338 === (1))){
var state_20337__$1 = state_20337;
var statearr_20340_20366 = state_20337__$1;
(statearr_20340_20366[(2)] = null);

(statearr_20340_20366[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20338 === (4))){
var inst_20314 = (state_20337[(7)]);
var inst_20314__$1 = (state_20337[(2)]);
var inst_20315 = (inst_20314__$1 == null);
var state_20337__$1 = (function (){var statearr_20341 = state_20337;
(statearr_20341[(7)] = inst_20314__$1);

return statearr_20341;
})();
if(cljs.core.truth_(inst_20315)){
var statearr_20342_20367 = state_20337__$1;
(statearr_20342_20367[(1)] = (5));

} else {
var statearr_20343_20368 = state_20337__$1;
(statearr_20343_20368[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20338 === (13))){
var state_20337__$1 = state_20337;
var statearr_20344_20369 = state_20337__$1;
(statearr_20344_20369[(2)] = null);

(statearr_20344_20369[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20338 === (6))){
var inst_20314 = (state_20337[(7)]);
var inst_20320 = (function (){var G__20345 = inst_20314;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__20345) : p.call(null,G__20345));
})();
var state_20337__$1 = state_20337;
if(cljs.core.truth_(inst_20320)){
var statearr_20346_20370 = state_20337__$1;
(statearr_20346_20370[(1)] = (9));

} else {
var statearr_20347_20371 = state_20337__$1;
(statearr_20347_20371[(1)] = (10));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20338 === (3))){
var inst_20335 = (state_20337[(2)]);
var state_20337__$1 = state_20337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20337__$1,inst_20335);
} else {
if((state_val_20338 === (12))){
var state_20337__$1 = state_20337;
var statearr_20348_20372 = state_20337__$1;
(statearr_20348_20372[(2)] = null);

(statearr_20348_20372[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20338 === (2))){
var state_20337__$1 = state_20337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20337__$1,(4),ch);
} else {
if((state_val_20338 === (11))){
var inst_20314 = (state_20337[(7)]);
var inst_20324 = (state_20337[(2)]);
var state_20337__$1 = state_20337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20337__$1,(8),inst_20324,inst_20314);
} else {
if((state_val_20338 === (9))){
var state_20337__$1 = state_20337;
var statearr_20349_20373 = state_20337__$1;
(statearr_20349_20373[(2)] = tc);

(statearr_20349_20373[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20338 === (5))){
var inst_20317 = cljs.core.async.close_BANG_(tc);
var inst_20318 = cljs.core.async.close_BANG_(fc);
var state_20337__$1 = (function (){var statearr_20350 = state_20337;
(statearr_20350[(8)] = inst_20317);

return statearr_20350;
})();
var statearr_20351_20374 = state_20337__$1;
(statearr_20351_20374[(2)] = inst_20318);

(statearr_20351_20374[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20338 === (14))){
var inst_20331 = (state_20337[(2)]);
var state_20337__$1 = state_20337;
var statearr_20352_20375 = state_20337__$1;
(statearr_20352_20375[(2)] = inst_20331);

(statearr_20352_20375[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20338 === (10))){
var state_20337__$1 = state_20337;
var statearr_20353_20376 = state_20337__$1;
(statearr_20353_20376[(2)] = fc);

(statearr_20353_20376[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20338 === (8))){
var inst_20326 = (state_20337[(2)]);
var state_20337__$1 = state_20337;
if(cljs.core.truth_(inst_20326)){
var statearr_20354_20377 = state_20337__$1;
(statearr_20354_20377[(1)] = (12));

} else {
var statearr_20355_20378 = state_20337__$1;
(statearr_20355_20378[(1)] = (13));

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
});})(c__13630__auto___20364,tc,fc))
;
return ((function (switch__13552__auto__,c__13630__auto___20364,tc,fc){
return (function() {
var cljs$core$async$state_machine__13553__auto__ = null;
var cljs$core$async$state_machine__13553__auto____0 = (function (){
var statearr_20359 = [null,null,null,null,null,null,null,null,null];
(statearr_20359[(0)] = cljs$core$async$state_machine__13553__auto__);

(statearr_20359[(1)] = (1));

return statearr_20359;
});
var cljs$core$async$state_machine__13553__auto____1 = (function (state_20337){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_20337);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e20360){if((e20360 instanceof Object)){
var ex__13556__auto__ = e20360;
var statearr_20361_20379 = state_20337;
(statearr_20361_20379[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20337);

return cljs.core.constant$keyword$recur;
} else {
throw e20360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__20380 = state_20337;
state_20337 = G__20380;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$state_machine__13553__auto__ = function(state_20337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13553__auto____1.call(this,state_20337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13553__auto____0;
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13553__auto____1;
return cljs$core$async$state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___20364,tc,fc))
})();
var state__13632__auto__ = (function (){var statearr_20362 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_20362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___20364);

return statearr_20362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___20364,tc,fc))
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
var c__13630__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto__){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto__){
return (function (state_20429){
var state_val_20430 = (state_20429[(1)]);
if((state_val_20430 === (1))){
var inst_20415 = init;
var state_20429__$1 = (function (){var statearr_20431 = state_20429;
(statearr_20431[(7)] = inst_20415);

return statearr_20431;
})();
var statearr_20432_20449 = state_20429__$1;
(statearr_20432_20449[(2)] = null);

(statearr_20432_20449[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20430 === (2))){
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20429__$1,(4),ch);
} else {
if((state_val_20430 === (3))){
var inst_20427 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20429__$1,inst_20427);
} else {
if((state_val_20430 === (4))){
var inst_20418 = (state_20429[(8)]);
var inst_20418__$1 = (state_20429[(2)]);
var inst_20419 = (inst_20418__$1 == null);
var state_20429__$1 = (function (){var statearr_20433 = state_20429;
(statearr_20433[(8)] = inst_20418__$1);

return statearr_20433;
})();
if(cljs.core.truth_(inst_20419)){
var statearr_20434_20450 = state_20429__$1;
(statearr_20434_20450[(1)] = (5));

} else {
var statearr_20435_20451 = state_20429__$1;
(statearr_20435_20451[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20430 === (5))){
var inst_20415 = (state_20429[(7)]);
var state_20429__$1 = state_20429;
var statearr_20436_20452 = state_20429__$1;
(statearr_20436_20452[(2)] = inst_20415);

(statearr_20436_20452[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20430 === (6))){
var inst_20418 = (state_20429[(8)]);
var inst_20415 = (state_20429[(7)]);
var inst_20422 = (function (){var G__20437 = inst_20415;
var G__20438 = inst_20418;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20437,G__20438) : f.call(null,G__20437,G__20438));
})();
var inst_20415__$1 = inst_20422;
var state_20429__$1 = (function (){var statearr_20439 = state_20429;
(statearr_20439[(7)] = inst_20415__$1);

return statearr_20439;
})();
var statearr_20440_20453 = state_20429__$1;
(statearr_20440_20453[(2)] = null);

(statearr_20440_20453[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20430 === (7))){
var inst_20425 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
var statearr_20441_20454 = state_20429__$1;
(statearr_20441_20454[(2)] = inst_20425);

(statearr_20441_20454[(1)] = (3));


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
});})(c__13630__auto__))
;
return ((function (switch__13552__auto__,c__13630__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13553__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13553__auto____0 = (function (){
var statearr_20445 = [null,null,null,null,null,null,null,null,null];
(statearr_20445[(0)] = cljs$core$async$reduce_$_state_machine__13553__auto__);

(statearr_20445[(1)] = (1));

return statearr_20445;
});
var cljs$core$async$reduce_$_state_machine__13553__auto____1 = (function (state_20429){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_20429);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e20446){if((e20446 instanceof Object)){
var ex__13556__auto__ = e20446;
var statearr_20447_20455 = state_20429;
(statearr_20447_20455[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20429);

return cljs.core.constant$keyword$recur;
} else {
throw e20446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__20456 = state_20429;
state_20429 = G__20456;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13553__auto__ = function(state_20429){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13553__auto____1.call(this,state_20429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13553__auto____0;
cljs$core$async$reduce_$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13553__auto____1;
return cljs$core$async$reduce_$_state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto__))
})();
var state__13632__auto__ = (function (){var statearr_20448 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_20448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto__);

return statearr_20448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto__))
);

return c__13630__auto__;
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
var G__20458 = arguments.length;
switch (G__20458) {
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
var c__13630__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto__){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto__){
return (function (state_20483){
var state_val_20484 = (state_20483[(1)]);
if((state_val_20484 === (7))){
var inst_20465 = (state_20483[(2)]);
var state_20483__$1 = state_20483;
var statearr_20485_20509 = state_20483__$1;
(statearr_20485_20509[(2)] = inst_20465);

(statearr_20485_20509[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20484 === (1))){
var inst_20459 = cljs.core.seq(coll);
var inst_20460 = inst_20459;
var state_20483__$1 = (function (){var statearr_20486 = state_20483;
(statearr_20486[(7)] = inst_20460);

return statearr_20486;
})();
var statearr_20487_20510 = state_20483__$1;
(statearr_20487_20510[(2)] = null);

(statearr_20487_20510[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20484 === (4))){
var inst_20460 = (state_20483[(7)]);
var inst_20463 = cljs.core.first(inst_20460);
var state_20483__$1 = state_20483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20483__$1,(7),ch,inst_20463);
} else {
if((state_val_20484 === (13))){
var inst_20477 = (state_20483[(2)]);
var state_20483__$1 = state_20483;
var statearr_20488_20511 = state_20483__$1;
(statearr_20488_20511[(2)] = inst_20477);

(statearr_20488_20511[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20484 === (6))){
var inst_20468 = (state_20483[(2)]);
var state_20483__$1 = state_20483;
if(cljs.core.truth_(inst_20468)){
var statearr_20489_20512 = state_20483__$1;
(statearr_20489_20512[(1)] = (8));

} else {
var statearr_20490_20513 = state_20483__$1;
(statearr_20490_20513[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20484 === (3))){
var inst_20481 = (state_20483[(2)]);
var state_20483__$1 = state_20483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20483__$1,inst_20481);
} else {
if((state_val_20484 === (12))){
var state_20483__$1 = state_20483;
var statearr_20491_20514 = state_20483__$1;
(statearr_20491_20514[(2)] = null);

(statearr_20491_20514[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20484 === (2))){
var inst_20460 = (state_20483[(7)]);
var state_20483__$1 = state_20483;
if(cljs.core.truth_(inst_20460)){
var statearr_20492_20515 = state_20483__$1;
(statearr_20492_20515[(1)] = (4));

} else {
var statearr_20493_20516 = state_20483__$1;
(statearr_20493_20516[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20484 === (11))){
var inst_20474 = cljs.core.async.close_BANG_(ch);
var state_20483__$1 = state_20483;
var statearr_20494_20517 = state_20483__$1;
(statearr_20494_20517[(2)] = inst_20474);

(statearr_20494_20517[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20484 === (9))){
var state_20483__$1 = state_20483;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20495_20518 = state_20483__$1;
(statearr_20495_20518[(1)] = (11));

} else {
var statearr_20496_20519 = state_20483__$1;
(statearr_20496_20519[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20484 === (5))){
var inst_20460 = (state_20483[(7)]);
var state_20483__$1 = state_20483;
var statearr_20497_20520 = state_20483__$1;
(statearr_20497_20520[(2)] = inst_20460);

(statearr_20497_20520[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20484 === (10))){
var inst_20479 = (state_20483[(2)]);
var state_20483__$1 = state_20483;
var statearr_20498_20521 = state_20483__$1;
(statearr_20498_20521[(2)] = inst_20479);

(statearr_20498_20521[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20484 === (8))){
var inst_20460 = (state_20483[(7)]);
var inst_20470 = cljs.core.next(inst_20460);
var inst_20460__$1 = inst_20470;
var state_20483__$1 = (function (){var statearr_20499 = state_20483;
(statearr_20499[(7)] = inst_20460__$1);

return statearr_20499;
})();
var statearr_20500_20522 = state_20483__$1;
(statearr_20500_20522[(2)] = null);

(statearr_20500_20522[(1)] = (2));


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
});})(c__13630__auto__))
;
return ((function (switch__13552__auto__,c__13630__auto__){
return (function() {
var cljs$core$async$state_machine__13553__auto__ = null;
var cljs$core$async$state_machine__13553__auto____0 = (function (){
var statearr_20504 = [null,null,null,null,null,null,null,null];
(statearr_20504[(0)] = cljs$core$async$state_machine__13553__auto__);

(statearr_20504[(1)] = (1));

return statearr_20504;
});
var cljs$core$async$state_machine__13553__auto____1 = (function (state_20483){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_20483);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e20505){if((e20505 instanceof Object)){
var ex__13556__auto__ = e20505;
var statearr_20506_20523 = state_20483;
(statearr_20506_20523[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20483);

return cljs.core.constant$keyword$recur;
} else {
throw e20505;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__20524 = state_20483;
state_20483 = G__20524;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$state_machine__13553__auto__ = function(state_20483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13553__auto____1.call(this,state_20483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13553__auto____0;
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13553__auto____1;
return cljs$core$async$state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto__))
})();
var state__13632__auto__ = (function (){var statearr_20507 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_20507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto__);

return statearr_20507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto__))
);

return c__13630__auto__;
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

cljs.core.async.Mux = (function (){var obj20526 = {};
return obj20526;
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
return (function (){var or__4338__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__20530 = x__4974__auto__;
return goog.typeOf(G__20530);
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


cljs.core.async.Mult = (function (){var obj20532 = {};
return obj20532;
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
return (function (){var or__4338__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__20536 = x__4974__auto__;
return goog.typeOf(G__20536);
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
return (function (){var or__4338__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__20540 = x__4974__auto__;
return goog.typeOf(G__20540);
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
return (function (){var or__4338__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__20544 = x__4974__auto__;
return goog.typeOf(G__20544);
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
var cs = (function (){var G__20774 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20774) : cljs.core.atom.call(null,G__20774));
})();
var m = (function (){
if(typeof cljs.core.async.t20775 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20775 = (function (mult,ch,cs,meta20776){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20776 = meta20776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t20775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20777,meta20776__$1){
var self__ = this;
var _20777__$1 = this;
return (new cljs.core.async.t20775(self__.mult,self__.ch,self__.cs,meta20776__$1));
});})(cs))
;

cljs.core.async.t20775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20777){
var self__ = this;
var _20777__$1 = this;
return self__.meta20776;
});})(cs))
;

cljs.core.async.t20775.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20775.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20775.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20775.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20775.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20775.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20778_21003 = self__.cs;
var G__20779_21004 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20778_21003,G__20779_21004) : cljs.core.reset_BANG_.call(null,G__20778_21003,G__20779_21004));

return null;
});})(cs))
;

cljs.core.async.t20775.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20776","meta20776",-1991133581,null)], null);
});})(cs))
;

cljs.core.async.t20775.cljs$lang$type = true;

cljs.core.async.t20775.cljs$lang$ctorStr = "cljs.core.async/t20775";

cljs.core.async.t20775.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t20775");
});})(cs))
;

cljs.core.async.__GT_t20775 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t20775(mult__$1,ch__$1,cs__$1,meta20776){
return (new cljs.core.async.t20775(mult__$1,ch__$1,cs__$1,meta20776));
});})(cs))
;

}

return (new cljs.core.async.t20775(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__20780 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20780) : cljs.core.atom.call(null,G__20780));
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
var c__13630__auto___21005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___21005,cs,m,dchan,dctr,done){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___21005,cs,m,dchan,dctr,done){
return (function (state_20911){
var state_val_20912 = (state_20911[(1)]);
if((state_val_20912 === (7))){
var inst_20907 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
var statearr_20913_21006 = state_20911__$1;
(statearr_20913_21006[(2)] = inst_20907);

(statearr_20913_21006[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (20))){
var inst_20812 = (state_20911[(7)]);
var inst_20822 = cljs.core.first(inst_20812);
var inst_20823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20822,(0),null);
var inst_20824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20822,(1),null);
var state_20911__$1 = (function (){var statearr_20914 = state_20911;
(statearr_20914[(8)] = inst_20823);

return statearr_20914;
})();
if(cljs.core.truth_(inst_20824)){
var statearr_20915_21007 = state_20911__$1;
(statearr_20915_21007[(1)] = (22));

} else {
var statearr_20916_21008 = state_20911__$1;
(statearr_20916_21008[(1)] = (23));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (27))){
var inst_20854 = (state_20911[(9)]);
var inst_20859 = (state_20911[(10)]);
var inst_20783 = (state_20911[(11)]);
var inst_20852 = (state_20911[(12)]);
var inst_20859__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20852,inst_20854);
var inst_20860 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20859__$1,inst_20783,done);
var state_20911__$1 = (function (){var statearr_20917 = state_20911;
(statearr_20917[(10)] = inst_20859__$1);

return statearr_20917;
})();
if(cljs.core.truth_(inst_20860)){
var statearr_20918_21009 = state_20911__$1;
(statearr_20918_21009[(1)] = (30));

} else {
var statearr_20919_21010 = state_20911__$1;
(statearr_20919_21010[(1)] = (31));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (1))){
var state_20911__$1 = state_20911;
var statearr_20920_21011 = state_20911__$1;
(statearr_20920_21011[(2)] = null);

(statearr_20920_21011[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (24))){
var inst_20812 = (state_20911[(7)]);
var inst_20829 = (state_20911[(2)]);
var inst_20830 = cljs.core.next(inst_20812);
var inst_20792 = inst_20830;
var inst_20793 = null;
var inst_20794 = (0);
var inst_20795 = (0);
var state_20911__$1 = (function (){var statearr_20921 = state_20911;
(statearr_20921[(13)] = inst_20829);

(statearr_20921[(14)] = inst_20794);

(statearr_20921[(15)] = inst_20792);

(statearr_20921[(16)] = inst_20795);

(statearr_20921[(17)] = inst_20793);

return statearr_20921;
})();
var statearr_20922_21012 = state_20911__$1;
(statearr_20922_21012[(2)] = null);

(statearr_20922_21012[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (39))){
var state_20911__$1 = state_20911;
var statearr_20926_21013 = state_20911__$1;
(statearr_20926_21013[(2)] = null);

(statearr_20926_21013[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (4))){
var inst_20783 = (state_20911[(11)]);
var inst_20783__$1 = (state_20911[(2)]);
var inst_20784 = (inst_20783__$1 == null);
var state_20911__$1 = (function (){var statearr_20927 = state_20911;
(statearr_20927[(11)] = inst_20783__$1);

return statearr_20927;
})();
if(cljs.core.truth_(inst_20784)){
var statearr_20928_21014 = state_20911__$1;
(statearr_20928_21014[(1)] = (5));

} else {
var statearr_20929_21015 = state_20911__$1;
(statearr_20929_21015[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (15))){
var inst_20794 = (state_20911[(14)]);
var inst_20792 = (state_20911[(15)]);
var inst_20795 = (state_20911[(16)]);
var inst_20793 = (state_20911[(17)]);
var inst_20808 = (state_20911[(2)]);
var inst_20809 = (inst_20795 + (1));
var tmp20923 = inst_20794;
var tmp20924 = inst_20792;
var tmp20925 = inst_20793;
var inst_20792__$1 = tmp20924;
var inst_20793__$1 = tmp20925;
var inst_20794__$1 = tmp20923;
var inst_20795__$1 = inst_20809;
var state_20911__$1 = (function (){var statearr_20930 = state_20911;
(statearr_20930[(14)] = inst_20794__$1);

(statearr_20930[(15)] = inst_20792__$1);

(statearr_20930[(16)] = inst_20795__$1);

(statearr_20930[(18)] = inst_20808);

(statearr_20930[(17)] = inst_20793__$1);

return statearr_20930;
})();
var statearr_20931_21016 = state_20911__$1;
(statearr_20931_21016[(2)] = null);

(statearr_20931_21016[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (21))){
var inst_20833 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
var statearr_20935_21017 = state_20911__$1;
(statearr_20935_21017[(2)] = inst_20833);

(statearr_20935_21017[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (31))){
var inst_20859 = (state_20911[(10)]);
var inst_20863 = done(null);
var inst_20864 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_20859);
var state_20911__$1 = (function (){var statearr_20936 = state_20911;
(statearr_20936[(19)] = inst_20863);

return statearr_20936;
})();
var statearr_20937_21018 = state_20911__$1;
(statearr_20937_21018[(2)] = inst_20864);

(statearr_20937_21018[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (32))){
var inst_20854 = (state_20911[(9)]);
var inst_20851 = (state_20911[(20)]);
var inst_20852 = (state_20911[(12)]);
var inst_20853 = (state_20911[(21)]);
var inst_20866 = (state_20911[(2)]);
var inst_20867 = (inst_20854 + (1));
var tmp20932 = inst_20851;
var tmp20933 = inst_20852;
var tmp20934 = inst_20853;
var inst_20851__$1 = tmp20932;
var inst_20852__$1 = tmp20933;
var inst_20853__$1 = tmp20934;
var inst_20854__$1 = inst_20867;
var state_20911__$1 = (function (){var statearr_20938 = state_20911;
(statearr_20938[(9)] = inst_20854__$1);

(statearr_20938[(20)] = inst_20851__$1);

(statearr_20938[(22)] = inst_20866);

(statearr_20938[(12)] = inst_20852__$1);

(statearr_20938[(21)] = inst_20853__$1);

return statearr_20938;
})();
var statearr_20939_21019 = state_20911__$1;
(statearr_20939_21019[(2)] = null);

(statearr_20939_21019[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (40))){
var inst_20879 = (state_20911[(23)]);
var inst_20883 = done(null);
var inst_20884 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_20879);
var state_20911__$1 = (function (){var statearr_20940 = state_20911;
(statearr_20940[(24)] = inst_20883);

return statearr_20940;
})();
var statearr_20941_21020 = state_20911__$1;
(statearr_20941_21020[(2)] = inst_20884);

(statearr_20941_21020[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (33))){
var inst_20870 = (state_20911[(25)]);
var inst_20872 = cljs.core.chunked_seq_QMARK_(inst_20870);
var state_20911__$1 = state_20911;
if(inst_20872){
var statearr_20942_21021 = state_20911__$1;
(statearr_20942_21021[(1)] = (36));

} else {
var statearr_20943_21022 = state_20911__$1;
(statearr_20943_21022[(1)] = (37));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (13))){
var inst_20802 = (state_20911[(26)]);
var inst_20805 = cljs.core.async.close_BANG_(inst_20802);
var state_20911__$1 = state_20911;
var statearr_20944_21023 = state_20911__$1;
(statearr_20944_21023[(2)] = inst_20805);

(statearr_20944_21023[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (22))){
var inst_20823 = (state_20911[(8)]);
var inst_20826 = cljs.core.async.close_BANG_(inst_20823);
var state_20911__$1 = state_20911;
var statearr_20945_21024 = state_20911__$1;
(statearr_20945_21024[(2)] = inst_20826);

(statearr_20945_21024[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (36))){
var inst_20870 = (state_20911[(25)]);
var inst_20874 = cljs.core.chunk_first(inst_20870);
var inst_20875 = cljs.core.chunk_rest(inst_20870);
var inst_20876 = cljs.core.count(inst_20874);
var inst_20851 = inst_20875;
var inst_20852 = inst_20874;
var inst_20853 = inst_20876;
var inst_20854 = (0);
var state_20911__$1 = (function (){var statearr_20946 = state_20911;
(statearr_20946[(9)] = inst_20854);

(statearr_20946[(20)] = inst_20851);

(statearr_20946[(12)] = inst_20852);

(statearr_20946[(21)] = inst_20853);

return statearr_20946;
})();
var statearr_20947_21025 = state_20911__$1;
(statearr_20947_21025[(2)] = null);

(statearr_20947_21025[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (41))){
var inst_20870 = (state_20911[(25)]);
var inst_20886 = (state_20911[(2)]);
var inst_20887 = cljs.core.next(inst_20870);
var inst_20851 = inst_20887;
var inst_20852 = null;
var inst_20853 = (0);
var inst_20854 = (0);
var state_20911__$1 = (function (){var statearr_20948 = state_20911;
(statearr_20948[(9)] = inst_20854);

(statearr_20948[(20)] = inst_20851);

(statearr_20948[(27)] = inst_20886);

(statearr_20948[(12)] = inst_20852);

(statearr_20948[(21)] = inst_20853);

return statearr_20948;
})();
var statearr_20949_21026 = state_20911__$1;
(statearr_20949_21026[(2)] = null);

(statearr_20949_21026[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (43))){
var state_20911__$1 = state_20911;
var statearr_20950_21027 = state_20911__$1;
(statearr_20950_21027[(2)] = null);

(statearr_20950_21027[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (29))){
var inst_20895 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
var statearr_20951_21028 = state_20911__$1;
(statearr_20951_21028[(2)] = inst_20895);

(statearr_20951_21028[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (44))){
var inst_20904 = (state_20911[(2)]);
var state_20911__$1 = (function (){var statearr_20952 = state_20911;
(statearr_20952[(28)] = inst_20904);

return statearr_20952;
})();
var statearr_20953_21029 = state_20911__$1;
(statearr_20953_21029[(2)] = null);

(statearr_20953_21029[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (6))){
var inst_20843 = (state_20911[(29)]);
var inst_20842 = (function (){var G__20954 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20954) : cljs.core.deref.call(null,G__20954));
})();
var inst_20843__$1 = cljs.core.keys(inst_20842);
var inst_20844 = cljs.core.count(inst_20843__$1);
var inst_20845 = (function (){var G__20955 = dctr;
var G__20956 = inst_20844;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20955,G__20956) : cljs.core.reset_BANG_.call(null,G__20955,G__20956));
})();
var inst_20850 = cljs.core.seq(inst_20843__$1);
var inst_20851 = inst_20850;
var inst_20852 = null;
var inst_20853 = (0);
var inst_20854 = (0);
var state_20911__$1 = (function (){var statearr_20957 = state_20911;
(statearr_20957[(9)] = inst_20854);

(statearr_20957[(29)] = inst_20843__$1);

(statearr_20957[(20)] = inst_20851);

(statearr_20957[(12)] = inst_20852);

(statearr_20957[(21)] = inst_20853);

(statearr_20957[(30)] = inst_20845);

return statearr_20957;
})();
var statearr_20958_21030 = state_20911__$1;
(statearr_20958_21030[(2)] = null);

(statearr_20958_21030[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (28))){
var inst_20870 = (state_20911[(25)]);
var inst_20851 = (state_20911[(20)]);
var inst_20870__$1 = cljs.core.seq(inst_20851);
var state_20911__$1 = (function (){var statearr_20959 = state_20911;
(statearr_20959[(25)] = inst_20870__$1);

return statearr_20959;
})();
if(inst_20870__$1){
var statearr_20960_21031 = state_20911__$1;
(statearr_20960_21031[(1)] = (33));

} else {
var statearr_20961_21032 = state_20911__$1;
(statearr_20961_21032[(1)] = (34));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (25))){
var inst_20854 = (state_20911[(9)]);
var inst_20853 = (state_20911[(21)]);
var inst_20856 = (inst_20854 < inst_20853);
var inst_20857 = inst_20856;
var state_20911__$1 = state_20911;
if(cljs.core.truth_(inst_20857)){
var statearr_20962_21033 = state_20911__$1;
(statearr_20962_21033[(1)] = (27));

} else {
var statearr_20963_21034 = state_20911__$1;
(statearr_20963_21034[(1)] = (28));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (34))){
var state_20911__$1 = state_20911;
var statearr_20964_21035 = state_20911__$1;
(statearr_20964_21035[(2)] = null);

(statearr_20964_21035[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (17))){
var state_20911__$1 = state_20911;
var statearr_20965_21036 = state_20911__$1;
(statearr_20965_21036[(2)] = null);

(statearr_20965_21036[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (3))){
var inst_20909 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20911__$1,inst_20909);
} else {
if((state_val_20912 === (12))){
var inst_20838 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
var statearr_20966_21037 = state_20911__$1;
(statearr_20966_21037[(2)] = inst_20838);

(statearr_20966_21037[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (2))){
var state_20911__$1 = state_20911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20911__$1,(4),ch);
} else {
if((state_val_20912 === (23))){
var state_20911__$1 = state_20911;
var statearr_20967_21038 = state_20911__$1;
(statearr_20967_21038[(2)] = null);

(statearr_20967_21038[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (35))){
var inst_20893 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
var statearr_20968_21039 = state_20911__$1;
(statearr_20968_21039[(2)] = inst_20893);

(statearr_20968_21039[(1)] = (29));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (19))){
var inst_20812 = (state_20911[(7)]);
var inst_20816 = cljs.core.chunk_first(inst_20812);
var inst_20817 = cljs.core.chunk_rest(inst_20812);
var inst_20818 = cljs.core.count(inst_20816);
var inst_20792 = inst_20817;
var inst_20793 = inst_20816;
var inst_20794 = inst_20818;
var inst_20795 = (0);
var state_20911__$1 = (function (){var statearr_20969 = state_20911;
(statearr_20969[(14)] = inst_20794);

(statearr_20969[(15)] = inst_20792);

(statearr_20969[(16)] = inst_20795);

(statearr_20969[(17)] = inst_20793);

return statearr_20969;
})();
var statearr_20970_21040 = state_20911__$1;
(statearr_20970_21040[(2)] = null);

(statearr_20970_21040[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (11))){
var inst_20792 = (state_20911[(15)]);
var inst_20812 = (state_20911[(7)]);
var inst_20812__$1 = cljs.core.seq(inst_20792);
var state_20911__$1 = (function (){var statearr_20971 = state_20911;
(statearr_20971[(7)] = inst_20812__$1);

return statearr_20971;
})();
if(inst_20812__$1){
var statearr_20972_21041 = state_20911__$1;
(statearr_20972_21041[(1)] = (16));

} else {
var statearr_20973_21042 = state_20911__$1;
(statearr_20973_21042[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (9))){
var inst_20840 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
var statearr_20974_21043 = state_20911__$1;
(statearr_20974_21043[(2)] = inst_20840);

(statearr_20974_21043[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (5))){
var inst_20790 = (function (){var G__20975 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20975) : cljs.core.deref.call(null,G__20975));
})();
var inst_20791 = cljs.core.seq(inst_20790);
var inst_20792 = inst_20791;
var inst_20793 = null;
var inst_20794 = (0);
var inst_20795 = (0);
var state_20911__$1 = (function (){var statearr_20976 = state_20911;
(statearr_20976[(14)] = inst_20794);

(statearr_20976[(15)] = inst_20792);

(statearr_20976[(16)] = inst_20795);

(statearr_20976[(17)] = inst_20793);

return statearr_20976;
})();
var statearr_20977_21044 = state_20911__$1;
(statearr_20977_21044[(2)] = null);

(statearr_20977_21044[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (14))){
var state_20911__$1 = state_20911;
var statearr_20978_21045 = state_20911__$1;
(statearr_20978_21045[(2)] = null);

(statearr_20978_21045[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (45))){
var inst_20901 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
var statearr_20979_21046 = state_20911__$1;
(statearr_20979_21046[(2)] = inst_20901);

(statearr_20979_21046[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (26))){
var inst_20843 = (state_20911[(29)]);
var inst_20897 = (state_20911[(2)]);
var inst_20898 = cljs.core.seq(inst_20843);
var state_20911__$1 = (function (){var statearr_20980 = state_20911;
(statearr_20980[(31)] = inst_20897);

return statearr_20980;
})();
if(inst_20898){
var statearr_20981_21047 = state_20911__$1;
(statearr_20981_21047[(1)] = (42));

} else {
var statearr_20982_21048 = state_20911__$1;
(statearr_20982_21048[(1)] = (43));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (16))){
var inst_20812 = (state_20911[(7)]);
var inst_20814 = cljs.core.chunked_seq_QMARK_(inst_20812);
var state_20911__$1 = state_20911;
if(inst_20814){
var statearr_20983_21049 = state_20911__$1;
(statearr_20983_21049[(1)] = (19));

} else {
var statearr_20984_21050 = state_20911__$1;
(statearr_20984_21050[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (38))){
var inst_20890 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
var statearr_20985_21051 = state_20911__$1;
(statearr_20985_21051[(2)] = inst_20890);

(statearr_20985_21051[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (30))){
var state_20911__$1 = state_20911;
var statearr_20986_21052 = state_20911__$1;
(statearr_20986_21052[(2)] = null);

(statearr_20986_21052[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (10))){
var inst_20795 = (state_20911[(16)]);
var inst_20793 = (state_20911[(17)]);
var inst_20801 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20793,inst_20795);
var inst_20802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20801,(0),null);
var inst_20803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20801,(1),null);
var state_20911__$1 = (function (){var statearr_20987 = state_20911;
(statearr_20987[(26)] = inst_20802);

return statearr_20987;
})();
if(cljs.core.truth_(inst_20803)){
var statearr_20988_21053 = state_20911__$1;
(statearr_20988_21053[(1)] = (13));

} else {
var statearr_20989_21054 = state_20911__$1;
(statearr_20989_21054[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (18))){
var inst_20836 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
var statearr_20990_21055 = state_20911__$1;
(statearr_20990_21055[(2)] = inst_20836);

(statearr_20990_21055[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (42))){
var state_20911__$1 = state_20911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20911__$1,(45),dchan);
} else {
if((state_val_20912 === (37))){
var inst_20870 = (state_20911[(25)]);
var inst_20783 = (state_20911[(11)]);
var inst_20879 = (state_20911[(23)]);
var inst_20879__$1 = cljs.core.first(inst_20870);
var inst_20880 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20879__$1,inst_20783,done);
var state_20911__$1 = (function (){var statearr_20991 = state_20911;
(statearr_20991[(23)] = inst_20879__$1);

return statearr_20991;
})();
if(cljs.core.truth_(inst_20880)){
var statearr_20992_21056 = state_20911__$1;
(statearr_20992_21056[(1)] = (39));

} else {
var statearr_20993_21057 = state_20911__$1;
(statearr_20993_21057[(1)] = (40));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20912 === (8))){
var inst_20794 = (state_20911[(14)]);
var inst_20795 = (state_20911[(16)]);
var inst_20797 = (inst_20795 < inst_20794);
var inst_20798 = inst_20797;
var state_20911__$1 = state_20911;
if(cljs.core.truth_(inst_20798)){
var statearr_20994_21058 = state_20911__$1;
(statearr_20994_21058[(1)] = (10));

} else {
var statearr_20995_21059 = state_20911__$1;
(statearr_20995_21059[(1)] = (11));

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
});})(c__13630__auto___21005,cs,m,dchan,dctr,done))
;
return ((function (switch__13552__auto__,c__13630__auto___21005,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13553__auto__ = null;
var cljs$core$async$mult_$_state_machine__13553__auto____0 = (function (){
var statearr_20999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20999[(0)] = cljs$core$async$mult_$_state_machine__13553__auto__);

(statearr_20999[(1)] = (1));

return statearr_20999;
});
var cljs$core$async$mult_$_state_machine__13553__auto____1 = (function (state_20911){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_20911);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e21000){if((e21000 instanceof Object)){
var ex__13556__auto__ = e21000;
var statearr_21001_21060 = state_20911;
(statearr_21001_21060[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20911);

return cljs.core.constant$keyword$recur;
} else {
throw e21000;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__21061 = state_20911;
state_20911 = G__21061;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13553__auto__ = function(state_20911){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13553__auto____1.call(this,state_20911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13553__auto____0;
cljs$core$async$mult_$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13553__auto____1;
return cljs$core$async$mult_$_state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___21005,cs,m,dchan,dctr,done))
})();
var state__13632__auto__ = (function (){var statearr_21002 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_21002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___21005);

return statearr_21002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___21005,cs,m,dchan,dctr,done))
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
var G__21063 = arguments.length;
switch (G__21063) {
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

cljs.core.async.Mix = (function (){var obj21066 = {};
return obj21066;
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
return (function (){var or__4338__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__21070 = x__4974__auto__;
return goog.typeOf(G__21070);
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
return (function (){var or__4338__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__21074 = x__4974__auto__;
return goog.typeOf(G__21074);
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
return (function (){var or__4338__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__21078 = x__4974__auto__;
return goog.typeOf(G__21078);
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
return (function (){var or__4338__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__21082 = x__4974__auto__;
return goog.typeOf(G__21082);
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
return (function (){var or__4338__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__21086 = x__4974__auto__;
return goog.typeOf(G__21086);
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21091){
var map__21092 = p__21091;
var map__21092__$1 = ((cljs.core.seq_QMARK_(map__21092))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21092):map__21092);
var opts = map__21092__$1;
var statearr_21093_21097 = state;
(statearr_21093_21097[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts(((function (map__21092,map__21092__$1,opts){
return (function (val){
var statearr_21094_21098 = state;
(statearr_21094_21098[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__21092,map__21092__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_21095_21099 = state;
(statearr_21095_21099[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__21096 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21096) : cljs.core.deref.call(null,G__21096));
})());


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21087){
var G__21088 = cljs.core.first(seq21087);
var seq21087__$1 = cljs.core.next(seq21087);
var G__21089 = cljs.core.first(seq21087__$1);
var seq21087__$2 = cljs.core.next(seq21087__$1);
var G__21090 = cljs.core.first(seq21087__$2);
var seq21087__$3 = cljs.core.next(seq21087__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21088,G__21089,G__21090,seq21087__$3);
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
var cs = (function (){var G__21233 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21233) : cljs.core.atom.call(null,G__21233));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$pause,null,cljs.core.constant$keyword$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$solo);
var solo_mode = (function (){var G__21234 = cljs.core.constant$keyword$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21234) : cljs.core.atom.call(null,G__21234));
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
if(cljs.core.truth_((function (){var G__21235 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__21235) : attr.call(null,G__21235));
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
var chs = (function (){var G__21236 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21236) : cljs.core.deref.call(null,G__21236));
})();
var mode = (function (){var G__21237 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21237) : cljs.core.deref.call(null,G__21237));
})();
var solos = pick(cljs.core.constant$keyword$solo,chs);
var pauses = pick(cljs.core.constant$keyword$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$solos,solos,cljs.core.constant$keyword$mutes,pick(cljs.core.constant$keyword$mute,chs),cljs.core.constant$keyword$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t21238 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21238 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21239){
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
this.meta21239 = meta21239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21240,meta21239__$1){
var self__ = this;
var _21240__$1 = this;
return (new cljs.core.async.t21238(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21239__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21240){
var self__ = this;
var _21240__$1 = this;
return self__.meta21239;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21238.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21238.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21238.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21238.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21238.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21241_21366 = self__.cs;
var G__21242_21367 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21241_21366,G__21242_21367) : cljs.core.reset_BANG_.call(null,G__21241_21366,G__21242_21367));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21238.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21238.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__21243 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__21243) : self__.solo_modes.call(null,G__21243));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__21244_21368 = self__.solo_mode;
var G__21245_21369 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21244_21368,G__21245_21369) : cljs.core.reset_BANG_.call(null,G__21244_21368,G__21245_21369));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21238.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21239","meta21239",238325069,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21238.cljs$lang$type = true;

cljs.core.async.t21238.cljs$lang$ctorStr = "cljs.core.async/t21238";

cljs.core.async.t21238.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t21238");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21238 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t21238(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21239){
return (new cljs.core.async.t21238(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21239));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21238(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13630__auto___21370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___21370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___21370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21317){
var state_val_21318 = (state_21317[(1)]);
if((state_val_21318 === (7))){
var inst_21259 = (state_21317[(7)]);
var inst_21264 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21259);
var state_21317__$1 = state_21317;
var statearr_21319_21371 = state_21317__$1;
(statearr_21319_21371[(2)] = inst_21264);

(statearr_21319_21371[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (20))){
var inst_21274 = (state_21317[(8)]);
var state_21317__$1 = state_21317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21317__$1,(23),out,inst_21274);
} else {
if((state_val_21318 === (1))){
var inst_21249 = (state_21317[(9)]);
var inst_21249__$1 = calc_state();
var inst_21250 = cljs.core.seq_QMARK_(inst_21249__$1);
var state_21317__$1 = (function (){var statearr_21320 = state_21317;
(statearr_21320[(9)] = inst_21249__$1);

return statearr_21320;
})();
if(inst_21250){
var statearr_21321_21372 = state_21317__$1;
(statearr_21321_21372[(1)] = (2));

} else {
var statearr_21322_21373 = state_21317__$1;
(statearr_21322_21373[(1)] = (3));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (24))){
var inst_21267 = (state_21317[(10)]);
var inst_21259 = inst_21267;
var state_21317__$1 = (function (){var statearr_21323 = state_21317;
(statearr_21323[(7)] = inst_21259);

return statearr_21323;
})();
var statearr_21324_21374 = state_21317__$1;
(statearr_21324_21374[(2)] = null);

(statearr_21324_21374[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (4))){
var inst_21249 = (state_21317[(9)]);
var inst_21255 = (state_21317[(2)]);
var inst_21256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21255,cljs.core.constant$keyword$solos);
var inst_21257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21255,cljs.core.constant$keyword$mutes);
var inst_21258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21255,cljs.core.constant$keyword$reads);
var inst_21259 = inst_21249;
var state_21317__$1 = (function (){var statearr_21325 = state_21317;
(statearr_21325[(11)] = inst_21257);

(statearr_21325[(12)] = inst_21256);

(statearr_21325[(7)] = inst_21259);

(statearr_21325[(13)] = inst_21258);

return statearr_21325;
})();
var statearr_21326_21375 = state_21317__$1;
(statearr_21326_21375[(2)] = null);

(statearr_21326_21375[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (15))){
var state_21317__$1 = state_21317;
var statearr_21327_21376 = state_21317__$1;
(statearr_21327_21376[(2)] = null);

(statearr_21327_21376[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (21))){
var inst_21267 = (state_21317[(10)]);
var inst_21259 = inst_21267;
var state_21317__$1 = (function (){var statearr_21328 = state_21317;
(statearr_21328[(7)] = inst_21259);

return statearr_21328;
})();
var statearr_21329_21377 = state_21317__$1;
(statearr_21329_21377[(2)] = null);

(statearr_21329_21377[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (13))){
var inst_21313 = (state_21317[(2)]);
var state_21317__$1 = state_21317;
var statearr_21330_21378 = state_21317__$1;
(statearr_21330_21378[(2)] = inst_21313);

(statearr_21330_21378[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (22))){
var inst_21311 = (state_21317[(2)]);
var state_21317__$1 = state_21317;
var statearr_21331_21379 = state_21317__$1;
(statearr_21331_21379[(2)] = inst_21311);

(statearr_21331_21379[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (6))){
var inst_21315 = (state_21317[(2)]);
var state_21317__$1 = state_21317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21317__$1,inst_21315);
} else {
if((state_val_21318 === (25))){
var state_21317__$1 = state_21317;
var statearr_21332_21380 = state_21317__$1;
(statearr_21332_21380[(2)] = null);

(statearr_21332_21380[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (17))){
var inst_21290 = (state_21317[(14)]);
var state_21317__$1 = state_21317;
var statearr_21333_21381 = state_21317__$1;
(statearr_21333_21381[(2)] = inst_21290);

(statearr_21333_21381[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (3))){
var inst_21249 = (state_21317[(9)]);
var state_21317__$1 = state_21317;
var statearr_21334_21382 = state_21317__$1;
(statearr_21334_21382[(2)] = inst_21249);

(statearr_21334_21382[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (12))){
var inst_21268 = (state_21317[(15)]);
var inst_21275 = (state_21317[(16)]);
var inst_21290 = (state_21317[(14)]);
var inst_21290__$1 = (function (){var G__21335 = inst_21275;
return (inst_21268.cljs$core$IFn$_invoke$arity$1 ? inst_21268.cljs$core$IFn$_invoke$arity$1(G__21335) : inst_21268.call(null,G__21335));
})();
var state_21317__$1 = (function (){var statearr_21336 = state_21317;
(statearr_21336[(14)] = inst_21290__$1);

return statearr_21336;
})();
if(cljs.core.truth_(inst_21290__$1)){
var statearr_21337_21383 = state_21317__$1;
(statearr_21337_21383[(1)] = (17));

} else {
var statearr_21338_21384 = state_21317__$1;
(statearr_21338_21384[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (2))){
var inst_21249 = (state_21317[(9)]);
var inst_21252 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21249);
var state_21317__$1 = state_21317;
var statearr_21339_21385 = state_21317__$1;
(statearr_21339_21385[(2)] = inst_21252);

(statearr_21339_21385[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (23))){
var inst_21302 = (state_21317[(2)]);
var state_21317__$1 = state_21317;
if(cljs.core.truth_(inst_21302)){
var statearr_21340_21386 = state_21317__$1;
(statearr_21340_21386[(1)] = (24));

} else {
var statearr_21341_21387 = state_21317__$1;
(statearr_21341_21387[(1)] = (25));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (19))){
var inst_21299 = (state_21317[(2)]);
var state_21317__$1 = state_21317;
if(cljs.core.truth_(inst_21299)){
var statearr_21342_21388 = state_21317__$1;
(statearr_21342_21388[(1)] = (20));

} else {
var statearr_21343_21389 = state_21317__$1;
(statearr_21343_21389[(1)] = (21));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (11))){
var inst_21274 = (state_21317[(8)]);
var inst_21280 = (inst_21274 == null);
var state_21317__$1 = state_21317;
if(cljs.core.truth_(inst_21280)){
var statearr_21344_21390 = state_21317__$1;
(statearr_21344_21390[(1)] = (14));

} else {
var statearr_21345_21391 = state_21317__$1;
(statearr_21345_21391[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (9))){
var inst_21267 = (state_21317[(10)]);
var inst_21267__$1 = (state_21317[(2)]);
var inst_21268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21267__$1,cljs.core.constant$keyword$solos);
var inst_21269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21267__$1,cljs.core.constant$keyword$mutes);
var inst_21270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21267__$1,cljs.core.constant$keyword$reads);
var state_21317__$1 = (function (){var statearr_21346 = state_21317;
(statearr_21346[(15)] = inst_21268);

(statearr_21346[(17)] = inst_21269);

(statearr_21346[(10)] = inst_21267__$1);

return statearr_21346;
})();
return cljs.core.async.ioc_alts_BANG_(state_21317__$1,(10),inst_21270);
} else {
if((state_val_21318 === (5))){
var inst_21259 = (state_21317[(7)]);
var inst_21262 = cljs.core.seq_QMARK_(inst_21259);
var state_21317__$1 = state_21317;
if(inst_21262){
var statearr_21347_21392 = state_21317__$1;
(statearr_21347_21392[(1)] = (7));

} else {
var statearr_21348_21393 = state_21317__$1;
(statearr_21348_21393[(1)] = (8));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (14))){
var inst_21275 = (state_21317[(16)]);
var inst_21282 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21275);
var state_21317__$1 = state_21317;
var statearr_21349_21394 = state_21317__$1;
(statearr_21349_21394[(2)] = inst_21282);

(statearr_21349_21394[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (26))){
var inst_21307 = (state_21317[(2)]);
var state_21317__$1 = state_21317;
var statearr_21350_21395 = state_21317__$1;
(statearr_21350_21395[(2)] = inst_21307);

(statearr_21350_21395[(1)] = (22));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (16))){
var inst_21285 = (state_21317[(2)]);
var inst_21286 = calc_state();
var inst_21259 = inst_21286;
var state_21317__$1 = (function (){var statearr_21351 = state_21317;
(statearr_21351[(7)] = inst_21259);

(statearr_21351[(18)] = inst_21285);

return statearr_21351;
})();
var statearr_21352_21396 = state_21317__$1;
(statearr_21352_21396[(2)] = null);

(statearr_21352_21396[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (10))){
var inst_21275 = (state_21317[(16)]);
var inst_21274 = (state_21317[(8)]);
var inst_21273 = (state_21317[(2)]);
var inst_21274__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21273,(0),null);
var inst_21275__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21273,(1),null);
var inst_21276 = (inst_21274__$1 == null);
var inst_21277 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21275__$1,change);
var inst_21278 = (inst_21276) || (inst_21277);
var state_21317__$1 = (function (){var statearr_21353 = state_21317;
(statearr_21353[(16)] = inst_21275__$1);

(statearr_21353[(8)] = inst_21274__$1);

return statearr_21353;
})();
if(cljs.core.truth_(inst_21278)){
var statearr_21354_21397 = state_21317__$1;
(statearr_21354_21397[(1)] = (11));

} else {
var statearr_21355_21398 = state_21317__$1;
(statearr_21355_21398[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (18))){
var inst_21268 = (state_21317[(15)]);
var inst_21275 = (state_21317[(16)]);
var inst_21269 = (state_21317[(17)]);
var inst_21294 = cljs.core.empty_QMARK_(inst_21268);
var inst_21295 = (function (){var G__21356 = inst_21275;
return (inst_21269.cljs$core$IFn$_invoke$arity$1 ? inst_21269.cljs$core$IFn$_invoke$arity$1(G__21356) : inst_21269.call(null,G__21356));
})();
var inst_21296 = cljs.core.not(inst_21295);
var inst_21297 = (inst_21294) && (inst_21296);
var state_21317__$1 = state_21317;
var statearr_21357_21399 = state_21317__$1;
(statearr_21357_21399[(2)] = inst_21297);

(statearr_21357_21399[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21318 === (8))){
var inst_21259 = (state_21317[(7)]);
var state_21317__$1 = state_21317;
var statearr_21358_21400 = state_21317__$1;
(statearr_21358_21400[(2)] = inst_21259);

(statearr_21358_21400[(1)] = (9));


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
});})(c__13630__auto___21370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13552__auto__,c__13630__auto___21370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13553__auto__ = null;
var cljs$core$async$mix_$_state_machine__13553__auto____0 = (function (){
var statearr_21362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21362[(0)] = cljs$core$async$mix_$_state_machine__13553__auto__);

(statearr_21362[(1)] = (1));

return statearr_21362;
});
var cljs$core$async$mix_$_state_machine__13553__auto____1 = (function (state_21317){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_21317);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e21363){if((e21363 instanceof Object)){
var ex__13556__auto__ = e21363;
var statearr_21364_21401 = state_21317;
(statearr_21364_21401[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21317);

return cljs.core.constant$keyword$recur;
} else {
throw e21363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__21402 = state_21317;
state_21317 = G__21402;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13553__auto__ = function(state_21317){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13553__auto____1.call(this,state_21317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13553__auto____0;
cljs$core$async$mix_$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13553__auto____1;
return cljs$core$async$mix_$_state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___21370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13632__auto__ = (function (){var statearr_21365 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_21365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___21370);

return statearr_21365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___21370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj21404 = {};
return obj21404;
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
return (function (){var or__4338__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__21408 = x__4974__auto__;
return goog.typeOf(G__21408);
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
return (function (){var or__4338__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__21412 = x__4974__auto__;
return goog.typeOf(G__21412);
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
var G__21414 = arguments.length;
switch (G__21414) {
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
return (function (){var or__4338__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__21416 = x__4974__auto__;
return goog.typeOf(G__21416);
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
return (function (){var or__4338__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__21418 = x__4974__auto__;
return goog.typeOf(G__21418);
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
var G__21422 = arguments.length;
switch (G__21422) {
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
var mults = (function (){var G__21423 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21423) : cljs.core.atom.call(null,G__21423));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4338__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21425 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21425) : cljs.core.deref.call(null,G__21425));
})(),topic);
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4338__auto__,mults){
return (function (p1__21420_SHARP_){
if(cljs.core.truth_((function (){var G__21426 = topic;
return (p1__21420_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21420_SHARP_.cljs$core$IFn$_invoke$arity$1(G__21426) : p1__21420_SHARP_.call(null,G__21426));
})())){
return p1__21420_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21420_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__21427 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__21427) : buf_fn.call(null,G__21427));
})())));
}
});})(or__4338__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21428 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21428 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21429){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21429 = meta21429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21430,meta21429__$1){
var self__ = this;
var _21430__$1 = this;
return (new cljs.core.async.t21428(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21429__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21430){
var self__ = this;
var _21430__$1 = this;
return self__.meta21429;
});})(mults,ensure_mult))
;

cljs.core.async.t21428.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21428.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21428.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__21431 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__21431) : self__.ensure_mult.call(null,G__21431));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21428.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21432 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21432) : cljs.core.deref.call(null,G__21432));
})(),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t21428.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21433 = self__.mults;
var G__21434 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21433,G__21434) : cljs.core.reset_BANG_.call(null,G__21433,G__21434));
});})(mults,ensure_mult))
;

cljs.core.async.t21428.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21428.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21429","meta21429",438631758,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t21428.cljs$lang$type = true;

cljs.core.async.t21428.cljs$lang$ctorStr = "cljs.core.async/t21428";

cljs.core.async.t21428.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t21428");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21428 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t21428(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21429){
return (new cljs.core.async.t21428(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21429));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21428(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13630__auto___21558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___21558,mults,ensure_mult,p){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___21558,mults,ensure_mult,p){
return (function (state_21506){
var state_val_21507 = (state_21506[(1)]);
if((state_val_21507 === (7))){
var inst_21502 = (state_21506[(2)]);
var state_21506__$1 = state_21506;
var statearr_21508_21559 = state_21506__$1;
(statearr_21508_21559[(2)] = inst_21502);

(statearr_21508_21559[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (20))){
var state_21506__$1 = state_21506;
var statearr_21509_21560 = state_21506__$1;
(statearr_21509_21560[(2)] = null);

(statearr_21509_21560[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (1))){
var state_21506__$1 = state_21506;
var statearr_21510_21561 = state_21506__$1;
(statearr_21510_21561[(2)] = null);

(statearr_21510_21561[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (24))){
var inst_21485 = (state_21506[(7)]);
var inst_21494 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_21485);
var state_21506__$1 = state_21506;
var statearr_21511_21562 = state_21506__$1;
(statearr_21511_21562[(2)] = inst_21494);

(statearr_21511_21562[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (4))){
var inst_21437 = (state_21506[(8)]);
var inst_21437__$1 = (state_21506[(2)]);
var inst_21438 = (inst_21437__$1 == null);
var state_21506__$1 = (function (){var statearr_21512 = state_21506;
(statearr_21512[(8)] = inst_21437__$1);

return statearr_21512;
})();
if(cljs.core.truth_(inst_21438)){
var statearr_21513_21563 = state_21506__$1;
(statearr_21513_21563[(1)] = (5));

} else {
var statearr_21514_21564 = state_21506__$1;
(statearr_21514_21564[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (15))){
var inst_21479 = (state_21506[(2)]);
var state_21506__$1 = state_21506;
var statearr_21515_21565 = state_21506__$1;
(statearr_21515_21565[(2)] = inst_21479);

(statearr_21515_21565[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (21))){
var inst_21499 = (state_21506[(2)]);
var state_21506__$1 = (function (){var statearr_21516 = state_21506;
(statearr_21516[(9)] = inst_21499);

return statearr_21516;
})();
var statearr_21517_21566 = state_21506__$1;
(statearr_21517_21566[(2)] = null);

(statearr_21517_21566[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (13))){
var inst_21461 = (state_21506[(10)]);
var inst_21463 = cljs.core.chunked_seq_QMARK_(inst_21461);
var state_21506__$1 = state_21506;
if(inst_21463){
var statearr_21518_21567 = state_21506__$1;
(statearr_21518_21567[(1)] = (16));

} else {
var statearr_21519_21568 = state_21506__$1;
(statearr_21519_21568[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (22))){
var inst_21491 = (state_21506[(2)]);
var state_21506__$1 = state_21506;
if(cljs.core.truth_(inst_21491)){
var statearr_21520_21569 = state_21506__$1;
(statearr_21520_21569[(1)] = (23));

} else {
var statearr_21521_21570 = state_21506__$1;
(statearr_21521_21570[(1)] = (24));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (6))){
var inst_21487 = (state_21506[(11)]);
var inst_21437 = (state_21506[(8)]);
var inst_21485 = (state_21506[(7)]);
var inst_21485__$1 = (function (){var G__21522 = inst_21437;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__21522) : topic_fn.call(null,G__21522));
})();
var inst_21486 = (function (){var G__21523 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21523) : cljs.core.deref.call(null,G__21523));
})();
var inst_21487__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21486,inst_21485__$1);
var state_21506__$1 = (function (){var statearr_21524 = state_21506;
(statearr_21524[(11)] = inst_21487__$1);

(statearr_21524[(7)] = inst_21485__$1);

return statearr_21524;
})();
if(cljs.core.truth_(inst_21487__$1)){
var statearr_21525_21571 = state_21506__$1;
(statearr_21525_21571[(1)] = (19));

} else {
var statearr_21526_21572 = state_21506__$1;
(statearr_21526_21572[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (25))){
var inst_21496 = (state_21506[(2)]);
var state_21506__$1 = state_21506;
var statearr_21527_21573 = state_21506__$1;
(statearr_21527_21573[(2)] = inst_21496);

(statearr_21527_21573[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (17))){
var inst_21461 = (state_21506[(10)]);
var inst_21470 = cljs.core.first(inst_21461);
var inst_21471 = cljs.core.async.muxch_STAR_(inst_21470);
var inst_21472 = cljs.core.async.close_BANG_(inst_21471);
var inst_21473 = cljs.core.next(inst_21461);
var inst_21447 = inst_21473;
var inst_21448 = null;
var inst_21449 = (0);
var inst_21450 = (0);
var state_21506__$1 = (function (){var statearr_21528 = state_21506;
(statearr_21528[(12)] = inst_21450);

(statearr_21528[(13)] = inst_21449);

(statearr_21528[(14)] = inst_21447);

(statearr_21528[(15)] = inst_21448);

(statearr_21528[(16)] = inst_21472);

return statearr_21528;
})();
var statearr_21529_21574 = state_21506__$1;
(statearr_21529_21574[(2)] = null);

(statearr_21529_21574[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (3))){
var inst_21504 = (state_21506[(2)]);
var state_21506__$1 = state_21506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21506__$1,inst_21504);
} else {
if((state_val_21507 === (12))){
var inst_21481 = (state_21506[(2)]);
var state_21506__$1 = state_21506;
var statearr_21530_21575 = state_21506__$1;
(statearr_21530_21575[(2)] = inst_21481);

(statearr_21530_21575[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (2))){
var state_21506__$1 = state_21506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21506__$1,(4),ch);
} else {
if((state_val_21507 === (23))){
var state_21506__$1 = state_21506;
var statearr_21531_21576 = state_21506__$1;
(statearr_21531_21576[(2)] = null);

(statearr_21531_21576[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (19))){
var inst_21487 = (state_21506[(11)]);
var inst_21437 = (state_21506[(8)]);
var inst_21489 = cljs.core.async.muxch_STAR_(inst_21487);
var state_21506__$1 = state_21506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21506__$1,(22),inst_21489,inst_21437);
} else {
if((state_val_21507 === (11))){
var inst_21447 = (state_21506[(14)]);
var inst_21461 = (state_21506[(10)]);
var inst_21461__$1 = cljs.core.seq(inst_21447);
var state_21506__$1 = (function (){var statearr_21532 = state_21506;
(statearr_21532[(10)] = inst_21461__$1);

return statearr_21532;
})();
if(inst_21461__$1){
var statearr_21533_21577 = state_21506__$1;
(statearr_21533_21577[(1)] = (13));

} else {
var statearr_21534_21578 = state_21506__$1;
(statearr_21534_21578[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (9))){
var inst_21483 = (state_21506[(2)]);
var state_21506__$1 = state_21506;
var statearr_21535_21579 = state_21506__$1;
(statearr_21535_21579[(2)] = inst_21483);

(statearr_21535_21579[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (5))){
var inst_21444 = (function (){var G__21536 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21536) : cljs.core.deref.call(null,G__21536));
})();
var inst_21445 = cljs.core.vals(inst_21444);
var inst_21446 = cljs.core.seq(inst_21445);
var inst_21447 = inst_21446;
var inst_21448 = null;
var inst_21449 = (0);
var inst_21450 = (0);
var state_21506__$1 = (function (){var statearr_21537 = state_21506;
(statearr_21537[(12)] = inst_21450);

(statearr_21537[(13)] = inst_21449);

(statearr_21537[(14)] = inst_21447);

(statearr_21537[(15)] = inst_21448);

return statearr_21537;
})();
var statearr_21538_21580 = state_21506__$1;
(statearr_21538_21580[(2)] = null);

(statearr_21538_21580[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (14))){
var state_21506__$1 = state_21506;
var statearr_21542_21581 = state_21506__$1;
(statearr_21542_21581[(2)] = null);

(statearr_21542_21581[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (16))){
var inst_21461 = (state_21506[(10)]);
var inst_21465 = cljs.core.chunk_first(inst_21461);
var inst_21466 = cljs.core.chunk_rest(inst_21461);
var inst_21467 = cljs.core.count(inst_21465);
var inst_21447 = inst_21466;
var inst_21448 = inst_21465;
var inst_21449 = inst_21467;
var inst_21450 = (0);
var state_21506__$1 = (function (){var statearr_21543 = state_21506;
(statearr_21543[(12)] = inst_21450);

(statearr_21543[(13)] = inst_21449);

(statearr_21543[(14)] = inst_21447);

(statearr_21543[(15)] = inst_21448);

return statearr_21543;
})();
var statearr_21544_21582 = state_21506__$1;
(statearr_21544_21582[(2)] = null);

(statearr_21544_21582[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (10))){
var inst_21450 = (state_21506[(12)]);
var inst_21449 = (state_21506[(13)]);
var inst_21447 = (state_21506[(14)]);
var inst_21448 = (state_21506[(15)]);
var inst_21455 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21448,inst_21450);
var inst_21456 = cljs.core.async.muxch_STAR_(inst_21455);
var inst_21457 = cljs.core.async.close_BANG_(inst_21456);
var inst_21458 = (inst_21450 + (1));
var tmp21539 = inst_21449;
var tmp21540 = inst_21447;
var tmp21541 = inst_21448;
var inst_21447__$1 = tmp21540;
var inst_21448__$1 = tmp21541;
var inst_21449__$1 = tmp21539;
var inst_21450__$1 = inst_21458;
var state_21506__$1 = (function (){var statearr_21545 = state_21506;
(statearr_21545[(17)] = inst_21457);

(statearr_21545[(12)] = inst_21450__$1);

(statearr_21545[(13)] = inst_21449__$1);

(statearr_21545[(14)] = inst_21447__$1);

(statearr_21545[(15)] = inst_21448__$1);

return statearr_21545;
})();
var statearr_21546_21583 = state_21506__$1;
(statearr_21546_21583[(2)] = null);

(statearr_21546_21583[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (18))){
var inst_21476 = (state_21506[(2)]);
var state_21506__$1 = state_21506;
var statearr_21547_21584 = state_21506__$1;
(statearr_21547_21584[(2)] = inst_21476);

(statearr_21547_21584[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21507 === (8))){
var inst_21450 = (state_21506[(12)]);
var inst_21449 = (state_21506[(13)]);
var inst_21452 = (inst_21450 < inst_21449);
var inst_21453 = inst_21452;
var state_21506__$1 = state_21506;
if(cljs.core.truth_(inst_21453)){
var statearr_21548_21585 = state_21506__$1;
(statearr_21548_21585[(1)] = (10));

} else {
var statearr_21549_21586 = state_21506__$1;
(statearr_21549_21586[(1)] = (11));

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
});})(c__13630__auto___21558,mults,ensure_mult,p))
;
return ((function (switch__13552__auto__,c__13630__auto___21558,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13553__auto__ = null;
var cljs$core$async$state_machine__13553__auto____0 = (function (){
var statearr_21553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21553[(0)] = cljs$core$async$state_machine__13553__auto__);

(statearr_21553[(1)] = (1));

return statearr_21553;
});
var cljs$core$async$state_machine__13553__auto____1 = (function (state_21506){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_21506);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e21554){if((e21554 instanceof Object)){
var ex__13556__auto__ = e21554;
var statearr_21555_21587 = state_21506;
(statearr_21555_21587[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21506);

return cljs.core.constant$keyword$recur;
} else {
throw e21554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__21588 = state_21506;
state_21506 = G__21588;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$state_machine__13553__auto__ = function(state_21506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13553__auto____1.call(this,state_21506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13553__auto____0;
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13553__auto____1;
return cljs$core$async$state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___21558,mults,ensure_mult,p))
})();
var state__13632__auto__ = (function (){var statearr_21556 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_21556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___21558);

return statearr_21556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___21558,mults,ensure_mult,p))
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
var G__21590 = arguments.length;
switch (G__21590) {
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
var G__21593 = arguments.length;
switch (G__21593) {
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
var G__21596 = arguments.length;
switch (G__21596) {
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
var dctr = (function (){var G__21597 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21597) : cljs.core.atom.call(null,G__21597));
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
var c__13630__auto___21671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___21671,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___21671,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21636){
var state_val_21637 = (state_21636[(1)]);
if((state_val_21637 === (7))){
var state_21636__$1 = state_21636;
var statearr_21638_21672 = state_21636__$1;
(statearr_21638_21672[(2)] = null);

(statearr_21638_21672[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21637 === (1))){
var state_21636__$1 = state_21636;
var statearr_21639_21673 = state_21636__$1;
(statearr_21639_21673[(2)] = null);

(statearr_21639_21673[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21637 === (4))){
var inst_21600 = (state_21636[(7)]);
var inst_21602 = (inst_21600 < cnt);
var state_21636__$1 = state_21636;
if(cljs.core.truth_(inst_21602)){
var statearr_21640_21674 = state_21636__$1;
(statearr_21640_21674[(1)] = (6));

} else {
var statearr_21641_21675 = state_21636__$1;
(statearr_21641_21675[(1)] = (7));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21637 === (15))){
var inst_21632 = (state_21636[(2)]);
var state_21636__$1 = state_21636;
var statearr_21642_21676 = state_21636__$1;
(statearr_21642_21676[(2)] = inst_21632);

(statearr_21642_21676[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21637 === (13))){
var inst_21625 = cljs.core.async.close_BANG_(out);
var state_21636__$1 = state_21636;
var statearr_21643_21677 = state_21636__$1;
(statearr_21643_21677[(2)] = inst_21625);

(statearr_21643_21677[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21637 === (6))){
var state_21636__$1 = state_21636;
var statearr_21644_21678 = state_21636__$1;
(statearr_21644_21678[(2)] = null);

(statearr_21644_21678[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21637 === (3))){
var inst_21634 = (state_21636[(2)]);
var state_21636__$1 = state_21636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21636__$1,inst_21634);
} else {
if((state_val_21637 === (12))){
var inst_21622 = (state_21636[(8)]);
var inst_21622__$1 = (state_21636[(2)]);
var inst_21623 = cljs.core.some(cljs.core.nil_QMARK_,inst_21622__$1);
var state_21636__$1 = (function (){var statearr_21645 = state_21636;
(statearr_21645[(8)] = inst_21622__$1);

return statearr_21645;
})();
if(cljs.core.truth_(inst_21623)){
var statearr_21646_21679 = state_21636__$1;
(statearr_21646_21679[(1)] = (13));

} else {
var statearr_21647_21680 = state_21636__$1;
(statearr_21647_21680[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21637 === (2))){
var inst_21599 = (function (){var G__21648 = dctr;
var G__21649 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21648,G__21649) : cljs.core.reset_BANG_.call(null,G__21648,G__21649));
})();
var inst_21600 = (0);
var state_21636__$1 = (function (){var statearr_21650 = state_21636;
(statearr_21650[(7)] = inst_21600);

(statearr_21650[(9)] = inst_21599);

return statearr_21650;
})();
var statearr_21651_21681 = state_21636__$1;
(statearr_21651_21681[(2)] = null);

(statearr_21651_21681[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21637 === (11))){
var inst_21600 = (state_21636[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21636,(10),Object,null,(9));
var inst_21609 = (function (){var G__21652 = inst_21600;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__21652) : chs__$1.call(null,G__21652));
})();
var inst_21610 = (function (){var G__21653 = inst_21600;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21653) : done.call(null,G__21653));
})();
var inst_21611 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_21609,inst_21610);
var state_21636__$1 = state_21636;
var statearr_21654_21682 = state_21636__$1;
(statearr_21654_21682[(2)] = inst_21611);


cljs.core.async.impl.ioc_helpers.process_exception(state_21636__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21637 === (9))){
var inst_21600 = (state_21636[(7)]);
var inst_21613 = (state_21636[(2)]);
var inst_21614 = (inst_21600 + (1));
var inst_21600__$1 = inst_21614;
var state_21636__$1 = (function (){var statearr_21655 = state_21636;
(statearr_21655[(7)] = inst_21600__$1);

(statearr_21655[(10)] = inst_21613);

return statearr_21655;
})();
var statearr_21656_21683 = state_21636__$1;
(statearr_21656_21683[(2)] = null);

(statearr_21656_21683[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21637 === (5))){
var inst_21620 = (state_21636[(2)]);
var state_21636__$1 = (function (){var statearr_21657 = state_21636;
(statearr_21657[(11)] = inst_21620);

return statearr_21657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21636__$1,(12),dchan);
} else {
if((state_val_21637 === (14))){
var inst_21622 = (state_21636[(8)]);
var inst_21627 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_21622);
var state_21636__$1 = state_21636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21636__$1,(16),out,inst_21627);
} else {
if((state_val_21637 === (16))){
var inst_21629 = (state_21636[(2)]);
var state_21636__$1 = (function (){var statearr_21658 = state_21636;
(statearr_21658[(12)] = inst_21629);

return statearr_21658;
})();
var statearr_21659_21684 = state_21636__$1;
(statearr_21659_21684[(2)] = null);

(statearr_21659_21684[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21637 === (10))){
var inst_21604 = (state_21636[(2)]);
var inst_21605 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_21636__$1 = (function (){var statearr_21660 = state_21636;
(statearr_21660[(13)] = inst_21604);

return statearr_21660;
})();
var statearr_21661_21685 = state_21636__$1;
(statearr_21661_21685[(2)] = inst_21605);


cljs.core.async.impl.ioc_helpers.process_exception(state_21636__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21637 === (8))){
var inst_21618 = (state_21636[(2)]);
var state_21636__$1 = state_21636;
var statearr_21662_21686 = state_21636__$1;
(statearr_21662_21686[(2)] = inst_21618);

(statearr_21662_21686[(1)] = (5));


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
});})(c__13630__auto___21671,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13552__auto__,c__13630__auto___21671,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13553__auto__ = null;
var cljs$core$async$state_machine__13553__auto____0 = (function (){
var statearr_21666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21666[(0)] = cljs$core$async$state_machine__13553__auto__);

(statearr_21666[(1)] = (1));

return statearr_21666;
});
var cljs$core$async$state_machine__13553__auto____1 = (function (state_21636){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_21636);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e21667){if((e21667 instanceof Object)){
var ex__13556__auto__ = e21667;
var statearr_21668_21687 = state_21636;
(statearr_21668_21687[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21636);

return cljs.core.constant$keyword$recur;
} else {
throw e21667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__21688 = state_21636;
state_21636 = G__21688;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$state_machine__13553__auto__ = function(state_21636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13553__auto____1.call(this,state_21636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13553__auto____0;
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13553__auto____1;
return cljs$core$async$state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___21671,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13632__auto__ = (function (){var statearr_21669 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_21669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___21671);

return statearr_21669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___21671,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__21691 = arguments.length;
switch (G__21691) {
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
var c__13630__auto___21746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___21746,out){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___21746,out){
return (function (state_21721){
var state_val_21722 = (state_21721[(1)]);
if((state_val_21722 === (7))){
var inst_21700 = (state_21721[(7)]);
var inst_21701 = (state_21721[(8)]);
var inst_21700__$1 = (state_21721[(2)]);
var inst_21701__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21700__$1,(0),null);
var inst_21702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21700__$1,(1),null);
var inst_21703 = (inst_21701__$1 == null);
var state_21721__$1 = (function (){var statearr_21723 = state_21721;
(statearr_21723[(9)] = inst_21702);

(statearr_21723[(7)] = inst_21700__$1);

(statearr_21723[(8)] = inst_21701__$1);

return statearr_21723;
})();
if(cljs.core.truth_(inst_21703)){
var statearr_21724_21747 = state_21721__$1;
(statearr_21724_21747[(1)] = (8));

} else {
var statearr_21725_21748 = state_21721__$1;
(statearr_21725_21748[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21722 === (1))){
var inst_21692 = cljs.core.vec(chs);
var inst_21693 = inst_21692;
var state_21721__$1 = (function (){var statearr_21726 = state_21721;
(statearr_21726[(10)] = inst_21693);

return statearr_21726;
})();
var statearr_21727_21749 = state_21721__$1;
(statearr_21727_21749[(2)] = null);

(statearr_21727_21749[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21722 === (4))){
var inst_21693 = (state_21721[(10)]);
var state_21721__$1 = state_21721;
return cljs.core.async.ioc_alts_BANG_(state_21721__$1,(7),inst_21693);
} else {
if((state_val_21722 === (6))){
var inst_21717 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
var statearr_21728_21750 = state_21721__$1;
(statearr_21728_21750[(2)] = inst_21717);

(statearr_21728_21750[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21722 === (3))){
var inst_21719 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21721__$1,inst_21719);
} else {
if((state_val_21722 === (2))){
var inst_21693 = (state_21721[(10)]);
var inst_21695 = cljs.core.count(inst_21693);
var inst_21696 = (inst_21695 > (0));
var state_21721__$1 = state_21721;
if(cljs.core.truth_(inst_21696)){
var statearr_21730_21751 = state_21721__$1;
(statearr_21730_21751[(1)] = (4));

} else {
var statearr_21731_21752 = state_21721__$1;
(statearr_21731_21752[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21722 === (11))){
var inst_21693 = (state_21721[(10)]);
var inst_21710 = (state_21721[(2)]);
var tmp21729 = inst_21693;
var inst_21693__$1 = tmp21729;
var state_21721__$1 = (function (){var statearr_21732 = state_21721;
(statearr_21732[(10)] = inst_21693__$1);

(statearr_21732[(11)] = inst_21710);

return statearr_21732;
})();
var statearr_21733_21753 = state_21721__$1;
(statearr_21733_21753[(2)] = null);

(statearr_21733_21753[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21722 === (9))){
var inst_21701 = (state_21721[(8)]);
var state_21721__$1 = state_21721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21721__$1,(11),out,inst_21701);
} else {
if((state_val_21722 === (5))){
var inst_21715 = cljs.core.async.close_BANG_(out);
var state_21721__$1 = state_21721;
var statearr_21734_21754 = state_21721__$1;
(statearr_21734_21754[(2)] = inst_21715);

(statearr_21734_21754[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21722 === (10))){
var inst_21713 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
var statearr_21735_21755 = state_21721__$1;
(statearr_21735_21755[(2)] = inst_21713);

(statearr_21735_21755[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21722 === (8))){
var inst_21693 = (state_21721[(10)]);
var inst_21702 = (state_21721[(9)]);
var inst_21700 = (state_21721[(7)]);
var inst_21701 = (state_21721[(8)]);
var inst_21705 = (function (){var cs = inst_21693;
var vec__21698 = inst_21700;
var v = inst_21701;
var c = inst_21702;
return ((function (cs,vec__21698,v,c,inst_21693,inst_21702,inst_21700,inst_21701,state_val_21722,c__13630__auto___21746,out){
return (function (p1__21689_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__21689_SHARP_);
});
;})(cs,vec__21698,v,c,inst_21693,inst_21702,inst_21700,inst_21701,state_val_21722,c__13630__auto___21746,out))
})();
var inst_21706 = cljs.core.filterv(inst_21705,inst_21693);
var inst_21693__$1 = inst_21706;
var state_21721__$1 = (function (){var statearr_21736 = state_21721;
(statearr_21736[(10)] = inst_21693__$1);

return statearr_21736;
})();
var statearr_21737_21756 = state_21721__$1;
(statearr_21737_21756[(2)] = null);

(statearr_21737_21756[(1)] = (2));


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
});})(c__13630__auto___21746,out))
;
return ((function (switch__13552__auto__,c__13630__auto___21746,out){
return (function() {
var cljs$core$async$state_machine__13553__auto__ = null;
var cljs$core$async$state_machine__13553__auto____0 = (function (){
var statearr_21741 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21741[(0)] = cljs$core$async$state_machine__13553__auto__);

(statearr_21741[(1)] = (1));

return statearr_21741;
});
var cljs$core$async$state_machine__13553__auto____1 = (function (state_21721){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_21721);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e21742){if((e21742 instanceof Object)){
var ex__13556__auto__ = e21742;
var statearr_21743_21757 = state_21721;
(statearr_21743_21757[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21721);

return cljs.core.constant$keyword$recur;
} else {
throw e21742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__21758 = state_21721;
state_21721 = G__21758;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$state_machine__13553__auto__ = function(state_21721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13553__auto____1.call(this,state_21721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13553__auto____0;
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13553__auto____1;
return cljs$core$async$state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___21746,out))
})();
var state__13632__auto__ = (function (){var statearr_21744 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_21744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___21746);

return statearr_21744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___21746,out))
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
var G__21760 = arguments.length;
switch (G__21760) {
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
var c__13630__auto___21808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___21808,out){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___21808,out){
return (function (state_21784){
var state_val_21785 = (state_21784[(1)]);
if((state_val_21785 === (7))){
var inst_21766 = (state_21784[(7)]);
var inst_21766__$1 = (state_21784[(2)]);
var inst_21767 = (inst_21766__$1 == null);
var inst_21768 = cljs.core.not(inst_21767);
var state_21784__$1 = (function (){var statearr_21786 = state_21784;
(statearr_21786[(7)] = inst_21766__$1);

return statearr_21786;
})();
if(inst_21768){
var statearr_21787_21809 = state_21784__$1;
(statearr_21787_21809[(1)] = (8));

} else {
var statearr_21788_21810 = state_21784__$1;
(statearr_21788_21810[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21785 === (1))){
var inst_21761 = (0);
var state_21784__$1 = (function (){var statearr_21789 = state_21784;
(statearr_21789[(8)] = inst_21761);

return statearr_21789;
})();
var statearr_21790_21811 = state_21784__$1;
(statearr_21790_21811[(2)] = null);

(statearr_21790_21811[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21785 === (4))){
var state_21784__$1 = state_21784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21784__$1,(7),ch);
} else {
if((state_val_21785 === (6))){
var inst_21779 = (state_21784[(2)]);
var state_21784__$1 = state_21784;
var statearr_21791_21812 = state_21784__$1;
(statearr_21791_21812[(2)] = inst_21779);

(statearr_21791_21812[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21785 === (3))){
var inst_21781 = (state_21784[(2)]);
var inst_21782 = cljs.core.async.close_BANG_(out);
var state_21784__$1 = (function (){var statearr_21792 = state_21784;
(statearr_21792[(9)] = inst_21781);

return statearr_21792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21784__$1,inst_21782);
} else {
if((state_val_21785 === (2))){
var inst_21761 = (state_21784[(8)]);
var inst_21763 = (inst_21761 < n);
var state_21784__$1 = state_21784;
if(cljs.core.truth_(inst_21763)){
var statearr_21793_21813 = state_21784__$1;
(statearr_21793_21813[(1)] = (4));

} else {
var statearr_21794_21814 = state_21784__$1;
(statearr_21794_21814[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21785 === (11))){
var inst_21761 = (state_21784[(8)]);
var inst_21771 = (state_21784[(2)]);
var inst_21772 = (inst_21761 + (1));
var inst_21761__$1 = inst_21772;
var state_21784__$1 = (function (){var statearr_21795 = state_21784;
(statearr_21795[(8)] = inst_21761__$1);

(statearr_21795[(10)] = inst_21771);

return statearr_21795;
})();
var statearr_21796_21815 = state_21784__$1;
(statearr_21796_21815[(2)] = null);

(statearr_21796_21815[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21785 === (9))){
var state_21784__$1 = state_21784;
var statearr_21797_21816 = state_21784__$1;
(statearr_21797_21816[(2)] = null);

(statearr_21797_21816[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21785 === (5))){
var state_21784__$1 = state_21784;
var statearr_21798_21817 = state_21784__$1;
(statearr_21798_21817[(2)] = null);

(statearr_21798_21817[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21785 === (10))){
var inst_21776 = (state_21784[(2)]);
var state_21784__$1 = state_21784;
var statearr_21799_21818 = state_21784__$1;
(statearr_21799_21818[(2)] = inst_21776);

(statearr_21799_21818[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21785 === (8))){
var inst_21766 = (state_21784[(7)]);
var state_21784__$1 = state_21784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21784__$1,(11),out,inst_21766);
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
});})(c__13630__auto___21808,out))
;
return ((function (switch__13552__auto__,c__13630__auto___21808,out){
return (function() {
var cljs$core$async$state_machine__13553__auto__ = null;
var cljs$core$async$state_machine__13553__auto____0 = (function (){
var statearr_21803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21803[(0)] = cljs$core$async$state_machine__13553__auto__);

(statearr_21803[(1)] = (1));

return statearr_21803;
});
var cljs$core$async$state_machine__13553__auto____1 = (function (state_21784){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_21784);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e21804){if((e21804 instanceof Object)){
var ex__13556__auto__ = e21804;
var statearr_21805_21819 = state_21784;
(statearr_21805_21819[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21784);

return cljs.core.constant$keyword$recur;
} else {
throw e21804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__21820 = state_21784;
state_21784 = G__21820;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$state_machine__13553__auto__ = function(state_21784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13553__auto____1.call(this,state_21784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13553__auto____0;
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13553__auto____1;
return cljs$core$async$state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___21808,out))
})();
var state__13632__auto__ = (function (){var statearr_21806 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_21806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___21808);

return statearr_21806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___21808,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t21833 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21833 = (function (map_LT_,f,ch,meta21834){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21834 = meta21834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21835,meta21834__$1){
var self__ = this;
var _21835__$1 = this;
return (new cljs.core.async.t21833(self__.map_LT_,self__.f,self__.ch,meta21834__$1));
});

cljs.core.async.t21833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21835){
var self__ = this;
var _21835__$1 = this;
return self__.meta21834;
});

cljs.core.async.t21833.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t21833.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t21833.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t21836 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21836 = (function (map_LT_,f,ch,meta21834,_,fn1,meta21837){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21834 = meta21834;
this._ = _;
this.fn1 = fn1;
this.meta21837 = meta21837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21838,meta21837__$1){
var self__ = this;
var _21838__$1 = this;
return (new cljs.core.async.t21836(self__.map_LT_,self__.f,self__.ch,self__.meta21834,self__._,self__.fn1,meta21837__$1));
});})(___$1))
;

cljs.core.async.t21836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21838){
var self__ = this;
var _21838__$1 = this;
return self__.meta21837;
});})(___$1))
;

cljs.core.async.t21836.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t21836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21821_SHARP_){
var G__21839 = (((p1__21821_SHARP_ == null))?null:(function (){var G__21840 = p1__21821_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21840) : self__.f.call(null,G__21840));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__21839) : f1.call(null,G__21839));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21836.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21834","meta21834",-2039494319,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21837","meta21837",239319697,null)], null);
});})(___$1))
;

cljs.core.async.t21836.cljs$lang$type = true;

cljs.core.async.t21836.cljs$lang$ctorStr = "cljs.core.async/t21836";

cljs.core.async.t21836.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t21836");
});})(___$1))
;

cljs.core.async.__GT_t21836 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t21836(map_LT___$1,f__$1,ch__$1,meta21834__$1,___$2,fn1__$1,meta21837){
return (new cljs.core.async.t21836(map_LT___$1,f__$1,ch__$1,meta21834__$1,___$2,fn1__$1,meta21837));
});})(___$1))
;

}

return (new cljs.core.async.t21836(self__.map_LT_,self__.f,self__.ch,self__.meta21834,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4326__auto__ = ret;
if(cljs.core.truth_(and__4326__auto__)){
return !(((function (){var G__21841 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21841) : cljs.core.deref.call(null,G__21841));
})() == null));
} else {
return and__4326__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__21842 = (function (){var G__21843 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21843) : cljs.core.deref.call(null,G__21843));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21842) : self__.f.call(null,G__21842));
})());
} else {
return ret;
}
});

cljs.core.async.t21833.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t21833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21834","meta21834",-2039494319,null)], null);
});

cljs.core.async.t21833.cljs$lang$type = true;

cljs.core.async.t21833.cljs$lang$ctorStr = "cljs.core.async/t21833";

cljs.core.async.t21833.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t21833");
});

cljs.core.async.__GT_t21833 = (function cljs$core$async$map_LT__$___GT_t21833(map_LT___$1,f__$1,ch__$1,meta21834){
return (new cljs.core.async.t21833(map_LT___$1,f__$1,ch__$1,meta21834));
});

}

return (new cljs.core.async.t21833(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t21848 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21848 = (function (map_GT_,f,ch,meta21849){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21849 = meta21849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21850,meta21849__$1){
var self__ = this;
var _21850__$1 = this;
return (new cljs.core.async.t21848(self__.map_GT_,self__.f,self__.ch,meta21849__$1));
});

cljs.core.async.t21848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21850){
var self__ = this;
var _21850__$1 = this;
return self__.meta21849;
});

cljs.core.async.t21848.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21848.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t21848.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21848.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t21848.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21848.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__21851 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21851) : self__.f.call(null,G__21851));
})(),fn1);
});

cljs.core.async.t21848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21849","meta21849",-17930938,null)], null);
});

cljs.core.async.t21848.cljs$lang$type = true;

cljs.core.async.t21848.cljs$lang$ctorStr = "cljs.core.async/t21848";

cljs.core.async.t21848.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t21848");
});

cljs.core.async.__GT_t21848 = (function cljs$core$async$map_GT__$___GT_t21848(map_GT___$1,f__$1,ch__$1,meta21849){
return (new cljs.core.async.t21848(map_GT___$1,f__$1,ch__$1,meta21849));
});

}

return (new cljs.core.async.t21848(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t21856 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21856 = (function (filter_GT_,p,ch,meta21857){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21857 = meta21857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21858,meta21857__$1){
var self__ = this;
var _21858__$1 = this;
return (new cljs.core.async.t21856(self__.filter_GT_,self__.p,self__.ch,meta21857__$1));
});

cljs.core.async.t21856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21858){
var self__ = this;
var _21858__$1 = this;
return self__.meta21857;
});

cljs.core.async.t21856.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t21856.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t21856.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t21856.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__21859 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__21859) : self__.p.call(null,G__21859));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t21856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21857","meta21857",814261571,null)], null);
});

cljs.core.async.t21856.cljs$lang$type = true;

cljs.core.async.t21856.cljs$lang$ctorStr = "cljs.core.async/t21856";

cljs.core.async.t21856.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async/t21856");
});

cljs.core.async.__GT_t21856 = (function cljs$core$async$filter_GT__$___GT_t21856(filter_GT___$1,p__$1,ch__$1,meta21857){
return (new cljs.core.async.t21856(filter_GT___$1,p__$1,ch__$1,meta21857));
});

}

return (new cljs.core.async.t21856(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21861 = arguments.length;
switch (G__21861) {
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
var c__13630__auto___21905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___21905,out){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___21905,out){
return (function (state_21882){
var state_val_21883 = (state_21882[(1)]);
if((state_val_21883 === (7))){
var inst_21878 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
var statearr_21884_21906 = state_21882__$1;
(statearr_21884_21906[(2)] = inst_21878);

(statearr_21884_21906[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21883 === (1))){
var state_21882__$1 = state_21882;
var statearr_21885_21907 = state_21882__$1;
(statearr_21885_21907[(2)] = null);

(statearr_21885_21907[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21883 === (4))){
var inst_21864 = (state_21882[(7)]);
var inst_21864__$1 = (state_21882[(2)]);
var inst_21865 = (inst_21864__$1 == null);
var state_21882__$1 = (function (){var statearr_21886 = state_21882;
(statearr_21886[(7)] = inst_21864__$1);

return statearr_21886;
})();
if(cljs.core.truth_(inst_21865)){
var statearr_21887_21908 = state_21882__$1;
(statearr_21887_21908[(1)] = (5));

} else {
var statearr_21888_21909 = state_21882__$1;
(statearr_21888_21909[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21883 === (6))){
var inst_21864 = (state_21882[(7)]);
var inst_21869 = (function (){var G__21889 = inst_21864;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__21889) : p.call(null,G__21889));
})();
var state_21882__$1 = state_21882;
if(cljs.core.truth_(inst_21869)){
var statearr_21890_21910 = state_21882__$1;
(statearr_21890_21910[(1)] = (8));

} else {
var statearr_21891_21911 = state_21882__$1;
(statearr_21891_21911[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21883 === (3))){
var inst_21880 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21882__$1,inst_21880);
} else {
if((state_val_21883 === (2))){
var state_21882__$1 = state_21882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21882__$1,(4),ch);
} else {
if((state_val_21883 === (11))){
var inst_21872 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
var statearr_21892_21912 = state_21882__$1;
(statearr_21892_21912[(2)] = inst_21872);

(statearr_21892_21912[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21883 === (9))){
var state_21882__$1 = state_21882;
var statearr_21893_21913 = state_21882__$1;
(statearr_21893_21913[(2)] = null);

(statearr_21893_21913[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21883 === (5))){
var inst_21867 = cljs.core.async.close_BANG_(out);
var state_21882__$1 = state_21882;
var statearr_21894_21914 = state_21882__$1;
(statearr_21894_21914[(2)] = inst_21867);

(statearr_21894_21914[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21883 === (10))){
var inst_21875 = (state_21882[(2)]);
var state_21882__$1 = (function (){var statearr_21895 = state_21882;
(statearr_21895[(8)] = inst_21875);

return statearr_21895;
})();
var statearr_21896_21915 = state_21882__$1;
(statearr_21896_21915[(2)] = null);

(statearr_21896_21915[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21883 === (8))){
var inst_21864 = (state_21882[(7)]);
var state_21882__$1 = state_21882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21882__$1,(11),out,inst_21864);
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
});})(c__13630__auto___21905,out))
;
return ((function (switch__13552__auto__,c__13630__auto___21905,out){
return (function() {
var cljs$core$async$state_machine__13553__auto__ = null;
var cljs$core$async$state_machine__13553__auto____0 = (function (){
var statearr_21900 = [null,null,null,null,null,null,null,null,null];
(statearr_21900[(0)] = cljs$core$async$state_machine__13553__auto__);

(statearr_21900[(1)] = (1));

return statearr_21900;
});
var cljs$core$async$state_machine__13553__auto____1 = (function (state_21882){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_21882);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e21901){if((e21901 instanceof Object)){
var ex__13556__auto__ = e21901;
var statearr_21902_21916 = state_21882;
(statearr_21902_21916[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21882);

return cljs.core.constant$keyword$recur;
} else {
throw e21901;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__21917 = state_21882;
state_21882 = G__21917;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$state_machine__13553__auto__ = function(state_21882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13553__auto____1.call(this,state_21882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13553__auto____0;
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13553__auto____1;
return cljs$core$async$state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___21905,out))
})();
var state__13632__auto__ = (function (){var statearr_21903 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_21903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___21905);

return statearr_21903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___21905,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__21919 = arguments.length;
switch (G__21919) {
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
var c__13630__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto__){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto__){
return (function (state_22087){
var state_val_22088 = (state_22087[(1)]);
if((state_val_22088 === (7))){
var inst_22083 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22089_22131 = state_22087__$1;
(statearr_22089_22131[(2)] = inst_22083);

(statearr_22089_22131[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (20))){
var inst_22053 = (state_22087[(7)]);
var inst_22064 = (state_22087[(2)]);
var inst_22065 = cljs.core.next(inst_22053);
var inst_22039 = inst_22065;
var inst_22040 = null;
var inst_22041 = (0);
var inst_22042 = (0);
var state_22087__$1 = (function (){var statearr_22090 = state_22087;
(statearr_22090[(8)] = inst_22041);

(statearr_22090[(9)] = inst_22040);

(statearr_22090[(10)] = inst_22064);

(statearr_22090[(11)] = inst_22042);

(statearr_22090[(12)] = inst_22039);

return statearr_22090;
})();
var statearr_22091_22132 = state_22087__$1;
(statearr_22091_22132[(2)] = null);

(statearr_22091_22132[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (1))){
var state_22087__$1 = state_22087;
var statearr_22092_22133 = state_22087__$1;
(statearr_22092_22133[(2)] = null);

(statearr_22092_22133[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (4))){
var inst_22028 = (state_22087[(13)]);
var inst_22028__$1 = (state_22087[(2)]);
var inst_22029 = (inst_22028__$1 == null);
var state_22087__$1 = (function (){var statearr_22093 = state_22087;
(statearr_22093[(13)] = inst_22028__$1);

return statearr_22093;
})();
if(cljs.core.truth_(inst_22029)){
var statearr_22094_22134 = state_22087__$1;
(statearr_22094_22134[(1)] = (5));

} else {
var statearr_22095_22135 = state_22087__$1;
(statearr_22095_22135[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (15))){
var state_22087__$1 = state_22087;
var statearr_22099_22136 = state_22087__$1;
(statearr_22099_22136[(2)] = null);

(statearr_22099_22136[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (21))){
var state_22087__$1 = state_22087;
var statearr_22100_22137 = state_22087__$1;
(statearr_22100_22137[(2)] = null);

(statearr_22100_22137[(1)] = (23));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (13))){
var inst_22041 = (state_22087[(8)]);
var inst_22040 = (state_22087[(9)]);
var inst_22042 = (state_22087[(11)]);
var inst_22039 = (state_22087[(12)]);
var inst_22049 = (state_22087[(2)]);
var inst_22050 = (inst_22042 + (1));
var tmp22096 = inst_22041;
var tmp22097 = inst_22040;
var tmp22098 = inst_22039;
var inst_22039__$1 = tmp22098;
var inst_22040__$1 = tmp22097;
var inst_22041__$1 = tmp22096;
var inst_22042__$1 = inst_22050;
var state_22087__$1 = (function (){var statearr_22101 = state_22087;
(statearr_22101[(8)] = inst_22041__$1);

(statearr_22101[(9)] = inst_22040__$1);

(statearr_22101[(11)] = inst_22042__$1);

(statearr_22101[(14)] = inst_22049);

(statearr_22101[(12)] = inst_22039__$1);

return statearr_22101;
})();
var statearr_22102_22138 = state_22087__$1;
(statearr_22102_22138[(2)] = null);

(statearr_22102_22138[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (22))){
var state_22087__$1 = state_22087;
var statearr_22103_22139 = state_22087__$1;
(statearr_22103_22139[(2)] = null);

(statearr_22103_22139[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (6))){
var inst_22028 = (state_22087[(13)]);
var inst_22037 = (function (){var G__22104 = inst_22028;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22104) : f.call(null,G__22104));
})();
var inst_22038 = cljs.core.seq(inst_22037);
var inst_22039 = inst_22038;
var inst_22040 = null;
var inst_22041 = (0);
var inst_22042 = (0);
var state_22087__$1 = (function (){var statearr_22105 = state_22087;
(statearr_22105[(8)] = inst_22041);

(statearr_22105[(9)] = inst_22040);

(statearr_22105[(11)] = inst_22042);

(statearr_22105[(12)] = inst_22039);

return statearr_22105;
})();
var statearr_22106_22140 = state_22087__$1;
(statearr_22106_22140[(2)] = null);

(statearr_22106_22140[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (17))){
var inst_22053 = (state_22087[(7)]);
var inst_22057 = cljs.core.chunk_first(inst_22053);
var inst_22058 = cljs.core.chunk_rest(inst_22053);
var inst_22059 = cljs.core.count(inst_22057);
var inst_22039 = inst_22058;
var inst_22040 = inst_22057;
var inst_22041 = inst_22059;
var inst_22042 = (0);
var state_22087__$1 = (function (){var statearr_22107 = state_22087;
(statearr_22107[(8)] = inst_22041);

(statearr_22107[(9)] = inst_22040);

(statearr_22107[(11)] = inst_22042);

(statearr_22107[(12)] = inst_22039);

return statearr_22107;
})();
var statearr_22108_22141 = state_22087__$1;
(statearr_22108_22141[(2)] = null);

(statearr_22108_22141[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (3))){
var inst_22085 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22087__$1,inst_22085);
} else {
if((state_val_22088 === (12))){
var inst_22073 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22109_22142 = state_22087__$1;
(statearr_22109_22142[(2)] = inst_22073);

(statearr_22109_22142[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (2))){
var state_22087__$1 = state_22087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22087__$1,(4),in$);
} else {
if((state_val_22088 === (23))){
var inst_22081 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22110_22143 = state_22087__$1;
(statearr_22110_22143[(2)] = inst_22081);

(statearr_22110_22143[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (19))){
var inst_22068 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22111_22144 = state_22087__$1;
(statearr_22111_22144[(2)] = inst_22068);

(statearr_22111_22144[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (11))){
var inst_22053 = (state_22087[(7)]);
var inst_22039 = (state_22087[(12)]);
var inst_22053__$1 = cljs.core.seq(inst_22039);
var state_22087__$1 = (function (){var statearr_22112 = state_22087;
(statearr_22112[(7)] = inst_22053__$1);

return statearr_22112;
})();
if(inst_22053__$1){
var statearr_22113_22145 = state_22087__$1;
(statearr_22113_22145[(1)] = (14));

} else {
var statearr_22114_22146 = state_22087__$1;
(statearr_22114_22146[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (9))){
var inst_22075 = (state_22087[(2)]);
var inst_22076 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22087__$1 = (function (){var statearr_22115 = state_22087;
(statearr_22115[(15)] = inst_22075);

return statearr_22115;
})();
if(cljs.core.truth_(inst_22076)){
var statearr_22116_22147 = state_22087__$1;
(statearr_22116_22147[(1)] = (21));

} else {
var statearr_22117_22148 = state_22087__$1;
(statearr_22117_22148[(1)] = (22));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (5))){
var inst_22031 = cljs.core.async.close_BANG_(out);
var state_22087__$1 = state_22087;
var statearr_22118_22149 = state_22087__$1;
(statearr_22118_22149[(2)] = inst_22031);

(statearr_22118_22149[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (14))){
var inst_22053 = (state_22087[(7)]);
var inst_22055 = cljs.core.chunked_seq_QMARK_(inst_22053);
var state_22087__$1 = state_22087;
if(inst_22055){
var statearr_22119_22150 = state_22087__$1;
(statearr_22119_22150[(1)] = (17));

} else {
var statearr_22120_22151 = state_22087__$1;
(statearr_22120_22151[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (16))){
var inst_22071 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22121_22152 = state_22087__$1;
(statearr_22121_22152[(2)] = inst_22071);

(statearr_22121_22152[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22088 === (10))){
var inst_22040 = (state_22087[(9)]);
var inst_22042 = (state_22087[(11)]);
var inst_22047 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22040,inst_22042);
var state_22087__$1 = state_22087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22087__$1,(13),out,inst_22047);
} else {
if((state_val_22088 === (18))){
var inst_22053 = (state_22087[(7)]);
var inst_22062 = cljs.core.first(inst_22053);
var state_22087__$1 = state_22087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22087__$1,(20),out,inst_22062);
} else {
if((state_val_22088 === (8))){
var inst_22041 = (state_22087[(8)]);
var inst_22042 = (state_22087[(11)]);
var inst_22044 = (inst_22042 < inst_22041);
var inst_22045 = inst_22044;
var state_22087__$1 = state_22087;
if(cljs.core.truth_(inst_22045)){
var statearr_22122_22153 = state_22087__$1;
(statearr_22122_22153[(1)] = (10));

} else {
var statearr_22123_22154 = state_22087__$1;
(statearr_22123_22154[(1)] = (11));

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
});})(c__13630__auto__))
;
return ((function (switch__13552__auto__,c__13630__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13553__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13553__auto____0 = (function (){
var statearr_22127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22127[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13553__auto__);

(statearr_22127[(1)] = (1));

return statearr_22127;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13553__auto____1 = (function (state_22087){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_22087);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e22128){if((e22128 instanceof Object)){
var ex__13556__auto__ = e22128;
var statearr_22129_22155 = state_22087;
(statearr_22129_22155[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22087);

return cljs.core.constant$keyword$recur;
} else {
throw e22128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__22156 = state_22087;
state_22087 = G__22156;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13553__auto__ = function(state_22087){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13553__auto____1.call(this,state_22087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13553__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13553__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto__))
})();
var state__13632__auto__ = (function (){var statearr_22130 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_22130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto__);

return statearr_22130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto__))
);

return c__13630__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__22158 = arguments.length;
switch (G__22158) {
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
var G__22161 = arguments.length;
switch (G__22161) {
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
var G__22164 = arguments.length;
switch (G__22164) {
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
var c__13630__auto___22214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___22214,out){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___22214,out){
return (function (state_22188){
var state_val_22189 = (state_22188[(1)]);
if((state_val_22189 === (7))){
var inst_22183 = (state_22188[(2)]);
var state_22188__$1 = state_22188;
var statearr_22190_22215 = state_22188__$1;
(statearr_22190_22215[(2)] = inst_22183);

(statearr_22190_22215[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22189 === (1))){
var inst_22165 = null;
var state_22188__$1 = (function (){var statearr_22191 = state_22188;
(statearr_22191[(7)] = inst_22165);

return statearr_22191;
})();
var statearr_22192_22216 = state_22188__$1;
(statearr_22192_22216[(2)] = null);

(statearr_22192_22216[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22189 === (4))){
var inst_22168 = (state_22188[(8)]);
var inst_22168__$1 = (state_22188[(2)]);
var inst_22169 = (inst_22168__$1 == null);
var inst_22170 = cljs.core.not(inst_22169);
var state_22188__$1 = (function (){var statearr_22193 = state_22188;
(statearr_22193[(8)] = inst_22168__$1);

return statearr_22193;
})();
if(inst_22170){
var statearr_22194_22217 = state_22188__$1;
(statearr_22194_22217[(1)] = (5));

} else {
var statearr_22195_22218 = state_22188__$1;
(statearr_22195_22218[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22189 === (6))){
var state_22188__$1 = state_22188;
var statearr_22196_22219 = state_22188__$1;
(statearr_22196_22219[(2)] = null);

(statearr_22196_22219[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22189 === (3))){
var inst_22185 = (state_22188[(2)]);
var inst_22186 = cljs.core.async.close_BANG_(out);
var state_22188__$1 = (function (){var statearr_22197 = state_22188;
(statearr_22197[(9)] = inst_22185);

return statearr_22197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22188__$1,inst_22186);
} else {
if((state_val_22189 === (2))){
var state_22188__$1 = state_22188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22188__$1,(4),ch);
} else {
if((state_val_22189 === (11))){
var inst_22168 = (state_22188[(8)]);
var inst_22177 = (state_22188[(2)]);
var inst_22165 = inst_22168;
var state_22188__$1 = (function (){var statearr_22198 = state_22188;
(statearr_22198[(7)] = inst_22165);

(statearr_22198[(10)] = inst_22177);

return statearr_22198;
})();
var statearr_22199_22220 = state_22188__$1;
(statearr_22199_22220[(2)] = null);

(statearr_22199_22220[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22189 === (9))){
var inst_22168 = (state_22188[(8)]);
var state_22188__$1 = state_22188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22188__$1,(11),out,inst_22168);
} else {
if((state_val_22189 === (5))){
var inst_22168 = (state_22188[(8)]);
var inst_22165 = (state_22188[(7)]);
var inst_22172 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22168,inst_22165);
var state_22188__$1 = state_22188;
if(inst_22172){
var statearr_22201_22221 = state_22188__$1;
(statearr_22201_22221[(1)] = (8));

} else {
var statearr_22202_22222 = state_22188__$1;
(statearr_22202_22222[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22189 === (10))){
var inst_22180 = (state_22188[(2)]);
var state_22188__$1 = state_22188;
var statearr_22203_22223 = state_22188__$1;
(statearr_22203_22223[(2)] = inst_22180);

(statearr_22203_22223[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22189 === (8))){
var inst_22165 = (state_22188[(7)]);
var tmp22200 = inst_22165;
var inst_22165__$1 = tmp22200;
var state_22188__$1 = (function (){var statearr_22204 = state_22188;
(statearr_22204[(7)] = inst_22165__$1);

return statearr_22204;
})();
var statearr_22205_22224 = state_22188__$1;
(statearr_22205_22224[(2)] = null);

(statearr_22205_22224[(1)] = (2));


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
});})(c__13630__auto___22214,out))
;
return ((function (switch__13552__auto__,c__13630__auto___22214,out){
return (function() {
var cljs$core$async$state_machine__13553__auto__ = null;
var cljs$core$async$state_machine__13553__auto____0 = (function (){
var statearr_22209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22209[(0)] = cljs$core$async$state_machine__13553__auto__);

(statearr_22209[(1)] = (1));

return statearr_22209;
});
var cljs$core$async$state_machine__13553__auto____1 = (function (state_22188){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_22188);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e22210){if((e22210 instanceof Object)){
var ex__13556__auto__ = e22210;
var statearr_22211_22225 = state_22188;
(statearr_22211_22225[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22188);

return cljs.core.constant$keyword$recur;
} else {
throw e22210;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__22226 = state_22188;
state_22188 = G__22226;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$state_machine__13553__auto__ = function(state_22188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13553__auto____1.call(this,state_22188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13553__auto____0;
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13553__auto____1;
return cljs$core$async$state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___22214,out))
})();
var state__13632__auto__ = (function (){var statearr_22212 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_22212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___22214);

return statearr_22212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___22214,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__22228 = arguments.length;
switch (G__22228) {
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
var c__13630__auto___22297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___22297,out){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___22297,out){
return (function (state_22266){
var state_val_22267 = (state_22266[(1)]);
if((state_val_22267 === (7))){
var inst_22262 = (state_22266[(2)]);
var state_22266__$1 = state_22266;
var statearr_22268_22298 = state_22266__$1;
(statearr_22268_22298[(2)] = inst_22262);

(statearr_22268_22298[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22267 === (1))){
var inst_22229 = (new Array(n));
var inst_22230 = inst_22229;
var inst_22231 = (0);
var state_22266__$1 = (function (){var statearr_22269 = state_22266;
(statearr_22269[(7)] = inst_22230);

(statearr_22269[(8)] = inst_22231);

return statearr_22269;
})();
var statearr_22270_22299 = state_22266__$1;
(statearr_22270_22299[(2)] = null);

(statearr_22270_22299[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22267 === (4))){
var inst_22234 = (state_22266[(9)]);
var inst_22234__$1 = (state_22266[(2)]);
var inst_22235 = (inst_22234__$1 == null);
var inst_22236 = cljs.core.not(inst_22235);
var state_22266__$1 = (function (){var statearr_22271 = state_22266;
(statearr_22271[(9)] = inst_22234__$1);

return statearr_22271;
})();
if(inst_22236){
var statearr_22272_22300 = state_22266__$1;
(statearr_22272_22300[(1)] = (5));

} else {
var statearr_22273_22301 = state_22266__$1;
(statearr_22273_22301[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22267 === (15))){
var inst_22256 = (state_22266[(2)]);
var state_22266__$1 = state_22266;
var statearr_22274_22302 = state_22266__$1;
(statearr_22274_22302[(2)] = inst_22256);

(statearr_22274_22302[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22267 === (13))){
var state_22266__$1 = state_22266;
var statearr_22275_22303 = state_22266__$1;
(statearr_22275_22303[(2)] = null);

(statearr_22275_22303[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22267 === (6))){
var inst_22231 = (state_22266[(8)]);
var inst_22252 = (inst_22231 > (0));
var state_22266__$1 = state_22266;
if(cljs.core.truth_(inst_22252)){
var statearr_22276_22304 = state_22266__$1;
(statearr_22276_22304[(1)] = (12));

} else {
var statearr_22277_22305 = state_22266__$1;
(statearr_22277_22305[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22267 === (3))){
var inst_22264 = (state_22266[(2)]);
var state_22266__$1 = state_22266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22266__$1,inst_22264);
} else {
if((state_val_22267 === (12))){
var inst_22230 = (state_22266[(7)]);
var inst_22254 = cljs.core.vec(inst_22230);
var state_22266__$1 = state_22266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22266__$1,(15),out,inst_22254);
} else {
if((state_val_22267 === (2))){
var state_22266__$1 = state_22266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22266__$1,(4),ch);
} else {
if((state_val_22267 === (11))){
var inst_22246 = (state_22266[(2)]);
var inst_22247 = (new Array(n));
var inst_22230 = inst_22247;
var inst_22231 = (0);
var state_22266__$1 = (function (){var statearr_22278 = state_22266;
(statearr_22278[(7)] = inst_22230);

(statearr_22278[(8)] = inst_22231);

(statearr_22278[(10)] = inst_22246);

return statearr_22278;
})();
var statearr_22279_22306 = state_22266__$1;
(statearr_22279_22306[(2)] = null);

(statearr_22279_22306[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22267 === (9))){
var inst_22230 = (state_22266[(7)]);
var inst_22244 = cljs.core.vec(inst_22230);
var state_22266__$1 = state_22266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22266__$1,(11),out,inst_22244);
} else {
if((state_val_22267 === (5))){
var inst_22239 = (state_22266[(11)]);
var inst_22230 = (state_22266[(7)]);
var inst_22231 = (state_22266[(8)]);
var inst_22234 = (state_22266[(9)]);
var inst_22238 = (inst_22230[inst_22231] = inst_22234);
var inst_22239__$1 = (inst_22231 + (1));
var inst_22240 = (inst_22239__$1 < n);
var state_22266__$1 = (function (){var statearr_22280 = state_22266;
(statearr_22280[(11)] = inst_22239__$1);

(statearr_22280[(12)] = inst_22238);

return statearr_22280;
})();
if(cljs.core.truth_(inst_22240)){
var statearr_22281_22307 = state_22266__$1;
(statearr_22281_22307[(1)] = (8));

} else {
var statearr_22282_22308 = state_22266__$1;
(statearr_22282_22308[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22267 === (14))){
var inst_22259 = (state_22266[(2)]);
var inst_22260 = cljs.core.async.close_BANG_(out);
var state_22266__$1 = (function (){var statearr_22284 = state_22266;
(statearr_22284[(13)] = inst_22259);

return statearr_22284;
})();
var statearr_22285_22309 = state_22266__$1;
(statearr_22285_22309[(2)] = inst_22260);

(statearr_22285_22309[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22267 === (10))){
var inst_22250 = (state_22266[(2)]);
var state_22266__$1 = state_22266;
var statearr_22286_22310 = state_22266__$1;
(statearr_22286_22310[(2)] = inst_22250);

(statearr_22286_22310[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22267 === (8))){
var inst_22239 = (state_22266[(11)]);
var inst_22230 = (state_22266[(7)]);
var tmp22283 = inst_22230;
var inst_22230__$1 = tmp22283;
var inst_22231 = inst_22239;
var state_22266__$1 = (function (){var statearr_22287 = state_22266;
(statearr_22287[(7)] = inst_22230__$1);

(statearr_22287[(8)] = inst_22231);

return statearr_22287;
})();
var statearr_22288_22311 = state_22266__$1;
(statearr_22288_22311[(2)] = null);

(statearr_22288_22311[(1)] = (2));


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
});})(c__13630__auto___22297,out))
;
return ((function (switch__13552__auto__,c__13630__auto___22297,out){
return (function() {
var cljs$core$async$state_machine__13553__auto__ = null;
var cljs$core$async$state_machine__13553__auto____0 = (function (){
var statearr_22292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22292[(0)] = cljs$core$async$state_machine__13553__auto__);

(statearr_22292[(1)] = (1));

return statearr_22292;
});
var cljs$core$async$state_machine__13553__auto____1 = (function (state_22266){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_22266);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e22293){if((e22293 instanceof Object)){
var ex__13556__auto__ = e22293;
var statearr_22294_22312 = state_22266;
(statearr_22294_22312[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22266);

return cljs.core.constant$keyword$recur;
} else {
throw e22293;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__22313 = state_22266;
state_22266 = G__22313;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$state_machine__13553__auto__ = function(state_22266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13553__auto____1.call(this,state_22266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13553__auto____0;
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13553__auto____1;
return cljs$core$async$state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___22297,out))
})();
var state__13632__auto__ = (function (){var statearr_22295 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_22295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___22297);

return statearr_22295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___22297,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__22315 = arguments.length;
switch (G__22315) {
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
var c__13630__auto___22389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___22389,out){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___22389,out){
return (function (state_22357){
var state_val_22358 = (state_22357[(1)]);
if((state_val_22358 === (7))){
var inst_22353 = (state_22357[(2)]);
var state_22357__$1 = state_22357;
var statearr_22359_22390 = state_22357__$1;
(statearr_22359_22390[(2)] = inst_22353);

(statearr_22359_22390[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22358 === (1))){
var inst_22316 = [];
var inst_22317 = inst_22316;
var inst_22318 = cljs.core.constant$keyword$cljs$core$async_SLASH_nothing;
var state_22357__$1 = (function (){var statearr_22360 = state_22357;
(statearr_22360[(7)] = inst_22318);

(statearr_22360[(8)] = inst_22317);

return statearr_22360;
})();
var statearr_22361_22391 = state_22357__$1;
(statearr_22361_22391[(2)] = null);

(statearr_22361_22391[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22358 === (4))){
var inst_22321 = (state_22357[(9)]);
var inst_22321__$1 = (state_22357[(2)]);
var inst_22322 = (inst_22321__$1 == null);
var inst_22323 = cljs.core.not(inst_22322);
var state_22357__$1 = (function (){var statearr_22362 = state_22357;
(statearr_22362[(9)] = inst_22321__$1);

return statearr_22362;
})();
if(inst_22323){
var statearr_22363_22392 = state_22357__$1;
(statearr_22363_22392[(1)] = (5));

} else {
var statearr_22364_22393 = state_22357__$1;
(statearr_22364_22393[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22358 === (15))){
var inst_22347 = (state_22357[(2)]);
var state_22357__$1 = state_22357;
var statearr_22365_22394 = state_22357__$1;
(statearr_22365_22394[(2)] = inst_22347);

(statearr_22365_22394[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22358 === (13))){
var state_22357__$1 = state_22357;
var statearr_22366_22395 = state_22357__$1;
(statearr_22366_22395[(2)] = null);

(statearr_22366_22395[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22358 === (6))){
var inst_22317 = (state_22357[(8)]);
var inst_22342 = inst_22317.length;
var inst_22343 = (inst_22342 > (0));
var state_22357__$1 = state_22357;
if(cljs.core.truth_(inst_22343)){
var statearr_22367_22396 = state_22357__$1;
(statearr_22367_22396[(1)] = (12));

} else {
var statearr_22368_22397 = state_22357__$1;
(statearr_22368_22397[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22358 === (3))){
var inst_22355 = (state_22357[(2)]);
var state_22357__$1 = state_22357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22357__$1,inst_22355);
} else {
if((state_val_22358 === (12))){
var inst_22317 = (state_22357[(8)]);
var inst_22345 = cljs.core.vec(inst_22317);
var state_22357__$1 = state_22357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22357__$1,(15),out,inst_22345);
} else {
if((state_val_22358 === (2))){
var state_22357__$1 = state_22357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22357__$1,(4),ch);
} else {
if((state_val_22358 === (11))){
var inst_22325 = (state_22357[(10)]);
var inst_22321 = (state_22357[(9)]);
var inst_22335 = (state_22357[(2)]);
var inst_22336 = [];
var inst_22337 = inst_22336.push(inst_22321);
var inst_22317 = inst_22336;
var inst_22318 = inst_22325;
var state_22357__$1 = (function (){var statearr_22369 = state_22357;
(statearr_22369[(11)] = inst_22335);

(statearr_22369[(7)] = inst_22318);

(statearr_22369[(8)] = inst_22317);

(statearr_22369[(12)] = inst_22337);

return statearr_22369;
})();
var statearr_22370_22398 = state_22357__$1;
(statearr_22370_22398[(2)] = null);

(statearr_22370_22398[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22358 === (9))){
var inst_22317 = (state_22357[(8)]);
var inst_22333 = cljs.core.vec(inst_22317);
var state_22357__$1 = state_22357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22357__$1,(11),out,inst_22333);
} else {
if((state_val_22358 === (5))){
var inst_22318 = (state_22357[(7)]);
var inst_22325 = (state_22357[(10)]);
var inst_22321 = (state_22357[(9)]);
var inst_22325__$1 = (function (){var G__22371 = inst_22321;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22371) : f.call(null,G__22371));
})();
var inst_22326 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22325__$1,inst_22318);
var inst_22327 = cljs.core.keyword_identical_QMARK_(inst_22318,cljs.core.constant$keyword$cljs$core$async_SLASH_nothing);
var inst_22328 = (inst_22326) || (inst_22327);
var state_22357__$1 = (function (){var statearr_22372 = state_22357;
(statearr_22372[(10)] = inst_22325__$1);

return statearr_22372;
})();
if(cljs.core.truth_(inst_22328)){
var statearr_22373_22399 = state_22357__$1;
(statearr_22373_22399[(1)] = (8));

} else {
var statearr_22374_22400 = state_22357__$1;
(statearr_22374_22400[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22358 === (14))){
var inst_22350 = (state_22357[(2)]);
var inst_22351 = cljs.core.async.close_BANG_(out);
var state_22357__$1 = (function (){var statearr_22376 = state_22357;
(statearr_22376[(13)] = inst_22350);

return statearr_22376;
})();
var statearr_22377_22401 = state_22357__$1;
(statearr_22377_22401[(2)] = inst_22351);

(statearr_22377_22401[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22358 === (10))){
var inst_22340 = (state_22357[(2)]);
var state_22357__$1 = state_22357;
var statearr_22378_22402 = state_22357__$1;
(statearr_22378_22402[(2)] = inst_22340);

(statearr_22378_22402[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22358 === (8))){
var inst_22317 = (state_22357[(8)]);
var inst_22325 = (state_22357[(10)]);
var inst_22321 = (state_22357[(9)]);
var inst_22330 = inst_22317.push(inst_22321);
var tmp22375 = inst_22317;
var inst_22317__$1 = tmp22375;
var inst_22318 = inst_22325;
var state_22357__$1 = (function (){var statearr_22379 = state_22357;
(statearr_22379[(7)] = inst_22318);

(statearr_22379[(14)] = inst_22330);

(statearr_22379[(8)] = inst_22317__$1);

return statearr_22379;
})();
var statearr_22380_22403 = state_22357__$1;
(statearr_22380_22403[(2)] = null);

(statearr_22380_22403[(1)] = (2));


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
});})(c__13630__auto___22389,out))
;
return ((function (switch__13552__auto__,c__13630__auto___22389,out){
return (function() {
var cljs$core$async$state_machine__13553__auto__ = null;
var cljs$core$async$state_machine__13553__auto____0 = (function (){
var statearr_22384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22384[(0)] = cljs$core$async$state_machine__13553__auto__);

(statearr_22384[(1)] = (1));

return statearr_22384;
});
var cljs$core$async$state_machine__13553__auto____1 = (function (state_22357){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_22357);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e22385){if((e22385 instanceof Object)){
var ex__13556__auto__ = e22385;
var statearr_22386_22404 = state_22357;
(statearr_22386_22404[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22357);

return cljs.core.constant$keyword$recur;
} else {
throw e22385;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__22405 = state_22357;
state_22357 = G__22405;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
cljs$core$async$state_machine__13553__auto__ = function(state_22357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13553__auto____1.call(this,state_22357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13553__auto____0;
cljs$core$async$state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13553__auto____1;
return cljs$core$async$state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___22389,out))
})();
var state__13632__auto__ = (function (){var statearr_22387 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_22387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___22389);

return statearr_22387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___22389,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
