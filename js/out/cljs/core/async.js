// Compiled by ClojureScript 0.0-2496
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t28285 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28285 = (function (f,fn_handler,meta28286){
this.f = f;
this.fn_handler = fn_handler;
this.meta28286 = meta28286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28285.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28287){
var self__ = this;
var _28287__$1 = this;
return self__.meta28286;
});

cljs.core.async.t28285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28287,meta28286__$1){
var self__ = this;
var _28287__$1 = this;
return (new cljs.core.async.t28285(self__.f,self__.fn_handler,meta28286__$1));
});

cljs.core.async.t28285.cljs$lang$type = true;

cljs.core.async.t28285.cljs$lang$ctorStr = "cljs.core.async/t28285";

cljs.core.async.t28285.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t28285");
});

cljs.core.async.__GT_t28285 = (function __GT_t28285(f__$1,fn_handler__$1,meta28286){
return (new cljs.core.async.t28285(f__$1,fn_handler__$1,meta28286));
});

}

return (new cljs.core.async.t28285(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__28289 = buff;
if(G__28289){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__28289.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28289.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__28289);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__28289);
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
var val_28306 = (function (){var G__28303 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28303) : cljs.core.deref.call(null,G__28303));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__28304_28307 = val_28306;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28304_28307) : fn1.call(null,G__28304_28307));
} else {
cljs.core.async.impl.dispatch.run(((function (val_28306,ret){
return (function (){
var G__28305 = val_28306;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28305) : fn1.call(null,G__28305));
});})(val_28306,ret))
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
var G__28316 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28316) : cljs.core.deref.call(null,G__28316));
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
var ret = (function (){var G__28317 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28317) : cljs.core.deref.call(null,G__28317));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__28318_28320 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28318_28320) : fn1.call(null,G__28318_28320));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__28319 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28319) : fn1.call(null,G__28319));
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
var n__4515__auto___28321 = n;
var x_28322 = (0);
while(true){
if((x_28322 < n__4515__auto___28321)){
(a[x_28322] = (0));

var G__28323 = (x_28322 + (1));
x_28322 = G__28323;
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

var G__28324 = (i + (1));
i = G__28324;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__28332 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28332) : cljs.core.atom.call(null,G__28332));
})();
if(typeof cljs.core.async.t28333 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28333 = (function (flag,alt_flag,meta28334){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28334 = meta28334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28333.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__28336 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28336) : cljs.core.deref.call(null,G__28336));
});})(flag))
;

cljs.core.async.t28333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__28337_28339 = self__.flag;
var G__28338_28340 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28337_28339,G__28338_28340) : cljs.core.reset_BANG_.call(null,G__28337_28339,G__28338_28340));

return true;
});})(flag))
;

cljs.core.async.t28333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28335){
var self__ = this;
var _28335__$1 = this;
return self__.meta28334;
});})(flag))
;

cljs.core.async.t28333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28335,meta28334__$1){
var self__ = this;
var _28335__$1 = this;
return (new cljs.core.async.t28333(self__.flag,self__.alt_flag,meta28334__$1));
});})(flag))
;

cljs.core.async.t28333.cljs$lang$type = true;

cljs.core.async.t28333.cljs$lang$ctorStr = "cljs.core.async/t28333";

cljs.core.async.t28333.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t28333");
});})(flag))
;

cljs.core.async.__GT_t28333 = ((function (flag){
return (function __GT_t28333(flag__$1,alt_flag__$1,meta28334){
return (new cljs.core.async.t28333(flag__$1,alt_flag__$1,meta28334));
});})(flag))
;

}

return (new cljs.core.async.t28333(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t28344 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28344 = (function (cb,flag,alt_handler,meta28345){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28345 = meta28345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t28344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28346){
var self__ = this;
var _28346__$1 = this;
return self__.meta28345;
});

cljs.core.async.t28344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28346,meta28345__$1){
var self__ = this;
var _28346__$1 = this;
return (new cljs.core.async.t28344(self__.cb,self__.flag,self__.alt_handler,meta28345__$1));
});

cljs.core.async.t28344.cljs$lang$type = true;

cljs.core.async.t28344.cljs$lang$ctorStr = "cljs.core.async/t28344";

cljs.core.async.t28344.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t28344");
});

cljs.core.async.__GT_t28344 = (function __GT_t28344(cb__$1,flag__$1,alt_handler__$1,meta28345){
return (new cljs.core.async.t28344(cb__$1,flag__$1,alt_handler__$1,meta28345));
});

}

