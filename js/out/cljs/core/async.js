// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t31323 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31323 = (function (f,fn_handler,meta31324){
this.f = f;
this.fn_handler = fn_handler;
this.meta31324 = meta31324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31323.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31325){
var self__ = this;
var _31325__$1 = this;
return self__.meta31324;
});

cljs.core.async.t31323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31325,meta31324__$1){
var self__ = this;
var _31325__$1 = this;
return (new cljs.core.async.t31323(self__.f,self__.fn_handler,meta31324__$1));
});

cljs.core.async.t31323.cljs$lang$type = true;

cljs.core.async.t31323.cljs$lang$ctorStr = "cljs.core.async/t31323";

cljs.core.async.t31323.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t31323");
});

cljs.core.async.__GT_t31323 = (function __GT_t31323(f__$1,fn_handler__$1,meta31324){
return (new cljs.core.async.t31323(f__$1,fn_handler__$1,meta31324));
});

}

return (new cljs.core.async.t31323(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__31327 = buff;
if(G__31327){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__31327.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31327.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31327);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31327);
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
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
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
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_31344 = (function (){var G__31341 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31341) : cljs.core.deref.call(null,G__31341));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__31342_31345 = val_31344;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31342_31345) : fn1.call(null,G__31342_31345));
} else {
cljs.core.async.impl.dispatch.run(((function (val_31344,ret){
return (function (){
var G__31343 = val_31344;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31343) : fn1.call(null,G__31343));
});})(val_31344,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__31354 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31354) : cljs.core.deref.call(null,G__31354));
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__31355 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31355) : cljs.core.deref.call(null,G__31355));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__31356_31358 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31356_31358) : fn1.call(null,G__31356_31358));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__31357 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31357) : fn1.call(null,G__31357));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4645__auto___31359 = n;
var x_31360 = (0);
while(true){
if((x_31360 < n__4645__auto___31359)){
(a[x_31360] = (0));

var G__31361 = (x_31360 + (1));
x_31360 = G__31361;
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

var G__31362 = (i + (1));
i = G__31362;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__31370 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31370) : cljs.core.atom.call(null,G__31370));
})();
if(typeof cljs.core.async.t31371 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31371 = (function (flag,alt_flag,meta31372){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31372 = meta31372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31371.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31374 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31374) : cljs.core.deref.call(null,G__31374));
});})(flag))
;

cljs.core.async.t31371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31375_31377 = self__.flag;
var G__31376_31378 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31375_31377,G__31376_31378) : cljs.core.reset_BANG_.call(null,G__31375_31377,G__31376_31378));

return true;
});})(flag))
;

cljs.core.async.t31371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31373){
var self__ = this;
var _31373__$1 = this;
return self__.meta31372;
});})(flag))
;

cljs.core.async.t31371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31373,meta31372__$1){
var self__ = this;
var _31373__$1 = this;
return (new cljs.core.async.t31371(self__.flag,self__.alt_flag,meta31372__$1));
});})(flag))
;

cljs.core.async.t31371.cljs$lang$type = true;

cljs.core.async.t31371.cljs$lang$ctorStr = "cljs.core.async/t31371";

cljs.core.async.t31371.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t31371");
});})(flag))
;

cljs.core.async.__GT_t31371 = ((function (flag){
return (function __GT_t31371(flag__$1,alt_flag__$1,meta31372){
return (new cljs.core.async.t31371(flag__$1,alt_flag__$1,meta31372));
});})(flag))
;

}

return (new cljs.core.async.t31371(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t31382 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31382 = (function (cb,flag,alt_handler,meta31383){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31383 = meta31383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31382.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t31382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t31382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31384){
var self__ = this;
var _31384__$1 = this;
return self__.meta31383;
});

cljs.core.async.t31382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31384,meta31383__$1){
var self__ = this;
var _31384__$1 = this;
return (new cljs.core.async.t31382(self__.cb,self__.flag,self__.alt_handler,meta31383__$1));
});

cljs.core.async.t31382.cljs$lang$type = true;

cljs.core.async.t31382.cljs$lang$ctorStr = "cljs.core.async/t31382";

cljs.core.async.t31382.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t31382");
});

cljs.core.async.__GT_t31382 = (function __GT_t31382(cb__$1,flag__$1,alt_handler__$1,meta31383){
return (new cljs.core.async.t31382(cb__$1,flag__$1,alt_handler__$1,meta31383));
});

}

return (new cljs.core.async.t31382(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__31392 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31392) : port.call(null,G__31392));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__31393 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31393) : port.call(null,G__31393));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31385_SHARP_){
var G__31394 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31385_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31394) : fret.call(null,G__31394));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31386_SHARP_){
var G__31395 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31386_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31395) : fret.call(null,G__31395));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31396 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31396) : cljs.core.deref.call(null,G__31396));
})(),(function (){var or__3758__auto__ = wport;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31397 = (i + (1));
i = G__31397;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3758__auto__ = ret;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3746__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3746__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3746__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
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
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__31398){
var map__31400 = p__31398;
var map__31400__$1 = ((cljs.core.seq_QMARK_(map__31400))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31400):map__31400);
var opts = map__31400__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__31398 = null;
if (arguments.length > 1) {
var G__31401__i = 0, G__31401__a = new Array(arguments.length -  1);
while (G__31401__i < G__31401__a.length) {G__31401__a[G__31401__i] = arguments[G__31401__i + 1]; ++G__31401__i;}
  p__31398 = new cljs.core.IndexedSeq(G__31401__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__31398);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31402){
var ports = cljs.core.first(arglist__31402);
var p__31398 = cljs.core.rest(arglist__31402);
return alts_BANG___delegate(ports,p__31398);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__16134__auto___31500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___31500){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___31500){
return (function (state_31476){
var state_val_31477 = (state_31476[(1)]);
if((state_val_31477 === (7))){
var inst_31472 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
var statearr_31478_31501 = state_31476__$1;
(statearr_31478_31501[(2)] = inst_31472);

(statearr_31478_31501[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31477 === (1))){
var state_31476__$1 = state_31476;
var statearr_31479_31502 = state_31476__$1;
(statearr_31479_31502[(2)] = null);

(statearr_31479_31502[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31477 === (4))){
var inst_31455 = (state_31476[(7)]);
var inst_31455__$1 = (state_31476[(2)]);
var inst_31456 = (inst_31455__$1 == null);
var state_31476__$1 = (function (){var statearr_31480 = state_31476;
(statearr_31480[(7)] = inst_31455__$1);

return statearr_31480;
})();
if(cljs.core.truth_(inst_31456)){
var statearr_31481_31503 = state_31476__$1;
(statearr_31481_31503[(1)] = (5));

} else {
var statearr_31482_31504 = state_31476__$1;
(statearr_31482_31504[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31477 === (13))){
var state_31476__$1 = state_31476;
var statearr_31483_31505 = state_31476__$1;
(statearr_31483_31505[(2)] = null);

(statearr_31483_31505[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31477 === (6))){
var inst_31455 = (state_31476[(7)]);
var state_31476__$1 = state_31476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31476__$1,(11),to,inst_31455);
} else {
if((state_val_31477 === (3))){
var inst_31474 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31476__$1,inst_31474);
} else {
if((state_val_31477 === (12))){
var state_31476__$1 = state_31476;
var statearr_31484_31506 = state_31476__$1;
(statearr_31484_31506[(2)] = null);

(statearr_31484_31506[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31477 === (2))){
var state_31476__$1 = state_31476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31476__$1,(4),from);
} else {
if((state_val_31477 === (11))){
var inst_31465 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
if(cljs.core.truth_(inst_31465)){
var statearr_31485_31507 = state_31476__$1;
(statearr_31485_31507[(1)] = (12));

} else {
var statearr_31486_31508 = state_31476__$1;
(statearr_31486_31508[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31477 === (9))){
var state_31476__$1 = state_31476;
var statearr_31487_31509 = state_31476__$1;
(statearr_31487_31509[(2)] = null);

(statearr_31487_31509[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31477 === (5))){
var state_31476__$1 = state_31476;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31488_31510 = state_31476__$1;
(statearr_31488_31510[(1)] = (8));

} else {
var statearr_31489_31511 = state_31476__$1;
(statearr_31489_31511[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31477 === (14))){
var inst_31470 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
var statearr_31490_31512 = state_31476__$1;
(statearr_31490_31512[(2)] = inst_31470);

(statearr_31490_31512[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31477 === (10))){
var inst_31462 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
var statearr_31491_31513 = state_31476__$1;
(statearr_31491_31513[(2)] = inst_31462);

(statearr_31491_31513[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31477 === (8))){
var inst_31459 = cljs.core.async.close_BANG_(to);
var state_31476__$1 = state_31476;
var statearr_31492_31514 = state_31476__$1;
(statearr_31492_31514[(2)] = inst_31459);

(statearr_31492_31514[(1)] = (10));


return cljs.core.constant$keyword$99;
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
});})(c__16134__auto___31500))
;
return ((function (switch__16054__auto__,c__16134__auto___31500){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_31496 = [null,null,null,null,null,null,null,null];
(statearr_31496[(0)] = state_machine__16055__auto__);

(statearr_31496[(1)] = (1));

return statearr_31496;
});
var state_machine__16055__auto____1 = (function (state_31476){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31476);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31497){if((e31497 instanceof Object)){
var ex__16058__auto__ = e31497;
var statearr_31498_31515 = state_31476;
(statearr_31498_31515[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31476);

return cljs.core.constant$keyword$99;
} else {
throw e31497;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31516 = state_31476;
state_31476 = G__31516;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31476){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___31500))
})();
var state__16136__auto__ = (function (){var statearr_31499 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___31500);

return statearr_31499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___31500))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31702){
var vec__31703 = p__31702;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31703,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31703,(1),null);
var job = vec__31703;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16134__auto___31887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___31887,res,vec__31703,v,p,job,jobs,results){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___31887,res,vec__31703,v,p,job,jobs,results){
return (function (state_31708){
var state_val_31709 = (state_31708[(1)]);
if((state_val_31709 === (2))){
var inst_31705 = (state_31708[(2)]);
var inst_31706 = cljs.core.async.close_BANG_(res);
var state_31708__$1 = (function (){var statearr_31710 = state_31708;
(statearr_31710[(7)] = inst_31705);

return statearr_31710;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31708__$1,inst_31706);
} else {
if((state_val_31709 === (1))){
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31708__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16134__auto___31887,res,vec__31703,v,p,job,jobs,results))
;
return ((function (switch__16054__auto__,c__16134__auto___31887,res,vec__31703,v,p,job,jobs,results){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_31714 = [null,null,null,null,null,null,null,null];
(statearr_31714[(0)] = state_machine__16055__auto__);

(statearr_31714[(1)] = (1));

return statearr_31714;
});
var state_machine__16055__auto____1 = (function (state_31708){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31708);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31715){if((e31715 instanceof Object)){
var ex__16058__auto__ = e31715;
var statearr_31716_31888 = state_31708;
(statearr_31716_31888[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31708);

return cljs.core.constant$keyword$99;
} else {
throw e31715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31889 = state_31708;
state_31708 = G__31889;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31708){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___31887,res,vec__31703,v,p,job,jobs,results))
})();
var state__16136__auto__ = (function (){var statearr_31717 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___31887);

return statearr_31717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___31887,res,vec__31703,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31718){
var vec__31719 = p__31718;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31719,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31719,(1),null);
var job = vec__31719;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__31720_31890 = v;
var G__31721_31891 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__31720_31890,G__31721_31891) : xf.call(null,G__31720_31890,G__31721_31891));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4645__auto___31892 = n;
var __31893 = (0);
while(true){
if((__31893 < n__4645__auto___31892)){
var G__31722_31894 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31722_31894) {
case "async":
var c__16134__auto___31896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31893,c__16134__auto___31896,G__31722_31894,n__4645__auto___31892,jobs,results,process,async){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (__31893,c__16134__auto___31896,G__31722_31894,n__4645__auto___31892,jobs,results,process,async){
return (function (state_31735){
var state_val_31736 = (state_31735[(1)]);
if((state_val_31736 === (7))){
var inst_31731 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31737_31897 = state_31735__$1;
(statearr_31737_31897[(2)] = inst_31731);

(statearr_31737_31897[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31736 === (6))){
var state_31735__$1 = state_31735;
var statearr_31738_31898 = state_31735__$1;
(statearr_31738_31898[(2)] = null);

(statearr_31738_31898[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31736 === (5))){
var state_31735__$1 = state_31735;
var statearr_31739_31899 = state_31735__$1;
(statearr_31739_31899[(2)] = null);

(statearr_31739_31899[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31736 === (4))){
var inst_31725 = (state_31735[(2)]);
var inst_31726 = async(inst_31725);
var state_31735__$1 = state_31735;
if(cljs.core.truth_(inst_31726)){
var statearr_31740_31900 = state_31735__$1;
(statearr_31740_31900[(1)] = (5));

} else {
var statearr_31741_31901 = state_31735__$1;
(statearr_31741_31901[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31736 === (3))){
var inst_31733 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31735__$1,inst_31733);
} else {
if((state_val_31736 === (2))){
var state_31735__$1 = state_31735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31735__$1,(4),jobs);
} else {
if((state_val_31736 === (1))){
var state_31735__$1 = state_31735;
var statearr_31742_31902 = state_31735__$1;
(statearr_31742_31902[(2)] = null);

(statearr_31742_31902[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
return null;
}
}
}
}
}
}
}
});})(__31893,c__16134__auto___31896,G__31722_31894,n__4645__auto___31892,jobs,results,process,async))
;
return ((function (__31893,switch__16054__auto__,c__16134__auto___31896,G__31722_31894,n__4645__auto___31892,jobs,results,process,async){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_31746 = [null,null,null,null,null,null,null];
(statearr_31746[(0)] = state_machine__16055__auto__);

(statearr_31746[(1)] = (1));

return statearr_31746;
});
var state_machine__16055__auto____1 = (function (state_31735){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31735);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31747){if((e31747 instanceof Object)){
var ex__16058__auto__ = e31747;
var statearr_31748_31903 = state_31735;
(statearr_31748_31903[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31735);

return cljs.core.constant$keyword$99;
} else {
throw e31747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31904 = state_31735;
state_31735 = G__31904;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31735){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(__31893,switch__16054__auto__,c__16134__auto___31896,G__31722_31894,n__4645__auto___31892,jobs,results,process,async))
})();
var state__16136__auto__ = (function (){var statearr_31749 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___31896);

return statearr_31749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(__31893,c__16134__auto___31896,G__31722_31894,n__4645__auto___31892,jobs,results,process,async))
);


break;
case "compute":
var c__16134__auto___31905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31893,c__16134__auto___31905,G__31722_31894,n__4645__auto___31892,jobs,results,process,async){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (__31893,c__16134__auto___31905,G__31722_31894,n__4645__auto___31892,jobs,results,process,async){
return (function (state_31762){
var state_val_31763 = (state_31762[(1)]);
if((state_val_31763 === (7))){
var inst_31758 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
var statearr_31764_31906 = state_31762__$1;
(statearr_31764_31906[(2)] = inst_31758);

(statearr_31764_31906[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31763 === (6))){
var state_31762__$1 = state_31762;
var statearr_31765_31907 = state_31762__$1;
(statearr_31765_31907[(2)] = null);

(statearr_31765_31907[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31763 === (5))){
var state_31762__$1 = state_31762;
var statearr_31766_31908 = state_31762__$1;
(statearr_31766_31908[(2)] = null);

(statearr_31766_31908[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31763 === (4))){
var inst_31752 = (state_31762[(2)]);
var inst_31753 = process(inst_31752);
var state_31762__$1 = state_31762;
if(cljs.core.truth_(inst_31753)){
var statearr_31767_31909 = state_31762__$1;
(statearr_31767_31909[(1)] = (5));

} else {
var statearr_31768_31910 = state_31762__$1;
(statearr_31768_31910[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31763 === (3))){
var inst_31760 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31762__$1,inst_31760);
} else {
if((state_val_31763 === (2))){
var state_31762__$1 = state_31762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31762__$1,(4),jobs);
} else {
if((state_val_31763 === (1))){
var state_31762__$1 = state_31762;
var statearr_31769_31911 = state_31762__$1;
(statearr_31769_31911[(2)] = null);

(statearr_31769_31911[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
return null;
}
}
}
}
}
}
}
});})(__31893,c__16134__auto___31905,G__31722_31894,n__4645__auto___31892,jobs,results,process,async))
;
return ((function (__31893,switch__16054__auto__,c__16134__auto___31905,G__31722_31894,n__4645__auto___31892,jobs,results,process,async){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_31773 = [null,null,null,null,null,null,null];
(statearr_31773[(0)] = state_machine__16055__auto__);

(statearr_31773[(1)] = (1));

return statearr_31773;
});
var state_machine__16055__auto____1 = (function (state_31762){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31762);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31774){if((e31774 instanceof Object)){
var ex__16058__auto__ = e31774;
var statearr_31775_31912 = state_31762;
(statearr_31775_31912[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31762);

return cljs.core.constant$keyword$99;
} else {
throw e31774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31913 = state_31762;
state_31762 = G__31913;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31762){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(__31893,switch__16054__auto__,c__16134__auto___31905,G__31722_31894,n__4645__auto___31892,jobs,results,process,async))
})();
var state__16136__auto__ = (function (){var statearr_31776 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___31905);

return statearr_31776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(__31893,c__16134__auto___31905,G__31722_31894,n__4645__auto___31892,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31914 = (__31893 + (1));
__31893 = G__31914;
continue;
} else {
}
break;
}

var c__16134__auto___31915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___31915,jobs,results,process,async){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___31915,jobs,results,process,async){
return (function (state_31798){
var state_val_31799 = (state_31798[(1)]);
if((state_val_31799 === (9))){
var inst_31791 = (state_31798[(2)]);
var state_31798__$1 = (function (){var statearr_31800 = state_31798;
(statearr_31800[(7)] = inst_31791);

return statearr_31800;
})();
var statearr_31801_31916 = state_31798__$1;
(statearr_31801_31916[(2)] = null);

(statearr_31801_31916[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31799 === (8))){
var inst_31784 = (state_31798[(8)]);
var inst_31789 = (state_31798[(2)]);
var state_31798__$1 = (function (){var statearr_31802 = state_31798;
(statearr_31802[(9)] = inst_31789);

return statearr_31802;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31798__$1,(9),results,inst_31784);
} else {
if((state_val_31799 === (7))){
var inst_31794 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
var statearr_31803_31917 = state_31798__$1;
(statearr_31803_31917[(2)] = inst_31794);

(statearr_31803_31917[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31799 === (6))){
var inst_31779 = (state_31798[(10)]);
var inst_31784 = (state_31798[(8)]);
var inst_31784__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31785 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31786 = [inst_31779,inst_31784__$1];
var inst_31787 = (new cljs.core.PersistentVector(null,2,(5),inst_31785,inst_31786,null));
var state_31798__$1 = (function (){var statearr_31804 = state_31798;
(statearr_31804[(8)] = inst_31784__$1);

return statearr_31804;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31798__$1,(8),jobs,inst_31787);
} else {
if((state_val_31799 === (5))){
var inst_31782 = cljs.core.async.close_BANG_(jobs);
var state_31798__$1 = state_31798;
var statearr_31805_31918 = state_31798__$1;
(statearr_31805_31918[(2)] = inst_31782);

(statearr_31805_31918[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31799 === (4))){
var inst_31779 = (state_31798[(10)]);
var inst_31779__$1 = (state_31798[(2)]);
var inst_31780 = (inst_31779__$1 == null);
var state_31798__$1 = (function (){var statearr_31806 = state_31798;
(statearr_31806[(10)] = inst_31779__$1);

return statearr_31806;
})();
if(cljs.core.truth_(inst_31780)){
var statearr_31807_31919 = state_31798__$1;
(statearr_31807_31919[(1)] = (5));

} else {
var statearr_31808_31920 = state_31798__$1;
(statearr_31808_31920[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31799 === (3))){
var inst_31796 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31798__$1,inst_31796);
} else {
if((state_val_31799 === (2))){
var state_31798__$1 = state_31798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31798__$1,(4),from);
} else {
if((state_val_31799 === (1))){
var state_31798__$1 = state_31798;
var statearr_31809_31921 = state_31798__$1;
(statearr_31809_31921[(2)] = null);

(statearr_31809_31921[(1)] = (2));


return cljs.core.constant$keyword$99;
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
});})(c__16134__auto___31915,jobs,results,process,async))
;
return ((function (switch__16054__auto__,c__16134__auto___31915,jobs,results,process,async){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_31813 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31813[(0)] = state_machine__16055__auto__);

(statearr_31813[(1)] = (1));

return statearr_31813;
});
var state_machine__16055__auto____1 = (function (state_31798){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31798);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31814){if((e31814 instanceof Object)){
var ex__16058__auto__ = e31814;
var statearr_31815_31922 = state_31798;
(statearr_31815_31922[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31798);

return cljs.core.constant$keyword$99;
} else {
throw e31814;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31923 = state_31798;
state_31798 = G__31923;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31798){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___31915,jobs,results,process,async))
})();
var state__16136__auto__ = (function (){var statearr_31816 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___31915);

return statearr_31816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___31915,jobs,results,process,async))
);


var c__16134__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto__,jobs,results,process,async){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto__,jobs,results,process,async){
return (function (state_31854){
var state_val_31855 = (state_31854[(1)]);
if((state_val_31855 === (7))){
var inst_31850 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31856_31924 = state_31854__$1;
(statearr_31856_31924[(2)] = inst_31850);

(statearr_31856_31924[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (20))){
var state_31854__$1 = state_31854;
var statearr_31857_31925 = state_31854__$1;
(statearr_31857_31925[(2)] = null);

(statearr_31857_31925[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (1))){
var state_31854__$1 = state_31854;
var statearr_31858_31926 = state_31854__$1;
(statearr_31858_31926[(2)] = null);

(statearr_31858_31926[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (4))){
var inst_31819 = (state_31854[(7)]);
var inst_31819__$1 = (state_31854[(2)]);
var inst_31820 = (inst_31819__$1 == null);
var state_31854__$1 = (function (){var statearr_31859 = state_31854;
(statearr_31859[(7)] = inst_31819__$1);

return statearr_31859;
})();
if(cljs.core.truth_(inst_31820)){
var statearr_31860_31927 = state_31854__$1;
(statearr_31860_31927[(1)] = (5));

} else {
var statearr_31861_31928 = state_31854__$1;
(statearr_31861_31928[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (15))){
var inst_31832 = (state_31854[(8)]);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31854__$1,(18),to,inst_31832);
} else {
if((state_val_31855 === (21))){
var inst_31845 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31862_31929 = state_31854__$1;
(statearr_31862_31929[(2)] = inst_31845);

(statearr_31862_31929[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (13))){
var inst_31847 = (state_31854[(2)]);
var state_31854__$1 = (function (){var statearr_31863 = state_31854;
(statearr_31863[(9)] = inst_31847);

return statearr_31863;
})();
var statearr_31864_31930 = state_31854__$1;
(statearr_31864_31930[(2)] = null);

(statearr_31864_31930[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (6))){
var inst_31819 = (state_31854[(7)]);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31854__$1,(11),inst_31819);
} else {
if((state_val_31855 === (17))){
var inst_31840 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
if(cljs.core.truth_(inst_31840)){
var statearr_31865_31931 = state_31854__$1;
(statearr_31865_31931[(1)] = (19));

} else {
var statearr_31866_31932 = state_31854__$1;
(statearr_31866_31932[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (3))){
var inst_31852 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31854__$1,inst_31852);
} else {
if((state_val_31855 === (12))){
var inst_31829 = (state_31854[(10)]);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31854__$1,(14),inst_31829);
} else {
if((state_val_31855 === (2))){
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31854__$1,(4),results);
} else {
if((state_val_31855 === (19))){
var state_31854__$1 = state_31854;
var statearr_31867_31933 = state_31854__$1;
(statearr_31867_31933[(2)] = null);

(statearr_31867_31933[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (11))){
var inst_31829 = (state_31854[(2)]);
var state_31854__$1 = (function (){var statearr_31868 = state_31854;
(statearr_31868[(10)] = inst_31829);

return statearr_31868;
})();
var statearr_31869_31934 = state_31854__$1;
(statearr_31869_31934[(2)] = null);

(statearr_31869_31934[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (9))){
var state_31854__$1 = state_31854;
var statearr_31870_31935 = state_31854__$1;
(statearr_31870_31935[(2)] = null);

(statearr_31870_31935[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (5))){
var state_31854__$1 = state_31854;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31871_31936 = state_31854__$1;
(statearr_31871_31936[(1)] = (8));

} else {
var statearr_31872_31937 = state_31854__$1;
(statearr_31872_31937[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (14))){
var inst_31834 = (state_31854[(11)]);
var inst_31832 = (state_31854[(8)]);
var inst_31832__$1 = (state_31854[(2)]);
var inst_31833 = (inst_31832__$1 == null);
var inst_31834__$1 = cljs.core.not(inst_31833);
var state_31854__$1 = (function (){var statearr_31873 = state_31854;
(statearr_31873[(11)] = inst_31834__$1);

(statearr_31873[(8)] = inst_31832__$1);

return statearr_31873;
})();
if(inst_31834__$1){
var statearr_31874_31938 = state_31854__$1;
(statearr_31874_31938[(1)] = (15));

} else {
var statearr_31875_31939 = state_31854__$1;
(statearr_31875_31939[(1)] = (16));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (16))){
var inst_31834 = (state_31854[(11)]);
var state_31854__$1 = state_31854;
var statearr_31876_31940 = state_31854__$1;
(statearr_31876_31940[(2)] = inst_31834);

(statearr_31876_31940[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (10))){
var inst_31826 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31877_31941 = state_31854__$1;
(statearr_31877_31941[(2)] = inst_31826);

(statearr_31877_31941[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (18))){
var inst_31837 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31878_31942 = state_31854__$1;
(statearr_31878_31942[(2)] = inst_31837);

(statearr_31878_31942[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31855 === (8))){
var inst_31823 = cljs.core.async.close_BANG_(to);
var state_31854__$1 = state_31854;
var statearr_31879_31943 = state_31854__$1;
(statearr_31879_31943[(2)] = inst_31823);

(statearr_31879_31943[(1)] = (10));


return cljs.core.constant$keyword$99;
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
});})(c__16134__auto__,jobs,results,process,async))
;
return ((function (switch__16054__auto__,c__16134__auto__,jobs,results,process,async){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_31883 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31883[(0)] = state_machine__16055__auto__);

(statearr_31883[(1)] = (1));

return statearr_31883;
});
var state_machine__16055__auto____1 = (function (state_31854){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31854);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31884){if((e31884 instanceof Object)){
var ex__16058__auto__ = e31884;
var statearr_31885_31944 = state_31854;
(statearr_31885_31944[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31854);

return cljs.core.constant$keyword$99;
} else {
throw e31884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31945 = state_31854;
state_31854 = G__31945;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31854){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto__,jobs,results,process,async))
})();
var state__16136__auto__ = (function (){var statearr_31886 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto__);

return statearr_31886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto__,jobs,results,process,async))
);

return c__16134__auto__;
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
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$106);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
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
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$107);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
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
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16134__auto___32068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___32068,tc,fc){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___32068,tc,fc){
return (function (state_32042){
var state_val_32043 = (state_32042[(1)]);
if((state_val_32043 === (7))){
var inst_32038 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
var statearr_32044_32069 = state_32042__$1;
(statearr_32044_32069[(2)] = inst_32038);

(statearr_32044_32069[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32043 === (1))){
var state_32042__$1 = state_32042;
var statearr_32045_32070 = state_32042__$1;
(statearr_32045_32070[(2)] = null);

(statearr_32045_32070[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32043 === (4))){
var inst_32019 = (state_32042[(7)]);
var inst_32019__$1 = (state_32042[(2)]);
var inst_32020 = (inst_32019__$1 == null);
var state_32042__$1 = (function (){var statearr_32046 = state_32042;
(statearr_32046[(7)] = inst_32019__$1);

return statearr_32046;
})();
if(cljs.core.truth_(inst_32020)){
var statearr_32047_32071 = state_32042__$1;
(statearr_32047_32071[(1)] = (5));

} else {
var statearr_32048_32072 = state_32042__$1;
(statearr_32048_32072[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32043 === (13))){
var state_32042__$1 = state_32042;
var statearr_32049_32073 = state_32042__$1;
(statearr_32049_32073[(2)] = null);

(statearr_32049_32073[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32043 === (6))){
var inst_32019 = (state_32042[(7)]);
var inst_32025 = (function (){var G__32050 = inst_32019;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__32050) : p.call(null,G__32050));
})();
var state_32042__$1 = state_32042;
if(cljs.core.truth_(inst_32025)){
var statearr_32051_32074 = state_32042__$1;
(statearr_32051_32074[(1)] = (9));

} else {
var statearr_32052_32075 = state_32042__$1;
(statearr_32052_32075[(1)] = (10));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32043 === (3))){
var inst_32040 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32042__$1,inst_32040);
} else {
if((state_val_32043 === (12))){
var state_32042__$1 = state_32042;
var statearr_32053_32076 = state_32042__$1;
(statearr_32053_32076[(2)] = null);

(statearr_32053_32076[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32043 === (2))){
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32042__$1,(4),ch);
} else {
if((state_val_32043 === (11))){
var inst_32019 = (state_32042[(7)]);
var inst_32029 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32042__$1,(8),inst_32029,inst_32019);
} else {
if((state_val_32043 === (9))){
var state_32042__$1 = state_32042;
var statearr_32054_32077 = state_32042__$1;
(statearr_32054_32077[(2)] = tc);

(statearr_32054_32077[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32043 === (5))){
var inst_32022 = cljs.core.async.close_BANG_(tc);
var inst_32023 = cljs.core.async.close_BANG_(fc);
var state_32042__$1 = (function (){var statearr_32055 = state_32042;
(statearr_32055[(8)] = inst_32022);

return statearr_32055;
})();
var statearr_32056_32078 = state_32042__$1;
(statearr_32056_32078[(2)] = inst_32023);

(statearr_32056_32078[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32043 === (14))){
var inst_32036 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
var statearr_32057_32079 = state_32042__$1;
(statearr_32057_32079[(2)] = inst_32036);

(statearr_32057_32079[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32043 === (10))){
var state_32042__$1 = state_32042;
var statearr_32058_32080 = state_32042__$1;
(statearr_32058_32080[(2)] = fc);

(statearr_32058_32080[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32043 === (8))){
var inst_32031 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
if(cljs.core.truth_(inst_32031)){
var statearr_32059_32081 = state_32042__$1;
(statearr_32059_32081[(1)] = (12));

} else {
var statearr_32060_32082 = state_32042__$1;
(statearr_32060_32082[(1)] = (13));

}

return cljs.core.constant$keyword$99;
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
});})(c__16134__auto___32068,tc,fc))
;
return ((function (switch__16054__auto__,c__16134__auto___32068,tc,fc){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_32064 = [null,null,null,null,null,null,null,null,null];
(statearr_32064[(0)] = state_machine__16055__auto__);

(statearr_32064[(1)] = (1));

return statearr_32064;
});
var state_machine__16055__auto____1 = (function (state_32042){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_32042);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e32065){if((e32065 instanceof Object)){
var ex__16058__auto__ = e32065;
var statearr_32066_32083 = state_32042;
(statearr_32066_32083[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32042);

return cljs.core.constant$keyword$99;
} else {
throw e32065;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__32084 = state_32042;
state_32042 = G__32084;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_32042){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_32042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___32068,tc,fc))
})();
var state__16136__auto__ = (function (){var statearr_32067 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_32067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___32068);

return statearr_32067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___32068,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__16134__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto__){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto__){
return (function (state_32133){
var state_val_32134 = (state_32133[(1)]);
if((state_val_32134 === (7))){
var inst_32129 = (state_32133[(2)]);
var state_32133__$1 = state_32133;
var statearr_32135_32153 = state_32133__$1;
(statearr_32135_32153[(2)] = inst_32129);

(statearr_32135_32153[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32134 === (6))){
var inst_32119 = (state_32133[(7)]);
var inst_32122 = (state_32133[(8)]);
var inst_32126 = (function (){var G__32136 = inst_32119;
var G__32137 = inst_32122;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32136,G__32137) : f.call(null,G__32136,G__32137));
})();
var inst_32119__$1 = inst_32126;
var state_32133__$1 = (function (){var statearr_32138 = state_32133;
(statearr_32138[(7)] = inst_32119__$1);

return statearr_32138;
})();
var statearr_32139_32154 = state_32133__$1;
(statearr_32139_32154[(2)] = null);

(statearr_32139_32154[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32134 === (5))){
var inst_32119 = (state_32133[(7)]);
var state_32133__$1 = state_32133;
var statearr_32140_32155 = state_32133__$1;
(statearr_32140_32155[(2)] = inst_32119);

(statearr_32140_32155[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32134 === (4))){
var inst_32122 = (state_32133[(8)]);
var inst_32122__$1 = (state_32133[(2)]);
var inst_32123 = (inst_32122__$1 == null);
var state_32133__$1 = (function (){var statearr_32141 = state_32133;
(statearr_32141[(8)] = inst_32122__$1);

return statearr_32141;
})();
if(cljs.core.truth_(inst_32123)){
var statearr_32142_32156 = state_32133__$1;
(statearr_32142_32156[(1)] = (5));

} else {
var statearr_32143_32157 = state_32133__$1;
(statearr_32143_32157[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32134 === (3))){
var inst_32131 = (state_32133[(2)]);
var state_32133__$1 = state_32133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32133__$1,inst_32131);
} else {
if((state_val_32134 === (2))){
var state_32133__$1 = state_32133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32133__$1,(4),ch);
} else {
if((state_val_32134 === (1))){
var inst_32119 = init;
var state_32133__$1 = (function (){var statearr_32144 = state_32133;
(statearr_32144[(7)] = inst_32119);

return statearr_32144;
})();
var statearr_32145_32158 = state_32133__$1;
(statearr_32145_32158[(2)] = null);

(statearr_32145_32158[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
return null;
}
}
}
}
}
}
}
});})(c__16134__auto__))
;
return ((function (switch__16054__auto__,c__16134__auto__){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_32149 = [null,null,null,null,null,null,null,null,null];
(statearr_32149[(0)] = state_machine__16055__auto__);

(statearr_32149[(1)] = (1));

return statearr_32149;
});
var state_machine__16055__auto____1 = (function (state_32133){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_32133);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e32150){if((e32150 instanceof Object)){
var ex__16058__auto__ = e32150;
var statearr_32151_32159 = state_32133;
(statearr_32151_32159[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32133);

return cljs.core.constant$keyword$99;
} else {
throw e32150;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__32160 = state_32133;
state_32133 = G__32160;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_32133){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_32133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto__))
})();
var state__16136__auto__ = (function (){var statearr_32152 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_32152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto__);

return statearr_32152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto__))
);

return c__16134__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__16134__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto__){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto__){
return (function (state_32237){
var state_val_32238 = (state_32237[(1)]);
if((state_val_32238 === (7))){
var inst_32219 = (state_32237[(2)]);
var state_32237__$1 = state_32237;
var statearr_32239_32262 = state_32237__$1;
(statearr_32239_32262[(2)] = inst_32219);

(statearr_32239_32262[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32238 === (1))){
var inst_32213 = cljs.core.seq(coll);
var inst_32214 = inst_32213;
var state_32237__$1 = (function (){var statearr_32240 = state_32237;
(statearr_32240[(7)] = inst_32214);

return statearr_32240;
})();
var statearr_32241_32263 = state_32237__$1;
(statearr_32241_32263[(2)] = null);

(statearr_32241_32263[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32238 === (4))){
var inst_32214 = (state_32237[(7)]);
var inst_32217 = cljs.core.first(inst_32214);
var state_32237__$1 = state_32237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32237__$1,(7),ch,inst_32217);
} else {
if((state_val_32238 === (13))){
var inst_32231 = (state_32237[(2)]);
var state_32237__$1 = state_32237;
var statearr_32242_32264 = state_32237__$1;
(statearr_32242_32264[(2)] = inst_32231);

(statearr_32242_32264[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32238 === (6))){
var inst_32222 = (state_32237[(2)]);
var state_32237__$1 = state_32237;
if(cljs.core.truth_(inst_32222)){
var statearr_32243_32265 = state_32237__$1;
(statearr_32243_32265[(1)] = (8));

} else {
var statearr_32244_32266 = state_32237__$1;
(statearr_32244_32266[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32238 === (3))){
var inst_32235 = (state_32237[(2)]);
var state_32237__$1 = state_32237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32237__$1,inst_32235);
} else {
if((state_val_32238 === (12))){
var state_32237__$1 = state_32237;
var statearr_32245_32267 = state_32237__$1;
(statearr_32245_32267[(2)] = null);

(statearr_32245_32267[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32238 === (2))){
var inst_32214 = (state_32237[(7)]);
var state_32237__$1 = state_32237;
if(cljs.core.truth_(inst_32214)){
var statearr_32246_32268 = state_32237__$1;
(statearr_32246_32268[(1)] = (4));

} else {
var statearr_32247_32269 = state_32237__$1;
(statearr_32247_32269[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32238 === (11))){
var inst_32228 = cljs.core.async.close_BANG_(ch);
var state_32237__$1 = state_32237;
var statearr_32248_32270 = state_32237__$1;
(statearr_32248_32270[(2)] = inst_32228);

(statearr_32248_32270[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32238 === (9))){
var state_32237__$1 = state_32237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32249_32271 = state_32237__$1;
(statearr_32249_32271[(1)] = (11));

} else {
var statearr_32250_32272 = state_32237__$1;
(statearr_32250_32272[(1)] = (12));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32238 === (5))){
var inst_32214 = (state_32237[(7)]);
var state_32237__$1 = state_32237;
var statearr_32251_32273 = state_32237__$1;
(statearr_32251_32273[(2)] = inst_32214);

(statearr_32251_32273[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32238 === (10))){
var inst_32233 = (state_32237[(2)]);
var state_32237__$1 = state_32237;
var statearr_32252_32274 = state_32237__$1;
(statearr_32252_32274[(2)] = inst_32233);

(statearr_32252_32274[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32238 === (8))){
var inst_32214 = (state_32237[(7)]);
var inst_32224 = cljs.core.next(inst_32214);
var inst_32214__$1 = inst_32224;
var state_32237__$1 = (function (){var statearr_32253 = state_32237;
(statearr_32253[(7)] = inst_32214__$1);

return statearr_32253;
})();
var statearr_32254_32275 = state_32237__$1;
(statearr_32254_32275[(2)] = null);

(statearr_32254_32275[(1)] = (2));


return cljs.core.constant$keyword$99;
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
});})(c__16134__auto__))
;
return ((function (switch__16054__auto__,c__16134__auto__){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_32258 = [null,null,null,null,null,null,null,null];
(statearr_32258[(0)] = state_machine__16055__auto__);

(statearr_32258[(1)] = (1));

return statearr_32258;
});
var state_machine__16055__auto____1 = (function (state_32237){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_32237);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e32259){if((e32259 instanceof Object)){
var ex__16058__auto__ = e32259;
var statearr_32260_32276 = state_32237;
(statearr_32260_32276[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32237);

return cljs.core.constant$keyword$99;
} else {
throw e32259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__32277 = state_32237;
state_32237 = G__32277;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_32237){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_32237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto__))
})();
var state__16136__auto__ = (function (){var statearr_32261 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_32261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto__);

return statearr_32261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto__))
);

return c__16134__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj32279 = {};
return obj32279;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3746__auto__ = _;
if(and__3746__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4402__auto__ = (((_ == null))?null:_);
return (function (){var or__3758__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__32283 = x__4402__auto__;
return goog.typeOf(G__32283);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj32285 = {};
return obj32285;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__32289 = x__4402__auto__;
return goog.typeOf(G__32289);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__32293 = x__4402__auto__;
return goog.typeOf(G__32293);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__32297 = x__4402__auto__;
return goog.typeOf(G__32297);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
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
cljs.core.async.mult = (function mult(ch){
var cs = (function (){var G__32527 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32527) : cljs.core.atom.call(null,G__32527));
})();
var m = (function (){
if(typeof cljs.core.async.t32528 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32528 = (function (cs,ch,mult,meta32529){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32529 = meta32529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32528.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32528.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32528.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32528.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32531_32756 = self__.cs;
var G__32532_32757 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32531_32756,G__32532_32757) : cljs.core.reset_BANG_.call(null,G__32531_32756,G__32532_32757));

return null;
});})(cs))
;

cljs.core.async.t32528.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32528.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32530){
var self__ = this;
var _32530__$1 = this;
return self__.meta32529;
});})(cs))
;

cljs.core.async.t32528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32530,meta32529__$1){
var self__ = this;
var _32530__$1 = this;
return (new cljs.core.async.t32528(self__.cs,self__.ch,self__.mult,meta32529__$1));
});})(cs))
;

cljs.core.async.t32528.cljs$lang$type = true;

cljs.core.async.t32528.cljs$lang$ctorStr = "cljs.core.async/t32528";

cljs.core.async.t32528.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t32528");
});})(cs))
;

cljs.core.async.__GT_t32528 = ((function (cs){
return (function __GT_t32528(cs__$1,ch__$1,mult__$1,meta32529){
return (new cljs.core.async.t32528(cs__$1,ch__$1,mult__$1,meta32529));
});})(cs))
;

}

return (new cljs.core.async.t32528(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__32533 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32533) : cljs.core.atom.call(null,G__32533));
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
var c__16134__auto___32758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___32758,cs,m,dchan,dctr,done){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___32758,cs,m,dchan,dctr,done){
return (function (state_32664){
var state_val_32665 = (state_32664[(1)]);
if((state_val_32665 === (7))){
var inst_32660 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32666_32759 = state_32664__$1;
(statearr_32666_32759[(2)] = inst_32660);

(statearr_32666_32759[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (20))){
var inst_32565 = (state_32664[(7)]);
var inst_32575 = cljs.core.first(inst_32565);
var inst_32576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32575,(0),null);
var inst_32577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32575,(1),null);
var state_32664__$1 = (function (){var statearr_32667 = state_32664;
(statearr_32667[(8)] = inst_32576);

return statearr_32667;
})();
if(cljs.core.truth_(inst_32577)){
var statearr_32668_32760 = state_32664__$1;
(statearr_32668_32760[(1)] = (22));

} else {
var statearr_32669_32761 = state_32664__$1;
(statearr_32669_32761[(1)] = (23));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (27))){
var inst_32605 = (state_32664[(9)]);
var inst_32607 = (state_32664[(10)]);
var inst_32612 = (state_32664[(11)]);
var inst_32536 = (state_32664[(12)]);
var inst_32612__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32605,inst_32607);
var inst_32613 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32612__$1,inst_32536,done);
var state_32664__$1 = (function (){var statearr_32670 = state_32664;
(statearr_32670[(11)] = inst_32612__$1);

return statearr_32670;
})();
if(cljs.core.truth_(inst_32613)){
var statearr_32671_32762 = state_32664__$1;
(statearr_32671_32762[(1)] = (30));

} else {
var statearr_32672_32763 = state_32664__$1;
(statearr_32672_32763[(1)] = (31));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (1))){
var state_32664__$1 = state_32664;
var statearr_32673_32764 = state_32664__$1;
(statearr_32673_32764[(2)] = null);

(statearr_32673_32764[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (24))){
var inst_32565 = (state_32664[(7)]);
var inst_32582 = (state_32664[(2)]);
var inst_32583 = cljs.core.next(inst_32565);
var inst_32545 = inst_32583;
var inst_32546 = null;
var inst_32547 = (0);
var inst_32548 = (0);
var state_32664__$1 = (function (){var statearr_32674 = state_32664;
(statearr_32674[(13)] = inst_32545);

(statearr_32674[(14)] = inst_32546);

(statearr_32674[(15)] = inst_32582);

(statearr_32674[(16)] = inst_32547);

(statearr_32674[(17)] = inst_32548);

return statearr_32674;
})();
var statearr_32675_32765 = state_32664__$1;
(statearr_32675_32765[(2)] = null);

(statearr_32675_32765[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (39))){
var state_32664__$1 = state_32664;
var statearr_32679_32766 = state_32664__$1;
(statearr_32679_32766[(2)] = null);

(statearr_32679_32766[(1)] = (41));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (4))){
var inst_32536 = (state_32664[(12)]);
var inst_32536__$1 = (state_32664[(2)]);
var inst_32537 = (inst_32536__$1 == null);
var state_32664__$1 = (function (){var statearr_32680 = state_32664;
(statearr_32680[(12)] = inst_32536__$1);

return statearr_32680;
})();
if(cljs.core.truth_(inst_32537)){
var statearr_32681_32767 = state_32664__$1;
(statearr_32681_32767[(1)] = (5));

} else {
var statearr_32682_32768 = state_32664__$1;
(statearr_32682_32768[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (15))){
var inst_32545 = (state_32664[(13)]);
var inst_32546 = (state_32664[(14)]);
var inst_32547 = (state_32664[(16)]);
var inst_32548 = (state_32664[(17)]);
var inst_32561 = (state_32664[(2)]);
var inst_32562 = (inst_32548 + (1));
var tmp32676 = inst_32545;
var tmp32677 = inst_32546;
var tmp32678 = inst_32547;
var inst_32545__$1 = tmp32676;
var inst_32546__$1 = tmp32677;
var inst_32547__$1 = tmp32678;
var inst_32548__$1 = inst_32562;
var state_32664__$1 = (function (){var statearr_32683 = state_32664;
(statearr_32683[(13)] = inst_32545__$1);

(statearr_32683[(14)] = inst_32546__$1);

(statearr_32683[(16)] = inst_32547__$1);

(statearr_32683[(17)] = inst_32548__$1);

(statearr_32683[(18)] = inst_32561);

return statearr_32683;
})();
var statearr_32684_32769 = state_32664__$1;
(statearr_32684_32769[(2)] = null);

(statearr_32684_32769[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (21))){
var inst_32586 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32688_32770 = state_32664__$1;
(statearr_32688_32770[(2)] = inst_32586);

(statearr_32688_32770[(1)] = (18));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (31))){
var inst_32612 = (state_32664[(11)]);
var inst_32616 = done(null);
var inst_32617 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32612);
var state_32664__$1 = (function (){var statearr_32689 = state_32664;
(statearr_32689[(19)] = inst_32616);

return statearr_32689;
})();
var statearr_32690_32771 = state_32664__$1;
(statearr_32690_32771[(2)] = inst_32617);

(statearr_32690_32771[(1)] = (32));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (32))){
var inst_32604 = (state_32664[(20)]);
var inst_32605 = (state_32664[(9)]);
var inst_32607 = (state_32664[(10)]);
var inst_32606 = (state_32664[(21)]);
var inst_32619 = (state_32664[(2)]);
var inst_32620 = (inst_32607 + (1));
var tmp32685 = inst_32604;
var tmp32686 = inst_32605;
var tmp32687 = inst_32606;
var inst_32604__$1 = tmp32685;
var inst_32605__$1 = tmp32686;
var inst_32606__$1 = tmp32687;
var inst_32607__$1 = inst_32620;
var state_32664__$1 = (function (){var statearr_32691 = state_32664;
(statearr_32691[(20)] = inst_32604__$1);

(statearr_32691[(22)] = inst_32619);

(statearr_32691[(9)] = inst_32605__$1);

(statearr_32691[(10)] = inst_32607__$1);

(statearr_32691[(21)] = inst_32606__$1);

return statearr_32691;
})();
var statearr_32692_32772 = state_32664__$1;
(statearr_32692_32772[(2)] = null);

(statearr_32692_32772[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (40))){
var inst_32632 = (state_32664[(23)]);
var inst_32636 = done(null);
var inst_32637 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32632);
var state_32664__$1 = (function (){var statearr_32693 = state_32664;
(statearr_32693[(24)] = inst_32636);

return statearr_32693;
})();
var statearr_32694_32773 = state_32664__$1;
(statearr_32694_32773[(2)] = inst_32637);

(statearr_32694_32773[(1)] = (41));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (33))){
var inst_32623 = (state_32664[(25)]);
var inst_32625 = cljs.core.chunked_seq_QMARK_(inst_32623);
var state_32664__$1 = state_32664;
if(inst_32625){
var statearr_32695_32774 = state_32664__$1;
(statearr_32695_32774[(1)] = (36));

} else {
var statearr_32696_32775 = state_32664__$1;
(statearr_32696_32775[(1)] = (37));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (13))){
var inst_32555 = (state_32664[(26)]);
var inst_32558 = cljs.core.async.close_BANG_(inst_32555);
var state_32664__$1 = state_32664;
var statearr_32697_32776 = state_32664__$1;
(statearr_32697_32776[(2)] = inst_32558);

(statearr_32697_32776[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (22))){
var inst_32576 = (state_32664[(8)]);
var inst_32579 = cljs.core.async.close_BANG_(inst_32576);
var state_32664__$1 = state_32664;
var statearr_32698_32777 = state_32664__$1;
(statearr_32698_32777[(2)] = inst_32579);

(statearr_32698_32777[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (36))){
var inst_32623 = (state_32664[(25)]);
var inst_32627 = cljs.core.chunk_first(inst_32623);
var inst_32628 = cljs.core.chunk_rest(inst_32623);
var inst_32629 = cljs.core.count(inst_32627);
var inst_32604 = inst_32628;
var inst_32605 = inst_32627;
var inst_32606 = inst_32629;
var inst_32607 = (0);
var state_32664__$1 = (function (){var statearr_32699 = state_32664;
(statearr_32699[(20)] = inst_32604);

(statearr_32699[(9)] = inst_32605);

(statearr_32699[(10)] = inst_32607);

(statearr_32699[(21)] = inst_32606);

return statearr_32699;
})();
var statearr_32700_32778 = state_32664__$1;
(statearr_32700_32778[(2)] = null);

(statearr_32700_32778[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (41))){
var inst_32623 = (state_32664[(25)]);
var inst_32639 = (state_32664[(2)]);
var inst_32640 = cljs.core.next(inst_32623);
var inst_32604 = inst_32640;
var inst_32605 = null;
var inst_32606 = (0);
var inst_32607 = (0);
var state_32664__$1 = (function (){var statearr_32701 = state_32664;
(statearr_32701[(20)] = inst_32604);

(statearr_32701[(27)] = inst_32639);

(statearr_32701[(9)] = inst_32605);

(statearr_32701[(10)] = inst_32607);

(statearr_32701[(21)] = inst_32606);

return statearr_32701;
})();
var statearr_32702_32779 = state_32664__$1;
(statearr_32702_32779[(2)] = null);

(statearr_32702_32779[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (43))){
var state_32664__$1 = state_32664;
var statearr_32703_32780 = state_32664__$1;
(statearr_32703_32780[(2)] = null);

(statearr_32703_32780[(1)] = (44));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (29))){
var inst_32648 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32704_32781 = state_32664__$1;
(statearr_32704_32781[(2)] = inst_32648);

(statearr_32704_32781[(1)] = (26));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (44))){
var inst_32657 = (state_32664[(2)]);
var state_32664__$1 = (function (){var statearr_32705 = state_32664;
(statearr_32705[(28)] = inst_32657);

return statearr_32705;
})();
var statearr_32706_32782 = state_32664__$1;
(statearr_32706_32782[(2)] = null);

(statearr_32706_32782[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (6))){
var inst_32596 = (state_32664[(29)]);
var inst_32595 = (function (){var G__32707 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32707) : cljs.core.deref.call(null,G__32707));
})();
var inst_32596__$1 = cljs.core.keys(inst_32595);
var inst_32597 = cljs.core.count(inst_32596__$1);
var inst_32598 = (function (){var G__32708 = dctr;
var G__32709 = inst_32597;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32708,G__32709) : cljs.core.reset_BANG_.call(null,G__32708,G__32709));
})();
var inst_32603 = cljs.core.seq(inst_32596__$1);
var inst_32604 = inst_32603;
var inst_32605 = null;
var inst_32606 = (0);
var inst_32607 = (0);
var state_32664__$1 = (function (){var statearr_32710 = state_32664;
(statearr_32710[(20)] = inst_32604);

(statearr_32710[(30)] = inst_32598);

(statearr_32710[(9)] = inst_32605);

(statearr_32710[(29)] = inst_32596__$1);

(statearr_32710[(10)] = inst_32607);

(statearr_32710[(21)] = inst_32606);

return statearr_32710;
})();
var statearr_32711_32783 = state_32664__$1;
(statearr_32711_32783[(2)] = null);

(statearr_32711_32783[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (28))){
var inst_32604 = (state_32664[(20)]);
var inst_32623 = (state_32664[(25)]);
var inst_32623__$1 = cljs.core.seq(inst_32604);
var state_32664__$1 = (function (){var statearr_32712 = state_32664;
(statearr_32712[(25)] = inst_32623__$1);

return statearr_32712;
})();
if(inst_32623__$1){
var statearr_32713_32784 = state_32664__$1;
(statearr_32713_32784[(1)] = (33));

} else {
var statearr_32714_32785 = state_32664__$1;
(statearr_32714_32785[(1)] = (34));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (25))){
var inst_32607 = (state_32664[(10)]);
var inst_32606 = (state_32664[(21)]);
var inst_32609 = (inst_32607 < inst_32606);
var inst_32610 = inst_32609;
var state_32664__$1 = state_32664;
if(cljs.core.truth_(inst_32610)){
var statearr_32715_32786 = state_32664__$1;
(statearr_32715_32786[(1)] = (27));

} else {
var statearr_32716_32787 = state_32664__$1;
(statearr_32716_32787[(1)] = (28));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (34))){
var state_32664__$1 = state_32664;
var statearr_32717_32788 = state_32664__$1;
(statearr_32717_32788[(2)] = null);

(statearr_32717_32788[(1)] = (35));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (17))){
var state_32664__$1 = state_32664;
var statearr_32718_32789 = state_32664__$1;
(statearr_32718_32789[(2)] = null);

(statearr_32718_32789[(1)] = (18));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (3))){
var inst_32662 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32664__$1,inst_32662);
} else {
if((state_val_32665 === (12))){
var inst_32591 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32719_32790 = state_32664__$1;
(statearr_32719_32790[(2)] = inst_32591);

(statearr_32719_32790[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (2))){
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32664__$1,(4),ch);
} else {
if((state_val_32665 === (23))){
var state_32664__$1 = state_32664;
var statearr_32720_32791 = state_32664__$1;
(statearr_32720_32791[(2)] = null);

(statearr_32720_32791[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (35))){
var inst_32646 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32721_32792 = state_32664__$1;
(statearr_32721_32792[(2)] = inst_32646);

(statearr_32721_32792[(1)] = (29));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (19))){
var inst_32565 = (state_32664[(7)]);
var inst_32569 = cljs.core.chunk_first(inst_32565);
var inst_32570 = cljs.core.chunk_rest(inst_32565);
var inst_32571 = cljs.core.count(inst_32569);
var inst_32545 = inst_32570;
var inst_32546 = inst_32569;
var inst_32547 = inst_32571;
var inst_32548 = (0);
var state_32664__$1 = (function (){var statearr_32722 = state_32664;
(statearr_32722[(13)] = inst_32545);

(statearr_32722[(14)] = inst_32546);

(statearr_32722[(16)] = inst_32547);

(statearr_32722[(17)] = inst_32548);

return statearr_32722;
})();
var statearr_32723_32793 = state_32664__$1;
(statearr_32723_32793[(2)] = null);

(statearr_32723_32793[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (11))){
var inst_32545 = (state_32664[(13)]);
var inst_32565 = (state_32664[(7)]);
var inst_32565__$1 = cljs.core.seq(inst_32545);
var state_32664__$1 = (function (){var statearr_32724 = state_32664;
(statearr_32724[(7)] = inst_32565__$1);

return statearr_32724;
})();
if(inst_32565__$1){
var statearr_32725_32794 = state_32664__$1;
(statearr_32725_32794[(1)] = (16));

} else {
var statearr_32726_32795 = state_32664__$1;
(statearr_32726_32795[(1)] = (17));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (9))){
var inst_32593 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32727_32796 = state_32664__$1;
(statearr_32727_32796[(2)] = inst_32593);

(statearr_32727_32796[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (5))){
var inst_32543 = (function (){var G__32728 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32728) : cljs.core.deref.call(null,G__32728));
})();
var inst_32544 = cljs.core.seq(inst_32543);
var inst_32545 = inst_32544;
var inst_32546 = null;
var inst_32547 = (0);
var inst_32548 = (0);
var state_32664__$1 = (function (){var statearr_32729 = state_32664;
(statearr_32729[(13)] = inst_32545);

(statearr_32729[(14)] = inst_32546);

(statearr_32729[(16)] = inst_32547);

(statearr_32729[(17)] = inst_32548);

return statearr_32729;
})();
var statearr_32730_32797 = state_32664__$1;
(statearr_32730_32797[(2)] = null);

(statearr_32730_32797[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (14))){
var state_32664__$1 = state_32664;
var statearr_32731_32798 = state_32664__$1;
(statearr_32731_32798[(2)] = null);

(statearr_32731_32798[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (45))){
var inst_32654 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32732_32799 = state_32664__$1;
(statearr_32732_32799[(2)] = inst_32654);

(statearr_32732_32799[(1)] = (44));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (26))){
var inst_32596 = (state_32664[(29)]);
var inst_32650 = (state_32664[(2)]);
var inst_32651 = cljs.core.seq(inst_32596);
var state_32664__$1 = (function (){var statearr_32733 = state_32664;
(statearr_32733[(31)] = inst_32650);

return statearr_32733;
})();
if(inst_32651){
var statearr_32734_32800 = state_32664__$1;
(statearr_32734_32800[(1)] = (42));

} else {
var statearr_32735_32801 = state_32664__$1;
(statearr_32735_32801[(1)] = (43));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (16))){
var inst_32565 = (state_32664[(7)]);
var inst_32567 = cljs.core.chunked_seq_QMARK_(inst_32565);
var state_32664__$1 = state_32664;
if(inst_32567){
var statearr_32736_32802 = state_32664__$1;
(statearr_32736_32802[(1)] = (19));

} else {
var statearr_32737_32803 = state_32664__$1;
(statearr_32737_32803[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (38))){
var inst_32643 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32738_32804 = state_32664__$1;
(statearr_32738_32804[(2)] = inst_32643);

(statearr_32738_32804[(1)] = (35));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (30))){
var state_32664__$1 = state_32664;
var statearr_32739_32805 = state_32664__$1;
(statearr_32739_32805[(2)] = null);

(statearr_32739_32805[(1)] = (32));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (10))){
var inst_32546 = (state_32664[(14)]);
var inst_32548 = (state_32664[(17)]);
var inst_32554 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32546,inst_32548);
var inst_32555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32554,(0),null);
var inst_32556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32554,(1),null);
var state_32664__$1 = (function (){var statearr_32740 = state_32664;
(statearr_32740[(26)] = inst_32555);

return statearr_32740;
})();
if(cljs.core.truth_(inst_32556)){
var statearr_32741_32806 = state_32664__$1;
(statearr_32741_32806[(1)] = (13));

} else {
var statearr_32742_32807 = state_32664__$1;
(statearr_32742_32807[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (18))){
var inst_32589 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32743_32808 = state_32664__$1;
(statearr_32743_32808[(2)] = inst_32589);

(statearr_32743_32808[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (42))){
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32664__$1,(45),dchan);
} else {
if((state_val_32665 === (37))){
var inst_32632 = (state_32664[(23)]);
var inst_32623 = (state_32664[(25)]);
var inst_32536 = (state_32664[(12)]);
var inst_32632__$1 = cljs.core.first(inst_32623);
var inst_32633 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32632__$1,inst_32536,done);
var state_32664__$1 = (function (){var statearr_32744 = state_32664;
(statearr_32744[(23)] = inst_32632__$1);

return statearr_32744;
})();
if(cljs.core.truth_(inst_32633)){
var statearr_32745_32809 = state_32664__$1;
(statearr_32745_32809[(1)] = (39));

} else {
var statearr_32746_32810 = state_32664__$1;
(statearr_32746_32810[(1)] = (40));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32665 === (8))){
var inst_32547 = (state_32664[(16)]);
var inst_32548 = (state_32664[(17)]);
var inst_32550 = (inst_32548 < inst_32547);
var inst_32551 = inst_32550;
var state_32664__$1 = state_32664;
if(cljs.core.truth_(inst_32551)){
var statearr_32747_32811 = state_32664__$1;
(statearr_32747_32811[(1)] = (10));

} else {
var statearr_32748_32812 = state_32664__$1;
(statearr_32748_32812[(1)] = (11));

}

return cljs.core.constant$keyword$99;
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
});})(c__16134__auto___32758,cs,m,dchan,dctr,done))
;
return ((function (switch__16054__auto__,c__16134__auto___32758,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_32752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32752[(0)] = state_machine__16055__auto__);

(statearr_32752[(1)] = (1));

return statearr_32752;
});
var state_machine__16055__auto____1 = (function (state_32664){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_32664);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e32753){if((e32753 instanceof Object)){
var ex__16058__auto__ = e32753;
var statearr_32754_32813 = state_32664;
(statearr_32754_32813[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32664);

return cljs.core.constant$keyword$99;
} else {
throw e32753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__32814 = state_32664;
state_32664 = G__32814;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_32664){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_32664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___32758,cs,m,dchan,dctr,done))
})();
var state__16136__auto__ = (function (){var statearr_32755 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_32755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___32758);

return statearr_32755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___32758,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj32819 = {};
return obj32819;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__32823 = x__4402__auto__;
return goog.typeOf(G__32823);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__32827 = x__4402__auto__;
return goog.typeOf(G__32827);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__32831 = x__4402__auto__;
return goog.typeOf(G__32831);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__32835 = x__4402__auto__;
return goog.typeOf(G__32835);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__32839 = x__4402__auto__;
return goog.typeOf(G__32839);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32840){
var map__32846 = p__32840;
var map__32846__$1 = ((cljs.core.seq_QMARK_(map__32846))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32846):map__32846);
var opts = map__32846__$1;
var statearr_32847_32851 = state;
(statearr_32847_32851[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__32846,map__32846__$1,opts){
return (function (val){
var statearr_32848_32852 = state;
(statearr_32848_32852[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32846,map__32846__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32849_32853 = state;
(statearr_32849_32853[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__32850 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32850) : cljs.core.deref.call(null,G__32850));
})());


return cljs.core.constant$keyword$99;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32840 = null;
if (arguments.length > 3) {
var G__32854__i = 0, G__32854__a = new Array(arguments.length -  3);
while (G__32854__i < G__32854__a.length) {G__32854__a[G__32854__i] = arguments[G__32854__i + 3]; ++G__32854__i;}
  p__32840 = new cljs.core.IndexedSeq(G__32854__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32840);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32855){
var state = cljs.core.first(arglist__32855);
arglist__32855 = cljs.core.next(arglist__32855);
var cont_block = cljs.core.first(arglist__32855);
arglist__32855 = cljs.core.next(arglist__32855);
var ports = cljs.core.first(arglist__32855);
var p__32840 = cljs.core.rest(arglist__32855);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32840);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
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
cljs.core.async.mix = (function mix(out){
var cs = (function (){var G__32989 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32989) : cljs.core.atom.call(null,G__32989));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$108,null,cljs.core.constant$keyword$109,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$110);
var solo_mode = (function (){var G__32990 = cljs.core.constant$keyword$109;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32990) : cljs.core.atom.call(null,G__32990));
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
if(cljs.core.truth_((function (){var G__32991 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__32991) : attr.call(null,G__32991));
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
var chs = (function (){var G__32992 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32992) : cljs.core.deref.call(null,G__32992));
})();
var mode = (function (){var G__32993 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32993) : cljs.core.deref.call(null,G__32993));
})();
var solos = pick(cljs.core.constant$keyword$110,chs);
var pauses = pick(cljs.core.constant$keyword$108,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$111,solos,cljs.core.constant$keyword$112,pick(cljs.core.constant$keyword$109,chs),cljs.core.constant$keyword$113,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$108)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t32994 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32994 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32995){
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
this.meta32995 = meta32995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32994.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32994.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32994.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32994.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32997_33122 = self__.cs;
var G__32998_33123 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32997_33122,G__32998_33123) : cljs.core.reset_BANG_.call(null,G__32997_33122,G__32998_33123));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32994.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32994.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__32999 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__32999) : self__.solo_modes.call(null,G__32999));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__33000_33124 = self__.solo_mode;
var G__33001_33125 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33000_33124,G__33001_33125) : cljs.core.reset_BANG_.call(null,G__33000_33124,G__33001_33125));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32994.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32996){
var self__ = this;
var _32996__$1 = this;
return self__.meta32995;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32996,meta32995__$1){
var self__ = this;
var _32996__$1 = this;
return (new cljs.core.async.t32994(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32995__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32994.cljs$lang$type = true;

cljs.core.async.t32994.cljs$lang$ctorStr = "cljs.core.async/t32994";

cljs.core.async.t32994.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t32994");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32994 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32994(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32995){
return (new cljs.core.async.t32994(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32995));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32994(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16134__auto___33126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___33126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___33126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33073){
var state_val_33074 = (state_33073[(1)]);
if((state_val_33074 === (7))){
var inst_33015 = (state_33073[(7)]);
var inst_33020 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33015);
var state_33073__$1 = state_33073;
var statearr_33075_33127 = state_33073__$1;
(statearr_33075_33127[(2)] = inst_33020);

(statearr_33075_33127[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (20))){
var inst_33030 = (state_33073[(8)]);
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33073__$1,(23),out,inst_33030);
} else {
if((state_val_33074 === (1))){
var inst_33005 = (state_33073[(9)]);
var inst_33005__$1 = calc_state();
var inst_33006 = cljs.core.seq_QMARK_(inst_33005__$1);
var state_33073__$1 = (function (){var statearr_33076 = state_33073;
(statearr_33076[(9)] = inst_33005__$1);

return statearr_33076;
})();
if(inst_33006){
var statearr_33077_33128 = state_33073__$1;
(statearr_33077_33128[(1)] = (2));

} else {
var statearr_33078_33129 = state_33073__$1;
(statearr_33078_33129[(1)] = (3));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (24))){
var inst_33023 = (state_33073[(10)]);
var inst_33015 = inst_33023;
var state_33073__$1 = (function (){var statearr_33079 = state_33073;
(statearr_33079[(7)] = inst_33015);

return statearr_33079;
})();
var statearr_33080_33130 = state_33073__$1;
(statearr_33080_33130[(2)] = null);

(statearr_33080_33130[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (4))){
var inst_33005 = (state_33073[(9)]);
var inst_33011 = (state_33073[(2)]);
var inst_33012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33011,cljs.core.constant$keyword$113);
var inst_33013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33011,cljs.core.constant$keyword$112);
var inst_33014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33011,cljs.core.constant$keyword$111);
var inst_33015 = inst_33005;
var state_33073__$1 = (function (){var statearr_33081 = state_33073;
(statearr_33081[(7)] = inst_33015);

(statearr_33081[(11)] = inst_33013);

(statearr_33081[(12)] = inst_33014);

(statearr_33081[(13)] = inst_33012);

return statearr_33081;
})();
var statearr_33082_33131 = state_33073__$1;
(statearr_33082_33131[(2)] = null);

(statearr_33082_33131[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (15))){
var state_33073__$1 = state_33073;
var statearr_33083_33132 = state_33073__$1;
(statearr_33083_33132[(2)] = null);

(statearr_33083_33132[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (21))){
var inst_33023 = (state_33073[(10)]);
var inst_33015 = inst_33023;
var state_33073__$1 = (function (){var statearr_33084 = state_33073;
(statearr_33084[(7)] = inst_33015);

return statearr_33084;
})();
var statearr_33085_33133 = state_33073__$1;
(statearr_33085_33133[(2)] = null);

(statearr_33085_33133[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (13))){
var inst_33069 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
var statearr_33086_33134 = state_33073__$1;
(statearr_33086_33134[(2)] = inst_33069);

(statearr_33086_33134[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (22))){
var inst_33067 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
var statearr_33087_33135 = state_33073__$1;
(statearr_33087_33135[(2)] = inst_33067);

(statearr_33087_33135[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (6))){
var inst_33071 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33073__$1,inst_33071);
} else {
if((state_val_33074 === (25))){
var state_33073__$1 = state_33073;
var statearr_33088_33136 = state_33073__$1;
(statearr_33088_33136[(2)] = null);

(statearr_33088_33136[(1)] = (26));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (17))){
var inst_33046 = (state_33073[(14)]);
var state_33073__$1 = state_33073;
var statearr_33089_33137 = state_33073__$1;
(statearr_33089_33137[(2)] = inst_33046);

(statearr_33089_33137[(1)] = (19));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (3))){
var inst_33005 = (state_33073[(9)]);
var state_33073__$1 = state_33073;
var statearr_33090_33138 = state_33073__$1;
(statearr_33090_33138[(2)] = inst_33005);

(statearr_33090_33138[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (12))){
var inst_33026 = (state_33073[(15)]);
var inst_33046 = (state_33073[(14)]);
var inst_33031 = (state_33073[(16)]);
var inst_33046__$1 = (function (){var G__33091 = inst_33031;
return (inst_33026.cljs$core$IFn$_invoke$arity$1 ? inst_33026.cljs$core$IFn$_invoke$arity$1(G__33091) : inst_33026.call(null,G__33091));
})();
var state_33073__$1 = (function (){var statearr_33092 = state_33073;
(statearr_33092[(14)] = inst_33046__$1);

return statearr_33092;
})();
if(cljs.core.truth_(inst_33046__$1)){
var statearr_33093_33139 = state_33073__$1;
(statearr_33093_33139[(1)] = (17));

} else {
var statearr_33094_33140 = state_33073__$1;
(statearr_33094_33140[(1)] = (18));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (2))){
var inst_33005 = (state_33073[(9)]);
var inst_33008 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33005);
var state_33073__$1 = state_33073;
var statearr_33095_33141 = state_33073__$1;
(statearr_33095_33141[(2)] = inst_33008);

(statearr_33095_33141[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (23))){
var inst_33058 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
if(cljs.core.truth_(inst_33058)){
var statearr_33096_33142 = state_33073__$1;
(statearr_33096_33142[(1)] = (24));

} else {
var statearr_33097_33143 = state_33073__$1;
(statearr_33097_33143[(1)] = (25));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (19))){
var inst_33055 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
if(cljs.core.truth_(inst_33055)){
var statearr_33098_33144 = state_33073__$1;
(statearr_33098_33144[(1)] = (20));

} else {
var statearr_33099_33145 = state_33073__$1;
(statearr_33099_33145[(1)] = (21));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (11))){
var inst_33030 = (state_33073[(8)]);
var inst_33036 = (inst_33030 == null);
var state_33073__$1 = state_33073;
if(cljs.core.truth_(inst_33036)){
var statearr_33100_33146 = state_33073__$1;
(statearr_33100_33146[(1)] = (14));

} else {
var statearr_33101_33147 = state_33073__$1;
(statearr_33101_33147[(1)] = (15));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (9))){
var inst_33023 = (state_33073[(10)]);
var inst_33023__$1 = (state_33073[(2)]);
var inst_33024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33023__$1,cljs.core.constant$keyword$113);
var inst_33025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33023__$1,cljs.core.constant$keyword$112);
var inst_33026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33023__$1,cljs.core.constant$keyword$111);
var state_33073__$1 = (function (){var statearr_33102 = state_33073;
(statearr_33102[(17)] = inst_33025);

(statearr_33102[(15)] = inst_33026);

(statearr_33102[(10)] = inst_33023__$1);

return statearr_33102;
})();
return cljs.core.async.ioc_alts_BANG_(state_33073__$1,(10),inst_33024);
} else {
if((state_val_33074 === (5))){
var inst_33015 = (state_33073[(7)]);
var inst_33018 = cljs.core.seq_QMARK_(inst_33015);
var state_33073__$1 = state_33073;
if(inst_33018){
var statearr_33103_33148 = state_33073__$1;
(statearr_33103_33148[(1)] = (7));

} else {
var statearr_33104_33149 = state_33073__$1;
(statearr_33104_33149[(1)] = (8));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (14))){
var inst_33031 = (state_33073[(16)]);
var inst_33038 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33031);
var state_33073__$1 = state_33073;
var statearr_33105_33150 = state_33073__$1;
(statearr_33105_33150[(2)] = inst_33038);

(statearr_33105_33150[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (26))){
var inst_33063 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
var statearr_33106_33151 = state_33073__$1;
(statearr_33106_33151[(2)] = inst_33063);

(statearr_33106_33151[(1)] = (22));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (16))){
var inst_33041 = (state_33073[(2)]);
var inst_33042 = calc_state();
var inst_33015 = inst_33042;
var state_33073__$1 = (function (){var statearr_33107 = state_33073;
(statearr_33107[(7)] = inst_33015);

(statearr_33107[(18)] = inst_33041);

return statearr_33107;
})();
var statearr_33108_33152 = state_33073__$1;
(statearr_33108_33152[(2)] = null);

(statearr_33108_33152[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (10))){
var inst_33031 = (state_33073[(16)]);
var inst_33030 = (state_33073[(8)]);
var inst_33029 = (state_33073[(2)]);
var inst_33030__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33029,(0),null);
var inst_33031__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33029,(1),null);
var inst_33032 = (inst_33030__$1 == null);
var inst_33033 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33031__$1,change);
var inst_33034 = (inst_33032) || (inst_33033);
var state_33073__$1 = (function (){var statearr_33109 = state_33073;
(statearr_33109[(16)] = inst_33031__$1);

(statearr_33109[(8)] = inst_33030__$1);

return statearr_33109;
})();
if(cljs.core.truth_(inst_33034)){
var statearr_33110_33153 = state_33073__$1;
(statearr_33110_33153[(1)] = (11));

} else {
var statearr_33111_33154 = state_33073__$1;
(statearr_33111_33154[(1)] = (12));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (18))){
var inst_33025 = (state_33073[(17)]);
var inst_33026 = (state_33073[(15)]);
var inst_33031 = (state_33073[(16)]);
var inst_33050 = cljs.core.empty_QMARK_(inst_33026);
var inst_33051 = (function (){var G__33112 = inst_33031;
return (inst_33025.cljs$core$IFn$_invoke$arity$1 ? inst_33025.cljs$core$IFn$_invoke$arity$1(G__33112) : inst_33025.call(null,G__33112));
})();
var inst_33052 = cljs.core.not(inst_33051);
var inst_33053 = (inst_33050) && (inst_33052);
var state_33073__$1 = state_33073;
var statearr_33113_33155 = state_33073__$1;
(statearr_33113_33155[(2)] = inst_33053);

(statearr_33113_33155[(1)] = (19));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33074 === (8))){
var inst_33015 = (state_33073[(7)]);
var state_33073__$1 = state_33073;
var statearr_33114_33156 = state_33073__$1;
(statearr_33114_33156[(2)] = inst_33015);

(statearr_33114_33156[(1)] = (9));


return cljs.core.constant$keyword$99;
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
});})(c__16134__auto___33126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16054__auto__,c__16134__auto___33126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_33118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33118[(0)] = state_machine__16055__auto__);

(statearr_33118[(1)] = (1));

return statearr_33118;
});
var state_machine__16055__auto____1 = (function (state_33073){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33073);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e33119){if((e33119 instanceof Object)){
var ex__16058__auto__ = e33119;
var statearr_33120_33157 = state_33073;
(statearr_33120_33157[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33073);

return cljs.core.constant$keyword$99;
} else {
throw e33119;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__33158 = state_33073;
state_33073 = G__33158;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33073){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___33126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16136__auto__ = (function (){var statearr_33121 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_33121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___33126);

return statearr_33121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___33126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
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
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj33160 = {};
return obj33160;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3746__auto__ = p;
if(and__3746__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3746__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4402__auto__ = (((p == null))?null:p);
return (function (){var or__3758__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__33164 = x__4402__auto__;
return goog.typeOf(G__33164);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3746__auto__ = p;
if(and__3746__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3746__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4402__auto__ = (((p == null))?null:p);
return (function (){var or__3758__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__33168 = x__4402__auto__;
return goog.typeOf(G__33168);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3746__auto__ = p;
if(and__3746__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4402__auto__ = (((p == null))?null:p);
return (function (){var or__3758__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33174 = x__4402__auto__;
return goog.typeOf(G__33174);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3746__auto__ = p;
if(and__3746__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4402__auto__ = (((p == null))?null:p);
return (function (){var or__3758__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33176 = x__4402__auto__;
return goog.typeOf(G__33176);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

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
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__33315 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33315) : cljs.core.atom.call(null,G__33315));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3758__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33317 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33317) : cljs.core.deref.call(null,G__33317));
})(),topic);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3758__auto__,mults){
return (function (p1__33177_SHARP_){
if(cljs.core.truth_((function (){var G__33318 = topic;
return (p1__33177_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33177_SHARP_.cljs$core$IFn$_invoke$arity$1(G__33318) : p1__33177_SHARP_.call(null,G__33318));
})())){
return p1__33177_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33177_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__33319 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__33319) : buf_fn.call(null,G__33319));
})())));
}
});})(or__3758__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33320 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33320 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33321){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33321 = meta33321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33320.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33320.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__33323 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__33323) : self__.ensure_mult.call(null,G__33323));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33320.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33324 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33324) : cljs.core.deref.call(null,G__33324));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t33320.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__33325 = self__.mults;
var G__33326 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33325,G__33326) : cljs.core.reset_BANG_.call(null,G__33325,G__33326));
});})(mults,ensure_mult))
;