return (new cljs.core.async.t28344(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__28354 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__28354) : port.call(null,G__28354));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__28355 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__28355) : port.call(null,G__28355));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28347_SHARP_){
var G__28356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28347_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28356) : fret.call(null,G__28356));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28348_SHARP_){
var G__28357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28348_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28357) : fret.call(null,G__28357));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28358 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28358) : cljs.core.deref.call(null,G__28358));
})(),(function (){var or__3628__auto__ = wport;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28359 = (i + (1));
i = G__28359;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3628__auto__ = ret;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3616__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3616__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3616__auto__;
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
var alts_BANG___delegate = function (ports,p__28360){
var map__28362 = p__28360;
var map__28362__$1 = ((cljs.core.seq_QMARK_(map__28362))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28362):map__28362);
var opts = map__28362__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__28360 = null;
if (arguments.length > 1) {
  p__28360 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__28360);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28363){
var ports = cljs.core.first(arglist__28363);
var p__28360 = cljs.core.rest(arglist__28363);
return alts_BANG___delegate(ports,p__28360);
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
var c__16610__auto___28461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___28461){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___28461){
return (function (state_28437){
var state_val_28438 = (state_28437[(1)]);
if((state_val_28438 === (7))){
var inst_28433 = (state_28437[(2)]);
var state_28437__$1 = state_28437;
var statearr_28439_28462 = state_28437__$1;
(statearr_28439_28462[(2)] = inst_28433);

(statearr_28439_28462[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28438 === (1))){
var state_28437__$1 = state_28437;
var statearr_28440_28463 = state_28437__$1;
(statearr_28440_28463[(2)] = null);

(statearr_28440_28463[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28438 === (4))){
var inst_28416 = (state_28437[(7)]);
var inst_28416__$1 = (state_28437[(2)]);
var inst_28417 = (inst_28416__$1 == null);
var state_28437__$1 = (function (){var statearr_28441 = state_28437;
(statearr_28441[(7)] = inst_28416__$1);

return statearr_28441;
})();
if(cljs.core.truth_(inst_28417)){
var statearr_28442_28464 = state_28437__$1;
(statearr_28442_28464[(1)] = (5));

} else {
var statearr_28443_28465 = state_28437__$1;
(statearr_28443_28465[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28438 === (13))){
var state_28437__$1 = state_28437;
var statearr_28444_28466 = state_28437__$1;
(statearr_28444_28466[(2)] = null);

(statearr_28444_28466[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28438 === (6))){
var inst_28416 = (state_28437[(7)]);
var state_28437__$1 = state_28437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28437__$1,(11),to,inst_28416);
} else {
if((state_val_28438 === (3))){
var inst_28435 = (state_28437[(2)]);
var state_28437__$1 = state_28437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28437__$1,inst_28435);
} else {
if((state_val_28438 === (12))){
var state_28437__$1 = state_28437;
var statearr_28445_28467 = state_28437__$1;
(statearr_28445_28467[(2)] = null);

(statearr_28445_28467[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28438 === (2))){
var state_28437__$1 = state_28437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28437__$1,(4),from);
} else {
if((state_val_28438 === (11))){
var inst_28426 = (state_28437[(2)]);
var state_28437__$1 = state_28437;
if(cljs.core.truth_(inst_28426)){
var statearr_28446_28468 = state_28437__$1;
(statearr_28446_28468[(1)] = (12));

} else {
var statearr_28447_28469 = state_28437__$1;
(statearr_28447_28469[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28438 === (9))){
var state_28437__$1 = state_28437;
var statearr_28448_28470 = state_28437__$1;
(statearr_28448_28470[(2)] = null);

(statearr_28448_28470[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28438 === (5))){
var state_28437__$1 = state_28437;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28449_28471 = state_28437__$1;
(statearr_28449_28471[(1)] = (8));

} else {
var statearr_28450_28472 = state_28437__$1;
(statearr_28450_28472[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28438 === (14))){
var inst_28431 = (state_28437[(2)]);
var state_28437__$1 = state_28437;
var statearr_28451_28473 = state_28437__$1;
(statearr_28451_28473[(2)] = inst_28431);

(statearr_28451_28473[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28438 === (10))){
var inst_28423 = (state_28437[(2)]);
var state_28437__$1 = state_28437;
var statearr_28452_28474 = state_28437__$1;
(statearr_28452_28474[(2)] = inst_28423);

(statearr_28452_28474[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28438 === (8))){
var inst_28420 = cljs.core.async.close_BANG_(to);
var state_28437__$1 = state_28437;
var statearr_28453_28475 = state_28437__$1;
(statearr_28453_28475[(2)] = inst_28420);

(statearr_28453_28475[(1)] = (10));


return cljs.core.constant$keyword$97;
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
});})(c__16610__auto___28461))
;
return ((function (switch__16530__auto__,c__16610__auto___28461){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_28457 = [null,null,null,null,null,null,null,null];
(statearr_28457[(0)] = state_machine__16531__auto__);

(statearr_28457[(1)] = (1));

return statearr_28457;
});
var state_machine__16531__auto____1 = (function (state_28437){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28437);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e28458){if((e28458 instanceof Object)){
var ex__16534__auto__ = e28458;
var statearr_28459_28476 = state_28437;
(statearr_28459_28476[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28437);

return cljs.core.constant$keyword$97;
} else {
throw e28458;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__28477 = state_28437;
state_28437 = G__28477;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28437){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___28461))
})();
var state__16612__auto__ = (function (){var statearr_28460 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_28460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___28461);

return statearr_28460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___28461))
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
return (function (p__28663){
var vec__28664 = p__28663;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28664,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28664,(1),null);
var job = vec__28664;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16610__auto___28848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___28848,res,vec__28664,v,p,job,jobs,results){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___28848,res,vec__28664,v,p,job,jobs,results){
return (function (state_28669){
var state_val_28670 = (state_28669[(1)]);
if((state_val_28670 === (2))){
var inst_28666 = (state_28669[(2)]);
var inst_28667 = cljs.core.async.close_BANG_(res);
var state_28669__$1 = (function (){var statearr_28671 = state_28669;
(statearr_28671[(7)] = inst_28666);

return statearr_28671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28669__$1,inst_28667);
} else {
if((state_val_28670 === (1))){
var state_28669__$1 = state_28669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28669__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16610__auto___28848,res,vec__28664,v,p,job,jobs,results))
;
return ((function (switch__16530__auto__,c__16610__auto___28848,res,vec__28664,v,p,job,jobs,results){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_28675 = [null,null,null,null,null,null,null,null];
(statearr_28675[(0)] = state_machine__16531__auto__);

(statearr_28675[(1)] = (1));

return statearr_28675;
});
var state_machine__16531__auto____1 = (function (state_28669){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28669);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e28676){if((e28676 instanceof Object)){
var ex__16534__auto__ = e28676;
var statearr_28677_28849 = state_28669;
(statearr_28677_28849[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28669);

return cljs.core.constant$keyword$97;
} else {
throw e28676;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__28850 = state_28669;
state_28669 = G__28850;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28669){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___28848,res,vec__28664,v,p,job,jobs,results))
})();
var state__16612__auto__ = (function (){var statearr_28678 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_28678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___28848);

return statearr_28678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___28848,res,vec__28664,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28679){
var vec__28680 = p__28679;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28680,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28680,(1),null);
var job = vec__28680;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__28681_28851 = v;
var G__28682_28852 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__28681_28851,G__28682_28852) : xf.call(null,G__28681_28851,G__28682_28852));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4515__auto___28853 = n;
var __28854 = (0);
while(true){
if((__28854 < n__4515__auto___28853)){
var G__28683_28855 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28683_28855) {
case "async":
var c__16610__auto___28857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28854,c__16610__auto___28857,G__28683_28855,n__4515__auto___28853,jobs,results,process,async){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (__28854,c__16610__auto___28857,G__28683_28855,n__4515__auto___28853,jobs,results,process,async){
return (function (state_28696){
var state_val_28697 = (state_28696[(1)]);
if((state_val_28697 === (7))){
var inst_28692 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28698_28858 = state_28696__$1;
(statearr_28698_28858[(2)] = inst_28692);

(statearr_28698_28858[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28697 === (6))){
var state_28696__$1 = state_28696;
var statearr_28699_28859 = state_28696__$1;
(statearr_28699_28859[(2)] = null);

(statearr_28699_28859[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28697 === (5))){
var state_28696__$1 = state_28696;
var statearr_28700_28860 = state_28696__$1;
(statearr_28700_28860[(2)] = null);

(statearr_28700_28860[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28697 === (4))){
var inst_28686 = (state_28696[(2)]);
var inst_28687 = async(inst_28686);
var state_28696__$1 = state_28696;
if(cljs.core.truth_(inst_28687)){
var statearr_28701_28861 = state_28696__$1;
(statearr_28701_28861[(1)] = (5));

} else {
var statearr_28702_28862 = state_28696__$1;
(statearr_28702_28862[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28697 === (3))){
var inst_28694 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28696__$1,inst_28694);
} else {
if((state_val_28697 === (2))){
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28696__$1,(4),jobs);
} else {
if((state_val_28697 === (1))){
var state_28696__$1 = state_28696;
var statearr_28703_28863 = state_28696__$1;
(statearr_28703_28863[(2)] = null);

(statearr_28703_28863[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
});})(__28854,c__16610__auto___28857,G__28683_28855,n__4515__auto___28853,jobs,results,process,async))
;
return ((function (__28854,switch__16530__auto__,c__16610__auto___28857,G__28683_28855,n__4515__auto___28853,jobs,results,process,async){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_28707 = [null,null,null,null,null,null,null];
(statearr_28707[(0)] = state_machine__16531__auto__);

(statearr_28707[(1)] = (1));

return statearr_28707;
});
var state_machine__16531__auto____1 = (function (state_28696){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28696);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e28708){if((e28708 instanceof Object)){
var ex__16534__auto__ = e28708;
var statearr_28709_28864 = state_28696;
(statearr_28709_28864[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28696);

return cljs.core.constant$keyword$97;
} else {
throw e28708;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__28865 = state_28696;
state_28696 = G__28865;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28696){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(__28854,switch__16530__auto__,c__16610__auto___28857,G__28683_28855,n__4515__auto___28853,jobs,results,process,async))
})();
var state__16612__auto__ = (function (){var statearr_28710 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_28710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___28857);

return statearr_28710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(__28854,c__16610__auto___28857,G__28683_28855,n__4515__auto___28853,jobs,results,process,async))
);


break;
case "compute":
var c__16610__auto___28866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28854,c__16610__auto___28866,G__28683_28855,n__4515__auto___28853,jobs,results,process,async){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (__28854,c__16610__auto___28866,G__28683_28855,n__4515__auto___28853,jobs,results,process,async){
return (function (state_28723){
var state_val_28724 = (state_28723[(1)]);
if((state_val_28724 === (7))){
var inst_28719 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
var statearr_28725_28867 = state_28723__$1;
(statearr_28725_28867[(2)] = inst_28719);

(statearr_28725_28867[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28724 === (6))){
var state_28723__$1 = state_28723;
var statearr_28726_28868 = state_28723__$1;
(statearr_28726_28868[(2)] = null);

(statearr_28726_28868[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28724 === (5))){
var state_28723__$1 = state_28723;
var statearr_28727_28869 = state_28723__$1;
(statearr_28727_28869[(2)] = null);

(statearr_28727_28869[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28724 === (4))){
var inst_28713 = (state_28723[(2)]);
var inst_28714 = process(inst_28713);
var state_28723__$1 = state_28723;
if(cljs.core.truth_(inst_28714)){
var statearr_28728_28870 = state_28723__$1;
(statearr_28728_28870[(1)] = (5));

} else {
var statearr_28729_28871 = state_28723__$1;
(statearr_28729_28871[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28724 === (3))){
var inst_28721 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28723__$1,inst_28721);
} else {
if((state_val_28724 === (2))){
var state_28723__$1 = state_28723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28723__$1,(4),jobs);
} else {
if((state_val_28724 === (1))){
var state_28723__$1 = state_28723;
var statearr_28730_28872 = state_28723__$1;
(statearr_28730_28872[(2)] = null);

(statearr_28730_28872[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
});})(__28854,c__16610__auto___28866,G__28683_28855,n__4515__auto___28853,jobs,results,process,async))
;
return ((function (__28854,switch__16530__auto__,c__16610__auto___28866,G__28683_28855,n__4515__auto___28853,jobs,results,process,async){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_28734 = [null,null,null,null,null,null,null];
(statearr_28734[(0)] = state_machine__16531__auto__);

(statearr_28734[(1)] = (1));

return statearr_28734;
});
var state_machine__16531__auto____1 = (function (state_28723){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28723);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e28735){if((e28735 instanceof Object)){
var ex__16534__auto__ = e28735;
var statearr_28736_28873 = state_28723;
(statearr_28736_28873[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28723);

return cljs.core.constant$keyword$97;
} else {
throw e28735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__28874 = state_28723;
state_28723 = G__28874;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28723){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(__28854,switch__16530__auto__,c__16610__auto___28866,G__28683_28855,n__4515__auto___28853,jobs,results,process,async))
})();
var state__16612__auto__ = (function (){var statearr_28737 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_28737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___28866);

return statearr_28737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(__28854,c__16610__auto___28866,G__28683_28855,n__4515__auto___28853,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28875 = (__28854 + (1));
__28854 = G__28875;
continue;
} else {
}
break;
}

var c__16610__auto___28876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___28876,jobs,results,process,async){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___28876,jobs,results,process,async){
return (function (state_28759){
var state_val_28760 = (state_28759[(1)]);
if((state_val_28760 === (9))){
var inst_28752 = (state_28759[(2)]);
var state_28759__$1 = (function (){var statearr_28761 = state_28759;
(statearr_28761[(7)] = inst_28752);

return statearr_28761;
})();
var statearr_28762_28877 = state_28759__$1;
(statearr_28762_28877[(2)] = null);

(statearr_28762_28877[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28760 === (8))){
var inst_28745 = (state_28759[(8)]);
var inst_28750 = (state_28759[(2)]);
var state_28759__$1 = (function (){var statearr_28763 = state_28759;
(statearr_28763[(9)] = inst_28750);

return statearr_28763;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28759__$1,(9),results,inst_28745);
} else {
if((state_val_28760 === (7))){
var inst_28755 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28764_28878 = state_28759__$1;
(statearr_28764_28878[(2)] = inst_28755);

(statearr_28764_28878[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28760 === (6))){
var inst_28740 = (state_28759[(10)]);
var inst_28745 = (state_28759[(8)]);
var inst_28745__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28746 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28747 = [inst_28740,inst_28745__$1];
var inst_28748 = (new cljs.core.PersistentVector(null,2,(5),inst_28746,inst_28747,null));
var state_28759__$1 = (function (){var statearr_28765 = state_28759;
(statearr_28765[(8)] = inst_28745__$1);

return statearr_28765;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28759__$1,(8),jobs,inst_28748);
} else {
if((state_val_28760 === (5))){
var inst_28743 = cljs.core.async.close_BANG_(jobs);
var state_28759__$1 = state_28759;
var statearr_28766_28879 = state_28759__$1;
(statearr_28766_28879[(2)] = inst_28743);

(statearr_28766_28879[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28760 === (4))){
var inst_28740 = (state_28759[(10)]);
var inst_28740__$1 = (state_28759[(2)]);
var inst_28741 = (inst_28740__$1 == null);
var state_28759__$1 = (function (){var statearr_28767 = state_28759;
(statearr_28767[(10)] = inst_28740__$1);

return statearr_28767;
})();
if(cljs.core.truth_(inst_28741)){
var statearr_28768_28880 = state_28759__$1;
(statearr_28768_28880[(1)] = (5));

} else {
var statearr_28769_28881 = state_28759__$1;
(statearr_28769_28881[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28760 === (3))){
var inst_28757 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28759__$1,inst_28757);
} else {
if((state_val_28760 === (2))){
var state_28759__$1 = state_28759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28759__$1,(4),from);
} else {
if((state_val_28760 === (1))){
var state_28759__$1 = state_28759;
var statearr_28770_28882 = state_28759__$1;
(statearr_28770_28882[(2)] = null);

(statearr_28770_28882[(1)] = (2));


return cljs.core.constant$keyword$97;
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
});})(c__16610__auto___28876,jobs,results,process,async))
;
return ((function (switch__16530__auto__,c__16610__auto___28876,jobs,results,process,async){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_28774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28774[(0)] = state_machine__16531__auto__);

(statearr_28774[(1)] = (1));

return statearr_28774;
});
var state_machine__16531__auto____1 = (function (state_28759){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28759);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e28775){if((e28775 instanceof Object)){
var ex__16534__auto__ = e28775;
var statearr_28776_28883 = state_28759;
(statearr_28776_28883[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28759);

return cljs.core.constant$keyword$97;
} else {
throw e28775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__28884 = state_28759;
state_28759 = G__28884;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28759){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___28876,jobs,results,process,async))
})();
var state__16612__auto__ = (function (){var statearr_28777 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_28777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___28876);

return statearr_28777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___28876,jobs,results,process,async))
);


var c__16610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto__,jobs,results,process,async){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto__,jobs,results,process,async){
return (function (state_28815){
var state_val_28816 = (state_28815[(1)]);
if((state_val_28816 === (7))){
var inst_28811 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
var statearr_28817_28885 = state_28815__$1;
(statearr_28817_28885[(2)] = inst_28811);

(statearr_28817_28885[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (20))){
var state_28815__$1 = state_28815;
var statearr_28818_28886 = state_28815__$1;
(statearr_28818_28886[(2)] = null);

(statearr_28818_28886[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (1))){
var state_28815__$1 = state_28815;
var statearr_28819_28887 = state_28815__$1;
(statearr_28819_28887[(2)] = null);

(statearr_28819_28887[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (4))){
var inst_28780 = (state_28815[(7)]);
var inst_28780__$1 = (state_28815[(2)]);
var inst_28781 = (inst_28780__$1 == null);
var state_28815__$1 = (function (){var statearr_28820 = state_28815;
(statearr_28820[(7)] = inst_28780__$1);

return statearr_28820;
})();
if(cljs.core.truth_(inst_28781)){
var statearr_28821_28888 = state_28815__$1;
(statearr_28821_28888[(1)] = (5));

} else {
var statearr_28822_28889 = state_28815__$1;
(statearr_28822_28889[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (15))){
var inst_28793 = (state_28815[(8)]);
var state_28815__$1 = state_28815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28815__$1,(18),to,inst_28793);
} else {
if((state_val_28816 === (21))){
var inst_28806 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
var statearr_28823_28890 = state_28815__$1;
(statearr_28823_28890[(2)] = inst_28806);

(statearr_28823_28890[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (13))){
var inst_28808 = (state_28815[(2)]);
var state_28815__$1 = (function (){var statearr_28824 = state_28815;
(statearr_28824[(9)] = inst_28808);

return statearr_28824;
})();
var statearr_28825_28891 = state_28815__$1;
(statearr_28825_28891[(2)] = null);

(statearr_28825_28891[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (6))){
var inst_28780 = (state_28815[(7)]);
var state_28815__$1 = state_28815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28815__$1,(11),inst_28780);
} else {
if((state_val_28816 === (17))){
var inst_28801 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
if(cljs.core.truth_(inst_28801)){
var statearr_28826_28892 = state_28815__$1;
(statearr_28826_28892[(1)] = (19));

} else {
var statearr_28827_28893 = state_28815__$1;
(statearr_28827_28893[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (3))){
var inst_28813 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28815__$1,inst_28813);
} else {
if((state_val_28816 === (12))){
var inst_28790 = (state_28815[(10)]);
var state_28815__$1 = state_28815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28815__$1,(14),inst_28790);
} else {
if((state_val_28816 === (2))){
var state_28815__$1 = state_28815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28815__$1,(4),results);
} else {
if((state_val_28816 === (19))){
var state_28815__$1 = state_28815;
var statearr_28828_28894 = state_28815__$1;
(statearr_28828_28894[(2)] = null);

(statearr_28828_28894[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (11))){
var inst_28790 = (state_28815[(2)]);
var state_28815__$1 = (function (){var statearr_28829 = state_28815;
(statearr_28829[(10)] = inst_28790);

return statearr_28829;
})();
var statearr_28830_28895 = state_28815__$1;
(statearr_28830_28895[(2)] = null);

(statearr_28830_28895[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (9))){
var state_28815__$1 = state_28815;
var statearr_28831_28896 = state_28815__$1;
(statearr_28831_28896[(2)] = null);

(statearr_28831_28896[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (5))){
var state_28815__$1 = state_28815;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28832_28897 = state_28815__$1;
(statearr_28832_28897[(1)] = (8));

} else {
var statearr_28833_28898 = state_28815__$1;
(statearr_28833_28898[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (14))){
var inst_28793 = (state_28815[(8)]);
var inst_28795 = (state_28815[(11)]);
var inst_28793__$1 = (state_28815[(2)]);
var inst_28794 = (inst_28793__$1 == null);
var inst_28795__$1 = cljs.core.not(inst_28794);
var state_28815__$1 = (function (){var statearr_28834 = state_28815;
(statearr_28834[(8)] = inst_28793__$1);

(statearr_28834[(11)] = inst_28795__$1);

return statearr_28834;
})();
if(inst_28795__$1){
var statearr_28835_28899 = state_28815__$1;
(statearr_28835_28899[(1)] = (15));

} else {
var statearr_28836_28900 = state_28815__$1;
(statearr_28836_28900[(1)] = (16));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (16))){
var inst_28795 = (state_28815[(11)]);
var state_28815__$1 = state_28815;
var statearr_28837_28901 = state_28815__$1;
(statearr_28837_28901[(2)] = inst_28795);

(statearr_28837_28901[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (10))){
var inst_28787 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
var statearr_28838_28902 = state_28815__$1;
(statearr_28838_28902[(2)] = inst_28787);

(statearr_28838_28902[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (18))){
var inst_28798 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
var statearr_28839_28903 = state_28815__$1;
(statearr_28839_28903[(2)] = inst_28798);

(statearr_28839_28903[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28816 === (8))){
var inst_28784 = cljs.core.async.close_BANG_(to);
var state_28815__$1 = state_28815;
var statearr_28840_28904 = state_28815__$1;
(statearr_28840_28904[(2)] = inst_28784);

(statearr_28840_28904[(1)] = (10));


return cljs.core.constant$keyword$97;
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
});})(c__16610__auto__,jobs,results,process,async))
;
return ((function (switch__16530__auto__,c__16610__auto__,jobs,results,process,async){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_28844 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28844[(0)] = state_machine__16531__auto__);

(statearr_28844[(1)] = (1));

return statearr_28844;
});
var state_machine__16531__auto____1 = (function (state_28815){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28815);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e28845){if((e28845 instanceof Object)){
var ex__16534__auto__ = e28845;
var statearr_28846_28905 = state_28815;
(statearr_28846_28905[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28815);

return cljs.core.constant$keyword$97;
} else {
throw e28845;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__28906 = state_28815;
state_28815 = G__28906;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28815){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto__,jobs,results,process,async))
})();
var state__16612__auto__ = (function (){var statearr_28847 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_28847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_28847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto__,jobs,results,process,async))
);

return c__16610__auto__;
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$104);
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$105);
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
var c__16610__auto___29029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___29029,tc,fc){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___29029,tc,fc){
return (function (state_29003){
var state_val_29004 = (state_29003[(1)]);
if((state_val_29004 === (7))){
var inst_28999 = (state_29003[(2)]);
var state_29003__$1 = state_29003;
var statearr_29005_29030 = state_29003__$1;
(statearr_29005_29030[(2)] = inst_28999);

(statearr_29005_29030[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29004 === (1))){
var state_29003__$1 = state_29003;
var statearr_29006_29031 = state_29003__$1;
(statearr_29006_29031[(2)] = null);

(statearr_29006_29031[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29004 === (4))){
var inst_28980 = (state_29003[(7)]);
var inst_28980__$1 = (state_29003[(2)]);
var inst_28981 = (inst_28980__$1 == null);
var state_29003__$1 = (function (){var statearr_29007 = state_29003;
(statearr_29007[(7)] = inst_28980__$1);

return statearr_29007;
})();
if(cljs.core.truth_(inst_28981)){
var statearr_29008_29032 = state_29003__$1;
(statearr_29008_29032[(1)] = (5));

} else {
var statearr_29009_29033 = state_29003__$1;
(statearr_29009_29033[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29004 === (13))){
var state_29003__$1 = state_29003;
var statearr_29010_29034 = state_29003__$1;
(statearr_29010_29034[(2)] = null);

(statearr_29010_29034[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29004 === (6))){
var inst_28980 = (state_29003[(7)]);
var inst_28986 = (function (){var G__29011 = inst_28980;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__29011) : p.call(null,G__29011));
})();
var state_29003__$1 = state_29003;
if(cljs.core.truth_(inst_28986)){
var statearr_29012_29035 = state_29003__$1;
(statearr_29012_29035[(1)] = (9));

} else {
var statearr_29013_29036 = state_29003__$1;
(statearr_29013_29036[(1)] = (10));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29004 === (3))){
var inst_29001 = (state_29003[(2)]);
var state_29003__$1 = state_29003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29003__$1,inst_29001);
} else {
if((state_val_29004 === (12))){
var state_29003__$1 = state_29003;
var statearr_29014_29037 = state_29003__$1;
(statearr_29014_29037[(2)] = null);

(statearr_29014_29037[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29004 === (2))){
var state_29003__$1 = state_29003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29003__$1,(4),ch);
} else {
if((state_val_29004 === (11))){
var inst_28980 = (state_29003[(7)]);
var inst_28990 = (state_29003[(2)]);
var state_29003__$1 = state_29003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29003__$1,(8),inst_28990,inst_28980);
} else {
if((state_val_29004 === (9))){
var state_29003__$1 = state_29003;
var statearr_29015_29038 = state_29003__$1;
(statearr_29015_29038[(2)] = tc);

(statearr_29015_29038[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29004 === (5))){
var inst_28983 = cljs.core.async.close_BANG_(tc);
var inst_28984 = cljs.core.async.close_BANG_(fc);
var state_29003__$1 = (function (){var statearr_29016 = state_29003;
(statearr_29016[(8)] = inst_28983);

return statearr_29016;
})();
var statearr_29017_29039 = state_29003__$1;
(statearr_29017_29039[(2)] = inst_28984);

(statearr_29017_29039[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29004 === (14))){
var inst_28997 = (state_29003[(2)]);
var state_29003__$1 = state_29003;
var statearr_29018_29040 = state_29003__$1;
(statearr_29018_29040[(2)] = inst_28997);

(statearr_29018_29040[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29004 === (10))){
var state_29003__$1 = state_29003;
var statearr_29019_29041 = state_29003__$1;
(statearr_29019_29041[(2)] = fc);

(statearr_29019_29041[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29004 === (8))){
var inst_28992 = (state_29003[(2)]);
var state_29003__$1 = state_29003;
if(cljs.core.truth_(inst_28992)){
var statearr_29020_29042 = state_29003__$1;
(statearr_29020_29042[(1)] = (12));

} else {
var statearr_29021_29043 = state_29003__$1;
(statearr_29021_29043[(1)] = (13));

}

return cljs.core.constant$keyword$97;
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
});})(c__16610__auto___29029,tc,fc))
;
return ((function (switch__16530__auto__,c__16610__auto___29029,tc,fc){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_29025 = [null,null,null,null,null,null,null,null,null];
(statearr_29025[(0)] = state_machine__16531__auto__);

(statearr_29025[(1)] = (1));

return statearr_29025;
});
var state_machine__16531__auto____1 = (function (state_29003){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_29003);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e29026){if((e29026 instanceof Object)){
var ex__16534__auto__ = e29026;
var statearr_29027_29044 = state_29003;
(statearr_29027_29044[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29003);

return cljs.core.constant$keyword$97;
} else {
throw e29026;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__29045 = state_29003;
state_29003 = G__29045;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_29003){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_29003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___29029,tc,fc))
})();
var state__16612__auto__ = (function (){var statearr_29028 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_29028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___29029);

return statearr_29028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___29029,tc,fc))
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
var c__16610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto__){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto__){
return (function (state_29094){
var state_val_29095 = (state_29094[(1)]);
if((state_val_29095 === (7))){
var inst_29090 = (state_29094[(2)]);
var state_29094__$1 = state_29094;
var statearr_29096_29114 = state_29094__$1;
(statearr_29096_29114[(2)] = inst_29090);

(statearr_29096_29114[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29095 === (6))){
var inst_29083 = (state_29094[(7)]);
var inst_29080 = (state_29094[(8)]);
var inst_29087 = (function (){var G__29097 = inst_29080;
var G__29098 = inst_29083;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29097,G__29098) : f.call(null,G__29097,G__29098));
})();
var inst_29080__$1 = inst_29087;
var state_29094__$1 = (function (){var statearr_29099 = state_29094;
(statearr_29099[(8)] = inst_29080__$1);

return statearr_29099;
})();
var statearr_29100_29115 = state_29094__$1;
(statearr_29100_29115[(2)] = null);

(statearr_29100_29115[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29095 === (5))){
var inst_29080 = (state_29094[(8)]);
var state_29094__$1 = state_29094;
var statearr_29101_29116 = state_29094__$1;
(statearr_29101_29116[(2)] = inst_29080);

(statearr_29101_29116[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29095 === (4))){
var inst_29083 = (state_29094[(7)]);
var inst_29083__$1 = (state_29094[(2)]);
var inst_29084 = (inst_29083__$1 == null);
var state_29094__$1 = (function (){var statearr_29102 = state_29094;
(statearr_29102[(7)] = inst_29083__$1);

return statearr_29102;
})();
if(cljs.core.truth_(inst_29084)){
var statearr_29103_29117 = state_29094__$1;
(statearr_29103_29117[(1)] = (5));

} else {
var statearr_29104_29118 = state_29094__$1;
(statearr_29104_29118[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29095 === (3))){
var inst_29092 = (state_29094[(2)]);
var state_29094__$1 = state_29094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29094__$1,inst_29092);
} else {
if((state_val_29095 === (2))){
var state_29094__$1 = state_29094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29094__$1,(4),ch);
} else {
if((state_val_29095 === (1))){
var inst_29080 = init;
var state_29094__$1 = (function (){var statearr_29105 = state_29094;
(statearr_29105[(8)] = inst_29080);

return statearr_29105;
})();
var statearr_29106_29119 = state_29094__$1;
(statearr_29106_29119[(2)] = null);

(statearr_29106_29119[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
});})(c__16610__auto__))
;
return ((function (switch__16530__auto__,c__16610__auto__){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_29110 = [null,null,null,null,null,null,null,null,null];
(statearr_29110[(0)] = state_machine__16531__auto__);

(statearr_29110[(1)] = (1));

return statearr_29110;
});
var state_machine__16531__auto____1 = (function (state_29094){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_29094);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e29111){if((e29111 instanceof Object)){
var ex__16534__auto__ = e29111;
var statearr_29112_29120 = state_29094;
(statearr_29112_29120[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29094);

return cljs.core.constant$keyword$97;
} else {
throw e29111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__29121 = state_29094;
state_29094 = G__29121;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_29094){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_29094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto__))
})();
var state__16612__auto__ = (function (){var statearr_29113 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_29113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_29113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto__))
);

return c__16610__auto__;
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
var c__16610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto__){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto__){
return (function (state_29198){
var state_val_29199 = (state_29198[(1)]);
if((state_val_29199 === (7))){
var inst_29180 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29200_29223 = state_29198__$1;
(statearr_29200_29223[(2)] = inst_29180);

(statearr_29200_29223[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29199 === (1))){
var inst_29174 = cljs.core.seq(coll);
var inst_29175 = inst_29174;
var state_29198__$1 = (function (){var statearr_29201 = state_29198;
(statearr_29201[(7)] = inst_29175);

return statearr_29201;
})();
var statearr_29202_29224 = state_29198__$1;
(statearr_29202_29224[(2)] = null);

(statearr_29202_29224[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29199 === (4))){
var inst_29175 = (state_29198[(7)]);
var inst_29178 = cljs.core.first(inst_29175);
var state_29198__$1 = state_29198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29198__$1,(7),ch,inst_29178);
} else {
if((state_val_29199 === (13))){
var inst_29192 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29203_29225 = state_29198__$1;
(statearr_29203_29225[(2)] = inst_29192);

(statearr_29203_29225[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29199 === (6))){
var inst_29183 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
if(cljs.core.truth_(inst_29183)){
var statearr_29204_29226 = state_29198__$1;
(statearr_29204_29226[(1)] = (8));

} else {
var statearr_29205_29227 = state_29198__$1;
(statearr_29205_29227[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29199 === (3))){
var inst_29196 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29198__$1,inst_29196);
} else {
if((state_val_29199 === (12))){
var state_29198__$1 = state_29198;
var statearr_29206_29228 = state_29198__$1;
(statearr_29206_29228[(2)] = null);

(statearr_29206_29228[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29199 === (2))){
var inst_29175 = (state_29198[(7)]);
var state_29198__$1 = state_29198;
if(cljs.core.truth_(inst_29175)){
var statearr_29207_29229 = state_29198__$1;
(statearr_29207_29229[(1)] = (4));

} else {
var statearr_29208_29230 = state_29198__$1;
(statearr_29208_29230[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29199 === (11))){
var inst_29189 = cljs.core.async.close_BANG_(ch);
var state_29198__$1 = state_29198;
var statearr_29209_29231 = state_29198__$1;
(statearr_29209_29231[(2)] = inst_29189);

(statearr_29209_29231[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29199 === (9))){
var state_29198__$1 = state_29198;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29210_29232 = state_29198__$1;
(statearr_29210_29232[(1)] = (11));

} else {
var statearr_29211_29233 = state_29198__$1;
(statearr_29211_29233[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29199 === (5))){
var inst_29175 = (state_29198[(7)]);
var state_29198__$1 = state_29198;
var statearr_29212_29234 = state_29198__$1;
(statearr_29212_29234[(2)] = inst_29175);

(statearr_29212_29234[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29199 === (10))){
var inst_29194 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29213_29235 = state_29198__$1;
(statearr_29213_29235[(2)] = inst_29194);

(statearr_29213_29235[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29199 === (8))){
var inst_29175 = (state_29198[(7)]);
var inst_29185 = cljs.core.next(inst_29175);
var inst_29175__$1 = inst_29185;
var state_29198__$1 = (function (){var statearr_29214 = state_29198;
(statearr_29214[(7)] = inst_29175__$1);

return statearr_29214;
})();
var statearr_29215_29236 = state_29198__$1;
(statearr_29215_29236[(2)] = null);

(statearr_29215_29236[(1)] = (2));


return cljs.core.constant$keyword$97;
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
});})(c__16610__auto__))
;
return ((function (switch__16530__auto__,c__16610__auto__){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_29219 = [null,null,null,null,null,null,null,null];
(statearr_29219[(0)] = state_machine__16531__auto__);

(statearr_29219[(1)] = (1));

return statearr_29219;
});
var state_machine__16531__auto____1 = (function (state_29198){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_29198);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e29220){if((e29220 instanceof Object)){
var ex__16534__auto__ = e29220;
var statearr_29221_29237 = state_29198;
(statearr_29221_29237[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29198);

return cljs.core.constant$keyword$97;
} else {
throw e29220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__29238 = state_29198;
state_29198 = G__29238;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_29198){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_29198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto__))
})();
var state__16612__auto__ = (function (){var statearr_29222 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_29222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_29222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto__))
);

return c__16610__auto__;
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

cljs.core.async.Mux = (function (){var obj29240 = {};
return obj29240;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3616__auto__ = _;
if(and__3616__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4272__auto__ = (((_ == null))?null:_);
return (function (){var or__3628__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__29244 = x__4272__auto__;
return goog.typeOf(G__29244);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29246 = {};
return obj29246;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__29250 = x__4272__auto__;
return goog.typeOf(G__29250);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__29254 = x__4272__auto__;
return goog.typeOf(G__29254);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__29258 = x__4272__auto__;
return goog.typeOf(G__29258);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
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
var cs = (function (){var G__29488 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29488) : cljs.core.atom.call(null,G__29488));
})();
var m = (function (){
if(typeof cljs.core.async.t29489 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29489 = (function (cs,ch,mult,meta29490){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29490 = meta29490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29489.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29489.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29489.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29489.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__29492_29717 = self__.cs;
var G__29493_29718 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29492_29717,G__29493_29718) : cljs.core.reset_BANG_.call(null,G__29492_29717,G__29493_29718));

return null;
});})(cs))
;

cljs.core.async.t29489.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29491){
var self__ = this;
var _29491__$1 = this;
return self__.meta29490;
});})(cs))
;

cljs.core.async.t29489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29491,meta29490__$1){
var self__ = this;
var _29491__$1 = this;
return (new cljs.core.async.t29489(self__.cs,self__.ch,self__.mult,meta29490__$1));
});})(cs))
;

cljs.core.async.t29489.cljs$lang$type = true;

cljs.core.async.t29489.cljs$lang$ctorStr = "cljs.core.async/t29489";

cljs.core.async.t29489.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t29489");
});})(cs))
;

cljs.core.async.__GT_t29489 = ((function (cs){
return (function __GT_t29489(cs__$1,ch__$1,mult__$1,meta29490){
return (new cljs.core.async.t29489(cs__$1,ch__$1,mult__$1,meta29490));
});})(cs))
;

}

return (new cljs.core.async.t29489(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__29494 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29494) : cljs.core.atom.call(null,G__29494));
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
var c__16610__auto___29719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___29719,cs,m,dchan,dctr,done){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___29719,cs,m,dchan,dctr,done){
return (function (state_29625){
var state_val_29626 = (state_29625[(1)]);
if((state_val_29626 === (7))){
var inst_29621 = (state_29625[(2)]);
var state_29625__$1 = state_29625;
var statearr_29627_29720 = state_29625__$1;
(statearr_29627_29720[(2)] = inst_29621);

(statearr_29627_29720[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (20))){
var inst_29526 = (state_29625[(7)]);
var inst_29536 = cljs.core.first(inst_29526);
var inst_29537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29536,(0),null);
var inst_29538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29536,(1),null);
var state_29625__$1 = (function (){var statearr_29628 = state_29625;
(statearr_29628[(8)] = inst_29537);

return statearr_29628;
})();
if(cljs.core.truth_(inst_29538)){
var statearr_29629_29721 = state_29625__$1;
(statearr_29629_29721[(1)] = (22));

} else {
var statearr_29630_29722 = state_29625__$1;
(statearr_29630_29722[(1)] = (23));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (27))){
var inst_29568 = (state_29625[(9)]);
var inst_29497 = (state_29625[(10)]);
var inst_29573 = (state_29625[(11)]);
var inst_29566 = (state_29625[(12)]);
var inst_29573__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29566,inst_29568);
var inst_29574 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29573__$1,inst_29497,done);
var state_29625__$1 = (function (){var statearr_29631 = state_29625;
(statearr_29631[(11)] = inst_29573__$1);

return statearr_29631;
})();
if(cljs.core.truth_(inst_29574)){
var statearr_29632_29723 = state_29625__$1;
(statearr_29632_29723[(1)] = (30));

} else {
var statearr_29633_29724 = state_29625__$1;
(statearr_29633_29724[(1)] = (31));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (1))){
var state_29625__$1 = state_29625;
var statearr_29634_29725 = state_29625__$1;
(statearr_29634_29725[(2)] = null);

(statearr_29634_29725[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (24))){
var inst_29526 = (state_29625[(7)]);
var inst_29543 = (state_29625[(2)]);
var inst_29544 = cljs.core.next(inst_29526);
var inst_29506 = inst_29544;
var inst_29507 = null;
var inst_29508 = (0);
var inst_29509 = (0);
var state_29625__$1 = (function (){var statearr_29635 = state_29625;
(statearr_29635[(13)] = inst_29507);

(statearr_29635[(14)] = inst_29508);

(statearr_29635[(15)] = inst_29543);

(statearr_29635[(16)] = inst_29509);

(statearr_29635[(17)] = inst_29506);

return statearr_29635;
})();
var statearr_29636_29726 = state_29625__$1;
(statearr_29636_29726[(2)] = null);

(statearr_29636_29726[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (39))){
var state_29625__$1 = state_29625;
var statearr_29640_29727 = state_29625__$1;
(statearr_29640_29727[(2)] = null);

(statearr_29640_29727[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (4))){
var inst_29497 = (state_29625[(10)]);
var inst_29497__$1 = (state_29625[(2)]);
var inst_29498 = (inst_29497__$1 == null);
var state_29625__$1 = (function (){var statearr_29641 = state_29625;
(statearr_29641[(10)] = inst_29497__$1);

return statearr_29641;
})();
if(cljs.core.truth_(inst_29498)){
var statearr_29642_29728 = state_29625__$1;
(statearr_29642_29728[(1)] = (5));

} else {
var statearr_29643_29729 = state_29625__$1;
(statearr_29643_29729[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (15))){
var inst_29507 = (state_29625[(13)]);
var inst_29508 = (state_29625[(14)]);
var inst_29509 = (state_29625[(16)]);
var inst_29506 = (state_29625[(17)]);
var inst_29522 = (state_29625[(2)]);
var inst_29523 = (inst_29509 + (1));
var tmp29637 = inst_29507;
var tmp29638 = inst_29508;
var tmp29639 = inst_29506;
var inst_29506__$1 = tmp29639;
var inst_29507__$1 = tmp29637;
var inst_29508__$1 = tmp29638;
var inst_29509__$1 = inst_29523;
var state_29625__$1 = (function (){var statearr_29644 = state_29625;
(statearr_29644[(13)] = inst_29507__$1);

(statearr_29644[(18)] = inst_29522);

(statearr_29644[(14)] = inst_29508__$1);

(statearr_29644[(16)] = inst_29509__$1);

(statearr_29644[(17)] = inst_29506__$1);

return statearr_29644;
})();
var statearr_29645_29730 = state_29625__$1;
(statearr_29645_29730[(2)] = null);

(statearr_29645_29730[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (21))){
var inst_29547 = (state_29625[(2)]);
var state_29625__$1 = state_29625;
var statearr_29649_29731 = state_29625__$1;
(statearr_29649_29731[(2)] = inst_29547);

(statearr_29649_29731[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (31))){
var inst_29573 = (state_29625[(11)]);
var inst_29577 = done(null);
var inst_29578 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29573);
var state_29625__$1 = (function (){var statearr_29650 = state_29625;
(statearr_29650[(19)] = inst_29577);

return statearr_29650;
})();
var statearr_29651_29732 = state_29625__$1;
(statearr_29651_29732[(2)] = inst_29578);

(statearr_29651_29732[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (32))){
var inst_29565 = (state_29625[(20)]);
var inst_29568 = (state_29625[(9)]);
var inst_29567 = (state_29625[(21)]);
var inst_29566 = (state_29625[(12)]);
var inst_29580 = (state_29625[(2)]);
var inst_29581 = (inst_29568 + (1));
var tmp29646 = inst_29565;
var tmp29647 = inst_29567;
var tmp29648 = inst_29566;
var inst_29565__$1 = tmp29646;
var inst_29566__$1 = tmp29648;
var inst_29567__$1 = tmp29647;
var inst_29568__$1 = inst_29581;
var state_29625__$1 = (function (){var statearr_29652 = state_29625;
(statearr_29652[(20)] = inst_29565__$1);

(statearr_29652[(9)] = inst_29568__$1);

(statearr_29652[(21)] = inst_29567__$1);

(statearr_29652[(22)] = inst_29580);

(statearr_29652[(12)] = inst_29566__$1);

return statearr_29652;
})();
var statearr_29653_29733 = state_29625__$1;
(statearr_29653_29733[(2)] = null);

(statearr_29653_29733[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (40))){
var inst_29593 = (state_29625[(23)]);
var inst_29597 = done(null);
var inst_29598 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29593);
var state_29625__$1 = (function (){var statearr_29654 = state_29625;
(statearr_29654[(24)] = inst_29597);

return statearr_29654;
})();
var statearr_29655_29734 = state_29625__$1;
(statearr_29655_29734[(2)] = inst_29598);

(statearr_29655_29734[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (33))){
var inst_29584 = (state_29625[(25)]);
var inst_29586 = cljs.core.chunked_seq_QMARK_(inst_29584);
var state_29625__$1 = state_29625;
if(inst_29586){
var statearr_29656_29735 = state_29625__$1;
(statearr_29656_29735[(1)] = (36));

} else {
var statearr_29657_29736 = state_29625__$1;
(statearr_29657_29736[(1)] = (37));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (13))){
var inst_29516 = (state_29625[(26)]);
var inst_29519 = cljs.core.async.close_BANG_(inst_29516);
var state_29625__$1 = state_29625;
var statearr_29658_29737 = state_29625__$1;
(statearr_29658_29737[(2)] = inst_29519);

(statearr_29658_29737[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (22))){
var inst_29537 = (state_29625[(8)]);
var inst_29540 = cljs.core.async.close_BANG_(inst_29537);
var state_29625__$1 = state_29625;
var statearr_29659_29738 = state_29625__$1;
(statearr_29659_29738[(2)] = inst_29540);

(statearr_29659_29738[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (36))){
var inst_29584 = (state_29625[(25)]);
var inst_29588 = cljs.core.chunk_first(inst_29584);
var inst_29589 = cljs.core.chunk_rest(inst_29584);
var inst_29590 = cljs.core.count(inst_29588);
var inst_29565 = inst_29589;
var inst_29566 = inst_29588;
var inst_29567 = inst_29590;
var inst_29568 = (0);
var state_29625__$1 = (function (){var statearr_29660 = state_29625;
(statearr_29660[(20)] = inst_29565);

(statearr_29660[(9)] = inst_29568);

(statearr_29660[(21)] = inst_29567);

(statearr_29660[(12)] = inst_29566);

return statearr_29660;
})();
var statearr_29661_29739 = state_29625__$1;
(statearr_29661_29739[(2)] = null);

(statearr_29661_29739[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (41))){
var inst_29584 = (state_29625[(25)]);
var inst_29600 = (state_29625[(2)]);
var inst_29601 = cljs.core.next(inst_29584);
var inst_29565 = inst_29601;
var inst_29566 = null;
var inst_29567 = (0);
var inst_29568 = (0);
var state_29625__$1 = (function (){var statearr_29662 = state_29625;
(statearr_29662[(20)] = inst_29565);

(statearr_29662[(9)] = inst_29568);

(statearr_29662[(21)] = inst_29567);

(statearr_29662[(27)] = inst_29600);

(statearr_29662[(12)] = inst_29566);

return statearr_29662;
})();
var statearr_29663_29740 = state_29625__$1;
(statearr_29663_29740[(2)] = null);

(statearr_29663_29740[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (43))){
var state_29625__$1 = state_29625;
var statearr_29664_29741 = state_29625__$1;
(statearr_29664_29741[(2)] = null);

(statearr_29664_29741[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (29))){
var inst_29609 = (state_29625[(2)]);
var state_29625__$1 = state_29625;
var statearr_29665_29742 = state_29625__$1;
(statearr_29665_29742[(2)] = inst_29609);

(statearr_29665_29742[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (44))){
var inst_29618 = (state_29625[(2)]);
var state_29625__$1 = (function (){var statearr_29666 = state_29625;
(statearr_29666[(28)] = inst_29618);

return statearr_29666;
})();
var statearr_29667_29743 = state_29625__$1;
(statearr_29667_29743[(2)] = null);

(statearr_29667_29743[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (6))){
var inst_29557 = (state_29625[(29)]);
var inst_29556 = (function (){var G__29668 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29668) : cljs.core.deref.call(null,G__29668));
})();
var inst_29557__$1 = cljs.core.keys(inst_29556);
var inst_29558 = cljs.core.count(inst_29557__$1);
var inst_29559 = (function (){var G__29669 = dctr;
var G__29670 = inst_29558;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29669,G__29670) : cljs.core.reset_BANG_.call(null,G__29669,G__29670));
})();
var inst_29564 = cljs.core.seq(inst_29557__$1);
var inst_29565 = inst_29564;
var inst_29566 = null;
var inst_29567 = (0);
var inst_29568 = (0);
var state_29625__$1 = (function (){var statearr_29671 = state_29625;
(statearr_29671[(20)] = inst_29565);

(statearr_29671[(9)] = inst_29568);

(statearr_29671[(21)] = inst_29567);

(statearr_29671[(29)] = inst_29557__$1);

(statearr_29671[(12)] = inst_29566);

(statearr_29671[(30)] = inst_29559);

return statearr_29671;
})();
var statearr_29672_29744 = state_29625__$1;
(statearr_29672_29744[(2)] = null);

(statearr_29672_29744[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (28))){
var inst_29565 = (state_29625[(20)]);
var inst_29584 = (state_29625[(25)]);
var inst_29584__$1 = cljs.core.seq(inst_29565);
var state_29625__$1 = (function (){var statearr_29673 = state_29625;
(statearr_29673[(25)] = inst_29584__$1);

return statearr_29673;
})();
if(inst_29584__$1){
var statearr_29674_29745 = state_29625__$1;
(statearr_29674_29745[(1)] = (33));

} else {
var statearr_29675_29746 = state_29625__$1;
(statearr_29675_29746[(1)] = (34));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (25))){
var inst_29568 = (state_29625[(9)]);
var inst_29567 = (state_29625[(21)]);
var inst_29570 = (inst_29568 < inst_29567);
var inst_29571 = inst_29570;
var state_29625__$1 = state_29625;
if(cljs.core.truth_(inst_29571)){
var statearr_29676_29747 = state_29625__$1;
(statearr_29676_29747[(1)] = (27));

} else {
var statearr_29677_29748 = state_29625__$1;
(statearr_29677_29748[(1)] = (28));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (34))){
var state_29625__$1 = state_29625;
var statearr_29678_29749 = state_29625__$1;
(statearr_29678_29749[(2)] = null);

(statearr_29678_29749[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (17))){
var state_29625__$1 = state_29625;
var statearr_29679_29750 = state_29625__$1;
(statearr_29679_29750[(2)] = null);

(statearr_29679_29750[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (3))){
var inst_29623 = (state_29625[(2)]);
var state_29625__$1 = state_29625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29625__$1,inst_29623);
} else {
if((state_val_29626 === (12))){
var inst_29552 = (state_29625[(2)]);
var state_29625__$1 = state_29625;
var statearr_29680_29751 = state_29625__$1;
(statearr_29680_29751[(2)] = inst_29552);

(statearr_29680_29751[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (2))){
var state_29625__$1 = state_29625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29625__$1,(4),ch);
} else {
if((state_val_29626 === (23))){
var state_29625__$1 = state_29625;
var statearr_29681_29752 = state_29625__$1;
(statearr_29681_29752[(2)] = null);

(statearr_29681_29752[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (35))){
var inst_29607 = (state_29625[(2)]);
var state_29625__$1 = state_29625;
var statearr_29682_29753 = state_29625__$1;
(statearr_29682_29753[(2)] = inst_29607);

(statearr_29682_29753[(1)] = (29));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (19))){
var inst_29526 = (state_29625[(7)]);
var inst_29530 = cljs.core.chunk_first(inst_29526);
var inst_29531 = cljs.core.chunk_rest(inst_29526);
var inst_29532 = cljs.core.count(inst_29530);
var inst_29506 = inst_29531;
var inst_29507 = inst_29530;
var inst_29508 = inst_29532;
var inst_29509 = (0);
var state_29625__$1 = (function (){var statearr_29683 = state_29625;
(statearr_29683[(13)] = inst_29507);

(statearr_29683[(14)] = inst_29508);

(statearr_29683[(16)] = inst_29509);

(statearr_29683[(17)] = inst_29506);

return statearr_29683;
})();
var statearr_29684_29754 = state_29625__$1;
(statearr_29684_29754[(2)] = null);

(statearr_29684_29754[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (11))){
var inst_29506 = (state_29625[(17)]);
var inst_29526 = (state_29625[(7)]);
var inst_29526__$1 = cljs.core.seq(inst_29506);
var state_29625__$1 = (function (){var statearr_29685 = state_29625;
(statearr_29685[(7)] = inst_29526__$1);

return statearr_29685;
})();
if(inst_29526__$1){
var statearr_29686_29755 = state_29625__$1;
(statearr_29686_29755[(1)] = (16));

} else {
var statearr_29687_29756 = state_29625__$1;
(statearr_29687_29756[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (9))){
var inst_29554 = (state_29625[(2)]);
var state_29625__$1 = state_29625;
var statearr_29688_29757 = state_29625__$1;
(statearr_29688_29757[(2)] = inst_29554);

(statearr_29688_29757[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (5))){
var inst_29504 = (function (){var G__29689 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29689) : cljs.core.deref.call(null,G__29689));
})();
var inst_29505 = cljs.core.seq(inst_29504);
var inst_29506 = inst_29505;
var inst_29507 = null;
var inst_29508 = (0);
var inst_29509 = (0);
var state_29625__$1 = (function (){var statearr_29690 = state_29625;
(statearr_29690[(13)] = inst_29507);

(statearr_29690[(14)] = inst_29508);

(statearr_29690[(16)] = inst_29509);

(statearr_29690[(17)] = inst_29506);

return statearr_29690;
})();
var statearr_29691_29758 = state_29625__$1;
(statearr_29691_29758[(2)] = null);

(statearr_29691_29758[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (14))){
var state_29625__$1 = state_29625;
var statearr_29692_29759 = state_29625__$1;
(statearr_29692_29759[(2)] = null);

(statearr_29692_29759[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (45))){
var inst_29615 = (state_29625[(2)]);
var state_29625__$1 = state_29625;
var statearr_29693_29760 = state_29625__$1;
(statearr_29693_29760[(2)] = inst_29615);

(statearr_29693_29760[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (26))){
var inst_29557 = (state_29625[(29)]);
var inst_29611 = (state_29625[(2)]);
var inst_29612 = cljs.core.seq(inst_29557);
var state_29625__$1 = (function (){var statearr_29694 = state_29625;
(statearr_29694[(31)] = inst_29611);

return statearr_29694;
})();
if(inst_29612){
var statearr_29695_29761 = state_29625__$1;
(statearr_29695_29761[(1)] = (42));

} else {
var statearr_29696_29762 = state_29625__$1;
(statearr_29696_29762[(1)] = (43));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (16))){
var inst_29526 = (state_29625[(7)]);
var inst_29528 = cljs.core.chunked_seq_QMARK_(inst_29526);
var state_29625__$1 = state_29625;
if(inst_29528){
var statearr_29697_29763 = state_29625__$1;
(statearr_29697_29763[(1)] = (19));

} else {
var statearr_29698_29764 = state_29625__$1;
(statearr_29698_29764[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (38))){
var inst_29604 = (state_29625[(2)]);
var state_29625__$1 = state_29625;
var statearr_29699_29765 = state_29625__$1;
(statearr_29699_29765[(2)] = inst_29604);

(statearr_29699_29765[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (30))){
var state_29625__$1 = state_29625;
var statearr_29700_29766 = state_29625__$1;
(statearr_29700_29766[(2)] = null);

(statearr_29700_29766[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (10))){
var inst_29507 = (state_29625[(13)]);
var inst_29509 = (state_29625[(16)]);
var inst_29515 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29507,inst_29509);
var inst_29516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29515,(0),null);
var inst_29517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29515,(1),null);
var state_29625__$1 = (function (){var statearr_29701 = state_29625;
(statearr_29701[(26)] = inst_29516);

return statearr_29701;
})();
if(cljs.core.truth_(inst_29517)){
var statearr_29702_29767 = state_29625__$1;
(statearr_29702_29767[(1)] = (13));

} else {
var statearr_29703_29768 = state_29625__$1;
(statearr_29703_29768[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (18))){
var inst_29550 = (state_29625[(2)]);
var state_29625__$1 = state_29625;
var statearr_29704_29769 = state_29625__$1;
(statearr_29704_29769[(2)] = inst_29550);

(statearr_29704_29769[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (42))){
var state_29625__$1 = state_29625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29625__$1,(45),dchan);
} else {
if((state_val_29626 === (37))){
var inst_29497 = (state_29625[(10)]);
var inst_29593 = (state_29625[(23)]);
var inst_29584 = (state_29625[(25)]);
var inst_29593__$1 = cljs.core.first(inst_29584);
var inst_29594 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29593__$1,inst_29497,done);
var state_29625__$1 = (function (){var statearr_29705 = state_29625;
(statearr_29705[(23)] = inst_29593__$1);

return statearr_29705;
})();
if(cljs.core.truth_(inst_29594)){
var statearr_29706_29770 = state_29625__$1;
(statearr_29706_29770[(1)] = (39));

} else {
var statearr_29707_29771 = state_29625__$1;
(statearr_29707_29771[(1)] = (40));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29626 === (8))){
var inst_29508 = (state_29625[(14)]);
var inst_29509 = (state_29625[(16)]);
var inst_29511 = (inst_29509 < inst_29508);
var inst_29512 = inst_29511;
var state_29625__$1 = state_29625;
if(cljs.core.truth_(inst_29512)){
var statearr_29708_29772 = state_29625__$1;
(statearr_29708_29772[(1)] = (10));

} else {
var statearr_29709_29773 = state_29625__$1;
(statearr_29709_29773[(1)] = (11));

}

return cljs.core.constant$keyword$97;
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
});})(c__16610__auto___29719,cs,m,dchan,dctr,done))
;
return ((function (switch__16530__auto__,c__16610__auto___29719,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_29713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29713[(0)] = state_machine__16531__auto__);

(statearr_29713[(1)] = (1));

return statearr_29713;
});
var state_machine__16531__auto____1 = (function (state_29625){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_29625);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e29714){if((e29714 instanceof Object)){
var ex__16534__auto__ = e29714;
var statearr_29715_29774 = state_29625;
(statearr_29715_29774[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29625);

return cljs.core.constant$keyword$97;
} else {
throw e29714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__29775 = state_29625;
state_29625 = G__29775;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_29625){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_29625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___29719,cs,m,dchan,dctr,done))
})();
var state__16612__auto__ = (function (){var statearr_29716 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_29716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___29719);

return statearr_29716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___29719,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj29780 = {};
return obj29780;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__29784 = x__4272__auto__;
return goog.typeOf(G__29784);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__29788 = x__4272__auto__;
return goog.typeOf(G__29788);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__29792 = x__4272__auto__;
return goog.typeOf(G__29792);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__29796 = x__4272__auto__;
return goog.typeOf(G__29796);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__29800 = x__4272__auto__;
return goog.typeOf(G__29800);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__29801){
var map__29807 = p__29801;
var map__29807__$1 = ((cljs.core.seq_QMARK_(map__29807))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29807):map__29807);
var opts = map__29807__$1;
var statearr_29808_29812 = state;
(statearr_29808_29812[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__29807,map__29807__$1,opts){
return (function (val){
var statearr_29809_29813 = state;
(statearr_29809_29813[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__29807,map__29807__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_29810_29814 = state;
(statearr_29810_29814[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__29811 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29811) : cljs.core.deref.call(null,G__29811));
})());


return cljs.core.constant$keyword$97;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__29801 = null;
if (arguments.length > 3) {
  p__29801 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__29801);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__29815){
var state = cljs.core.first(arglist__29815);
arglist__29815 = cljs.core.next(arglist__29815);
var cont_block = cljs.core.first(arglist__29815);
arglist__29815 = cljs.core.next(arglist__29815);
var ports = cljs.core.first(arglist__29815);
var p__29801 = cljs.core.rest(arglist__29815);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__29801);
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
var cs = (function (){var G__29949 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29949) : cljs.core.atom.call(null,G__29949));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$108);
var solo_mode = (function (){var G__29950 = cljs.core.constant$keyword$107;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29950) : cljs.core.atom.call(null,G__29950));
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
if(cljs.core.truth_((function (){var G__29951 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__29951) : attr.call(null,G__29951));
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
var chs = (function (){var G__29952 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29952) : cljs.core.deref.call(null,G__29952));
})();
var mode = (function (){var G__29953 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29953) : cljs.core.deref.call(null,G__29953));
})();
var solos = pick(cljs.core.constant$keyword$108,chs);
var pauses = pick(cljs.core.constant$keyword$106,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$109,solos,cljs.core.constant$keyword$110,pick(cljs.core.constant$keyword$107,chs),cljs.core.constant$keyword$111,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$106)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29954 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29954 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29955){
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
this.meta29955 = meta29955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29954.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29954.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29954.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29954.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__29957_30082 = self__.cs;
var G__29958_30083 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29957_30082,G__29958_30083) : cljs.core.reset_BANG_.call(null,G__29957_30082,G__29958_30083));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29954.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29954.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__29959 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__29959) : self__.solo_modes.call(null,G__29959));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__29960_30084 = self__.solo_mode;
var G__29961_30085 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29960_30084,G__29961_30085) : cljs.core.reset_BANG_.call(null,G__29960_30084,G__29961_30085));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29954.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29956){
var self__ = this;
var _29956__$1 = this;
return self__.meta29955;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29956,meta29955__$1){
var self__ = this;
var _29956__$1 = this;
return (new cljs.core.async.t29954(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29955__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29954.cljs$lang$type = true;

cljs.core.async.t29954.cljs$lang$ctorStr = "cljs.core.async/t29954";

cljs.core.async.t29954.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t29954");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29954 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29954(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29955){
return (new cljs.core.async.t29954(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29955));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29954(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16610__auto___30086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___30086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___30086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30033){
var state_val_30034 = (state_30033[(1)]);
if((state_val_30034 === (7))){
var inst_29975 = (state_30033[(7)]);
var inst_29980 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29975);
var state_30033__$1 = state_30033;
var statearr_30035_30087 = state_30033__$1;
(statearr_30035_30087[(2)] = inst_29980);

(statearr_30035_30087[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (20))){
var inst_29990 = (state_30033[(8)]);
var state_30033__$1 = state_30033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30033__$1,(23),out,inst_29990);
} else {
if((state_val_30034 === (1))){
var inst_29965 = (state_30033[(9)]);
var inst_29965__$1 = calc_state();
var inst_29966 = cljs.core.seq_QMARK_(inst_29965__$1);
var state_30033__$1 = (function (){var statearr_30036 = state_30033;
(statearr_30036[(9)] = inst_29965__$1);

return statearr_30036;
})();
if(inst_29966){
var statearr_30037_30088 = state_30033__$1;
(statearr_30037_30088[(1)] = (2));

} else {
var statearr_30038_30089 = state_30033__$1;
(statearr_30038_30089[(1)] = (3));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (24))){
var inst_29983 = (state_30033[(10)]);
var inst_29975 = inst_29983;
var state_30033__$1 = (function (){var statearr_30039 = state_30033;
(statearr_30039[(7)] = inst_29975);

return statearr_30039;
})();
var statearr_30040_30090 = state_30033__$1;
(statearr_30040_30090[(2)] = null);

(statearr_30040_30090[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (4))){
var inst_29965 = (state_30033[(9)]);
var inst_29971 = (state_30033[(2)]);
var inst_29972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29971,cljs.core.constant$keyword$111);
var inst_29973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29971,cljs.core.constant$keyword$110);
var inst_29974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29971,cljs.core.constant$keyword$109);
var inst_29975 = inst_29965;
var state_30033__$1 = (function (){var statearr_30041 = state_30033;
(statearr_30041[(7)] = inst_29975);

(statearr_30041[(11)] = inst_29972);

(statearr_30041[(12)] = inst_29974);

(statearr_30041[(13)] = inst_29973);

return statearr_30041;
})();
var statearr_30042_30091 = state_30033__$1;
(statearr_30042_30091[(2)] = null);

(statearr_30042_30091[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (15))){
var state_30033__$1 = state_30033;
var statearr_30043_30092 = state_30033__$1;
(statearr_30043_30092[(2)] = null);

(statearr_30043_30092[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (21))){
var inst_29983 = (state_30033[(10)]);
var inst_29975 = inst_29983;
var state_30033__$1 = (function (){var statearr_30044 = state_30033;
(statearr_30044[(7)] = inst_29975);

return statearr_30044;
})();
var statearr_30045_30093 = state_30033__$1;
(statearr_30045_30093[(2)] = null);

(statearr_30045_30093[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (13))){
var inst_30029 = (state_30033[(2)]);
var state_30033__$1 = state_30033;
var statearr_30046_30094 = state_30033__$1;
(statearr_30046_30094[(2)] = inst_30029);

(statearr_30046_30094[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (22))){
var inst_30027 = (state_30033[(2)]);
var state_30033__$1 = state_30033;
var statearr_30047_30095 = state_30033__$1;
(statearr_30047_30095[(2)] = inst_30027);

(statearr_30047_30095[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (6))){
var inst_30031 = (state_30033[(2)]);
var state_30033__$1 = state_30033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30033__$1,inst_30031);
} else {
if((state_val_30034 === (25))){
var state_30033__$1 = state_30033;
var statearr_30048_30096 = state_30033__$1;
(statearr_30048_30096[(2)] = null);

(statearr_30048_30096[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (17))){
var inst_30006 = (state_30033[(14)]);
var state_30033__$1 = state_30033;
var statearr_30049_30097 = state_30033__$1;
(statearr_30049_30097[(2)] = inst_30006);

(statearr_30049_30097[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (3))){
var inst_29965 = (state_30033[(9)]);
var state_30033__$1 = state_30033;
var statearr_30050_30098 = state_30033__$1;
(statearr_30050_30098[(2)] = inst_29965);

(statearr_30050_30098[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (12))){
var inst_29991 = (state_30033[(15)]);
var inst_29986 = (state_30033[(16)]);
var inst_30006 = (state_30033[(14)]);
var inst_30006__$1 = (function (){var G__30051 = inst_29991;
return (inst_29986.cljs$core$IFn$_invoke$arity$1 ? inst_29986.cljs$core$IFn$_invoke$arity$1(G__30051) : inst_29986.call(null,G__30051));
})();
var state_30033__$1 = (function (){var statearr_30052 = state_30033;
(statearr_30052[(14)] = inst_30006__$1);

return statearr_30052;
})();
if(cljs.core.truth_(inst_30006__$1)){
var statearr_30053_30099 = state_30033__$1;
(statearr_30053_30099[(1)] = (17));

} else {
var statearr_30054_30100 = state_30033__$1;
(statearr_30054_30100[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (2))){
var inst_29965 = (state_30033[(9)]);
var inst_29968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29965);
var state_30033__$1 = state_30033;
var statearr_30055_30101 = state_30033__$1;
(statearr_30055_30101[(2)] = inst_29968);

(statearr_30055_30101[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (23))){
var inst_30018 = (state_30033[(2)]);
var state_30033__$1 = state_30033;
if(cljs.core.truth_(inst_30018)){
var statearr_30056_30102 = state_30033__$1;
(statearr_30056_30102[(1)] = (24));

} else {
var statearr_30057_30103 = state_30033__$1;
(statearr_30057_30103[(1)] = (25));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (19))){
var inst_30015 = (state_30033[(2)]);
var state_30033__$1 = state_30033;
if(cljs.core.truth_(inst_30015)){
var statearr_30058_30104 = state_30033__$1;
(statearr_30058_30104[(1)] = (20));

} else {
var statearr_30059_30105 = state_30033__$1;
(statearr_30059_30105[(1)] = (21));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (11))){
var inst_29990 = (state_30033[(8)]);
var inst_29996 = (inst_29990 == null);
var state_30033__$1 = state_30033;
if(cljs.core.truth_(inst_29996)){
var statearr_30060_30106 = state_30033__$1;
(statearr_30060_30106[(1)] = (14));

} else {
var statearr_30061_30107 = state_30033__$1;
(statearr_30061_30107[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (9))){
var inst_29983 = (state_30033[(10)]);
var inst_29983__$1 = (state_30033[(2)]);
var inst_29984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29983__$1,cljs.core.constant$keyword$111);
var inst_29985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29983__$1,cljs.core.constant$keyword$110);
var inst_29986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29983__$1,cljs.core.constant$keyword$109);
var state_30033__$1 = (function (){var statearr_30062 = state_30033;
(statearr_30062[(16)] = inst_29986);

(statearr_30062[(17)] = inst_29985);

(statearr_30062[(10)] = inst_29983__$1);

return statearr_30062;
})();
return cljs.core.async.ioc_alts_BANG_(state_30033__$1,(10),inst_29984);
} else {
if((state_val_30034 === (5))){
var inst_29975 = (state_30033[(7)]);
var inst_29978 = cljs.core.seq_QMARK_(inst_29975);
var state_30033__$1 = state_30033;
if(inst_29978){
var statearr_30063_30108 = state_30033__$1;
(statearr_30063_30108[(1)] = (7));

} else {
var statearr_30064_30109 = state_30033__$1;
(statearr_30064_30109[(1)] = (8));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (14))){
var inst_29991 = (state_30033[(15)]);
var inst_29998 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29991);
var state_30033__$1 = state_30033;
var statearr_30065_30110 = state_30033__$1;
(statearr_30065_30110[(2)] = inst_29998);

(statearr_30065_30110[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (26))){
var inst_30023 = (state_30033[(2)]);
var state_30033__$1 = state_30033;
var statearr_30066_30111 = state_30033__$1;
(statearr_30066_30111[(2)] = inst_30023);

(statearr_30066_30111[(1)] = (22));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (16))){
var inst_30001 = (state_30033[(2)]);
var inst_30002 = calc_state();
var inst_29975 = inst_30002;
var state_30033__$1 = (function (){var statearr_30067 = state_30033;
(statearr_30067[(18)] = inst_30001);

(statearr_30067[(7)] = inst_29975);

return statearr_30067;
})();
var statearr_30068_30112 = state_30033__$1;
(statearr_30068_30112[(2)] = null);

(statearr_30068_30112[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (10))){
var inst_29991 = (state_30033[(15)]);
var inst_29990 = (state_30033[(8)]);
var inst_29989 = (state_30033[(2)]);
var inst_29990__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29989,(0),null);
var inst_29991__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29989,(1),null);
var inst_29992 = (inst_29990__$1 == null);
var inst_29993 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29991__$1,change);
var inst_29994 = (inst_29992) || (inst_29993);
var state_30033__$1 = (function (){var statearr_30069 = state_30033;
(statearr_30069[(15)] = inst_29991__$1);

(statearr_30069[(8)] = inst_29990__$1);

return statearr_30069;
})();
if(cljs.core.truth_(inst_29994)){
var statearr_30070_30113 = state_30033__$1;
(statearr_30070_30113[(1)] = (11));

} else {
var statearr_30071_30114 = state_30033__$1;
(statearr_30071_30114[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (18))){
var inst_29991 = (state_30033[(15)]);
var inst_29986 = (state_30033[(16)]);
var inst_29985 = (state_30033[(17)]);
var inst_30010 = cljs.core.empty_QMARK_(inst_29986);
var inst_30011 = (function (){var G__30072 = inst_29991;
return (inst_29985.cljs$core$IFn$_invoke$arity$1 ? inst_29985.cljs$core$IFn$_invoke$arity$1(G__30072) : inst_29985.call(null,G__30072));
})();
var inst_30012 = cljs.core.not(inst_30011);
var inst_30013 = (inst_30010) && (inst_30012);
var state_30033__$1 = state_30033;
var statearr_30073_30115 = state_30033__$1;
(statearr_30073_30115[(2)] = inst_30013);

(statearr_30073_30115[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30034 === (8))){
var inst_29975 = (state_30033[(7)]);
var state_30033__$1 = state_30033;
var statearr_30074_30116 = state_30033__$1;
(statearr_30074_30116[(2)] = inst_29975);

(statearr_30074_30116[(1)] = (9));


return cljs.core.constant$keyword$97;
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
});})(c__16610__auto___30086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16530__auto__,c__16610__auto___30086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_30078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30078[(0)] = state_machine__16531__auto__);

(statearr_30078[(1)] = (1));

return statearr_30078;
});
var state_machine__16531__auto____1 = (function (state_30033){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_30033);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e30079){if((e30079 instanceof Object)){
var ex__16534__auto__ = e30079;
var statearr_30080_30117 = state_30033;
(statearr_30080_30117[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30033);

return cljs.core.constant$keyword$97;
} else {
throw e30079;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__30118 = state_30033;
state_30033 = G__30118;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_30033){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_30033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___30086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16612__auto__ = (function (){var statearr_30081 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_30081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___30086);

return statearr_30081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___30086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj30120 = {};
return obj30120;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3616__auto__ = p;
if(and__3616__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3616__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4272__auto__ = (((p == null))?null:p);
return (function (){var or__3628__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__30124 = x__4272__auto__;
return goog.typeOf(G__30124);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3616__auto__ = p;
if(and__3616__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4272__auto__ = (((p == null))?null:p);
return (function (){var or__3628__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__30128 = x__4272__auto__;
return goog.typeOf(G__30128);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
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
if((function (){var and__3616__auto__ = p;
if(and__3616__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4272__auto__ = (((p == null))?null:p);
return (function (){var or__3628__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__30134 = x__4272__auto__;
return goog.typeOf(G__30134);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3616__auto__ = p;
if(and__3616__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4272__auto__ = (((p == null))?null:p);
return (function (){var or__3628__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__30136 = x__4272__auto__;
return goog.typeOf(G__30136);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
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
var mults = (function (){var G__30275 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30275) : cljs.core.atom.call(null,G__30275));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3628__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30277 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30277) : cljs.core.deref.call(null,G__30277));
})(),topic);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3628__auto__,mults){
return (function (p1__30137_SHARP_){
if(cljs.core.truth_((function (){var G__30278 = topic;
return (p1__30137_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30137_SHARP_.cljs$core$IFn$_invoke$arity$1(G__30278) : p1__30137_SHARP_.call(null,G__30278));
})())){
return p1__30137_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30137_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__30279 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__30279) : buf_fn.call(null,G__30279));
})())));
}
});})(or__3628__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30280 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30280 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30281){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30281 = meta30281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30280.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30280.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__30283 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__30283) : self__.ensure_mult.call(null,G__30283));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30280.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30284 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30284) : cljs.core.deref.call(null,G__30284));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30280.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30285 = self__.mults;
var G__30286 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30285,G__30286) : cljs.core.reset_BANG_.call(null,G__30285,G__30286));
});})(mults,ensure_mult))
;

cljs.core.async.t30280.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30280.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30282){
var self__ = this;
var _30282__$1 = this;
return self__.meta30281;
});})(mults,ensure_mult))
;

cljs.core.async.t30280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30282,meta30281__$1){
var self__ = this;
var _30282__$1 = this;
return (new cljs.core.async.t30280(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30281__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30280.cljs$lang$type = true;

cljs.core.async.t30280.cljs$lang$ctorStr = "cljs.core.async/t30280";

cljs.core.async.t30280.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t30280");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30280 = ((function (mults,ensure_mult){
return (function __GT_t30280(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30281){
return (new cljs.core.async.t30280(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30281));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30280(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16610__auto___30409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___30409,mults,ensure_mult,p){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___30409,mults,ensure_mult,p){
return (function (state_30358){
var state_val_30359 = (state_30358[(1)]);
if((state_val_30359 === (7))){
var inst_30354 = (state_30358[(2)]);
var state_30358__$1 = state_30358;
var statearr_30360_30410 = state_30358__$1;
(statearr_30360_30410[(2)] = inst_30354);

(statearr_30360_30410[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (20))){
var state_30358__$1 = state_30358;
var statearr_30361_30411 = state_30358__$1;
(statearr_30361_30411[(2)] = null);

(statearr_30361_30411[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (1))){
var state_30358__$1 = state_30358;
var statearr_30362_30412 = state_30358__$1;
(statearr_30362_30412[(2)] = null);

(statearr_30362_30412[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (24))){
var inst_30337 = (state_30358[(7)]);
var inst_30346 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30337);
var state_30358__$1 = state_30358;
var statearr_30363_30413 = state_30358__$1;
(statearr_30363_30413[(2)] = inst_30346);

(statearr_30363_30413[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (4))){
var inst_30289 = (state_30358[(8)]);
var inst_30289__$1 = (state_30358[(2)]);
var inst_30290 = (inst_30289__$1 == null);
var state_30358__$1 = (function (){var statearr_30364 = state_30358;
(statearr_30364[(8)] = inst_30289__$1);

return statearr_30364;
})();
if(cljs.core.truth_(inst_30290)){
var statearr_30365_30414 = state_30358__$1;
(statearr_30365_30414[(1)] = (5));

} else {
var statearr_30366_30415 = state_30358__$1;
(statearr_30366_30415[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (15))){
var inst_30331 = (state_30358[(2)]);
var state_30358__$1 = state_30358;
var statearr_30367_30416 = state_30358__$1;
(statearr_30367_30416[(2)] = inst_30331);

(statearr_30367_30416[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (21))){
var inst_30351 = (state_30358[(2)]);
var state_30358__$1 = (function (){var statearr_30368 = state_30358;
(statearr_30368[(9)] = inst_30351);

return statearr_30368;
})();
var statearr_30369_30417 = state_30358__$1;
(statearr_30369_30417[(2)] = null);

(statearr_30369_30417[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (13))){
var inst_30313 = (state_30358[(10)]);
var inst_30315 = cljs.core.chunked_seq_QMARK_(inst_30313);
var state_30358__$1 = state_30358;
if(inst_30315){
var statearr_30370_30418 = state_30358__$1;
(statearr_30370_30418[(1)] = (16));

} else {
var statearr_30371_30419 = state_30358__$1;
(statearr_30371_30419[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (22))){
var inst_30343 = (state_30358[(2)]);
var state_30358__$1 = state_30358;
if(cljs.core.truth_(inst_30343)){
var statearr_30372_30420 = state_30358__$1;
(statearr_30372_30420[(1)] = (23));

} else {
var statearr_30373_30421 = state_30358__$1;
(statearr_30373_30421[(1)] = (24));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (6))){
var inst_30337 = (state_30358[(7)]);
var inst_30339 = (state_30358[(11)]);
var inst_30289 = (state_30358[(8)]);
var inst_30337__$1 = (function (){var G__30374 = inst_30289;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__30374) : topic_fn.call(null,G__30374));
})();
var inst_30338 = (function (){var G__30375 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30375) : cljs.core.deref.call(null,G__30375));
})();
var inst_30339__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30338,inst_30337__$1);
var state_30358__$1 = (function (){var statearr_30376 = state_30358;
(statearr_30376[(7)] = inst_30337__$1);

(statearr_30376[(11)] = inst_30339__$1);

return statearr_30376;
})();
if(cljs.core.truth_(inst_30339__$1)){
var statearr_30377_30422 = state_30358__$1;
(statearr_30377_30422[(1)] = (19));

} else {
var statearr_30378_30423 = state_30358__$1;
(statearr_30378_30423[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (25))){
var inst_30348 = (state_30358[(2)]);
var state_30358__$1 = state_30358;
var statearr_30379_30424 = state_30358__$1;
(statearr_30379_30424[(2)] = inst_30348);

(statearr_30379_30424[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (17))){
var inst_30313 = (state_30358[(10)]);
var inst_30322 = cljs.core.first(inst_30313);
var inst_30323 = cljs.core.async.muxch_STAR_(inst_30322);
var inst_30324 = cljs.core.async.close_BANG_(inst_30323);
var inst_30325 = cljs.core.next(inst_30313);
var inst_30299 = inst_30325;
var inst_30300 = null;
var inst_30301 = (0);
var inst_30302 = (0);
var state_30358__$1 = (function (){var statearr_30380 = state_30358;
(statearr_30380[(12)] = inst_30301);

(statearr_30380[(13)] = inst_30300);

(statearr_30380[(14)] = inst_30324);

(statearr_30380[(15)] = inst_30302);

(statearr_30380[(16)] = inst_30299);

return statearr_30380;
})();
var statearr_30381_30425 = state_30358__$1;
(statearr_30381_30425[(2)] = null);

(statearr_30381_30425[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (3))){
var inst_30356 = (state_30358[(2)]);
var state_30358__$1 = state_30358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30358__$1,inst_30356);
} else {
if((state_val_30359 === (12))){
var inst_30333 = (state_30358[(2)]);
var state_30358__$1 = state_30358;
var statearr_30382_30426 = state_30358__$1;
(statearr_30382_30426[(2)] = inst_30333);

(statearr_30382_30426[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (2))){
var state_30358__$1 = state_30358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30358__$1,(4),ch);
} else {
if((state_val_30359 === (23))){
var state_30358__$1 = state_30358;
var statearr_30383_30427 = state_30358__$1;
(statearr_30383_30427[(2)] = null);

(statearr_30383_30427[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (19))){
var inst_30339 = (state_30358[(11)]);
var inst_30289 = (state_30358[(8)]);
var inst_30341 = cljs.core.async.muxch_STAR_(inst_30339);
var state_30358__$1 = state_30358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30358__$1,(22),inst_30341,inst_30289);
} else {
if((state_val_30359 === (11))){
var inst_30313 = (state_30358[(10)]);
var inst_30299 = (state_30358[(16)]);
var inst_30313__$1 = cljs.core.seq(inst_30299);
var state_30358__$1 = (function (){var statearr_30384 = state_30358;
(statearr_30384[(10)] = inst_30313__$1);

return statearr_30384;
})();
if(inst_30313__$1){
var statearr_30385_30428 = state_30358__$1;
(statearr_30385_30428[(1)] = (13));

} else {
var statearr_30386_30429 = state_30358__$1;
(statearr_30386_30429[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (9))){
var inst_30335 = (state_30358[(2)]);
var state_30358__$1 = state_30358;
var statearr_30387_30430 = state_30358__$1;
(statearr_30387_30430[(2)] = inst_30335);

(statearr_30387_30430[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (5))){
var inst_30296 = (function (){var G__30388 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30388) : cljs.core.deref.call(null,G__30388));
})();
var inst_30297 = cljs.core.vals(inst_30296);
var inst_30298 = cljs.core.seq(inst_30297);
var inst_30299 = inst_30298;
var inst_30300 = null;
var inst_30301 = (0);
var inst_30302 = (0);
var state_30358__$1 = (function (){var statearr_30389 = state_30358;
(statearr_30389[(12)] = inst_30301);

(statearr_30389[(13)] = inst_30300);

(statearr_30389[(15)] = inst_30302);

(statearr_30389[(16)] = inst_30299);

return statearr_30389;
})();
var statearr_30390_30431 = state_30358__$1;
(statearr_30390_30431[(2)] = null);

(statearr_30390_30431[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (14))){
var state_30358__$1 = state_30358;
var statearr_30394_30432 = state_30358__$1;
(statearr_30394_30432[(2)] = null);

(statearr_30394_30432[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (16))){
var inst_30313 = (state_30358[(10)]);
var inst_30317 = cljs.core.chunk_first(inst_30313);
var inst_30318 = cljs.core.chunk_rest(inst_30313);
var inst_30319 = cljs.core.count(inst_30317);
var inst_30299 = inst_30318;
var inst_30300 = inst_30317;
var inst_30301 = inst_30319;
var inst_30302 = (0);
var state_30358__$1 = (function (){var statearr_30395 = state_30358;
(statearr_30395[(12)] = inst_30301);

(statearr_30395[(13)] = inst_30300);

(statearr_30395[(15)] = inst_30302);

(statearr_30395[(16)] = inst_30299);

return statearr_30395;
})();
var statearr_30396_30433 = state_30358__$1;
(statearr_30396_30433[(2)] = null);

(statearr_30396_30433[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (10))){
var inst_30301 = (state_30358[(12)]);
var inst_30300 = (state_30358[(13)]);
var inst_30302 = (state_30358[(15)]);
var inst_30299 = (state_30358[(16)]);
var inst_30307 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30300,inst_30302);
var inst_30308 = cljs.core.async.muxch_STAR_(inst_30307);
var inst_30309 = cljs.core.async.close_BANG_(inst_30308);
var inst_30310 = (inst_30302 + (1));
var tmp30391 = inst_30301;
var tmp30392 = inst_30300;
var tmp30393 = inst_30299;
var inst_30299__$1 = tmp30393;
var inst_30300__$1 = tmp30392;
var inst_30301__$1 = tmp30391;
var inst_30302__$1 = inst_30310;
var state_30358__$1 = (function (){var statearr_30397 = state_30358;
(statearr_30397[(17)] = inst_30309);

(statearr_30397[(12)] = inst_30301__$1);

(statearr_30397[(13)] = inst_30300__$1);

(statearr_30397[(15)] = inst_30302__$1);

(statearr_30397[(16)] = inst_30299__$1);

return statearr_30397;
})();
var statearr_30398_30434 = state_30358__$1;
(statearr_30398_30434[(2)] = null);

(statearr_30398_30434[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (18))){
var inst_30328 = (state_30358[(2)]);
var state_30358__$1 = state_30358;
var statearr_30399_30435 = state_30358__$1;
(statearr_30399_30435[(2)] = inst_30328);

(statearr_30399_30435[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30359 === (8))){
var inst_30301 = (state_30358[(12)]);
var inst_30302 = (state_30358[(15)]);
var inst_30304 = (inst_30302 < inst_30301);
var inst_30305 = inst_30304;
var state_30358__$1 = state_30358;
if(cljs.core.truth_(inst_30305)){
var statearr_30400_30436 = state_30358__$1;
(statearr_30400_30436[(1)] = (10));

} else {
var statearr_30401_30437 = state_30358__$1;
(statearr_30401_30437[(1)] = (11));

}

return cljs.core.constant$keyword$97;
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
});})(c__16610__auto___30409,mults,ensure_mult,p))
;
return ((function (switch__16530__auto__,c__16610__auto___30409,mults,ensure_mult,p){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_30405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30405[(0)] = state_machine__16531__auto__);

(statearr_30405[(1)] = (1));

return statearr_30405;
});
var state_machine__16531__auto____1 = (function (state_30358){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_30358);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e30406){if((e30406 instanceof Object)){
var ex__16534__auto__ = e30406;
var statearr_30407_30438 = state_30358;
(statearr_30407_30438[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30358);

return cljs.core.constant$keyword$97;
} else {
throw e30406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__30439 = state_30358;
state_30358 = G__30439;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_30358){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_30358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___30409,mults,ensure_mult,p))
})();
var state__16612__auto__ = (function (){var statearr_30408 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_30408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___30409);

return statearr_30408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___30409,mults,ensure_mult,p))
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
var dctr = (function (){var G__30520 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30520) : cljs.core.atom.call(null,G__30520));
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
var c__16610__auto___30593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___30593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___30593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30559){
var state_val_30560 = (state_30559[(1)]);
if((state_val_30560 === (7))){
var state_30559__$1 = state_30559;
var statearr_30561_30594 = state_30559__$1;
(statearr_30561_30594[(2)] = null);

(statearr_30561_30594[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30560 === (1))){
var state_30559__$1 = state_30559;
var statearr_30562_30595 = state_30559__$1;
(statearr_30562_30595[(2)] = null);

(statearr_30562_30595[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30560 === (4))){
var inst_30523 = (state_30559[(7)]);
var inst_30525 = (inst_30523 < cnt);
var state_30559__$1 = state_30559;
if(cljs.core.truth_(inst_30525)){
var statearr_30563_30596 = state_30559__$1;
(statearr_30563_30596[(1)] = (6));

} else {
var statearr_30564_30597 = state_30559__$1;
(statearr_30564_30597[(1)] = (7));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30560 === (15))){
var inst_30555 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30565_30598 = state_30559__$1;
(statearr_30565_30598[(2)] = inst_30555);

(statearr_30565_30598[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30560 === (13))){
var inst_30548 = cljs.core.async.close_BANG_(out);
var state_30559__$1 = state_30559;
var statearr_30566_30599 = state_30559__$1;
(statearr_30566_30599[(2)] = inst_30548);

(statearr_30566_30599[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30560 === (6))){
var state_30559__$1 = state_30559;
var statearr_30567_30600 = state_30559__$1;
(statearr_30567_30600[(2)] = null);

(statearr_30567_30600[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30560 === (3))){
var inst_30557 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30559__$1,inst_30557);
} else {
if((state_val_30560 === (12))){
var inst_30545 = (state_30559[(8)]);
var inst_30545__$1 = (state_30559[(2)]);
var inst_30546 = cljs.core.some(cljs.core.nil_QMARK_,inst_30545__$1);
var state_30559__$1 = (function (){var statearr_30568 = state_30559;
(statearr_30568[(8)] = inst_30545__$1);

return statearr_30568;
})();
if(cljs.core.truth_(inst_30546)){
var statearr_30569_30601 = state_30559__$1;
(statearr_30569_30601[(1)] = (13));

} else {
var statearr_30570_30602 = state_30559__$1;
(statearr_30570_30602[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30560 === (2))){
var inst_30522 = (function (){var G__30571 = dctr;
var G__30572 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30571,G__30572) : cljs.core.reset_BANG_.call(null,G__30571,G__30572));
})();
var inst_30523 = (0);
var state_30559__$1 = (function (){var statearr_30573 = state_30559;
(statearr_30573[(9)] = inst_30522);

(statearr_30573[(7)] = inst_30523);

return statearr_30573;
})();
var statearr_30574_30603 = state_30559__$1;
(statearr_30574_30603[(2)] = null);

(statearr_30574_30603[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30560 === (11))){
var inst_30523 = (state_30559[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30559,(10),Object,null,(9));
var inst_30532 = (function (){var G__30575 = inst_30523;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__30575) : chs__$1.call(null,G__30575));
})();
var inst_30533 = (function (){var G__30576 = inst_30523;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__30576) : done.call(null,G__30576));
})();
var inst_30534 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30532,inst_30533);
var state_30559__$1 = state_30559;
var statearr_30577_30604 = state_30559__$1;
(statearr_30577_30604[(2)] = inst_30534);


cljs.core.async.impl.ioc_helpers.process_exception(state_30559__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_30560 === (9))){
var inst_30523 = (state_30559[(7)]);
var inst_30536 = (state_30559[(2)]);
var inst_30537 = (inst_30523 + (1));
var inst_30523__$1 = inst_30537;
var state_30559__$1 = (function (){var statearr_30578 = state_30559;
(statearr_30578[(7)] = inst_30523__$1);

(statearr_30578[(10)] = inst_30536);

return statearr_30578;
})();
var statearr_30579_30605 = state_30559__$1;
(statearr_30579_30605[(2)] = null);

(statearr_30579_30605[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30560 === (5))){
var inst_30543 = (state_30559[(2)]);
var state_30559__$1 = (function (){var statearr_30580 = state_30559;
(statearr_30580[(11)] = inst_30543);

return statearr_30580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30559__$1,(12),dchan);
} else {
if((state_val_30560 === (14))){
var inst_30545 = (state_30559[(8)]);
var inst_30550 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30545);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30559__$1,(16),out,inst_30550);
} else {
if((state_val_30560 === (16))){
var inst_30552 = (state_30559[(2)]);
var state_30559__$1 = (function (){var statearr_30581 = state_30559;
(statearr_30581[(12)] = inst_30552);

return statearr_30581;
})();
var statearr_30582_30606 = state_30559__$1;
(statearr_30582_30606[(2)] = null);

(statearr_30582_30606[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30560 === (10))){
var inst_30527 = (state_30559[(2)]);
var inst_30528 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30559__$1 = (function (){var statearr_30583 = state_30559;
(statearr_30583[(13)] = inst_30527);

return statearr_30583;
})();
var statearr_30584_30607 = state_30559__$1;
(statearr_30584_30607[(2)] = inst_30528);


cljs.core.async.impl.ioc_helpers.process_exception(state_30559__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_30560 === (8))){
var inst_30541 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30585_30608 = state_30559__$1;
(statearr_30585_30608[(2)] = inst_30541);

(statearr_30585_30608[(1)] = (5));


return cljs.core.constant$keyword$97;
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
});})(c__16610__auto___30593,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16530__auto__,c__16610__auto___30593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_30589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30589[(0)] = state_machine__16531__auto__);

(statearr_30589[(1)] = (1));

return statearr_30589;
});
var state_machine__16531__auto____1 = (function (state_30559){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_30559);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e30590){if((e30590 instanceof Object)){
var ex__16534__auto__ = e30590;
var statearr_30591_30609 = state_30559;
(statearr_30591_30609[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30559);

return cljs.core.constant$keyword$97;
} else {
throw e30590;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__30610 = state_30559;
state_30559 = G__30610;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_30559){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_30559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___30593,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16612__auto__ = (function (){var statearr_30592 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_30592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___30593);

return statearr_30592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___30593,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__16610__auto___30720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___30720,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___30720,out){
return (function (state_30696){
var state_val_30697 = (state_30696[(1)]);
if((state_val_30697 === (7))){
var inst_30675 = (state_30696[(7)]);
var inst_30676 = (state_30696[(8)]);
var inst_30675__$1 = (state_30696[(2)]);
var inst_30676__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30675__$1,(0),null);
var inst_30677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30675__$1,(1),null);
var inst_30678 = (inst_30676__$1 == null);
var state_30696__$1 = (function (){var statearr_30698 = state_30696;
(statearr_30698[(9)] = inst_30677);

(statearr_30698[(7)] = inst_30675__$1);

(statearr_30698[(8)] = inst_30676__$1);

return statearr_30698;
})();
if(cljs.core.truth_(inst_30678)){
var statearr_30699_30721 = state_30696__$1;
(statearr_30699_30721[(1)] = (8));

} else {
var statearr_30700_30722 = state_30696__$1;
(statearr_30700_30722[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30697 === (1))){
var inst_30667 = cljs.core.vec(chs);
var inst_30668 = inst_30667;
var state_30696__$1 = (function (){var statearr_30701 = state_30696;
(statearr_30701[(10)] = inst_30668);

return statearr_30701;
})();
var statearr_30702_30723 = state_30696__$1;
(statearr_30702_30723[(2)] = null);

(statearr_30702_30723[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30697 === (4))){
var inst_30668 = (state_30696[(10)]);
var state_30696__$1 = state_30696;
return cljs.core.async.ioc_alts_BANG_(state_30696__$1,(7),inst_30668);
} else {
if((state_val_30697 === (6))){
var inst_30692 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30703_30724 = state_30696__$1;
(statearr_30703_30724[(2)] = inst_30692);

(statearr_30703_30724[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30697 === (3))){
var inst_30694 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30696__$1,inst_30694);
} else {
if((state_val_30697 === (2))){
var inst_30668 = (state_30696[(10)]);
var inst_30670 = cljs.core.count(inst_30668);
var inst_30671 = (inst_30670 > (0));
var state_30696__$1 = state_30696;
if(cljs.core.truth_(inst_30671)){
var statearr_30705_30725 = state_30696__$1;
(statearr_30705_30725[(1)] = (4));

} else {
var statearr_30706_30726 = state_30696__$1;
(statearr_30706_30726[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30697 === (11))){
var inst_30668 = (state_30696[(10)]);
var inst_30685 = (state_30696[(2)]);
var tmp30704 = inst_30668;
var inst_30668__$1 = tmp30704;
var state_30696__$1 = (function (){var statearr_30707 = state_30696;
(statearr_30707[(10)] = inst_30668__$1);

(statearr_30707[(11)] = inst_30685);

return statearr_30707;
})();
var statearr_30708_30727 = state_30696__$1;
(statearr_30708_30727[(2)] = null);

(statearr_30708_30727[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30697 === (9))){
var inst_30676 = (state_30696[(8)]);
var state_30696__$1 = state_30696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30696__$1,(11),out,inst_30676);
} else {
if((state_val_30697 === (5))){
var inst_30690 = cljs.core.async.close_BANG_(out);
var state_30696__$1 = state_30696;
var statearr_30709_30728 = state_30696__$1;
(statearr_30709_30728[(2)] = inst_30690);

(statearr_30709_30728[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30697 === (10))){
var inst_30688 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30710_30729 = state_30696__$1;
(statearr_30710_30729[(2)] = inst_30688);

(statearr_30710_30729[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30697 === (8))){
var inst_30677 = (state_30696[(9)]);
var inst_30668 = (state_30696[(10)]);
var inst_30675 = (state_30696[(7)]);
var inst_30676 = (state_30696[(8)]);
var inst_30680 = (function (){var c = inst_30677;
var v = inst_30676;
var vec__30673 = inst_30675;
var cs = inst_30668;
return ((function (c,v,vec__30673,cs,inst_30677,inst_30668,inst_30675,inst_30676,state_val_30697,c__16610__auto___30720,out){
return (function (p1__30611_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30611_SHARP_);
});
;})(c,v,vec__30673,cs,inst_30677,inst_30668,inst_30675,inst_30676,state_val_30697,c__16610__auto___30720,out))
})();
var inst_30681 = cljs.core.filterv(inst_30680,inst_30668);
var inst_30668__$1 = inst_30681;
var state_30696__$1 = (function (){var statearr_30711 = state_30696;
(statearr_30711[(10)] = inst_30668__$1);

return statearr_30711;
})();
var statearr_30712_30730 = state_30696__$1;
(statearr_30712_30730[(2)] = null);

(statearr_30712_30730[(1)] = (2));


return cljs.core.constant$keyword$97;
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
});})(c__16610__auto___30720,out))
;
return ((function (switch__16530__auto__,c__16610__auto___30720,out){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_30716 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30716[(0)] = state_machine__16531__auto__);

(statearr_30716[(1)] = (1));

return statearr_30716;
});
var state_machine__16531__auto____1 = (function (state_30696){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_30696);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e30717){if((e30717 instanceof Object)){
var ex__16534__auto__ = e30717;
var statearr_30718_30731 = state_30696;
(statearr_30718_30731[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30696);

return cljs.core.constant$keyword$97;
} else {
throw e30717;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__30732 = state_30696;
state_30696 = G__30732;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_30696){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_30696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___30720,out))
})();
var state__16612__auto__ = (function (){var statearr_30719 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_30719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___30720);

return statearr_30719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___30720,out))
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
var c__16610__auto___30828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___30828,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___30828,out){
return (function (state_30805){
var state_val_30806 = (state_30805[(1)]);
if((state_val_30806 === (7))){
var inst_30787 = (state_30805[(7)]);
var inst_30787__$1 = (state_30805[(2)]);
var inst_30788 = (inst_30787__$1 == null);
var inst_30789 = cljs.core.not(inst_30788);
var state_30805__$1 = (function (){var statearr_30807 = state_30805;
(statearr_30807[(7)] = inst_30787__$1);

return statearr_30807;
})();
if(inst_30789){
var statearr_30808_30829 = state_30805__$1;
(statearr_30808_30829[(1)] = (8));

} else {
var statearr_30809_30830 = state_30805__$1;
(statearr_30809_30830[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30806 === (1))){
var inst_30782 = (0);
var state_30805__$1 = (function (){var statearr_30810 = state_30805;
(statearr_30810[(8)] = inst_30782);

return statearr_30810;
})();
var statearr_30811_30831 = state_30805__$1;
(statearr_30811_30831[(2)] = null);

(statearr_30811_30831[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30806 === (4))){
var state_30805__$1 = state_30805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30805__$1,(7),ch);
} else {
if((state_val_30806 === (6))){
var inst_30800 = (state_30805[(2)]);
var state_30805__$1 = state_30805;
var statearr_30812_30832 = state_30805__$1;
(statearr_30812_30832[(2)] = inst_30800);

(statearr_30812_30832[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30806 === (3))){
var inst_30802 = (state_30805[(2)]);
var inst_30803 = cljs.core.async.close_BANG_(out);
var state_30805__$1 = (function (){var statearr_30813 = state_30805;
(statearr_30813[(9)] = inst_30802);

return statearr_30813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30805__$1,inst_30803);
} else {
if((state_val_30806 === (2))){
var inst_30782 = (state_30805[(8)]);
var inst_30784 = (inst_30782 < n);
var state_30805__$1 = state_30805;
if(cljs.core.truth_(inst_30784)){
var statearr_30814_30833 = state_30805__$1;
(statearr_30814_30833[(1)] = (4));

} else {
var statearr_30815_30834 = state_30805__$1;
(statearr_30815_30834[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30806 === (11))){
var inst_30782 = (state_30805[(8)]);
var inst_30792 = (state_30805[(2)]);
var inst_30793 = (inst_30782 + (1));
var inst_30782__$1 = inst_30793;
var state_30805__$1 = (function (){var statearr_30816 = state_30805;
(statearr_30816[(8)] = inst_30782__$1);

(statearr_30816[(10)] = inst_30792);

return statearr_30816;
})();
var statearr_30817_30835 = state_30805__$1;
(statearr_30817_30835[(2)] = null);

(statearr_30817_30835[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30806 === (9))){
var state_30805__$1 = state_30805;
var statearr_30818_30836 = state_30805__$1;
(statearr_30818_30836[(2)] = null);

(statearr_30818_30836[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30806 === (5))){
var state_30805__$1 = state_30805;
var statearr_30819_30837 = state_30805__$1;
(statearr_30819_30837[(2)] = null);

(statearr_30819_30837[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30806 === (10))){
var inst_30797 = (state_30805[(2)]);
var state_30805__$1 = state_30805;
var statearr_30820_30838 = state_30805__$1;
(statearr_30820_30838[(2)] = inst_30797);

(statearr_30820_30838[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30806 === (8))){
var inst_30787 = (state_30805[(7)]);
var state_30805__$1 = state_30805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30805__$1,(11),out,inst_30787);
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
});})(c__16610__auto___30828,out))
;
return ((function (switch__16530__auto__,c__16610__auto___30828,out){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_30824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30824[(0)] = state_machine__16531__auto__);

(statearr_30824[(1)] = (1));

return statearr_30824;
});
var state_machine__16531__auto____1 = (function (state_30805){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_30805);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e30825){if((e30825 instanceof Object)){
var ex__16534__auto__ = e30825;
var statearr_30826_30839 = state_30805;
(statearr_30826_30839[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30805);

return cljs.core.constant$keyword$97;
} else {
throw e30825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__30840 = state_30805;
state_30805 = G__30840;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_30805){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_30805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___30828,out))
})();
var state__16612__auto__ = (function (){var statearr_30827 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_30827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___30828);

return statearr_30827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___30828,out))
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
if(typeof cljs.core.async.t30853 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30853 = (function (ch,f,map_LT_,meta30854){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30854 = meta30854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30853.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30853.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t30853.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30853.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t30856 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30856 = (function (fn1,_,meta30854,map_LT_,f,ch,meta30857){
this.fn1 = fn1;
this._ = _;
this.meta30854 = meta30854;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30857 = meta30857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30856.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t30856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30841_SHARP_){
var G__30859 = (((p1__30841_SHARP_ == null))?null:(function (){var G__30860 = p1__30841_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30860) : self__.f.call(null,G__30860));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30859) : f1.call(null,G__30859));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30858){
var self__ = this;
var _30858__$1 = this;
return self__.meta30857;
});})(___$1))
;

cljs.core.async.t30856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30858,meta30857__$1){
var self__ = this;
var _30858__$1 = this;
return (new cljs.core.async.t30856(self__.fn1,self__._,self__.meta30854,self__.map_LT_,self__.f,self__.ch,meta30857__$1));
});})(___$1))
;

cljs.core.async.t30856.cljs$lang$type = true;

cljs.core.async.t30856.cljs$lang$ctorStr = "cljs.core.async/t30856";

cljs.core.async.t30856.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t30856");
});})(___$1))
;

cljs.core.async.__GT_t30856 = ((function (___$1){
return (function __GT_t30856(fn1__$1,___$2,meta30854__$1,map_LT___$1,f__$1,ch__$1,meta30857){
return (new cljs.core.async.t30856(fn1__$1,___$2,meta30854__$1,map_LT___$1,f__$1,ch__$1,meta30857));
});})(___$1))
;

}

return (new cljs.core.async.t30856(fn1,___$1,self__.meta30854,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3616__auto__ = ret;
if(cljs.core.truth_(and__3616__auto__)){
return !(((function (){var G__30861 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30861) : cljs.core.deref.call(null,G__30861));
})() == null));
} else {
return and__3616__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30862 = (function (){var G__30863 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30863) : cljs.core.deref.call(null,G__30863));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30862) : self__.f.call(null,G__30862));
})());
} else {
return ret;
}
});

cljs.core.async.t30853.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30853.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t30853.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t30853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30855){
var self__ = this;
var _30855__$1 = this;
return self__.meta30854;
});

cljs.core.async.t30853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30855,meta30854__$1){
var self__ = this;
var _30855__$1 = this;
return (new cljs.core.async.t30853(self__.ch,self__.f,self__.map_LT_,meta30854__$1));
});

cljs.core.async.t30853.cljs$lang$type = true;

cljs.core.async.t30853.cljs$lang$ctorStr = "cljs.core.async/t30853";

cljs.core.async.t30853.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t30853");
});

cljs.core.async.__GT_t30853 = (function __GT_t30853(ch__$1,f__$1,map_LT___$1,meta30854){
return (new cljs.core.async.t30853(ch__$1,f__$1,map_LT___$1,meta30854));
});

}

return (new cljs.core.async.t30853(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t30868 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30868 = (function (ch,f,map_GT_,meta30869){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30869 = meta30869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30868.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30868.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__30871 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30871) : self__.f.call(null,G__30871));
})(),fn1);
});

cljs.core.async.t30868.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30868.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t30868.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30868.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t30868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30870){
var self__ = this;
var _30870__$1 = this;
return self__.meta30869;
});

cljs.core.async.t30868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30870,meta30869__$1){
var self__ = this;
var _30870__$1 = this;
return (new cljs.core.async.t30868(self__.ch,self__.f,self__.map_GT_,meta30869__$1));
});

cljs.core.async.t30868.cljs$lang$type = true;

cljs.core.async.t30868.cljs$lang$ctorStr = "cljs.core.async/t30868";

cljs.core.async.t30868.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t30868");
});

cljs.core.async.__GT_t30868 = (function __GT_t30868(ch__$1,f__$1,map_GT___$1,meta30869){
return (new cljs.core.async.t30868(ch__$1,f__$1,map_GT___$1,meta30869));
});

}

return (new cljs.core.async.t30868(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t30876 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30876 = (function (ch,p,filter_GT_,meta30877){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30877 = meta30877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30876.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30876.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__30879 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__30879) : self__.p.call(null,G__30879));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t30876.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30876.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t30876.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30876.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t30876.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t30876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30878){
var self__ = this;
var _30878__$1 = this;
return self__.meta30877;
});

cljs.core.async.t30876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30878,meta30877__$1){
var self__ = this;
var _30878__$1 = this;
return (new cljs.core.async.t30876(self__.ch,self__.p,self__.filter_GT_,meta30877__$1));
});

cljs.core.async.t30876.cljs$lang$type = true;

cljs.core.async.t30876.cljs$lang$ctorStr = "cljs.core.async/t30876";

cljs.core.async.t30876.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t30876");
});

cljs.core.async.__GT_t30876 = (function __GT_t30876(ch__$1,p__$1,filter_GT___$1,meta30877){
return (new cljs.core.async.t30876(ch__$1,p__$1,filter_GT___$1,meta30877));
});

}

return (new cljs.core.async.t30876(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__16610__auto___30967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___30967,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___30967,out){
return (function (state_30945){
var state_val_30946 = (state_30945[(1)]);
if((state_val_30946 === (7))){
var inst_30941 = (state_30945[(2)]);
var state_30945__$1 = state_30945;
var statearr_30947_30968 = state_30945__$1;
(statearr_30947_30968[(2)] = inst_30941);

(statearr_30947_30968[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30946 === (1))){
var state_30945__$1 = state_30945;
var statearr_30948_30969 = state_30945__$1;
(statearr_30948_30969[(2)] = null);

(statearr_30948_30969[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30946 === (4))){
var inst_30927 = (state_30945[(7)]);
var inst_30927__$1 = (state_30945[(2)]);
var inst_30928 = (inst_30927__$1 == null);
var state_30945__$1 = (function (){var statearr_30949 = state_30945;
(statearr_30949[(7)] = inst_30927__$1);

return statearr_30949;
})();
if(cljs.core.truth_(inst_30928)){
var statearr_30950_30970 = state_30945__$1;
(statearr_30950_30970[(1)] = (5));

} else {
var statearr_30951_30971 = state_30945__$1;
(statearr_30951_30971[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30946 === (6))){
var inst_30927 = (state_30945[(7)]);
var inst_30932 = (function (){var G__30952 = inst_30927;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__30952) : p.call(null,G__30952));
})();
var state_30945__$1 = state_30945;
if(cljs.core.truth_(inst_30932)){
var statearr_30953_30972 = state_30945__$1;
(statearr_30953_30972[(1)] = (8));

} else {
var statearr_30954_30973 = state_30945__$1;
(statearr_30954_30973[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30946 === (3))){
var inst_30943 = (state_30945[(2)]);
var state_30945__$1 = state_30945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30945__$1,inst_30943);
} else {
if((state_val_30946 === (2))){
var state_30945__$1 = state_30945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30945__$1,(4),ch);
} else {
if((state_val_30946 === (11))){
var inst_30935 = (state_30945[(2)]);
var state_30945__$1 = state_30945;
var statearr_30955_30974 = state_30945__$1;
(statearr_30955_30974[(2)] = inst_30935);

(statearr_30955_30974[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30946 === (9))){
var state_30945__$1 = state_30945;
var statearr_30956_30975 = state_30945__$1;
(statearr_30956_30975[(2)] = null);

(statearr_30956_30975[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30946 === (5))){
var inst_30930 = cljs.core.async.close_BANG_(out);
var state_30945__$1 = state_30945;
var statearr_30957_30976 = state_30945__$1;
(statearr_30957_30976[(2)] = inst_30930);

(statearr_30957_30976[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30946 === (10))){
var inst_30938 = (state_30945[(2)]);
var state_30945__$1 = (function (){var statearr_30958 = state_30945;
(statearr_30958[(8)] = inst_30938);

return statearr_30958;
})();
var statearr_30959_30977 = state_30945__$1;
(statearr_30959_30977[(2)] = null);

(statearr_30959_30977[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30946 === (8))){
var inst_30927 = (state_30945[(7)]);
var state_30945__$1 = state_30945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30945__$1,(11),out,inst_30927);
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
});})(c__16610__auto___30967,out))
;
return ((function (switch__16530__auto__,c__16610__auto___30967,out){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_30963 = [null,null,null,null,null,null,null,null,null];
(statearr_30963[(0)] = state_machine__16531__auto__);

(statearr_30963[(1)] = (1));

return statearr_30963;
});
var state_machine__16531__auto____1 = (function (state_30945){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_30945);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e30964){if((e30964 instanceof Object)){
var ex__16534__auto__ = e30964;
var statearr_30965_30978 = state_30945;
(statearr_30965_30978[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30945);

return cljs.core.constant$keyword$97;
} else {
throw e30964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__30979 = state_30945;
state_30945 = G__30979;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_30945){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_30945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___30967,out))
})();
var state__16612__auto__ = (function (){var statearr_30966 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_30966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___30967);

return statearr_30966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___30967,out))
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
var c__16610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto__){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto__){
return (function (state_31149){
var state_val_31150 = (state_31149[(1)]);
if((state_val_31150 === (7))){
var inst_31145 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
var statearr_31151_31193 = state_31149__$1;
(statearr_31151_31193[(2)] = inst_31145);

(statearr_31151_31193[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (20))){
var inst_31115 = (state_31149[(7)]);
var inst_31126 = (state_31149[(2)]);
var inst_31127 = cljs.core.next(inst_31115);
var inst_31101 = inst_31127;
var inst_31102 = null;
var inst_31103 = (0);
var inst_31104 = (0);
var state_31149__$1 = (function (){var statearr_31152 = state_31149;
(statearr_31152[(8)] = inst_31103);

(statearr_31152[(9)] = inst_31102);

(statearr_31152[(10)] = inst_31104);

(statearr_31152[(11)] = inst_31101);

(statearr_31152[(12)] = inst_31126);

return statearr_31152;
})();
var statearr_31153_31194 = state_31149__$1;
(statearr_31153_31194[(2)] = null);

(statearr_31153_31194[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (1))){
var state_31149__$1 = state_31149;
var statearr_31154_31195 = state_31149__$1;
(statearr_31154_31195[(2)] = null);

(statearr_31154_31195[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (4))){
var inst_31090 = (state_31149[(13)]);
var inst_31090__$1 = (state_31149[(2)]);
var inst_31091 = (inst_31090__$1 == null);
var state_31149__$1 = (function (){var statearr_31155 = state_31149;
(statearr_31155[(13)] = inst_31090__$1);

return statearr_31155;
})();
if(cljs.core.truth_(inst_31091)){
var statearr_31156_31196 = state_31149__$1;
(statearr_31156_31196[(1)] = (5));

} else {
var statearr_31157_31197 = state_31149__$1;
(statearr_31157_31197[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (15))){
var state_31149__$1 = state_31149;
var statearr_31161_31198 = state_31149__$1;
(statearr_31161_31198[(2)] = null);

(statearr_31161_31198[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (21))){
var state_31149__$1 = state_31149;
var statearr_31162_31199 = state_31149__$1;
(statearr_31162_31199[(2)] = null);

(statearr_31162_31199[(1)] = (23));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (13))){
var inst_31103 = (state_31149[(8)]);
var inst_31102 = (state_31149[(9)]);
var inst_31104 = (state_31149[(10)]);
var inst_31101 = (state_31149[(11)]);
var inst_31111 = (state_31149[(2)]);
var inst_31112 = (inst_31104 + (1));
var tmp31158 = inst_31103;
var tmp31159 = inst_31102;
var tmp31160 = inst_31101;
var inst_31101__$1 = tmp31160;
var inst_31102__$1 = tmp31159;
var inst_31103__$1 = tmp31158;
var inst_31104__$1 = inst_31112;
var state_31149__$1 = (function (){var statearr_31163 = state_31149;
(statearr_31163[(8)] = inst_31103__$1);

(statearr_31163[(9)] = inst_31102__$1);

(statearr_31163[(14)] = inst_31111);

(statearr_31163[(10)] = inst_31104__$1);

(statearr_31163[(11)] = inst_31101__$1);

return statearr_31163;
})();
var statearr_31164_31200 = state_31149__$1;
(statearr_31164_31200[(2)] = null);

(statearr_31164_31200[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (22))){
var state_31149__$1 = state_31149;
var statearr_31165_31201 = state_31149__$1;
(statearr_31165_31201[(2)] = null);

(statearr_31165_31201[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (6))){
var inst_31090 = (state_31149[(13)]);
var inst_31099 = (function (){var G__31166 = inst_31090;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31166) : f.call(null,G__31166));
})();
var inst_31100 = cljs.core.seq(inst_31099);
var inst_31101 = inst_31100;
var inst_31102 = null;
var inst_31103 = (0);
var inst_31104 = (0);
var state_31149__$1 = (function (){var statearr_31167 = state_31149;
(statearr_31167[(8)] = inst_31103);

(statearr_31167[(9)] = inst_31102);

(statearr_31167[(10)] = inst_31104);

(statearr_31167[(11)] = inst_31101);

return statearr_31167;
})();
var statearr_31168_31202 = state_31149__$1;
(statearr_31168_31202[(2)] = null);

(statearr_31168_31202[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (17))){
var inst_31115 = (state_31149[(7)]);
var inst_31119 = cljs.core.chunk_first(inst_31115);
var inst_31120 = cljs.core.chunk_rest(inst_31115);
var inst_31121 = cljs.core.count(inst_31119);
var inst_31101 = inst_31120;
var inst_31102 = inst_31119;
var inst_31103 = inst_31121;
var inst_31104 = (0);
var state_31149__$1 = (function (){var statearr_31169 = state_31149;
(statearr_31169[(8)] = inst_31103);

(statearr_31169[(9)] = inst_31102);

(statearr_31169[(10)] = inst_31104);

(statearr_31169[(11)] = inst_31101);

return statearr_31169;
})();
var statearr_31170_31203 = state_31149__$1;
(statearr_31170_31203[(2)] = null);

(statearr_31170_31203[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (3))){
var inst_31147 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31149__$1,inst_31147);
} else {
if((state_val_31150 === (12))){
var inst_31135 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
var statearr_31171_31204 = state_31149__$1;
(statearr_31171_31204[(2)] = inst_31135);

(statearr_31171_31204[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (2))){
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31149__$1,(4),in$);
} else {
if((state_val_31150 === (23))){
var inst_31143 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
var statearr_31172_31205 = state_31149__$1;
(statearr_31172_31205[(2)] = inst_31143);

(statearr_31172_31205[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (19))){
var inst_31130 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
var statearr_31173_31206 = state_31149__$1;
(statearr_31173_31206[(2)] = inst_31130);

(statearr_31173_31206[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (11))){
var inst_31115 = (state_31149[(7)]);
var inst_31101 = (state_31149[(11)]);
var inst_31115__$1 = cljs.core.seq(inst_31101);
var state_31149__$1 = (function (){var statearr_31174 = state_31149;
(statearr_31174[(7)] = inst_31115__$1);

return statearr_31174;
})();
if(inst_31115__$1){
var statearr_31175_31207 = state_31149__$1;
(statearr_31175_31207[(1)] = (14));

} else {
var statearr_31176_31208 = state_31149__$1;
(statearr_31176_31208[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (9))){
var inst_31137 = (state_31149[(2)]);
var inst_31138 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31149__$1 = (function (){var statearr_31177 = state_31149;
(statearr_31177[(15)] = inst_31137);

return statearr_31177;
})();
if(cljs.core.truth_(inst_31138)){
var statearr_31178_31209 = state_31149__$1;
(statearr_31178_31209[(1)] = (21));

} else {
var statearr_31179_31210 = state_31149__$1;
(statearr_31179_31210[(1)] = (22));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (5))){
var inst_31093 = cljs.core.async.close_BANG_(out);
var state_31149__$1 = state_31149;
var statearr_31180_31211 = state_31149__$1;
(statearr_31180_31211[(2)] = inst_31093);

(statearr_31180_31211[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (14))){
var inst_31115 = (state_31149[(7)]);
var inst_31117 = cljs.core.chunked_seq_QMARK_(inst_31115);
var state_31149__$1 = state_31149;
if(inst_31117){
var statearr_31181_31212 = state_31149__$1;
(statearr_31181_31212[(1)] = (17));

} else {
var statearr_31182_31213 = state_31149__$1;
(statearr_31182_31213[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (16))){
var inst_31133 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
var statearr_31183_31214 = state_31149__$1;
(statearr_31183_31214[(2)] = inst_31133);

(statearr_31183_31214[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31150 === (10))){
var inst_31102 = (state_31149[(9)]);
var inst_31104 = (state_31149[(10)]);
var inst_31109 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31102,inst_31104);
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31149__$1,(13),out,inst_31109);
} else {
if((state_val_31150 === (18))){
var inst_31115 = (state_31149[(7)]);
var inst_31124 = cljs.core.first(inst_31115);
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31149__$1,(20),out,inst_31124);
} else {
if((state_val_31150 === (8))){
var inst_31103 = (state_31149[(8)]);
var inst_31104 = (state_31149[(10)]);
var inst_31106 = (inst_31104 < inst_31103);
var inst_31107 = inst_31106;
var state_31149__$1 = state_31149;
if(cljs.core.truth_(inst_31107)){
var statearr_31184_31215 = state_31149__$1;
(statearr_31184_31215[(1)] = (10));

} else {
var statearr_31185_31216 = state_31149__$1;
(statearr_31185_31216[(1)] = (11));

}

return cljs.core.constant$keyword$97;
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
});})(c__16610__auto__))
;
return ((function (switch__16530__auto__,c__16610__auto__){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_31189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31189[(0)] = state_machine__16531__auto__);

(statearr_31189[(1)] = (1));

return statearr_31189;
});
var state_machine__16531__auto____1 = (function (state_31149){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_31149);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e31190){if((e31190 instanceof Object)){
var ex__16534__auto__ = e31190;
var statearr_31191_31217 = state_31149;
(statearr_31191_31217[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31149);

return cljs.core.constant$keyword$97;
} else {
throw e31190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__31218 = state_31149;
state_31149 = G__31218;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_31149){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_31149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto__))
})();
var state__16612__auto__ = (function (){var statearr_31192 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_31192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_31192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto__))
);

return c__16610__auto__;
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
var c__16610__auto___31323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___31323,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___31323,out){
return (function (state_31298){
var state_val_31299 = (state_31298[(1)]);
if((state_val_31299 === (7))){
var inst_31293 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31300_31324 = state_31298__$1;
(statearr_31300_31324[(2)] = inst_31293);

(statearr_31300_31324[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31299 === (1))){
var inst_31275 = null;
var state_31298__$1 = (function (){var statearr_31301 = state_31298;
(statearr_31301[(7)] = inst_31275);

return statearr_31301;
})();
var statearr_31302_31325 = state_31298__$1;
(statearr_31302_31325[(2)] = null);

(statearr_31302_31325[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31299 === (4))){
var inst_31278 = (state_31298[(8)]);
var inst_31278__$1 = (state_31298[(2)]);
var inst_31279 = (inst_31278__$1 == null);
var inst_31280 = cljs.core.not(inst_31279);
var state_31298__$1 = (function (){var statearr_31303 = state_31298;
(statearr_31303[(8)] = inst_31278__$1);

return statearr_31303;
})();
if(inst_31280){
var statearr_31304_31326 = state_31298__$1;
(statearr_31304_31326[(1)] = (5));

} else {
var statearr_31305_31327 = state_31298__$1;
(statearr_31305_31327[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31299 === (6))){
var state_31298__$1 = state_31298;
var statearr_31306_31328 = state_31298__$1;
(statearr_31306_31328[(2)] = null);

(statearr_31306_31328[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31299 === (3))){
var inst_31295 = (state_31298[(2)]);
var inst_31296 = cljs.core.async.close_BANG_(out);
var state_31298__$1 = (function (){var statearr_31307 = state_31298;
(statearr_31307[(9)] = inst_31295);

return statearr_31307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31298__$1,inst_31296);
} else {
if((state_val_31299 === (2))){
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31298__$1,(4),ch);
} else {
if((state_val_31299 === (11))){
var inst_31278 = (state_31298[(8)]);
var inst_31287 = (state_31298[(2)]);
var inst_31275 = inst_31278;
var state_31298__$1 = (function (){var statearr_31308 = state_31298;
(statearr_31308[(10)] = inst_31287);

(statearr_31308[(7)] = inst_31275);

return statearr_31308;
})();
var statearr_31309_31329 = state_31298__$1;
(statearr_31309_31329[(2)] = null);

(statearr_31309_31329[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31299 === (9))){
var inst_31278 = (state_31298[(8)]);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31298__$1,(11),out,inst_31278);
} else {
if((state_val_31299 === (5))){
var inst_31278 = (state_31298[(8)]);
var inst_31275 = (state_31298[(7)]);
var inst_31282 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31278,inst_31275);
var state_31298__$1 = state_31298;
if(inst_31282){
var statearr_31311_31330 = state_31298__$1;
(statearr_31311_31330[(1)] = (8));

} else {
var statearr_31312_31331 = state_31298__$1;
(statearr_31312_31331[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31299 === (10))){
var inst_31290 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31313_31332 = state_31298__$1;
(statearr_31313_31332[(2)] = inst_31290);

(statearr_31313_31332[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31299 === (8))){
var inst_31275 = (state_31298[(7)]);
var tmp31310 = inst_31275;
var inst_31275__$1 = tmp31310;
var state_31298__$1 = (function (){var statearr_31314 = state_31298;
(statearr_31314[(7)] = inst_31275__$1);

return statearr_31314;
})();
var statearr_31315_31333 = state_31298__$1;
(statearr_31315_31333[(2)] = null);

(statearr_31315_31333[(1)] = (2));


return cljs.core.constant$keyword$97;
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
});})(c__16610__auto___31323,out))
;
return ((function (switch__16530__auto__,c__16610__auto___31323,out){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_31319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31319[(0)] = state_machine__16531__auto__);

(statearr_31319[(1)] = (1));

return statearr_31319;
});
var state_machine__16531__auto____1 = (function (state_31298){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_31298);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e31320){if((e31320 instanceof Object)){
var ex__16534__auto__ = e31320;
var statearr_31321_31334 = state_31298;
(statearr_31321_31334[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31298);

return cljs.core.constant$keyword$97;
} else {
throw e31320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__31335 = state_31298;
state_31298 = G__31335;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_31298){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_31298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___31323,out))
})();
var state__16612__auto__ = (function (){var statearr_31322 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_31322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___31323);

return statearr_31322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___31323,out))
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
var c__16610__auto___31473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___31473,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___31473,out){
return (function (state_31443){
var state_val_31444 = (state_31443[(1)]);
if((state_val_31444 === (7))){
var inst_31439 = (state_31443[(2)]);
var state_31443__$1 = state_31443;
var statearr_31445_31474 = state_31443__$1;
(statearr_31445_31474[(2)] = inst_31439);

(statearr_31445_31474[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31444 === (1))){
var inst_31406 = (new Array(n));
var inst_31407 = inst_31406;
var inst_31408 = (0);
var state_31443__$1 = (function (){var statearr_31446 = state_31443;
(statearr_31446[(7)] = inst_31408);

(statearr_31446[(8)] = inst_31407);

return statearr_31446;
})();
var statearr_31447_31475 = state_31443__$1;
(statearr_31447_31475[(2)] = null);

(statearr_31447_31475[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31444 === (4))){
var inst_31411 = (state_31443[(9)]);
var inst_31411__$1 = (state_31443[(2)]);
var inst_31412 = (inst_31411__$1 == null);
var inst_31413 = cljs.core.not(inst_31412);
var state_31443__$1 = (function (){var statearr_31448 = state_31443;
(statearr_31448[(9)] = inst_31411__$1);

return statearr_31448;
})();
if(inst_31413){
var statearr_31449_31476 = state_31443__$1;
(statearr_31449_31476[(1)] = (5));

} else {
var statearr_31450_31477 = state_31443__$1;
(statearr_31450_31477[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31444 === (15))){
var inst_31433 = (state_31443[(2)]);
var state_31443__$1 = state_31443;
var statearr_31451_31478 = state_31443__$1;
(statearr_31451_31478[(2)] = inst_31433);

(statearr_31451_31478[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31444 === (13))){
var state_31443__$1 = state_31443;
var statearr_31452_31479 = state_31443__$1;
(statearr_31452_31479[(2)] = null);

(statearr_31452_31479[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31444 === (6))){
var inst_31408 = (state_31443[(7)]);
var inst_31429 = (inst_31408 > (0));
var state_31443__$1 = state_31443;
if(cljs.core.truth_(inst_31429)){
var statearr_31453_31480 = state_31443__$1;
(statearr_31453_31480[(1)] = (12));

} else {
var statearr_31454_31481 = state_31443__$1;
(statearr_31454_31481[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31444 === (3))){
var inst_31441 = (state_31443[(2)]);
var state_31443__$1 = state_31443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31443__$1,inst_31441);
} else {
if((state_val_31444 === (12))){
var inst_31407 = (state_31443[(8)]);
var inst_31431 = cljs.core.vec(inst_31407);
var state_31443__$1 = state_31443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31443__$1,(15),out,inst_31431);
} else {
if((state_val_31444 === (2))){
var state_31443__$1 = state_31443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31443__$1,(4),ch);
} else {
if((state_val_31444 === (11))){
var inst_31423 = (state_31443[(2)]);
var inst_31424 = (new Array(n));
var inst_31407 = inst_31424;
var inst_31408 = (0);
var state_31443__$1 = (function (){var statearr_31455 = state_31443;
(statearr_31455[(7)] = inst_31408);

(statearr_31455[(10)] = inst_31423);

(statearr_31455[(8)] = inst_31407);

return statearr_31455;
})();
var statearr_31456_31482 = state_31443__$1;
(statearr_31456_31482[(2)] = null);

(statearr_31456_31482[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31444 === (9))){
var inst_31407 = (state_31443[(8)]);
var inst_31421 = cljs.core.vec(inst_31407);
var state_31443__$1 = state_31443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31443__$1,(11),out,inst_31421);
} else {
if((state_val_31444 === (5))){
var inst_31408 = (state_31443[(7)]);
var inst_31416 = (state_31443[(11)]);
var inst_31407 = (state_31443[(8)]);
var inst_31411 = (state_31443[(9)]);
var inst_31415 = (inst_31407[inst_31408] = inst_31411);
var inst_31416__$1 = (inst_31408 + (1));
var inst_31417 = (inst_31416__$1 < n);
var state_31443__$1 = (function (){var statearr_31457 = state_31443;
(statearr_31457[(11)] = inst_31416__$1);

(statearr_31457[(12)] = inst_31415);

return statearr_31457;
})();
if(cljs.core.truth_(inst_31417)){
var statearr_31458_31483 = state_31443__$1;
(statearr_31458_31483[(1)] = (8));

} else {
var statearr_31459_31484 = state_31443__$1;
(statearr_31459_31484[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31444 === (14))){
var inst_31436 = (state_31443[(2)]);
var inst_31437 = cljs.core.async.close_BANG_(out);
var state_31443__$1 = (function (){var statearr_31461 = state_31443;
(statearr_31461[(13)] = inst_31436);

return statearr_31461;
})();
var statearr_31462_31485 = state_31443__$1;
(statearr_31462_31485[(2)] = inst_31437);

(statearr_31462_31485[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31444 === (10))){
var inst_31427 = (state_31443[(2)]);
var state_31443__$1 = state_31443;
var statearr_31463_31486 = state_31443__$1;
(statearr_31463_31486[(2)] = inst_31427);

(statearr_31463_31486[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31444 === (8))){
var inst_31416 = (state_31443[(11)]);
var inst_31407 = (state_31443[(8)]);
var tmp31460 = inst_31407;
var inst_31407__$1 = tmp31460;
var inst_31408 = inst_31416;
var state_31443__$1 = (function (){var statearr_31464 = state_31443;
(statearr_31464[(7)] = inst_31408);

(statearr_31464[(8)] = inst_31407__$1);

return statearr_31464;
})();
var statearr_31465_31487 = state_31443__$1;
(statearr_31465_31487[(2)] = null);

(statearr_31465_31487[(1)] = (2));


return cljs.core.constant$keyword$97;
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
});})(c__16610__auto___31473,out))
;
return ((function (switch__16530__auto__,c__16610__auto___31473,out){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_31469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31469[(0)] = state_machine__16531__auto__);

(statearr_31469[(1)] = (1));

return statearr_31469;
});
var state_machine__16531__auto____1 = (function (state_31443){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_31443);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e31470){if((e31470 instanceof Object)){
var ex__16534__auto__ = e31470;
var statearr_31471_31488 = state_31443;
(statearr_31471_31488[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31443);

return cljs.core.constant$keyword$97;
} else {
throw e31470;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__31489 = state_31443;
state_31443 = G__31489;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_31443){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_31443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___31473,out))
})();
var state__16612__auto__ = (function (){var statearr_31472 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_31472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___31473);

return statearr_31472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___31473,out))
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
var c__16610__auto___31637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___31637,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___31637,out){
return (function (state_31606){
var state_val_31607 = (state_31606[(1)]);
if((state_val_31607 === (7))){
var inst_31602 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31608_31638 = state_31606__$1;
(statearr_31608_31638[(2)] = inst_31602);

(statearr_31608_31638[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31607 === (1))){
var inst_31565 = [];
var inst_31566 = inst_31565;
var inst_31567 = cljs.core.constant$keyword$112;
var state_31606__$1 = (function (){var statearr_31609 = state_31606;
(statearr_31609[(7)] = inst_31567);

(statearr_31609[(8)] = inst_31566);

return statearr_31609;
})();
var statearr_31610_31639 = state_31606__$1;
(statearr_31610_31639[(2)] = null);

(statearr_31610_31639[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31607 === (4))){
var inst_31570 = (state_31606[(9)]);
var inst_31570__$1 = (state_31606[(2)]);
var inst_31571 = (inst_31570__$1 == null);
var inst_31572 = cljs.core.not(inst_31571);
var state_31606__$1 = (function (){var statearr_31611 = state_31606;
(statearr_31611[(9)] = inst_31570__$1);

return statearr_31611;
})();
if(inst_31572){
var statearr_31612_31640 = state_31606__$1;
(statearr_31612_31640[(1)] = (5));

} else {
var statearr_31613_31641 = state_31606__$1;
(statearr_31613_31641[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31607 === (15))){
var inst_31596 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31614_31642 = state_31606__$1;
(statearr_31614_31642[(2)] = inst_31596);

(statearr_31614_31642[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31607 === (13))){
var state_31606__$1 = state_31606;
var statearr_31615_31643 = state_31606__$1;
(statearr_31615_31643[(2)] = null);

(statearr_31615_31643[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31607 === (6))){
var inst_31566 = (state_31606[(8)]);
var inst_31591 = inst_31566.length;
var inst_31592 = (inst_31591 > (0));
var state_31606__$1 = state_31606;
if(cljs.core.truth_(inst_31592)){
var statearr_31616_31644 = state_31606__$1;
(statearr_31616_31644[(1)] = (12));

} else {
var statearr_31617_31645 = state_31606__$1;
(statearr_31617_31645[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31607 === (3))){
var inst_31604 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31606__$1,inst_31604);
} else {
if((state_val_31607 === (12))){
var inst_31566 = (state_31606[(8)]);
var inst_31594 = cljs.core.vec(inst_31566);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31606__$1,(15),out,inst_31594);
} else {
if((state_val_31607 === (2))){
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31606__$1,(4),ch);
} else {
if((state_val_31607 === (11))){
var inst_31570 = (state_31606[(9)]);
var inst_31574 = (state_31606[(10)]);
var inst_31584 = (state_31606[(2)]);
var inst_31585 = [];
var inst_31586 = inst_31585.push(inst_31570);
var inst_31566 = inst_31585;
var inst_31567 = inst_31574;
var state_31606__$1 = (function (){var statearr_31618 = state_31606;
(statearr_31618[(7)] = inst_31567);

(statearr_31618[(11)] = inst_31586);

(statearr_31618[(8)] = inst_31566);

(statearr_31618[(12)] = inst_31584);

return statearr_31618;
})();
var statearr_31619_31646 = state_31606__$1;
(statearr_31619_31646[(2)] = null);

(statearr_31619_31646[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31607 === (9))){
var inst_31566 = (state_31606[(8)]);
var inst_31582 = cljs.core.vec(inst_31566);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31606__$1,(11),out,inst_31582);
} else {
if((state_val_31607 === (5))){
var inst_31567 = (state_31606[(7)]);
var inst_31570 = (state_31606[(9)]);
var inst_31574 = (state_31606[(10)]);
var inst_31574__$1 = (function (){var G__31620 = inst_31570;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31620) : f.call(null,G__31620));
})();
var inst_31575 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31574__$1,inst_31567);
var inst_31576 = cljs.core.keyword_identical_QMARK_(inst_31567,cljs.core.constant$keyword$112);
var inst_31577 = (inst_31575) || (inst_31576);
var state_31606__$1 = (function (){var statearr_31621 = state_31606;
(statearr_31621[(10)] = inst_31574__$1);

return statearr_31621;
})();
if(cljs.core.truth_(inst_31577)){
var statearr_31622_31647 = state_31606__$1;
(statearr_31622_31647[(1)] = (8));

} else {
var statearr_31623_31648 = state_31606__$1;
(statearr_31623_31648[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31607 === (14))){
var inst_31599 = (state_31606[(2)]);
var inst_31600 = cljs.core.async.close_BANG_(out);
var state_31606__$1 = (function (){var statearr_31625 = state_31606;
(statearr_31625[(13)] = inst_31599);

return statearr_31625;
})();
var statearr_31626_31649 = state_31606__$1;
(statearr_31626_31649[(2)] = inst_31600);

(statearr_31626_31649[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31607 === (10))){
var inst_31589 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31627_31650 = state_31606__$1;
(statearr_31627_31650[(2)] = inst_31589);

(statearr_31627_31650[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31607 === (8))){
var inst_31570 = (state_31606[(9)]);
var inst_31566 = (state_31606[(8)]);
var inst_31574 = (state_31606[(10)]);
var inst_31579 = inst_31566.push(inst_31570);
var tmp31624 = inst_31566;
var inst_31566__$1 = tmp31624;
var inst_31567 = inst_31574;
var state_31606__$1 = (function (){var statearr_31628 = state_31606;
(statearr_31628[(7)] = inst_31567);

(statearr_31628[(8)] = inst_31566__$1);

(statearr_31628[(14)] = inst_31579);

return statearr_31628;
})();
var statearr_31629_31651 = state_31606__$1;
(statearr_31629_31651[(2)] = null);

(statearr_31629_31651[(1)] = (2));


return cljs.core.constant$keyword$97;
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
});})(c__16610__auto___31637,out))
;
return ((function (switch__16530__auto__,c__16610__auto___31637,out){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_31633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31633[(0)] = state_machine__16531__auto__);

(statearr_31633[(1)] = (1));

return statearr_31633;
});
var state_machine__16531__auto____1 = (function (state_31606){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_31606);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e31634){if((e31634 instanceof Object)){
var ex__16534__auto__ = e31634;
var statearr_31635_31652 = state_31606;
(statearr_31635_31652[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31606);

return cljs.core.constant$keyword$97;
} else {
throw e31634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__31653 = state_31606;
state_31606 = G__31653;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_31606){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_31606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___31637,out))
})();
var state__16612__auto__ = (function (){var statearr_31636 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_31636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___31637);

return statearr_31636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___31637,out))
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