cljs.core.async.t33320.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33320.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33322){
var self__ = this;
var _33322__$1 = this;
return self__.meta33321;
});})(mults,ensure_mult))
;

cljs.core.async.t33320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33322,meta33321__$1){
var self__ = this;
var _33322__$1 = this;
return (new cljs.core.async.t33320(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33321__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33320.cljs$lang$type = true;

cljs.core.async.t33320.cljs$lang$ctorStr = "cljs.core.async/t33320";

cljs.core.async.t33320.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t33320");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33320 = ((function (mults,ensure_mult){
return (function __GT_t33320(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33321){
return (new cljs.core.async.t33320(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33321));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33320(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16134__auto___33449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___33449,mults,ensure_mult,p){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___33449,mults,ensure_mult,p){
return (function (state_33398){
var state_val_33399 = (state_33398[(1)]);
if((state_val_33399 === (7))){
var inst_33394 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33400_33450 = state_33398__$1;
(statearr_33400_33450[(2)] = inst_33394);

(statearr_33400_33450[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (20))){
var state_33398__$1 = state_33398;
var statearr_33401_33451 = state_33398__$1;
(statearr_33401_33451[(2)] = null);

(statearr_33401_33451[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (1))){
var state_33398__$1 = state_33398;
var statearr_33402_33452 = state_33398__$1;
(statearr_33402_33452[(2)] = null);

(statearr_33402_33452[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (24))){
var inst_33377 = (state_33398[(7)]);
var inst_33386 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33377);
var state_33398__$1 = state_33398;
var statearr_33403_33453 = state_33398__$1;
(statearr_33403_33453[(2)] = inst_33386);

(statearr_33403_33453[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (4))){
var inst_33329 = (state_33398[(8)]);
var inst_33329__$1 = (state_33398[(2)]);
var inst_33330 = (inst_33329__$1 == null);
var state_33398__$1 = (function (){var statearr_33404 = state_33398;
(statearr_33404[(8)] = inst_33329__$1);

return statearr_33404;
})();
if(cljs.core.truth_(inst_33330)){
var statearr_33405_33454 = state_33398__$1;
(statearr_33405_33454[(1)] = (5));

} else {
var statearr_33406_33455 = state_33398__$1;
(statearr_33406_33455[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (15))){
var inst_33371 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33407_33456 = state_33398__$1;
(statearr_33407_33456[(2)] = inst_33371);

(statearr_33407_33456[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (21))){
var inst_33391 = (state_33398[(2)]);
var state_33398__$1 = (function (){var statearr_33408 = state_33398;
(statearr_33408[(9)] = inst_33391);

return statearr_33408;
})();
var statearr_33409_33457 = state_33398__$1;
(statearr_33409_33457[(2)] = null);

(statearr_33409_33457[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (13))){
var inst_33353 = (state_33398[(10)]);
var inst_33355 = cljs.core.chunked_seq_QMARK_(inst_33353);
var state_33398__$1 = state_33398;
if(inst_33355){
var statearr_33410_33458 = state_33398__$1;
(statearr_33410_33458[(1)] = (16));

} else {
var statearr_33411_33459 = state_33398__$1;
(statearr_33411_33459[(1)] = (17));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (22))){
var inst_33383 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
if(cljs.core.truth_(inst_33383)){
var statearr_33412_33460 = state_33398__$1;
(statearr_33412_33460[(1)] = (23));

} else {
var statearr_33413_33461 = state_33398__$1;
(statearr_33413_33461[(1)] = (24));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (6))){
var inst_33377 = (state_33398[(7)]);
var inst_33379 = (state_33398[(11)]);
var inst_33329 = (state_33398[(8)]);
var inst_33377__$1 = (function (){var G__33414 = inst_33329;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__33414) : topic_fn.call(null,G__33414));
})();
var inst_33378 = (function (){var G__33415 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33415) : cljs.core.deref.call(null,G__33415));
})();
var inst_33379__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33378,inst_33377__$1);
var state_33398__$1 = (function (){var statearr_33416 = state_33398;
(statearr_33416[(7)] = inst_33377__$1);

(statearr_33416[(11)] = inst_33379__$1);

return statearr_33416;
})();
if(cljs.core.truth_(inst_33379__$1)){
var statearr_33417_33462 = state_33398__$1;
(statearr_33417_33462[(1)] = (19));

} else {
var statearr_33418_33463 = state_33398__$1;
(statearr_33418_33463[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (25))){
var inst_33388 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33419_33464 = state_33398__$1;
(statearr_33419_33464[(2)] = inst_33388);

(statearr_33419_33464[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (17))){
var inst_33353 = (state_33398[(10)]);
var inst_33362 = cljs.core.first(inst_33353);
var inst_33363 = cljs.core.async.muxch_STAR_(inst_33362);
var inst_33364 = cljs.core.async.close_BANG_(inst_33363);
var inst_33365 = cljs.core.next(inst_33353);
var inst_33339 = inst_33365;
var inst_33340 = null;
var inst_33341 = (0);
var inst_33342 = (0);
var state_33398__$1 = (function (){var statearr_33420 = state_33398;
(statearr_33420[(12)] = inst_33342);

(statearr_33420[(13)] = inst_33341);

(statearr_33420[(14)] = inst_33364);

(statearr_33420[(15)] = inst_33340);

(statearr_33420[(16)] = inst_33339);

return statearr_33420;
})();
var statearr_33421_33465 = state_33398__$1;
(statearr_33421_33465[(2)] = null);

(statearr_33421_33465[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (3))){
var inst_33396 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33398__$1,inst_33396);
} else {
if((state_val_33399 === (12))){
var inst_33373 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33422_33466 = state_33398__$1;
(statearr_33422_33466[(2)] = inst_33373);

(statearr_33422_33466[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (2))){
var state_33398__$1 = state_33398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33398__$1,(4),ch);
} else {
if((state_val_33399 === (23))){
var state_33398__$1 = state_33398;
var statearr_33423_33467 = state_33398__$1;
(statearr_33423_33467[(2)] = null);

(statearr_33423_33467[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (19))){
var inst_33379 = (state_33398[(11)]);
var inst_33329 = (state_33398[(8)]);
var inst_33381 = cljs.core.async.muxch_STAR_(inst_33379);
var state_33398__$1 = state_33398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33398__$1,(22),inst_33381,inst_33329);
} else {
if((state_val_33399 === (11))){
var inst_33353 = (state_33398[(10)]);
var inst_33339 = (state_33398[(16)]);
var inst_33353__$1 = cljs.core.seq(inst_33339);
var state_33398__$1 = (function (){var statearr_33424 = state_33398;
(statearr_33424[(10)] = inst_33353__$1);

return statearr_33424;
})();
if(inst_33353__$1){
var statearr_33425_33468 = state_33398__$1;
(statearr_33425_33468[(1)] = (13));

} else {
var statearr_33426_33469 = state_33398__$1;
(statearr_33426_33469[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (9))){
var inst_33375 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33427_33470 = state_33398__$1;
(statearr_33427_33470[(2)] = inst_33375);

(statearr_33427_33470[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (5))){
var inst_33336 = (function (){var G__33428 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33428) : cljs.core.deref.call(null,G__33428));
})();
var inst_33337 = cljs.core.vals(inst_33336);
var inst_33338 = cljs.core.seq(inst_33337);
var inst_33339 = inst_33338;
var inst_33340 = null;
var inst_33341 = (0);
var inst_33342 = (0);
var state_33398__$1 = (function (){var statearr_33429 = state_33398;
(statearr_33429[(12)] = inst_33342);

(statearr_33429[(13)] = inst_33341);

(statearr_33429[(15)] = inst_33340);

(statearr_33429[(16)] = inst_33339);

return statearr_33429;
})();
var statearr_33430_33471 = state_33398__$1;
(statearr_33430_33471[(2)] = null);

(statearr_33430_33471[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (14))){
var state_33398__$1 = state_33398;
var statearr_33434_33472 = state_33398__$1;
(statearr_33434_33472[(2)] = null);

(statearr_33434_33472[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (16))){
var inst_33353 = (state_33398[(10)]);
var inst_33357 = cljs.core.chunk_first(inst_33353);
var inst_33358 = cljs.core.chunk_rest(inst_33353);
var inst_33359 = cljs.core.count(inst_33357);
var inst_33339 = inst_33358;
var inst_33340 = inst_33357;
var inst_33341 = inst_33359;
var inst_33342 = (0);
var state_33398__$1 = (function (){var statearr_33435 = state_33398;
(statearr_33435[(12)] = inst_33342);

(statearr_33435[(13)] = inst_33341);

(statearr_33435[(15)] = inst_33340);

(statearr_33435[(16)] = inst_33339);

return statearr_33435;
})();
var statearr_33436_33473 = state_33398__$1;
(statearr_33436_33473[(2)] = null);

(statearr_33436_33473[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (10))){
var inst_33342 = (state_33398[(12)]);
var inst_33341 = (state_33398[(13)]);
var inst_33340 = (state_33398[(15)]);
var inst_33339 = (state_33398[(16)]);
var inst_33347 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33340,inst_33342);
var inst_33348 = cljs.core.async.muxch_STAR_(inst_33347);
var inst_33349 = cljs.core.async.close_BANG_(inst_33348);
var inst_33350 = (inst_33342 + (1));
var tmp33431 = inst_33341;
var tmp33432 = inst_33340;
var tmp33433 = inst_33339;
var inst_33339__$1 = tmp33433;
var inst_33340__$1 = tmp33432;
var inst_33341__$1 = tmp33431;
var inst_33342__$1 = inst_33350;
var state_33398__$1 = (function (){var statearr_33437 = state_33398;
(statearr_33437[(12)] = inst_33342__$1);

(statearr_33437[(13)] = inst_33341__$1);

(statearr_33437[(15)] = inst_33340__$1);

(statearr_33437[(16)] = inst_33339__$1);

(statearr_33437[(17)] = inst_33349);

return statearr_33437;
})();
var statearr_33438_33474 = state_33398__$1;
(statearr_33438_33474[(2)] = null);

(statearr_33438_33474[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (18))){
var inst_33368 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33439_33475 = state_33398__$1;
(statearr_33439_33475[(2)] = inst_33368);

(statearr_33439_33475[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33399 === (8))){
var inst_33342 = (state_33398[(12)]);
var inst_33341 = (state_33398[(13)]);
var inst_33344 = (inst_33342 < inst_33341);
var inst_33345 = inst_33344;
var state_33398__$1 = state_33398;
if(cljs.core.truth_(inst_33345)){
var statearr_33440_33476 = state_33398__$1;
(statearr_33440_33476[(1)] = (10));

} else {
var statearr_33441_33477 = state_33398__$1;
(statearr_33441_33477[(1)] = (11));

}

return cljs.core.constant$keyword$99;
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
});})(c__16134__auto___33449,mults,ensure_mult,p))
;
return ((function (switch__16054__auto__,c__16134__auto___33449,mults,ensure_mult,p){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_33445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33445[(0)] = state_machine__16055__auto__);

(statearr_33445[(1)] = (1));

return statearr_33445;
});
var state_machine__16055__auto____1 = (function (state_33398){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33398);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e33446){if((e33446 instanceof Object)){
var ex__16058__auto__ = e33446;
var statearr_33447_33478 = state_33398;
(statearr_33447_33478[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33398);

return cljs.core.constant$keyword$99;
} else {
throw e33446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__33479 = state_33398;
state_33398 = G__33479;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33398){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___33449,mults,ensure_mult,p))
})();
var state__16136__auto__ = (function (){var statearr_33448 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_33448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___33449);

return statearr_33448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___33449,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__33560 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33560) : cljs.core.atom.call(null,G__33560));
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
var c__16134__auto___33633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___33633,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___33633,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33599){
var state_val_33600 = (state_33599[(1)]);
if((state_val_33600 === (7))){
var state_33599__$1 = state_33599;
var statearr_33601_33634 = state_33599__$1;
(statearr_33601_33634[(2)] = null);

(statearr_33601_33634[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33600 === (1))){
var state_33599__$1 = state_33599;
var statearr_33602_33635 = state_33599__$1;
(statearr_33602_33635[(2)] = null);

(statearr_33602_33635[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33600 === (4))){
var inst_33563 = (state_33599[(7)]);
var inst_33565 = (inst_33563 < cnt);
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33565)){
var statearr_33603_33636 = state_33599__$1;
(statearr_33603_33636[(1)] = (6));

} else {
var statearr_33604_33637 = state_33599__$1;
(statearr_33604_33637[(1)] = (7));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33600 === (15))){
var inst_33595 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33605_33638 = state_33599__$1;
(statearr_33605_33638[(2)] = inst_33595);

(statearr_33605_33638[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33600 === (13))){
var inst_33588 = cljs.core.async.close_BANG_(out);
var state_33599__$1 = state_33599;
var statearr_33606_33639 = state_33599__$1;
(statearr_33606_33639[(2)] = inst_33588);

(statearr_33606_33639[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33600 === (6))){
var state_33599__$1 = state_33599;
var statearr_33607_33640 = state_33599__$1;
(statearr_33607_33640[(2)] = null);

(statearr_33607_33640[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33600 === (3))){
var inst_33597 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33599__$1,inst_33597);
} else {
if((state_val_33600 === (12))){
var inst_33585 = (state_33599[(8)]);
var inst_33585__$1 = (state_33599[(2)]);
var inst_33586 = cljs.core.some(cljs.core.nil_QMARK_,inst_33585__$1);
var state_33599__$1 = (function (){var statearr_33608 = state_33599;
(statearr_33608[(8)] = inst_33585__$1);

return statearr_33608;
})();
if(cljs.core.truth_(inst_33586)){
var statearr_33609_33641 = state_33599__$1;
(statearr_33609_33641[(1)] = (13));

} else {
var statearr_33610_33642 = state_33599__$1;
(statearr_33610_33642[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33600 === (2))){
var inst_33562 = (function (){var G__33611 = dctr;
var G__33612 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33611,G__33612) : cljs.core.reset_BANG_.call(null,G__33611,G__33612));
})();
var inst_33563 = (0);
var state_33599__$1 = (function (){var statearr_33613 = state_33599;
(statearr_33613[(7)] = inst_33563);

(statearr_33613[(9)] = inst_33562);

return statearr_33613;
})();
var statearr_33614_33643 = state_33599__$1;
(statearr_33614_33643[(2)] = null);

(statearr_33614_33643[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33600 === (11))){
var inst_33563 = (state_33599[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33599,(10),Object,null,(9));
var inst_33572 = (function (){var G__33615 = inst_33563;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__33615) : chs__$1.call(null,G__33615));
})();
var inst_33573 = (function (){var G__33616 = inst_33563;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__33616) : done.call(null,G__33616));
})();
var inst_33574 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33572,inst_33573);
var state_33599__$1 = state_33599;
var statearr_33617_33644 = state_33599__$1;
(statearr_33617_33644[(2)] = inst_33574);


cljs.core.async.impl.ioc_helpers.process_exception(state_33599__$1);

return cljs.core.constant$keyword$99;
} else {
if((state_val_33600 === (9))){
var inst_33563 = (state_33599[(7)]);
var inst_33576 = (state_33599[(2)]);
var inst_33577 = (inst_33563 + (1));
var inst_33563__$1 = inst_33577;
var state_33599__$1 = (function (){var statearr_33618 = state_33599;
(statearr_33618[(7)] = inst_33563__$1);

(statearr_33618[(10)] = inst_33576);

return statearr_33618;
})();
var statearr_33619_33645 = state_33599__$1;
(statearr_33619_33645[(2)] = null);

(statearr_33619_33645[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33600 === (5))){
var inst_33583 = (state_33599[(2)]);
var state_33599__$1 = (function (){var statearr_33620 = state_33599;
(statearr_33620[(11)] = inst_33583);

return statearr_33620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33599__$1,(12),dchan);
} else {
if((state_val_33600 === (14))){
var inst_33585 = (state_33599[(8)]);
var inst_33590 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33585);
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33599__$1,(16),out,inst_33590);
} else {
if((state_val_33600 === (16))){
var inst_33592 = (state_33599[(2)]);
var state_33599__$1 = (function (){var statearr_33621 = state_33599;
(statearr_33621[(12)] = inst_33592);

return statearr_33621;
})();
var statearr_33622_33646 = state_33599__$1;
(statearr_33622_33646[(2)] = null);

(statearr_33622_33646[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33600 === (10))){
var inst_33567 = (state_33599[(2)]);
var inst_33568 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33599__$1 = (function (){var statearr_33623 = state_33599;
(statearr_33623[(13)] = inst_33567);

return statearr_33623;
})();
var statearr_33624_33647 = state_33599__$1;
(statearr_33624_33647[(2)] = inst_33568);


cljs.core.async.impl.ioc_helpers.process_exception(state_33599__$1);

return cljs.core.constant$keyword$99;
} else {
if((state_val_33600 === (8))){
var inst_33581 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33625_33648 = state_33599__$1;
(statearr_33625_33648[(2)] = inst_33581);

(statearr_33625_33648[(1)] = (5));


return cljs.core.constant$keyword$99;
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
});})(c__16134__auto___33633,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16054__auto__,c__16134__auto___33633,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_33629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33629[(0)] = state_machine__16055__auto__);

(statearr_33629[(1)] = (1));

return statearr_33629;
});
var state_machine__16055__auto____1 = (function (state_33599){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33599);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e33630){if((e33630 instanceof Object)){
var ex__16058__auto__ = e33630;
var statearr_33631_33649 = state_33599;
(statearr_33631_33649[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33599);

return cljs.core.constant$keyword$99;
} else {
throw e33630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__33650 = state_33599;
state_33599 = G__33650;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33599){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___33633,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16136__auto__ = (function (){var statearr_33632 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_33632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___33633);

return statearr_33632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___33633,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16134__auto___33760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___33760,out){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___33760,out){
return (function (state_33736){
var state_val_33737 = (state_33736[(1)]);
if((state_val_33737 === (7))){
var inst_33715 = (state_33736[(7)]);
var inst_33716 = (state_33736[(8)]);
var inst_33715__$1 = (state_33736[(2)]);
var inst_33716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33715__$1,(0),null);
var inst_33717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33715__$1,(1),null);
var inst_33718 = (inst_33716__$1 == null);
var state_33736__$1 = (function (){var statearr_33738 = state_33736;
(statearr_33738[(7)] = inst_33715__$1);

(statearr_33738[(8)] = inst_33716__$1);

(statearr_33738[(9)] = inst_33717);

return statearr_33738;
})();
if(cljs.core.truth_(inst_33718)){
var statearr_33739_33761 = state_33736__$1;
(statearr_33739_33761[(1)] = (8));

} else {
var statearr_33740_33762 = state_33736__$1;
(statearr_33740_33762[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33737 === (1))){
var inst_33707 = cljs.core.vec(chs);
var inst_33708 = inst_33707;
var state_33736__$1 = (function (){var statearr_33741 = state_33736;
(statearr_33741[(10)] = inst_33708);

return statearr_33741;
})();
var statearr_33742_33763 = state_33736__$1;
(statearr_33742_33763[(2)] = null);

(statearr_33742_33763[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33737 === (4))){
var inst_33708 = (state_33736[(10)]);
var state_33736__$1 = state_33736;
return cljs.core.async.ioc_alts_BANG_(state_33736__$1,(7),inst_33708);
} else {
if((state_val_33737 === (6))){
var inst_33732 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33743_33764 = state_33736__$1;
(statearr_33743_33764[(2)] = inst_33732);

(statearr_33743_33764[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33737 === (3))){
var inst_33734 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33736__$1,inst_33734);
} else {
if((state_val_33737 === (2))){
var inst_33708 = (state_33736[(10)]);
var inst_33710 = cljs.core.count(inst_33708);
var inst_33711 = (inst_33710 > (0));
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33711)){
var statearr_33745_33765 = state_33736__$1;
(statearr_33745_33765[(1)] = (4));

} else {
var statearr_33746_33766 = state_33736__$1;
(statearr_33746_33766[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33737 === (11))){
var inst_33708 = (state_33736[(10)]);
var inst_33725 = (state_33736[(2)]);
var tmp33744 = inst_33708;
var inst_33708__$1 = tmp33744;
var state_33736__$1 = (function (){var statearr_33747 = state_33736;
(statearr_33747[(10)] = inst_33708__$1);

(statearr_33747[(11)] = inst_33725);

return statearr_33747;
})();
var statearr_33748_33767 = state_33736__$1;
(statearr_33748_33767[(2)] = null);

(statearr_33748_33767[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33737 === (9))){
var inst_33716 = (state_33736[(8)]);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33736__$1,(11),out,inst_33716);
} else {
if((state_val_33737 === (5))){
var inst_33730 = cljs.core.async.close_BANG_(out);
var state_33736__$1 = state_33736;
var statearr_33749_33768 = state_33736__$1;
(statearr_33749_33768[(2)] = inst_33730);

(statearr_33749_33768[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33737 === (10))){
var inst_33728 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33750_33769 = state_33736__$1;
(statearr_33750_33769[(2)] = inst_33728);

(statearr_33750_33769[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33737 === (8))){
var inst_33715 = (state_33736[(7)]);
var inst_33708 = (state_33736[(10)]);
var inst_33716 = (state_33736[(8)]);
var inst_33717 = (state_33736[(9)]);
var inst_33720 = (function (){var c = inst_33717;
var v = inst_33716;
var vec__33713 = inst_33715;
var cs = inst_33708;
return ((function (c,v,vec__33713,cs,inst_33715,inst_33708,inst_33716,inst_33717,state_val_33737,c__16134__auto___33760,out){
return (function (p1__33651_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33651_SHARP_);
});
;})(c,v,vec__33713,cs,inst_33715,inst_33708,inst_33716,inst_33717,state_val_33737,c__16134__auto___33760,out))
})();
var inst_33721 = cljs.core.filterv(inst_33720,inst_33708);
var inst_33708__$1 = inst_33721;
var state_33736__$1 = (function (){var statearr_33751 = state_33736;
(statearr_33751[(10)] = inst_33708__$1);

return statearr_33751;
})();
var statearr_33752_33770 = state_33736__$1;
(statearr_33752_33770[(2)] = null);

(statearr_33752_33770[(1)] = (2));


return cljs.core.constant$keyword$99;
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
});})(c__16134__auto___33760,out))
;
return ((function (switch__16054__auto__,c__16134__auto___33760,out){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_33756 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33756[(0)] = state_machine__16055__auto__);

(statearr_33756[(1)] = (1));

return statearr_33756;
});
var state_machine__16055__auto____1 = (function (state_33736){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33736);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e33757){if((e33757 instanceof Object)){
var ex__16058__auto__ = e33757;
var statearr_33758_33771 = state_33736;
(statearr_33758_33771[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33736);

return cljs.core.constant$keyword$99;
} else {
throw e33757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__33772 = state_33736;
state_33736 = G__33772;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33736){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___33760,out))
})();
var state__16136__auto__ = (function (){var statearr_33759 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_33759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___33760);

return statearr_33759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___33760,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16134__auto___33868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___33868,out){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___33868,out){
return (function (state_33845){
var state_val_33846 = (state_33845[(1)]);
if((state_val_33846 === (7))){
var inst_33827 = (state_33845[(7)]);
var inst_33827__$1 = (state_33845[(2)]);
var inst_33828 = (inst_33827__$1 == null);
var inst_33829 = cljs.core.not(inst_33828);
var state_33845__$1 = (function (){var statearr_33847 = state_33845;
(statearr_33847[(7)] = inst_33827__$1);

return statearr_33847;
})();
if(inst_33829){
var statearr_33848_33869 = state_33845__$1;
(statearr_33848_33869[(1)] = (8));

} else {
var statearr_33849_33870 = state_33845__$1;
(statearr_33849_33870[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33846 === (1))){
var inst_33822 = (0);
var state_33845__$1 = (function (){var statearr_33850 = state_33845;
(statearr_33850[(8)] = inst_33822);

return statearr_33850;
})();
var statearr_33851_33871 = state_33845__$1;
(statearr_33851_33871[(2)] = null);

(statearr_33851_33871[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33846 === (4))){
var state_33845__$1 = state_33845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33845__$1,(7),ch);
} else {
if((state_val_33846 === (6))){
var inst_33840 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33852_33872 = state_33845__$1;
(statearr_33852_33872[(2)] = inst_33840);

(statearr_33852_33872[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33846 === (3))){
var inst_33842 = (state_33845[(2)]);
var inst_33843 = cljs.core.async.close_BANG_(out);
var state_33845__$1 = (function (){var statearr_33853 = state_33845;
(statearr_33853[(9)] = inst_33842);

return statearr_33853;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33845__$1,inst_33843);
} else {
if((state_val_33846 === (2))){
var inst_33822 = (state_33845[(8)]);
var inst_33824 = (inst_33822 < n);
var state_33845__$1 = state_33845;
if(cljs.core.truth_(inst_33824)){
var statearr_33854_33873 = state_33845__$1;
(statearr_33854_33873[(1)] = (4));

} else {
var statearr_33855_33874 = state_33845__$1;
(statearr_33855_33874[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33846 === (11))){
var inst_33822 = (state_33845[(8)]);
var inst_33832 = (state_33845[(2)]);
var inst_33833 = (inst_33822 + (1));
var inst_33822__$1 = inst_33833;
var state_33845__$1 = (function (){var statearr_33856 = state_33845;
(statearr_33856[(10)] = inst_33832);

(statearr_33856[(8)] = inst_33822__$1);

return statearr_33856;
})();
var statearr_33857_33875 = state_33845__$1;
(statearr_33857_33875[(2)] = null);

(statearr_33857_33875[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33846 === (9))){
var state_33845__$1 = state_33845;
var statearr_33858_33876 = state_33845__$1;
(statearr_33858_33876[(2)] = null);

(statearr_33858_33876[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33846 === (5))){
var state_33845__$1 = state_33845;
var statearr_33859_33877 = state_33845__$1;
(statearr_33859_33877[(2)] = null);

(statearr_33859_33877[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33846 === (10))){
var inst_33837 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33860_33878 = state_33845__$1;
(statearr_33860_33878[(2)] = inst_33837);

(statearr_33860_33878[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33846 === (8))){
var inst_33827 = (state_33845[(7)]);
var state_33845__$1 = state_33845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33845__$1,(11),out,inst_33827);
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
});})(c__16134__auto___33868,out))
;
return ((function (switch__16054__auto__,c__16134__auto___33868,out){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_33864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33864[(0)] = state_machine__16055__auto__);

(statearr_33864[(1)] = (1));

return statearr_33864;
});
var state_machine__16055__auto____1 = (function (state_33845){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33845);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e33865){if((e33865 instanceof Object)){
var ex__16058__auto__ = e33865;
var statearr_33866_33879 = state_33845;
(statearr_33866_33879[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33845);

return cljs.core.constant$keyword$99;
} else {
throw e33865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__33880 = state_33845;
state_33845 = G__33880;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33845){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___33868,out))
})();
var state__16136__auto__ = (function (){var statearr_33867 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_33867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___33868);

return statearr_33867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___33868,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t33893 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33893 = (function (ch,f,map_LT_,meta33894){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33894 = meta33894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33893.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t33893.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t33896 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33896 = (function (fn1,_,meta33894,map_LT_,f,ch,meta33897){
this.fn1 = fn1;
this._ = _;
this.meta33894 = meta33894;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33897 = meta33897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33896.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33896.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t33896.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33881_SHARP_){
var G__33899 = (((p1__33881_SHARP_ == null))?null:(function (){var G__33900 = p1__33881_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33900) : self__.f.call(null,G__33900));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33899) : f1.call(null,G__33899));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33898){
var self__ = this;
var _33898__$1 = this;
return self__.meta33897;
});})(___$1))
;

cljs.core.async.t33896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33898,meta33897__$1){
var self__ = this;
var _33898__$1 = this;
return (new cljs.core.async.t33896(self__.fn1,self__._,self__.meta33894,self__.map_LT_,self__.f,self__.ch,meta33897__$1));
});})(___$1))
;

cljs.core.async.t33896.cljs$lang$type = true;

cljs.core.async.t33896.cljs$lang$ctorStr = "cljs.core.async/t33896";

cljs.core.async.t33896.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t33896");
});})(___$1))
;

cljs.core.async.__GT_t33896 = ((function (___$1){
return (function __GT_t33896(fn1__$1,___$2,meta33894__$1,map_LT___$1,f__$1,ch__$1,meta33897){
return (new cljs.core.async.t33896(fn1__$1,___$2,meta33894__$1,map_LT___$1,f__$1,ch__$1,meta33897));
});})(___$1))
;

}

return (new cljs.core.async.t33896(fn1,___$1,self__.meta33894,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3746__auto__ = ret;
if(cljs.core.truth_(and__3746__auto__)){
return !(((function (){var G__33901 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33901) : cljs.core.deref.call(null,G__33901));
})() == null));
} else {
return and__3746__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33902 = (function (){var G__33903 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33903) : cljs.core.deref.call(null,G__33903));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33902) : self__.f.call(null,G__33902));
})());
} else {
return ret;
}
});

cljs.core.async.t33893.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33893.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t33893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33895){
var self__ = this;
var _33895__$1 = this;
return self__.meta33894;
});

cljs.core.async.t33893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33895,meta33894__$1){
var self__ = this;
var _33895__$1 = this;
return (new cljs.core.async.t33893(self__.ch,self__.f,self__.map_LT_,meta33894__$1));
});

cljs.core.async.t33893.cljs$lang$type = true;

cljs.core.async.t33893.cljs$lang$ctorStr = "cljs.core.async/t33893";

cljs.core.async.t33893.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t33893");
});

cljs.core.async.__GT_t33893 = (function __GT_t33893(ch__$1,f__$1,map_LT___$1,meta33894){
return (new cljs.core.async.t33893(ch__$1,f__$1,map_LT___$1,meta33894));
});

}

return (new cljs.core.async.t33893(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t33908 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33908 = (function (ch,f,map_GT_,meta33909){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33909 = meta33909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33908.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33908.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__33911 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33911) : self__.f.call(null,G__33911));
})(),fn1);
});

cljs.core.async.t33908.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33908.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t33908.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33908.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33910){
var self__ = this;
var _33910__$1 = this;
return self__.meta33909;
});

cljs.core.async.t33908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33910,meta33909__$1){
var self__ = this;
var _33910__$1 = this;
return (new cljs.core.async.t33908(self__.ch,self__.f,self__.map_GT_,meta33909__$1));
});

cljs.core.async.t33908.cljs$lang$type = true;

cljs.core.async.t33908.cljs$lang$ctorStr = "cljs.core.async/t33908";

cljs.core.async.t33908.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t33908");
});

cljs.core.async.__GT_t33908 = (function __GT_t33908(ch__$1,f__$1,map_GT___$1,meta33909){
return (new cljs.core.async.t33908(ch__$1,f__$1,map_GT___$1,meta33909));
});

}

return (new cljs.core.async.t33908(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t33916 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33916 = (function (ch,p,filter_GT_,meta33917){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33917 = meta33917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33916.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33916.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__33919 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__33919) : self__.p.call(null,G__33919));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t33916.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33916.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t33916.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33916.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33916.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t33916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33918){
var self__ = this;
var _33918__$1 = this;
return self__.meta33917;
});

cljs.core.async.t33916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33918,meta33917__$1){
var self__ = this;
var _33918__$1 = this;
return (new cljs.core.async.t33916(self__.ch,self__.p,self__.filter_GT_,meta33917__$1));
});

cljs.core.async.t33916.cljs$lang$type = true;

cljs.core.async.t33916.cljs$lang$ctorStr = "cljs.core.async/t33916";

cljs.core.async.t33916.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t33916");
});

cljs.core.async.__GT_t33916 = (function __GT_t33916(ch__$1,p__$1,filter_GT___$1,meta33917){
return (new cljs.core.async.t33916(ch__$1,p__$1,filter_GT___$1,meta33917));
});

}

return (new cljs.core.async.t33916(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16134__auto___34007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___34007,out){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___34007,out){
return (function (state_33985){
var state_val_33986 = (state_33985[(1)]);
if((state_val_33986 === (7))){
var inst_33981 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_33987_34008 = state_33985__$1;
(statearr_33987_34008[(2)] = inst_33981);

(statearr_33987_34008[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33986 === (1))){
var state_33985__$1 = state_33985;
var statearr_33988_34009 = state_33985__$1;
(statearr_33988_34009[(2)] = null);

(statearr_33988_34009[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33986 === (4))){
var inst_33967 = (state_33985[(7)]);
var inst_33967__$1 = (state_33985[(2)]);
var inst_33968 = (inst_33967__$1 == null);
var state_33985__$1 = (function (){var statearr_33989 = state_33985;
(statearr_33989[(7)] = inst_33967__$1);

return statearr_33989;
})();
if(cljs.core.truth_(inst_33968)){
var statearr_33990_34010 = state_33985__$1;
(statearr_33990_34010[(1)] = (5));

} else {
var statearr_33991_34011 = state_33985__$1;
(statearr_33991_34011[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33986 === (6))){
var inst_33967 = (state_33985[(7)]);
var inst_33972 = (function (){var G__33992 = inst_33967;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__33992) : p.call(null,G__33992));
})();
var state_33985__$1 = state_33985;
if(cljs.core.truth_(inst_33972)){
var statearr_33993_34012 = state_33985__$1;
(statearr_33993_34012[(1)] = (8));

} else {
var statearr_33994_34013 = state_33985__$1;
(statearr_33994_34013[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33986 === (3))){
var inst_33983 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33985__$1,inst_33983);
} else {
if((state_val_33986 === (2))){
var state_33985__$1 = state_33985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33985__$1,(4),ch);
} else {
if((state_val_33986 === (11))){
var inst_33975 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_33995_34014 = state_33985__$1;
(statearr_33995_34014[(2)] = inst_33975);

(statearr_33995_34014[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33986 === (9))){
var state_33985__$1 = state_33985;
var statearr_33996_34015 = state_33985__$1;
(statearr_33996_34015[(2)] = null);

(statearr_33996_34015[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33986 === (5))){
var inst_33970 = cljs.core.async.close_BANG_(out);
var state_33985__$1 = state_33985;
var statearr_33997_34016 = state_33985__$1;
(statearr_33997_34016[(2)] = inst_33970);

(statearr_33997_34016[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33986 === (10))){
var inst_33978 = (state_33985[(2)]);
var state_33985__$1 = (function (){var statearr_33998 = state_33985;
(statearr_33998[(8)] = inst_33978);

return statearr_33998;
})();
var statearr_33999_34017 = state_33985__$1;
(statearr_33999_34017[(2)] = null);

(statearr_33999_34017[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33986 === (8))){
var inst_33967 = (state_33985[(7)]);
var state_33985__$1 = state_33985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33985__$1,(11),out,inst_33967);
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
});})(c__16134__auto___34007,out))
;
return ((function (switch__16054__auto__,c__16134__auto___34007,out){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_34003 = [null,null,null,null,null,null,null,null,null];
(statearr_34003[(0)] = state_machine__16055__auto__);

(statearr_34003[(1)] = (1));

return statearr_34003;
});
var state_machine__16055__auto____1 = (function (state_33985){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33985);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e34004){if((e34004 instanceof Object)){
var ex__16058__auto__ = e34004;
var statearr_34005_34018 = state_33985;
(statearr_34005_34018[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33985);

return cljs.core.constant$keyword$99;
} else {
throw e34004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__34019 = state_33985;
state_33985 = G__34019;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33985){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___34007,out))
})();
var state__16136__auto__ = (function (){var statearr_34006 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_34006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___34007);

return statearr_34006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___34007,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__16134__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto__){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto__){
return (function (state_34189){
var state_val_34190 = (state_34189[(1)]);
if((state_val_34190 === (7))){
var inst_34185 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34191_34233 = state_34189__$1;
(statearr_34191_34233[(2)] = inst_34185);

(statearr_34191_34233[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (20))){
var inst_34155 = (state_34189[(7)]);
var inst_34166 = (state_34189[(2)]);
var inst_34167 = cljs.core.next(inst_34155);
var inst_34141 = inst_34167;
var inst_34142 = null;
var inst_34143 = (0);
var inst_34144 = (0);
var state_34189__$1 = (function (){var statearr_34192 = state_34189;
(statearr_34192[(8)] = inst_34142);

(statearr_34192[(9)] = inst_34166);

(statearr_34192[(10)] = inst_34144);

(statearr_34192[(11)] = inst_34141);

(statearr_34192[(12)] = inst_34143);

return statearr_34192;
})();
var statearr_34193_34234 = state_34189__$1;
(statearr_34193_34234[(2)] = null);

(statearr_34193_34234[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (1))){
var state_34189__$1 = state_34189;
var statearr_34194_34235 = state_34189__$1;
(statearr_34194_34235[(2)] = null);

(statearr_34194_34235[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (4))){
var inst_34130 = (state_34189[(13)]);
var inst_34130__$1 = (state_34189[(2)]);
var inst_34131 = (inst_34130__$1 == null);
var state_34189__$1 = (function (){var statearr_34195 = state_34189;
(statearr_34195[(13)] = inst_34130__$1);

return statearr_34195;
})();
if(cljs.core.truth_(inst_34131)){
var statearr_34196_34236 = state_34189__$1;
(statearr_34196_34236[(1)] = (5));

} else {
var statearr_34197_34237 = state_34189__$1;
(statearr_34197_34237[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (15))){
var state_34189__$1 = state_34189;
var statearr_34201_34238 = state_34189__$1;
(statearr_34201_34238[(2)] = null);

(statearr_34201_34238[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (21))){
var state_34189__$1 = state_34189;
var statearr_34202_34239 = state_34189__$1;
(statearr_34202_34239[(2)] = null);

(statearr_34202_34239[(1)] = (23));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (13))){
var inst_34142 = (state_34189[(8)]);
var inst_34144 = (state_34189[(10)]);
var inst_34141 = (state_34189[(11)]);
var inst_34143 = (state_34189[(12)]);
var inst_34151 = (state_34189[(2)]);
var inst_34152 = (inst_34144 + (1));
var tmp34198 = inst_34142;
var tmp34199 = inst_34141;
var tmp34200 = inst_34143;
var inst_34141__$1 = tmp34199;
var inst_34142__$1 = tmp34198;
var inst_34143__$1 = tmp34200;
var inst_34144__$1 = inst_34152;
var state_34189__$1 = (function (){var statearr_34203 = state_34189;
(statearr_34203[(8)] = inst_34142__$1);

(statearr_34203[(10)] = inst_34144__$1);

(statearr_34203[(14)] = inst_34151);

(statearr_34203[(11)] = inst_34141__$1);

(statearr_34203[(12)] = inst_34143__$1);

return statearr_34203;
})();
var statearr_34204_34240 = state_34189__$1;
(statearr_34204_34240[(2)] = null);

(statearr_34204_34240[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (22))){
var state_34189__$1 = state_34189;
var statearr_34205_34241 = state_34189__$1;
(statearr_34205_34241[(2)] = null);

(statearr_34205_34241[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (6))){
var inst_34130 = (state_34189[(13)]);
var inst_34139 = (function (){var G__34206 = inst_34130;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34206) : f.call(null,G__34206));
})();
var inst_34140 = cljs.core.seq(inst_34139);
var inst_34141 = inst_34140;
var inst_34142 = null;
var inst_34143 = (0);
var inst_34144 = (0);
var state_34189__$1 = (function (){var statearr_34207 = state_34189;
(statearr_34207[(8)] = inst_34142);

(statearr_34207[(10)] = inst_34144);

(statearr_34207[(11)] = inst_34141);

(statearr_34207[(12)] = inst_34143);

return statearr_34207;
})();
var statearr_34208_34242 = state_34189__$1;
(statearr_34208_34242[(2)] = null);

(statearr_34208_34242[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (17))){
var inst_34155 = (state_34189[(7)]);
var inst_34159 = cljs.core.chunk_first(inst_34155);
var inst_34160 = cljs.core.chunk_rest(inst_34155);
var inst_34161 = cljs.core.count(inst_34159);
var inst_34141 = inst_34160;
var inst_34142 = inst_34159;
var inst_34143 = inst_34161;
var inst_34144 = (0);
var state_34189__$1 = (function (){var statearr_34209 = state_34189;
(statearr_34209[(8)] = inst_34142);

(statearr_34209[(10)] = inst_34144);

(statearr_34209[(11)] = inst_34141);

(statearr_34209[(12)] = inst_34143);

return statearr_34209;
})();
var statearr_34210_34243 = state_34189__$1;
(statearr_34210_34243[(2)] = null);

(statearr_34210_34243[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (3))){
var inst_34187 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34189__$1,inst_34187);
} else {
if((state_val_34190 === (12))){
var inst_34175 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34211_34244 = state_34189__$1;
(statearr_34211_34244[(2)] = inst_34175);

(statearr_34211_34244[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (2))){
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34189__$1,(4),in$);
} else {
if((state_val_34190 === (23))){
var inst_34183 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34212_34245 = state_34189__$1;
(statearr_34212_34245[(2)] = inst_34183);

(statearr_34212_34245[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (19))){
var inst_34170 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34213_34246 = state_34189__$1;
(statearr_34213_34246[(2)] = inst_34170);

(statearr_34213_34246[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (11))){
var inst_34155 = (state_34189[(7)]);
var inst_34141 = (state_34189[(11)]);
var inst_34155__$1 = cljs.core.seq(inst_34141);
var state_34189__$1 = (function (){var statearr_34214 = state_34189;
(statearr_34214[(7)] = inst_34155__$1);

return statearr_34214;
})();
if(inst_34155__$1){
var statearr_34215_34247 = state_34189__$1;
(statearr_34215_34247[(1)] = (14));

} else {
var statearr_34216_34248 = state_34189__$1;
(statearr_34216_34248[(1)] = (15));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (9))){
var inst_34177 = (state_34189[(2)]);
var inst_34178 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34189__$1 = (function (){var statearr_34217 = state_34189;
(statearr_34217[(15)] = inst_34177);

return statearr_34217;
})();
if(cljs.core.truth_(inst_34178)){
var statearr_34218_34249 = state_34189__$1;
(statearr_34218_34249[(1)] = (21));

} else {
var statearr_34219_34250 = state_34189__$1;
(statearr_34219_34250[(1)] = (22));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (5))){
var inst_34133 = cljs.core.async.close_BANG_(out);
var state_34189__$1 = state_34189;
var statearr_34220_34251 = state_34189__$1;
(statearr_34220_34251[(2)] = inst_34133);

(statearr_34220_34251[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (14))){
var inst_34155 = (state_34189[(7)]);
var inst_34157 = cljs.core.chunked_seq_QMARK_(inst_34155);
var state_34189__$1 = state_34189;
if(inst_34157){
var statearr_34221_34252 = state_34189__$1;
(statearr_34221_34252[(1)] = (17));

} else {
var statearr_34222_34253 = state_34189__$1;
(statearr_34222_34253[(1)] = (18));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (16))){
var inst_34173 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34223_34254 = state_34189__$1;
(statearr_34223_34254[(2)] = inst_34173);

(statearr_34223_34254[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34190 === (10))){
var inst_34142 = (state_34189[(8)]);
var inst_34144 = (state_34189[(10)]);
var inst_34149 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34142,inst_34144);
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34189__$1,(13),out,inst_34149);
} else {
if((state_val_34190 === (18))){
var inst_34155 = (state_34189[(7)]);
var inst_34164 = cljs.core.first(inst_34155);
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34189__$1,(20),out,inst_34164);
} else {
if((state_val_34190 === (8))){
var inst_34144 = (state_34189[(10)]);
var inst_34143 = (state_34189[(12)]);
var inst_34146 = (inst_34144 < inst_34143);
var inst_34147 = inst_34146;
var state_34189__$1 = state_34189;
if(cljs.core.truth_(inst_34147)){
var statearr_34224_34255 = state_34189__$1;
(statearr_34224_34255[(1)] = (10));

} else {
var statearr_34225_34256 = state_34189__$1;
(statearr_34225_34256[(1)] = (11));

}

return cljs.core.constant$keyword$99;
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
});})(c__16134__auto__))
;
return ((function (switch__16054__auto__,c__16134__auto__){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_34229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34229[(0)] = state_machine__16055__auto__);

(statearr_34229[(1)] = (1));

return statearr_34229;
});
var state_machine__16055__auto____1 = (function (state_34189){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_34189);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e34230){if((e34230 instanceof Object)){
var ex__16058__auto__ = e34230;
var statearr_34231_34257 = state_34189;
(statearr_34231_34257[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34189);

return cljs.core.constant$keyword$99;
} else {
throw e34230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__34258 = state_34189;
state_34189 = G__34258;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_34189){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_34189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto__))
})();
var state__16136__auto__ = (function (){var statearr_34232 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_34232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto__);

return statearr_34232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto__))
);

return c__16134__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16134__auto___34363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___34363,out){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___34363,out){
return (function (state_34338){
var state_val_34339 = (state_34338[(1)]);
if((state_val_34339 === (7))){
var inst_34333 = (state_34338[(2)]);
var state_34338__$1 = state_34338;
var statearr_34340_34364 = state_34338__$1;
(statearr_34340_34364[(2)] = inst_34333);

(statearr_34340_34364[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34339 === (1))){
var inst_34315 = null;
var state_34338__$1 = (function (){var statearr_34341 = state_34338;
(statearr_34341[(7)] = inst_34315);

return statearr_34341;
})();
var statearr_34342_34365 = state_34338__$1;
(statearr_34342_34365[(2)] = null);

(statearr_34342_34365[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34339 === (4))){
var inst_34318 = (state_34338[(8)]);
var inst_34318__$1 = (state_34338[(2)]);
var inst_34319 = (inst_34318__$1 == null);
var inst_34320 = cljs.core.not(inst_34319);
var state_34338__$1 = (function (){var statearr_34343 = state_34338;
(statearr_34343[(8)] = inst_34318__$1);

return statearr_34343;
})();
if(inst_34320){
var statearr_34344_34366 = state_34338__$1;
(statearr_34344_34366[(1)] = (5));

} else {
var statearr_34345_34367 = state_34338__$1;
(statearr_34345_34367[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34339 === (6))){
var state_34338__$1 = state_34338;
var statearr_34346_34368 = state_34338__$1;
(statearr_34346_34368[(2)] = null);

(statearr_34346_34368[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34339 === (3))){
var inst_34335 = (state_34338[(2)]);
var inst_34336 = cljs.core.async.close_BANG_(out);
var state_34338__$1 = (function (){var statearr_34347 = state_34338;
(statearr_34347[(9)] = inst_34335);

return statearr_34347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34338__$1,inst_34336);
} else {
if((state_val_34339 === (2))){
var state_34338__$1 = state_34338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34338__$1,(4),ch);
} else {
if((state_val_34339 === (11))){
var inst_34318 = (state_34338[(8)]);
var inst_34327 = (state_34338[(2)]);
var inst_34315 = inst_34318;
var state_34338__$1 = (function (){var statearr_34348 = state_34338;
(statearr_34348[(7)] = inst_34315);

(statearr_34348[(10)] = inst_34327);

return statearr_34348;
})();
var statearr_34349_34369 = state_34338__$1;
(statearr_34349_34369[(2)] = null);

(statearr_34349_34369[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34339 === (9))){
var inst_34318 = (state_34338[(8)]);
var state_34338__$1 = state_34338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34338__$1,(11),out,inst_34318);
} else {
if((state_val_34339 === (5))){
var inst_34315 = (state_34338[(7)]);
var inst_34318 = (state_34338[(8)]);
var inst_34322 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34318,inst_34315);
var state_34338__$1 = state_34338;
if(inst_34322){
var statearr_34351_34370 = state_34338__$1;
(statearr_34351_34370[(1)] = (8));

} else {
var statearr_34352_34371 = state_34338__$1;
(statearr_34352_34371[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34339 === (10))){
var inst_34330 = (state_34338[(2)]);
var state_34338__$1 = state_34338;
var statearr_34353_34372 = state_34338__$1;
(statearr_34353_34372[(2)] = inst_34330);

(statearr_34353_34372[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34339 === (8))){
var inst_34315 = (state_34338[(7)]);
var tmp34350 = inst_34315;
var inst_34315__$1 = tmp34350;
var state_34338__$1 = (function (){var statearr_34354 = state_34338;
(statearr_34354[(7)] = inst_34315__$1);

return statearr_34354;
})();
var statearr_34355_34373 = state_34338__$1;
(statearr_34355_34373[(2)] = null);

(statearr_34355_34373[(1)] = (2));


return cljs.core.constant$keyword$99;
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
});})(c__16134__auto___34363,out))
;
return ((function (switch__16054__auto__,c__16134__auto___34363,out){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_34359 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34359[(0)] = state_machine__16055__auto__);

(statearr_34359[(1)] = (1));

return statearr_34359;
});
var state_machine__16055__auto____1 = (function (state_34338){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_34338);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e34360){if((e34360 instanceof Object)){
var ex__16058__auto__ = e34360;
var statearr_34361_34374 = state_34338;
(statearr_34361_34374[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34338);

return cljs.core.constant$keyword$99;
} else {
throw e34360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__34375 = state_34338;
state_34338 = G__34375;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_34338){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_34338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___34363,out))
})();
var state__16136__auto__ = (function (){var statearr_34362 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_34362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___34363);

return statearr_34362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___34363,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16134__auto___34513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___34513,out){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___34513,out){
return (function (state_34483){
var state_val_34484 = (state_34483[(1)]);
if((state_val_34484 === (7))){
var inst_34479 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
var statearr_34485_34514 = state_34483__$1;
(statearr_34485_34514[(2)] = inst_34479);

(statearr_34485_34514[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34484 === (1))){
var inst_34446 = (new Array(n));
var inst_34447 = inst_34446;
var inst_34448 = (0);
var state_34483__$1 = (function (){var statearr_34486 = state_34483;
(statearr_34486[(7)] = inst_34447);

(statearr_34486[(8)] = inst_34448);

return statearr_34486;
})();
var statearr_34487_34515 = state_34483__$1;
(statearr_34487_34515[(2)] = null);

(statearr_34487_34515[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34484 === (4))){
var inst_34451 = (state_34483[(9)]);
var inst_34451__$1 = (state_34483[(2)]);
var inst_34452 = (inst_34451__$1 == null);
var inst_34453 = cljs.core.not(inst_34452);
var state_34483__$1 = (function (){var statearr_34488 = state_34483;
(statearr_34488[(9)] = inst_34451__$1);

return statearr_34488;
})();
if(inst_34453){
var statearr_34489_34516 = state_34483__$1;
(statearr_34489_34516[(1)] = (5));

} else {
var statearr_34490_34517 = state_34483__$1;
(statearr_34490_34517[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34484 === (15))){
var inst_34473 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
var statearr_34491_34518 = state_34483__$1;
(statearr_34491_34518[(2)] = inst_34473);

(statearr_34491_34518[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34484 === (13))){
var state_34483__$1 = state_34483;
var statearr_34492_34519 = state_34483__$1;
(statearr_34492_34519[(2)] = null);

(statearr_34492_34519[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34484 === (6))){
var inst_34448 = (state_34483[(8)]);
var inst_34469 = (inst_34448 > (0));
var state_34483__$1 = state_34483;
if(cljs.core.truth_(inst_34469)){
var statearr_34493_34520 = state_34483__$1;
(statearr_34493_34520[(1)] = (12));

} else {
var statearr_34494_34521 = state_34483__$1;
(statearr_34494_34521[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34484 === (3))){
var inst_34481 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34483__$1,inst_34481);
} else {
if((state_val_34484 === (12))){
var inst_34447 = (state_34483[(7)]);
var inst_34471 = cljs.core.vec(inst_34447);
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34483__$1,(15),out,inst_34471);
} else {
if((state_val_34484 === (2))){
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34483__$1,(4),ch);
} else {
if((state_val_34484 === (11))){
var inst_34463 = (state_34483[(2)]);
var inst_34464 = (new Array(n));
var inst_34447 = inst_34464;
var inst_34448 = (0);
var state_34483__$1 = (function (){var statearr_34495 = state_34483;
(statearr_34495[(7)] = inst_34447);

(statearr_34495[(10)] = inst_34463);

(statearr_34495[(8)] = inst_34448);

return statearr_34495;
})();
var statearr_34496_34522 = state_34483__$1;
(statearr_34496_34522[(2)] = null);

(statearr_34496_34522[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34484 === (9))){
var inst_34447 = (state_34483[(7)]);
var inst_34461 = cljs.core.vec(inst_34447);
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34483__$1,(11),out,inst_34461);
} else {
if((state_val_34484 === (5))){
var inst_34447 = (state_34483[(7)]);
var inst_34451 = (state_34483[(9)]);
var inst_34456 = (state_34483[(11)]);
var inst_34448 = (state_34483[(8)]);
var inst_34455 = (inst_34447[inst_34448] = inst_34451);
var inst_34456__$1 = (inst_34448 + (1));
var inst_34457 = (inst_34456__$1 < n);
var state_34483__$1 = (function (){var statearr_34497 = state_34483;
(statearr_34497[(12)] = inst_34455);

(statearr_34497[(11)] = inst_34456__$1);

return statearr_34497;
})();
if(cljs.core.truth_(inst_34457)){
var statearr_34498_34523 = state_34483__$1;
(statearr_34498_34523[(1)] = (8));

} else {
var statearr_34499_34524 = state_34483__$1;
(statearr_34499_34524[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34484 === (14))){
var inst_34476 = (state_34483[(2)]);
var inst_34477 = cljs.core.async.close_BANG_(out);
var state_34483__$1 = (function (){var statearr_34501 = state_34483;
(statearr_34501[(13)] = inst_34476);

return statearr_34501;
})();
var statearr_34502_34525 = state_34483__$1;
(statearr_34502_34525[(2)] = inst_34477);

(statearr_34502_34525[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34484 === (10))){
var inst_34467 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
var statearr_34503_34526 = state_34483__$1;
(statearr_34503_34526[(2)] = inst_34467);

(statearr_34503_34526[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34484 === (8))){
var inst_34447 = (state_34483[(7)]);
var inst_34456 = (state_34483[(11)]);
var tmp34500 = inst_34447;
var inst_34447__$1 = tmp34500;
var inst_34448 = inst_34456;
var state_34483__$1 = (function (){var statearr_34504 = state_34483;
(statearr_34504[(7)] = inst_34447__$1);

(statearr_34504[(8)] = inst_34448);

return statearr_34504;
})();
var statearr_34505_34527 = state_34483__$1;
(statearr_34505_34527[(2)] = null);

(statearr_34505_34527[(1)] = (2));


return cljs.core.constant$keyword$99;
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
});})(c__16134__auto___34513,out))
;
return ((function (switch__16054__auto__,c__16134__auto___34513,out){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_34509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34509[(0)] = state_machine__16055__auto__);

(statearr_34509[(1)] = (1));

return statearr_34509;
});
var state_machine__16055__auto____1 = (function (state_34483){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_34483);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e34510){if((e34510 instanceof Object)){
var ex__16058__auto__ = e34510;
var statearr_34511_34528 = state_34483;
(statearr_34511_34528[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34483);

return cljs.core.constant$keyword$99;
} else {
throw e34510;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__34529 = state_34483;
state_34483 = G__34529;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_34483){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_34483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___34513,out))
})();
var state__16136__auto__ = (function (){var statearr_34512 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_34512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___34513);

return statearr_34512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___34513,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16134__auto___34677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___34677,out){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___34677,out){
return (function (state_34646){
var state_val_34647 = (state_34646[(1)]);
if((state_val_34647 === (7))){
var inst_34642 = (state_34646[(2)]);
var state_34646__$1 = state_34646;
var statearr_34648_34678 = state_34646__$1;
(statearr_34648_34678[(2)] = inst_34642);

(statearr_34648_34678[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34647 === (1))){
var inst_34605 = [];
var inst_34606 = inst_34605;
var inst_34607 = cljs.core.constant$keyword$114;
var state_34646__$1 = (function (){var statearr_34649 = state_34646;
(statearr_34649[(7)] = inst_34607);

(statearr_34649[(8)] = inst_34606);

return statearr_34649;
})();
var statearr_34650_34679 = state_34646__$1;
(statearr_34650_34679[(2)] = null);

(statearr_34650_34679[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34647 === (4))){
var inst_34610 = (state_34646[(9)]);
var inst_34610__$1 = (state_34646[(2)]);
var inst_34611 = (inst_34610__$1 == null);
var inst_34612 = cljs.core.not(inst_34611);
var state_34646__$1 = (function (){var statearr_34651 = state_34646;
(statearr_34651[(9)] = inst_34610__$1);

return statearr_34651;
})();
if(inst_34612){
var statearr_34652_34680 = state_34646__$1;
(statearr_34652_34680[(1)] = (5));

} else {
var statearr_34653_34681 = state_34646__$1;
(statearr_34653_34681[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34647 === (15))){
var inst_34636 = (state_34646[(2)]);
var state_34646__$1 = state_34646;
var statearr_34654_34682 = state_34646__$1;
(statearr_34654_34682[(2)] = inst_34636);

(statearr_34654_34682[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34647 === (13))){
var state_34646__$1 = state_34646;
var statearr_34655_34683 = state_34646__$1;
(statearr_34655_34683[(2)] = null);

(statearr_34655_34683[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34647 === (6))){
var inst_34606 = (state_34646[(8)]);
var inst_34631 = inst_34606.length;
var inst_34632 = (inst_34631 > (0));
var state_34646__$1 = state_34646;
if(cljs.core.truth_(inst_34632)){
var statearr_34656_34684 = state_34646__$1;
(statearr_34656_34684[(1)] = (12));

} else {
var statearr_34657_34685 = state_34646__$1;
(statearr_34657_34685[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34647 === (3))){
var inst_34644 = (state_34646[(2)]);
var state_34646__$1 = state_34646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34646__$1,inst_34644);
} else {
if((state_val_34647 === (12))){
var inst_34606 = (state_34646[(8)]);
var inst_34634 = cljs.core.vec(inst_34606);
var state_34646__$1 = state_34646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34646__$1,(15),out,inst_34634);
} else {
if((state_val_34647 === (2))){
var state_34646__$1 = state_34646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34646__$1,(4),ch);
} else {
if((state_val_34647 === (11))){
var inst_34614 = (state_34646[(10)]);
var inst_34610 = (state_34646[(9)]);
var inst_34624 = (state_34646[(2)]);
var inst_34625 = [];
var inst_34626 = inst_34625.push(inst_34610);
var inst_34606 = inst_34625;
var inst_34607 = inst_34614;
var state_34646__$1 = (function (){var statearr_34658 = state_34646;
(statearr_34658[(11)] = inst_34624);

(statearr_34658[(7)] = inst_34607);

(statearr_34658[(12)] = inst_34626);

(statearr_34658[(8)] = inst_34606);

return statearr_34658;
})();
var statearr_34659_34686 = state_34646__$1;
(statearr_34659_34686[(2)] = null);

(statearr_34659_34686[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34647 === (9))){
var inst_34606 = (state_34646[(8)]);
var inst_34622 = cljs.core.vec(inst_34606);
var state_34646__$1 = state_34646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34646__$1,(11),out,inst_34622);
} else {
if((state_val_34647 === (5))){
var inst_34607 = (state_34646[(7)]);
var inst_34614 = (state_34646[(10)]);
var inst_34610 = (state_34646[(9)]);
var inst_34614__$1 = (function (){var G__34660 = inst_34610;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34660) : f.call(null,G__34660));
})();
var inst_34615 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34614__$1,inst_34607);
var inst_34616 = cljs.core.keyword_identical_QMARK_(inst_34607,cljs.core.constant$keyword$114);
var inst_34617 = (inst_34615) || (inst_34616);
var state_34646__$1 = (function (){var statearr_34661 = state_34646;
(statearr_34661[(10)] = inst_34614__$1);

return statearr_34661;
})();
if(cljs.core.truth_(inst_34617)){
var statearr_34662_34687 = state_34646__$1;
(statearr_34662_34687[(1)] = (8));

} else {
var statearr_34663_34688 = state_34646__$1;
(statearr_34663_34688[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34647 === (14))){
var inst_34639 = (state_34646[(2)]);
var inst_34640 = cljs.core.async.close_BANG_(out);
var state_34646__$1 = (function (){var statearr_34665 = state_34646;
(statearr_34665[(13)] = inst_34639);

return statearr_34665;
})();
var statearr_34666_34689 = state_34646__$1;
(statearr_34666_34689[(2)] = inst_34640);

(statearr_34666_34689[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34647 === (10))){
var inst_34629 = (state_34646[(2)]);
var state_34646__$1 = state_34646;
var statearr_34667_34690 = state_34646__$1;
(statearr_34667_34690[(2)] = inst_34629);

(statearr_34667_34690[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34647 === (8))){
var inst_34614 = (state_34646[(10)]);
var inst_34610 = (state_34646[(9)]);
var inst_34606 = (state_34646[(8)]);
var inst_34619 = inst_34606.push(inst_34610);
var tmp34664 = inst_34606;
var inst_34606__$1 = tmp34664;
var inst_34607 = inst_34614;
var state_34646__$1 = (function (){var statearr_34668 = state_34646;
(statearr_34668[(14)] = inst_34619);

(statearr_34668[(7)] = inst_34607);

(statearr_34668[(8)] = inst_34606__$1);

return statearr_34668;
})();
var statearr_34669_34691 = state_34646__$1;
(statearr_34669_34691[(2)] = null);

(statearr_34669_34691[(1)] = (2));


return cljs.core.constant$keyword$99;
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
});})(c__16134__auto___34677,out))
;
return ((function (switch__16054__auto__,c__16134__auto___34677,out){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_34673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34673[(0)] = state_machine__16055__auto__);

(statearr_34673[(1)] = (1));

return statearr_34673;
});
var state_machine__16055__auto____1 = (function (state_34646){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_34646);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e34674){if((e34674 instanceof Object)){
var ex__16058__auto__ = e34674;
var statearr_34675_34692 = state_34646;
(statearr_34675_34692[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34646);

return cljs.core.constant$keyword$99;
} else {
throw e34674;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__34693 = state_34646;
state_34646 = G__34693;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_34646){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_34646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___34677,out))
})();
var state__16136__auto__ = (function (){var statearr_34676 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_34676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___34677);

return statearr_34676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___34677,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
